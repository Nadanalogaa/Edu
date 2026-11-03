import { Request, Response } from 'express';
import * as XLSX from 'xlsx';
import { Questions, questionsInOrder } from '../models/Question';
import { Tests, populateTests } from '../models/Test';
import { DailyChallenges, localDateString } from '../models/DailyChallenge';
import { UploadedFiles } from '../models/UploadedFile';
import { Users } from '../models/User';
import { isUuid, pick, Doc } from '../db/table';
import { query } from '../config/database';
import fs from 'fs';

/** Active questions among the given ids. */
const activeQuestions = (ids: string[]) =>
  Questions.select('SELECT * FROM questions WHERE id = ANY($1::uuid[]) AND is_active = true', [
    ids.filter(isUuid),
  ]);

const populateChallenge = async (challenge: Doc | null) =>
  challenge && { ...challenge, questionIds: await questionsInOrder(challenge.questionIds) };

interface ExcelRow {
  _id: number;
  'question ': string;
  'கேள்வி': string;
  questionOptions: string;
  'விருப்பங்கள் ': string;
  'answers ': string;
  'பதில் ': string;
  explanation: string;
  'விளக்கம் ': string;
}

/**
 * Parse filename to extract subject, unit, and chapter
 * Example: bl_bio_bot_unit_4_chap_9_the_tissues_qb.xlsx
 * Returns: { subject: 'Biology', unit: 4, chapter: 9, chapterName: 'the tissues' }
 */
const parseFilename = (filename: string) => {
  const nameParts = filename.replace('.xlsx', '').split('_');

  // Find unit and chapter numbers
  const unitIndex = nameParts.findIndex(part => part === 'unit');
  const chapIndex = nameParts.findIndex(part => part === 'chap');

  const unit = unitIndex !== -1 ? parseInt(nameParts[unitIndex + 1]) : 1;
  const chapter = chapIndex !== -1 ? parseInt(nameParts[chapIndex + 1]) : 1;

  // Extract chapter name (parts after chapter number until 'qb')
  let chapterName = '';
  if (chapIndex !== -1) {
    const startIdx = chapIndex + 2;
    const endIdx = nameParts.findIndex(part => part === 'qb');
    chapterName = nameParts
      .slice(startIdx, endIdx !== -1 ? endIdx : undefined)
      .join(' ');
  }

  // Determine subject from prefix
  let subject: 'Physics' | 'Chemistry' | 'Biology' | 'Maths' = 'Biology';
  if (nameParts.some(p => p.includes('phy'))) subject = 'Physics';
  else if (nameParts.some(p => p.includes('chem'))) subject = 'Chemistry';
  else if (nameParts.some(p => p.includes('bio'))) subject = 'Biology';
  else if (nameParts.some(p => p.includes('math'))) subject = 'Maths';

  return { subject, unit, chapter, chapterName };
};

/**
 * Parse options string and return array of options
 * Input: "1) Option A | 2) Option B | 3) Option C | 4) Option D"
 * Output: ["Option A", "Option B", "Option C", "Option D"]
 */
const parseOptions = (optionsStr: string): string[] => {
  return optionsStr
    .split('|')
    .map(opt => opt.trim())
    .map(opt => opt.replace(/^\d+\)\s*/, '').trim()) // Remove "1) " prefix
    .map(opt => opt.replace(/^[A-D]\)\s*/, '').trim()); // Remove "A) " prefix
};

/**
 * Convert answer letter to index
 * A → 0, B → 1, C → 2, D → 3
 */
const answerToIndex = (answerText: string): number => {
  const letter = answerText.trim().charAt(0).toUpperCase();
  const mapping: { [key: string]: number } = { A: 0, B: 1, C: 2, D: 3 };
  return mapping[letter] !== undefined ? mapping[letter] : 0;
};

/**
 * Upload questions from Excel file
 */
