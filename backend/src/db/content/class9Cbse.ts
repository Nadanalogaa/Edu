import { ChapterSeed, ChapterQuestions } from './class9';
import { toSeed, ENGLISH_QUESTIONS, TAMIL_QUESTIONS } from './class9StateBoard';

// CBSE 9th: Social Science, English and Tamil chapters, and sample questions
// for every Maths and Science chapter not covered in class9.ts. Social Science
// follows the NCERT books (History, Geography, Political Science, Economics).

type Q = Parameters<typeof toSeed>[0];

const group = (subject: string, chapter: number, questions: Q[]): ChapterQuestions => ({
  board: 'cbse',
  subject,
  chapter,
  questions: questions.map(toSeed),
});

// English-only questions: [question, options, answer, explanation, difficulty]
const en = (q: string, options: string[], answer: number, explanation: string, difficulty?: 'easy' | 'medium' | 'hard'): Q => [
  q, '', options, null, answer, explanation, '', difficulty,
];

export const CHAPTERS_9_CBSE: ChapterSeed[] = [
  {
    board: 'cbse',
    subject: 'social_science',
    chapters: [
      ['History: The French Revolution', ''],
      ['History: Socialism in Europe and the Russian Revolution', ''],
      ['History: Nazism and the Rise of Hitler', ''],
      ['History: Forest Society and Colonialism', ''],
      ['History: Pastoralists in the Modern World', ''],
      ['Geography: India – Size and Location', ''],
      ['Geography: Physical Features of India', ''],
      ['Geography: Drainage', ''],
      ['Geography: Climate', ''],
      ['Geography: Natural Vegetation and Wildlife', ''],
      ['Geography: Population', ''],
      ['Political Science: What is Democracy? Why Democracy?', ''],
      ['Political Science: Constitutional Design', ''],
      ['Political Science: Electoral Politics', ''],
      ['Political Science: Working of Institutions', ''],
      ['Political Science: Democratic Rights', ''],
      ['Economics: The Story of Village Palampur', ''],
      ['Economics: People as Resource', ''],
      ['Economics: Poverty as a Challenge', ''],
      ['Economics: Food Security in India', ''],
    ],
  },
  {
    board: 'cbse',
    subject: 'english',
    chapters: [
      ['Grammar: Parts of Speech', ''],
      ['Grammar: Tenses', ''],
      ['Grammar: Articles and Prepositions', ''],
      ['Grammar: Active and Passive Voice', ''],
      ['Grammar: Direct and Indirect Speech', ''],
      ['Vocabulary: Synonyms and Antonyms', ''],
    ],
  },
  {
    board: 'cbse',
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

export const QUESTIONS_9_CBSE: ChapterQuestions[] = [
  // Maths chapters 3-12 (1-2 are in class9.ts)
  group('maths', 3, [
    en('The point (0, 5) lies on the', ['x-axis', 'y-axis', 'origin', 'first quadrant'], 1, 'Its x-coordinate is 0, so it is on the y-axis.', 'easy'),
    en('The point (−3, 2) lies in quadrant', ['I', 'II', 'III', 'IV'], 1, 'x negative and y positive: second quadrant.'),
    en('The abscissa of the point (4, −7) is', ['4', '−7', '3', '−3'], 0, 'The abscissa is the x-coordinate.', 'easy'),
  ]),
  group('maths', 4, [
    en('If x = 2 and y = 1, then 2x + y equals', ['3', '4', '5', '6'], 2, '2 × 2 + 1 = 5.', 'easy'),
    en('The line y = 3x passes through', ['(0, 0)', '(1, 0)', '(0, 3)', '(3, 1)'], 0, 'When x = 0, y = 0.'),
    en('A linear equation in two variables has', ['no solution', 'exactly one solution', 'exactly two solutions', 'infinitely many solutions'], 3, 'Every point on its line is a solution.', 'medium'),
  ]),
  group('maths', 5, [
    en('Things which are equal to the same thing are', ['equal to one another', 'unequal', 'parallel', 'perpendicular'], 0, "This is Euclid's first axiom.", 'easy'),
    en('A line has how many dimensions?', ['0', '1', '2', '3'], 1, 'A line has only length.'),
    en("Euclid's 'Elements' has how many books?", ['10', '12', '13', '15'], 2, 'The Elements is in 13 books.', 'medium'),
  ]),
  group('maths', 6, [
    en('The complement of 30° is', ['60°', '150°', '90°', '30°'], 0, 'Complementary angles add up to 90°.', 'easy'),
    en('The supplement of 110° is', ['70°', '80°', '250°', '20°'], 0, 'Supplementary angles add up to 180°.', 'easy'),
    en('Vertically opposite angles are', ['equal', 'supplementary', 'complementary', 'always 90°'], 0, 'Two intersecting lines make equal vertically opposite angles.'),
  ]),
  group('maths', 7, [
    en('Which is NOT a rule of congruence of triangles?', ['SSS', 'SAS', 'ASA', 'SSA'], 3, 'Two sides and a non-included angle do not fix the triangle.', 'medium'),
    en('Angles opposite equal sides of a triangle are', ['equal', 'unequal', 'complementary', 'supplementary'], 0, 'This is the isosceles triangle property.'),
    en('Each angle of an equilateral triangle is', ['30°', '45°', '60°', '90°'], 2, '180° ÷ 3 = 60°.', 'easy'),
  ]),
  group('maths', 8, [
    en('The sum of the angles of a quadrilateral is', ['180°', '270°', '360°', '540°'], 2, 'A quadrilateral splits into two triangles: 2 × 180°.', 'easy'),
    en('The diagonals of a parallelogram', ['bisect each other', 'are always equal', 'are always perpendicular', 'never meet'], 0, 'They cut each other into two equal parts.', 'medium'),
    en('A parallelogram with one right angle is a', ['rhombus', 'rectangle', 'trapezium', 'kite'], 1, 'If one angle is 90°, all are.'),
  ]),
  group('maths', 9, [
    en('The angle in a semicircle is', ['45°', '60°', '90°', '180°'], 2, 'An angle subtended by a diameter is a right angle.', 'easy'),
    en('Equal chords of a circle subtend ___ angles at the centre.', ['equal', 'unequal', 'right', 'zero'], 0, 'Equal chords are equally far from the centre.'),
    en('Opposite angles of a cyclic quadrilateral add up to', ['90°', '180°', '270°', '360°'], 1, 'Opposite angles of a cyclic quadrilateral are supplementary.', 'medium'),
  ]),
  group('maths', 10, [
    en('The semi-perimeter of a triangle with sides 3, 4 and 5 cm is', ['5 cm', '6 cm', '12 cm', '7 cm'], 1, 's = (3 + 4 + 5) ÷ 2 = 6 cm.', 'easy'),
    en('The area of a triangle with sides 3, 4 and 5 cm is', ['6 cm²', '12 cm²', '10 cm²', '7.5 cm²'], 0, '√(6 × 3 × 2 × 1) = √36 = 6 cm².', 'medium'),
    en("Heron's formula for the area of a triangle is", ['√[s(s − a)(s − b)(s − c)]', '½ × base × height only', 's(s − a)(s − b)', '(a + b + c) ÷ 2'], 0, 's is the semi-perimeter.', 'medium'),
  ]),
  group('maths', 11, [
    en('The volume of a cube of side 3 cm is', ['9 cm³', '18 cm³', '27 cm³', '54 cm³'], 2, '3 × 3 × 3 = 27 cm³.', 'easy'),
    en('The volume of a sphere of radius r is', ['4πr²', '(4/3)πr³', 'πr²h', '2πr'], 1, 'V = (4/3)πr³.'),
    en('The curved surface area of a cylinder is', ['2πrh', 'πr²h', '2πr(r + h)', 'πrl'], 0, 'Unrolled, it is a rectangle 2πr by h.', 'medium'),
  ]),
  group('maths', 12, [
    en('The mean of 2, 4, 6, 8, 10 is', ['5', '6', '7', '30'], 1, '30 ÷ 5 = 6.', 'easy'),
    en('The median of 3, 1, 4, 1, 5 is', ['1', '3', '4', '5'], 1, 'In order 1, 1, 3, 4, 5: the middle value is 3.'),
    en('The mode of 2, 3, 3, 5, 7, 3 is', ['2', '3', '5', '7'], 1, '3 occurs most often.', 'easy'),
  ]),
  // Science chapters 2-4 and 6-12 (1 and 5 are in class9.ts)
  group('science', 2, [
    en('Which of these is a homogeneous mixture?', ['salt solution', 'sand in water', 'oil in water', 'chalk in water'], 0, 'Salt dissolves completely and evenly.', 'easy'),
    en('The Tyndall effect is shown by a', ['true solution', 'colloid', 'pure water', 'salt solution'], 1, 'Colloid particles are big enough to scatter light.', 'medium'),
    en('Cream is separated from milk by', ['centrifugation', 'distillation', 'filtration', 'sublimation'], 0, 'Spinning fast separates the lighter cream.'),
  ]),
  group('science', 3, [
    en('The law of conservation of mass was given by', ['Lavoisier', 'Dalton', 'Proust', 'Avogadro'], 0, 'Lavoisier showed mass is neither created nor destroyed.', 'medium'),
    en('The molecular mass of water (H₂O) is', ['16 u', '17 u', '18 u', '20 u'], 2, '2 × 1 + 16 = 18 u.', 'easy'),
    en('One mole of a substance contains', ['6.022 × 10²³ particles', '6.022 × 10²² particles', '1000 particles', '22.4 particles'], 0, 'This is the Avogadro number.'),
  ]),
  group('science', 4, [
    en('The electron was discovered by', ['J. J. Thomson', 'Rutherford', 'Chadwick', 'Bohr'], 0, 'Thomson discovered it in 1897.', 'easy'),
    en('The atomic number of an element equals the number of', ['neutrons', 'protons', 'nucleons', 'shells'], 1, 'Atomic number = number of protons.', 'easy'),
    en('The maximum number of electrons in the K shell is', ['2', '8', '18', '32'], 0, 'The first shell holds 2n² = 2 electrons.', 'medium'),
  ]),
  group('science', 6, [
    en('Xylem in plants carries', ['water and minerals', 'food', 'oxygen only', 'hormones only'], 0, 'Phloem carries food; xylem carries water.', 'easy'),
    en('Blood is a kind of', ['epithelial tissue', 'connective tissue', 'muscular tissue', 'nervous tissue'], 1, 'Blood is a fluid connective tissue.', 'medium'),
    en('The tissue that makes plants grow at the tips is', ['meristematic', 'permanent', 'cork', 'phloem'], 0, 'Apical meristem keeps dividing.'),
  ]),
  group('science', 7, [
    en('The SI unit of velocity is', ['m/s', 'm/s²', 'km/h', 'm'], 0, 'Velocity = displacement ÷ time.', 'easy'),
    en('The slope of a distance–time graph gives', ['acceleration', 'speed', 'displacement', 'force'], 1, 'Distance ÷ time = speed.', 'medium'),
    en('A body moving with uniform velocity has an acceleration of', ['zero', 'a constant positive value', 'an increasing value', 'a negative value'], 0, 'Its velocity does not change.'),
  ]),
  group('science', 8, [
    en('The SI unit of force is', ['newton', 'joule', 'pascal', 'watt'], 0, '1 N = 1 kg m/s².', 'easy'),
    en('Force equals', ['mass × velocity', 'mass × acceleration', 'mass ÷ acceleration', 'velocity ÷ time'], 1, "Newton's second law: F = ma."),
    en("'For every action there is an equal and opposite reaction' is Newton's", ['first law', 'second law', 'third law', 'law of gravitation'], 2, 'This is the third law of motion.', 'easy'),
  ]),
  group('science', 9, [
    en('The acceleration due to gravity on Earth is about', ['9.8 m/s²', '6.7 m/s²', '1.6 m/s²', '98 m/s²'], 0, 'g ≈ 9.8 m/s².', 'easy'),
    en('The SI unit of weight is', ['kilogram', 'newton', 'gram', 'joule'], 1, 'Weight is a force.'),
    en('Your weight on the Moon is about ___ of your weight on Earth.', ['one sixth', 'one half', 'the same', 'six times'], 0, "The Moon's gravity is about 1/6 of Earth's.", 'medium'),
  ]),
  group('science', 10, [
    en('The SI unit of work is', ['joule', 'newton', 'watt', 'pascal'], 0, 'Work = force × displacement, in joule.', 'easy'),
    en('Kinetic energy is', ['½mv²', 'mgh', 'mv', 'ma'], 0, 'KE = ½mv².', 'medium'),
    en('The SI unit of power is', ['watt', 'joule', 'newton', 'volt'], 0, '1 watt = 1 joule per second.', 'easy'),
  ]),
  group('science', 11, [
    en('Sound cannot travel through', ['water', 'air', 'steel', 'a vacuum'], 3, 'Sound needs a medium.', 'easy'),
    en('The speed of sound in air is about', ['3 × 10⁸ m/s', '340 m/s', '1500 m/s', '34 m/s'], 1, 'About 340 m/s at room temperature.'),
    en('The unit of frequency is', ['hertz', 'decibel', 'metre', 'second'], 0, 'Vibrations per second.', 'easy'),
  ]),
  group('science', 12, [
    en('Kharif crops are grown in the', ['rainy season (June–October)', 'winter season', 'summer only', 'all year round'], 0, 'They are sown with the monsoon.', 'medium'),
    en('Which of these is a Rabi crop?', ['wheat', 'paddy', 'maize', 'cotton'], 0, 'Wheat is sown in winter; paddy, maize and cotton are Kharif.'),
    en('Apiculture is the rearing of', ['honey bees', 'fish', 'silkworms', 'poultry'], 0, 'Bee-keeping, for honey and wax.', 'easy'),
  ]),
  // Social Science
  group('social_science', 1, [
    en('The French Revolution began in', ['1776', '1789', '1804', '1815'], 1, 'It began with the storming of the Bastille.', 'easy'),
    en('The Bastille was stormed on', ['14 July 1789', '4 July 1776', '26 January 1950', '1 May 1789'], 0, '14 July is celebrated as France’s national day.'),
    en("'The Social Contract' was written by", ['Rousseau', 'Montesquieu', 'Voltaire', 'John Locke'], 0, 'Jean-Jacques Rousseau wrote it in 1762.', 'medium'),
  ]),
  group('social_science', 2, [
    en('The Russian Revolution took place in', ['1905', '1917', '1929', '1945'], 1, 'The Bolsheviks took power in October 1917.', 'easy'),
    en('The Bolsheviks were led by', ['Lenin', 'Stalin', 'Trotsky', 'Kerensky'], 0, 'Vladimir Lenin led the Bolshevik Party.'),
    en('The Tsar of Russia at the time of the revolution was', ['Nicholas II', 'Alexander II', 'Peter the Great', 'Ivan IV'], 0, 'Tsar Nicholas II gave up the throne in 1917.', 'medium'),
  ]),
  group('social_science', 3, [
    en('Hitler became Chancellor of Germany in', ['1919', '1929', '1933', '1939'], 2, 'He was appointed on 30 January 1933.', 'medium'),
    en('The Second World War began in', ['1914', '1929', '1939', '1945'], 2, 'Germany invaded Poland in September 1939.', 'easy'),
    en("The Nazi Party's full name was the", ["National Socialist German Workers' Party", 'German Communist Party', 'Social Democratic Party', 'Centre Party'], 0, "'Nazi' is short for Nationalsozialist."),
  ]),
  group('social_science', 4, [
    en('The Imperial Forest Research Institute was set up in 1906 at', ['Dehradun', 'Shimla', 'Ooty', 'Bhopal'], 0, 'It is now the Forest Research Institute, Dehradun.', 'medium'),
    en('Shifting cultivation is also called', ['swidden agriculture', 'terrace farming', 'plantation farming', 'mixed farming'], 0, 'Parts of forest are cut and burnt in rotation.'),
    en('The first Indian Forest Act was passed in', ['1857', '1865', '1905', '1947'], 1, 'It was amended in 1878 and 1927.', 'hard'),
  ]),
  group('social_science', 5, [
    en('The Maasai pastoralists live in', ['East Africa', 'South America', 'Australia', 'Europe'], 0, 'They live in Kenya and Tanzania.', 'easy'),
    en('The Raikas are pastoralists of', ['Rajasthan', 'Kerala', 'Assam', 'Punjab'], 0, 'Raikas herd camels and sheep in the Thar desert.'),
    en('The Gujjar Bakarwals of Jammu and Kashmir mainly rear', ['goats and sheep', 'camels', 'yaks', 'horses'], 0, 'They move to high meadows in summer.', 'medium'),
  ]),
  group('social_science', 6, [
    en('The Standard Meridian of India is', ['82°30′E', '68°7′E', '97°25′E', '0°'], 0, 'Indian Standard Time is based on 82°30′E.', 'medium'),
    en('Which line divides India into almost two equal parts?', ['Tropic of Cancer', 'Equator', 'Tropic of Capricorn', 'Arctic Circle'], 0, 'The Tropic of Cancer (23°30′N) crosses India.'),
    en('The southernmost point of the Indian Union is', ['Indira Point', 'Kanyakumari', 'Rameswaram', 'Port Blair'], 0, 'Indira Point is on Great Nicobar Island.', 'medium'),
  ]),
  group('social_science', 7, [
    en('The northernmost range of the Himalayas is the', ['Himadri', 'Himachal', 'Shiwaliks', 'Aravalli'], 0, 'The Great Himalayas (Himadri) are the highest range.'),
    en('The Lakshadweep islands are of ___ origin.', ['coral', 'volcanic', 'glacial', 'desert'], 0, 'They are coral islands.', 'easy'),
    en('The highest peak of the Western Ghats is', ['Anaimudi', 'Doddabetta', 'Mahendragiri', 'Mount Abu'], 0, 'Anaimudi (2695 m) is in Kerala.', 'medium'),
  ]),
  group('social_science', 8, [
    en('The longest river of India is the', ['Ganga', 'Godavari', 'Narmada', 'Kaveri'], 0, 'The Ganga is about 2500 km long.', 'easy'),
    en('The Narmada flows into the', ['Arabian Sea', 'Bay of Bengal', 'Indian Ocean directly', 'Chilika Lake'], 0, 'It flows west through a rift valley.', 'medium'),
    en('Wular Lake is in', ['Jammu and Kashmir', 'Rajasthan', 'Odisha', 'Kerala'], 0, 'It is one of the largest freshwater lakes in India.'),
  ]),
  group('social_science', 9, [
    en("The word 'monsoon' comes from the Arabic word", ['mausim', 'monsun', 'mausam-e-garma', 'mahasun'], 0, "'Mausim' means season."),
    en('The place with the highest average rainfall in the world is', ['Mawsynram', 'Jaisalmer', 'Leh', 'Chennai'], 0, 'Mawsynram is in Meghalaya.', 'easy'),
    en('Tamil Nadu gets most of its winter rainfall from the', ['north-east (retreating) monsoon', 'south-west monsoon', 'western disturbances', 'cyclones only'], 0, 'The retreating monsoon picks up moisture over the Bay of Bengal.', 'medium'),
  ]),
  group('social_science', 10, [
    en('The most widespread forests in India are the', ['tropical deciduous forests', 'tropical evergreen forests', 'mangrove forests', 'montane forests'], 0, 'They are also called monsoon forests.', 'medium'),
    en('The Sundarbans are famous for the', ['Royal Bengal tiger', 'one-horned rhinoceros', 'Asiatic lion', 'snow leopard'], 0, 'The Sundarbans mangroves are home to tigers.', 'easy'),
    en('Mangrove forests grow in', ['tidal coastal areas and deltas', 'deserts', 'high mountains', 'plateaus'], 0, 'They can live in salty, tidal water.'),
  ]),
  group('social_science', 11, [
    en('A census is held in India every', ['5 years', '10 years', '15 years', '20 years'], 1, 'It is held once a decade.', 'easy'),
    en('The most populous state of India is', ['Uttar Pradesh', 'Maharashtra', 'Bihar', 'Tamil Nadu'], 0, 'Uttar Pradesh has the largest population.'),
    en('Sex ratio is the number of females per', ['100 males', '1000 males', '10,000 people', '1000 people'], 1, 'Sex ratio = females per 1000 males.', 'medium'),
  ]),
  group('social_science', 12, [
    en("'Government of the people, by the people, for the people' was said by", ['Abraham Lincoln', 'Mahatma Gandhi', 'Jawaharlal Nehru', 'Winston Churchill'], 0, 'Lincoln said it in the Gettysburg Address (1863).', 'easy'),
    en('Universal adult franchise means', ['every adult citizen has the right to vote', 'only educated people can vote', 'only men can vote', 'only taxpayers can vote'], 0, 'One person, one vote, one value.'),
    en('In a democracy, final decision-making power rests with', ["those elected by the people", 'the army', 'a king', 'foreign powers'], 0, 'Elected representatives answer to the people.', 'medium'),
  ]),
  group('social_science', 13, [
    en('The Constitution of India came into force on', ['15 August 1947', '26 January 1950', '26 November 1949', '2 October 1950'], 1, 'Celebrated as Republic Day.', 'easy'),
    en('The chairman of the Drafting Committee of the Constitution was', ['Dr B. R. Ambedkar', 'Jawaharlal Nehru', 'Dr Rajendra Prasad', 'Sardar Patel'], 0, 'Dr Rajendra Prasad chaired the Constituent Assembly itself.', 'medium'),
    en('The Constituent Assembly first met in', ['December 1946', 'August 1947', 'January 1950', 'March 1945'], 0, 'Its first meeting was on 9 December 1946.', 'hard'),
  ]),
  group('social_science', 14, [
    en('Elections in India are conducted by the', ['Election Commission', 'Supreme Court', 'Prime Minister', 'Parliament'], 0, 'An independent constitutional body.', 'easy'),
    en('The minimum age to vote in India is', ['16 years', '18 years', '21 years', '25 years'], 1, 'Lowered from 21 to 18 in 1989.'),
    en('The number of Lok Sabha constituencies is', ['250', '543', '545', '600'], 1, '543 members are elected.', 'medium'),
  ]),
  group('social_science', 15, [
    en('The head of the government (real executive) in India is the', ['Prime Minister', 'President', 'Chief Justice', 'Speaker'], 0, 'The President is the formal head; the Prime Minister leads the government.', 'medium'),
    en('The highest court of India is the', ['Supreme Court', 'High Court', 'District Court', 'Lok Adalat'], 0, 'It is in New Delhi.', 'easy'),
    en('Indian Parliament has two houses: the Lok Sabha and the', ['Rajya Sabha', 'Vidhan Sabha', 'Gram Sabha', 'Vidhan Parishad'], 0, 'Rajya Sabha is the Council of States.', 'easy'),
  ]),
  group('social_science', 16, [
    en('Dr Ambedkar called which right the heart and soul of the Constitution?', ['Right to Constitutional Remedies', 'Right to Equality', 'Right to Freedom', 'Right to Property'], 0, 'It lets citizens go to court to protect their rights.', 'medium'),
    en('Child labour is banned by the', ['Right against Exploitation', 'Right to Equality', 'Cultural and Educational Rights', 'Right to Freedom of Religion'], 0, 'It forbids employing children in hazardous work.'),
    en('How many Fundamental Rights does the Indian Constitution give?', ['5', '6', '7', '10'], 1, 'Equality, Freedom, against Exploitation, Religion, Cultural & Educational, Constitutional Remedies.', 'medium'),
  ]),
  group('social_science', 17, [
    en('The main production activity in Palampur is', ['farming', 'mining', 'fishing', 'shipbuilding'], 0, 'Most people of Palampur depend on farming.', 'easy'),
    en('Growing more than one crop on the same land in a year is', ['multiple cropping', 'shifting cultivation', 'monoculture', 'mixed farming'], 0, 'Irrigation makes multiple cropping possible.'),
    en('Which is NOT a factor of production?', ['land', 'labour', 'capital', 'weather forecast'], 3, 'Land, labour, physical capital and human capital are factors of production.', 'medium'),
  ]),
  group('social_science', 18, [
    en('Agriculture is part of the', ['primary sector', 'secondary sector', 'tertiary sector', 'service sector'], 0, 'It uses natural resources directly.', 'easy'),
    en('Investment in education and health turns people into', ['human capital', 'physical capital', 'natural resources', 'land'], 0, 'A skilled, healthy population is human capital.'),
    en('When more people work on a farm than are needed, it is', ['disguised unemployment', 'seasonal unemployment', 'full employment', 'educated unemployment'], 0, 'Removing the extra workers would not lower output.', 'medium'),
  ]),
  group('social_science', 19, [
    en('The accepted average calorie requirement in rural India is', ['2400 per person per day', '2100 per person per day', '1800 per person per day', '3000 per person per day'], 0, 'Urban areas use 2100 calories.', 'hard'),
    en('MGNREGA guarantees wage employment for how many days a year?', ['50', '100', '150', '200'], 1, '100 days for each rural household.', 'medium'),
    en('The poverty line measures', ['the minimum level of consumption needed for basic needs', 'the average income of rich people', 'the number of banks', 'the size of the army'], 0, 'People below it cannot meet basic needs.'),
  ]),
  group('social_science', 20, [
    en('PDS stands for', ['Public Distribution System', 'Private Delivery Service', 'Public Development Scheme', 'Primary Dairy Society'], 0, 'Ration shops supply food grains at low prices.', 'easy'),
    en('Food grains for the buffer stock are bought by the', ['Food Corporation of India', 'Reserve Bank of India', 'Election Commission', 'NITI Aayog'], 0, 'The FCI procures wheat and rice from farmers.'),
    en('The Green Revolution greatly increased the production of', ['wheat and rice', 'tea and coffee', 'cotton and jute', 'fish'], 0, 'High-yielding seeds were introduced in the 1960s.', 'medium'),
  ]),
  ...ENGLISH_QUESTIONS.map((qs, i) => group('english', i + 1, qs)),
  ...TAMIL_QUESTIONS.map((qs, i) => group('tamil', i + 1, qs)),
];
