import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import {
  PageHeader, Panel, Button, Field, TextInput, SelectInput, Badge, Alert, Modal, Spinner, Table, EmptyState, UsageBar,
  apiError, classLabel, CLASS_GRADES,
} from '../common/ui';
import { Assignment, AssignmentChips, AssignmentEditor, AssignmentValue, TeacherClassesModal, toPayload } from './TeacherClasses';

type Role = 'student' | 'teacher' | 'admin';

interface Person {
  _id: string;
  name: string;
  email?: string | null;
  admissionNumber?: string | null;
  phone?: string | null;
  classGrade?: number | null;
  section?: string | null;
  isActive: boolean;
  createdAt: string;
  assignments?: Assignment[];
}

/** Login details to hand out after adding students or resetting a password. */
interface Credential {
  name: string;
  login: string;
  password: string;
  classGrade?: number | null;
  section?: string | null;
}

const LABELS: Record<Role, { one: string; many: string; path: string; subtitle: string }> = {
  student: { one: 'student', many: 'Students', path: '/school/students', subtitle: 'Students sign in with your school code and their admission number. Only active students count towards your licence.' },
  teacher: { one: 'teacher', many: 'Teachers', path: '/school/teachers', subtitle: 'Teachers sign in with their email. Each teacher sees only the classes and subjects you assign them.' },
  admin: { one: 'admin', many: 'School admins', path: '/school/admins', subtitle: 'Admins manage students, teachers, questions and tests for your school. They sign in with their email.' },
};

/** Saves login details as a CSV file that opens in Excel (BOM keeps Tamil names readable). */
const downloadCredentials = (credentials: Credential[], schoolCode?: string) => {
  const escape = (v: any) => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const lines = [
    ['Name', 'Class', 'School code', 'Login (admission no. / email)', 'Password'].map(escape).join(','),
    ...credentials.map((c) => [c.name, classLabel(c.classGrade, c.section), schoolCode || '', c.login, c.password].map(escape).join(',')),
  ];
  const url = URL.createObjectURL(new Blob(['﻿' + lines.join('\r\n')], { type: 'text/csv;charset=utf-8' }));
  const a = document.createElement('a');
  a.href = url;
  a.download = 'login-details.csv';
  a.click();
  URL.revokeObjectURL(url);
};

