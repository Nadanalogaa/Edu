import { Table } from '../db/table';

export const Schools = new Table(
  'schools',
  [
    'name', 'code', 'address', 'city', 'state', 'pincode', 'phone', 'email', 'principal',
    'principalPhone', 'principalEmail', 'website', 'established', 'boardAffiliation',
    'totalStrength', 'documents', 'registrationStatus', 'registrationDate', 'isActive',
  ],
  ['documents']
);