export const uploadQuestions = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No file uploaded',
      });
    }

    const userId = (req as any).user?.id;
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: 'User not authenticated',
      });
    }

    // Get examType and subject from form data
    const formExamType = req.body.examType as 'NEET' | 'JEE' | 'Both';
    const formSubject = req.body.subject as 'Physics' | 'Chemistry' | 'Biology' | 'Maths';

    // Parse filename to extract metadata
    const filename = req.file.originalname;
    const { subject: parsedSubject, unit, chapter, chapterName } = parseFilename(filename);

    // Use form subject if provided, otherwise use parsed from filename
    const subject = formSubject || parsedSubject;
    const examType = formExamType || 'NEET';

    // Read the Excel file
    const workbook = XLSX.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data: ExcelRow[] = XLSX.utils.sheet_to_json(worksheet);

    console.log(`Processing ${data.length} questions from ${filename}`);
    console.log(`Form Data - ExamType: ${formExamType}, Subject: ${formSubject}`);
    console.log(`Using: ${examType} - ${subject} - Unit ${unit} - Chapter ${chapter} - ${chapterName}`);

    const questions = [];
    const errors = [];

    for (let i = 0; i < data.length; i++) {
      const row = data[i];

      try {
        // Parse English and Tamil options
        const optionsEn = parseOptions(row.questionOptions);
        const optionsTa = parseOptions(row['விருப்பங்கள் ']);

        // Validate options count
        if (optionsEn.length !== 4 || optionsTa.length !== 4) {
          errors.push({
            row: i + 1,
            id: row._id,
            error: `Invalid options count (EN: ${optionsEn.length}, TA: ${optionsTa.length})`,
          });
          continue;
        }

        // Get correct answer index
        const correctAnswer = answerToIndex(row['பதில் ']);

        const question = {
          externalId: row._id,
          subject,
          unit,
          chapter,
          chapterName: {
            en: chapterName.charAt(0).toUpperCase() + chapterName.slice(1),
            ta: '', // Can be filled manually later if needed
          },
          topic: chapterName.charAt(0).toUpperCase() + chapterName.slice(1),
          difficulty: 'medium' as const,
          question: {
            en: row['question '].trim(),
            ta: row['கேள்வி'].trim(),
          },
          options: {
            en: optionsEn,
            ta: optionsTa,
          },
          correctAnswer,
          explanation: {
            en: row.explanation.trim(),
            ta: row['விளக்கம் '].trim(),
          },
          marks: 4,
          examType: 'NEET' as const,
          isActive: true,
          createdBy: userId,
        };

        questions.push(question);
      } catch (error: any) {
        errors.push({
          row: i + 1,
          id: row._id,
          error: error.message,
        });
      }
    }

    // Insert questions into database using bulk operations
    let insertedCount = 0;
    let duplicateCount = 0;

    // Get all existing external IDs in one query
    const externalIds = questions.map(q => q.externalId).filter(Boolean);
    const existingQuestions = await Questions.select(
      'SELECT id, external_id, is_active FROM questions WHERE external_id = ANY($1::int[])',
      [externalIds]
    );
    const existingIds = new Set(existingQuestions.map(q => q.externalId));

    // Reactivate any inactive questions that are being re-uploaded
    const inactiveQuestions = existingQuestions.filter(q => !q.isActive);
    if (inactiveQuestions.length > 0) {
      await query('UPDATE questions SET is_active = true, updated_at = now() WHERE id = ANY($1::uuid[])', [
        inactiveQuestions.map(q => q._id),
      ]);
      console.log(`Reactivated ${inactiveQuestions.length} previously deleted questions`);
    }

    // Filter out duplicates
    const questionsToInsert = questions.filter(q => {
      if (q.externalId && existingIds.has(q.externalId)) {
        duplicateCount++;
        console.log(`Skipping duplicate question: ${q.externalId}`);
        return false;
      }
      return true;
    });

    // Bulk insert remaining questions
    const insertedQuestionIds: any[] = [];
    if (questionsToInsert.length > 0) {
      try {
        // Insert row by row so one bad question does not stop the rest (like ordered: false)
        for (const q of questionsToInsert) {
          try {
            const inserted = await Questions.insert(q);
            insertedQuestionIds.push(inserted._id);
          } catch (error: any) {
            errors.push({
              id: q.externalId,
              error: error.message,
            });
          }
        }
        insertedCount = insertedQuestionIds.length;
        console.log(`Successfully inserted ${insertedCount} questions`);
      } catch (error: any) {
        errors.push({
          error: error.message,
        });
      }
    }

    // Get all question IDs (both newly inserted and existing) for this file
    // IMPORTANT: Preserve Excel row order by mapping externalIds in order
    const allQuestionIds: any[] = [];

    // Fetch all questions by their externalIds to get database IDs
    const allQuestions = await Questions.select(
      'SELECT id, external_id FROM questions WHERE external_id = ANY($1::int[]) AND is_active = true',
      [externalIds]
    );

    // Create a map of externalId -> _id for fast lookup
    const externalIdToDbId = new Map();
    allQuestions.forEach(q => {
      externalIdToDbId.set(q.externalId, q._id);
    });

    // Preserve Excel order: map each externalId (in Excel order) to its database _id
    externalIds.forEach(externalId => {
      const dbId = externalIdToDbId.get(externalId);
      if (dbId) {
        allQuestionIds.push(dbId);
      }
    });

    console.log(`Total questions for this file: ${allQuestionIds.length} (${insertedCount} new, ${duplicateCount} existing)`);

    // Create UploadedFile record to track this upload
    // Always create a file record with ALL question IDs
    try {
      await UploadedFiles.insert({
        fileName: filename,
        examType,
        subject,
        unit,
        chapter,
        chapterName: chapterName || 'Unknown Chapter', // Default value if empty
        questionCount: allQuestionIds.length,
        questionIds: allQuestionIds,
        uploadedBy: userId,
        uploadDate: new Date(),
        isActive: true,
      });
      console.log(`Created file metadata record for ${filename} - ${examType} - ${subject} - ${allQuestionIds.length} questions`);
    } catch (error: any) {
      console.error('Error creating file metadata:', error);
      // Don't fail the entire upload if metadata creation fails
    }

    // Clean up uploaded file
    fs.unlinkSync(req.file.path);

    return res.status(200).json({
      success: true,
      message: 'Questions uploaded successfully',
      data: {
        total: data.length,
        inserted: insertedCount,
        duplicates: duplicateCount,
        errors: errors.length,
        errorDetails: errors.slice(0, 10), // Return first 10 errors
        metadata: {
          subject,
          unit,
          chapter,
          chapterName,
        },
      },
    });
  } catch (error: any) {
    console.error('Error uploading questions:', error);

    // Clean up file if it exists
    if (req.file?.path) {
      try {
        fs.unlinkSync(req.file.path);
      } catch (e) {
        console.error('Error deleting file:', e);
      }
    }

    return res.status(500).json({
      success: false,
      message: 'Failed to upload questions',
      error: error.message,
    });
  }
};

