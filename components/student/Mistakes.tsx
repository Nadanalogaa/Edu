import React, { useEffect, useMemo, useState } from 'react';
import api from '../../services/api';
import { useLanguage } from '../../context/LanguageContext';
import { Alert, Spinner, Button, apiError, formatDate } from '../common/ui';
import QuestionImage from '../common/QuestionImage';
import { TextbookButton } from '../common/TextbookViewer';
import AskTeacher from '../common/AskTeacher';
import ExplainAnother from '../common/ExplainAnother';
import ReadAloud from '../common/ReadAloud';
import PracticeRunner from './PracticeRunner';

// Every question the student got wrong, in class tests and in practice, with
// the right answer, the explanation and the textbook page. Answering one
// correctly (in practice, a test, or "I understand it now", which asks it once
// more with the options reshuffled) marks it fixed. A week later each fixed
// mistake comes back once as a check: still right = remembered, wrong = back to revise.

const TEXT = {
  en: {
    title: 'Mistake Book', subtitle: 'Every question you got wrong in tests and practice. Study each one, then answer it again to clear it. Cleared ones come back once a week later for a quick check.',
    toRevise: 'To revise', fromTests: 'From tests', fromPractice: 'From practice', fixed: 'Fixed',
    practise: 'Practise my mistakes', practiseHint: 'Questions you got wrong, one by one. Answer correctly to clear them.', practiseSubject: 'in {s}',
    status: { open: 'To revise', due: '🔁 Check again', done: 'Understood', all: 'All' } as Record<string, string>,
    source: { '': 'All', test: '📝 Tests', practice: '🎯 Practice' } as Record<string, string>,
    allSubjects: 'All subjects', none: 'No mistakes here. Keep it up!', noneOpen: 'Nothing to revise. Great job! 🎉',
    yours: 'Your answer', correct: 'Correct answer', explanation: 'Why', markDone: 'I understand it now', more: 'Show more',
    test: 'Test', practice: 'Practice', wrongTimes: 'Wrong {n}×', fixedIn: { practice: '✓ Fixed in practice', test: '✓ Fixed in a test', check: '✓ Understood and checked', hand: '✓ Understood' } as Record<string, string>,
    levels: { easy: 'Easy', medium: 'Medium', hard: 'Hard' } as Record<string, string>, back: 'Back to Mistake Book',
    dueTitle: (n: number) => `🔁 ${n} question${n === 1 ? '' : 's'} to check again`, dueHint: 'You fixed these a week ago. Do you still remember them?', checkNow: 'Check now',
    checkPrompt: 'Prove it: answer once more. The options are in a new order.', checkAgain: 'Check again', cancel: 'Cancel',
    result: {
      fixed: '✓ Right! Cleared from your Mistake Book. It will come back once in a week to check.',
      stillOpen: '✗ Not yet. It stays in your Mistake Book. Read the explanation and the textbook page, then try again.',
      remembered: '🧠 You remembered it! Well done.',
      reopened: '✗ Forgotten. It is back in "To revise".',
    } as Record<string, string>,
    ok: 'OK', checkOn: (d: string) => `Check again on ${d}`, rememberedLabel: '🧠 Remembered a week later', forgotLabel: 'Forgotten after a week',
  },
  ta: {
    title: 'தவறுப் புத்தகம்', subtitle: 'தேர்வுகளிலும் பயிற்சியிலும் தவறிய எல்லாக் கேள்விகளும். ஒவ்வொன்றையும் படித்து, மீண்டும் சரியாக விடையளித்து நீக்குங்கள். நீக்கியவை ஒரு வாரம் கழித்து ஒருமுறை சரிபார்க்க வரும்.',
    toRevise: 'திருப்புதலுக்கு', fromTests: 'தேர்வுகளிலிருந்து', fromPractice: 'பயிற்சியிலிருந்து', fixed: 'சரியாக்கியவை',
    practise: 'என் தவறுகளைப் பயிற்சி செய்', practiseHint: 'தவறிய கேள்விகள் ஒவ்வொன்றாக. சரியாக விடையளித்தால் நீங்கும்.', practiseSubject: '{s} இல்',
    status: { open: 'திருப்புதலுக்கு', due: '🔁 மீண்டும் சரிபார்', done: 'புரிந்தவை', all: 'அனைத்தும்' } as Record<string, string>,
    source: { '': 'அனைத்தும்', test: '📝 தேர்வுகள்', practice: '🎯 பயிற்சி' } as Record<string, string>,
    allSubjects: 'எல்லா பாடங்களும்', none: 'இங்கே தவறுகள் இல்லை. தொடருங்கள்!', noneOpen: 'திருப்ப வேண்டியவை இல்லை. அருமை! 🎉',
    yours: 'உங்கள் விடை', correct: 'சரியான விடை', explanation: 'ஏன்', markDone: 'இப்போது புரிந்தது', more: 'மேலும் காட்டு',
    test: 'தேர்வு', practice: 'பயிற்சி', wrongTimes: '{n} முறை தவறு', fixedIn: { practice: '✓ பயிற்சியில் சரியாக்கப்பட்டது', test: '✓ தேர்வில் சரியாக்கப்பட்டது', check: '✓ புரிந்து சரிபார்க்கப்பட்டது', hand: '✓ புரிந்தது' } as Record<string, string>,
    levels: { easy: 'எளிது', medium: 'நடுத்தரம்', hard: 'கடினம்' } as Record<string, string>, back: 'தவறுப் புத்தகத்துக்குத் திரும்பு',
    dueTitle: (n: number) => `🔁 மீண்டும் சரிபார்க்க ${n} கேள்விகள்`, dueHint: 'ஒரு வாரம் முன்பு இவற்றைச் சரியாக்கினீர்கள். இன்னும் நினைவிருக்கிறதா?', checkNow: 'இப்போது சரிபார்',
    checkPrompt: 'மீண்டும் ஒருமுறை விடையளியுங்கள். விடைகள் புதிய வரிசையில் உள்ளன.', checkAgain: 'மீண்டும் சரிபார்', cancel: 'ரத்து',
    result: {
      fixed: '✓ சரி! தவறுப் புத்தகத்திலிருந்து நீக்கப்பட்டது. ஒரு வாரம் கழித்து ஒருமுறை சரிபார்க்க மீண்டும் வரும்.',
      stillOpen: '✗ இன்னும் இல்லை. தவறுப் புத்தகத்திலேயே இருக்கும். விளக்கத்தையும் பாடநூல் பக்கத்தையும் படித்து மீண்டும் முயலுங்கள்.',
      remembered: '🧠 நினைவில் வைத்திருக்கிறீர்கள்! அருமை.',
      reopened: '✗ மறந்துவிட்டது. மீண்டும் "திருப்புதலுக்கு" பகுதியில் சேர்ந்தது.',
    } as Record<string, string>,
    ok: 'சரி', checkOn: (d: string) => `${d} அன்று மீண்டும் சரிபார்க்க`, rememberedLabel: '🧠 ஒரு வாரம் கழித்தும் நினைவில்', forgotLabel: 'ஒரு வாரத்தில் மறந்தது',
  },
};

