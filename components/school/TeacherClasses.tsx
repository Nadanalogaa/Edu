import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Button, Field, SelectInput, TextInput, Alert, Modal, apiError, classLabel, CLASS_GRADES } from '../common/ui';
import { useSubjects } from '../assessments/syllabus';

// Which classes, sections and subjects a teacher looks after. A teacher sees
// reports, practice and Mistake Books only for these, and sets tests only for
// them. "Whole school" suits a small school where one teacher handles everything.

export interface Assignment {
  _id?: string;
  classGrade: number | null;
  section: string | null;
  subjectId: string | null;
  subjectEn?: string | null;
}
export interface AssignmentValue {
  all: boolean;
  items: { classGrade: number | ''; section: string; subjectId: string }[];
}

export const toValue = (assignments: Assignment[] = []): AssignmentValue => {
  if (!assignments.length) return { all: false, items: [{ classGrade: '', section: '', subjectId: '' }] };
  if (assignments.some((a) => !a.classGrade && !a.section && !a.subjectId)) return { all: true, items: [] };
  return { all: false, items: assignments.map((a) => ({ classGrade: a.classGrade ?? '', section: a.section ?? '', subjectId: a.subjectId ?? '' })) };
};

/** The body sent to the server: whole school, or the filled-in rows. */
export const toPayload = (value: AssignmentValue) =>
  value.all
    ? { all: true }
    : { items: value.items.filter((i) => i.classGrade).map((i) => ({ classGrade: i.classGrade, section: i.section.trim() || null, subjectId: i.subjectId || null })) };

/** Short chips for the Teachers table. */
export const AssignmentChips: React.FC<{ assignments?: Assignment[] }> = ({ assignments = [] }) => {
  if (!assignments.length) return <span className="text-xs font-semibold text-amber-700 dark:text-amber-300">⚠ No classes yet</span>;
  if (assignments.some((a) => !a.classGrade && !a.section && !a.subjectId)) {
    return <span className="text-[11px] px-2 py-0.5 rounded-full bg-violet-100 text-violet-800 dark:bg-violet-500/20 dark:text-violet-200">Whole school</span>;
  }
  return (
    <div className="flex flex-wrap gap-1">
      {assignments.map((a, i) => (
        <span key={a._id || i} className="text-[11px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-800 dark:bg-indigo-500/15 dark:text-indigo-200 whitespace-nowrap">
          {a.classGrade ? classLabel(a.classGrade, a.section) : 'All classes'} · {a.subjectEn || 'All subjects'}
        </span>
      ))}
    </div>
  );
};

const Row: React.FC<{
  item: AssignmentValue['items'][number];
  sections: string[];
  onChange: (item: AssignmentValue['items'][number]) => void;
  onRemove?: () => void;
}> = ({ item, sections, onChange, onRemove }) => {
  const subjects = useSubjects(item.classGrade);
  return (
    <div className="grid grid-cols-[1fr_1fr_1.4fr_auto] gap-2 items-end">
      <Field label="Class">
        <SelectInput value={item.classGrade} onChange={(e) => onChange({ classGrade: e.target.value ? Number(e.target.value) : '', section: item.section, subjectId: '' })}>
          <option value="">Select</option>
          {CLASS_GRADES.map((g) => (
            <option key={g} value={g}>
              {g}th
            </option>
          ))}
        </SelectInput>
      </Field>
      <Field label="Section">
        <TextInput list="teacher-sections" placeholder="All" maxLength={10} value={item.section} onChange={(e) => onChange({ ...item, section: e.target.value.toUpperCase() })} />
        <datalist id="teacher-sections">
          {sections.map((s) => (
            <option key={s} value={s} />
          ))}
        </datalist>
      </Field>
      <Field label="Subject">
        <SelectInput value={item.subjectId} disabled={!item.classGrade} onChange={(e) => onChange({ ...item, subjectId: e.target.value })}>
          <option value="">All subjects</option>
          {subjects.map((s) => (
            <option key={s._id} value={s._id}>
              {s.nameEn}
            </option>
          ))}
        </SelectInput>
      </Field>
      <button
        type="button"
        onClick={onRemove}
        disabled={!onRemove}
        aria-label="Remove this class"
        className="mb-1 w-9 h-9 rounded-lg text-slate-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/40 disabled:opacity-30 disabled:hover:bg-transparent"
      >
        ✕
      </button>
    </div>
  );
};