/**
 * Get all questions with filters
 */
export const getQuestions = async (req: Request, res: Response) => {
  try {
    const {
      subject,
      unit,
      chapter,
      difficulty,
      examType,
      ids,
      page = 1,
      limit = 20,
    } = req.query;

    let questions: any[] = [];
    let total = 0;

    // If IDs are provided, fetch questions by IDs and preserve order
    if (ids) {
      const questionIds = (ids as string).split(',');

      // Fetch all questions without sorting
      const fetchedQuestions = await activeQuestions(questionIds);

      // Create a map of _id -> question for fast lookup
      const idToQuestion = new Map();
      fetchedQuestions.forEach(q => {
        idToQuestion.set(q._id, q);
      });

      // Preserve the order from questionIds array (Excel order)
      questions = questionIds
        .map(id => idToQuestion.get(id))
        .filter(q => q !== undefined); // Remove any missing questions

      total = questions.length;

      // Apply pagination to the ordered results
      const skip = (parseInt(page as string) - 1) * parseInt(limit as string);
      const limitNum = parseInt(limit as string);
      questions = questions.slice(skip, skip + limitNum);
    } else {
      // Otherwise use filters with normal sorting
      const params: any[] = [];
      const where = ['is_active = true'];
      const add = (column: string, value: any) => {
        params.push(value);
        where.push(`${column} = $${params.length}`);
      };
      if (subject) add('subject', subject);
      if (unit) add('unit', parseInt(unit as string));
      if (chapter) add('chapter', parseInt(chapter as string));
      if (difficulty) add('difficulty', difficulty);
      if (examType) add('exam_type', examType);
      const whereSql = `WHERE ${where.join(' AND ')}`;

      const skip = (parseInt(page as string) - 1) * parseInt(limit as string);

      questions = await Questions.select(
        `SELECT * FROM questions ${whereSql} ORDER BY created_at DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`,
        [...params, parseInt(limit as string), skip]
      );

      [{ total }] = await query(`SELECT count(*)::int AS total FROM questions ${whereSql}`, params);
    }

    return res.status(200).json({
      success: true,
      data: {
        questions,
        pagination: {
          page: parseInt(page as string),
          limit: parseInt(limit as string),
          total,
          pages: Math.ceil(total / parseInt(limit as string)),
        },
      },
    });
  } catch (error: any) {
    console.error('Error fetching questions:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch questions',
      error: error.message,
    });
  }
};

