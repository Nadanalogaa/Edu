import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';
import { applyBrand } from '../utils/brand';
import Login from './Login';

// A school's own sign-in page (/s/<school code>): its logo, name and colour,
// with the school code already filled in. An unknown code shows the normal page.

const SchoolLoginRoute: React.FC = () => {
  const { code } = useParams();
  const { currentUser, isLoading } = useAuth();
  const [school, setSchool] = useState<{ name: string; code: string; logoUrl?: string | null; brandColor?: string | null } | null | undefined>(undefined);

  useEffect(() => {
    api
      .get(`/public/school/${encodeURIComponent(code || '')}`)
      .then((res) => {
        setSchool(res.data.data);
        applyBrand(res.data.data.brandColor);
      })
      .catch(() => setSchool(null));
    return () => applyBrand(null);
  }, [code]);

  if (isLoading || school === undefined) return null;
  if (currentUser) return <Navigate to="/dashboard" replace />;
  return school ? <Login school={school} /> : <Navigate to="/login" replace />;
};

export default SchoolLoginRoute;
