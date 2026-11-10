import { Response } from 'express';
import Anthropic from '@anthropic-ai/sdk';
import { AuthRequest } from '../middleware/auth';
import { query } from '../config/database';
import { isUuid } from '../db/table';
import { HttpError } from '../utils/tenancy';

// "Explain it another way": a short, simple explanation of a question the
// student got wrong, in Tamil or English, written by Claude. Explanations are
// saved per question, language and wrong answer, so each is generated once and
// reused for every student; students get a few new ones a day.
// Needs ANTHROPIC_API_KEY on the server; without it the feature stays hidden.

const MODEL = 'claude-opus-5-5';
const DAILY_LIMIT = Number(process.env.AI_EXPLAIN_DAILY_LIMIT) || 15;
const LETTERS = ['A', 'B', 'C', 'D'];

let client: Anthropic | null = null;
const getClient = () => {
  if (!process.env.ANTHROPIC_API_KEY) return null;
  client ||= new Anthropic();
  return client;
};

export const explainEnabled = () => Boolean(process.env.ANTHROPIC_API_KEY);

const SYSTEM = `You are a patient tutor for Tamil Nadu school students (classes 6-12).
A student answered a multiple-choice question wrongly and asked for the idea to be explained another way.
Write for a 14-year-old: short sentences, everyday words, one small example or comparison from daily life in Tamil Nadu if it helps.
Explain why the correct answer is right, and in one sentence why the student's choice is not.
Use a different approach from the textbook explanation you are given, not a reworded copy of it.
Keep to the facts in the question, options and textbook explanation; do not add facts you are unsure of.
At most 120 words, plain text, no headings or markdown. Write entirely in the language requested.`;

const sendError = (res: Response, error: any, label: string) => {
  if (error instanceof HttpError) return res.status(error.status).json({ success: false, message: error.message });
  console.error(`${label} error:`, error?.message || error);
  res.status(500).json({ success: false, message: 'Could not get an explanation right now. Please try again later.' });
};

// @route   GET /api/student/explain/status
export const explainStatus = async (req: AuthRequest, res: Response) => {
  const [usage] = await query(`SELECT count FROM ai_usage WHERE student_id = $1 AND day = (now() AT TIME ZONE 'Asia/Kolkata')::date`, [req.user._id]);
  res.status(200).json({ success: true, data: { enabled: explainEnabled(), left: Math.max(0, DAILY_LIMIT - (usage?.count || 0)), limit: DAILY_LIMIT } });
};

// @desc    Explain a question another way (saved, or newly written by Claude)
// @route   POST /api/student/explain  { questionId, selectedAnswer (stored option order, -1 if none), language: 'en' | 'ta' }
export const explain = async (req: AuthRequest, res: Response) => {
  try {
    const { questionId } = req.body || {};
    const language = req.body?.language === 'ta' ? 'ta' : 'en';
    const selected = Number.isInteger(req.body?.selectedAnswer) && req.body.selectedAnswer >= 0 && req.body.selectedAnswer <= 3 ? req.body.selectedAnswer : -1;
    if (!isUuid(questionId)) throw new HttpError(400, 'questionId is required');
    // Only questions the student has already answered (practice, test or Mistake Book), so open test questions cannot be explained early
    const [q] = await query(
      `SELECT q.id, q.question, q.options, q.correct_answer, q.explanation, s.name_en AS subject, c.name_en AS chapter
       FROM questions q LEFT JOIN subjects s ON s.id = q.subject_id LEFT JOIN chapters c ON c.id = q.chapter_id
       WHERE q.id = $1 AND (q.school_id IS NULL OR q.school_id = $2) AND (
         EXISTS (SELECT 1 FROM practice_progress p WHERE p.user_id = $3 AND p.question_id = q.id)
         OR EXISTS (SELECT 1 FROM mistake_book m WHERE m.student_id = $3 AND m.question_id = q.id)
       )`,
      [questionId, req.user.schoolId, req.user._id]
    );
    if (!q) throw new HttpError(404, 'Answer the question first, then ask for an explanation');
    const wrong = selected === q.correct_answer ? -1 : selected;

    const [saved] = await query('SELECT text FROM ai_explanations WHERE question_id = $1 AND language = $2 AND selected_answer = $3', [q.id, language, wrong]);
    if (saved) return res.status(200).json({ success: true, data: { text: saved.text, saved: true } });

    const anthropic = getClient();
    if (!anthropic) throw new HttpError(503, 'Explanations are not switched on for this school yet');
    const [usage] = await query(
      `INSERT INTO ai_usage (student_id, day, count) VALUES ($1, (now() AT TIME ZONE 'Asia/Kolkata')::date, 1)
       ON CONFLICT (student_id, day) DO UPDATE SET count = ai_usage.count + 1 RETURNING count`,
      [req.user._id]
    );
    if (usage.count > DAILY_LIMIT) throw new HttpError(429, `You have used today's ${DAILY_LIMIT} explanations. More tomorrow!`);

    const opts = (lang: 'en' | 'ta') => (lang === 'ta' && q.options.ta?.length ? q.options.ta : q.options.en) as string[];
    const shownLang = language === 'ta' && q.question.ta ? 'ta' : 'en';
    const prompt = [
      `Subject: ${q.subject || ''}${q.chapter ? ` - ${q.chapter}` : ''}`,
      `Question: ${q.question[shownLang] || q.question.en}`,
      ...opts(shownLang).map((o, i) => `${LETTERS[i]}. ${o}`),
      `Correct answer: ${LETTERS[q.correct_answer]}`,
      wrong >= 0 ? `The student chose: ${LETTERS[wrong]}` : 'The student did not answer or is unsure.',
      `Textbook explanation: ${q.explanation?.[shownLang] || q.explanation?.en || '(none)'}`,
      '',
      `Explain it another way, in ${language === 'ta' ? 'Tamil (தமிழ்), using the terms Tamil Nadu Tamil-medium textbooks use' : 'simple English'}.`,
    ].join('\n');

    // Server-side fallback: if the model declines, the API re-runs the request on a fallback model
    const response = await anthropic.beta.messages.create({
      model: MODEL,
      max_tokens: 2000,
      system: SYSTEM,
      output_config: { effort: 'low' },
      betas: ['server-side-fallback-2026-07-01'],
      fallbacks: 'default',
      messages: [{ role: 'user', content: prompt }],
    });
    if (response.stop_reason === 'refusal') throw new HttpError(422, 'Could not explain this question. Please ask your teacher.');
    const text = response.content
      .filter((b): b is Anthropic.Beta.BetaTextBlock => b.type === 'text')
      .map((b) => b.text)
      .join('\n')
      .trim();
    if (!text) throw new HttpError(502, 'Could not get an explanation right now. Please try again later.');
    await query(
      `INSERT INTO ai_explanations (question_id, language, selected_answer, text) VALUES ($1, $2, $3, $4) ON CONFLICT DO NOTHING`,
      [q.id, language, wrong, text]
    );
    res.status(200).json({ success: true, data: { text, saved: false, left: Math.max(0, DAILY_LIMIT - usage.count) } });
  } catch (error: any) {
    if (error instanceof Anthropic.APIError) {
      console.error('Explain API error:', error.status, error.message);
      return res.status(502).json({ success: false, message: 'Could not get an explanation right now. Please try again later.' });
    }
    sendError(res, error, 'Explain');
  }
};
