import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { PageHeader, Panel } from '../common/ui';
import BrandingEditor from './BrandingEditor';

// School admin: their school's logo, colour and sign-in link.
const SchoolBranding: React.FC = () => {
  const { currentUser, updateUser } = useAuth();
  return (
    <div className="space-y-4">
      <PageHeader title="School branding" subtitle="Your logo and colour appear for every student, teacher and admin of your school, and on your school's sign-in page." />
      <Panel>
        <BrandingEditor
          previewWholeApp
          onSaved={(b) => currentUser && updateUser({ ...currentUser, schoolLogo: b.logoUrl, brandColor: b.brandColor })}
        />
      </Panel>
    </div>
  );
};

export default SchoolBranding;
