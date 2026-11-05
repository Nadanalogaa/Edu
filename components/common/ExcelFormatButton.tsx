import React, { useState } from 'react';
import api from '../../services/api';
import { Button } from './ui';

// "Download Excel format" for a module (students, teachers, question bank).
// Downloads the school's own version from the server (with its classes,
// subjects or chapters filled in); if that is not possible, the sample copy
// kept in /templates.

const save = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};

export const SAMPLE_FILES = {
  students: '/templates/students-import-sample.xlsx',
  teachers: '/templates/teachers-import-sample.xlsx',
  questions: '/templates/question-bank-sample.xlsx',
};

const ExcelFormatButton: React.FC<{
  /** Server path of the school's own template; without it the sample copy is downloaded. */
  path?: string;
  sample: string;
  filename: string;
  label?: string;
  variant?: 'secondary' | 'ghost';
  size?: 'sm' | 'md';
}> = ({ path, sample, filename, label = 'Excel format', variant = 'secondary', size = 'md' }) => {
  const [busy, setBusy] = useState(false);
  const download = async () => {
    setBusy(true);
    try {
      if (!path) throw new Error('no server template');
      const res = await api.get(path, { responseType: 'blob' });
      save(res.data, filename);
    } catch {
      const res = await fetch(sample);
      if (res.ok) save(await res.blob(), sample.split('/').pop()!);
    } finally {
      setBusy(false);
    }
  };
  return (
    <Button variant={variant} size={size} disabled={busy} onClick={download} title="Excel file with the columns, sample rows and a How to fill sheet">
      📄 {busy ? 'Downloading…' : label}
    </Button>
  );
};

export default ExcelFormatButton;
