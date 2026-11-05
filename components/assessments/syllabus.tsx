import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { SelectInput, CLASS_GRADES } from '../common/ui';

export interface Subject {
  _id: string;
  code: string;
  nameEn: string;
  nameTa: string;
  classGrade: number;
  board: string;
  chapterCount: number;
}

export interface Chapter {
  _id: string;
  number: number;
  nameEn: string;
  nameTa: string;
}

/** Subjects of a class (the user's own board; the owner passes one). */
export const useSubjects = (classGrade: number | '', board?: string) => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  useEffect(() => {
    if (!classGrade) return setSubjects([]);
    let cancelled = false;
    api
      .get('/syllabus/subjects', { params: { classGrade, board } })
      .then((res) => !cancelled && setSubjects(res.data.data))
      .catch(() => !cancelled && setSubjects([]));
    return () => {
      cancelled = true;
    };
  }, [classGrade, board]);
  return subjects;
};

export const useChapters = (subjectId: string) => {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  useEffect(() => {
    if (!subjectId) return setChapters([]);
    let cancelled = false;
    api
      .get(`/syllabus/subjects/${subjectId}/chapters`)
      .then((res) => !cancelled && setChapters(res.data.data.chapters))
      .catch(() => !cancelled && setChapters([]));
    return () => {
      cancelled = true;
    };
  }, [subjectId]);
  return chapters;
};

export const chapterLabel = (c: Chapter) => `${c.number}. ${c.nameEn}`;

/** Class, subject and (optionally) chapter dropdowns side by side. */
export const SyllabusFilters: React.FC<{
  classGrade: number | '';
  subjectId: string;
  chapterId?: string;
  subjects: Subject[];
  chapters?: Chapter[];
  onChange: (next: { classGrade: number | ''; subjectId: string; chapterId?: string }) => void;
  allChaptersLabel?: string;
}> = ({ classGrade, subjectId, chapterId, subjects, chapters, onChange, allChaptersLabel = 'All chapters' }) => (
  <>
    <SelectInput
      aria-label="Class"
      value={classGrade}
      onChange={(e) => onChange({ classGrade: e.target.value ? Number(e.target.value) : '', subjectId: '', chapterId: '' })}
    >
      <option value="">Select class</option>
      {CLASS_GRADES.map((g) => (
        <option key={g} value={g}>
          {g}th
        </option>
      ))}
    </SelectInput>
    <SelectInput
      aria-label="Subject"
      value={subjectId}
      disabled={!classGrade}
      onChange={(e) => onChange({ classGrade, subjectId: e.target.value, chapterId: '' })}
    >
      <option value="">Select subject</option>
      {subjects.map((s) => (
        <option key={s._id} value={s._id}>
          {s.nameEn}
        </option>
      ))}
    </SelectInput>
    {chapters && (
      <SelectInput
        aria-label="Chapter"
        value={chapterId}
        disabled={!subjectId}
        onChange={(e) => onChange({ classGrade, subjectId, chapterId: e.target.value })}
      >
        <option value="">{allChaptersLabel}</option>
        {chapters.map((c) => (
          <option key={c._id} value={c._id}>
            {chapterLabel(c)}
          </option>
        ))}
      </SelectInput>
    )}
  </>
);

export const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

/** Downloads a file from an authenticated API endpoint. */
export const downloadFromApi = async (path: string, filename: string) => {
  const res = await api.get(path, { responseType: 'blob' });
  const url = URL.createObjectURL(res.data);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};

/** A class/section/subject a teacher looks after; NULL = all. */
export interface MyClass {
  classGrade: number | null;
  section: string | null;
  subjectId: string | null;
}

/**
 * The signed-in teacher's classes: undefined while loading, null when there is
 * no limit (admins, owner, whole-school teachers), otherwise the list.
 */
export const useMyClasses = () => {
  const [classes, setClasses] = useState<MyClass[] | null | undefined>(undefined);
  useEffect(() => {
    let cancelled = false;
    api
      .get('/assessments/my-classes')
      .then((res) => !cancelled && setClasses(res.data.data))
      .catch(() => !cancelled && setClasses(null));
    return () => {
      cancelled = true;
    };
  }, []);
  return classes;
};

const fits = (c: MyClass, classGrade: number | '', subjectId?: string) =>
  (!c.classGrade || c.classGrade === classGrade) && (!subjectId || !c.subjectId || c.subjectId === subjectId);

/** Classes the teacher may set tests for. */
export const allowedGrades = (mine: MyClass[] | null | undefined, all: number[]) =>
  !mine ? all : mine.some((c) => !c.classGrade) ? all : all.filter((g) => mine.some((c) => c.classGrade === g));

/** May the teacher set tests in this subject of this class? */
export const canSetSubject = (mine: MyClass[] | null | undefined, classGrade: number | '', subjectId: string) =>
  !mine || mine.some((c) => fits(c, classGrade, subjectId));

/** Sections the teacher may choose for a class and subject; null = any section (including "all sections"). */
export const allowedSections = (mine: MyClass[] | null | undefined, classGrade: number | '', subjectId: string) => {
  if (!mine) return null;
  const matching = mine.filter((c) => fits(c, classGrade, subjectId) && (!c.subjectId || !subjectId || c.subjectId === subjectId));
  if (!matching.length || matching.some((c) => !c.section)) return null;
  return [...new Set(matching.map((c) => c.section!))].sort();
};
