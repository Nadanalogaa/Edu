// 9th standard starter content for the shared bank: chapters for Maths and
// Science on both boards, and sample questions for the first chapters.
// Chapter lists follow the Samacheer Kalvi (Tamil Nadu State Board) and the
// rationalised NCERT (CBSE) textbooks; check them against the current edition.

type Board = 'state_board' | 'cbse';

export interface ChapterSeed {
  board: Board;
  subject: string; // subject code, e.g. maths, science, social_science, english, tamil
  chapters: Array<[string, string]>; // [English, Tamil] in textbook order
}

export const CHAPTERS_9: ChapterSeed[] = [
  {
    board: 'state_board',
    subject: 'maths',
    chapters: [
      ['Set Language', 'கணக்கு மொழி'],
      ['Real Number System', 'மெய்யெண் தொகுப்பு'],
      ['Algebra', 'இயற்கணிதம்'],
      ['Geometry', 'வடிவியல்'],
      ['Coordinate Geometry', 'ஆயத்தொலை வடிவியல்'],
      ['Trigonometry', 'முக்கோணவியல்'],
      ['Mensuration', 'அளவியல்'],
      ['Statistics', 'புள்ளியியல்'],
      ['Probability', 'நிகழ்தகவு'],
    ],
  },
  {
    board: 'state_board',
    subject: 'science',
    chapters: [
      ['Measurement', 'அளவீட்டியல்'],
      ['Motion', 'இயக்கம்'],
      ['Fluids', 'பாய்மங்கள்'],
      ['Electric Charge and Electric Current', 'மின்னூட்டமும் மின்னோட்டமும்'],
      ['Magnetism and Electromagnetism', 'காந்தவியல் மற்றும் மின்காந்தவியல்'],
      ['Light', 'ஒளி'],
      ['Heat', 'வெப்பம்'],
      ['Sound', 'ஒலி'],
      ['Universe', 'அண்டம்'],
      ['Matter Around Us', 'நம்மைச் சுற்றியுள்ள பருப்பொருள்கள்'],
      ['Atomic Structure', 'அணு அமைப்பு'],
      ['Periodic Classification of Elements', 'தனிமங்களின் வகைப்பாட்டு அட்டவணை'],
      ['Chemical Bonding', 'வேதிப் பிணைப்பு'],
      ['Acids, Bases and Salts', 'அமிலங்கள், காரங்கள் மற்றும் உப்புகள்'],
      ['Carbon and its Compounds', 'கார்பனும் அதன் சேர்மங்களும்'],
      ['Applied Chemistry', 'பயன்பாட்டு வேதியியல்'],
      ['Animal Kingdom', 'விலங்குலகம்'],
      ['Organisation of Tissues', 'திசுக்களின் அமைப்பு'],
      ['Plant Physiology', 'தாவர செயலியல்'],
      ['Organ Systems in Animals', 'விலங்குகளின் உறுப்பு மண்டலங்கள்'],
      ['Nutrition and Health', 'ஊட்டச்சத்தும் ஆரோக்கியமும்'],
      ['World of Microbes', 'நுண்ணுயிரிகளின் உலகம்'],
      ['Economic Biology', 'பொருளாதார உயிரியல்'],
      ['Environmental Science', 'சுற்றுச்சூழல் அறிவியல்'],
      ['Visual Communication', 'காட்சித் தொடர்பு'],
    ],
  },
  {
    board: 'cbse',
    subject: 'maths',
    chapters: [
      ['Number Systems', ''],
      ['Polynomials', ''],
      ['Coordinate Geometry', ''],
      ['Linear Equations in Two Variables', ''],
      ["Introduction to Euclid's Geometry", ''],
      ['Lines and Angles', ''],
      ['Triangles', ''],
      ['Quadrilaterals', ''],
      ['Circles', ''],
      ["Heron's Formula", ''],
      ['Surface Areas and Volumes', ''],
      ['Statistics', ''],
    ],
  },
  {
    board: 'cbse',
    subject: 'science',
    chapters: [
      ['Matter in Our Surroundings', ''],
      ['Is Matter Around Us Pure?', ''],
      ['Atoms and Molecules', ''],
      ['Structure of the Atom', ''],
      ['The Fundamental Unit of Life', ''],
      ['Tissues', ''],
      ['Motion', ''],
      ['Force and Laws of Motion', ''],
      ['Gravitation', ''],
      ['Work and Energy', ''],
      ['Sound', ''],
      ['Improvement in Food Resources', ''],
    ],
  },
];

