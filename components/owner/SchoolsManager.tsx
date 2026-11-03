import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import {
  PageHeader, Panel, Button, Field, TextInput, SelectInput, Badge, Alert, Modal, Spinner, Table, EmptyState, UsageBar,
  apiError, boardLabel, formatDate,
} from '../common/ui';
import { ResetPassword } from '../school/PeopleManager';

interface School {
  _id: string;
  name: string;
  code: string;
  city: string;
  board: string;
  studentLimit: number;
  subscriptionExpiresAt: string | null;
  registrationStatus: 'pending' | 'approved' | 'rejected';
  isActive: boolean;
  notes?: string | null;
  activeStudents: number;
  pendingStudents: number;
  activeTeachers: number;
  admins: { _id: string; name: string; email: string }[] | null;
}

const today = () => new Date().toISOString().slice(0, 10);

const statusBadge = (s: School) => {
  if (s.registrationStatus === 'pending') return <Badge tone="amber">Waiting for approval</Badge>;
  if (s.registrationStatus === 'rejected') return <Badge tone="red">Rejected</Badge>;
  if (!s.isActive) return <Badge tone="slate">Inactive</Badge>;
  if (s.subscriptionExpiresAt && s.subscriptionExpiresAt < today()) return <Badge tone="red">Expired</Badge>;
  return <Badge tone="green">Active</Badge>;
};

