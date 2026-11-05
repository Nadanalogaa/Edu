// Tamil Nadu State Board, 9th Mathematics, Unit 2 – Real Numbers (மெய்யெண்கள்).
// Book exercise / example questions (answers checked against the book's answer key)
// plus our own questions so that every section is covered at three levels.
// source = section or exercise and printed page of the English-medium book.

import { BankQuestion, AR_EN, AR_TA } from './types';

const IMG = '/content/9/state_board/maths/02';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: '§2.2, p. 42', answer: 0,
    en: { q: 'The set of whole numbers 𝕎 is', options: ['{0, 1, 2, 3, …}', '{1, 2, 3, …}', '{…, −2, −1, 0, 1, 2, …}', '{…, −3, −2, −1}'], explanation: 'Whole numbers are the natural numbers together with 0.' },
    ta: { q: 'முழு எண்களின் கணம் 𝕎 என்பது', options: ['{0, 1, 2, 3, …}', '{1, 2, 3, …}', '{…, −2, −1, 0, 1, 2, …}', '{…, −3, −2, −1}'], explanation: 'இயல் எண்களுடன் 0 ஐச் சேர்த்தால் முழு எண்கள்.' },
  },
  {
    difficulty: 'easy', source: '§2.2, p. 43', answer: 0,
    en: { q: 'A rational number is a number that can be written as p/q, where p and q are integers and', options: ['q ≠ 0', 'p ≠ 0', 'p > q', 'q = 1'], explanation: 'A rational number is a quotient of two integers, excluding division by zero.' },
    ta: { q: 'விகிதமுறு எண் என்பது p, q முழுக்களாக இருக்க p/q என எழுதக்கூடிய எண்; இங்கு', options: ['q ≠ 0', 'p ≠ 0', 'p > q', 'q = 1'], explanation: 'விகிதமுறு எண் இரு முழுக்களின் ஈவு; பூச்சியத்தால் வகுத்தல் கூடாது.' },
  },
  {
    difficulty: 'easy', source: '§2.3, p. 45', answer: 0,
    en: { q: 'The hypotenuse of an isosceles right triangle whose equal sides are 1 unit long is', options: ['√2 units', '2 units', '1 unit', '√3 units'], explanation: 'By Pythagoras theorem, the hypotenuse = √(1² + 1²) = √2.' },
    ta: { q: 'சம பக்கங்கள் ஒவ்வொன்றும் 1 அலகு கொண்ட இருசமபக்கச் செங்கோண முக்கோணத்தின் கர்ணம்', options: ['√2 அலகுகள்', '2 அலகுகள்', '1 அலகு', '√3 அலகுகள்'], explanation: 'பிதாகரஸ் தேற்றப்படி கர்ணம் = √(1² + 1²) = √2.' },
  },
  {
    difficulty: 'easy', source: '§2.3, p. 45', answer: 0,
    en: { q: 'A number that cannot be expressed as a ratio of two integers is called', options: ['an irrational number', 'a rational number', 'a whole number', 'an integer'], explanation: 'An irrational number cannot be written as p/q with integers p, q and q ≠ 0.' },
    ta: { q: 'இரு முழுக்களின் விகிதமாக எழுத முடியாத எண்', options: ['விகிதமுறா எண்', 'விகிதமுறு எண்', 'முழு எண்', 'முழுக்கள்'], explanation: 'விகிதமுறா எண்ணை p/q (p, q முழுக்கள், q ≠ 0) என எழுத முடியாது.' },
  },
  {
    difficulty: 'easy', source: '§2.1, p. 41', answer: 0,
    en: { q: 'The scholar credited with identifying surds, who called irrational numbers "inaudible", was', options: ['Al-Khwarizmi', 'Pythagoras', 'Euclid', 'Aryabhata'], explanation: 'Al-Khwarizmi called them "inaudible", later translated into the Latin "surdus" (deaf or mute).' },
    ta: { q: 'விகிதமுறா எண்களைக் "கேட்க இயலாதவை" என்று அழைத்து முறுடுகளை அடையாளம் கண்டவர்', options: ['அல்-குவாரிஸ்மி', 'பிதாகரஸ்', 'யூக்ளிட்', 'ஆரியபட்டா'], explanation: 'அல்-குவாரிஸ்மி அவற்றைக் "கேட்க இயலாதவை" என்றார்; இது பின்னர் லத்தீனில் "surdus" (செவிடு) என மொழிபெயர்க்கப்பட்டது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 2.1 Q1, p. 45', answer: 0, imageUrl: `${IMG}/numberline-ex2-1-q1.png`,
    en: { q: 'Which arrow best shows the position of 11/3 on the number line?', options: ['D', 'C', 'B', 'A'], explanation: '11/3 = 3.67 lies between 3 and 4, closer to 4: arrow D.' },
    ta: { q: 'எண்கோட்டில் 11/3 இன் நிலையைச் சிறப்பாகக் காட்டும் அம்புக்குறி எது?', options: ['D', 'C', 'B', 'A'], explanation: '11/3 = 3.67; இது 3, 4 க்கு இடையே 4 க்கு அருகில் உள்ளது: அம்புக்குறி D.' },
  },
  {
    difficulty: 'easy', source: '§2.3.2, p. 48', answer: 0,
    en: { q: 'The decimal expansion of a rational number is', options: ['either terminating or non-terminating and recurring', 'always terminating', 'non-terminating and non-recurring', 'always non-terminating'], explanation: 'A rational number has a terminating or a non-terminating recurring decimal expansion, and the converse is also true.' },
    ta: { q: 'ஒரு விகிதமுறு எண்ணின் தசம விரிவு', options: ['முடிவுறு அல்லது முடிவுறாச் சுழல் தசம விரிவு', 'எப்போதும் முடிவுறு தசம விரிவு', 'முடிவுறாச் சுழலற்ற தசம விரிவு', 'எப்போதும் முடிவுறாத் தசம விரிவு'], explanation: 'விகிதமுறு எண்ணின் தசம விரிவு முடிவுறு அல்லது முடிவுறாச் சுழல் தசம விரிவு; மறுதலையும் உண்மை.' },
  },
  {
    difficulty: 'easy', source: '§2.3.6, p. 52', answer: 0,
    en: { q: 'A number with a non-terminating and non-recurring decimal expansion is', options: ['an irrational number', 'a rational number', 'an integer', 'a natural number'], explanation: 'Irrational numbers neither terminate nor repeat when written as decimals.' },
    ta: { q: 'முடிவுறாச் சுழலற்ற தசம விரிவைக் கொண்ட எண்', options: ['விகிதமுறா எண்', 'விகிதமுறு எண்', 'முழுக்கள்', 'இயல் எண்'], explanation: 'விகிதமுறா எண்களின் தசம விரிவு முடிவுறாது, சுழலாது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 2.2 Q1(iv), p. 51', answer: 0,
    en: { q: 'The decimal form of 327/200 is', options: ['1.635, a terminating decimal', '1.635 recurring', '16.35, a terminating decimal', '0.1635, a terminating decimal'], explanation: '327/200 = 1635/1000 = 1.635, which terminates.' },
    ta: { q: '327/200 இன் தசம வடிவம்', options: ['1.635, முடிவுறு தசமம்', '1.635 சுழல் தசமம்', '16.35, முடிவுறு தசமம்', '0.1635, முடிவுறு தசமம்'], explanation: '327/200 = 1635/1000 = 1.635; இது முடிவுறு தசமம்.' },
  },
  {
    difficulty: 'easy', source: '§2.4, p. 55', answer: 0,
    en: { q: 'The set of real numbers consists of', options: ['all rational and all irrational numbers', 'all rational numbers only', 'all irrational numbers only', 'all integers and fractions only'], explanation: 'Real numbers = rational numbers ∪ irrational numbers.' },
    ta: { q: 'மெய்யெண்களின் கணம் உள்ளடக்குவது', options: ['அனைத்து விகிதமுறு மற்றும் விகிதமுறா எண்கள்', 'விகிதமுறு எண்கள் மட்டும்', 'விகிதமுறா எண்கள் மட்டும்', 'முழுக்கள், பின்னங்கள் மட்டும்'], explanation: 'மெய்யெண்கள் = விகிதமுறு எண்கள் ∪ விகிதமுறா எண்கள்.' },
  },
  {
    difficulty: 'easy', source: '§2.5, p. 57', answer: 0,
    en: { q: 'In ⁿ√x = r, the number n is called the', options: ['index of the radical', 'radicand', 'coefficient', 'root'], explanation: 'n is the index, x is the radicand and r is the nth root of x.' },
    ta: { q: 'ⁿ√x = r இல் n என்பது', options: ['மூலக்குறியின் அடுக்கு (படி)', 'மூலக்குறிக்குள் உள்ள எண்', 'கெழு', 'மூலம்'], explanation: 'n என்பது அடுக்கு; x மூலக்குறிக்குள் உள்ள எண்; r என்பது x இன் n ஆவது மூலம்.' },
  },
  {
    difficulty: 'easy', source: '§2.5, p. 58', answer: 0,
    en: { q: 'Which of the following is correct?', options: ['√4 = 2', '√4 = ±2', '√4 = −2', '−√4 = 2'], explanation: 'The symbol √ is reserved for the positive root; the negative root is written −√4 = −2.' },
    ta: { q: 'கீழ்க்காண்பனவற்றில் சரியானது எது?', options: ['√4 = 2', '√4 = ±2', '√4 = −2', '−√4 = 2'], explanation: '√ குறி மிகை மூலத்திற்கு மட்டும்; குறை மூலம் −√4 = −2 என எழுதப்படும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 2.5 Q1, p. 59', answer: 0,
    en: { q: '625 written in the form 5ⁿ is', options: ['5⁴', '5³', '5⁵', '5²⁵'], explanation: '625 = 5 × 5 × 5 × 5 = 5⁴.' },
    ta: { q: '625 ஐ 5ⁿ வடிவில் எழுத', options: ['5⁴', '5³', '5⁵', '5²⁵'], explanation: '625 = 5 × 5 × 5 × 5 = 5⁴.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 2.5 Q1, p. 59', answer: 0,
    en: { q: '1/5 written in the form 5ⁿ is', options: ['5⁻¹', '5¹', '5⁰', '5^(1/5)'], explanation: '1/5 = 5⁻¹.' },
    ta: { q: '1/5 ஐ 5ⁿ வடிவில் எழுத', options: ['5⁻¹', '5¹', '5⁰', '5^(1/5)'], explanation: '1/5 = 5⁻¹.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 2.5 Q5, p. 60', answer: 0,
    en: { q: 'The 5th root of 243 is', options: ['3', '5', '9', '81'], explanation: '3⁵ = 243, so ⁵√243 = 3.' },
    ta: { q: '243 இன் 5 ஆவது மூலம்', options: ['3', '5', '9', '81'], explanation: '3⁵ = 243; எனவே ⁵√243 = 3.' },
  },
  {
    difficulty: 'easy', source: '§2.6, p. 60', answer: 0,
    en: { q: 'A surd is', options: ['an irrational root of a rational number', 'any root of a number', 'a rational root of an irrational number', 'any irrational number'], explanation: 'ⁿ√a is a surd when n ∈ ℕ, n > 1, a is rational and ⁿ√a is irrational.' },
    ta: { q: 'முறுடு என்பது', options: ['ஒரு விகிதமுறு எண்ணின் விகிதமுறா மூலம்', 'ஓர் எண்ணின் எந்த மூலமும்', 'ஒரு விகிதமுறா எண்ணின் விகிதமுறு மூலம்', 'எந்த விகிதமுறா எண்ணும்'], explanation: 'n ∈ ℕ, n > 1, a விகிதமுறு எண், ⁿ√a விகிதமுறா எண் எனில் ⁿ√a ஒரு முறுடு.' },
  },
  {
    difficulty: 'easy', source: '§2.6, p. 60', answer: 0,
    en: { q: 'Which of the following is NOT a surd?', options: ['√(1/25)', '√2', '∛3', '√18'], explanation: '√(1/25) = 1/5 is rational, so it is not a surd.' },
    ta: { q: 'கீழ்க்காண்பனவற்றில் எது முறுடு அல்ல?', options: ['√(1/25)', '√2', '∛3', '√18'], explanation: '√(1/25) = 1/5 ஒரு விகிதமுறு எண்; எனவே அது முறுடு அல்ல.' },
  },
  {
    difficulty: 'easy', source: '§2.6.1, p. 61', answer: 0,
    en: { q: 'The order of the surd ⁵√99 is', options: ['5', '99', '2', '1/5'], explanation: 'The order of a surd is the index of the root: here 5.' },
    ta: { q: '⁵√99 என்ற முறுடின் வரிசை', options: ['5', '99', '2', '1/5'], explanation: 'முறுடின் வரிசை என்பது மூலத்தின் அடுக்கு: இங்கு 5.' },
  },
  {
    difficulty: 'easy', source: '§2.7, p. 68', answer: 0,
    en: { q: 'A rationalising factor of √3 is', options: ['√3', '3', '1/3', '√2'], explanation: '√3 × √3 = 3, a rational number.' },
    ta: { q: '√3 இன் ஒரு விகிதப்படுத்தும் காரணி', options: ['√3', '3', '1/3', '√2'], explanation: '√3 × √3 = 3, ஒரு விகிதமுறு எண்.' },
  },
  {
    difficulty: 'easy', source: '§2.7.1, p. 69', answer: 0,
    en: { q: 'The conjugate of the surd 3 + √2 is', options: ['3 − √2', '−3 + √2', '3 + √2', '√3 + 2'], explanation: 'A conjugate is obtained by changing the sign in front of the surd: (3 + √2)(3 − √2) = 7.' },
    ta: { q: '3 + √2 இன் இணை முறுடு', options: ['3 − √2', '−3 + √2', '3 + √2', '√3 + 2'], explanation: 'முறுடின் முன் உள்ள குறியை மாற்ற இணை முறுடு கிடைக்கும்: (3 + √2)(3 − √2) = 7.' },
  },
  {
    difficulty: 'easy', source: '§2.8.1, p. 71', answer: 0,
    en: { q: 'In scientific notation a number N is written as a × 10ⁿ, where n is an integer and', options: ['1 ≤ a < 10', '0 < a < 1', '1 < a ≤ 10', '0 ≤ a < 100'], explanation: 'Exactly one non-zero digit is kept before the decimal point, so 1 ≤ a < 10.' },
    ta: { q: 'அறிவியல் குறியீட்டில் N = a × 10ⁿ (n ஒரு முழு) என எழுதும்போது', options: ['1 ≤ a < 10', '0 < a < 1', '1 < a ≤ 10', '0 ≤ a < 100'], explanation: 'தசமப் புள்ளிக்கு இடப்புறம் பூச்சியமற்ற ஓர் இலக்கம் மட்டும் இருக்கும்; எனவே 1 ≤ a < 10.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 2.9 Q2, p. 74', answer: 0,
    en: { q: 'Which of the following is NOT true?', options: ['Every real number is an irrational number.', 'Every rational number is a real number.', 'Every integer is a rational number.', 'Every natural number is a whole number.'], explanation: 'Real numbers include rational numbers such as 2 or 1/2, so not every real number is irrational.' },
    ta: { q: 'பின்வருவனவற்றுள் எது உண்மையல்ல?', options: ['ஒவ்வொரு மெய்யெண்ணும் விகிதமுறா எண்.', 'ஒவ்வொரு விகிதமுறு எண்ணும் மெய்யெண்.', 'ஒவ்வொரு முழுக்களும் விகிதமுறு எண்.', 'ஒவ்வோர் இயல் எண்ணும் ஒரு முழு எண்.'], explanation: '2, 1/2 போன்ற விகிதமுறு எண்களும் மெய்யெண்கள்; எனவே எல்லா மெய்யெண்களும் விகிதமுறா எண்கள் அல்ல.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 2.9 Q5, p. 75', answer: 0,
    en: { q: 'Which one of the following is an irrational number?', options: ['π', '√25', '√(9/4)', '7/11'], explanation: '√25 = 5 and √(9/4) = 3/2 are rational; π is irrational.' },
    ta: { q: 'பின்வருவனவற்றுள் எது விகிதமுறா எண்?', options: ['π', '√25', '√(9/4)', '7/11'], explanation: '√25 = 5, √(9/4) = 3/2 விகிதமுறு எண்கள்; π விகிதமுறா எண்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 2.9 Q12, p. 75', answer: 0,
    en: { q: 'Which one of the following is NOT a rational number?', options: ['√13', '√(8/18)', '7/3', '√0.01'], explanation: '√(8/18) = 2/3 and √0.01 = 0.1 are rational; 13 is not a perfect square.' },
    ta: { q: 'பின்வருவனவற்றுள் எது விகிதமுறு எண் அல்ல?', options: ['√13', '√(8/18)', '7/3', '√0.01'], explanation: '√(8/18) = 2/3, √0.01 = 0.1 விகிதமுறு எண்கள்; 13 முழு வர்க்கம் அல்ல.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 2.9 Q11, p. 75', answer: 0,
    en: { q: 'Which of the following statements is false?', options: ['√25 = ±5', 'The square root of 25 is 5 or −5', '√25 = 5', '−√25 = −5'], explanation: '25 has two square roots, but the symbol √25 means only the positive root 5.' },
    ta: { q: 'கீழ்க்காணும் கூற்றுகளில் எது தவறு?', options: ['√25 = ±5', '25 இன் வர்க்கமூலம் 5 அல்லது −5', '√25 = 5', '−√25 = −5'], explanation: '25 க்கு இரு வர்க்கமூலங்கள் உண்டு; ஆனால் √25 என்பது மிகை மூலம் 5 ஐ மட்டும் குறிக்கும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 2.9 Q14, p. 75', answer: 0,
    en: { q: 'If √80 = k√5, then k is', options: ['4', '2', '8', '16'], explanation: '√80 = √(16 × 5) = 4√5.' },
    ta: { q: '√80 = k√5 எனில் k =', options: ['4', '2', '8', '16'], explanation: '√80 = √(16 × 5) = 4√5.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 2.8 Q2, p. 73', answer: 0,
    en: { q: '3.459 × 10⁶ in decimal form is', options: ['3459000', '345900', '34590000', '0.000003459'], explanation: 'Move the decimal point 6 places to the right: 3459000.' },
    ta: { q: '3.459 × 10⁶ இன் தசம வடிவம்', options: ['3459000', '345900', '34590000', '0.000003459'], explanation: 'தசமப் புள்ளியை 6 இடங்கள் வலப்புறம் நகர்த்த 3459000.' },
  },
  // ---------------------------------------------------------------- Medium
  {
    difficulty: 'medium', source: 'Book example 2.1, p. 44', answer: 0,
    en: { q: 'The average (midpoint) of 1/2 and 2/3, a rational number between them, is', options: ['7/12', '3/5', '7/6', '1/6'], explanation: '(1/2 + 2/3) ÷ 2 = (7/6) ÷ 2 = 7/12.' },
    ta: { q: '1/2, 2/3 இன் சராசரி (அவற்றுக்கிடையே உள்ள ஒரு விகிதமுறு எண்)', options: ['7/12', '3/5', '7/6', '1/6'], explanation: '(1/2 + 2/3) ÷ 2 = (7/6) ÷ 2 = 7/12.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.1 Q2, p. 45', answer: 0,
    en: { q: 'Which of the following rational numbers lies between −7/11 and 2/11?', options: ['−5/11', '−8/11', '3/11', '−1'], explanation: '−7/11 < −5/11 < 2/11; −8/11 and −1 are smaller than −7/11, and 3/11 is larger than 2/11.' },
    ta: { q: '−7/11, 2/11 க்கு இடையே உள்ள விகிதமுறு எண் எது?', options: ['−5/11', '−8/11', '3/11', '−1'], explanation: '−7/11 < −5/11 < 2/11; −8/11, −1 ஆகியவை −7/11 ஐ விடச் சிறியவை; 3/11 பெரியது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.1 Q3(i), p. 45', answer: 0,
    en: { q: 'Which of the following lies between 1/5 and 1/4?', options: ['9/40', '1/6', '3/10', '1/9'], explanation: '1/5 = 8/40 and 1/4 = 10/40, so 9/40 lies between them.' },
    ta: { q: '1/5, 1/4 க்கு இடையே உள்ளது எது?', options: ['9/40', '1/6', '3/10', '1/9'], explanation: '1/5 = 8/40, 1/4 = 10/40; எனவே 9/40 இடையே உள்ளது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.1 Q3(ii), p. 45', answer: 0,
    en: { q: 'Which of the following lies between 0.1 and 0.11?', options: ['0.105', '0.0105', '0.111', '0.12'], explanation: '0.100 < 0.105 < 0.110.' },
    ta: { q: '0.1, 0.11 க்கு இடையே உள்ளது எது?', options: ['0.105', '0.0105', '0.111', '0.12'], explanation: '0.100 < 0.105 < 0.110.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.1 Q3(iii), p. 45', answer: 0,
    en: { q: 'Which of the following lies between −2 and −1?', options: ['−3/2', '−5/2', '−1/2', '−7/3'], explanation: '−3/2 = −1.5 lies between −2 and −1; −5/2 and −7/3 are less than −2.' },
    ta: { q: '−2, −1 க்கு இடையே உள்ளது எது?', options: ['−3/2', '−5/2', '−1/2', '−7/3'], explanation: '−3/2 = −1.5; −5/2, −7/3 ஆகியவை −2 ஐ விடச் சிறியவை.' },
  },
  {
    difficulty: 'medium', source: '§2.2.1, p. 44', answer: 0,
    en: { q: 'If p/q < r/s are two rational numbers, then a rational number between them is', options: ['(p + r)/(q + s)', '(p + q)/(r + s)', '(p × r)/(q × s)', '(p − r)/(q − s)'], explanation: 'The book result: p/q < (p + r)/(q + s) < r/s.' },
    ta: { q: 'p/q < r/s என்ற இரு விகிதமுறு எண்களுக்கு இடையே உள்ள ஒரு விகிதமுறு எண்', options: ['(p + r)/(q + s)', '(p + q)/(r + s)', '(p × r)/(q × s)', '(p − r)/(q − s)'], explanation: 'பாடநூல் முடிவு: p/q < (p + r)/(q + s) < r/s.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.2 Q1(i), p. 51', answer: 0,
    en: { q: '2/7 in decimal form is', options: ['0.285714285714… (non-terminating, recurring)', '0.2857 (terminating)', '0.272727… (non-terminating, recurring)', '0.285714 (terminating)'], explanation: '2/7 = 0.285714 with the block 285714 repeating.' },
    ta: { q: '2/7 இன் தசம வடிவம்', options: ['0.285714285714… (முடிவுறாச் சுழல்)', '0.2857 (முடிவுறு)', '0.272727… (முடிவுறாச் சுழல்)', '0.285714 (முடிவுறு)'], explanation: '2/7 = 0.285714…; 285714 என்ற தொகுதி மீண்டும் மீண்டும் வரும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.2 Q1(ii), p. 51', answer: 0,
    en: { q: 'The decimal form of −5 3/11 is', options: ['−5.272727…', '−5.2727 (terminating)', '−5.333…', '−5.0303…'], explanation: '3/11 = 0.2727…, so −5 3/11 = −5.272727…, non-terminating and recurring.' },
    ta: { q: '−5 3/11 இன் தசம வடிவம்', options: ['−5.272727…', '−5.2727 (முடிவுறு)', '−5.333…', '−5.0303…'], explanation: '3/11 = 0.2727…; எனவே −5 3/11 = −5.272727…, முடிவுறாச் சுழல்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.2 Q2, p. 51', answer: 0,
    en: { q: '1/13 = 0.076923076923… The length of the period of this decimal is', options: ['6', '13', '5', '12'], explanation: 'The repeating block 076923 has 6 digits.' },
    ta: { q: '1/13 = 0.076923076923… இதில் மீண்டும் வரும் இலக்கத் தொகுதியின் நீளம்', options: ['6', '13', '5', '12'], explanation: 'மீண்டும் வரும் தொகுதி 076923 இல் 6 இலக்கங்கள்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.2 Q3, p. 52', answer: 0,
    en: { q: 'Using 1/11 = 0.090909…, the recurring decimal form of 71/33 is', options: ['2.151515…', '2.1515 (terminating)', '2.030303…', '2.15151 (terminating)'], explanation: '1/33 = (1/3)(1/11) = 0.0303…; 71/33 = 2 + 5/33 = 2 + 0.1515… = 2.1515…' },
    ta: { q: '1/11 = 0.090909… ஐப் பயன்படுத்தி 71/33 இன் சுழல் தசம வடிவம்', options: ['2.151515…', '2.1515 (முடிவுறு)', '2.030303…', '2.15151 (முடிவுறு)'], explanation: '1/33 = 0.0303…; 71/33 = 2 + 5/33 = 2 + 0.1515… = 2.1515…' },
  },
  {
    difficulty: 'medium', source: 'Book example 2.3, p. 48', answer: 0,
    en: { q: 'Using 1/3 = 0.333…, the value of 1/27 is', options: ['0.037037…', '0.0333…', '0.111…', '0.027027…'], explanation: '1/27 = (1/9) × (1/3) = 0.111… ÷ 3 = 0.037037…' },
    ta: { q: '1/3 = 0.333… ஐப் பயன்படுத்தி 1/27 இன் மதிப்பு', options: ['0.037037…', '0.0333…', '0.111…', '0.027027…'], explanation: '1/27 = (1/9) × (1/3) = 0.037037…' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.2 Q4(i), p. 52', answer: 0,
    en: { q: '0.242424… expressed as a rational number is', options: ['8/33', '24/100', '6/25', '12/49'], explanation: 'x = 0.2424…, 100x = 24.2424…, so 99x = 24 and x = 24/99 = 8/33.' },
    ta: { q: '0.242424… ஐ விகிதமுறு எண்ணாக எழுத', options: ['8/33', '24/100', '6/25', '12/49'], explanation: 'x = 0.2424…, 100x = 24.2424…; 99x = 24; x = 24/99 = 8/33.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.2 Q4(iii), p. 52', answer: 0,
    en: { q: '−5.132 expressed as a rational number is', options: ['−1283/250', '−5132/100', '−1283/25', '−5132/999'], explanation: '−5.132 = −5132/1000 = −1283/250.' },
    ta: { q: '−5.132 ஐ விகிதமுறு எண்ணாக எழுத', options: ['−1283/250', '−5132/100', '−1283/25', '−5132/999'], explanation: '−5.132 = −5132/1000 = −1283/250.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.2 Q4(iv), p. 52', answer: 0,
    en: { q: '3.1777… (only 7 repeating) expressed as a rational number is', options: ['143/45', '317/100', '143/90', '317/99'], explanation: 'x = 3.1777…; 10x = 31.777…, 100x = 317.777…; 90x = 286, x = 286/90 = 143/45.' },
    ta: { q: '3.1777… (7 மட்டும் சுழல்கிறது) ஐ விகிதமுறு எண்ணாக எழுத', options: ['143/45', '317/100', '143/90', '317/99'], explanation: 'x = 3.1777…; 10x = 31.777…, 100x = 317.777…; 90x = 286; x = 286/90 = 143/45.' },
  },
  {
    difficulty: 'medium', source: 'Book example 2.4, p. 49', answer: 0,
    en: { q: '2.176 in the form p/q is', options: ['272/125', '2176/100', '544/125', '2176/999'], explanation: '2.176 = 2176/1000 = 272/125.' },
    ta: { q: '2.176 ஐ p/q வடிவில் எழுத', options: ['272/125', '2176/100', '544/125', '2176/999'], explanation: '2.176 = 2176/1000 = 272/125.' },
  },
  {
    difficulty: 'medium', source: 'Book example 2.5, p. 50', answer: 0,
    en: { q: '0.4555… (only 5 repeating) in the form p/q is', options: ['41/90', '45/99', '41/99', '9/20'], explanation: '10x = 4.555…, 100x = 45.555…; 90x = 41, so x = 41/90.' },
    ta: { q: '0.4555… (5 மட்டும் சுழல்கிறது) ஐ p/q வடிவில் எழுத', options: ['41/90', '45/99', '41/99', '9/20'], explanation: '10x = 4.555…, 100x = 45.555…; 90x = 41; x = 41/90.' },
  },
  {
    difficulty: 'medium', source: 'Book example 2.7, p. 51', answer: 0,
    en: { q: '0.999… (9 repeating) is equal to', options: ['1', '0.9', '9/10', '99/100'], explanation: 'x = 0.999…, 10x = 9.999…, so 9x = 9 and x = 1.' },
    ta: { q: '0.999… (9 சுழல்கிறது) க்குச் சமமானது', options: ['1', '0.9', '9/10', '99/100'], explanation: 'x = 0.999…, 10x = 9.999…; 9x = 9; x = 1.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.2 Q5, p. 52', answer: 0,
    en: { q: 'Without actual division, which of the following has a terminating decimal expansion?', options: ['21/15', '4 9/35', '219/2200', '1/3'], explanation: '21/15 = 7/5, whose denominator is a power of 5 only. 35 = 5 × 7, 2200 = 2³ × 5² × 11 and 3 contain other primes.' },
    ta: { q: 'வகுத்தல் செய்யாமல், கீழ்க்காண்பனவற்றில் முடிவுறு தசம விரிவு உடையது எது?', options: ['21/15', '4 9/35', '219/2200', '1/3'], explanation: '21/15 = 7/5; பகுதி 5 இன் அடுக்கு மட்டும். 35 = 5 × 7, 2200 = 2³ × 5² × 11, 3 ஆகியவற்றில் வேறு பகா எண்கள் உள்ளன.' },
  },
  {
    difficulty: 'medium', source: 'Book example 2.6, p. 51', answer: 0,
    en: { q: 'Without actual division, 43/375 has', options: ['a non-terminating recurring decimal expansion', 'a terminating decimal expansion', 'a non-terminating non-recurring expansion', 'an expansion with exactly three decimal places'], explanation: '375 = 3 × 5³ contains the prime 3, so the decimal does not terminate (but recurs, as it is rational).' },
    ta: { q: 'வகுத்தல் செய்யாமல், 43/375 இன் தசம விரிவு', options: ['முடிவுறாச் சுழல் தசம விரிவு', 'முடிவுறு தசம விரிவு', 'முடிவுறாச் சுழலற்ற விரிவு', 'சரியாக மூன்று தசம இடங்கள் கொண்ட விரிவு'], explanation: '375 = 3 × 5³; இதில் 3 உள்ளதால் தசமம் முடிவுறாது; விகிதமுறு எண் என்பதால் சுழலும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.9 Q4, p. 74', answer: 0,
    en: { q: 'Which one of the following has a terminating decimal expansion?', options: ['5/64', '8/9', '14/15', '1/12'], explanation: '64 = 2⁶ has only the prime factor 2; the others have the factor 3.' },
    ta: { q: 'பின்வருவனவற்றுள் எது முடிவுறு தசமத் தீர்வு?', options: ['5/64', '8/9', '14/15', '1/12'], explanation: '64 = 2⁶; இதில் 2 மட்டும் பகாக் காரணி; மற்றவற்றில் 3 உள்ளது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.9 Q6, p. 75', answer: 0,
    en: { q: 'An irrational number between 2 and 2.5 is', options: ['√5', '√11', '√2.5', '√8'], explanation: '2² = 4 and 2.5² = 6.25, so we need √x with 4 < x < 6.25: √5 ≈ 2.236.' },
    ta: { q: '2, 2.5 என்ற எண்களுக்கிடையே உள்ள ஒரு விகிதமுறா எண்', options: ['√5', '√11', '√2.5', '√8'], explanation: '2² = 4, 2.5² = 6.25; எனவே 4 < x < 6.25 ஆக √x வேண்டும்: √5 ≈ 2.236.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.9 Q7, p. 75', answer: 0,
    en: { q: 'The smallest rational number by which 1/3 should be multiplied so that its decimal expansion terminates with one place of decimal is', options: ['3/10', '1/10', '3', '30'], explanation: '(1/3) × (3/10) = 1/10 = 0.1.' },
    ta: { q: '1/3 ஐ எந்த மிகச் சிறிய விகிதமுறு எண்ணால் பெருக்கினால் அதன் தசம விரிவு ஓர் இலக்கத்தோடு முடிவுறு தசம விரிவாக அமையும்?', options: ['3/10', '1/10', '3', '30'], explanation: '(1/3) × (3/10) = 1/10 = 0.1.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.9 Q8, p. 75', answer: 0,
    en: { q: 'If 1/7 = 0.142857142857…, then 5/7 is', options: ['0.714285714285…', '0.142857142857…', '0.571428571428…', '0.714285 (terminating)'], explanation: '5/7 = 5 × 0.142857… = 0.714285714285…' },
    ta: { q: '1/7 = 0.142857142857… எனில் 5/7 இன் மதிப்பு', options: ['0.714285714285…', '0.142857142857…', '0.571428571428…', '0.714285 (முடிவுறு)'], explanation: '5/7 = 5 × 0.142857… = 0.714285714285…' },
  },
  {
    difficulty: 'medium', source: 'Book example 2.9, p. 53', answer: 0,
    en: { q: 'Which of the following is an irrational number?', options: ['2.505500555…', '√49', '0.025', '0.7666…'], explanation: '2.505500555… neither terminates nor repeats; √49 = 7, 0.025 terminates and 0.7666… recurs.' },
    ta: { q: 'கீழ்க்காண்பனவற்றில் எது விகிதமுறா எண்?', options: ['2.505500555…', '√49', '0.025', '0.7666…'], explanation: '2.505500555… முடிவுறாது, சுழலாது; √49 = 7, 0.025 முடிவுறு, 0.7666… சுழல் தசமம்.' },
  },
  {
    difficulty: 'medium', source: 'Book example 2.9(vi), p. 53', answer: 0,
    en: { q: 'The number 2/√2 is', options: ['irrational, because 2/√2 = √2', 'rational, because it is of the form p/q', 'rational, because 2/√2 = 1', 'an integer'], explanation: '2/√2 = √2; p/q form needs both p and q to be integers, and √2 is not.' },
    ta: { q: '2/√2 என்ற எண்', options: ['விகிதமுறா எண்; ஏனெனில் 2/√2 = √2', 'விகிதமுறு எண்; ஏனெனில் அது p/q வடிவில் உள்ளது', 'விகிதமுறு எண்; ஏனெனில் 2/√2 = 1', 'ஒரு முழுக்கள்'], explanation: '2/√2 = √2; p/q வடிவில் p, q இரண்டும் முழுக்களாக இருக்க வேண்டும்; √2 முழுக்கள் அல்ல.' },
  },
  {
    difficulty: 'medium', source: 'Book example 2.10, p. 53', answer: 0,
    en: { q: 'Which of the following is an irrational number between 0.12 and 0.13?', options: ['0.12010010001…', '0.125', '0.121212…', '0.13'], explanation: '0.12010010001… is non-terminating and non-recurring; 0.125 and 0.1212… are rational.' },
    ta: { q: '0.12, 0.13 க்கு இடையே உள்ள விகிதமுறா எண் எது?', options: ['0.12010010001…', '0.125', '0.121212…', '0.13'], explanation: '0.12010010001… முடிவுறாது, சுழலாது; 0.125, 0.1212… விகிதமுறு எண்கள்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.3 Q3, p. 55', answer: 0,
    en: { q: 'A rational number between 2.2360679… and 2.236505500… is', options: ['2.2362', '2.2360', '2.2366', '2.23606791…'], explanation: '2.2360679… < 2.2362 < 2.2365055…, and 2.2362 terminates.' },
    ta: { q: '2.2360679…, 2.236505500… க்கு இடையே உள்ள ஒரு விகிதமுறு எண்', options: ['2.2362', '2.2360', '2.2366', '2.23606791…'], explanation: '2.2360679… < 2.2362 < 2.2365055…; 2.2362 முடிவுறு தசமம்.' },
  },
  {
    difficulty: 'medium', source: 'Book example 2.11, p. 54', answer: 0,
    en: { q: 'A rational number lying between the irrational numbers 0.5151151115… and 0.5353353335… is', options: ['0.5252', '0.5', '0.5454', '0.5151151115…'], explanation: '0.5151… < 0.5252 < 0.5353…, and 0.5252 terminates, so it is rational.' },
    ta: { q: '0.5151151115…, 0.5353353335… என்ற விகிதமுறா எண்களுக்கிடையே உள்ள ஒரு விகிதமுறு எண்', options: ['0.5252', '0.5', '0.5454', '0.5151151115…'], explanation: '0.5151… < 0.5252 < 0.5353…; 0.5252 முடிவுறு தசமம்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.4 Q1(ii), p. 57', answer: 0,
    en: { q: '6.444… (4 repeating) correct to 3 decimal places, as used to mark it on the number line, is', options: ['6.444', '6.445', '6.44', '6.4'], explanation: '6.4444… to three places is 6.444 (the next digit 4 does not round up).' },
    ta: { q: '6.444… (4 சுழல்கிறது) ஐ எண்கோட்டில் குறிக்க மூன்று தசம இடங்கள் வரை திருத்தமாக எழுத', options: ['6.444', '6.445', '6.44', '6.4'], explanation: '6.4444… மூன்று தசம இடங்கள் வரை 6.444.' },
  },
  {
    difficulty: 'medium', source: 'Book example 2.14, p. 56', answer: 0,
    en: { q: 'While locating 4.863 on the number line by successive magnification, the final step divides the interval', options: ['from 4.86 to 4.87 into 10 equal parts', 'from 4.8 to 4.9 into 10 equal parts', 'from 4 to 5 into 100 equal parts', 'from 4.863 to 4.864 into 10 equal parts'], explanation: '4.863 lies between 4.86 and 4.87; it is the third mark to the right of 4.86.' },
    ta: { q: 'தொடர் உருப்பெருக்கம் மூலம் 4.863 ஐ எண்கோட்டில் குறிக்கும்போது கடைசிப் படியில் பிரிக்கப்படும் இடைவெளி', options: ['4.86 முதல் 4.87 வரை 10 சம பாகங்கள்', '4.8 முதல் 4.9 வரை 10 சம பாகங்கள்', '4 முதல் 5 வரை 100 சம பாகங்கள்', '4.863 முதல் 4.864 வரை 10 சம பாகங்கள்'], explanation: '4.863 ஆனது 4.86, 4.87 க்கு இடையே உள்ளது; 4.86 இலிருந்து வலப்புறம் மூன்றாவது குறி.' },
  },
  {
    difficulty: 'medium', source: 'Book example 2.16, p. 59', answer: 0,
    en: { q: '√8 written in the form 2ⁿ is', options: ['2^(3/2)', '2³', '2^(1/2)', '2^(2/3)'], explanation: '√8 = (2³)^(1/2) = 2^(3/2).' },
    ta: { q: '√8 ஐ 2ⁿ வடிவில் எழுத', options: ['2^(3/2)', '2³', '2^(1/2)', '2^(2/3)'], explanation: '√8 = (2³)^(1/2) = 2^(3/2).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.5 Q1(iv), p. 59', answer: 0,
    en: { q: '√125 written in the form 5ⁿ is', options: ['5^(3/2)', '5³', '5^(2/3)', '5^(1/2)'], explanation: '√125 = (5³)^(1/2) = 5^(3/2).' },
    ta: { q: '√125 ஐ 5ⁿ வடிவில் எழுத', options: ['5^(3/2)', '5³', '5^(2/3)', '5^(1/2)'], explanation: '√125 = (5³)^(1/2) = 5^(3/2).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.5 Q2, p. 59', answer: 0,
    en: { q: '32 written in the form 4ⁿ is', options: ['4^(5/2)', '4^(5/4)', '4⁸', '4^(3/2)'], explanation: '32 = 2⁵ = (4^(1/2))⁵ = 4^(5/2).' },
    ta: { q: '32 ஐ 4ⁿ வடிவில் எழுத', options: ['4^(5/2)', '4^(5/4)', '4⁸', '4^(3/2)'], explanation: '32 = 2⁵ = (4^(1/2))⁵ = 4^(5/2).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.5 Q3(ii), p. 59', answer: 0,
    en: { q: 'The value of (243)^(2/5) is', options: ['9', '3', '27', '81'], explanation: '⁵√243 = 3, and 3² = 9.' },
    ta: { q: '(243)^(2/5) இன் மதிப்பு', options: ['9', '3', '27', '81'], explanation: '⁵√243 = 3; 3² = 9.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.5 Q3(iii), p. 59', answer: 0,
    en: { q: 'The value of 9^(−3/2) is', options: ['1/27', '27', '−27', '1/9'], explanation: '9^(3/2) = (√9)³ = 27, so 9^(−3/2) = 1/27.' },
    ta: { q: '9^(−3/2) இன் மதிப்பு', options: ['1/27', '27', '−27', '1/9'], explanation: '9^(3/2) = (√9)³ = 27; எனவே 9^(−3/2) = 1/27.' },
  },
  {
    difficulty: 'medium', source: 'Book example 2.17, p. 59', answer: 0,
    en: { q: 'The value of 64^(−2/3) is', options: ['1/16', '16', '1/8', '−16'], explanation: '∛64 = 4, 4² = 16, and the negative index gives 1/16.' },
    ta: { q: '64^(−2/3) இன் மதிப்பு', options: ['1/16', '16', '1/8', '−16'], explanation: '∛64 = 4; 4² = 16; குறை அடுக்கு 1/16 ஐத் தரும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.5 Q4(iii), p. 59', answer: 0,
    en: { q: '(∛49)⁵ written with a fractional index is', options: ['7^(10/3)', '7^(5/3)', '49^(3/5)', '7^(15/2)'], explanation: '(∛49)⁵ = 49^(5/3) = (7²)^(5/3) = 7^(10/3).' },
    ta: { q: '(∛49)⁵ ஐப் பின்ன அடுக்கைப் பயன்படுத்தி எழுத', options: ['7^(10/3)', '7^(5/3)', '49^(3/5)', '7^(15/2)'], explanation: '(∛49)⁵ = 49^(5/3) = (7²)^(5/3) = 7^(10/3).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.5 Q5(iv), p. 60', answer: 0,
    en: { q: 'The 5th root of 1024/3125 is', options: ['4/5', '2/5', '4/25', '5/4'], explanation: '1024 = 4⁵ and 3125 = 5⁵, so the 5th root is 4/5.' },
    ta: { q: '1024/3125 இன் 5 ஆவது மூலம்', options: ['4/5', '2/5', '4/25', '5/4'], explanation: '1024 = 4⁵, 3125 = 5⁵; எனவே 5 ஆவது மூலம் 4/5.' },
  },
  {
    difficulty: 'medium', source: 'Book example 2.19, p. 62', answer: 0,
    en: { q: 'The simplest form of ∛192 is', options: ['4∛3', '8∛3', '3∛4', '4∛12'], explanation: '192 = 64 × 3 = 4³ × 3, so ∛192 = 4∛3.' },
    ta: { q: '∛192 இன் எளிய வடிவம்', options: ['4∛3', '8∛3', '3∛4', '4∛12'], explanation: '192 = 4³ × 3; எனவே ∛192 = 4∛3.' },
  },
  {
    difficulty: 'medium', source: 'Book example 2.21, p. 63', answer: 0,
    en: { q: 'In its simplest form, ∛108 has order, radicand and coefficient respectively', options: ['3, 4, 3', '3, 108, 1', '2, 3, 6', '3, 3, 4'], explanation: '∛108 = ∛(27 × 4) = 3∛4: order 3, radicand 4, coefficient 3.' },
    ta: { q: 'எளிய வடிவில் ∛108 இன் வரிசை, மூலக்குறிக்குள் உள்ள எண், கெழு ஆகியவை முறையே', options: ['3, 4, 3', '3, 108, 1', '2, 3, 6', '3, 3, 4'], explanation: '∛108 = ∛(27 × 4) = 3∛4: வரிசை 3, உள்ளே உள்ள எண் 4, கெழு 3.' },
  },
  {
    difficulty: 'medium', source: '§2.6.1, p. 62', answer: 0,
    en: { q: 'Which of the following is a mixed surd?', options: ['5√3', '√3', '⁷√4', '∛6'], explanation: 'A mixed surd has a coefficient other than 1 in its simplest form; √3, ⁷√4 and ∛6 are pure surds.' },
    ta: { q: 'கீழ்க்காண்பனவற்றில் எது கலப்பு முறுடு?', options: ['5√3', '√3', '⁷√4', '∛6'], explanation: 'எளிய வடிவில் கெழு 1 அல்லாத முறுடு கலப்பு முறுடு; √3, ⁷√4, ∛6 தூய முறுடுகள்.' },
  },
  {
    difficulty: 'medium', source: '§2.6.1, p. 63', answer: 0,
    en: { q: '5 + √3 is an example of a', options: ['binomial (compound) surd', 'pure surd', 'simple surd', 'rational number'], explanation: 'It is the algebraic sum of two terms, one a surd, so it is a binomial (compound) surd.' },
    ta: { q: '5 + √3 என்பது', options: ['ஈருறுப்பு (கூட்டு) முறுடு', 'தூய முறுடு', 'தனி முறுடு', 'விகிதமுறு எண்'], explanation: 'இது இரு உறுப்புகளின் இயற்கணிதக் கூடுதல்; ஒன்று முறுடு; எனவே ஈருறுப்பு முறுடு.' },
  },
  {
    difficulty: 'medium', source: '§2.6.2, p. 63', answer: 0,
    en: { q: 'For positive rationals a, b and a positive integer n, ⁿ√a × ⁿ√b equals', options: ['ⁿ√(ab)', 'ⁿ√(a + b)', '²ⁿ√(ab)', 'ⁿ√a + ⁿ√b'], explanation: 'This is a law of radicals: ⁿ√a × ⁿ√b = ⁿ√(ab).' },
    ta: { q: 'a, b மிகை விகிதமுறு எண்கள், n மிகை முழு எனில் ⁿ√a × ⁿ√b =', options: ['ⁿ√(ab)', 'ⁿ√(a + b)', '²ⁿ√(ab)', 'ⁿ√a + ⁿ√b'], explanation: 'மூலக்குறி விதி: ⁿ√a × ⁿ√b = ⁿ√(ab).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.6 Q1(i), p. 68', answer: 0,
    en: { q: '5√3 + 18√3 − 2√3 =', options: ['21√3', '25√3', '19√3', '21√9'], explanation: 'Like surds: (5 + 18 − 2)√3 = 21√3.' },
    ta: { q: '5√3 + 18√3 − 2√3 =', options: ['21√3', '25√3', '19√3', '21√9'], explanation: 'ஒத்த முறுடுகள்: (5 + 18 − 2)√3 = 21√3.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.6 Q1(iii), p. 68', answer: 0,
    en: { q: '3√75 + 5√48 − √243 =', options: ['26√3', '44√3', '8√3', '26√6'], explanation: '3(5√3) + 5(4√3) − 9√3 = 15√3 + 20√3 − 9√3 = 26√3.' },
    ta: { q: '3√75 + 5√48 − √243 =', options: ['26√3', '44√3', '8√3', '26√6'], explanation: '3(5√3) + 5(4√3) − 9√3 = 26√3.' },
  },
  {
    difficulty: 'medium', source: 'Book example 2.23, p. 65', answer: 0,
    en: { q: '√63 − √175 + √28 =', options: ['0', '10√7', '−√7', '√84'], explanation: '3√7 − 5√7 + 2√7 = 0.' },
    ta: { q: '√63 − √175 + √28 =', options: ['0', '10√7', '−√7', '√84'], explanation: '3√7 − 5√7 + 2√7 = 0.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.6 Q2, p. 68', answer: 0,
    en: { q: '∛27 × ∛8 × ∛125 =', options: ['30', '160', '10', '∛160'], explanation: '3 × 2 × 5 = 30.' },
    ta: { q: '∛27 × ∛8 × ∛125 =', options: ['30', '160', '10', '∛160'], explanation: '3 × 2 × 5 = 30.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.6 Q2(iv), p. 68', answer: 0,
    en: { q: '(7√a − 5√b)(7√a + 5√b) =', options: ['49a − 25b', '49a + 25b', '7a − 5b', '49a − 70√(ab) − 25b'], explanation: '(x − y)(x + y) = x² − y² gives 49a − 25b.' },
    ta: { q: '(7√a − 5√b)(7√a + 5√b) =', options: ['49a − 25b', '49a + 25b', '7a − 5b', '49a − 70√(ab) − 25b'], explanation: '(x − y)(x + y) = x² − y²; எனவே 49a − 25b.' },
  },
  {
    difficulty: 'medium', source: 'Book example 2.24, p. 66', answer: 0,
    en: { q: '∛40 × ∛16 =', options: ['4∛10', '2∛10', '8∛5', '∛56'], explanation: '∛640 = ∛(64 × 10) = 4∛10.' },
    ta: { q: '∛40 × ∛16 =', options: ['4∛10', '2∛10', '8∛5', '∛56'], explanation: '∛640 = ∛(64 × 10) = 4∛10.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.9 Q13, p. 75', answer: 0,
    en: { q: '√27 + √12 =', options: ['5√3', '√39', '5√6', '3√5'], explanation: '3√3 + 2√3 = 5√3; surds cannot be added under one root.' },
    ta: { q: '√27 + √12 =', options: ['5√3', '√39', '5√6', '3√5'], explanation: '3√3 + 2√3 = 5√3; முறுடுகளை ஒரே மூலக்குறிக்குள் கூட்ட முடியாது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.9 Q15, p. 75', answer: 0,
    en: { q: '4√7 × 2√3 =', options: ['8√21', '6√10', '8√10', '6√21'], explanation: '(4 × 2)√(7 × 3) = 8√21.' },
    ta: { q: '4√7 × 2√3 =', options: ['8√21', '6√10', '8√10', '6√21'], explanation: '(4 × 2)√(7 × 3) = 8√21.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.9 Q16, p. 75', answer: 0,
    en: { q: 'With a rational denominator, 2√3/(3√2) simplifies to', options: ['√6/3', '√2/3', '√3/2', '2/3'], explanation: 'Multiply by √2/√2: 2√6/6 = √6/3.' },
    ta: { q: '2√3/(3√2) இன் பகுதியை விகிதமுறு எண்ணாக மாற்றிய பின் சுருங்கிய வடிவம்', options: ['√6/3', '√2/3', '√3/2', '2/3'], explanation: '√2/√2 ஆல் பெருக்க 2√6/6 = √6/3.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.7 Q1(i), p. 70', answer: 0,
    en: { q: 'Rationalising the denominator of 1/√50 gives', options: ['√2/10', '√50/5', '√2/5', '5√2'], explanation: '√50 = 5√2; 1/(5√2) × √2/√2 = √2/10.' },
    ta: { q: '1/√50 இன் பகுதியை விகிதப்படுத்த', options: ['√2/10', '√50/5', '√2/5', '5√2'], explanation: '√50 = 5√2; 1/(5√2) × √2/√2 = √2/10.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.7 Q1(iii), p. 70', answer: 0,
    en: { q: 'Rationalising the denominator of √75/√18 gives', options: ['5√6/6', '5√3/3', '5√6/3', '√6/6'], explanation: '√75/√18 = 5√3/(3√2) = 5√6/6.' },
    ta: { q: '√75/√18 இன் பகுதியை விகிதப்படுத்த', options: ['5√6/6', '5√3/3', '5√6/3', '√6/6'], explanation: '√75/√18 = 5√3/(3√2) = 5√6/6.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.7 Q1(iv), p. 70', answer: 0,
    en: { q: 'Rationalising the denominator of 3√5/√6 gives', options: ['√30/2', '3√30/2', '√30/6', '3√5/6'], explanation: '3√5 × √6/6 = 3√30/6 = √30/2.' },
    ta: { q: '3√5/√6 இன் பகுதியை விகிதப்படுத்த', options: ['√30/2', '3√30/2', '√30/6', '3√5/6'], explanation: '3√5 × √6/6 = 3√30/6 = √30/2.' },
  },
  {
    difficulty: 'medium', source: 'Book example 2.27(i), p. 69', answer: 0,
    en: { q: 'Rationalising the denominator of 7/√14 gives', options: ['√14/2', '7√14', '√14/7', '2√14'], explanation: '7√14/14 = √14/2.' },
    ta: { q: '7/√14 இன் பகுதியை விகிதப்படுத்த', options: ['√14/2', '7√14', '√14/7', '2√14'], explanation: '7√14/14 = √14/2.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.8 Q1, p. 73', answer: 0,
    en: { q: '569430000000 in scientific notation is', options: ['5.6943 × 10¹¹', '5.6943 × 10¹⁰', '56.943 × 10¹⁰', '5.6943 × 10¹²'], explanation: 'The decimal point moves 11 places to the left.' },
    ta: { q: '569430000000 இன் அறிவியல் குறியீடு', options: ['5.6943 × 10¹¹', '5.6943 × 10¹⁰', '56.943 × 10¹⁰', '5.6943 × 10¹²'], explanation: 'தசமப் புள்ளி 11 இடங்கள் இடப்புறம் நகர்கிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.8 Q1, p. 73', answer: 0,
    en: { q: '0.0000006000 in scientific notation is', options: ['6.0 × 10⁻⁷', '6.0 × 10⁻⁶', '6.0 × 10⁷', '0.6 × 10⁻⁶'], explanation: 'The decimal point moves 7 places to the right, so the exponent is −7.' },
    ta: { q: '0.0000006000 இன் அறிவியல் குறியீடு', options: ['6.0 × 10⁻⁷', '6.0 × 10⁻⁶', '6.0 × 10⁷', '0.6 × 10⁻⁶'], explanation: 'தசமப் புள்ளி 7 இடங்கள் வலப்புறம் நகர்கிறது; அடுக்கு −7.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.8 Q2, p. 73', answer: 0,
    en: { q: '1.00005 × 10⁻⁵ in decimal form is', options: ['0.0000100005', '0.000100005', '100005', '0.00000100005'], explanation: 'Move the decimal point 5 places to the left: 0.0000100005.' },
    ta: { q: '1.00005 × 10⁻⁵ இன் தசம வடிவம்', options: ['0.0000100005', '0.000100005', '100005', '0.00000100005'], explanation: 'தசமப் புள்ளியை 5 இடங்கள் இடப்புறம் நகர்த்த 0.0000100005.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.8 Q4, p. 74', answer: 0,
    en: { q: 'One light year is 9460528400000000 km. In scientific notation this is', options: ['9.4605284 × 10¹⁵ km', '9.4605284 × 10¹⁶ km', '94.605284 × 10¹⁴ km', '9.4605284 × 10¹⁴ km'], explanation: 'The decimal point moves 15 places to the left.' },
    ta: { q: 'ஓர் ஒளி ஆண்டு = 9460528400000000 கி.மீ. இதன் அறிவியல் குறியீடு', options: ['9.4605284 × 10¹⁵ கி.மீ', '9.4605284 × 10¹⁶ கி.மீ', '94.605284 × 10¹⁴ கி.மீ', '9.4605284 × 10¹⁴ கி.மீ'], explanation: 'தசமப் புள்ளி 15 இடங்கள் இடப்புறம் நகர்கிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book example 2.30, p. 72', answer: 0,
    en: { q: 'The mass of the Earth is 5.97 × 10²⁴ kg and that of the Moon is 0.073 × 10²⁴ kg. Their total mass is', options: ['6.043 × 10²⁴ kg', '6.043 × 10⁴⁸ kg', '5.043 × 10²⁴ kg', '6.70 × 10²⁴ kg'], explanation: 'Same power of 10, so add the numbers: (5.97 + 0.073) × 10²⁴ = 6.043 × 10²⁴ kg.' },
    ta: { q: 'புவியின் நிறை 5.97 × 10²⁴ கிகி, நிலவின் நிறை 0.073 × 10²⁴ கிகி. மொத்த நிறை', options: ['6.043 × 10²⁴ கிகி', '6.043 × 10⁴⁸ கிகி', '5.043 × 10²⁴ கிகி', '6.70 × 10²⁴ கிகி'], explanation: '10 இன் அடுக்கு ஒன்றே; (5.97 + 0.073) × 10²⁴ = 6.043 × 10²⁴ கிகி.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.8 Q5(i), p. 74', answer: 0,
    en: { q: '(2.75 × 10⁷) + (1.23 × 10⁸) =', options: ['1.505 × 10⁸', '3.98 × 10¹⁵', '3.98 × 10⁸', '1.505 × 10⁷'], explanation: '2.75 × 10⁷ = 0.275 × 10⁸; 0.275 + 1.23 = 1.505, so 1.505 × 10⁸.' },
    ta: { q: '(2.75 × 10⁷) + (1.23 × 10⁸) =', options: ['1.505 × 10⁸', '3.98 × 10¹⁵', '3.98 × 10⁸', '1.505 × 10⁷'], explanation: '2.75 × 10⁷ = 0.275 × 10⁸; 0.275 + 1.23 = 1.505; எனவே 1.505 × 10⁸.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.8 Q5(iii), p. 74', answer: 0,
    en: { q: '(1.02 × 10¹⁰) × (1.20 × 10⁻³) =', options: ['1.224 × 10⁷', '1.224 × 10¹³', '2.22 × 10⁷', '1.224 × 10⁻³⁰'], explanation: '1.02 × 1.20 = 1.224 and 10¹⁰ × 10⁻³ = 10⁷.' },
    ta: { q: '(1.02 × 10¹⁰) × (1.20 × 10⁻³) =', options: ['1.224 × 10⁷', '1.224 × 10¹³', '2.22 × 10⁷', '1.224 × 10⁻³⁰'], explanation: '1.02 × 1.20 = 1.224; 10¹⁰ × 10⁻³ = 10⁷.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 2.9 Q20, p. 76', answer: 0,
    en: { q: 'The length and breadth of a rectangular plot are 5 × 10⁵ m and 4 × 10⁴ m. Its area is', options: ['2 × 10¹⁰ m²', '9 × 10⁹ m²', '9 × 10¹ m²', '20 × 10²⁰ m²'], explanation: '5 × 4 = 20 and 10⁵ × 10⁴ = 10⁹: 20 × 10⁹ = 2 × 10¹⁰ m².' },
    ta: { q: 'ஒரு செவ்வக வடிவ மனையின் நீளம், அகலம் முறையே 5 × 10⁵ மீ, 4 × 10⁴ மீ எனில் அதன் பரப்பளவு', options: ['2 × 10¹⁰ மீ²', '9 × 10⁹ மீ²', '9 × 10¹ மீ²', '20 × 10²⁰ மீ²'], explanation: '5 × 4 = 20; 10⁵ × 10⁴ = 10⁹; 20 × 10⁹ = 2 × 10¹⁰ மீ².' },
  },
  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise 2.9 Q1, p. 74', answer: 0,
    en: { q: 'If n is a natural number, then √n is', options: ['rational or irrational, depending on n', 'always a natural number', 'always an irrational number', 'always a rational number'], explanation: '√4 = 2 is rational but √2 is irrational, so √n may be either.' },
    ta: { q: 'n என்பது ஓர் இயல் எண் எனில் √n என்பது', options: ['ஒரு விகிதமுறு அல்லது விகிதமுறா எண்', 'எப்போதும் ஓர் இயல் எண்', 'எப்போதும் ஒரு விகிதமுறா எண்', 'எப்போதும் ஒரு விகிதமுறு எண்'], explanation: '√4 = 2 விகிதமுறு; √2 விகிதமுறா; எனவே √n இரண்டில் எதுவாகவும் இருக்கலாம்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 2.9 Q3, p. 74', answer: 0,
    en: { q: 'Which statement about the sum of two irrational numbers is true?', options: ['It may be rational or irrational.', 'It is always irrational.', 'It is always rational.', 'It is always an integer.'], explanation: '(2 + √3) + (2 − √3) = 4 is rational, while √2 + √3 is irrational.' },
    ta: { q: 'இரு விகிதமுறா எண்களின் கூடுதல் பற்றிய கூற்றுகளில் எது உண்மை?', options: ['ஒரு விகிதமுறு அல்லது விகிதமுறா எண்ணாக இருக்கலாம்.', 'எப்போதும் ஒரு விகிதமுறா எண்.', 'எப்போதும் ஒரு விகிதமுறு எண்.', 'எப்போதும் ஒரு முழுக்களாகும்.'], explanation: '(2 + √3) + (2 − √3) = 4 விகிதமுறு; √2 + √3 விகிதமுறா.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 2.9 Q9, p. 75', answer: 0,
    en: { q: 'Find the odd one out:', options: ['√54/√18', '√32 × √2', '√27/√3', '√72 × √8'], explanation: '√32 × √2 = 8, √27/√3 = 3, √72 × √8 = 24 are rational; √54/√18 = √3 is irrational.' },
    ta: { q: 'பின்வருவனவற்றுள் பொருந்தாததைக் காண்க.', options: ['√54/√18', '√32 × √2', '√27/√3', '√72 × √8'], explanation: '√32 × √2 = 8, √27/√3 = 3, √72 × √8 = 24 விகிதமுறு; √54/√18 = √3 விகிதமுறா.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 2.9 Q10, p. 75', answer: 0,
    en: { q: '0.343434… + 0.34444… =', options: ['0.6878787…', '0.686868…', '0.68888…', '0.6877777…'], explanation: '34/99 + 31/90 = 340/990 + 341/990 = 681/990 = 0.68787…' },
    ta: { q: '0.343434… + 0.34444… =', options: ['0.6878787…', '0.686868…', '0.68888…', '0.6877777…'], explanation: '34/99 + 31/90 = 340/990 + 341/990 = 681/990 = 0.68787…' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 2.9 Q17, p. 76', answer: 0,
    en: { q: 'When (2√5 − √2)² is simplified, we get', options: ['22 − 4√10', '4√5 + 2√2', '8 − 4√10', '2√10 − 2'], explanation: '(2√5)² − 2(2√5)(√2) + (√2)² = 20 − 4√10 + 2 = 22 − 4√10.' },
    ta: { q: '(2√5 − √2)² இன் சுருங்கிய வடிவம்', options: ['22 − 4√10', '4√5 + 2√2', '8 − 4√10', '2√10 − 2'], explanation: '20 − 4√10 + 2 = 22 − 4√10.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 2.9 Q18, p. 76', answer: 0,
    en: { q: '(0.000729)^(−3/4) × (0.09)^(−3/4) =', options: ['10⁶/3⁶', '10³/3³', '10⁵/3⁵', '10²/3²'], explanation: '0.000729 = (0.09)³, so the product is (0.09)^(−9/4 − 3/4) = (0.09)⁻³ = (0.3)⁻⁶ = (10/3)⁶.' },
    ta: { q: '(0.000729)^(−3/4) × (0.09)^(−3/4) =', options: ['10⁶/3⁶', '10³/3³', '10⁵/3⁵', '10²/3²'], explanation: '0.000729 = (0.09)³; பெருக்கல் (0.09)⁻³ = (0.3)⁻⁶ = (10/3)⁶.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 2.9 Q19, p. 76', answer: 0,
    en: { q: 'If √(9ˣ) = ∛(9²), then x =', options: ['4/3', '2/3', '1/3', '5/3'], explanation: '9^(x/2) = 9^(2/3), so x/2 = 2/3 and x = 4/3.' },
    ta: { q: '√(9ˣ) = ∛(9²) எனில் x =', options: ['4/3', '2/3', '1/3', '5/3'], explanation: '9^(x/2) = 9^(2/3); x/2 = 2/3; x = 4/3.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 2.2 Q4(ii), p. 52', answer: 0,
    en: { q: '2.327327… (block 327 repeating) as a rational number is', options: ['2325/999', '2327/999', '2327/1000', '2325/990'], explanation: '1000x − x = 2327.327… − 2.327… = 2325, so x = 2325/999.' },
    ta: { q: '2.327327… (327 சுழல்கிறது) ஐ விகிதமுறு எண்ணாக எழுத', options: ['2325/999', '2327/999', '2327/1000', '2325/990'], explanation: '1000x − x = 2325; x = 2325/999.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 2.2 Q4(v), p. 52', answer: 0,
    en: { q: '17.21515… (block 15 repeating after 2) as a rational number is', options: ['5681/330', '17215/990', '5681/333', '1704/99'], explanation: '10x = 172.1515…, 1000x = 17215.1515…; 990x = 17043, x = 17043/990 = 5681/330.' },
    ta: { q: '17.21515… (2 க்குப் பின் 15 சுழல்கிறது) ஐ விகிதமுறு எண்ணாக எழுத', options: ['5681/330', '17215/990', '5681/333', '1704/99'], explanation: '10x = 172.1515…, 1000x = 17215.1515…; 990x = 17043; x = 5681/330.' },
  },
  {
    difficulty: 'hard', source: 'Book example 2.12, p. 54', answer: 0,
    en: { q: 'If a = 2 + √3 and b = 2 − √3, then', options: ['a + b is rational and a − b is irrational', 'a + b and a − b are both irrational', 'a + b is irrational and a − b is rational', 'a + b and a − b are both rational'], explanation: 'a + b = 4 (rational) and a − b = 2√3 (irrational).' },
    ta: { q: 'a = 2 + √3, b = 2 − √3 எனில்', options: ['a + b விகிதமுறு, a − b விகிதமுறா', 'a + b, a − b இரண்டும் விகிதமுறா', 'a + b விகிதமுறா, a − b விகிதமுறு', 'a + b, a − b இரண்டும் விகிதமுறு'], explanation: 'a + b = 4 (விகிதமுறு), a − b = 2√3 (விகிதமுறா).' },
  },
  {
    difficulty: 'hard', source: 'Book example 2.12, p. 54', answer: 0,
    en: { q: 'If a = √75 and b = √3, then x = ab and y = a/b are', options: ['both rational (15 and 5)', 'both irrational', 'x rational, y irrational', 'x irrational, y rational'], explanation: '√75 × √3 = √225 = 15 and √75/√3 = √25 = 5.' },
    ta: { q: 'a = √75, b = √3 எனில் x = ab, y = a/b ஆகியவை', options: ['இரண்டும் விகிதமுறு (15, 5)', 'இரண்டும் விகிதமுறா', 'x விகிதமுறு, y விகிதமுறா', 'x விகிதமுறா, y விகிதமுறு'], explanation: '√75 × √3 = √225 = 15; √75/√3 = √25 = 5.' },
  },
  {
    difficulty: 'hard', source: 'Book example 2.20, p. 63', answer: 0,
    en: { q: 'The surds ∛2, √4 and ⁴√3 in ascending order are', options: ['∛2 < ⁴√3 < √4', '√4 < ∛2 < ⁴√3', '⁴√3 < ∛2 < √4', '∛2 < √4 < ⁴√3'], explanation: 'With order 12: ∛2 = ¹²√16, ⁴√3 = ¹²√27, √4 = ¹²√4096.' },
    ta: { q: '∛2, √4, ⁴√3 ஆகிய முறுடுகளின் ஏறு வரிசை', options: ['∛2 < ⁴√3 < √4', '√4 < ∛2 < ⁴√3', '⁴√3 < ∛2 < √4', '∛2 < √4 < ⁴√3'], explanation: 'வரிசை 12 ஆக மாற்ற: ∛2 = ¹²√16, ⁴√3 = ¹²√27, √4 = ¹²√4096.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 2.6 Q4(i), p. 68', answer: 0,
    en: { q: 'The surds ∛5, ⁹√4 and ⁶√3 in descending order are', options: ['∛5 > ⁶√3 > ⁹√4', '⁹√4 > ⁶√3 > ∛5', '∛5 > ⁹√4 > ⁶√3', '⁶√3 > ∛5 > ⁹√4'], explanation: 'With order 18: ∛5 = ¹⁸√15625, ⁶√3 = ¹⁸√27, ⁹√4 = ¹⁸√16.' },
    ta: { q: '∛5, ⁹√4, ⁶√3 ஆகிய முறுடுகளின் இறங்கு வரிசை', options: ['∛5 > ⁶√3 > ⁹√4', '⁹√4 > ⁶√3 > ∛5', '∛5 > ⁹√4 > ⁶√3', '⁶√3 > ∛5 > ⁹√4'], explanation: 'வரிசை 18 ஆக மாற்ற: ∛5 = ¹⁸√15625, ⁶√3 = ¹⁸√27, ⁹√4 = ¹⁸√16.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 2.6 Q1(iv), p. 68', answer: 0,
    en: { q: '5∛40 + 2∛625 − 3∛320 =', options: ['8∛5', '4∛5', '32∛5', '8∛10'], explanation: '5(2∛5) + 2(5∛5) − 3(4∛5) = 10∛5 + 10∛5 − 12∛5 = 8∛5.' },
    ta: { q: '5∛40 + 2∛625 − 3∛320 =', options: ['8∛5', '4∛5', '32∛5', '8∛10'], explanation: '10∛5 + 10∛5 − 12∛5 = 8∛5.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 2.6 Q2(v), p. 68', answer: 0,
    en: { q: '[√(225/729) − √(25/144)] ÷ √(16/81) =', options: ['5/16', '5/36', '4/9', '16/5'], explanation: '15/27 − 5/12 = 5/9 − 5/12 = 5/36; 5/36 ÷ 4/9 = 5/36 × 9/4 = 5/16.' },
    ta: { q: '[√(225/729) − √(25/144)] ÷ √(16/81) =', options: ['5/16', '5/36', '4/9', '16/5'], explanation: '5/9 − 5/12 = 5/36; 5/36 ÷ 4/9 = 5/16.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 2.6 Q3(i), p. 68', answer: 0,
    en: { q: 'Given √5 = 2.236 and √10 = 3.162, the value of √40 − √20 correct to 3 decimal places is', options: ['1.852', '4.472', '2.000', '0.926'], explanation: '√40 − √20 = 2√10 − 2√5 = 6.324 − 4.472 = 1.852.' },
    ta: { q: '√5 = 2.236, √10 = 3.162 எனில் √40 − √20 இன் மதிப்பு (3 தசம இடங்கள்)', options: ['1.852', '4.472', '2.000', '0.926'], explanation: '√40 − √20 = 2√10 − 2√5 = 6.324 − 4.472 = 1.852.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 2.6 Q3(ii), p. 68', answer: 0,
    en: { q: 'Given √2 = 1.414, √3 = 1.732 and √10 = 3.162, the value of √300 + √90 − √8 correct to 3 decimal places is', options: ['23.978', '26.806', '20.492', '24.392'], explanation: '10√3 + 3√10 − 2√2 = 17.320 + 9.486 − 2.828 = 23.978.' },
    ta: { q: '√2 = 1.414, √3 = 1.732, √10 = 3.162 எனில் √300 + √90 − √8 இன் மதிப்பு (3 தசம இடங்கள்)', options: ['23.978', '26.806', '20.492', '24.392'], explanation: '10√3 + 3√10 − 2√2 = 17.320 + 9.486 − 2.828 = 23.978.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 2.7 Q2(ii), p. 70', answer: 0,
    en: { q: 'Rationalising and simplifying (5√3 + √2)/(√3 + √2) gives', options: ['13 − 4√6', '13 + 4√6', '17 − 4√6', '(13 − 4√6)/5'], explanation: 'Multiply by (√3 − √2): numerator 15 − 5√6 + √6 − 2 = 13 − 4√6; denominator 3 − 2 = 1.' },
    ta: { q: '(5√3 + √2)/(√3 + √2) ஐ விகிதப்படுத்திச் சுருக்க', options: ['13 − 4√6', '13 + 4√6', '17 − 4√6', '(13 − 4√6)/5'], explanation: '(√3 − √2) ஆல் பெருக்க: தொகுதி 13 − 4√6; பகுதி 3 − 2 = 1.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 2.7 Q2(iv), p. 70', answer: 0,
    en: { q: '√5/(√6 + 2) − √5/(√6 − 2) =', options: ['−2√5', '2√5', '−4√5', '√30'], explanation: '√5[(√6 − 2) − (√6 + 2)]/(6 − 4) = √5(−4)/2 = −2√5.' },
    ta: { q: '√5/(√6 + 2) − √5/(√6 − 2) =', options: ['−2√5', '2√5', '−4√5', '√30'], explanation: '√5[(√6 − 2) − (√6 + 2)]/(6 − 4) = −2√5.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 2.7 Q2(i), p. 70', answer: 0,
    en: { q: 'Rationalising and simplifying (√48 + √32)/(√27 − √18) gives', options: ['4(5 + 2√6)/3', '4(5 − 2√6)/3', '(5 + 2√6)/3', '4(5 + 2√6)'], explanation: '(4√3 + 4√2)/(3√3 − 3√2) = (4/3)(√3 + √2)/(√3 − √2) = (4/3)(5 + 2√6).' },
    ta: { q: '(√48 + √32)/(√27 − √18) ஐ விகிதப்படுத்திச் சுருக்க', options: ['4(5 + 2√6)/3', '4(5 − 2√6)/3', '(5 + 2√6)/3', '4(5 + 2√6)'], explanation: '(4/3)(√3 + √2)/(√3 − √2) = (4/3)(5 + 2√6).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 2.7 Q3, p. 70', answer: 0,
    en: { q: 'If (√7 − 2)/(√7 + 2) = a√7 + b, then a and b are', options: ['a = −4/3, b = 11/3', 'a = 4/3, b = 11/3', 'a = −4/3, b = −11/3', 'a = −4, b = 11'], explanation: '(√7 − 2)²/(7 − 4) = (11 − 4√7)/3.' },
    ta: { q: '(√7 − 2)/(√7 + 2) = a√7 + b எனில் a, b ஆகியவை', options: ['a = −4/3, b = 11/3', 'a = 4/3, b = 11/3', 'a = −4/3, b = −11/3', 'a = −4, b = 11'], explanation: '(√7 − 2)²/(7 − 4) = (11 − 4√7)/3.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 2.7 Q4, p. 70', answer: 0,
    en: { q: 'If x = √5 + 2, then x² + 1/x² is', options: ['18', '20', '16', '9 + 4√5'], explanation: '1/x = √5 − 2, so x + 1/x = 2√5 and x² + 1/x² = (2√5)² − 2 = 18.' },
    ta: { q: 'x = √5 + 2 எனில் x² + 1/x² =', options: ['18', '20', '16', '9 + 4√5'], explanation: '1/x = √5 − 2; x + 1/x = 2√5; x² + 1/x² = 20 − 2 = 18.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 2.7 Q5, p. 70', answer: 0,
    en: { q: 'Given √2 = 1.414, the value of (8 − 5√2)/(3 − 2√2) to 3 decimal places is', options: ['5.414', '2.586', '4.414', '1.172'], explanation: 'Multiply by (3 + 2√2): (24 + 16√2 − 15√2 − 20)/1 = 4 + √2 = 5.414.' },
    ta: { q: '√2 = 1.414 எனில் (8 − 5√2)/(3 − 2√2) இன் மதிப்பு (3 தசம இடங்கள்)', options: ['5.414', '2.586', '4.414', '1.172'], explanation: '(3 + 2√2) ஆல் பெருக்க: 4 + √2 = 5.414.' },
  },
  {
    difficulty: 'hard', source: 'Book example 2.27(ii), p. 69', answer: 0,
    en: { q: 'Rationalising the denominator of (5 + √3)/(5 − √3) gives', options: ['(14 + 5√3)/11', '(28 + 10√3)/11', '(14 − 5√3)/11', '(22 + 10√3)/28'], explanation: '(5 + √3)²/(25 − 3) = (28 + 10√3)/22 = (14 + 5√3)/11.' },
    ta: { q: '(5 + √3)/(5 − √3) இன் பகுதியை விகிதப்படுத்த', options: ['(14 + 5√3)/11', '(28 + 10√3)/11', '(14 − 5√3)/11', '(22 + 10√3)/28'], explanation: '(5 + √3)²/(25 − 3) = (28 + 10√3)/22 = (14 + 5√3)/11.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 2.8 Q3(i), p. 73', answer: 0,
    en: { q: '(300000)² × (20000)⁴ in scientific notation is', options: ['1.44 × 10²⁸', '1.44 × 10²⁶', '144 × 10²⁶', '1.44 × 10²⁴'], explanation: '(3 × 10⁵)² × (2 × 10⁴)⁴ = 9 × 10¹⁰ × 16 × 10¹⁶ = 144 × 10²⁶ = 1.44 × 10²⁸.' },
    ta: { q: '(300000)² × (20000)⁴ இன் அறிவியல் குறியீடு', options: ['1.44 × 10²⁸', '1.44 × 10²⁶', '144 × 10²⁶', '1.44 × 10²⁴'], explanation: '9 × 10¹⁰ × 16 × 10¹⁶ = 144 × 10²⁶ = 1.44 × 10²⁸.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 2.8 Q3(ii), p. 73', answer: 0,
    en: { q: '(0.000001)¹¹ ÷ (0.005)³ in scientific notation is', options: ['8.0 × 10⁻⁶⁰', '8.0 × 10⁻⁵⁷', '1.25 × 10⁻⁵⁷', '8.0 × 10⁻⁷²'], explanation: '10⁻⁶⁶ ÷ (125 × 10⁻⁹) = 10⁻⁵⁷/125 = 0.008 × 10⁻⁵⁷ = 8.0 × 10⁻⁶⁰.' },
    ta: { q: '(0.000001)¹¹ ÷ (0.005)³ இன் அறிவியல் குறியீடு', options: ['8.0 × 10⁻⁶⁰', '8.0 × 10⁻⁵⁷', '1.25 × 10⁻⁵⁷', '8.0 × 10⁻⁷²'], explanation: '10⁻⁶⁶ ÷ (125 × 10⁻⁹) = 0.008 × 10⁻⁵⁷ = 8.0 × 10⁻⁶⁰.' },
  },
  {
    difficulty: 'hard', source: 'Book example 2.31(i), p. 73', answer: 0,
    en: { q: '(50000000)⁴ in scientific notation is', options: ['6.25 × 10³⁰', '6.25 × 10²⁸', '625 × 10²⁸', '2.0 × 10³²'], explanation: '(5 × 10⁷)⁴ = 625 × 10²⁸ = 6.25 × 10³⁰.' },
    ta: { q: '(50000000)⁴ இன் அறிவியல் குறியீடு', options: ['6.25 × 10³⁰', '6.25 × 10²⁸', '625 × 10²⁸', '2.0 × 10³²'], explanation: '(5 × 10⁷)⁴ = 625 × 10²⁸ = 6.25 × 10³⁰.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 2.8 Q5(iv), p. 74', answer: 0,
    en: { q: '(8.41 × 10⁴) ÷ (4.3 × 10⁵) =', options: ['1.9558 × 10⁻¹', '1.9558 × 10¹', '1.9558 × 10⁹', '0.19558 × 10⁻¹'], explanation: '8.41 ÷ 4.3 = 1.9558 and 10⁴ ÷ 10⁵ = 10⁻¹.' },
    ta: { q: '(8.41 × 10⁴) ÷ (4.3 × 10⁵) =', options: ['1.9558 × 10⁻¹', '1.9558 × 10¹', '1.9558 × 10⁹', '0.19558 × 10⁻¹'], explanation: '8.41 ÷ 4.3 = 1.9558; 10⁴ ÷ 10⁵ = 10⁻¹.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 2.6 Q6, p. 68', answer: 0,
    en: { q: 'Which pair of surds has a rational product?', options: ['√2 and √8', '√2 and √3', '√3 and √6', '∛2 and ∛3'], explanation: '√2 × √8 = √16 = 4; the other products (√6, 3√2, ∛6) are irrational.' },
    ta: { q: 'எந்த இரு முறுடுகளின் பெருக்கல் விகிதமுறு எண்?', options: ['√2, √8', '√2, √3', '√3, √6', '∛2, ∛3'], explanation: '√2 × √8 = √16 = 4; மற்றவற்றின் பெருக்கல் (√6, 3√2, ∛6) விகிதமுறா.' },
  },
  {
    difficulty: 'hard', source: '§2.3.6, p. 53', answer: 0,
    en: { q: 'If a is a non-zero rational number and b is an irrational number, which of the following is always irrational?', options: ['a + b', 'b − b', 'b × b', 'b ÷ b'], explanation: 'A rational plus an irrational number is always irrational; b − b = 0, b ÷ b = 1 and √2 × √2 = 2 can be rational.' },
    ta: { q: 'a பூச்சியமற்ற விகிதமுறு எண், b விகிதமுறா எண் எனில் எப்போதும் விகிதமுறா எண்ணாக இருப்பது', options: ['a + b', 'b − b', 'b × b', 'b ÷ b'], explanation: 'விகிதமுறு + விகிதமுறா எப்போதும் விகிதமுறா; b − b = 0, b ÷ b = 1, √2 × √2 = 2 விகிதமுறு ஆகலாம்.' },
  },
  {
    difficulty: 'hard', source: '§2.6, p. 60', answer: 2,
    en: { q: 'Assertion (A): π is a surd.\nReason (R): π is an irrational number.', options: AR_EN, explanation: 'π is irrational, but it is not a root of any equation with rational coefficients, so it is not a surd: A is false, R is true.' },
    ta: { q: 'கூற்று: π ஒரு முறுடு.\nகாரணம்: π ஒரு விகிதமுறா எண்.', options: AR_TA, explanation: 'π விகிதமுறா எண்; ஆனால் விகிதமுறு கெழுக்கள் கொண்ட எந்தச் சமன்பாட்டின் மூலமும் அல்ல; எனவே முறுடு அல்ல.' },
  },
  {
    difficulty: 'hard', source: '§2.3.5, p. 51', answer: 0,
    en: { q: 'Assertion (A): 13/64 has a terminating decimal expansion.\nReason (R): A rational number whose denominator can be written as 2ᵐ × 5ⁿ has a terminating decimal expansion.', options: AR_EN, explanation: '64 = 2⁶, which is of the form 2ᵐ × 5ⁿ, so R explains A.' },
    ta: { q: 'கூற்று: 13/64 முடிவுறு தசம விரிவு உடையது.\nகாரணம்: பகுதியை 2ᵐ × 5ⁿ என எழுதக்கூடிய விகிதமுறு எண் முடிவுறு தசம விரிவு உடையது.', options: AR_TA, explanation: '64 = 2⁶; இது 2ᵐ × 5ⁿ வடிவம்; எனவே காரணம் கூற்றை விளக்குகிறது.' },
  },
  {
    difficulty: 'hard', source: '§2.2.1, p. 44', answer: 0,
    en: { q: 'Assertion (A): There are infinitely many rational numbers between any two rational numbers.\nReason (R): The average of two rational numbers is a rational number lying between them.', options: AR_EN, explanation: 'Repeatedly taking averages produces endless new rational numbers between the two: the denseness property.' },
    ta: { q: 'கூற்று: எந்த இரு விகிதமுறு எண்களுக்கும் இடையே எண்ணற்ற விகிதமுறு எண்கள் உள்ளன.\nகாரணம்: இரு விகிதமுறு எண்களின் சராசரி அவற்றுக்கிடையே உள்ள ஒரு விகிதமுறு எண்.', options: AR_TA, explanation: 'மீண்டும் மீண்டும் சராசரி எடுப்பதால் முடிவில்லாமல் புதிய விகிதமுறு எண்கள் கிடைக்கின்றன: அடர்த்திப் பண்பு.' },
  },
  {
    difficulty: 'hard', source: '§2.5, p. 58', answer: 0,
    en: { q: 'Consider the statements:\n(i) ∛(−8) = −2\n(ii) √9 = ±3\n(iii) ⁵√(−32) = −2\nWhich are correct?', options: ['(i) and (iii) only', '(i) and (ii) only', '(ii) and (iii) only', '(i), (ii) and (iii)'], explanation: 'An odd root of a negative number is a single negative real number; √9 = 3 only, by convention.' },
    ta: { q: 'கூற்றுகள்:\n(i) ∛(−8) = −2\n(ii) √9 = ±3\n(iii) ⁵√(−32) = −2\nஇவற்றுள் சரியானவை', options: ['(i), (iii) மட்டும்', '(i), (ii) மட்டும்', '(ii), (iii) மட்டும்', '(i), (ii), (iii)'], explanation: 'குறை எண்ணின் ஒற்றைப்படி மூலம் ஒரே ஒரு குறை மெய்யெண்; மரபுப்படி √9 = 3 மட்டும்.' },
  },
  {
    difficulty: 'hard', source: '§2.6, p. 61', answer: 0,
    en: { q: 'Engineers use √2 rather than 1.414 in precise work because', options: ['(1.414)² = 1.999396 ≠ 2, so 1.414 is only an approximation', '√2 is a rational number', '1.414 is an irrational number', '√2 terminates after 3 decimal places'], explanation: 'The decimal 1.414 is only approximate; the surd √2 represents the exact value.' },
    ta: { q: 'துல்லியமான பணிகளில் பொறியாளர்கள் 1.414 க்குப் பதில் √2 ஐப் பயன்படுத்தக் காரணம்', options: ['(1.414)² = 1.999396 ≠ 2; எனவே 1.414 தோராய மதிப்பு மட்டும்', '√2 ஒரு விகிதமுறு எண்', '1.414 ஒரு விகிதமுறா எண்', '√2 மூன்று தசம இடங்களில் முடிவுறும்'], explanation: '1.414 தோராய மதிப்பு; √2 என்ற முறுடு சரியான மதிப்பைக் குறிக்கிறது.' },
  },
];