/** Whole school, or a list of class · section · subject rows. */
export const AssignmentEditor: React.FC<{ value: AssignmentValue; onChange: (v: AssignmentValue) => void }> = ({ value, onChange }) => {
  const [sections, setSections] = useState<string[]>([]);
  useEffect(() => {
    api
      .get('/school/sections')
      .then((res) => setSections([...new Set<string>(res.data.data.map((r: any) => r.section).filter(Boolean))].sort()))
      .catch(() => undefined);
  }, []);
  const items = value.items.length ? value.items : [{ classGrade: '' as const, section: '', subjectId: '' }];

  return (
    <fieldset className="space-y-3">
      <legend className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Classes and subjects</legend>
      <div className="grid sm:grid-cols-2 gap-2">
        {[
          [true, 'Whole school', 'All classes and subjects: for a small school or a head teacher'],
          [false, 'Chosen classes', 'Only the classes, sections and subjects you pick'],
        ].map(([all, title, hint]) => (
          <label
            key={String(all)}
            className={`cursor-pointer rounded-xl border p-3 text-sm ${value.all === all ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-500/10 ring-1 ring-indigo-500' : 'border-slate-200 dark:border-slate-700'}`}
          >
            <input type="radio" className="sr-only" checked={value.all === all} onChange={() => onChange({ all: all as boolean, items })} />
            <span className="font-semibold text-slate-800 dark:text-slate-100">{title as string}</span>
            <span className="block text-xs text-slate-500 dark:text-slate-400">{hint as string}</span>
          </label>
        ))}
      </div>
      {!value.all && (
        <div className="space-y-2 rounded-xl bg-slate-50 dark:bg-slate-900/40 p-3">
          {items.map((item, i) => (
            <Row
              key={i}
              item={item}
              sections={sections}
              onChange={(next) => onChange({ all: false, items: items.map((x, j) => (j === i ? next : x)) })}
              onRemove={items.length > 1 ? () => onChange({ all: false, items: items.filter((_, j) => j !== i) }) : undefined}
            />
          ))}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
            <Button size="sm" variant="ghost" onClick={() => onChange({ all: false, items: [...items, { classGrade: items[items.length - 1]?.classGrade || '', section: '', subjectId: '' }] })}>
              + Add another class
            </Button>
            <p className="text-xs text-slate-500 dark:text-slate-400">Leave Section empty for every section of the class.</p>
          </div>
        </div>
      )}
    </fieldset>
  );
};

/** Change one teacher's classes. */
export const TeacherClassesModal: React.FC<{ teacher: { _id: string; name: string; assignments?: Assignment[] }; onClose: () => void; onDone: (message: string) => void }> = ({
  teacher,
  onClose,
  onDone,
}) => {
  const [value, setValue] = useState<AssignmentValue>(() => toValue(teacher.assignments));
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = toPayload(value);
    if (!payload.all && !payload.items!.length) return setError('Choose at least one class, or Whole school');
    setSaving(true);
    setError('');
    try {
      await api.put(`/school/teachers/${teacher._id}/assignments`, payload);
      onDone(`${teacher.name}'s classes saved`);
    } catch (err) {
      setError(apiError(err));
    } finally {
      setSaving(false);
    }
  };

  return (
    <Modal title={`Classes: ${teacher.name}`} onClose={onClose} wide>
      <form onSubmit={save} className="space-y-4">
        <AssignmentEditor value={value} onChange={setValue} />
        <p className="text-xs text-slate-500 dark:text-slate-400">
          The teacher sees tests, practice and Mistake Books only for these classes and subjects, and can set tests only for them.
        </p>
        {error && <Alert>{error}</Alert>}
        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={saving}>
            {saving ? 'Saving…' : 'Save classes'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};
