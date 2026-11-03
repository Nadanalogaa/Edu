import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { PageHeader, StatTile, Alert, Spinner, Panel, Button, Table, apiError, boardLabel } from '../common/ui';

interface Totals {
  schools: number;
  activeSchools: number;
  pendingSchools: number;
  expiredSchools: number;
  licensedSeats: number;
  activeStudents: number;
  activeTeachers: number;
  sharedQuestions: number;
}

interface Demo {
  board: string;
  schoolName: string;
  schoolCode: string;
  admin: { email: string; password: string };
  teacher: { email: string; password: string };
  student: { schoolCode: string; admissionNumber: string; password: string };
}

/** Creates or resets the 9th standard demo schools and shows their logins. */
const DemoPanel: React.FC = () => {
  const [demos, setDemos] = useState<Demo[] | null>(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const setup = async () => {
    if (!window.confirm('Create the demo schools? If they already exist, they are reset to fresh demo data.')) return;
    setBusy(true);
    setError('');
    try {
      const res = await api.post('/owner/demo', {}, { timeout: 120000 });
      setDemos(res.data.data);
    } catch (err) {
      setError(apiError(err, 'Could not set up the demo'));
    } finally {
      setBusy(false);
    }
  };

  return (
    <Panel
      title="9th standard demo"
      actions={
        <Button size="sm" disabled={busy} onClick={setup}>
          {busy ? 'Setting up…' : 'Set up / reset demo'}
        </Button>
      }
    >
      <p className="text-sm text-slate-600 dark:text-slate-300">
        Two demo schools (State Board and CBSE), each with 24 students in 9th A and B, five weeks of test results and one test open now. Use them to show
        schools the reports and the student experience. Resetting only touches the demo schools.
      </p>
      {error && <div className="mt-3"><Alert>{error}</Alert></div>}
      {demos && (
        <div className="mt-4">
          <Table head={['School', 'School admin', 'Teacher', 'Student']}>
            {demos.map((d) => (
              <tr key={d.schoolCode}>
                <td className="px-4 py-2">
                  <p className="font-medium text-slate-800 dark:text-slate-100">{boardLabel(d.board)}</p>
                  <p className="text-xs text-slate-500">code {d.schoolCode}</p>
                </td>
                <td className="px-4 py-2 text-xs">{d.admin.email}<br />{d.admin.password}</td>
                <td className="px-4 py-2 text-xs">{d.teacher.email}<br />{d.teacher.password}</td>
                <td className="px-4 py-2 text-xs">
                  school code {d.student.schoolCode}<br />admission no. {d.student.admissionNumber} · {d.student.password}
                </td>
              </tr>
            ))}
          </Table>
        </div>
      )}
    </Panel>
  );
};

/** Owner home: the business at a glance. */
const OwnerOverview: React.FC<{ onNavigate: (view: string) => void }> = ({ onNavigate }) => {
  const [data, setData] = useState<Totals | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    api
      .get('/owner/overview')
      .then((res) => setData(res.data.data))
      .catch((err) => setError(apiError(err, 'Could not load the overview')));
  }, []);

  if (error) return <Alert>{error}</Alert>;
  if (!data) return <Spinner />;

  return (
    <div className="space-y-6">
      <PageHeader title="Owner dashboard" subtitle="All schools using the platform" />

      {data.pendingSchools > 0 && (
        <Alert tone="info">
          {data.pendingSchools} school{data.pendingSchools === 1 ? ' is' : 's are'} waiting for approval.{' '}
          <button type="button" className="underline font-medium" onClick={() => onNavigate('schools')}>
            Review now
          </button>
        </Alert>
      )}
      {data.expiredSchools > 0 && (
        <Alert>
          {data.expiredSchools} school subscription{data.expiredSchools === 1 ? ' has' : 's have'} expired. Their users cannot sign in.
        </Alert>
      )}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <StatTile label="Active schools" value={data.activeSchools} hint={`${data.schools} in total`} />
        <StatTile
          label="Active students"
          value={data.activeStudents}
          hint={`${data.licensedSeats} seats sold`}
        />
        <StatTile label="Active teachers" value={data.activeTeachers} />
        <StatTile label="Shared questions" value={data.sharedQuestions} hint="Visible to every school" />
      </div>

      <DemoPanel />
    </div>
  );
};

export default OwnerOverview;
