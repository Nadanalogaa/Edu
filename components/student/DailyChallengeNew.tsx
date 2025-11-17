import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TargetIcon, TrendingUpIcon, ZapIcon, PhysicsIcon, ChemistryIcon, BiologyIcon } from '../icons';

// Mock Tamil questions data from Excel
const mockQuestions = [
  {
    _id: '1',
    question: {
      en: "Specialized pits called bordered pits are present on the radial walls of",
      ta: "எல்லையிடப்பட்ட குழிகள் எனப்படும் சிறப்பு குழிகள் ஆர சுவர்களில் உள்ளன"
    },
    options: [
      { en: "Xylem tracheids", ta: "சைலம் மூச்சுக்குழாய்கள்" },
      { en: "Sieve tubes", ta: "சல்லடை குழாய்கள்" },
      { en: "Xylem fibers", ta: "சைலம் இழைகள்" },
      { en: "Sieve plates", ta: "தட்டுகளை சல்லடை செய்யவும்" }
    ],
    correctAnswer: { en: "Xylem tracheids", ta: "சைலம் மூச்சுக்குழாய்கள்" },
    explanation: {
      en: "Bordered pits are cavities in the lignified cell walls of the xylem. On the radial walls of xylem tracheids and vessels, bordered pits can be observed.",
      ta: "சைலேமின் லிக்னிஃபைட் செல் சுவர்களில் உள்ள குழிகள் எல்லைக்குட்பட்ட குழிகள் ஆகும். சைலேம் மூச்சுக்குழாய்கள் மற்றும் நாளங்களின் ஆரச் சுவர்களில், எல்லைக்குட்பட்ட குழிகளைக் காணலாம்."
    },
    subject: 'Biology',
    difficulty: 'Medium',
    topic: 'The Tissues'
  },
  {
    _id: '2',
    question: {
      en: "The corners of cells in collenchyma are coated with",
      ta: "கோலென்கைமாவில் உள்ள செல்களின் மூலைகள் எதனால் பூசப்பட்டுள்ளன?"
    },
    options: [
      { en: "cellulose", ta: "செல்லுலோஸ்" },
      { en: "pectic substances", ta: "பெக்டிக் பொருட்கள்" },
      { en: "Both (a) and (b)", ta: "(அ) மற்றும் (ஆ) இரண்டும்" },
      { en: "None of these", ta: "இவை எதுவும் இல்லை" }
    ],
    correctAnswer: { en: "Both (a) and (b)", ta: "(அ) மற்றும் (ஆ) இரண்டும்" },
    explanation: {
      en: "The corners of cells in the collenchyma are coated with cellulose and pectic compounds. This deposition makes the cells irregularly thick.",
      ta: "கோலென்கைமாவில் உள்ள செல்களின் மூலைகள் செல்லுலோஸ் மற்றும் பெக்டிக் சேர்மங்களால் பூசப்பட்டுள்ளன."
    },
    subject: 'Biology',
    difficulty: 'Easy',
    topic: 'The Tissues'
  },
  {
    _id: '3',
    question: {
      en: "Which option is true for Sclerenchymatous fibers?",
      ta: "ஸ்க்லரெஞ்சிமாட்டஸ் இழைகளுக்கு எந்த விருப்பம் சரியானது?"
    },
    options: [
      { en: "Lignified", ta: "மரத்தால் ஆனது" },
      { en: "Dead", ta: "இறந்துவிட்டது" },
      { en: "Found in pericycle of stem", ta: "தண்டின் பெரிசைக்கிளில் காணப்படுகிறது" },
      { en: "All of these", ta: "இவை அனைத்தும்" }
    ],
    correctAnswer: { en: "All of these", ta: "இவை அனைத்தும்" },
    explanation: {
      en: "Sclerenchyma is a type of simple permanent tissue present in plants. It is made up of dead lignified cells and is the chief mechanical tissue present in plants.",
      ta: "ஸ்க்லரெஞ்சிமா என்பது தாவரங்களில் காணப்படும் ஒரு வகை எளிய நிரந்தர திசுக்களாகும்."
    },
    subject: 'Biology',
    difficulty: 'Medium',
    topic: 'The Tissues'
  },
  {
    _id: '4',
    question: {
      en: "A body of mass 2 kg is moving with velocity 10 m/s. What is its kinetic energy?",
      ta: "2 கிலோ நிறை கொண்ட ஒரு பொருள் 10 மீ/வி வேகத்தில் நகர்கிறது. அதன் இயக்க ஆற்றல் என்ன?"
    },
    options: [
      { en: "50 J", ta: "50 J" },
      { en: "100 J", ta: "100 J" },
      { en: "200 J", ta: "200 J" },
      { en: "25 J", ta: "25 J" }
    ],
    correctAnswer: { en: "100 J", ta: "100 J" },
    explanation: {
      en: "Kinetic Energy = (1/2)mv². KE = (1/2) × 2 × (10)² = 100 J",
      ta: "இயக்க ஆற்றல் = (1/2)mv². KE = (1/2) × 2 × (10)² = 100 J"
    },
    subject: 'Physics',
    difficulty: 'Easy',
    topic: 'Work, Energy and Power'
  },
  {
    _id: '5',
    question: {
      en: "The SI unit of electric field intensity is:",
      ta: "மின்சார புல தீவிரத்தின் SI அலகு:"
    },
    options: [
      { en: "Volt", ta: "வோல்ட்" },
      { en: "Volt per meter (V/m)", ta: "மீட்டருக்கு வோல்ட் (V/m)" },
      { en: "Newton", ta: "நியூட்டன்" },
      { en: "Ampere", ta: "ஆம்பியர்" }
    ],
    correctAnswer: { en: "Volt per meter (V/m)", ta: "மீட்டருக்கு வோல்ட் (V/m)" },
    explanation: {
      en: "Electric field intensity E is defined as force per unit charge (E = F/q), therefore its SI unit is V/m or N/C.",
      ta: "மின்சார புல தீவிரம் E என்பது ஒரு அலகு மின்னூட்டத்திற்கு விசை என வரையறுக்கப்படுகிறது."
    },
    subject: 'Physics',
    difficulty: 'Medium',
    topic: 'Electrostatics'
  },
  {
    _id: '6',
    question: {
      en: "What is the IUPAC name of CH₃-CH₂-CH₂-OH?",
      ta: "CH₃-CH₂-CH₂-OH இன் IUPAC பெயர் என்ன?"
    },
    options: [
      { en: "1-Propanol", ta: "1-புரோபனால்" },
      { en: "2-Propanol", ta: "2-புரோபனால்" },
      { en: "Ethanol", ta: "எத்தனால்" },
      { en: "Methanol", ta: "மெத்தனால்" }
    ],
    correctAnswer: { en: "1-Propanol", ta: "1-புரோபனால்" },
    explanation: {
      en: "When naming alcohols, number the carbon chain from the end that gives the -OH group the lowest number. The name is 1-Propanol.",
      ta: "ஆல்கஹால்களை பெயரிடும்போது, -OH குழுவிற்கு குறைந்த எண்ணைக் கொடுக்கும் முனையிலிருந்து கார்பன் சங்கிலியை எண்ணுங்கள்."
    },
    subject: 'Chemistry',
    difficulty: 'Easy',
    topic: 'Organic Chemistry - Nomenclature'
  },
  {
    _id: '7',
    question: {
      en: "Which reagent is used to distinguish between aldehydes and ketones?",
      ta: "ஆல்டிஹைடுகள் மற்றும் கீட்டோன்களை வேறுபடுத்த எந்த வினைப்பொருள் பயன்படுத்தப்படுகிறது?"
    },
    options: [
      { en: "Tollen's reagent", ta: "டோலன் வினைப்பொருள்" },
      { en: "Fehling's solution", ta: "ஃபெலிங் கரைசல்" },
      { en: "Benedict's solution", ta: "பெனடிக்ட் கரைசல்" },
      { en: "All of these", ta: "இவை அனைத்தும்" }
    ],
    correctAnswer: { en: "All of these", ta: "இவை அனைத்தும்" },
    explanation: {
      en: "Several reagents can distinguish aldehydes from ketones. Tollen's reagent gives a silver mirror test with aldehydes.",
      ta: "பல வினைப்பொருட்கள் ஆல்டிஹைடுகளை கீட்டோன்களிலிருந்து வேறுபடுத்த முடியும்."
    },
    subject: 'Chemistry',
    difficulty: 'Medium',
    topic: 'Aldehydes and Ketones'
  },
  {
    _id: '8',
    question: {
      en: "What is the powerhouse of the cell?",
      ta: "செல்லின் ஆற்றல் மையம் என்ன?"
    },
    options: [
      { en: "Nucleus", ta: "கரு" },
      { en: "Mitochondria", ta: "மைட்டோகாண்ட்ரியா" },
      { en: "Ribosome", ta: "ரைபோசோம்" },
      { en: "Golgi body", ta: "கோல்கி உடல்" }
    ],
    correctAnswer: { en: "Mitochondria", ta: "மைட்டோகாண்ட்ரியா" },
    explanation: {
      en: "Mitochondria are called the powerhouse of the cell because they produce ATP through cellular respiration.",
      ta: "மைட்டோகாண்ட்ரியா செல்லின் ஆற்றல் மையம் என்று அழைக்கப்படுகிறது."
    },
    subject: 'Biology',
    difficulty: 'Easy',
    topic: 'Cell Biology'
  },
  {
    _id: '9',
    question: {
      en: "Newton's second law of motion is given by",
      ta: "நியூட்டனின் இரண்டாவது இயக்க விதி"
    },
    options: [
      { en: "F = ma", ta: "F = ma" },
      { en: "F = m/a", ta: "F = m/a" },
      { en: "F = a/m", ta: "F = a/m" },
      { en: "F = m + a", ta: "F = m + a" }
    ],
    correctAnswer: { en: "F = ma", ta: "F = ma" },
    explanation: {
      en: "Newton's second law states that force equals mass times acceleration (F = ma).",
      ta: "நியூட்டனின் இரண்டாவது விதி விசை என்பது நிறை மற்றும் முடுக்கத்தின் பெருக்கல் என்கிறது."
    },
    subject: 'Physics',
    difficulty: 'Easy',
    topic: 'Laws of Motion'
  },
  {
    _id: '10',
    question: {
      en: "The pH of a neutral solution is",
      ta: "நடுநிலை கரைசலின் pH"
    },
    options: [
      { en: "0", ta: "0" },
      { en: "7", ta: "7" },
      { en: "14", ta: "14" },
      { en: "1", ta: "1" }
    ],
    correctAnswer: { en: "7", ta: "7" },
    explanation: {
      en: "A neutral solution has a pH of 7. Solutions with pH < 7 are acidic, and pH > 7 are basic.",
      ta: "நடுநிலை கரைசல் pH 7 ஐக் கொண்டுள்ளது."
    },
    subject: 'Chemistry',
    difficulty: 'Easy',
    topic: 'Acids and Bases'
  },
  {
    _id: '11',
    question: {
      en: "Permanent tissues are made up of cells that have lost the ability to",
      ta: "நிரந்தர திசுக்கள் என்பது திறனை இழந்த செல்களால் ஆனவை"
    },
    options: [
      { en: "divide", ta: "பிரிதல்" },
      { en: "grow", ta: "வளர்தல்" },
      { en: "reproduce", ta: "இனப்பெருக்கம்" },
      { en: "differentiate", ta: "வேறுபடுத்துதல்" }
    ],
    correctAnswer: { en: "divide", ta: "பிரிதல்" },
    explanation: {
      en: "Permanent tissues are made up of mature cells that have lost their ability to divide.",
      ta: "நிரந்தர திசுக்கள் முதிர்ந்த செல்களால் ஆனவை, அவை பிரியும் திறனை இழந்துள்ளன."
    },
    subject: 'Biology',
    difficulty: 'Easy',
    topic: 'The Tissues'
  },
  {
    _id: '12',
    question: {
      en: "The speed of light in vacuum is approximately",
      ta: "வெற்றிடத்தில் ஒளியின் வேகம் தோராயமாக"
    },
    options: [
      { en: "3 × 10⁸ m/s", ta: "3 × 10⁸ m/s" },
      { en: "3 × 10⁶ m/s", ta: "3 × 10⁶ m/s" },
      { en: "3 × 10⁵ m/s", ta: "3 × 10⁵ m/s" },
      { en: "3 × 10⁴ m/s", ta: "3 × 10⁴ m/s" }
    ],
    correctAnswer: { en: "3 × 10⁸ m/s", ta: "3 × 10⁸ m/s" },
    explanation: {
      en: "The speed of light in vacuum is approximately 3 × 10⁸ meters per second.",
      ta: "வெற்றிடத்தில் ஒளியின் வேகம் தோராயமாக 3 × 10⁸ மீட்டர் வினாடிக்கு."
    },
    subject: 'Physics',
    difficulty: 'Easy',
    topic: 'Light'
  },
  {
    _id: '13',
    question: {
      en: "The atomic number of an element represents the number of",
      ta: "ஒரு தனிமத்தின் அணு எண் எதன் எண்ணிக்கையைக் குறிக்கிறது"
    },
    options: [
      { en: "protons", ta: "புரோட்டான்கள்" },
      { en: "neutrons", ta: "நியூட்ரான்கள்" },
      { en: "electrons", ta: "எலக்ட்ரான்கள்" },
      { en: "nucleons", ta: "நியூக்ளியான்கள்" }
    ],
    correctAnswer: { en: "protons", ta: "புரோட்டான்கள்" },
    explanation: {
      en: "The atomic number is defined as the number of protons in the nucleus of an atom.",
      ta: "அணு எண் என்பது அணுவின் கருவில் உள்ள புரோட்டான்களின் எண்ணிக்கை என வரையறுக்கப்படுகிறது."
    },
    subject: 'Chemistry',
    difficulty: 'Easy',
    topic: 'Atomic Structure'
  },
  {
    _id: '14',
    question: {
      en: "Chlorophyll containing parenchyma is called",
      ta: "குளோரோபில் கொண்ட பாரன்கிமா எனப்படுவது"
    },
    options: [
      { en: "Chlorenchyma", ta: "குளோரெஞ்சிமா" },
      { en: "Collenchyma", ta: "கொல்லெஞ்சைமா" },
      { en: "Aerenchyma", ta: "ஏரெஞ்சிமா" },
      { en: "Sclerenchyma", ta: "ஸ்க்லரெஞ்சிமா" }
    ],
    correctAnswer: { en: "Chlorenchyma", ta: "குளோரெஞ்சிமா" },
    explanation: {
      en: "Chloroplast containing parenchyma (chlorenchyma) is mostly present in leaves and gives them green color.",
      ta: "குளோரோபிளாஸ்ட் கொண்ட பாரன்கிமா (குளோரென்கிமா) பெரும்பாலும் இலைகளில் உள்ளது."
    },
    subject: 'Biology',
    difficulty: 'Medium',
    topic: 'The Tissues'
  },
  {
    _id: '15',
    question: {
      en: "Ohm's law states that V = IR, where V is",
      ta: "ஓமின் விதி V = IR என்கிறது, இதில் V என்பது"
    },
    options: [
      { en: "Voltage", ta: "மின்னழுத்தம்" },
      { en: "Volume", ta: "கன அளவு" },
      { en: "Velocity", ta: "வேகம்" },
      { en: "Viscosity", ta: "பாகுத்தன்மை" }
    ],
    correctAnswer: { en: "Voltage", ta: "மின்னழுத்தம்" },
    explanation: {
      en: "In Ohm's law V = IR, V represents voltage, I represents current, and R represents resistance.",
      ta: "ஓமின் விதியில் V = IR, V என்பது மின்னழுத்தம், I என்பது மின்னோட்டம், மற்றும் R என்பது எதிர்ப்பு."
    },
    subject: 'Physics',
    difficulty: 'Easy',
    topic: 'Current Electricity'
  }
];

