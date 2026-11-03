import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import {
  PageHeader, Panel, StatTile, UsageBar, Alert, Spinner, Table, EmptyState, Button,
  apiError, boardLabel, classLabel, formatDate,
} from '../common/ui';

interface Overview {
  school: { name: string; code: string; board: string; subscriptionExpiresAt: string | null };
  activeStudents: number;
  inactiveStudents: number;
  activeTeachers: number;
  inactiveTeachers: number;
  studentLimit: number;
  tests: number;
  byClass: { classGrade: number | null; section: string | null; students: number }[];
}

const daysUntil = (date: string) => Math.ceil((new Date(`${date}T23:59:59`).getTime() - Date.now()) / 86400000);

/** School admin home: licence usage, people waiting for approval, students by class. */
const SchoolOverview: React.FC<{ onNavigate: (view: string) => void }> = ({ onNavigate }) => {
  const [data, setData] = useState<Overview | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    api
      .get('/school/overview')
      .then((res) => setData(res.data.data))
      .catch((err) => setError(apiError(err, 'Could not load the school overview')));
  }, []);

  if (error) return <Alert>{error}</Alert>;
  if (!data) return <Spinner />;

  const { school } = data;
  const seatsLeft = data.studentLimit - data.activeStudents;
  const expiresIn = school.subscriptionExpiresAt ? daysUntil(school.subscriptionExpiresAt) : null;

  return (
    <div className="space-y-6">
      <PageHeader title={school.name} subtitle={`${boardLabel(school.board)} · School code ${school.code}`} />

      {expiresIn !== null && expiresIn <= 30 && (
        <Alert tone="info">
          Your subscription ends on {formatDate(school.subscriptionExpiresAt)} ({expiresIn} days left). Please contact support to renew.
        </Alert>
      )}
      {(data.inactiveStudents > 0 || data.inactiveTeachers > 0) && (
        <Alert tone="info">
          Waiting for approval or inactive: {data.inactiveStudents} students, {data.inactiveTeachers} teachers.{' '}
          <button type="button" className="underline font-medium" onClick={() => onNavigate(data.inactiveStudents ? 'students' : 'teachers')}>
            Review now
          </button>
        </Alert>
      )}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <StatTile
          label="Active students"
          value={data.activeStudents}
          hint={<UsageBar used={data.activeStudents} limit={data.studentLimit} />}
          tone={seatsLeft <= 0 ? 'danger' : seatsLeft <= data.studentLimit * 0.15 ? 'warn' : 'default'}
        />
        <StatTile label="Seats left" value={Math.max(0, seatsLeft)} hint={`Licence: ${data.studentLimit} students`} />
        <StatTile label="Active teachers" value={data.activeTeachers} />
        <StatTile label="Tests created" value={data.tests} />
      </div>

      <Panel
        title="Students by class"
        actions={
          <Button variant="ghost" size="sm" onClick={() => onNavigate('students')}>
            Manage students
          </Button>
        }
      >
        {data.byClass.length === 0 ? (
          <EmptyState>No students yet. Add students one by one or import a CSV file from the Students page.</EmptyState>
        ) : (
          <Table head={['Class', 'Students']}>
            {data.byClass.map((row) => (
              <tr key={`${row.classGrade}-${row.section}`}>
                <td className="px-4 py-3 font-medium">{row.classGrade ? classLabel(row.classGrade, row.section) : 'No class set'}</td>
                <td className="px-4 py-3">{row.students}</td>
              </tr>
            ))}
          </Table>
        )}
      </Panel>
    </div>
  );
};

export default SchoolOverview;
