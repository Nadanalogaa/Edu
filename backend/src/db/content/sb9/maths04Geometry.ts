// Tamil Nadu State Board, 9th Mathematics, Unit 4 – Geometry (வடிவியல்).
// Book exercises, examples and progress checks converted to MCQs (answers checked
// against the book's answer key), plus our own questions so every section is covered.
// Tamil wording follows the terms used in the Tamil-medium textbook.
// source = section / exercise and printed page of the English-medium book.

import { BankQuestion, AR_EN, AR_TA } from './types';

const IMG = '/content/9/state_board/maths/04';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: '§4.2, p. 139', answer: 0,
    en: { q: 'An angle whose measure θ satisfies 90° < θ < 180° is called', options: ['an obtuse angle', 'an acute angle', 'a reflex angle', 'a straight angle'], explanation: 'An obtuse angle lies between 90° and 180°; a reflex angle lies between 180° and 360°.' },
    ta: { q: '90° < θ < 180° என அமையும் கோணம்', options: ['விரிகோணம்', 'குறுங்கோணம்', 'பின்வளைகோணம்', 'நேர்க்கோணம்'], explanation: '90° க்கும் 180° க்கும் இடைப்பட்ட கோணம் விரிகோணம்; 180° க்கும் 360° க்கும் இடைப்பட்டது பின்வளைகோணம்.' },
  },
  {
    difficulty: 'easy', source: '§4.2, p. 140', answer: 0,
    en: { q: 'Two angles are complementary if their sum is', options: ['90°', '180°', '360°', '270°'], explanation: 'Complementary angles add up to 90°, e.g. 64° and 26°.' },
    ta: { q: 'இரு கோணங்களின் கூடுதல் எவ்வளவு எனில் அவை நிரப்புக் கோணங்கள்?', options: ['90°', '180°', '360°', '270°'], explanation: 'நிரப்புக் கோணங்களின் கூடுதல் 90°; எ.கா. 64° மற்றும் 26°.' },
  },
  {
    difficulty: 'easy', source: '§4.2, p. 140', answer: 0,
    en: { q: 'The supplement of an angle of 110° is', options: ['70°', '20°', '250°', '110°'], explanation: 'Supplementary angles add up to 180°, so 180° − 110° = 70°.' },
    ta: { q: '110° கோணத்தின் மிகைநிரப்புக் கோணம்', options: ['70°', '20°', '250°', '110°'], explanation: 'மிகைநிரப்புக் கோணங்களின் கூடுதல் 180°; எனவே 180° − 110° = 70°.' },
  },
  {
    difficulty: 'easy', source: '§4.2.1, p. 141', answer: 0,
    en: { q: 'A line which intersects two or more lines at distinct points is called a', options: ['transversal', 'median', 'diagonal', 'chord'], explanation: 'A transversal cuts two or more lines at distinct points, forming eight angles with two lines.' },
    ta: { q: 'இரண்டு அல்லது அதற்கு மேற்பட்ட கோடுகளை வெவ்வேறு புள்ளிகளில் வெட்டும் கோடு', options: ['குறுக்குவெட்டி', 'நடுக்கோடு', 'மூலைவிட்டம்', 'நாண்'], explanation: 'இரண்டு அல்லது அதற்கு மேற்பட்ட கோடுகளை வெவ்வேறு புள்ளிகளில் வெட்டும் கோடு குறுக்குவெட்டி ஆகும்.' },
  },
  {
    difficulty: 'easy', source: '§4.2, p. 140', answer: 0,
    en: { q: 'When two lines intersect, the vertically opposite angles are', options: ['equal', 'complementary', 'supplementary', 'always right angles'], explanation: 'If two lines intersect, vertically opposite angles are equal, e.g. ∠POQ = ∠SOR.' },
    ta: { q: 'இரு கோடுகள் வெட்டிக்கொள்ளும்போது குத்தெதிர்க் கோணங்கள்', options: ['சமம்', 'நிரப்புக் கோணங்கள்', 'மிகைநிரப்புக் கோணங்கள்', 'எப்போதும் செங்கோணங்கள்'], explanation: 'இரு கோடுகள் வெட்டிக்கொண்டால் குத்தெதிர்க் கோணங்கள் சமம்; எ.கா. ∠POQ = ∠SOR.' },
  },
  {
    difficulty: 'easy', source: '§4.3.1, p. 145', answer: 0,
    en: { q: 'A quadrilateral in which one pair of opposite sides are parallel is a', options: ['trapezium', 'kite', 'rhombus', 'square'], explanation: 'A trapezium has (at least) one pair of opposite sides parallel.' },
    ta: { q: 'ஒரு சோடி எதிர்ப் பக்கங்கள் இணையாக உள்ள நாற்கரம்', options: ['சரிவகம்', 'பட்டம்', 'சாய்சதுரம்', 'சதுரம்'], explanation: 'ஒரு சோடி எதிர்ப் பக்கங்கள் இணையாக உள்ள நாற்கரம் சரிவகம் ஆகும்.' },
  },
  {
    difficulty: 'easy', source: 'Book progress check (ii), p. 147', answer: 0,
    en: { q: 'A quadrilateral is a _____ if a pair of opposite sides are equal and parallel.', options: ['parallelogram', 'kite', 'trapezium', 'cyclic quadrilateral'], explanation: 'If one pair of opposite sides is both equal and parallel, the quadrilateral is a parallelogram.' },
    ta: { q: 'ஒரு சோடி எதிர்ப் பக்கங்கள் சமமாகவும் இணையாகவும் உள்ள நாற்கரம் ஒரு _____', options: ['இணைகரம்', 'பட்டம்', 'சரிவகம்', 'வட்ட நாற்கரம்'], explanation: 'ஒரு சோடி எதிர்ப் பக்கங்கள் சமமாகவும் இணையாகவும் இருந்தால் அந்த நாற்கரம் இணைகரம் ஆகும்.' },
  },
  {
    difficulty: 'easy', source: 'Book progress check (iv), p. 147', answer: 0,
    en: { q: 'Which parallelogram is equiangular but not equilateral?', options: ['rectangle', 'rhombus', 'square', 'kite'], explanation: 'A rectangle has all angles equal (90°) but its sides need not all be equal.' },
    ta: { q: 'சமகோணமுடைய ஆனால் சமபக்கமற்ற இணைகரம் எது?', options: ['செவ்வகம்', 'சாய்சதுரம்', 'சதுரம்', 'பட்டம்'], explanation: 'செவ்வகத்தின் எல்லாக் கோணங்களும் 90°; ஆனால் எல்லாப் பக்கங்களும் சமமாக இருக்க வேண்டியதில்லை.' },
  },
  {
    difficulty: 'easy', source: 'Book progress check (v), p. 147', answer: 0,
    en: { q: 'Which parallelogram is equilateral but not equiangular?', options: ['rhombus', 'rectangle', 'square', 'trapezium'], explanation: 'A rhombus has all sides equal, but its angles need not all be equal.' },
    ta: { q: 'சமபக்கமுடைய ஆனால் சமகோணமற்ற இணைகரம் எது?', options: ['சாய்சதுரம்', 'செவ்வகம்', 'சதுரம்', 'சரிவகம்'], explanation: 'சாய்சதுரத்தின் எல்லாப் பக்கங்களும் சமம்; ஆனால் எல்லாக் கோணங்களும் சமமாக இருக்க வேண்டியதில்லை.' },
  },
  {
    difficulty: 'easy', source: 'Book progress check (vii), p. 147', answer: 0,
    en: { q: '_____ is a rectangle, a rhombus and a parallelogram.', options: ['A square', 'A kite', 'A trapezium', 'An isosceles trapezium'], explanation: 'A square is an equilateral and equiangular parallelogram, so it is a rectangle and a rhombus too.' },
    ta: { q: '_____ ஒரு செவ்வகம், ஒரு சாய்சதுரம் மற்றும் ஓர் இணைகரம் ஆகும்.', options: ['சதுரம்', 'பட்டம்', 'சரிவகம்', 'இருசமபக்கச் சரிவகம்'], explanation: 'சதுரம் சமபக்கமும் சமகோணமும் உடைய இணைகரம்; எனவே அது செவ்வகமும் சாய்சதுரமும் ஆகும்.' },
  },
  {
    difficulty: 'easy', source: '§4.4, p. 159', answer: 0,
    en: { q: 'A chord that passes through the centre of a circle is called a', options: ['diameter', 'radius', 'secant', 'arc'], explanation: 'A diameter is a chord through the centre; it is the longest chord of the circle.' },
    ta: { q: 'வட்ட மையத்தின் வழியே செல்லும் நாண்', options: ['விட்டம்', 'ஆரம்', 'வெட்டுக்கோடு', 'வில்'], explanation: 'வட்ட மையத்தின் வழியே செல்லும் நாண் விட்டம்; அதுவே வட்டத்தின் மிக நீளமான நாண்.' },
  },
  {
    difficulty: 'easy', source: '§4.4, p. 160', answer: 0,
    en: { q: 'Circles with the same centre but different radii are called', options: ['concentric circles', 'congruent circles', 'intersecting circles', 'circumcircles'], explanation: 'Concentric circles share a centre; examples are an archery target and water ripples.' },
    ta: { q: 'ஒரே மையமும் வெவ்வேறு ஆரங்களும் கொண்ட வட்டங்கள்', options: ['ஒருமைய வட்டங்கள்', 'சர்வசம வட்டங்கள்', 'வெட்டும் வட்டங்கள்', 'சுற்றுவட்டங்கள்'], explanation: 'ஒரே மையம் கொண்ட வட்டங்கள் ஒருமைய வட்டங்கள்; எ.கா. அம்பெய்தும் இலக்கு, நீர் அலைகள்.' },
  },
  {
    difficulty: 'easy', source: '§4.4, p. 160', answer: 0,
    en: { q: 'The region enclosed by two radii and an arc of a circle is called a', options: ['sector', 'segment', 'chord', 'secant'], explanation: 'Two radii and the arc between them bound a sector; a chord and an arc bound a segment.' },
    ta: { q: 'இரு ஆரங்கள் மற்றும் ஒரு வில்லால் அடைபடும் பகுதி', options: ['வட்டக்கோணப்பகுதி', 'வட்டத்துண்டு', 'நாண்', 'வெட்டுக்கோடு'], explanation: 'இரு ஆரங்களும் வில்லும் அடைக்கும் பகுதி வட்டக்கோணப்பகுதி; நாணும் வில்லும் அடைக்கும் பகுதி வட்டத்துண்டு.' },
  },
  {
    difficulty: 'easy', source: 'Book progress check (true or false), p. 161', answer: 0,
    en: { q: 'Which statement about a circle is correct?', options: ['Every diameter of a circle is a chord.', 'Every chord of a circle is a diameter.', 'Every radius of a circle is a chord.', 'A circle has only one diameter.'], explanation: 'A diameter joins two points of the circle, so it is a chord; but a chord need not pass through the centre, and a radius has only one end on the circle.' },
    ta: { q: 'வட்டம் பற்றிய சரியான கூற்று எது?', options: ['வட்டத்தின் ஒவ்வொரு விட்டமும் ஒரு நாண் ஆகும்.', 'வட்டத்தின் ஒவ்வொரு நாணும் ஒரு விட்டம் ஆகும்.', 'வட்டத்தின் ஒவ்வொரு ஆரமும் ஒரு நாண் ஆகும்.', 'ஒரு வட்டத்திற்கு ஒரே ஒரு விட்டம் மட்டுமே உண்டு.'], explanation: 'விட்டம் வட்டத்தின் மேல் உள்ள இரு புள்ளிகளை இணைப்பதால் அது நாண்; ஆனால் நாண் மையத்தின் வழியே செல்ல வேண்டியதில்லை; ஆரத்தின் ஒரு முனை மட்டுமே வட்டத்தின் மேல் இருக்கும்.' },
  },
  {
    difficulty: 'easy', source: '§4.5.4, p. 167', answer: 0,
    en: { q: 'The angle inscribed in a semicircle is', options: ['a right angle', 'an acute angle', 'an obtuse angle', 'a straight angle'], explanation: 'The diameter subtends 180° at the centre, so the angle in a semicircle is 180° ÷ 2 = 90°.' },
    ta: { q: 'அரைவட்டத்தில் அமையும் கோணம்', options: ['செங்கோணம்', 'குறுங்கோணம்', 'விரிகோணம்', 'நேர்க்கோணம்'], explanation: 'விட்டம் மையத்தில் 180° தாங்குவதால் அரைவட்டத்தில் உள்ள கோணம் 180° ÷ 2 = 90°.' },
  },
  {
    difficulty: 'easy', source: 'Book progress check 4, p. 172', answer: 0,
    en: { q: 'Opposite angles of a cyclic quadrilateral are', options: ['supplementary', 'complementary', 'equal', 'always right angles'], explanation: 'Theorem 12: the opposite angles of a cyclic quadrilateral add up to 180°.' },
    ta: { q: 'வட்ட நாற்கரத்தின் எதிர்க் கோணங்கள்', options: ['மிகைநிரப்புக் கோணங்கள்', 'நிரப்புக் கோணங்கள்', 'சமம்', 'எப்போதும் செங்கோணங்கள்'], explanation: 'தேற்றம் 12: வட்ட நாற்கரத்தின் எதிர்க் கோணங்களின் கூடுதல் 180°.' },
  },
  {
    difficulty: 'easy', source: 'Book progress check 1, p. 172', answer: 0,
    en: { q: 'If a pair of opposite angles of a quadrilateral is supplementary, then the quadrilateral is', options: ['cyclic', 'a kite', 'a rhombus', 'a trapezium'], explanation: 'This is the converse of Theorem 12.' },
    ta: { q: 'ஒரு நாற்கரத்தின் ஒரு சோடி எதிர்க் கோணங்கள் மிகைநிரப்பிகள் எனில், அந்த நாற்கரம்', options: ['வட்ட நாற்கரம்', 'பட்டம்', 'சாய்சதுரம்', 'சரிவகம்'], explanation: 'இது தேற்றம் 12 இன் மறுதலை ஆகும்.' },
  },
  {
    difficulty: 'easy', source: '§4.7.1, p. 174', answer: 0,
    en: { q: 'The point of concurrency of the medians of a triangle is the', options: ['centroid', 'orthocentre', 'circumcentre', 'incentre'], explanation: 'Medians meet at the centroid G.' },
    ta: { q: 'முக்கோணத்தின் நடுக்கோடுகள் சந்திக்கும் புள்ளி', options: ['நடுக்கோட்டு மையம்', 'குத்துக்கோட்டு மையம்', 'சுற்றுவட்ட மையம்', 'உள்வட்ட மையம்'], explanation: 'நடுக்கோடுகள் சந்திக்கும் புள்ளி நடுக்கோட்டு மையம் G.' },
  },
  {
    difficulty: 'easy', source: '§4.7.2, p. 175', answer: 0,
    en: { q: 'The point of concurrency of the altitudes of a triangle is the', options: ['orthocentre', 'centroid', 'circumcentre', 'incentre'], explanation: 'Altitudes meet at the orthocentre, usually denoted by H.' },
    ta: { q: 'முக்கோணத்தின் குத்துக்கோடுகள் சந்திக்கும் புள்ளி', options: ['குத்துக்கோட்டு மையம்', 'நடுக்கோட்டு மையம்', 'சுற்றுவட்ட மையம்', 'உள்வட்ட மையம்'], explanation: 'குத்துக்கோடுகள் சந்திக்கும் புள்ளி குத்துக்கோட்டு மையம்; இது H எனக் குறிக்கப்படும்.' },
  },
  {
    difficulty: 'easy', source: '§4.7.3, p. 177', answer: 0,
    en: { q: 'The circumcentre of a triangle is the point of concurrency of its', options: ['perpendicular bisectors of the sides', 'medians', 'altitudes', 'angle bisectors'], explanation: 'Perpendicular bisectors of the sides meet at the circumcentre S.' },
    ta: { q: 'முக்கோணத்தின் சுற்றுவட்ட மையம் எவை சந்திக்கும் புள்ளி?', options: ['பக்கங்களின் மையக்குத்துக்கோடுகள்', 'நடுக்கோடுகள்', 'குத்துக்கோடுகள்', 'கோண இருசமவெட்டிகள்'], explanation: 'பக்கங்களின் மையக்குத்துக்கோடுகள் சந்திக்கும் புள்ளி சுற்றுவட்ட மையம் S.' },
  },
  {
    difficulty: 'easy', source: '§4.7.4, p. 179', answer: 0,
    en: { q: 'The incentre of a triangle is the point where its _____ meet.', options: ['angle bisectors', 'medians', 'altitudes', 'perpendicular bisectors'], explanation: 'The three angle bisectors meet at the incentre I, the centre of the incircle.' },
    ta: { q: 'முக்கோணத்தின் உள்வட்ட மையம் அதன் _____ சந்திக்கும் புள்ளி.', options: ['கோண இருசமவெட்டிகள்', 'நடுக்கோடுகள்', 'குத்துக்கோடுகள்', 'மையக்குத்துக்கோடுகள்'], explanation: 'மூன்று கோண இருசமவெட்டிகளும் சந்திக்கும் புள்ளி உள்வட்ட மையம் I.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 4.7.1, p. 181', answer: 0,
    en: { q: 'The exterior angle of a triangle is equal to the sum of two', options: ['interior opposite angles', 'exterior angles', 'alternate angles', 'interior angles'], explanation: 'Exterior angle property: an exterior angle equals the sum of the two interior opposite angles.' },
    ta: { q: 'முக்கோணத்தின் வெளிக்கோணம் எந்த இரு கோணங்களின் கூடுதலுக்குச் சமம்?', options: ['உள்ளெதிர்க் கோணங்கள்', 'வெளிக்கோணங்கள்', 'ஒன்றுவிட்ட கோணங்கள்', 'உள் கோணங்கள்'], explanation: 'வெளிக்கோணப் பண்பு: வெளிக்கோணம் இரு உள்ளெதிர்க் கோணங்களின் கூடுதலுக்குச் சமம்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 4.7.6, p. 181', answer: 0,
    en: { q: 'If the diagonals of a rhombus are equal, then the rhombus is a', options: ['square', 'rectangle but not a square', 'parallelogram but not a rectangle', 'parallelogram but not a square'], explanation: 'A rhombus with equal diagonals has all angles 90°, so it is a square.' },
    ta: { q: 'சாய்சதுரத்தின் மூலைவிட்டங்கள் சமமெனில் அந்தச் சாய்சதுரம் ஒரு', options: ['சதுரம்', 'செவ்வகம் ஆனால் சதுரம் அல்ல', 'இணைகரம் ஆனால் செவ்வகம் அல்ல', 'இணைகரம் ஆனால் சதுரம் அல்ல'], explanation: 'சம மூலைவிட்டங்கள் கொண்ட சாய்சதுரத்தின் எல்லாக் கோணங்களும் 90°; எனவே அது சதுரம்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 4.7.8, p. 182', answer: 0,
    en: { q: 'If an interior angle of a parallelogram is 90°, then the parallelogram is a', options: ['rectangle', 'rhombus', 'trapezium', 'kite'], explanation: 'One right angle forces all angles of a parallelogram to be 90°, giving a rectangle.' },
    ta: { q: 'ஓர் இணைகரத்தின் ஓர் உள் கோணம் 90° எனில், அந்த இணைகரம் ஒரு', options: ['செவ்வகம்', 'சாய்சதுரம்', 'சரிவகம்', 'பட்டம்'], explanation: 'ஒரு கோணம் 90° எனில் இணைகரத்தின் எல்லாக் கோணங்களும் 90°; எனவே அது செவ்வகம்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 4.7.9, p. 182', answer: 0,
    en: { q: 'Which of the following statements is correct?', options: ['Both pairs of opposite sides of a parallelogram are always equal.', 'Opposite angles of a parallelogram are not equal.', 'Adjacent angles of a parallelogram are complementary.', 'Diagonals of a parallelogram are always equal.'], explanation: 'Opposite sides of a parallelogram are equal (Theorem 1); adjacent angles are supplementary, and diagonals need not be equal.' },
    ta: { q: 'பின்வருவனவற்றுள் எந்தக் கூற்று சரியானது?', options: ['இணைகரத்தின் இரு சோடி எதிர்ப்பக்கங்கள் எப்பொழுதும் சமம்.', 'இணைகரத்தின் எதிர்க் கோணங்கள் சமமல்ல.', 'இணைகரத்தின் அடுத்துள்ள கோணங்கள் நிரப்பிகள்.', 'இணைகரத்தின் மூலைவிட்டங்கள் எப்பொழுதும் சமம்.'], explanation: 'இணைகரத்தின் எதிர்ப்பக்கங்கள் சமம் (தேற்றம் 1); அடுத்துள்ள கோணங்கள் மிகைநிரப்பிகள்; மூலைவிட்டங்கள் சமமாக இருக்க வேண்டியதில்லை.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 4.7.17, p. 182', answer: 0,
    en: { q: 'If one angle of a cyclic quadrilateral is 75°, then the opposite angle is', options: ['105°', '100°', '85°', '90°'], explanation: 'Opposite angles of a cyclic quadrilateral are supplementary: 180° − 75° = 105°.' },
    ta: { q: 'வட்ட நாற்கரத்தின் ஒரு கோண அளவு 75° எனில், எதிர்க் கோணத்தின் அளவு', options: ['105°', '100°', '85°', '90°'], explanation: 'வட்ட நாற்கரத்தின் எதிர்க் கோணங்கள் மிகைநிரப்பிகள்: 180° − 75° = 105°.' },
  },

  // ------------------------------------------------------------------ Medium
  {
    difficulty: 'medium', source: 'Book exercise 4.1.2, p. 143', answer: 0,
    en: { q: 'The angles of a triangle are in the ratio 1 : 2 : 3. The angles are', options: ['30°, 60°, 90°', '20°, 40°, 60°', '45°, 45°, 90°', '36°, 72°, 108°'], explanation: 'Sum of parts = 6, so one part = 180° ÷ 6 = 30°, giving 30°, 60°, 90°.' },
    ta: { q: 'ஒரு முக்கோணத்தின் கோணங்கள் 1 : 2 : 3 என்ற விகிதத்தில் உள்ளன. கோணங்கள்', options: ['30°, 60°, 90°', '20°, 40°, 60°', '45°, 45°, 90°', '36°, 72°, 108°'], explanation: 'பகுதிகளின் கூடுதல் 6; ஒரு பகுதி = 180° ÷ 6 = 30°; எனவே 30°, 60°, 90°.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 4.2.1, p. 157', answer: 0,
    en: { q: 'The angles of a quadrilateral are in the ratio 2 : 4 : 5 : 7. The angles are', options: ['40°, 80°, 100°, 140°', '20°, 40°, 50°, 70°', '30°, 60°, 75°, 105°', '36°, 72°, 90°, 162°'], explanation: 'Angle sum of a quadrilateral is 360°; 360° ÷ 18 = 20°, so the angles are 40°, 80°, 100°, 140°.' },
    ta: { q: 'ஒரு நாற்கரத்தின் கோணங்கள் 2 : 4 : 5 : 7 என்ற விகிதத்தில் உள்ளன. கோணங்கள்', options: ['40°, 80°, 100°, 140°', '20°, 40°, 50°, 70°', '30°, 60°, 75°, 105°', '36°, 72°, 90°, 162°'], explanation: 'நாற்கரத்தின் கோணங்களின் கூடுதல் 360°; 360° ÷ 18 = 20°; எனவே 40°, 80°, 100°, 140°.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 4.2.2, p. 157', answer: 0,
    en: { q: 'In quadrilateral ABCD, ∠A = 72° and ∠C is the supplement of ∠A. The other two angles are (2x − 10)° and (x + 4)°. The value of x is', options: ['62', '58', '72', '54'], explanation: '∠C = 108°, so (2x − 10) + (x + 4) = 360 − 180 = 180, giving 3x = 186 and x = 62 (angles 114° and 66°).' },
    ta: { q: 'நாற்கரம் ABCD இல் ∠A = 72°; ∠C ஆனது ∠A இன் மிகைநிரப்புக் கோணம். மற்ற இரு கோணங்கள் (2x − 10)° மற்றும் (x + 4)° எனில் x இன் மதிப்பு', options: ['62', '58', '72', '54'], explanation: '∠C = 108°; (2x − 10) + (x + 4) = 360 − 180 = 180; 3x = 186; x = 62 (கோணங்கள் 114°, 66°).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 4.2.3, p. 157', answer: 0,
    en: { q: 'ABCD is a rectangle whose diagonals AC and BD intersect at O. If ∠OAB = 46°, then ∠OBC is', options: ['44°', '46°', '88°', '134°'], explanation: 'Diagonals of a rectangle are equal and bisect each other, so OA = OB and ∠OBA = 46°; ∠OBC = 90° − 46° = 44°.' },
    ta: { q: 'செவ்வகம் ABCD இன் மூலைவிட்டங்கள் AC, BD ஆகியவை O இல் வெட்டுகின்றன. ∠OAB = 46° எனில் ∠OBC', options: ['44°', '46°', '88°', '134°'], explanation: 'செவ்வகத்தின் மூலைவிட்டங்கள் சமம்; ஒன்றையொன்று இருசமக் கூறிடும்; OA = OB எனவே ∠OBA = 46°; ∠OBC = 90° − 46° = 44°.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 4.2.4, p. 157', answer: 0,
    en: { q: 'The diagonals of a rhombus are 12 cm and 16 cm. The side of the rhombus is', options: ['10 cm', '14 cm', '20 cm', '28 cm'], explanation: 'Diagonals bisect at right angles: side = √(6² + 8²) = √100 = 10 cm.' },
    ta: { q: 'ஒரு சாய்சதுரத்தின் மூலைவிட்டங்கள் 12 செமீ மற்றும் 16 செமீ எனில் அதன் பக்க அளவு', options: ['10 செமீ', '14 செமீ', '20 செமீ', '28 செமீ'], explanation: 'மூலைவிட்டங்கள் செங்குத்தாக இருசமக் கூறிடும்: பக்கம் = √(6² + 8²) = √100 = 10 செமீ.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 4.1.3(vi), p. 144', answer: 0,
    en: { q: 'In ΔABC, AB = AC and AM ⊥ BC with M on BC. ΔABM and ΔACM are congruent by the', options: ['RHS criterion', 'SAS criterion', 'ASA criterion', 'AAS criterion'], explanation: 'Both have a right angle at M, equal hypotenuses AB = AC and the common side AM, so RHS applies.' },
    ta: { q: 'ΔABC இல் AB = AC; BC இன் மேல் உள்ள M க்கு AM ⊥ BC. ΔABM மற்றும் ΔACM சர்வசமமாவது எந்த விதிப்படி?', options: ['செ-க-ப (RHS)', 'ப-கோ-ப (SAS)', 'கோ-ப-கோ (ASA)', 'கோ-கோ-ப (AAS)'], explanation: 'இரண்டிலும் M இல் செங்கோணம், கர்ணங்கள் AB = AC, பொதுப்பக்கம் AM; எனவே RHS விதி.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 4.1.3(v), p. 144', answer: 0,
    en: { q: 'Segments AC and BD bisect each other at O (AO = OC, BO = OD). ΔAOB and ΔCOD are congruent by the', options: ['SAS criterion', 'SSS criterion', 'RHS criterion', 'AAS criterion'], explanation: 'AO = OC, BO = OD and the included vertically opposite angles ∠AOB = ∠COD, so SAS applies.' },
    ta: { q: 'AC, BD ஆகிய கோட்டுத்துண்டுகள் O இல் ஒன்றையொன்று இருசமக் கூறிடுகின்றன (AO = OC, BO = OD). ΔAOB மற்றும் ΔCOD சர்வசமமாவது எந்த விதிப்படி?', options: ['ப-கோ-ப (SAS)', 'ப-ப-ப (SSS)', 'செ-க-ப (RHS)', 'கோ-கோ-ப (AAS)'], explanation: 'AO = OC, BO = OD மற்றும் இடைப்பட்ட குத்தெதிர்க் கோணங்கள் ∠AOB = ∠COD; எனவே SAS விதி.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 4.7.5, p. 181', answer: 0,
    en: { q: 'In ΔABC, ∠A = 50°, ∠B = 70°, ∠C = 60°; in ΔDEF, ∠D = 60°, ∠E = 70°, ∠F = 50°, and BC = ED. The correct statement is', options: ['ΔABC ≅ ΔFED', 'ΔABC ≅ ΔDEF', 'ΔABC ≅ ΔFDE', 'ΔABC ≅ ΔEDF'], explanation: 'Match equal angles: A ↔ F (50°), B ↔ E (70°), C ↔ D (60°), so ΔABC ≅ ΔFED.' },
    ta: { q: 'ΔABC இல் ∠A = 50°, ∠B = 70°, ∠C = 60°; ΔDEF இல் ∠D = 60°, ∠E = 70°, ∠F = 50° மற்றும் BC = ED. சரியான கூற்று', options: ['ΔABC ≅ ΔFED', 'ΔABC ≅ ΔDEF', 'ΔABC ≅ ΔFDE', 'ΔABC ≅ ΔEDF'], explanation: 'சம கோணங்களைப் பொருத்துக: A ↔ F (50°), B ↔ E (70°), C ↔ D (60°); எனவே ΔABC ≅ ΔFED.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 4.7.2, p. 181', answer: 0,
    en: { q: 'In quadrilateral ABCD, AB = BC and AD = DC. If ∠B = 108° and ∠D = 42°, then ∠BCD is', options: ['105°', '150°', '72°', '30°'], explanation: 'ABCD is a kite, so ∠A = ∠C; 2∠C = 360° − 108° − 42° = 210°, so ∠C = 105°.' },
    ta: { q: 'நாற்கரம் ABCD இல் AB = BC மற்றும் AD = DC. ∠B = 108°, ∠D = 42° எனில் ∠BCD இன் அளவு', options: ['105°', '150°', '72°', '30°'], explanation: 'ABCD ஒரு பட்டம்; ∠A = ∠C; 2∠C = 360° − 108° − 42° = 210°; ∠C = 105°.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 4.7.3, p. 181', answer: 0,
    en: { q: 'ABCD is a square whose diagonals AC and BD meet at O. The number of pairs of congruent triangles with vertex O is', options: ['6', '4', '8', '12'], explanation: 'The four triangles AOB, BOC, COD, DOA are all congruent, and 4 triangles form 4C2 = 6 pairs.' },
    ta: { q: 'சதுரம் ABCD இல் மூலைவிட்டங்கள் AC, BD ஆனது O இல் சந்திக்கின்றன. O வை முனையாகக் கொண்ட சர்வசம முக்கோணச் சோடிகளின் எண்ணிக்கை', options: ['6', '4', '8', '12'], explanation: 'AOB, BOC, COD, DOA ஆகிய நான்கு முக்கோணங்களும் சர்வசமம்; 4 முக்கோணங்களிலிருந்து 6 சோடிகள் கிடைக்கும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 4.7.7, p. 182', answer: 0,
    en: { q: 'If the bisectors of ∠A and ∠B of a quadrilateral ABCD meet at O, then ∠AOB is', options: ['½(∠C + ∠D)', '∠C + ∠D', '½∠C + ⅓∠D', '⅓∠C + ½∠D'], explanation: '∠AOB = 180° − ½(∠A + ∠B) = 180° − ½(360° − ∠C − ∠D) = ½(∠C + ∠D).' },
    ta: { q: 'நாற்கரம் ABCD இல் ∠A மற்றும் ∠B இன் இருசமவெட்டிகள் O இல் சந்திக்கின்றன எனில், ∠AOB இன் மதிப்பு', options: ['½(∠C + ∠D)', '∠C + ∠D', '½∠C + ⅓∠D', '⅓∠C + ½∠D'], explanation: '∠AOB = 180° − ½(∠A + ∠B) = 180° − ½(360° − ∠C − ∠D) = ½(∠C + ∠D).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 4.7.10, p. 182', answer: 0,
    en: { q: 'The angles of a triangle are (3x − 40)°, (x + 20)° and (2x − 10)°. The value of x is', options: ['35°', '40°', '50°', '45°'], explanation: '6x − 30 = 180, so 6x = 210 and x = 35.' },
    ta: { q: 'முக்கோணத்தின் கோணங்கள் (3x − 40)°, (x + 20)° மற்றும் (2x − 10)° எனில் x இன் மதிப்பு', options: ['35°', '40°', '50°', '45°'], explanation: '6x − 30 = 180; 6x = 210; x = 35.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 4.7.11, p. 182', answer: 0,
    en: { q: 'PQ and RS are two equal chords of a circle with centre O such that ∠POQ = 70°. Then ∠ORS is', options: ['55°', '70°', '60°', '80°'], explanation: 'Equal chords subtend equal angles, so ∠ROS = 70°; ΔORS is isosceles, so ∠ORS = (180° − 70°) ÷ 2 = 55°.' },
    ta: { q: 'O வை மையமாகக் கொண்ட வட்டத்தில் PQ, RS சம நீளமுள்ள நாண்கள்; ∠POQ = 70° எனில் ∠ORS', options: ['55°', '70°', '60°', '80°'], explanation: 'சம நாண்கள் மையத்தில் சம கோணங்களைத் தாங்கும்: ∠ROS = 70°; ΔORS இருசமபக்க முக்கோணம்; ∠ORS = (180° − 70°) ÷ 2 = 55°.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 4.7.12, p. 182', answer: 0,
    en: { q: 'A chord is at a distance of 15 cm from the centre of a circle of radius 25 cm. The length of the chord is', options: ['40 cm', '20 cm', '25 cm', '18 cm'], explanation: 'Half-chord = √(25² − 15²) = √400 = 20 cm, so the chord is 2 × 20 = 40 cm.' },
    ta: { q: 'ஆரம் 25 செமீ உள்ள வட்டத்தின் மையத்திலிருந்து 15 செமீ தூரத்தில் உள்ள நாணின் நீளம்', options: ['40 செமீ', '20 செமீ', '25 செமீ', '18 செமீ'], explanation: 'அரை நாண் = √(25² − 15²) = √400 = 20 செமீ; நாண் = 2 × 20 = 40 செமீ.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 4.7.13, p. 182', answer: 0,
    en: { q: 'O is the centre of a circle and A, B, C are points on it. If ∠ACB = 40°, then ∠AOB is', options: ['80°', '40°', '20°', '140°'], explanation: 'The angle at the centre is double the angle at the circumference: 2 × 40° = 80°.' },
    ta: { q: 'O வட்டமையம்; A, B, C வட்டத்தின் மேல் உள்ள புள்ளிகள். ∠ACB = 40° எனில் ∠AOB', options: ['80°', '40°', '20°', '140°'], explanation: 'மையத்தில் தாங்கும் கோணம் பரிதியில் தாங்கும் கோணத்தின் இரு மடங்கு: 2 × 40° = 80°.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 4.7.14, p. 182', answer: 0,
    en: { q: 'In a cyclic quadrilateral ABCD, ∠A = 4x and ∠C = 2x. The value of x is', options: ['30°', '20°', '15°', '25°'], explanation: 'Opposite angles are supplementary: 4x + 2x = 180°, so x = 30°.' },
    ta: { q: 'வட்ட நாற்கரம் ABCD இல் ∠A = 4x, ∠C = 2x எனில் x இன் மதிப்பு', options: ['30°', '20°', '15°', '25°'], explanation: 'எதிர்க் கோணங்கள் மிகைநிரப்பிகள்: 4x + 2x = 180°; x = 30°.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 4.7.19, p. 183', answer: 0,
    en: { q: 'AD is a diameter of a circle and AB is a chord. If AD = 30 cm and AB = 24 cm, the distance of AB from the centre is', options: ['9 cm', '10 cm', '8 cm', '6 cm'], explanation: 'Radius = 15 cm, half-chord = 12 cm, distance = √(15² − 12²) = √81 = 9 cm.' },
    ta: { q: 'AD ஐ விட்டமாகக் கொண்ட வட்டத்தின் நாண் AB. AD = 30 செமீ, AB = 24 செமீ எனில் வட்ட மையத்திலிருந்து AB அமைந்துள்ள தூரம்', options: ['9 செமீ', '10 செமீ', '8 செமீ', '6 செமீ'], explanation: 'ஆரம் = 15 செமீ, அரை நாண் = 12 செமீ; தூரம் = √(15² − 12²) = √81 = 9 செமீ.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 4.3.1, p. 169', answer: 0,
    en: { q: 'The diameter of a circle is 52 cm and one of its chords is 20 cm long. The distance of the chord from the centre is', options: ['24 cm', '26 cm', '16 cm', '48 cm'], explanation: 'Radius = 26 cm, half-chord = 10 cm: distance = √(26² − 10²) = √576 = 24 cm.' },
    ta: { q: 'ஒரு வட்டத்தின் விட்டம் 52 செமீ; அதன் ஒரு நாணின் நீளம் 20 செமீ எனில் மையத்திலிருந்து நாணின் தூரம்', options: ['24 செமீ', '26 செமீ', '16 செமீ', '48 செமீ'], explanation: 'ஆரம் = 26 செமீ, அரை நாண் = 10 செமீ: தூரம் = √(26² − 10²) = √576 = 24 செமீ.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 4.3.2, p. 169', answer: 0,
    en: { q: 'A chord of length 30 cm is drawn at a distance of 8 cm from the centre of a circle. The radius of the circle is', options: ['17 cm', '15 cm', '22 cm', '34 cm'], explanation: 'r = √(15² + 8²) = √289 = 17 cm.' },
    ta: { q: 'வட்ட மையத்திலிருந்து 8 செமீ தொலைவில் 30 செமீ நீளமுள்ள நாண் வரையப்பட்டுள்ளது. வட்டத்தின் ஆரம்', options: ['17 செமீ', '15 செமீ', '22 செமீ', '34 செமீ'], explanation: 'r = √(15² + 8²) = √289 = 17 செமீ.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 4.3.4, p. 169', answer: 0,
    en: { q: 'A chord is 12 cm away from the centre of a circle of radius 15 cm. The length of the chord is', options: ['18 cm', '9 cm', '27 cm', '24 cm'], explanation: 'Half-chord = √(15² − 12²) = 9 cm, so the chord = 18 cm.' },
    ta: { q: 'ஆரம் 15 செமீ உள்ள வட்டத்தின் மையத்திலிருந்து 12 செமீ தொலைவில் அமைந்துள்ள நாணின் நீளம்', options: ['18 செமீ', '9 செமீ', '27 செமீ', '24 செமீ'], explanation: 'அரை நாண் = √(15² − 12²) = 9 செமீ; நாண் = 18 செமீ.' },
  },
  {
    difficulty: 'medium', source: 'Book example 4.5, p. 163', answer: 0,
    en: { q: 'The length of a chord at a distance of 2√11 cm from the centre of a circle of radius 12 cm is', options: ['20 cm', '10 cm', '24 cm', '2√11 cm'], explanation: 'Half-chord = √(144 − 44) = √100 = 10 cm, so the chord AB = 2 × 10 = 20 cm.' },
    ta: { q: 'ஆரம் 12 செமீ உள்ள வட்டத்தின் மையத்திலிருந்து 2√11 செமீ தொலைவில் உள்ள நாணின் நீளம்', options: ['20 செமீ', '10 செமீ', '24 செமீ', '2√11 செமீ'], explanation: 'அரை நாண் = √(144 − 44) = √100 = 10 செமீ; நாண் AB = 2 × 10 = 20 செமீ.' },
  },
  {
    difficulty: 'medium', source: 'Book progress check 1, p. 164', answer: 0,
    en: { q: 'The radius of a circle is 25 cm and one of its chords is 40 cm long. The distance of the chord from the centre is', options: ['15 cm', '20 cm', '5 cm', '30 cm'], explanation: 'Distance = √(25² − 20²) = √225 = 15 cm.' },
    ta: { q: 'ஒரு வட்டத்தின் ஆரம் 25 செமீ; அதன் ஒரு நாணின் நீளம் 40 செமீ எனில் மையத்திலிருந்து நாணின் தூரம்', options: ['15 செமீ', '20 செமீ', '5 செமீ', '30 செமீ'], explanation: 'தூரம் = √(25² − 20²) = √225 = 15 செமீ.' },
  },
  {
    difficulty: 'medium', source: 'Book example 4.8, p. 168', answer: 0,
    en: { q: 'If O is the centre of the circle and ∠ABC = 30°, where A, B, C lie on the circle, then ∠AOC is', options: ['60°', '30°', '15°', '120°'], explanation: 'The arc AC subtends at the centre double the angle at B: 2 × 30° = 60°.' },
    ta: { q: 'O வட்டமையம்; A, B, C வட்டத்தின் மேல் உள்ளன. ∠ABC = 30° எனில் ∠AOC', options: ['60°', '30°', '15°', '120°'], explanation: 'வில் AC மையத்தில் தாங்கும் கோணம் B இல் தாங்கும் கோணத்தின் இரு மடங்கு: 2 × 30° = 60°.' },
  },
  {
    difficulty: 'medium', source: 'Book example 4.7(ii), p. 168', answer: 0,
    en: { q: 'The reflex angle ∠MOL at the centre O is 260°, and N is a point on the circle on the minor arc side. The angle ∠MNL is', options: ['130°', '260°', '100°', '50°'], explanation: 'The inscribed angle is half the central angle of its arc: 260° ÷ 2 = 130°.' },
    ta: { q: 'வட்டமையம் O இல் பின்வளைகோணம் ∠MOL = 260°; N சிறிய வில்லின் மேல் உள்ள புள்ளி எனில் ∠MNL', options: ['130°', '260°', '100°', '50°'], explanation: 'பரிதியில் உள்ள கோணம் அதே வில் மையத்தில் தாங்கும் கோணத்தின் பாதி: 260° ÷ 2 = 130°.' },
  },
  {
    difficulty: 'medium', source: 'Book example 4.10, p. 171', answer: 0,
    en: { q: 'PQRS is a cyclic quadrilateral in which ∠PSR = 70° and ∠QPR = 40°. Then ∠PRQ is', options: ['30°', '40°', '70°', '110°'], explanation: '∠PQR = 180° − 70° = 110° (opposite angles); in ΔPQR, ∠PRQ = 180° − 110° − 40° = 30°.' },
    ta: { q: 'PQRS ஒரு வட்ட நாற்கரம்; ∠PSR = 70°, ∠QPR = 40° எனில் ∠PRQ', options: ['30°', '40°', '70°', '110°'], explanation: '∠PQR = 180° − 70° = 110° (எதிர்க் கோணங்கள்); ΔPQR இல் ∠PRQ = 180° − 110° − 40° = 30°.' },
  },
  {
    difficulty: 'medium', source: 'Book example 4.3, p. 156', answer: 0,
    en: { q: 'ABCD is a parallelogram with ∠BAD = 120° and the diagonal AC bisects ∠BAD. Then ABCD is a', options: ['rhombus', 'rectangle', 'square', 'kite which is not a parallelogram'], explanation: '∠BAC = 60° and ∠BCA = ∠CAD = 60°, so ΔABC is isosceles with AB = BC; a parallelogram with adjacent sides equal is a rhombus.' },
    ta: { q: 'இணைகரம் ABCD இல் ∠BAD = 120°; மூலைவிட்டம் AC ஆனது ∠BAD ஐ இருசமக் கூறிடுகிறது எனில் ABCD ஒரு', options: ['சாய்சதுரம்', 'செவ்வகம்', 'சதுரம்', 'இணைகரம் அல்லாத பட்டம்'], explanation: '∠BAC = 60°, ∠BCA = ∠CAD = 60°; ΔABC இல் AB = BC; அடுத்துள்ள பக்கங்கள் சமமான இணைகரம் சாய்சதுரம்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 4.3.8, p. 170', answer: 0,
    en: { q: 'Chords AB and CD of a circle cut at right angles at P, and ∠CAB = 25°. Then ∠BDC is', options: ['25°', '65°', '50°', '90°'], explanation: '∠BDC and ∠BAC stand on the same arc BC (angles in the same segment), so ∠BDC = 25°.' },
    ta: { q: 'வட்டத்தின் நாண்கள் AB, CD ஆனது P இல் செங்குத்தாக வெட்டுகின்றன; ∠CAB = 25° எனில் ∠BDC', options: ['25°', '65°', '50°', '90°'], explanation: '∠BDC, ∠BAC ஆகியவை ஒரே வில் BC மேல் அமைந்தவை (ஒரே வட்டத்துண்டுக் கோணங்கள்); எனவே ∠BDC = 25°.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 4.4.7, p. 173', answer: 0,
    en: { q: 'A, B, C are points on a circle with centre O, B lies on the minor arc AC and ∠ABC = 120°. Then ∠OAC is', options: ['30°', '60°', '120°', '40°'], explanation: 'Reflex ∠AOC = 2 × 120° = 240°, so ∠AOC = 120°; in isosceles ΔOAC, ∠OAC = (180° − 120°) ÷ 2 = 30°.' },
    ta: { q: 'O வை மையமாகக் கொண்ட வட்டத்தில் A, B, C புள்ளிகள்; B சிறிய வில் AC மேல் உள்ளது; ∠ABC = 120° எனில் ∠OAC', options: ['30°', '60°', '120°', '40°'], explanation: 'பின்வளை ∠AOC = 2 × 120° = 240°; எனவே ∠AOC = 120°; இருசமபக்க ΔOAC இல் ∠OAC = (180° − 120°) ÷ 2 = 30°.' },
  },
  {
    difficulty: 'medium', source: '§4.3.3 Thinking corner, p. 149', answer: 0,
    en: { q: 'The sum of all the interior angles of a hexagon is', options: ['720°', '540°', '1080°', '360°'], explanation: 'Sum of interior angles of an n-sided polygon = (n − 2) × 180° = 4 × 180° = 720°.' },
    ta: { q: 'ஓர் அறுகோணத்தின் உட்கோணங்களின் கூடுதல்', options: ['720°', '540°', '1080°', '360°'], explanation: 'n பக்கப் பலகோணத்தின் உட்கோணங்களின் கூடுதல் = (n − 2) × 180° = 4 × 180° = 720°.' },
  },
  {
    difficulty: 'medium', source: '§4.3.3 Thinking corner, p. 149', answer: 0,
    en: { q: 'Each exterior angle of a regular polygon with 8 sides is', options: ['45°', '135°', '60°', '40°'], explanation: 'Each exterior angle of a regular n-gon = 360° ÷ n = 360° ÷ 8 = 45°.' },
    ta: { q: '8 பக்கங்கள் கொண்ட ஒழுங்குப் பலகோணத்தின் ஒவ்வொரு வெளிக்கோணமும்', options: ['45°', '135°', '60°', '40°'], explanation: 'ஒழுங்கு n-கோணத்தின் ஒவ்வொரு வெளிக்கோணம் = 360° ÷ n = 360° ÷ 8 = 45°.' },
  },
  {
    difficulty: 'medium', source: '§4.3.3 Thinking corner, p. 149', answer: 0,
    en: { q: 'The number of diagonals of a polygon with 6 sides is', options: ['9', '6', '12', '3'], explanation: 'Number of diagonals = n(n − 3) ÷ 2 = 6 × 3 ÷ 2 = 9.' },
    ta: { q: '6 பக்கங்கள் கொண்ட பலகோணத்தின் மூலைவிட்டங்களின் எண்ணிக்கை', options: ['9', '6', '12', '3'], explanation: 'மூலைவிட்டங்களின் எண்ணிக்கை = n(n − 3) ÷ 2 = 6 × 3 ÷ 2 = 9.' },
  },
  {
    difficulty: 'medium', source: '§4.3.4, p. 150', answer: 0,
    en: { q: 'In a kite, the diagonals', options: ['intersect at right angles', 'are always equal', 'bisect each other', 'are parallel'], explanation: 'In a kite the diagonals meet at right angles and the longer diagonal bisects the shorter one.' },
    ta: { q: 'பட்டத்தின் மூலைவிட்டங்கள்', options: ['செங்கோணத்தில் வெட்டிக்கொள்ளும்', 'எப்போதும் சமம்', 'ஒன்றையொன்று இருசமக் கூறிடும்', 'இணையானவை'], explanation: 'பட்டத்தின் மூலைவிட்டங்கள் செங்கோணத்தில் வெட்டும்; நீண்ட மூலைவிட்டம் சிறிய மூலைவிட்டத்தை இருசமக் கூறிடும்.' },
  },
  {
    difficulty: 'medium', source: '§4.3.4, p. 150', answer: 0,
    en: { q: 'Which quadrilateral has one pair of parallel sides, equal non-parallel sides and diagonals of equal length?', options: ['isosceles trapezium', 'kite', 'rhombus', 'parallelogram'], explanation: 'An isosceles trapezium has equal non-parallel sides and equal diagonals.' },
    ta: { q: 'ஒரு சோடி இணைப் பக்கங்கள், சமமான இணையற்ற பக்கங்கள் மற்றும் சம நீள மூலைவிட்டங்கள் கொண்ட நாற்கரம் எது?', options: ['இருசமபக்கச் சரிவகம்', 'பட்டம்', 'சாய்சதுரம்', 'இணைகரம்'], explanation: 'இருசமபக்கச் சரிவகத்தின் இணையற்ற பக்கங்களும் மூலைவிட்டங்களும் சமம்.' },
  },
  {
    difficulty: 'medium', source: '§4.3.5, p. 155', answer: 0,
    en: { q: 'Parallelograms on the same base and between the same parallels are', options: ['equal in area', 'always congruent', 'equal in perimeter', 'always rectangles'], explanation: 'Theorem 5: parallelograms on the same base and between the same parallels have equal area.' },
    ta: { q: 'ஒரே அடிப்பக்கத்திலும் ஒரு சோடி இணைகோடுகளுக்கு இடையிலும் அமையும் இணைகரங்கள்', options: ['பரப்பில் சமம்', 'எப்போதும் சர்வசமம்', 'சுற்றளவில் சமம்', 'எப்போதும் செவ்வகங்கள்'], explanation: 'தேற்றம் 5: ஒரே அடிப்பக்கத்திலும் ஒரு சோடி இணைகோடுகளுக்கு இடையிலும் அமையும் இணைகரங்களின் பரப்புகள் சமம்.' },
  },
  {
    difficulty: 'medium', source: 'Book progress check 2, p. 172', answer: 0,
    en: { q: 'In a circle, as the length of a chord decreases, its distance from the centre', options: ['increases', 'decreases', 'stays the same', 'becomes zero'], explanation: 'Distance d = √(r² − (half-chord)²), so a shorter chord lies farther from the centre.' },
    ta: { q: 'ஒரு வட்டத்தில் நாணின் நீளம் குறையும்போது, மையத்திலிருந்து அதன் தூரம்', options: ['அதிகரிக்கும்', 'குறையும்', 'மாறாது', 'பூச்சியமாகும்'], explanation: 'தூரம் d = √(r² − (அரை நாண்)²); எனவே சிறிய நாண் மையத்திலிருந்து அதிகத் தூரத்தில் இருக்கும்.' },
  },
  {
    difficulty: 'medium', source: '§4.4.1, p. 162', answer: 0,
    en: { q: 'How many circles can pass through three non-collinear points?', options: ['exactly one', 'exactly two', 'infinitely many', 'none'], explanation: 'Theorem 6: there is one and only one circle (the circumcircle) through three non-collinear points.' },
    ta: { q: 'ஒரே கோட்டில் அமையாத மூன்று புள்ளிகள் வழியே எத்தனை வட்டங்கள் வரைய இயலும்?', options: ['ஒன்று மட்டும்', 'இரண்டு மட்டும்', 'எண்ணற்றவை', 'ஒன்றுமில்லை'], explanation: 'தேற்றம் 6: ஒரே கோட்டில் அமையாத மூன்று புள்ளிகள் வழியே ஒரே ஒரு வட்டம் மட்டுமே வரைய இயலும்.' },
  },
  {
    difficulty: 'medium', source: '§4.5.2, p. 165', answer: 0,
    en: { q: 'Equal chords of a circle are', options: ['equidistant from the centre', 'always parallel', 'always diameters', 'perpendicular to each other'], explanation: 'Theorem 9: equal chords of a circle are equidistant from the centre.' },
    ta: { q: 'ஒரு வட்டத்தின் சம நாண்கள்', options: ['மையத்திலிருந்து சம தூரத்தில் இருக்கும்', 'எப்போதும் இணையானவை', 'எப்போதும் விட்டங்கள்', 'ஒன்றுக்கொன்று செங்குத்தானவை'], explanation: 'தேற்றம் 9: ஒரு வட்டத்தின் சம நாண்கள் மையத்திலிருந்து சம தூரத்தில் இருக்கும்.' },
  },
  {
    difficulty: 'medium', source: '§4.7.1 Note, p. 175', answer: 0,
    en: { q: 'The centroid of a triangle divides each median, from the vertex, in the ratio', options: ['2 : 1', '1 : 2', '1 : 1', '3 : 1'], explanation: 'The centroid lies two-thirds of the way along each median from the vertex.' },
    ta: { q: 'முக்கோணத்தின் நடுக்கோட்டு மையம் ஒவ்வொரு நடுக்கோட்டையும் உச்சியிலிருந்து எந்த விகிதத்தில் பிரிக்கும்?', options: ['2 : 1', '1 : 2', '1 : 1', '3 : 1'], explanation: 'நடுக்கோட்டு மையம் ஒவ்வொரு நடுக்கோட்டிலும் உச்சியிலிருந்து மூன்றில் இரு பங்கு தொலைவில் அமையும்.' },
  },
  {
    difficulty: 'medium', source: '§4.7.2 Note, p. 177', answer: 0,
    en: { q: 'The orthocentre of a right-angled triangle lies', options: ['at the vertex of the right angle', 'at the midpoint of the hypotenuse', 'outside the triangle', 'at the centroid'], explanation: 'The two legs are themselves altitudes, so they meet at the right-angled vertex.' },
    ta: { q: 'செங்கோண முக்கோணத்தின் குத்துக்கோட்டு மையம் அமையும் இடம்', options: ['செங்கோண உச்சிப்புள்ளி', 'கர்ணத்தின் நடுப்புள்ளி', 'முக்கோணத்தின் வெளியே', 'நடுக்கோட்டு மையம்'], explanation: 'செங்கோணத்தை அடக்கிய இரு பக்கங்களும் குத்துக்கோடுகளே; அவை செங்கோண உச்சியில் சந்திக்கின்றன.' },
  },
  {
    difficulty: 'medium', source: '§4.7.3 Note, p. 179', answer: 0,
    en: { q: 'The circumcentre of a right-angled triangle lies', options: ['at the midpoint of the hypotenuse', 'at the vertex of the right angle', 'outside the triangle', 'inside, away from the sides'], explanation: 'The hypotenuse is a diameter of the circumcircle, so its midpoint is the circumcentre.' },
    ta: { q: 'செங்கோண முக்கோணத்தின் சுற்றுவட்ட மையம் அமையும் இடம்', options: ['கர்ணத்தின் நடுப்புள்ளி', 'செங்கோண உச்சிப்புள்ளி', 'முக்கோணத்தின் வெளியே', 'பக்கங்களை விட்டு உள்ளே'], explanation: 'கர்ணம் சுற்றுவட்டத்தின் விட்டம்; எனவே அதன் நடுப்புள்ளியே சுற்றுவட்ட மையம்.' },
  },
  {
    difficulty: 'medium', source: '§4.7.2 Note, p. 177', answer: 0,
    en: { q: 'For an obtuse-angled triangle, the orthocentre lies', options: ['outside the triangle', 'inside the triangle', 'on the longest side', 'at a vertex'], explanation: 'The book’s note: the orthocentre is inside an acute triangle, outside an obtuse triangle and at the right-angled vertex of a right triangle.' },
    ta: { q: 'விரிகோண முக்கோணத்தின் குத்துக்கோட்டு மையம் அமையும் இடம்', options: ['முக்கோணத்தின் வெளியே', 'முக்கோணத்தின் உள்ளே', 'மிக நீளமான பக்கத்தின் மேல்', 'ஓர் உச்சியில்'], explanation: 'குத்துக்கோட்டு மையம் குறுங்கோண முக்கோணத்தில் உள்ளே, விரிகோண முக்கோணத்தில் வெளியே, செங்கோண முக்கோணத்தில் செங்கோண உச்சியில் அமையும்.' },
  },
  {
    difficulty: 'medium', source: '§4.2.2, p. 142', answer: 0,
    en: { q: 'An exterior angle of a triangle is 120° and one interior opposite angle is 50°. The other interior opposite angle is', options: ['70°', '60°', '130°', '10°'], explanation: 'Exterior angle = sum of interior opposite angles, so 120° − 50° = 70°.' },
    ta: { q: 'ஒரு முக்கோணத்தின் வெளிக்கோணம் 120°; ஓர் உள்ளெதிர்க் கோணம் 50° எனில் மற்றொரு உள்ளெதிர்க் கோணம்', options: ['70°', '60°', '130°', '10°'], explanation: 'வெளிக்கோணம் = உள்ளெதிர்க் கோணங்களின் கூடுதல்; 120° − 50° = 70°.' },
  },
  {
    difficulty: 'medium', source: '§4.2.1, p. 141', answer: 0,
    en: { q: 'A transversal cuts two parallel lines. One of the interior angles on the same side of the transversal is 65°. The other is', options: ['115°', '65°', '25°', '295°'], explanation: 'Interior angles on the same side of a transversal of parallel lines are supplementary: 180° − 65° = 115°.' },
    ta: { q: 'ஒரு குறுக்குவெட்டி இரு இணைகோடுகளை வெட்டுகிறது. குறுக்குவெட்டியின் ஒரே பக்கத்தில் உள்ள உட்கோணங்களில் ஒன்று 65° எனில் மற்றொன்று', options: ['115°', '65°', '25°', '295°'], explanation: 'இணைகோடுகளில் குறுக்குவெட்டியின் ஒரே பக்க உட்கோணங்கள் மிகைநிரப்பிகள்: 180° − 65° = 115°.' },
  },
  {
    difficulty: 'medium', source: '§4.5.1 Example 4.6, p. 163', answer: 0,
    en: { q: 'In two concentric circles, a chord AB of the outer circle cuts the inner circle at C and D (order A, C, D, B). If AB = 10 cm and CD = 6 cm, then AC is', options: ['2 cm', '4 cm', '3 cm', '8 cm'], explanation: 'The perpendicular from the centre bisects both chords, so AB − CD = 2AC; 10 − 6 = 2AC gives AC = 2 cm.' },
    ta: { q: 'இரு ஒருமைய வட்டங்களில் வெளி வட்டத்தின் நாண் AB ஆனது உள் வட்டத்தை C, D இல் வெட்டுகிறது (வரிசை A, C, D, B). AB = 10 செமீ, CD = 6 செமீ எனில் AC', options: ['2 செமீ', '4 செமீ', '3 செமீ', '8 செமீ'], explanation: 'மையத்திலிருந்து வரையும் செங்குத்து இரு நாண்களையும் இருசமக் கூறிடுவதால் AB − CD = 2AC; 10 − 6 = 2AC; AC = 2 செமீ.' },
  },

  {
    difficulty: 'medium', source: 'Book exercise 4.1.3(iii), p. 143', answer: 0,
    en: { q: 'In the figure of two triangles XPY and XPZ, PY = PZ, XY = XZ and XP is common. The triangles are congruent by the', options: ['SSS criterion', 'SAS criterion', 'ASA criterion', 'RHS criterion'], explanation: 'All three pairs of sides are equal (PY = PZ, XY = XZ, XP = XP), so SSS applies.' },
    ta: { q: 'XPY, XPZ ஆகிய இரு முக்கோணங்களில் PY = PZ, XY = XZ, XP பொதுப்பக்கம். அவை சர்வசமமாவது எந்த விதிப்படி?', options: ['ப-ப-ப (SSS)', 'ப-கோ-ப (SAS)', 'கோ-ப-கோ (ASA)', 'செ-க-ப (RHS)'], explanation: 'மூன்று சோடிப் பக்கங்களும் சமம் (PY = PZ, XY = XZ, XP = XP); எனவே SSS விதி.' },
  },
  {
    difficulty: 'medium', source: 'Book example 4.7(i), p. 167', answer: 0,
    en: { q: 'P, Q, R lie on a circle with centre O, and the arc PR subtends ∠PQR = 50° at Q. Then x = ∠POR is', options: ['100°', '50°', '25°', '130°'], explanation: 'The angle at the centre is double the angle at the circumference: 2 × 50° = 100°.' },
    ta: { q: 'O மையமுடைய வட்டத்தில் P, Q, R புள்ளிகள்; வில் PR ஆனது Q இல் ∠PQR = 50° தாங்குகிறது எனில் x = ∠POR', options: ['100°', '50°', '25°', '130°'], explanation: 'மையத்தில் தாங்கும் கோணம் பரிதியில் தாங்கும் கோணத்தின் இரு மடங்கு: 2 × 50° = 100°.' },
  },
  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise 4.1.1(i), p. 143', answer: 0, imageUrl: `${IMG}/ex4-1-parallel-lines.png`,
    en: { q: 'In figure (i), AB ∥ CD, ∠BAT = 140° and ∠DCT = 150°. Find x = ∠ATC.', options: ['70°', '110°', '80°', '290°'], explanation: 'Draw a line through T parallel to AB: x = (180° − 140°) + (180° − 150°) = 40° + 30° = 70°.' },
    ta: { q: 'படம் (i) இல் AB ∥ CD, ∠BAT = 140°, ∠DCT = 150° எனில் x = ∠ATC காண்க.', options: ['70°', '110°', '80°', '290°'], explanation: 'T வழியே AB க்கு இணைகோடு வரைக: x = (180° − 140°) + (180° − 150°) = 40° + 30° = 70°.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 4.1.1(ii), p. 143', answer: 0, imageUrl: `${IMG}/ex4-1-parallel-lines.png`,
    en: { q: 'In figure (ii), AB ∥ CD, the marked angle at B is 48° and at D is 24°. Find the reflex angle x.', options: ['288°', '72°', '312°', '252°'], explanation: 'The angle at the bend is 48° + 24° = 72° (alternate angles), so the reflex angle x = 360° − 72° = 288°.' },
    ta: { q: 'படம் (ii) இல் AB ∥ CD; B இல் உள்ள கோணம் 48°, D இல் உள்ள கோணம் 24° எனில் பின்வளைகோணம் x காண்க.', options: ['288°', '72°', '312°', '252°'], explanation: 'வளைவில் உள்ள கோணம் 48° + 24° = 72° (ஒன்றுவிட்ட கோணங்கள்); எனவே பின்வளைகோணம் x = 360° − 72° = 288°.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 4.1.1(iii), p. 143', answer: 0, imageUrl: `${IMG}/ex4-1-parallel-lines.png`,
    en: { q: 'In figure (iii), AB ∥ CD, ∠BAE = 53° and ∠DCE = 38°. Find x.', options: ['89°', '91°', '15°', '53°'], explanation: '∠EDC = ∠BAE = 53° (alternate angles, AB ∥ CD), so in ΔCED, x = 180° − 38° − 53° = 89°.' },
    ta: { q: 'படம் (iii) இல் AB ∥ CD, ∠BAE = 53°, ∠DCE = 38° எனில் x காண்க.', options: ['89°', '91°', '15°', '53°'], explanation: '∠EDC = ∠BAE = 53° (ஒன்றுவிட்ட கோணங்கள், AB ∥ CD); ΔCED இல் x = 180° − 38° − 53° = 89°.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 4.1.5, p. 144', answer: 0,
    en: { q: 'In ΔABC, ∠A = (x + 35)°, ∠B = (2x − 5)° and BC is produced to D so that the exterior angle ∠ACD = (4x − 15)°. The three angles of ΔABC are', options: ['80°, 85°, 15°', '50°, 25°, 105°', '60°, 75°, 45°', '80°, 85°, 165°'], explanation: 'Exterior angle: 4x − 15 = (x + 35) + (2x − 5), so x = 45; ∠A = 80°, ∠B = 85°, ∠C = 180° − 165° = 15°.' },
    ta: { q: 'ΔABC இல் ∠A = (x + 35)°, ∠B = (2x − 5)°; BC ஐ D வரை நீட்டும்போது வெளிக்கோணம் ∠ACD = (4x − 15)°. ΔABC இன் மூன்று கோணங்கள்', options: ['80°, 85°, 15°', '50°, 25°, 105°', '60°, 75°, 45°', '80°, 85°, 165°'], explanation: 'வெளிக்கோணம்: 4x − 15 = (x + 35) + (2x − 5); x = 45; ∠A = 80°, ∠B = 85°, ∠C = 180° − 165° = 15°.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 4.2.8, p. 158', answer: 0,
    en: { q: 'In ΔABC, ∠A = 64° and ∠ABC = 58°. BO and CO bisect ∠ABC and ∠ACB. If x = ∠BOC and y = ∠OCA, then', options: ['x = 122°, y = 29°', 'x = 116°, y = 29°', 'x = 122°, y = 58°', 'x = 58°, y = 32°'], explanation: '∠ACB = 58°, so ∠OBC = ∠OCB = ∠OCA = 29°; x = 180° − 29° − 29° = 122°.' },
    ta: { q: 'ΔABC இல் ∠A = 64°, ∠ABC = 58°. BO, CO ஆகியவை ∠ABC, ∠ACB இன் இருசமவெட்டிகள். x = ∠BOC, y = ∠OCA எனில்', options: ['x = 122°, y = 29°', 'x = 116°, y = 29°', 'x = 122°, y = 58°', 'x = 58°, y = 32°'], explanation: '∠ACB = 58°; ∠OBC = ∠OCB = ∠OCA = 29°; x = 180° − 29° − 29° = 122°.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 4.2.9, p. 158', answer: 0,
    en: { q: 'A, B, C are collinear with AB = 2 and BC = 6. Lines CE and BF cross at D, with AE = 6, BF = 8, CE = 7 and CF = 7. The ratio of the area of quadrilateral ABDE to the area of ΔCDF is', options: ['1 : 1', '1 : 2', '2 : 1', '3 : 4'], explanation: 'ΔACE (8, 7, 6) ≅ ΔFBC (8, 7, 6) by SSS. Removing the common ΔBCD from both leaves ABDE and ΔCDF, so their areas are equal.' },
    ta: { q: 'A, B, C ஒரே கோட்டில்; AB = 2, BC = 6. CE, BF ஆகியவை D இல் வெட்டுகின்றன; AE = 6, BF = 8, CE = 7, CF = 7. நாற்கரம் ABDE இன் பரப்புக்கும் ΔCDF இன் பரப்புக்கும் உள்ள விகிதம்', options: ['1 : 1', '1 : 2', '2 : 1', '3 : 4'], explanation: 'ப-ப-ப விதிப்படி ΔACE (8, 7, 6) ≅ ΔFBC (8, 7, 6). இரண்டிலும் பொதுவான ΔBCD ஐ நீக்கினால் ABDE, ΔCDF மீதமாகும்; எனவே பரப்புகள் சமம்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 4.2.10, p. 158', answer: 0, imageUrl: `${IMG}/ex4-2-rectangle-parallelogram.png`,
    en: { q: 'ABCD is a rectangle and EFGH is a parallelogram with the measurements shown. Find the length d of the segment perpendicular to HE and FG.', options: ['7.6', '8', '5', '6.4'], explanation: 'Rectangle area = 10 × 8 = 80; the corner triangles are 6 + 15 + 6 + 15 = 42, so area of EFGH = 38. With HE = √(4² + 3²) = 5, d = 38 ÷ 5 = 7.6.' },
    ta: { q: 'ABCD ஒரு செவ்வகம்; EFGH ஓர் இணைகரம் (படத்தில் உள்ள அளவுகள்). HE, FG க்குச் செங்குத்தான கோட்டுத்துண்டின் நீளம் d காண்க.', options: ['7.6', '8', '5', '6.4'], explanation: 'செவ்வகப் பரப்பு = 10 × 8 = 80; மூலை முக்கோணங்கள் 6 + 15 + 6 + 15 = 42; EFGH இன் பரப்பு = 38. HE = √(4² + 3²) = 5; d = 38 ÷ 5 = 7.6.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 4.3.3, p. 169', answer: 0,
    en: { q: 'AB and CD are two perpendicular diameters of a circle of radius 4√2 cm. The length of chord AC and ∠OAC are', options: ['8 cm and 45°', '4√2 cm and 45°', '8 cm and 90°', '16 cm and 60°'], explanation: 'ΔAOC is right-angled at O with OA = OC = 4√2, so AC = √(32 + 32) = 8 cm and ∠OAC = ∠OCA = 45°.' },
    ta: { q: 'ஆரம் 4√2 செமீ உள்ள வட்டத்தில் AB, CD ஒன்றுக்கொன்று செங்குத்தான விட்டங்கள். நாண் AC இன் நீளமும் ∠OAC உம்', options: ['8 செமீ மற்றும் 45°', '4√2 செமீ மற்றும் 45°', '8 செமீ மற்றும் 90°', '16 செமீ மற்றும் 60°'], explanation: 'ΔAOC இல் O இல் செங்கோணம், OA = OC = 4√2; AC = √(32 + 32) = 8 செமீ; ∠OAC = ∠OCA = 45°.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 4.3.5, p. 170', answer: 0,
    en: { q: 'AB and CD are parallel chords on opposite sides of the centre of a circle of radius 10 cm, with AB = 16 cm and CD = 12 cm. The distance between the chords is', options: ['14 cm', '2 cm', '10 cm', '28 cm'], explanation: 'Distances from O: √(100 − 64) = 6 cm and √(100 − 36) = 8 cm; on opposite sides they add to 14 cm.' },
    ta: { q: 'ஆரம் 10 செமீ உள்ள வட்டத்தில் மையத்தின் இரு புறங்களிலும் உள்ள இணை நாண்கள் AB = 16 செமீ, CD = 12 செமீ எனில் நாண்களுக்கு இடைப்பட்ட தொலைவு', options: ['14 செமீ', '2 செமீ', '10 செமீ', '28 செமீ'], explanation: 'மையத்திலிருந்து தூரங்கள்: √(100 − 64) = 6 செமீ, √(100 − 36) = 8 செமீ; இருபுறமும் இருப்பதால் 6 + 8 = 14 செமீ.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 4.3.6, p. 170', answer: 0,
    en: { q: 'Two circles of radii 5 cm and 3 cm intersect at two points and the distance between their centres is 4 cm. The length of the common chord is', options: ['6 cm', '3 cm', '8 cm', '4 cm'], explanation: 'Since 3² + 4² = 5², the common chord passes through the centre of the smaller circle, so it is its diameter: 2 × 3 = 6 cm.' },
    ta: { q: '5 செமீ மற்றும் 3 செமீ ஆரமுள்ள இரு வட்டங்கள் இரண்டு புள்ளிகளில் வெட்டுகின்றன; மையங்களுக்கு இடைப்பட்ட தொலைவு 4 செமீ எனில் பொது நாணின் நீளம்', options: ['6 செமீ', '3 செமீ', '8 செமீ', '4 செமீ'], explanation: '3² + 4² = 5² என்பதால் பொது நாண் சிறிய வட்டத்தின் மையம் வழியே செல்லும்; அது அதன் விட்டம்: 2 × 3 = 6 செமீ.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 4.3.7(i), p. 170', answer: 0, imageUrl: `${IMG}/ex4-3-circle-angles.png`,
    en: { q: 'In figure (i), O is the centre and AO is produced. The angles at O between the extension and OB, OC are 30° and 60°. Find x = ∠BAC.', options: ['45°', '90°', '30°', '60°'], explanation: 'Each exterior angle at O is twice the base angle of its isosceles triangle: ∠BAO = 15°, ∠CAO = 30°, so x = 45°.' },
    ta: { q: 'படம் (i) இல் O வட்டமையம்; AO நீட்டப்பட்டுள்ளது. நீட்டிப்புக்கும் OB, OC க்கும் இடையே O இல் உள்ள கோணங்கள் 30°, 60° எனில் x = ∠BAC காண்க.', options: ['45°', '90°', '30°', '60°'], explanation: 'O இல் உள்ள ஒவ்வொரு வெளிக்கோணமும் இருசமபக்க முக்கோணத்தின் அடிக்கோணத்தின் இரு மடங்கு: ∠BAO = 15°, ∠CAO = 30°; x = 45°.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 4.3.7(ii), p. 170', answer: 0, imageUrl: `${IMG}/ex4-3-circle-angles.png`,
    en: { q: 'In figure (ii), O is the centre, ∠QOR = 80° and ∠ORP = 30°. Find x = ∠OQP.', options: ['10°', '40°', '30°', '50°'], explanation: '∠QPR = 80° ÷ 2 = 40°; OP = OR gives ∠OPR = 30°, so ∠OPQ = 10° and, as OP = OQ, x = 10°.' },
    ta: { q: 'படம் (ii) இல் O வட்டமையம், ∠QOR = 80°, ∠ORP = 30° எனில் x = ∠OQP காண்க.', options: ['10°', '40°', '30°', '50°'], explanation: '∠QPR = 80° ÷ 2 = 40°; OP = OR எனவே ∠OPR = 30°; ∠OPQ = 10°; OP = OQ என்பதால் x = 10°.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 4.3.7(iii), p. 170', answer: 0, imageUrl: `${IMG}/ex4-3-circle-angles.png`,
    en: { q: 'In figure (iii), MN is a diameter with centre O and ∠PON = 70°. Find x = ∠OPN.', options: ['55°', '35°', '70°', '20°'], explanation: 'In isosceles ΔOPN, ∠OPN = (180° − 70°) ÷ 2 = 55°.' },
    ta: { q: 'படம் (iii) இல் MN விட்டம், O மையம், ∠PON = 70° எனில் x = ∠OPN காண்க.', options: ['55°', '35°', '70°', '20°'], explanation: 'இருசமபக்க ΔOPN இல் ∠OPN = (180° − 70°) ÷ 2 = 55°.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 4.3.7(iv), p. 170', answer: 0, imageUrl: `${IMG}/ex4-3-circle-angles.png`,
    en: { q: 'In figure (iv), O is the centre and ∠YXZ = 120°. Find x = ∠YOZ.', options: ['120°', '240°', '60°', '30°'], explanation: 'The major arc YZ subtends 2 × 120° = 240° at O, so the angle x = 360° − 240° = 120°.' },
    ta: { q: 'படம் (iv) இல் O வட்டமையம், ∠YXZ = 120° எனில் x = ∠YOZ காண்க.', options: ['120°', '240°', '60°', '30°'], explanation: 'பெரிய வில் YZ மையத்தில் 2 × 120° = 240° தாங்கும்; எனவே x = 360° − 240° = 120°.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 4.3.7(v), p. 170', answer: 0, imageUrl: `${IMG}/ex4-3-circle-angles.png`,
    en: { q: 'In figure (v), O is the centre, ∠AOB = 140° and ∠AOC = 100°. Find x = ∠BAC.', options: ['60°', '120°', '70°', '50°'], explanation: '∠BOC = 360° − 140° − 100° = 120°, so x = 120° ÷ 2 = 60°.' },
    ta: { q: 'படம் (v) இல் O வட்டமையம், ∠AOB = 140°, ∠AOC = 100° எனில் x = ∠BAC காண்க.', options: ['60°', '120°', '70°', '50°'], explanation: '∠BOC = 360° − 140° − 100° = 120°; x = 120° ÷ 2 = 60°.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 4.3.8, p. 170', answer: 0,
    en: { q: 'Chords AB and CD of a circle with centre O cut at right angles at P, and ∠CAB = 25°. Then ∠DBA and ∠COB are', options: ['65° and 50°', '25° and 50°', '65° and 25°', '75° and 100°'], explanation: '∠BDC = ∠BAC = 25°; in right ΔBPD, ∠DBA = 90° − 25° = 65°; ∠COB = 2∠CAB = 50°.' },
    ta: { q: 'O மையமுடைய வட்டத்தின் நாண்கள் AB, CD ஆனது P இல் செங்குத்தாக வெட்டுகின்றன; ∠CAB = 25° எனில் ∠DBA மற்றும் ∠COB', options: ['65° மற்றும் 50°', '25° மற்றும் 50°', '65° மற்றும் 25°', '75° மற்றும் 100°'], explanation: '∠BDC = ∠BAC = 25°; செங்கோண ΔBPD இல் ∠DBA = 90° − 25° = 65°; ∠COB = 2∠CAB = 50°.' },
  },
  {
    difficulty: 'hard', source: 'Book example 4.9, p. 169', answer: 0,
    en: { q: 'O is the centre of a circle through P, Q, R (P on the major arc). If ∠OQR = 48°, then ∠QPR is', options: ['42°', '48°', '84°', '96°'], explanation: '∠ORQ = 48° (OQ = OR), so ∠QOR = 180° − 96° = 84°, and ∠QPR = 84° ÷ 2 = 42°.' },
    ta: { q: 'P, Q, R வழியே செல்லும் வட்டத்தின் மையம் O (P பெரிய வில்லின் மேல்). ∠OQR = 48° எனில் ∠QPR', options: ['42°', '48°', '84°', '96°'], explanation: 'OQ = OR எனவே ∠ORQ = 48°; ∠QOR = 180° − 96° = 84°; ∠QPR = 84° ÷ 2 = 42°.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 4.4.1, p. 173', answer: 0,
    en: { q: 'ABCD is a cyclic quadrilateral in which AB is a diameter of the circle and ∠ADC = 120°. Find x = ∠CAB.', options: ['30°', '60°', '120°', '90°'], explanation: '∠ABC = 180° − 120° = 60° and ∠ACB = 90° (angle in a semicircle), so ∠CAB = 30°.' },
    ta: { q: 'வட்ட நாற்கரம் ABCD இல் AB வட்டத்தின் விட்டம்; ∠ADC = 120° எனில் x = ∠CAB காண்க.', options: ['30°', '60°', '120°', '90°'], explanation: '∠ABC = 180° − 120° = 60°; ∠ACB = 90° (அரைவட்டக் கோணம்); எனவே ∠CAB = 30°.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 4.4.2, p. 173', answer: 0,
    en: { q: 'AC is a diameter of a circle with centre O, and A, B, C, D, E lie on the circle (E between A and D). If ∠ADE = 30°, ∠DAC = 35° and ∠CAB = 40°, then ∠ACD, ∠ACB and ∠DAE are', options: ['55°, 50°, 25°', '55°, 50°, 30°', '35°, 40°, 25°', '50°, 55°, 25°'], explanation: '∠ADC = ∠ABC = 90°, so ∠ACD = 55° and ∠ACB = 50°; in cyclic AEDC, ∠AED = 180° − 55° = 125°, so ∠DAE = 180° − 30° − 125° = 25°.' },
    ta: { q: 'O மையமுடைய வட்டத்தின் விட்டம் AC; A, B, C, D, E வட்டத்தின் மேல் உள்ளன (E ஆனது A, D க்கு இடையே). ∠ADE = 30°, ∠DAC = 35°, ∠CAB = 40° எனில் ∠ACD, ∠ACB, ∠DAE', options: ['55°, 50°, 25°', '55°, 50°, 30°', '35°, 40°, 25°', '50°, 55°, 25°'], explanation: '∠ADC = ∠ABC = 90°; ∠ACD = 55°, ∠ACB = 50°; வட்ட நாற்கரம் AEDC இல் ∠AED = 180° − 55° = 125°; ∠DAE = 180° − 30° − 125° = 25°.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 4.4.3, p. 173', answer: 0, imageUrl: `${IMG}/ex4-4-cyclic-quad-algebra.png`,
    en: { q: 'Find all the angles of the cyclic quadrilateral ABCD in the figure (∠A = 2y + 4, ∠B = 6x − 4, ∠C = 4y − 4, ∠D = 7x + 2).', options: ['∠A = 64°, ∠B = 80°, ∠C = 116°, ∠D = 100°', '∠A = 80°, ∠B = 64°, ∠C = 100°, ∠D = 116°', '∠A = 64°, ∠B = 100°, ∠C = 116°, ∠D = 80°', '∠A = 60°, ∠B = 80°, ∠C = 120°, ∠D = 100°'], explanation: '∠A + ∠C = 6y = 180 gives y = 30; ∠B + ∠D = 13x − 2 = 180 gives x = 14. So 64°, 80°, 116°, 100°.' },
    ta: { q: 'படத்தில் உள்ள வட்ட நாற்கரம் ABCD இன் அனைத்துக் கோணங்களையும் காண்க (∠A = 2y + 4, ∠B = 6x − 4, ∠C = 4y − 4, ∠D = 7x + 2).', options: ['∠A = 64°, ∠B = 80°, ∠C = 116°, ∠D = 100°', '∠A = 80°, ∠B = 64°, ∠C = 100°, ∠D = 116°', '∠A = 64°, ∠B = 100°, ∠C = 116°, ∠D = 80°', '∠A = 60°, ∠B = 80°, ∠C = 120°, ∠D = 100°'], explanation: '∠A + ∠C = 6y = 180; y = 30. ∠B + ∠D = 13x − 2 = 180; x = 14. எனவே 64°, 80°, 116°, 100°.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 4.4.4, p. 173', answer: 0,
    en: { q: 'ABCD is a cyclic quadrilateral whose diagonals intersect at P, with ∠DBC = 40° and ∠BAC = 60°. Then ∠CAD and ∠BCD are', options: ['40° and 80°', '40° and 100°', '60° and 80°', '20° and 120°'], explanation: '∠CAD = ∠CBD = 40° (same segment), so ∠BAD = 100° and ∠BCD = 180° − 100° = 80°.' },
    ta: { q: 'வட்ட நாற்கரம் ABCD இன் மூலைவிட்டங்கள் P இல் வெட்டுகின்றன; ∠DBC = 40°, ∠BAC = 60° எனில் ∠CAD மற்றும் ∠BCD', options: ['40° மற்றும் 80°', '40° மற்றும் 100°', '60° மற்றும் 80°', '20° மற்றும் 120°'], explanation: '∠CAD = ∠CBD = 40° (ஒரே வட்டத்துண்டுக் கோணங்கள்); ∠BAD = 100°; ∠BCD = 180° − 100° = 80°.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 4.4.5, p. 173', answer: 0,
    en: { q: 'AB and CD are parallel chords on opposite sides of the centre O, with AB = 8 cm, CD = 6 cm, OM ⊥ AB, OL ⊥ CD and LM = 7 cm. The radius of the circle is', options: ['5 cm', '7 cm', '4 cm', '6 cm'], explanation: 'Let OM = a: r² = 16 + a² = 9 + (7 − a)², which gives a = 3 and r = 5 cm.' },
    ta: { q: 'மையம் O வின் இருபுறமும் உள்ள இணை நாண்கள் AB = 8 செமீ, CD = 6 செமீ; OM ⊥ AB, OL ⊥ CD, LM = 7 செமீ எனில் வட்டத்தின் ஆரம்', options: ['5 செமீ', '7 செமீ', '4 செமீ', '6 செமீ'], explanation: 'OM = a என்க: r² = 16 + a² = 9 + (7 − a)²; a = 3, r = 5 செமீ.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 4.4.6, p. 173', answer: 0,
    en: { q: 'The arch of a bridge is part of a circle. It is 2 m high at its highest point and 6 m wide. The radius of the circle containing the arch is', options: ['3.25 m', '3 m', '2.5 m', '4.5 m'], explanation: 'r² = 3² + (r − 2)² gives 4r = 13, so r = 3.25 m.' },
    ta: { q: 'ஒரு பாலத்தின் வளைவு ஒரு வட்டத்தின் பகுதி. அதன் உச்சி உயரம் 2 மீ, அகலம் 6 மீ எனில் அவ்வட்டத்தின் ஆரம்', options: ['3.25 மீ', '3 மீ', '2.5 மீ', '4.5 மீ'], explanation: 'r² = 3² + (r − 2)²; 4r = 13; r = 3.25 மீ.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 4.4.8, p. 174', answer: 0,
    en: { q: 'In a circle of radius 6 m, chords AB = 8 m and CD = 10 m are perpendicular and meet at P. The distance from the centre to P is about', options: ['5.6 m', '4.5 m', '3.3 m', '7.8 m'], explanation: 'Distances from O to the chords are √(36 − 16) = √20 and √(36 − 25) = √11, so OP = √(20 + 11) = √31 ≈ 5.6 m.' },
    ta: { q: 'ஆரம் 6 மீ உள்ள வட்டத்தில் நாண்கள் AB = 8 மீ, CD = 10 மீ ஒன்றுக்கொன்று செங்குத்தாக P இல் சந்திக்கின்றன. மையத்திலிருந்து P இன் தொலைவு ஏறக்குறைய', options: ['5.6 மீ', '4.5 மீ', '3.3 மீ', '7.8 மீ'], explanation: 'மையத்திலிருந்து நாண்களின் தூரங்கள் √(36 − 16) = √20, √(36 − 25) = √11; OP = √(20 + 11) = √31 ≈ 5.6 மீ.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 4.4.9, p. 174', answer: 0,
    en: { q: 'P, Q, R lie on a circle with centre O. If ∠POQ = 100° and ∠PQR = 30°, then ∠RPO is', options: ['60°', '40°', '100°', '50°'], explanation: '∠PRQ = 100° ÷ 2 = 50°, so ∠RPQ = 180° − 30° − 50° = 100°; ∠OPQ = 40° (OP = OQ), so ∠RPO = 100° − 40° = 60°.' },
    ta: { q: 'O மையமுடைய வட்டத்தில் P, Q, R புள்ளிகள். ∠POQ = 100°, ∠PQR = 30° எனில் ∠RPO', options: ['60°', '40°', '100°', '50°'], explanation: '∠PRQ = 100° ÷ 2 = 50°; ∠RPQ = 180° − 30° − 50° = 100°; OP = OQ எனவே ∠OPQ = 40°; ∠RPO = 100° − 40° = 60°.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 4.7.15, p. 182', answer: 0,
    en: { q: 'O is the centre of a circle and the diameter AB bisects the chord CD at E, with CE = ED = 8 cm and EB = 4 cm. The radius of the circle is', options: ['10 cm', '8 cm', '6 cm', '4 cm'], explanation: 'OE = r − 4 and r² = 8² + (r − 4)², so 8r = 80 and r = 10 cm.' },
    ta: { q: 'வட்டமையம் O; விட்டம் AB ஆனது நாண் CD ஐ E இல் இருசமக் கூறிடுகிறது; CE = ED = 8 செமீ, EB = 4 செமீ எனில் வட்டத்தின் ஆரம்', options: ['10 செமீ', '8 செமீ', '6 செமீ', '4 செமீ'], explanation: 'OE = r − 4; r² = 8² + (r − 4)²; 8r = 80; r = 10 செமீ.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 4.7.16, p. 182', answer: 0,
    en: { q: 'Two circles meet at P and S. PQRS is a cyclic quadrilateral in one circle and PTVS in the other, with P, Q, T collinear and S, R, V collinear. If ∠QRS = 100°, then ∠TVS is', options: ['100°', '80°', '70°', '90°'], explanation: 'In PQRS, ∠QPS = 180° − 100° = 80°. P, Q, T are collinear, so ∠TPS = 80°, and in cyclic PTVS, ∠TVS = 180° − 80° = 100°.' },
    ta: { q: 'இரு வட்டங்கள் P, S இல் சந்திக்கின்றன. PQRS ஒரு வட்டத்திலும் PTVS மற்றொரு வட்டத்திலும் உள்ள வட்ட நாற்கரங்கள்; P, Q, T ஒரே கோட்டிலும் S, R, V ஒரே கோட்டிலும் உள்ளன. ∠QRS = 100° எனில் ∠TVS', options: ['100°', '80°', '70°', '90°'], explanation: 'PQRS இல் ∠QPS = 180° − 100° = 80°; P, Q, T ஒரே கோட்டில் உள்ளதால் ∠TPS = 80°; வட்ட நாற்கரம் PTVS இல் ∠TVS = 180° − 80° = 100°.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 4.7.18, p. 183', answer: 0, imageUrl: `${IMG}/ex4-7-cyclic-quad-parallel.png`,
    en: { q: 'ABCD is a cyclic quadrilateral in which DC is produced to E and CF ∥ AB, with ∠ADC = 80° and ∠ECF = 20°. Then ∠BAD is', options: ['120°', '100°', '20°', '110°'], explanation: '∠ABC = 180° − 80° = 100° and ∠BCF = ∠ABC = 100° (alternate angles), so the exterior angle ∠BCE = 100° + 20° = 120° = ∠BAD (interior opposite angle).' },
    ta: { q: 'வட்ட நாற்கரம் ABCD இல் DC ஆனது E வரை நீட்டப்பட்டுள்ளது; CF ∥ AB; ∠ADC = 80°, ∠ECF = 20° எனில் ∠BAD', options: ['120°', '100°', '20°', '110°'], explanation: '∠ABC = 180° − 80° = 100°; ∠BCF = ∠ABC = 100° (ஒன்றுவிட்ட கோணங்கள்); வெளிக்கோணம் ∠BCE = 100° + 20° = 120° = ∠BAD (உள்ளெதிர்க் கோணம்).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 4.7.20, p. 183', answer: 0,
    en: { q: 'In a circle with centre O, OP = 17 cm is a radius, PQ = 30 cm is a chord, and the radius OS is perpendicular to PQ, meeting it at R. Then RS is', options: ['9 cm', '8 cm', '10 cm', '7 cm'], explanation: 'PR = 15 cm, so OR = √(17² − 15²) = 8 cm and RS = 17 − 8 = 9 cm.' },
    ta: { q: 'O மையமுடைய வட்டத்தில் OP = 17 செமீ ஆரம், PQ = 30 செமீ நாண்; ஆரம் OS ஆனது PQ க்குச் செங்குத்தாக R இல் சந்திக்கிறது எனில் RS', options: ['9 செமீ', '8 செமீ', '10 செமீ', '7 செமீ'], explanation: 'PR = 15 செமீ; OR = √(17² − 15²) = 8 செமீ; RS = 17 − 8 = 9 செமீ.' },
  },
  {
    difficulty: 'hard', source: '§4.5.4, p. 167', answer: 0,
    en: { q: 'Assertion (A): The angle inscribed in a semicircle is 90°.\nReason (R): The angle subtended by an arc at the centre is double the angle it subtends at any point on the remaining part of the circle.', options: AR_EN, explanation: 'Both are true: the diameter subtends 180° at the centre, so by R the angle on the circle is 90°.' },
    ta: { q: 'கூற்று (A): அரைவட்டத்தில் அமையும் கோணம் 90°.\nகாரணம் (R): ஒரு வில் மையத்தில் தாங்கும் கோணம், அவ்வில் வட்டத்தின் மீதிப் பகுதியில் ஏதேனும் ஒரு புள்ளியில் தாங்கும் கோணத்தின் இரு மடங்காகும்.', options: AR_TA, explanation: 'இரண்டும் சரி: விட்டம் மையத்தில் 180° தாங்குவதால் R படி வட்டத்தின் மேல் உள்ள கோணம் 90°.' },
  },
  {
    difficulty: 'hard', source: '§4.3.2, p. 146', answer: 3,
    en: { q: 'Assertion (A): Every rhombus is a rectangle.\nReason (R): All the sides of a rhombus are equal.', options: AR_EN, explanation: 'A is false: a rhombus is an equilateral parallelogram but its angles need not be 90°. R is true.' },
    ta: { q: 'கூற்று (A): ஒவ்வொரு சாய்சதுரமும் ஒரு செவ்வகம் ஆகும்.\nகாரணம் (R): சாய்சதுரத்தின் எல்லாப் பக்கங்களும் சமம்.', options: AR_TA, explanation: 'A தவறு: சாய்சதுரம் சமபக்க இணைகரம்; அதன் கோணங்கள் 90° ஆக இருக்க வேண்டியதில்லை. R சரி.' },
  },
  {
    difficulty: 'hard', source: '§4.6, p. 172', answer: 2,
    en: { q: 'Assertion (A): If side AB of a cyclic quadrilateral ABCD is produced to E, then ∠CBE = ∠ADC.\nReason (R): The opposite angles of every quadrilateral are supplementary.', options: AR_EN, explanation: 'A is Theorem 13 (exterior angle = interior opposite angle) and is true. R is false: only cyclic quadrilaterals have supplementary opposite angles.' },
    ta: { q: 'கூற்று (A): வட்ட நாற்கரம் ABCD இன் பக்கம் AB ஐ E வரை நீட்டினால் ∠CBE = ∠ADC.\nகாரணம் (R): ஒவ்வொரு நாற்கரத்தின் எதிர்க் கோணங்களும் மிகைநிரப்பிகள்.', options: AR_TA, explanation: 'A என்பது தேற்றம் 13 (வெளிக்கோணம் = உள்ளெதிர்க் கோணம்); சரி. R தவறு: வட்ட நாற்கரங்களில் மட்டுமே எதிர்க் கோணங்கள் மிகைநிரப்பிகள்.' },
  },
  {
    difficulty: 'hard', source: '§4.3.4, p. 150', answer: 0,
    en: { q: 'Consider these statements about a kite:\n(i) Its diagonals intersect at right angles.\n(ii) One pair of opposite angles are equal.\n(iii) Its diagonals are always equal.\nWhich are correct?', options: ['(i) and (ii) only', '(i) and (iii) only', '(ii) and (iii) only', '(i), (ii) and (iii)'], explanation: 'A kite has perpendicular diagonals and one pair of equal opposite angles; its diagonals are generally unequal.' },
    ta: { q: 'பட்டம் பற்றிய கூற்றுகள்:\n(i) அதன் மூலைவிட்டங்கள் செங்கோணத்தில் வெட்டும்.\n(ii) ஒரு சோடி எதிர்க் கோணங்கள் சமம்.\n(iii) அதன் மூலைவிட்டங்கள் எப்போதும் சமம்.\nசரியானவை எவை?', options: ['(i), (ii) மட்டும்', '(i), (iii) மட்டும்', '(ii), (iii) மட்டும்', '(i), (ii), (iii)'], explanation: 'பட்டத்தின் மூலைவிட்டங்கள் செங்குத்தானவை; ஒரு சோடி எதிர்க் கோணங்கள் சமம்; மூலைவிட்டங்கள் பொதுவாகச் சமமல்ல.' },
  },
  {
    difficulty: 'hard', source: 'Book progress check 1, p. 151', answer: 0,
    en: { q: 'Consider:\n(i) Every square is a rectangle.\n(ii) Every rhombus is a parallelogram.\n(iii) Every parallelogram is a rhombus.\n(iv) Every square is a rhombus.\nWhich are correct?', options: ['(i), (ii) and (iv) only', '(i) and (iii) only', '(ii), (iii) and (iv) only', '(i), (ii), (iii) and (iv)'], explanation: 'A square is a rectangle and a rhombus, and a rhombus is a parallelogram; but a parallelogram need not have all sides equal.' },
    ta: { q: 'கூற்றுகள்:\n(i) ஒவ்வொரு சதுரமும் ஒரு செவ்வகம்.\n(ii) ஒவ்வொரு சாய்சதுரமும் ஓர் இணைகரம்.\n(iii) ஒவ்வோர் இணைகரமும் ஒரு சாய்சதுரம்.\n(iv) ஒவ்வொரு சதுரமும் ஒரு சாய்சதுரம்.\nசரியானவை எவை?', options: ['(i), (ii), (iv) மட்டும்', '(i), (iii) மட்டும்', '(ii), (iii), (iv) மட்டும்', '(i), (ii), (iii), (iv)'], explanation: 'சதுரம் செவ்வகமும் சாய்சதுரமும் ஆகும்; சாய்சதுரம் இணைகரம்; ஆனால் இணைகரத்தின் எல்லாப் பக்கங்களும் சமமாக இருக்க வேண்டியதில்லை.' },
  },
  {
    difficulty: 'hard', source: '§4.3.5 Example 4.1, p. 155', answer: 0,
    en: { q: 'In parallelogram ABCD, the bisectors of the consecutive angles ∠A and ∠B meet at P. If ∠A = 110°, then ∠APB is', options: ['90°', '110°', '55°', '125°'], explanation: 'Consecutive angles are supplementary, so ∠PAB + ∠PBA = ½ × 180° = 90° and ∠APB = 90°, whatever ∠A is.' },
    ta: { q: 'இணைகரம் ABCD இல் அடுத்தடுத்த கோணங்கள் ∠A, ∠B இன் இருசமவெட்டிகள் P இல் சந்திக்கின்றன. ∠A = 110° எனில் ∠APB', options: ['90°', '110°', '55°', '125°'], explanation: 'அடுத்தடுத்த கோணங்கள் மிகைநிரப்பிகள்; ∠PAB + ∠PBA = ½ × 180° = 90°; எனவே ∠A எதுவானாலும் ∠APB = 90°.' },
  },
];
