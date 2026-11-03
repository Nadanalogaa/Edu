import { Table } from '../db/table';

export const Teachers = new Table(
  'teachers',
  [
    'userId', 'teacherName', 'dateOfBirth', 'gender', 'mobileNumber', 'email', 'alternatePhone',
    'addressLine1', 'addressLine2', 'city', 'state', 'pincode', 'country', 'qualifications',
    'experience', 'totalExperience', 'subjectsTeaching', 'specialization', 'coursesPreparing',
    'availableForOnlineClasses', 'availableForOfflineClasses', 'preferredLanguages', 'documents',
    'registrationStatus', 'verificationStatus', 'registrationDate',
  ],
  ['qualifications', 'experience', 'documents']
);