/**
 * Delete a question
 */
export const deleteQuestion = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const question = await Questions.updateById(id, { isActive: false });

    if (!question) {
      return res.status(404).json({
        success: false,
        message: 'Question not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Question deleted successfully',
      data: question,
    });
  } catch (error: any) {
    console.error('Error deleting question:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to delete question',
      error: error.message,
    });
  }
};

/**
 * Update question properties in bulk (difficulty, marks)
 */
export const updateQuestionProperties = async (req: Request, res: Response) => {
  try {
    const { questionIds, difficulty, marks } = req.body;

    if (!questionIds || !Array.isArray(questionIds) || questionIds.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Question IDs are required',
      });
    }

    const updates: any = {};
    if (difficulty) updates.difficulty = difficulty;
    if (marks !== undefined) updates.marks = marks;

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No updates provided',
      });
    }

    const sets: string[] = [];
    const params: any[] = [questionIds.filter(isUuid)];
    if (updates.difficulty) {
      params.push(updates.difficulty);
      sets.push(`difficulty = $${params.length}`);
    }
    if (updates.marks !== undefined) {
      params.push(updates.marks);
      sets.push(`marks = $${params.length}`);
    }

    const updated = await query(
      `UPDATE questions SET ${sets.join(', ')}, updated_at = now()
       WHERE id = ANY($1::uuid[]) AND is_active = true RETURNING id`,
      params
    );

    return res.status(200).json({
      success: true,
      message: `Updated ${updated.length} question(s)`,
      data: {
        matched: updated.length,
        modified: updated.length,
      },
    });
  } catch (error: any) {
    console.error('Error updating question properties:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to update question properties',
      error: error.message,
    });
  }
};

/**
 * Get all uploaded files with filters
 */
export const getUploadedFiles = async (req: Request, res: Response) => {
  try {
    const {
      examType,
      subject,
      page = 1,
      limit = 20,
    } = req.query;

    const params: any[] = [];
    const where = ['is_active = true'];
    if (examType) {
      params.push(examType);
      where.push(`exam_type = $${params.length}`);
    }
    if (subject) {
      params.push(subject);
      where.push(`subject = $${params.length}`);
    }
    const whereSql = `WHERE ${where.join(' AND ')}`;

    const skip = (parseInt(page as string) - 1) * parseInt(limit as string);

    const rows = await UploadedFiles.select(
      `SELECT * FROM uploaded_files ${whereSql} ORDER BY upload_date DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`,
      [...params, parseInt(limit as string), skip]
    );
    const uploaders = await Users.findByIds(rows.map(f => f.uploadedBy));
    const files = rows.map(f => ({ ...f, uploadedBy: pick(uploaders.get(f.uploadedBy), ['name', 'email']) }));

    const [{ total }] = await query(`SELECT count(*)::int AS total FROM uploaded_files ${whereSql}`, params);

    return res.status(200).json({
      success: true,
      data: {
        files,
        pagination: {
          page: parseInt(page as string),
          limit: parseInt(limit as string),
          total,
          pages: Math.ceil(total / parseInt(limit as string)),
        },
      },
    });
  } catch (error: any) {
    console.error('Error fetching uploaded files:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch uploaded files',
      error: error.message,
    });
  }
};

/**
 * Delete an uploaded file and all its questions
 */
export const deleteUploadedFile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Find the file record
    const file = await UploadedFiles.findById(id);

    if (!file) {
      return res.status(404).json({
        success: false,
        message: 'File not found',
      });
    }

    // Soft delete all associated questions
    if (file.questionIds && file.questionIds.length > 0) {
      await query('UPDATE questions SET is_active = false, updated_at = now() WHERE id = ANY($1::uuid[])', [
        file.questionIds,
      ]);
      console.log(`Deleted ${file.questionIds.length} questions from file ${file.fileName}`);
    }

    // Soft delete the file record
    const deletedFile = await UploadedFiles.updateById(file._id, { isActive: false });

    return res.status(200).json({
      success: true,
      message: 'File and associated questions deleted successfully',
      data: deletedFile,
    });
  } catch (error: any) {
    console.error('Error deleting uploaded file:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to delete uploaded file',
      error: error.message,
    });
  }
};