// Mock past challenges data
const mockPastChallenges = [
  { date: '2025-01-13', score: 13, total: 15, percentage: 87, timeTaken: 12, coins: 70 },
  { date: '2025-01-12', score: 15, total: 15, percentage: 100, timeTaken: 11, coins: 80 },
  { date: '2025-01-11', score: 11, total: 15, percentage: 73, timeTaken: 14, coins: 50 },
  { date: '2025-01-10', score: 14, total: 15, percentage: 93, timeTaken: 10, coins: 70 },
  { date: '2025-01-09', score: 12, total: 15, percentage: 80, timeTaken: 13, coins: 60 },
  { date: '2025-01-08', score: 15, total: 15, percentage: 100, timeTaken: 9, coins: 90 },
  { date: '2025-01-07', score: 10, total: 15, percentage: 67, timeTaken: 15, coins: 50 }
];

// Mock weekly performance data
const mockWeeklyPerformance = [
  { day: 'Mon', score: 67, Physics: 60, Chemistry: 70, Biology: 70 },
  { day: 'Tue', score: 73, Physics: 80, Chemistry: 70, Biology: 70 },
  { day: 'Wed', score: 80, Physics: 80, Chemistry: 80, Biology: 80 },
  { day: 'Thu', score: 93, Physics: 100, Chemistry: 90, Biology: 90 },
  { day: 'Fri', score: 73, Physics: 60, Chemistry: 80, Biology: 80 },
  { day: 'Sat', score: 100, Physics: 100, Chemistry: 100, Biology: 100 },
  { day: 'Sun', score: 87, Physics: 80, Chemistry: 90, Biology: 90 }
];

