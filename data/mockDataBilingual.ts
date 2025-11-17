// Bilingual Mock Data for Practice & Exam Modules
import mockQuestions from '../mockQuestions.json';

export interface BilingualText {
  en: string;
  ta: string;
}

export interface Question {
  id: string;
  question: BilingualText;
  options: {
    en: string[];
    ta: string[];
  };
  correctAnswer: number;
  explanation: BilingualText;
  subject: string;
  topic: string;
  chapter: string;
  marks: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface Exam {
  id: string;
  title: BilingualText;
  description: BilingualText;
  type: 'practice' | 'exam';
  examType: 'NEET' | 'JEE' | 'Both';
  subject: string;
  duration: number; // in minutes
  totalMarks: number;
  questionIds: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Mixed';
  status: 'available' | 'completed' | 'locked';
}

export interface ExamAttempt {
  id: string;
  examId: string;
  studentId: string;
  startTime: string;
  endTime: string;
  timeTaken: number; // in seconds
  score: number;
  totalMarks: number;
  percentage: number;
  answers: Array<{
    questionId: string;
    selectedAnswer: number | null;
    isCorrect: boolean;
    timeTaken: number;
  }>;
  rank?: number;
  percentile?: number;
}

export interface AIInsight {
  type: 'strength' | 'weakness' | 'recommendation' | 'motivation';
  title: BilingualText;
  message: BilingualText;
  icon: string;
  color: string;
}

// Export questions from JSON
export const questions: Question[] = mockQuestions as Question[];

// Mock Exams Data
export const exams: Exam[] = [
  {
    id: 'exam1',
    title: {
      en: 'Biology - The Tissues (Complete Chapter)',
      ta: 'உயிரியல் - திசுக்கள் (முழு அத்தியாயம்)'
    },
    description: {
      en: 'Comprehensive test covering all topics from Unit 4 Chapter 9 - The Tissues',
      ta: 'யூனிட் 4 அத்தியாயம் 9 - திசுக்கள் அனைத்து தலைப்புகளையும் உள்ளடக்கிய விரிவான தேர்வு'
    },
    type: 'exam',
    examType: 'NEET',
    subject: 'Biology',
    duration: 60,
    totalMarks: 60,
    questionIds: questions.map(q => q.id),
    difficulty: 'Mixed',
    status: 'available'
  },
  {
    id: 'practice1',
    title: {
      en: 'Quick Practice - Easy Level',
      ta: 'விரைவு பயிற்சி - எளிய நிலை'
    },
    description: {
      en: 'Practice fundamentals with easy questions on plant tissues',
      ta: 'தாவர திசுக்கள் பற்றிய எளிய கேள்விகளுடன் அடிப்படைகளை பயிற்சி செய்யுங்கள்'
    },
    type: 'practice',
    examType: 'NEET',
    subject: 'Biology',
    duration: 20,
    totalMarks: 20,
    questionIds: questions.filter(q => q.difficulty === 'Easy').map(q => q.id),
    difficulty: 'Easy',
    status: 'available'
  },
  {
    id: 'practice2',
    title: {
      en: 'Intermediate Practice - Medium Level',
      ta: 'இடைநிலை பயிற்சி - நடுத்தர நிலை'
    },
    description: {
      en: 'Build your skills with medium difficulty questions',
      ta: 'நடுத்தர சிரமம் உள்ள கேள்விகளுடன் உங்கள் திறன்களை உருவாக்குங்கள்'
    },
    type: 'practice',
    examType: 'NEET',
    subject: 'Biology',
    duration: 25,
    totalMarks: 20,
    questionIds: questions.filter(q => q.difficulty === 'Medium').map(q => q.id),
    difficulty: 'Medium',
    status: 'available'
  },
  {
    id: 'practice3',
    title: {
      en: 'Advanced Practice - Hard Level',
      ta: 'மேம்பட்ட பயிற்சி - கடின நிலை'
    },
    description: {
      en: 'Challenge yourself with tough questions for advanced preparation',
      ta: 'மேம்பட்ட தயாரிப்புக்காக கடினமான கேள்விகளுடன் உங்களை சவால் செய்யுங்கள்'
    },
    type: 'practice',
    examType: 'NEET',
    subject: 'Biology',
    duration: 25,
    totalMarks: 20,
    questionIds: questions.filter(q => q.difficulty === 'Hard').map(q => q.id),
    difficulty: 'Hard',
    status: 'available'
  }
];

// Mock Exam Attempts (Previous Results)
export const examAttempts: ExamAttempt[] = [
  {
    id: 'attempt1',
    examId: 'practice1',
    studentId: 'student123',
    startTime: '2025-11-10T10:00:00Z',
    endTime: '2025-11-10T10:15:00Z',
    timeTaken: 900,
    score: 16,
    totalMarks: 20,
    percentage: 80,
    answers: questions.filter(q => q.difficulty === 'Easy').map((q, idx) => ({
      questionId: q.id,
      selectedAnswer: idx < 4 ? q.correctAnswer : (q.correctAnswer + 1) % 4,
      isCorrect: idx < 4,
      timeTaken: 60 + Math.random() * 60
    })),
    rank: 15,
    percentile: 85
  },
  {
    id: 'attempt2',
    examId: 'practice2',
    studentId: 'student123',
    startTime: '2025-11-11T14:00:00Z',
    endTime: '2025-11-11T14:20:00Z',
    timeTaken: 1200,
    score: 14,
    totalMarks: 20,
    percentage: 70,
    answers: questions.filter(q => q.difficulty === 'Medium').map((q, idx) => ({
      questionId: q.id,
      selectedAnswer: idx < 3 ? q.correctAnswer : (q.correctAnswer + 2) % 4,
      isCorrect: idx < 3,
      timeTaken: 80 + Math.random() * 80
    })),
    rank: 28,
    percentile: 72
  }
];

// AI-Powered Insights (Bilingual)
export const generateAIInsights = (
  examAttempt?: ExamAttempt,
  allAttempts?: ExamAttempt[]
): AIInsight[] => {
  if (!examAttempt) {
    return getGeneralInsights();
  }

  const insights: AIInsight[] = [];
  const percentage = examAttempt.percentage;
  const avgTimePerQuestion = examAttempt.timeTaken / examAttempt.answers.length;

  // Performance-based insight
  if (percentage >= 80) {
    insights.push({
      type: 'strength',
      title: { en: 'Excellent Performance! 🎉', ta: 'சிறந்த செயல்திறன்! 🎉' },
      message: {
        en: `Outstanding work! You scored ${percentage}% which shows strong understanding of plant tissues. Keep up the excellent work!`,
        ta: `சிறப்பான வேலை! நீங்கள் ${percentage}% மதிப்பெண் பெற்றீர்கள், இது தாவர திசுக்கள் பற்றிய வலுவான புரிதலை காட்டுகிறது. சிறப்பான வேலையைத் தொடருங்கள்!`
      },
      icon: '🏆',
      color: 'green'
    });
  } else if (percentage >= 60) {
    insights.push({
      type: 'recommendation',
      title: { en: 'Good Progress!', ta: 'நல்ல முன்னேற்றம்!' },
      message: {
        en: `You scored ${percentage}%. Focus on understanding the differences between parenchyma, collenchyma, and sclerenchyma tissues for better scores.`,
        ta: `நீங்கள் ${percentage}% மதிப்பெண் பெற்றீர்கள். சிறந்த மதிப்பெண்களுக்காக பாரன்கிமா, கோலென்கிமா மற்றும் ஸ்க்லரென்கிமா திசுக்களுக்கு இடையிலான வேறுபாடுகளைப் புரிந்துகொள்வதில் கவனம் செலுத்துங்கள்.`
      },
      icon: '📈',
      color: 'blue'
    });
  } else {
    insights.push({
      type: 'weakness',
      title: { en: 'Need More Practice', ta: 'மேலும் பயிற்சி தேவை' },
      message: {
        en: `You scored ${percentage}%. Don't worry! Review the chapter on plant tissues carefully and practice more questions. Focus on understanding cell wall composition and tissue functions.`,
        ta: `நீங்கள் ${percentage}% மதிப்பெண் பெற்றீர்கள். கவலைப்பட வேண்டாம்! தாவர திசுக்கள் பற்றிய அத்தியாயத்தை கவனமாக மதிப்பாய்வு செய்து கூடுதல் கேள்விகளை பயிற்சி செய்யுங்கள். செல் சுவர் கலவை மற்றும் திசு செயல்பாடுகளைப் புரிந்துகொள்வதில் கவனம் செலுத்துங்கள்.`
      },
      icon: '📚',
      color: 'orange'
    });
  }

  // Time management insight
  if (avgTimePerQuestion < 60) {
    insights.push({
      type: 'strength',
      title: { en: 'Quick Thinker!', ta: 'விரைவான சிந்தனை!' },
      message: {
        en: `You're solving questions quickly (avg ${Math.round(avgTimePerQuestion)}s per question). Maintain this speed while ensuring accuracy.`,
        ta: `நீங்கள் கேள்விகளை விரைவாக தீர்க்கிறீர்கள் (சராசரி ${Math.round(avgTimePerQuestion)} விநாடிகள் ஒரு கேள்விக்கு). துல்லியத்தை உறுதி செய்யும் போது இந்த வேகத்தை பராமரிக்கவும்.`
      },
      icon: '⚡',
      color: 'yellow'
    });
  } else if (avgTimePerQuestion > 120) {
    insights.push({
      type: 'recommendation',
      title: { en: 'Time Management Tip', ta: 'நேர மேலாண்மை குறிப்பு' },
      message: {
        en: `You're spending ${Math.round(avgTimePerQuestion)}s per question. Try to be quicker - aim for 60-90 seconds per question in NEET exams.`,
        ta: `நீங்கள் ஒரு கேள்விக்கு ${Math.round(avgTimePerQuestion)} விநாடிகள் செலவிடுகிறீர்கள். வேகமாக இருக்க முயற்சிக்கவும் - NEET தேர்வுகளில் ஒரு கேள்விக்கு 60-90 விநாடிகளை இலக்காகக் கொள்ளுங்கள்.`
      },
      icon: '⏱️',
      color: 'red'
    });
  }

  // Motivation
  insights.push({
    type: 'motivation',
    title: { en: 'Keep Going!', ta: 'தொடருங்கள்!' },
    message: {
      en: 'Every practice session brings you closer to your NEET goal. Consistency is key to success!',
      ta: 'ஒவ்வொரு பயிற்சி அமர்வும் உங்கள் NEET இலக்கை நெருங்க உதவுகிறது. நிலைத்தன்மை வெற்றியின் திறவுகோல்!'
    },
    icon: '💪',
    color: 'purple'
  });

  return insights;
};

// General insights for dashboard
export const getGeneralInsights = (): AIInsight[] => [
  {
    type: 'recommendation',
    title: { en: 'Daily Practice Tip', ta: 'தினசரி பயிற்சி குறிப்பு' },
    message: {
      en: 'Practice at least 15 questions daily to maintain consistency and improve retention of concepts.',
      ta: 'நிலைத்தன்மையை பராமரிக்கவும் கருத்துக்களின் நினைவாற்றலை மேம்படுத்தவும் தினமும் குறைந்தது 15 கேள்விகளை பயிற்சி செய்யுங்கள்.'
    },
    icon: '📅',
    color: 'blue'
  },
  {
    type: 'strength',
    title: { en: 'Strong Topic: Cell Structure', ta: 'வலுவான தலைப்பு: செல் அமைப்பு' },
    message: {
      en: 'Your accuracy in Cell Structure topics is 94%. Excellent understanding!',
      ta: 'செல் அமைப்பு தலைப்புகளில் உங்கள் துல்லியம் 94%. சிறந்த புரிதல்!'
    },
    icon: '🎯',
    color: 'green'
  },
  {
    type: 'weakness',
    title: { en: 'Focus Area: Tissue Functions', ta: 'கவன பகுதி: திசு செயல்பாடுகள்' },
    message: {
      en: 'You have 65% accuracy in questions about tissue functions. Practice more questions on this topic.',
      ta: 'திசு செயல்பாடுகள் பற்றிய கேள்விகளில் உங்களுக்கு 65% துல்லியம் உள்ளது. இந்த தலைப்பில் கூடுதல் கேள்விகளை பயிற்சி செய்யுங்கள்.'
    },
    icon: '🔍',
    color: 'orange'
  },
  {
    type: 'motivation',
    title: { en: '12-Day Streak! 🔥', ta: '12 நாள் தொடர்ச்சி! 🔥' },
    message: {
      en: 'Amazing dedication! You\'ve practiced for 12 days straight. Keep the momentum going!',
      ta: 'அற்புதமான அர்ப்பணிப்பு! நீங்கள் தொடர்ந்து 12 நாட்கள் பயிற்சி செய்துள்ளீர்கள். வேகத்தை தொடருங்கள்!'
    },
    icon: '🔥',
    color: 'red'
  }
];

// Topic-level Analytics
export interface TopicAnalytics {
  topic: BilingualText;
  subject: string;
  totalQuestions: number;
  attempted: number;
  correct: number;
  accuracy: number;
  avgTimeTaken: number;
  lastPracticed: string | null;
  strength: 'weak' | 'average' | 'strong';
}

export const topicAnalytics: TopicAnalytics[] = [
  {
    topic: { en: 'Parenchyma Tissue', ta: 'பாரன்கிமா திசு' },
    subject: 'Biology',
    totalQuestions: 45,
    attempted: 42,
    correct: 39,
    accuracy: 93,
    avgTimeTaken: 65,
    lastPracticed: '2025-11-11',
    strength: 'strong'
  },
  {
    topic: { en: 'Collenchyma Tissue', ta: 'கோலென்கிமா திசு' },
    subject: 'Biology',
    totalQuestions: 38,
    attempted: 35,
    correct: 28,
    accuracy: 80,
    avgTimeTaken: 72,
    lastPracticed: '2025-11-10',
    strength: 'average'
  },
  {
    topic: { en: 'Sclerenchyma Tissue', ta: 'ஸ்க்லரென்கிமா திசு' },
    subject: 'Biology',
    totalQuestions: 42,
    attempted: 38,
    correct: 25,
    accuracy: 66,
    avgTimeTaken: 95,
    lastPracticed: '2025-11-09',
    strength: 'weak'
  },
  {
    topic: { en: 'Meristematic Tissue', ta: 'மெரிஸ்டெமாடிக் திசு' },
    subject: 'Biology',
    totalQuestions: 50,
    attempted: 45,
    correct: 38,
    accuracy: 84,
    avgTimeTaken: 70,
    lastPracticed: '2025-11-11',
    strength: 'average'
  }
];

// Leaderboard Data (Demo)
export interface LeaderboardEntry {
  rank: number;
  studentName: BilingualText;
  score: number;
  timeTaken: number;
  badge?: string;
}

export const leaderboard: LeaderboardEntry[] = [
  {
    rank: 1,
    studentName: { en: 'Priya Sharma', ta: 'பிரியா சர்மா' },
    score: 98,
    timeTaken: 45,
    badge: '🏆'
  },
  {
    rank: 2,
    studentName: { en: 'Raj Kumar', ta: 'ராஜ் குமார்' },
    score: 96,
    timeTaken: 48,
    badge: '🥈'
  },
  {
    rank: 3,
    studentName: { en: 'Divya Lakshmi', ta: 'திவ்யா லட்சுமி' },
    score: 94,
    timeTaken: 50,
    badge: '🥉'
  },
  {
    rank: 15,
    studentName: { en: 'You', ta: 'நீங்கள்' },
    score: 87,
    timeTaken: 55
  },
  {
    rank: 16,
    studentName: { en: 'Karthik Rajan', ta: 'கார்த்திக் ராஜன்' },
    score: 86,
    timeTaken: 52
  },
  {
    rank: 17,
    studentName: { en: 'Ananya Devi', ta: 'அனன்யா தேவி' },
    score: 85,
    timeTaken: 58
  }
];

export default {
  questions,
  exams,
  examAttempts,
  generateAIInsights,
  getGeneralInsights,
  topicAnalytics,
  leaderboard
};
