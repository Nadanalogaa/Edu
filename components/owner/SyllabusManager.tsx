import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import {
  PageHeader, Panel, Button, Field, TextInput, SelectInput, Alert, Modal, Spinner, EmptyState,
  apiError, CLASS_GRADES,
} from '../common/ui';

interface Subject {
  _id: string;
  code: string;
  nameEn: string;
  nameTa: string;
  chapterCount: number;
}

interface Chapter {
  _id: string;
  number: number;
  nameEn: string;
  nameTa: string;
}

/** Owner: the syllabus catalogue (board → class → subject → chapters). */
const SyllabusManager: React.FC = () => {
  const [board, setBoard] = useState('state_board');
  const [classGrade, setClassGrade] = useState(9);
  const [subjects, setSubjects] = useState<Subject[] | null>(null);
  const [selected, setSelected] = useState<Subject | null>(null);
  const [chapters, setChapters] = useState<Chapter[] | null>(null);
  const [error, setError] = useState('');
  const [modal, setModal] = useState<{ kind: 'chapter' | 'subject'; chapter?: Chapter } | null>(null);

  const loadSubjects = useCallback(async () => {
    setSubjects(null);
    try {
      const res = await api.get('/syllabus/subjects', { params: { board, classGrade } });
      setSubjects(res.data.data);
      setSelected((current) => res.data.data.find((s: Subject) => s.code === current?.code) || res.data.data[0] || null);
    } catch (err) {
      setError(apiError(err, 'Could not load subjects'));
    }
  }, [board, classGrade]);

  const loadChapters = useCallback(async () => {
    if (!selected) return setChapters([]);
    setChapters(null);
    try {
      const res = await api.get(`/syllabus/subjects/${selected._id}/chapters`);
      setChapters(res.data.data.chapters);
    } catch (err) {
      setError(apiError(err, 'Could not load chapters'));
    }
  }, [selected]);

  useEffect(() => {
    loadSubjects();
  }, [loadSubjects]);
  useEffect(() => {
    loadChapters();
  }, [loadChapters]);

  const removeChapter = async (chapter: Chapter) => {
    if (!window.confirm(`Remove chapter ${chapter.number}: ${chapter.nameEn}?`)) return;
    try {
      await api.delete(`/syllabus/chapters/${chapter._id}`);
      loadChapters();
      loadSubjects();
    } catch (err) {
      setError(apiError(err));
    }
  };

  const afterSave = () => {
    setModal(null);
    loadChapters();
    loadSubjects();
  };

  return (
    <div className="space-y-4">
      <PageHeader title="Syllabus" subtitle="Subjects and chapters for each board and class. Questions and tests are organised by these." />
      {error && <Alert onClose={() => setError('')}>{error}</Alert>}

      <div className="flex flex-wrap gap-3">
        <SelectInput aria-label="Board" className="!w-auto" value={board} onChange={(e) => setBoard(e.target.value)}>
          <option value="state_board">Tamil Nadu State Board</option>
          <option value="cbse">CBSE</option>
        </SelectInput>
        <div className="flex flex-wrap gap-1" role="tablist" aria-label="Class">
          {CLASS_GRADES.map((g) => (
            <button
              key={g}
              type="button"
              role="tab"
              aria-selected={g === classGrade}
              onClick={() => setClassGrade(g)}
              className={`px-3 py-2 text-sm rounded-lg font-medium ${
                g === classGrade ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600'
              }`}
            >
              {g}th
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <Panel
          title="Subjects"
          actions={
            <Button size="sm" variant="ghost" onClick={() => setModal({ kind: 'subject' })}>
              Add subject
            </Button>
          }
        >
          {!subjects ? (
            <Spinner />
          ) : (
            <ul className="space-y-1">
              {subjects.map((s) => (
                <li key={s._id}>
                  <button
                    type="button"
                    onClick={() => setSelected(s)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-sm ${
                      selected?._id === s._id ? 'bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300' : 'hover:bg-slate-50 dark:hover:bg-slate-700/50'
                    }`}
                  >
                    <span>
                      <span className="font-medium">{s.nameEn}</span>
                      <span className="ml-2 text-slate-500 dark:text-slate-400">{s.nameTa}</span>
                    </span>
                    <span className="text-xs text-slate-500">{s.chapterCount} ch.</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </Panel>

        <Panel
          className="lg:col-span-2"
          title={selected ? `${selected.nameEn} – ${classGrade}th chapters` : 'Chapters'}
          actions={
            selected && (
              <Button size="sm" onClick={() => setModal({ kind: 'chapter' })}>
                Add chapter
              </Button>
            )
          }
        >
          {!chapters ? (
            <Spinner />
          ) : chapters.length === 0 ? (
            <EmptyState>No chapters yet. Add them in the order of the textbook.</EmptyState>
          ) : (
            <ol className="divide-y divide-slate-200 dark:divide-slate-700">
              {chapters.map((c) => (
                <li key={c._id} className="flex items-center justify-between gap-3 py-2.5">
                  <div className="text-sm">
                    <span className="font-semibold text-slate-500 mr-2">{c.number}.</span>
                    <span className="text-slate-800 dark:text-slate-100">{c.nameEn}</span>
                    {c.nameTa && <p className="ml-6 text-slate-500 dark:text-slate-400">{c.nameTa}</p>}
                  </div>
                  <div className="flex gap-1 flex-shrink-0">
                    <Button size="sm" variant="ghost" onClick={() => setModal({ kind: 'chapter', chapter: c })}>
                      Edit
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => removeChapter(c)}>
                      Remove
                    </Button>
                  </div>
                </li>
              ))}
            </ol>
          )}
        </Panel>
      </div>

      {modal?.kind === 'chapter' && selected && (
        <ChapterForm
          subject={selected}
          chapter={modal.chapter}
          nextNumber={(chapters?.reduce((max, c) => Math.max(max, c.number), 0) || 0) + 1}
          onClose={() => setModal(null)}
          onDone={afterSave}
        />
      )}
      {modal?.kind === 'subject' && <SubjectForm board={board} classGrade={classGrade} onClose={() => setModal(null)} onDone={afterSave} />}
    </div>
  );
};

const ChapterForm: React.FC<{ subject: Subject; chapter?: Chapter; nextNumber: number; onClose: () => void; onDone: () => void }> = ({
  subject,
  chapter,
  nextNumber,
  onClose,
  onDone,
}) => {
  const [form, setForm] = useState({
    number: String(chapter?.number ?? nextNumber),
    nameEn: chapter?.nameEn || '',
    nameTa: chapter?.nameTa || '',
  });
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      const body = { ...form, number: Number(form.number) };
      if (chapter) await api.patch(`/syllabus/chapters/${chapter._id}`, body);
      else await api.post(`/syllabus/subjects/${subject._id}/chapters`, body);
      onDone();
    } catch (err) {
      setError(apiError(err));
    } finally {
      setSaving(false);
    }
  };

  return (
    <Modal title={chapter ? 'Edit chapter' : `Add chapter to ${subject.nameEn}`} onClose={onClose}>
      <form onSubmit={submit} className="space-y-4">
        <Field label="Chapter number">
          <TextInput type="number" min={1} required value={form.number} onChange={(e) => setForm({ ...form, number: e.target.value })} />
        </Field>
        <Field label="Name (English)">
          <TextInput required value={form.nameEn} onChange={(e) => setForm({ ...form, nameEn: e.target.value })} />
        </Field>
        <Field label="Name (Tamil)">
          <TextInput value={form.nameTa} onChange={(e) => setForm({ ...form, nameTa: e.target.value })} />
        </Field>
        {error && <Alert>{error}</Alert>}
        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={saving}>
            {saving ? 'Saving…' : 'Save'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

const SubjectForm: React.FC<{ board: string; classGrade: number; onClose: () => void; onDone: () => void }> = ({ board, classGrade, onClose, onDone }) => {
  const [form, setForm] = useState({ nameEn: '', nameTa: '' });
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      await api.post('/syllabus/subjects', { board, classGrade, ...form });
      onDone();
    } catch (err) {
      setError(apiError(err));
    } finally {
      setSaving(false);
    }
  };

  return (
    <Modal title={`Add subject to ${classGrade}th`} onClose={onClose}>
      <form onSubmit={submit} className="space-y-4">
        <Field label="Name (English)">
          <TextInput required value={form.nameEn} onChange={(e) => setForm({ ...form, nameEn: e.target.value })} />
        </Field>
        <Field label="Name (Tamil)">
          <TextInput value={form.nameTa} onChange={(e) => setForm({ ...form, nameTa: e.target.value })} />
        </Field>
        {error && <Alert>{error}</Alert>}
        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={saving}>
            {saving ? 'Saving…' : 'Add subject'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default SyllabusManager;
