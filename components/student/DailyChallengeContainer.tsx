import React, { useState } from 'react';
import DailyChallengeNew from './DailyChallengeNew';
import ChallengeTakingInterface from './ChallengeTakingInterface';
import ChallengeResults from './ChallengeResults';

// Mock 15 questions for the daily challenge (5 Physics + 5 Chemistry + 5 Biology)
const dailyQuestions = [
  // Physics Questions
  {
    _id: '1',
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
    _id: '2',
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
    _id: '3',
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
    _id: '4',
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
    _id: '5',
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
  },
  // Chemistry Questions
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
    _id: '9',
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
    _id: '10',
    question: {
      en: "The valency of carbon is",
      ta: "கார்பனின் இணையான்மை"
    },
    options: [
      { en: "2", ta: "2" },
      { en: "3", ta: "3" },
      { en: "4", ta: "4" },
      { en: "5", ta: "5" }
    ],
    correctAnswer: { en: "4", ta: "4" },
    explanation: {
      en: "Carbon has a valency of 4 because it has 4 electrons in its outer shell and can form 4 bonds.",
      ta: "கார்பன் 4 இணையான்மை உள்ளது, ஏனெனில் அதன் வெளிப்புற ஷெல்லில் 4 எலக்ட்ரான்கள் உள்ளன."
    },
    subject: 'Chemistry',
    difficulty: 'Easy',
    topic: 'Chemical Bonding'
  },
  // Biology Questions
  {
    _id: '11',
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
      ta: "சைலேமின் லிக்னிஃபைட் செல் சுவர்களில் உள்ள குழிகள் எல்லைக்குட்பட்ட குழிகள் ஆகும்."
    },
    subject: 'Biology',
    difficulty: 'Medium',
    topic: 'The Tissues'
  },
  {
    _id: '12',
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
      en: "The corners of cells in the collenchyma are coated with cellulose and pectic compounds.",
      ta: "கோலென்கைமாவில் உள்ள செல்களின் மூலைகள் செல்லுலோஸ் மற்றும் பெக்டிக் சேர்மங்களால் பூசப்பட்டுள்ளன."
    },
    subject: 'Biology',
    difficulty: 'Easy',
    topic: 'The Tissues'
  },
  {
    _id: '13',
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
    _id: '14',
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
    _id: '15',
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
  }
];

type ViewMode = 'dashboard' | 'quiz' | 'results';

interface ChallengeResults {
  score: number;
  total: number;
  percentage: number;
  timeTaken: number;
  answers: Array<{
    questionId: string;
    selectedAnswer: string;
    correctAnswer: string;
    isCorrect: boolean;
    subject: string;
  }>;
  subjectScores: {
    Physics: { correct: number; total: number };
    Chemistry: { correct: number; total: number };
    Biology: { correct: number; total: number };
  };
}

const DailyChallengeContainer: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('dashboard');
  const [challengeResults, setChallengeResults] = useState<ChallengeResults | null>(null);

  const handleStartChallenge = () => {
    setViewMode('quiz');
  };

  const handleChallengeComplete = (results: ChallengeResults) => {
    setChallengeResults(results);
    setViewMode('results');
  };

  const handleExitQuiz = () => {
    setViewMode('dashboard');
  };

  const handleCloseResults = () => {
    setViewMode('dashboard');
  };

  const handleReviewAnswers = () => {
    // TODO: Implement answer review screen
    console.log('Review answers', challengeResults);
  };

  return (
    <>
      {viewMode === 'dashboard' && (
        <DailyChallengeNew onStartChallenge={handleStartChallenge} />
      )}

      {viewMode === 'quiz' && (
        <ChallengeTakingInterface
          questions={dailyQuestions}
          onComplete={handleChallengeComplete}
          onExit={handleExitQuiz}
        />
      )}

      {viewMode === 'results' && challengeResults && (
        <ChallengeResults
          results={challengeResults}
          onClose={handleCloseResults}
          onReview={handleReviewAnswers}
        />
      )}
    </>
  );
};

export default DailyChallengeContainer;
