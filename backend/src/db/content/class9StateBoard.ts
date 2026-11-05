import { ChapterSeed, ChapterQuestions, QuestionSeed } from './class9';

// Tamil Nadu State Board 9th: the remaining subjects' chapters and sample
// questions for every chapter not covered in class9.ts. Social Science follows
// the Samacheer Kalvi book (History, Geography, Civics, Economics in one subject);
// English and Tamil use grammar and skill units, which stay valid across editions.

/** [question EN, question TA, options EN, options TA (null = same as EN), answer 0-3, explanation EN, explanation TA, difficulty] */
type Q = [string, string, string[], string[] | null, number, string, string, ('easy' | 'medium' | 'hard')?];

export const toSeed = ([qEn, qTa, options, optionsTa, answer, exEn, exTa, difficulty]: Q): QuestionSeed => ({
  q: [qEn, qTa],
  options: options as QuestionSeed['options'],
  ...(optionsTa && { optionsTa: optionsTa as QuestionSeed['options'] }),
  answer,
  explanation: [exEn, exTa],
  difficulty,
});

const group = (subject: string, chapter: number, questions: Q[]): ChapterQuestions => ({
  board: 'state_board',
  subject,
  chapter,
  questions: questions.map(toSeed),
});

export const CHAPTERS_9_SB: ChapterSeed[] = [
  {
    board: 'state_board',
    subject: 'social_science',
    chapters: [
      ['History: Evolution of Humans and Society – Prehistoric Period', 'வரலாறு: மனிதப் பரிணாமமும் சமூகமும் – வரலாற்றுக்கு முந்தைய காலம்'],
      ['History: Ancient Civilisations', 'வரலாறு: பண்டைய நாகரிகங்கள்'],
      ['History: Early Tamil Society and Culture', 'வரலாறு: தொடக்ககாலத் தமிழ்ச் சமூகமும் பண்பாடும்'],
      ['History: Intellectual Awakening and Socio-Political Changes', 'வரலாறு: அறிவுமலர்ச்சியும் சமூக அரசியல் மாற்றங்களும்'],
      ['History: The Classical World', 'வரலாறு: செவ்வியல் உலகம்'],
      ['History: The Middle Ages', 'வரலாறு: இடைக்காலம்'],
      ['History: State and Society in Medieval India', 'வரலாறு: இடைக்கால இந்தியாவில் அரசும் சமூகமும்'],
      ['History: The Beginning of the Modern Age', 'வரலாறு: நவீன யுகத்தின் தொடக்கம்'],
      ['History: The Age of Revolutions', 'வரலாறு: புரட்சிகளின் காலம்'],
      ['History: Industrial Revolution', 'வரலாறு: தொழிற்புரட்சி'],
      ['History: Colonialism in Asia and Africa', 'வரலாறு: ஆசியா, ஆப்பிரிக்காவில் காலனியாதிக்கம்'],
      ['Geography: Lithosphere – I: Endogenetic Processes', 'புவியியல்: பாறைக்கோளம் – I உள் இயக்கச் செயல்முறைகள்'],
      ['Geography: Lithosphere – II: Exogenetic Processes', 'புவியியல்: பாறைக்கோளம் – II வெளி இயக்கச் செயல்முறைகள்'],
      ['Geography: Atmosphere', 'புவியியல்: வளிமண்டலம்'],
      ['Geography: Hydrosphere', 'புவியியல்: நீர்க்கோளம்'],
      ['Geography: Biosphere', 'புவியியல்: உயிர்க்கோளம்'],
      ['Geography: Man and Environment', 'புவியியல்: மனிதனும் சுற்றுச்சூழலும்'],
      ['Geography: Mapping Skills', 'புவியியல்: நிலவரைபடத் திறன்கள்'],
      ['Geography: Disaster Management', 'புவியியல்: பேரிடர் மேலாண்மை'],
      ['Civics: Forms of Government and Democracy', 'குடிமையியல்: அரசாங்க வகைகளும் மக்களாட்சியும்'],
      ['Civics: Election, Political Parties and Pressure Groups', 'குடிமையியல்: தேர்தல், அரசியல் கட்சிகள் மற்றும் அழுத்தக் குழுக்கள்'],
      ['Civics: Human Rights', 'குடிமையியல்: மனித உரிமைகள்'],
      ['Civics: Local Self Government', 'குடிமையியல்: உள்ளாட்சி அமைப்புகள்'],
      ['Civics: Road Safety', 'குடிமையியல்: சாலைப் பாதுகாப்பு'],
      ['Economics: Understanding Development', 'பொருளியல்: வளர்ச்சியைப் புரிந்துகொள்ளுதல்'],
      ['Economics: Employment in India and Tamil Nadu', 'பொருளியல்: இந்தியா மற்றும் தமிழ்நாட்டில் வேலைவாய்ப்பு'],
      ['Economics: Money and Credit', 'பொருளியல்: பணம் மற்றும் கடன்'],
      ['Economics: Agriculture in Tamil Nadu', 'பொருளியல்: தமிழ்நாட்டில் வேளாண்மை'],
      ['Economics: Migration', 'பொருளியல்: இடம்பெயர்தல்'],
    ],
  },
  {
    board: 'state_board',
    subject: 'english',
    chapters: [
      ['Grammar: Parts of Speech', 'இலக்கணம்: சொல் வகைகள்'],
      ['Grammar: Tenses', 'இலக்கணம்: காலங்கள்'],
      ['Grammar: Articles and Prepositions', 'இலக்கணம்: சுட்டிடைச் சொற்கள், முன்னிடைச் சொற்கள்'],
      ['Grammar: Active and Passive Voice', 'இலக்கணம்: செய்வினை, செயப்பாட்டுவினை'],
      ['Grammar: Direct and Indirect Speech', 'இலக்கணம்: நேர்க்கூற்று, அயற்கூற்று'],
      ['Vocabulary: Synonyms and Antonyms', 'சொல்வளம்: ஒருபொருள், எதிர்ச்சொற்கள்'],
    ],
  },
  {
    board: 'state_board',
    subject: 'tamil',
    chapters: [
      ['Grammar: Letters (Ezhuthu)', 'இலக்கணம்: எழுத்து'],
      ['Grammar: Parts of Speech (Sol)', 'இலக்கணம்: சொல்'],
      ['Vocabulary: Synonyms and Antonyms', 'சொல்வளம்: ஒருபொருள், எதிர்ச்சொல்'],
      ['Literature: Works and Authors', 'இலக்கியம்: நூல்களும் ஆசிரியர்களும்'],
      ['Thirukkural', 'திருக்குறள்'],
      ['Sangam Literature and Epics', 'சங்க இலக்கியமும் காப்பியங்களும்'],
    ],
  },
];

// English and Tamil skill questions, shared with CBSE (see class9Cbse.ts)
export const ENGLISH_QUESTIONS: Q[][] = [
  [
    ["In 'She runs fast', the word 'fast' is", '', ['a noun', 'a verb', 'an adverb', 'an adjective'], null, 2, "'Fast' tells us how she runs, so it is an adverb.", '', 'easy'],
    ["Which word is a noun in 'The happy child sang loudly'?", '', ['happy', 'child', 'sang', 'loudly'], null, 1, "'Child' names a person.", ''],
    ["In 'Ravi and Meena went to school', 'and' is a", '', ['preposition', 'conjunction', 'pronoun', 'interjection'], null, 1, "'And' joins two words, so it is a conjunction.", ''],
    ["Choose the pronoun: 'They finished the work early.'", '', ['They', 'finished', 'work', 'early'], null, 0, "'They' stands in place of a noun.", '', 'easy'],
  ],
  [
    ['She ___ to school every day.', '', ['goes', 'go', 'going', 'gone'], null, 0, 'Simple present with he/she/it takes -s: goes.', '', 'easy'],
    ['I ___ my homework yesterday.', '', ['do', 'did', 'does', 'doing'], null, 1, "'Yesterday' needs the simple past: did.", ''],
    ['They ___ playing football now.', '', ['is', 'are', 'was', 'be'], null, 1, "Present continuous with 'they': are playing.", ''],
    ['By next year, he ___ his course.', '', ['complete', 'completes', 'will have completed', 'has completed'], null, 2, "An action finished before a future time uses the future perfect.", '', 'hard'],
  ],
  [
    ['She is ___ honest girl.', '', ['a', 'an', 'the', 'no article'], null, 1, "'Honest' begins with a vowel sound, so 'an'.", '', 'medium'],
    ['The book is ___ the table.', '', ['on', 'at', 'into', 'of'], null, 0, "'On' shows something resting on a surface.", '', 'easy'],
    ['He has been ill ___ Monday.', '', ['for', 'since', 'from', 'by'], null, 1, "'Since' is used with a point in time.", ''],
    ['___ Sun rises in the east.', '', ['A', 'An', 'The', 'no article'], null, 2, "There is only one Sun, so 'the'.", '', 'easy'],
  ],
  [
    ["The passive form of 'Ravi wrote a letter' is", '', ['A letter was written by Ravi.', 'A letter is written by Ravi.', 'A letter has written Ravi.', 'Ravi was written a letter.'], null, 0, 'Past simple active becomes was/were + past participle.', ''],
    ["The passive form of 'They are building a house' is", '', ['A house is being built by them.', 'A house was built by them.', 'A house is built by them.', 'A house has been building by them.'], null, 0, 'Present continuous becomes is/are being + past participle.', '', 'medium'],
    ["The active form of 'The cake was eaten by the children' is", '', ['The children ate the cake.', 'The children eat the cake.', 'The children have eaten the cake.', 'The cake ate the children.'], null, 0, 'Was eaten (past) becomes ate.', ''],
    ['Which sentence is in the passive voice?', '', ['The window was broken.', 'She broke the window.', 'She is breaking the window.', 'They will break the window.'], null, 0, 'Was + past participle (broken) is passive.', '', 'easy'],
  ],
  [
    ['He said, "I am tired." In reported speech:', '', ['He said that he was tired.', 'He said that I am tired.', 'He said that he is tired.', 'He says that he was tired.'], null, 0, "'I am' becomes 'he was' after 'said'.", ''],
    ['She said, "I will come." In reported speech:', '', ['She said that she would come.', 'She said that she will come.', 'She said that I would come.', 'She says she would come.'], null, 0, "'Will' becomes 'would'.", ''],
    ['He asked me, "Where do you live?" In reported speech:', '', ['He asked me where I lived.', 'He asked me where do I live.', 'He asked me where did I live.', 'He asked me where you live.'], null, 0, 'Reported questions use statement order and shift the tense back.', '', 'hard'],
    ['Rahul said, "I have finished." In reported speech:', '', ['Rahul said that he had finished.', 'Rahul said that he has finished.', 'Rahul said that I had finished.', 'Rahul said that he finished have.'], null, 0, 'Present perfect becomes past perfect.', '', 'medium'],
  ],
  [
    ["A synonym of 'happy' is", '', ['joyful', 'sad', 'angry', 'tired'], null, 0, "'Joyful' means the same as happy.", '', 'easy'],
    ["The antonym of 'ancient' is", '', ['modern', 'old', 'historic', 'early'], null, 0, "'Modern' is the opposite of ancient.", ''],
    ["A synonym of 'begin' is", '', ['start', 'end', 'stop', 'finish'], null, 0, "'Start' means begin.", '', 'easy'],
    ["The antonym of 'generous' is", '', ['stingy', 'kind', 'liberal', 'noble'], null, 0, "Someone stingy does not like to give; generous people do.", '', 'medium'],
  ],
];

