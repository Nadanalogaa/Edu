import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import {
  PageHeader, Panel, Button, Field, TextInput, SelectInput, Badge, Alert, Modal, Spinner, Table, EmptyState, UsageBar,
  apiError, classLabel, CLASS_GRADES,
} from '../common/ui';

type Role = 'student' | 'teacher';

interface Person {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  classGrade?: number | null;
  section?: string | null;
  isActive: boolean;
  createdAt: string;
}

const LABELS: Record<Role, { one: string; many: string; path: string }> = {
  student: { one: 'student', many: 'Students', path: '/school/students' },
  teacher: { one: 'teacher', many: 'Teachers', path: '/school/teachers' },
};

const CSV_TEMPLATE = 'name,email,password,classGrade,section,phone\nAnu R,anu.r@example.com,anu12345,9,A,9876543210\n';

/** School admin: manage the school's students or teachers. */
const PeopleManager: React.FC<{ role: Role }> = ({ role }) => {
  const label = LABELS[role];
  const isStudent = role === 'student';

  const [people, setPeople] = useState<Person[] | null>(null);
  const [usage, setUsage] = useState<{ used: number; limit: number } | null>(null);
  const [filters, setFilters] = useState({ status: '', classGrade: '', section: '', search: '' });
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [modal, setModal] = useState<{ kind: 'add' | 'edit' | 'password' | 'import'; person?: Person } | null>(null);

  const load = useCallback(async () => {
    try {
      const params = Object.fromEntries(Object.entries(filters).filter(([, v]) => v));
      const [list, overview] = await Promise.all([
        api.get(label.path, { params }),
        isStudent ? api.get('/school/overview') : Promise.resolve(null),
      ]);
      setPeople(list.data.data);
      if (overview) setUsage({ used: overview.data.data.activeStudents, limit: overview.data.data.studentLimit });
    } catch (err) {
      setError(apiError(err, `Could not load ${label.many.toLowerCase()}`));
    }
  }, [filters, label, isStudent]);

  useEffect(() => {
    const timer = setTimeout(load, filters.search ? 300 : 0);
    return () => clearTimeout(timer);
  }, [load, filters.search]);

  const done = (message: string) => {
    setModal(null);
    setNotice(message);
    setError('');
    load();
  };

  const setActive = async (person: Person, isActive: boolean) => {
    setError('');
    setNotice('');
    try {
      await api.patch(`${label.path}/${person._id}`, { isActive });
      done(isActive ? `${person.name} can now sign in` : `${person.name} has been deactivated`);
    } catch (err) {
      setError(apiError(err));
    }
  };

  const waiting = people?.filter((p) => !p.isActive).length ?? 0;

  return (
    <div className="space-y-4">
      <PageHeader
        title={label.many}
        subtitle={isStudent ? 'Only active students count towards your licence.' : 'Teachers can create tests for their classes.'}
        actions={
          <>
            {isStudent && (
              <Button variant="secondary" onClick={() => setModal({ kind: 'import' })}>
                Import CSV
              </Button>
            )}
            <Button onClick={() => setModal({ kind: 'add' })}>Add {label.one}</Button>
          </>
        }
      />

      {usage && (
        <div className="max-w-md">
          <UsageBar used={usage.used} limit={usage.limit} />
        </div>
      )}
      {error && <Alert onClose={() => setError('')}>{error}</Alert>}
      {notice && (
        <Alert tone="success" onClose={() => setNotice('')}>
          {notice}
        </Alert>
      )}

      <Panel>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          <SelectInput aria-label="Status" value={filters.status} onChange={(e) => setFilters({ ...filters, status: e.target.value })}>
            <option value="">All</option>
            <option value="active">Active</option>
            <option value="inactive">Waiting / inactive</option>
          </SelectInput>
          {isStudent && (
            <>
              <SelectInput aria-label="Class" value={filters.classGrade} onChange={(e) => setFilters({ ...filters, classGrade: e.target.value })}>
                <option value="">All classes</option>
                {CLASS_GRADES.map((g) => (
                  <option key={g} value={g}>
                    {g}th
                  </option>
                ))}
              </SelectInput>
              <TextInput
                aria-label="Section"
                placeholder="Section (e.g. A)"
                value={filters.section}
                onChange={(e) => setFilters({ ...filters, section: e.target.value })}
              />
            </>
          )}
          <TextInput
            aria-label="Search"
            placeholder="Search name or email"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className={isStudent ? '' : 'col-span-1 md:col-span-3'}
          />
        </div>

        {waiting > 0 && filters.status !== 'active' && (
          <p className="mb-3 text-sm text-amber-700 dark:text-amber-300">
            {waiting} {waiting === 1 ? label.one : label.many.toLowerCase()} waiting for approval or inactive. Use <b>Approve</b> to let them sign in.
          </p>
        )}

        {!people ? (
          <Spinner />
        ) : people.length === 0 ? (
          <EmptyState>No {label.many.toLowerCase()} found.</EmptyState>
        ) : (
          <Table head={['Name', ...(isStudent ? ['Class'] : []), 'Phone', 'Status', '']}>
            {people.map((p) => (
              <tr key={p._id} className={p.isActive ? '' : 'bg-amber-50/60 dark:bg-amber-900/10'}>
                <td className="px-4 py-3">
                  <p className="font-medium text-slate-800 dark:text-slate-100">{p.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{p.email}</p>
                </td>
                {isStudent && <td className="px-4 py-3 whitespace-nowrap">{classLabel(p.classGrade, p.section)}</td>}
                <td className="px-4 py-3 whitespace-nowrap">{p.phone || '—'}</td>
                <td className="px-4 py-3">{p.isActive ? <Badge tone="green">Active</Badge> : <Badge tone="amber">Waiting / inactive</Badge>}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap justify-end gap-1">
                    {p.isActive ? (
                      <Button size="sm" variant="ghost" onClick={() => setActive(p, false)}>
                        Deactivate
                      </Button>
                    ) : (
                      <Button size="sm" onClick={() => setActive(p, true)}>
                        Approve
                      </Button>
                    )}
                    <Button size="sm" variant="ghost" onClick={() => setModal({ kind: 'edit', person: p })}>
                      Edit
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => setModal({ kind: 'password', person: p })}>
                      Reset password
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </Table>
        )}
      </Panel>

      {modal?.kind === 'add' && <PersonForm role={role} onClose={() => setModal(null)} onDone={done} />}
      {modal?.kind === 'edit' && modal.person && <PersonForm role={role} person={modal.person} onClose={() => setModal(null)} onDone={done} />}
      {modal?.kind === 'password' && modal.person && (
        <ResetPassword path={`${label.path}/${modal.person._id}/reset-password`} person={modal.person} onClose={() => setModal(null)} onDone={done} />
      )}
      {modal?.kind === 'import' && <ImportStudents onClose={() => setModal(null)} onDone={done} />}
    </div>
  );
};

const PersonForm: React.FC<{ role: Role; person?: Person; onClose: () => void; onDone: (message: string) => void }> = ({
  role,
  person,
  onClose,
  onDone,
}) => {
  const isStudent = role === 'student';
  const [form, setForm] = useState({
    name: person?.name || '',
    email: person?.email || '',
    password: '',
    phone: person?.phone || '',
    classGrade: person?.classGrade ? String(person.classGrade) : '',
    section: person?.section || '',
  });
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setForm({ ...form, [key]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      const body: Record<string, any> = { name: form.name, phone: form.phone };
      if (isStudent) Object.assign(body, { classGrade: Number(form.classGrade), section: form.section });
      if (person) {
        await api.patch(`${LABELS[role].path}/${person._id}`, body);
        onDone(`${form.name} saved`);
      } else {
        await api.post(LABELS[role].path, { ...body, email: form.email, password: form.password });
        onDone(`${form.name} added. They can sign in with ${form.email}.`);
      }
    } catch (err) {
      setError(apiError(err));
    } finally {
      setSaving(false);
    }
  };

  return (
    <Modal title={person ? `Edit ${person.name}` : `Add ${LABELS[role].one}`} onClose={onClose}>
      <form onSubmit={submit} className="space-y-4">
        <Field label="Full name">
          <TextInput required value={form.name} onChange={set('name')} />
        </Field>
        {!person && (
          <>
            <Field label="Email (used to sign in)">
              <TextInput type="email" required value={form.email} onChange={set('email')} />
            </Field>
            <Field label="Password" hint="At least 6 characters. Share it with them; they can change it after signing in.">
              <TextInput required minLength={6} value={form.password} onChange={set('password')} />
            </Field>
          </>
        )}
        {isStudent && (
          <div className="grid grid-cols-2 gap-3">
            <Field label="Class">
              <SelectInput required value={form.classGrade} onChange={set('classGrade')}>
                <option value="">Select</option>
                {CLASS_GRADES.map((g) => (
                  <option key={g} value={g}>
                    {g}th
                  </option>
                ))}
              </SelectInput>
            </Field>
            <Field label="Section">
              <TextInput placeholder="A" maxLength={10} value={form.section} onChange={set('section')} />
            </Field>
          </div>
        )}
        <Field label={isStudent ? 'Parent phone' : 'Phone'}>
          <TextInput type="tel" value={form.phone} onChange={set('phone')} />
        </Field>
        {error && <Alert>{error}</Alert>}
        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={saving}>
            {saving ? 'Saving…' : person ? 'Save' : 'Add'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export const ResetPassword: React.FC<{ path: string; person: { name: string; email: string }; extraBody?: Record<string, any>; onClose: () => void; onDone: (message: string) => void }> = ({
  path,
  person,
  extraBody,
  onClose,
  onDone,
}) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      await api.post(path, { ...extraBody, password });
      onDone(`New password set for ${person.name}. Share it with them; they can change it after signing in.`);
    } catch (err) {
      setError(apiError(err));
    } finally {
      setSaving(false);
    }
  };

  return (
    <Modal title={`Reset password: ${person.name}`} onClose={onClose}>
      <form onSubmit={submit} className="space-y-4">
        <p className="text-sm text-slate-600 dark:text-slate-300">Sign-in email: {person.email}</p>
        <Field label="New password" hint="At least 6 characters">
          <TextInput required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} />
        </Field>
        {error && <Alert>{error}</Alert>}
        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={saving}>
            {saving ? 'Saving…' : 'Set password'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

const ImportStudents: React.FC<{ onClose: () => void; onDone: (message: string) => void }> = ({ onClose, onDone }) => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<{ message: string; errors: { row: number; email?: string; error: string }[] } | null>(null);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  const downloadTemplate = () => {
    const url = URL.createObjectURL(new Blob([CSV_TEMPLATE], { type: 'text/csv' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'students-template.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    setSaving(true);
    setError('');
    try {
      const form = new FormData();
      form.append('bulkFile', file);
      const res = await api.post('/school/students/bulk-upload', form, { headers: { 'Content-Type': 'multipart/form-data' }, timeout: 120000 });
      setResult({ message: res.data.message, errors: res.data.errors || [] });
    } catch (err) {
      setError(apiError(err));
    } finally {
      setSaving(false);
    }
  };

  if (result) {
    return (
      <Modal title="Import finished" onClose={() => onDone(result.message)} wide>
        <div className="space-y-4">
          <Alert tone={result.errors.length ? 'info' : 'success'}>{result.message}</Alert>
          {result.errors.length > 0 && (
            <Table head={['Row', 'Email', 'Problem']}>
              {result.errors.map((e, i) => (
                <tr key={i}>
                  <td className="px-4 py-2">{e.row}</td>
                  <td className="px-4 py-2">{e.email || '—'}</td>
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
    <Modal title="Import students from CSV" onClose={onClose}>
      <form onSubmit={submit} className="space-y-4">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Columns: <code>name, email, password, classGrade, section, phone</code>. Class is 6 to 12. Students are added as active and count towards your licence.
        </p>
        <Button variant="ghost" size="sm" onClick={downloadTemplate}>
          Download template
        </Button>
        <Field label="CSV file">
          <input
            type="file"
            accept=".csv,text/csv"
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
            {saving ? 'Importing…' : 'Import'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default PeopleManager;
