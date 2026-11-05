import React, { useCallback, useEffect, useMemo, useState } from 'react';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import {
  PageHeader, Panel, Button, Field, TextInput, SelectInput, Badge, Alert, Modal, Spinner, EmptyState, Table, StatTile,
  apiError, CLASS_GRADES, formatDate,
} from '../common/ui';
import { useSubjects, useChapters, chapterLabel, OPTION_LETTERS, useMyClasses, allowedGrades, canSetSubject, allowedSections } from './syllabus';

interface TestRow {
  _id: string;
  title: string;
  description?: string;
  classGrade: number;
  sections: string[];
  subjectId?: string;
  subjectName: string;
  questionCount: number;
  totalMarks: number;
  duration: number;
  startTime: string | null;
  endTime: string | null;
  isPublished: boolean;
  assignedStudents: number | null;
  completed: number;
  averagePercentage: number | null;
  alreadyUsed?: boolean;
}

const formatDateTime = (value: string | null) =>
  value ? new Date(value).toLocaleString('en-IN', { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' }) : '';

/** datetime-local value <-> ISO */
const toLocalInput = (iso: string | null) => {
  if (!iso) return '';
  const d = new Date(iso);
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
};
const fromLocalInput = (value: string) => (value ? new Date(value).toISOString() : null);

const testStatus = (t: TestRow) => {
  const now = Date.now();
  if (!t.isPublished) return <Badge>Draft</Badge>;
  if (t.startTime && new Date(t.startTime).getTime() > now) return <Badge tone="indigo">Upcoming</Badge>;
  if (t.endTime && new Date(t.endTime).getTime() <= now) return <Badge tone="slate">Closed</Badge>;
  return <Badge tone="green">Open</Badge>;
};

const classAndSections = (t: TestRow) => `${t.classGrade}th${t.sections?.length ? ` – ${t.sections.join(', ')}` : ' (all sections)'}`;

/** Class assessments: the school's tests (or the owner's ready-made ones). */
const TestsScreen: React.FC = () => {
  const { currentUser } = useAuth();
  const isOwner = currentUser?.role === 'owner';
  const myClasses = useMyClasses();
  const [tab, setTab] = useState<'ours' | 'ready'>('ours');
  const [board, setBoard] = useState('state_board');
  const [classGrade, setClassGrade] = useState<number | ''>('');
  const [tests, setTests] = useState<TestRow[] | null>(null);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [modal, setModal] = useState<{ kind: 'create' | 'schedule' | 'use'; test?: TestRow } | null>(null);
  const [resultsFor, setResultsFor] = useState<TestRow | null>(null);

  const load = useCallback(async () => {
    setTests(null);
    try {
      const res =
        tab === 'ready'
          ? await api.get('/assessments/ready-made', { params: { classGrade: classGrade || undefined } })
          : await api.get('/assessments/tests', { params: { classGrade: classGrade || undefined, board: isOwner ? board : undefined } });
      setTests(res.data.data);
    } catch (err) {
      setError(apiError(err, 'Could not load tests'));
    }
  }, [tab, classGrade, board, isOwner]);

  useEffect(() => {
    load();
  }, [load]);

  const done = (message: string) => {
    setModal(null);
    setNotice(message);
    setError('');
    if (tab === 'ready' && message.includes('added')) setTab('ours');
    else load();
  };

  const update = async (t: TestRow, body: Record<string, any>, message: string) => {
    try {
      await api.patch(`/assessments/tests/${t._id}`, body);
      done(message);
    } catch (err) {
      setError(apiError(err));
    }
  };

  const remove = async (t: TestRow) => {
    if (!window.confirm(`Remove "${t.title}"? Students will no longer see it. Results already submitted are kept.`)) return;
    try {
      await api.delete(`/assessments/tests/${t._id}`);
      done('Test removed');
    } catch (err) {
      setError(apiError(err));
    }
  };

  if (resultsFor) return <TestResults test={resultsFor} onBack={() => setResultsFor(null)} />;

  return (
    <div className="space-y-4">
      <PageHeader
        title={isOwner ? 'Ready-made tests' : 'Tests'}
        subtitle={isOwner ? 'Tests every school of the board can use for its classes.' : 'Class tests for your students. Students see a test once it is published.'}
        actions={<Button onClick={() => setModal({ kind: 'create' })}>Create test</Button>}
      />
      {error && <Alert onClose={() => setError('')}>{error}</Alert>}
      {notice && (
        <Alert tone="success" onClose={() => setNotice('')}>
          {notice}
        </Alert>
      )}

      <div className="flex flex-wrap items-center gap-3">
        {!isOwner && (
          <div className="flex gap-1 p-1 bg-slate-200/60 dark:bg-slate-800 rounded-lg" role="tablist">
            {(['ours', 'ready'] as const).map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={tab === t}
                onClick={() => setTab(t)}
                className={`px-3 py-1.5 text-sm rounded-md font-medium ${tab === t ? 'bg-white dark:bg-slate-700 shadow text-indigo-700 dark:text-indigo-300' : 'text-slate-600 dark:text-slate-300'}`}
              >
                {t === 'ours' ? 'Our tests' : 'Ready-made tests'}
              </button>
            ))}
          </div>
        )}
        {isOwner && (
          <SelectInput aria-label="Board" className="!w-auto" value={board} onChange={(e) => setBoard(e.target.value)}>
            <option value="state_board">State Board</option>
            <option value="cbse">CBSE</option>
          </SelectInput>
        )}
        <SelectInput aria-label="Class" className="!w-auto" value={classGrade} onChange={(e) => setClassGrade(e.target.value ? Number(e.target.value) : '')}>
          <option value="">All classes</option>
          {allowedGrades(myClasses, CLASS_GRADES).map((g) => (
            <option key={g} value={g}>
              {g}th
            </option>
          ))}
        </SelectInput>
      </div>

      {myClasses && myClasses.length === 0 && (
        <Alert tone="info">No classes are assigned to you yet, so you cannot set tests. Ask your school admin to assign your classes on the Teachers page.</Alert>
      )}

      <Panel>
        {!tests ? (
          <Spinner />
        ) : tests.length === 0 ? (
          <EmptyState>
            {tab === 'ready' ? 'No ready-made tests for this class yet.' : 'No tests yet. Create one, or use a ready-made test.'}
          </EmptyState>
        ) : (
          <Table head={tab === 'ready' || isOwner ? ['Test', 'Class', 'Questions', 'Duration', ''] : ['Test', 'Class', 'When', 'Status', 'Finished', '']}>
            {tests.filter((t) => tab !== 'ready' || canSetSubject(myClasses, t.classGrade, t.subjectId || '')).map((t) => (
              <tr key={t._id}>
                <td className="px-4 py-3 min-w-[12rem]">
                  <p className="font-medium text-slate-800 dark:text-slate-100">{t.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t.subjectName} · {t.questionCount} questions · {t.totalMarks} marks · {t.duration} min
                  </p>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">{tab === 'ready' || isOwner ? `${t.classGrade}th` : classAndSections(t)}</td>
                {tab === 'ready' || isOwner ? (
                  <>
                    <td className="px-4 py-3">{t.questionCount}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{t.duration} min</td>
                    <td className="px-4 py-3 text-right">
                      {isOwner ? (
                        <div className="flex justify-end gap-1">
                          <Button size="sm" variant="ghost" onClick={() => update(t, { isPublished: !t.isPublished }, t.isPublished ? 'Hidden from schools' : 'Published to schools')}>
                            {t.isPublished ? 'Unpublish' : 'Publish'}
                          </Button>
                          <Button size="sm" variant="ghost" onClick={() => remove(t)}>
                            Remove
                          </Button>
                        </div>
                      ) : (
                        <Button size="sm" variant={t.alreadyUsed ? 'secondary' : 'primary'} onClick={() => setModal({ kind: 'use', test: t })}>
                          {t.alreadyUsed ? 'Use again' : 'Use for my school'}
                        </Button>
                      )}
                    </td>
                  </>
                ) : (
                  <>
                    <td className="px-4 py-3 text-xs whitespace-nowrap">
                      {t.startTime || t.endTime ? (
                        <>
                          {t.startTime && <p>From {formatDateTime(t.startTime)}</p>}
                          {t.endTime && <p>Until {formatDateTime(t.endTime)}</p>}
                        </>
                      ) : (
                        'Anytime'
                      )}
                    </td>
                    <td className="px-4 py-3">{testStatus(t)}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {t.completed} / {t.assignedStudents ?? '—'}
                      {t.averagePercentage !== null && <p className="text-xs text-slate-500">avg {t.averagePercentage}%</p>}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap justify-end gap-1">
                        <Button size="sm" variant="ghost" onClick={() => setResultsFor(t)}>
                          Results
                        </Button>
                        <Button size="sm" variant="ghost" onClick={() => update(t, { isPublished: !t.isPublished }, t.isPublished ? 'Test hidden from students' : 'Test published')}>
                          {t.isPublished ? 'Unpublish' : 'Publish'}
                        </Button>
                        <Button size="sm" variant="ghost" onClick={() => setModal({ kind: 'schedule', test: t })}>
                          Edit
                        </Button>
                        <Button size="sm" variant="ghost" onClick={() => remove(t)}>
                          Remove
                        </Button>
                      </div>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </Table>
        )}
      </Panel>

      {modal?.kind === 'create' && <CreateTest isOwner={isOwner} board={board} onClose={() => setModal(null)} onDone={done} />}
      {(modal?.kind === 'schedule' || modal?.kind === 'use') && modal.test && (
        <ScheduleTest test={modal.test} mode={modal.kind} onClose={() => setModal(null)} onDone={done} />
      )}
    </div>
  );
};

/** Sections that have students in a class (for choosing who takes a test). */
const useSections = (classGrade: number | '', enabled: boolean) => {
  const [sections, setSections] = useState<{ section: string | null; students: number }[]>([]);
  useEffect(() => {
    if (!enabled || !classGrade) return setSections([]);
    api
      .get('/assessments/sections')
      .then((res) => setSections(res.data.data.filter((s: any) => s.classGrade === classGrade)))
      .catch(() => setSections([]));
  }, [classGrade, enabled]);
  return sections;
};

/** `allowed`: the only sections a teacher may pick (they then cannot choose "All sections"). */
const SectionPicker: React.FC<{ classGrade: number | ''; value: string[]; onChange: (v: string[]) => void; canList?: boolean; allowed?: string[] | null }> = ({
  classGrade,
  value,
  onChange,
  canList,
  allowed,
}) => {
  const sections = useSections(classGrade, Boolean(canList));
  const named = sections.filter((s) => s.section && (!allowed || allowed.includes(s.section)));
  // A teacher of some sections only: start with all of theirs ticked
  useEffect(() => {
    if (allowed && (value.length === 0 || value.some((v) => !allowed.includes(v)))) onChange(allowed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allowed?.join(',')]);
  const total = sections.reduce((sum, s) => sum + s.students, 0);
  const toggle = (s: string) => onChange(value.includes(s) ? value.filter((x) => x !== s) : [...value, s]);
  return (
    <fieldset>
      <legend className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Sections</legend>
      <div className="flex flex-wrap gap-3 text-sm text-slate-700 dark:text-slate-300">
        {!allowed && (
          <label className="flex items-center gap-1.5">
            <input type="checkbox" checked={value.length === 0} onChange={() => onChange([])} className="rounded" />
            All sections{canList && classGrade ? ` (${total} students)` : ''}
          </label>
        )}
        {named.map((s) => (
          <label key={s.section} className="flex items-center gap-1.5">
            <input
              type="checkbox"
              checked={value.includes(s.section!)}
              // A teacher keeps at least one of their sections
              onChange={() => (!allowed || !(value.length === 1 && value[0] === s.section) ? toggle(s.section!) : undefined)}
              className="rounded"
            />
            {s.section} ({s.students})
          </label>
        ))}
        {canList && classGrade && named.length === 0 && <span className="text-xs text-slate-500">No sections set for this class.</span>}
      </div>
      {allowed && <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Only your sections are shown.</p>}
    </fieldset>
  );
};

const CreateTest: React.FC<{ isOwner: boolean; board: string; onClose: () => void; onDone: (message: string) => void }> = ({ isOwner, board, onClose, onDone }) => {
  const { currentUser } = useAuth();
  const [form, setForm] = useState({
    title: '',
    classGrade: '' as number | '',
    subjectId: '',
    sections: [] as string[],
    chapterIds: [] as string[],
    mode: 'random' as 'random' | 'choose',
    count: '10',
    difficulty: 'mixed',
    duration: '30',
    startTime: '',
    endTime: '',
    isPublished: true,
  });
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [levelCounts, setLevelCounts] = useState<Record<string, Record<string, number>>>({});
  const [pool, setPool] = useState<{ _id: string; question: { en: string }; chapterId: string; marks: number; options: { en: string[] }; correctAnswer: number }[]>([]);
  const [chosen, setChosen] = useState<string[]>([]);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const myClasses = useMyClasses();
  const allSubjects = useSubjects(form.classGrade, isOwner ? board : undefined);
  // Teachers only see the classes and subjects they are assigned
  const subjects = allSubjects.filter((s) => canSetSubject(myClasses, form.classGrade, s._id));
  const grades = allowedGrades(myClasses, CLASS_GRADES);
  const sectionChoices = useMemo(() => allowedSections(myClasses, form.classGrade, form.subjectId), [myClasses, form.classGrade, form.subjectId]);
  const chapters = useChapters(form.subjectId);
  const set = (patch: Partial<typeof form>) => setForm((f) => ({ ...f, ...patch }));

  useEffect(() => {
    if (!form.subjectId) return setCounts({});
    api
      .get('/assessments/questions/counts', { params: { subjectId: form.subjectId, board: isOwner ? board : undefined } })
      .then((res) => {
        setCounts(res.data.data);
        setLevelCounts(res.data.byDifficulty || {});
      })
      .catch(() => setCounts({}));
  }, [form.subjectId, board, isOwner]);

  useEffect(() => {
    if (form.mode !== 'choose' || !form.subjectId) return setPool([]);
    api
      .get('/assessments/questions', { params: { subjectId: form.subjectId, board: isOwner ? board : undefined, limit: 200 } })
      .then((res) => setPool(res.data.data))
      .catch(() => setPool([]));
  }, [form.mode, form.subjectId, board, isOwner]);

  // Questions available in the chosen chapters, in total and per level
  const levels = useMemo(() => {
    const ids = form.chapterIds.length ? form.chapterIds : Object.keys(counts);
    const per: { total: number; easy: number; medium: number; hard: number } = { total: 0, easy: 0, medium: 0, hard: 0 };
    ids.forEach((id) => {
      per.total += counts[id] || 0;
      Object.entries(levelCounts[id] || {}).forEach(([level, n]) => {
        if (level === 'easy' || level === 'medium' || level === 'hard') per[level] += n;
      });
    });
    return per;
  }, [counts, levelCounts, form.chapterIds]);
  const available = form.difficulty === 'easy' || form.difficulty === 'medium' || form.difficulty === 'hard' ? levels[form.difficulty] : levels.total;
  const mixSplit = (n: number) => {
    const easy = Math.round(n * 0.4);
    const hard = Math.round(n * 0.2);
    return `${easy} easy, ${n - easy - hard} medium, ${hard} hard`;
  };
  const visiblePool = pool.filter((q) => !form.chapterIds.length || form.chapterIds.includes(q.chapterId));

  const toggleChapter = (id: string) =>
    set({ chapterIds: form.chapterIds.includes(id) ? form.chapterIds.filter((c) => c !== id) : [...form.chapterIds, id] });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (form.mode === 'choose' && chosen.length === 0) return setError('Choose at least one question');
    setSaving(true);
    try {
      const subject = subjects.find((s) => s._id === form.subjectId);
      await api.post('/assessments/tests', {
        board: isOwner ? board : undefined,
        title: form.title || `${subject?.nameEn} test`,
        classGrade: form.classGrade,
        subjectId: form.subjectId,
        sections: form.sections,
        chapterIds: form.chapterIds,
        ...(form.mode === 'random'
          ? { autoPick: { count: Number(form.count), difficulty: form.difficulty || undefined } }
          : { questionIds: chosen }),
        duration: Number(form.duration),
        startTime: fromLocalInput(form.startTime),
        endTime: fromLocalInput(form.endTime),
        isPublished: form.isPublished,
      });
      onDone(form.isPublished ? 'Test created and published to students' : 'Test saved as a draft');
    } catch (err) {
      setError(apiError(err));
    } finally {
      setSaving(false);
    }
  };

  return (
    <Modal title={isOwner ? 'Create ready-made test' : 'Create test'} onClose={onClose} wide>
      <form onSubmit={submit} className="space-y-4">
        <Field label="Title">
          <TextInput required placeholder="e.g. Unit Test 1 – Real Numbers" value={form.title} onChange={(e) => set({ title: e.target.value })} />
        </Field>
        <div className="grid sm:grid-cols-2 gap-3">
          <Field label="Class">
            <SelectInput required value={form.classGrade} onChange={(e) => set({ classGrade: e.target.value ? Number(e.target.value) : '', subjectId: '', chapterIds: [], sections: [] })}>
              <option value="">Select class</option>
              {grades.map((g) => (
                <option key={g} value={g}>
                  {g}th
                </option>
              ))}
            </SelectInput>
          </Field>
          <Field label="Subject">
            <SelectInput required disabled={!form.classGrade} value={form.subjectId} onChange={(e) => { set({ subjectId: e.target.value, chapterIds: [] }); setChosen([]); }}>
              <option value="">Select subject</option>
              {subjects.map((s) => (
                <option key={s._id} value={s._id}>
                  {s.nameEn}
                </option>
              ))}
            </SelectInput>
          </Field>
        </div>
        {!isOwner && <SectionPicker classGrade={form.classGrade} value={form.sections} onChange={(sections) => set({ sections })} canList allowed={sectionChoices} />}

        {form.subjectId && (
          <fieldset>
            <legend className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Chapters (none ticked = all)</legend>
            {chapters.length === 0 ? (
              <p className="text-sm text-slate-500">This subject has no chapters yet.</p>
            ) : (
              <div className="grid sm:grid-cols-2 gap-1 max-h-48 overflow-y-auto text-sm text-slate-700 dark:text-slate-300">
                {chapters.map((c) => (
                  <label key={c._id} className="flex items-center gap-1.5">
                    <input type="checkbox" checked={form.chapterIds.includes(c._id)} onChange={() => toggleChapter(c._id)} className="rounded" />
                    {chapterLabel(c)} <span className="text-xs text-slate-500">({counts[c._id] || 0})</span>
                  </label>
                ))}
              </div>
            )}
          </fieldset>
        )}

        {form.subjectId && (
          <fieldset className="space-y-2">
            <legend className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Questions</legend>
            <div className="flex gap-4 text-sm text-slate-700 dark:text-slate-300">
              <label className="flex items-center gap-1.5">
                <input type="radio" checked={form.mode === 'random'} onChange={() => set({ mode: 'random' })} /> Pick randomly
              </label>
              <label className="flex items-center gap-1.5">
                <input type="radio" checked={form.mode === 'choose'} onChange={() => set({ mode: 'choose' })} /> Choose myself
              </label>
            </div>
            {form.mode === 'random' ? (
              <div className="grid grid-cols-2 gap-3">
                <Field
                  label="Number of questions"
                  hint={`${available} available (${levels.easy} easy · ${levels.medium} medium · ${levels.hard} hard)`}
                >
                  <TextInput type="number" min={1} max={200} required value={form.count} onChange={(e) => set({ count: e.target.value })} />
                </Field>
                <Field label="Test mode" hint={form.difficulty === 'mixed' ? mixSplit(Number(form.count) || 0) : undefined}>
                  <SelectInput value={form.difficulty} onChange={(e) => set({ difficulty: e.target.value })}>
                    <option value="mixed">Mixed (40% easy · 40% medium · 20% hard)</option>
                    <option value="easy">Easy only</option>
                    <option value="medium">Medium only</option>
                    <option value="hard">Hard only</option>
                    <option value="">Any (random)</option>
                  </SelectInput>
                </Field>
              </div>
            ) : (
              <div className="max-h-64 overflow-y-auto border border-slate-200 dark:border-slate-700 rounded-lg divide-y divide-slate-200 dark:divide-slate-700">
                {visiblePool.length === 0 ? (
                  <p className="p-3 text-sm text-slate-500">No questions in the chosen chapters.</p>
                ) : (
                  visiblePool.map((q) => (
                    <label key={q._id} className="flex items-start gap-2 p-2 text-sm text-slate-700 dark:text-slate-300">
                      <input
                        type="checkbox"
                        className="mt-1 rounded"
                        checked={chosen.includes(q._id)}
                        onChange={() => setChosen(chosen.includes(q._id) ? chosen.filter((x) => x !== q._id) : [...chosen, q._id])}
                      />
                      <span>
                        {q.question.en}
                        <span className="block text-xs text-slate-500">
                          Answer: {OPTION_LETTERS[q.correctAnswer]}. {q.options.en[q.correctAnswer]} · {q.marks} mark{q.marks > 1 ? 's' : ''}
                        </span>
                      </span>
                    </label>
                  ))
                )}
              </div>
            )}
            {form.mode === 'choose' && <p className="text-xs text-slate-500">{chosen.length} chosen</p>}
          </fieldset>
        )}

        <div className="grid sm:grid-cols-3 gap-3">
          <Field label="Duration (minutes)">
            <TextInput type="number" min={1} max={300} required value={form.duration} onChange={(e) => set({ duration: e.target.value })} />
          </Field>
          {!isOwner && (
            <>
              <Field label="Opens (optional)">
                <TextInput type="datetime-local" value={form.startTime} onChange={(e) => set({ startTime: e.target.value })} />
              </Field>
              <Field label="Closes (optional)">
                <TextInput type="datetime-local" value={form.endTime} onChange={(e) => set({ endTime: e.target.value })} />
              </Field>
            </>
          )}
        </div>
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <input type="checkbox" checked={form.isPublished} onChange={(e) => set({ isPublished: e.target.checked })} className="rounded" />
          {isOwner ? 'Publish to schools now' : 'Publish to students now (untick to save as a draft)'}
        </label>
        {error && <Alert>{error}</Alert>}
        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={saving}>
            {saving ? 'Creating…' : 'Create test'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

/** Edit a school test's schedule/sections, or use a ready-made test for the school. */
const ScheduleTest: React.FC<{ test: TestRow; mode: 'schedule' | 'use'; onClose: () => void; onDone: (message: string) => void }> = ({ test, mode, onClose, onDone }) => {
  const { currentUser } = useAuth();
  const myClasses = useMyClasses();
  const sectionChoices = useMemo(() => allowedSections(myClasses, test.classGrade, test.subjectId || ''), [myClasses, test.classGrade, test.subjectId]);
  const [form, setForm] = useState({
    title: test.title,
    sections: mode === 'schedule' ? test.sections || [] : ([] as string[]),
    duration: String(test.duration),
    startTime: mode === 'schedule' ? toLocalInput(test.startTime) : '',
    endTime: mode === 'schedule' ? toLocalInput(test.endTime) : '',
  });
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    const body = { ...form, duration: Number(form.duration), startTime: fromLocalInput(form.startTime), endTime: fromLocalInput(form.endTime) };
    try {
      if (mode === 'use') {
        await api.post(`/assessments/tests/${test._id}/copy`, body);
        onDone(`"${form.title}" added to your tests and published`);
      } else {
        await api.patch(`/assessments/tests/${test._id}`, body);
        onDone('Test saved');
      }
    } catch (err) {
      setError(apiError(err));
    } finally {
      setSaving(false);
    }
  };

  return (
    <Modal title={mode === 'use' ? `Use "${test.title}"` : `Edit "${test.title}"`} onClose={onClose}>
      <form onSubmit={submit} className="space-y-4">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          {test.subjectName} · {test.classGrade}th · {test.questionCount} questions
        </p>
        <Field label="Title">
          <TextInput required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        </Field>
        <SectionPicker classGrade={test.classGrade} value={form.sections} onChange={(sections) => setForm({ ...form, sections })} canList allowed={sectionChoices} />
        <Field label="Duration (minutes)">
          <TextInput type="number" min={1} max={300} required value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Opens (optional)">
            <TextInput type="datetime-local" value={form.startTime} onChange={(e) => setForm({ ...form, startTime: e.target.value })} />
          </Field>
          <Field label="Closes (optional)">
            <TextInput type="datetime-local" value={form.endTime} onChange={(e) => setForm({ ...form, endTime: e.target.value })} />
          </Field>
        </div>
        {error && <Alert>{error}</Alert>}
        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={saving}>
            {saving ? 'Saving…' : mode === 'use' ? 'Add to our tests' : 'Save'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

interface Results {
  summary: { assigned: number; completed: number; inProgress: number; notStarted: number; average: number | null; highest: number | null; lowest: number | null };
  students: {
    _id: string;
    name: string;
    admissionNumber: string | null;
    section: string | null;
    status: string;
    marksObtained: number | null;
    totalMarks: number | null;
    percentage: number | null;
    correct: number | null;
    wrong: number | null;
    skipped: number | null;
    timeTaken: number | null;
    submittedAt: string | null;
  }[];
  questions: { number: number; question: { en: string }; chapter: number | null; correct: number; wrong: number; skipped: number; correctRate: number | null }[];
}

const TestResults: React.FC<{ test: TestRow; onBack: () => void }> = ({ test, onBack }) => {
  const [data, setData] = useState<Results | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    api
      .get(`/assessments/tests/${test._id}/results`)
      .then((res) => setData(res.data.data))
      .catch((err) => setError(apiError(err, 'Could not load results')));
  }, [test._id]);

  const exportCsv = () => {
    if (!data) return;
    const escape = (v: any) => `"${String(v ?? '').replace(/"/g, '""')}"`;
    const lines = [
      ['Admission no.', 'Name', 'Section', 'Status', 'Marks', 'Out of', 'Percentage', 'Correct', 'Wrong', 'Skipped', 'Time (min)', 'Submitted'],
      ...data.students.map((s) => [
        s.admissionNumber, s.name, s.section, s.status, s.marksObtained, s.totalMarks, s.percentage, s.correct, s.wrong, s.skipped,
        s.timeTaken !== null ? Math.round(s.timeTaken / 6) / 10 : '', s.submittedAt ? new Date(s.submittedAt).toLocaleString('en-IN') : '',
      ]),
    ];
    const url = URL.createObjectURL(new Blob(['﻿' + lines.map((l) => l.map(escape).join(',')).join('\r\n')], { type: 'text/csv;charset=utf-8' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = `${test.title.replace(/[^\w\- ]+/g, '')} results.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const statusBadge = (s: string) =>
    s === 'completed' ? <Badge tone="green">Submitted</Badge> : s === 'in-progress' ? <Badge tone="amber">Writing now</Badge> : <Badge>Not started</Badge>;

  return (
    <div className="space-y-4">
      <PageHeader
        title={test.title}
        subtitle={`${test.subjectName} · ${classAndSections(test)} · ${test.questionCount} questions · ${test.totalMarks} marks`}
        actions={
          <>
            <Button variant="secondary" onClick={onBack}>
              Back to tests
            </Button>
            <Button variant="secondary" disabled={!data} onClick={exportCsv}>
              Download results
            </Button>
          </>
        }
      />
      {error && <Alert>{error}</Alert>}
      {!data ? (
        !error && <Spinner />
      ) : (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <StatTile label="Submitted" value={`${data.summary.completed} / ${data.summary.assigned}`} hint={`${data.summary.notStarted} not started${data.summary.inProgress ? `, ${data.summary.inProgress} writing` : ''}`} />
            <StatTile label="Class average" value={data.summary.average !== null ? `${data.summary.average}%` : '—'} />
            <StatTile label="Highest" value={data.summary.highest !== null ? `${data.summary.highest}%` : '—'} />
            <StatTile label="Lowest" value={data.summary.lowest !== null ? `${data.summary.lowest}%` : '—'} tone={data.summary.lowest !== null && data.summary.lowest < 35 ? 'warn' : 'default'} />
          </div>
          <Panel title="Students">
            {data.students.length === 0 ? (
              <EmptyState>No active students in this class and section.</EmptyState>
            ) : (
              <Table head={['Admission no.', 'Name', 'Section', 'Status', 'Marks', '%', 'Right / Wrong / Skipped']}>
                {data.students.map((s) => (
                  <tr key={s._id}>
                    <td className="px-4 py-2 font-mono">{s.admissionNumber || '—'}</td>
                    <td className="px-4 py-2 font-medium text-slate-800 dark:text-slate-100">{s.name}</td>
                    <td className="px-4 py-2">{s.section || '—'}</td>
                    <td className="px-4 py-2">{statusBadge(s.status)}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{s.status === 'completed' ? `${s.marksObtained} / ${s.totalMarks}` : '—'}</td>
                    <td className={`px-4 py-2 font-semibold ${s.percentage !== null && s.percentage < 35 ? 'text-red-600' : ''}`}>{s.status === 'completed' ? `${s.percentage}%` : '—'}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{s.status === 'completed' ? `${s.correct} / ${s.wrong} / ${s.skipped}` : '—'}</td>
                  </tr>
                ))}
              </Table>
            )}
          </Panel>
          {data.summary.completed > 0 && (
            <Panel title="Questions: how many got each one right">
              <Table head={['#', 'Question', 'Ch.', 'Right', 'Wrong', 'Skipped', '% right']}>
                {data.questions.map((q) => (
                  <tr key={q.number} className={q.correctRate !== null && q.correctRate < 40 ? 'bg-red-50/60 dark:bg-red-900/10' : ''}>
                    <td className="px-4 py-2">{q.number}</td>
                    <td className="px-4 py-2 max-w-md">{q.question.en}</td>
                    <td className="px-4 py-2">{q.chapter ?? '—'}</td>
                    <td className="px-4 py-2">{q.correct}</td>
                    <td className="px-4 py-2">{q.wrong}</td>
                    <td className="px-4 py-2">{q.skipped}</td>
                    <td className="px-4 py-2 font-semibold">{q.correctRate !== null ? `${q.correctRate}%` : '—'}</td>
                  </tr>
                ))}
              </Table>
              <p className="mt-2 text-xs text-slate-500">Rows in red: fewer than 40% answered correctly — worth teaching again.</p>
            </Panel>
          )}
          <p className="text-xs text-slate-500">Results as of {formatDate(new Date().toISOString())}.</p>
        </>
      )}
    </div>
  );
};

export default TestsScreen;