export const TAMIL_QUESTIONS: Q[][] = [
  [
    ['தமிழில் உயிர் எழுத்துகள் எத்தனை?', '', ['10', '12', '18', '247'], null, 1, 'அ முதல் ஔ வரை 12 உயிர் எழுத்துகள்.', '', 'easy'],
    ['தமிழில் மெய் எழுத்துகள் எத்தனை?', '', ['12', '18', '216', '30'], null, 1, 'க் முதல் ன் வரை 18 மெய் எழுத்துகள்.', '', 'easy'],
    ['உயிர்மெய் எழுத்துகள் எத்தனை?', '', ['216', '247', '18', '12'], null, 0, '12 உயிர் × 18 மெய் = 216 உயிர்மெய் எழுத்துகள்.', ''],
    ['தமிழ் எழுத்துகள் மொத்தம் எத்தனை?', '', ['216', '230', '247', '260'], null, 2, '12 உயிர் + 18 மெய் + 216 உயிர்மெய் + 1 ஆய்தம் = 247.', '', 'medium'],
  ],
  [
    ["'பாடினாள்' என்பது எவ்வகைச் சொல்?", '', ['பெயர்ச்சொல்', 'வினைச்சொல்', 'இடைச்சொல்', 'உரிச்சொல்'], null, 1, 'செயலைக் குறிப்பதால் வினைச்சொல்.', '', 'easy'],
    ["'மரம்' என்பது எவ்வகைச் சொல்?", '', ['பெயர்ச்சொல்', 'வினைச்சொல்', 'இடைச்சொல்', 'உரிச்சொல்'], null, 0, 'ஒரு பொருளின் பெயரைக் குறிப்பதால் பெயர்ச்சொல்.', '', 'easy'],
    ['தமிழில் சொல் வகைகள் எத்தனை?', '', ['2', '3', '4', '5'], null, 2, 'பெயர், வினை, இடை, உரி என நான்கு வகை.', ''],
    ["'அவன்' என்பது எவ்வகைச் சொல்?", '', ['பெயர்ச்சொல்', 'வினைச்சொல்', 'இடைச்சொல்', 'உரிச்சொல்'], null, 0, 'பெயருக்குப் பதிலாக வரும் சுட்டுப்பெயர்; பெயர்ச்சொல் வகை.', '', 'medium'],
  ],
  [
    ["'சூரியன்' என்பதன் வேறு பெயர்", '', ['கதிரவன்', 'நிலவு', 'விண்மீன்', 'மேகம்'], null, 0, 'கதிரவன், ஞாயிறு, பகலவன் ஆகியவை சூரியனைக் குறிக்கும்.', '', 'easy'],
    ["'இன்பம்' என்பதன் எதிர்ச்சொல்", '', ['துன்பம்', 'மகிழ்ச்சி', 'அன்பு', 'பண்பு'], null, 0, 'இன்பம் × துன்பம்.', '', 'easy'],
    ["'உயர்வு' என்பதன் எதிர்ச்சொல்", '', ['தாழ்வு', 'மேன்மை', 'பெருமை', 'சிறப்பு'], null, 0, 'உயர்வு × தாழ்வு.', ''],
    ["'நீர்' என்பதைக் குறிக்கும் சொல்", '', ['புனல்', 'அனல்', 'கனல்', 'வளி'], null, 0, 'புனல் = நீர்; அனல், கனல் = நெருப்பு; வளி = காற்று.', '', 'medium'],
  ],
  [
    ['சிலப்பதிகாரத்தை இயற்றியவர்', '', ['இளங்கோவடிகள்', 'சீத்தலைச் சாத்தனார்', 'கம்பர்', 'திருவள்ளுவர்'], null, 0, 'சிலப்பதிகாரம் இளங்கோவடிகள் இயற்றியது.', '', 'easy'],
    ['மணிமேகலையை இயற்றியவர்', '', ['இளங்கோவடிகள்', 'சீத்தலைச் சாத்தனார்', 'ஒட்டக்கூத்தர்', 'ஔவையார்'], null, 1, 'மணிமேகலை சீத்தலைச் சாத்தனார் இயற்றியது.', ''],
    ['கம்பராமாயணத்தை இயற்றியவர்', '', ['வால்மீகி', 'கம்பர்', 'புகழேந்தி', 'சேக்கிழார்'], null, 1, 'தமிழில் இராமாயணத்தைக் கம்பர் இயற்றினார்.', '', 'easy'],
    ["'நீராருங் கடலுடுத்த' – தமிழ்த்தாய் வாழ்த்தை இயற்றியவர்", '', ['மனோன்மணீயம் சுந்தரனார்', 'பாரதியார்', 'பாரதிதாசன்', 'கண்ணதாசன்'], null, 0, 'மனோன்மணீயம் நாடகத்திலிருந்து எடுக்கப்பட்டது; இயற்றியவர் பெ. சுந்தரனார்.', '', 'medium'],
  ],
  [
    ['திருக்குறளை இயற்றியவர்', '', ['திருவள்ளுவர்', 'ஔவையார்', 'கம்பர்', 'இளங்கோவடிகள்'], null, 0, 'திருக்குறள் திருவள்ளுவர் இயற்றியது.', '', 'easy'],
    ['திருக்குறளில் உள்ள குறட்பாக்கள் எத்தனை?', '', ['1000', '1330', '1333', '133'], null, 1, '133 அதிகாரங்கள் × 10 = 1330 குறள்கள்.', ''],
    ['திருக்குறளில் அதிகாரங்கள் எத்தனை?', '', ['100', '108', '133', '1330'], null, 2, 'திருக்குறளில் 133 அதிகாரங்கள் உள்ளன.', ''],
    ['திருக்குறள் எத்தனை பால்களைக் கொண்டது?', '', ['2', '3', '4', '5'], null, 1, 'அறத்துப்பால், பொருட்பால், காமத்துப்பால் என மூன்று.', '', 'medium'],
  ],
  [
    ['ஐம்பெருங்காப்பியங்களுள் ஒன்று', '', ['சிலப்பதிகாரம்', 'திருக்குறள்', 'நாலடியார்', 'தொல்காப்பியம்'], null, 0, 'சிலப்பதிகாரம், மணிமேகலை, சீவகசிந்தாமணி, வளையாபதி, குண்டலகேசி.', '', 'medium'],
    ['எட்டுத்தொகை நூல்கள் எத்தனை?', '', ['5', '8', '10', '18'], null, 1, 'பெயரிலேயே எட்டு நூல்கள் எனக் குறிக்கிறது.', '', 'easy'],
    ['பத்துப்பாட்டு நூல்கள் எத்தனை?', '', ['8', '10', '12', '18'], null, 1, 'பத்துப்பாட்டு பத்து நூல்களின் தொகுப்பு.', '', 'easy'],
    ['மகாகவி பாரதியார் பிறந்த ஊர்', '', ['எட்டயபுரம்', 'மதுரை', 'திருச்சி', 'கடலூர்'], null, 0, 'பாரதியார் 1882-இல் எட்டயபுரத்தில் பிறந்தார்.', ''],
  ],
];