const LETTERS = ['A', 'B', 'C', 'D'];
const LEVEL_CHIP: Record<string, string> = {
  easy: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-300',
  medium: 'bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-300',
  hard: 'bg-rose-100 text-rose-800 dark:bg-rose-500/20 dark:text-rose-300',
};
const PAGE = 20;

const Segmented: React.FC<{ value: string; options: [string, string][]; onChange: (v: string) => void; label: string }> = ({ value, options, onChange, label }) => (
  <div className="inline-flex flex-wrap gap-1 p-1 rounded-xl bg-slate-200/60 dark:bg-slate-800" role="tablist" aria-label={label}>
    {options.map(([v, text]) => (
      <button key={v || 'all'} type="button" role="tab" aria-selected={value === v} onClick={() => onChange(v)}
        className={`px-3 py-1.5 rounded-lg text-sm font-semibold ${value === v ? 'bg-white dark:bg-slate-700 shadow text-indigo-700 dark:text-indigo-300' : 'text-slate-600 dark:text-slate-300'}`}>
        {text}
      </button>
    ))}
  </div>
);

/**
 * Asks a Mistake Book question once more with the options in a new order; the
 * server checks the answer. Used for "I understand it now" and the week-later check.
 */
const CheckQuestion: React.FC<{ mistake: any; t: (typeof TEXT)['en']; ta: boolean; onCancel?: () => void; onDone: () => void }> = ({ mistake, t, ta, onCancel, onDone }) => {
  const q = mistake.question;
  // order[shown position] = stored position
  const order = useMemo(() => [0, 1, 2, 3].filter((i) => q.options.en[i] !== undefined).sort(() => Math.random() - 0.5), [q]);
  const [picked, setPicked] = useState<number | null>(null);
  const [answer, setAnswer] = useState<{ correct: boolean; correctAnswer: number; result: string } | null>(null);
  const [error, setError] = useState('');
  const optionText = (i: number) => (ta && q.options.ta?.[i] ? q.options.ta[i] : q.options.en[i]);

  const choose = async (shown: number) => {
    if (answer || picked !== null) return;
    setPicked(shown);
    try {
      const res = await api.post(`/student/mistakes/${mistake._id}/check`, { selectedAnswer: order[shown] });
      setAnswer(res.data.data);
    } catch (err) {
      setPicked(null);
      setError(apiError(err));
    }
  };

  return (
    <div className="mt-3 rounded-2xl border-2 border-indigo-200 dark:border-indigo-500/40 bg-indigo-50/60 dark:bg-indigo-500/10 p-3 sm:p-4">
      {!answer && <p className="text-sm font-semibold text-indigo-800 dark:text-indigo-200">{t.checkPrompt}</p>}
      <div className="mt-2 grid sm:grid-cols-2 gap-2">
        {order.map((stored, shown) => {
          const isRight = answer && stored === answer.correctAnswer;
          const isPicked = picked === shown;
          const tone = answer
            ? isRight
              ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-200'
              : isPicked
                ? 'border-rose-400 bg-rose-50 dark:bg-rose-900/30 text-rose-800 dark:text-rose-200'
                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 opacity-70'
            : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-indigo-400';
          return (
            <button key={stored} type="button" disabled={!!answer || picked !== null} onClick={() => choose(shown)}
              className={`text-left px-3 py-2.5 rounded-xl border-2 text-sm font-medium flex gap-2 ${tone}`}>
              <span className="font-bold">{LETTERS[shown]}.</span>
              <span>{optionText(stored)}</span>
              {answer && isRight && <span className="ml-auto">✓</span>}
              {answer && isPicked && !isRight && <span className="ml-auto">✗</span>}
            </button>
          );
        })}
      </div>
      {error && <div className="mt-2"><Alert>{error}</Alert></div>}
      {answer ? (
        <div className="mt-3 space-y-2">
          <p className={`text-sm font-semibold ${answer.correct ? 'text-emerald-700 dark:text-emerald-300' : 'text-rose-700 dark:text-rose-300'}`}>{t.result[answer.result]}</p>
          {!answer.correct && (ta && q.explanation?.ta ? q.explanation.ta : q.explanation?.en) && (
            <p className="text-sm text-slate-600 dark:text-slate-300">
              <b>💡 {t.explanation}:</b> {ta && q.explanation?.ta ? q.explanation.ta : q.explanation.en}
            </p>
          )}
          <div className="flex justify-end">
            <Button size="sm" onClick={onDone}>
              {t.ok}
            </Button>
          </div>
        </div>
      ) : (
        onCancel && (
          <div className="mt-2 flex justify-end">
            <Button size="sm" variant="ghost" onClick={onCancel}>
              {t.cancel}
            </Button>
          </div>
        )
      )}
    </div>
  );
};

