// Tamil Nadu State Board, 9th Mathematics, Unit 5 – Coordinate Geometry (ஆயத்தொலை வடிவியல்).
// Book exercises, examples and progress checks converted to MCQs (answers checked
// against the book's answer key), plus our own questions so every section is covered.
// Tamil wording follows the terms used in the Tamil-medium textbook.
// source = section / exercise and printed page of the English-medium book.

import { BankQuestion, AR_EN, AR_TA } from './types';

const IMG = '/content/9/state_board/maths/05';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: '§5.1, p. 185', answer: 0,
    en: { q: 'Coordinate geometry (analytical geometry) was developed by the French mathematician', options: ['René Descartes', 'Euclid', 'Pythagoras', 'Leonhard Euler'], explanation: 'René Descartes (1596–1650) combined algebra and geometry by fixing points with two numbers called coordinates.' },
    ta: { q: 'ஆயத்தொலை வடிவியலை (பகுமுறை வடிவியல்) உருவாக்கிய பிரெஞ்சுக் கணித மேதை', options: ['ரெனே டெகார்ட்', 'யூக்ளிட்', 'பித்தாகரஸ்', 'லியோனார்டு ஆய்லர்'], explanation: 'ரெனே டெகார்ட் (1596–1650) ஒரு புள்ளியின் நிலையை இரு எண்களால் (ஆயத்தொலைவுகள்) குறித்து இயற்கணிதத்தையும் வடிவியலையும் இணைத்தார்.' },
  },
  {
    difficulty: 'easy', source: '§5.2, p. 189', answer: 0,
    en: { q: 'The x-coordinate of a point is called its', options: ['abscissa', 'ordinate', 'origin', 'quadrant'], explanation: 'The x-coordinate is the abscissa and the y-coordinate is the ordinate.' },
    ta: { q: 'ஒரு புள்ளியின் x-ஆயத்தொலைவு எவ்வாறு அழைக்கப்படுகிறது?', options: ['கிடை அச்சுத் தொலைவு', 'செங்குத்து அச்சுத் தொலைவு', 'ஆதி', 'காற்பகுதி'], explanation: 'x-ஆயத்தொலைவு கிடை அச்சுத் தொலைவு (abscissa); y-ஆயத்தொலைவு செங்குத்து அச்சுத் தொலைவு (ordinate).' },
  },
  {
    difficulty: 'easy', source: '§5.2, p. 189', answer: 0,
    en: { q: 'The y-coordinate of a point is called its', options: ['ordinate', 'abscissa', 'origin', 'axis'], explanation: 'The y-coordinate is called the ordinate.' },
    ta: { q: 'ஒரு புள்ளியின் y-ஆயத்தொலைவு எவ்வாறு அழைக்கப்படுகிறது?', options: ['செங்குத்து அச்சுத் தொலைவு', 'கிடை அச்சுத் தொலைவு', 'ஆதி', 'அச்சு'], explanation: 'y-ஆயத்தொலைவு செங்குத்து அச்சுத் தொலைவு (ordinate) எனப்படும்.' },
  },
  {
    difficulty: 'easy', source: '§5.2, p. 189', answer: 0,
    en: { q: 'The point where the x-axis and the y-axis meet is called the origin. Its coordinates are', options: ['(0, 0)', '(1, 1)', '(1, 0)', '(0, 1)'], explanation: 'The axes meet at (0, 0), the origin, usually denoted by O.' },
    ta: { q: 'x-அச்சும் y-அச்சும் வெட்டும் புள்ளி ஆதி எனப்படும். அதன் ஆயத்தொலைவுகள்', options: ['(0, 0)', '(1, 1)', '(1, 0)', '(0, 1)'], explanation: 'அச்சுகள் (0, 0) இல் வெட்டுகின்றன; இதுவே ஆதி O.' },
  },
  {
    difficulty: 'easy', source: '§5.2, p. 190', answer: 0,
    en: { q: 'The signs of the coordinates of a point in the II quadrant are', options: ['(−, +)', '(+, +)', '(−, −)', '(+, −)'], explanation: 'In quadrant II (upper west side), x < 0 and y > 0.' },
    ta: { q: 'II ஆம் காற்பகுதியில் உள்ள புள்ளியின் ஆயத்தொலைவுகளின் குறிகள்', options: ['(−, +)', '(+, +)', '(−, −)', '(+, −)'], explanation: 'II ஆம் காற்பகுதியில் x < 0, y > 0.' },
  },
  {
    difficulty: 'easy', source: 'Book example 5.1, p. 191', answer: 0,
    en: { q: 'The point (3, −8) lies in the', options: ['IV quadrant', 'I quadrant', 'II quadrant', 'III quadrant'], explanation: 'x is positive and y is negative, so the point is in quadrant IV.' },
    ta: { q: '(3, −8) என்ற புள்ளி அமையும் காற்பகுதி', options: ['IV ஆம் காற்பகுதி', 'I ஆம் காற்பகுதி', 'II ஆம் காற்பகுதி', 'III ஆம் காற்பகுதி'], explanation: 'x மிகை, y குறை; எனவே புள்ளி IV ஆம் காற்பகுதியில் அமையும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 5.1.1, p. 192', answer: 0,
    en: { q: 'The point P(−7, 6) lies in the', options: ['II quadrant', 'I quadrant', 'III quadrant', 'IV quadrant'], explanation: 'x < 0 and y > 0, so P is in quadrant II.' },
    ta: { q: 'P(−7, 6) என்ற புள்ளி அமையும் காற்பகுதி', options: ['II ஆம் காற்பகுதி', 'I ஆம் காற்பகுதி', 'III ஆம் காற்பகுதி', 'IV ஆம் காற்பகுதி'], explanation: 'x < 0, y > 0; எனவே P ஆனது II ஆம் காற்பகுதியில் அமையும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 5.1.1, p. 192', answer: 0,
    en: { q: 'The point R(−6, −7) lies in the', options: ['III quadrant', 'II quadrant', 'IV quadrant', 'I quadrant'], explanation: 'Both coordinates are negative, so R is in quadrant III.' },
    ta: { q: 'R(−6, −7) என்ற புள்ளி அமையும் காற்பகுதி', options: ['III ஆம் காற்பகுதி', 'II ஆம் காற்பகுதி', 'IV ஆம் காற்பகுதி', 'I ஆம் காற்பகுதி'], explanation: 'இரு ஆயத்தொலைவுகளும் குறை எண்கள்; எனவே R ஆனது III ஆம் காற்பகுதியில் அமையும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 5.1.1, p. 192', answer: 0,
    en: { q: 'Q(7, −2), S(3, 5) and T(3, 9) lie respectively in the', options: ['IV, I and I quadrants', 'II, I and I quadrants', 'IV, I and II quadrants', 'III, IV and I quadrants'], explanation: 'Q has signs (+, −): IV; S and T have signs (+, +): I.' },
    ta: { q: 'Q(7, −2), S(3, 5), T(3, 9) ஆகியவை முறையே அமையும் காற்பகுதிகள்', options: ['IV, I, I', 'II, I, I', 'IV, I, II', 'III, IV, I'], explanation: 'Q இன் குறிகள் (+, −): IV; S, T இன் குறிகள் (+, +): I.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 5.6.1, p. 218', answer: 0,
    en: { q: 'If the y-coordinate of a point is zero, then the point always lies', options: ['on the x-axis', 'on the y-axis', 'in the I quadrant', 'in the II quadrant'], explanation: 'Every point on the x-axis has the form (x, 0).' },
    ta: { q: 'ஒரு புள்ளியின் y-அச்சுத் தொலைவு பூச்சியம் எனில் அது எப்பொழுதும் _____ அமையும்', options: ['x-அச்சின் மீது', 'y-அச்சின் மீது', 'முதலாம் காற்பகுதியில்', 'இரண்டாம் காற்பகுதியில்'], explanation: 'x-அச்சின் மீதுள்ள ஒவ்வொரு புள்ளியும் (x, 0) என்ற வடிவில் இருக்கும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 5.6.2, p. 218', answer: 0,
    en: { q: 'The points (−5, 2) and (2, −5) lie in the', options: ['II and IV quadrants respectively', 'same quadrant', 'II and III quadrants respectively', 'IV and II quadrants respectively'], explanation: '(−5, 2) has signs (−, +): quadrant II; (2, −5) has signs (+, −): quadrant IV.' },
    ta: { q: '(−5, 2) மற்றும் (2, −5) என்ற புள்ளிகள் அமையும் இடம்', options: ['முறையே II, IV காற்பகுதிகளில்', 'ஒரே காற்பகுதியில்', 'முறையே II, III காற்பகுதிகளில்', 'முறையே IV, II காற்பகுதிகளில்'], explanation: '(−5, 2) இன் குறிகள் (−, +): II ஆம் காற்பகுதி; (2, −5) இன் குறிகள் (+, −): IV ஆம் காற்பகுதி.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 5.6.4, p. 218', answer: 0,
    en: { q: 'P(−1, 1), Q(3, −4), R(1, −1), S(−2, −3) and T(−4, 4) are plotted. The points in the fourth quadrant are', options: ['Q and R', 'P and T', 'only S', 'P and Q'], explanation: 'Fourth-quadrant points have x > 0 and y < 0: Q(3, −4) and R(1, −1).' },
    ta: { q: 'P(−1, 1), Q(3, −4), R(1, −1), S(−2, −3), T(−4, 4) ஆகியவை வரைபடத்தாளில் குறிக்கப்பட்டால் நான்காவது காற்பகுதியில் அமையும் புள்ளிகள்', options: ['Q மற்றும் R', 'P மற்றும் T', 'S மட்டும்', 'P மற்றும் Q'], explanation: 'நான்காம் காற்பகுதியில் x > 0, y < 0: Q(3, −4), R(1, −1).' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 5.6.5, p. 218', answer: 0,
    en: { q: 'The point whose ordinate is 4 and which lies on the y-axis is', options: ['(0, 4)', '(4, 0)', '(1, 4)', '(4, 2)'], explanation: 'A point on the y-axis has abscissa 0, so it is (0, 4).' },
    ta: { q: 'ஒரு புள்ளியின் y அச்சுத் தொலைவு 4 மற்றும் அப்புள்ளி y அச்சில் அமைந்தால் அப்புள்ளி', options: ['(0, 4)', '(4, 0)', '(1, 4)', '(4, 2)'], explanation: 'y-அச்சின் மீதுள்ள புள்ளியின் x-அச்சுத் தொலைவு 0; எனவே (0, 4).' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 5.6.8, p. 218', answer: 0,
    en: { q: 'If (x + 2, 4) = (5, y − 2), then (x, y) is', options: ['(3, 6)', '(7, 12)', '(6, 3)', '(2, 1)'], explanation: 'Equal ordered pairs: x + 2 = 5 gives x = 3, and y − 2 = 4 gives y = 6.' },
    ta: { q: '(x + 2, 4) = (5, y − 2) எனில் (x, y) இன் மதிப்பு', options: ['(3, 6)', '(7, 12)', '(6, 3)', '(2, 1)'], explanation: 'x + 2 = 5 எனவே x = 3; y − 2 = 4 எனவே y = 6.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 5.6.9, p. 218', answer: 0,
    en: { q: 'If Q₁, Q₂, Q₃, Q₄ are the quadrants of the Cartesian plane, then Q₂ ∩ Q₃ is', options: ['the null set', 'Q₁ ∪ Q₂', 'Q₂ ∪ Q₃', 'the negative x-axis'], explanation: 'Quadrants do not overlap (the axes belong to no quadrant), so Q₂ ∩ Q₃ = ∅.' },
    ta: { q: 'Q₁, Q₂, Q₃, Q₄ என்பன கார்டீசியன் தளத்தின் நான்கு காற்பகுதிகள் எனில் Q₂ ∩ Q₃ என்பது', options: ['வெற்றுக் கணம்', 'Q₁ ∪ Q₂', 'Q₂ ∪ Q₃', 'x-அச்சின் குறைப் பகுதி'], explanation: 'காற்பகுதிகள் ஒன்றின்மேல் ஒன்று படிவதில்லை (அச்சுகள் எந்தக் காற்பகுதியிலும் சேராது); எனவே Q₂ ∩ Q₃ = ∅.' },
  },
  {
    difficulty: 'easy', source: '§5.2.1 Note, p. 190', answer: 0,
    en: { q: 'For any point on the y-axis, the', options: ['abscissa is zero', 'ordinate is zero', 'both coordinates are equal', 'abscissa is one'], explanation: 'A point Q on the y-axis has the form (0, y).' },
    ta: { q: 'y-அச்சின் மீதுள்ள எந்தப் புள்ளிக்கும்', options: ['கிடை அச்சுத் தொலைவு பூச்சியம்', 'செங்குத்து அச்சுத் தொலைவு பூச்சியம்', 'இரு ஆயத்தொலைவுகளும் சமம்', 'கிடை அச்சுத் தொலைவு ஒன்று'], explanation: 'y-அச்சின் மீதுள்ள புள்ளி Q ஆனது (0, y) என்ற வடிவில் இருக்கும்.' },
  },
  {
    difficulty: 'easy', source: '§5.3.3, p. 197', answer: 0,
    en: { q: 'The distance of a point P(x₁, y₁) from the origin is', options: ['√(x₁² + y₁²)', 'x₁ + y₁', '√(x₁ + y₁)', 'x₁² + y₁²'], explanation: 'Using the distance formula with (0, 0): OP = √(x₁² + y₁²).' },
    ta: { q: 'P(x₁, y₁) என்ற புள்ளிக்கும் ஆதிக்கும் இடையே உள்ள தொலைவு', options: ['√(x₁² + y₁²)', 'x₁ + y₁', '√(x₁ + y₁)', 'x₁² + y₁²'], explanation: '(0, 0) உடன் தொலைவு வாய்ப்பாடு: OP = √(x₁² + y₁²).' },
  },
  {
    difficulty: 'easy', source: '§5.4, p. 204', answer: 0,
    en: { q: 'The mid-point of the line segment joining (x₁, y₁) and (x₂, y₂) is', options: ['((x₁ + x₂)/2, (y₁ + y₂)/2)', '((x₂ − x₁)/2, (y₂ − y₁)/2)', '(x₁ + x₂, y₁ + y₂)', '((x₁ + y₁)/2, (x₂ + y₂)/2)'], explanation: 'The mid-point averages the x-coordinates and the y-coordinates.' },
    ta: { q: '(x₁, y₁), (x₂, y₂) ஆகிய புள்ளிகளை இணைக்கும் கோட்டுத்துண்டின் நடுப்புள்ளி', options: ['((x₁ + x₂)/2, (y₁ + y₂)/2)', '((x₂ − x₁)/2, (y₂ − y₁)/2)', '(x₁ + x₂, y₁ + y₂)', '((x₁ + y₁)/2, (x₂ + y₂)/2)'], explanation: 'நடுப்புள்ளி x-ஆயத்தொலைவுகள் மற்றும் y-ஆயத்தொலைவுகளின் சராசரி.' },
  },
  {
    difficulty: 'easy', source: '§5.7, p. 215', answer: 0,
    en: { q: 'The centroid of the triangle with vertices (x₁, y₁), (x₂, y₂), (x₃, y₃) is', options: ['((x₁ + x₂ + x₃)/3, (y₁ + y₂ + y₃)/3)', '((x₁ + x₂ + x₃)/2, (y₁ + y₂ + y₃)/2)', '(x₁ + x₂ + x₃, y₁ + y₂ + y₃)', '((x₁ + x₂)/2, (y₁ + y₂)/2)'], explanation: 'The centroid G is the average of the three vertices.' },
    ta: { q: '(x₁, y₁), (x₂, y₂), (x₃, y₃) ஐ முனைப்புள்ளிகளாகக் கொண்ட முக்கோணத்தின் நடுக்கோட்டு மையம்', options: ['((x₁ + x₂ + x₃)/3, (y₁ + y₂ + y₃)/3)', '((x₁ + x₂ + x₃)/2, (y₁ + y₂ + y₃)/2)', '(x₁ + x₂ + x₃, y₁ + y₂ + y₃)', '((x₁ + x₂)/2, (y₁ + y₂)/2)'], explanation: 'நடுக்கோட்டு மையம் G மூன்று முனைப்புள்ளிகளின் சராசரி.' },
  },

  // ------------------------------------------------------------------ Medium
  {
    difficulty: 'medium', source: 'Book exercise 5.1.2, p. 192', answer: 0, imageUrl: `${IMG}/fig5-11-points.png`,
    en: { q: 'From the figure, the abscissa and ordinate of R are', options: ['abscissa 4, ordinate −2', 'abscissa −2, ordinate 4', 'abscissa 4, ordinate 2', 'abscissa −4, ordinate −2'], explanation: 'R is 4 units right of the y-axis and 2 units below the x-axis: R = (4, −2).' },
    ta: { q: 'படத்திலிருந்து R இன் கிடை அச்சுத் தொலைவும் செங்குத்து அச்சுத் தொலைவும்', options: ['கிடை அச்சுத் தொலைவு 4, செங்குத்து அச்சுத் தொலைவு −2', 'கிடை அச்சுத் தொலைவு −2, செங்குத்து அச்சுத் தொலைவு 4', 'கிடை அச்சுத் தொலைவு 4, செங்குத்து அச்சுத் தொலைவு 2', 'கிடை அச்சுத் தொலைவு −4, செங்குத்து அச்சுத் தொலைவு −2'], explanation: 'R ஆனது y-அச்சுக்கு வலப்புறம் 4 அலகும் x-அச்சுக்குக் கீழே 2 அலகும் உள்ளது: R = (4, −2).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 5.1.2, p. 192', answer: 0, imageUrl: `${IMG}/fig5-11-points.png`,
    en: { q: 'From the figure, the coordinates of P and S are', options: ['P(−4, 4) and S(−5, −3)', 'P(4, −4) and S(−3, −5)', 'P(−4, 4) and S(−3, −5)', 'P(4, 4) and S(−5, 3)'], explanation: 'P is at x = −4, y = 4; S is at x = −5, y = −3 (abscissa first, then ordinate).' },
    ta: { q: 'படத்திலிருந்து P மற்றும் S இன் ஆயத்தொலைவுகள்', options: ['P(−4, 4), S(−5, −3)', 'P(4, −4), S(−3, −5)', 'P(−4, 4), S(−3, −5)', 'P(4, 4), S(−5, 3)'], explanation: 'P: x = −4, y = 4; S: x = −5, y = −3 (முதலில் கிடை அச்சுத் தொலைவு, பின் செங்குத்து அச்சுத் தொலைவு).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 5.1.3(i), p. 193', answer: 0,
    en: { q: 'The points (−5, 3), (−1, 3), (0, 3) and (5, 3) are plotted and joined. The figure is', options: ['a straight line parallel to the x-axis', 'a straight line parallel to the y-axis', 'a straight line on the y-axis', 'a square'], explanation: 'All four points have ordinate 3, so they lie on the line y = 3, parallel to the x-axis.' },
    ta: { q: '(−5, 3), (−1, 3), (0, 3), (5, 3) ஆகிய புள்ளிகளை வரைபடத்தாளில் குறித்து இணைத்தால் கிடைக்கும் வடிவம்', options: ['x-அச்சுக்கு இணையான நேர்க்கோடு', 'y-அச்சுக்கு இணையான நேர்க்கோடு', 'y-அச்சின் மீது அமைந்த நேர்க்கோடு', 'சதுரம்'], explanation: 'நான்கு புள்ளிகளின் y-அச்சுத் தொலைவும் 3; எனவே அவை y = 3 என்ற x-அச்சுக்கு இணையான கோட்டில் அமையும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 5.1.3(ii), p. 193', answer: 0,
    en: { q: 'The points (0, −4), (0, −2), (0, 4) and (0, 5) are plotted and joined. The figure is', options: ['a straight line lying on the y-axis', 'a straight line parallel to the x-axis', 'a straight line lying on the x-axis', 'a rectangle'], explanation: 'All abscissae are 0, so the points lie on the y-axis.' },
    ta: { q: '(0, −4), (0, −2), (0, 4), (0, 5) ஆகிய புள்ளிகளை வரைபடத்தாளில் குறித்து இணைத்தால் கிடைக்கும் வடிவம்', options: ['y-அச்சின் மீது அமைந்த நேர்க்கோடு', 'x-அச்சுக்கு இணையான நேர்க்கோடு', 'x-அச்சின் மீது அமைந்த நேர்க்கோடு', 'செவ்வகம்'], explanation: 'எல்லாக் கிடை அச்சுத் தொலைவுகளும் 0; எனவே புள்ளிகள் y-அச்சின் மீது அமையும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 5.1.4(i), p. 193', answer: 0,
    en: { q: 'The points (0, 0), (−4, 0), (−4, −4), (0, −4) joined in order form a', options: ['square', 'trapezium', 'rhombus that is not a square', 'kite'], explanation: 'Each side is 4 units and the sides lie along or parallel to the axes, so all angles are 90°: a square.' },
    ta: { q: '(0, 0), (−4, 0), (−4, −4), (0, −4) ஆகிய புள்ளிகளை ஆயத்தொலைத் தளத்தில் குறித்து, வரிசைப்படி இணைத்தால் கிடைக்கும் வடிவியல் உருவம்', options: ['சதுரம்', 'சரிவகம்', 'சதுரமல்லாத சாய்சதுரம்', 'பட்டம்'], explanation: 'ஒவ்வொரு பக்கமும் 4 அலகு; பக்கங்கள் அச்சுகளுக்கு இணையாக உள்ளதால் எல்லாக் கோணங்களும் 90°: சதுரம்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 5.1.4(ii), p. 193', answer: 0,
    en: { q: 'The points (−3, 3), (2, 3), (5, −1), (−6, −1) are joined to form a quadrilateral. It is a', options: ['trapezium', 'square', 'rectangle', 'rhombus'], explanation: 'The sides on y = 3 (length 5) and y = −1 (length 11) are parallel but unequal, so it is a trapezium.' },
    ta: { q: '(−3, 3), (2, 3), (5, −1), (−6, −1) ஆகிய புள்ளிகளை இணைத்து உருவாகும் நாற்கரம்', options: ['சரிவகம்', 'சதுரம்', 'செவ்வகம்', 'சாய்சதுரம்'], explanation: 'y = 3 (நீளம் 5), y = −1 (நீளம் 11) மீதுள்ள பக்கங்கள் இணை ஆனால் சமமல்ல; எனவே சரிவகம்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 5.2.1(i), p. 202', answer: 0,
    en: { q: 'The distance between (1, 2) and (4, 3) is', options: ['√10 units', '10 units', '√26 units', '4 units'], explanation: 'd = √((4 − 1)² + (3 − 2)²) = √(9 + 1) = √10.' },
    ta: { q: '(1, 2), (4, 3) ஆகிய புள்ளிகளுக்கு இடையே உள்ள தொலைவு', options: ['√10 அலகுகள்', '10 அலகுகள்', '√26 அலகுகள்', '4 அலகுகள்'], explanation: 'd = √((4 − 1)² + (3 − 2)²) = √(9 + 1) = √10.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 5.2.1(ii), p. 202', answer: 0,
    en: { q: 'The distance between (3, 4) and (−7, 2) is', options: ['2√26 units', '√96 units', '4√6 units', '12 units'], explanation: 'd = √((−10)² + (−2)²) = √104 = 2√26.' },
    ta: { q: '(3, 4), (−7, 2) ஆகிய புள்ளிகளுக்கு இடையே உள்ள தொலைவு', options: ['2√26 அலகுகள்', '√96 அலகுகள்', '4√6 அலகுகள்', '12 அலகுகள்'], explanation: 'd = √((−10)² + (−2)²) = √104 = 2√26.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 5.2.1(iii), p. 202', answer: 0,
    en: { q: 'The distance between (a, b) and (c, b) is', options: ['|c − a|', '|b − a|', 'c + a', '√(c² + b²)'], explanation: 'The y-coordinates are equal, so the distance is the difference of the x-coordinates, |c − a|.' },
    ta: { q: '(a, b), (c, b) ஆகிய புள்ளிகளுக்கு இடையே உள்ள தொலைவு', options: ['|c − a|', '|b − a|', 'c + a', '√(c² + b²)'], explanation: 'y-ஆயத்தொலைவுகள் சமம்; எனவே தொலைவு x-ஆயத்தொலைவுகளின் வித்தியாசம் |c − a|.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 5.2.1(iv), p. 202', answer: 0,
    en: { q: 'The distance between (3, −9) and (−2, 3) is', options: ['13 units', '17 units', '√13 units', '7 units'], explanation: 'd = √((−5)² + 12²) = √169 = 13.' },
    ta: { q: '(3, −9), (−2, 3) ஆகிய புள்ளிகளுக்கு இடையே உள்ள தொலைவு', options: ['13 அலகுகள்', '17 அலகுகள்', '√13 அலகுகள்', '7 அலகுகள்'], explanation: 'd = √((−5)² + 12²) = √169 = 13.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 5.6.6, p. 218', answer: 0,
    en: { q: 'The distance between the points (2, 3) and (1, 4) is', options: ['√2', '2', '√56', '√10'], explanation: 'd = √((1 − 2)² + (4 − 3)²) = √2.' },
    ta: { q: '(2, 3), (1, 4) ஆகிய புள்ளிகளுக்கு இடையே உள்ள தொலைவு', options: ['√2', '2', '√56', '√10'], explanation: 'd = √((1 − 2)² + (4 − 3)²) = √2.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 5.6.10, p. 218', answer: 0,
    en: { q: 'The distance between the point (5, −1) and the origin is', options: ['√26', '√24', '√37', '√17'], explanation: 'OP = √(5² + (−1)²) = √26.' },
    ta: { q: '(5, −1) என்ற புள்ளிக்கும் ஆதிப் புள்ளிக்கும் இடையே உள்ள தொலைவு', options: ['√26', '√24', '√37', '√17'], explanation: 'OP = √(5² + (−1)²) = √26.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 5.6.7, p. 218', answer: 0,
    en: { q: 'If the points A(2, 0), B(−6, 0) and C(3, a − 3) lie on the x-axis, then a is', options: ['3', '0', '2', '−6'], explanation: 'On the x-axis the ordinate is 0, so a − 3 = 0 and a = 3.' },
    ta: { q: 'A(2, 0), B(−6, 0), C(3, a − 3) ஆகிய புள்ளிகள் x-அச்சின் மீது அமைந்தால் a இன் மதிப்பு', options: ['3', '0', '2', '−6'], explanation: 'x-அச்சின் மீது y-அச்சுத் தொலைவு 0; a − 3 = 0; a = 3.' },
  },
  {
    difficulty: 'medium', source: 'Book example 5.4, p. 198', answer: 0,
    en: { q: 'The distance between the points (−4, 3) and (2, −3) is', options: ['6√2', '6', '2√6', '12'], explanation: 'd = √(6² + (−6)²) = √72 = 6√2.' },
    ta: { q: '(−4, 3), (2, −3) ஆகிய புள்ளிகளுக்கு இடையே உள்ள தொலைவு', options: ['6√2', '6', '2√6', '12'], explanation: 'd = √(6² + (−6)²) = √72 = 6√2.' },
  },
  {
    difficulty: 'medium', source: 'Book example 5.8, p. 200', answer: 0,
    en: { q: 'B lies on the x-axis and its abscissa is 11. The distance between A(7, 3) and B is', options: ['5', '4', '√13', '7'], explanation: 'B = (11, 0), so AB = √(4² + (−3)²) = √25 = 5.' },
    ta: { q: 'A(7, 3) மற்றும் x அச்சின் மீது அமைந்த புள்ளி B இன் x அச்சுத் தொலைவு 11 எனில் AB இன் தொலைவு', options: ['5', '4', '√13', '7'], explanation: 'B = (11, 0); AB = √(4² + (−3)²) = √25 = 5.' },
  },
  {
    difficulty: 'medium', source: 'Book activity, p. 193', answer: 0,
    en: { q: 'With the school as origin and 1 unit = 50 m, Shanmugam’s house is at (2, 1) and Akila’s house is at (2, 3) on the same north–south street. How far is Akila’s house from Shanmugam’s house?', options: ['100 m', '2 m', '150 m', '50 m'], explanation: 'The x-coordinates are equal, so the distance is |3 − 1| = 2 units = 2 × 50 m = 100 m.' },
    ta: { q: 'பள்ளியை ஆதியாகவும் 1 அலகு = 50 மீ எனவும் கொண்டால், வடக்குத் தெற்காக அமைந்த ஒரே தெருவில் சண்முகம் வீடு (2, 1), அகிலா வீடு (2, 3) இல் உள்ளன. சண்முகத்தின் வீட்டிலிருந்து அகிலாவின் வீடு எவ்வளவு தொலைவில் உள்ளது?', options: ['100 மீ', '2 மீ', '150 மீ', '50 மீ'], explanation: 'x-ஆயத்தொலைவுகள் சமம்; தொலைவு |3 − 1| = 2 அலகுகள் = 2 × 50 மீ = 100 மீ.' },
  },
  {
    difficulty: 'medium', source: '§5.3.3 Thinking corner, p. 196', answer: 0,
    en: { q: 'A man goes 3 km towards north and then 4 km towards east. How far is he from his initial position?', options: ['5 km', '7 km', '1 km', '12 km'], explanation: 'Taking the start as origin he reaches (4, 3); distance = √(4² + 3²) = 5 km.' },
    ta: { q: 'ஒருவர் வடக்கு நோக்கி 3 கிமீ, பின் கிழக்கு நோக்கி 4 கிமீ செல்கிறார். தொடக்க இடத்திலிருந்து அவர் உள்ள தொலைவு', options: ['5 கிமீ', '7 கிமீ', '1 கிமீ', '12 கிமீ'], explanation: 'தொடக்கத்தை ஆதியாகக் கொண்டால் அவர் (4, 3) ஐ அடைகிறார்; தொலைவு = √(4² + 3²) = 5 கிமீ.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 5.2.3(i), p. 202', answer: 0,
    en: { q: 'For A(5, 4), B(2, 0) and C(−2, 3), which two sides of ΔABC are equal?', options: ['AB = BC = 5', 'AB = AC = 5', 'BC = CA = 5√2', 'AB = CA = 5'], explanation: 'AB = √(9 + 16) = 5, BC = √(16 + 9) = 5, CA = √(49 + 1) = 5√2, so the triangle is isosceles with AB = BC.' },
    ta: { q: 'A(5, 4), B(2, 0), C(−2, 3) எனில் ΔABC இன் எந்த இரு பக்கங்கள் சமம்?', options: ['AB = BC = 5', 'AB = AC = 5', 'BC = CA = 5√2', 'AB = CA = 5'], explanation: 'AB = √(9 + 16) = 5, BC = √(16 + 9) = 5, CA = √(49 + 1) = 5√2; எனவே AB = BC, இருசமபக்க முக்கோணம்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 5.2.11, p. 203', answer: 0,
    en: { q: 'The point (11, 2) is the centre of the circle passing through (1, 2), (3, −4) and (5, −6). The radius of the circle is', options: ['10 units', '8 units', '√10 units', '100 units'], explanation: 'Distance from (11, 2) to (1, 2) is 10; to (3, −4) is √(64 + 36) = 10; to (5, −6) is √(36 + 64) = 10.' },
    ta: { q: '(1, 2), (3, −4), (5, −6) வழியே செல்லும் வட்டத்தின் மையம் (11, 2) எனில் வட்டத்தின் ஆரம்', options: ['10 அலகுகள்', '8 அலகுகள்', '√10 அலகுகள்', '100 அலகுகள்'], explanation: '(11, 2) இலிருந்து (1, 2) க்குத் தொலைவு 10; (3, −4) க்கு √(64 + 36) = 10; (5, −6) க்கு √(36 + 64) = 10.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 5.3.1(i), p. 208', answer: 0,
    en: { q: 'The mid-point of the line segment joining (−2, 3) and (−6, −5) is', options: ['(−4, −1)', '(−4, 1)', '(2, 4)', '(−8, −2)'], explanation: '((−2 − 6)/2, (3 − 5)/2) = (−4, −1).' },
    ta: { q: '(−2, 3), (−6, −5) ஐ இணைக்கும் கோட்டுத்துண்டின் நடுப்புள்ளி', options: ['(−4, −1)', '(−4, 1)', '(2, 4)', '(−8, −2)'], explanation: '((−2 − 6)/2, (3 − 5)/2) = (−4, −1).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 5.3.1(ii), p. 208', answer: 0,
    en: { q: 'The mid-point of the line segment joining (8, −2) and (−8, 0) is', options: ['(0, −1)', '(8, −1)', '(0, 1)', '(−8, −2)'], explanation: '((8 − 8)/2, (−2 + 0)/2) = (0, −1).' },
    ta: { q: '(8, −2), (−8, 0) ஐ இணைக்கும் கோட்டுத்துண்டின் நடுப்புள்ளி', options: ['(0, −1)', '(8, −1)', '(0, 1)', '(−8, −2)'], explanation: '((8 − 8)/2, (−2 + 0)/2) = (0, −1).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 5.3.1(iii), p. 208', answer: 0,
    en: { q: 'The mid-point of the line segment joining (a, b) and (a + 2b, 2a − b) is', options: ['(a + b, a)', '(a, a + b)', '(2a + 2b, 2a)', '(a + b, b)'], explanation: '((2a + 2b)/2, (2a)/2) = (a + b, a).' },
    ta: { q: '(a, b), (a + 2b, 2a − b) ஐ இணைக்கும் கோட்டுத்துண்டின் நடுப்புள்ளி', options: ['(a + b, a)', '(a, a + b)', '(2a + 2b, 2a)', '(a + b, b)'], explanation: '((2a + 2b)/2, (2a)/2) = (a + b, a).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 5.3.1(iv), p. 208', answer: 0,
    en: { q: 'The mid-point of the line segment joining (1/2, −3/7) and (3/2, −11/7) is', options: ['(1, −1)', '(2, −2)', '(1, 1)', '(1/2, −1)'], explanation: '((1/2 + 3/2)/2, (−3/7 − 11/7)/2) = (2/2, −2/2) = (1, −1).' },
    ta: { q: '(1/2, −3/7), (3/2, −11/7) ஐ இணைக்கும் கோட்டுத்துண்டின் நடுப்புள்ளி', options: ['(1, −1)', '(2, −2)', '(1, 1)', '(1/2, −1)'], explanation: '((1/2 + 3/2)/2, (−3/7 − 11/7)/2) = (2/2, −2/2) = (1, −1).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 5.3.2, p. 208', answer: 0,
    en: { q: 'The centre of a circle is (−4, 2). If one end of a diameter is (−3, 7), the other end is', options: ['(−5, −3)', '(−7/2, 9/2)', '(1, 5)', '(−5, 3)'], explanation: 'The centre is the mid-point: x = 2(−4) − (−3) = −5, y = 2(2) − 7 = −3.' },
    ta: { q: 'ஒரு வட்டத்தின் மையம் (−4, 2). அந்த வட்டத்தில் (−3, 7) என்பது விட்டத்தின் ஒரு முனை எனில், மற்றொரு முனை', options: ['(−5, −3)', '(−7/2, 9/2)', '(1, 5)', '(−5, 3)'], explanation: 'மையம் நடுப்புள்ளி: x = 2(−4) − (−3) = −5, y = 2(2) − 7 = −3.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 5.6.14, p. 219', answer: 0,
    en: { q: 'One end of a diameter of a circle is (3, 4) and the centre is (−3, 2). The other end of the diameter is', options: ['(−9, 0)', '(0, −3)', '(0, 9)', '(3, 0)'], explanation: 'Other end = (2(−3) − 3, 2(2) − 4) = (−9, 0).' },
    ta: { q: '(−3, 2) ஐ மையமாகக் கொண்ட வட்டத்தில் (3, 4) ஐ ஒரு முனையாகக் கொண்ட விட்டத்தின் மற்றொரு முனை', options: ['(−9, 0)', '(0, −3)', '(0, 9)', '(3, 0)'], explanation: 'மற்றொரு முனை = (2(−3) − 3, 2(2) − 4) = (−9, 0).' },
  },
  {
    difficulty: 'medium', source: 'Book example 5.12, p. 205', answer: 0,
    en: { q: '(3, −4) is the centre of a circle. If AB is a diameter and B is (5, −6), then A is', options: ['(1, −2)', '(4, −5)', '(8, −10)', '(−1, 2)'], explanation: 'A = (2 × 3 − 5, 2 × (−4) + 6) = (1, −2).' },
    ta: { q: 'ஒரு வட்டத்தின் மையப்புள்ளி (3, −4). AB ஆனது அந்த வட்டத்தின் விட்டம் மற்றும் B(5, −6) எனில் A இன் ஆயத்தொலைவுகள்', options: ['(1, −2)', '(4, −5)', '(8, −10)', '(−1, 2)'], explanation: 'A = (2 × 3 − 5, 2 × (−4) + 6) = (1, −2).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 5.6.18, p. 219', answer: 0,
    en: { q: 'The mid-point of the line joining (−a, 2b) and (−3a, −4b) is', options: ['(−2a, −b)', '(2a, 3b)', '(−2a, −3b)', '(2a, b)'], explanation: '((−a − 3a)/2, (2b − 4b)/2) = (−2a, −b).' },
    ta: { q: '(−a, 2b), (−3a, −4b) ஐ இணைக்கும் கோட்டுத்துண்டின் நடுப்புள்ளி', options: ['(−2a, −b)', '(2a, 3b)', '(−2a, −3b)', '(2a, b)'], explanation: '((−a − 3a)/2, (2b − 4b)/2) = (−2a, −b).' },
  },
  {
    difficulty: 'medium', source: 'Book progress check (ii), p. 206', answer: 0,
    en: { q: 'If (3, x) is the mid-point of the line segment joining A(8, −5) and B(−2, 11), then x is', options: ['3', '8', '6', '−3'], explanation: 'x = (−5 + 11)/2 = 3.' },
    ta: { q: 'A(8, −5), B(−2, 11) ஐ இணைக்கும் கோட்டுத்துண்டின் நடுப்புள்ளி (3, x) எனில் x இன் மதிப்பு', options: ['3', '8', '6', '−3'], explanation: 'x = (−5 + 11)/2 = 3.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 5.6.11, p. 219', answer: 0,
    en: { q: 'The point C dividing the line segment joining P(2, 4) and Q(5, 7) internally in the ratio 2 : 1 is', options: ['(4, 6)', '(3, 5)', '(7/2, 11/2)', '(4, 4)'], explanation: 'C = ((2 × 5 + 1 × 2)/3, (2 × 7 + 1 × 4)/3) = (12/3, 18/3) = (4, 6).' },
    ta: { q: 'P(2, 4), Q(5, 7) ஐ இணைக்கும் கோட்டுத்துண்டை 2 : 1 என்ற விகிதத்தில் உட்புறமாகப் பிரிக்கும் புள்ளி C', options: ['(4, 6)', '(3, 5)', '(7/2, 11/2)', '(4, 4)'], explanation: 'C = ((2 × 5 + 1 × 2)/3, (2 × 7 + 1 × 4)/3) = (12/3, 18/3) = (4, 6).' },
  },
  {
    difficulty: 'medium', source: 'Book example 5.17, p. 212', answer: 0,
    en: { q: 'The point which divides the line segment joining (3, 5) and (8, −10) internally in the ratio 3 : 2 is', options: ['(6, −4)', '(5, −1)', '(7, −8)', '(4.5, 0.5)'], explanation: 'P = ((3 × 8 + 2 × 3)/5, (3 × (−10) + 2 × 5)/5) = (30/5, −20/5) = (6, −4).' },
    ta: { q: '(3, 5), (8, −10) ஐ இணைக்கும் கோட்டுத்துண்டை 3 : 2 என்ற விகிதத்தில் உட்புறமாகப் பிரிக்கும் புள்ளி', options: ['(6, −4)', '(5, −1)', '(7, −8)', '(4.5, 0.5)'], explanation: 'P = ((3 × 8 + 2 × 3)/5, (3 × (−10) + 2 × 5)/5) = (30/5, −20/5) = (6, −4).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 5.4.1, p. 214', answer: 0,
    en: { q: 'The point which divides the line segment joining A(4, −3) and B(9, 7) in the ratio 3 : 2 is', options: ['(7, 3)', '(6, 1)', '(13/2, 2)', '(35, 15)'], explanation: '((3 × 9 + 2 × 4)/5, (3 × 7 + 2 × (−3))/5) = (35/5, 15/5) = (7, 3).' },
    ta: { q: 'A(4, −3), B(9, 7) ஐ இணைக்கும் கோட்டுத்துண்டை 3 : 2 என்ற விகிதத்தில் பிரிக்கும் புள்ளி', options: ['(7, 3)', '(6, 1)', '(13/2, 2)', '(35, 15)'], explanation: '((3 × 9 + 2 × 4)/5, (3 × 7 + 2 × (−3))/5) = (35/5, 15/5) = (7, 3).' },
  },
  {
    difficulty: 'medium', source: 'Book example 5.16, p. 210', answer: 0,
    en: { q: 'The points of trisection of the line segment joining (−2, −1) and (4, 8) are', options: ['(0, 2) and (2, 5)', '(1, 3.5) only', '(0, 3) and (2, 6)', '(2, 2) and (0, 5)'], explanation: 'P = ((4 + 2(−2))/3, (8 + 2(−1))/3) = (0, 2); Q = ((2(4) − 2)/3, (2(8) − 1)/3) = (2, 5).' },
    ta: { q: '(−2, −1), (4, 8) ஐ இணைக்கும் கோட்டுத்துண்டை மூன்று சமக்கூறிடும் புள்ளிகள்', options: ['(0, 2) மற்றும் (2, 5)', '(1, 3.5) மட்டும்', '(0, 3) மற்றும் (2, 6)', '(2, 2) மற்றும் (0, 5)'], explanation: 'P = ((4 + 2(−2))/3, (8 + 2(−1))/3) = (0, 2); Q = ((2(4) − 2)/3, (2(8) − 1)/3) = (2, 5).' },
  },
  {
    difficulty: 'medium', source: 'Book example 5.20, p. 216', answer: 0,
    en: { q: 'The centroid of the triangle with vertices A(6, −1), B(8, 3) and C(10, −5) is', options: ['(8, −1)', '(12, −3/2)', '(24, −3)', '(8, 1)'], explanation: 'G = ((6 + 8 + 10)/3, (−1 + 3 − 5)/3) = (8, −1).' },
    ta: { q: 'A(6, −1), B(8, 3), C(10, −5) ஐ முனைப்புள்ளிகளாகக் கொண்ட முக்கோணத்தின் நடுக்கோட்டு மையம்', options: ['(8, −1)', '(12, −3/2)', '(24, −3)', '(8, 1)'], explanation: 'G = ((6 + 8 + 10)/3, (−1 + 3 − 5)/3) = (8, −1).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 5.5.1(i), p. 217', answer: 0,
    en: { q: 'The centroid of the triangle with vertices (2, −4), (−3, −7) and (7, 2) is', options: ['(2, −3)', '(3, −2)', '(6, −9)', '(2, 3)'], explanation: 'G = ((2 − 3 + 7)/3, (−4 − 7 + 2)/3) = (6/3, −9/3) = (2, −3).' },
    ta: { q: '(2, −4), (−3, −7), (7, 2) ஐ முனைப்புள்ளிகளாகக் கொண்ட முக்கோணத்தின் நடுக்கோட்டு மையம்', options: ['(2, −3)', '(3, −2)', '(6, −9)', '(2, 3)'], explanation: 'G = ((2 − 3 + 7)/3, (−4 − 7 + 2)/3) = (6/3, −9/3) = (2, −3).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 5.5.1(ii), p. 217', answer: 0,
    en: { q: 'The centroid of the triangle with vertices (−5, −5), (1, −4) and (−4, −2) is', options: ['(−8/3, −11/3)', '(−8, −11)', '(−4, −11/2)', '(8/3, 11/3)'], explanation: 'G = ((−5 + 1 − 4)/3, (−5 − 4 − 2)/3) = (−8/3, −11/3).' },
    ta: { q: '(−5, −5), (1, −4), (−4, −2) ஐ முனைப்புள்ளிகளாகக் கொண்ட முக்கோணத்தின் நடுக்கோட்டு மையம்', options: ['(−8/3, −11/3)', '(−8, −11)', '(−4, −11/2)', '(8/3, 11/3)'], explanation: 'G = ((−5 + 1 − 4)/3, (−5 − 4 − 2)/3) = (−8/3, −11/3).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 5.6.15, p. 219', answer: 0,
    en: { q: 'The ratio in which the x-axis divides the line segment joining A(a₁, b₁) and B(a₂, b₂) is', options: ['−b₁ : b₂', 'b₁ : b₂', 'a₁ : a₂', '−a₁ : a₂'], explanation: 'At the x-axis the ordinate is 0: (m b₂ + n b₁)/(m + n) = 0 gives m : n = −b₁ : b₂.' },
    ta: { q: 'A(a₁, b₁), B(a₂, b₂) ஐ இணைக்கும் கோட்டுத்துண்டை x-அச்சு பிரிக்கும் விகிதம்', options: ['−b₁ : b₂', 'b₁ : b₂', 'a₁ : a₂', '−a₁ : a₂'], explanation: 'x-அச்சில் y = 0: (m b₂ + n b₁)/(m + n) = 0; எனவே m : n = −b₁ : b₂.' },
  },
  {
    difficulty: 'medium', source: '§5.7 Note, p. 216', answer: 0,
    en: { q: 'In an equilateral triangle, the orthocentre, incentre, centroid and circumcentre', options: ['all coincide', 'lie on different sides', 'are always outside the triangle', 'form a square'], explanation: 'The book notes that in an equilateral triangle all four centres are the same point.' },
    ta: { q: 'ஒரு சமபக்க முக்கோணத்தில் செங்கோட்டு மையம், உள்வட்ட மையம், நடுக்கோட்டு மையம், சுற்றுவட்ட மையம் ஆகியவை', options: ['அனைத்தும் ஒரே புள்ளியில் அமையும்', 'வெவ்வேறு பக்கங்களில் அமையும்', 'எப்போதும் முக்கோணத்தின் வெளியே அமையும்', 'ஒரு சதுரத்தை உருவாக்கும்'], explanation: 'சமபக்க முக்கோணத்தில் நான்கு மையங்களும் ஒரே புள்ளியில் அமையும் எனப் பாடநூல் குறிப்பிடுகிறது.' },
  },
  {
    difficulty: 'medium', source: '§5.7 Note, p. 216', answer: 0,
    en: { q: 'On the Euler line of a triangle, the centroid G divides the segment from the orthocentre H to the circumcentre S in the ratio', options: ['2 : 1 from H', '1 : 2 from H', '1 : 1', '3 : 1 from H'], explanation: 'G divides HS internally in the ratio 2 : 1 from the orthocentre.' },
    ta: { q: 'ஆய்லரின் கோட்டில் நடுக்கோட்டு மையம் G ஆனது செங்கோட்டு மையம் H இலிருந்து சுற்றுவட்ட மையம் S வரையிலான கோட்டுத்துண்டைப் பிரிக்கும் விகிதம்', options: ['H இலிருந்து 2 : 1', 'H இலிருந்து 1 : 2', '1 : 1', 'H இலிருந்து 3 : 1'], explanation: 'G ஆனது HS ஐ செங்கோட்டு மையத்திலிருந்து 2 : 1 என்ற விகிதத்தில் உட்புறமாகப் பிரிக்கும்.' },
  },

  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise 5.2.2(i), p. 202', answer: 0,
    en: { q: 'Which set of points is collinear?', options: ['(7, −2), (5, 1), (3, 4)', '(1, 2), (4, 3), (7, 5)', '(0, 0), (1, 2), (3, 5)', '(2, 1), (4, 4), (5, 6)'], explanation: 'For (7, −2), (5, 1), (3, 4): AB = BC = √13 and AC = √52 = 2√13, so AB + BC = AC. The other sets fail this test.' },
    ta: { q: 'பின்வருவனவற்றுள் ஒரு கோடமையும் புள்ளிகள் எவை?', options: ['(7, −2), (5, 1), (3, 4)', '(1, 2), (4, 3), (7, 5)', '(0, 0), (1, 2), (3, 5)', '(2, 1), (4, 4), (5, 6)'], explanation: '(7, −2), (5, 1), (3, 4) க்கு AB = BC = √13, AC = √52 = 2√13; எனவே AB + BC = AC. மற்ற தொகுப்புகள் இதனை நிறைவு செய்யாது.' },
  },
  {
    difficulty: 'hard', source: 'Book example 5.5, p. 198', answer: 0,
    en: { q: 'For A(3, 1), B(6, 4) and C(8, 6), which is true?', options: ['AB + BC = AC, so A, B, C are collinear', 'AB² + BC² = AC², so ΔABC is right-angled', 'AB = BC, so ΔABC is isosceles', 'AB = BC = CA, so ΔABC is equilateral'], explanation: 'AB = 3√2, BC = 2√2, AC = 5√2, so AB + BC = AC and the points lie on a straight line.' },
    ta: { q: 'A(3, 1), B(6, 4), C(8, 6) க்கு எது உண்மை?', options: ['AB + BC = AC; எனவே A, B, C ஒரே நேர்க்கோட்டில் அமையும்', 'AB² + BC² = AC²; எனவே ΔABC செங்கோண முக்கோணம்', 'AB = BC; எனவே ΔABC இருசமபக்க முக்கோணம்', 'AB = BC = CA; எனவே ΔABC சமபக்க முக்கோணம்'], explanation: 'AB = 3√2, BC = 2√2, AC = 5√2; AB + BC = AC; எனவே புள்ளிகள் ஒரே நேர்க்கோட்டில் அமையும்.' },
  },
  {
    difficulty: 'hard', source: 'Book example 5.6, p. 199', answer: 0,
    en: { q: 'A(7, 10), B(−2, 5) and C(3, −4) are the vertices of a triangle. Which is true?', options: ['It is right-angled at B, since AB² + BC² = AC²', 'It is right-angled at A, since AB² + AC² = BC²', 'It is equilateral', 'The points are collinear'], explanation: 'AB² = 106, BC² = 106, AC² = 212, and 106 + 106 = 212, so the right angle is at B.' },
    ta: { q: 'A(7, 10), B(−2, 5), C(3, −4) ஒரு முக்கோணத்தின் முனைகள். எது உண்மை?', options: ['AB² + BC² = AC²; எனவே B இல் செங்கோணம்', 'AB² + AC² = BC²; எனவே A இல் செங்கோணம்', 'அது சமபக்க முக்கோணம்', 'புள்ளிகள் ஒரே கோட்டில் அமையும்'], explanation: 'AB² = 106, BC² = 106, AC² = 212; 106 + 106 = 212; எனவே B இல் செங்கோணம்.' },
  },
  {
    difficulty: 'hard', source: 'Book example 5.9, p. 201', answer: 0,
    en: { q: 'P(6, −1), Q(1, 3) and R(a, 8) are such that PQ = QR. The value of a is', options: ['5 or −3', '5 only', '−5 or 3', '1 or 4'], explanation: 'PQ² = 41 and QR² = (a − 1)² + 25, so (a − 1)² = 16, a − 1 = ±4, giving a = 5 or −3.' },
    ta: { q: 'P(6, −1), Q(1, 3), R(a, 8) ஆகியவற்றுக்கு PQ = QR எனில் a இன் மதிப்பு', options: ['5 அல்லது −3', '5 மட்டும்', '−5 அல்லது 3', '1 அல்லது 4'], explanation: 'PQ² = 41, QR² = (a − 1)² + 25; (a − 1)² = 16; a − 1 = ±4; a = 5 அல்லது −3.' },
  },
  {
    difficulty: 'hard', source: 'Book example 5.10, p. 201', answer: 0,
    en: { q: 'A(2, 2) and B(8, −4) are given. A point P on the positive x-axis satisfies AP : PB = 1 : 2. P is', options: ['(4, 0)', '(−4, 0)', '(2, 0)', '(6, 0)'], explanation: 'With P(x, 0), 4AP² = BP² gives 3x² − 48 = 0, so x = ±4; P is on the positive side, so P = (4, 0).' },
    ta: { q: 'A(2, 2), B(8, −4). x-அச்சின் மிகைப் பகுதியில் உள்ள P ஆனது AP : PB = 1 : 2 ஐ நிறைவு செய்கிறது. P', options: ['(4, 0)', '(−4, 0)', '(2, 0)', '(6, 0)'], explanation: 'P(x, 0) என்க; 4AP² = BP² லிருந்து 3x² − 48 = 0; x = ±4; P மிகைப் பகுதியில் உள்ளதால் P = (4, 0).' },
  },
  {
    difficulty: 'hard', source: 'Book example 5.11, p. 202', answer: 0,
    en: { q: '(4, 3) is the centre of the circle through (9, 3), (7, −1) and (−1, 3). Its radius is', options: ['5', '√5', '25', '4'], explanation: 'Distances from (4, 3) to (9, 3), (7, −1), (−1, 3) are √25, √(9 + 16), √25 = 5 each.' },
    ta: { q: '(9, 3), (7, −1), (−1, 3) வழியே செல்லும் வட்டத்தின் மையம் (4, 3) எனில் அதன் ஆரம்', options: ['5', '√5', '25', '4'], explanation: '(4, 3) இலிருந்து (9, 3), (7, −1), (−1, 3) க்குத் தொலைவுகள் √25, √(9 + 16), √25 = 5.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 5.2.4(i), p. 203', answer: 0,
    en: { q: 'A(2, 2), B(−2, −2) and C(−2√3, 2√3) form an equilateral triangle. The length of each side is', options: ['4√2 units', '4 units', '2√3 units', '8 units'], explanation: 'AB = √(16 + 16) = 4√2; also BC² = (−2√3 + 2)² + (2√3 + 2)² = 32, so every side is 4√2.' },
    ta: { q: 'A(2, 2), B(−2, −2), C(−2√3, 2√3) ஒரு சமபக்க முக்கோணத்தை அமைக்கின்றன. ஒவ்வொரு பக்கத்தின் நீளம்', options: ['4√2 அலகுகள்', '4 அலகுகள்', '2√3 அலகுகள்', '8 அலகுகள்'], explanation: 'AB = √(16 + 16) = 4√2; BC² = (−2√3 + 2)² + (2√3 + 2)² = 32; எனவே ஒவ்வொரு பக்கமும் 4√2.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 5.2.7, p. 203', answer: 0,
    en: { q: 'A(−1, 1), B(1, 3) and C(3, a) are points such that AB = BC. Then a is', options: ['5 or 1', '5 only', '3 or −1', '−5 or 1'], explanation: 'AB² = 8 and BC² = 4 + (a − 3)², so (a − 3)² = 4 and a = 5 or 1.' },
    ta: { q: 'A(−1, 1), B(1, 3), C(3, a) ஆகியவற்றுக்கு AB = BC எனில் a இன் மதிப்பு', options: ['5 அல்லது 1', '5 மட்டும்', '3 அல்லது −1', '−5 அல்லது 1'], explanation: 'AB² = 8, BC² = 4 + (a − 3)²; (a − 3)² = 4; a = 5 அல்லது 1.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 5.2.8, p. 203', answer: 0,
    en: { q: 'The abscissa of a point A is equal to its ordinate, and its distance from B(1, 3) is 10 units. A is', options: ['(9, 9) or (−5, −5)', '(9, 9) only', '(5, 5) or (−9, −9)', '(10, 10) or (−10, −10)'], explanation: 'With A(x, x): (x − 1)² + (x − 3)² = 100 gives x² − 4x − 45 = 0, so x = 9 or −5.' },
    ta: { q: 'புள்ளி A இன் கிடை அச்சுத் தொலைவும் செங்குத்து அச்சுத் தொலைவும் சமம்; B(1, 3) இலிருந்து அதன் தொலைவு 10 அலகுகள் எனில் A', options: ['(9, 9) அல்லது (−5, −5)', '(9, 9) மட்டும்', '(5, 5) அல்லது (−9, −9)', '(10, 10) அல்லது (−10, −10)'], explanation: 'A(x, x) என்க: (x − 1)² + (x − 3)² = 100; x² − 4x − 45 = 0; x = 9 அல்லது −5.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 5.2.9, p. 203', answer: 0,
    en: { q: 'The point (x, y) is equidistant from (3, 4) and (−5, 6). The relation between x and y is', options: ['y = 4x + 9', 'y = 4x − 9', 'x = 4y + 9', 'y = −4x + 9'], explanation: '(x − 3)² + (y − 4)² = (x + 5)² + (y − 6)² simplifies to −16x + 4y − 36 = 0, i.e. y = 4x + 9.' },
    ta: { q: '(x, y) என்ற புள்ளி (3, 4), (−5, 6) இலிருந்து சம தொலைவில் உள்ளது. x, y க்கு இடையே உள்ள தொடர்பு', options: ['y = 4x + 9', 'y = 4x − 9', 'x = 4y + 9', 'y = −4x + 9'], explanation: '(x − 3)² + (y − 4)² = (x + 5)² + (y − 6)² ஐச் சுருக்கினால் −16x + 4y − 36 = 0; அதாவது y = 4x + 9.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 5.2.10, p. 203', answer: 0,
    en: { q: 'A(2, 3) and B(2, −4) are two points. If P lies on the x-axis such that AP = (3/7)AB, then P is', options: ['(2, 0)', '(3, 0)', '(0, 2)', '(−2, 0)'], explanation: 'AB = 7, so AP = 3. With P(x, 0): (x − 2)² + 9 = 9, so x = 2 and P = (2, 0).' },
    ta: { q: 'A(2, 3), B(2, −4) என்பன இரு புள்ளிகள். x-அச்சின் மீதுள்ள P ஆனது AP = (3/7)AB ஐ நிறைவு செய்தால் P', options: ['(2, 0)', '(3, 0)', '(0, 2)', '(−2, 0)'], explanation: 'AB = 7; AP = 3. P(x, 0) என்க: (x − 2)² + 9 = 9; x = 2; P = (2, 0).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 5.2.12, p. 203', answer: 0,
    en: { q: 'A circle with centre at the origin has radius 30 units. The distance between the points where it meets the positive x-axis and the positive y-axis is', options: ['30√2 units', '60 units', '30 units', '15√2 units'], explanation: 'The points are (30, 0) and (0, 30); distance = √(30² + 30²) = 30√2.' },
    ta: { q: 'ஆதியை மையமாகக் கொண்ட வட்டத்தின் ஆரம் 30 அலகுகள். அது மிகை x-அச்சையும் மிகை y-அச்சையும் வெட்டும் புள்ளிகளுக்கு இடையே உள்ள தொலைவு', options: ['30√2 அலகுகள்', '60 அலகுகள்', '30 அலகுகள்', '15√2 அலகுகள்'], explanation: 'புள்ளிகள் (30, 0), (0, 30); தொலைவு = √(30² + 30²) = 30√2.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 5.6.3, p. 218', answer: 0,
    en: { q: 'On plotting O(0, 0), A(3, −4), B(3, 4) and C(0, 4) and joining OA, AB, BC and CO, the figure obtained is a', options: ['trapezium', 'square', 'rectangle', 'rhombus'], explanation: 'AB lies on x = 3 and CO on x = 0, so they are parallel, but AB = 8 and CO = 4 are unequal: a trapezium.' },
    ta: { q: 'O(0, 0), A(3, −4), B(3, 4), C(0, 4) ஐக் குறித்து OA, AB, BC, CO என இணைத்தால் கிடைக்கும் உருவம்', options: ['சரிவகம்', 'சதுரம்', 'செவ்வகம்', 'சாய்சதுரம்'], explanation: 'AB ஆனது x = 3, CO ஆனது x = 0 மீது; அவை இணை, ஆனால் AB = 8, CO = 4 சமமல்ல: சரிவகம்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 5.6.12, p. 219', answer: 0,
    en: { q: 'If P(a/3, b/2) is the mid-point of the line segment joining A(−4, 3) and B(−2, 4), then (a, b) is', options: ['(−9, 7)', '(−3, 7/2)', '(9, −7)', '(3, −7/2)'], explanation: 'Mid-point = (−3, 7/2), so a/3 = −3 and b/2 = 7/2, giving a = −9, b = 7.' },
    ta: { q: 'A(−4, 3), B(−2, 4) ஐ இணைக்கும் கோட்டுத்துண்டின் நடுப்புள்ளி P(a/3, b/2) எனில் (a, b)', options: ['(−9, 7)', '(−3, 7/2)', '(9, −7)', '(3, −7/2)'], explanation: 'நடுப்புள்ளி = (−3, 7/2); a/3 = −3, b/2 = 7/2; a = −9, b = 7.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 5.6.13, p. 219', answer: 0,
    en: { q: 'In what ratio does the point Q(1, 6) divide the line segment joining P(2, 7) and R(−2, 3)?', options: ['1 : 3', '1 : 2', '2 : 1', '3 : 1'], explanation: '(−2m + 2n)/(m + n) = 1 gives n = 3m, so m : n = 1 : 3.' },
    ta: { q: 'P(2, 7), R(−2, 3) ஐ இணைக்கும் கோட்டுத்துண்டை Q(1, 6) என்ன விகிதத்தில் பிரிக்கும்?', options: ['1 : 3', '1 : 2', '2 : 1', '3 : 1'], explanation: '(−2m + 2n)/(m + n) = 1; n = 3m; m : n = 1 : 3.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 5.6.16, p. 219', answer: 0,
    en: { q: 'The ratio in which the x-axis divides the line segment joining (6, 4) and (1, −7) is', options: ['4 : 7', '2 : 3', '3 : 4', '4 : 3'], explanation: 'Ratio = −y₁ : y₂ = −4 : −7 = 4 : 7.' },
    ta: { q: '(6, 4), (1, −7) ஐ இணைக்கும் கோட்டுத்துண்டை x-அச்சு பிரிக்கும் விகிதம்', options: ['4 : 7', '2 : 3', '3 : 4', '4 : 3'], explanation: 'விகிதம் = −y₁ : y₂ = −4 : −7 = 4 : 7.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 5.6.17, p. 219', answer: 0,
    en: { q: 'The mid-points of the sides AB, BC and CA of a triangle are (3, 4), (1, 1) and (2, −3) respectively. The vertices A and B are', options: ['(4, 0) and (2, 8)', '(3, 2) and (2, 4)', '(3, 4) and (2, 0)', '(4, 3) and (2, 4)'], explanation: 'A = mid(AB) + mid(CA) − mid(BC) = (4, 0); B = mid(AB) + mid(BC) − mid(CA) = (2, 8).' },
    ta: { q: 'ஒரு முக்கோணத்தின் பக்கங்கள் AB, BC, CA இன் நடுப்புள்ளிகள் முறையே (3, 4), (1, 1), (2, −3) எனில் A, B இன் ஆயத்தொலைவுகள்', options: ['(4, 0), (2, 8)', '(3, 2), (2, 4)', '(3, 4), (2, 0)', '(4, 3), (2, 4)'], explanation: 'A = AB நடு + CA நடு − BC நடு = (4, 0); B = AB நடு + BC நடு − CA நடு = (2, 8).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 5.6.19, p. 219', answer: 0,
    en: { q: 'In what ratio does the y-axis divide the line segment joining (−5, 1) and (2, 3) internally?', options: ['5 : 2', '2 : 5', '1 : 3', '3 : 1'], explanation: 'Ratio = −x₁ : x₂ = 5 : 2.' },
    ta: { q: '(−5, 1), (2, 3) ஐ இணைக்கும் கோட்டுத்துண்டை y-அச்சு உட்புறமாக என்ன விகிதத்தில் பிரிக்கும்?', options: ['5 : 2', '2 : 5', '1 : 3', '3 : 1'], explanation: 'விகிதம் = −x₁ : x₂ = 5 : 2.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 5.6.20, p. 219', answer: 0,
    en: { q: 'If (1, −2), (3, 6), (x, 10) and (3, 2) are the vertices of a parallelogram taken in order, then x is', options: ['5', '6', '4', '3'], explanation: 'Diagonals bisect each other: (1 + x)/2 = (3 + 3)/2, so x = 5.' },
    ta: { q: '(1, −2), (3, 6), (x, 10), (3, 2) ஆகியவை வரிசையாக ஓர் இணைகரத்தின் முனைகள் எனில் x இன் மதிப்பு', options: ['5', '6', '4', '3'], explanation: 'மூலைவிட்டங்கள் ஒன்றையொன்று இருசமக் கூறிடும்: (1 + x)/2 = (3 + 3)/2; x = 5.' },
  },
  {
    difficulty: 'hard', source: 'Book example 5.13, p. 206', answer: 0,
    en: { q: 'If (x, 3), (6, y), (8, 2) and (9, 4) are the vertices of a parallelogram taken in order, then x and y are', options: ['x = 7, y = 1', 'x = 1, y = 7', 'x = 7, y = −1', 'x = 5, y = 3'], explanation: 'Mid-point of AC = mid-point of BD: (x + 8)/2 = 15/2 gives x = 7, and 5/2 = (y + 4)/2 gives y = 1.' },
    ta: { q: '(x, 3), (6, y), (8, 2), (9, 4) ஆகியவை வரிசையாக ஓர் இணைகரத்தின் முனைகள் எனில் x, y', options: ['x = 7, y = 1', 'x = 1, y = 7', 'x = 7, y = −1', 'x = 5, y = 3'], explanation: 'AC இன் நடுப்புள்ளி = BD இன் நடுப்புள்ளி: (x + 8)/2 = 15/2; x = 7; 5/2 = (y + 4)/2; y = 1.' },
  },
  {
    difficulty: 'hard', source: 'Book thinking corner, p. 206', answer: 0,
    en: { q: 'A(6, 1), B(8, 2) and C(9, 4) are three vertices of a parallelogram ABCD taken in order. The fourth vertex D is', options: ['(7, 3)', '(11, 5)', '(5, −1)', '(3, 7)'], explanation: 'D = A + C − B = (6 + 9 − 8, 1 + 4 − 2) = (7, 3), because the diagonals bisect each other.' },
    ta: { q: 'A(6, 1), B(8, 2), C(9, 4) ஆகியவை வரிசையாக இணைகரம் ABCD இன் மூன்று உச்சிகள். நான்காவது உச்சி D', options: ['(7, 3)', '(11, 5)', '(5, −1)', '(3, 7)'], explanation: 'மூலைவிட்டங்கள் இருசமக் கூறிடுவதால் D = A + C − B = (6 + 9 − 8, 1 + 4 − 2) = (7, 3).' },
  },
  {
    difficulty: 'hard', source: 'Book example 5.14, p. 206', answer: 0,
    en: { q: 'The points which divide the line segment joining A(−11, 4) and B(9, 8) into four equal parts are', options: ['(−6, 5), (−1, 6), (4, 7)', '(−1, 6) only', '(−6, 5), (−1, 6), (9, 8)', '(−5, 5), (0, 6), (5, 7)'], explanation: 'Q = mid-point of AB = (−1, 6); P = mid-point of AQ = (−6, 5); R = mid-point of QB = (4, 7).' },
    ta: { q: 'A(−11, 4), B(9, 8) ஐ இணைக்கும் கோட்டுத்துண்டை நான்கு சம பாகங்களாகப் பிரிக்கும் புள்ளிகள்', options: ['(−6, 5), (−1, 6), (4, 7)', '(−1, 6) மட்டும்', '(−6, 5), (−1, 6), (9, 8)', '(−5, 5), (0, 6), (5, 7)'], explanation: 'Q = AB இன் நடுப்புள்ளி = (−1, 6); P = AQ இன் நடுப்புள்ளி = (−6, 5); R = QB இன் நடுப்புள்ளி = (4, 7).' },
  },
  {
    difficulty: 'hard', source: 'Book example 5.15, p. 207', answer: 0,
    en: { q: 'The mid-points of the sides of a triangle are (5, 1), (3, −5) and (−5, −1). The vertices of the triangle are', options: ['(−3, 5), (13, −3), (−7, −7)', '(3, −5), (13, 3), (7, 7)', '(1, −5), (−3, 3), (3, −1)', '(−3, −5), (13, 3), (−7, 7)'], explanation: 'Adding the three equations gives x₁ + x₂ + x₃ = 3 and y₁ + y₂ + y₃ = −5; subtracting each pair gives (−3, 5), (13, −3), (−7, −7).' },
    ta: { q: 'ஒரு முக்கோணத்தின் பக்கங்களின் நடுப்புள்ளிகள் (5, 1), (3, −5), (−5, −1) எனில் அந்த முக்கோணத்தின் முனைகளின் ஆயத்தொலைவுகள்', options: ['(−3, 5), (13, −3), (−7, −7)', '(3, −5), (13, 3), (7, 7)', '(1, −5), (−3, 3), (3, −1)', '(−3, −5), (13, 3), (−7, 7)'], explanation: 'மூன்று சமன்பாடுகளையும் கூட்டினால் x₁ + x₂ + x₃ = 3, y₁ + y₂ + y₃ = −5; ஒவ்வொரு சோடியையும் கழிக்க (−3, 5), (13, −3), (−7, −7).' },
  },
  {
    difficulty: 'hard', source: 'Book progress check (i), p. 206', answer: 0,
    en: { q: 'X is the mid-point of the segment joining A(3, 0) and B(−5, 4), and Y is the mid-point of the segment joining P(−11, −8) and Q(8, −2). The mid-point of XY is', options: ['(−5/4, −3/2)', '(−5/2, −3)', '(−1, 2)', '(5/4, 3/2)'], explanation: 'X = (−1, 2) and Y = (−3/2, −5), so the mid-point of XY = (−5/4, −3/2).' },
    ta: { q: 'A(3, 0), B(−5, 4) ஐ இணைக்கும் கோட்டுத்துண்டின் நடுப்புள்ளி X; P(−11, −8), Q(8, −2) ஐ இணைக்கும் கோட்டுத்துண்டின் நடுப்புள்ளி Y எனில் XY இன் நடுப்புள்ளி', options: ['(−5/4, −3/2)', '(−5/2, −3)', '(−1, 2)', '(5/4, 3/2)'], explanation: 'X = (−1, 2), Y = (−3/2, −5); XY இன் நடுப்புள்ளி = (−5/4, −3/2).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 5.3.3, p. 208', answer: 0,
    en: { q: 'The mid-point (x, y) of the line joining (3, 4) and (p, 7) lies on 2x + 2y + 1 = 0. The value of p is', options: ['−15', '15', '−11', '−4'], explanation: 'Mid-point = ((3 + p)/2, 11/2); substituting: (3 + p) + 11 + 1 = 0, so p = −15.' },
    ta: { q: '(3, 4), (p, 7) ஐ இணைக்கும் கோட்டுத்துண்டின் நடுப்புள்ளி (x, y) ஆனது 2x + 2y + 1 = 0 இன் மேல் அமைந்துள்ளது எனில் p இன் மதிப்பு', options: ['−15', '15', '−11', '−4'], explanation: 'நடுப்புள்ளி = ((3 + p)/2, 11/2); பிரதியிட: (3 + p) + 11 + 1 = 0; p = −15.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 5.3.4, p. 208', answer: 0,
    en: { q: 'The mid-points of the sides of a triangle are (2, 4), (−2, 3) and (5, 2). The vertices of the triangle are', options: ['(9, 3), (−5, 5), (1, 1)', '(1, 3), (−5, 5), (9, 1)', '(9, 3), (5, −5), (1, 1)', '(3, 9), (5, −5), (1, 1)'], explanation: 'Each vertex = sum of the two adjacent mid-points minus the opposite one: (−2 + 5 − 2, 3 + 2 − 4) etc., giving (9, 3), (−5, 5), (1, 1).' },
    ta: { q: 'ஒரு முக்கோணத்தின் பக்கங்களின் நடுப்புள்ளிகள் (2, 4), (−2, 3), (5, 2) எனில் அந்த முக்கோணத்தின் முனைகளின் ஆயத்தொலைவுகள்', options: ['(9, 3), (−5, 5), (1, 1)', '(1, 3), (−5, 5), (9, 1)', '(9, 3), (5, −5), (1, 1)', '(3, 9), (5, −5), (1, 1)'], explanation: 'ஒவ்வொரு முனையும் = அடுத்துள்ள இரு நடுப்புள்ளிகளின் கூடுதல் − எதிர் நடுப்புள்ளி; முனைகள் (9, 3), (−5, 5), (1, 1).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 5.3.5, p. 208', answer: 0,
    en: { q: 'O(0, 0) is the centre of a circle with chord AB, where A(8, 6) and B(10, 0). OD is the perpendicular from the centre to AB. The mid-point of OD is', options: ['(9/2, 3/2)', '(9, 3)', '(4, 3)', '(5, 0)'], explanation: 'The perpendicular from the centre bisects the chord, so D = (9, 3); mid-point of OD = (9/2, 3/2).' },
    ta: { q: 'O(0, 0) மையமுடைய வட்டத்தின் நாண் AB; A(8, 6), B(10, 0). மையத்திலிருந்து AB க்கு வரையப்படும் செங்குத்து OD எனில் OD இன் நடுப்புள்ளி', options: ['(9/2, 3/2)', '(9, 3)', '(4, 3)', '(5, 0)'], explanation: 'மையத்திலிருந்து வரையும் செங்குத்து நாணை இருசமக் கூறிடும்; D = (9, 3); OD இன் நடுப்புள்ளி = (9/2, 3/2).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 5.3.6, p. 208', answer: 0,
    en: { q: 'A(−5, 4), B(−1, −2) and C(5, 2) are vertices of an isosceles right triangle with the right angle at B. D such that ABCD is a square is', options: ['(1, 8)', '(9, −4)', '(−11, 0)', '(0, 1)'], explanation: 'Diagonals of a square bisect each other: D = A + C − B = (−5 + 5 + 1, 4 + 2 + 2) = (1, 8).' },
    ta: { q: 'A(−5, 4), B(−1, −2), C(5, 2) ஆனது B இல் செங்கோணம் உடைய இருசமபக்கச் செங்கோண முக்கோணத்தின் உச்சிகள். ABCD ஒரு சதுரம் எனில் D', options: ['(1, 8)', '(9, −4)', '(−11, 0)', '(0, 1)'], explanation: 'சதுரத்தின் மூலைவிட்டங்கள் இருசமக் கூறிடும்: D = A + C − B = (−5 + 5 + 1, 4 + 2 + 2) = (1, 8).' },
  },
  {
    difficulty: 'hard', source: 'Book example 5.18, p. 213', answer: 0,
    en: { q: 'In what ratio does P(−2, 4) divide the line segment joining A(−3, 6) and B(1, −2) internally?', options: ['1 : 3', '3 : 1', '1 : 2', '2 : 3'], explanation: '(m − 3n)/(m + n) = −2 gives 3m = n, so m : n = 1 : 3.' },
    ta: { q: 'A(−3, 6), B(1, −2) ஐ இணைக்கும் கோட்டுத்துண்டை P(−2, 4) உட்புறமாக என்ன விகிதத்தில் பிரிக்கும்?', options: ['1 : 3', '3 : 1', '1 : 2', '2 : 3'], explanation: '(m − 3n)/(m + n) = −2; 3m = n; m : n = 1 : 3.' },
  },
  {
    difficulty: 'hard', source: 'Book example 5.19, p. 213', answer: 0,
    en: { q: 'P(−2, 3) divides the line segment joining A(−3, 5) and B internally in the ratio 1 : 6. B is', options: ['(4, −9)', '(−9, 4)', '(3, −7)', '(−4, 9)'], explanation: '(x₂ − 18)/7 = −2 gives x₂ = 4; (y₂ + 30)/7 = 3 gives y₂ = −9.' },
    ta: { q: 'P(−2, 3) ஆனது A(−3, 5), B ஐ இணைக்கும் கோட்டுத்துண்டை 1 : 6 என்ற விகிதத்தில் உட்புறமாகப் பிரிக்கிறது எனில் B', options: ['(4, −9)', '(−9, 4)', '(3, −7)', '(−4, 9)'], explanation: '(x₂ − 18)/7 = −2; x₂ = 4; (y₂ + 30)/7 = 3; y₂ = −9.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 5.4.2, p. 214', answer: 0,
    en: { q: 'In what ratio does the point P(2, −5) divide the line segment joining A(−3, 5) and B(4, −9)?', options: ['5 : 2', '2 : 5', '1 : 2', '3 : 4'], explanation: '(4m − 3n)/(m + n) = 2 gives 2m = 5n, so m : n = 5 : 2 (the y-coordinates agree).' },
    ta: { q: 'A(−3, 5), B(4, −9) ஐ இணைக்கும் கோட்டுத்துண்டை P(2, −5) என்ன விகிதத்தில் பிரிக்கும்?', options: ['5 : 2', '2 : 5', '1 : 2', '3 : 4'], explanation: '(4m − 3n)/(m + n) = 2; 2m = 5n; m : n = 5 : 2 (y-ஆயத்தொலைவும் ஒத்துப்போகும்).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 5.4.3, p. 214', answer: 0,
    en: { q: 'P lies on the line segment joining A(1, 2) and B(6, 7) such that AP = (2/5)AB. P is', options: ['(3, 4)', '(4, 5)', '(2, 3)', '(7/2, 9/2)'], explanation: 'AP : PB = 2 : 3, so P = ((2 × 6 + 3 × 1)/5, (2 × 7 + 3 × 2)/5) = (3, 4).' },
    ta: { q: 'A(1, 2), B(6, 7) ஐ இணைக்கும் கோட்டுத்துண்டில் AP = (2/5)AB ஆகுமாறு உள்ள புள்ளி P', options: ['(3, 4)', '(4, 5)', '(2, 3)', '(7/2, 9/2)'], explanation: 'AP : PB = 2 : 3; P = ((2 × 6 + 3 × 1)/5, (2 × 7 + 3 × 2)/5) = (3, 4).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 5.4.4, p. 214', answer: 0,
    en: { q: 'The points of trisection of the line segment joining A(−5, 6) and B(4, −3) are', options: ['(−2, 3) and (1, 0)', '(−1/2, 3/2) only', '(−3, 4) and (2, −1)', '(−2, 0) and (1, 3)'], explanation: 'Dividing in 1 : 2 gives (−2, 3); dividing in 2 : 1 gives (1, 0).' },
    ta: { q: 'A(−5, 6), B(4, −3) ஐ இணைக்கும் கோட்டுத்துண்டை மூன்று சமக்கூறிடும் புள்ளிகள்', options: ['(−2, 3) மற்றும் (1, 0)', '(−1/2, 3/2) மட்டும்', '(−3, 4) மற்றும் (2, −1)', '(−2, 0) மற்றும் (1, 3)'], explanation: '1 : 2 விகிதத்தில் பிரிக்க (−2, 3); 2 : 1 விகிதத்தில் பிரிக்க (1, 0).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 5.4.5, p. 214', answer: 0,
    en: { q: 'The line segment joining A(6, 3) and B(−1, −4) is doubled in length by adding half of AB to each end. The new end points are', options: ['(19/2, 13/2) and (−9/2, −15/2)', '(13, 10) and (−8, −11)', '(5/2, −1/2) only', '(9, 6) and (−4, −7)'], explanation: 'Half of AB is the step (7/2, 7/2). Extending: A′ = (6 + 7/2, 3 + 7/2) = (19/2, 13/2) and B′ = (−1 − 7/2, −4 − 7/2) = (−9/2, −15/2).' },
    ta: { q: 'A(6, 3), B(−1, −4) ஐ இணைக்கும் கோட்டுத்துண்டின் ஒவ்வொரு முனையிலும் AB இன் பாதியைச் சேர்த்து நீளம் இருமடங்காக்கப்படுகிறது. புதிய முனைப்புள்ளிகள்', options: ['(19/2, 13/2) மற்றும் (−9/2, −15/2)', '(13, 10) மற்றும் (−8, −11)', '(5/2, −1/2) மட்டும்', '(9, 6) மற்றும் (−4, −7)'], explanation: 'AB இன் பாதி = (7/2, 7/2) நகர்வு. A′ = (6 + 7/2, 3 + 7/2) = (19/2, 13/2); B′ = (−1 − 7/2, −4 − 7/2) = (−9/2, −15/2).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 5.4.7, p. 214', answer: 0,
    en: { q: 'A line segment AB is increased along its length by 25% by producing it to C on the side of B. If A(−2, −3) and B(2, 1), then C is', options: ['(3, 2)', '(4, 3)', '(1, 0)', '(5/2, 3/2)'], explanation: 'BC = ¼AB, so C = B + ¼(B − A) = (2 + 1, 1 + 1) = (3, 2).' },
    ta: { q: 'AB என்ற கோட்டுத்துண்டை B பக்கம் C வரை நீட்டி அதன் நீளம் 25% அதிகரிக்கப்படுகிறது. A(−2, −3), B(2, 1) எனில் C', options: ['(3, 2)', '(4, 3)', '(1, 0)', '(5/2, 3/2)'], explanation: 'BC = ¼AB; C = B + ¼(B − A) = (2 + 1, 1 + 1) = (3, 2).' },
  },
  {
    difficulty: 'hard', source: 'Book example 5.21, p. 217', answer: 0,
    en: { q: 'The centroid of a triangle is (−2, 1) and two of its vertices are (1, −6) and (−5, 2). The third vertex is', options: ['(−2, 7)', '(2, −7)', '(−6, 3)', '(−2, 5)'], explanation: '(1 − 5 + x₃)/3 = −2 gives x₃ = −2; (−6 + 2 + y₃)/3 = 1 gives y₃ = 7.' },
    ta: { q: 'ஒரு முக்கோணத்தின் நடுக்கோட்டு மையம் (−2, 1); இரு முனைப்புள்ளிகள் (1, −6), (−5, 2) எனில் மூன்றாவது முனைப்புள்ளி', options: ['(−2, 7)', '(2, −7)', '(−6, 3)', '(−2, 5)'], explanation: '(1 − 5 + x₃)/3 = −2; x₃ = −2; (−6 + 2 + y₃)/3 = 1; y₃ = 7.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 5.5.2, p. 217', answer: 0,
    en: { q: 'The centroid of a triangle is (4, −2) and two of its vertices are (3, −2) and (5, 2). The third vertex is', options: ['(4, −6)', '(4, 2)', '(12, −6)', '(−4, 6)'], explanation: '(3 + 5 + x)/3 = 4 gives x = 4; (−2 + 2 + y)/3 = −2 gives y = −6.' },
    ta: { q: 'ஒரு முக்கோணத்தின் நடுக்கோட்டு மையம் (4, −2); இரு முனைப்புள்ளிகள் (3, −2), (5, 2) எனில் மூன்றாவது முனைப்புள்ளி', options: ['(4, −6)', '(4, 2)', '(12, −6)', '(−4, 6)'], explanation: '(3 + 5 + x)/3 = 4; x = 4; (−2 + 2 + y)/3 = −2; y = −6.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 5.5.3, p. 217', answer: 0,
    en: { q: 'The length of the median through A of the triangle with vertices A(−1, 3), B(1, −1) and C(5, 1) is', options: ['5 units', '√13 units', '4 units', '25 units'], explanation: 'Mid-point of BC = (3, 0); median = √((3 + 1)² + (0 − 3)²) = √25 = 5.' },
    ta: { q: 'A(−1, 3), B(1, −1), C(5, 1) ஐ முனைப்புள்ளிகளாகக் கொண்ட முக்கோணத்தில் A வழியே செல்லும் நடுக்கோட்டின் நீளம்', options: ['5 அலகுகள்', '√13 அலகுகள்', '4 அலகுகள்', '25 அலகுகள்'], explanation: 'BC இன் நடுப்புள்ளி = (3, 0); நடுக்கோடு = √((3 + 1)² + (0 − 3)²) = √25 = 5.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 5.5.4, p. 217', answer: 0,
    en: { q: 'The vertices of a triangle are (1, 2), (h, −3) and (−4, k), and its centroid is (5, −1). The value of √((h + k)² + (h + 3k)²) is', options: ['20', '16', '12', '√20'], explanation: '(1 + h − 4)/3 = 5 gives h = 18; (2 − 3 + k)/3 = −1 gives k = −2; √(16² + 12²) = √400 = 20.' },
    ta: { q: '(1, 2), (h, −3), (−4, k) ஆகியவை ஒரு முக்கோணத்தின் முனைகள்; நடுக்கோட்டு மையம் (5, −1) எனில் √((h + k)² + (h + 3k)²) இன் மதிப்பு', options: ['20', '16', '12', '√20'], explanation: '(1 + h − 4)/3 = 5; h = 18; (2 − 3 + k)/3 = −1; k = −2; √(16² + 12²) = √400 = 20.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 5.5.5, p. 217', answer: 0,
    en: { q: 'The orthocentre and centroid of a triangle are A(−3, 5) and B(3, 3). If C is the circumcentre and AC is a diameter of a circle, the radius of that circle is', options: ['3√(5/2) units', '3√10 units', '√10 units', '5 units'], explanation: 'G divides HS in 2 : 1, so C = ((3 × 3 + 3)/2, (3 × 3 − 5)/2) = (6, 2); AC = √(81 + 9) = 3√10, radius = 3√10/2 = 3√(5/2).' },
    ta: { q: 'ஒரு முக்கோணத்தின் செங்கோட்டு மையம் A(−3, 5), நடுக்கோட்டு மையம் B(3, 3). C அதன் சுற்றுவட்ட மையம்; AC ஐ விட்டமாகக் கொண்ட வட்டத்தின் ஆரம்', options: ['3√(5/2) அலகுகள்', '3√10 அலகுகள்', '√10 அலகுகள்', '5 அலகுகள்'], explanation: 'G ஆனது HS ஐ 2 : 1 இல் பிரிக்கும்; C = ((3 × 3 + 3)/2, (3 × 3 − 5)/2) = (6, 2); AC = √(81 + 9) = 3√10; ஆரம் = 3√10/2 = 3√(5/2).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 5.5.6, p. 218', answer: 0,
    en: { q: 'ABC is a triangle with vertices A(3, 4), B(−2, −1) and C(5, 3). If G is the centroid and BDCG is a parallelogram, then D is', options: ['(1, 0)', '(2, 2)', '(5, 4)', '(−1, 0)'], explanation: 'G = (2, 2). In BDCG the diagonals BC and DG bisect each other: D = B + C − G = (−2 + 5 − 2, −1 + 3 − 2) = (1, 0).' },
    ta: { q: 'A(3, 4), B(−2, −1), C(5, 3) ஆகியவை முக்கோணம் ABC இன் முனைகள். G நடுக்கோட்டு மையம்; BDCG ஓர் இணைகரம் எனில் D', options: ['(1, 0)', '(2, 2)', '(5, 4)', '(−1, 0)'], explanation: 'G = (2, 2). BDCG இல் மூலைவிட்டங்கள் BC, DG இருசமக் கூறிடும்: D = B + C − G = (−2 + 5 − 2, −1 + 3 − 2) = (1, 0).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 5.5.7, p. 218', answer: 0,
    en: { q: '(3/2, 5), (7, −9/2) and (13/2, −13/2) are the mid-points of the sides of a triangle. The centroid of the triangle is', options: ['(5, −2)', '(15, −6)', '(5, 2)', '(−2, 5)'], explanation: 'The centroid equals the centroid of the mid-point triangle: ((3/2 + 7 + 13/2)/3, (5 − 9/2 − 13/2)/3) = (5, −2).' },
    ta: { q: '(3/2, 5), (7, −9/2), (13/2, −13/2) ஆகியவை ஒரு முக்கோணத்தின் பக்கங்களின் நடுப்புள்ளிகள் எனில் அதன் நடுக்கோட்டு மையம்', options: ['(5, −2)', '(15, −6)', '(5, 2)', '(−2, 5)'], explanation: 'நடுப்புள்ளிகளால் ஆன முக்கோணத்தின் நடுக்கோட்டு மையமே இதுவும்: ((3/2 + 7 + 13/2)/3, (5 − 9/2 − 13/2)/3) = (5, −2).' },
  },
  {
    difficulty: 'hard', source: 'Book thinking corner, p. 217', answer: 0,
    en: { q: 'A triangular plate has vertices A(5, 8), B(2, 4) and C(8, 3). The point at which it balances on a stick (its centre of gravity) is', options: ['(5, 5)', '(5, 7.5)', '(15, 15)', '(3.5, 6)'], explanation: 'The balancing point is the centroid: ((5 + 2 + 8)/3, (8 + 4 + 3)/3) = (5, 5).' },
    ta: { q: 'ஒரு முக்கோணத் தட்டின் முனைகள் A(5, 8), B(2, 4), C(8, 3). குச்சியின் மேல் அது சமநிலையில் நிற்கும் புள்ளி (புவிஈர்ப்பு மையம்)', options: ['(5, 5)', '(5, 7.5)', '(15, 15)', '(3.5, 6)'], explanation: 'சமநிலைப் புள்ளி நடுக்கோட்டு மையம்: ((5 + 2 + 8)/3, (8 + 4 + 3)/3) = (5, 5).' },
  },
  {
    difficulty: 'hard', source: 'Book progress check (i), p. 210', answer: 0,
    en: { q: 'The points of trisection of the line segment joining (4, −1) and (−2, −3) are', options: ['(2, −5/3) and (0, −7/3)', '(1, −2) only', '(2, −5/3) and (−1, −7/3)', '(0, −5/3) and (2, −7/3)'], explanation: '1 : 2 gives ((−2 + 8)/3, (−3 − 2)/3) = (2, −5/3); 2 : 1 gives ((−4 + 4)/3, (−6 − 1)/3) = (0, −7/3).' },
    ta: { q: '(4, −1), (−2, −3) ஐ இணைக்கும் கோட்டுத்துண்டை மூன்று சமக்கூறிடும் புள்ளிகள்', options: ['(2, −5/3) மற்றும் (0, −7/3)', '(1, −2) மட்டும்', '(2, −5/3) மற்றும் (−1, −7/3)', '(0, −5/3) மற்றும் (2, −7/3)'], explanation: '1 : 2 → ((−2 + 8)/3, (−3 − 2)/3) = (2, −5/3); 2 : 1 → ((−4 + 4)/3, (−6 − 1)/3) = (0, −7/3).' },
  },
  {
    difficulty: 'hard', source: '§5.3.4, p. 197', answer: 0,
    en: { q: 'Assertion (A): The points (2, 3), (4, 6) and (6, 9) are collinear.\nReason (R): Three points A, B, C are collinear if AB + BC = AC.', options: AR_EN, explanation: 'AB = BC = √13 and AC = √52 = 2√13, so AB + BC = AC; R is the test that proves A.' },
    ta: { q: 'கூற்று (A): (2, 3), (4, 6), (6, 9) ஆகிய புள்ளிகள் ஒரே நேர்க்கோட்டில் அமையும்.\nகாரணம் (R): AB + BC = AC எனில் A, B, C ஒரே நேர்க்கோட்டில் அமையும்.', options: AR_TA, explanation: 'AB = BC = √13, AC = √52 = 2√13; AB + BC = AC; R என்ற சோதனையே A ஐ நிரூபிக்கிறது.' },
  },
  {
    difficulty: 'hard', source: '§5.2.1 Note, p. 190', answer: 3,
    en: { q: 'Assertion (A): The point (−3, 0) lies on the y-axis.\nReason (R): For any point on the x-axis, the ordinate is zero.', options: AR_EN, explanation: 'A is false: (−3, 0) has ordinate 0, so it lies on the x-axis. R is true.' },
    ta: { q: 'கூற்று (A): (−3, 0) என்ற புள்ளி y-அச்சின் மீது அமையும்.\nகாரணம் (R): x-அச்சின் மீதுள்ள எந்தப் புள்ளியின் செங்குத்து அச்சுத் தொலைவும் பூச்சியம்.', options: AR_TA, explanation: 'A தவறு: (−3, 0) இன் செங்குத்து அச்சுத் தொலைவு 0; எனவே அது x-அச்சின் மீது அமையும். R சரி.' },
  },
  {
    difficulty: 'hard', source: '§5.2.1, p. 190', answer: 0,
    en: { q: 'Consider the point (0, −4):\n(i) It lies on the y-axis.\n(ii) Its abscissa is 0.\n(iii) It lies in the IV quadrant.\nWhich statements are correct?', options: ['(i) and (ii) only', '(ii) and (iii) only', '(i) and (iii) only', '(i), (ii) and (iii)'], explanation: 'With abscissa 0 the point is on the y-axis; points on an axis belong to no quadrant.' },
    ta: { q: '(0, −4) என்ற புள்ளி:\n(i) y-அச்சின் மீது அமையும்.\n(ii) அதன் கிடை அச்சுத் தொலைவு 0.\n(iii) அது IV ஆம் காற்பகுதியில் அமையும்.\nசரியான கூற்றுகள் எவை?', options: ['(i), (ii) மட்டும்', '(ii), (iii) மட்டும்', '(i), (iii) மட்டும்', '(i), (ii), (iii)'], explanation: 'கிடை அச்சுத் தொலைவு 0 என்பதால் புள்ளி y-அச்சின் மீது உள்ளது; அச்சின் மீதுள்ள புள்ளிகள் எந்தக் காற்பகுதியையும் சாராது.' },
  },
];