export const QUESTIONS_9_SB: ChapterQuestions[] = [
  // Maths chapters 4-9 (1-3 are in class9.ts)
  group('maths', 4, [
    ['The sum of the angles of a triangle is', 'ஒரு முக்கோணத்தின் கோணங்களின் கூடுதல்', ['90°', '180°', '270°', '360°'], null, 1, 'The three angles of any triangle add up to 180°.', 'எந்த முக்கோணத்தின் மூன்று கோணங்களின் கூடுதலும் 180°.', 'easy'],
    ['A quadrilateral has how many sides?', 'நாற்கரத்திற்கு எத்தனை பக்கங்கள்?', ['3', '4', '5', '6'], null, 1, "'Quadri' means four.", 'நாற்கரம் = நான்கு பக்கங்கள்.', 'easy'],
    ['The angle in a semicircle is', 'அரைவட்டத்தில் அமையும் கோணம்', ['45°', '60°', '90°', '180°'], null, 2, 'An angle subtended by a diameter at the circle is a right angle.', 'விட்டம் வட்டத்தின் மீது ஏற்படுத்தும் கோணம் செங்கோணம்.', 'medium'],
  ]),
  group('maths', 5, [
    ['The point (0, 5) lies on the', '(0, 5) என்ற புள்ளி அமைவது', ['x-axis', 'y-axis', 'origin', 'first quadrant'], ['x-அச்சு', 'y-அச்சு', 'ஆதிப்புள்ளி', 'முதல் கால்பகுதி'], 1, 'Its x-coordinate is 0, so it lies on the y-axis.', 'x-ஆயத்தொலைவு 0 என்பதால் y-அச்சில் அமையும்.', 'easy'],
    ['The distance between (0, 0) and (3, 4) is', '(0, 0), (3, 4) இடையேயான தொலைவு', ['3', '4', '5', '7'], null, 2, '√(3² + 4²) = √25 = 5.', '√(3² + 4²) = √25 = 5.'],
    ['The midpoint of (2, 4) and (6, 8) is', '(2, 4), (6, 8) இன் நடுப்புள்ளி', ['(4, 6)', '(8, 12)', '(3, 4)', '(2, 2)'], null, 0, '((2 + 6)/2, (4 + 8)/2) = (4, 6).', '((2 + 6)/2, (4 + 8)/2) = (4, 6).', 'medium'],
  ]),
  group('maths', 6, [
    ['sin 30° is', 'sin 30° இன் மதிப்பு', ['0', '1/2', '√3/2', '1'], null, 1, 'sin 30° = 1/2.', 'sin 30° = 1/2.', 'easy'],
    ['tan 45° is', 'tan 45° இன் மதிப்பு', ['0', '1', '√3', '1/√3'], null, 1, 'In a 45° right triangle the opposite and adjacent sides are equal.', '45° செங்கோண முக்கோணத்தில் எதிர்ப்பக்கமும் அடுத்துள்ள பக்கமும் சமம்.'],
    ['sin²θ + cos²θ equals', 'sin²θ + cos²θ =', ['0', '1', '2', 'tan θ'], null, 1, 'This is the basic trigonometric identity.', 'இது அடிப்படை முக்கோணவியல் முற்றொருமை.', 'medium'],
  ]),
  group('maths', 7, [
    ['The area of a square of side 5 cm is', '5 செ.மீ பக்கமுள்ள சதுரத்தின் பரப்பு', ['10 cm²', '20 cm²', '25 cm²', '50 cm²'], ['10 ச.செ.மீ', '20 ச.செ.மீ', '25 ச.செ.மீ', '50 ச.செ.மீ'], 2, 'Area = side × side = 25 cm².', 'பரப்பு = பக்கம் × பக்கம் = 25 ச.செ.மீ.', 'easy'],
    ['The semi-perimeter of a triangle with sides 3, 4 and 5 cm is', '3, 4, 5 செ.மீ பக்கங்கள் கொண்ட முக்கோணத்தின் அரைச்சுற்றளவு', ['5 cm', '6 cm', '12 cm', '7 cm'], ['5 செ.மீ', '6 செ.மீ', '12 செ.மீ', '7 செ.மீ'], 1, 's = (3 + 4 + 5) ÷ 2 = 6 cm.', 's = (3 + 4 + 5) ÷ 2 = 6 செ.மீ.'],
    ['The total surface area of a cube of side a is', 'a பக்கமுள்ள கனசதுரத்தின் மொத்தப் புறப்பரப்பு', ['4a²', '6a²', 'a³', '6a'], null, 1, 'A cube has 6 square faces of area a².', 'கனசதுரத்திற்கு a² பரப்புள்ள 6 முகங்கள்.', 'medium'],
  ]),
  group('maths', 8, [
    ['The mean of 2, 4, 6, 8, 10 is', '2, 4, 6, 8, 10 இன் சராசரி', ['5', '6', '7', '30'], null, 1, '(2 + 4 + 6 + 8 + 10) ÷ 5 = 6.', '(2 + 4 + 6 + 8 + 10) ÷ 5 = 6.', 'easy'],
    ['The median of 3, 1, 4, 1, 5 is', '3, 1, 4, 1, 5 இன் இடைநிலை அளவு', ['1', '3', '4', '5'], null, 1, 'In order 1, 1, 3, 4, 5 the middle value is 3.', 'ஏறுவரிசையில் 1, 1, 3, 4, 5; நடுவில் உள்ளது 3.'],
    ['The mode of 2, 3, 3, 5, 7, 3 is', '2, 3, 3, 5, 7, 3 இன் முகடு', ['2', '3', '5', '7'], null, 1, '3 occurs most often.', '3 அதிக முறை வருகிறது.', 'easy'],
  ]),
  group('maths', 9, [
    ['The probability of getting a head when a fair coin is tossed is', 'ஒரு நாணயத்தைச் சுண்டும்போது தலை விழும் நிகழ்தகவு', ['0', '1/4', '1/2', '1'], null, 2, 'Two equally likely outcomes, one of them head.', 'சமவாய்ப்புள்ள இரு விளைவுகளில் ஒன்று தலை.', 'easy'],
    ['The probability of an impossible event is', 'இயலா நிகழ்ச்சியின் நிகழ்தகவு', ['0', '1/2', '1', '−1'], null, 0, 'An impossible event never happens.', 'இயலா நிகழ்ச்சி ஒருபோதும் நிகழாது.', 'easy'],
    ['When a die is rolled, the probability of getting 6 is', 'பகடையை உருட்டும்போது 6 கிடைக்கும் நிகழ்தகவு', ['1/2', '1/3', '1/6', '6'], null, 2, 'One favourable outcome out of six.', 'ஆறு விளைவுகளில் ஒன்று சாதகம்.'],
  ]),
  // Science units 3-25 (1-2 are in class9.ts)
  group('science', 3, [
    ['The SI unit of pressure is', 'அழுத்தத்தின் SI அலகு', ['pascal', 'newton', 'joule', 'watt'], ['பாஸ்கல்', 'நியூட்டன்', 'ஜூல்', 'வாட்'], 0, 'Pressure = force ÷ area, measured in pascal (N/m²).', 'அழுத்தம் = விசை ÷ பரப்பு; அலகு பாஸ்கல்.', 'easy'],
    ['Pressure in a liquid increases with', 'திரவத்தில் அழுத்தம் எதனுடன் அதிகரிக்கிறது?', ['depth', 'colour', 'shape of the vessel', 'width of the vessel'], ['ஆழம்', 'நிறம்', 'பாத்திரத்தின் வடிவம்', 'பாத்திரத்தின் அகலம்'], 0, 'Deeper liquid has more liquid above it pressing down.', 'ஆழம் அதிகரிக்கும்போது மேலுள்ள திரவத்தின் எடை அதிகரிக்கிறது.'],
    ['Atmospheric pressure is measured with a', 'வளிமண்டல அழுத்தத்தை அளக்கும் கருவி', ['thermometer', 'barometer', 'hydrometer', 'ammeter'], ['வெப்பநிலைமானி', 'காற்றழுத்தமானி', 'நீரடர்த்திமானி', 'மின்னோட்டமானி'], 1, 'A barometer measures air pressure.', 'காற்றழுத்தமானி (பாரோமீட்டர்) காற்றழுத்தத்தை அளக்கும்.'],
  ]),
  group('science', 4, [
    ['The SI unit of electric current is', 'மின்னோட்டத்தின் SI அலகு', ['volt', 'ampere', 'ohm', 'coulomb'], ['வோல்ட்', 'ஆம்பியர்', 'ஓம்', 'கூலூம்'], 1, 'Current is measured in ampere.', 'மின்னோட்டத்தின் அலகு ஆம்பியர்.', 'easy'],
    ['The SI unit of electric charge is', 'மின்னூட்டத்தின் SI அலகு', ['coulomb', 'ampere', 'volt', 'watt'], ['கூலூம்', 'ஆம்பியர்', 'வோல்ட்', 'வாட்'], 0, 'Charge is measured in coulomb.', 'மின்னூட்டத்தின் அலகு கூலூம்.'],
    ['Electric current is measured using an', 'மின்னோட்டத்தை அளக்கப் பயன்படும் கருவி', ['voltmeter', 'ammeter', 'barometer', 'thermometer'], ['வோல்ட்மீட்டர்', 'அம்மீட்டர்', 'காற்றழுத்தமானி', 'வெப்பநிலைமானி'], 1, 'An ammeter is connected in series to measure current.', 'அம்மீட்டர் தொடரிணைப்பில் இணைக்கப்பட்டு மின்னோட்டத்தை அளக்கும்.'],
  ]),
  group('science', 5, [
    ['Like magnetic poles', 'ஒத்த காந்தத் துருவங்கள்', ['attract', 'repel', 'neither attract nor repel', 'sometimes attract'], ['ஈர்க்கும்', 'விலக்கும்', 'ஈர்க்கவும் விலக்கவும் செய்யாது', 'சில நேரம் ஈர்க்கும்'], 1, 'Like poles repel, unlike poles attract.', 'ஒத்த துருவங்கள் விலக்கும்; எதிர் துருவங்கள் ஈர்க்கும்.', 'easy'],
    ['The SI unit of magnetic field (flux density) is', 'காந்தப்புலத்தின் (பாய அடர்த்தி) SI அலகு', ['tesla', 'weber', 'ampere', 'henry'], ['டெஸ்லா', 'வெபர்', 'ஆம்பியர்', 'ஹென்றி'], 0, 'Magnetic flux density is measured in tesla.', 'காந்தப் பாய அடர்த்தியின் அலகு டெஸ்லா.', 'medium'],
    ['Electromagnetic induction was discovered by', 'மின்காந்தத் தூண்டலைக் கண்டறிந்தவர்', ['Michael Faraday', 'Isaac Newton', 'Georg Ohm', 'Thomas Edison'], ['மைக்கேல் ஃபாரடே', 'ஐசக் நியூட்டன்', 'ஜார்ஜ் ஓம்', 'தாமஸ் எடிசன்'], 0, 'Faraday discovered it in 1831.', 'ஃபாரடே 1831-இல் கண்டறிந்தார்.'],
  ]),
  group('science', 6, [
    ['By the laws of reflection, the angle of reflection is ___ the angle of incidence.', 'எதிரொளிப்பு விதிப்படி எதிரொளிப்புக் கோணம், படுகோணத்திற்கு', ['equal to', 'greater than', 'less than', 'twice'], ['சமம்', 'அதிகம்', 'குறைவு', 'இரு மடங்கு'], 0, 'Angle of incidence = angle of reflection.', 'படுகோணம் = எதிரொளிப்புக் கோணம்.', 'easy'],
    ['The image formed by a plane mirror is', 'சமதள ஆடியில் தோன்றும் பிம்பம்', ['real and inverted', 'virtual and erect', 'real and erect', 'virtual and inverted'], ['மெய், தலைகீழ்', 'மாய, நேரான', 'மெய், நேரான', 'மாய, தலைகீழ்'], 1, 'It cannot be caught on a screen and is upright.', 'திரையில் பிடிக்க இயலாது; நேராகத் தோன்றும்.'],
    ['The speed of light in vacuum is about', 'வெற்றிடத்தில் ஒளியின் வேகம் ஏறக்குறைய', ['3 × 10⁶ m/s', '3 × 10⁸ m/s', '3 × 10¹⁰ m/s', '340 m/s'], null, 1, 'Light travels at about 3 × 10⁸ m/s; 340 m/s is sound in air.', 'ஒளி ஏறக்குறைய 3 × 10⁸ m/s; 340 m/s என்பது காற்றில் ஒலியின் வேகம்.', 'medium'],
  ]),
  group('science', 7, [
    ['The SI unit of heat is', 'வெப்பத்தின் SI அலகு', ['joule', 'calorie', 'kelvin', 'watt'], ['ஜூல்', 'கலோரி', 'கெல்வின்', 'வாட்'], 0, 'Heat is energy, measured in joule.', 'வெப்பம் ஆற்றல்; அலகு ஜூல்.', 'easy'],
    ['Heat travels through solids mainly by', 'திடப்பொருள்களில் வெப்பம் முக்கியமாகப் பரவுவது', ['conduction', 'convection', 'radiation', 'evaporation'], ['கடத்தல்', 'வெப்பச்சலனம்', 'கதிர்வீச்சு', 'ஆவியாதல்'], 0, 'Particles of a solid pass heat to their neighbours.', 'திடப்பொருளின் துகள்கள் அருகிலுள்ளவற்றுக்கு வெப்பத்தைக் கடத்தும்.'],
    ["The Sun's heat reaches the Earth by", 'சூரியனின் வெப்பம் புவியை அடைவது', ['conduction', 'convection', 'radiation', 'reflection'], ['கடத்தல்', 'வெப்பச்சலனம்', 'கதிர்வீச்சு', 'எதிரொளிப்பு'], 2, 'Space is empty, so only radiation can carry heat across it.', 'விண்வெளி வெற்றிடம்; கதிர்வீச்சு மட்டுமே வெப்பத்தைக் கொண்டுசெல்லும்.'],
  ]),
  group('science', 8, [
    ['Sound cannot travel through', 'ஒலி எதன் வழியே பரவாது?', ['water', 'air', 'steel', 'vacuum'], ['நீர்', 'காற்று', 'எஃகு', 'வெற்றிடம்'], 3, 'Sound needs a medium; a vacuum has none.', 'ஒலிக்கு ஊடகம் தேவை; வெற்றிடத்தில் ஊடகம் இல்லை.', 'easy'],
    ['The speed of sound in air is about', 'காற்றில் ஒலியின் வேகம் ஏறக்குறைய', ['3 × 10⁸ m/s', '340 m/s', '1500 m/s', '34 m/s'], null, 1, 'About 340 m/s at room temperature.', 'அறை வெப்பநிலையில் ஏறக்குறைய 340 m/s.'],
    ['The unit of frequency is', 'அதிர்வெண்ணின் அலகு', ['hertz', 'decibel', 'metre', 'second'], ['ஹெர்ட்ஸ்', 'டெசிபல்', 'மீட்டர்', 'வினாடி'], 0, 'Frequency is vibrations per second, in hertz.', 'அதிர்வெண் = வினாடிக்கு அதிர்வுகள்; அலகு ஹெர்ட்ஸ்.', 'easy'],
  ]),
  group('science', 9, [
    ['The star nearest to the Earth is', 'புவிக்கு மிக அருகிலுள்ள விண்மீன்', ['Sirius', 'the Sun', 'Proxima Centauri', 'Polaris'], ['சிரியஸ்', 'சூரியன்', 'பிராக்ஸிமா சென்டாரி', 'துருவ நட்சத்திரம்'], 1, 'The Sun is a star, and the closest one.', 'சூரியனும் ஒரு விண்மீன்; அதுவே மிக அருகிலுள்ளது.', 'medium'],
    ['The largest planet of the solar system is', 'சூரியக் குடும்பத்தின் மிகப்பெரிய கோள்', ['Earth', 'Jupiter', 'Saturn', 'Mars'], ['புவி', 'வியாழன்', 'சனி', 'செவ்வாய்'], 1, 'Jupiter is the largest planet.', 'வியாழன் மிகப்பெரிய கோள்.', 'easy'],
    ['Our galaxy is called the', 'நமது விண்மீன் திரளின் பெயர்', ['Andromeda', 'Milky Way', 'Whirlpool', 'Sombrero'], ['ஆண்ட்ரோமெடா', 'பால்வெளி', 'சுழல்', 'சாம்ப்ரெரோ'], 1, 'The Sun is one of the stars of the Milky Way.', 'சூரியன் பால்வெளித் திரளின் ஒரு விண்மீன்.', 'easy'],
  ]),
  group('science', 10, [
    ['Which of these is a mixture?', 'பின்வருவனவற்றுள் எது கலவை?', ['pure water', 'salt solution', 'oxygen', 'gold'], ['தூய நீர்', 'உப்புக் கரைசல்', 'ஆக்சிஜன்', 'தங்கம்'], 1, 'Salt solution is salt and water mixed.', 'உப்புக் கரைசல் உப்பும் நீரும் கலந்தது.', 'easy'],
    ['Salt is obtained from sea water by', 'கடல்நீரிலிருந்து உப்பைப் பிரிக்கும் முறை', ['evaporation', 'filtration', 'magnetic separation', 'sublimation'], ['ஆவியாக்குதல்', 'வடிகட்டுதல்', 'காந்தப் பிரிப்பு', 'பதங்கமாதல்'], 0, 'The water evaporates and the salt stays behind.', 'நீர் ஆவியாகி உப்பு மட்டும் மீதமிருக்கும்.'],
    ['Which of these is an element?', 'பின்வருவனவற்றுள் எது தனிமம்?', ['water', 'carbon dioxide', 'iron', 'sugar'], ['நீர்', 'கார்பன் டைஆக்சைடு', 'இரும்பு', 'சர்க்கரை'], 2, 'Iron is made of only one kind of atom.', 'இரும்பு ஒரே வகை அணுக்களால் ஆனது.', 'easy'],
  ]),
  group('science', 11, [
    ['The electron was discovered by', 'எலக்ட்ரானைக் கண்டறிந்தவர்', ['J. J. Thomson', 'Rutherford', 'Chadwick', 'Bohr'], ['ஜே. ஜே. தாம்சன்', 'ரூதர்ஃபோர்டு', 'சாட்விக்', 'போர்'], 0, 'Thomson discovered the electron in 1897.', 'தாம்சன் 1897-இல் கண்டறிந்தார்.'],
    ['The neutron was discovered by', 'நியூட்ரானைக் கண்டறிந்தவர்', ['Chadwick', 'Thomson', 'Dalton', 'Bohr'], ['சாட்விக்', 'தாம்சன்', 'டால்டன்', 'போர்'], 0, 'Chadwick discovered the neutron in 1932.', 'சாட்விக் 1932-இல் கண்டறிந்தார்.', 'medium'],
    ['The atomic number of an element is the number of', 'ஒரு தனிமத்தின் அணு எண் என்பது எவற்றின் எண்ணிக்கை?', ['neutrons', 'protons', 'nucleons', 'molecules'], ['நியூட்ரான்கள்', 'புரோட்டான்கள்', 'நியூக்ளியான்கள்', 'மூலக்கூறுகள்'], 1, 'Atomic number = number of protons in the nucleus.', 'அணு எண் = உட்கருவிலுள்ள புரோட்டான்களின் எண்ணிக்கை.', 'easy'],
  ]),
  group('science', 12, [
    ['The modern periodic law is based on', 'நவீன ஆவர்த்தன விதி எதன் அடிப்படையில் அமைந்தது?', ['atomic mass', 'atomic number', 'density', 'valency'], ['அணு நிறை', 'அணு எண்', 'அடர்த்தி', 'இணைதிறன்'], 1, 'Moseley showed properties depend on atomic number.', 'பண்புகள் அணு எண்ணைச் சார்ந்தவை என மோஸ்லே காட்டினார்.', 'medium'],
    ['The modern periodic table has how many groups?', 'நவீன ஆவர்த்தன அட்டவணையில் எத்தனை தொகுதிகள்?', ['7', '8', '18', '32'], null, 2, 'There are 18 vertical columns (groups).', '18 செங்குத்து நிரல்கள் (தொகுதிகள்) உள்ளன.'],
    ['Noble gases are in group', 'மந்த வாயுக்கள் உள்ள தொகுதி', ['1', '2', '17', '18'], null, 3, 'Helium, neon, argon… are in group 18.', 'ஹீலியம், நியான், ஆர்கான்… 18-ஆம் தொகுதியில் உள்ளன.'],
  ]),
  group('science', 13, [
    ['A bond formed by the transfer of electrons is', 'எலக்ட்ரான் மாற்றத்தால் உருவாகும் பிணைப்பு', ['ionic', 'covalent', 'coordinate', 'metallic'], ['அயனிப் பிணைப்பு', 'சகப் பிணைப்பு', 'ஈதல் பிணைப்பு', 'உலோகப் பிணைப்பு'], 0, 'Transfer of electrons makes ions, which attract: an ionic bond.', 'எலக்ட்ரான் மாற்றத்தால் அயனிகள் உருவாகி ஈர்க்கின்றன.'],
    ['The bond in a hydrogen molecule (H₂) is', 'ஹைட்ரஜன் மூலக்கூறில் (H₂) உள்ள பிணைப்பு', ['ionic', 'covalent', 'coordinate', 'a hydrogen bond'], ['அயனி', 'சகப் பிணைப்பு', 'ஈதல்', 'ஹைட்ரஜன் பிணைப்பு'], 1, 'The two atoms share a pair of electrons.', 'இரு அணுக்களும் ஒரு எலக்ட்ரான் இணையைப் பகிர்கின்றன.', 'medium'],
    ['Sodium chloride (NaCl) is', 'சோடியம் குளோரைடு (NaCl) என்பது', ['a covalent compound', 'an ionic compound', 'an element', 'a mixture'], ['சகப் பிணைப்புச் சேர்மம்', 'அயனிச் சேர்மம்', 'தனிமம்', 'கலவை'], 1, 'Na⁺ and Cl⁻ ions held together.', 'Na⁺, Cl⁻ அயனிகள் பிணைந்தது.', 'easy'],
  ]),
  group('science', 14, [
    ['The pH of pure water is', 'தூய நீரின் pH மதிப்பு', ['0', '7', '10', '14'], null, 1, 'Pure water is neutral: pH 7.', 'தூய நீர் நடுநிலை: pH 7.', 'easy'],
    ['Acids turn blue litmus', 'அமிலங்கள் நீல லிட்மஸை மாற்றும் நிறம்', ['red', 'blue', 'green', 'yellow'], ['சிவப்பு', 'நீலம்', 'பச்சை', 'மஞ்சள்'], 0, 'Acids turn blue litmus red.', 'அமிலங்கள் நீல லிட்மஸைச் சிவப்பாக்கும்.', 'easy'],
    ['The chemical name of common salt is', 'சமையல் உப்பின் வேதிப்பெயர்', ['sodium chloride', 'sodium bicarbonate', 'calcium carbonate', 'potassium nitrate'], ['சோடியம் குளோரைடு', 'சோடியம் பைகார்பனேட்', 'கால்சியம் கார்பனேட்', 'பொட்டாசியம் நைட்ரேட்'], 0, 'Common salt is NaCl.', 'சமையல் உப்பு NaCl.'],
  ]),
  group('science', 15, [
    ['The hardest natural substance is', 'இயற்கையில் மிகக் கடினமான பொருள்', ['graphite', 'diamond', 'coal', 'fullerene'], ['கிராஃபைட்', 'வைரம்', 'நிலக்கரி', 'ஃபுல்லரீன்'], 1, 'Diamond is an allotrope of carbon and the hardest natural substance.', 'வைரம் கார்பனின் புறவேற்றுமை வடிவம்; மிகக் கடினமானது.', 'easy'],
    ['The valency of carbon is', 'கார்பனின் இணைதிறன்', ['1', '2', '3', '4'], null, 3, 'Carbon has 4 electrons in its outer shell to share.', 'கார்பனின் வெளிக்கூட்டில் பகிர 4 எலக்ட்ரான்கள் உள்ளன.'],
    ["The 'lead' of a pencil is made of", "பென்சிலின் 'ஈயம்' எதனால் ஆனது?", ['diamond', 'graphite', 'charcoal', 'lead metal'], ['வைரம்', 'கிராஃபைட்', 'கரி', 'ஈய உலோகம்'], 1, 'It is graphite, a soft form of carbon, not the metal lead.', 'அது கிராஃபைட் எனும் மென்மையான கார்பன்; ஈய உலோகம் அல்ல.', 'medium'],
  ]),
  group('science', 16, [
    ['The main gas in LPG used in homes is', 'வீட்டு LPG-யில் முக்கியமாக உள்ள வாயு', ['butane', 'methane', 'hydrogen', 'oxygen'], ['பியூட்டேன்', 'மீத்தேன்', 'ஹைட்ரஜன்', 'ஆக்சிஜன்'], 0, 'LPG is mainly butane (with propane).', 'LPG முக்கியமாக பியூட்டேன் (புரொப்பேனுடன்).', 'medium'],
    ['Rusting of iron needs', 'இரும்பு துருப்பிடிக்கத் தேவையானவை', ['oxygen and water', 'nitrogen and water', 'only water', 'only heat'], ['ஆக்சிஜனும் நீரும்', 'நைட்ரஜனும் நீரும்', 'நீர் மட்டும்', 'வெப்பம் மட்டும்'], 0, 'Iron rusts when it meets both air (oxygen) and moisture.', 'காற்றும் (ஆக்சிஜன்) ஈரப்பதமும் சேரும்போது இரும்பு துருப்பிடிக்கும்.', 'easy'],
    ['Coating iron with zinc to prevent rusting is called', 'துருப்பிடிக்காமல் இரும்பின்மீது துத்தநாகம் பூசுதல்', ['galvanisation', 'vulcanisation', 'crystallisation', 'distillation'], ['நாகமுலாம் பூசுதல்', 'வல்கனைசேஷன்', 'படிகமாக்கல்', 'காய்ச்சி வடித்தல்'], 0, 'Galvanised iron has a zinc coating.', 'நாகமுலாம் பூசிய இரும்பில் துத்தநாகப் பூச்சு உண்டு.'],
  ]),
  group('science', 17, [
    ['Which of these is a mammal?', 'பின்வருவனவற்றுள் எது பாலூட்டி?', ['shark', 'bat', 'penguin', 'frog'], ['சுறா', 'வௌவால்', 'பென்குயின்', 'தவளை'], 1, 'Bats give birth and feed their young with milk.', 'வௌவால் குட்டி ஈன்று பாலூட்டும்.', 'medium'],
    ['Animals with a backbone are called', 'முதுகெலும்புள்ள விலங்குகள்', ['invertebrates', 'vertebrates', 'arthropods', 'molluscs'], ['முதுகெலும்பிலிகள்', 'முதுகெலும்பிகள்', 'கணுக்காலிகள்', 'மெல்லுடலிகள்'], 1, 'Vertebrates have a vertebral column.', 'முதுகெலும்பிகளுக்கு முதுகெலும்புத் தொடர் உண்டு.', 'easy'],
    ['The earthworm belongs to the phylum', 'மண்புழு சேர்ந்த தொகுதி', ['Annelida', 'Arthropoda', 'Mollusca', 'Chordata'], ['வளைதசைப் புழுக்கள் (அனெலிடா)', 'கணுக்காலிகள்', 'மெல்லுடலிகள்', 'முதுகுநாணிகள்'], 0, 'Its body is made of ring-like segments: Annelida.', 'உடல் வளையம் போன்ற கண்டங்களால் ஆனது: அனெலிடா.', 'medium'],
  ]),
  group('science', 18, [
    ['The tissue that carries water in plants is', 'தாவரங்களில் நீரைக் கடத்தும் திசு', ['xylem', 'phloem', 'parenchyma', 'epidermis'], ['சைலம்', 'புளோயம்', 'பாரன்கைமா', 'புறத்தோல்'], 0, 'Xylem carries water up from the roots; phloem carries food.', 'சைலம் நீரைக் கடத்தும்; புளோயம் உணவைக் கடத்தும்.', 'easy'],
    ['Blood is a kind of', 'இரத்தம் எவ்வகைத் திசு?', ['epithelial tissue', 'connective tissue', 'muscular tissue', 'nervous tissue'], ['எபிதீலியத் திசு', 'இணைப்புத் திசு', 'தசைத் திசு', 'நரம்புத் திசு'], 1, 'Blood is a fluid connective tissue.', 'இரத்தம் திரவ இணைப்புத் திசு.', 'medium'],
    ['The tissue at the tips of roots and shoots that keeps dividing is', 'வேர், தண்டு நுனிகளில் தொடர்ந்து பகுப்படையும் திசு', ['meristematic', 'permanent', 'xylem', 'cork'], ['ஆக்குத் திசு', 'நிலைத் திசு', 'சைலம்', 'தக்கை'], 0, 'Meristematic tissue makes the plant grow longer.', 'ஆக்குத் திசு தாவரம் நீளமாக வளரச் செய்கிறது.'],
  ]),
  group('science', 19, [
    ['Loss of water vapour from leaves is called', 'இலைகளிலிருந்து நீராவி வெளியேறுதல்', ['transpiration', 'respiration', 'photosynthesis', 'germination'], ['நீராவிப் போக்கு', 'சுவாசம்', 'ஒளிச்சேர்க்கை', 'முளைத்தல்'], 0, 'Water evaporates through the stomata.', 'இலைத்துளைகள் வழியே நீர் ஆவியாகிறது.', 'easy'],
    ['The gas released during photosynthesis is', 'ஒளிச்சேர்க்கையின்போது வெளியாகும் வாயு', ['carbon dioxide', 'oxygen', 'nitrogen', 'hydrogen'], ['கார்பன் டைஆக்சைடு', 'ஆக்சிஜன்', 'நைட்ரஜன்', 'ஹைட்ரஜன்'], 1, 'Plants take in CO₂ and give out O₂.', 'தாவரங்கள் CO₂ எடுத்து O₂ வெளியிடுகின்றன.', 'easy'],
    ['The green pigment needed for photosynthesis is', 'ஒளிச்சேர்க்கைக்குத் தேவையான பச்சை நிறமி', ['chlorophyll', 'haemoglobin', 'melanin', 'keratin'], ['பச்சையம்', 'ஹீமோகுளோபின்', 'மெலனின்', 'கெரட்டின்'], 0, 'Chlorophyll absorbs sunlight.', 'பச்சையம் சூரிய ஒளியை உறிஞ்சுகிறது.'],
  ]),
  group('science', 20, [
    ['The largest gland in the human body is the', 'மனித உடலின் மிகப்பெரிய சுரப்பி', ['liver', 'pancreas', 'thyroid', 'pituitary'], ['கல்லீரல்', 'கணையம்', 'தைராய்டு', 'பிட்யூட்டரி'], 0, 'The liver is the largest gland.', 'கல்லீரல் மிகப்பெரிய சுரப்பி.', 'medium'],
    ['The organ that pumps blood is the', 'இரத்தத்தை உந்தும் உறுப்பு', ['lungs', 'heart', 'kidney', 'liver'], ['நுரையீரல்', 'இதயம்', 'சிறுநீரகம்', 'கல்லீரல்'], 1, 'The heart pumps blood through the body.', 'இதயம் உடல் முழுவதும் இரத்தத்தை உந்துகிறது.', 'easy'],
    ['The functional unit of the kidney is the', 'சிறுநீரகத்தின் செயல் அலகு', ['neuron', 'nephron', 'alveolus', 'villus'], ['நியூரான்', 'நெஃப்ரான்', 'காற்றுப்பை', 'குடலுறிஞ்சி'], 1, 'Nephrons filter the blood.', 'நெஃப்ரான்கள் இரத்தத்தை வடிகட்டுகின்றன.', 'medium'],
  ]),
  group('science', 21, [
    ['Deficiency of vitamin C causes', 'வைட்டமின் C குறைபாட்டால் ஏற்படும் நோய்', ['scurvy', 'rickets', 'night blindness', 'beriberi'], ['ஸ்கர்வி', 'ரிக்கெட்ஸ்', 'மாலைக்கண்', 'பெரிபெரி'], 0, 'Scurvy causes bleeding gums.', 'ஸ்கர்வியால் ஈறுகளில் இரத்தம் கசியும்.', 'easy'],
    ['Lack of iodine in the diet causes', 'உணவில் அயோடின் குறைபாட்டால் ஏற்படுவது', ['goitre', 'anaemia', 'scurvy', 'rickets'], ['முன்கழுத்துக் கழலை', 'இரத்தசோகை', 'ஸ்கர்வி', 'ரிக்கெட்ஸ்'], 0, 'The thyroid swells: goitre.', 'தைராய்டு வீங்குகிறது: முன்கழுத்துக் கழலை.'],
    ['Rickets is caused by deficiency of vitamin', 'ரிக்கெட்ஸ் எந்த வைட்டமின் குறைபாட்டால் ஏற்படும்?', ['A', 'B', 'C', 'D'], null, 3, 'Vitamin D is needed for strong bones.', 'வலுவான எலும்புகளுக்கு வைட்டமின் D தேவை.'],
  ]),
  group('science', 22, [
    ['The bacterium that turns milk into curd is', 'பாலைத் தயிராக்கும் பாக்டீரியா', ['Lactobacillus', 'Plasmodium', 'Rhizobium', 'Penicillium'], ['லாக்டோபேசில்லஸ்', 'பிளாஸ்மோடியம்', 'ரைசோபியம்', 'பெனிசிலியம்'], 0, 'Lactobacillus converts milk sugar into lactic acid.', 'லாக்டோபேசில்லஸ் பால் சர்க்கரையை லாக்டிக் அமிலமாக்கும்.', 'easy'],
    ['Malaria is caused by', 'மலேரியா ஏற்படக் காரணம்', ['a virus', 'a bacterium', 'Plasmodium (a protozoan)', 'a fungus'], ['வைரஸ்', 'பாக்டீரியா', 'பிளாஸ்மோடியம் (புரோட்டோசோவா)', 'பூஞ்சை'], 2, 'Plasmodium is spread by the female Anopheles mosquito.', 'பெண் அனாஃபிலிஸ் கொசு பிளாஸ்மோடியத்தைப் பரப்புகிறது.', 'medium'],
    ['Penicillin is obtained from a', 'பெனிசிலின் எதிலிருந்து பெறப்படுகிறது?', ['bacterium', 'fungus', 'virus', 'alga'], ['பாக்டீரியா', 'பூஞ்சை', 'வைரஸ்', 'பாசி'], 1, 'Alexander Fleming found it in the fungus Penicillium.', 'அலெக்சாண்டர் ஃபிளெமிங் பெனிசிலியம் பூஞ்சையில் கண்டறிந்தார்.'],
  ]),
  group('science', 23, [
    ['Rearing silkworms is called', 'பட்டுப்புழு வளர்ப்பு', ['sericulture', 'apiculture', 'pisciculture', 'horticulture'], ['பட்டுப்புழு வளர்ப்பு (செரிகல்சர்)', 'தேனீ வளர்ப்பு', 'மீன் வளர்ப்பு', 'தோட்டக்கலை'], 0, 'Sericulture produces silk.', 'செரிகல்சர் பட்டு உற்பத்தி செய்கிறது.', 'easy'],
    ['Apiculture is the rearing of', 'எபிகல்சர் என்பது எதை வளர்த்தல்?', ['fish', 'honey bees', 'silkworms', 'poultry'], ['மீன்', 'தேனீ', 'பட்டுப்புழு', 'கோழி'], 1, 'Apiculture = bee-keeping, for honey and wax.', 'எபிகல்சர் = தேனீ வளர்ப்பு; தேன், மெழுகுக்காக.'],
    ['Pisciculture is the rearing of', 'பிசிகல்சர் என்பது எதை வளர்த்தல்?', ['fish', 'birds', 'bees', 'cattle'], ['மீன்', 'பறவைகள்', 'தேனீ', 'கால்நடை'], 0, "'Pisces' means fish.", 'பிசிகல்சர் = மீன் வளர்ப்பு.', 'easy'],
  ]),
  group('science', 24, [
    ['The gas mainly responsible for the greenhouse effect is', 'பசுமைக்குடில் விளைவுக்கு முக்கியக் காரணமான வாயு', ['oxygen', 'nitrogen', 'carbon dioxide', 'helium'], ['ஆக்சிஜன்', 'நைட்ரஜன்', 'கார்பன் டைஆக்சைடு', 'ஹீலியம்'], 2, 'CO₂ traps heat in the atmosphere.', 'CO₂ வளிமண்டலத்தில் வெப்பத்தைத் தக்கவைக்கிறது.', 'easy'],
    ['The ozone layer protects us from', 'ஓசோன் படலம் எதிலிருந்து பாதுகாக்கிறது?', ['infrared rays', 'ultraviolet rays', 'radio waves', 'visible light'], ['அகச்சிவப்புக் கதிர்கள்', 'புற ஊதாக் கதிர்கள்', 'ரேடியோ அலைகள்', 'கண்ணுறு ஒளி'], 1, 'Ozone absorbs harmful UV rays from the Sun.', 'ஓசோன் சூரியனின் தீங்கான புற ஊதாக் கதிர்களை உறிஞ்சுகிறது.'],
    ["Which is NOT one of the '3 R's' of waste management?", "கழிவு மேலாண்மையின் '3 R' களில் இல்லாதது எது?", ['Reduce', 'Reuse', 'Recycle', 'Remove'], ['குறைத்தல்', 'மறுபயன்பாடு', 'மறுசுழற்சி', 'அகற்றுதல்'], 3, 'The 3 R’s are Reduce, Reuse, Recycle.', 'குறைத்தல், மறுபயன்பாடு, மறுசுழற்சி ஆகியவையே 3 R.', 'medium'],
  ]),
  group('science', 25, [
    ['Which of these is an input device?', 'பின்வருவனவற்றுள் எது உள்ளீட்டுக் கருவி?', ['keyboard', 'monitor', 'printer', 'speaker'], ['விசைப்பலகை', 'திரை', 'அச்சுப்பொறி', 'ஒலிபெருக்கி'], 0, 'We type data into the computer with a keyboard.', 'விசைப்பலகை மூலம் கணினிக்குத் தரவை உள்ளிடுகிறோம்.', 'easy'],
    ['Which of these is an output device?', 'பின்வருவனவற்றுள் எது வெளியீட்டுக் கருவி?', ['mouse', 'keyboard', 'printer', 'scanner'], ['சுட்டி', 'விசைப்பலகை', 'அச்சுப்பொறி', 'வருடி'], 2, 'A printer gives out results on paper.', 'அச்சுப்பொறி முடிவுகளைத் தாளில் தருகிறது.', 'easy'],
    ['CPU stands for', 'CPU என்பதன் விரிவாக்கம்', ['Central Processing Unit', 'Computer Personal Unit', 'Central Program Utility', 'Control Print Unit'], null, 0, 'The CPU is the processing part of a computer.', 'CPU = மையச் செயலகம் (Central Processing Unit).'],
  ]),
  // Social Science, 2 per chapter
  group('social_science', 1, [
    ['The Old Stone Age is also called the', 'பழைய கற்காலம் எனப்படுவது', ['Palaeolithic Age', 'Mesolithic Age', 'Neolithic Age', 'Chalcolithic Age'], ['பழைய கற்காலம் (பேலியோலிதிக்)', 'இடைக் கற்காலம்', 'புதிய கற்காலம்', 'செம்புக் கற்காலம்'], 0, "'Palaeo' means old and 'lithic' means stone.", "'பேலியோ' = பழைய; 'லிதிக்' = கல்.", 'easy'],
    ['The earliest humans made their tools from', 'தொடக்ககால மனிதர்கள் கருவிகளைச் செய்தது', ['stone', 'iron', 'copper', 'plastic'], ['கல்', 'இரும்பு', 'செம்பு', 'நெகிழி'], 0, 'Metals came much later; first tools were stone.', 'உலோகங்கள் பின்னரே வந்தன; முதல் கருவிகள் கல்லால் ஆனவை.', 'easy'],
  ]),
  group('social_science', 2, [
    ['The Harappan civilisation grew along the river', 'ஹரப்பா நாகரிகம் வளர்ந்த ஆற்றங்கரை', ['Indus', 'Ganga', 'Kaveri', 'Nile'], ['சிந்து', 'கங்கை', 'காவிரி', 'நைல்'], 0, 'It is also called the Indus Valley Civilisation.', 'இது சிந்து சமவெளி நாகரிகம் எனவும் அழைக்கப்படுகிறது.', 'easy'],
    ['The pyramids belong to the ancient civilisation of', 'பிரமிடுகள் எந்தப் பண்டைய நாகரிகத்தைச் சேர்ந்தவை?', ['Egypt', 'China', 'Mesopotamia', 'Greece'], ['எகிப்து', 'சீனா', 'மெசபடோமியா', 'கிரீஸ்'], 0, 'The pyramids were tombs of the Egyptian pharaohs.', 'பிரமிடுகள் எகிப்திய பாரோக்களின் கல்லறைகள்.', 'easy'],
  ]),
  group('social_science', 3, [
    ['The Keezhadi excavation site is in which district?', 'கீழடி அகழாய்வுத் தளம் உள்ள மாவட்டம்', ['Sivaganga', 'Salem', 'Vellore', 'Erode'], ['சிவகங்கை', 'சேலம்', 'வேலூர்', 'ஈரோடு'], 0, 'Keezhadi, near Madurai, is in Sivaganga district.', 'மதுரை அருகிலுள்ள கீழடி சிவகங்கை மாவட்டத்தில் உள்ளது.', 'medium'],
    ['Tolkappiyam is a work on', 'தொல்காப்பியம் எதைப் பற்றிய நூல்?', ['grammar', 'astronomy', 'medicine', 'music'], ['இலக்கணம்', 'வானியல்', 'மருத்துவம்', 'இசை'], 0, 'It is the oldest Tamil grammar.', 'இது மிகப் பழமையான தமிழ் இலக்கண நூல்.', 'easy'],
  ]),
  group('social_science', 4, [
    ['Buddhism was founded by', 'பௌத்த சமயத்தைத் தோற்றுவித்தவர்', ['Gautama Buddha', 'Mahavira', 'Ashoka', 'Kanishka'], ['கௌதம புத்தர்', 'மகாவீரர்', 'அசோகர்', 'கனிஷ்கர்'], 0, 'Gautama Buddha taught the Middle Path.', 'கௌதம புத்தர் நடுவழியைப் போதித்தார்.', 'easy'],
    ['Mahavira was the 24th Tirthankara of', 'மகாவீரர் எந்தச் சமயத்தின் 24-ஆவது தீர்த்தங்கரர்?', ['Jainism', 'Buddhism', 'Hinduism', 'Sikhism'], ['சமணம்', 'பௌத்தம்', 'இந்து சமயம்', 'சீக்கியம்'], 0, 'Jainism has 24 Tirthankaras; Mahavira was the last.', 'சமணத்தில் 24 தீர்த்தங்கரர்கள்; மகாவீரர் கடைசியானவர்.', 'medium'],
  ]),
  group('social_science', 5, [
    ['The Olympic Games began in ancient', 'ஒலிம்பிக் போட்டிகள் தொடங்கிய பண்டைய நாடு', ['Greece', 'Rome', 'Egypt', 'China'], ['கிரீஸ்', 'ரோம்', 'எகிப்து', 'சீனா'], 0, 'They were held at Olympia in Greece.', 'கிரீஸின் ஒலிம்பியாவில் நடைபெற்றன.', 'easy'],
    ['The Great Wall was built in', 'பெருஞ்சுவர் கட்டப்பட்ட நாடு', ['China', 'India', 'Rome', 'Persia'], ['சீனா', 'இந்தியா', 'ரோம்', 'பாரசீகம்'], 0, 'It was built to protect China from invaders.', 'படையெடுப்புகளிலிருந்து சீனாவைக் காக்கக் கட்டப்பட்டது.', 'easy'],
  ]),
  group('social_science', 6, [
    ['Feudalism was a system of medieval', 'நிலமானிய முறை இருந்த இடைக்காலப் பகுதி', ['Europe', 'America', 'Australia', 'Antarctica'], ['ஐரோப்பா', 'அமெரிக்கா', 'ஆஸ்திரேலியா', 'அண்டார்டிகா'], 0, 'Land was given by kings to lords in return for service.', 'சேவைக்கு ஈடாக அரசர்கள் பிரபுக்களுக்கு நிலம் வழங்கினர்.', 'medium'],
    ['The Magna Carta (1215) was signed in', 'மகாசாசனம் (1215) கையெழுத்தான நாடு', ['England', 'France', 'Spain', 'Italy'], ['இங்கிலாந்து', 'பிரான்ஸ்', 'ஸ்பெயின்', 'இத்தாலி'], 0, 'King John of England signed it.', 'இங்கிலாந்து மன்னர் ஜான் கையெழுத்திட்டார்.'],
  ]),
  group('social_science', 7, [
    ['The Brihadeeswarar temple at Thanjavur was built by', 'தஞ்சாவூர் பெருவுடையார் கோயிலைக் கட்டியவர்', ['Raja Raja Chola I', 'Rajendra Chola I', 'Krishnadevaraya', 'Narasimhavarman'], ['முதலாம் இராஜராஜ சோழன்', 'முதலாம் இராஜேந்திர சோழன்', 'கிருஷ்ணதேவராயர்', 'நரசிம்மவர்மன்'], 0, 'Raja Raja Chola I completed it in 1010 CE.', 'முதலாம் இராஜராஜ சோழன் கி.பி. 1010-இல் கட்டி முடித்தார்.', 'easy'],
    ['The Delhi Sultanate (Slave dynasty) was founded by', 'தில்லி சுல்தானியத்தை (அடிமை வம்சம்) தோற்றுவித்தவர்', ['Qutb-ud-din Aibak', 'Alauddin Khalji', 'Babur', 'Akbar'], ['குத்புதீன் ஐபக்', 'அலாவுதீன் கில்ஜி', 'பாபர்', 'அக்பர்'], 0, 'Aibak began the Delhi Sultanate in 1206.', 'ஐபக் 1206-இல் தில்லி சுல்தானியத்தைத் தொடங்கினார்.', 'medium'],
  ]),
  group('social_science', 8, [
    ['The printing press with movable type was developed by', 'நகரும் அச்சுக் கொண்ட அச்சு இயந்திரத்தை உருவாக்கியவர்', ['Johannes Gutenberg', 'Galileo', 'Columbus', 'Martin Luther'], ['ஜோஹன்னஸ் கூட்டன்பர்க்', 'கலிலியோ', 'கொலம்பஸ்', 'மார்ட்டின் லூதர்'], 0, 'Gutenberg printed books in Germany around 1450.', 'கூட்டன்பர்க் 1450 வாக்கில் ஜெர்மனியில் நூல்களை அச்சிட்டார்.', 'easy'],
    ['The Renaissance began in', 'மறுமலர்ச்சி தொடங்கிய நாடு', ['Italy', 'England', 'India', 'Japan'], ['இத்தாலி', 'இங்கிலாந்து', 'இந்தியா', 'ஜப்பான்'], 0, 'It started in Italian cities such as Florence.', 'புளோரன்ஸ் போன்ற இத்தாலிய நகரங்களில் தொடங்கியது.'],
  ]),
  group('social_science', 9, [
    ['The American Declaration of Independence was adopted in', 'அமெரிக்க விடுதலைப் பிரகடனம் வெளியான ஆண்டு', ['1776', '1789', '1857', '1917'], null, 0, 'It was adopted on 4 July 1776.', 'இது 1776 ஜூலை 4 அன்று ஏற்கப்பட்டது.', 'easy'],
    ['The French Revolution began in', 'பிரெஞ்சுப் புரட்சி தொடங்கிய ஆண்டு', ['1776', '1789', '1815', '1848'], null, 1, 'It began with the storming of the Bastille in 1789.', '1789-இல் பாஸ்டில் சிறைத் தாக்குதலுடன் தொடங்கியது.'],
  ]),
  group('social_science', 10, [
    ['The Industrial Revolution began in', 'தொழிற்புரட்சி தொடங்கிய நாடு', ['England', 'France', 'Germany', 'India'], ['இங்கிலாந்து', 'பிரான்ஸ்', 'ஜெர்மனி', 'இந்தியா'], 0, 'It began in Britain in the 18th century.', '18-ஆம் நூற்றாண்டில் பிரிட்டனில் தொடங்கியது.', 'easy'],
    ['The steam engine was greatly improved by', 'நீராவி இயந்திரத்தைப் பெரிதும் மேம்படுத்தியவர்', ['James Watt', 'Thomas Edison', 'Isaac Newton', 'Alexander Graham Bell'], ['ஜேம்ஸ் வாட்', 'தாமஸ் எடிசன்', 'ஐசக் நியூட்டன்', 'அலெக்சாண்டர் கிரஹாம் பெல்'], 0, 'Watt’s engine powered factories.', 'வாட்டின் இயந்திரம் தொழிற்சாலைகளை இயக்கியது.'],
  ]),
  group('social_science', 11, [
    ['Indonesia was a colony of', 'இந்தோனேசியா யாருடைய காலனியாக இருந்தது?', ['the Netherlands (Dutch)', 'Britain', 'France', 'Portugal'], ['நெதர்லாந்து (டச்சு)', 'பிரிட்டன்', 'பிரான்ஸ்', 'போர்ச்சுகல்'], 0, 'It was called the Dutch East Indies.', 'அது டச்சு கிழக்கிந்தியத் தீவுகள் எனப்பட்டது.', 'medium'],
    ['The Berlin Conference of 1884–85 divided', '1884–85 பெர்லின் மாநாடு பங்கிட்டது', ['Africa', 'South America', 'Australia', 'China'], ['ஆப்பிரிக்கா', 'தென் அமெரிக்கா', 'ஆஸ்திரேலியா', 'சீனா'], 0, "European powers divided Africa: the 'Scramble for Africa'.", "ஐரோப்பிய நாடுகள் ஆப்பிரிக்காவைப் பங்கிட்டன: 'ஆப்பிரிக்கப் பங்கீடு'."],
  ]),
  group('social_science', 12, [
    ['The outermost layer of the Earth is the', 'புவியின் வெளிப்புற அடுக்கு', ['crust', 'mantle', 'outer core', 'inner core'], ['புவி மேலோடு', 'கவசம்', 'வெளிக்கரு', 'உட்கரு'], 0, 'We live on the crust.', 'நாம் புவி மேலோட்டில் வாழ்கிறோம்.', 'easy'],
    ['Earthquakes are recorded with a', 'நிலநடுக்கத்தைப் பதிவு செய்யும் கருவி', ['seismograph', 'barometer', 'thermometer', 'anemometer'], ['நில அதிர்வுமானி', 'காற்றழுத்தமானி', 'வெப்பநிலைமானி', 'காற்றுவேகமானி'], 0, 'A seismograph records ground vibrations.', 'நில அதிர்வுமானி தரை அதிர்வுகளைப் பதிவு செய்யும்.', 'easy'],
  ]),
  group('social_science', 13, [
    ["A 'V'-shaped valley is formed by", "'V' வடிவப் பள்ளத்தாக்கை உருவாக்குவது", ['a river', 'wind', 'a glacier', 'sea waves'], ['ஆறு', 'காற்று', 'பனியாறு', 'கடலலைகள்'], 0, 'Rivers cut V-shaped valleys; glaciers make U-shaped ones.', "ஆறுகள் 'V' வடிவம்; பனியாறுகள் 'U' வடிவம்.", 'medium'],
    ['Sand dunes are formed by', 'மணல் குன்றுகளை உருவாக்குவது', ['wind', 'rivers', 'glaciers', 'underground water'], ['காற்று', 'ஆறுகள்', 'பனியாறுகள்', 'நிலத்தடி நீர்'], 0, 'Wind piles up sand in deserts.', 'பாலைவனங்களில் காற்று மணலைக் குவிக்கிறது.', 'easy'],
  ]),
  group('social_science', 14, [
    ['The most abundant gas in the atmosphere is', 'வளிமண்டலத்தில் அதிகமுள்ள வாயு', ['nitrogen', 'oxygen', 'carbon dioxide', 'argon'], ['நைட்ரஜன்', 'ஆக்சிஜன்', 'கார்பன் டைஆக்சைடு', 'ஆர்கான்'], 0, 'Nitrogen is about 78% of the air.', 'நைட்ரஜன் காற்றில் ஏறக்குறைய 78%.', 'medium'],
    ['The layer of the atmosphere closest to the Earth is the', 'புவிக்கு அருகிலுள்ள வளிமண்டல அடுக்கு', ['troposphere', 'stratosphere', 'mesosphere', 'thermosphere'], ['கீழடுக்கு (ட்ரோபோஸ்பியர்)', 'மீவளியடுக்கு', 'இடையடுக்கு', 'வெப்ப அடுக்கு'], 0, 'Weather happens in the troposphere.', 'வானிலை மாற்றங்கள் கீழடுக்கில் நிகழ்கின்றன.'],
  ]),
  group('social_science', 15, [
    ['The largest ocean is the', 'மிகப்பெரிய பெருங்கடல்', ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'], ['பசிபிக் பெருங்கடல்', 'அட்லாண்டிக் பெருங்கடல்', 'இந்தியப் பெருங்கடல்', 'ஆர்க்டிக் பெருங்கடல்'], 0, 'The Pacific covers about a third of the Earth.', 'பசிபிக் புவியின் ஏறக்குறைய மூன்றில் ஒரு பங்கு.', 'easy'],
    ["About how much of the Earth's surface is covered by water?", 'புவிப் பரப்பில் ஏறக்குறைய எவ்வளவு நீரால் சூழப்பட்டுள்ளது?', ['29%', '50%', '71%', '90%'], null, 2, 'About 71% is water; 29% is land.', 'ஏறக்குறைய 71% நீர்; 29% நிலம்.'],
  ]),
  group('social_science', 16, [
    ['In an ecosystem, producers are', 'சூழல் அமைப்பில் உற்பத்தியாளர்கள்', ['green plants', 'herbivores', 'carnivores', 'decomposers'], ['பசுந்தாவரங்கள்', 'தாவர உண்ணிகள்', 'ஊன் உண்ணிகள்', 'சிதைப்பவை'], 0, 'Green plants make food by photosynthesis.', 'பசுந்தாவரங்கள் ஒளிச்சேர்க்கையால் உணவைத் தயாரிக்கின்றன.', 'easy'],
    ['Tropical rain forests are found near the', 'வெப்பமண்டல மழைக்காடுகள் காணப்படுவது', ['Equator', 'North Pole', 'Tropic of Cancer only', 'South Pole'], ['நிலநடுக்கோடு அருகில்', 'வட துருவம்', 'கடகரேகை மட்டும்', 'தென் துருவம்'], 0, 'It is hot and rainy all year near the Equator.', 'நிலநடுக்கோடு அருகே ஆண்டு முழுவதும் வெப்பமும் மழையும்.'],
  ]),
  group('social_science', 17, [
    ['Which of these is a renewable resource?', 'பின்வருவனவற்றுள் எது புதுப்பிக்கத்தக்க வளம்?', ['solar energy', 'coal', 'petroleum', 'natural gas'], ['சூரிய ஆற்றல்', 'நிலக்கரி', 'பெட்ரோலியம்', 'இயற்கை எரிவாயு'], 0, 'Sunlight will not run out; coal and oil will.', 'சூரிய ஒளி தீராது; நிலக்கரி, எண்ணெய் தீர்ந்துவிடும்.', 'easy'],
    ['Development that meets present needs without harming the future is called', 'எதிர்காலத்தைப் பாதிக்காமல் இன்றைய தேவைகளை நிறைவேற்றும் வளர்ச்சி', ['sustainable development', 'urbanisation', 'industrialisation', 'deforestation'], ['நிலைத்த வளர்ச்சி', 'நகரமயமாக்கல்', 'தொழில்மயமாக்கல்', 'காடழிப்பு'], 0, 'Sustainable development protects resources for future generations.', 'நிலைத்த வளர்ச்சி வருங்கால சந்ததிக்கு வளங்களைக் காக்கிறது.', 'medium'],
  ]),
  group('social_science', 18, [
    ['Lines of latitude are drawn parallel to the', 'அட்சக்கோடுகள் எதற்கு இணையாக வரையப்படுகின்றன?', ['Equator', 'Prime Meridian', 'International Date Line', 'Tropic of Cancer only'], ['நிலநடுக்கோடு', 'முதன்மைத் தீர்க்கக்கோடு', 'பன்னாட்டுத் தேதிக்கோடு', 'கடகரேகை மட்டும்'], 0, 'Latitudes run east–west, parallel to the Equator.', 'அட்சக்கோடுகள் நிலநடுக்கோட்டுக்கு இணையாக கிழக்கு–மேற்காகச் செல்கின்றன.', 'medium'],
    ['The 0° line of longitude is called the', '0° தீர்க்கக்கோட்டின் பெயர்', ['Prime Meridian', 'Equator', 'Tropic of Capricorn', 'Arctic Circle'], ['முதன்மைத் தீர்க்கக்கோடு', 'நிலநடுக்கோடு', 'மகரரேகை', 'ஆர்க்டிக் வட்டம்'], 0, 'It passes through Greenwich, London.', 'இது லண்டனின் கிரீன்விச் வழியே செல்கிறது.', 'easy'],
  ]),
  group('social_science', 19, [
    ['During an earthquake you should', 'நிலநடுக்கத்தின்போது செய்ய வேண்டியது', ['drop, cover and hold on', 'run inside a lift', 'stand near windows', 'use the stairs to run out at once'], ['குனிந்து, மறைந்து, பிடித்துக்கொள்ளுதல்', 'மின்தூக்கியில் ஓடுதல்', 'சன்னல் அருகே நிற்றல்', 'உடனே படிக்கட்டில் ஓடுதல்'], 0, 'Get under a strong table and hold on until the shaking stops.', 'உறுதியான மேசையின் கீழ் சென்று அதிர்வு நிற்கும்வரை பிடித்துக்கொள்ளுங்கள்.', 'easy'],
    ['The tsunami struck the Tamil Nadu coast in', 'தமிழகக் கடற்கரையை ஆழிப்பேரலை தாக்கிய ஆண்டு', ['1999', '2004', '2010', '2015'], null, 1, 'It struck on 26 December 2004.', '2004 டிசம்பர் 26 அன்று தாக்கியது.'],
  ]),
  group('social_science', 20, [
    ['Democracy began in ancient', 'மக்களாட்சி தோன்றிய பண்டைய இடம்', ['Athens (Greece)', 'Rome', 'Egypt', 'China'], ['ஏதென்ஸ் (கிரீஸ்)', 'ரோம்', 'எகிப்து', 'சீனா'], 0, 'Athens had direct democracy.', 'ஏதென்ஸில் நேரடி மக்களாட்சி இருந்தது.', 'medium'],
    ['India has a ___ form of government.', 'இந்தியாவின் அரசாங்க முறை', ['parliamentary', 'presidential', 'monarchy', 'military'], ['நாடாளுமன்ற முறை', 'அதிபர் முறை', 'முடியாட்சி', 'இராணுவ ஆட்சி'], 0, 'The Prime Minister and ministers are responsible to Parliament.', 'பிரதமரும் அமைச்சர்களும் நாடாளுமன்றத்திற்குப் பொறுப்பானவர்கள்.', 'easy'],
  ]),
  group('social_science', 21, [
    ['The minimum voting age in India is', 'இந்தியாவில் வாக்களிக்கக் குறைந்தபட்ச வயது', ['16', '18', '21', '25'], null, 1, 'Every citizen aged 18 or more can vote.', '18 வயது நிரம்பிய ஒவ்வொரு குடிமகனும் வாக்களிக்கலாம்.', 'easy'],
    ['Elections in India are conducted by the', 'இந்தியாவில் தேர்தல்களை நடத்துவது', ['Election Commission of India', 'Supreme Court', 'Parliament', 'President'], ['இந்தியத் தேர்தல் ஆணையம்', 'உச்ச நீதிமன்றம்', 'நாடாளுமன்றம்', 'குடியரசுத் தலைவர்'], 0, 'The Election Commission is an independent body.', 'தேர்தல் ஆணையம் தன்னாட்சி அமைப்பு.'],
  ]),
  group('social_science', 22, [
    ['The Universal Declaration of Human Rights was adopted in', 'மனித உரிமைகள் பற்றிய பன்னாட்டுப் பிரகடனம் ஏற்கப்பட்ட ஆண்டு', ['1945', '1948', '1950', '1966'], null, 1, 'The UN adopted it on 10 December 1948.', 'ஐ.நா. 1948 டிசம்பர் 10 அன்று ஏற்றது.', 'medium'],
    ['Human Rights Day is observed on', 'மனித உரிமைகள் தினம் கொண்டாடப்படும் நாள்', ['10 December', '26 January', '15 August', '2 October'], ['டிசம்பர் 10', 'ஜனவரி 26', 'ஆகஸ்ட் 15', 'அக்டோபர் 2'], 0, 'It marks the day the Declaration was adopted.', 'பிரகடனம் ஏற்கப்பட்ட நாளை நினைவுகூர்கிறது.'],
  ]),
  group('social_science', 23, [
    ['The 73rd Constitutional Amendment is about', '73-ஆவது அரசியலமைப்புத் திருத்தம் எதைப் பற்றியது?', ['Panchayati Raj', 'fundamental duties', 'official languages', 'emergency'], ['பஞ்சாயத்து ராஜ்', 'அடிப்படைக் கடமைகள்', 'அலுவல் மொழிகள்', 'நெருக்கடி நிலை'], 0, 'It gave constitutional status to Panchayats (1992).', 'பஞ்சாயத்துகளுக்கு அரசியலமைப்பு அந்தஸ்து வழங்கியது (1992).', 'medium'],
    ['The local body of a village is the', 'கிராமத்தின் உள்ளாட்சி அமைப்பு', ['Village Panchayat', 'Municipality', 'Corporation', 'Legislative Assembly'], ['கிராம ஊராட்சி', 'நகராட்சி', 'மாநகராட்சி', 'சட்டமன்றம்'], 0, 'Villages are run by the Village Panchayat.', 'கிராமங்களை கிராம ஊராட்சி நிர்வகிக்கிறது.', 'easy'],
  ]),
  group('social_science', 24, [
    ['A red traffic light means', 'சிவப்பு போக்குவரத்து விளக்கின் பொருள்', ['stop', 'go', 'get ready', 'turn left'], ['நில்', 'செல்', 'தயாராகு', 'இடப்புறம் திரும்பு'], 0, 'Red = stop, amber = get ready, green = go.', 'சிவப்பு = நில், மஞ்சள் = தயாராகு, பச்சை = செல்.', 'easy'],
    ['A zebra crossing is for', 'வரிக்குதிரைக் கோடு (ஜீப்ரா கிராஸிங்) யாருக்காக?', ['pedestrians', 'buses', 'cyclists to park', 'lorries'], ['பாதசாரிகள்', 'பேருந்துகள்', 'மிதிவண்டி நிறுத்த', 'சரக்குந்துகள்'], 0, 'People cross the road safely at zebra crossings.', 'மக்கள் சாலையைப் பாதுகாப்பாகக் கடக்க உதவுகிறது.', 'easy'],
  ]),
  group('social_science', 25, [
    ['The Human Development Index (HDI) is published by the', 'மனித வள மேம்பாட்டுக் குறியீட்டை வெளியிடுவது', ['UNDP', 'World Bank', 'IMF', 'WTO'], null, 0, 'The United Nations Development Programme publishes it.', 'ஐக்கிய நாடுகள் வளர்ச்சித் திட்டம் (UNDP) வெளியிடுகிறது.', 'medium'],
    ['HDI is based on health, education and', 'மனித வள மேம்பாட்டுக் குறியீடு உடல்நலம், கல்வி மற்றும் எதைச் சார்ந்தது?', ['income', 'population', 'area', 'army size'], ['வருமானம்', 'மக்கள்தொகை', 'பரப்பளவு', 'இராணுவ அளவு'], 0, 'Standard of living is measured by income.', 'வாழ்க்கைத் தரம் வருமானத்தால் அளக்கப்படுகிறது.'],
  ]),
  group('social_science', 26, [
    ['Agriculture belongs to which sector?', 'வேளாண்மை எந்தத் துறையைச் சேர்ந்தது?', ['primary', 'secondary', 'tertiary', 'none'], ['முதன்மைத் துறை', 'இரண்டாம் நிலைத் துறை', 'மூன்றாம் நிலைத் துறை', 'எதுவுமில்லை'], 0, 'Primary sector activities use natural resources directly.', 'முதன்மைத் துறை இயற்கை வளங்களை நேரடியாகப் பயன்படுத்துகிறது.', 'easy'],
    ['Banking and IT services belong to the', 'வங்கி, தகவல் தொழில்நுட்பச் சேவைகள் சேர்ந்த துறை', ['primary sector', 'secondary sector', 'tertiary (service) sector', 'cottage sector'], ['முதன்மைத் துறை', 'இரண்டாம் நிலைத் துறை', 'மூன்றாம் நிலை (சேவைத்) துறை', 'குடிசைத் துறை'], 2, 'Services form the tertiary sector.', 'சேவைகள் மூன்றாம் நிலைத் துறை.'],
  ]),
  group('social_science', 27, [
    ['Currency notes in India are issued by the', 'இந்தியாவில் ரூபாய் நோட்டுகளை வெளியிடுவது', ['Reserve Bank of India', 'State Bank of India', 'Finance Commission', 'NITI Aayog'], ['இந்திய ரிசர்வ் வங்கி', 'பாரத ஸ்டேட் வங்கி', 'நிதி ஆணையம்', 'நிதி ஆயோக்'], 0, 'The RBI is India’s central bank.', 'ரிசர்வ் வங்கி இந்தியாவின் மைய வங்கி.', 'easy'],
    ['The barter system means', 'பண்டமாற்று முறை என்பது', ['exchanging goods for goods', 'buying with money', 'borrowing from banks', 'paying tax'], ['பொருளுக்குப் பொருள் மாற்றுதல்', 'பணம் கொடுத்து வாங்குதல்', 'வங்கியில் கடன் பெறுதல்', 'வரி செலுத்துதல்'], 0, 'Before money, people exchanged goods directly.', 'பணம் வருவதற்கு முன் பொருள்களை நேரடியாக மாற்றினர்.', 'easy'],
  ]),
  group('social_science', 28, [
    ['The main food crop of Tamil Nadu is', 'தமிழ்நாட்டின் முக்கிய உணவுப் பயிர்', ['rice (paddy)', 'wheat', 'barley', 'oats'], ['நெல்', 'கோதுமை', 'பார்லி', 'ஓட்ஸ்'], 0, 'Paddy is grown widely, especially in the Kaveri delta.', 'குறிப்பாகக் காவிரி டெல்டாவில் நெல் பரவலாகப் பயிரிடப்படுகிறது.', 'easy'],
    ['The Mettur Dam is built across the river', 'மேட்டூர் அணை கட்டப்பட்டுள்ள ஆறு', ['Kaveri', 'Vaigai', 'Thamirabarani', 'Palar'], ['காவிரி', 'வைகை', 'தாமிரபரணி', 'பாலாறு'], 0, 'Mettur Dam (Stanley Reservoir) is on the Kaveri in Salem district.', 'மேட்டூர் அணை சேலம் மாவட்டத்தில் காவிரியின் குறுக்கே உள்ளது.', 'medium'],
  ]),
  group('social_science', 29, [
    ['People moving from villages to cities is called', 'கிராமங்களிலிருந்து நகரங்களுக்கு மக்கள் செல்வது', ['rural–urban migration', 'urban–rural migration', 'international migration', 'seasonal tourism'], ['கிராம–நகர இடம்பெயர்வு', 'நகர–கிராம இடம்பெயர்வு', 'பன்னாட்டு இடம்பெயர்வு', 'பருவகாலச் சுற்றுலா'], 0, 'Most migrants move to cities for jobs.', 'பெரும்பாலோர் வேலைக்காக நகரங்களுக்குச் செல்கின்றனர்.', 'easy'],
    ['Migration within the same country is called', 'ஒரே நாட்டுக்குள் நிகழும் இடம்பெயர்வு', ['internal migration', 'international migration', 'emigration', 'immigration'], ['உள்நாட்டு இடம்பெயர்வு', 'பன்னாட்டு இடம்பெயர்வு', 'வெளிநாடு செல்லுதல்', 'வெளிநாட்டிலிருந்து வருதல்'], 0, 'Moving between states or districts is internal migration.', 'மாநிலங்கள் அல்லது மாவட்டங்களுக்கு இடையே செல்வது உள்நாட்டு இடம்பெயர்வு.'],
  ]),
  ...ENGLISH_QUESTIONS.map((qs, i) => group('english', i + 1, qs)),
  ...TAMIL_QUESTIONS.map((qs, i) => group('tamil', i + 1, qs)),
];