/**
 * Create a new test/exam
 */
export const createTest = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user?.id;
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: 'User not authenticated',
      });
    }

    const {
      title,
      description,
      type,
      examType,
      subjects,
      duration,
      questionIds,
      startTime,
      endTime,
      isPublished,
    } = req.body;

    // Validate required fields
    if (!title || !type || !examType || !subjects || !duration || !questionIds) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields',
      });
    }

    // Validate questions exist
    const questions = await activeQuestions(questionIds);
    if (questions.length !== questionIds.length) {
      return res.status(400).json({
        success: false,
        message: 'Some questions are invalid or inactive',
      });
    }

    // Calculate total marks
    const totalMarks = questions.reduce((sum, q) => sum + q.marks, 0);

    const test = await Tests.insert({
      title,
      description,
      createdBy: userId,
      type,
      examType,
      subjects: Array.isArray(subjects) ? subjects : [subjects],
      duration,
      totalMarks,
      questions: questionIds,
      startTime: startTime ? new Date(startTime) : undefined,
      endTime: endTime ? new Date(endTime) : undefined,
      isPublished: isPublished || false,
      isActive: true,
      sharedWithStudents: [],
      sharedWithGrades: [],
    });

    const [populatedTest] = await populateTests([test], { withQuestions: true });

    return res.status(201).json({
      success: true,
      message: 'Test created successfully',
      data: populatedTest,
    });
  } catch (error: any) {
    console.error('Error creating test:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to create test',
      error: error.message,
    });
  }
};

/**
 * Get all tests with filters
 */
export const getTests = async (req: Request, res: Response) => {
  try {
    const { type, examType, isPublished, page = 1, limit = 20 } = req.query;

    const params: any[] = [];
    const where = ['is_active = true'];
    const add = (column: string, value: any) => {
      params.push(value);
      where.push(`${column} = $${params.length}`);
    };
    if (type) add('type', type);
    if (examType) add('exam_type', examType);
    if (isPublished !== undefined) add('is_published', isPublished === 'true');
    const whereSql = `WHERE ${where.join(' AND ')}`;

    const skip = (parseInt(page as string) - 1) * parseInt(limit as string);

    const tests = await populateTests(
      await Tests.select(
        `SELECT * FROM tests ${whereSql} ORDER BY created_at DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`,
        [...params, parseInt(limit as string), skip]
      )
    );

    const [{ total }] = await query(`SELECT count(*)::int AS total FROM tests ${whereSql}`, params);

    return res.status(200).json({
      success: true,
      data: {
        tests,
        pagination: {
          page: parseInt(page as string),
          limit: parseInt(limit as string),
          total,
          pages: Math.ceil(total / parseInt(limit as string)),
        },
      },
    });
  } catch (error: any) {
    console.error('Error fetching tests:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch tests',
      error: error.message,
    });
  }
};

/**
 * Get test by ID with questions
 */
export const getTestById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const test = await Tests.findById(id);

    if (!test) {
      return res.status(404).json({
        success: false,
        message: 'Test not found',
      });
    }

    const [populatedTest] = await populateTests([test], { withQuestions: true });

    return res.status(200).json({
      success: true,
      data: populatedTest,
    });
  } catch (error: any) {
    console.error('Error fetching test:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch test',
      error: error.message,
    });
  }
};

/**
 * Update test
 */
export const updateTest = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // If questionIds are being updated, recalculate total marks
    if (updates.questionIds) {
      const questions = await activeQuestions(updates.questionIds);
      if (questions.length !== updates.questionIds.length) {
        return res.status(400).json({
          success: false,
          message: 'Some questions are invalid or inactive',
        });
      }
      updates.totalMarks = questions.reduce((sum, q) => sum + q.marks, 0);
      updates.questions = updates.questionIds;
      delete updates.questionIds;
    }

    const test = await Tests.updateById(id, updates);

    if (!test) {
      return res.status(404).json({
        success: false,
        message: 'Test not found',
      });
    }

    const [populatedTest] = await populateTests([test], { withQuestions: true });

    return res.status(200).json({
      success: true,
      message: 'Test updated successfully',
      data: populatedTest,
    });
  } catch (error: any) {
    console.error('Error updating test:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to update test',
      error: error.message,
    });
  }
};

/**
 * Delete test (soft delete)
 */
