// Tamil Nadu State Board, 9th Mathematics, Unit 3 – Algebra (இயற்கணிதம்).
// Book exercise / example questions (answers checked against the book's answer key)
// plus our own questions so that every section is covered at three levels.
// source = section or exercise and printed page of the English-medium book.

import { BankQuestion, AR_EN, AR_TA } from './types';

const IMG = '/content/9/state_board/maths/03';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: '§3.1, p. 78', answer: 0,
    en: { q: 'Who is called "the father of Algebra" and wrote the books called Arithmetica?', options: ['Diophantus', 'Euclid', 'Al-Khwarizmi', 'Pythagoras'], explanation: 'Diophantus of Alexandria wrote Arithmetica, which deals with solving algebraic equations.' },
    ta: { q: '"இயற்கணிதத்தின் தந்தை" என அழைக்கப்படுபவரும் Arithmetica நூல்களை எழுதியவரும் யார்?', options: ['டயோஃபாண்டஸ்', 'யூக்ளிட்', 'அல்-குவாரிஸ்மி', 'பிதாகரஸ்'], explanation: 'அலெக்சாண்ட்ரியாவின் டயோஃபாண்டஸ் இயற்கணிதச் சமன்பாடுகளைத் தீர்ப்பது பற்றிய Arithmetica நூல்களை எழுதினார்.' },
  },
  {
    difficulty: 'easy', source: '§3.2, p. 81', answer: 0,
    en: { q: 'In the polynomial x² + 5x − 24, the constant term is', options: ['−24', '24', '5', '1'], explanation: 'The constant term includes its sign: −24 (not 24).' },
    ta: { q: 'x² + 5x − 24 என்ற பல்லுறுப்புக் கோவையின் மாறிலி உறுப்பு', options: ['−24', '24', '5', '1'], explanation: 'மாறிலி உறுப்பு அதன் குறியுடன் −24 (24 அல்ல).' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 3.1 Q1, p. 87', answer: 0,
    en: { q: 'Which of the following expressions is a polynomial?', options: ['x²(x − 1)', '1/x² + 3x − 4', '(1/x)(x + 5)', 'm² − ∛m + 7m − 10'], explanation: 'x²(x − 1) = x³ − x² has only whole-number powers; the others contain negative or fractional powers.' },
    ta: { q: 'பின்வரும் கோவைகளில் எது பல்லுறுப்புக் கோவை ஆகும்?', options: ['x²(x − 1)', '1/x² + 3x − 4', '(1/x)(x + 5)', 'm² − ∛m + 7m − 10'], explanation: 'x²(x − 1) = x³ − x² இல் முழு எண் அடுக்குகள் மட்டுமே; மற்றவற்றில் குறை அல்லது பின்ன அடுக்குகள் உள்ளன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 3.1 Q2(i), p. 87', answer: 0,
    en: { q: 'The coefficient of x² in 4 + (2/5)x² − 3x is', options: ['2/5', '4', '−3', '2'], explanation: 'The number multiplying x² is 2/5.' },
    ta: { q: '4 + (2/5)x² − 3x இல் x² இன் கெழு', options: ['2/5', '4', '−3', '2'], explanation: 'x² உடன் பெருக்கப்பட்டுள்ள எண் 2/5.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 3.1 Q2(iii), p. 87', answer: 0,
    en: { q: 'In πx² − x + 2, the coefficients of x² and x are', options: ['π and −1', 'π and 1', '1 and −1', 'π and 2'], explanation: 'x² is multiplied by π and x by −1.' },
    ta: { q: 'πx² − x + 2 இல் x², x இன் கெழுக்கள்', options: ['π மற்றும் −1', 'π மற்றும் 1', '1 மற்றும் −1', 'π மற்றும் 2'], explanation: 'x² இன் கெழு π, x இன் கெழு −1.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 3.1 Q3(i), p. 87', answer: 0,
    en: { q: 'The degree of the polynomial 1 − √2y² + y⁷ is', options: ['7', '2', '1', '9'], explanation: 'The highest power of y is 7.' },
    ta: { q: '1 − √2y² + y⁷ என்ற பல்லுறுப்புக் கோவையின் படி', options: ['7', '2', '1', '9'], explanation: 'y இன் மிக உயர்ந்த அடுக்கு 7.' },
  },
  {
    difficulty: 'easy', source: '§3.2, p. 83', answer: 0,
    en: { q: 'The degree of the zero polynomial is', options: ['not defined', '0', '1', 'any whole number'], explanation: '0t⁴ + 0t² − 0t and 0p² − 0p + 0 are both the zero polynomial, so no single degree can be assigned.' },
    ta: { q: 'பூச்சியப் பல்லுறுப்புக் கோவையின் படி', options: ['வரையறுக்கப்படவில்லை', '0', '1', 'எந்த முழு எண்ணும்'], explanation: '0t⁴ + 0t² − 0t, 0p² − 0p + 0 இரண்டும் பூச்சியப் பல்லுறுப்புக் கோவைகள்; எனவே அதற்குப் படி வரையறுக்கப்படவில்லை.' },
  },
  {
    difficulty: 'easy', source: '§3.2, p. 83', answer: 0,
    en: { q: 'A polynomial having exactly two terms, such as 5x + 3, is called a', options: ['binomial', 'monomial', 'trinomial', 'constant polynomial'], explanation: 'Monomial – one term, binomial – two terms, trinomial – three terms.' },
    ta: { q: '5x + 3 போன்று சரியாக இரண்டு உறுப்புகளைக் கொண்ட பல்லுறுப்புக் கோவை', options: ['ஈருறுப்புக் கோவை', 'ஓருறுப்புக் கோவை', 'மூவுறுப்புக் கோவை', 'மாறிலிப் பல்லுறுப்புக் கோவை'], explanation: 'ஓர் உறுப்பு – ஓருறுப்பு, இரண்டு – ஈருறுப்பு, மூன்று – மூவுறுப்புக் கோவை.' },
  },
  {
    difficulty: 'easy', source: 'Book example 3.2, p. 84', answer: 0,
    en: { q: '8m² + 7m² is a', options: ['monomial', 'binomial', 'trinomial', 'cubic polynomial'], explanation: 'They are like terms: 8m² + 7m² = 15m², a single term.' },
    ta: { q: '8m² + 7m² என்பது', options: ['ஓருறுப்புக் கோவை', 'ஈருறுப்புக் கோவை', 'மூவுறுப்புக் கோவை', 'முப்படிப் பல்லுறுப்புக் கோவை'], explanation: 'இவை ஒத்த உறுப்புகள்: 8m² + 7m² = 15m², ஓர் உறுப்பு.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 3.15 Q3, p. 134', answer: 0,
    en: { q: 'The type of the polynomial 4 − 3x³ is', options: ['cubic polynomial', 'constant polynomial', 'linear polynomial', 'quadratic polynomial'], explanation: 'The highest power of x is 3, so it is cubic.' },
    ta: { q: '4 − 3x³ என்ற பல்லுறுப்புக் கோவையின் வகை', options: ['முப்படிப் பல்லுறுப்புக் கோவை', 'மாறிலிப் பல்லுறுப்புக் கோவை', 'ஒருபடிப் பல்லுறுப்புக் கோவை', 'இருபடிப் பல்லுறுப்புக் கோவை'], explanation: 'x இன் மிக உயர்ந்த அடுக்கு 3; எனவே முப்படி.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 3.15 Q17, p. 135', answer: 0,
    en: { q: 'The degree of a (non-zero) constant polynomial is', options: ['0', '1', '2', '3'], explanation: 'A constant such as 7 = 7x⁰ has degree zero.' },
    ta: { q: '(பூச்சியமற்ற) மாறிலிக் கோவையின் படி', options: ['0', '1', '2', '3'], explanation: '7 = 7x⁰ போன்ற மாறிலியின் படி பூச்சியம்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 3.15 Q2, p. 134', answer: 0,
    en: { q: 'The root of the polynomial equation 2x + 3 = 0 is', options: ['−3/2', '1/3', '−1/3', '−2/3'], explanation: '2x = −3, so x = −3/2.' },
    ta: { q: '2x + 3 = 0 என்ற பல்லுறுப்புக் கோவைச் சமன்பாட்டின் மூலம்', options: ['−3/2', '1/3', '−1/3', '−2/3'], explanation: '2x = −3; x = −3/2.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 3.15 Q5, p. 134', answer: 0,
    en: { q: 'The zero of the polynomial 2x + 5 is', options: ['−5/2', '5/2', '2/5', '−2/5'], explanation: '2x + 5 = 0 gives x = −5/2.' },
    ta: { q: '2x + 5 என்ற பல்லுறுப்புக் கோவையின் பூச்சியம்', options: ['−5/2', '5/2', '2/5', '−2/5'], explanation: '2x + 5 = 0 எனவே x = −5/2.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 3.15 Q10, p. 134', answer: 0,
    en: { q: 'The zero of (2 − 3x) is', options: ['2/3', '3', '2', '3/2'], explanation: '2 − 3x = 0 gives x = 2/3.' },
    ta: { q: '(2 − 3x) இன் பூச்சியம்', options: ['2/3', '3', '2', '3/2'], explanation: '2 − 3x = 0 எனவே x = 2/3.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 3.2 Q3(iv), p. 91', answer: 0,
    en: { q: 'The zero of the polynomial f(z) = 8z is', options: ['0', '8', '1/8', '−8'], explanation: '8z = 0 gives z = 0.' },
    ta: { q: 'f(z) = 8z இன் பூச்சியம்', options: ['0', '8', '1/8', '−8'], explanation: '8z = 0 எனவே z = 0.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 3.2 Q3(vi), p. 91', answer: 0,
    en: { q: 'The zero of h(x) = ax + b, where a ≠ 0, is', options: ['−b/a', 'b/a', '−a/b', 'a/b'], explanation: 'ax + b = 0 gives x = −b/a.' },
    ta: { q: 'h(x) = ax + b (a ≠ 0) இன் பூச்சியம்', options: ['−b/a', 'b/a', '−a/b', 'a/b'], explanation: 'ax + b = 0 எனவே x = −b/a.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 3.2 Q4, p. 91', answer: 0,
    en: { q: 'The root of the polynomial equation 10x + 9 = 0 is', options: ['−9/10', '9/10', '−10/9', '10/9'], explanation: '10x = −9, so x = −9/10.' },
    ta: { q: '10x + 9 = 0 என்ற பல்லுறுப்புக் கோவைச் சமன்பாட்டின் மூலம்', options: ['−9/10', '9/10', '−10/9', '10/9'], explanation: '10x = −9; x = −9/10.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 3.2 Q1, p. 91', answer: 0,
    en: { q: 'If f(y) = 6y − 3y² + 3, then f(1) is', options: ['6', '0', '12', '−6'], explanation: 'f(1) = 6 − 3 + 3 = 6.' },
    ta: { q: 'f(y) = 6y − 3y² + 3 எனில் f(1) =', options: ['6', '0', '12', '−6'], explanation: 'f(1) = 6 − 3 + 3 = 6.' },
  },
  {
    difficulty: 'easy', source: '§3.2.2, p. 91', answer: 0,
    en: { q: 'Which statement is correct?', options: ['A non-zero constant polynomial has no zero.', 'Every polynomial has 0 as a zero.', 'A linear polynomial has two zeros.', 'The zero of a polynomial must be an integer.'], explanation: 'p(x) = 5 is never 0, so it has no zero; a zero can be any real number.' },
    ta: { q: 'சரியான கூற்று எது?', options: ['பூச்சியமற்ற மாறிலிப் பல்லுறுப்புக் கோவைக்குப் பூச்சியம் இல்லை.', 'ஒவ்வொரு பல்லுறுப்புக் கோவைக்கும் 0 ஒரு பூச்சியம்.', 'ஒருபடிப் பல்லுறுப்புக் கோவைக்கு இரண்டு பூச்சியங்கள்.', 'பல்லுறுப்புக் கோவையின் பூச்சியம் முழுக்களில் ஒன்றாகவே இருக்க வேண்டும்.'], explanation: 'p(x) = 5 எப்போதும் 0 ஆகாது; எனவே பூச்சியம் இல்லை. பூச்சியம் எந்த மெய்யெண்ணாகவும் இருக்கலாம்.' },
  },
  {
    difficulty: 'easy', source: '§3.3, p. 92', answer: 0,
    en: { q: 'By the Remainder Theorem, when p(x) is divided by (x − a), the remainder is', options: ['p(a)', 'p(−a)', 'p(0)', 'a'], explanation: 'The remainder on dividing p(x) by (x − a) is p(a).' },
    ta: { q: 'மீதித் தேற்றப்படி p(x) ஐ (x − a) ஆல் வகுக்கக் கிடைக்கும் மீதி', options: ['p(a)', 'p(−a)', 'p(0)', 'a'], explanation: 'p(x) ஐ (x − a) ஆல் வகுத்தால் மீதி p(a).' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 3.15 Q9, p. 134', answer: 0,
    en: { q: 'If p(a) = 0, then (x − a) is a _____ of p(x).', options: ['factor', 'divisor only, not a factor', 'quotient', 'remainder'], explanation: 'By the Factor Theorem, p(a) = 0 implies (x − a) is a factor of p(x).' },
    ta: { q: 'p(a) = 0 எனில் (x − a) என்பது p(x) இன் ஒரு _____', options: ['காரணி', 'வகுத்தி மட்டும், காரணி அல்ல', 'ஈவு', 'மீதி'], explanation: 'காரணித் தேற்றப்படி p(a) = 0 எனில் (x − a) என்பது p(x) இன் காரணி.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 3.15 Q11, p. 134', answer: 0,
    en: { q: 'Which of the following has (x − 1) as a factor?', options: ['3x − 3', '2x − 1', '4x − 3', '3x − 4'], explanation: '3x − 3 = 3(x − 1); equivalently its value at x = 1 is 0.' },
    ta: { q: 'x − 1 என்பது _____ இன் ஒரு காரணி.', options: ['3x − 3', '2x − 1', '4x − 3', '3x − 4'], explanation: '3x − 3 = 3(x − 1); x = 1 இல் இதன் மதிப்பு 0.' },
  },
  {
    difficulty: 'easy', source: '§3.4, p. 97', answer: 0,
    en: { q: '(a − b)² is identically equal to', options: ['a² − 2ab + b²', 'a² − b²', 'a² + 2ab + b²', 'a² + b²'], explanation: 'This is a standard identity: (a − b)² ≡ a² − 2ab + b².' },
    ta: { q: '(a − b)² க்கு முற்றொருமையாகச் சமமானது', options: ['a² − 2ab + b²', 'a² − b²', 'a² + 2ab + b²', 'a² + b²'], explanation: 'இது ஒரு அடிப்படை முற்றொருமை: (a − b)² ≡ a² − 2ab + b².' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 3.15 Q13, p. 134', answer: 0,
    en: { q: '(x + y)(x² − xy + y²) is equal to', options: ['x³ + y³', '(x + y)³', '(x − y)³', 'x³ − y³'], explanation: 'This is the identity a³ + b³ = (a + b)(a² − ab + b²).' },
    ta: { q: '(x + y)(x² − xy + y²) =', options: ['x³ + y³', '(x + y)³', '(x − y)³', 'x³ − y³'], explanation: 'a³ + b³ = (a + b)(a² − ab + b²) என்ற முற்றொருமை.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 3.15 Q16, p. 135', answer: 0,
    en: { q: 'A cubic polynomial may have a maximum of _____ linear factors.', options: ['3', '1', '2', '4'], explanation: 'A polynomial of degree 3 can split into at most three linear factors.' },
    ta: { q: 'முப்படிப் பல்லுறுப்புக் கோவைக்கு அதிகபட்சம் _____ நேரிய காரணிகள் இருக்கலாம்.', options: ['3', '1', '2', '4'], explanation: 'படி 3 கொண்ட பல்லுறுப்புக் கோவை அதிகபட்சம் மூன்று நேரிய காரணிகளாகப் பிரியும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 3.15 Q28, p. 136', answer: 0,
    en: { q: 'The GCD of any two prime numbers is', options: ['1', '0', '−1', '2'], explanation: 'Two different primes have no common factor other than 1.' },
    ta: { q: 'இரண்டு பகா எண்களின் மீ.பொ.வ', options: ['1', '0', '−1', '2'], explanation: 'இரு வெவ்வேறு பகா எண்களுக்கு 1 தவிரப் பொதுக் காரணி இல்லை.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 3.9 Q1(i), p. 115', answer: 0,
    en: { q: 'The GCD of p⁵, p¹¹ and p⁹ is', options: ['p⁵', 'p¹¹', 'p²⁵', 'p⁹'], explanation: 'The GCD takes the lowest power common to all: p⁵.' },
    ta: { q: 'p⁵, p¹¹, p⁹ இன் மீ.பொ.வ', options: ['p⁵', 'p¹¹', 'p²⁵', 'p⁹'], explanation: 'அனைத்திற்கும் பொதுவான மிகக் குறைந்த அடுக்கு: p⁵.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 3.9 Q1(ii), p. 115', answer: 0,
    en: { q: 'The GCD of 4x³, y³ and z³ is', options: ['1', 'xyz', '4', '4xyz'], explanation: 'The three terms have no common factor other than 1.' },
    ta: { q: '4x³, y³, z³ இன் மீ.பொ.வ', options: ['1', 'xyz', '4', '4xyz'], explanation: 'மூன்றுக்கும் 1 தவிரப் பொதுக் காரணி இல்லை.' },
  },
  {
    difficulty: 'easy', source: '§3.8, p. 116', answer: 0,
    en: { q: 'Which of the following is a linear equation in two variables?', options: ['2x + y = 4', 'xy + 2x = 5', 'x² + y = 25', 'x(x + 1) = y'], explanation: 'In 2x + y = 4 each variable has degree one and they are not multiplied together.' },
    ta: { q: 'கீழ்க்காண்பனவற்றில் இரு மாறிகளில் அமைந்த நேரிய சமன்பாடு எது?', options: ['2x + y = 4', 'xy + 2x = 5', 'x² + y = 25', 'x(x + 1) = y'], explanation: '2x + y = 4 இல் ஒவ்வொரு மாறியும் படி ஒன்று; அவை ஒன்றோடொன்று பெருக்கப்படவில்லை.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 3.15 Q19, p. 135', answer: 0,
    en: { q: 'Which of the following is a linear equation?', options: ['3x + 5 = 2/3', 'x + 1/x = 2', 'x(x − 1) = 2', 'x³ − x = 5'], explanation: '3x + 5 = 2/3 has x only to the first power.' },
    ta: { q: 'கீழ்க்காண்பவற்றுள் எது நேரிய சமன்பாடு?', options: ['3x + 5 = 2/3', 'x + 1/x = 2', 'x(x − 1) = 2', 'x³ − x = 5'], explanation: '3x + 5 = 2/3 இல் x இன் அடுக்கு 1 மட்டும்.' },
  },
  {
    difficulty: 'easy', source: '§3.8, p. 117', answer: 0,
    en: { q: 'The graph of a linear equation in two variables is', options: ['a straight line', 'a parabola', 'a circle', 'a single point'], explanation: 'All points satisfying ax + by + c = 0 lie on a line, which is why it is called linear.' },
    ta: { q: 'இரு மாறிகளில் அமைந்த நேரிய சமன்பாட்டின் வரைபடம்', options: ['ஒரு நேர்க்கோடு', 'ஒரு பரவளையம்', 'ஒரு வட்டம்', 'ஒரே ஒரு புள்ளி'], explanation: 'ax + by + c = 0 ஐ நிறைவு செய்யும் புள்ளிகள் அனைத்தும் ஒரு நேர்க்கோட்டில் அமையும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 3.15 Q20, p. 135', answer: 0,
    en: { q: 'Which of the following is a solution of 2x − y = 6?', options: ['(4, 2)', '(2, 4)', '(3, −1)', '(0, 6)'], explanation: '2(4) − 2 = 6. The others give 0, 7 and −6.' },
    ta: { q: 'கீழ்க்காண்பனவற்றில் 2x − y = 6 இன் தீர்வு எது?', options: ['(4, 2)', '(2, 4)', '(3, −1)', '(0, 6)'], explanation: '2(4) − 2 = 6. மற்றவை 0, 7, −6 ஐத் தரும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 3.15 Q21, p. 135', answer: 0,
    en: { q: 'If (2, 3) is a solution of 2x + 3y = k, then k is', options: ['13', '12', '6', '0'], explanation: '2(2) + 3(3) = 4 + 9 = 13.' },
    ta: { q: '2x + 3y = k என்பதன் தீர்வு (2, 3) எனில் k =', options: ['13', '12', '6', '0'], explanation: '2(2) + 3(3) = 4 + 9 = 13.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 3.15 Q18, p. 135', answer: 0,
    en: { q: 'If x = 2, y = −2 is a solution of 2x + 3y = m, then m is', options: ['−2', '2', '10', '0'], explanation: '2(2) + 3(−2) = 4 − 6 = −2.' },
    ta: { q: '2x + 3y = m க்கு x = 2, y = −2 ஒரு தீர்வு எனில் m =', options: ['−2', '2', '10', '0'], explanation: '2(2) + 3(−2) = 4 − 6 = −2.' },
  },
  {
    difficulty: 'easy', source: '§3.8.2, p. 125', answer: 0,
    en: { q: 'A system of linear equations that has no solution (the lines never meet) is called', options: ['inconsistent', 'consistent', 'dependent', 'identical'], explanation: 'One solution or infinitely many – consistent; no solution – inconsistent.' },
    ta: { q: 'தீர்வு இல்லாத (கோடுகள் சந்திக்காத) நேரிய சமன்பாட்டுத் தொகுப்பு', options: ['ஒருங்கமைவற்றது', 'ஒருங்கமைவுடையது', 'சார்புடையது', 'ஒன்றியது'], explanation: 'ஒரே ஒரு தீர்வு அல்லது எண்ணற்ற தீர்வுகள் – ஒருங்கமைவுடையது; தீர்வு இல்லை – ஒருங்கமைவற்றது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 3.15 Q25, p. 135', answer: 0,
    en: { q: 'A pair of linear equations has no solution. Its graphical representation is', options: ['two parallel lines', 'two intersecting lines', 'two coinciding lines', 'two perpendicular lines'], explanation: 'Parallel lines never meet, so there is no common point (solution).' },
    ta: { q: 'ஒரு சோடி நேரிய சமன்பாடுகளுக்குத் தீர்வு இல்லை எனில் அதன் வரைபடம்', options: ['இரு இணை கோடுகள்', 'இரு வெட்டும் கோடுகள்', 'ஒன்றின் மேல் ஒன்று பொருந்தும் இரு கோடுகள்', 'இரு செங்குத்துக் கோடுகள்'], explanation: 'இணை கோடுகள் சந்திப்பதில்லை; எனவே பொதுப் புள்ளி (தீர்வு) இல்லை.' },
  },
  {
    difficulty: 'easy', source: '§3.6.2, p. 109', answer: 0,
    en: { q: 'The short-cut method of dividing a polynomial by a linear polynomial using only coefficients is called', options: ['synthetic division', 'long division', 'cross multiplication', 'factorisation by grouping'], explanation: 'Synthetic division works with coefficients only, without writing the variables.' },
    ta: { q: 'கெழுக்களை மட்டும் பயன்படுத்தி ஒரு பல்லுறுப்புக் கோவையை ஒருபடிக் கோவையால் வகுக்கும் சுருக்க முறை', options: ['தொகுமுறை வகுத்தல்', 'நீள் வகுத்தல்', 'குறுக்குப் பெருக்கல்', 'குழுவாக்கிக் காரணிப்படுத்துதல்'], explanation: 'தொகுமுறை வகுத்தலில் மாறிகளை எழுதாமல் கெழுக்களை மட்டும் பயன்படுத்துகிறோம்.' },
  },
  // ---------------------------------------------------------------- Medium
  {
    difficulty: 'medium', source: 'Book exercise 3.1 Q1(v), p. 87', answer: 0,
    en: { q: 'Is √5x² + √3x + √2 a polynomial?', options: ['Yes, because all powers of x are whole numbers', 'No, because the coefficients are irrational', 'No, because √2 is not a term in x', 'Yes, but only if x is rational'], explanation: 'Coefficients can be any real numbers; only the powers of the variable must be whole numbers.' },
    ta: { q: '√5x² + √3x + √2 ஒரு பல்லுறுப்புக் கோவையா?', options: ['ஆம்; x இன் அடுக்குகள் அனைத்தும் முழு எண்கள்', 'இல்லை; கெழுக்கள் விகிதமுறா எண்கள்', 'இல்லை; √2 இல் x இல்லை', 'ஆம், x விகிதமுறு எண் எனில் மட்டும்'], explanation: 'கெழுக்கள் எந்த மெய்யெண்ணாகவும் இருக்கலாம்; மாறியின் அடுக்குகள் மட்டும் முழு எண்களாக இருக்க வேண்டும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.1 Q3(ii), p. 87', answer: 0,
    en: { q: 'The degree of (x³ − x⁴ + 6x⁶)/x² is', options: ['4', '6', '2', '8'], explanation: 'Dividing each term by x² gives x − x² + 6x⁴, of degree 4.' },
    ta: { q: '(x³ − x⁴ + 6x⁶)/x² இன் படி', options: ['4', '6', '2', '8'], explanation: 'ஒவ்வோர் உறுப்பையும் x² ஆல் வகுக்க x − x² + 6x⁴; படி 4.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.1 Q3(iii), p. 87', answer: 0,
    en: { q: 'The degree of x³(x² + x) is', options: ['5', '3', '6', '2'], explanation: 'x³(x² + x) = x⁵ + x⁴, of degree 5.' },
    ta: { q: 'x³(x² + x) இன் படி', options: ['5', '3', '6', '2'], explanation: 'x³(x² + x) = x⁵ + x⁴; படி 5.' },
  },
  {
    difficulty: 'medium', source: 'Book example 3.1, p. 83', answer: 0,
    en: { q: 'The degree of the polynomial 6ab⁸ + 5a²b³c² − 7ab + 4b²c + 2 is', options: ['9', '8', '7', '2'], explanation: 'Degrees of the terms: 1 + 8 = 9, 2 + 3 + 2 = 7, 2, 3, 0. The highest is 9.' },
    ta: { q: '6ab⁸ + 5a²b³c² − 7ab + 4b²c + 2 என்ற பல்லுறுப்புக் கோவையின் படி', options: ['9', '8', '7', '2'], explanation: 'ஒவ்வோர் உறுப்பின் படி: 1 + 8 = 9, 2 + 3 + 2 = 7, 2, 3, 0. மிக உயர்ந்த படி 9.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.1 Q4(i), p. 87', answer: 0,
    en: { q: 'x − 9 + √7x³ + 6x² in standard (descending) form is', options: ['√7x³ + 6x² + x − 9', '−9 + x + 6x² + √7x³', '6x² + √7x³ + x − 9', '√7x³ + x + 6x² − 9'], explanation: 'Arrange the terms in decreasing powers of x: x³, x², x, constant.' },
    ta: { q: 'x − 9 + √7x³ + 6x² ஐத் திட்ட வடிவில் (இறங்கு வரிசையில்) எழுதினால்', options: ['√7x³ + 6x² + x − 9', '−9 + x + 6x² + √7x³', '6x² + √7x³ + x − 9', '√7x³ + x + 6x² − 9'], explanation: 'x இன் அடுக்குகள் இறங்கும்படி: x³, x², x, மாறிலி.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.1 Q5(i), p. 87', answer: 0,
    en: { q: 'If p(x) = 6x² − 7x + 2 and q(x) = 6x³ − 7x + 15, then p(x) + q(x) is', options: ['6x³ + 6x² − 14x + 17', '12x³ − 14x + 17', '6x³ + 6x² − 7x + 17', '6x³ + 6x² + 14x + 17'], explanation: 'Add like terms: 6x³ + 6x² + (−7 − 7)x + (2 + 15). Degree 3.' },
    ta: { q: 'p(x) = 6x² − 7x + 2, q(x) = 6x³ − 7x + 15 எனில் p(x) + q(x) =', options: ['6x³ + 6x² − 14x + 17', '12x³ − 14x + 17', '6x³ + 6x² − 7x + 17', '6x³ + 6x² + 14x + 17'], explanation: 'ஒத்த உறுப்புகளைக் கூட்ட: 6x³ + 6x² + (−7 − 7)x + (2 + 15) = 6x³ + 6x² − 14x + 17; படி 3.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.1 Q6(i), p. 87', answer: 0,
    en: { q: 'Subtract q(x) = 6x − 9 from p(x) = 7x² + 6x − 1. The result and its degree are', options: ['7x² + 8, degree 2', '7x² + 12x − 10, degree 2', '7x² − 10, degree 2', '7x² + 8, degree 1'], explanation: '(7x² + 6x − 1) − (6x − 9) = 7x² + 8.' },
    ta: { q: 'p(x) = 7x² + 6x − 1 இலிருந்து q(x) = 6x − 9 ஐக் கழிக்கக் கிடைப்பதும் அதன் படியும்', options: ['7x² + 8, படி 2', '7x² + 12x − 10, படி 2', '7x² − 10, படி 2', '7x² + 8, படி 1'], explanation: '(7x² + 6x − 1) − (6x − 9) = 7x² + 8.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.1 Q7, p. 88', answer: 0,
    en: { q: 'What should be added to 2x³ + 6x² − 5x + 8 to get 3x³ − 2x² + 6x + 15?', options: ['x³ − 8x² + 11x + 7', '5x³ + 4x² + x + 23', 'x³ + 8x² − 11x − 7', 'x³ − 8x² + x + 7'], explanation: '(3x³ − 2x² + 6x + 15) − (2x³ + 6x² − 5x + 8) = x³ − 8x² + 11x + 7.' },
    ta: { q: '2x³ + 6x² − 5x + 8 உடன் எந்தப் பல்லுறுப்புக் கோவையைக் கூட்ட 3x³ − 2x² + 6x + 15 கிடைக்கும்?', options: ['x³ − 8x² + 11x + 7', '5x³ + 4x² + x + 23', 'x³ + 8x² − 11x − 7', 'x³ − 8x² + x + 7'], explanation: '(3x³ − 2x² + 6x + 15) − (2x³ + 6x² − 5x + 8) = x³ − 8x² + 11x + 7.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.1 Q8, p. 88', answer: 0,
    en: { q: 'What must be subtracted from 2x⁴ + 4x² − 3x + 7 to get 3x³ − x² + 2x + 1?', options: ['2x⁴ − 3x³ + 5x² − 5x + 6', '2x⁴ + 3x³ + 3x² − x + 8', '−2x⁴ + 3x³ − 5x² + 5x − 6', '2x⁴ − 3x³ + 3x² − 5x + 6'], explanation: '(2x⁴ + 4x² − 3x + 7) − (3x³ − x² + 2x + 1) = 2x⁴ − 3x³ + 5x² − 5x + 6.' },
    ta: { q: '2x⁴ + 4x² − 3x + 7 இலிருந்து எந்தப் பல்லுறுப்புக் கோவையைக் கழிக்க 3x³ − x² + 2x + 1 கிடைக்கும்?', options: ['2x⁴ − 3x³ + 5x² − 5x + 6', '2x⁴ + 3x³ + 3x² − x + 8', '−2x⁴ + 3x³ − 5x² + 5x − 6', '2x⁴ − 3x³ + 3x² − 5x + 6'], explanation: '(2x⁴ + 4x² − 3x + 7) − (3x³ − x² + 2x + 1) = 2x⁴ − 3x³ + 5x² − 5x + 6.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.1 Q9(ii), p. 88', answer: 0,
    en: { q: '(7x + 2)(15x − 9) =', options: ['105x² − 33x − 18', '105x² + 33x − 18', '105x² − 93x − 18', '22x − 7'], explanation: '105x² − 63x + 30x − 18 = 105x² − 33x − 18 (degree 2).' },
    ta: { q: '(7x + 2)(15x − 9) =', options: ['105x² − 33x − 18', '105x² + 33x − 18', '105x² − 93x − 18', '22x − 7'], explanation: '105x² − 63x + 30x − 18 = 105x² − 33x − 18 (படி 2).' },
  },
  {
    difficulty: 'medium', source: 'Book example 3.6, p. 86', answer: 0,
    en: { q: '(4x − 5)(2x² + 3x − 6) =', options: ['8x³ + 2x² − 39x + 30', '8x³ + 22x² − 39x + 30', '8x³ + 2x² − 9x + 30', '8x³ − 2x² − 39x − 30'], explanation: '8x³ + 12x² − 24x − 10x² − 15x + 30 = 8x³ + 2x² − 39x + 30.' },
    ta: { q: '(4x − 5)(2x² + 3x − 6) =', options: ['8x³ + 2x² − 39x + 30', '8x³ + 22x² − 39x + 30', '8x³ + 2x² − 9x + 30', '8x³ − 2x² − 39x − 30'], explanation: '8x³ + 12x² − 24x − 10x² − 15x + 30 = 8x³ + 2x² − 39x + 30.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.1 Q10, p. 88', answer: 0,
    en: { q: 'A chocolate costs ₹(x + y) and Amir buys (x + y) chocolates. If x = 10 and y = 5, the amount paid is', options: ['₹225', '₹125', '₹150', '₹30'], explanation: 'Amount = (x + y)² = x² + 2xy + y² = 15² = 225.' },
    ta: { q: 'ஓர் இனிப்பின் விலை ₹(x + y). அமீர் (x + y) இனிப்புகளை வாங்கினார். x = 10, y = 5 எனில் அமீர் கொடுத்த தொகை', options: ['₹225', '₹125', '₹150', '₹30'], explanation: 'தொகை = (x + y)² = x² + 2xy + y² = 15² = 225.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.1 Q11, p. 88', answer: 0,
    en: { q: 'The length of a rectangle is (3x + 2) units and its breadth is (3x − 2) units. Its area when x = 20 is', options: ['3596 sq. units', '3604 sq. units', '3600 sq. units', '240 sq. units'], explanation: 'Area = 9x² − 4 = 9(400) − 4 = 3596.' },
    ta: { q: 'ஒரு செவ்வகத்தின் நீளம் (3x + 2) அலகுகள், அகலம் (3x − 2) அலகுகள். x = 20 எனில் பரப்பளவு', options: ['3596 ச. அலகுகள்', '3604 ச. அலகுகள்', '3600 ச. அலகுகள்', '240 ச. அலகுகள்'], explanation: 'பரப்பளவு = 9x² − 4 = 9(400) − 4 = 3596.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.1 Q12, p. 88', answer: 0,
    en: { q: 'p(x) is a polynomial of degree 1 and q(x) is a polynomial of degree 2. Then p(x) × q(x) is a polynomial of degree', options: ['3 (cubic)', '2 (quadratic)', '1 (linear)', '4'], explanation: 'When polynomials are multiplied, their degrees add: 1 + 2 = 3.' },
    ta: { q: 'p(x) படி 1, q(x) படி 2 கொண்ட பல்லுறுப்புக் கோவைகள் எனில் p(x) × q(x) இன் படி', options: ['3 (முப்படி)', '2 (இருபடி)', '1 (ஒருபடி)', '4'], explanation: 'பெருக்கும்போது படிகள் கூடுகின்றன: 1 + 2 = 3.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.15 Q6, p. 134', answer: 0,
    en: { q: 'The sum of p(x) = x³ − x² − 2 and q(x) = x² − 3x + 1 is', options: ['x³ − 3x − 1', 'x³ + 2x² − 1', 'x³ − 2x² − 3x', 'x³ − 2x² + 3x − 1'], explanation: 'The x² terms cancel: x³ − 3x + (−2 + 1) = x³ − 3x − 1.' },
    ta: { q: 'p(x) = x³ − x² − 2, q(x) = x² − 3x + 1 ஆகியவற்றின் கூடுதல்', options: ['x³ − 3x − 1', 'x³ + 2x² − 1', 'x³ − 2x² − 3x', 'x³ − 2x² + 3x − 1'], explanation: 'x² உறுப்புகள் நீங்குகின்றன: x³ − 3x + (−2 + 1) = x³ − 3x − 1.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.15 Q7, p. 134', answer: 0,
    en: { q: 'The degree of the polynomial (y³ − 2)(y³ + 1) is', options: ['6', '9', '3', '2'], explanation: 'The product begins with y³ × y³ = y⁶.' },
    ta: { q: '(y³ − 2)(y³ + 1) என்ற பல்லுறுப்புக் கோவையின் படி', options: ['6', '9', '3', '2'], explanation: 'பெருக்கலின் முதல் உறுப்பு y³ × y³ = y⁶.' },
  },
  {
    difficulty: 'medium', source: 'Book example 3.7, p. 90', answer: 0,
    en: { q: 'The zeros of f(x) = x² − 4x + 3 are', options: ['1 and 3', '−1 and −3', '1 and −3', '2 and 3'], explanation: 'f(1) = 1 − 4 + 3 = 0 and f(3) = 9 − 12 + 3 = 0.' },
    ta: { q: 'f(x) = x² − 4x + 3 இன் பூச்சியங்கள்', options: ['1, 3', '−1, −3', '1, −3', '2, 3'], explanation: 'f(1) = 1 − 4 + 3 = 0, f(3) = 9 − 12 + 3 = 0.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.2 Q2, p. 91', answer: 0,
    en: { q: 'If p(x) = x² − 2√2x + 1, then p(2√2) is', options: ['1', '0', '9', '17'], explanation: 'p(2√2) = 8 − 2√2(2√2) + 1 = 8 − 8 + 1 = 1.' },
    ta: { q: 'p(x) = x² − 2√2x + 1 எனில் p(2√2) =', options: ['1', '0', '9', '17'], explanation: 'p(2√2) = 8 − 2√2(2√2) + 1 = 8 − 8 + 1 = 1.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.2 Q1, p. 91', answer: 0,
    en: { q: 'If f(y) = 6y − 3y² + 3, then f(−1) is', options: ['−6', '6', '0', '−12'], explanation: 'f(−1) = −6 − 3 + 3 = −6.' },
    ta: { q: 'f(y) = 6y − 3y² + 3 எனில் f(−1) =', options: ['−6', '6', '0', '−12'], explanation: 'f(−1) = −6 − 3 + 3 = −6.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.2 Q5(iv), p. 91', answer: 0,
    en: { q: 'For p(x) = (x + 3)(x − 4), which of the following is correct?', options: ['Both x = 4 and x = −3 are zeros', 'Only x = 4 is a zero', 'Only x = −3 is a zero', 'x = 3 and x = −4 are the zeros'], explanation: 'p(4) = 7 × 0 = 0 and p(−3) = 0 × (−7) = 0.' },
    ta: { q: 'p(x) = (x + 3)(x − 4) க்குச் சரியானது எது?', options: ['x = 4, x = −3 இரண்டும் பூச்சியங்கள்', 'x = 4 மட்டும் பூச்சியம்', 'x = −3 மட்டும் பூச்சியம்', 'x = 3, x = −4 பூச்சியங்கள்'], explanation: 'p(4) = 7 × 0 = 0, p(−3) = 0 × (−7) = 0.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.2 Q6(ii), p. 92', answer: 0, imageUrl: `${IMG}/graph-fig3-11.png`,
    en: { q: 'The number of zeros of the polynomial whose graph is shown is', options: ['3', '2', '1', '4'], explanation: 'The curve cuts the X-axis at three points, so the polynomial has 3 zeros.' },
    ta: { q: 'படத்தில் உள்ள வரைபடத்தால் குறிக்கப்படும் பல்லுறுப்புக் கோவையின் பூச்சியங்களின் எண்ணிக்கை', options: ['3', '2', '1', '4'], explanation: 'வளைவரை X அச்சை மூன்று புள்ளிகளில் வெட்டுகிறது; எனவே 3 பூச்சியங்கள்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.2 Q6(v), p. 92', answer: 0, imageUrl: `${IMG}/graph-fig3-14.png`,
    en: { q: 'From the graph shown, the number of zeros of the polynomial is', options: ['1', '2', '0', '3'], explanation: 'The curve only touches the X-axis at one point; the dot on the Y-axis is not a zero.' },
    ta: { q: 'படத்தில் உள்ள வரைபடத்திலிருந்து, பல்லுறுப்புக் கோவையின் பூச்சியங்களின் எண்ணிக்கை', options: ['1', '2', '0', '3'], explanation: 'வளைவரை X அச்சை ஒரே ஒரு புள்ளியில் தொடுகிறது; Y அச்சில் உள்ள புள்ளி பூச்சியம் அல்ல.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.2 Q6(iii), p. 92', answer: 0,
    en: { q: 'The graph of a polynomial is a U-shaped curve lying entirely above the X-axis, touching the Y-axis only. The number of zeros is', options: ['0', '1', '2', 'infinitely many'], explanation: 'Zeros are where the graph meets the X-axis; this graph never meets it.' },
    ta: { q: 'ஒரு பல்லுறுப்புக் கோவையின் வரைபடம் X அச்சுக்கு முழுவதும் மேலே உள்ள U வடிவ வளைவரை; அது Y அச்சை மட்டும் தொடுகிறது. பூச்சியங்களின் எண்ணிக்கை', options: ['0', '1', '2', 'எண்ணற்றவை'], explanation: 'வரைபடம் X அச்சைச் சந்திக்கும் இடங்களே பூச்சியங்கள்; இவ்வரைபடம் X அச்சைச் சந்திக்கவில்லை.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.3 Q1, p. 96', answer: 0,
    en: { q: 'Is p(x) = x³ − 5x² + 4x − 3 a multiple of g(x) = x − 2?', options: ['No, because p(2) = −7 ≠ 0', 'Yes, because p(2) = 0', 'No, because p(−2) ≠ 0', 'Yes, because p(−2) = 0'], explanation: 'p(2) = 8 − 20 + 8 − 3 = −7, so the remainder is not zero.' },
    ta: { q: 'p(x) = x³ − 5x² + 4x − 3 என்ற பல்லுறுப்புக் கோவை g(x) = x − 2 என்ற பல்லுறுப்புக் கோவையின் மடங்கா?', options: ['இல்லை; p(2) = −7 ≠ 0', 'ஆம்; p(2) = 0', 'இல்லை; p(−2) ≠ 0', 'ஆம்; p(−2) = 0'], explanation: 'p(2) = 8 − 20 + 8 − 3 = −7; மீதி பூச்சியம் அல்ல.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.3 Q2(ii), p. 96', answer: 0,
    en: { q: 'The remainder when p(x) = 4x³ − 12x² + 14x − 3 is divided by g(x) = 2x − 1 is', options: ['3/2', '0', '−3/2', '3'], explanation: 'p(1/2) = 1/2 − 3 + 7 − 3 = 3/2.' },
    ta: { q: 'p(x) = 4x³ − 12x² + 14x − 3 ஐ g(x) = 2x − 1 ஆல் வகுக்கக் கிடைக்கும் மீதி', options: ['3/2', '0', '−3/2', '3'], explanation: 'p(1/2) = 1/2 − 3 + 7 − 3 = 3/2.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.3 Q2(iii), p. 96', answer: 0,
    en: { q: 'The remainder when p(x) = x³ − 3x² + 4x + 50 is divided by (x − 3) is', options: ['62', '50', '38', '−4'], explanation: 'p(3) = 27 − 27 + 12 + 50 = 62.' },
    ta: { q: 'p(x) = x³ − 3x² + 4x + 50 ஐ (x − 3) ஆல் வகுக்கக் கிடைக்கும் மீதி', options: ['62', '50', '38', '−4'], explanation: 'p(3) = 27 − 27 + 12 + 50 = 62.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.3 Q3, p. 96', answer: 0,
    en: { q: 'The remainder when 3x³ − 4x² + 7x − 5 is divided by (x + 3) is', options: ['−143', '67', '−17', '143'], explanation: 'p(−3) = −81 − 36 − 21 − 5 = −143.' },
    ta: { q: '3x³ − 4x² + 7x − 5 ஐ (x + 3) ஆல் வகுக்கக் கிடைக்கும் மீதி', options: ['−143', '67', '−17', '143'], explanation: 'p(−3) = −81 − 36 − 21 − 5 = −143.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.3 Q4, p. 96', answer: 0,
    en: { q: 'The remainder when x²⁰¹⁸ + 2018 is divided by x − 1 is', options: ['2019', '2018', '0', '2017'], explanation: 'p(1) = 1²⁰¹⁸ + 2018 = 2019.' },
    ta: { q: 'x²⁰¹⁸ + 2018 ஐ x − 1 ஆல் வகுக்கக் கிடைக்கும் மீதி', options: ['2019', '2018', '0', '2017'], explanation: 'p(1) = 1²⁰¹⁸ + 2018 = 2019.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.15 Q4, p. 134', answer: 0,
    en: { q: 'If x⁵¹ + 51 is divided by x + 1, the remainder is', options: ['50', '0', '1', '49'], explanation: 'p(−1) = (−1)⁵¹ + 51 = −1 + 51 = 50.' },
    ta: { q: 'x⁵¹ + 51 ஐ x + 1 ஆல் வகுக்கக் கிடைக்கும் மீதி', options: ['50', '0', '1', '49'], explanation: 'p(−1) = (−1)⁵¹ + 51 = −1 + 51 = 50.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.3 Q5, p. 96', answer: 0,
    en: { q: 'For what value of k is p(x) = 2x³ − kx² + 3x + 10 exactly divisible by (x − 2)?', options: ['8', '−8', '4', '32'], explanation: 'p(2) = 16 − 4k + 6 + 10 = 32 − 4k = 0, so k = 8.' },
    ta: { q: 'k இன் எந்த மதிப்பிற்கு p(x) = 2x³ − kx² + 3x + 10 ஆனது (x − 2) ஆல் மீதியின்றி வகுபடும்?', options: ['8', '−8', '4', '32'], explanation: 'p(2) = 16 − 4k + 6 + 10 = 32 − 4k = 0; k = 8.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.15 Q1, p. 134', answer: 0,
    en: { q: 'If x³ + 6x² + kx + 6 is exactly divisible by (x + 2), then k is', options: ['11', '−6', '−7', '−8'], explanation: 'p(−2) = −8 + 24 − 2k + 6 = 22 − 2k = 0, so k = 11.' },
    ta: { q: 'x³ + 6x² + kx + 6 என்பது (x + 2) ஆல் மீதியின்றி வகுபடும் எனில் k =', options: ['11', '−6', '−7', '−8'], explanation: 'p(−2) = −8 + 24 − 2k + 6 = 22 − 2k = 0; k = 11.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.3 Q7, p. 96', answer: 0,
    en: { q: 'Which of the following polynomials has (x − 1) as a factor?', options: ['x³ + 5x² − 10x + 4', 'x⁴ + 5x² − 5x + 1', 'x³ + x² + x + 1', 'x² + 1'], explanation: 'For x³ + 5x² − 10x + 4 the sum of coefficients is 1 + 5 − 10 + 4 = 0; for x⁴ + 5x² − 5x + 1 it is 2.' },
    ta: { q: 'கீழ்க்காணும் பல்லுறுப்புக் கோவைகளில் (x − 1) ஐக் காரணியாகக் கொண்டது எது?', options: ['x³ + 5x² − 10x + 4', 'x⁴ + 5x² − 5x + 1', 'x³ + x² + x + 1', 'x² + 1'], explanation: 'x³ + 5x² − 10x + 4 இன் கெழுக்களின் கூடுதல் 1 + 5 − 10 + 4 = 0; x⁴ + 5x² − 5x + 1 க்கு அது 2.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.3 Q9, p. 97', answer: 0,
    en: { q: 'If (x + 3) is a factor of x³ − 3x² − mx + 24, then m is', options: ['10', '−10', '6', '30'], explanation: 'p(−3) = −27 − 27 + 3m + 24 = 3m − 30 = 0, so m = 10.' },
    ta: { q: '(x + 3) என்பது x³ − 3x² − mx + 24 இன் காரணி எனில் m =', options: ['10', '−10', '6', '30'], explanation: 'p(−3) = −27 − 27 + 3m + 24 = 3m − 30 = 0; m = 10.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.3 Q11, p. 97', answer: 0,
    en: { q: 'If (x − 1) divides kx³ − 2x² + 25x − 26 without remainder, then k is', options: ['3', '−3', '1', '53'], explanation: 'p(1) = k − 2 + 25 − 26 = k − 3 = 0, so k = 3.' },
    ta: { q: '(x − 1) ஆனது kx³ − 2x² + 25x − 26 ஐ மீதியின்றி வகுக்கும் எனில் k =', options: ['3', '−3', '1', '53'], explanation: 'p(1) = k − 2 + 25 − 26 = k − 3 = 0; k = 3.' },
  },
  {
    difficulty: 'medium', source: 'Book example 3.15, p. 96', answer: 0,
    en: { q: 'If (x − 2) is a factor of 2x³ − 6x² + mx + 4, then m is', options: ['2', '−2', '4', '0'], explanation: 'p(2) = 16 − 24 + 2m + 4 = −4 + 2m = 0, so m = 2.' },
    ta: { q: '(x − 2) என்பது 2x³ − 6x² + mx + 4 இன் காரணி எனில் m =', options: ['2', '−2', '4', '0'], explanation: 'p(2) = 16 − 24 + 2m + 4 = −4 + 2m = 0; m = 2.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.3 Q12, p. 97', answer: 0,
    en: { q: 'Can (x + 2) and (x − 4) be the sides of a rectangle of area x² − 2x − 8?', options: ['Yes, since p(−2) = 0 and p(4) = 0', 'No, since p(2) ≠ 0', 'No, since p(−4) ≠ 0', 'Yes, since p(0) = −8'], explanation: 'Both are factors by the factor theorem, and (x + 2)(x − 4) = x² − 2x − 8.' },
    ta: { q: 'x² − 2x − 8 என்பது ஒரு செவ்வகத்தின் பரப்பு எனில், (x + 2) மற்றும் (x − 4) அதன் பக்கங்களாக இருக்க முடியுமா?', options: ['ஆம்; p(−2) = 0, p(4) = 0', 'இல்லை; p(2) ≠ 0', 'இல்லை; p(−4) ≠ 0', 'ஆம்; p(0) = −8'], explanation: 'காரணித் தேற்றப்படி இரண்டும் காரணிகள்; (x + 2)(x − 4) = x² − 2x − 8.' },
  },
  {
    difficulty: 'medium', source: 'Book example 3.11, p. 93', answer: 0,
    en: { q: 'The remainder when f(x) = x³ − ax² + 6x − a is divided by (x − a) is', options: ['5a', '0', '7a', '6a − a³'], explanation: 'f(a) = a³ − a³ + 6a − a = 5a.' },
    ta: { q: 'f(x) = x³ − ax² + 6x − a ஐ (x − a) ஆல் வகுக்கக் கிடைக்கும் மீதி', options: ['5a', '0', '7a', '6a − a³'], explanation: 'f(a) = a³ − a³ + 6a − a = 5a.' },
  },
  {
    difficulty: 'medium', source: 'Book example 3.16, p. 97', answer: 0,
    en: { q: '(3x + 4y)² =', options: ['9x² + 24xy + 16y²', '9x² + 12xy + 16y²', '9x² + 16y²', '3x² + 24xy + 4y²'], explanation: '(3x)² + 2(3x)(4y) + (4y)² = 9x² + 24xy + 16y².' },
    ta: { q: '(3x + 4y)² =', options: ['9x² + 24xy + 16y²', '9x² + 12xy + 16y²', '9x² + 16y²', '3x² + 24xy + 4y²'], explanation: '(3x)² + 2(3x)(4y) + (4y)² = 9x² + 24xy + 16y².' },
  },
  {
    difficulty: 'medium', source: 'Book example 3.16(iv), p. 97', answer: 0,
    en: { q: '(m + 5)(m − 8) =', options: ['m² − 3m − 40', 'm² + 3m − 40', 'm² − 13m − 40', 'm² − 3m + 40'], explanation: '(x + a)(x + b) = x² + (a + b)x + ab with a = 5, b = −8.' },
    ta: { q: '(m + 5)(m − 8) =', options: ['m² − 3m − 40', 'm² + 3m − 40', 'm² − 13m − 40', 'm² − 3m + 40'], explanation: 'a = 5, b = −8: m² + (5 − 8)m + (5)(−8) = m² − 3m − 40.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.4 Q1(i), p. 101', answer: 0,
    en: { q: '(x + 2y + 3z)² =', options: ['x² + 4y² + 9z² + 4xy + 12yz + 6xz', 'x² + 4y² + 9z² + 2xy + 6yz + 3xz', 'x² + 2y² + 3z² + 4xy + 12yz + 6xz', 'x² + 4y² + 9z²'], explanation: '(a + b + c)² = a² + b² + c² + 2ab + 2bc + 2ca with a = x, b = 2y, c = 3z.' },
    ta: { q: '(x + 2y + 3z)² =', options: ['x² + 4y² + 9z² + 4xy + 12yz + 6xz', 'x² + 4y² + 9z² + 2xy + 6yz + 3xz', 'x² + 2y² + 3z² + 4xy + 12yz + 6xz', 'x² + 4y² + 9z²'], explanation: 'a = x, b = 2y, c = 3z என (a + b + c)² = a² + b² + c² + 2ab + 2bc + 2ca.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.15 Q14, p. 135', answer: 0,
    en: { q: '(a + b − c)² is equal to', options: ['(−a − b + c)²', '(a − b + c)²', '(a + b + c)²', '(a − b − c)²'], explanation: '−a − b + c = −(a + b − c), and squaring removes the minus sign.' },
    ta: { q: '(a + b − c)² =', options: ['(−a − b + c)²', '(a − b + c)²', '(a + b + c)²', '(a − b − c)²'], explanation: '−a − b + c = −(a + b − c); வர்க்கப்படுத்தும்போது குறி நீங்கும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.4 Q2(i), p. 101', answer: 0,
    en: { q: 'Without expanding, the coefficients of x², x and the constant term in (x + 5)(x + 6)(x + 7) are', options: ['18, 107, 210', '18, 210, 107', '210, 107, 18', '18, 77, 210'], explanation: 'a + b + c = 18, ab + bc + ca = 30 + 42 + 35 = 107, abc = 210.' },
    ta: { q: 'முழுவதும் விரிவாக்காமல், (x + 5)(x + 6)(x + 7) இல் x² இன் கெழு, x இன் கெழு மற்றும் மாறிலி உறுப்பு', options: ['18, 107, 210', '18, 210, 107', '210, 107, 18', '18, 77, 210'], explanation: 'a + b + c = 18, ab + bc + ca = 30 + 42 + 35 = 107, abc = 210.' },
  },
  {
    difficulty: 'medium', source: 'Book example 3.20, p. 99', answer: 0,
    en: { q: '(x + 5)(x + 6)(x + 4) =', options: ['x³ + 15x² + 74x + 120', 'x³ + 15x² + 120x + 74', 'x³ + 120x² + 74x + 15', 'x³ + 15x² + 54x + 120'], explanation: 'Sum = 15, sum of products in pairs = 30 + 24 + 20 = 74, product = 120.' },
    ta: { q: '(x + 5)(x + 6)(x + 4) =', options: ['x³ + 15x² + 74x + 120', 'x³ + 15x² + 120x + 74', 'x³ + 120x² + 74x + 15', 'x³ + 15x² + 54x + 120'], explanation: 'கூடுதல் 15, இரண்டிரண்டாக எடுத்த பெருக்கல்களின் கூடுதல் 30 + 24 + 20 = 74, பெருக்கல் 120.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.4 Q3, p. 101', answer: 0,
    en: { q: 'If (x + a)(x + b)(x + c) = x³ + 14x² + 59x + 70, then a + b + c is', options: ['14', '59', '70', '143'], explanation: 'Comparing with x³ + (a + b + c)x² + …, a + b + c = 14.' },
    ta: { q: '(x + a)(x + b)(x + c) = x³ + 14x² + 59x + 70 எனில் a + b + c =', options: ['14', '59', '70', '143'], explanation: 'x³ + (a + b + c)x² + … உடன் ஒப்பிட a + b + c = 14.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.4 Q4(i), p. 101', answer: 0,
    en: { q: '(3a − 4b)³ =', options: ['27a³ − 108a²b + 144ab² − 64b³', '27a³ − 64b³', '27a³ − 36a²b + 48ab² − 64b³', '9a³ − 108a²b + 144ab² − 16b³'], explanation: '(x − y)³ = x³ − 3x²y + 3xy² − y³ with x = 3a, y = 4b.' },
    ta: { q: '(3a − 4b)³ =', options: ['27a³ − 108a²b + 144ab² − 64b³', '27a³ − 64b³', '27a³ − 36a²b + 48ab² − 64b³', '9a³ − 108a²b + 144ab² − 16b³'], explanation: 'x = 3a, y = 4b என (x − y)³ = x³ − 3x²y + 3xy² − y³.' },
  },
  {
    difficulty: 'medium', source: 'Book example 3.21, p. 100', answer: 0,
    en: { q: '(5a − 3b)³ =', options: ['125a³ − 225a²b + 135ab² − 27b³', '125a³ − 27b³', '125a³ − 75a²b + 45ab² − 27b³', '125a³ + 225a²b + 135ab² + 27b³'], explanation: '(5a)³ − 3(5a)²(3b) + 3(5a)(3b)² − (3b)³.' },
    ta: { q: '(5a − 3b)³ =', options: ['125a³ − 225a²b + 135ab² − 27b³', '125a³ − 27b³', '125a³ − 75a²b + 45ab² − 27b³', '125a³ + 225a²b + 135ab² + 27b³'], explanation: '(5a)³ − 3(5a)²(3b) + 3(5a)(3b)² − (3b)³.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.4 Q5(i), p. 101', answer: 0,
    en: { q: 'Using identities, 98³ is', options: ['941192', '941292', '940192', '970299'], explanation: '(100 − 2)³ = 1000000 − 3(10000)(2) + 3(100)(4) − 8 = 1000000 − 60000 + 1200 − 8 = 941192.' },
    ta: { q: 'இயற்கணித முற்றொருமைகளைப் பயன்படுத்தி 98³ இன் மதிப்பு', options: ['941192', '941292', '940192', '970299'], explanation: '(100 − 2)³ = 1000000 − 3(10000)(2) + 3(100)(4) − 8 = 1000000 − 60000 + 1200 − 8 = 941192.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.4 Q6, p. 101', answer: 0,
    en: { q: 'If x + y + z = 9 and xy + yz + zx = 26, then x² + y² + z² is', options: ['29', '55', '81', '133'], explanation: 'x² + y² + z² = (x + y + z)² − 2(xy + yz + zx) = 81 − 52 = 29.' },
    ta: { q: 'x + y + z = 9, xy + yz + zx = 26 எனில் x² + y² + z² =', options: ['29', '55', '81', '133'], explanation: 'x² + y² + z² = (x + y + z)² − 2(xy + yz + zx) = 81 − 52 = 29.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.4 Q9, p. 101', answer: 0,
    en: { q: 'If a + 1/a = 6, then a³ + 1/a³ is', options: ['198', '216', '234', '180'], explanation: 'a³ + 1/a³ = (a + 1/a)³ − 3(a + 1/a) = 216 − 18 = 198.' },
    ta: { q: 'a + 1/a = 6 எனில் a³ + 1/a³ =', options: ['198', '216', '234', '180'], explanation: 'a³ + 1/a³ = (a + 1/a)³ − 3(a + 1/a) = 216 − 18 = 198.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.4 Q11, p. 101', answer: 0,
    en: { q: 'If (y − 1/y)³ = 27, then y³ − 1/y³ is', options: ['36', '27', '18', '30'], explanation: 'y − 1/y = 3, so y³ − 1/y³ = 27 + 3(3) = 36.' },
    ta: { q: '(y − 1/y)³ = 27 எனில் y³ − 1/y³ =', options: ['36', '27', '18', '30'], explanation: 'y − 1/y = 3; y³ − 1/y³ = 27 + 3(3) = 36.' },
  },
  {
    difficulty: 'medium', source: 'Book example 3.23, p. 101', answer: 0,
    en: { q: 'The value of 10³ − 15³ + 5³ is', options: ['−2250', '2250', '0', '−750'], explanation: '10 + (−15) + 5 = 0, so the sum of cubes = 3(10)(−15)(5) = −2250.' },
    ta: { q: '10³ − 15³ + 5³ இன் மதிப்பு', options: ['−2250', '2250', '0', '−750'], explanation: '10 − 15 + 5 = 0; எனவே கனங்களின் கூடுதல் = 3(10)(−15)(5) = −2250.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.5 Q1, p. 105', answer: 0,
    en: { q: 'Factorise ab − ac − mb + mc.', options: ['(a − m)(b − c)', '(a + m)(b − c)', '(a − m)(b + c)', '(a − b)(m − c)'], explanation: 'a(b − c) − m(b − c) = (a − m)(b − c).' },
    ta: { q: 'ab − ac − mb + mc ஐக் காரணிப்படுத்துக.', options: ['(a − m)(b − c)', '(a + m)(b − c)', '(a − m)(b + c)', '(a − b)(m − c)'], explanation: 'a(b − c) − m(b − c) = (a − m)(b − c).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.5 Q1(i), p. 105', answer: 0,
    en: { q: 'Factorise 2a² + 4a²b + 8a²c.', options: ['2a²(1 + 2b + 4c)', '2a(a + 2b + 4c)', 'a²(2 + 4b + 8c)²', '2a²(2b + 4c)'], explanation: 'Take out the common factor 2a².' },
    ta: { q: '2a² + 4a²b + 8a²c ஐக் காரணிப்படுத்துக.', options: ['2a²(1 + 2b + 4c)', '2a(a + 2b + 4c)', 'a²(2 + 4b + 8c)²', '2a²(2b + 4c)'], explanation: 'பொதுக் காரணி 2a² ஐ வெளியே எடுக்க.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.5 Q2(ii), p. 105', answer: 0,
    en: { q: 'Factorise 3a² − 24ab + 48b².', options: ['3(a − 4b)²', '3(a + 4b)²', '(3a − 4b)²', '3(a − 4b)(a + 4b)'], explanation: '3(a² − 8ab + 16b²) = 3(a − 4b)².' },
    ta: { q: '3a² − 24ab + 48b² ஐக் காரணிப்படுத்துக.', options: ['3(a − 4b)²', '3(a + 4b)²', '(3a − 4b)²', '3(a − 4b)(a + 4b)'], explanation: '3(a² − 8ab + 16b²) = 3(a − 4b)².' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.5 Q2(v), p. 105', answer: 0,
    en: { q: 'Factorise 6 − 216x².', options: ['6(1 + 6x)(1 − 6x)', '6(1 − 6x)²', '(6 + 6x)(1 − 36x)', '6(1 + 36x)(1 − 36x)'], explanation: '6(1 − 36x²) = 6(1 + 6x)(1 − 6x).' },
    ta: { q: '6 − 216x² ஐக் காரணிப்படுத்துக.', options: ['6(1 + 6x)(1 − 6x)', '6(1 − 6x)²', '(6 + 6x)(1 − 36x)', '6(1 + 36x)(1 − 36x)'], explanation: '6(1 − 36x²) = 6(1 + 6x)(1 − 6x).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.5 Q4(i), p. 105', answer: 0,
    en: { q: 'Factorise 8x³ + 125y³.', options: ['(2x + 5y)(4x² − 10xy + 25y²)', '(2x + 5y)(4x² + 10xy + 25y²)', '(2x + 5y)³', '(2x − 5y)(4x² + 10xy + 25y²)'], explanation: 'a³ + b³ = (a + b)(a² − ab + b²) with a = 2x, b = 5y.' },
    ta: { q: '8x³ + 125y³ ஐக் காரணிப்படுத்துக.', options: ['(2x + 5y)(4x² − 10xy + 25y²)', '(2x + 5y)(4x² + 10xy + 25y²)', '(2x + 5y)³', '(2x − 5y)(4x² + 10xy + 25y²)'], explanation: 'a = 2x, b = 5y என a³ + b³ = (a + b)(a² − ab + b²).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.5 Q4(ii), p. 105', answer: 0,
    en: { q: 'Factorise 27x³ − 8y³.', options: ['(3x − 2y)(9x² + 6xy + 4y²)', '(3x − 2y)(9x² − 6xy + 4y²)', '(3x − 2y)³', '(3x + 2y)(9x² − 6xy + 4y²)'], explanation: 'a³ − b³ = (a − b)(a² + ab + b²) with a = 3x, b = 2y.' },
    ta: { q: '27x³ − 8y³ ஐக் காரணிப்படுத்துக.', options: ['(3x − 2y)(9x² + 6xy + 4y²)', '(3x − 2y)(9x² − 6xy + 4y²)', '(3x − 2y)³', '(3x + 2y)(9x² − 6xy + 4y²)'], explanation: 'a = 3x, b = 2y என a³ − b³ = (a − b)(a² + ab + b²).' },
  },
  {
    difficulty: 'medium', source: 'Book example 3.27, p. 105', answer: 0,
    en: { q: 'Factorise 2x² + 15x + 27.', options: ['(x + 3)(2x + 9)', '(x + 9)(2x + 3)', '(2x + 27)(x + 1)', '(x + 3)(2x − 9)'], explanation: 'ac = 54 = 6 × 9 and 6 + 9 = 15: 2x² + 6x + 9x + 27 = 2x(x + 3) + 9(x + 3).' },
    ta: { q: '2x² + 15x + 27 ஐக் காரணிப்படுத்துக.', options: ['(x + 3)(2x + 9)', '(x + 9)(2x + 3)', '(2x + 27)(x + 1)', '(x + 3)(2x − 9)'], explanation: 'ac = 54 = 6 × 9, 6 + 9 = 15: 2x² + 6x + 9x + 27 = 2x(x + 3) + 9(x + 3).' },
  },
  {
    difficulty: 'medium', source: 'Book example 3.30, p. 106', answer: 0,
    en: { q: 'Factorise 2x² − 15x − 27.', options: ['(x − 9)(2x + 3)', '(x + 9)(2x − 3)', '(x − 3)(2x − 9)', '(x + 3)(2x − 9)'], explanation: 'ac = −54; −18 and 3 have product −54 and sum −15: 2x(x − 9) + 3(x − 9).' },
    ta: { q: '2x² − 15x − 27 ஐக் காரணிப்படுத்துக.', options: ['(x − 9)(2x + 3)', '(x + 9)(2x − 3)', '(x − 3)(2x − 9)', '(x + 3)(2x − 9)'], explanation: 'ac = −54; −18, 3 இன் பெருக்கல் −54, கூடுதல் −15: 2x(x − 9) + 3(x − 9).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.6 Q1(iv), p. 107', answer: 0,
    en: { q: 'Factorise t² + 72 − 17t.', options: ['(t − 9)(t − 8)', '(t + 9)(t + 8)', '(t − 9)(t + 8)', '(t − 12)(t − 6)'], explanation: 't² − 17t + 72: −9 and −8 have product 72 and sum −17.' },
    ta: { q: 't² + 72 − 17t ஐக் காரணிப்படுத்துக.', options: ['(t − 9)(t − 8)', '(t + 9)(t + 8)', '(t − 9)(t + 8)', '(t − 12)(t − 6)'], explanation: 't² − 17t + 72: −9, −8 இன் பெருக்கல் 72, கூடுதல் −17.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.6 Q1(vi), p. 107', answer: 0,
    en: { q: 'Factorise a² + 10a − 600.', options: ['(a + 30)(a − 20)', '(a − 30)(a + 20)', '(a + 60)(a − 10)', '(a + 25)(a − 24)'], explanation: '30 × (−20) = −600 and 30 − 20 = 10.' },
    ta: { q: 'a² + 10a − 600 ஐக் காரணிப்படுத்துக.', options: ['(a + 30)(a − 20)', '(a − 30)(a + 20)', '(a + 60)(a − 10)', '(a + 25)(a − 24)'], explanation: '30 × (−20) = −600, 30 − 20 = 10.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.6 Q2(ii), p. 107', answer: 0,
    en: { q: 'Factorise 5x² − 29xy − 42y².', options: ['(x − 7y)(5x + 6y)', '(x + 7y)(5x − 6y)', '(5x − 7y)(x + 6y)', '(x − 6y)(5x + 7y)'], explanation: 'ac = −210 = −35 × 6 and −35 + 6 = −29: 5x(x − 7y) + 6y(x − 7y).' },
    ta: { q: '5x² − 29xy − 42y² ஐக் காரணிப்படுத்துக.', options: ['(x − 7y)(5x + 6y)', '(x + 7y)(5x − 6y)', '(5x − 7y)(x + 6y)', '(x − 6y)(5x + 7y)'], explanation: 'ac = −210 = −35 × 6, −35 + 6 = −29: 5x(x − 7y) + 6y(x − 7y).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.6 Q2(iii), p. 107', answer: 0,
    en: { q: 'Factorise 9 − 18x + 8x².', options: ['(2x − 3)(4x − 3)', '(2x + 3)(4x + 3)', '(8x − 3)(x − 3)', '(4x − 9)(2x − 1)'], explanation: '8x² − 18x + 9: ac = 72 = (−6)(−12), sum −18; 2x(4x − 3) − 3(4x − 3).' },
    ta: { q: '9 − 18x + 8x² ஐக் காரணிப்படுத்துக.', options: ['(2x − 3)(4x − 3)', '(2x + 3)(4x + 3)', '(8x − 3)(x − 3)', '(4x − 9)(2x − 1)'], explanation: '8x² − 18x + 9: ac = 72 = (−6)(−12), கூடுதல் −18; 2x(4x − 3) − 3(4x − 3).' },
  },
  {
    difficulty: 'medium', source: 'Book example 3.31, p. 107', answer: 0,
    en: { q: 'Factorise (x + y)² + 9(x + y) + 20.', options: ['(x + y + 4)(x + y + 5)', '(x + y + 2)(x + y + 10)', '(x + y − 4)(x + y − 5)', '(x + 4)(y + 5)'], explanation: 'Put p = x + y: p² + 9p + 20 = (p + 4)(p + 5).' },
    ta: { q: '(x + y)² + 9(x + y) + 20 ஐக் காரணிப்படுத்துக.', options: ['(x + y + 4)(x + y + 5)', '(x + y + 2)(x + y + 10)', '(x + y − 4)(x + y − 5)', '(x + 4)(y + 5)'], explanation: 'p = x + y என வைக்க p² + 9p + 20 = (p + 4)(p + 5).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.7 Q1(iii), p. 111', answer: 0,
    en: { q: 'The quotient and remainder when (8x³ − 1) is divided by (2x − 1) are', options: ['4x² + 2x + 1 and 0', '4x² − 2x + 1 and 0', '4x² + 2x + 1 and −2', '4x² + 1 and 0'], explanation: '8x³ − 1 = (2x − 1)(4x² + 2x + 1), so the remainder is 0.' },
    ta: { q: '(8x³ − 1) ஐ (2x − 1) ஆல் வகுக்கக் கிடைக்கும் ஈவும் மீதியும்', options: ['4x² + 2x + 1, 0', '4x² − 2x + 1, 0', '4x² + 2x + 1, −2', '4x² + 1, 0'], explanation: '8x³ − 1 = (2x − 1)(4x² + 2x + 1); மீதி 0.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.7 Q2, p. 111', answer: 0,
    en: { q: 'The area of a rectangle is x² + 7x + 12. If its breadth is (x + 3), its length is', options: ['x + 4', 'x + 3', 'x − 4', 'x + 9'], explanation: 'x² + 7x + 12 = (x + 3)(x + 4).' },
    ta: { q: 'ஒரு செவ்வகத்தின் பரப்பு x² + 7x + 12. அதன் அகலம் (x + 3) எனில், அதன் நீளம்', options: ['x + 4', 'x + 3', 'x − 4', 'x + 9'], explanation: 'x² + 7x + 12 = (x + 3)(x + 4).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.7 Q3, p. 111', answer: 0,
    en: { q: 'The base of a parallelogram is (5x + 4) and its area is 25x² − 16. Its height is', options: ['5x − 4', '5x + 4', '5x − 16', '25x − 4'], explanation: '25x² − 16 = (5x + 4)(5x − 4).' },
    ta: { q: 'ஓர் இணைகரத்தின் பரப்பு 25x² − 16. அதன் அடிப்பக்கம் (5x + 4) எனில், அதன் உயரம்', options: ['5x − 4', '5x + 4', '5x − 16', '25x − 4'], explanation: '25x² − 16 = (5x + 4)(5x − 4).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.7 Q4, p. 111', answer: 0,
    en: { q: 'The sum of (x + 5) observations is (x³ + 125). The mean of the observations is', options: ['x² − 5x + 25', 'x² + 5x + 25', 'x² + 25', 'x − 5'], explanation: 'x³ + 125 = (x + 5)(x² − 5x + 25), so mean = sum ÷ number = x² − 5x + 25.' },
    ta: { q: '(x + 5) விவரங்களின் கூடுதல் (x³ + 125) எனில், விவரங்களின் சராசரி', options: ['x² − 5x + 25', 'x² + 5x + 25', 'x² + 25', 'x − 5'], explanation: 'x³ + 125 = (x + 5)(x² − 5x + 25); சராசரி = கூடுதல் ÷ எண்ணிக்கை = x² − 5x + 25.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.7 Q5(i), p. 111', answer: 0,
    en: { q: 'Using synthetic division, the quotient and remainder of (x³ + x² − 7x − 3) ÷ (x − 3) are', options: ['x² + 4x + 5 and 12', 'x² − 2x − 1 and −6', 'x² + 4x + 5 and 0', 'x² + 4x − 5 and 12'], explanation: 'With 3: coefficients 1, 1, −7, −3 give 1, 4, 5 and remainder 12.' },
    ta: { q: 'தொகுமுறை வகுத்தல் மூலம் (x³ + x² − 7x − 3) ÷ (x − 3) இன் ஈவும் மீதியும்', options: ['x² + 4x + 5, 12', 'x² − 2x − 1, −6', 'x² + 4x + 5, 0', 'x² + 4x − 5, 12'], explanation: '3 ஐப் பயன்படுத்தி 1, 1, −7, −3 → 1, 4, 5; மீதி 12.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.7 Q5(ii), p. 111', answer: 0,
    en: { q: 'Using synthetic division, the quotient and remainder of (x³ + 2x² − x − 4) ÷ (x + 2) are', options: ['x² − 1 and −2', 'x² + 4x + 7 and 10', 'x² − 1 and 2', 'x² + 1 and −2'], explanation: 'With −2: coefficients 1, 2, −1, −4 give 1, 0, −1 and remainder −2.' },
    ta: { q: 'தொகுமுறை வகுத்தல் மூலம் (x³ + 2x² − x − 4) ÷ (x + 2) இன் ஈவும் மீதியும்', options: ['x² − 1, −2', 'x² + 4x + 7, 10', 'x² − 1, 2', 'x² + 1, −2'], explanation: '−2 ஐப் பயன்படுத்தி 1, 2, −1, −4 → 1, 0, −1; மீதி −2.' },
  },
  {
    difficulty: 'medium', source: 'Book example 3.35, p. 109', answer: 0,
    en: { q: 'Using synthetic division, the quotient and remainder when 3x³ − 2x² + 7x − 5 is divided by x + 3 are', options: ['3x² − 11x + 40 and −125', '3x² + 7x + 28 and 79', '3x² − 11x + 40 and 125', '3x² − 11x − 40 and −125'], explanation: 'With −3: 3, −2, 7, −5 give 3, −11, 40 and remainder −125.' },
    ta: { q: 'தொகுமுறை வகுத்தல் மூலம் 3x³ − 2x² + 7x − 5 ஐ x + 3 ஆல் வகுக்கக் கிடைக்கும் ஈவும் மீதியும்', options: ['3x² − 11x + 40, −125', '3x² + 7x + 28, 79', '3x² − 11x + 40, 125', '3x² − 11x − 40, −125'], explanation: '−3 ஐப் பயன்படுத்தி 3, −2, 7, −5 → 3, −11, 40; மீதி −125.' },
  },
  {
    difficulty: 'medium', source: '§3.6.1, p. 108', answer: 0,
    en: { q: 'By the division algorithm p(x) = g(x) × q(x) + r(x), the remainder r(x) is either 0 or', options: ['of degree less than the degree of g(x)', 'of degree equal to the degree of g(x)', 'of degree greater than the degree of p(x)', 'always a constant 1'], explanation: 'The remainder must be zero or have a smaller degree than the divisor.' },
    ta: { q: 'வகுத்தல் வழிமுறை p(x) = g(x) × q(x) + r(x) இல் மீதி r(x) பூச்சியம் அல்லது', options: ['g(x) இன் படியை விடக் குறைந்த படி உடையது', 'g(x) இன் படிக்குச் சமமான படி உடையது', 'p(x) இன் படியை விட அதிக படி உடையது', 'எப்போதும் மாறிலி 1'], explanation: 'மீதி பூச்சியம் அல்லது வகுத்தியின் படியை விடக் குறைந்த படி கொண்டது.' },
  },
  {
    difficulty: 'medium', source: '§3.6.3, p. 112', answer: 0,
    en: { q: '(x − 1) is a factor of a polynomial p(x) if and only if', options: ['the sum of its coefficients is 0', 'its constant term is 0', 'the sum of its coefficients is 1', 'its leading coefficient is 1'], explanation: 'p(1) equals the sum of the coefficients, and (x − 1) is a factor exactly when p(1) = 0.' },
    ta: { q: '(x − 1) என்பது p(x) இன் காரணியாக இருக்கத் தேவையானதும் போதுமானதுமான நிபந்தனை', options: ['கெழுக்களின் கூடுதல் 0', 'மாறிலி உறுப்பு 0', 'கெழுக்களின் கூடுதல் 1', 'முதன்மைக் கெழு 1'], explanation: 'p(1) என்பது கெழுக்களின் கூடுதல்; p(1) = 0 எனில் மட்டுமே (x − 1) காரணி.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.8 Q1(v), p. 114', answer: 0,
    en: { q: 'Factorise x³ − 7x + 6.', options: ['(x − 1)(x − 2)(x + 3)', '(x + 1)(x + 2)(x − 3)', '(x − 1)(x + 2)(x − 3)', '(x − 1)(x − 3)(x + 2)'], explanation: 'Sum of coefficients 1 − 7 + 6 = 0, so (x − 1) is a factor; the quotient x² + x − 6 = (x − 2)(x + 3).' },
    ta: { q: 'x³ − 7x + 6 ஐக் காரணிப்படுத்துக.', options: ['(x − 1)(x − 2)(x + 3)', '(x + 1)(x + 2)(x − 3)', '(x − 1)(x + 2)(x − 3)', '(x − 1)(x − 3)(x + 2)'], explanation: 'கெழுக்களின் கூடுதல் 1 − 7 + 6 = 0; (x − 1) காரணி; ஈவு x² + x − 6 = (x − 2)(x + 3).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.8 Q1(vi), p. 114', answer: 0,
    en: { q: 'Factorise x³ − 10x² − x + 10.', options: ['(x − 1)(x + 1)(x − 10)', '(x − 1)(x − 1)(x + 10)', '(x + 1)(x + 1)(x − 10)', '(x − 1)(x + 1)(x + 10)'], explanation: 'x²(x − 10) − 1(x − 10) = (x² − 1)(x − 10) = (x − 1)(x + 1)(x − 10).' },
    ta: { q: 'x³ − 10x² − x + 10 ஐக் காரணிப்படுத்துக.', options: ['(x − 1)(x + 1)(x − 10)', '(x − 1)(x − 1)(x + 10)', '(x + 1)(x + 1)(x − 10)', '(x − 1)(x + 1)(x + 10)'], explanation: 'x²(x − 10) − 1(x − 10) = (x² − 1)(x − 10) = (x − 1)(x + 1)(x − 10).' },
  },
  {
    difficulty: 'medium', source: 'Book example 3.39, p. 112', answer: 0,
    en: { q: 'Factorise x³ + 13x² + 32x + 20.', options: ['(x + 1)(x + 2)(x + 10)', '(x + 1)(x + 4)(x + 5)', '(x − 1)(x − 2)(x − 10)', '(x + 2)(x + 2)(x + 5)'], explanation: 'Sum of even-power coefficients 13 + 20 = sum of odd-power coefficients 1 + 32, so (x + 1) is a factor; then x² + 12x + 20 = (x + 2)(x + 10).' },
    ta: { q: 'x³ + 13x² + 32x + 20 ஐக் காரணிப்படுத்துக.', options: ['(x + 1)(x + 2)(x + 10)', '(x + 1)(x + 4)(x + 5)', '(x − 1)(x − 2)(x − 10)', '(x + 2)(x + 2)(x + 5)'], explanation: 'இரட்டைப்படை அடுக்கு உறுப்பின் கெழு மற்றும் மாறிலியின் கூடுதல் 13 + 20 = ஒற்றைப்படை அடுக்குகள் கொண்ட உறுப்புகளின் கெழுக்களின் கூடுதல் 1 + 32; எனவே (x + 1) காரணி; x² + 12x + 20 = (x + 2)(x + 10).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.9 Q1(iii), p. 115', answer: 0,
    en: { q: 'The GCD of 9a²b²c³ and 15a³b²c⁴ is', options: ['3a²b²c³', '45a³b²c⁴', '3a³b²c⁴', '9a²b²c³'], explanation: 'GCD of 9 and 15 is 3; lowest powers are a², b², c³.' },
    ta: { q: '9a²b²c³, 15a³b²c⁴ இன் மீ.பொ.வ', options: ['3a²b²c³', '45a³b²c⁴', '3a³b²c⁴', '9a²b²c³'], explanation: '9, 15 இன் மீ.பொ.வ 3; குறைந்த அடுக்குகள் a², b², c³.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.9 Q1(iv), p. 115', answer: 0,
    en: { q: 'The GCD of 64x⁸ and 240x⁶ is', options: ['16x⁶', '8x⁶', '16x⁸', '64x⁶'], explanation: 'GCD(64, 240) = 16 and the lower power is x⁶.' },
    ta: { q: '64x⁸, 240x⁶ இன் மீ.பொ.வ', options: ['16x⁶', '8x⁶', '16x⁸', '64x⁶'], explanation: 'மீ.பொ.வ(64, 240) = 16; குறைந்த அடுக்கு x⁶.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.9 Q1(vi), p. 115', answer: 0,
    en: { q: 'The GCD of 35x⁵y³z⁴, 49x²yz³ and 14xy²z² is', options: ['7xyz²', '7x²yz²', '14xyz²', '7xyz'], explanation: 'GCD of 35, 49, 14 is 7; lowest powers x¹, y¹, z².' },
    ta: { q: '35x⁵y³z⁴, 49x²yz³, 14xy²z² இன் மீ.பொ.வ', options: ['7xyz²', '7x²yz²', '14xyz²', '7xyz'], explanation: '35, 49, 14 இன் மீ.பொ.வ 7; குறைந்த அடுக்குகள் x, y, z².' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.9 Q2(ii), p. 115', answer: 0,
    en: { q: 'The GCD of aᵐ⁺¹, aᵐ⁺² and aᵐ⁺³ is', options: ['aᵐ⁺¹', 'aᵐ⁺³', 'aᵐ', 'a³ᵐ⁺⁶'], explanation: 'The lowest power common to all three is aᵐ⁺¹.' },
    ta: { q: 'aᵐ⁺¹, aᵐ⁺², aᵐ⁺³ இன் மீ.பொ.வ', options: ['aᵐ⁺¹', 'aᵐ⁺³', 'aᵐ', 'a³ᵐ⁺⁶'], explanation: 'மூன்றுக்கும் பொதுவான குறைந்த அடுக்கு aᵐ⁺¹.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.9 Q2(iii), p. 115', answer: 0,
    en: { q: 'The GCD of 2a² + a and 4a² − 1 is', options: ['2a + 1', '2a − 1', 'a', '1'], explanation: '2a² + a = a(2a + 1) and 4a² − 1 = (2a + 1)(2a − 1).' },
    ta: { q: '2a² + a, 4a² − 1 இன் மீ.பொ.வ', options: ['2a + 1', '2a − 1', 'a', '1'], explanation: '2a² + a = a(2a + 1); 4a² − 1 = (2a + 1)(2a − 1).' },
  },
  {
    difficulty: 'medium', source: 'Book example 3.41(iii), p. 115', answer: 0,
    en: { q: 'The GCD of 2x² − 18 and x² − 2x − 3 is', options: ['x − 3', 'x + 3', '2(x − 3)', 'x + 1'], explanation: '2x² − 18 = 2(x + 3)(x − 3) and x² − 2x − 3 = (x − 3)(x + 1).' },
    ta: { q: '2x² − 18, x² − 2x − 3 இன் மீ.பொ.வ', options: ['x − 3', 'x + 3', '2(x − 3)', 'x + 1'], explanation: '2x² − 18 = 2(x + 3)(x − 3); x² − 2x − 3 = (x − 3)(x + 1).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.15 Q29, p. 136', answer: 0,
    en: { q: 'The GCD of x⁴ − y⁴ and x² − y² is', options: ['x² − y²', 'x⁴ − y⁴', '(x + y)²', '(x + y)⁴'], explanation: 'x⁴ − y⁴ = (x² + y²)(x² − y²), so x² − y² divides both.' },
    ta: { q: 'x⁴ − y⁴, x² − y² இன் மீ.பொ.வ', options: ['x² − y²', 'x⁴ − y⁴', '(x + y)²', '(x + y)⁴'], explanation: 'x⁴ − y⁴ = (x² + y²)(x² − y²); எனவே x² − y² இரண்டையும் வகுக்கும்.' },
  },
  {
    difficulty: 'medium', source: 'Book example 3.42, p. 117', answer: 0,
    en: { q: 'For the line y = 3x − 1, the value of y when x = 1 is', options: ['2', '−1', '4', '3'], explanation: 'y = 3(1) − 1 = 2, so (1, 2) lies on the line.' },
    ta: { q: 'y = 3x − 1 என்ற கோட்டிற்கு x = 1 எனில் y இன் மதிப்பு', options: ['2', '−1', '4', '3'], explanation: 'y = 3(1) − 1 = 2; எனவே (1, 2) கோட்டின் மீது உள்ளது.' },
  },
  {
    difficulty: 'medium', source: 'Book example 3.43, p. 120', answer: 0,
    en: { q: 'Which ordered pair is a solution of both x − 2y = 7 and 2x + 3y = 7?', options: ['(5, −1)', '(7, 0)', '(1, −3)', '(2, 1)'], explanation: '5 − 2(−1) = 7 and 2(5) + 3(−1) = 7.' },
    ta: { q: 'x − 2y = 7, 2x + 3y = 7 இரண்டிற்கும் தீர்வான வரிசைச் சோடி எது?', options: ['(5, −1)', '(7, 0)', '(1, −3)', '(2, 1)'], explanation: '5 − 2(−1) = 7; 2(5) + 3(−1) = 7.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.10 Q2(i), p. 124', answer: 0,
    en: { q: 'Solving graphically, the lines x + y = 7 and x − y = 3 meet at', options: ['(5, 2)', '(2, 5)', '(4, 3)', '(7, 0)'], explanation: 'Adding gives 2x = 10, x = 5, y = 2.' },
    ta: { q: 'வரைபட முறையில் x + y = 7, x − y = 3 ஆகிய கோடுகள் சந்திக்கும் புள்ளி', options: ['(5, 2)', '(2, 5)', '(4, 3)', '(7, 0)'], explanation: 'இரு சமன்பாடுகளையும் கூட்ட 2x = 10; x = 5, y = 2.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.10 Q2(iv), p. 124', answer: 0,
    en: { q: 'The solution of x − y = 0 and y + 3 = 0 is', options: ['(−3, −3)', '(3, 3)', '(3, −3)', '(0, −3)'], explanation: 'y = −3 and x = y, so x = −3.' },
    ta: { q: 'x − y = 0, y + 3 = 0 இன் தீர்வு', options: ['(−3, −3)', '(3, 3)', '(3, −3)', '(0, −3)'], explanation: 'y = −3; x = y எனவே x = −3.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.10 Q2(v), p. 124', answer: 0,
    en: { q: 'The solution of y = 2x + 1 and y + 3x − 6 = 0 is', options: ['(1, 3)', '(3, 1)', '(1, 1)', '(2, 5)'], explanation: '2x + 1 + 3x − 6 = 0 gives x = 1, y = 3.' },
    ta: { q: 'y = 2x + 1, y + 3x − 6 = 0 இன் தீர்வு', options: ['(1, 3)', '(3, 1)', '(1, 1)', '(2, 5)'], explanation: '2x + 1 + 3x − 6 = 0; x = 1, y = 3.' },
  },
  {
    difficulty: 'medium', source: 'Book example 3.44, p. 121', answer: 0,
    en: { q: 'Using the graphical method, x + y = 5 and 2x − y = 4 intersect at', options: ['(3, 2)', '(2, 3)', '(5, 0)', '(2, 0)'], explanation: 'Line 1 passes through (0, 5), (5, 0); line 2 through (0, −4), (2, 0); they meet at (3, 2).' },
    ta: { q: 'வரைபட முறையில் x + y = 5, 2x − y = 4 வெட்டும் புள்ளி', options: ['(3, 2)', '(2, 3)', '(5, 0)', '(2, 0)'], explanation: 'முதல் கோடு (0, 5), (5, 0) வழியாகவும் இரண்டாவது (0, −4), (2, 0) வழியாகவும் செல்கின்றன; (3, 2) இல் சந்திக்கின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book example 3.45, p. 122', answer: 0,
    en: { q: 'The system 3x + 2y = 6 and 6x + 4y = 8 has', options: ['no solution, as the lines are parallel', 'a unique solution', 'infinitely many solutions', 'exactly two solutions'], explanation: '6x + 4y = 8 is 3x + 2y = 4: same slope, different constant, so the lines are parallel.' },
    ta: { q: '3x + 2y = 6, 6x + 4y = 8 என்ற தொகுப்பிற்கு', options: ['தீர்வு இல்லை; கோடுகள் இணையானவை', 'ஒரே ஒரு தீர்வு', 'எண்ணற்ற தீர்வுகள்', 'சரியாக இரண்டு தீர்வுகள்'], explanation: '6x + 4y = 8 என்பது 3x + 2y = 4; சாய்வு ஒன்றே, மாறிலி வேறு; எனவே இணை கோடுகள்.' },
  },
  {
    difficulty: 'medium', source: 'Book example 3.46, p. 122', answer: 0,
    en: { q: 'The system y = 2x + 1 and −4x + 2y = 2 has', options: ['infinitely many solutions', 'no solution', 'a unique solution', 'exactly two solutions'], explanation: '−4x + 2y = 2 simplifies to y = 2x + 1: the two lines coincide.' },
    ta: { q: 'y = 2x + 1, −4x + 2y = 2 என்ற தொகுப்பிற்கு', options: ['எண்ணற்ற தீர்வுகள்', 'தீர்வு இல்லை', 'ஒரே ஒரு தீர்வு', 'சரியாக இரண்டு தீர்வுகள்'], explanation: '−4x + 2y = 2 சுருக்கினால் y = 2x + 1; இரு கோடுகளும் ஒன்றின் மேல் ஒன்று பொருந்துகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book example 3.48, p. 125', answer: 0,
    en: { q: 'By substitution, the solution of x + 3y = 16 and 2x − y = 4 is', options: ['x = 4, y = 4', 'x = 3, y = 2', 'x = 4, y = 2', 'x = 1, y = 5'], explanation: 'y = 2x − 4; x + 3(2x − 4) = 16 gives 7x = 28, x = 4, y = 4.' },
    ta: { q: 'பிரதியிடல் முறையில் x + 3y = 16, 2x − y = 4 இன் தீர்வு', options: ['x = 4, y = 4', 'x = 3, y = 2', 'x = 4, y = 2', 'x = 1, y = 5'], explanation: 'y = 2x − 4; x + 3(2x − 4) = 16; 7x = 28; x = 4, y = 4.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.11 Q1(i), p. 126', answer: 0,
    en: { q: 'Using substitution, the solution of 2x − 3y = 7 and 5x + y = 9 is', options: ['(2, −1)', '(−1, 2)', '(2, 1)', '(1, 4)'], explanation: 'y = 9 − 5x; 2x − 3(9 − 5x) = 7 gives 17x = 34, x = 2, y = −1.' },
    ta: { q: 'பிரதியிடல் முறையில் 2x − 3y = 7, 5x + y = 9 இன் தீர்வு', options: ['(2, −1)', '(−1, 2)', '(2, 1)', '(1, 4)'], explanation: 'y = 9 − 5x; 2x − 3(9 − 5x) = 7; 17x = 34; x = 2, y = −1.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.12 Q1(ii), p. 128', answer: 0,
    en: { q: 'By elimination, the solution of x − y = 5 and 3x + 2y = 25 is', options: ['(7, 2)', '(2, 7)', '(5, 0)', '(6, 1)'], explanation: '2(x − y) + (3x + 2y) = 10 + 25 gives 5x = 35, x = 7, y = 2.' },
    ta: { q: 'நீக்கல் முறையில் x − y = 5, 3x + 2y = 25 இன் தீர்வு', options: ['(7, 2)', '(2, 7)', '(5, 0)', '(6, 1)'], explanation: '2(x − y) + (3x + 2y) = 10 + 25; 5x = 35; x = 7, y = 2.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.12 Q1(vi), p. 128', answer: 0,
    en: { q: 'The solution of 13x + 11y = 70 and 11x + 13y = 74 is', options: ['(2, 4)', '(4, 2)', '(3, 3)', '(1, 5)'], explanation: 'Adding: 24(x + y) = 144, x + y = 6; subtracting: 2(x − y) = −4, x − y = −2. So x = 2, y = 4.' },
    ta: { q: '13x + 11y = 70, 11x + 13y = 74 இன் தீர்வு', options: ['(2, 4)', '(4, 2)', '(3, 3)', '(1, 5)'], explanation: 'கூட்ட 24(x + y) = 144, x + y = 6; கழிக்க 2(x − y) = −4, x − y = −2; எனவே x = 2, y = 4.' },
  },
  {
    difficulty: 'medium', source: 'Book example 3.50, p. 127', answer: 0,
    en: { q: 'By elimination, the solution of 4a + 3b = 65 and a + 2b = 35 is', options: ['a = 5, b = 15', 'a = 15, b = 5', 'a = 5, b = 10', 'a = 10, b = 12.5'], explanation: '4 × (2) − (1): 5b = 75, so b = 15 and a = 35 − 30 = 5.' },
    ta: { q: 'நீக்கல் முறையில் 4a + 3b = 65, a + 2b = 35 இன் தீர்வு', options: ['a = 5, b = 15', 'a = 15, b = 5', 'a = 5, b = 10', 'a = 10, b = 12.5'], explanation: '4 × (2) − (1): 5b = 75; b = 15; a = 35 − 30 = 5.' },
  },
  {
    difficulty: 'medium', source: 'Book example 3.52, p. 129', answer: 0,
    en: { q: 'By cross multiplication, the solution of 3x − 4y = 10 and 4x + 3y = 5 is', options: ['x = 2, y = −1', 'x = −1, y = 2', 'x = 2, y = 1', 'x = 50, y = −25'], explanation: 'x/50 = y/(−25) = 1/25, so x = 2 and y = −1.' },
    ta: { q: 'குறுக்குப் பெருக்கல் முறையில் 3x − 4y = 10, 4x + 3y = 5 இன் தீர்வு', options: ['x = 2, y = −1', 'x = −1, y = 2', 'x = 2, y = 1', 'x = 50, y = −25'], explanation: 'x/50 = y/(−25) = 1/25; x = 2, y = −1.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.13 Q1(i), p. 131', answer: 0,
    en: { q: 'Solve by cross multiplication: 8x − 3y = 12 and 5x = 2y + 7.', options: ['(3, 4)', '(4, 3)', '(3, −4)', '(1, 1)'], explanation: '8(3) − 3(4) = 12 and 5(3) = 2(4) + 7 = 15.' },
    ta: { q: 'குறுக்குப் பெருக்கல் முறையில் தீர்க்க: 8x − 3y = 12, 5x = 2y + 7.', options: ['(3, 4)', '(4, 3)', '(3, −4)', '(1, 1)'], explanation: '8(3) − 3(4) = 12; 5(3) = 2(4) + 7 = 15.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.13 Q1(ii), p. 131', answer: 0,
    en: { q: 'Solve by cross multiplication: 6x + 7y − 11 = 0 and 5x + 2y = 13.', options: ['(3, −1)', '(−1, 3)', '(1, 4)', '(2, 1.5)'], explanation: '6(3) + 7(−1) = 11 and 5(3) + 2(−1) = 13.' },
    ta: { q: 'குறுக்குப் பெருக்கல் முறையில் தீர்க்க: 6x + 7y − 11 = 0, 5x + 2y = 13.', options: ['(3, −1)', '(−1, 3)', '(1, 4)', '(2, 1.5)'], explanation: '6(3) + 7(−1) = 11; 5(3) + 2(−1) = 13.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.15 Q26, p. 136', answer: 0,
    en: { q: 'If a₁/a₂ ≠ b₁/b₂ for a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0, the pair has', options: ['a unique solution', 'no solution', 'two solutions', 'infinitely many solutions'], explanation: 'Different ratios of coefficients mean the lines intersect at exactly one point.' },
    ta: { q: 'a₁x + b₁y + c₁ = 0, a₂x + b₂y + c₂ = 0 இல் a₁/a₂ ≠ b₁/b₂ எனில் அச்சமன்பாடுகளுக்கு', options: ['ஒரே ஒரு தீர்வு', 'தீர்வு இல்லை', 'இரண்டு தீர்வுகள்', 'எண்ணற்ற தீர்வுகள்'], explanation: 'கெழுக்களின் விகிதங்கள் வேறுபட்டால் கோடுகள் சரியாக ஒரு புள்ளியில் வெட்டும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.15 Q27, p. 136', answer: 0,
    en: { q: 'If a₁/a₂ = b₁/b₂ ≠ c₁/c₂ for a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0, the pair has', options: ['no solution', 'two solutions', 'infinitely many solutions', 'a unique solution'], explanation: 'Equal coefficient ratios with a different constant ratio give parallel lines.' },
    ta: { q: 'a₁/a₂ = b₁/b₂ ≠ c₁/c₂ எனில் a₁x + b₁y + c₁ = 0, a₂x + b₂y + c₂ = 0 ஆகிய சமன்பாடுகளுக்கு', options: ['தீர்வு இல்லை', 'இரண்டு தீர்வுகள்', 'எண்ணற்ற தீர்வுகள்', 'ஒரே ஒரு தீர்வு'], explanation: 'கெழு விகிதங்கள் சமம், மாறிலி விகிதம் வேறு எனில் இணை கோடுகள்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.15 Q22, p. 135', answer: 0,
    en: { q: 'Which condition does NOT give a linear equation ax + by + c = 0?', options: ['a = 0, b = 0', 'a ≠ 0, b = 0', 'a = 0, b ≠ 0', 'a ≠ 0, b ≠ 0'], explanation: 'If both a and b are zero, no variable is left, so it is not a linear equation.' },
    ta: { q: 'எந்த நிபந்தனையில் ax + by + c = 0 ஒரு நேரிய சமன்பாடாக அமையாது?', options: ['a = 0, b = 0', 'a ≠ 0, b = 0', 'a = 0, b ≠ 0', 'a ≠ 0, b ≠ 0'], explanation: 'a, b இரண்டும் பூச்சியம் எனில் மாறியே இல்லை; அது நேரிய சமன்பாடு அல்ல.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.15 Q23, p. 135', answer: 0,
    en: { q: 'Which of the following is NOT a linear equation in two variables?', options: ['0x + 0y + c = 0', 'ax + by + c = 0', '0x + by + c = 0', 'ax + 0y + c = 0'], explanation: 'With both coefficients zero, the equation has no variable at all.' },
    ta: { q: 'கீழ்க்காண்பனவற்றில் எது இரு மாறிகளில் அமைந்த நேரிய சமன்பாடு அல்ல?', options: ['0x + 0y + c = 0', 'ax + by + c = 0', '0x + by + c = 0', 'ax + 0y + c = 0'], explanation: 'இரு கெழுக்களும் பூச்சியம் எனில் சமன்பாட்டில் மாறியே இல்லை.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 3.15 Q12, p. 134', answer: 0,
    en: { q: 'If x − 3 is a factor of p(x), then the remainder on dividing p(x) by x − 3 is', options: ['p(3), which is 0', 'p(−3)', '3', '−3'], explanation: 'By the remainder theorem the remainder is p(3); since x − 3 is a factor, p(3) = 0.' },
    ta: { q: 'x − 3 என்பது p(x) இன் ஒரு காரணி எனில், p(x) ஐ x − 3 ஆல் வகுக்கக் கிடைக்கும் மீதி', options: ['p(3), அதாவது 0', 'p(−3)', '3', '−3'], explanation: 'மீதித் தேற்றப்படி மீதி p(3); x − 3 காரணி என்பதால் p(3) = 0.' },
  },
  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise 3.15 Q8, p. 134', answer: 0,
    en: { q: 'For (A) −13q⁵ + 4q² + 12q, (B) (x² + 4)(x² + 9), (C) 4q⁸ − q⁶ + q² and (D) −(5/7)y¹² + y³ + y⁵, the ascending order of their degrees is', options: ['B, A, C, D', 'A, B, D, C', 'A, B, C, D', 'B, C, D, A'], explanation: 'Degrees: A = 5, B = 4, C = 8, D = 12; ascending: B, A, C, D.' },
    ta: { q: '(A) −13q⁵ + 4q² + 12q, (B) (x² + 4)(x² + 9), (C) 4q⁸ − q⁶ + q², (D) −(5/7)y¹² + y³ + y⁵ ஆகியவற்றின் படிகளின் ஏறு வரிசை', options: ['B, A, C, D', 'A, B, D, C', 'A, B, C, D', 'B, C, D, A'], explanation: 'படிகள்: A = 5, B = 4, C = 8, D = 12; ஏறு வரிசை B, A, C, D.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.15 Q15, p. 135', answer: 0,
    en: { q: 'If (x + 5) and (x − 3) are the factors of ax² + bx + c, then a, b and c are', options: ['1, 2, −15', '1, 2, 3', '1, 2, 15', '1, −2, 15'], explanation: '(x + 5)(x − 3) = x² + 2x − 15.' },
    ta: { q: 'ax² + bx + c இன் காரணிகள் (x + 5), (x − 3) எனில் a, b, c இன் மதிப்புகள்', options: ['1, 2, −15', '1, 2, 3', '1, 2, 15', '1, −2, 15'], explanation: '(x + 5)(x − 3) = x² + 2x − 15.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.15 Q24, p. 135', answer: 0,
    en: { q: 'The value of k for which 4x + 6y − 1 = 0 and 2x + ky − 7 = 0 represent parallel lines is', options: ['k = 3', 'k = 2', 'k = 4', 'k = −3'], explanation: 'Parallel lines need 4/2 = 6/k (≠ −1/−7), so k = 3.' },
    ta: { q: '4x + 6y − 1 = 0, 2x + ky − 7 = 0 ஆகியவை இணை கோடுகளாக அமைய k இன் மதிப்பு', options: ['k = 3', 'k = 2', 'k = 4', 'k = −3'], explanation: 'இணை கோடுகளுக்கு 4/2 = 6/k (≠ −1/−7); k = 3.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.3 Q6, p. 96', answer: 0,
    en: { q: '2x³ + ax² + 4x − 12 and x³ + x² − 2x + a leave the same remainder when divided by (x − 3). The value of a and the remainder are', options: ['a = −3, remainder 27', 'a = 3, remainder 33', 'a = −3, remainder 30', 'a = 3, remainder 27'], explanation: 'p(3) = 54 + 9a and q(3) = 30 + a; 54 + 9a = 30 + a gives a = −3, remainder 30 − 3 = 27.' },
    ta: { q: '2x³ + ax² + 4x − 12, x³ + x² − 2x + a ஆகியவற்றை (x − 3) ஆல் வகுக்கும்போது ஒரே மீதி கிடைக்கிறது எனில் a இன் மதிப்பும் மீதியும்', options: ['a = −3, மீதி 27', 'a = 3, மீதி 33', 'a = −3, மீதி 30', 'a = 3, மீதி 27'], explanation: 'p(3) = 54 + 9a, q(3) = 30 + a; 54 + 9a = 30 + a எனவே a = −3; மீதி 30 − 3 = 27.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.3 Q10, p. 97', answer: 0,
    en: { q: 'If both (x − 2) and (x − 1/2) are factors of ax² + 5x + b, then', options: ['a = b', 'a = −b', 'a = 2b', 'b = 2a'], explanation: '4a + 10 + b = 0 and a/4 + 5/2 + b = 0 give a = −2 and b = −2, so a = b.' },
    ta: { q: '(x − 2), (x − 1/2) இரண்டும் ax² + 5x + b இன் காரணிகள் எனில்', options: ['a = b', 'a = −b', 'a = 2b', 'b = 2a'], explanation: '4a + 10 + b = 0, a/4 + 5/2 + b = 0 இலிருந்து a = −2, b = −2; எனவே a = b.' },
  },
  {
    difficulty: 'hard', source: 'Book example 3.11(4), p. 93', answer: 0,
    en: { q: 'For what value of k is 2x⁴ + 3x³ + 2kx² + 3x + 6 exactly divisible by (x + 2)?', options: ['−1', '1', '−8', '2'], explanation: 'p(−2) = 32 − 24 + 8k − 6 + 6 = 8 + 8k = 0, so k = −1.' },
    ta: { q: 'k இன் எந்த மதிப்பிற்கு 2x⁴ + 3x³ + 2kx² + 3x + 6 ஆனது (x + 2) ஆல் மீதியின்றி வகுபடும்?', options: ['−1', '1', '−8', '2'], explanation: 'p(−2) = 32 − 24 + 8k − 6 + 6 = 8 + 8k = 0; k = −1.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.4 Q3, p. 101', answer: 0,
    en: { q: 'If (x + a)(x + b)(x + c) = x³ + 14x² + 59x + 70, then a² + b² + c² is', options: ['78', '196', '137', '59'], explanation: 'a + b + c = 14 and ab + bc + ca = 59; a² + b² + c² = 196 − 118 = 78.' },
    ta: { q: '(x + a)(x + b)(x + c) = x³ + 14x² + 59x + 70 எனில் a² + b² + c² =', options: ['78', '196', '137', '59'], explanation: 'a + b + c = 14, ab + bc + ca = 59; a² + b² + c² = 196 − 118 = 78.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.4 Q3, p. 101', answer: 0,
    en: { q: 'If (x + a)(x + b)(x + c) = x³ + 14x² + 59x + 70, then 1/a + 1/b + 1/c is', options: ['59/70', '14/70', '70/59', '14/59'], explanation: '1/a + 1/b + 1/c = (ab + bc + ca)/abc = 59/70.' },
    ta: { q: '(x + a)(x + b)(x + c) = x³ + 14x² + 59x + 70 எனில் 1/a + 1/b + 1/c =', options: ['59/70', '14/70', '70/59', '14/59'], explanation: '1/a + 1/b + 1/c = (ab + bc + ca)/abc = 59/70.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.4 Q2(ii), p. 101', answer: 0,
    en: { q: 'Without expanding, the coefficients of x², x and the constant term in (2x + 3)(2x − 5)(2x − 6) are', options: ['−32, −6, 90', '−8, −3, 90', '−32, −54, 90', '32, −6, −90'], explanation: '(2x + a)(2x + b)(2x + c) = 8x³ + 4(a + b + c)x² + 2(ab + bc + ca)x + abc with a + b + c = −8, ab + bc + ca = −3, abc = 90.' },
    ta: { q: 'முழுவதும் விரிவாக்காமல், (2x + 3)(2x − 5)(2x − 6) இல் x² இன் கெழு, x இன் கெழு மற்றும் மாறிலி உறுப்பு', options: ['−32, −6, 90', '−8, −3, 90', '−32, −54, 90', '32, −6, −90'], explanation: '(2x + a)(2x + b)(2x + c) = 8x³ + 4(a + b + c)x² + 2(ab + bc + ca)x + abc; a + b + c = −8, ab + bc + ca = −3, abc = 90.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.4 Q1(iv), p. 101', answer: 0,
    en: { q: '(3a + 1)(3a − 2)(3a + 4) =', options: ['27a³ + 27a² − 18a − 8', '27a³ + 27a² − 18a + 8', '27a³ + 9a² − 6a − 8', '27a³ + 27a² + 18a − 8'], explanation: '27a³ + 9a²(1 − 2 + 4) + 3a(−2 − 8 + 4) + (1)(−2)(4) = 27a³ + 27a² − 18a − 8.' },
    ta: { q: '(3a + 1)(3a − 2)(3a + 4) =', options: ['27a³ + 27a² − 18a − 8', '27a³ + 27a² − 18a + 8', '27a³ + 9a² − 6a − 8', '27a³ + 27a² + 18a − 8'], explanation: '27a³ + 9a²(1 − 2 + 4) + 3a(−2 − 8 + 4) + (1)(−2)(4) = 27a³ + 27a² − 18a − 8.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.4 Q7, p. 101', answer: 0,
    en: { q: 'If 3a + 4b = 10 and ab = 2, then 27a³ + 64b³ is', options: ['280', '1000', '720', '640'], explanation: '27a³ + 64b³ = (3a + 4b)³ − 3(3a)(4b)(3a + 4b) = 1000 − 36(2)(10) = 280.' },
    ta: { q: '3a + 4b = 10, ab = 2 எனில் 27a³ + 64b³ =', options: ['280', '1000', '720', '640'], explanation: '27a³ + 64b³ = (3a + 4b)³ − 3(3a)(4b)(3a + 4b) = 1000 − 36(2)(10) = 280.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.4 Q8, p. 101', answer: 0,
    en: { q: 'If x − y = 5 and xy = 14, then x³ − y³ is', options: ['335', '125', '85', '210'], explanation: 'x³ − y³ = (x − y)³ + 3xy(x − y) = 125 + 210 = 335.' },
    ta: { q: 'x − y = 5, xy = 14 எனில் x³ − y³ =', options: ['335', '125', '85', '210'], explanation: 'x³ − y³ = (x − y)³ + 3xy(x − y) = 125 + 210 = 335.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.4 Q10, p. 101', answer: 0,
    en: { q: 'If x² + 1/x² = 23 (with x > 0), then x + 1/x and x³ + 1/x³ are', options: ['5 and 110', '5 and 125', '√23 and 110', '25 and 110'], explanation: '(x + 1/x)² = 23 + 2 = 25, so x + 1/x = 5; x³ + 1/x³ = 125 − 3(5) = 110.' },
    ta: { q: 'x² + 1/x² = 23 (x > 0) எனில் x + 1/x, x³ + 1/x³ ஆகியவை', options: ['5, 110', '5, 125', '√23, 110', '25, 110'], explanation: '(x + 1/x)² = 23 + 2 = 25; x + 1/x = 5; x³ + 1/x³ = 125 − 3(5) = 110.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.4 Q13(i), p. 102', answer: 0,
    en: { q: 'Using an identity, 7³ − 10³ + 3³ is', options: ['−630', '630', '0', '−370'], explanation: '7 + (−10) + 3 = 0, so the sum of cubes = 3(7)(−10)(3) = −630.' },
    ta: { q: 'முற்றொருமையைப் பயன்படுத்தி 7³ − 10³ + 3³ =', options: ['−630', '630', '0', '−370'], explanation: '7 + (−10) + 3 = 0; எனவே கனங்களின் கூடுதல் = 3(7)(−10)(3) = −630.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.4 Q13(ii), p. 102', answer: 0,
    en: { q: 'Using an identity, 1 + 1/8 − 27/8 is', options: ['−9/4', '9/4', '−9/8', '0'], explanation: 'Write as 1³ + (1/2)³ + (−3/2)³; since 1 + 1/2 − 3/2 = 0, value = 3(1)(1/2)(−3/2) = −9/4.' },
    ta: { q: 'முற்றொருமையைப் பயன்படுத்தி 1 + 1/8 − 27/8 =', options: ['−9/4', '9/4', '−9/8', '0'], explanation: '1³ + (1/2)³ + (−3/2)³; 1 + 1/2 − 3/2 = 0; மதிப்பு 3(1)(1/2)(−3/2) = −9/4.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.4 Q14, p. 102', answer: 0,
    en: { q: 'If 2x − 3y − 4z = 0, then 8x³ − 27y³ − 64z³ is', options: ['72xyz', '−72xyz', '36xyz', '0'], explanation: '2x + (−3y) + (−4z) = 0, so the sum of cubes = 3(2x)(−3y)(−4z) = 72xyz.' },
    ta: { q: '2x − 3y − 4z = 0 எனில் 8x³ − 27y³ − 64z³ =', options: ['72xyz', '−72xyz', '36xyz', '0'], explanation: '2x + (−3y) + (−4z) = 0; எனவே கனங்களின் கூடுதல் = 3(2x)(−3y)(−4z) = 72xyz.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.4 Q12(i), p. 102', answer: 0,
    en: { q: '(2a + 3b + 4c)(4a² + 9b² + 16c² − 6ab − 12bc − 8ca) =', options: ['8a³ + 27b³ + 64c³ − 72abc', '8a³ + 27b³ + 64c³', '(2a + 3b + 4c)³', '8a³ + 27b³ + 64c³ + 72abc'], explanation: '(x + y + z)(x² + y² + z² − xy − yz − zx) = x³ + y³ + z³ − 3xyz with x = 2a, y = 3b, z = 4c.' },
    ta: { q: '(2a + 3b + 4c)(4a² + 9b² + 16c² − 6ab − 12bc − 8ca) =', options: ['8a³ + 27b³ + 64c³ − 72abc', '8a³ + 27b³ + 64c³', '(2a + 3b + 4c)³', '8a³ + 27b³ + 64c³ + 72abc'], explanation: 'x = 2a, y = 3b, z = 4c என (x + y + z)(x² + y² + z² − xy − yz − zx) = x³ + y³ + z³ − 3xyz.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.5 Q2(iv), p. 105', answer: 0,
    en: { q: 'Factorise m² + 1/m² − 23.', options: ['(m + 1/m + 5)(m + 1/m − 5)', '(m − 1/m + 5)(m − 1/m − 5)', '(m + 1/m − 23)(m + 1/m + 1)', '(m + 5)(m − 5)'], explanation: 'm² + 1/m² − 23 = (m + 1/m)² − 2 − 23 = (m + 1/m)² − 5².' },
    ta: { q: 'm² + 1/m² − 23 ஐக் காரணிப்படுத்துக.', options: ['(m + 1/m + 5)(m + 1/m − 5)', '(m − 1/m + 5)(m − 1/m − 5)', '(m + 1/m − 23)(m + 1/m + 1)', '(m + 5)(m − 5)'], explanation: 'm² + 1/m² − 23 = (m + 1/m)² − 2 − 23 = (m + 1/m)² − 5².' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.5 Q2(iii), p. 105', answer: 0,
    en: { q: 'Factorise x⁵ − 16x.', options: ['x(x + 2)(x − 2)(x² + 4)', 'x(x² − 4)²', 'x(x − 2)⁴', 'x(x + 4)(x − 4)(x² + 2)'], explanation: 'x(x⁴ − 16) = x(x² + 4)(x² − 4) = x(x² + 4)(x + 2)(x − 2).' },
    ta: { q: 'x⁵ − 16x ஐக் காரணிப்படுத்துக.', options: ['x(x + 2)(x − 2)(x² + 4)', 'x(x² − 4)²', 'x(x − 2)⁴', 'x(x + 4)(x − 4)(x² + 2)'], explanation: 'x(x⁴ − 16) = x(x² + 4)(x² − 4) = x(x² + 4)(x + 2)(x − 2).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.5 Q3(i), p. 105', answer: 0,
    en: { q: 'Factorise 4x² + 9y² + 25z² + 12xy + 30yz + 20xz.', options: ['(2x + 3y + 5z)²', '(2x − 3y + 5z)²', '(4x + 9y + 25z)²', '(2x + 3y − 5z)²'], explanation: 'It matches a² + b² + c² + 2ab + 2bc + 2ca with a = 2x, b = 3y, c = 5z.' },
    ta: { q: '4x² + 9y² + 25z² + 12xy + 30yz + 20xz ஐக் காரணிப்படுத்துக.', options: ['(2x + 3y + 5z)²', '(2x − 3y + 5z)²', '(4x + 9y + 25z)²', '(2x + 3y − 5z)²'], explanation: 'a = 2x, b = 3y, c = 5z என a² + b² + c² + 2ab + 2bc + 2ca.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.5 Q3(ii), p. 105', answer: 0,
    en: { q: 'Factorise 25x² + 4y² + 9z² − 20xy + 12yz − 30xz.', options: ['(−5x + 2y + 3z)²', '(5x + 2y + 3z)²', '(5x − 2y + 3z)²', '(5x + 2y − 3z)²'], explanation: 'The xy and xz terms are negative while yz is positive, so x has the opposite sign: (−5x + 2y + 3z)², i.e. (5x − 2y − 3z)².' },
    ta: { q: '25x² + 4y² + 9z² − 20xy + 12yz − 30xz ஐக் காரணிப்படுத்துக.', options: ['(−5x + 2y + 3z)²', '(5x + 2y + 3z)²', '(5x − 2y + 3z)²', '(5x + 2y − 3z)²'], explanation: 'xy, xz உறுப்புகள் குறை, yz மிகை; எனவே x க்கு எதிர்க்குறி: (−5x + 2y + 3z)², அதாவது (5x − 2y − 3z)².' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.5 Q4(iii), p. 105', answer: 0,
    en: { q: 'Factorise a⁶ − 64.', options: ['(a + 2)(a − 2)(a² + 2a + 4)(a² − 2a + 4)', '(a² − 4)(a⁴ + 16)', '(a − 2)⁶', '(a³ − 8)²'], explanation: 'a⁶ − 64 = (a³ + 8)(a³ − 8) = (a + 2)(a² − 2a + 4)(a − 2)(a² + 2a + 4).' },
    ta: { q: 'a⁶ − 64 ஐக் காரணிப்படுத்துக.', options: ['(a + 2)(a − 2)(a² + 2a + 4)(a² − 2a + 4)', '(a² − 4)(a⁴ + 16)', '(a − 2)⁶', '(a³ − 8)²'], explanation: 'a⁶ − 64 = (a³ + 8)(a³ − 8) = (a + 2)(a² − 2a + 4)(a − 2)(a² + 2a + 4).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.5 Q5(i), p. 105', answer: 0,
    en: { q: 'Factorise x³ + 8y³ + 6xy − 1.', options: ['(x + 2y − 1)(x² + 4y² + 1 − 2xy + x + 2y)', '(x + 2y + 1)(x² + 4y² + 1 − 2xy − x − 2y)', '(x + 2y − 1)³', '(x − 2y + 1)(x² + 4y² + 1 + 2xy)'], explanation: 'x³ + (2y)³ + (−1)³ − 3(x)(2y)(−1) fits a³ + b³ + c³ − 3abc = (a + b + c)(a² + b² + c² − ab − bc − ca).' },
    ta: { q: 'x³ + 8y³ + 6xy − 1 ஐக் காரணிப்படுத்துக.', options: ['(x + 2y − 1)(x² + 4y² + 1 − 2xy + x + 2y)', '(x + 2y + 1)(x² + 4y² + 1 − 2xy − x − 2y)', '(x + 2y − 1)³', '(x − 2y + 1)(x² + 4y² + 1 + 2xy)'], explanation: 'x³ + (2y)³ + (−1)³ − 3(x)(2y)(−1); a = x, b = 2y, c = −1 என a³ + b³ + c³ − 3abc = (a + b + c)(a² + b² + c² − ab − bc − ca).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.6 Q3(iii), p. 107', answer: 0,
    en: { q: 'Factorise √5a² + 2a − 3√5.', options: ['(a + √5)(√5a − 3)', '(a − √5)(√5a + 3)', '(√5a + 3)(a − 1)', '(a + 3)(√5a − √5)'], explanation: 'ac = √5 × (−3√5) = −15 = 5 × (−3), with 5 − 3 = 2: √5a² + 5a − 3a − 3√5 = √5a(a + √5) − 3(a + √5).' },
    ta: { q: '√5a² + 2a − 3√5 ஐக் காரணிப்படுத்துக.', options: ['(a + √5)(√5a − 3)', '(a − √5)(√5a + 3)', '(√5a + 3)(a − 1)', '(a + 3)(√5a − √5)'], explanation: 'ac = √5 × (−3√5) = −15 = 5 × (−3), 5 − 3 = 2: √5a² + 5a − 3a − 3√5 = √5a(a + √5) − 3(a + √5).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.6 Q3(iv), p. 107', answer: 0,
    en: { q: 'Factorise a⁴ − 3a² + 2.', options: ['(a + 1)(a − 1)(a + √2)(a − √2)', '(a² + 1)(a² + 2)', '(a − 1)²(a² − 2)', '(a + 1)(a − 1)(a² + 2)'], explanation: 'a⁴ − 3a² + 2 = (a² − 1)(a² − 2) = (a + 1)(a − 1)(a + √2)(a − √2).' },
    ta: { q: 'a⁴ − 3a² + 2 ஐக் காரணிப்படுத்துக.', options: ['(a + 1)(a − 1)(a + √2)(a − √2)', '(a² + 1)(a² + 2)', '(a − 1)²(a² − 2)', '(a + 1)(a − 1)(a² + 2)'], explanation: 'a⁴ − 3a² + 2 = (a² − 1)(a² − 2) = (a + 1)(a − 1)(a + √2)(a − √2).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.6 Q3(v), p. 107', answer: 0,
    en: { q: 'Factorise 8m³ − 2m²n − 15mn².', options: ['m(4m + 5n)(2m − 3n)', 'm(4m − 5n)(2m + 3n)', '(4m + 5n)(2m − 3n)', 'm(8m + 5n)(m − 3n)'], explanation: 'm(8m² − 2mn − 15n²); −12 and 10 have product −120 and sum −2: m(4m + 5n)(2m − 3n).' },
    ta: { q: '8m³ − 2m²n − 15mn² ஐக் காரணிப்படுத்துக.', options: ['m(4m + 5n)(2m − 3n)', 'm(4m − 5n)(2m + 3n)', '(4m + 5n)(2m − 3n)', 'm(8m + 5n)(m − 3n)'], explanation: 'm(8m² − 2mn − 15n²); −12, 10 இன் பெருக்கல் −120, கூடுதல் −2: m(4m + 5n)(2m − 3n).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.6 Q3(i), p. 107', answer: 0,
    en: { q: 'Factorise (p − q)² − 6(p − q) − 16.', options: ['(p − q − 8)(p − q + 2)', '(p − q + 8)(p − q − 2)', '(p − q − 4)(p − q + 4)', '(p + q − 8)(p + q + 2)'], explanation: 'With t = p − q: t² − 6t − 16 = (t − 8)(t + 2).' },
    ta: { q: '(p − q)² − 6(p − q) − 16 ஐக் காரணிப்படுத்துக.', options: ['(p − q − 8)(p − q + 2)', '(p − q + 8)(p − q − 2)', '(p − q − 4)(p − q + 4)', '(p + q − 8)(p + q + 2)'], explanation: 't = p − q என வைக்க t² − 6t − 16 = (t − 8)(t + 2).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.7 Q1(i), p. 111', answer: 0,
    en: { q: 'The quotient and remainder of (4x³ + 6x² − 23x + 18) ÷ (x + 3) are', options: ['4x² − 6x − 5 and 33', '4x² + 18x + 31 and 111', '4x² − 6x − 5 and −33', '4x² − 6x + 5 and 3'], explanation: 'Synthetic division with −3: 4, 6, −23, 18 give 4, −6, −5 and remainder 18 + 15 = 33.' },
    ta: { q: '(4x³ + 6x² − 23x + 18) ÷ (x + 3) இன் ஈவும் மீதியும்', options: ['4x² − 6x − 5, 33', '4x² + 18x + 31, 111', '4x² − 6x − 5, −33', '4x² − 6x + 5, 3'], explanation: '−3 ஐக் கொண்டு தொகுமுறை வகுத்தல்: 4, 6, −23, 18 → 4, −6, −5; மீதி 18 + 15 = 33.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.7 Q1(ii), p. 111', answer: 0,
    en: { q: 'The quotient and remainder of (8y³ − 16y² + 16y − 15) ÷ (2y − 1) are', options: ['4y² − 6y + 5 and −10', '4y² − 6y + 5 and 10', '8y² − 12y + 10 and −10', '4y² + 6y + 5 and −10'], explanation: '(2y − 1)(4y² − 6y + 5) = 8y³ − 16y² + 16y − 5, so remainder −15 + 5 = −10.' },
    ta: { q: '(8y³ − 16y² + 16y − 15) ÷ (2y − 1) இன் ஈவும் மீதியும்', options: ['4y² − 6y + 5, −10', '4y² − 6y + 5, 10', '8y² − 12y + 10, −10', '4y² + 6y + 5, −10'], explanation: '(2y − 1)(4y² − 6y + 5) = 8y³ − 16y² + 16y − 5; மீதி −15 + 5 = −10.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.7 Q6, p. 111', answer: 0,
    en: { q: 'If the quotient on dividing 8x⁴ − 2x² + 6x − 7 by (2x + 1) is 4x³ + px² − qx + 3, then p, q and the remainder are', options: ['p = −2, q = 0, remainder −10', 'p = 2, q = 0, remainder −10', 'p = −2, q = 1, remainder 10', 'p = −4, q = 0, remainder −7'], explanation: '(2x + 1)(4x³ − 2x² + 3) = 8x⁴ − 2x² + 6x + 3, so remainder = −7 − 3 = −10.' },
    ta: { q: '8x⁴ − 2x² + 6x − 7 ஐ (2x + 1) ஆல் வகுக்கக் கிடைக்கும் ஈவு 4x³ + px² − qx + 3 எனில் p, q, மீதி', options: ['p = −2, q = 0, மீதி −10', 'p = 2, q = 0, மீதி −10', 'p = −2, q = 1, மீதி 10', 'p = −4, q = 0, மீதி −7'], explanation: '(2x + 1)(4x³ − 2x² + 3) = 8x⁴ − 2x² + 6x + 3; மீதி −7 − 3 = −10.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.7 Q7, p. 112', answer: 0,
    en: { q: 'If the quotient on dividing 3x³ + 11x² + 34x + 106 by x − 3 is 3x² + ax + b, then a, b and the remainder are', options: ['a = 20, b = 94, remainder 388', 'a = 2, b = 40, remainder 226', 'a = 20, b = 94, remainder 0', 'a = −20, b = 94, remainder 388'], explanation: 'Synthetic division with 3: 3, 11, 34, 106 give 3, 20, 94 and remainder 106 + 282 = 388.' },
    ta: { q: '3x³ + 11x² + 34x + 106 ஐ x − 3 ஆல் வகுக்கக் கிடைக்கும் ஈவு 3x² + ax + b எனில் a, b, மீதி', options: ['a = 20, b = 94, மீதி 388', 'a = 2, b = 40, மீதி 226', 'a = 20, b = 94, மீதி 0', 'a = −20, b = 94, மீதி 388'], explanation: '3 ஐக் கொண்டு தொகுமுறை வகுத்தல்: 3, 11, 34, 106 → 3, 20, 94; மீதி 106 + 282 = 388.' },
  },
  {
    difficulty: 'hard', source: 'Book example 3.37, p. 111', answer: 0,
    en: { q: 'If the quotient on dividing x⁴ + 10x³ + 35x² + 50x + 29 by (x + 4) is x³ − ax² + bx + 6, then a, b and the remainder are', options: ['a = −6, b = 11, remainder 5', 'a = 6, b = 11, remainder 5', 'a = −6, b = −11, remainder 0', 'a = 6, b = 24, remainder 29'], explanation: 'Synthetic division with −4 gives quotient x³ + 6x² + 11x + 6 and remainder 5; −a = 6, b = 11.' },
    ta: { q: 'x⁴ + 10x³ + 35x² + 50x + 29 ஐ (x + 4) ஆல் வகுக்கக் கிடைக்கும் ஈவு x³ − ax² + bx + 6 எனில் a, b, மீதி', options: ['a = −6, b = 11, மீதி 5', 'a = 6, b = 11, மீதி 5', 'a = −6, b = −11, மீதி 0', 'a = 6, b = 24, மீதி 29'], explanation: '−4 ஐக் கொண்டு தொகுமுறை வகுத்தலில் ஈவு x³ + 6x² + 11x + 6, மீதி 5; −a = 6, b = 11.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.8 Q1(i), p. 114', answer: 0,
    en: { q: 'Factorise x³ − 3x² − 10x + 24.', options: ['(x − 2)(x + 3)(x − 4)', '(x + 2)(x − 3)(x + 4)', '(x − 2)(x − 3)(x + 4)', '(x − 1)(x + 3)(x − 8)'], explanation: 'p(2) = 8 − 12 − 20 + 24 = 0; dividing by (x − 2) leaves x² − x − 12 = (x + 3)(x − 4).' },
    ta: { q: 'x³ − 3x² − 10x + 24 ஐக் காரணிப்படுத்துக.', options: ['(x − 2)(x + 3)(x − 4)', '(x + 2)(x − 3)(x + 4)', '(x − 2)(x − 3)(x + 4)', '(x − 1)(x + 3)(x − 8)'], explanation: 'p(2) = 8 − 12 − 20 + 24 = 0; (x − 2) ஆல் வகுக்க x² − x − 12 = (x + 3)(x − 4).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.8 Q1(ii), p. 114', answer: 0,
    en: { q: 'Factorise 2x³ − 3x² − 3x + 2.', options: ['(x + 1)(x − 2)(2x − 1)', '(x − 1)(x + 2)(2x + 1)', '(x + 1)(x + 2)(2x − 1)', '(x − 1)(x − 2)(2x + 1)'], explanation: 'p(−1) = −2 − 3 + 3 + 2 = 0, so (x + 1) is a factor; the quotient 2x² − 5x + 2 = (x − 2)(2x − 1).' },
    ta: { q: '2x³ − 3x² − 3x + 2 ஐக் காரணிப்படுத்துக.', options: ['(x + 1)(x − 2)(2x − 1)', '(x − 1)(x + 2)(2x + 1)', '(x + 1)(x + 2)(2x − 1)', '(x − 1)(x − 2)(2x + 1)'], explanation: 'p(−1) = −2 − 3 + 3 + 2 = 0; (x + 1) காரணி; ஈவு 2x² − 5x + 2 = (x − 2)(2x − 1).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.8 Q1(iii), p. 114', answer: 0,
    en: { q: 'Factorise −7x + 3 + 4x³.', options: ['(x − 1)(2x − 1)(2x + 3)', '(x + 1)(2x + 1)(2x − 3)', '(x − 1)(2x + 1)(2x − 3)', '(x − 1)(4x² + 4x + 3)'], explanation: '4x³ − 7x + 3: coefficients sum 4 − 7 + 3 = 0; quotient 4x² + 4x − 3 = (2x − 1)(2x + 3).' },
    ta: { q: '−7x + 3 + 4x³ ஐக் காரணிப்படுத்துக.', options: ['(x − 1)(2x − 1)(2x + 3)', '(x + 1)(2x + 1)(2x − 3)', '(x − 1)(2x + 1)(2x − 3)', '(x − 1)(4x² + 4x + 3)'], explanation: '4x³ − 7x + 3: கெழுக்களின் கூடுதல் 4 − 7 + 3 = 0; ஈவு 4x² + 4x − 3 = (2x − 1)(2x + 3).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.8 Q1(iv), p. 114', answer: 0,
    en: { q: 'Factorise x³ + x² − 14x − 24.', options: ['(x + 2)(x + 3)(x − 4)', '(x − 2)(x − 3)(x + 4)', '(x + 2)(x − 3)(x + 4)', '(x + 1)(x + 4)(x − 6)'], explanation: 'p(−2) = −8 + 4 + 28 − 24 = 0; quotient x² − x − 12 = (x + 3)(x − 4).' },
    ta: { q: 'x³ + x² − 14x − 24 ஐக் காரணிப்படுத்துக.', options: ['(x + 2)(x + 3)(x − 4)', '(x − 2)(x − 3)(x + 4)', '(x + 2)(x − 3)(x + 4)', '(x + 1)(x + 4)(x − 6)'], explanation: 'p(−2) = −8 + 4 + 28 − 24 = 0; ஈவு x² − x − 12 = (x + 3)(x − 4).' },
  },
  {
    difficulty: 'hard', source: 'Book example 3.40, p. 113', answer: 0,
    en: { q: 'For p(x) = x³ − 5x² − 2x + 24, which of the following is correct?', options: ['(x + 2) is a factor and p(x) = (x + 2)(x − 3)(x − 4)', '(x − 1) is a factor', '(x + 1) is a factor', '(x − 2) is a factor and p(x) = (x − 2)(x + 3)(x + 4)'], explanation: 'p(1) = 18, p(−1) = 20, p(2) = 8, p(−2) = 0; dividing gives x² − 7x + 12 = (x − 3)(x − 4).' },
    ta: { q: 'p(x) = x³ − 5x² − 2x + 24 க்குச் சரியானது எது?', options: ['(x + 2) காரணி; p(x) = (x + 2)(x − 3)(x − 4)', '(x − 1) காரணி', '(x + 1) காரணி', '(x − 2) காரணி; p(x) = (x − 2)(x + 3)(x + 4)'], explanation: 'p(1) = 18, p(−1) = 20, p(2) = 8, p(−2) = 0; வகுக்க x² − 7x + 12 = (x − 3)(x − 4).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.9 Q2(vi), p. 115', answer: 0,
    en: { q: 'The GCD of a³ − 9ax² and (a − 3x)² is', options: ['a − 3x', '(a − 3x)²', 'a(a − 3x)', 'a + 3x'], explanation: 'a³ − 9ax² = a(a − 3x)(a + 3x); the common factor with (a − 3x)² is (a − 3x).' },
    ta: { q: 'a³ − 9ax², (a − 3x)² இன் மீ.பொ.வ', options: ['a − 3x', '(a − 3x)²', 'a(a − 3x)', 'a + 3x'], explanation: 'a³ − 9ax² = a(a − 3x)(a + 3x); (a − 3x)² உடன் பொதுக் காரணி (a − 3x).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.10 Q3, p. 124', answer: 0,
    en: { q: 'Two cars are 100 miles apart. Driving towards each other they meet in 1 hour; driving in the same direction they meet in 2 hours. Their speeds are', options: ['75 mph and 25 mph', '60 mph and 40 mph', '50 mph and 50 mph', '100 mph and 50 mph'], explanation: 'x + y = 100 and 2(x − y) = 100, so x − y = 50; x = 75, y = 25.' },
    ta: { q: 'இரண்டு மகிழுந்துகளுக்கு இடைப்பட்ட தொலைவு 100 மைல்கள். இரண்டும் ஒன்றையொன்று நோக்கிப் பயணித்தால் ஒரு மணி நேரத்தில் சந்திக்கும்; ஒரே திசையில் சென்றால் 2 மணி நேரத்தில் சந்திக்கும். இரண்டு மகிழுந்துகளின் வேகங்கள்', options: ['75 மை/ம, 25 மை/ம', '60 மை/ம, 40 மை/ம', '50 மை/ம, 50 மை/ம', '100 மை/ம, 50 மை/ம'], explanation: 'x + y = 100; 2(x − y) = 100 எனவே x − y = 50; x = 75, y = 25.' },
  },
  {
    difficulty: 'hard', source: 'Book example 3.47, p. 123', answer: 0,
    en: { q: 'The perimeter of a rectangle is 36 m and its length is 2 m more than three times its breadth. Its length and breadth are', options: ['14 m and 4 m', '13 m and 5 m', '16 m and 2 m', '26 m and 8 m'], explanation: 'l + b = 18 and l = 3b + 2 give 4b + 2 = 18, b = 4, l = 14.' },
    ta: { q: 'ஒரு செவ்வகத்தின் சுற்றளவு 36 மீ; நீளம் அகலத்தின் மூன்று மடங்கை விட 2 மீ அதிகம். நீளம், அகலம்', options: ['14 மீ, 4 மீ', '13 மீ, 5 மீ', '16 மீ, 2 மீ', '26 மீ, 8 மீ'], explanation: 'l + b = 18, l = 3b + 2; 4b + 2 = 18; b = 4, l = 14.' },
  },
  {
    difficulty: 'hard', source: 'Book example 3.49, p. 125', answer: 0,
    en: { q: 'The sum of the digits of a two-digit number is 5. If the digits are reversed, the new number is 27 less. The number is', options: ['41', '14', '32', '50'], explanation: 'x + y = 5 and 9(x − y) = 27, so x − y = 3; x = 4, y = 1.' },
    ta: { q: 'ஓர் ஈரிலக்க எண்ணின் இலக்கங்களின் கூடுதல் 5. இலக்கங்களை இடமாற்றினால் கிடைக்கும் எண் 27 குறைவு. அந்த எண்', options: ['41', '14', '32', '50'], explanation: 'x + y = 5, 9(x − y) = 27; x − y = 3; x = 4, y = 1.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.11 Q1(iii), p. 126', answer: 0,
    en: { q: 'Solve: 10% of x + 20% of y = 24 and 3x − y = 20.', options: ['x = 40, y = 100', 'x = 100, y = 40', 'x = 20, y = 40', 'x = 40, y = 20'], explanation: 'x + 2y = 240 and y = 3x − 20: x + 6x − 40 = 240, x = 40, y = 100.' },
    ta: { q: 'தீர்க்க: x-இன் 10% + y-இன் 20% = 24; 3x − y = 20.', options: ['x = 40, y = 100', 'x = 100, y = 40', 'x = 20, y = 40', 'x = 40, y = 20'], explanation: 'x + 2y = 240, y = 3x − 20: 7x − 40 = 240; x = 40, y = 100.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.11 Q1(iv), p. 126', answer: 0,
    en: { q: 'The solution of √2x − √3y = 1 and √3x − √8y = 0 is', options: ['x = 2√2, y = √3', 'x = √3, y = 2√2', 'x = √2, y = √3', 'x = 2, y = 1'], explanation: 'Check: √2(2√2) − √3(√3) = 4 − 3 = 1 and √3(2√2) − √8(√3) = 2√6 − 2√6 = 0.' },
    ta: { q: '√2x − √3y = 1, √3x − √8y = 0 இன் தீர்வு', options: ['x = 2√2, y = √3', 'x = √3, y = 2√2', 'x = √2, y = √3', 'x = 2, y = 1'], explanation: 'சரிபார்ப்பு: √2(2√2) − √3(√3) = 4 − 3 = 1; √3(2√2) − √8(√3) = 2√6 − 2√6 = 0.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.11 Q2, p. 126', answer: 0,
    en: { q: "Raman's age is three times the sum of the ages of his two sons. After 5 years his age will be twice the sum of their ages. Raman's present age is", options: ['45 years', '15 years', '50 years', '40 years'], explanation: 'R = 3S and R + 5 = 2(S + 10): 3S + 5 = 2S + 20, S = 15, R = 45.' },
    ta: { q: 'இராமனின் வயது அவருடைய இரு மகன்களுடைய வயதுகளின் கூடுதலைப் போல் மூன்று மடங்காகும். ஐந்தாண்டுகள் கழித்து அவரின் வயது தனது மகன்களுடைய வயதுகளின் கூடுதலைப் போல் இரு மடங்காகும். இராமனின் தற்போதைய வயது', options: ['45 ஆண்டுகள்', '15 ஆண்டுகள்', '50 ஆண்டுகள்', '40 ஆண்டுகள்'], explanation: 'R = 3S, R + 5 = 2(S + 10): 3S + 5 = 2S + 20; S = 15, R = 45.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.11 Q3, p. 126', answer: 0,
    en: { q: 'The middle digit of a number between 100 and 1000 is zero and the sum of the other digits is 13. If the digits are reversed, the new number exceeds the original by 495. The number is', options: ['409', '904', '508', '706'], explanation: 'a + c = 13 and 99(c − a) = 495, so c − a = 5: a = 4, c = 9.' },
    ta: { q: '100 மற்றும் 1000 இக்கு இடையே அமையும் ஒரு மூன்றிலக்க எண்ணின் நடு இலக்கம் பூச்சியம்; மற்ற இரு இலக்கங்களின் கூடுதல் 13. இலக்கங்களை இடம் மாற்றி அமைக்கும்போது கிடைக்கும் எண், அந்த எண்ணை விட 495 அதிகம். அந்த எண்', options: ['409', '904', '508', '706'], explanation: 'a + c = 13, 99(c − a) = 495; c − a = 5; a = 4, c = 9.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.12 Q1(iii), p. 128', answer: 0,
    en: { q: 'Solve by elimination: x/10 + y/5 = 14 and x/8 + y/6 = 15.', options: ['x = 80, y = 30', 'x = 30, y = 80', 'x = 40, y = 50', 'x = 60, y = 40'], explanation: 'x + 2y = 140 and 3x + 4y = 360: subtracting 2 × (first) gives x = 80, then y = 30.' },
    ta: { q: 'நீக்கல் முறையில் தீர்க்க: x/10 + y/5 = 14, x/8 + y/6 = 15.', options: ['x = 80, y = 30', 'x = 30, y = 80', 'x = 40, y = 50', 'x = 60, y = 40'], explanation: 'x + 2y = 140, 3x + 4y = 360; இரண்டாவதிலிருந்து முதலாவதின் 2 மடங்கைக் கழிக்க x = 80; பின் y = 30.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.12 Q1(iv), p. 128', answer: 0,
    en: { q: 'A non-zero solution of 3(2x + y) = 7xy and 3(x + 3y) = 11xy is', options: ['x = 1, y = 3/2', 'x = 3/2, y = 1', 'x = 1/2, y = 3', 'x = 2, y = 3'], explanation: 'Divide by xy: 6/y + 3/x = 7 and 3/y + 9/x = 11. Solving gives 1/x = 1, 1/y = 2/3.' },
    ta: { q: '3(2x + y) = 7xy, 3(x + 3y) = 11xy இன் பூச்சியமற்ற தீர்வு', options: ['x = 1, y = 3/2', 'x = 3/2, y = 1', 'x = 1/2, y = 3', 'x = 2, y = 3'], explanation: 'xy ஆல் வகுக்க 6/y + 3/x = 7, 3/y + 9/x = 11; தீர்க்க 1/x = 1, 1/y = 2/3.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.12 Q1(v), p. 128', answer: 0,
    en: { q: 'Solve: 4/x + 5y = 7 and 3/x + 4y = 5.', options: ['x = 1/3, y = −1', 'x = 3, y = −1', 'x = 1/3, y = 1', 'x = −1, y = 1/3'], explanation: 'Let a = 1/x: 4a + 5y = 7, 3a + 4y = 5 give a = 3, y = −1, so x = 1/3.' },
    ta: { q: 'தீர்க்க: 4/x + 5y = 7, 3/x + 4y = 5.', options: ['x = 1/3, y = −1', 'x = 3, y = −1', 'x = 1/3, y = 1', 'x = −1, y = 1/3'], explanation: 'a = 1/x: 4a + 5y = 7, 3a + 4y = 5; a = 3, y = −1; x = 1/3.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.12 Q2, p. 128', answer: 0,
    en: { q: 'The monthly incomes of A and B are in the ratio 3 : 4 and their expenditures in the ratio 5 : 7. If each saves ₹5000 a month, their incomes are', options: ['₹30000 and ₹40000', '₹15000 and ₹20000', '₹25000 and ₹35000', '₹3000 and ₹4000'], explanation: '3x − 5y = 5000 and 4x − 7y = 5000 give x = 10000, y = 5000.' },
    ta: { q: 'A மற்றும் B ஆகியோரது மாத வருமானங்களின் விகிதம் 3 : 4, செலவுகளின் விகிதம் 5 : 7. ஒவ்வொருவரும் மாதம் ₹5000 சேமிக்கிறார்கள் எனில், அவர்களுடைய மாத வருமானங்கள்', options: ['₹30000, ₹40000', '₹15000, ₹20000', '₹25000, ₹35000', '₹3000, ₹4000'], explanation: '3x − 5y = 5000, 4x − 7y = 5000; x = 10000, y = 5000.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.12 Q3, p. 128', answer: 0,
    en: { q: 'Five years ago a man was seven times as old as his son; five years hence he will be four times as old as his son. Their present ages are', options: ['75 and 15', '70 and 10', '80 and 20', '35 and 5'], explanation: 'm − 5 = 7(s − 5) and m + 5 = 4(s + 5) give 3s = 45, s = 15, m = 75.' },
    ta: { q: '5 வருடங்களுக்கு முன்பு, ஒருவருடைய வயது அவருடைய மகனின் வயதைப் போல் 7 மடங்கு. 5 வருடங்கள் கழித்து அவருடைய வயது மகனின் வயதைப் போல் 4 மடங்காக இருக்கும். அவர்களுடைய தற்போதைய வயது', options: ['75, 15', '70, 10', '80, 20', '35, 5'], explanation: 'm − 5 = 7(s − 5), m + 5 = 4(s + 5); 3s = 45; s = 15, m = 75.' },
  },
  {
    difficulty: 'hard', source: 'Book example 3.51, p. 127', answer: 0,
    en: { q: 'Besides (0, 0), the system 8x − 3y = 5xy and 6x − 5y = −2xy has the solution', options: ['(11/23, 22/31)', '(23/11, 31/22)', '(1, 1)', '(22/31, 11/23)'], explanation: 'Dividing by xy and putting a = 1/x, b = 1/y gives 8b − 3a = 5, 6b − 5a = −2, so b = 31/22, a = 23/11.' },
    ta: { q: '(0, 0) தவிர 8x − 3y = 5xy, 6x − 5y = −2xy இன் மற்றொரு தீர்வு', options: ['(11/23, 22/31)', '(23/11, 31/22)', '(1, 1)', '(22/31, 11/23)'], explanation: 'xy ஆல் வகுத்து a = 1/x, b = 1/y என வைக்க 8b − 3a = 5, 6b − 5a = −2; b = 31/22, a = 23/11.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.13 Q1(iii), p. 131', answer: 0,
    en: { q: 'Solve: 2/x + 3/y = 5 and 3/x − 1/y + 9 = 0.', options: ['x = −1/2, y = 1/3', 'x = 1/2, y = −1/3', 'x = −2, y = 3', 'x = 1/3, y = −1/2'], explanation: 'Let a = 1/x, b = 1/y: 2a + 3b = 5, 3a − b = −9 give a = −2, b = 3.' },
    ta: { q: 'தீர்க்க: 2/x + 3/y = 5, 3/x − 1/y + 9 = 0.', options: ['x = −1/2, y = 1/3', 'x = 1/2, y = −1/3', 'x = −2, y = 3', 'x = 1/3, y = −1/2'], explanation: 'a = 1/x, b = 1/y: 2a + 3b = 5, 3a − b = −9; a = −2, b = 3.' },
  },
  {
    difficulty: 'hard', source: 'Book example 3.53, p. 130', answer: 0,
    en: { q: 'By cross multiplication, the solution of 3x + 5y = 21 and −7x − 6y = −49 is', options: ['x = 7, y = 0', 'x = 0, y = 7', 'x = 2, y = 3', 'x = 7, y = 1'], explanation: 'x/119 = y/0 = 1/17 gives x = 7, y = 0 (y/0 is only notation, not division by zero).' },
    ta: { q: 'குறுக்குப் பெருக்கல் முறையில் 3x + 5y = 21, −7x − 6y = −49 இன் தீர்வு', options: ['x = 7, y = 0', 'x = 0, y = 7', 'x = 2, y = 3', 'x = 7, y = 1'], explanation: 'x/119 = y/0 = 1/17; x = 7, y = 0 (y/0 என்பது குறியீடு மட்டுமே; 0 ஆல் வகுத்தல் அல்ல).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.13 Q2, p. 131', answer: 0,
    en: { q: 'Akshaya has 80 coins of ₹2 and ₹5 totalling ₹220. The numbers of ₹2 and ₹5 coins are', options: ['60 and 20', '20 and 60', '50 and 30', '40 and 40'], explanation: 'x + y = 80 and 2x + 5y = 220 give 3y = 60, y = 20, x = 60.' },
    ta: { q: 'அட்சயா தனது பணப்பையில் இரண்டு ரூபாய், ஐந்து ரூபாய் நாணயங்களாக மொத்தம் ₹220 மதிப்புடைய 80 நாணயங்களை வைத்திருந்தாள். ₹2, ₹5 நாணயங்களின் எண்ணிக்கை', options: ['60, 20', '20, 60', '50, 30', '40, 40'], explanation: 'x + y = 80, 2x + 5y = 220; 3y = 60; y = 20, x = 60.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.13 Q3, p. 131', answer: 0,
    en: { q: 'Two pipes together fill a pool in 24 hours. Using the larger pipe for 8 hours and the smaller for 18 hours fills half the pool. The larger and smaller pipes alone would take', options: ['40 hours and 60 hours', '60 hours and 40 hours', '48 hours and 48 hours', '30 hours and 120 hours'], explanation: '1/x + 1/y = 1/24 and 8/x + 18/y = 1/2 give 1/x = 1/40 and 1/y = 1/60.' },
    ta: { q: 'இரு குழாய்கள் மூலம் ஒரு நீச்சல் குளத்தில் முழுமையாக நீர் நிரப்ப 24 மணி நேரம் ஆகும். அதிக விட்டமுடைய குழாயை 8 மணி நேரமும் குறைந்த விட்டமுடைய குழாயை 18 மணி நேரமும் பயன்படுத்தினால் குளத்தில் பாதி அளவு நீர் நிரம்பும். பெரிய, சிறிய குழாய்கள் தனித்தனியாகக் குளத்தை நிரப்ப ஆகும் நேரம்', options: ['40 மணி, 60 மணி', '60 மணி, 40 மணி', '48 மணி, 48 மணி', '30 மணி, 120 மணி'], explanation: '1/x + 1/y = 1/24, 8/x + 18/y = 1/2; 1/x = 1/40, 1/y = 1/60.' },
  },
  {
    difficulty: 'hard', source: 'Book example 3.55, p. 132', answer: 0,
    en: { q: 'The system kx + 2y = 3 and 2x − 3y = 1 has a unique solution when', options: ['k ≠ −4/3', 'k = −4/3', 'k ≠ 4/3', 'k = 3'], explanation: 'Unique solution needs a₁/a₂ ≠ b₁/b₂: k/2 ≠ 2/(−3), so k ≠ −4/3.' },
    ta: { q: 'kx + 2y = 3, 2x − 3y = 1 க்கு ஒரே ஒரு தீர்வு இருக்க', options: ['k ≠ −4/3', 'k = −4/3', 'k ≠ 4/3', 'k = 3'], explanation: 'ஒரே ஒரு தீர்வுக்கு a₁/a₂ ≠ b₁/b₂: k/2 ≠ 2/(−3); k ≠ −4/3.' },
  },
  {
    difficulty: 'hard', source: 'Book example 3.56, p. 132', answer: 0,
    en: { q: 'The system 2x − 3y = 7 and (k + 2)x − (2k + 1)y = 3(2k − 1) has infinitely many solutions when k is', options: ['4', '2', '−4', '1/2'], explanation: '2/(k + 2) = 3/(2k + 1) gives 4k + 2 = 3k + 6, k = 4; it also satisfies the constant ratio.' },
    ta: { q: '2x − 3y = 7, (k + 2)x − (2k + 1)y = 3(2k − 1) க்கு எண்ணற்ற தீர்வுகள் இருக்க k =', options: ['4', '2', '−4', '1/2'], explanation: '2/(k + 2) = 3/(2k + 1); 4k + 2 = 3k + 6; k = 4; இது மாறிலிகளின் விகிதத்தையும் நிறைவு செய்கிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book example 3.57, p. 132', answer: 0,
    en: { q: 'The value of k for which 8x + 5y = 9 and kx + 10y = 15 has no solution is', options: ['16', '4', '8', '24'], explanation: 'No solution needs 8/k = 5/10 ≠ 9/15, so k = 16.' },
    ta: { q: '8x + 5y = 9, kx + 10y = 15 க்குத் தீர்வு இல்லாமல் இருக்க k இன் மதிப்பு', options: ['16', '4', '8', '24'], explanation: 'தீர்வு இல்லாமல் இருக்க 8/k = 5/10 ≠ 9/15; k = 16.' },
  },
  {
    difficulty: 'hard', source: 'Book example 3.54, p. 131', answer: 0,
    en: { q: 'Which of the following systems has infinitely many solutions?', options: ['4x + y = 3 and 8x + 2y = 6', '2x − 4y = 7 and x − 3y = −2', '4x + 7 = 2y and 2x + 9 = y', 'x + y = 7 and x − y = 3'], explanation: 'For 4x + y = 3 and 8x + 2y = 6 all three ratios equal 1/2: the lines coincide.' },
    ta: { q: 'கீழ்க்காண்பனவற்றில் எண்ணற்ற தீர்வுகள் கொண்ட தொகுப்பு எது?', options: ['4x + y = 3, 8x + 2y = 6', '2x − 4y = 7, x − 3y = −2', '4x + 7 = 2y, 2x + 9 = y', 'x + y = 7, x − y = 3'], explanation: '4x + y = 3, 8x + 2y = 6 இல் மூன்று விகிதங்களும் 1/2; கோடுகள் ஒன்றின் மேல் ஒன்று பொருந்தும்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.14 Q1, p. 133', answer: 0,
    en: { q: 'The sum of a two-digit number and the number with digits interchanged is 110. If 10 is subtracted from the first number, the result is 4 more than 5 times the sum of its digits. The first number is', options: ['64', '46', '55', '73'], explanation: '11(x + y) = 110 gives x + y = 10; 10x + y − 10 = 5(10) + 4 gives 10x + y = 64.' },
    ta: { q: 'ஓர் ஈரிலக்க எண்ணையும் அதன் இலக்கங்களை மாற்றுவதால் கிடைக்கும் எண்ணையும் கூட்டினால் 110 கிடைக்கும். முதல் எண்ணிலிருந்து 10 ஐக் கழித்தால் அது அதன் இலக்கங்களின் கூடுதலின் 5 மடங்கை விட 4 அதிகம். முதல் எண்', options: ['64', '46', '55', '73'], explanation: '11(x + y) = 110; x + y = 10; 10x + y − 10 = 5(10) + 4; எனவே 10x + y = 64.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.14 Q2, p. 133', answer: 0,
    en: { q: 'The sum of the numerator and denominator of a fraction is 12. If 3 is added to the denominator, the fraction becomes 1/2. The fraction is', options: ['5/7', '7/5', '4/8', '3/9'], explanation: 'x + y = 12 and 2x = y + 3 give 3x = 15, x = 5, y = 7.' },
    ta: { q: 'ஒரு பின்னத்தின் பகுதி மற்றும் தொகுதியின் கூடுதல் 12. அப்பின்னத்தின் பகுதியுடன் 3 ஐக் கூட்டினால் அதன் மதிப்பு 1/2. அப்பின்னம்', options: ['5/7', '7/5', '4/8', '3/9'], explanation: 'x + y = 12, 2x = y + 3; 3x = 15; x = 5, y = 7.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.14 Q3, p. 133', answer: 0,
    en: { q: 'In a cyclic quadrilateral ABCD, ∠A = (4y + 20)°, ∠B = (3y − 5)°, ∠C = (4x)° and ∠D = (7x + 5)°. Then ∠A is', options: ['120°', '70°', '60°', '110°'], explanation: 'Opposite angles add to 180°: 4x + 4y = 160 and 7x + 3y = 180 give x = 15, y = 25, so ∠A = 120°.' },
    ta: { q: 'ABCD என்ற வட்ட நாற்கரத்தில் ∠A = (4y + 20)°, ∠B = (3y − 5)°, ∠C = (4x)°, ∠D = (7x + 5)° எனில் ∠A =', options: ['120°', '70°', '60°', '110°'], explanation: 'எதிர்க் கோணங்களின் கூடுதல் 180°: 4x + 4y = 160, 7x + 3y = 180; x = 15, y = 25; ∠A = 120°.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.14 Q4, p. 133', answer: 0,
    en: { q: 'Selling a TV at 5% gain and a fridge at 10% gain gives a total gain of ₹2000; selling the TV at 10% gain and the fridge at 5% loss gives a gain of ₹1500. The price of the TV is', options: ['₹20000', '₹10000', '₹15000', '₹25000'], explanation: '0.05T + 0.1F = 2000 and 0.1T − 0.05F = 1500 give T = 20000, F = 10000.' },
    ta: { q: 'ஒரு தொலைக்காட்சிப் பெட்டியை 5% இலாபத்திற்கும் ஒரு குளிர்சாதனப் பெட்டியை 10% இலாபத்திற்கும் விற்பதால் நிகர இலாபம் ₹2000; தொலைக்காட்சிப் பெட்டியை 10% இலாபத்திற்கும் குளிர்சாதனப் பெட்டியை 5% நட்டத்திற்கும் விற்பதால் நிகர இலாபம் ₹1500. தொலைக்காட்சிப் பெட்டியின் விலை', options: ['₹20000', '₹10000', '₹15000', '₹25000'], explanation: '0.05T + 0.1F = 2000, 0.1T − 0.05F = 1500; T = 20000, F = 10000.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.14 Q5, p. 133', answer: 0,
    en: { q: 'Two numbers are in the ratio 5 : 6. If 8 is subtracted from each, the ratio becomes 4 : 5. The numbers are', options: ['40 and 48', '30 and 36', '50 and 60', '20 and 24'], explanation: '(5k − 8)/(6k − 8) = 4/5 gives 25k − 40 = 24k − 32, k = 8.' },
    ta: { q: 'இரு எண்கள் 5 : 6 என்ற விகிதத்தில் உள்ளன. அவை ஒவ்வொன்றிலிருந்தும் 8 ஐக் கழித்தால் அவற்றின் விகிதம் 4 : 5 என மாறும். அந்த எண்கள்', options: ['40, 48', '30, 36', '50, 60', '20, 24'], explanation: '(5k − 8)/(6k − 8) = 4/5; 25k − 40 = 24k − 32; k = 8.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 3.14 Q6, p. 133', answer: 0,
    en: { q: '4 Indians and 4 Chinese can finish a work in 3 days; 2 Indians and 5 Chinese can finish it in 4 days. One Indian alone and one Chinese alone would take', options: ['18 days and 36 days', '36 days and 18 days', '12 days and 24 days', '24 days and 48 days'], explanation: '4/x + 4/y = 1/3 and 2/x + 5/y = 1/4 give 1/x = 1/18 and 1/y = 1/36.' },
    ta: { q: '4 இந்தியர்களும் 4 சீனர்களும் சேர்ந்து ஒரு வேலையை 3 நாள்களில் முடிக்கிறார்கள்; 2 இந்தியர்களும் 5 சீனர்களும் சேர்ந்து அதே வேலையை 4 நாள்களில் முடிக்கிறார்கள். தனியாக ஓர் இந்தியர், தனியாக ஒரு சீனர் அந்த வேலையை முடிக்க ஆகும் நாள்கள்', options: ['18 நாட்கள், 36 நாட்கள்', '36 நாட்கள், 18 நாட்கள்', '12 நாட்கள், 24 நாட்கள்', '24 நாட்கள், 48 நாட்கள்'], explanation: '4/x + 4/y = 1/3, 2/x + 5/y = 1/4; 1/x = 1/18, 1/y = 1/36.' },
  },
  {
    difficulty: 'hard', source: '§3.6.3, p. 112', answer: 0,
    en: { q: 'Assertion (A): (x + 1) is a factor of x³ + 7x² + 13x + 7.\nReason (R): (x + 1) is a factor of p(x) if the sum of the coefficients of even powers of x (including the constant) equals the sum of the coefficients of odd powers.', options: AR_EN, explanation: '7 + 7 = 14 and 1 + 13 = 14, so p(−1) = 0; R is exactly why A holds.' },
    ta: { q: 'கூற்று: (x + 1) என்பது x³ + 7x² + 13x + 7 இன் காரணி.\nகாரணம்: x இன் இரட்டைப்படை அடுக்குகளில் உள்ள உறுப்புகளின் கெழுக்கள் மற்றும் மாறிலியின் கூடுதல், ஒற்றைப்படை அடுக்குகளில் உள்ள உறுப்புகளின் கெழுக்களின் கூடுதலுக்குச் சமம் எனில் (x + 1) ஆனது p(x) இன் காரணி.', options: AR_TA, explanation: '7 + 7 = 14, 1 + 13 = 14; எனவே p(−1) = 0; காரணமே கூற்றை விளக்குகிறது.' },
  },
  {
    difficulty: 'hard', source: '§3.8.3, p. 131', answer: 3,
    en: { q: 'Assertion (A): The system 2x + 3y = 7 and 4x + 6y = 14 has a unique solution.\nReason (R): A system has a unique solution when a₁/a₂ ≠ b₁/b₂.', options: AR_EN, explanation: 'Here 2/4 = 3/6 = 7/14, so the lines coincide and there are infinitely many solutions; A is false, R is true.' },
    ta: { q: 'கூற்று: 2x + 3y = 7, 4x + 6y = 14 க்கு ஒரே ஒரு தீர்வு உண்டு.\nகாரணம்: a₁/a₂ ≠ b₁/b₂ எனில் ஒரே ஒரு தீர்வு உண்டு.', options: AR_TA, explanation: 'இங்கு 2/4 = 3/6 = 7/14; கோடுகள் ஒன்றின் மேல் ஒன்று பொருந்துவதால் எண்ணற்ற தீர்வுகள்; கூற்று தவறு, காரணம் சரி.' },
  },
  {
    difficulty: 'hard', source: '§3.2, p. 83', answer: 3,
    en: { q: 'Assertion (A): The degree of the zero polynomial is 0.\nReason (R): The degree of a non-zero constant polynomial is 0.', options: AR_EN, explanation: 'The degree of the zero polynomial is not defined, so A is false; R is true.' },
    ta: { q: 'கூற்று: பூச்சியப் பல்லுறுப்புக் கோவையின் படி 0.\nகாரணம்: பூச்சியமற்ற மாறிலிப் பல்லுறுப்புக் கோவையின் படி 0.', options: AR_TA, explanation: 'பூச்சியப் பல்லுறுப்புக் கோவையின் படி வரையறுக்கப்படவில்லை; கூற்று தவறு, காரணம் சரி.' },
  },
  {
    difficulty: 'hard', source: '§3.4.3, p. 100', answer: 0,
    en: { q: 'Assertion (A): If x + y + z = 0, then x³ + y³ + z³ = 3xyz.\nReason (R): x³ + y³ + z³ − 3xyz = (x + y + z)(x² + y² + z² − xy − yz − zx).', options: AR_EN, explanation: 'When x + y + z = 0 the right side of the identity in R is 0, giving A directly.' },
    ta: { q: 'கூற்று: x + y + z = 0 எனில் x³ + y³ + z³ = 3xyz.\nகாரணம்: x³ + y³ + z³ − 3xyz = (x + y + z)(x² + y² + z² − xy − yz − zx).', options: AR_TA, explanation: 'x + y + z = 0 எனில் காரணத்தில் உள்ள முற்றொருமையின் வலப்பக்கம் 0; எனவே கூற்று நேரடியாகக் கிடைக்கும்.' },
  },
  {
    difficulty: 'hard', source: '§3.2.2, p. 89', answer: 0,
    en: { q: 'Consider the statements:\n(i) A zero of a polynomial can be any real number.\n(ii) The number of zeros of a polynomial is at most its degree.\n(iii) A polynomial becomes zero exactly where its graph cuts the Y-axis.\nWhich are correct?', options: ['(i) and (ii) only', '(ii) and (iii) only', '(i) and (iii) only', '(i), (ii) and (iii)'], explanation: 'Zeros are where the graph meets the X-axis, not the Y-axis, so (iii) is false.' },
    ta: { q: 'கூற்றுகள்:\n(i) பல்லுறுப்புக் கோவையின் பூச்சியம் எந்த மெய்யெண்ணாகவும் இருக்கலாம்.\n(ii) பூச்சியங்களின் எண்ணிக்கை படியை விட அதிகமாகாது.\n(iii) வரைபடம் Y அச்சை வெட்டும் இடத்தில் பல்லுறுப்புக் கோவை பூச்சியமாகும்.\nஇவற்றுள் சரியானவை', options: ['(i), (ii) மட்டும்', '(ii), (iii) மட்டும்', '(i), (iii) மட்டும்', '(i), (ii), (iii)'], explanation: 'வரைபடம் X அச்சைச் சந்திக்கும் இடங்களே பூச்சியங்கள், Y அச்சு அல்ல; எனவே (iii) தவறு.' },
  },
];
