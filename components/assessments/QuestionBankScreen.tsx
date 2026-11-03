import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import {
  PageHeader, Panel, Button, Field, TextInput, SelectInput, Badge, Alert, Modal, Spinner, EmptyState, Table,
  apiError, boardLabel,
} from '../common/ui';
import { useSubjects, useChapters, SyllabusFilters, OPTION_LETTERS, chapterLabel, downloadFromApi, Chapter, Subject } from './syllabus';

interface Question {
  _id: string;
  question: { en: string; ta: string };
  options: { en: string[]; ta: string[] };
  correctAnswer: number;
  explanation: { en: string; ta: string };
  difficulty: 'easy' | 'medium' | 'hard';
  marks: number;
  chapterId: string | null;
  schoolId: string | null;
  editable: boolean;
}

/** Question bank by class → subject → chapter, for school staff and the owner (shared bank). */
const QuestionBankScreen: React.FC = () => {
  const { currentUser } = useAuth();
  const isOwner = currentUser?.role === 'owner';
  const [board, setBoard] = useState(isOwner ? 'state_board' : currentUser?.board || '');
  const [filter, setFilter] = useState<{ classGrade: number | ''; subjectId: string; chapterId?: string }>({ classGrade: 9, subjectId: '', chapterId: '' });
  const [search, setSearch] = useState('');
  const [mine, setMine] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState<{ questions: Question[]; total: number; pages: number } | null>(null);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [modal, setModal] = useState<{ kind: 'edit' | 'upload'; question?: Question } | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  const subjects = useSubjects(filter.classGrade, isOwner ? board : undefined);
  const chapters = useChapters(filter.subjectId);
  const subject = subjects.find((s) => s._id === filter.subjectId);

  // Pick the first subject once the class's subjects arrive
  useEffect(() => {
    if (subjects.length && !subjects.some((s) => s._id === filter.subjectId)) {
      setFilter((f) => ({ ...f, subjectId: subjects[0]._id, chapterId: '' }));
    }
  }, [subjects, filter.subjectId]);

  const load = useCallback(async () => {
    if (!filter.subjectId) return setData({ questions: [], total: 0, pages: 0 });
    setData(null);
    try {
      const res = await api.get('/assessments/questions', {
        params: {
          board: isOwner ? board : undefined,
          subjectId: filter.subjectId,
          chapterId: filter.chapterId || undefined,
          search: search || undefined,
          mine: mine || undefined,
          page,
          limit: 25,
        },
      });
      setData({ questions: res.data.data, total: res.data.pagination.total, pages: res.data.pagination.pages });
    } catch (err) {
      setError(apiError(err, 'Could not load questions'));
    }
  }, [filter.subjectId, filter.chapterId, search, mine, page, board, isOwner]);

  useEffect(() => {
    const timer = setTimeout(load, search ? 300 : 0);
    return () => clearTimeout(timer);
  }, [load, search]);

  const done = (message: string) => {
    setModal(null);
    setNotice(message);
    setError('');
    load();
  };

  const remove = async (q: Question) => {
    if (!window.confirm('Remove this question? Past test results keep it.')) return;
    try {
      await api.delete(`/assessments/questions/${q._id}`);
      done('Question removed');
    } catch (err) {
      setError(apiError(err));
    }
  };

  const chapterName = (id: string | null) => {
    const c = chapters.find((ch) => ch._id === id);
    return c ? chapterLabel(c) : '—';
  };

  return (
    <div className="space-y-4">
      <PageHeader
        title={isOwner ? 'Shared question bank' : 'Question bank'}
        subtitle={
          isOwner
            ? 'Questions here are available to every school of the board.'
            : `${boardLabel(currentUser?.board)} · your school's questions plus the shared bank`
        }
        actions={
          <>
            <Button variant="secondary" disabled={!subject} onClick={() => setModal({ kind: 'upload' })}>
              Upload Excel
            </Button>
            <Button disabled={!subject} onClick={() => setModal({ kind: 'edit' })}>
              Add question
            </Button>
          </>
        }
      />
      {error && <Alert onClose={() => setError('')}>{error}</Alert>}
      {notice && (
        <Alert tone="success" onClose={() => setNotice('')}>
          {notice}
        </Alert>
      )}

      <Panel>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 mb-4">
          {isOwner && (
            <SelectInput aria-label="Board" value={board} onChange={(e) => { setBoard(e.target.value); setFilter({ ...filter, subjectId: '', chapterId: '' }); }}>
              <option value="state_board">State Board</option>
              <option value="cbse">CBSE</option>
            </SelectInput>
          )}
          <SyllabusFilters
            {...filter}
            subjects={subjects}
            chapters={chapters}
            onChange={(next) => {
              setFilter(next);
              setPage(1);
            }}
          />
          <TextInput aria-label="Search" placeholder="Search question text" value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} />
        </div>
        {!isOwner && (
          <label className="mb-4 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
            <input type="checkbox" checked={mine} onChange={(e) => { setMine(e.target.checked); setPage(1); }} className="rounded" />
            Only my school's questions
          </label>
        )}

        {!data ? (
          <Spinner />
        ) : !filter.subjectId ? (
          <EmptyState>Choose a class and subject.</EmptyState>
        ) : data.questions.length === 0 ? (
          <EmptyState>
            No questions yet{filter.chapterId ? ' in this chapter' : ''}. Add one, or upload an Excel file.
            {subject && subject.chapterCount === 0 && ' This subject has no chapters yet; they are set in the Syllabus.'}
          </EmptyState>
        ) : (
          <>
            <p className="mb-2 text-xs text-slate-500 dark:text-slate-400">{data.total} questions</p>
            <ul className="divide-y divide-slate-200 dark:divide-slate-700">
              {data.questions.map((q) => (
                <li key={q._id} className="py-3">
                  <button type="button" className="w-full text-left" onClick={() => setExpanded(expanded === q._id ? null : q._id)} aria-expanded={expanded === q._id}>
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-100">{q.question.en}</p>
                    {q.question.ta && <p className="text-sm text-slate-500 dark:text-slate-400">{q.question.ta}</p>}
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      <Badge>{chapterName(q.chapterId)}</Badge>
                      <Badge tone={q.difficulty === 'hard' ? 'red' : q.difficulty === 'easy' ? 'green' : 'amber'}>{q.difficulty}</Badge>
                      <Badge>{q.marks} mark{q.marks > 1 ? 's' : ''}</Badge>
                      {q.schoolId ? <Badge tone="indigo">My school</Badge> : <Badge>Shared</Badge>}
                    </div>
                  </button>
                  {expanded === q._id && (
                    <div className="mt-3 pl-3 border-l-2 border-indigo-200 dark:border-indigo-800 space-y-2">
                      <ol className="grid sm:grid-cols-2 gap-1 text-sm">
                        {q.options.en.map((o, i) => (
                          <li key={i} className={i === q.correctAnswer ? 'font-semibold text-emerald-700 dark:text-emerald-400' : 'text-slate-600 dark:text-slate-300'}>
                            {OPTION_LETTERS[i]}. {o}
                            {q.options.ta[i] && q.options.ta[i] !== o && <span className="text-slate-500"> / {q.options.ta[i]}</span>}
                            {i === q.correctAnswer && ' ✓'}
                          </li>
                        ))}
                      </ol>
                      {q.explanation.en && <p className="text-xs text-slate-500 dark:text-slate-400">Explanation: {q.explanation.en}</p>}
                      {q.editable && (
                        <div className="flex gap-1">
                          <Button size="sm" variant="ghost" onClick={() => setModal({ kind: 'edit', question: q })}>
                            Edit
                          </Button>
                          <Button size="sm" variant="ghost" onClick={() => remove(q)}>
                            Remove
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            {data.pages > 1 && (
              <div className="mt-4 flex items-center justify-center gap-3 text-sm">
                <Button size="sm" variant="secondary" disabled={page <= 1} onClick={() => setPage(page - 1)}>
                  Previous
                </Button>
                <span className="text-slate-600 dark:text-slate-300">
                  Page {page} of {data.pages}
                </span>
                <Button size="sm" variant="secondary" disabled={page >= data.pages} onClick={() => setPage(page + 1)}>
                  Next
                </Button>
              </div>
            )}
          </>
        )}
      </Panel>

      {modal?.kind === 'edit' && subject && (
        <QuestionForm
          board={isOwner ? board : undefined}
          subject={subject}
          chapters={chapters}
          defaultChapterId={filter.chapterId || ''}
          question={modal.question}
          onClose={() => setModal(null)}
          onDone={done}
        />
      )}
      {modal?.kind === 'upload' && subject && (
        <UploadQuestions board={isOwner ? board : undefined} subject={subject} chapters={chapters} defaultChapterId={filter.chapterId || ''} onClose={() => setModal(null)} onDone={done} />
      )}
    </div>
  );
};

const QuestionForm: React.FC<{
  board?: string;
  subject: Subject;
  chapters: Chapter[];
  defaultChapterId: string;
  question?: Question;
  onClose: () => void;
  onDone: (message: string) => void;
}> = ({ board, subject, chapters, defaultChapterId, question, onClose, onDone }) => {
  const [form, setForm] = useState(() => ({
    chapterId: question?.chapterId || defaultChapterId,
    questionEn: question?.question.en || '',
    questionTa: question?.question.ta || '',
    options: [0, 1, 2, 3].map((i) => question?.options.en[i] || ''),
    optionsTa: [0, 1, 2, 3].map((i) => (question?.options.ta[i] && question.options.ta[i] !== question.options.en[i] ? question.options.ta[i] : '')),
    correctAnswer: question?.correctAnswer ?? -1,
    explanationEn: question?.explanation.en || '',
    explanationTa: question?.explanation.ta || '',
    difficulty: question?.difficulty || 'medium',
    marks: String(question?.marks ?? 1),
  }));
  const [showTamil, setShowTamil] = useState(Boolean(question?.question.ta));
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  const setOption = (key: 'options' | 'optionsTa', i: number, value: string) => {
    const next = [...form[key]];
    next[i] = value;
    setForm({ ...form, [key]: next });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.correctAnswer < 0) return setError('Mark the correct answer');
    setSaving(true);
    setError('');
    const body: Record<string, any> = {
      board,
      subjectId: subject._id,
      chapterId: form.chapterId,
      questionEn: form.questionEn,
      questionTa: showTamil ? form.questionTa : '',
      correctAnswer: form.correctAnswer,
      explanationEn: form.explanationEn,
      explanationTa: showTamil ? form.explanationTa : '',
      difficulty: form.difficulty,
      marks: Number(form.marks),
    };
    OPTION_LETTERS.forEach((l, i) => {
      body[`option${l}En`] = form.options[i];
      body[`option${l}Ta`] = showTamil ? form.optionsTa[i] : '';
    });
    try {
      if (question) await api.put(`/assessments/questions/${question._id}`, body);
      else await api.post('/assessments/questions', body);
      onDone(question ? 'Question saved' : 'Question added');
    } catch (err) {
      setError(apiError(err));
    } finally {
      setSaving(false);
    }
  };

  return (
    <Modal title={`${question ? 'Edit' : 'Add'} question · ${subject.nameEn} ${subject.classGrade}th`} onClose={onClose} wide>
      <form onSubmit={submit} className="space-y-4">
        <Field label="Chapter">
          <SelectInput required value={form.chapterId} onChange={(e) => setForm({ ...form, chapterId: e.target.value })}>
            <option value="">Select chapter</option>
            {chapters.map((c) => (
              <option key={c._id} value={c._id}>
                {chapterLabel(c)}
              </option>
            ))}
          </SelectInput>
        </Field>
        <Field label="Question">
          <textarea
            required
            rows={3}
            value={form.questionEn}
            onChange={(e) => setForm({ ...form, questionEn: e.target.value })}
            className="w-full px-3 py-2 text-sm border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
          />
        </Field>
        <fieldset>
          <legend className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Options (select the correct one)</legend>
          <div className="space-y-2">
            {OPTION_LETTERS.map((l, i) => (
              <div key={l} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="correct"
                  aria-label={`Option ${l} is correct`}
                  checked={form.correctAnswer === i}
                  onChange={() => setForm({ ...form, correctAnswer: i })}
                />
                <span className="w-5 text-sm font-semibold text-slate-500">{l}</span>
                <TextInput required aria-label={`Option ${l}`} value={form.options[i]} onChange={(e) => setOption('options', i, e.target.value)} />
              </div>
            ))}
          </div>
        </fieldset>
        <Field label="Explanation (shown to students after the test)">
          <TextInput value={form.explanationEn} onChange={(e) => setForm({ ...form, explanationEn: e.target.value })} />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Difficulty">
            <SelectInput value={form.difficulty} onChange={(e) => setForm({ ...form, difficulty: e.target.value as any })}>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </SelectInput>
          </Field>
          <Field label="Marks">
            <TextInput type="number" min={1} max={20} required value={form.marks} onChange={(e) => setForm({ ...form, marks: e.target.value })} />
          </Field>
        </div>

        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <input type="checkbox" checked={showTamil} onChange={(e) => setShowTamil(e.target.checked)} className="rounded" />
          Add Tamil text (students can switch language)
        </label>
        {showTamil && (
          <div className="space-y-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/40">
            <Field label="கேள்வி (Question in Tamil)">
              <TextInput value={form.questionTa} onChange={(e) => setForm({ ...form, questionTa: e.target.value })} />
            </Field>
            <div className="grid sm:grid-cols-2 gap-2">
              {OPTION_LETTERS.map((l, i) => (
                <TextInput key={l} aria-label={`Option ${l} in Tamil`} placeholder={`${l} (Tamil) — empty = same as English`} value={form.optionsTa[i]} onChange={(e) => setOption('optionsTa', i, e.target.value)} />
              ))}
            </div>
            <Field label="விளக்கம் (Explanation in Tamil)">
              <TextInput value={form.explanationTa} onChange={(e) => setForm({ ...form, explanationTa: e.target.value })} />
            </Field>
          </div>
        )}

        {error && <Alert>{error}</Alert>}
        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={saving}>
            {saving ? 'Saving…' : question ? 'Save' : 'Add question'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

const UploadQuestions: React.FC<{
  board?: string;
  subject: Subject;
  chapters: Chapter[];
  defaultChapterId: string;
  onClose: () => void;
  onDone: (message: string) => void;
}> = ({ board, subject, chapters, defaultChapterId, onClose, onDone }) => {
  const [file, setFile] = useState<File | null>(null);
  const [chapterId, setChapterId] = useState(defaultChapterId);
  const [result, setResult] = useState<{ message: string; errors: { row: number; question: string; error: string }[] } | null>(null);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    setSaving(true);
    setError('');
    try {
      const form = new FormData();
      form.append('questionsFile', file);
      form.append('subjectId', subject._id);
      if (chapterId) form.append('chapterId', chapterId);
      if (board) form.append('board', board);
      const res = await api.post('/assessments/questions/upload', form, { headers: { 'Content-Type': 'multipart/form-data' }, timeout: 300000 });
      setResult({ message: res.data.message, errors: res.data.errors || [] });
    } catch (err) {
      setError(apiError(err));
    } finally {
      setSaving(false);
    }
  };

  if (result) {
    return (
      <Modal title="Upload finished" onClose={() => onDone(result.message)} wide>
        <div className="space-y-4">
          <Alert tone={result.errors.length ? 'info' : 'success'}>{result.message}</Alert>
          {result.errors.length > 0 && (
            <Table head={['Row', 'Question', 'Problem']}>
              {result.errors.map((e, i) => (
                <tr key={i}>
                  <td className="px-4 py-2">{e.row}</td>
                  <td className="px-4 py-2 max-w-xs truncate">{e.question || '—'}</td>
                  <td className="px-4 py-2">{e.error}</td>
                </tr>
              ))}
            </Table>
          )}
          <div className="flex justify-end">
            <Button onClick={() => onDone(result.message)}>Done</Button>
          </div>
        </div>
      </Modal>
    );
  }

  return (
    <Modal title={`Upload questions · ${subject.nameEn} ${subject.classGrade}th`} onClose={onClose}>
      <form onSubmit={submit} className="space-y-4">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          One question per row: <b>Chapter, Question, Option A–D, Answer</b> (A/B/C/D), and optionally Explanation, Difficulty, Marks and Tamil columns.
          The Chapter column is the chapter number.
        </p>
        <Button variant="ghost" size="sm" onClick={() => downloadFromApi('/assessments/questions/template', 'questions-template.xlsx').catch((err) => setError(apiError(err)))}>
          Download Excel template
        </Button>
        <Field label="Chapter for rows without a Chapter number">
          <SelectInput value={chapterId} onChange={(e) => setChapterId(e.target.value)}>
            <option value="">Use the Chapter column</option>
            {chapters.map((c) => (
              <option key={c._id} value={c._id}>
                {chapterLabel(c)}
              </option>
            ))}
          </SelectInput>
        </Field>
        <Field label="Excel file">
          <input
            type="file"
            accept=".xlsx,.xls,.csv"
            required
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="block w-full text-sm text-slate-600 dark:text-slate-300 file:mr-3 file:px-3 file:py-2 file:rounded-lg file:border-0 file:bg-indigo-50 file:text-indigo-700"
          />
        </Field>
        {error && <Alert>{error}</Alert>}
        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={!file || saving}>
            {saving ? 'Uploading…' : 'Upload'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default QuestionBankScreen;