export interface QuestionSeed {
  q: [string, string]; // [English, Tamil]
  options: [string, string, string, string];
  optionsTa?: [string, string, string, string];
  answer: number; // 0-3
  explanation: [string, string];
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface ChapterQuestions {
  board: Board;
  subject: string;
  chapter: number;
  questions: QuestionSeed[];
}

export const QUESTIONS_9: ChapterQuestions[] = [
  {
    board: 'state_board',
    subject: 'maths',
    chapter: 1,
    questions: [
      { q: ['If A = {1, 2, 3}, then n(A) is', 'A = {1, 2, 3} எனில், n(A) என்பது'], options: ['1', '2', '3', '4'], answer: 2, explanation: ['n(A) is the number of elements in A, which is 3.', 'n(A) என்பது A-இல் உள்ள உறுப்புகளின் எண்ணிக்கை = 3.'], difficulty: 'easy' },
      { q: ['Which of the following is the empty set?', 'பின்வருவனவற்றுள் எது வெற்றுக் கணம்?'], options: ['{0}', '{x : x is a natural number less than 1}', '{∅}', '{1}'], optionsTa: ['{0}', '{x : x என்பது 1-ஐ விடச் சிறிய இயல் எண்}', '{∅}', '{1}'], answer: 1, explanation: ['There is no natural number less than 1, so the set has no elements.', '1-ஐ விடச் சிறிய இயல் எண் இல்லை; எனவே அக்கணத்தில் உறுப்புகள் இல்லை.'] },
      { q: ['The number of subsets of a set with 3 elements is', '3 உறுப்புகள் கொண்ட ஒரு கணத்தின் உட்கணங்களின் எண்ணிக்கை'], options: ['3', '6', '8', '9'], answer: 2, explanation: ['A set with n elements has 2ⁿ subsets: 2³ = 8.', 'n உறுப்புகள் கொண்ட கணத்திற்கு 2ⁿ உட்கணங்கள்: 2³ = 8.'] },
      { q: ['If A ⊆ B, then A ∪ B is', 'A ⊆ B எனில், A ∪ B என்பது'], options: ['A', 'B', '∅', 'A ∩ B'], answer: 1, explanation: ['Every element of A is already in B, so the union is B.', 'A-இன் எல்லா உறுப்புகளும் B-இல் உள்ளன; எனவே சேர்ப்பு B ஆகும்.'], difficulty: 'medium' },
      { q: ['If n(A) = 10, n(B) = 15 and n(A ∩ B) = 5, then n(A ∪ B) is', 'n(A) = 10, n(B) = 15, n(A ∩ B) = 5 எனில், n(A ∪ B) ='], options: ['15', '20', '25', '30'], answer: 1, explanation: ['n(A ∪ B) = n(A) + n(B) − n(A ∩ B) = 10 + 15 − 5 = 20.', 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B) = 10 + 15 − 5 = 20.'], difficulty: 'medium' },
    ],
  },
  {
    board: 'state_board',
    subject: 'maths',
    chapter: 2,
    questions: [
      { q: ['Which of these is an irrational number?', 'பின்வருவனவற்றுள் எது விகிதமுறா எண்?'], options: ['√16', '0.25', '√2', '3/4'], answer: 2, explanation: ['√2 cannot be written as p/q; √16 = 4 is rational.', '√2-ஐ p/q வடிவில் எழுத முடியாது; √16 = 4 விகிதமுறு எண்.'], difficulty: 'easy' },
      { q: ['The decimal form of 1/3 is', '1/3-இன் தசம வடிவம்'], options: ['0.3', '0.33', '0.333… (recurring)', '3.3'], optionsTa: ['0.3', '0.33', '0.333… (சுழல் தசமம்)', '3.3'], answer: 2, explanation: ['1 ÷ 3 = 0.333…, the 3 repeats for ever.', '1 ÷ 3 = 0.333…; 3 முடிவில்லாமல் மீண்டும் வரும்.'] },
      { q: ['√8 in simplest form is', '√8-இன் எளிய வடிவம்'], options: ['2√2', '4√2', '2√4', '8'], answer: 0, explanation: ['√8 = √(4 × 2) = 2√2.', '√8 = √(4 × 2) = 2√2.'], difficulty: 'medium' },
      { q: ['Between any two rational numbers there are', 'ஏதேனும் இரண்டு விகிதமுறு எண்களுக்கு இடையே'], options: ['no rational numbers', 'exactly one rational number', 'exactly two rational numbers', 'infinitely many rational numbers'], optionsTa: ['விகிதமுறு எண்கள் இல்லை', 'சரியாக ஒரு விகிதமுறு எண்', 'சரியாக இரண்டு விகிதமுறு எண்கள்', 'எண்ணற்ற விகிதமுறு எண்கள்'], answer: 3, explanation: ['Their average is between them, and this can be repeated without end.', 'அவற்றின் சராசரி இடையில் இருக்கும்; இதை முடிவில்லாமல் தொடரலாம்.'] },
      { q: ['0.444… (4 recurring) written as p/q is', '0.444… (4 சுழல்) ஐ p/q வடிவில் எழுதினால்'], options: ['4/10', '4/9', '2/5', '4/99'], answer: 1, explanation: ['Let x = 0.444…; 10x − x = 4, so x = 4/9.', 'x = 0.444… என்க; 10x − x = 4, எனவே x = 4/9.'], difficulty: 'hard' },
    ],
  },
  {
    board: 'state_board',
    subject: 'maths',
    chapter: 3,
    questions: [
      { q: ['The degree of the polynomial 4x³ − 2x + 7 is', '4x³ − 2x + 7 என்ற பல்லுறுப்புக் கோவையின் படி'], options: ['1', '2', '3', '4'], answer: 2, explanation: ['The highest power of x is 3.', 'x-இன் மிக உயர்ந்த அடுக்கு 3.'], difficulty: 'easy' },
      { q: ['If p(x) = x² − 5x + 6, then p(2) is', 'p(x) = x² − 5x + 6 எனில், p(2) ='], options: ['0', '2', '4', '12'], answer: 0, explanation: ['p(2) = 4 − 10 + 6 = 0.', 'p(2) = 4 − 10 + 6 = 0.'] },
      { q: ['(a + b)² is equal to', '(a + b)² என்பது'], options: ['a² + b²', 'a² + 2ab + b²', 'a² − 2ab + b²', '2a + 2b'], answer: 1, explanation: ['(a + b)² = (a + b)(a + b) = a² + 2ab + b².', '(a + b)² = (a + b)(a + b) = a² + 2ab + b².'], difficulty: 'easy' },
      { q: ['The zero of the polynomial 2x − 6 is', '2x − 6 என்ற பல்லுறுப்புக் கோவையின் பூச்சியம்'], options: ['2', '3', '−3', '6'], answer: 1, explanation: ['2x − 6 = 0 gives x = 3.', '2x − 6 = 0 எனில் x = 3.'] },
      { q: ['The coefficient of x² in 3x³ − 5x² + x − 1 is', '3x³ − 5x² + x − 1-இல் x²-இன் கெழு'], options: ['3', '−5', '1', '−1'], answer: 1, explanation: ['The term with x² is −5x², so the coefficient is −5.', 'x² உள்ள உறுப்பு −5x²; எனவே கெழு −5.'], difficulty: 'medium' },
    ],
  },
  {
    board: 'state_board',
    subject: 'science',
    chapter: 1,
    questions: [
      { q: ['The SI unit of length is', 'நீளத்தின் SI அலகு'], options: ['centimetre', 'metre', 'kilometre', 'inch'], optionsTa: ['சென்டிமீட்டர்', 'மீட்டர்', 'கிலோமீட்டர்', 'அங்குலம்'], answer: 1, explanation: ['The metre is the SI unit of length.', 'நீளத்தின் SI அலகு மீட்டர்.'], difficulty: 'easy' },
      { q: ['The SI unit of temperature is', 'வெப்பநிலையின் SI அலகு'], options: ['degree Celsius', 'degree Fahrenheit', 'kelvin', 'joule'], optionsTa: ['டிகிரி செல்சியஸ்', 'டிகிரி ஃபாரன்ஹீட்', 'கெல்வின்', 'ஜூல்'], answer: 2, explanation: ['Kelvin is the SI unit of temperature.', 'வெப்பநிலையின் SI அலகு கெல்வின்.'] },
      { q: ['A light year is a unit of', 'ஒளி ஆண்டு என்பது எதன் அலகு?'], options: ['time', 'distance', 'speed', 'mass'], optionsTa: ['நேரம்', 'தொலைவு', 'வேகம்', 'நிறை'], answer: 1, explanation: ['It is the distance light travels in one year.', 'ஒளி ஓர் ஆண்டில் செல்லும் தொலைவு.'] },
      { q: ['Which instrument measures the diameter of a thin wire accurately?', 'மெல்லிய கம்பியின் விட்டத்தைத் துல்லியமாக அளக்கும் கருவி எது?'], options: ['metre scale', 'measuring tape', 'screw gauge', 'beam balance'], optionsTa: ['மீட்டர் அளவுகோல்', 'அளவு நாடா', 'திருகு அளவி', 'தராசு'], answer: 2, explanation: ['A screw gauge measures to 0.01 mm.', 'திருகு அளவி 0.01 மி.மீ வரை அளக்கும்.'], difficulty: 'medium' },
      { q: ['The SI unit of mass is', 'நிறையின் SI அலகு'], options: ['gram', 'kilogram', 'newton', 'pound'], optionsTa: ['கிராம்', 'கிலோகிராம்', 'நியூட்டன்', 'பவுண்டு'], answer: 1, explanation: ['The kilogram is the SI unit of mass; the newton is a unit of force.', 'நிறையின் SI அலகு கிலோகிராம்; நியூட்டன் விசையின் அலகு.'], difficulty: 'easy' },
    ],
  },
  {
    board: 'state_board',
    subject: 'science',
    chapter: 2,
    questions: [
      { q: ['The SI unit of velocity is', 'திசைவேகத்தின் SI அலகு'], options: ['m/s', 'm/s²', 'km/h', 'm'], answer: 0, explanation: ['Velocity = displacement ÷ time, so m/s.', 'திசைவேகம் = இடப்பெயர்ச்சி ÷ நேரம்; எனவே m/s.'], difficulty: 'easy' },
      { q: ['A body moving with uniform velocity has an acceleration of', 'சீரான திசைவேகத்தில் இயங்கும் பொருளின் முடுக்கம்'], options: ['zero', 'a constant positive value', 'an increasing value', 'a negative value'], optionsTa: ['சுழி', 'மாறாத நேர் மதிப்பு', 'அதிகரிக்கும் மதிப்பு', 'எதிர் மதிப்பு'], answer: 0, explanation: ['Velocity does not change, so acceleration is zero.', 'திசைவேகம் மாறுவதில்லை; எனவே முடுக்கம் சுழி.'] },
      { q: ['A car covers 100 m in 20 s. Its average speed is', 'ஒரு கார் 20 வினாடிகளில் 100 மீ செல்கிறது. அதன் சராசரி வேகம்'], options: ['2 m/s', '5 m/s', '20 m/s', '2000 m/s'], answer: 1, explanation: ['Speed = 100 ÷ 20 = 5 m/s.', 'வேகம் = 100 ÷ 20 = 5 m/s.'] },
      { q: ['The slope of a distance–time graph gives', 'தொலைவு–நேர வரைபடத்தின் சாய்வு தருவது'], options: ['acceleration', 'speed', 'displacement', 'force'], optionsTa: ['முடுக்கம்', 'வேகம்', 'இடப்பெயர்ச்சி', 'விசை'], answer: 1, explanation: ['Slope = distance ÷ time = speed.', 'சாய்வு = தொலைவு ÷ நேரம் = வேகம்.'], difficulty: 'medium' },
      { q: ['Velocity changes from 10 m/s to 30 m/s in 5 s. The acceleration is', 'திசைவேகம் 5 வினாடிகளில் 10 m/s-இலிருந்து 30 m/s ஆக மாறுகிறது. முடுக்கம்'], options: ['2 m/s²', '4 m/s²', '6 m/s²', '8 m/s²'], answer: 1, explanation: ['a = (30 − 10) ÷ 5 = 4 m/s².', 'a = (30 − 10) ÷ 5 = 4 m/s².'], difficulty: 'hard' },
    ],
  },
  {
    board: 'cbse',
    subject: 'maths',
    chapter: 1,
    questions: [
      { q: ['Which of the following is irrational?', ''], options: ['√9', '22/7', '√3', '0.5'], answer: 2, explanation: ['√3 cannot be written as p/q. √9 = 3, and 22/7 is a fraction.', ''], difficulty: 'easy' },
      { q: ['The decimal expansion of 1/7 is', ''], options: ['terminating', 'non-terminating recurring', 'non-terminating non-recurring', 'an integer'], answer: 1, explanation: ['1/7 = 0.142857142857…, the block 142857 repeats.', ''] },
      { q: ['(√5 + √3)(√5 − √3) equals', ''], options: ['2', '8', '√2', '15'], answer: 0, explanation: ['(a + b)(a − b) = a² − b² = 5 − 3 = 2.', ''], difficulty: 'medium' },
      { q: ['The value of 64^(1/2) is', ''], options: ['4', '8', '16', '32'], answer: 1, explanation: ['64^(1/2) = √64 = 8.', ''], difficulty: 'easy' },
      { q: ['Every rational number is', ''], options: ['a natural number', 'an integer', 'a real number', 'a whole number'], answer: 2, explanation: ['Real numbers include all rational and irrational numbers.', ''] },
    ],
  },
  {
    board: 'cbse',
    subject: 'maths',
    chapter: 2,
    questions: [
      { q: ['The degree of the polynomial 5x³ + 4x² + 7x is', ''], options: ['1', '2', '3', '4'], answer: 2, explanation: ['The highest power of x is 3.', ''], difficulty: 'easy' },
      { q: ['The zero of p(x) = x − 4 is', ''], options: ['0', '−4', '4', '1'], answer: 2, explanation: ['x − 4 = 0 gives x = 4.', ''], difficulty: 'easy' },
      { q: ['If x + 1 is a factor of x² + kx + 1, then k is', ''], options: ['0', '1', '2', '−2'], answer: 2, explanation: ['p(−1) = 1 − k + 1 = 0, so k = 2.', ''], difficulty: 'hard' },
      { q: ['The remainder when x³ + 1 is divided by x + 1 is', ''], options: ['0', '1', '2', '−1'], answer: 0, explanation: ['By the remainder theorem, p(−1) = −1 + 1 = 0.', ''], difficulty: 'medium' },
      { q: ['(x + 2)(x + 3) equals', ''], options: ['x² + 5x + 6', 'x² + 6x + 5', 'x² + 5x + 5', 'x² + 6'], answer: 0, explanation: ['x² + 3x + 2x + 6 = x² + 5x + 6.', ''] },
    ],
  },
  {
    board: 'cbse',
    subject: 'science',
    chapter: 1,
    questions: [
      { q: ['The boiling point of water at normal atmospheric pressure is', ''], options: ['0 °C', '100 °C', '273 °C', '373 °C'], answer: 1, explanation: ['Water boils at 100 °C (373 K) at 1 atm.', ''], difficulty: 'easy' },
      { q: ['A solid changing directly into a gas is called', ''], options: ['evaporation', 'condensation', 'sublimation', 'fusion'], answer: 2, explanation: ['Sublimation skips the liquid state, e.g. camphor.', ''] },
      { q: ['25 °C on the kelvin scale is', ''], options: ['248 K', '273 K', '298 K', '325 K'], answer: 2, explanation: ['K = °C + 273 = 25 + 273 = 298 K.', ''], difficulty: 'medium' },
      { q: ['Evaporation causes', ''], options: ['heating', 'cooling', 'no change in temperature', 'melting'], answer: 1, explanation: ['The liquid loses the energy the escaping particles take with them, so it cools.', ''] },
      { q: ['Which state of matter has a definite volume but no definite shape?', ''], options: ['solid', 'liquid', 'gas', 'plasma'], answer: 1, explanation: ['A liquid takes the shape of its container but keeps its volume.', ''], difficulty: 'easy' },
    ],
  },
  {
    board: 'cbse',
    subject: 'science',
    chapter: 5,
    questions: [
      { q: ['Which organelle is known as the powerhouse of the cell?', ''], options: ['nucleus', 'ribosome', 'mitochondria', 'Golgi apparatus'], answer: 2, explanation: ['Mitochondria release energy as ATP.', ''], difficulty: 'easy' },
      { q: ['The cell was discovered by', ''], options: ['Robert Hooke', 'Robert Brown', 'Leeuwenhoek', 'Purkinje'], answer: 0, explanation: ['Robert Hooke saw cells in cork in 1665.', ''] },
      { q: ['Which of these is present in plant cells but not in animal cells?', ''], options: ['cell membrane', 'cell wall', 'mitochondria', 'nucleus'], answer: 1, explanation: ['Plant cells have a cellulose cell wall outside the membrane.', ''] },
      { q: ["Which organelle is called the 'suicide bag' of the cell?", ''], options: ['lysosome', 'ribosome', 'plastid', 'vacuole'], answer: 0, explanation: ['Lysosomes contain digestive enzymes that can break down the cell.', ''], difficulty: 'medium' },
      { q: ['Movement of water through a selectively permeable membrane is called', ''], options: ['diffusion', 'osmosis', 'endocytosis', 'transpiration'], answer: 1, explanation: ['Osmosis is the movement of water from a dilute to a concentrated solution through such a membrane.', ''], difficulty: 'medium' },
    ],
  },
];

const quote = (value: string) => `'${value.replace(/'/g, "''")}'`;
const json = (value: unknown) => `${quote(JSON.stringify(value))}::jsonb`;

/** SQL that adds 9th chapters (keeping any already there) and sample questions to the shared bank. */
export const buildContentSql = (chapterSeeds: ChapterSeed[], questionGroups: ChapterQuestions[]) => {
  const statements: string[] = [];
  for (const seed of chapterSeeds) {
    seed.chapters.forEach(([en, ta], i) => {
      statements.push(
        `INSERT INTO chapters (subject_id, number, name_en, name_ta)
         SELECT id, ${i + 1}, ${quote(en)}, ${quote(ta)} FROM subjects
         WHERE board = '${seed.board}' AND class_grade = 9 AND code = '${seed.subject}'
         ON CONFLICT (subject_id, number) DO NOTHING;`
      );
    });
  }
  for (const group of questionGroups) {
    for (const item of group.questions) {
      const [qEn, qTa] = item.q;
      const optionsTa = qTa ? item.optionsTa || item.options : ['', '', '', ''];
      statements.push(
        `INSERT INTO questions (board, class_grade, subject_id, chapter_id, subject, topic, chapter, difficulty,
                                question, options, correct_answer, explanation, marks, exam_type, is_active, school_id)
         SELECT s.board, 9, s.id, c.id, s.name_en, c.name_en, c.number, '${item.difficulty || 'medium'}',
                ${json({ en: qEn, ta: qTa })}, ${json({ en: item.options, ta: optionsTa })}, ${item.answer},
                ${json({ en: item.explanation[0], ta: item.explanation[1] })}, 1, 'Both', true, NULL
         FROM subjects s JOIN chapters c ON c.subject_id = s.id AND c.number = ${group.chapter}
         WHERE s.board = '${group.board}' AND s.class_grade = 9 AND s.code = '${group.subject}'
           AND NOT EXISTS (SELECT 1 FROM questions q WHERE q.chapter_id = c.id AND q.school_id IS NULL AND q.question->>'en' = ${quote(qEn)});`
      );
    }
  }
  return statements.join('\n');
};

export const class9ContentSql = () => buildContentSql(CHAPTERS_9, QUESTIONS_9);
