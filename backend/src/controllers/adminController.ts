import { Request, Response } from 'express';
import * as XLSX from 'xlsx';
import Question from '../models/Question';
import Test from '../models/Test';
import DailyChallenge from '../models/DailyChallenge';
import UploadedFile from '../models/UploadedFile';
import User from '../models/User';
import path from 'path';
import fs from 'fs';

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
    const existingQuestions = await Question.find(
      { externalId: { $in: externalIds } },
      { externalId: 1, _id: 1, isActive: 1 }
    );
    const existingIds = new Set(existingQuestions.map(q => q.externalId));

    // Reactivate any inactive questions that are being re-uploaded
    const inactiveQuestions = existingQuestions.filter(q => !q.isActive);
    if (inactiveQuestions.length > 0) {
      await Question.updateMany(
        { _id: { $in: inactiveQuestions.map(q => q._id) } },
        { $set: { isActive: true } }
      );
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
        const result = await Question.insertMany(questionsToInsert, { ordered: false });
        insertedCount = result.length;
        insertedQuestionIds.push(...result.map(q => q._id));
        console.log(`Successfully inserted ${insertedCount} questions`);
      } catch (error: any) {
        // Handle bulk insert errors
        if (error.writeErrors) {
          insertedCount = questionsToInsert.length - error.writeErrors.length;
          error.writeErrors.forEach((err: any) => {
            errors.push({
              id: questionsToInsert[err.index]?.externalId,
              error: err.errmsg,
            });
          });
        } else {
          errors.push({
            error: error.message,
          });
        }
      }
    }

    // Get all question IDs (both newly inserted and existing) for this file
    // IMPORTANT: Preserve Excel row order by mapping externalIds in order
    const allQuestionIds: any[] = [];

    // Fetch all questions by their externalIds to get database IDs
    const allQuestions = await Question.find(
      { externalId: { $in: externalIds }, isActive: true },
      { _id: 1, externalId: 1 }
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
      await UploadedFile.create({
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

    const query: any = { isActive: true };

    let questions: any[] = [];
    let total = 0;

    // If IDs are provided, fetch questions by IDs and preserve order
    if (ids) {
      const questionIds = (ids as string).split(',');
      query._id = { $in: questionIds };

      // Fetch all questions without sorting
      const fetchedQuestions = await Question.find(query);

      // Create a map of _id -> question for fast lookup
      const idToQuestion = new Map();
      fetchedQuestions.forEach(q => {
        idToQuestion.set(q._id.toString(), q);
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
      if (subject) query.subject = subject;
      if (unit) query.unit = parseInt(unit as string);
      if (chapter) query.chapter = parseInt(chapter as string);
      if (difficulty) query.difficulty = difficulty;
      if (examType) query.examType = examType;

      const skip = (parseInt(page as string) - 1) * parseInt(limit as string);

      questions = await Question.find(query)
        .skip(skip)
        .limit(parseInt(limit as string))
        .sort({ createdAt: -1 });

      total = await Question.countDocuments(query);
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

    const question = await Question.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    );

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

    const result = await Question.updateMany(
      { _id: { $in: questionIds }, isActive: true },
      { $set: updates }
    );

    return res.status(200).json({
      success: true,
      message: `Updated ${result.modifiedCount} question(s)`,
      data: {
        matched: result.matchedCount,
        modified: result.modifiedCount,
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

    const query: any = { isActive: true };

    if (examType) query.examType = examType;
    if (subject) query.subject = subject;

    const skip = (parseInt(page as string) - 1) * parseInt(limit as string);

    const files = await UploadedFile.find(query)
      .populate('uploadedBy', 'name email')
      .skip(skip)
      .limit(parseInt(limit as string))
      .sort({ uploadDate: -1 });

    const total = await UploadedFile.countDocuments(query);

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
    const file = await UploadedFile.findById(id);

    if (!file) {
      return res.status(404).json({
        success: false,
        message: 'File not found',
      });
    }

    // Soft delete all associated questions
    if (file.questionIds && file.questionIds.length > 0) {
      await Question.updateMany(
        { _id: { $in: file.questionIds } },
        { isActive: false }
      );
      console.log(`Deleted ${file.questionIds.length} questions from file ${file.fileName}`);
    }

    // Soft delete the file record
    file.isActive = false;
    await file.save();

    return res.status(200).json({
      success: true,
      message: 'File and associated questions deleted successfully',
      data: file,
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
    const questions = await Question.find({ _id: { $in: questionIds }, isActive: true });
    if (questions.length !== questionIds.length) {
      return res.status(400).json({
        success: false,
        message: 'Some questions are invalid or inactive',
      });
    }

    // Calculate total marks
    const totalMarks = questions.reduce((sum, q) => sum + q.marks, 0);

    const test = await Test.create({
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

    const populatedTest = await Test.findById(test._id)
      .populate('questions')
      .populate('createdBy', 'name email');

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

    const query: any = { isActive: true };

    if (type) query.type = type;
    if (examType) query.examType = examType;
    if (isPublished !== undefined) query.isPublished = isPublished === 'true';

    const skip = (parseInt(page as string) - 1) * parseInt(limit as string);

    const tests = await Test.find(query)
      .populate('createdBy', 'name email')
      .skip(skip)
      .limit(parseInt(limit as string))
      .sort({ createdAt: -1 });

    const total = await Test.countDocuments(query);

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

    const test = await Test.findById(id)
      .populate('questions')
      .populate('createdBy', 'name email');

    if (!test) {
      return res.status(404).json({
        success: false,
        message: 'Test not found',
      });
    }

    return res.status(200).json({
      success: true,
      data: test,
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
      const questions = await Question.find({ _id: { $in: updates.questionIds }, isActive: true });
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

    const test = await Test.findByIdAndUpdate(id, updates, { new: true })
      .populate('questions')
      .populate('createdBy', 'name email');

    if (!test) {
      return res.status(404).json({
        success: false,
        message: 'Test not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Test updated successfully',
      data: test,
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

    const test = await Test.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    );

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

    const existing = await DailyChallenge.findOne({ date: challengeDate });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: 'Daily challenge already exists for this date',
      });
    }

    // Get random questions for the subject
    const questions = await Question.aggregate([
      { $match: { subject, isActive: true } },
      { $sample: { size: count } },
    ]);

    if (questions.length < count) {
      return res.status(400).json({
        success: false,
        message: `Not enough questions available for ${subject}. Found ${questions.length}, needed ${count}`,
      });
    }

    const challenge = await DailyChallenge.create({
      date: challengeDate,
      questionIds: questions.map(q => q._id),
      reward,
      isActive: true,
    });

    const populatedChallenge = await DailyChallenge.findById(challenge._id)
      .populate('questionIds');

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

    const challenge = await DailyChallenge.findOne({
      date: today,
      isActive: true,
    }).populate('questionIds');

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

    const test = await Test.findById(id);
    if (!test) {
      return res.status(404).json({
        success: false,
        message: 'Test not found',
      });
    }

    // Update sharing information
    if (studentIds && studentIds.length > 0) {
      test.sharedWithStudents = studentIds;
    }
    if (grades && grades.length > 0) {
      test.sharedWithGrades = grades;
    }
    test.sharedAt = new Date();
    test.isPublished = true; // Automatically publish when sharing

    await test.save();

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
    const grades = await User.distinct('grade', { role: 'student', isActive: true });

    // Get all students
    const students = await User.find(
      { role: 'student', isActive: true },
      { name: 1, email: 1, grade: 1 }
    ).sort({ grade: 1, name: 1 });

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
