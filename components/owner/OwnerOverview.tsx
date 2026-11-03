import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { PageHeader, StatTile, Alert, Spinner, apiError } from '../common/ui';

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
    </div>
  );
};

export default OwnerOverview;