interface DailyChallengeProps {
  onStartChallenge?: () => void;
}

const DailyChallengeNew: React.FC<DailyChallengeProps> = ({ onStartChallenge }) => {
  const { language } = useLanguage();
  const [currentStreak, setCurrentStreak] = useState(7);
  const [longestStreak, setLongestStreak] = useState(15);
  const [totalCoins, setTotalCoins] = useState(890);
  const [todayCompleted, setTodayCompleted] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  // Today's challenge stats
  const todayChallenge = {
    totalQuestions: 15,
    physics: 5,
    chemistry: 5,
    biology: 5,
    duration: 15,
    reward: 50,
    bonusReward: 20
  };

  // Get subject distribution emoji
  const getSubjectEmoji = (subject: string) => {
    switch (subject.toLowerCase()) {
      case 'physics': return '⚡';
      case 'chemistry': return '🧪';
      case 'biology': return '🧬';
      default: return '📚';
    }
  };

  // Get performance color
  const getPerformanceColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600 dark:text-green-400';
    if (percentage >= 75) return 'text-blue-600 dark:text-blue-400';
    if (percentage >= 60) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getPerformanceBgColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-green-100 dark:bg-green-900/30';
    if (percentage >= 75) return 'bg-blue-100 dark:bg-blue-900/30';
    if (percentage >= 60) return 'bg-yellow-100 dark:bg-yellow-900/30';
    return 'bg-red-100 dark:bg-red-900/30';
  };

  // Custom tooltip for chart
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700">
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">{label}</p>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <span className="text-sm">Overall: <strong>{payload[0].value}%</strong></span>
            </div>
            {payload[1] && (
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-sm">⚡ Physics: <strong>{payload[1].value}%</strong></span>
              </div>
            )}
            {payload[2] && (
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                <span className="text-sm">🧪 Chemistry: <strong>{payload[2].value}%</strong></span>
              </div>
            )}
            {payload[3] && (
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm">🧬 Biology: <strong>{payload[3].value}%</strong></span>
              </div>
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
            {language === 'ta' ? 'தினசரி சவால்' : 'Daily Challenge'}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {language === 'ta'
              ? 'தினமும் 15 கேள்விகளை பயிற்சி செய்து உங்கள் திறமைகளை மேம்படுத்துங்கள்'
              : 'Complete 15 questions daily to improve your skills and earn rewards!'}
          </p>
        </div>
        {!todayCompleted && (
          <button
            onClick={onStartChallenge}
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 whitespace-nowrap flex items-center gap-2"
          >
            <ZapIcon className="w-5 h-5" />
            {language === 'ta' ? 'சவாலைத் தொடங்கு' : 'Start Challenge'}
          </button>
        )}
      </div>

      {/* Quick Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 p-6 rounded-2xl text-white shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-3xl">🔥</span>
            <TrendingUpIcon className="w-6 h-6 opacity-75" />
          </div>
          <p className="text-3xl font-bold mb-1">{currentStreak}</p>
          <p className="text-sm opacity-90">
            {language === 'ta' ? 'நாள் தொடர்ச்சி' : 'Day Streak'}
          </p>
        </div>

        <div className="bg-gradient-to-br from-pink-500 via-pink-600 to-rose-600 p-6 rounded-2xl text-white shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-3xl">🏆</span>
            <TargetIcon className="w-6 h-6 opacity-75" />
          </div>
          <p className="text-3xl font-bold mb-1">{longestStreak}</p>
          <p className="text-sm opacity-90">
            {language === 'ta' ? 'சிறந்த தொடர்ச்சி' : 'Best Streak'}
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 p-6 rounded-2xl text-white shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-3xl">🪙</span>
            <ZapIcon className="w-6 h-6 opacity-75" />
          </div>
          <p className="text-3xl font-bold mb-1">{totalCoins}</p>
          <p className="text-sm opacity-90">
            {language === 'ta' ? 'மொத்த நாணயங்கள்' : 'Total Coins'}
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600 p-6 rounded-2xl text-white shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-3xl">📅</span>
            <TargetIcon className="w-6 h-6 opacity-75" />
          </div>
          <p className="text-3xl font-bold mb-1">{todayCompleted ? '15' : '0'}</p>
          <p className="text-sm opacity-90">
            {language === 'ta' ? 'இன்று பூர்த்தி' : 'Completed Today'}
          </p>
        </div>
      </div>

      {/* Today's Challenge Card */}
      <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-sm overflow-hidden border border-slate-200 dark:border-slate-800">
        <div className="p-6">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-1 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                {language === 'ta' ? 'இன்றைய சவால்' : 'Today\'s Challenge'}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {language === 'ta'
                  ? 'சனிக்கிழமை, ஜனவரி 14, 2025'
                  : 'Saturday, January 14, 2025'}
              </p>
            </div>
            {todayCompleted && (
              <div className="bg-green-500 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {language === 'ta' ? 'முடிந்தது!' : 'Completed!'}
              </div>
            )}
          </div>
            {/* Subject Mix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="relative overflow-hidden bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-5 rounded-2xl border-2 border-red-200 dark:border-red-800">
                <div className="relative z-10">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-1">{todayChallenge.physics}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                    {language === 'ta' ? 'இயற்பியல்' : 'Physics'}
                  </div>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-10 dark:opacity-20">
                  <PhysicsIcon className="w-28 h-28 text-red-600 dark:text-red-400" />
                </div>
              </div>

              <div className="relative overflow-hidden bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-5 rounded-2xl border-2 border-cyan-200 dark:border-cyan-800">
                <div className="relative z-10">
                  <div className="text-3xl mb-2">🧪</div>
                  <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">{todayChallenge.chemistry}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                    {language === 'ta' ? 'வேதியியல்' : 'Chemistry'}
                  </div>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-10 dark:opacity-20">
                  <ChemistryIcon className="w-28 h-28 text-cyan-600 dark:text-cyan-400" />
                </div>
              </div>

              <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-5 rounded-2xl border-2 border-green-200 dark:border-green-800">
                <div className="relative z-10">
                  <div className="text-3xl mb-2">🧬</div>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">{todayChallenge.biology}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                    {language === 'ta' ? 'உயிரியல்' : 'Biology'}
                  </div>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-10 dark:opacity-20">
                  <BiologyIcon className="w-28 h-28 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{todayChallenge.totalQuestions}</div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  {language === 'ta' ? 'கேள்விகள்' : 'Questions'}
                </div>
              </div>
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{todayChallenge.duration}</div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  {language === 'ta' ? 'நிமிடங்கள்' : 'Minutes'}
                </div>
              </div>
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{todayChallenge.reward} 🪙</div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  {language === 'ta' ? 'நாணயங்கள்' : 'Base Coins'}
                </div>
              </div>
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">+{todayChallenge.bonusReward} 🪙</div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  {language === 'ta' ? 'போனஸ்' : 'Bonus'}
                </div>
              </div>
            </div>
        </div>
      </div>

      {/* Weekly Performance Chart */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <TrendingUpIcon className="w-7 h-7 text-purple-600" />
            {language === 'ta' ? 'வார செயல்திறன்' : 'Weekly Performance'}
          </h3>
          <div className="text-xs text-slate-600 dark:text-slate-400">
            {language === 'ta' ? 'கடந்த 7 நாட்கள்' : 'Last 7 Days'}
          </div>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={mockWeeklyPerformance}>
            <defs>
              <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a855f7" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.3} />
            <XAxis dataKey="day" stroke="#64748b" />
            <YAxis domain={[0, 100]} stroke="#64748b" />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="score"
              stroke="#a855f7"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorScore)"
            />
          </AreaChart>
        </ResponsiveContainer>

        {/* Average Performance */}
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-xl text-center border border-purple-200 dark:border-purple-800">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">82%</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                {language === 'ta' ? 'சராசரி' : 'Average'}
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-4 rounded-xl text-center border border-red-200 dark:border-red-800">
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">80%</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                ⚡ {language === 'ta' ? 'இயற்பியல்' : 'Physics'}
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-4 rounded-xl text-center border border-cyan-200 dark:border-cyan-800">
              <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">84%</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                🧪 {language === 'ta' ? 'வேதியியல்' : 'Chemistry'}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-xl text-center border border-green-200 dark:border-green-800">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">83%</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                🧬 {language === 'ta' ? 'உயிரியல்' : 'Biology'}
              </div>
            </div>
        </div>
      </div>

      {/* Challenge History */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <svg className="w-7 h-7 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              {language === 'ta' ? 'சவால் வரலாறு' : 'Challenge History'}
            </h3>
            <button
              onClick={() => setShowHistory(!showHistory)}
              className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold flex items-center gap-2"
            >
              {showHistory ? (language === 'ta' ? 'மறை' : 'Hide') : (language === 'ta' ? 'அனைத்தையும் காட்டு' : 'Show All')}
              <svg className={`w-5 h-5 transform transition-transform ${showHistory ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Recent Challenges Preview */}
          <div className="space-y-3">
            {mockPastChallenges.slice(0, showHistory ? undefined : 3).map((challenge, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-slate-50 to-purple-50 dark:from-slate-700/50 dark:to-purple-900/20 p-5 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300"
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                        {new Date(challenge.date).toLocaleDateString(language === 'ta' ? 'ta-IN' : 'en-US', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                      <div className={`text-3xl font-bold ${getPerformanceColor(challenge.percentage)}`}>
                        {challenge.score}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">/ {challenge.total}</div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`px-3 py-1 rounded-full text-xs font-bold ${getPerformanceBgColor(challenge.percentage)} ${getPerformanceColor(challenge.percentage)}`}>
                          {challenge.percentage}%
                        </div>
                        {challenge.percentage === 100 && (
                          <span className="text-xl" title="Perfect Score!">⭐</span>
                        )}
                        {challenge.timeTaken <= 10 && (
                          <span className="text-xl" title="Speed Bonus!">⚡</span>
                        )}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        {language === 'ta' ? 'எடுத்த நேரம்' : 'Time taken'}: <strong>{challenge.timeTaken} {language === 'ta' ? 'நிமிடங்கள்' : 'min'}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-center bg-yellow-100 dark:bg-yellow-900/30 px-4 py-2 rounded-xl">
                      <div className="text-xl font-bold text-yellow-600 dark:text-yellow-400">
                        +{challenge.coins} 🪙
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                        {language === 'ta' ? 'சம்பாதித்தது' : 'Earned'}
                      </div>
                    </div>

                    <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold text-sm hover:bg-purple-700 transition-colors">
                      {language === 'ta' ? 'மதிப்பாய்வு' : 'Review'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 rounded-2xl shadow-lg p-6 mt-8 border-2 border-yellow-200 dark:border-yellow-800">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
            <svg className="w-7 h-7 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {language === 'ta' ? 'சாதனைகள்' : 'Achievements'}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl text-center shadow-md transform hover:scale-105 transition-all duration-300 border-2 border-yellow-300 dark:border-yellow-700">
              <div className="text-4xl mb-2">🔥</div>
              <div className="font-bold text-sm text-slate-800 dark:text-slate-100 mb-1">7-Day Warrior</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                {language === 'ta' ? '7 நாள் தொடர்' : '7 day streak'}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl text-center shadow-md opacity-60">
              <div className="text-4xl mb-2 grayscale">⭐</div>
              <div className="font-bold text-sm text-slate-800 dark:text-slate-100 mb-1">Perfect Week</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                {language === 'ta' ? 'பூட்டப்பட்டது' : 'Locked'}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl text-center shadow-md transform hover:scale-105 transition-all duration-300 border-2 border-blue-300 dark:border-blue-700">
              <div className="text-4xl mb-2">⚡</div>
              <div className="font-bold text-sm text-slate-800 dark:text-slate-100 mb-1">Speed Master</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                {language === 'ta' ? '10 நிமிடத்திற்கு குறைவாக' : 'Under 10 min'}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl text-center shadow-md opacity-60">
              <div className="text-4xl mb-2 grayscale">🏆</div>
              <div className="font-bold text-sm text-slate-800 dark:text-slate-100 mb-1">Subject Champion</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                {language === 'ta' ? 'பூட்டப்பட்டது' : 'Locked'}
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default DailyChallengeNew;