const Mistakes: React.FC<{ onOpenPractice?: () => void }> = () => {
  const { language } = useLanguage();
  const ta = language === 'ta';
  const t = TEXT[ta ? 'ta' : 'en'];
  const [data, setData] = useState<{ items: any[]; summary: any; subjects: any[] } | null>(null);
  const [status, setStatus] = useState('open');
  const [source, setSource] = useState('');
  const [subjectId, setSubjectId] = useState('');
  const [limit, setLimit] = useState(PAGE);
  const [error, setError] = useState('');
  const [session, setSession] = useState<{ questions: any[]; key: number } | null>(null);
  const [starting, setStarting] = useState(false);
  const [reload, setReload] = useState(0);
  const [checking, setChecking] = useState<string | null>(null);

  useEffect(() => {
    if (session) return;
    api
      .get('/student/mistakes', { params: { status, source: source || undefined, subjectId: subjectId || undefined, limit } })
      .then((res) => setData({ items: res.data.data, summary: res.data.summary, subjects: res.data.subjects }))
      .catch((err) => setError(apiError(err)));
  }, [status, source, subjectId, limit, session, reload]);

  const text = (v: { en: string; ta?: string }) => (ta && v?.ta ? v.ta : v?.en);
  const option = (q: any, i: number) => (i >= 0 ? `${LETTERS[i]}. ${ta && q.options.ta?.[i] ? q.options.ta[i] : q.options.en[i]}` : '—');
  const subjectName = (s: any) => (ta && s?.nameTa ? s.nameTa : s?.nameEn);
  const chosenSubject = data?.subjects.find((s) => s.subjectId === subjectId);
  // Practise my mistakes also brings the ones due for their week-later check
  const openHere = subjectId ? (chosenSubject?.open || 0) + (chosenSubject?.due || 0) : (data?.summary.open || 0) + (data?.summary.due || 0);
  const due = data?.summary.due || 0;

  const practise = async () => {
    setStarting(true);
    setError('');
    try {
      const res = await api.get('/student/practice/questions', { params: { mistakes: 1, subjectId: subjectId || undefined, count: 20 } });
      if (res.data.data.length) setSession({ questions: res.data.data, key: Date.now() });
    } catch (err) {
      setError(apiError(err));
    } finally {
      setStarting(false);
    }
  };

  const checked = () => {
    setChecking(null);
    setReload((n) => n + 1);
  };

  if (session) {
    return (
      <PracticeRunner
        key={session.key}
        questions={session.questions}
        title={t.title}
        subject={chosenSubject ? chosenSubject.nameEn : t.allSubjects}
        mode="mistakes"
        onExit={() => setSession(null)}
        exitLabel={t.back}
        onAgain={openHere > 0 ? practise : undefined}
      />
    );
  }

  const s = data?.summary;
  const tiles = [
    { label: t.toRevise, value: s?.open, tone: 'from-rose-500 to-orange-500', icon: '📕' },
    { label: t.fromTests, value: s?.openTests, tone: 'from-indigo-500 to-violet-500', icon: '📝' },
    { label: t.fromPractice, value: s?.openPractice, tone: 'from-sky-500 to-cyan-500', icon: '🎯' },
    { label: t.fixed, value: s?.fixed, tone: 'from-emerald-500 to-teal-500', icon: '✅' },
  ];

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">{t.title}</h1>
        <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{t.subtitle}</p>
      </div>
      {error && <Alert onClose={() => setError('')}>{error}</Alert>}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {tiles.map((tile) => (
          <div key={tile.label} className="rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-3 sm:p-4 flex items-center gap-3">
            <span className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tile.tone} flex items-center justify-center text-lg`} aria-hidden="true">{tile.icon}</span>
            <div>
              <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">{tile.value ?? '–'}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{tile.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Fixed mistakes due for their week-later check */}
      {due > 0 && status !== 'due' && (
        <div className="rounded-3xl p-4 sm:p-5 border-2 border-amber-300 dark:border-amber-600/60 bg-amber-50 dark:bg-amber-900/20 flex flex-wrap items-center gap-3">
          <div className="flex-1 min-w-[12rem]">
            <p className="text-lg font-bold text-amber-900 dark:text-amber-200">{t.dueTitle(due)}</p>
            <p className="text-sm text-amber-800 dark:text-amber-300">{t.dueHint}</p>
          </div>
          <Button onClick={() => { setStatus('due'); setLimit(PAGE); }}>{t.checkNow}</Button>
        </div>
      )}

      {/* Practise my mistakes */}
      <div className="rounded-3xl p-4 sm:p-5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white flex flex-wrap items-center gap-4">
        <div className="flex-1 min-w-[12rem]">
          <p className="text-lg font-bold">
            ▶ {t.practise}
            {chosenSubject && <span className="font-normal"> · {t.practiseSubject.replace('{s}', subjectName(chosenSubject))}</span>}
          </p>
          <p className="text-sm text-indigo-100">{t.practiseHint}</p>
        </div>
        <button type="button" disabled={starting || !openHere} onClick={practise}
          className="px-5 py-2.5 rounded-xl bg-white text-indigo-700 font-bold shadow disabled:opacity-60 disabled:cursor-not-allowed">
          {t.practise} ({Math.min(openHere, 20)})
        </button>
      </div>

      {/* Filters */}
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <Segmented label="Status" value={status} onChange={(v) => { setStatus(v); setLimit(PAGE); }} options={(due > 0 || status === 'due' ? (['open', 'due', 'done', 'all'] as const) : (['open', 'done', 'all'] as const)).map((v): [string, string] => [v, v === 'due' ? `${t.status.due} (${due})` : t.status[v]])} />
          <Segmented label="Source" value={source} onChange={(v) => { setSource(v); setLimit(PAGE); }} options={(['', 'test', 'practice'] as const).map((v) => [v, t.source[v]])} />
        </div>
        {!!data?.subjects.length && (
          <div className="flex flex-wrap gap-2">
            {[{ subjectId: '', nameEn: t.allSubjects, nameTa: t.allSubjects, open: data.summary.open }, ...data.subjects].map((sub) => (
              <button key={sub.subjectId || 'all'} type="button" aria-pressed={subjectId === sub.subjectId} onClick={() => { setSubjectId(sub.subjectId); setLimit(PAGE); }}
                className={`px-3 py-1.5 rounded-full text-sm font-medium border-2 ${subjectId === sub.subjectId ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200'}`}>
                {subjectName(sub)} {sub.open > 0 && <span className="ml-1 px-1.5 rounded-full bg-rose-100 dark:bg-rose-500/20 text-rose-700 dark:text-rose-300 text-xs">{sub.open}</span>}
              </button>
            ))}
          </div>
        )}
      </div>

      {!data ? (
        <Spinner />
      ) : data.items.length === 0 ? (
        <div className="rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-10 text-center text-slate-500 dark:text-slate-400">
          {status === 'open' || status === 'due' ? t.noneOpen : t.none}
        </div>
      ) : (
        <div className="space-y-3">
          {data.items.map((m) => {
            const q = m.question;
            // A due check, or "I understand it now": ask again without showing the answer first
            const asking = m.due || checking === m._id;
            return (
              <article key={m._id} className={`rounded-3xl bg-white dark:bg-slate-800 border p-4 sm:p-5 ${m.isReviewed ? 'border-emerald-200 dark:border-emerald-900' : 'border-slate-200 dark:border-slate-700'}`}>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className={`px-2 py-0.5 rounded-full font-semibold ${m.source === 'practice' ? 'bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-300' : 'bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300'}`}>
                    {m.source === 'practice' ? `🎯 ${t.practice}` : `📝 ${m.testTitle || t.test}`}
                  </span>
                  {q.difficulty && <span className={`px-2 py-0.5 rounded-full font-semibold ${LEVEL_CHIP[q.difficulty] || ''}`}>{t.levels[q.difficulty] || q.difficulty}</span>}
                  {m.wrongCount > 1 && <span className="px-2 py-0.5 rounded-full font-semibold bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300">{t.wrongTimes.replace('{n}', m.wrongCount)}</span>}
                  <span className="text-slate-500 dark:text-slate-400">
                    {ta && q.subjectTa ? q.subjectTa : q.subject}
                    {q.chapterName?.en && ` · ${q.chapter ? `${q.chapter}. ` : ''}${text(q.chapterName)}`} · {formatDate(m.updatedAt)}
                  </span>
                </div>
                <div className="mt-2 flex items-start gap-2">
                  <p className="flex-1 text-base font-semibold text-slate-800 dark:text-slate-100 whitespace-pre-line">{text(q.question)}</p>
                  <ReadAloud lang={ta ? 'ta' : 'en'} text={[text(q.question), text(q.explanation)].filter(Boolean).join('. ')} />
                </div>
                <QuestionImage src={q.imageUrl} />
                {asking ? (
                  <CheckQuestion key={m._id + reload} mistake={m} t={t} ta={ta} onCancel={m.due ? undefined : () => setChecking(null)} onDone={checked} />
                ) : (
                <>
                <div className="mt-3 grid sm:grid-cols-2 gap-2 text-sm">
                  <p className="px-3 py-2 rounded-xl bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300">
                    ✗ {t.yours}: {option(q, m.selectedAnswer)}
                  </p>
                  <p className="px-3 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300">
                    ✓ {t.correct}: {option(q, q.correctAnswer)}
                  </p>
                </div>
                {text(q.explanation) && (
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    <b>💡 {t.explanation}:</b> {text(q.explanation)}
                  </p>
                )}
                </>
                )}
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <TextbookButton textbook={q.textbook} subject={ta && q.subjectTa ? q.subjectTa : q.subject} />
                    {!asking && <AskTeacher key={m._id} questionId={q._id} />}
                    {!asking && <ExplainAnother key={`x${m._id}`} questionId={q._id} selectedAnswer={m.selectedAnswer} />}
                  </div>
                  {m.isReviewed ? (
                    !m.due && (
                      <span className="text-right text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                        {t.fixedIn[m.fixedIn || 'hand']}
                        <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">
                          {m.recheckedAt ? (m.recheckPassed ? t.rememberedLabel : t.forgotLabel) : m.recheckAt ? t.checkOn(formatDate(m.recheckAt)) : ''}
                        </span>
                      </span>
                    )
                  ) : (
                    !asking && (
                      <Button size="sm" variant="secondary" onClick={() => setChecking(m._id)}>
                        {t.markDone}
                      </Button>
                    )
                  )}
                </div>
              </article>
            );
          })}
          {data.items.length >= limit && (
            <div className="flex justify-center">
              <Button variant="secondary" onClick={() => setLimit(limit + PAGE)}>
                {t.more}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Mistakes;
