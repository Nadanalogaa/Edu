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
    appTitle: 'Education Intelligence',
    appTagline: 'Master NEET & JEE with AI-Powered Learning',
    getStarted: 'Get Started',
    login: 'Login',
    register: 'Register',
    features: 'Features',
    aboutUs: 'About Us',
    contactUs: 'Contact Us',
    landing: {
      nav: {
        home: 'Home',
        tagline: 'NEET & JEE Excellence',
      },
      hero: {
        slides: {
          slide1: {
            title: 'Transform Your Dreams into Reality',
            subtitle: 'Join thousands of students achieving NEET & JEE success',
            description:
              "Personalized learning paths, AI-powered analytics, and expert guidance to help you crack India's toughest exams",
            cta: 'Start Your Journey',
          },
          slide2: {
            title: 'Master NEET with Confidence',
            subtitle: 'Your pathway to becoming a doctor starts here',
            description: 'Comprehensive Biology, Chemistry, and Physics preparation with bilingual support (English & Tamil)',
            cta: 'Explore NEET Prep',
          },
          slide3: {
            title: 'Conquer JEE with Excellence',
            subtitle: 'Engineering dreams made possible',
            description: 'Advanced Mathematics, Physics, and Chemistry courses designed by IIT experts',
            cta: 'Start JEE Prep',
          },
          slide4: {
            title: 'Learn from the Best, Become the Best',
            subtitle: 'Expert faculty with years of experience',
            description: 'Live classes, personalized doubt-solving, and 24/7 support to ensure your success',
            cta: 'Meet Our Teachers',
          },
          slide5: {
            title: 'Your Medical Career Awaits',
            subtitle: 'From student to doctor - we guide you all the way',
            description: 'Track your progress, identify weak areas, and improve with our intelligent mistake book system',
            cta: 'Begin Today',
          },
        },
      },
      registration: {
        title: 'Ready to Start Your Journey?',
        subtitle: 'Choose your path and join thousands of successful students',
        cards: {
          student: {
            title: 'Student Registration',
            description: 'Individual students preparing for NEET or JEE exams',
            bullets: {
              one: 'Choose NEET or JEE track',
              two: 'Personalized learning dashboard',
              three: 'Track progress & analytics',
              four: 'Bilingual support (English & Tamil)',
            },
            cta: 'Register as Student',
          },
          teacher: {
            title: 'Teacher Onboarding',
            description: 'Experienced educators can share expertise and mentor students',
            bullets: {
              one: 'Submit qualifications & documents',
              two: 'Create & manage tests',
              three: 'Conduct live classes',
              four: 'Monitor student performance',
            },
            cta: 'Register as Teacher',
          },
          school: {
            title: 'School Registration',
            description: 'Bulk registration for schools & institutions',
            bullets: {
              one: 'Upload multiple students via CSV/Excel',
              two: 'Batch account creation',
              three: 'Centralized management',
              four: 'Download CSV template',
            },
            cta: 'Register School',
          },
        },
      },
      about: {
        title: 'About Educational Intelligence',
        paragraph1:
          'We are dedicated to empowering students across Tamil Nadu to achieve their dreams of becoming doctors and engineers. Our platform combines cutting-edge technology with expert pedagogy to provide personalized, effective exam preparation.',
        paragraph2:
          'With support for both English and Tamil, we ensure that language is never a barrier to quality education. Our intelligent analytics, adaptive learning paths, and comprehensive question bank make exam preparation efficient and effective.',
        paragraph3:
          'Join thousands of successful students who have cracked NEET and JEE with our guidance. Your journey to success starts here.',
        stats: {
          successRate: 'Success Rate',
          students: 'Students',
          questions: 'Questions',
          support: 'Support',
        },
      },
      featuresSection: {
        title: 'Why Choose Educational Intelligence?',
        subtitle: 'Everything you need to succeed in NEET & JEE exams, all in one intelligent platform',
      },
      features: {
        personalizedTitle: 'Personalized Learning',
        personalizedDescription: 'AI-powered adaptive learning paths tailored to your strengths and weaknesses',
        questionBankTitle: 'Comprehensive Question Bank',
        questionBankDescription: '10,000+ NEET & JEE questions in English and Tamil with detailed solutions',
        mistakeBookTitle: 'Intelligent Mistake Book',
        mistakeBookDescription: 'Automatic tracking of errors with personalized revision recommendations',
        liveClassesTitle: 'Live Classes & Doubt Solving',
        liveClassesDescription: 'Interactive sessions with expert teachers and instant doubt resolution',
        mockTestsTitle: 'Mock Tests & Analytics',
        mockTestsDescription: 'Simulated exam environment with detailed performance analytics',
        gamifiedTitle: 'Gamified Learning',
        gamifiedDescription: 'Earn coins, maintain streaks, and compete with peers for motivation',
      },
      featureStats: {
        practiceQuestions: 'Practice Questions',
        activeStudents: 'Active Students',
        successRate: 'Success Rate',
        expertSupport: 'Expert Support',
      },
      contact: {
        title: 'Get in Touch',
        subtitle: "Have questions? We're here to help!",
        form: {
          fullNameLabel: 'Full Name',
          fullNamePlaceholder: 'Your name',
          emailLabel: 'Email Address',
          emailPlaceholder: 'you@example.com',
          subjectLabel: 'Subject',
          subjectPlaceholder: 'How can we help?',
          messageLabel: 'Message',
          messagePlaceholder: 'Your message...',
          submit: 'Send Message',
        },
      },
      footer: {
        description:
          'Empowering students across Tamil Nadu to achieve their dreams of becoming doctors and engineers through intelligent, personalized learning.',
        programsTitle: 'Programs',
        programs: {
          neet: 'NEET Preparation',
          jee: 'JEE Preparation',
          mock: 'Mock Tests',
          live: 'Live Classes',
          doubt: 'Doubt Solving',
        },
        contactTitle: 'Contact Us',
        location: 'Tamil Nadu, India',
        email: 'support@eduintelligence.com',
        phone: '+91 1800-XXX-XXXX (Toll Free)',
        rights: 'Educational Intelligence. All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        refund: 'Refund Policy',
      },
      registrationLanding: {
        title: 'Welcome to Educational Intelligence',
        subtitle: 'Choose your registration type to get started',
        alreadyHaveAccount: 'Already have an account?',
        signIn: 'Sign In',
      },
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
    questionBank: 'Question Bank',
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
      completed: 'Completed',
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
    },
  },
  ta: {
    // Landing Page
    appTitle: 'கல்வி நுண்ணறிவு',
    appTagline: 'AI-ஆல் இயக்கப்படும் கற்றலுடன் NEET & JEE-ஐ வெல்லுங்கள்',
    getStarted: 'தொடங்குங்கள்',
    login: 'உள்நுழைய',
    register: 'பதிவு செய்ய',
    features: 'அம்சங்கள்',
    aboutUs: 'எங்களை பற்றி',
    contactUs: 'எங்களை தொடர்பு கொள்ள',
    landing: {
      nav: {
        home: 'முகப்பு',
        tagline: 'NEET & JEE சிறப்பு',
      },
      hero: {
        slides: {
          slide1: {
            title: 'உங்கள் கனவுகளை நனவாக்குங்கள்',
            subtitle: 'NEET & JEE வெற்றியை பெற்ற ஆயிரக்கணக்கான மாணவர்களில் நீங்களும் இணைந்திடுங்கள்',
            description:
              'இந்தியாவின் கடினமான தேர்வுகளை வெல்ல தனிப்பயன் கற்றல் பாதைகள், AI பகுப்பாய்வு மற்றும் நிபுணர் வழிகாட்டுதல்',
            cta: 'உங்கள் பயணத்தை தொடங்குங்கள்',
          },
          slide2: {
            title: 'நம்பிக்கையுடன் NEET-ஐ கற்றிடுங்கள்',
            subtitle: 'மருத்துவராகும் பாதை இங்கிருந்தே தொடங்குகிறது',
            description: 'ஆங்கிலம்  மற்றும் தமிழ் உயிரியல், வேதியல் , இயற்பியல் என முழுமையான தயாரிப்பு',
            cta: 'NEET தயாரியை ஆராயுங்கள்',
          },
          slide3: {
            title: 'JEE-யை எளிதாக வெல்லுங்கள்',
            subtitle: 'பொறியியல் கனவுகள் இங்கு சாத்தியமாகின்றன',
            description: 'நிபுணர்கள் வடிவமைத்த மேம்பட்ட கணிதம், இயற்பியல், வேதியியல் பாடத்திட்டங்கள்.',
            cta: 'JEE தயாரியை தொடங்குங்கள்',
          },
          slide4: {
            title: 'மேலானவர்களிடம் கற்று மேன்மை அடையுங்கள்...',
            subtitle: 'பல வருட அனுபவம் கொண்ட நிபுணத்துவம் வாய்ந்த ஆசிரியர்கள்',
            description: 'நேரலை வகுப்புகள், தனிப்பட்ட ஐயங்களைத் தீர்த்தல் மற்றும் உங்கள் வெற்றிக்கான ஆதரவைப் பெற...',
            cta: 'எங்கள் ஆசிரியர்களை சந்தியுங்கள்',
          },
          slide5: {
            title: 'மருத்துவப் பயணம் உங்களுக்காக காத்திருக்கிறது',
            subtitle: 'மாணவர் முதல் மருத்துவராகும் வரை ஒவ்வொரு வழியிலும் நாங்கள் உங்களுடன்..',
            description: 'நுண்ணறிவு பிழைப்புத்தகத்தின் மூலம் கற்றல் முன்னேற்றத்தைக் கண்காணித்து உங்கள் குறை ஆற்றலை சிறப்பாக்குங்கள்',
            cta: 'இன்று தொடங்குங்கள்',
          },
        },
      },
      registration: {
        title: 'உங்கள் பயணத்தை தொடங்கத் தயாரா?',
        subtitle: 'வெற்றி கண்ட மாணவர்களுடன் சேர உங்கள் பாதையைத் தேர்ந்தெடுக்கவும்',
        cards: {
          student: {
            title: 'மாணவர் பதிவு',
            description: 'NEET அல்லது JEE தேர்வுக்கு தயாராகும் தனிநபர் மாணவர்கள்',
            bullets: {
              one: 'NEET அல்லது JEE பாதையைத் தேர்வுசெய்க',
              two: 'தனிப்பயன் கற்றல் பலகை',
              three: 'முன்னேற்றம் மற்றும் பகுப்பாய்வை கண்காணிக்கவும்',
              four: 'இருமொழி ஆதரவு (ஆங்கிலம் & தமிழ்)',
            },
            cta: 'மாணவராக பதிவு செய்யுங்கள்',
          },
          teacher: {
            title: 'ஆசிரியர் இணைவு',
            description: 'அனுபவமுள்ள اساتீர் தங்கள் நிபுணத்துவத்தைப் பகிரலாம்',
            bullets: {
              one: 'தகுதிகள் மற்றும் ஆவணங்களை சமர்ப்பிக்கவும்',
              two: 'தேர்வுகளை உருவாக்கி நிர்வகிக்கவும்',
              three: 'நேரலை வகுப்புகளை நடத்தவும்',
              four: 'மாணவர் செயல்திறனை கண்காணிக்கவும்',
            },
            cta: 'ஆசிரியராக பதிவு செய்யுங்கள்',
          },
          school: {
            title: 'பள்ளி பதிவு',
            description: 'பள்ளிகள் மற்றும் நிறுவனங்களுக்கு மொத்த பதிவு',
            bullets: {
              one: 'CSV/Excel மூலம் பல மாணவர்களைப் பதிவேற்றவும்',
              two: 'தொகுதி கணக்கு உருவாக்கம்',
              three: 'மையக நிர்வகிப்பு',
              four: 'CSV வார்ப்புருவை பதிவிறக்கவும்',
            },
            cta: 'பள்ளியை பதிவு செய்யுங்கள்',
          },
        },
      },
      about: {
        title: 'Educational Intelligence பற்றி',
        paragraph1:
          'தமிழ்நாட்டின் மாணவர்கள் மருத்துவராகவும் பொறியாளராகவும் ஆகும் கனவுகளை நிஜமாக்க நாங்கள் அர்ப்பணிக்கப்பட்டுள்ளோம். முன்னேற்றுத் தொழில்நுட்பமும் நிபுணர் கற்பித்தலும் இணைந்து தனிப்பயன், விளைவான தேர்வு தயாரியை வழங்குகிறது.',
        paragraph2:
          'ஆங்கிலம் மற்றும் தமிழ் ஆதரவுடன் தரமான கல்விக்கு மொழி ஒருபோதும் தடையல்ல. நமது நுண்ணறிவு பகுப்பாய்வுகள், தழுவிய கற்றல் பாதைகள் மற்றும் விரிவான கேள்வி வங்கி ஆகியவை தயாரியை சிறப்பாக மாற்றுகின்றன.',
        paragraph3:
          'எங்களின் வழிகாட்டுதலுடன் NEET மற்றும் JEE-ஐ வென்ற ஆயிரக்கணக்கான மாணவர்களில் நீங்களும் சேருங்கள். உங்கள் வெற்றிப் பயணம் இங்கிருந்து தொடங்குகிறது.',
        stats: {
          successRate: 'வெற்றி விகிதம்',
          students: 'மாணவர்கள்',
          questions: 'கேள்விகள்',
          support: 'ஆதரவு',
        },
      },
      featuresSection: {
        title: 'ஏன் Educational Intelligence?',
        subtitle: 'NEET & JEE வெற்றிக்கான அனைத்து அம்சங்களும் ஒரே நுண்ணறிவு தளத்தில்',
      },
      features: {
        personalizedTitle: 'தனிப்பயன் கற்றல்',
        personalizedDescription: 'உங்கள் பலம் மற்றும் பலவீனங்களுக்கு ஏற்ப AI தழுவிய கற்றல் பாதைகள்',
        questionBankTitle: 'முழுமையான கேள்வி வங்கி',
        questionBankDescription: 'ஆங்கிலம் மற்றும் தமிழில் 10,000+ NEET & JEE கேள்விகள் மற்றும் விரிவான விளக்கங்கள்',
        mistakeBookTitle: 'நுண்ணறிவு தவறு புத்தகம்',
        mistakeBookDescription: 'தவறுகளை தானாகப் பதிவு செய்து தனிப்பயன் மறுபார்வை பரிந்துரைகள் வழங்குகிறது',
        liveClassesTitle: 'நேரலை வகுப்புகள் & சந்தேக தீர்வு',
        liveClassesDescription: 'நிபுணர் ஆசிரியர்களுடன் தொடர்பு கொண்டு உடனடி சந்தேக தீர்வுகள்',
        mockTestsTitle: 'மாதிரித் தேர்வுகள் & பகுப்பாய்வு',
        mockTestsDescription: 'தேர்வு சூழலை ஒத்திருக்கும் சோதனைகள் மற்றும் விரிவான செயல்திறன் பகுப்பாய்வு',
        gamifiedTitle: 'விளையாட்டாக்கப்பட்ட கற்றல்',
        gamifiedDescription: 'நாணயங்களைப் பெறுங்கள், தொடர்களை பராமரிக்கவும், சக மாணவர்களுடன் போட்டியிடுங்கள்',
      },
      featureStats: {
        practiceQuestions: 'பயிற்சி கேள்விகள்',
        activeStudents: 'செயலில் உள்ள மாணவர்கள்',
        successRate: 'வெற்றி விகிதம்',
        expertSupport: 'நிபுணர் ஆதரவு',
      },
      contact: {
        title: 'எங்களை தொடர்பு கொள்ளுங்கள்',
        subtitle: 'சந்தேகங்கள் உள்ளனவா? உதவ தயாராக உள்ளோம்!',
        form: {
          fullNameLabel: 'முழு பெயர்',
          fullNamePlaceholder: 'உங்கள் பெயர்',
          emailLabel: 'மின்னஞ்சல் முகவரி',
          emailPlaceholder: 'you@example.com',
          subjectLabel: 'பொருள்',
          subjectPlaceholder: 'எப்படி உதவலாம்?',
          messageLabel: 'செய்தி',
          messagePlaceholder: 'உங்கள் செய்தி...',
          submit: 'செய்தியை அனுப்புங்கள்',
        },
      },
      footer: {
        description:
          'தமிழ்நாட்டில் உள்ள மாணவர்கள் மருத்துவராகவும் பொறியாளராகவும் ஆகும் கனவுகளை தனிப்பயன் நுண்ணறிவு கற்றலால் நாங்கள் வலுப்படுத்துகிறோம்.',
        programsTitle: 'பயிற்சி திட்டங்கள்',
        programs: {
          neet: 'NEET தயாரிப்பு',
          jee: 'JEE தயாரிப்பு',
          mock: 'மாதிரித் தேர்வுகள்',
          live: 'நேரலை வகுப்புகள்',
          doubt: 'சந்தேக தீர்வு',
        },
        contactTitle: 'எங்களை தொடர்பு கொள்ள',
        location: 'தமிழ்நாடு, இந்தியா',
        email: 'support@eduintelligence.com',
        phone: '+91 1800-XXX-XXXX (Toll Free)',
        rights: 'Educational Intelligence. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
        privacy: 'தனியுரிமைக் கொள்கை',
        terms: 'சேவை விதிமுறைகள்',
        refund: 'பணவழங்கும் கொள்கை',
      },
      registrationLanding: {
        title: 'Educational Intelligence-க்கு வரவேற்கிறோம்',
        subtitle: 'தொடங்க உங்கள் பதிவு வகையைத் தேர்ந்தெடுக்கவும்',
        alreadyHaveAccount: 'ஏற்கெனவே கணக்கா உள்ளது?',
        signIn: 'உள்நுழைய',
      },
    },
    dashboards: {
      adminTitle: 'நிர்வாகி கட்டுப்பாட்டு பலகை',
      teacherTitle: 'ஆசிரியர் கட்டுப்பாட்டு பலகை (தரம் 12A)',
      cards: {
        totalStudents: 'மொத்த மாணவர்கள்',
        activeTeachers: 'செயலில் உள்ள اساتீர்',
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
    questionBank: 'கேள்வி வங்கி',
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
      completed: 'முடிக்கப்பட்டது',
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
