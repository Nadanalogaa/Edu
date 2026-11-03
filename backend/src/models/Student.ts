import { Table } from '../db/table';

export const Students = new Table(
  'students',
  [
    'userId', 'courseAppliedFor', 'studentName', 'dateOfBirth', 'gender', 'schoolDetails',
    'parentDetails', 'addressDetails', 'admissionDetails', 'documents', 'registrationStatus',
    'registrationDate',
  ],
  ['parentDetails', 'addressDetails', 'admissionDetails', 'documents']
);
