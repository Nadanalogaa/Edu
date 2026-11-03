import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'ta';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Global translations for the entire app
export const translations = {
  en: {
    // Landing Page
    appTitle: 'EduCore',
    appTagline: 'Class assessments for State Board & CBSE schools, 6th–12th',
    getStarted: 'Get Started',
    login: 'Login',
    register: 'Register',
    features: 'Features',
    aboutUs: 'About Us',
    contactUs: 'Contact Us',
    landing: {
      "nav": {
        "home": "Home",
        "tagline": "School assessments · 6th–12th"
      },
      "hero": {
        "slides": {
          "slide1": {
            "title": "Every class. Every test. One clear picture.",
            "subtitle": "Online assessments for Tamil Nadu schools, 6th to 12th",
            "description": "Tamil Nadu State Board (Matriculation) and CBSE syllabus, chapter by chapter, in Tamil and English.",
            "cta": "Register your school"
          },
          "slide2": {
            "title": "Tests in minutes, marked automatically",
            "subtitle": "Pick the class, section and chapters",
            "description": "Teachers build tests from a ready question bank or their own Excel files. Students write them on any phone; results are instant.",
            "cta": "See how it works"
          },
          "slide3": {
            "title": "Know who needs help, before the exam",
            "subtitle": "Reports for principals and teachers",
            "description": "Class, section, subject and chapter reports, weekly trends and a list of students who need attention.",
            "cta": "Register your school"
          },
          "slide4": {
            "title": "Built for students, in Tamil and English",
            "subtitle": "Sign in with the school code and admission number",
            "description": "No email needed. Timed tests that survive a dropped connection, answers explained after submitting, and a personal progress page.",
            "cta": "Student sign in"
          },
          "slide5": {
            "title": "NEET & JEE practice for 11th and 12th",
            "subtitle": "Entrance preparation alongside the school syllabus",
            "description": "Physics, Chemistry, Biology and Maths practice with explanations, plus a mistake book for revision.",
            "cta": "Begin today"
          }
        }
      },
      "registration": {
        "title": "Get started",
        "subtitle": "Schools get their own space; students and teachers join with the school code",
        "cards": {
          "student": {
            "title": "Students",
            "description": "Join your school with the code your school gives you",
            "bullets": {
              "one": "Sign in with school code + admission number",
              "two": "Class tests with instant results",
              "three": "Your progress, subject by subject",
              "four": "Tamil & English"
            },
            "cta": "Register as Student"
          },
          "teacher": {
            "title": "Teachers",
            "description": "Join your school to create tests and follow your classes",
            "bullets": {
              "one": "Question bank by chapter",
              "two": "Create tests for a class or section",
              "three": "Results the moment students submit",
              "four": "Excel upload for questions"
            },
            "cta": "Register as Teacher"
          },
          "school": {
            "title": "Schools",
            "description": "A licence based on your number of students",
            "bullets": {
              "one": "State Board or CBSE, 6th–12th",
              "two": "Import students from Excel",
              "three": "Reports for the principal",
              "four": "Your school's data stays private"
            },
            "cta": "Register School"
          }
        }
      },
      "about": {
        "title": "About EduCore",
        "paragraph1": "EduCore helps Tamil Nadu schools run regular class assessments from 6th to 12th, for both the State Board (Matriculation) and CBSE syllabus.",
        "paragraph2": "Questions and tests are organised by class, subject and chapter, in Tamil and English. Students write tests online; teachers and principals see results and trends straight away, down to the chapter that needs teaching again.",
        "paragraph3": "Students of 11th and 12th also get NEET and JEE practice alongside the school syllabus.",
        "stats": {
          "successRate": "Classes covered",
          "students": "Boards: State & CBSE",
          "questions": "Languages",
          "support": "NEET/JEE practice"
        }
      },
      "featuresSection": {
        "title": "What schools get",
        "subtitle": "Assessments, reports and practice for 6th to 12th, in one place"
      },
      "features": {
        "personalizedTitle": "Class-wise assessments",
        "personalizedDescription": "Tests for every class from 6th to 12th, by subject and chapter, for State Board and CBSE.",
        "questionBankTitle": "Question bank in Tamil & English",
        "questionBankDescription": "Ready-made questions plus your teachers' own, uploaded from Excel.",
        "mistakeBookTitle": "Mistake book",
        "mistakeBookDescription": "Every wrong answer is kept with the right answer and its explanation for revision.",
        "liveClassesTitle": "Reports for principals",
        "liveClassesDescription": "Class, section, subject and chapter reports, and the students who need attention.",
        "mockTestsTitle": "Timed online tests",
        "mockTestsDescription": "Tests time themselves, keep answers if the connection drops, and are marked instantly.",
        "gamifiedTitle": "NEET & JEE practice",
        "gamifiedDescription": "Extra practice for 11th and 12th students preparing for entrance exams."
      },
      "featureStats": {
        "practiceQuestions": "Classes",
        "activeStudents": "Boards",
        "successRate": "Languages",
        "expertSupport": "Student & question import"
      },
      "contact": {
        "title": "Get in touch",
        "subtitle": "Want EduCore for your school? Tell us about it.",
        "form": {
          "fullNameLabel": "Full Name",
          "fullNamePlaceholder": "Your name",
          "emailLabel": "Email Address",
          "emailPlaceholder": "you@example.com",
          "subjectLabel": "School",
          "subjectPlaceholder": "School name and city",
          "messageLabel": "Message",
          "messagePlaceholder": "Number of students, board, questions…",
          "submit": "Send Message"
        }
      },
      "footer": {
        "description": "Online class assessments, reports and NEET/JEE practice for Tamil Nadu schools, 6th to 12th.",
        "programsTitle": "What we offer",
        "programs": {
          "neet": "Class tests 6th–12th",
          "jee": "State Board & CBSE",
          "mock": "School reports",
          "live": "NEET & JEE practice",
          "doubt": "Tamil & English"
        },
        "contactTitle": "Contact Us",
        "location": "Tamil Nadu, India",
        "email": "support@eduintelligence.com",
        "phone": "+91 1800-XXX-XXXX (Toll Free)",
        "rights": "EduCore. All rights reserved.",
        "privacy": "Privacy Policy",
        "terms": "Terms of Service",
        "refund": "Refund Policy"
      },
      "registrationLanding": {
        "title": "Welcome to EduCore",
        "subtitle": "Who is registering?",
        "alreadyHaveAccount": "Already have an account?",
        "signIn": "Sign In"
      }
    },
    dashboards: {
      adminTitle: 'Admin Dashboard',
      teacherTitle: 'Teacher Dashboard (Class 12A)',
      cards: {
        totalStudents: 'Total Students',
        activeTeachers: 'Active Teachers',
        testsConducted: 'Tests Conducted',
        avgPerformance: 'Avg. Performance',
        classAverage: 'Class Average',
        pendingReviews: 'Pending Reviews',
        topPerformer: 'Top Performer',
      },
      sections: {
        statePerformance: 'State-wide Performance Trend',
        topSchools: 'Top Performing Schools',
        lowPerforming: 'Low-Performing Students Alert',
        studentsAtRisk: 'Students at Risk',
        topicHeatmap: 'Topic Heatmap',
        classPerformanceTrend: 'Class Performance Trend',
      },
      table: {
        schoolName: 'School Name',
        avgScore: 'Avg Score',
        topStudent: 'Top Student',
        studentName: 'Student Name',
        school: 'School',
        score: 'Score',
        trend: 'Trend',
      },
      trends: {
        up: 'up',
        down: 'down',
        stable: 'stable',
      },
      strength: {
        weak: 'Weak',
        average: 'Average',
        strong: 'Strong',
      },
    },
    studentDashboard: {
      welcomeMessage: 'Welcome back',
      welcomeSubtitle: "Ready to conquer your exams today? Let's get started.",
      totalPoints: 'Total Points',
      liveClassesTitle: 'NEET LIVE Classes',
      performanceProgress: 'Your Performance Progress',
      subjectPerformance: 'Subject Performance',
      youAnswered: 'You answered',
      correctAnswer: 'Correct Answer',
      videoExplanation: 'Video Explanation',
      streak: 'Day Streak',
      dailyChallenge: 'Daily Challenge',
      challengeTask: 'Complete available practice tests',
      challengeReward: 'Earn coins for each test',
      startChallenge: 'Start Challenge',
      progress: 'Progress',
      noMistakes: 'No mistakes recorded yet. Keep practicing!',
      noAttempts: 'No test attempts yet. Take a test to see your progress!',
      noAttemptsForSubject: 'No test data for this subject yet.',
      loading: 'Loading...',
      testLabel: 'Test',
      correctSummary: '{{correct}}/{{attempted}} correct',
    },

    // Login
    email: 'Email',
    password: 'Password',
    loginButton: 'Login',
    dontHaveAccount: "Don't have an account?",
    signUp: 'Sign Up',

    // Common
    submit: 'Submit',
    cancel: 'Cancel',
    save: 'Save',
    next: 'Next',
    previous: 'Previous',
    back: 'Back',
    close: 'Close',
    delete: 'Delete',
    edit: 'Edit',
    view: 'View',
    search: 'Search',
    filter: 'Filter',
    all: 'All',
    loading: 'Loading',
    page: 'Page',
    of: 'of',
    confirmDelete: 'Are you sure you want to delete this question?',
    searchQuestions: 'Search questions...',
    options: 'Options',
    difficulty: 'Difficulty',

    // Dashboard
    dashboard: 'Dashboard',
    welcomeBack: 'Welcome back',
    overallAccuracy: 'Overall Accuracy',
    avgSpeed: 'Avg. Speed',
    testsTaken: 'Tests Taken',
    classRank: 'Class Rank',

    // Questions
    question: 'Question',
    questions: 'Questions',
    answer: 'Answer',
    answers: 'Answers',
    explanation: 'Explanation',
    correctAnswer: 'Correct Answer',
    yourAnswer: 'Your Answer',

    // Subjects
    physics: 'Physics',
    chemistry: 'Chemistry',
    biology: 'Biology',
    maths: 'Mathematics',

    // Difficulty
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard',

    // Test Types
    practice: 'Practice',
    exam: 'Exam',
    dailyChallenge: 'Daily Challenge',

    // Admin
    uploadQuestions: 'Upload Questions',
    createTest: 'Create Test',
    manageSchools: 'Manage Schools',
    manageTeachers: 'Manage Teachers',
    manageStudents: 'Manage Students',
    students: 'Students',
    reports: 'Reports',

    // Navigation
    practiceMode: 'Practice Mode',
    takeAnExam: 'Take an Exam',
    mistakeBook: 'Mistake Book',
    liveClasses: 'Live Classes',
    myStudents: 'My Students',
    questionBankNav: 'Question Bank',
    analytics: 'Analytics',

    // Admin - Question Upload
    questionUploadTitle: 'Question Upload',
    questionUploadDesc: 'Upload questions from Excel file to the question bank',
    questionBankTitle: 'Question Bank',
    questionBankDesc: 'Manage your bilingual question bank for NEET & JEE exams',
    uploadNewQuestions: 'Upload New Questions',
    allQuestions: 'All Questions',
    selectExamType: 'Select Exam Type',
    selectSubject: 'Select Subject',
    neet: 'NEET',
    jee: 'JEE',
    both: 'Both',
    randomSelection: 'Random Selection',
    manualSelection: 'Manual Selection',
    selectionMode: 'Selection Mode',
    autoSelect: 'System auto-selects',
    pickSpecific: 'Pick specific questions',
    selected: 'selected',
    questionPreview: 'Question Preview',
    actions: 'Actions',
    viewQuestion: 'View',
    editQuestion: 'Edit',
    deleteQuestion: 'Delete',
    noQuestionsFound: 'No questions found',
    totalQuestions: 'Total Questions',
    filterQuestions: 'Filter Questions',
    selectExcelFile: 'Select Excel File',
    dragDropFile: 'or drag and drop',
    supportedFormats: 'Supported formats: .xlsx, .xls',
    uploadFile: 'Upload File',
    uploading: 'Uploading...',
    uploadSuccess: 'Upload Successful!',
    uploadFailed: 'Upload Failed',
    questionsInserted: 'Questions Inserted',
    duplicatesSkipped: 'Duplicates Skipped',
    totalProcessed: 'Total Processed',
    errors: 'Errors',
    fileInformation: 'File Information',
    unit: 'Unit',
    chapter: 'Chapter',
    chapterName: 'Chapter Name',

    // Admin - Test Creation
    testCreationTitle: 'Create Test',
    testCreationDesc: 'Create a new test or exam with questions from the question bank',
    testDetails: 'Test Details',
    selectQuestions: 'Select Questions',
    testTitle: 'Test Title',
    testTitlePlaceholder: 'Enter test title',
    testDescription: 'Test Description',
    testDescriptionPlaceholder: 'Enter test description',
    testType: 'Test Type',
    examType: 'Exam Type',
    testDuration: 'Duration (minutes)',
    totalMarks: 'Total Marks',
    selectedQuestions: 'Selected Questions',
    questionBank: 'Question Bank',
    selectAll: 'Select All',
    deselectAll: 'Deselect All',
    filterBySubject: 'Filter by Subject',
    filterByDifficulty: 'Filter by Difficulty',
    allSubjects: 'All Subjects',
    allDifficulties: 'All Difficulties',
    createTestButton: 'Create Test',
    creatingTest: 'Creating Test...',
    testCreated: 'Test Created Successfully!',
    testCreationFailed: 'Test Creation Failed',

    // Admin - Daily Challenge
    dailyChallengeTitle: 'Create Daily Challenge',
    dailyChallengeDesc: 'Set up a daily challenge with random questions for students',
    challengeDate: 'Challenge Date',
    subject: 'Subject',
    numberOfQuestions: 'Number of Questions',
    coinReward: 'Coin Reward',
    coins: 'coins',
    howItWorks: 'How it works:',
    challengeTips: 'Daily Challenge Tips',
    variety: 'Variety',
    consistency: 'Consistency',
    difficultyBalance: 'Difficulty Balance',
    rewards: 'Rewards',
    createChallenge: 'Create Daily Challenge',
    creatingChallenge: 'Creating Challenge...',
    challengeCreated: 'Daily Challenge Created Successfully!',
    challengeFailed: 'Failed to create daily challenge',

    // Time
    minutes: 'minutes',
    seconds: 'seconds',
    duration: 'Duration',

    // Results
    score: 'Score',
    marks: 'Marks',
    percentage: 'Percentage',
    correct: 'Correct',
    wrong: 'Wrong',
    skipped: 'Skipped',

    // Language
    selectLanguage: 'Select Language',
    english: 'English',
    tamil: 'Tamil',

    // Practice & Exam Mode
    practiceExam: {
      // Dashboard
      practiceDashboardTitle: 'Practice Mode',
      practiceDashboardSubtitle: 'Master topics at your own pace with instant feedback',
      questionsPracticed: 'Questions Practiced',
      weeklyGoal: 'Weekly Goal',
      dayStreak: 'Day Streak',
      topicsCompleted: 'Topics Completed',
      practiceTime: 'Practice Time',
      hours: 'hours',

      // Subject Progress
      subjectProgress: 'Subject Progress',
      progress: 'Progress',
      topics: 'Topics',
      accuracy: 'Accuracy',

      // Practice by Topic
      practiceByTopic: 'Practice by Topic',
      filterLabel: 'Filter:',
      inProgress: 'In Progress',
      notStarted: 'Not Started',
      practiceAgain: 'Practice Again',
      continuePractice: 'Continue Practice',
      startPractice: 'Start Practice',

      // Exam Selection
      selectPracticeTest: 'Select Practice Test',
      selectExamTest: 'Select an Exam',
      chooseTest: 'Choose a test to begin',
      noTestsAvailable: 'No tests available at the moment. Check back later!',
      questionsLabel: 'Questions',
      marksLabel: 'marks',
      subjects: 'Subjects',

      // During Practice/Exam
      questionOf: 'Question {{current}} of {{total}}',
      mark: 'mark',
      marks: 'marks',
      explanation: 'Explanation:',
      previous: 'Previous',
      next: 'Next',
      finishPractice: 'Finish Practice',

      // Results
      practiceComplete: 'Practice Session Complete!',
      examComplete: 'Exam Complete!',
      yourAccuracy: 'Your Accuracy',
      yourScore: 'Your Score',
      correct: 'Correct',
      incorrect: 'Incorrect',
      skipped: 'Skipped',
      unattempted: 'Unattempted',
      backToDashboard: 'Back to Dashboard',
      viewSolutions: 'View Detailed Solutions',

      // Timer
      timeRemaining: 'Time Remaining',
      timeUp: 'Time\'s Up!',
      autoSubmitting: 'Auto-submitting exam...',

      // Exam Navigation
      questionPalette: 'Question Palette',
      answered: 'Answered',
      notAnswered: 'Not Answered',
      markedForReview: 'Marked for Review',
      notVisited: 'Not Visited',
      markForReview: 'Mark for Review',
      clearResponse: 'Clear Response',
      saveAndNext: 'Save & Next',
      submitExam: 'Submit Exam',
      confirmSubmit: 'Are you sure you want to submit the exam?',

      // Performance Analytics
      performanceAnalytics: 'Performance Analytics',
      subjectWise: 'Subject-wise Performance',
      topicWise: 'Topic-wise Performance',
      difficultyWise: 'Difficulty-wise Performance',
      timeAnalysis: 'Time Management Analysis',
      avgTimePerQuestion: 'Avg Time per Question',
      fastestQuestion: 'Fastest Question',
      slowestQuestion: 'Slowest Question',

      // AI Insights
      aiInsights: 'AI-Powered Insights',
      recommendations: 'Recommendations',
      strengths: 'Your Strengths',
      weaknesses: 'Areas to Improve',
      studyPlan: 'Personalized Study Plan',

      // Leaderboard
      leaderboard: 'Leaderboard',
      yourRank: 'Your Rank',
      percentile: 'Percentile',
      topPerformers: 'Top Performers',

      // Difficulty Levels
      easy: 'Easy',
      medium: 'Medium',
      hard: 'Hard',
      mixed: 'Mixed',

      // Status
      available: 'Available',
      completed: 'Completed',
      locked: 'Locked',

      // Actions
      startExam: 'Start Exam',
      resumeExam: 'Resume Exam',
      retakeExam: 'Retake Exam',

      // Instructions
      examInstructions: 'Exam Instructions',
      instruction1: 'Read all questions carefully before answering',
      instruction2: 'Each question carries equal marks unless specified',
      instruction3: 'There is no negative marking in practice mode',
      instruction4: 'You can navigate between questions using Previous/Next buttons',
      instruction5: 'Click Submit when you complete all questions',
      readyToStart: 'I have read and understood the instructions',
      startNow: 'Start Now',

      // Multimedia Learning
      watchVideo: 'Watch (2D/3D)',
      listenAudio: 'Listen',
      readMaterial: 'Read',
      viewAR: 'AR View',
      experienceVR: 'VR Experience',
      multimediaLearning: 'Multimedia Learning',
      videoExplanation: 'Video Explanation',
      audioNarration: 'Audio Narration',
      studyMaterial: 'Study Material',
      augmentedReality: 'Augmented Reality',
      virtualReality: 'Virtual Reality',
      watch: 'Watch',
      listen: 'Listen',
      read: 'Read',
      ar: 'AR',
      vr: 'VR',
    },

    // TN Schools Map View
    tnSchoolsMap: {
      mapView: 'Map',
      zoomIn: 'Zoom In',
      zoomOut: 'Zoom Out',
      resetView: 'Reset View',
      schools: 'Schools',
      students: 'Students',
      blocks: 'Blocks',
      districtsLabel: 'Districts',
      clickToViewDetails: 'Click to view details',
      dragToPan: 'Drag to Pan',
      scrollToZoom: 'Scroll to Zoom',
      clickDistrictToSelect: 'Click District to Select',
      instructions: 'Drag to Pan • Scroll to Zoom • Click District to Select',

      // District Names
      districts: {
        ARIYALUR: 'Ariyalur',
        CHENGALPATTU: 'Chengalpattu',
        CHENNAI: 'Chennai',
        COIMBATORE: 'Coimbatore',
        CUDDALORE: 'Cuddalore',
        DHARMAPURI: 'Dharmapuri',
        DINDIGUL: 'Dindigul',
        ERODE: 'Erode',
        KALLAKURICHI: 'Kallakurichi',
        KANNIYAKUMARI: 'Kanniyakumari',
        KANCHIPURAM: 'Kancheepuram',
        KANCHEEPURAM: 'Kancheepuram',
        KARUR: 'Karur',
        KRISHNAGIRI: 'Krishnagiri',
        MADURAI: 'Madurai',
        MAYILADUTHURAI: 'Mayiladuthurai',
        NAGAPATTINAM: 'Nagapattinam',
        NAMAKKAL: 'Namakkal',
        PERAMBALUR: 'Perambalur',
        PUDUKKOTTAI: 'Pudukkottai',
        RAMANATHAPURAM: 'Ramanathapuram',
        RANIPET: 'Ranipet',
        SALEM: 'Salem',
        SIVAGANGA: 'Sivagangai',
        SIVAGANGAI: 'Sivagangai',
        THANJAVUR: 'Thanjavur',
        THENI: 'Theni',
        'THE NILGIRIS': 'The Nilgiris',
        TENKASI: 'Tenkasi',
        TIRUCHIRAPPALLI: 'Tiruchirappalli',
        TIRUNELVELI: 'Tirunelveli',
        TIRUPATHUR: 'Tirupathur',
        TIRUPPUR: 'Tiruppur',
        THIRUVALLUR: 'Tiruvallur',
        TIRUVALLUR: 'Tiruvallur',
        TIRUVANNAMALAI: 'Tiruvannamalai',
        THIRUVARUR: 'Tiruvarur',
        TIRUVARUR: 'Tiruvarur',
        THOOTHUKKUDI: 'Thoothukkudi',
        TUTICORIN: 'Thoothukkudi',
        VELLORE: 'Vellore',
        VILLUPURAM: 'Villupuram',
        VIRUDHUNAGAR: 'Virudhunagar',
      },
    },
  },
  ta: {
    // Landing Page
    appTitle: 'EduCore',
    appTagline: 'மாநில வாரியம் & CBSE பள்ளிகளுக்கான வகுப்பு மதிப்பீடுகள், 6–12',
    getStarted: 'தொடங்குங்கள்',
    login: 'உள்நுழைய',
    register: 'பதிவு செய்ய',
    features: 'அம்சங்கள்',
    aboutUs: 'எங்களை பற்றி',
    contactUs: 'எங்களை தொடர்பு கொள்ள',
    landing: {
      "nav": {
        "home": "முகப்பு",
        "tagline": "பள்ளி மதிப்பீடுகள் · 6–12 வகுப்புகள்"
      },
      "hero": {
        "slides": {
          "slide1": {
            "title": "ஒவ்வொரு வகுப்பு. ஒவ்வொரு தேர்வு. ஒரே தெளிவான பார்வை.",
            "subtitle": "தமிழ்நாட்டுப் பள்ளிகளுக்கான இணையவழி மதிப்பீடுகள், 6 முதல் 12 ஆம் வகுப்பு வரை",
            "description": "தமிழ்நாடு மாநில வாரியம் (மெட்ரிகுலேஷன்) மற்றும் CBSE பாடத்திட்டம், பாடம் வாரியாக, தமிழிலும் ஆங்கிலத்திலும்.",
            "cta": "உங்கள் பள்ளியைப் பதிவு செய்யுங்கள்"
          },
          "slide2": {
            "title": "நிமிடங்களில் தேர்வு, தானாகத் திருத்தம்",
            "subtitle": "வகுப்பு, பிரிவு, பாடங்களைத் தேர்ந்தெடுங்கள்",
            "description": "ஆசிரியர்கள் தயாரான வினா வங்கியிலிருந்தோ தங்கள் Excel கோப்புகளிலிருந்தோ தேர்வுகளை உருவாக்கலாம். மாணவர்கள் எந்த கைபேசியிலும் எழுதலாம்; முடிவுகள் உடனே.",
            "cta": "எப்படி வேலை செய்கிறது"
          },
          "slide3": {
            "title": "தேர்வுக்கு முன்பே உதவி தேவைப்படுபவரை அறியுங்கள்",
            "subtitle": "தலைமையாசிரியர்களுக்கும் ஆசிரியர்களுக்கும் அறிக்கைகள்",
            "description": "வகுப்பு, பிரிவு, பாடம், பாடப்பகுதி வாரியான அறிக்கைகள், வாராந்திரப் போக்குகள், கவனம் தேவைப்படும் மாணவர் பட்டியல்.",
            "cta": "உங்கள் பள்ளியைப் பதிவு செய்யுங்கள்"
          },
          "slide4": {
            "title": "மாணவர்களுக்காக, தமிழிலும் ஆங்கிலத்திலும்",
            "subtitle": "பள்ளிக் குறியீடு மற்றும் சேர்க்கை எண்ணுடன் உள்நுழையுங்கள்",
            "description": "மின்னஞ்சல் தேவையில்லை. இணைப்பு துண்டிக்கப்பட்டாலும் தொடரும் நேரத் தேர்வுகள், சமர்ப்பித்த பின் விடை விளக்கம், சொந்த முன்னேற்றப் பக்கம்.",
            "cta": "மாணவர் உள்நுழைவு"
          },
          "slide5": {
            "title": "11, 12 ஆம் வகுப்புக்கு NEET & JEE பயிற்சி",
            "subtitle": "பள்ளிப் பாடத்துடன் நுழைவுத் தேர்வுத் தயாரிப்பு",
            "description": "இயற்பியல், வேதியியல், உயிரியல், கணிதம் பயிற்சி விளக்கங்களுடன், திருப்புதலுக்கான தவறுப் புத்தகமும்.",
            "cta": "இன்றே தொடங்குங்கள்"
          }
        }
      },
      "registration": {
        "title": "தொடங்குங்கள்",
        "subtitle": "பள்ளிகளுக்கு தனி இடம்; மாணவர்களும் ஆசிரியர்களும் பள்ளிக் குறியீட்டுடன் இணைகிறார்கள்",
        "cards": {
          "student": {
            "title": "மாணவர்கள்",
            "description": "உங்கள் பள்ளி தரும் குறியீட்டுடன் இணையுங்கள்",
            "bullets": {
              "one": "பள்ளிக் குறியீடு + சேர்க்கை எண்ணுடன் உள்நுழைவு",
              "two": "உடனடி முடிவுகளுடன் வகுப்புத் தேர்வுகள்",
              "three": "பாடவாரியாக உங்கள் முன்னேற்றம்",
              "four": "தமிழ் & ஆங்கிலம்"
            },
            "cta": "மாணவராகப் பதிவு செய்ய"
          },
          "teacher": {
            "title": "ஆசிரியர்கள்",
            "description": "தேர்வுகளை உருவாக்கி வகுப்புகளைக் கண்காணிக்க உங்கள் பள்ளியுடன் இணையுங்கள்",
            "bullets": {
              "one": "பாடப்பகுதி வாரியான வினா வங்கி",
              "two": "வகுப்பு அல்லது பிரிவுக்குத் தேர்வுகள்",
              "three": "மாணவர்கள் சமர்ப்பித்ததும் முடிவுகள்",
              "four": "வினாக்களை Excel-இல் பதிவேற்றம்"
            },
            "cta": "ஆசிரியராகப் பதிவு செய்ய"
          },
          "school": {
            "title": "பள்ளிகள்",
            "description": "மாணவர் எண்ணிக்கையின் அடிப்படையில் உரிமம்",
            "bullets": {
              "one": "மாநில வாரியம் அல்லது CBSE, 6–12",
              "two": "Excel-இலிருந்து மாணவர்களை இறக்குமதி",
              "three": "தலைமையாசிரியருக்கான அறிக்கைகள்",
              "four": "உங்கள் பள்ளித் தரவு தனிப்பட்டது"
            },
            "cta": "பள்ளியைப் பதிவு செய்ய"
          }
        }
      },
      "about": {
        "title": "EduCore பற்றி",
        "paragraph1": "EduCore தமிழ்நாட்டுப் பள்ளிகள் 6 முதல் 12 ஆம் வகுப்பு வரை மாநில வாரியம் (மெட்ரிகுலேஷன்) மற்றும் CBSE பாடத்திட்டங்களுக்கு வழக்கமான வகுப்பு மதிப்பீடுகளை நடத்த உதவுகிறது.",
        "paragraph2": "வினாக்களும் தேர்வுகளும் வகுப்பு, பாடம், பாடப்பகுதி வாரியாக தமிழிலும் ஆங்கிலத்திலும் அமைக்கப்பட்டுள்ளன. மாணவர்கள் இணையத்தில் தேர்வு எழுதுகிறார்கள்; ஆசிரியர்களும் தலைமையாசிரியர்களும் முடிவுகளையும் போக்குகளையும் உடனே பார்க்கிறார்கள், மீண்டும் கற்பிக்க வேண்டிய பாடப்பகுதி வரை.",
        "paragraph3": "11, 12 ஆம் வகுப்பு மாணவர்களுக்கு பள்ளிப் பாடத்துடன் NEET மற்றும் JEE பயிற்சியும் உண்டு.",
        "stats": {
          "successRate": "வகுப்புகள்",
          "students": "வாரியங்கள்: மாநில & CBSE",
          "questions": "மொழிகள்",
          "support": "NEET/JEE பயிற்சி"
        }
      },
      "featuresSection": {
        "title": "பள்ளிகளுக்கு என்ன கிடைக்கும்",
        "subtitle": "6 முதல் 12 வரை மதிப்பீடுகள், அறிக்கைகள், பயிற்சி — ஒரே இடத்தில்"
      },
      "features": {
        "personalizedTitle": "வகுப்பு வாரியான மதிப்பீடுகள்",
        "personalizedDescription": "6 முதல் 12 வரை ஒவ்வொரு வகுப்புக்கும், பாடம் மற்றும் பாடப்பகுதி வாரியாக, மாநில வாரியம் மற்றும் CBSE.",
        "questionBankTitle": "தமிழ் & ஆங்கில வினா வங்கி",
        "questionBankDescription": "தயாரான வினாக்களுடன் உங்கள் ஆசிரியர்களின் சொந்த வினாக்கள், Excel-இலிருந்து பதிவேற்றம்.",
        "mistakeBookTitle": "தவறுப் புத்தகம்",
        "mistakeBookDescription": "ஒவ்வொரு தவறான விடையும் சரியான விடை மற்றும் விளக்கத்துடன் திருப்புதலுக்காகச் சேமிக்கப்படுகிறது.",
        "liveClassesTitle": "தலைமையாசிரியர்களுக்கு அறிக்கைகள்",
        "liveClassesDescription": "வகுப்பு, பிரிவு, பாடம், பாடப்பகுதி அறிக்கைகள் மற்றும் கவனம் தேவைப்படும் மாணவர்கள்.",
        "mockTestsTitle": "நேரக் கட்டுப்பாட்டுடன் இணையத் தேர்வுகள்",
        "mockTestsDescription": "தேர்வுகள் தானாக நேரம் கணக்கிடும், இணைப்பு துண்டித்தாலும் விடைகளைக் காக்கும், உடனே திருத்தப்படும்.",
        "gamifiedTitle": "NEET & JEE பயிற்சி",
        "gamifiedDescription": "நுழைவுத் தேர்வுக்குத் தயாராகும் 11, 12 ஆம் வகுப்பு மாணவர்களுக்கு கூடுதல் பயிற்சி."
      },
      "featureStats": {
        "practiceQuestions": "வகுப்புகள்",
        "activeStudents": "வாரியங்கள்",
        "successRate": "மொழிகள்",
        "expertSupport": "மாணவர் & வினா இறக்குமதி"
      },
      "contact": {
        "title": "தொடர்பு கொள்ளுங்கள்",
        "subtitle": "உங்கள் பள்ளிக்கு EduCore வேண்டுமா? எங்களிடம் சொல்லுங்கள்.",
        "form": {
          "fullNameLabel": "முழுப் பெயர்",
          "fullNamePlaceholder": "உங்கள் பெயர்",
          "emailLabel": "மின்னஞ்சல் முகவரி",
          "emailPlaceholder": "you@example.com",
          "subjectLabel": "பள்ளி",
          "subjectPlaceholder": "பள்ளியின் பெயர் மற்றும் ஊர்",
          "messageLabel": "செய்தி",
          "messagePlaceholder": "மாணவர் எண்ணிக்கை, வாரியம், கேள்விகள்…",
          "submit": "செய்தி அனுப்பு"
        }
      },
      "footer": {
        "description": "தமிழ்நாட்டுப் பள்ளிகளுக்கு இணையவழி வகுப்பு மதிப்பீடுகள், அறிக்கைகள் மற்றும் NEET/JEE பயிற்சி, 6 முதல் 12 வரை.",
        "programsTitle": "நாங்கள் வழங்குவது",
        "programs": {
          "neet": "வகுப்புத் தேர்வுகள் 6–12",
          "jee": "மாநில வாரியம் & CBSE",
          "mock": "பள்ளி அறிக்கைகள்",
          "live": "NEET & JEE பயிற்சி",
          "doubt": "தமிழ் & ஆங்கிலம்"
        },
        "contactTitle": "எங்களைத் தொடர்பு கொள்ள",
        "location": "தமிழ்நாடு, இந்தியா",
        "email": "support@eduintelligence.com",
        "phone": "+91 1800-XXX-XXXX (கட்டணமில்லா)",
        "rights": "EduCore. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
        "privacy": "தனியுரிமைக் கொள்கை",
        "terms": "சேவை விதிமுறைகள்",
        "refund": "பணத்திருப்பக் கொள்கை"
      },
      "registrationLanding": {
        "title": "EduCore-க்கு வரவேற்கிறோம்",
        "subtitle": "யார் பதிவு செய்கிறீர்கள்?",
        "alreadyHaveAccount": "ஏற்கனவே கணக்கு உள்ளதா?",
        "signIn": "உள்நுழைய"
      }
    },
    dashboards: {
      adminTitle: 'நிர்வாகி கட்டுப்பாட்டு பலகை',
      teacherTitle: 'ஆசிரியர் கட்டுப்பாட்டு பலகை (தரம் 12A)',
      cards: {
        totalStudents: 'மொத்த மாணவர்கள்',
        activeTeachers: 'செயலில் உள்ள ஆசிரியர்கள்',
        testsConducted: 'நடைபெற்ற தேர்வுகள்',
        avgPerformance: 'சராசரி செயல்திறன்',
        classAverage: 'வகுப்பு சராசரி',
        pendingReviews: 'நிலுவையில் உள்ள மதிப்பாய்வுகள்',
        topPerformer: 'சிறந்த செயல்திறன்',
      },
      sections: {
        statePerformance: 'மாநில அளவிலான செயல்திறன் போக்கு',
        topSchools: 'சிறந்தப் பள்ளிகள்',
        lowPerforming: 'குறைந்த செயல்திறன் எச்சரிக்கை',
        studentsAtRisk: 'அபாயத்தில் உள்ள மாணவர்கள்',
        topicHeatmap: 'தலைப்புச் சூடேற்ற வரைபடம்',
        classPerformanceTrend: 'வகுப்பின் செயல்திறன் போக்கு',
      },
      table: {
        schoolName: 'பள்ளி பெயர்',
        avgScore: 'சராசரி மதிப்பெண்',
        topStudent: 'சிறந்த மாணவர்',
        studentName: 'மாணவர் பெயர்',
        school: 'பள்ளி',
        score: 'மதிப்பெண்',
        trend: 'போக்கு',
      },
      trends: {
        up: 'மேலே',
        down: 'கீழே',
        stable: 'நிலைத்த',
      },
      strength: {
        weak: 'பலவீனமான',
        average: 'நடுத்தர',
        strong: 'வலுவான',
      },
    },
    studentDashboard: {
      welcomeMessage: 'மீண்டும் வருக',
      welcomeSubtitle: 'இன்று உங்கள் தேர்வுகளை வெல்லத் தயாரா? தொடங்குவோம்.',
      totalPoints: 'மொத்த புள்ளிகள்',
      liveClassesTitle: 'NEET நேரலை வகுப்புகள்',
      performanceProgress: 'உங்கள் செயல்திறன் முன்னேற்றம்',
      subjectPerformance: 'பாட செயல்திறன்',
      youAnswered: 'நீங்கள் பதிலளித்தது',
      correctAnswer: 'சரியான பதில்',
      videoExplanation: 'காணொளி விளக்கம்',
      streak: 'நாள் தொடர்ச்சி',
      dailyChallenge: 'தினசரி சவால்',
      challengeTask: 'கிடைக்கும் பயிற்சி தேர்வுகளை முடிக்கவும்',
      challengeReward: 'ஒவ்வொரு தேர்விற்கும் காசுகளைப் பெறுங்கள்',
      startChallenge: 'சவாலைத் தொடங்கு',
      progress: 'முன்னேற்றம்',
      noMistakes: 'இன்னும் தவறுகள் பதிவு செய்யப்படவில்லை. தொடர்ந்து பயிற்சி செய்யுங்கள்!',
      noAttempts: 'இன்னும் தேர்வு முயற்சிகள் இல்லை. உங்கள் முன்னேற்றத்தைக் காண ஒரு தேர்வை மேற்கொள்ளுங்கள்!',
      noAttemptsForSubject: 'இந்த பாடத்திற்கு தேர்வுத் தரவு இன்னும் இல்லை.',
      loading: 'ஏற்றுகிறது...',
      testLabel: 'தேர்வு',
      correctSummary: '{{correct}}/{{attempted}} சரியானது',
    },

    // Login
    email: 'மின்னஞ்சல்',
    password: 'கடவுச்சொல்',
    loginButton: 'உள்நுழைய',
    dontHaveAccount: 'கணக்கு இல்லையா?',
    signUp: 'பதிவு செய்ய',

    // Common
    submit: 'சமர்ப்பிக்க',
    cancel: 'ரத்து செய்',
    save: 'சேமி',
    next: 'அடுத்தது',
    previous: 'முந்தையது',
    back: 'பின்செல்',
    close: 'மூடு',
    delete: 'நீக்கு',
    edit: 'திருத்து',
    view: 'பார்',
    search: 'தேடு',
    filter: 'வடிகட்டு',
    all: 'அனைத்தும்',
    loading: 'ஏற்றுகிறது',
    page: 'பக்கம்',
    of: 'இல்',
    confirmDelete: 'இந்த கேள்வியை நிச்சயமாக நீக்க விரும்புகிறீர்களா?',
    searchQuestions: 'கேள்விகளைத் தேடு...',
    options: 'விருப்பங்கள்',
    difficulty: 'கடினத்தன்மை',

    // Dashboard
    dashboard: 'கட்டுப்பாட்டு பலகை',
    welcomeBack: 'மீண்டும் வருக',
    overallAccuracy: 'ஒட்டுமொத்த துல்லியம்',
    avgSpeed: 'சராசரி வேகம்',
    testsTaken: 'எடுத்த தேர்வுகள்',
    classRank: 'வகுப்பு தரவரிசை',

    // Questions
    question: 'கேள்வி',
    questions: 'கேள்விகள்',
    answer: 'பதில்',
    answers: 'பதில்கள்',
    explanation: 'விளக்கம்',
    correctAnswer: 'சரியான பதில்',
    yourAnswer: 'உங்கள் பதில்',

    // Subjects
    physics: 'இயற்பியல்',
    chemistry: 'வேதியியல்',
    biology: 'உயிரியல்',
    maths: 'கணிதம்',

    // Difficulty
    easy: 'எளிது',
    medium: 'நடுத்தர',
    hard: 'கடினம்',

    // Test Types
    practice: 'பயிற்சி',
    exam: 'தேர்வு',
    dailyChallenge: 'தினசரி சவால்',

    // Admin
    uploadQuestions: 'கேள்விகளை பதிவேற்று',
    createTest: 'தேர்வு உருவாக்கு',
    manageSchools: 'பள்ளிகளை நிர்வகி',
    manageTeachers: 'ஆசிரியர்களை நிர்வகி',
    manageStudents: 'மாணவர்களை நிர்வகி',
    students: 'மாணவர்கள்',
    reports: 'அறிக்கைகள்',

    // Navigation
    practiceMode: 'பயிற்சி முறை',
    takeAnExam: 'தேர்வு எழுதுங்கள்',
    mistakeBook: 'தவறு புத்தகம்',
    liveClasses: 'நேரலை வகுப்புகள்',
    myStudents: 'எனது மாணவர்கள்',
    questionBankNav: 'கேள்வி வங்கி',
    analytics: 'பகுப்பாய்வு',

    // Admin - Question Upload
    questionUploadTitle: 'கேள்வி பதிவேற்றம்',
    questionUploadDesc: 'Excel கோப்பிலிருந்து கேள்வி வங்கிக்கு கேள்விகளைப் பதிவேற்றவும்',
    questionBankTitle: 'கேள்வி வங்கி',
    questionBankDesc: 'NEET & JEE தேர்வுகளுக்கான இருமொழி கேள்வி வங்கியை நிர்வகிக்கவும்',
    uploadNewQuestions: 'புதிய கேள்விகளைப் பதிவேற்று',
    allQuestions: 'அனைத்து கேள்விகள்',
    selectExamType: 'தேர்வு வகையைத் தேர்ந்தெடுக்கவும்',
    selectSubject: 'பாடத்தைத் தேர்ந்தெடுக்கவும்',
    neet: 'NEET',
    jee: 'JEE',
    both: 'இரண்டும்',
    randomSelection: 'சீரற்ற தேர்வு',
    manualSelection: 'கையேடு தேர்வு',
    selectionMode: 'தேர்வு முறை',
    autoSelect: 'அமைப்பு தானாக தேர்ந்தெடுக்கும்',
    pickSpecific: 'குறிப்பிட்ட கேள்விகளை தேர்ந்தெடுக்கவும்',
    selected: 'தேர்ந்தெடுக்கப்பட்டது',
    questionPreview: 'கேள்வி முன்னோட்டம்',
    actions: 'செயல்கள்',
    viewQuestion: 'பார்',
    editQuestion: 'திருத்து',
    deleteQuestion: 'நீக்கு',
    noQuestionsFound: 'கேள்விகள் எதுவும் இல்லை',
    totalQuestions: 'மொத்த கேள்விகள்',
    filterQuestions: 'கேள்விகளை வடிகட்டு',
    selectExcelFile: 'Excel கோப்பைத் தேர்ந்தெடுக்கவும்',
    dragDropFile: 'அல்லது இழுத்து விடவும்',
    supportedFormats: 'ஆதரிக்கப்படும் வடிவங்கள்: .xlsx, .xls',
    uploadFile: 'கோப்பைப் பதிவேற்று',
    uploading: 'பதிவேற்றுகிறது...',
    uploadSuccess: 'பதிவேற்றம் வெற்றிகரமாக முடிந்தது!',
    uploadFailed: 'பதிவேற்றம் தோல்வியடைந்தது',
    questionsInserted: 'செருகப்பட்ட கேள்விகள்',
    duplicatesSkipped: 'நகல்கள் தவிர்க்கப்பட்டன',
    totalProcessed: 'மொத்தம் செயலாக்கப்பட்டது',
    errors: 'பிழைகள்',
    fileInformation: 'கோப்பு தகவல்',
    unit: 'அலகு',
    chapter: 'அத்தியாயம்',
    chapterName: 'அத்தியாய பெயர்',

    // Admin - Test Creation
    testCreationTitle: 'தேர்வு உருவாக்கு',
    testCreationDesc: 'கேள்வி வங்கியிலிருந்து கேள்விகளுடன் புதிய தேர்வு அல்லது பரீட்சையை உருவாக்கவும்',
    testDetails: 'தேர்வு விவரங்கள்',
    selectQuestions: 'கேள்விகளைத் தேர்ந்தெடுக்கவும்',
    testTitle: 'தேர்வு தலைப்பு',
    testTitlePlaceholder: 'தேர்வு தலைப்பை உள்ளிடவும்',
    testDescription: 'தேர்வு விவரம்',
    testDescriptionPlaceholder: 'தேர்வு விவரத்தை உள்ளிடவும்',
    testType: 'தேர்வு வகை',
    examType: 'பரீட்சை வகை',
    testDuration: 'கால அளவு (நிமிடங்கள்)',
    totalMarks: 'மொத்த மதிப்பெண்கள்',
    selectedQuestions: 'தேர்ந்தெடுக்கப்பட்ட கேள்விகள்',
    questionBank: 'கேள்வி வங்கி',
    selectAll: 'அனைத்தையும் தேர்ந்தெடு',
    deselectAll: 'அனைத்தையும் நீக்கு',
    filterBySubject: 'பாடத்தின் படி வடிகட்டு',
    filterByDifficulty: 'கடினத்தன்மையின் படி வடிகட்டு',
    allSubjects: 'அனைத்து பாடங்கள்',
    allDifficulties: 'அனைத்து கடினத்தன்மைகள்',
    createTestButton: 'தேர்வு உருவாக்கு',
    creatingTest: 'தேர்வு உருவாக்குகிறது...',
    testCreated: 'தேர்வு வெற்றிகரமாக உருவாக்கப்பட்டது!',
    testCreationFailed: 'தேர்வு உருவாக்கம் தோல்வியடைந்தது',

    // Admin - Daily Challenge
    dailyChallengeTitle: 'தினசரி சவால் உருவாக்கு',
    dailyChallengeDesc: 'மாணவர்களுக்கு சீரற்ற கேள்விகளுடன் தினசரி சவாலை அமைக்கவும்',
    challengeDate: 'சவால் தேதி',
    subject: 'பாடம்',
    numberOfQuestions: 'கேள்விகளின் எண்ணிக்கை',
    coinReward: 'நாணய வெகுமதி',
    coins: 'நாணயங்கள்',
    howItWorks: 'இது எவ்வாறு செயல்படுகிறது:',
    challengeTips: 'தினசரி சவால் குறிப்புகள்',
    variety: 'வகைகள்',
    consistency: 'நிலைத்தன்மை',
    difficultyBalance: 'கடினத்தன்மை சமநிலை',
    rewards: 'வெகுமதிகள்',
    createChallenge: 'தினசரி சவால் உருவாக்கு',
    creatingChallenge: 'சவால் உருவாக்குகிறது...',
    challengeCreated: 'தினசரி சவால் வெற்றிகரமாக உருவாக்கப்பட்டது!',
    challengeFailed: 'தினசரி சவால் உருவாக்க முடியவில்லை',

    // Time
    minutes: 'நிமிடங்கள்',
    seconds: 'விநாடிகள்',
    duration: 'காலம்',

    // Results
    score: 'மதிப்பெண்',
    marks: 'மதிப்பெண்கள்',
    percentage: 'சதவீதம்',
    correct: 'சரி',
    wrong: 'தவறு',
    skipped: 'தவிர்த்தது',

    // Language
    selectLanguage: 'மொழியை தேர்ந்தெடுக்கவும்',
    english: 'ஆங்கிலம்',
    tamil: 'தமிழ்',

    // Practice & Exam Mode
    practiceExam: {
      // Dashboard
      practiceDashboardTitle: 'பயிற்சி முறை',
      practiceDashboardSubtitle: 'உடனடி கருத்துடன் உங்கள் சொந்த வேகத்தில் தலைப்புகளை கற்றுக்கொள்ளுங்கள்',
      questionsPracticed: 'பயிற்சி செய்த கேள்விகள்',
      weeklyGoal: 'வாராந்திர இலக்கு',
      dayStreak: 'நாள் தொடர்ச்சி',
      topicsCompleted: 'முடிக்கப்பட்ட தலைப்புகள்',
      practiceTime: 'பயிற்சி நேரம்',
      hours: 'மணி நேரங்கள்',

      // Subject Progress
      subjectProgress: 'பாட முன்னேற்றம்',
      progress: 'முன்னேற்றம்',
      topics: 'தலைப்புகள்',
      accuracy: 'துல்லியம்',

      // Practice by Topic
      practiceByTopic: 'தலைப்பின் மூலம் பயிற்சி',
      filterLabel: 'வடிகட்டு:',
      inProgress: 'முன்னேற்றத்தில்',
      notStarted: 'தொடங்கவில்லை',
      practiceAgain: 'மீண்டும் பயிற்சி செய்',
      continuePractice: 'பயிற்சியை தொடர்',
      startPractice: 'பயிற்சியைத் தொடங்கு',

      // Exam Selection
      selectPracticeTest: 'பயிற்சித் தேர்வைத் தேர்ந்தெடுக்கவும்',
      selectExamTest: 'தேர்வைத் தேர்ந்தெடுக்கவும்',
      chooseTest: 'தொடங்க ஒரு சோதனையைத் தேர்ந்தெடுக்கவும்',
      noTestsAvailable: 'தற்போது சோதனைகள் எதுவும் இல்லை. பின்னர் சரிபார்க்கவும்!',
      questionsLabel: 'கேள்விகள்',
      marksLabel: 'மதிப்பெண்கள்',
      subjects: 'பாடங்கள்',

      // During Practice/Exam
      questionOf: 'கேள்வி {{current}} / {{total}}',
      mark: 'மதிப்பெண்',
      marks: 'மதிப்பெண்கள்',
      explanation: 'விளக்கம்:',
      previous: 'முந்தையது',
      next: 'அடுத்தது',
      finishPractice: 'பயிற்சியை முடிக்கவும்',

      // Results
      practiceComplete: 'பயிற்சி அமர்வு முடிந்தது!',
      examComplete: 'தேர்வு முடிந்தது!',
      yourAccuracy: 'உங்கள் துல்லியம்',
      yourScore: 'உங்கள் மதிப்பெண்',
      correct: 'சரியானது',
      incorrect: 'தவறானது',
      skipped: 'தவிர்க்கப்பட்டது',
      unattempted: 'முயற்சிக்கப்படவில்லை',
      backToDashboard: 'பலகைக்கு திரும்பு',
      viewSolutions: 'விரிவான தீர்வுகளைக் காண்க',

      // Timer
      timeRemaining: 'எஞ்சியுள்ள நேரம்',
      timeUp: 'நேரம் முடிந்தது!',
      autoSubmitting: 'தானாக சமர்ப்பிக்கிறது...',

      // Exam Navigation
      questionPalette: 'கேள்வி தட்டு',
      answered: 'பதிலளிக்கப்பட்டது',
      notAnswered: 'பதிலளிக்கவில்லை',
      markedForReview: 'மதிப்பாய்வுக்கு குறிக்கப்பட்டது',
      notVisited: 'பார்வையிடப்படவில்லை',
      markForReview: 'மதிப்பாய்வுக்கு குறி',
      clearResponse: 'பதிலை அழி',
      saveAndNext: 'சேமித்து அடுத்தது',
      submitExam: 'தேர்வை சமர்ப்பிக்கவும்',
      confirmSubmit: 'தேர்வை சமர்ப்பிக்க விரும்புகிறீர்களா?',

      // Performance Analytics
      performanceAnalytics: 'செயல்திறன் பகுப்பாய்வு',
      subjectWise: 'பாட வாரியான செயல்திறன்',
      topicWise: 'தலைப்பு வாரியான செயல்திறன்',
      difficultyWise: 'கடினத்தன்மை வாரியான செயல்திறன்',
      timeAnalysis: 'நேர மேலாண்மை பகுப்பாய்வு',
      avgTimePerQuestion: 'ஒரு கேள்விக்கான சராசரி நேரம்',
      fastestQuestion: 'வேகமான கேள்வி',
      slowestQuestion: 'மெதுவான கேள்வி',

      // AI Insights
      aiInsights: 'AI-இயங்கும் நுண்ணறிவுகள்',
      recommendations: 'பரிந்துரைகள்',
      strengths: 'உங்கள் பலங்கள்',
      weaknesses: 'மேம்படுத்த வேண்டிய பகுதிகள்',
      studyPlan: 'தனிப்பயன் கற்றல் திட்டம்',

      // Leaderboard
      leaderboard: 'தலைமை பலகை',
      yourRank: 'உங்கள் தரவரிசை',
      percentile: 'சதவீதம்',
      topPerformers: 'சிறந்த செயல்திறன்',

      // Difficulty Levels
      easy: 'எளிது',
      medium: 'நடுத்தர',
      hard: 'கடினம்',
      mixed: 'கலந்த',

      // Status
      available: 'கிடைக்கிறது',
      completed: 'முடிக்கப்பட்டது',
      locked: 'பூட்டப்பட்டது',

      // Actions
      startExam: 'தேர்வைத் தொடங்கு',
      resumeExam: 'தேர்வைத் தொடர்',
      retakeExam: 'மீண்டும் எழுது',

      // Instructions
      examInstructions: 'தேர்வு வழிமுறைகள்',
      instruction1: 'பதிலளிப்பதற்கு முன் அனைத்து கேள்விகளையும் கவனமாகப் படியுங்கள்',
      instruction2: 'குறிப்பிடப்படாவிட்டால் ஒவ்வொரு கேள்விக்கும் சம மதிப்பெண்கள்',
      instruction3: 'பயிற்சி முறையில் எதிர்மறை மதிப்பெண்கள் இல்லை',
      instruction4: 'முந்தைய/அடுத்த பொத்தான்களைப் பயன்படுத்தி கேள்விகளுக்கு இடையில் செல்லலாம்',
      instruction5: 'அனைத்து கேள்விகளையும் முடித்ததும் சமர்ப்பிக்கவும் என்பதைக் கிளிக் செய்யவும்',
      readyToStart: 'நான் வழிமுறைகளைப் படித்து புரிந்துகொண்டேன்',
      startNow: 'இப்போது தொடங்கு',

      // Multimedia Learning
      watchVideo: 'பார்க்க (2D/3D)',
      listenAudio: 'கேட்க',
      readMaterial: 'படிக்க',
      viewAR: 'AR பார்வை',
      experienceVR: 'VR அனுபவம்',
      multimediaLearning: 'பல்லூடக கற்றல்',
      videoExplanation: 'வீடியோ விளக்கம்',
      audioNarration: 'ஆடியோ விவரிப்பு',
      studyMaterial: 'படிப்பு பொருள்',
      augmentedReality: 'பெருக்கப்பட்ட யதார்த்தம்',
      virtualReality: 'மெய்நிகர் யதார்த்தம்',
      watch: 'பார்க்க',
      listen: 'கேட்க',
      read: 'படிக்க',
      ar: 'மிகை மெய்ம்மை',
      vr: 'மெய்நிகர் உண்மை',
    },

    // TN Schools Map View
    tnSchoolsMap: {
      mapView: 'வரைபடம்',
      zoomIn: 'பெரிதாக்கு',
      zoomOut: 'சிறிதாக்கு',
      resetView: 'மீட்டமை',
      schools: 'பள்ளிகள்',
      students: 'மாணவர்கள்',
      blocks: 'வட்டாரங்கள்',
      districtsLabel: 'மாவட்டங்கள்',
      clickToViewDetails: 'விவரங்களைப் பார்க்க கிளிக் செய்க',
      dragToPan: 'இழுத்து நகர்த்தவும்',
      scrollToZoom: 'சுருட்டல் ஜூம்',
      clickDistrictToSelect: 'மாவட்டத்தைத் தேர்ந்தெடுக்க கிளிக் செய்க',
      instructions: 'இழுத்து நகர்த்தவும் • சுருட்டல் ஜூம் • மாவட்டத்தைத் தேர்ந்தெடுக்க கிளிக் செய்க',

      // District Names in Tamil
      districts: {
        ARIYALUR: 'அரியலூர்',
        CHENGALPATTU: 'செங்கல்பட்டு',
        CHENNAI: 'சென்னை',
        COIMBATORE: 'கோயம்புத்தூர்',
        CUDDALORE: 'கடலூர்',
        DHARMAPURI: 'தர்மபுரி',
        DINDIGUL: 'திண்டுக்கல்',
        ERODE: 'ஈரோடு',
        KALLAKURICHI: 'கள்ளக்குறிச்சி',
        KANNIYAKUMARI: 'கன்னியாகுமரி',
        KANCHIPURAM: 'காஞ்சிபுரம்',
        KANCHEEPURAM: 'காஞ்சிபுரம்',
        KARUR: 'கரூர்',
        KRISHNAGIRI: 'கிருஷ்ணகிரி',
        MADURAI: 'மதுரை',
        MAYILADUTHURAI: 'மயிலாடுதுறை',
        NAGAPATTINAM: 'நாகப்பட்டினம்',
        NAMAKKAL: 'நாமக்கல்',
        PERAMBALUR: 'பெரம்பலூர்',
        PUDUKKOTTAI: 'புதுக்கோட்டை',
        RAMANATHAPURAM: 'ராமநாதபுரம்',
        RANIPET: 'ராணிப்பேட்டை',
        SALEM: 'சேலம்',
        SIVAGANGA: 'சிவகங்கை',
        SIVAGANGAI: 'சிவகங்கை',
        THANJAVUR: 'தஞ்சாவூர்',
        THENI: 'தேனி',
        'THE NILGIRIS': 'நீலகிரி',
        TENKASI: 'தென்காசி',
        TIRUCHIRAPPALLI: 'திருச்சிராப்பள்ளி',
        TIRUNELVELI: 'திருநெல்வேலி',
        TIRUPATHUR: 'திருப்பத்தூர்',
        TIRUPPUR: 'திருப்பூர்',
        THIRUVALLUR: 'திருவள்ளூர்',
        TIRUVALLUR: 'திருவள்ளூர்',
        TIRUVANNAMALAI: 'திருவண்ணாமலை',
        THIRUVARUR: 'திருவாரூர்',
        TIRUVARUR: 'திருவாரூர்',
        THOOTHUKKUDI: 'தூத்துக்குடி',
        TUTICORIN: 'தூத்துக்குடி',
        VELLORE: 'வேலூர்',
        VILLUPURAM: 'விழுப்புரம்',
        VIRUDHUNAGAR: 'விருதுநகர்',
      },
    },
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Get saved language from localStorage or default to English
    const saved = localStorage.getItem('appLanguage');
    return (saved === 'ta' || saved === 'en') ? saved : 'en';
  });

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('appLanguage', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export default LanguageContext;
