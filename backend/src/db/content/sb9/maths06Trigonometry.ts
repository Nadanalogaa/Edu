// Tamil Nadu State Board, 9th Mathematics, Unit 6 – Trigonometry (முக்கோணவியல்).
// Book exercises, examples and thinking corners converted to MCQs (answers checked
// against the book's answer key), plus our own questions so every section is covered.
// Tamil wording follows the terms used in the Tamil-medium textbook.
// source = section / exercise and printed page of the English-medium book.

import { BankQuestion, AR_EN, AR_TA } from './types';

const IMG = '/content/9/state_board/maths/06';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: '§6.1, p. 222', answer: 0,
    en: { q: 'The word trigonometry comes from the Greek words trigonon and metron, meaning', options: ['triangle and measure', 'angle and circle', 'three and line', 'triangle and draw'], explanation: 'Trigonometry studies the relationships between the sides and angles of triangles: trigonon = triangle, metron = measure.' },
    ta: { q: 'Trigonometry என்ற சொல் trigonon, metron என்ற கிரேக்கச் சொற்களிலிருந்து வந்தது. இவற்றின் பொருள்', options: ['முக்கோணம் மற்றும் அளவீடு', 'கோணம் மற்றும் வட்டம்', 'மூன்று மற்றும் கோடு', 'முக்கோணம் மற்றும் வரைதல்'], explanation: 'முக்கோணவியல் முக்கோணத்தின் பக்கங்கள், கோணங்கள் இடையேயான தொடர்புகளைப் படிக்கிறது: trigonon = முக்கோணம், metron = அளவீடு.' },
  },
  {
    difficulty: 'easy', source: '§6.1, p. 223', answer: 0,
    en: { q: 'In a right-angled triangle, sin θ is equal to', options: ['opposite side ÷ hypotenuse', 'adjacent side ÷ hypotenuse', 'opposite side ÷ adjacent side', 'hypotenuse ÷ opposite side'], explanation: 'sin θ = opposite side ÷ hypotenuse; cos θ uses the adjacent side and tan θ = opposite ÷ adjacent.' },
    ta: { q: 'செங்கோண முக்கோணத்தில் sin θ என்பது', options: ['எதிர்ப்பக்கம் ÷ கர்ணம்', 'அடுத்துள்ள பக்கம் ÷ கர்ணம்', 'எதிர்ப்பக்கம் ÷ அடுத்துள்ள பக்கம்', 'கர்ணம் ÷ எதிர்ப்பக்கம்'], explanation: 'sin θ = எதிர்ப்பக்கம் ÷ கர்ணம்; cos θ இல் அடுத்துள்ள பக்கம்; tan θ = எதிர்ப்பக்கம் ÷ அடுத்துள்ள பக்கம்.' },
  },
  {
    difficulty: 'easy', source: '§6.1, p. 223', answer: 0,
    en: { q: 'In a right-angled triangle, tan θ is equal to', options: ['opposite side ÷ adjacent side', 'adjacent side ÷ opposite side', 'opposite side ÷ hypotenuse', 'hypotenuse ÷ adjacent side'], explanation: 'tan θ = opposite side ÷ adjacent side.' },
    ta: { q: 'செங்கோண முக்கோணத்தில் tan θ என்பது', options: ['எதிர்ப்பக்கம் ÷ அடுத்துள்ள பக்கம்', 'அடுத்துள்ள பக்கம் ÷ எதிர்ப்பக்கம்', 'எதிர்ப்பக்கம் ÷ கர்ணம்', 'கர்ணம் ÷ அடுத்துள்ள பக்கம்'], explanation: 'tan θ = எதிர்ப்பக்கம் ÷ அடுத்துள்ள பக்கம்.' },
  },
  {
    difficulty: 'easy', source: '§6.1, p. 225', answer: 0,
    en: { q: 'The reciprocal of sin θ is', options: ['cosec θ', 'sec θ', 'cot θ', 'cos θ'], explanation: 'cosec θ = hypotenuse ÷ opposite side = 1 ÷ sin θ.' },
    ta: { q: 'sin θ இன் தலைகீழ் விகிதம்', options: ['cosec θ', 'sec θ', 'cot θ', 'cos θ'], explanation: 'cosec θ = கர்ணம் ÷ எதிர்ப்பக்கம் = 1 ÷ sin θ.' },
  },
  {
    difficulty: 'easy', source: '§6.1, p. 225', answer: 0,
    en: { q: 'The value of cos θ × sec θ is', options: ['1', '0', 'cos² θ', '2'], explanation: 'sec θ = 1 ÷ cos θ, so cos θ sec θ = 1.' },
    ta: { q: 'cos θ × sec θ இன் மதிப்பு', options: ['1', '0', 'cos² θ', '2'], explanation: 'sec θ = 1 ÷ cos θ; எனவே cos θ sec θ = 1.' },
  },
  {
    difficulty: 'easy', source: '§6.1 Note, p. 224', answer: 0,
    en: { q: 'Trigonometric ratios are', options: ['unitless numbers', 'measured in degrees', 'measured in centimetres', 'measured in square units'], explanation: 'They are ratios of two lengths, so the units cancel.' },
    ta: { q: 'முக்கோணவியல் விகிதங்கள்', options: ['அலகு இல்லாத எண்கள்', 'பாகைகளில் அளக்கப்படுபவை', 'சென்டிமீட்டரில் அளக்கப்படுபவை', 'சதுர அலகுகளில் அளக்கப்படுபவை'], explanation: 'இவை இரு நீளங்களின் விகிதங்கள்; எனவே அலகுகள் நீங்கிவிடும்.' },
  },
  {
    difficulty: 'easy', source: '§6.2.2, p. 229', answer: 0,
    en: { q: 'The value of sin 30° is', options: ['1/2', '√3/2', '1/√2', '1'], explanation: 'In the 30°–60°–90° triangle with sides 1, √3, 2: sin 30° = 1/2.' },
    ta: { q: 'sin 30° இன் மதிப்பு', options: ['1/2', '√3/2', '1/√2', '1'], explanation: '1, √3, 2 பக்கங்கள் கொண்ட 30°–60°–90° முக்கோணத்தில் sin 30° = 1/2.' },
  },
  {
    difficulty: 'easy', source: '§6.2.1, p. 228', answer: 0,
    en: { q: 'The value of tan 45° is', options: ['1', '0', '√3', '1/√2'], explanation: 'In the isosceles right triangle both legs are a, so tan 45° = a ÷ a = 1.' },
    ta: { q: 'tan 45° இன் மதிப்பு', options: ['1', '0', '√3', '1/√2'], explanation: 'இருசமபக்கச் செங்கோண முக்கோணத்தில் இரு பக்கங்களும் a; tan 45° = a ÷ a = 1.' },
  },
  {
    difficulty: 'easy', source: '§6.2.3, p. 230', answer: 0,
    en: { q: 'The value of cos 90° is', options: ['0', '1', 'not defined', '1/2'], explanation: 'At 90° the point on the unit circle is (0, 1), so cos 90° = x = 0.' },
    ta: { q: 'cos 90° இன் மதிப்பு', options: ['0', '1', 'வரையறுக்கப்படவில்லை', '1/2'], explanation: '90° இல் அலகு வட்டத்தின் புள்ளி (0, 1); எனவே cos 90° = x = 0.' },
  },
  {
    difficulty: 'easy', source: '§6.2.3, p. 230', answer: 0,
    en: { q: 'Which trigonometric ratio is not defined at 90°?', options: ['tan 90°', 'sin 90°', 'cos 90°', 'cot 90°'], explanation: 'tan 90° = 1 ÷ 0, which is not defined (sec 90° is also not defined).' },
    ta: { q: '90° இல் எந்த முக்கோணவியல் விகிதம் வரையறுக்கப்படவில்லை?', options: ['tan 90°', 'sin 90°', 'cos 90°', 'cot 90°'], explanation: 'tan 90° = 1 ÷ 0; இது வரையறுக்கப்படவில்லை (sec 90° உம் வரையறுக்கப்படவில்லை).' },
  },
  {
    difficulty: 'easy', source: '§6.3, p. 233', answer: 0,
    en: { q: 'For an acute angle θ, sin θ is equal to', options: ['cos(90° − θ)', 'sin(90° − θ)', 'tan(90° − θ)', 'sec(90° − θ)'], explanation: 'The two acute angles of a right triangle are complementary, so sin θ = cos(90° − θ).' },
    ta: { q: 'குறுங்கோணம் θ க்கு sin θ என்பது', options: ['cos(90° − θ)', 'sin(90° − θ)', 'tan(90° − θ)', 'sec(90° − θ)'], explanation: 'செங்கோண முக்கோணத்தின் இரு குறுங்கோணங்களும் நிரப்புக் கோணங்கள்; எனவே sin θ = cos(90° − θ).' },
  },
  {
    difficulty: 'easy', source: 'Book example 6.7, p. 233', answer: 0,
    en: { q: 'sin 74° expressed in terms of cosine is', options: ['cos 16°', 'cos 74°', 'cos 26°', 'cos 106°'], explanation: 'sin 74° = sin(90° − 16°) = cos 16°.' },
    ta: { q: 'sin 74° ஐ cosine இல் மாற்றினால்', options: ['cos 16°', 'cos 74°', 'cos 26°', 'cos 106°'], explanation: 'sin 74° = sin(90° − 16°) = cos 16°.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 6.5.2, p. 239', answer: 0,
    en: { q: 'If tan θ = cot 37°, then θ is', options: ['53°', '37°', '90°', '1°'], explanation: 'cot 37° = tan(90° − 37°) = tan 53°, so θ = 53°.' },
    ta: { q: 'tan θ = cot 37° எனில் θ இன் மதிப்பு', options: ['53°', '37°', '90°', '1°'], explanation: 'cot 37° = tan(90° − 37°) = tan 53°; எனவே θ = 53°.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 6.5.3, p. 239', answer: 0,
    en: { q: 'The value of tan 72° tan 18° is', options: ['1', '0', '18°', '72°'], explanation: 'tan 72° = cot 18°, and cot 18° × tan 18° = 1.' },
    ta: { q: 'tan 72° tan 18° இன் மதிப்பு', options: ['1', '0', '18°', '72°'], explanation: 'tan 72° = cot 18°; cot 18° × tan 18° = 1.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 6.5.7, p. 240', answer: 0,
    en: { q: 'The value of (1 − tan² 45°) ÷ (1 + tan² 45°) is', options: ['0', '1', '2', '1/2'], explanation: 'tan 45° = 1, so (1 − 1) ÷ (1 + 1) = 0.' },
    ta: { q: '(1 − tan² 45°) ÷ (1 + tan² 45°) இன் மதிப்பு', options: ['0', '1', '2', '1/2'], explanation: 'tan 45° = 1; (1 − 1) ÷ (1 + 1) = 0.' },
  },
  {
    difficulty: 'easy', source: '§6.4, p. 235', answer: 0,
    en: { q: 'One degree (1°) is divided into', options: ['60 minutes', '100 minutes', '60 seconds', '360 minutes'], explanation: '1° = 60′ (minutes) and 1′ = 60″ (seconds).' },
    ta: { q: 'ஒரு பாகை (1°) என்பது', options: ['60 கலைகள்', '100 கலைகள்', '60 விகலைகள்', '360 கலைகள்'], explanation: '1° = 60′ (கலை), 1′ = 60″ (விகலை).' },
  },
  {
    difficulty: 'easy', source: '§6.4, p. 236', answer: 0,
    en: { q: 'When using trigonometric tables, the mean difference is', options: ['added for sine and tangent, subtracted for cosine', 'added for cosine, subtracted for sine', 'always added', 'always subtracted'], explanation: 'sine and tangent increase with the angle, cosine decreases, so the mean difference is subtracted for cosine.' },
    ta: { q: 'முக்கோணவியல் அட்டவணையைப் பயன்படுத்தும்போது பொது வித்தியாசம்', options: ['sine, tangent க்குக் கூட்டப்படும்; cosine க்குக் கழிக்கப்படும்', 'cosine க்குக் கூட்டப்படும்; sine க்குக் கழிக்கப்படும்', 'எப்போதும் கூட்டப்படும்', 'எப்போதும் கழிக்கப்படும்'], explanation: 'கோணம் அதிகரிக்கும்போது sine, tangent அதிகரிக்கும், cosine குறையும்; எனவே cosine க்குப் பொது வித்தியாசம் கழிக்கப்படும்.' },
  },
  {
    difficulty: 'easy', source: '§6.3 Thinking corner, p. 235', answer: 0,
    en: { q: 'For 0° ≤ θ ≤ 90°, the maximum value of sin θ is', options: ['1', '0', '1/2', 'not defined'], explanation: 'sin θ rises from sin 0° = 0 to sin 90° = 1.' },
    ta: { q: '0° ≤ θ ≤ 90° க்கு sin θ இன் மீப்பெரு மதிப்பு', options: ['1', '0', '1/2', 'வரையறுக்கப்படவில்லை'], explanation: 'sin θ ஆனது sin 0° = 0 இலிருந்து sin 90° = 1 வரை அதிகரிக்கும்.' },
  },

  // ------------------------------------------------------------------ Medium
  {
    difficulty: 'medium', source: 'Book exercise 6.1.1, p. 227', answer: 0,
    en: { q: 'In right ΔABC, ∠A = 90°, AB = 40, AC = 9 and BC = 41. Then sin B and cos B are', options: ['9/41 and 40/41', '40/41 and 9/41', '9/40 and 40/41', '41/9 and 41/40'], explanation: 'For angle B, the opposite side is AC = 9 and the adjacent side is AB = 40, with hypotenuse 41.' },
    ta: { q: 'செங்கோண ΔABC இல் ∠A = 90°, AB = 40, AC = 9, BC = 41 எனில் sin B, cos B', options: ['9/41, 40/41', '40/41, 9/41', '9/40, 40/41', '41/9, 41/40'], explanation: 'கோணம் B க்கு எதிர்ப்பக்கம் AC = 9, அடுத்துள்ள பக்கம் AB = 40, கர்ணம் 41.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 6.1.1, p. 227', answer: 0,
    en: { q: 'In right ΔABC, ∠A = 90°, AB = 40, AC = 9 and BC = 41. Then tan B and cot B are', options: ['9/40 and 40/9', '40/9 and 9/40', '9/41 and 41/9', '41/40 and 40/41'], explanation: 'tan B = opposite ÷ adjacent = 9/40, and cot B is its reciprocal, 40/9.' },
    ta: { q: 'செங்கோண ΔABC இல் ∠A = 90°, AB = 40, AC = 9, BC = 41 எனில் tan B, cot B', options: ['9/40, 40/9', '40/9, 9/40', '9/41, 41/9', '41/40, 40/41'], explanation: 'tan B = எதிர்ப்பக்கம் ÷ அடுத்துள்ள பக்கம் = 9/40; cot B அதன் தலைகீழ் 40/9.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 6.1.2, p. 227', answer: 0, imageUrl: `${IMG}/ex6-1-triangle-altitude.png`,
    en: { q: 'From the figure (AD ⊥ BC, AB = 13, BD = 5, DC = 16), find sin B and sec B.', options: ['12/13 and 13/5', '5/13 and 13/12', '12/13 and 13/12', '12/5 and 5/13'], explanation: 'AD = √(13² − 5²) = 12, so sin B = 12/13 and sec B = 13/5.' },
    ta: { q: 'படத்திலிருந்து (AD ⊥ BC, AB = 13, BD = 5, DC = 16) sin B, sec B காண்க.', options: ['12/13, 13/5', '5/13, 13/12', '12/13, 13/12', '12/5, 5/13'], explanation: 'AD = √(13² − 5²) = 12; sin B = 12/13, sec B = 13/5.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 6.1.2, p. 227', answer: 0, imageUrl: `${IMG}/ex6-1-triangle-altitude.png`,
    en: { q: 'From the figure (AD ⊥ BC, AB = 13, BD = 5, DC = 16), find cos C, tan C and cosec C.', options: ['4/5, 3/4, 5/3', '3/5, 4/3, 5/4', '4/5, 4/3, 5/3', '16/13, 12/16, 13/12'], explanation: 'AD = 12 and AC = √(12² + 16²) = 20, so cos C = 16/20 = 4/5, tan C = 12/16 = 3/4 and cosec C = 20/12 = 5/3.' },
    ta: { q: 'படத்திலிருந்து (AD ⊥ BC, AB = 13, BD = 5, DC = 16) cos C, tan C, cosec C காண்க.', options: ['4/5, 3/4, 5/3', '3/5, 4/3, 5/4', '4/5, 4/3, 5/3', '16/13, 12/16, 13/12'], explanation: 'AD = 12, AC = √(12² + 16²) = 20; cos C = 16/20 = 4/5, tan C = 12/16 = 3/4, cosec C = 20/12 = 5/3.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 6.1.3, p. 227', answer: 0,
    en: { q: 'If 2 cos θ = √3, then tan θ is', options: ['1/√3', '√3', '1/2', '2/√3'], explanation: 'cos θ = √3/2, so the sides are √3, 1, 2: sin θ = 1/2 and tan θ = 1/√3.' },
    ta: { q: '2 cos θ = √3 எனில் tan θ இன் மதிப்பு', options: ['1/√3', '√3', '1/2', '2/√3'], explanation: 'cos θ = √3/2; பக்கங்கள் √3, 1, 2; sin θ = 1/2, tan θ = 1/√3.' },
  },
  {
    difficulty: 'medium', source: 'Book example 6.1, p. 224', answer: 0,
    en: { q: 'In right ΔPQR, ∠P = 90°, PR = 35, PQ = 12 and QR = 37. For θ = ∠Q, sin θ is', options: ['35/37', '12/37', '35/12', '37/35'], explanation: 'PR is opposite θ and QR is the hypotenuse, so sin θ = 35/37 (cos θ = 12/37, tan θ = 35/12).' },
    ta: { q: 'செங்கோண ΔPQR இல் ∠P = 90°, PR = 35, PQ = 12, QR = 37. θ = ∠Q எனில் sin θ', options: ['35/37', '12/37', '35/12', '37/35'], explanation: 'θ க்கு எதிர்ப்பக்கம் PR, கர்ணம் QR; sin θ = 35/37 (cos θ = 12/37, tan θ = 35/12).' },
  },
  {
    difficulty: 'medium', source: 'Book example 6.2, p. 225', answer: 0,
    en: { q: 'In right ΔABC, ∠A = 90°, AC = 7 and BC = 25. For θ = ∠B, tan θ is', options: ['7/24', '24/7', '7/25', '25/24'], explanation: 'AB = √(25² − 7²) = 24, so tan θ = opposite ÷ adjacent = 7/24.' },
    ta: { q: 'செங்கோண ΔABC இல் ∠A = 90°, AC = 7, BC = 25. θ = ∠B எனில் tan θ', options: ['7/24', '24/7', '7/25', '25/24'], explanation: 'AB = √(25² − 7²) = 24; tan θ = எதிர்ப்பக்கம் ÷ அடுத்துள்ள பக்கம் = 7/24.' },
  },
  {
    difficulty: 'medium', source: 'Book example 6.3, p. 226', answer: 0,
    en: { q: 'If tan A = 2/3, then sin A is', options: ['2/√13', '3/√13', '2/3', '√13/2'], explanation: 'Take opposite 2, adjacent 3; hypotenuse = √(9 + 4) = √13, so sin A = 2/√13.' },
    ta: { q: 'tan A = 2/3 எனில் sin A இன் மதிப்பு', options: ['2/√13', '3/√13', '2/3', '√13/2'], explanation: 'எதிர்ப்பக்கம் 2, அடுத்துள்ள பக்கம் 3; கர்ணம் = √(9 + 4) = √13; sin A = 2/√13.' },
  },
  {
    difficulty: 'medium', source: 'Book thinking corner, p. 224', answer: 0,
    en: { q: 'Triangles ABC, DEF and GHI have sides 3-4-5, 6-8-10 and 12-16-20, each with angle θ opposite the shortest side. In ΔDEF, sin θ is', options: ['3/5', '6/8', '4/5', '10/6'], explanation: 'sin θ = 6/10 = 3/5, the same as 3/5 in ΔABC and 12/20 in ΔGHI: the ratio does not depend on the size of the triangle.' },
    ta: { q: 'ΔABC, ΔDEF, ΔGHI இன் பக்கங்கள் 3-4-5, 6-8-10, 12-16-20; ஒவ்வொன்றிலும் மிகச் சிறிய பக்கத்திற்கு எதிரே கோணம் θ. ΔDEF இல் sin θ', options: ['3/5', '6/8', '4/5', '10/6'], explanation: 'sin θ = 6/10 = 3/5; இது ΔABC இல் 3/5, ΔGHI இல் 12/20 க்குச் சமம்: விகிதம் முக்கோணத்தின் அளவைச் சார்ந்தது அல்ல.' },
  },
  {
    difficulty: 'medium', source: '§6.1, p. 223', answer: 0,
    en: { q: 'In right triangles with a 35° angle, opposite side ÷ adjacent side is 0.7. If the side opposite 35° is 10.5 units, the adjacent side x is', options: ['15 units', '7.35 units', '10.5 units', '17.5 units'], explanation: '10.5 ÷ x = 0.7, so x = 10.5 ÷ 0.7 = 15.' },
    ta: { q: '35° கோணம் உடைய செங்கோண முக்கோணங்களில் எதிர்ப்பக்கம் ÷ அடுத்துள்ள பக்கம் = 0.7. 35° இன் எதிர்ப்பக்கம் 10.5 அலகுகள் எனில் அடுத்துள்ள பக்கம் x', options: ['15 அலகுகள்', '7.35 அலகுகள்', '10.5 அலகுகள்', '17.5 அலகுகள்'], explanation: '10.5 ÷ x = 0.7; x = 10.5 ÷ 0.7 = 15.' },
  },
  {
    difficulty: 'medium', source: 'Book example 6.5(i), p. 231', answer: 0,
    en: { q: 'The value of sin 30° + cos 30° is', options: ['(1 + √3)/2', '1', '(1 + √2)/2', '√3'], explanation: '1/2 + √3/2 = (1 + √3)/2.' },
    ta: { q: 'sin 30° + cos 30° இன் மதிப்பு', options: ['(1 + √3)/2', '1', '(1 + √2)/2', '√3'], explanation: '1/2 + √3/2 = (1 + √3)/2.' },
  },
  {
    difficulty: 'medium', source: 'Book example 6.5(iii), p. 231', answer: 0,
    en: { q: 'The value of tan 45° ÷ (tan 30° + tan 60°) is', options: ['√3/4', '4/√3', '1/2', '√3'], explanation: 'tan 30° + tan 60° = 1/√3 + √3 = 4/√3, so 1 ÷ (4/√3) = √3/4.' },
    ta: { q: 'tan 45° ÷ (tan 30° + tan 60°) இன் மதிப்பு', options: ['√3/4', '4/√3', '1/2', '√3'], explanation: 'tan 30° + tan 60° = 1/√3 + √3 = 4/√3; 1 ÷ (4/√3) = √3/4.' },
  },
  {
    difficulty: 'medium', source: 'Book example 6.5(iv), p. 231', answer: 0,
    en: { q: 'The value of sin² 45° + cos² 45° is', options: ['1', '1/2', '2', '0'], explanation: '(1/√2)² + (1/√2)² = 1/2 + 1/2 = 1.' },
    ta: { q: 'sin² 45° + cos² 45° இன் மதிப்பு', options: ['1', '1/2', '2', '0'], explanation: '(1/√2)² + (1/√2)² = 1/2 + 1/2 = 1.' },
  },
  {
    difficulty: 'medium', source: 'Book example 6.5(ii), p. 231', answer: 0,
    en: { q: 'The value of tan 60° cot 60° is', options: ['1', '3', '√3', '1/3'], explanation: '√3 × 1/√3 = 1 (tan and cot of the same angle are reciprocals).' },
    ta: { q: 'tan 60° cot 60° இன் மதிப்பு', options: ['1', '3', '√3', '1/3'], explanation: '√3 × 1/√3 = 1 (ஒரே கோணத்தின் tan, cot தலைகீழிகள்).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 6.2.2(i), p. 232', answer: 0,
    en: { q: 'The value of tan 45°/cosec 30° + sec 60°/cot 45° − 5 sin 90°/(2 cos 0°) is', options: ['0', '1', '7/4', '−1'], explanation: '1/2 + 2/1 − 5/2 = 0.' },
    ta: { q: 'tan 45°/cosec 30° + sec 60°/cot 45° − 5 sin 90°/(2 cos 0°) இன் மதிப்பு', options: ['0', '1', '7/4', '−1'], explanation: '1/2 + 2/1 − 5/2 = 0.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 6.2.2(iii), p. 232', answer: 0,
    en: { q: 'The value of sin² 30° − 2 cos³ 60° + 3 tan⁴ 45° is', options: ['3', '1', '5/2', '13/4'], explanation: '1/4 − 2 × 1/8 + 3 × 1 = 1/4 − 1/4 + 3 = 3.' },
    ta: { q: 'sin² 30° − 2 cos³ 60° + 3 tan⁴ 45° இன் மதிப்பு', options: ['3', '1', '5/2', '13/4'], explanation: '1/4 − 2 × 1/8 + 3 × 1 = 1/4 − 1/4 + 3 = 3.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 6.2.4, p. 232', answer: 0,
    en: { q: 'The value of 8 sin 2x cos 4x sin 6x when x = 15° is', options: ['2', '1', '4', '√3'], explanation: '8 × sin 30° × cos 60° × sin 90° = 8 × 1/2 × 1/2 × 1 = 2.' },
    ta: { q: 'x = 15° எனில் 8 sin 2x cos 4x sin 6x இன் மதிப்பு', options: ['2', '1', '4', '√3'], explanation: '8 × sin 30° × cos 60° × sin 90° = 8 × 1/2 × 1/2 × 1 = 2.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 6.2.1(iii), p. 232', answer: 0,
    en: { q: 'The value of 1 − 2 sin² 45° is', options: ['0', '1', '1/2', '−1'], explanation: '1 − 2 × 1/2 = 0, which equals cos 90° and 2 cos² 45° − 1.' },
    ta: { q: '1 − 2 sin² 45° இன் மதிப்பு', options: ['0', '1', '1/2', '−1'], explanation: '1 − 2 × 1/2 = 0; இது cos 90°, 2 cos² 45° − 1 க்குச் சமம்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 6.5.1, p. 239', answer: 0,
    en: { q: 'If sin 30° = x and cos 60° = y, then x² + y² is', options: ['1/2', '0', 'sin 90°', 'cos 90°'], explanation: 'x = y = 1/2, so x² + y² = 1/4 + 1/4 = 1/2.' },
    ta: { q: 'sin 30° = x, cos 60° = y எனில் x² + y² இன் மதிப்பு', options: ['1/2', '0', 'sin 90°', 'cos 90°'], explanation: 'x = y = 1/2; x² + y² = 1/4 + 1/4 = 1/2.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 6.5.4, p. 239', answer: 0,
    en: { q: 'The value of 2 tan 30° ÷ (1 − tan² 30°) is equal to', options: ['tan 60°', 'cos 60°', 'sin 60°', 'sin 30°'], explanation: '(2/√3) ÷ (1 − 1/3) = (2/√3) × (3/2) = √3 = tan 60°.' },
    ta: { q: '2 tan 30° ÷ (1 − tan² 30°) இன் மதிப்பு', options: ['tan 60°', 'cos 60°', 'sin 60°', 'sin 30°'], explanation: '(2/√3) ÷ (1 − 1/3) = (2/√3) × (3/2) = √3 = tan 60°.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 6.5.5, p. 240', answer: 0,
    en: { q: 'If 2 sin 2θ = √3, then θ is', options: ['30°', '60°', '45°', '90°'], explanation: 'sin 2θ = √3/2 = sin 60°, so 2θ = 60° and θ = 30°.' },
    ta: { q: '2 sin 2θ = √3 எனில் θ இன் மதிப்பு', options: ['30°', '60°', '45°', '90°'], explanation: 'sin 2θ = √3/2 = sin 60°; 2θ = 60°; θ = 30°.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 6.5.9, p. 240', answer: 0,
    en: { q: 'The value of tan 1° tan 2° tan 3° … tan 89° is', options: ['1', '0', '2', '√3/2'], explanation: 'Pair tan θ with tan(90° − θ) = cot θ: each pair gives 1, and the middle term tan 45° = 1.' },
    ta: { q: 'tan 1° tan 2° tan 3° … tan 89° இன் மதிப்பு', options: ['1', '0', '2', '√3/2'], explanation: 'tan θ ஐ tan(90° − θ) = cot θ உடன் இணைக்க ஒவ்வொரு சோடியும் 1; நடு உறுப்பு tan 45° = 1.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 6.5.10, p. 240', answer: 0,
    en: { q: 'If sin α = 1/2 and cos β = 1/2, then α + β is', options: ['90°', '60°', '30°', '0°'], explanation: 'α = 30° and β = 60°, so α + β = 90°.' },
    ta: { q: 'sin α = 1/2, cos β = 1/2 எனில் α + β இன் மதிப்பு', options: ['90°', '60°', '30°', '0°'], explanation: 'α = 30°, β = 60°; α + β = 90°.' },
  },
  {
    difficulty: 'medium', source: 'Book example 6.8, p. 234', answer: 0,
    en: { q: 'The value of sin 49° ÷ cos 41° is', options: ['1', '0', 'tan 49°', '49/41'], explanation: '49° + 41° = 90°, so sin 49° = cos 41° and the ratio is 1.' },
    ta: { q: 'sin 49° ÷ cos 41° இன் மதிப்பு', options: ['1', '0', 'tan 49°', '49/41'], explanation: '49° + 41° = 90°; sin 49° = cos 41°; எனவே விகிதம் 1.' },
  },
  {
    difficulty: 'medium', source: 'Book example 6.10(i), p. 235', answer: 0,
    en: { q: 'If cosec A = sec 34°, then A is', options: ['56°', '34°', '146°', '66°'], explanation: 'cosec A = sec(90° − A), so 90° − A = 34° and A = 56°.' },
    ta: { q: 'cosec A = sec 34° எனில் A இன் மதிப்பு', options: ['56°', '34°', '146°', '66°'], explanation: 'cosec A = sec(90° − A); 90° − A = 34°; A = 56°.' },
  },
  {
    difficulty: 'medium', source: 'Book example 6.10(ii), p. 235', answer: 0,
    en: { q: 'If tan B = cot 47°, then B is', options: ['43°', '47°', '53°', '133°'], explanation: 'tan B = cot(90° − B), so 90° − B = 47° and B = 43°.' },
    ta: { q: 'tan B = cot 47° எனில் B இன் மதிப்பு', options: ['43°', '47°', '53°', '133°'], explanation: 'tan B = cot(90° − B); 90° − B = 47°; B = 43°.' },
  },
  {
    difficulty: 'medium', source: 'Book example 6.9(i), p. 234', answer: 0,
    en: { q: 'The value of tan 7° tan 23° tan 60° tan 67° tan 83° is', options: ['√3', '1', '1/√3', '0'], explanation: 'tan 7° tan 83° = 1 and tan 23° tan 67° = 1, leaving tan 60° = √3.' },
    ta: { q: 'tan 7° tan 23° tan 60° tan 67° tan 83° இன் மதிப்பு', options: ['√3', '1', '1/√3', '0'], explanation: 'tan 7° tan 83° = 1, tan 23° tan 67° = 1; மீதம் tan 60° = √3.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 6.4.1(i), p. 239', answer: 0,
    en: { q: 'Using the trigonometric table, sin 49° is', options: ['0.7547', '0.6561', '1.1504', '0.7071'], explanation: 'From the sine table, sin 49° = 0.7547 (0.6561 is cos 49°).' },
    ta: { q: 'அட்டவணையைப் பயன்படுத்தி sin 49° இன் மதிப்பு', options: ['0.7547', '0.6561', '1.1504', '0.7071'], explanation: 'sine அட்டவணையிலிருந்து sin 49° = 0.7547 (0.6561 என்பது cos 49°).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 6.4.1(ii), p. 239', answer: 0,
    en: { q: 'Using the trigonometric table, cos 74°39′ is', options: ['0.2648', '0.9643', '0.2656', '0.2640'], explanation: 'cos 74°36′ = 0.2656, and the mean difference for 3′ (8) is subtracted for cosine: 0.2648.' },
    ta: { q: 'அட்டவணையைப் பயன்படுத்தி cos 74°39′ இன் மதிப்பு', options: ['0.2648', '0.9643', '0.2656', '0.2640'], explanation: 'cos 74°36′ = 0.2656; 3′ க்கான பொது வித்தியாசம் (8) cosine க்குக் கழிக்கப்படும்: 0.2648.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 6.4.1(vi), p. 239', answer: 0,
    en: { q: 'Using the trigonometric table, tan 70°17′ is', options: ['2.7907', '0.3584', '2.7776', '0.9413'], explanation: 'tan 70°12′ = 2.7776; adding the mean difference for 5′ gives 2.7907.' },
    ta: { q: 'அட்டவணையைப் பயன்படுத்தி tan 70°17′ இன் மதிப்பு', options: ['2.7907', '0.3584', '2.7776', '0.9413'], explanation: 'tan 70°12′ = 2.7776; 5′ க்கான பொது வித்தியாசத்தைக் கூட்ட 2.7907.' },
  },
  {
    difficulty: 'medium', source: 'Book example 6.11, p. 236', answer: 0,
    en: { q: 'Given sin 64°30′ = 0.9026 and the mean difference for 4′ is 5, sin 64°34′ is', options: ['0.9031', '0.9021', '0.9030', '0.9526'], explanation: 'For sine the mean difference is added: 0.9026 + 0.0005 = 0.9031.' },
    ta: { q: 'sin 64°30′ = 0.9026; 4′ க்கான பொது வித்தியாசம் 5 எனில் sin 64°34′', options: ['0.9031', '0.9021', '0.9030', '0.9526'], explanation: 'sine க்குப் பொது வித்தியாசம் கூட்டப்படும்: 0.9026 + 0.0005 = 0.9031.' },
  },
  {
    difficulty: 'medium', source: 'Book example 6.12, p. 236', answer: 0,
    en: { q: 'Given cos 19°54′ = 0.9403 and the mean difference for 5′ is 5, cos 19°59′ is', options: ['0.9398', '0.9408', '0.9403', '0.9353'], explanation: 'For cosine the mean difference is subtracted: 0.9403 − 0.0005 = 0.9398.' },
    ta: { q: 'cos 19°54′ = 0.9403; 5′ க்கான பொது வித்தியாசம் 5 எனில் cos 19°59′', options: ['0.9398', '0.9408', '0.9403', '0.9353'], explanation: 'cosine க்குப் பொது வித்தியாசம் கழிக்கப்படும்: 0.9403 − 0.0005 = 0.9398.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 6.4.5, p. 239', answer: 0,
    en: { q: 'A ladder of length 5 m rests against a wall with its foot 4 m away from the wall. The angle the ladder makes with the ground is about', options: ['36°52′', '53°8′', '38°40′', '51°20′'], explanation: 'cos θ = 4/5 = 0.8, and from the cosine table θ ≈ 36°52′.' },
    ta: { q: '5 மீ நீளமுள்ள ஏணி அதன் அடிப்பாகம் சுவரிலிருந்து 4 மீ தொலைவில் இருக்குமாறு சுவரின் மீது சாய்த்து வைக்கப்பட்டுள்ளது. ஏணி தரையுடன் ஏற்படுத்தும் கோணம் ஏறக்குறைய', options: ['36°52′', '53°8′', '38°40′', '51°20′'], explanation: 'cos θ = 4/5 = 0.8; cosine அட்டவணையிலிருந்து θ ≈ 36°52′.' },
  },
  {
    difficulty: 'medium', source: '§6.2 Note, p. 232', answer: 0,
    en: { q: 'In a right triangle with angles 30°, 60° and 90°, the sides opposite these angles are in the ratio', options: ['1 : √3 : 2', '1 : 1 : √2', '1 : 2 : 3', '√3 : 1 : 2'], explanation: 'From the equilateral triangle of side 2 cut in half: sides 1, √3, 2 opposite 30°, 60°, 90°.' },
    ta: { q: '30°, 60°, 90° கோணங்கள் கொண்ட செங்கோண முக்கோணத்தில் இக்கோணங்களுக்கு எதிரே உள்ள பக்கங்களின் விகிதம்', options: ['1 : √3 : 2', '1 : 1 : √2', '1 : 2 : 3', '√3 : 1 : 2'], explanation: 'பக்கம் 2 உடைய சமபக்க முக்கோணத்தை இரண்டாகப் பிரிக்க 30°, 60°, 90° க்கு எதிரே பக்கங்கள் 1, √3, 2.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 6.4.2(iii), p. 239', answer: 0,
    en: { q: 'If tan θ = 0.0720, then θ is about', options: ['4°7′', '4°12′', '85°53′', '0°7′'], explanation: 'From the tangent table, tan 4°6′ = 0.0717 and the mean difference for 1′ gives 0.0720, so θ = 4°7′.' },
    ta: { q: 'tan θ = 0.0720 எனில் θ ஏறக்குறைய', options: ['4°7′', '4°12′', '85°53′', '0°7′'], explanation: 'tangent அட்டவணையில் tan 4°6′ = 0.0717; 1′ க்கான பொது வித்தியாசம் சேர்த்து 0.0720; எனவே θ = 4°7′.' },
  },

  {
    difficulty: 'medium', source: 'Book exercise 6.4.1(iii), p. 239', answer: 0,
    en: { q: 'Using the trigonometric table, tan 54°26′ is', options: ['1.3985', '0.7150', '0.8135', '1.3963'], explanation: 'tan 54°24′ = 1.3968 and the mean difference for 2′ is added for tangent, giving about 1.3985.' },
    ta: { q: 'அட்டவணையைப் பயன்படுத்தி tan 54°26′ இன் மதிப்பு', options: ['1.3985', '0.7150', '0.8135', '1.3963'], explanation: 'tan 54°24′ = 1.3968; tangent க்கு 2′ க்கான பொது வித்தியாசத்தைக் கூட்ட ஏறக்குறைய 1.3985.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 6.4.1(iv), p. 239', answer: 0,
    en: { q: 'Using the trigonometric table, sin 21°21′ is', options: ['0.3641', '0.9314', '0.3907', '0.3624'], explanation: 'From the sine table (adding the mean difference), sin 21°21′ = 0.3641; 0.9314 is cos 21°21′.' },
    ta: { q: 'அட்டவணையைப் பயன்படுத்தி sin 21°21′ இன் மதிப்பு', options: ['0.3641', '0.9314', '0.3907', '0.3624'], explanation: 'sine அட்டவணையிலிருந்து (பொது வித்தியாசம் கூட்டி) sin 21°21′ = 0.3641; 0.9314 என்பது cos 21°21′.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 6.4.1(v), p. 239', answer: 0,
    en: { q: 'Using the trigonometric table, cos 33°53′ is', options: ['0.8302', '0.5574', '0.8310', '0.8290'], explanation: 'From the cosine table (subtracting the mean difference), cos 33°53′ = 0.8302.' },
    ta: { q: 'அட்டவணையைப் பயன்படுத்தி cos 33°53′ இன் மதிப்பு', options: ['0.8302', '0.5574', '0.8310', '0.8290'], explanation: 'cosine அட்டவணையிலிருந்து (பொது வித்தியாசம் கழித்து) cos 33°53′ = 0.8302.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 6.2.1(ii), p. 232', answer: 0,
    en: { q: 'The value of 1 + tan² 30° is', options: ['4/3', '2/3', '4', '1/3'], explanation: '1 + (1/√3)² = 1 + 1/3 = 4/3, which equals sec² 30° = (2/√3)².' },
    ta: { q: '1 + tan² 30° இன் மதிப்பு', options: ['4/3', '2/3', '4', '1/3'], explanation: '1 + (1/√3)² = 1 + 1/3 = 4/3; இது sec² 30° = (2/√3)² க்குச் சமம்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 6.2.1(iv), p. 232', answer: 0,
    en: { q: 'The value of sin 30° cos 60° + cos 30° sin 60° is', options: ['1', '1/2', '√3/2', '0'], explanation: '1/2 × 1/2 + √3/2 × √3/2 = 1/4 + 3/4 = 1 = sin 90°.' },
    ta: { q: 'sin 30° cos 60° + cos 30° sin 60° இன் மதிப்பு', options: ['1', '1/2', '√3/2', '0'], explanation: '1/2 × 1/2 + √3/2 × √3/2 = 1/4 + 3/4 = 1 = sin 90°.' },
  },
  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise 6.1.4, p. 227', answer: 0,
    en: { q: 'If cos A = 3/5, then (sin A − cos A) ÷ (2 tan A) is', options: ['3/40', '3/20', '1/5', '8/15'], explanation: 'sin A = 4/5 and tan A = 4/3, so (4/5 − 3/5) ÷ (8/3) = (1/5) × (3/8) = 3/40.' },
    ta: { q: 'cos A = 3/5 எனில் (sin A − cos A) ÷ (2 tan A) இன் மதிப்பு', options: ['3/40', '3/20', '1/5', '8/15'], explanation: 'sin A = 4/5, tan A = 4/3; (4/5 − 3/5) ÷ (8/3) = (1/5) × (3/8) = 3/40.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 6.1.5, p. 227', answer: 0,
    en: { q: 'If cos A = 2x ÷ (1 + x²), then sin A and tan A are', options: ['(1 − x²)/(1 + x²) and (1 − x²)/(2x)', '(1 + x²)/(1 − x²) and 2x/(1 − x²)', '(1 − x²)/(2x) and (1 − x²)/(1 + x²)', '2x/(1 − x²) and (1 + x²)/(2x)'], explanation: 'Opposite side = √((1 + x²)² − (2x)²) = 1 − x², so sin A = (1 − x²)/(1 + x²) and tan A = (1 − x²)/(2x).' },
    ta: { q: 'cos A = 2x ÷ (1 + x²) எனில் sin A, tan A', options: ['(1 − x²)/(1 + x²), (1 − x²)/(2x)', '(1 + x²)/(1 − x²), 2x/(1 − x²)', '(1 − x²)/(2x), (1 − x²)/(1 + x²)', '2x/(1 − x²), (1 + x²)/(2x)'], explanation: 'எதிர்ப்பக்கம் = √((1 + x²)² − (2x)²) = 1 − x²; sin A = (1 − x²)/(1 + x²), tan A = (1 − x²)/(2x).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 6.1.7, p. 227', answer: 0,
    en: { q: 'If 3 cot A = 2, then (4 sin A − 3 cos A) ÷ (2 sin A + 3 cos A) is', options: ['1/2', '1/3', '2/3', '1'], explanation: 'Divide by cos A: (4 tan A − 3) ÷ (2 tan A + 3) with tan A = 3/2 gives 3 ÷ 6 = 1/2.' },
    ta: { q: '3 cot A = 2 எனில் (4 sin A − 3 cos A) ÷ (2 sin A + 3 cos A) இன் மதிப்பு', options: ['1/2', '1/3', '2/3', '1'], explanation: 'cos A ஆல் வகுக்க: (4 tan A − 3) ÷ (2 tan A + 3); tan A = 3/2; 3 ÷ 6 = 1/2.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 6.1.8, p. 227', answer: 0,
    en: { q: 'If cos θ : sin θ = 1 : 2, then (8 cos θ − 2 sin θ) ÷ (4 cos θ + 2 sin θ) is', options: ['1/2', '2', '1/4', '3/4'], explanation: 'tan θ = 2. Dividing by cos θ: (8 − 2 × 2) ÷ (4 + 2 × 2) = 4/8 = 1/2.' },
    ta: { q: 'cos θ : sin θ = 1 : 2 எனில் (8 cos θ − 2 sin θ) ÷ (4 cos θ + 2 sin θ) இன் மதிப்பு', options: ['1/2', '2', '1/4', '3/4'], explanation: 'tan θ = 2. cos θ ஆல் வகுக்க: (8 − 2 × 2) ÷ (4 + 2 × 2) = 4/8 = 1/2.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 6.1.9, p. 227', answer: 0, imageUrl: `${IMG}/ex6-1-two-right-triangles.png`,
    en: { q: 'From the figure (CD ⊥ AB, AC = 15, CD = 12, AD = 9, DB = 16, CB = 20), find sin α, cos β and tan φ.', options: ['4/5, 4/5, 4/3', '3/5, 3/5, 3/4', '4/5, 3/5, 3/4', '12/15, 12/20, 12/16'], explanation: 'sin α = CD/AC = 12/15 = 4/5; cos β = DB/CB = 16/20 = 4/5; tan φ = DB/CD = 16/12 = 4/3.' },
    ta: { q: 'படத்திலிருந்து (CD ⊥ AB, AC = 15, CD = 12, AD = 9, DB = 16, CB = 20) sin α, cos β, tan φ காண்க.', options: ['4/5, 4/5, 4/3', '3/5, 3/5, 3/4', '4/5, 3/5, 3/4', '12/15, 12/20, 12/16'], explanation: 'sin α = CD/AC = 12/15 = 4/5; cos β = DB/CB = 16/20 = 4/5; tan φ = DB/CD = 16/12 = 4/3.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 6.1.10, p. 228', answer: 0, imageUrl: `${IMG}/ex6-1-kite-thread.png`,
    en: { q: 'A boy at O sees his kite at P with OP = 25 m, at a height of 5 m. When the thread is extended by 10 m from P to Q along the same line, what is the height QN of the kite?', options: ['7 m', '15 m', '2 m', '10 m'], explanation: 'sin θ = 5/25 = 1/5. For OQ = 35 m, QN = 35 × 1/5 = 7 m.' },
    ta: { q: 'O வில் நிற்கும் சிறுவன் P இல் உள்ள பட்டத்தைப் பார்க்கிறான்; OP = 25 மீ, உயரம் 5 மீ. நூல் அதே கோட்டில் P இலிருந்து Q வரை 10 மீ நீட்டப்பட்டால் பட்டத்தின் உயரம் QN', options: ['7 மீ', '15 மீ', '2 மீ', '10 மீ'], explanation: 'sin θ = 5/25 = 1/5. OQ = 35 மீ; QN = 35 × 1/5 = 7 மீ.' },
  },
  {
    difficulty: 'hard', source: 'Book example 6.4, p. 226', answer: 0,
    en: { q: 'If sec θ = 13/5, then (2 sin θ − 3 cos θ) ÷ (4 sin θ − 9 cos θ) is', options: ['3', '1/3', '9/13', '−3'], explanation: 'cos θ = 5/13 and sin θ = 12/13, so (24 − 15)/13 ÷ (48 − 45)/13 = 9/3 = 3.' },
    ta: { q: 'sec θ = 13/5 எனில் (2 sin θ − 3 cos θ) ÷ (4 sin θ − 9 cos θ) இன் மதிப்பு', options: ['3', '1/3', '9/13', '−3'], explanation: 'cos θ = 5/13, sin θ = 12/13; (24 − 15)/13 ÷ (48 − 45)/13 = 9/3 = 3.' },
  },
  {
    difficulty: 'hard', source: 'Book example 6.6(i), p. 231', answer: 0,
    en: { q: 'The value of (cos 0° + sin 45° + sin 30°)(sin 90° − cos 45° + cos 60°) is', options: ['7/4', '9/4', '1', '3/2'], explanation: '(3/2 + 1/√2)(3/2 − 1/√2) = 9/4 − 1/2 = 7/4.' },
    ta: { q: '(cos 0° + sin 45° + sin 30°)(sin 90° − cos 45° + cos 60°) இன் மதிப்பு', options: ['7/4', '9/4', '1', '3/2'], explanation: '(3/2 + 1/√2)(3/2 − 1/√2) = 9/4 − 1/2 = 7/4.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 6.2.2(ii), p. 232', answer: 0,
    en: { q: 'The value of (sin 90° + cos 60° + cos 45°) × (sin 30° + cos 0° − cos 45°) is', options: ['7/4', '9/4', '5/4', '2'], explanation: 'Both brackets are 3/2 ± 1/√2, so the product is 9/4 − 1/2 = 7/4.' },
    ta: { q: '(sin 90° + cos 60° + cos 45°) × (sin 30° + cos 0° − cos 45°) இன் மதிப்பு', options: ['7/4', '9/4', '5/4', '2'], explanation: 'இரு அடைப்புகளும் 3/2 ± 1/√2; பெருக்கல் 9/4 − 1/2 = 7/4.' },
  },
  {
    difficulty: 'hard', source: 'Book example 6.6(ii), p. 232', answer: 0,
    en: { q: 'The value of tan² 60° − 2 tan² 45° − cot² 30° + 2 sin² 30° + (3/4) cosec² 45° is', options: ['0', '2', '−2', '1'], explanation: '3 − 2 − 3 + 1/2 + 3/2 = 0.' },
    ta: { q: 'tan² 60° − 2 tan² 45° − cot² 30° + 2 sin² 30° + (3/4) cosec² 45° இன் மதிப்பு', options: ['0', '2', '−2', '1'], explanation: '3 − 2 − 3 + 1/2 + 3/2 = 0.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 6.2.3, p. 232', answer: 0,
    en: { q: 'When A = 30°, the value of 4 cos³ A − 3 cos A is', options: ['0', '1', '√3/2', '3√3/2'], explanation: '4 × (3√3/8) − 3 × (√3/2) = 3√3/2 − 3√3/2 = 0, which equals cos 3A = cos 90°.' },
    ta: { q: 'A = 30° எனில் 4 cos³ A − 3 cos A இன் மதிப்பு', options: ['0', '1', '√3/2', '3√3/2'], explanation: '4 × (3√3/8) − 3 × (√3/2) = 3√3/2 − 3√3/2 = 0; இது cos 3A = cos 90° க்குச் சமம்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 6.3.1(i), p. 235', answer: 0,
    en: { q: 'The value of (cos 47°/sin 43°)² + (sin 72°/cos 18°)² − 2 cos² 45° is', options: ['1', '0', '2', '3'], explanation: 'cos 47° = sin 43° and sin 72° = cos 18°, so 1 + 1 − 2 × 1/2 = 1.' },
    ta: { q: '(cos 47°/sin 43°)² + (sin 72°/cos 18°)² − 2 cos² 45° இன் மதிப்பு', options: ['1', '0', '2', '3'], explanation: 'cos 47° = sin 43°, sin 72° = cos 18°; 1 + 1 − 2 × 1/2 = 1.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 6.3.1(ii), p. 235', answer: 0,
    en: { q: 'The value of cos 70°/sin 20° + cos 59°/sin 31° + cos θ/sin(90° − θ) − 8 cos² 60° is', options: ['1', '3', '0', '−1'], explanation: 'Each of the first three fractions is 1, and 8 cos² 60° = 8 × 1/4 = 2, so 3 − 2 = 1.' },
    ta: { q: 'cos 70°/sin 20° + cos 59°/sin 31° + cos θ/sin(90° − θ) − 8 cos² 60° இன் மதிப்பு', options: ['1', '3', '0', '−1'], explanation: 'முதல் மூன்று பின்னங்களும் ஒவ்வொன்றும் 1; 8 cos² 60° = 8 × 1/4 = 2; 3 − 2 = 1.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 6.3.1(iii), p. 235', answer: 0,
    en: { q: 'The value of tan 15° tan 30° tan 45° tan 60° tan 75° is', options: ['1', '√3', '0', '1/√3'], explanation: 'tan 15° tan 75° = 1, tan 30° tan 60° = 1 and tan 45° = 1.' },
    ta: { q: 'tan 15° tan 30° tan 45° tan 60° tan 75° இன் மதிப்பு', options: ['1', '√3', '0', '1/√3'], explanation: 'tan 15° tan 75° = 1, tan 30° tan 60° = 1, tan 45° = 1.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 6.3.1(iv), p. 235', answer: 0,
    en: { q: 'The value of cot θ/tan(90° − θ) + cos(90° − θ) tan θ sec(90° − θ) ÷ [sin(90° − θ) cot(90° − θ) cosec(90° − θ)] is', options: ['2', '1', '0', 'tan² θ'], explanation: 'The first term is cot θ/cot θ = 1; the second is (sin θ tan θ cosec θ) ÷ (cos θ tan θ sec θ) = 1 ÷ 1 = 1; total 2.' },
    ta: { q: 'cot θ/tan(90° − θ) + cos(90° − θ) tan θ sec(90° − θ) ÷ [sin(90° − θ) cot(90° − θ) cosec(90° − θ)] இன் மதிப்பு', options: ['2', '1', '0', 'tan² θ'], explanation: 'முதல் உறுப்பு cot θ/cot θ = 1; இரண்டாவது (sin θ tan θ cosec θ) ÷ (cos θ tan θ sec θ) = 1 ÷ 1 = 1; மொத்தம் 2.' },
  },
  {
    difficulty: 'hard', source: 'Book example 6.9(ii), p. 234', answer: 0,
    en: { q: 'The value of cos 35°/sin 55° + sin 12°/cos 78° − cos 18°/sin 72° is', options: ['1', '3', '0', '−1'], explanation: 'Each fraction equals 1 by complementary angles, so 1 + 1 − 1 = 1.' },
    ta: { q: 'cos 35°/sin 55° + sin 12°/cos 78° − cos 18°/sin 72° இன் மதிப்பு', options: ['1', '3', '0', '−1'], explanation: 'நிரப்புக் கோணங்களால் ஒவ்வொரு பின்னமும் 1; 1 + 1 − 1 = 1.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 6.5.6, p. 240', answer: 0,
    en: { q: 'The value of 3 sin 70° sec 20° + 2 sin 39° sec 51° is', options: ['5', '2', '3', '6'], explanation: 'sin 70° = cos 20° and sin 39° = cos 51°, so each product is 1 and the value is 3 + 2 = 5. (The book prints sin 49°, a misprint; its answer is 5.)' },
    ta: { q: '3 sin 70° sec 20° + 2 sin 39° sec 51° இன் மதிப்பு', options: ['5', '2', '3', '6'], explanation: 'sin 70° = cos 20°, sin 39° = cos 51°; ஒவ்வொரு பெருக்கலும் 1; மதிப்பு 3 + 2 = 5. (பாடநூலில் sin 49° என அச்சுப்பிழை; விடை 5.)' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 6.5.8, p. 240', answer: 0,
    en: { q: 'The value of cosec(70° + θ) − sec(20° − θ) + tan(65° + θ) − cot(25° − θ) is', options: ['0', '1', '2', '3'], explanation: 'cosec(70° + θ) = sec(20° − θ) and tan(65° + θ) = cot(25° − θ), since the angles are complementary; the terms cancel to 0.' },
    ta: { q: 'cosec(70° + θ) − sec(20° − θ) + tan(65° + θ) − cot(25° − θ) இன் மதிப்பு', options: ['0', '1', '2', '3'], explanation: 'கோணங்கள் நிரப்புக் கோணங்கள் என்பதால் cosec(70° + θ) = sec(20° − θ), tan(65° + θ) = cot(25° − θ); உறுப்புகள் நீங்கி 0.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 6.4.2(i), p. 239', answer: 0,
    en: { q: 'If sin θ = 0.9975, then θ is about', options: ['85°57′', '4°3′', '80°20′', '87°39′'], explanation: 'From the sine table, 0.9975 corresponds to about 85°57′ (the book also accepts 85°58′ or 85°59′).' },
    ta: { q: 'sin θ = 0.9975 எனில் θ ஏறக்குறைய', options: ['85°57′', '4°3′', '80°20′', '87°39′'], explanation: 'sine அட்டவணையில் 0.9975 என்பது ஏறக்குறைய 85°57′ (பாடநூல் 85°58′, 85°59′ ஐயும் ஏற்கிறது).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 6.4.2(ii), p. 239', answer: 0,
    en: { q: 'If cos θ = 0.6763, then θ is about', options: ['47°27′', '42°33′', '40°2′', '47°33′'], explanation: 'From the cosine table (subtracting the mean difference for cosine), θ ≈ 47°27′.' },
    ta: { q: 'cos θ = 0.6763 எனில் θ ஏறக்குறைய', options: ['47°27′', '42°33′', '40°2′', '47°33′'], explanation: 'cosine அட்டவணையிலிருந்து (cosine க்குப் பொது வித்தியாசம் கழித்து) θ ≈ 47°27′.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 6.4.2(iv), p. 239', answer: 0,
    en: { q: 'If cos θ = 0.0410, then θ is about', options: ['87°39′', '2°21′', '85°57′', '88°39′'], explanation: 'From the cosine table, cos 87°39′ ≈ 0.0410 (cosine decreases towards 0 as θ approaches 90°).' },
    ta: { q: 'cos θ = 0.0410 எனில் θ ஏறக்குறைய', options: ['87°39′', '2°21′', '85°57′', '88°39′'], explanation: 'cosine அட்டவணையில் cos 87°39′ ≈ 0.0410 (θ ஆனது 90° ஐ நெருங்கும்போது cosine 0 ஐ நோக்கிக் குறையும்).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 6.4.2(v), p. 239', answer: 0,
    en: { q: 'If tan θ = 7.5958, then θ is about', options: ['82°30′', '7°30′', '80°20′', '83°30′'], explanation: 'From the tangent table, tan 82°30′ = 7.5958.' },
    ta: { q: 'tan θ = 7.5958 எனில் θ ஏறக்குறைய', options: ['82°30′', '7°30′', '80°20′', '83°30′'], explanation: 'tangent அட்டவணையில் tan 82°30′ = 7.5958.' },
  },
  {
    difficulty: 'hard', source: 'Book example 6.15(i), p. 237', answer: 0,
    en: { q: 'If sin θ = 0.9858 and the table gives sin 80°18′ = 0.9857 with mean difference 1 for 2′, then θ is', options: ['80°20′', '80°19′', '80°16′', '9°40′'], explanation: '0.9858 = 0.9857 + 0.0001, and a mean difference of 1 corresponds to 2′, so θ = 80°18′ + 2′ = 80°20′.' },
    ta: { q: 'sin θ = 0.9858; அட்டவணையில் sin 80°18′ = 0.9857, 2′ க்கான பொது வித்தியாசம் 1 எனில் θ', options: ['80°20′', '80°19′', '80°16′', '9°40′'], explanation: '0.9858 = 0.9857 + 0.0001; பொது வித்தியாசம் 1 என்பது 2′; θ = 80°18′ + 2′ = 80°20′.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 6.4.3(i), p. 239', answer: 0,
    en: { q: 'Using tables, sin 65°39′ + cos 24°57′ + tan 10°10′ is', options: ['1.9970', '2.8659', '1.8176', '2.1765'], explanation: 'sin 65°39′ ≈ 0.9111, cos 24°57′ ≈ 0.9066 and tan 10°10′ ≈ 0.1793; their sum is 1.9970.' },
    ta: { q: 'அட்டவணையைப் பயன்படுத்தி sin 65°39′ + cos 24°57′ + tan 10°10′ இன் மதிப்பு', options: ['1.9970', '2.8659', '1.8176', '2.1765'], explanation: 'sin 65°39′ ≈ 0.9111, cos 24°57′ ≈ 0.9066, tan 10°10′ ≈ 0.1793; கூடுதல் 1.9970.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 6.4.3(ii), p. 239', answer: 0,
    en: { q: 'Using tables, tan 70°58′ + cos 15°26′ − sin 84°59′ is', options: ['2.8659', '1.9970', '3.8620', '0.9639'], explanation: 'tan 70°58′ ≈ 2.8987, cos 15°26′ ≈ 0.9639, sin 84°59′ ≈ 0.9962; 2.8987 + 0.9639 − 0.9962 ≈ 2.866 (book answer 2.8659 from the four-place tables).' },
    ta: { q: 'அட்டவணையைப் பயன்படுத்தி tan 70°58′ + cos 15°26′ − sin 84°59′ இன் மதிப்பு', options: ['2.8659', '1.9970', '3.8620', '0.9639'], explanation: 'tan 70°58′ ≈ 2.8987, cos 15°26′ ≈ 0.9639, sin 84°59′ ≈ 0.9962; 2.8987 + 0.9639 − 0.9962 ≈ 2.866 (நான்கு இலக்க அட்டவணைப்படி பாடநூல் விடை 2.8659).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 6.4.4, p. 239', answer: 0,
    en: { q: 'The area of a right triangle whose hypotenuse is 10 cm and one acute angle is 24°24′ is about', options: ['18.81 cm²', '37.62 cm²', '41.31 cm²', '9.41 cm²'], explanation: 'Legs = 10 sin 24°24′ ≈ 4.131 cm and 10 cos 24°24′ ≈ 9.107 cm; area = ½ × 4.131 × 9.107 ≈ 18.81 cm².' },
    ta: { q: 'கர்ணம் 10 செமீ, ஒரு குறுங்கோணம் 24°24′ கொண்ட செங்கோண முக்கோணத்தின் பரப்பு ஏறக்குறைய', options: ['18.81 செமீ²', '37.62 செமீ²', '41.31 செமீ²', '9.41 செமீ²'], explanation: 'பக்கங்கள் = 10 sin 24°24′ ≈ 4.131 செமீ, 10 cos 24°24′ ≈ 9.107 செமீ; பரப்பு = ½ × 4.131 × 9.107 ≈ 18.81 செமீ².' },
  },
  {
    difficulty: 'hard', source: 'Book example 6.16, p. 238', answer: 0,
    en: { q: 'A right triangle has hypotenuse 5 cm and an acute angle of 48°30′ (sin 48°30′ = 0.7490, cos 48°30′ = 0.6626). Its area is about', options: ['6.20 cm²', '12.41 cm²', '3.75 cm²', '9.36 cm²'], explanation: 'AB = 5 × 0.7490 = 3.745 cm and BC = 5 × 0.6626 = 3.313 cm; area = ½ × 3.313 × 3.745 ≈ 6.20 cm².' },
    ta: { q: 'கர்ணம் 5 செமீ, குறுங்கோணம் 48°30′ கொண்ட செங்கோண முக்கோணம் (sin 48°30′ = 0.7490, cos 48°30′ = 0.6626). அதன் பரப்பு ஏறக்குறைய', options: ['6.20 செமீ²', '12.41 செமீ²', '3.75 செமீ²', '9.36 செமீ²'], explanation: 'AB = 5 × 0.7490 = 3.745 செமீ, BC = 5 × 0.6626 = 3.313 செமீ; பரப்பு = ½ × 3.313 × 3.745 ≈ 6.20 செமீ².' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 6.4.6, p. 239', answer: 0, imageUrl: `${IMG}/ex6-4-tree-height.png`,
    en: { q: 'HT is a vertical tree. From P, 60 m from the foot T, the angle of elevation of the top H is 42° (tan 42° = 0.9004). The height of the tree is about', options: ['54.02 m', '40.15 m', '66.64 m', '44.59 m'], explanation: 'tan 42° = HT ÷ 60, so HT = 60 × 0.9004 ≈ 54.02 m.' },
    ta: { q: 'HT என்பது செங்குத்தாக நிற்கும் மரம். மரத்தின் அடி T இலிருந்து 60 மீ தொலைவில் உள்ள P இலிருந்து உச்சி H இன் ஏற்றக்கோணம் 42° (tan 42° = 0.9004). மரத்தின் உயரம் ஏறக்குறைய', options: ['54.02 மீ', '40.15 மீ', '66.64 மீ', '44.59 மீ'], explanation: 'tan 42° = HT ÷ 60; HT = 60 × 0.9004 ≈ 54.02 மீ.' },
  },
  {
    difficulty: 'hard', source: '§6.2.3, p. 230', answer: 0,
    en: { q: 'Assertion (A): tan 90° is not defined.\nReason (R): On the unit circle, tan θ = y ÷ x, and at θ = 90° the point is (0, 1).', options: AR_EN, explanation: 'At 90°, tan θ = 1 ÷ 0, so division by zero makes it undefined; R explains A.' },
    ta: { q: 'கூற்று (A): tan 90° வரையறுக்கப்படவில்லை.\nகாரணம் (R): அலகு வட்டத்தில் tan θ = y ÷ x; θ = 90° இல் புள்ளி (0, 1).', options: AR_TA, explanation: '90° இல் tan θ = 1 ÷ 0; பூச்சியத்தால் வகுக்க இயலாததால் வரையறுக்கப்படவில்லை; R ஆனது A ஐ விளக்குகிறது.' },
  },
  {
    difficulty: 'hard', source: '§6.2.2, p. 229', answer: 3,
    en: { q: 'Assertion (A): sin 60° = 2 sin 30°.\nReason (R): sin 30° = 1/2.', options: AR_EN, explanation: 'A is false: sin 60° = √3/2 but 2 sin 30° = 1. R is true.' },
    ta: { q: 'கூற்று (A): sin 60° = 2 sin 30°.\nகாரணம் (R): sin 30° = 1/2.', options: AR_TA, explanation: 'A தவறு: sin 60° = √3/2, ஆனால் 2 sin 30° = 1. R சரி.' },
  },
  {
    difficulty: 'hard', source: '§6.3, p. 233', answer: 2,
    en: { q: 'Assertion (A): sin 49° = cos 41°.\nReason (R): sin θ = sin(90° − θ) for every acute angle θ.', options: AR_EN, explanation: 'A is true because sin θ = cos(90° − θ). R is false: sin(90° − θ) = cos θ, not sin θ.' },
    ta: { q: 'கூற்று (A): sin 49° = cos 41°.\nகாரணம் (R): ஒவ்வொரு குறுங்கோணம் θ க்கும் sin θ = sin(90° − θ).', options: AR_TA, explanation: 'sin θ = cos(90° − θ) என்பதால் A சரி. R தவறு: sin(90° − θ) = cos θ; sin θ அல்ல.' },
  },
  {
    difficulty: 'hard', source: '§6.2.3, p. 230', answer: 0,
    en: { q: 'Consider:\n(i) sin 0° = 0\n(ii) cos 0° = 0\n(iii) cosec 0° is not defined\n(iv) cot 90° = 0\nWhich statements are correct?', options: ['(i), (iii) and (iv) only', '(i), (ii) and (iii) only', '(ii) and (iv) only', '(i), (ii), (iii) and (iv)'], explanation: 'At 0° the point is (1, 0): sin 0° = 0, cos 0° = 1, cosec 0° = 1/0 is undefined; at 90°, cot 90° = 0/1 = 0.' },
    ta: { q: 'கூற்றுகள்:\n(i) sin 0° = 0\n(ii) cos 0° = 0\n(iii) cosec 0° வரையறுக்கப்படவில்லை\n(iv) cot 90° = 0\nசரியானவை எவை?', options: ['(i), (iii), (iv) மட்டும்', '(i), (ii), (iii) மட்டும்', '(ii), (iv) மட்டும்', '(i), (ii), (iii), (iv)'], explanation: '0° இல் புள்ளி (1, 0): sin 0° = 0, cos 0° = 1, cosec 0° = 1/0 வரையறுக்கப்படவில்லை; 90° இல் cot 90° = 0/1 = 0.' },
  },
];