export const deleteTest = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const test = await Tests.updateById(id, { isActive: false });

    if (!test) {
      return res.status(404).json({
        success: false,
        message: 'Test not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Test deleted successfully',
      data: test,
    });
  } catch (error: any) {
    console.error('Error deleting test:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to delete test',
      error: error.message,
    });
  }
};

/**
 * Create daily challenge
 */
export const createDailyChallenge = async (req: Request, res: Response) => {
  try {
    const { date, subject, count = 15, reward = 50 } = req.body;

    if (!date || !subject) {
      return res.status(400).json({
        success: false,
        message: 'Date and subject are required',
      });
    }

    // Check if challenge already exists for this date
    const challengeDate = new Date(date);
    challengeDate.setHours(0, 0, 0, 0);

    const [existing] = await query('SELECT id FROM daily_challenges WHERE date = $1', [
      localDateString(challengeDate),
    ]);
    if (existing) {
      return res.status(400).json({
        success: false,
        message: 'Daily challenge already exists for this date',
      });
    }

    // Get random questions for the subject
    const questions = await Questions.select(
      'SELECT * FROM questions WHERE subject = $1 AND is_active = true ORDER BY random() LIMIT $2',
      [subject, count]
    );

    if (questions.length < count) {
      return res.status(400).json({
        success: false,
        message: `Not enough questions available for ${subject}. Found ${questions.length}, needed ${count}`,
      });
    }

    const challenge = await DailyChallenges.insert({
      date: localDateString(challengeDate),
      questionIds: questions.map(q => q._id),
      reward,
      isActive: true,
    });

    const populatedChallenge = await populateChallenge(challenge);

    return res.status(201).json({
      success: true,
      message: 'Daily challenge created successfully',
      data: populatedChallenge,
    });
  } catch (error: any) {
    console.error('Error creating daily challenge:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to create daily challenge',
      error: error.message,
    });
  }
};

/**
 * Get today's daily challenge
 */
export const getTodayChallenge = async (req: Request, res: Response) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [row] = await DailyChallenges.select(
      'SELECT * FROM daily_challenges WHERE date = $1 AND is_active = true',
      [localDateString(today)]
    );
    const challenge = await populateChallenge(row);

    if (!challenge) {
      return res.status(404).json({
        success: false,
        message: 'No challenge available for today',
      });
    }

    return res.status(200).json({
      success: true,
      data: challenge,
    });
  } catch (error: any) {
    console.error('Error fetching today\'s challenge:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch today\'s challenge',
      error: error.message,
    });
  }
};

/**
 * Share test with students/grades
 */
export const shareTest = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { studentIds, grades } = req.body;

    // Validate that at least one sharing option is provided
    if ((!studentIds || studentIds.length === 0) && (!grades || grades.length === 0)) {
      return res.status(400).json({
        success: false,
        message: 'Please select at least one student or grade to share with',
      });
    }

    // Update sharing information
    const sharing: Record<string, any> = {
      sharedAt: new Date(),
      isPublished: true, // Automatically publish when sharing
    };
    if (studentIds && studentIds.length > 0) {
      sharing.sharedWithStudents = studentIds.filter(isUuid);
    }
    if (grades && grades.length > 0) {
      sharing.sharedWithGrades = grades;
    }

    const test = await Tests.updateById(id, sharing);
    if (!test) {
      return res.status(404).json({
        success: false,
        message: 'Test not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Test shared successfully',
      data: test,
    });
  } catch (error: any) {
    console.error('Error sharing test:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to share test',
      error: error.message,
    });
  }
};

/**
 * Get available grades and students for sharing
 */
export const getShareOptions = async (req: Request, res: Response) => {
  try {
    // Get all unique grades from students
    const gradeRows = await query(
      "SELECT DISTINCT grade FROM users WHERE role = 'student' AND is_active = true ORDER BY grade"
    );
    const grades = gradeRows.map(row => row.grade);

    // Get all students
    const students = await Users.select(
      "SELECT id, name, email, grade FROM users WHERE role = 'student' AND is_active = true ORDER BY grade, name"
    );

    return res.status(200).json({
      success: true,
      data: {
        grades: grades.filter(g => g), // Remove null/undefined grades
        students,
      },
    });
  } catch (error: any) {
    console.error('Error fetching share options:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch share options',
      error: error.message,
    });
  }
};