/** Owner: schools as customers — approve, set board, student limit and expiry. */
const SchoolsManager: React.FC = () => {
  const [schools, setSchools] = useState<School[] | null>(null);
  const [filters, setFilters] = useState({ status: '', search: '' });
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [modal, setModal] = useState<{ kind: 'create' | 'edit' | 'password'; school?: School } | null>(null);

  const load = useCallback(async () => {
    try {
      const params = Object.fromEntries(Object.entries(filters).filter(([, v]) => v));
      const res = await api.get('/owner/schools', { params });
      setSchools(res.data.data);
    } catch (err) {
      setError(apiError(err, 'Could not load schools'));
    }
  }, [filters]);

  useEffect(() => {
    const timer = setTimeout(load, filters.search ? 300 : 0);
    return () => clearTimeout(timer);
  }, [load, filters.search]);

  const done = (message: string, credentials?: { login: string; password: string }[]) => {
    setModal(null);
    setNotice(credentials?.length ? `${message} Login: ${credentials[0].login} · Password: ${credentials[0].password} (shown only now)` : message);
    setError('');
    load();
  };

  const quickUpdate = async (school: School, body: Record<string, any>, message: string) => {
    setError('');
    try {
      await api.patch(`/owner/schools/${school._id}`, body);
      done(message);
    } catch (err) {
      setError(apiError(err));
    }
  };

  return (
    <div className="space-y-4">
      <PageHeader
        title="Schools"
        subtitle="Approve schools and set how many students each one has paid for."
        actions={<Button onClick={() => setModal({ kind: 'create' })}>Add school</Button>}
      />
      {error && <Alert onClose={() => setError('')}>{error}</Alert>}
      {notice && (
        <Alert tone="success" onClose={() => setNotice('')}>
          {notice}
        </Alert>
      )}

      <Panel>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          <SelectInput aria-label="Status" value={filters.status} onChange={(e) => setFilters({ ...filters, status: e.target.value })}>
            <option value="">All schools</option>
            <option value="pending">Waiting for approval</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </SelectInput>
          <TextInput
            aria-label="Search"
            placeholder="Search name, code or city"
            className="sm:col-span-2"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          />
        </div>

        {!schools ? (
          <Spinner />
        ) : schools.length === 0 ? (
          <EmptyState>No schools found.</EmptyState>
        ) : (
          <Table head={['School', 'Board', 'Students', 'Teachers', 'Expires', 'Status', '']}>
            {schools.map((s) => (
              <tr key={s._id}>
                <td className="px-4 py-3 min-w-[12rem]">
                  <p className="font-medium text-slate-800 dark:text-slate-100">{s.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {s.code} · {s.city}
                    {s.admins?.[0] && <> · {s.admins[0].email}</>}
                  </p>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">{boardLabel(s.board)}</td>
                <td className="px-4 py-3 min-w-[9rem]">
                  <UsageBar used={s.activeStudents} limit={s.studentLimit} />
                  {s.pendingStudents > 0 && <p className="text-xs text-amber-600">{s.pendingStudents} waiting/inactive</p>}
                </td>
                <td className="px-4 py-3">{s.activeTeachers}</td>
                <td className="px-4 py-3 whitespace-nowrap">{formatDate(s.subscriptionExpiresAt)}</td>
                <td className="px-4 py-3">{statusBadge(s)}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap justify-end gap-1">
                    {s.registrationStatus === 'pending' && (
                      <>
                        <Button size="sm" onClick={() => setModal({ kind: 'edit', school: { ...s, registrationStatus: 'approved' } })}>
                          Approve
                        </Button>
                        <Button size="sm" variant="ghost" onClick={() => quickUpdate(s, { registrationStatus: 'rejected' }, `${s.name} rejected`)}>
                          Reject
                        </Button>
                      </>
                    )}
                    <Button size="sm" variant="ghost" onClick={() => setModal({ kind: 'edit', school: s })}>
                      Licence
                    </Button>
                    {s.admins?.length ? (
                      <Button size="sm" variant="ghost" onClick={() => setModal({ kind: 'password', school: s })}>
                        Admin password
                      </Button>
                    ) : null}
                  </div>
                </td>
              </tr>
            ))}
          </Table>
        )}
      </Panel>

      {modal?.kind === 'create' && <CreateSchool onClose={() => setModal(null)} onDone={done} />}
      {modal?.kind === 'edit' && modal.school && <EditLicence school={modal.school} onClose={() => setModal(null)} onDone={done} />}
      {modal?.kind === 'password' && modal.school?.admins?.[0] && (
        <ResetPassword
          path={`/owner/schools/${modal.school._id}/reset-admin-password`}
          person={{ name: modal.school.admins[0].name, login: modal.school.admins[0].email }}
          extraBody={{ adminId: modal.school.admins[0]._id }}
          onClose={() => setModal(null)}
          onDone={done}
        />
      )}
    </div>
  );
};

const LicenceFields: React.FC<{ form: any; set: (key: string) => (e: React.ChangeEvent<any>) => void }> = ({ form, set }) => (
  <>
    <Field label="Board">
      <SelectInput required value={form.board} onChange={set('board')}>
        <option value="state_board">Tamil Nadu State Board (Matriculation)</option>
        <option value="cbse">CBSE</option>
      </SelectInput>
    </Field>
    <div className="grid grid-cols-2 gap-3">
      <Field label="Student limit" hint="Active students allowed">
        <TextInput type="number" min={0} required value={form.studentLimit} onChange={set('studentLimit')} />
      </Field>
      <Field label="Subscription ends" hint="Empty = no end date">
        <TextInput type="date" value={form.subscriptionExpiresAt} onChange={set('subscriptionExpiresAt')} />
      </Field>
    </div>
  </>
);

const EditLicence: React.FC<{ school: School; onClose: () => void; onDone: (message: string) => void }> = ({ school, onClose, onDone }) => {
  const [form, setForm] = useState({
    board: school.board,
    studentLimit: String(school.studentLimit),
    subscriptionExpiresAt: school.subscriptionExpiresAt || '',
    registrationStatus: school.registrationStatus,
    isActive: school.isActive,
    notes: school.notes || '',
  });
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const set = (key: string) => (e: React.ChangeEvent<any>) =>
    setForm({ ...form, [key]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      await api.patch(`/owner/schools/${school._id}`, { ...form, studentLimit: Number(form.studentLimit) });
      onDone(`${school.name} saved`);
    } catch (err) {
      setError(apiError(err));
    } finally {
      setSaving(false);
    }
  };

  return (
    <Modal title={`${school.name} (${school.code})`} onClose={onClose}>
      <form onSubmit={submit} className="space-y-4">
        <LicenceFields form={form} set={set} />
        <Field label="Status">
          <SelectInput value={form.registrationStatus} onChange={set('registrationStatus')}>
            <option value="pending">Waiting for approval</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </SelectInput>
        </Field>
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <input type="checkbox" checked={form.isActive} onChange={set('isActive')} className="rounded" />
          School can sign in (untick to suspend, e.g. unpaid)
        </label>
        <Field label="Notes (only you see these)" hint="e.g. payment reference, contact person">
          <TextInput value={form.notes} onChange={set('notes')} />
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

const CreateSchool: React.FC<{ onClose: () => void; onDone: (message: string) => void }> = ({ onClose, onDone }) => {
  const [form, setForm] = useState({
    name: '',
    code: '',
    city: '',
    phone: '',
    board: 'state_board',
    studentLimit: '100',
    subscriptionExpiresAt: '',
    adminName: '',
    adminEmail: '',
    adminPassword: '',
  });
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const set = (key: string) => (e: React.ChangeEvent<any>) => setForm({ ...form, [key]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      await api.post('/owner/schools', { ...form, studentLimit: Number(form.studentLimit) });
      onDone(`${form.name} created. The school admin signs in with ${form.adminEmail}.`);
    } catch (err) {
      setError(apiError(err));
    } finally {
      setSaving(false);
    }
  };

  return (
    <Modal title="Add school" onClose={onClose} wide>
      <form onSubmit={submit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-3">
          <Field label="School name">
            <TextInput required value={form.name} onChange={set('name')} />
          </Field>
          <Field label="School code" hint="Students and teachers use it to register">
            <TextInput required value={form.code} onChange={set('code')} placeholder="e.g. SVM001" />
          </Field>
          <Field label="City">
            <TextInput value={form.city} onChange={set('city')} />
          </Field>
          <Field label="Phone">
            <TextInput type="tel" value={form.phone} onChange={set('phone')} />
          </Field>
        </div>
        <LicenceFields form={form} set={set} />
        <h3 className="pt-2 text-sm font-semibold text-slate-700 dark:text-slate-200">School admin login</h3>
        <div className="grid sm:grid-cols-3 gap-3">
          <Field label="Name">
            <TextInput value={form.adminName} onChange={set('adminName')} />
          </Field>
          <Field label="Email">
            <TextInput type="email" required value={form.adminEmail} onChange={set('adminEmail')} />
          </Field>
          <Field label="Password">
            <TextInput required minLength={6} value={form.adminPassword} onChange={set('adminPassword')} />
          </Field>
        </div>
        {error && <Alert>{error}</Alert>}
        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={saving}>
            {saving ? 'Creating…' : 'Create school'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default SchoolsManager;