/** School admin: manage the school's students, teachers or admins. */
const PeopleManager: React.FC<{ role: Role }> = ({ role }) => {
  const { currentUser } = useAuth();
  const label = LABELS[role];
  const isStudent = role === 'student';

  const [people, setPeople] = useState<Person[] | null>(null);
  const [usage, setUsage] = useState<{ used: number; limit: number; schoolCode?: string } | null>(null);
  const [filters, setFilters] = useState({ status: '', classGrade: '', section: '', search: '' });
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [credentials, setCredentials] = useState<Credential[] | null>(null);
  const [modal, setModal] = useState<{ kind: 'add' | 'edit' | 'password' | 'import' | 'classes'; person?: Person } | null>(null);
  const isTeacher = role === 'teacher';

  const load = useCallback(async () => {
    try {
      const params = Object.fromEntries(Object.entries(filters).filter(([, v]) => v));
      const [list, overview] = await Promise.all([api.get(label.path, { params }), api.get('/school/overview')]);
      setPeople(list.data.data);
      const o = overview.data.data;
      setUsage({ used: o.activeStudents, limit: o.studentLimit, schoolCode: o.school?.code });
    } catch (err) {
      setError(apiError(err, `Could not load ${label.many.toLowerCase()}`));
    }
  }, [filters, label]);

  useEffect(() => {
    const timer = setTimeout(load, filters.search ? 300 : 0);
    return () => clearTimeout(timer);
  }, [load, filters.search]);

  const done = (message: string, newCredentials?: Credential[]) => {
    setModal(null);
    setNotice(message);
    setCredentials(newCredentials && newCredentials.length ? newCredentials : null);
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
        subtitle={label.subtitle}
        actions={
          <>
            {isStudent && (
              <Button variant="secondary" onClick={() => setModal({ kind: 'import' })}>
                Import from Excel
              </Button>
            )}
            <Button onClick={() => setModal({ kind: 'add' })}>Add {label.one}</Button>
          </>
        }
      />

      {isStudent && usage && (
        <div className="flex flex-wrap items-end gap-x-6 gap-y-2">
          <div className="w-full max-w-md">
            <UsageBar used={usage.used} limit={usage.limit} />
          </div>
          {usage.schoolCode && (
            <p className="text-sm text-slate-600 dark:text-slate-300">
              School code for student sign-in: <b className="font-mono">{usage.schoolCode}</b>
            </p>
          )}
        </div>
      )}
      {error && <Alert onClose={() => setError('')}>{error}</Alert>}
      {notice && (
        <Alert tone="success" onClose={() => { setNotice(''); setCredentials(null); }}>
          <p>{notice}</p>
          {credentials && (
            <div className="mt-2 space-y-2">
              {credentials.length === 1 ? (
                <p>
                  Login: <b className="font-mono">{credentials[0].login}</b> · Password: <b className="font-mono">{credentials[0].password}</b>
                  {isStudent && usage?.schoolCode && <> · School code: <b className="font-mono">{usage.schoolCode}</b></>}
                </p>
              ) : null}
              <p className="text-xs">This password is shown only now. Note it down or download it before closing.</p>
              <Button size="sm" variant="secondary" onClick={() => downloadCredentials(credentials, usage?.schoolCode)}>
                Download login details
              </Button>
            </div>
          )}
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
            placeholder={isStudent ? 'Search name, admission no., phone' : 'Search name or email'}
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className={isStudent ? '' : 'col-span-1 md:col-span-3'}
          />
        </div>

        {waiting > 0 && filters.status !== 'active' && role !== 'admin' && (
          <p className="mb-3 text-sm text-amber-700 dark:text-amber-300">
            {waiting} {waiting === 1 ? label.one : label.many.toLowerCase()} waiting for approval or inactive. Use <b>Approve</b> to let them sign in.
          </p>
        )}

        {!people ? (
          <Spinner />
        ) : people.length === 0 ? (
          <EmptyState>No {label.many.toLowerCase()} found.</EmptyState>
        ) : (
          <Table head={isStudent ? ['Admission no.', 'Name', 'Class', 'Phone', 'Status', ''] : isTeacher ? ['Name', 'Classes and subjects', 'Phone', 'Status', ''] : ['Name', 'Phone', 'Status', '']}>
            {people.map((p) => {
              const isMe = p._id === currentUser?.id;
              return (
                <tr key={p._id} className={p.isActive ? '' : 'bg-amber-50/60 dark:bg-amber-900/10'}>
                  {isStudent && <td className="px-4 py-3 font-mono whitespace-nowrap">{p.admissionNumber || '—'}</td>}
                  <td className="px-4 py-3">
                    <p className="font-medium text-slate-800 dark:text-slate-100">
                      {p.name}
                      {isMe && <span className="ml-2 text-xs text-slate-500">(you)</span>}
                    </p>
                    {p.email && <p className="text-xs text-slate-500 dark:text-slate-400">{p.email}</p>}
                  </td>
                  {isStudent && <td className="px-4 py-3 whitespace-nowrap">{classLabel(p.classGrade, p.section)}</td>}
                  {isTeacher && (
                    <td className="px-4 py-3 max-w-xs">
                      <AssignmentChips assignments={p.assignments} />
                    </td>
                  )}
                  <td className="px-4 py-3 whitespace-nowrap">{p.phone || '—'}</td>
                  <td className="px-4 py-3">{p.isActive ? <Badge tone="green">Active</Badge> : <Badge tone="amber">Waiting / inactive</Badge>}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap justify-end gap-1">
                      {p.isActive ? (
                        !isMe && (
                          <Button size="sm" variant="ghost" onClick={() => setActive(p, false)}>
                            Deactivate
                          </Button>
                        )
                      ) : (
                        <Button size="sm" onClick={() => setActive(p, true)}>
                          Approve
                        </Button>
                      )}
                      {isTeacher && (
                        <Button size="sm" variant="ghost" onClick={() => setModal({ kind: 'classes', person: p })}>
                          Classes
                        </Button>
                      )}
                      <Button size="sm" variant="ghost" onClick={() => setModal({ kind: 'edit', person: p })}>
                        Edit
                      </Button>
                      {!isMe && (
                        <Button size="sm" variant="ghost" onClick={() => setModal({ kind: 'password', person: p })}>
                          Reset password
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </Table>
        )}
      </Panel>

      {modal?.kind === 'add' && <PersonForm role={role} onClose={() => setModal(null)} onDone={done} />}
      {modal?.kind === 'edit' && modal.person && <PersonForm role={role} person={modal.person} onClose={() => setModal(null)} onDone={done} />}
      {modal?.kind === 'password' && modal.person && (
        <ResetPassword
          path={`${label.path}/${modal.person._id}/reset-password`}
          person={{ name: modal.person.name, login: modal.person.admissionNumber || modal.person.email || '' }}
          onClose={() => setModal(null)}
          onDone={done}
        />
      )}
      {modal?.kind === 'classes' && modal.person && <TeacherClassesModal teacher={modal.person} onClose={() => setModal(null)} onDone={done} />}
      {modal?.kind === 'import' && <ImportStudents onClose={() => setModal(null)} onDone={done} schoolCode={usage?.schoolCode} />}
    </div>
  );
};

const PersonForm: React.FC<{ role: Role; person?: Person; onClose: () => void; onDone: (message: string, credentials?: Credential[]) => void }> = ({
  role,
  person,
  onClose,
  onDone,
}) => {
  const isStudent = role === 'student';
  const [form, setForm] = useState({
    name: person?.name || '',
    admissionNumber: person?.admissionNumber || '',
    email: person?.email || '',
    password: '',
    phone: person?.phone || '',
    classGrade: person?.classGrade ? String(person.classGrade) : '',
    section: person?.section || '',
  });
  const [classes, setClasses] = useState<AssignmentValue>({ all: true, items: [] });
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setForm({ ...form, [key]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      const body: Record<string, any> = { name: form.name, phone: form.phone, email: form.email };
      if (isStudent) Object.assign(body, { admissionNumber: form.admissionNumber, classGrade: Number(form.classGrade), section: form.section });
      if (person) {
        await api.patch(`${LABELS[role].path}/${person._id}`, body);
        onDone(`${form.name} saved`);
      } else {
        if (role === 'teacher') {
          const assignments = toPayload(classes);
          if (!assignments.all && !assignments.items!.length) return setError('Choose at least one class, or Whole school');
          body.assignments = assignments;
        }
        const res = await api.post(LABELS[role].path, { ...body, password: form.password });
        const login = isStudent ? form.admissionNumber.trim() : form.email.trim().toLowerCase();
        onDone(`${form.name} added.`, [
          { name: form.name, login, password: res.data.generatedPassword || form.password, classGrade: res.data.data.classGrade, section: res.data.data.section },
        ]);
      }
    } catch (err) {
      setError(apiError(err));
    } finally {
      setSaving(false);
    }
  };

  return (
    <Modal title={person ? `Edit ${person.name}` : `Add ${LABELS[role].one}`} onClose={onClose} wide={role === 'teacher' && !person}>
      <form onSubmit={submit} className="space-y-4">
        <Field label="Full name">
          <TextInput required value={form.name} onChange={set('name')} />
        </Field>
        {isStudent && (
          <>
            <Field label="Admission number" hint="The student signs in with this and your school code">
              <TextInput required value={form.admissionNumber} onChange={set('admissionNumber')} />
            </Field>
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
          </>
        )}
        <Field label={isStudent ? 'Email (optional)' : 'Email (used to sign in)'}>
          <TextInput type="email" required={!isStudent} value={form.email} onChange={set('email')} />
        </Field>
        {!person && (
          <Field label="Password" hint="Leave empty to create one automatically. They can change it after signing in.">
            <TextInput minLength={6} value={form.password} onChange={set('password')} />
          </Field>
        )}
        <Field label={isStudent ? 'Parent phone' : 'Phone'}>
          <TextInput type="tel" value={form.phone} onChange={set('phone')} />
        </Field>
        {role === 'teacher' && !person && <AssignmentEditor value={classes} onChange={setClasses} />}
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

export const ResetPassword: React.FC<{
  path: string;
  person: { name: string; login: string };
  extraBody?: Record<string, any>;
  onClose: () => void;
  onDone: (message: string, credentials?: Credential[]) => void;
}> = ({ path, person, extraBody, onClose, onDone }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      const res = await api.post(path, { ...extraBody, password });
      onDone(`New password set for ${person.name}. They can change it after signing in.`, [
        { name: person.name, login: person.login, password: res.data.generatedPassword || password },
      ]);
    } catch (err) {
      setError(apiError(err));
    } finally {
      setSaving(false);
    }
  };

  return (
    <Modal title={`Reset password: ${person.name}`} onClose={onClose}>
      <form onSubmit={submit} className="space-y-4">
        {person.login && <p className="text-sm text-slate-600 dark:text-slate-300">Signs in with: {person.login}</p>}
        <Field label="New password" hint="Leave empty to create one automatically">
          <TextInput minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} />
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

const ImportStudents: React.FC<{ schoolCode?: string; onClose: () => void; onDone: (message: string, credentials?: Credential[]) => void }> = ({
  schoolCode,
  onClose,
  onDone,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<{
    message: string;
    created: { admissionNumber: string; name: string; classGrade: number; section: string | null; password: string }[];
    errors: { row: number; admissionNumber?: string; name?: string; error: string }[];
  } | null>(null);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  const downloadTemplate = async () => {
    try {
      const res = await api.get('/school/students/import-template', { responseType: 'blob' });
      const url = URL.createObjectURL(res.data);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'students-import-template.xlsx';
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      setError(apiError(err, 'Could not download the template'));
    }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    setSaving(true);
    setError('');
    try {
      const form = new FormData();
      form.append('bulkFile', file);
      const res = await api.post('/school/students/bulk-upload', form, { headers: { 'Content-Type': 'multipart/form-data' }, timeout: 300000 });
      setResult({ message: res.data.message, created: res.data.created || [], errors: res.data.errors || [] });
    } catch (err) {
      setError(apiError(err));
    } finally {
      setSaving(false);
    }
  };

  if (result) {
    const credentials = result.created.map((c) => ({ name: c.name, login: c.admissionNumber, password: c.password, classGrade: c.classGrade, section: c.section }));
    const finish = () => onDone(result.message, credentials);
    return (
      <Modal title="Import finished" onClose={finish} wide>
        <div className="space-y-4">
          <Alert tone={result.errors.length ? 'info' : 'success'}>{result.message}</Alert>
          {credentials.length > 0 && (
            <div className="flex flex-wrap items-center gap-3">
              <Button onClick={() => downloadCredentials(credentials, schoolCode)}>Download login details</Button>
              <p className="text-xs text-slate-500 dark:text-slate-400">Admission numbers and passwords to hand out. Passwords cannot be shown again later.</p>
            </div>
          )}
          {result.errors.length > 0 && (
            <>
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">Rows not added</h3>
              <Table head={['Row', 'Admission no.', 'Name', 'Problem']}>
                {result.errors.map((e, i) => (
                  <tr key={i}>
                    <td className="px-4 py-2">{e.row}</td>
                    <td className="px-4 py-2">{e.admissionNumber || '—'}</td>
                    <td className="px-4 py-2">{e.name || '—'}</td>
                    <td className="px-4 py-2">{e.error}</td>
                  </tr>
                ))}
              </Table>
            </>
          )}
          <div className="flex justify-end">
            <Button variant="secondary" onClick={finish}>
              Done
            </Button>
          </div>
        </div>
      </Modal>
    );
  }

  return (
    <Modal title="Import students from Excel" onClose={onClose}>
      <form onSubmit={submit} className="space-y-4">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Columns: <b>Admission No, Name, Class, Section, Phone, Email, Password</b>. Class is 6 to 12. Email and Password are optional; empty passwords are created
          automatically and you can download them after the import.
        </p>
        <Button variant="ghost" size="sm" onClick={downloadTemplate}>
          Download Excel template
        </Button>
        <Field label="Excel or CSV file">
          <input
            type="file"
            accept=".xlsx,.xls,.csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,text/csv"
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
