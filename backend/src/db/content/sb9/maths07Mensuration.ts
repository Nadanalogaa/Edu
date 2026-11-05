// Tamil Nadu State Board, 9th Mathematics, Unit 7 – Mensuration (அளவியல்).
// Every exercise item with a single definite answer (Exercises 7.1–7.4), the solved
// examples, notes and thinking-corner items, plus our own questions for each section.
// source = section / exercise and printed page of the English-medium book.
// Answers checked against the book's answer key (p. 316–317).

import { BankQuestion, AR_EN, AR_TA } from './types';

const IMG = '/content/9/state_board/maths/07';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: '§7.1, p. 248', answer: 0,
    en: { q: 'The branch of mathematics that deals with areas and volumes of geometrical shapes is called', options: ['mensuration', 'trigonometry', 'statistics', 'algebra'], explanation: 'Mensuration is the study of areas and volumes of different geometrical shapes – the process of measurement.' },
    ta: { q: 'பல்வேறு வடிவியல் உருவங்களின் பரப்பு மற்றும் கன அளவு பற்றிப் படிக்கும் கணிதப் பிரிவு', options: ['அளவியல்', 'முக்கோணவியல்', 'புள்ளியியல்', 'இயற்கணிதம்'], explanation: 'பல்வேறு வடிவியல் உருவங்களின் பரப்பு, கன அளவுகளைப் பற்றிப் படிப்பது அளவியல் ஆகும்.' },
  },
  {
    difficulty: 'easy', source: '§7.1, p. 248', answer: 0,
    en: { q: "Heron of Alexandria wrote the famous book on areas and volumes called", options: ['Metrica', 'Elements', 'Lilavati', 'Almagest'], explanation: "Heron's book 'Metrica' (three volumes) shows how to calculate areas and volumes of plane and solid figures." },
    ta: { q: 'பரப்பு மற்றும் கன அளவு பற்றி அலெக்சாண்டிரியாவின் ஹெரான் எழுதிய புகழ்பெற்ற நூல்', options: ['மெட்ரிகா', 'எலிமென்ட்ஸ்', 'லீலாவதி', 'அல்மாஜெஸ்ட்'], explanation: 'மூன்று தொகுதிகள் கொண்ட ஹெரானின் ‘மெட்ரிகா’ நூல் தள மற்றும் திண்ம உருவங்களின் பரப்பு, கன அளவுகளைக் கணக்கிடும் வழியைக் காட்டுகிறது.' },
  },
  {
    difficulty: 'easy', source: '§7.2, p. 249', answer: 0,
    en: { q: 'In Heron’s formula, s = (a + b + c) ÷ 2 is called the', options: ['semi-perimeter of the triangle', 'perimeter of the triangle', 'area of the triangle', 'altitude of the triangle'], explanation: 's is half of the perimeter, that is, the semi-perimeter.' },
    ta: { q: 'ஹெரான் சூத்திரத்தில் s = (a + b + c) ÷ 2 என்பது முக்கோணத்தின்', options: ['அரைச் சுற்றளவு', 'சுற்றளவு', 'பரப்பு', 'குத்துயரம்'], explanation: 's என்பது சுற்றளவில் பாதி, அதாவது அரைச் சுற்றளவு.' },
  },
  {
    difficulty: 'easy', source: '§7.2, p. 249', answer: 0,
    en: { q: 'If a, b, c are the sides of a triangle and s is its semi-perimeter, then by Heron’s formula its area is', options: ['√[s(s − a)(s − b)(s − c)]', 's(s − a)(s − b)(s − c)', '√[(s − a)(s − b)(s − c)]', '½ × s × (a + b + c)'], explanation: 'Heron’s formula: Area = √[s(s − a)(s − b)(s − c)] sq. units.' },
    ta: { q: 'a, b, c என்பன ஒரு முக்கோணத்தின் பக்கங்கள், s அதன் அரைச் சுற்றளவு எனில், ஹெரான் சூத்திரப்படி அதன் பரப்பு', options: ['√[s(s − a)(s − b)(s − c)]', 's(s − a)(s − b)(s − c)', '√[(s − a)(s − b)(s − c)]', '½ × s × (a + b + c)'], explanation: 'ஹெரான் சூத்திரம்: பரப்பு = √[s(s − a)(s − b)(s − c)] சதுர அலகுகள்.' },
  },
  {
    difficulty: 'easy', source: '§7.2 Note, p. 249', answer: 0,
    en: { q: 'When a = b = c, Heron’s formula gives the area of an equilateral triangle of side a as', options: ['(√3 ÷ 4) a²', '(√3 ÷ 2) a²', '(1 ÷ 2) a²', '√3 a²'], explanation: 'Putting a = b = c in Heron’s formula gives (√3 ÷ 4)a² sq. units.' },
    ta: { q: 'a = b = c எனும்போது, ஹெரான் சூத்திரம் a பக்க அளவுள்ள சமபக்க முக்கோணத்தின் பரப்பாகத் தருவது', options: ['(√3 ÷ 4) a²', '(√3 ÷ 2) a²', '(1 ÷ 2) a²', '√3 a²'], explanation: 'ஹெரான் சூத்திரத்தில் a = b = c எனப் பிரதியிட (√3 ÷ 4)a² சதுர அலகுகள் கிடைக்கும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 7.4 Q1, p. 263', answer: 0,
    en: { q: 'The semi-perimeter of a triangle having sides 15 cm, 20 cm and 25 cm is', options: ['30 cm', '60 cm', '45 cm', '15 cm'], explanation: 's = (15 + 20 + 25) ÷ 2 = 60 ÷ 2 = 30 cm.' },
    ta: { q: '15 செமீ, 20 செமீ மற்றும் 25 செமீ பக்க அளவுகள் கொண்ட ஒரு முக்கோணத்தின் அரைச் சுற்றளவு', options: ['30 செமீ', '60 செமீ', '45 செமீ', '15 செமீ'], explanation: 's = (15 + 20 + 25) ÷ 2 = 60 ÷ 2 = 30 செமீ.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 7.4 Q2, p. 263', answer: 0,
    en: { q: 'If the sides of a triangle are 3 cm, 4 cm and 5 cm, then its area is', options: ['6 cm²', '3 cm²', '9 cm²', '12 cm²'], explanation: 's = 6, area = √(6 × 3 × 2 × 1) = √36 = 6 cm².' },
    ta: { q: 'ஒரு முக்கோணத்தின் பக்க அளவுகள் 3 செமீ, 4 செமீ மற்றும் 5 செமீ எனில் அதன் பரப்பளவு', options: ['6 செமீ²', '3 செமீ²', '9 செமீ²', '12 செமீ²'], explanation: 's = 6, பரப்பு = √(6 × 3 × 2 × 1) = √36 = 6 செமீ².' },
  },
  {
    difficulty: 'easy', source: '§7.4.1, p. 253', answer: 0,
    en: { q: 'A cuboid has', options: ['6 faces, 12 edges and 8 vertices', '6 faces, 8 edges and 12 vertices', '8 faces, 12 edges and 6 vertices', '4 faces, 6 edges and 4 vertices'], explanation: 'A cuboid is bounded by six rectangular faces; it has 12 edges and 8 vertices.' },
    ta: { q: 'ஒரு கனசெவ்வகத்திற்கு உள்ளவை', options: ['6 முகப்புகள், 12 விளிம்புகள், 8 முனைகள்', '6 முகப்புகள், 8 விளிம்புகள், 12 முனைகள்', '8 முகப்புகள், 12 விளிம்புகள், 6 முனைகள்', '4 முகப்புகள், 6 விளிம்புகள், 4 முனைகள்'], explanation: 'கனசெவ்வகம் ஆறு செவ்வக முகப்புகளால் சூழப்பட்டது; அதற்கு 12 விளிம்புகளும் 8 முனைகளும் உண்டு.' },
  },
  {
    difficulty: 'easy', source: '§7.4.1, p. 253', answer: 0,
    en: { q: 'The total surface area (TSA) of a cuboid of length l, breadth b and height h is', options: ['2(lb + bh + lh) sq. units', '2(l + b)h sq. units', 'lbh sq. units', '(lb + bh + lh) sq. units'], explanation: 'TSA = top and bottom (2lb) + front and back (2bh) + two sides (2lh) = 2(lb + bh + lh).' },
    ta: { q: 'நீளம் l, அகலம் b, உயரம் h கொண்ட கனசெவ்வகத்தின் மொத்தப்பரப்பு', options: ['2(lb + bh + lh) சதுர அலகுகள்', '2(l + b)h சதுர அலகுகள்', 'lbh சதுர அலகுகள்', '(lb + bh + lh) சதுர அலகுகள்'], explanation: 'மொத்தப்பரப்பு = மேல், அடிப்பக்கம் (2lb) + முன், பின்பக்கம் (2bh) + இரு பக்கங்கள் (2lh) = 2(lb + bh + lh).' },
  },
  {
    difficulty: 'easy', source: '§7.4.1, p. 253', answer: 0,
    en: { q: 'The lateral surface area (LSA) of a cuboid is', options: ['2(l + b)h sq. units', '2(lb + bh + lh) sq. units', '2lb sq. units', 'lbh sq. units'], explanation: 'LSA leaves out the top and bottom: 2bh + 2lh = 2(l + b)h.' },
    ta: { q: 'கனசெவ்வகத்தின் பக்கப்பரப்பு', options: ['2(l + b)h சதுர அலகுகள்', '2(lb + bh + lh) சதுர அலகுகள்', '2lb சதுர அலகுகள்', 'lbh சதுர அலகுகள்'], explanation: 'மேல், அடிப்பக்கங்களை நீக்கினால் பக்கப்பரப்பு: 2bh + 2lh = 2(l + b)h.' },
  },
  {
    difficulty: 'easy', source: '§7.4.2, p. 255', answer: 0,
    en: { q: 'A cuboid whose length, breadth and height are all equal is called a', options: ['cube', 'rhombus', 'square', 'prism'], explanation: 'A cube is a cuboid with l = b = h; it has six square faces.' },
    ta: { q: 'நீளம், அகலம், உயரம் மூன்றும் சமமாக உள்ள கனசெவ்வகம்', options: ['கனசதுரம்', 'சாய்சதுரம்', 'சதுரம்', 'பட்டகம்'], explanation: 'l = b = h ஆக உள்ள கனசெவ்வகம் கனசதுரம்; அதற்கு ஆறு சதுர முகப்புகள் உள்ளன.' },
  },
  {
    difficulty: 'easy', source: '§7.4.2, p. 256', answer: 0,
    en: { q: 'The lateral surface area of a cube of side a is', options: ['4a² sq. units', '6a² sq. units', 'a³ sq. units', '2a² sq. units'], explanation: 'The four side faces each have area a², so LSA = 4a²; TSA = 6a².' },
    ta: { q: 'a பக்க அளவுள்ள கனசதுரத்தின் பக்கப்பரப்பு', options: ['4a² சதுர அலகுகள்', '6a² சதுர அலகுகள்', 'a³ சதுர அலகுகள்', '2a² சதுர அலகுகள்'], explanation: 'நான்கு பக்க முகப்புகள் ஒவ்வொன்றின் பரப்பும் a²; எனவே பக்கப்பரப்பு = 4a², மொத்தப்பரப்பு = 6a².' },
  },
  {
    difficulty: 'easy', source: 'Book example 7.6, p. 256', answer: 0,
    en: { q: 'The total surface area of a cube of side 5 cm is', options: ['150 cm²', '100 cm²', '125 cm²', '25 cm²'], explanation: 'TSA = 6a² = 6 × 5² = 150 cm² (LSA = 4 × 25 = 100 cm²).' },
    ta: { q: '5 செமீ பக்க அளவுள்ள கனசதுரத்தின் மொத்தப்பரப்பு', options: ['150 செமீ²', '100 செமீ²', '125 செமீ²', '25 செமீ²'], explanation: 'மொத்தப்பரப்பு = 6a² = 6 × 5² = 150 செமீ² (பக்கப்பரப்பு = 4 × 25 = 100 செமீ²).' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 7.4 Q4, p. 263', answer: 0,
    en: { q: 'The lateral surface area of a cube of side 12 cm is', options: ['576 cm²', '144 cm²', '196 cm²', '664 cm²'], explanation: 'LSA = 4a² = 4 × 144 = 576 cm².' },
    ta: { q: '12 செமீ பக்க அளவுள்ள ஒரு கனசதுரத்தின் பக்கப்பரப்பு', options: ['576 செமீ²', '144 செமீ²', '196 செமீ²', '664 செமீ²'], explanation: 'பக்கப்பரப்பு = 4a² = 4 × 144 = 576 செமீ².' },
  },
  {
    difficulty: 'easy', source: '§7.5, p. 258', answer: 0,
    en: { q: 'The measure of the amount of space occupied by a three-dimensional solid is its', options: ['volume', 'surface area', 'perimeter', 'lateral surface area'], explanation: 'Volume is the space occupied by a 3-D solid, measured in cubic units such as cm³ or m³.' },
    ta: { q: 'ஒரு முப்பரிமாணத் திண்மம் அடைத்துக்கொள்ளும் இடத்தின் அளவு', options: ['கன அளவு', 'புறப்பரப்பு', 'சுற்றளவு', 'பக்கப்பரப்பு'], explanation: 'முப்பரிமாணத் திண்மம் அடைத்துக்கொள்ளும் இடத்தின் அளவு கன அளவு; அதன் அலகுகள் செமீ³, மீ³.' },
  },
  {
    difficulty: 'easy', source: '§7.5.1, p. 258', answer: 0,
    en: { q: 'A unit cube is a cube whose side is', options: ['1 unit', '10 units', '100 units', '6 units'], explanation: 'A cube of side 1 unit is a unit cube; its volume is 1 cubic unit.' },
    ta: { q: 'ஓரலகு கனசதுரத்தின் பக்க அளவு', options: ['1 அலகு', '10 அலகுகள்', '100 அலகுகள்', '6 அலகுகள்'], explanation: '1 அலகு பக்கமுள்ள கனசதுரம் ஓரலகு கனசதுரம்; அதன் கன அளவு 1 கன அலகு.' },
  },
  {
    difficulty: 'easy', source: '§7.5.1, p. 258', answer: 0,
    en: { q: 'The volume of a cuboid of length l, breadth b and height h is', options: ['lbh cubic units', '2(lb + bh + lh) cubic units', '2(l + b)h cubic units', '(l + b + h) cubic units'], explanation: 'Volume = base area × height = (l × b) × h = lbh.' },
    ta: { q: 'நீளம் l, அகலம் b, உயரம் h கொண்ட கனசெவ்வகத்தின் கன அளவு', options: ['lbh கன அலகுகள்', '2(lb + bh + lh) கன அலகுகள்', '2(l + b)h கன அலகுகள்', '(l + b + h) கன அலகுகள்'], explanation: 'கன அளவு = அடிப்பரப்பு × உயரம் = (l × b) × h = lbh.' },
  },
  {
    difficulty: 'easy', source: '§7.5.2, p. 260', answer: 0,
    en: { q: 'The volume of a cube of side a is', options: ['a³ cubic units', '6a² cubic units', '4a² cubic units', '3a cubic units'], explanation: 'Put l = b = h = a in lbh to get a³.' },
    ta: { q: 'a பக்க அளவுள்ள கனசதுரத்தின் கன அளவு', options: ['a³ கன அலகுகள்', '6a² கன அலகுகள்', '4a² கன அலகுகள்', '3a கன அலகுகள்'], explanation: 'lbh இல் l = b = h = a எனப் பிரதியிட a³ கிடைக்கும்.' },
  },
  {
    difficulty: 'easy', source: '§7.5 Note, p. 260', answer: 0,
    en: { q: '1 m³ is equal to', options: ['1000 litres', '100 litres', '10 litres', '1 litre'], explanation: 'Conversions: 1 cm³ = 1 ml, 1000 cm³ = 1 litre, 1 m³ = 1000 litres.' },
    ta: { q: '1 மீ³ என்பது', options: ['1000 லிட்டர்', '100 லிட்டர்', '10 லிட்டர்', '1 லிட்டர்'], explanation: 'மாற்றங்கள்: 1 செமீ³ = 1 மிலி, 1000 செமீ³ = 1 லிட்டர், 1 மீ³ = 1000 லிட்டர்.' },
  },
  {
    difficulty: 'easy', source: 'Book example 7.13, p. 261', answer: 0,
    en: { q: 'The volume of a cube of side 10 cm is', options: ['1000 cm³', '600 cm³', '100 cm³', '400 cm³'], explanation: 'V = a³ = 10 × 10 × 10 = 1000 cm³.' },
    ta: { q: '10 செமீ பக்க அளவுள்ள கனசதுரத்தின் கன அளவு', options: ['1000 செமீ³', '600 செமீ³', '100 செமீ³', '400 செமீ³'], explanation: 'V = a³ = 10 × 10 × 10 = 1000 செமீ³.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 7.3 Q1(i), p. 263', answer: 0,
    en: { q: 'The volume of a cuboid of length 12 cm, breadth 8 cm and height 6 cm is', options: ['576 cm³', '432 cm³', '288 cm³', '26 cm³'], explanation: 'V = lbh = 12 × 8 × 6 = 576 cm³.' },
    ta: { q: 'நீளம் 12 செமீ, அகலம் 8 செமீ, உயரம் 6 செமீ கொண்ட கனசெவ்வகத்தின் கன அளவு', options: ['576 செமீ³', '432 செமீ³', '288 செமீ³', '26 செமீ³'], explanation: 'V = lbh = 12 × 8 × 6 = 576 செமீ³.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 7.3 Q7(i), p. 263', answer: 0,
    en: { q: 'The volume of a cube of side 5 cm is', options: ['125 cm³', '25 cm³', '150 cm³', '15 cm³'], explanation: 'V = a³ = 5³ = 125 cm³.' },
    ta: { q: '5 செமீ பக்க அளவுள்ள கனசதுரத்தின் கன அளவு', options: ['125 செமீ³', '25 செமீ³', '150 செமீ³', '15 செமீ³'], explanation: 'V = a³ = 5³ = 125 செமீ³.' },
  },
  {
    difficulty: 'easy', source: '§7.4.1 Note, p. 254', answer: 0,
    en: { q: 'While calculating the surface area or volume of a cuboid, the length, breadth and height must be', options: ['in the same unit', 'in different units', 'all equal', 'whole numbers'], explanation: 'The book notes that the units of l, b and h should be the same before calculating.' },
    ta: { q: 'கனசெவ்வகத்தின் புறப்பரப்பு அல்லது கன அளவைக் கணக்கிடும்போது நீளம், அகலம், உயரம் ஆகியவை', options: ['ஒரே அலகில் இருக்க வேண்டும்', 'வெவ்வேறு அலகுகளில் இருக்க வேண்டும்', 'சமமாக இருக்க வேண்டும்', 'முழு எண்களாக இருக்க வேண்டும்'], explanation: 'கணக்கிடும் முன் l, b, h அளவுகள் ஒரே அலகில் இருக்க வேண்டும் என நூல் குறிப்பிடுகிறது.' },
  },

  // ---------------------------------------------------------------- Medium
  {
    difficulty: 'medium', source: 'Book exercise 7.1 Q1(i), p. 252', answer: 0,
    en: { q: 'Using Heron’s formula, the area of a triangle with sides 10 cm, 24 cm and 26 cm is', options: ['120 cm²', '240 cm²', '312 cm²', '60 cm²'], explanation: 's = 30; area = √(30 × 20 × 6 × 4) = √14400 = 120 cm².' },
    ta: { q: 'ஹெரான் சூத்திரத்தைப் பயன்படுத்தி 10 செமீ, 24 செமீ, 26 செமீ பக்க அளவுகளைக் கொண்ட முக்கோணத்தின் பரப்பு', options: ['120 செமீ²', '240 செமீ²', '312 செமீ²', '60 செமீ²'], explanation: 's = 30; பரப்பு = √(30 × 20 × 6 × 4) = √14400 = 120 செமீ².' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 7.1 Q1(ii), p. 252', answer: 0,
    en: { q: 'Using Heron’s formula, the area of a triangle with sides 1.8 m, 8 m and 8.2 m is', options: ['7.2 m²', '14.4 m²', '3.6 m²', '7.38 m²'], explanation: 's = 9; area = √(9 × 7.2 × 1 × 0.8) = √51.84 = 7.2 m².' },
    ta: { q: 'ஹெரான் சூத்திரத்தைப் பயன்படுத்தி 1.8 மீ, 8 மீ, 8.2 மீ பக்க அளவுகளைக் கொண்ட முக்கோணத்தின் பரப்பு', options: ['7.2 மீ²', '14.4 மீ²', '3.6 மீ²', '7.38 மீ²'], explanation: 's = 9; பரப்பு = √(9 × 7.2 × 1 × 0.8) = √51.84 = 7.2 மீ².' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 7.1 Q2, p. 252', answer: 0,
    en: { q: 'The sides of a triangular ground are 22 m, 120 m and 122 m. Its area is', options: ['1320 m²', '2640 m²', '660 m²', '1452 m²'], explanation: 's = 132; area = √(132 × 110 × 12 × 10) = √1742400 = 1320 m².' },
    ta: { q: 'ஒரு முக்கோண வடிவ நிலத்தின் பக்கங்கள் 22 மீ, 120 மீ, 122 மீ எனில் அதன் பரப்பு', options: ['1320 மீ²', '2640 மீ²', '660 மீ²', '1452 மீ²'], explanation: 's = 132; பரப்பு = √(132 × 110 × 12 × 10) = √1742400 = 1320 மீ².' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 7.1 Q4, p. 252', answer: 0,
    en: { q: 'The area of an equilateral triangle whose perimeter is 180 cm is (take √3 = 1.732)', options: ['1558.8 cm²', '3117.6 cm²', '519.6 cm²', '2700 cm²'], explanation: 'Side = 60 cm; area = (√3 ÷ 4) × 60² = 900√3 ≈ 1558.8 cm².' },
    ta: { q: '180 செமீ சுற்றளவு கொண்ட ஒரு சமபக்க முக்கோணத்தின் பரப்பு (√3 = 1.732)', options: ['1558.8 செமீ²', '3117.6 செமீ²', '519.6 செமீ²', '2700 செமீ²'], explanation: 'பக்கம் = 60 செமீ; பரப்பு = (√3 ÷ 4) × 60² = 900√3 ≈ 1558.8 செமீ².' },
  },
  {
    difficulty: 'medium', source: 'Book example 7.1, p. 249', answer: 0,
    en: { q: 'The sides of a triangular field are 28 m, 15 m and 41 m. The area of the field is', options: ['126 m²', '210 m²', '252 m²', '84 m²'], explanation: 's = 42; area = √(42 × 14 × 27 × 1) = 126 m². Levelling at ₹20 per m² costs ₹2520.' },
    ta: { q: 'ஒரு முக்கோண வடிவ வயலின் பக்கங்கள் 28 மீ, 15 மீ, 41 மீ எனில் வயலின் பரப்பு', options: ['126 மீ²', '210 மீ²', '252 மீ²', '84 மீ²'], explanation: 's = 42; பரப்பு = √(42 × 14 × 27 × 1) = 126 மீ². சதுர மீட்டருக்கு ₹20 வீதம் சமப்படுத்தச் செலவு ₹2520.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 7.4 Q3, p. 263', answer: 0,
    en: { q: 'The perimeter of an equilateral triangle is 30 cm. Its area is', options: ['25√3 cm²', '10√3 cm²', '12√3 cm²', '15√3 cm²'], explanation: 'Side = 10 cm; area = (√3 ÷ 4) × 100 = 25√3 cm².' },
    ta: { q: 'ஒரு சமபக்க முக்கோணத்தின் சுற்றளவு 30 செமீ எனில், அதன் பரப்பளவு', options: ['25√3 செமீ²', '10√3 செமீ²', '12√3 செமீ²', '15√3 செமீ²'], explanation: 'பக்கம் = 10 செமீ; பரப்பு = (√3 ÷ 4) × 100 = 25√3 செமீ².' },
  },
  {
    difficulty: 'medium', source: '§7.3, p. 251', answer: 0,
    en: { q: 'To find the area of a quadrilateral ABCD using Heron’s formula, we', options: ['divide it into two triangles by a diagonal and add their areas', 'multiply its two diagonals', 'multiply the four sides and take the square root', 'take half the product of two adjacent sides'], explanation: 'Area of ABCD = area of △ABC + area of △ACD, each found by Heron’s formula.' },
    ta: { q: 'ஹெரான் சூத்திரத்தைப் பயன்படுத்தி நாற்கரம் ABCD இன் பரப்பைக் காண', options: ['ஒரு மூலைவிட்டத்தால் இரு முக்கோணங்களாகப் பிரித்து அவற்றின் பரப்புகளைக் கூட்ட வேண்டும்', 'இரு மூலைவிட்டங்களைப் பெருக்க வேண்டும்', 'நான்கு பக்கங்களையும் பெருக்கி வர்க்கமூலம் காண வேண்டும்', 'அடுத்துள்ள இரு பக்கங்களின் பெருக்கலில் பாதி காண வேண்டும்'], explanation: 'ABCD இன் பரப்பு = △ABC இன் பரப்பு + △ACD இன் பரப்பு; ஒவ்வொன்றும் ஹெரான் சூத்திரத்தால் காணப்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: '§7.4.1, p. 254', answer: 0,
    en: { q: 'To find the area of only the four walls of a cuboidal room (leaving out floor and ceiling), we use its', options: ['lateral surface area', 'total surface area', 'volume', 'base area'], explanation: 'LSA = 2(l + b)h gives the area of the four walls; TSA would include floor and ceiling.' },
    ta: { q: 'கனசெவ்வக வடிவ அறையின் தரை, மேற்கூரை தவிர்த்து நான்கு சுவர்களின் பரப்பை மட்டும் காணப் பயன்படுவது', options: ['பக்கப்பரப்பு', 'மொத்தப்பரப்பு', 'கன அளவு', 'அடிப்பரப்பு'], explanation: 'பக்கப்பரப்பு = 2(l + b)h நான்கு சுவர்களின் பரப்பைத் தரும்; மொத்தப்பரப்பில் தரையும் மேற்கூரையும் சேரும்.' },
  },
  {
    difficulty: 'medium', source: 'Book example 7.4, p. 254', answer: 0,
    en: { q: 'The TSA and LSA of a cuboid of length 7.5 m, breadth 3 m and height 5 m are', options: ['150 m² and 105 m²', '105 m² and 150 m²', '75 m² and 105 m²', '150 m² and 112.5 m²'], explanation: 'TSA = 2(22.5 + 15 + 37.5) = 150 m²; LSA = 2(7.5 + 3) × 5 = 105 m².' },
    ta: { q: 'நீளம் 7.5 மீ, அகலம் 3 மீ, உயரம் 5 மீ கொண்ட கனசெவ்வகத்தின் மொத்தப்பரப்பு, பக்கப்பரப்பு முறையே', options: ['150 மீ², 105 மீ²', '105 மீ², 150 மீ²', '75 மீ², 105 மீ²', '150 மீ², 112.5 மீ²'], explanation: 'மொத்தப்பரப்பு = 2(22.5 + 15 + 37.5) = 150 மீ²; பக்கப்பரப்பு = 2(7.5 + 3) × 5 = 105 மீ².' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 7.2 Q1, p. 257', answer: 0,
    en: { q: 'The total surface area of a cuboid of length 20 cm, breadth 15 cm and height 8 cm is', options: ['1160 cm²', '580 cm²', '560 cm²', '2400 cm²'], explanation: 'TSA = 2(300 + 120 + 160) = 2 × 580 = 1160 cm².' },
    ta: { q: 'நீளம் 20 செமீ, அகலம் 15 செமீ, உயரம் 8 செமீ கொண்ட கனசெவ்வகத்தின் மொத்தப்பரப்பு', options: ['1160 செமீ²', '580 செமீ²', '560 செமீ²', '2400 செமீ²'], explanation: 'மொத்தப்பரப்பு = 2(300 + 120 + 160) = 2 × 580 = 1160 செமீ².' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 7.2 Q1, p. 257', answer: 0,
    en: { q: 'The lateral surface area of a cuboid of length 20 cm, breadth 15 cm and height 8 cm is', options: ['560 cm²', '280 cm²', '920 cm²', '1160 cm²'], explanation: 'LSA = 2(l + b)h = 2 × 35 × 8 = 560 cm².' },
    ta: { q: 'நீளம் 20 செமீ, அகலம் 15 செமீ, உயரம் 8 செமீ கொண்ட கனசெவ்வகத்தின் பக்கப்பரப்பு', options: ['560 செமீ²', '280 செமீ²', '920 செமீ²', '1160 செமீ²'], explanation: 'பக்கப்பரப்பு = 2(l + b)h = 2 × 35 × 8 = 560 செமீ².' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 7.2 Q4(i), p. 257', answer: 0,
    en: { q: 'The TSA and LSA of a cube of side 8 m are', options: ['384 m² and 256 m²', '256 m² and 384 m²', '512 m² and 384 m²', '384 m² and 192 m²'], explanation: 'TSA = 6 × 64 = 384 m²; LSA = 4 × 64 = 256 m².' },
    ta: { q: '8 மீ பக்க அளவுள்ள கனசதுரத்தின் மொத்தப்பரப்பு, பக்கப்பரப்பு முறையே', options: ['384 மீ², 256 மீ²', '256 மீ², 384 மீ²', '512 மீ², 384 மீ²', '384 மீ², 192 மீ²'], explanation: 'மொத்தப்பரப்பு = 6 × 64 = 384 மீ²; பக்கப்பரப்பு = 4 × 64 = 256 மீ².' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 7.2 Q4(ii), p. 257', answer: 0,
    en: { q: 'The TSA and LSA of a cube of side 21 cm are', options: ['2646 cm² and 1764 cm²', '1764 cm² and 2646 cm²', '9261 cm² and 2646 cm²', '2646 cm² and 1323 cm²'], explanation: 'a² = 441; TSA = 6 × 441 = 2646 cm²; LSA = 4 × 441 = 1764 cm².' },
    ta: { q: '21 செமீ பக்க அளவுள்ள கனசதுரத்தின் மொத்தப்பரப்பு, பக்கப்பரப்பு முறையே', options: ['2646 செமீ², 1764 செமீ²', '1764 செமீ², 2646 செமீ²', '9261 செமீ², 2646 செமீ²', '2646 செமீ², 1323 செமீ²'], explanation: 'a² = 441; மொத்தப்பரப்பு = 6 × 441 = 2646 செமீ²; பக்கப்பரப்பு = 4 × 441 = 1764 செமீ².' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 7.2 Q4(iii), p. 257', answer: 0,
    en: { q: 'The TSA and LSA of a cube of side 7.5 cm are', options: ['337.5 cm² and 225 cm²', '225 cm² and 337.5 cm²', '421.875 cm² and 337.5 cm²', '337.5 cm² and 168.75 cm²'], explanation: 'a² = 56.25; TSA = 6 × 56.25 = 337.5 cm²; LSA = 4 × 56.25 = 225 cm².' },
    ta: { q: '7.5 செமீ பக்க அளவுள்ள கனசதுரத்தின் மொத்தப்பரப்பு, பக்கப்பரப்பு முறையே', options: ['337.5 செமீ², 225 செமீ²', '225 செமீ², 337.5 செமீ²', '421.875 செமீ², 337.5 செமீ²', '337.5 செமீ², 168.75 செமீ²'], explanation: 'a² = 56.25; மொத்தப்பரப்பு = 6 × 56.25 = 337.5 செமீ²; பக்கப்பரப்பு = 4 × 56.25 = 225 செமீ².' },
  },
  {
    difficulty: 'medium', source: 'Book example 7.7, p. 256', answer: 0,
    en: { q: 'A cube has a total surface area of 486 cm². Its lateral surface area is', options: ['324 cm²', '81 cm²', '243 cm²', '729 cm²'], explanation: '6a² = 486 gives a² = 81, a = 9 cm; LSA = 4 × 81 = 324 cm².' },
    ta: { q: 'ஒரு கனசதுரத்தின் மொத்தப்பரப்பு 486 செமீ² எனில், அதன் பக்கப்பரப்பு', options: ['324 செமீ²', '81 செமீ²', '243 செமீ²', '729 செமீ²'], explanation: '6a² = 486 ⇒ a² = 81, a = 9 செமீ; பக்கப்பரப்பு = 4 × 81 = 324 செமீ².' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 7.2 Q5, p. 257', answer: 0,
    en: { q: 'If the total surface area of a cube is 2400 cm², its lateral surface area is', options: ['1600 cm²', '1200 cm²', '2000 cm²', '400 cm²'], explanation: '6a² = 2400 ⇒ a² = 400; LSA = 4a² = 1600 cm².' },
    ta: { q: 'ஒரு கனசதுரத்தின் மொத்தப்பரப்பு 2400 செமீ² எனில், அதன் பக்கப்பரப்பு', options: ['1600 செமீ²', '1200 செமீ²', '2000 செமீ²', '400 செமீ²'], explanation: '6a² = 2400 ⇒ a² = 400; பக்கப்பரப்பு = 4a² = 1600 செமீ².' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 7.4 Q5, p. 264', answer: 0,
    en: { q: 'If the lateral surface area of a cube is 600 cm², then its total surface area is', options: ['900 cm²', '150 cm²', '400 cm²', '1350 cm²'], explanation: '4a² = 600 ⇒ a² = 150; TSA = 6 × 150 = 900 cm².' },
    ta: { q: 'ஒரு கனசதுரத்தின் பக்கப்பரப்பு 600 செமீ² எனில், அதன் மொத்தப்பரப்பு', options: ['900 செமீ²', '150 செமீ²', '400 செமீ²', '1350 செமீ²'], explanation: '4a² = 600 ⇒ a² = 150; மொத்தப்பரப்பு = 6 × 150 = 900 செமீ².' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 7.4 Q6, p. 264', answer: 0,
    en: { q: 'The total surface area of a cuboid with dimensions 10 cm × 6 cm × 5 cm is', options: ['280 cm²', '300 cm²', '360 cm²', '600 cm²'], explanation: 'TSA = 2(60 + 30 + 50) = 2 × 140 = 280 cm².' },
    ta: { q: '10 செமீ × 6 செமீ × 5 செமீ அளவுள்ள ஒரு கனசெவ்வகப் பெட்டியின் மொத்தப்பரப்பு', options: ['280 செமீ²', '300 செமீ²', '360 செமீ²', '600 செமீ²'], explanation: 'மொத்தப்பரப்பு = 2(60 + 30 + 50) = 2 × 140 = 280 செமீ².' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 7.4 Q7, p. 264', answer: 0,
    en: { q: 'If the ratio of the sides of two cubes is 2 : 3, then the ratio of their surface areas is', options: ['4 : 9', '4 : 6', '6 : 9', '8 : 27'], explanation: 'Ratio of surface areas = (ratio of sides)² = 2² : 3² = 4 : 9.' },
    ta: { q: 'இரு கனசதுரங்களின் பக்கங்களின் விகிதம் 2 : 3 எனில் அவற்றின் புறப்பரப்புகளின் விகிதம்', options: ['4 : 9', '4 : 6', '6 : 9', '8 : 27'], explanation: 'புறப்பரப்புகளின் விகிதம் = (பக்கங்களின் விகிதம்)² = 2² : 3² = 4 : 9.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 7.4 Q8, p. 264', answer: 0,
    en: { q: 'The volume of a cuboid is 660 cm³ and the area of its base is 33 cm². Its height is', options: ['20 cm', '10 cm', '12 cm', '22 cm'], explanation: 'Height = volume ÷ base area = 660 ÷ 33 = 20 cm.' },
    ta: { q: 'ஒரு கனசெவ்வகத்தின் கன அளவு 660 செமீ³, அதன் அடிப்பரப்பு 33 செமீ² எனில் அதன் உயரம்', options: ['20 செமீ', '10 செமீ', '12 செமீ', '22 செமீ'], explanation: 'உயரம் = கன அளவு ÷ அடிப்பரப்பு = 660 ÷ 33 = 20 செமீ.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 7.4 Q9, p. 264', answer: 0,
    en: { q: 'The capacity of a water tank of dimensions 10 m × 5 m × 1.5 m is', options: ['75000 litres', '75 litres', '750 litres', '7500 litres'], explanation: 'Volume = 75 m³ = 75 × 1000 = 75000 litres.' },
    ta: { q: '10 மீ × 5 மீ × 1.5 மீ அளவுள்ள ஒரு நீர்த் தொட்டியின் கொள்ளளவு', options: ['75000 லிட்டர்', '75 லிட்டர்', '750 லிட்டர்', '7500 லிட்டர்'], explanation: 'கன அளவு = 75 மீ³ = 75 × 1000 = 75000 லிட்டர்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 7.3 Q1(ii), p. 263', answer: 0,
    en: { q: 'The volume of a cuboid of length 60 m, breadth 25 m and height 1.5 m is', options: ['2250 m³', '225 m³', '22500 m³', '1500 m³'], explanation: 'V = 60 × 25 × 1.5 = 2250 m³.' },
    ta: { q: 'நீளம் 60 மீ, அகலம் 25 மீ, உயரம் 1.5 மீ கொண்ட கனசெவ்வகத்தின் கன அளவு', options: ['2250 மீ³', '225 மீ³', '22500 மீ³', '1500 மீ³'], explanation: 'V = 60 × 25 × 1.5 = 2250 மீ³.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 7.3 Q2, p. 263', answer: 0,
    en: { q: 'A match box measures 6 cm × 3.5 cm × 2.5 cm. The volume of a packet containing 12 such match boxes is', options: ['630 cm³', '52.5 cm³', '315 cm³', '6300 cm³'], explanation: 'One box = 52.5 cm³; 12 boxes = 12 × 52.5 = 630 cm³.' },
    ta: { q: 'ஒரு தீப்பெட்டியின் அளவுகள் 6 செமீ × 3.5 செமீ × 2.5 செமீ. இதே அளவுடைய 12 தீப்பெட்டிகள் கொண்ட கட்டின் கன அளவு', options: ['630 செமீ³', '52.5 செமீ³', '315 செமீ³', '6300 செமீ³'], explanation: 'ஒரு பெட்டி = 52.5 செமீ³; 12 பெட்டிகள் = 12 × 52.5 = 630 செமீ³.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 7.3 Q4, p. 263', answer: 0,
    en: { q: 'The length, breadth and depth of a pond are 20.5 m, 16 m and 8 m. Its capacity in litres is', options: ['26,24,000 litres', '2624 litres', '2,62,400 litres', '2,62,40,000 litres'], explanation: 'Volume = 20.5 × 16 × 8 = 2624 m³ = 2624 × 1000 = 26,24,000 litres.' },
    ta: { q: 'ஒரு குளத்தின் நீளம், அகலம், ஆழம் முறையே 20.5 மீ, 16 மீ, 8 மீ எனில் அதன் கொள்ளளவு', options: ['26,24,000 லிட்டர்', '2624 லிட்டர்', '2,62,400 லிட்டர்', '2,62,40,000 லிட்டர்'], explanation: 'கன அளவு = 20.5 × 16 × 8 = 2624 மீ³ = 2624 × 1000 = 26,24,000 லிட்டர்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 7.3 Q6, p. 263', answer: 0,
    en: { q: 'The volume of a container is 1440 m³. Its length and breadth are 15 m and 8 m. Its height is', options: ['12 m', '120 m', '1.2 m', '96 m'], explanation: 'h = V ÷ (l × b) = 1440 ÷ 120 = 12 m.' },
    ta: { q: 'ஒரு கொள்கலனின் கன அளவு 1440 மீ³. அதன் நீளம், அகலம் முறையே 15 மீ, 8 மீ எனில் அதன் உயரம்', options: ['12 மீ', '120 மீ', '1.2 மீ', '96 மீ'], explanation: 'h = V ÷ (l × b) = 1440 ÷ 120 = 12 மீ.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 7.3 Q7(ii), p. 263', answer: 0,
    en: { q: 'The volume of a cube of side 3.5 m is', options: ['42.875 m³', '12.25 m³', '73.5 m³', '49 m³'], explanation: 'V = 3.5³ = 3.5 × 3.5 × 3.5 = 42.875 m³.' },
    ta: { q: '3.5 மீ பக்க அளவுள்ள கனசதுரத்தின் கன அளவு', options: ['42.875 மீ³', '12.25 மீ³', '73.5 மீ³', '49 மீ³'], explanation: 'V = 3.5³ = 3.5 × 3.5 × 3.5 = 42.875 மீ³.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 7.3 Q7(iii), p. 263', answer: 0,
    en: { q: 'The volume of a cube of side 21 cm is', options: ['9261 cm³', '441 cm³', '2646 cm³', '1764 cm³'], explanation: 'V = 21³ = 441 × 21 = 9261 cm³.' },
    ta: { q: '21 செமீ பக்க அளவுள்ள கனசதுரத்தின் கன அளவு', options: ['9261 செமீ³', '441 செமீ³', '2646 செமீ³', '1764 செமீ³'], explanation: 'V = 21³ = 441 × 21 = 9261 செமீ³.' },
  },
  {
    difficulty: 'medium', source: 'Book example 7.14, p. 261', answer: 0,
    en: { q: 'A cubical tank can hold 64,000 litres of water. The length of its side is', options: ['4 m', '40 m', '8 m', '16 m'], explanation: '64,000 litres = 64 m³; a = ∛64 = 4 m.' },
    ta: { q: 'ஒரு கனசதுரத் தொட்டி 64,000 லிட்டர் நீர் கொள்ளும் எனில் அதன் பக்க நீளம்', options: ['4 மீ', '40 மீ', '8 மீ', '16 மீ'], explanation: '64,000 லிட்டர் = 64 மீ³; a = ∛64 = 4 மீ.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 7.3 Q8, p. 263', answer: 0,
    en: { q: 'A cubical milk tank can hold 125000 litres of milk. The length of its side is', options: ['5 m', '50 m', '25 m', '0.5 m'], explanation: '125000 litres = 125 m³; side = ∛125 = 5 m.' },
    ta: { q: 'ஒரு கனசதுர வடிவிலான பால் தொட்டி 1,25,000 லிட்டர் கொள்ளளவு கொண்டது எனில் அதன் பக்க நீளம்', options: ['5 மீ', '50 மீ', '25 மீ', '0.5 மீ'], explanation: '1,25,000 லிட்டர் = 125 மீ³; பக்கம் = ∛125 = 5 மீ.' },
  },
  {
    difficulty: 'medium', source: 'Book example 7.9, p. 259', answer: 0,
    en: { q: 'A cuboid is 120 mm long, 10 cm broad and 8 cm high. The volume of 10 such cuboids is', options: ['9600 cm³', '96000 cm³', '960 cm³', '1200 cm³'], explanation: 'l = 120 mm = 12 cm; one cuboid = 12 × 10 × 8 = 960 cm³; 10 cuboids = 9600 cm³.' },
    ta: { q: 'ஒரு கனசெவ்வகத்தின் நீளம் 120 மிமீ, அகலம் 10 செமீ, உயரம் 8 செமீ. இதுபோன்ற 10 கனசெவ்வகங்களின் கன அளவு', options: ['9600 செமீ³', '96000 செமீ³', '960 செமீ³', '1200 செமீ³'], explanation: 'l = 120 மிமீ = 12 செமீ; ஒன்று = 12 × 10 × 8 = 960 செமீ³; 10 கனசெவ்வகங்கள் = 9600 செமீ³.' },
  },
  {
    difficulty: 'medium', source: 'Book example 7.11, p. 260', answer: 0,
    en: { q: 'A fish tank measures 3.8 m × 2.5 m × 1.6 m. How many litres of water can it hold?', options: ['15200 litres', '1520 litres', '152000 litres', '15.2 litres'], explanation: 'Volume = 15.2 m³ = 15.2 × 1000 = 15200 litres.' },
    ta: { q: '3.8 மீ × 2.5 மீ × 1.6 மீ அளவுள்ள மீன் தொட்டியில் எத்தனை லிட்டர் நீர் கொள்ளும்?', options: ['15200 லிட்டர்', '1520 லிட்டர்', '152000 லிட்டர்', '15.2 லிட்டர்'], explanation: 'கன அளவு = 15.2 மீ³ = 15.2 × 1000 = 15200 லிட்டர்.' },
  },
  {
    difficulty: 'medium', source: '§7.5.1 Thinking Corner, p. 259', answer: 0,
    en: { q: 'A cuboid of volume 120 cm³ has length 8 cm and breadth 5 cm. Its height is', options: ['3 cm', '4 cm', '5 cm', '6 cm'], explanation: 'h = 120 ÷ (8 × 5) = 120 ÷ 40 = 3 cm.' },
    ta: { q: '120 செமீ³ கன அளவுள்ள ஒரு கனசெவ்வகத்தின் நீளம் 8 செமீ, அகலம் 5 செமீ எனில் அதன் உயரம்', options: ['3 செமீ', '4 செமீ', '5 செமீ', '6 செமீ'], explanation: 'h = 120 ÷ (8 × 5) = 120 ÷ 40 = 3 செமீ.' },
  },
  {
    difficulty: 'medium', source: '§7.5.2 Note, p. 261', answer: 0,
    en: { q: 'The sides of two cubes are in the ratio 1 : 2. The ratio of their volumes is', options: ['1 : 8', '1 : 4', '1 : 2', '1 : 6'], explanation: 'Ratio of volumes = (ratio of sides)³ = 1³ : 2³ = 1 : 8.' },
    ta: { q: 'இரு கனசதுரங்களின் பக்கங்களின் விகிதம் 1 : 2 எனில் அவற்றின் கன அளவுகளின் விகிதம்', options: ['1 : 8', '1 : 4', '1 : 2', '1 : 6'], explanation: 'கன அளவுகளின் விகிதம் = (பக்கங்களின் விகிதம்)³ = 1³ : 2³ = 1 : 8.' },
  },

  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise 7.1 Q2, p. 252', answer: 0,
    en: { q: 'The sides of a triangular ground are 22 m, 120 m and 122 m. The cost of levelling it at ₹20 per m² is', options: ['₹26,400', '₹13,200', '₹52,800', '₹2,640'], explanation: 'Area = √(132 × 110 × 12 × 10) = 1320 m²; cost = 1320 × 20 = ₹26,400.' },
    ta: { q: 'ஒரு முக்கோண வடிவ நிலத்தின் பக்கங்கள் 22 மீ, 120 மீ, 122 மீ. ஒரு சதுர மீட்டருக்கு ₹20 வீதம் அதைச் சமப்படுத்த ஆகும் மொத்தச் செலவு', options: ['₹26,400', '₹13,200', '₹52,800', '₹2,640'], explanation: 'பரப்பு = √(132 × 110 × 12 × 10) = 1320 மீ²; செலவு = 1320 × 20 = ₹26,400.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 7.1 Q3, p. 252', answer: 0,
    en: { q: 'The perimeter of a triangular plot is 600 m and its sides are in the ratio 5 : 12 : 13. The area of the plot is', options: ['12000 m²', '24000 m²', '6000 m²', '26000 m²'], explanation: 'Sides are 100 m, 240 m, 260 m; s = 300; area = √(300 × 200 × 60 × 40) = 12000 m².' },
    ta: { q: 'ஒரு முக்கோண வடிவ மனையின் சுற்றளவு 600 மீ; அதன் பக்கங்கள் 5 : 12 : 13 என்ற விகிதத்தில் உள்ளன எனில் மனையின் பரப்பு', options: ['12000 மீ²', '24000 மீ²', '6000 மீ²', '26000 மீ²'], explanation: 'பக்கங்கள் 100 மீ, 240 மீ, 260 மீ; s = 300; பரப்பு = √(300 × 200 × 60 × 40) = 12000 மீ².' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 7.1 Q5, p. 252', answer: 0,
    en: { q: 'An advertisement board is an isosceles triangle with perimeter 36 m and each equal side 13 m. The cost of painting it at ₹17.50 per m² is', options: ['₹1050', '₹630', '₹2100', '₹1137.50'], explanation: 'Base = 10 m; s = 18; area = √(18 × 5 × 5 × 8) = 60 m²; cost = 60 × 17.50 = ₹1050.' },
    ta: { q: 'இருசமபக்க முக்கோண வடிவிலுள்ள விளம்பரப் பலகையின் சுற்றளவு 36 மீ, ஒவ்வொரு சமபக்கத்தின் நீளம் 13 மீ. ஒரு சதுர மீட்டருக்கு ₹17.50 வீதம் வண்ணம் பூச ஆகும் செலவு', options: ['₹1050', '₹630', '₹2100', '₹1137.50'], explanation: 'அடிப்பக்கம் = 10 மீ; s = 18; பரப்பு = √(18 × 5 × 5 × 8) = 60 மீ²; செலவு = 60 × 17.50 = ₹1050.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 7.1 Q6, p. 252', answer: 0, imageUrl: `${IMG}/unshaded-region.png`,
    en: { q: 'In the figure, ∠ADB = 90°, AD = 12 cm, BD = 16 cm, BC = 42 cm and AC = 34 cm. The area of the unshaded region (△ABC minus △ABD) is', options: ['240 cm²', '336 cm²', '96 cm²', '432 cm²'], explanation: 'AB = √(12² + 16²) = 20 cm. △ABC: s = 48, area = √(48 × 28 × 6 × 14) = 336 cm². △ABD = ½ × 12 × 16 = 96 cm². Unshaded = 336 − 96 = 240 cm².' },
    ta: { q: 'படத்தில் ∠ADB = 90°, AD = 12 செமீ, BD = 16 செமீ, BC = 42 செமீ, AC = 34 செமீ. நிழலிடப்படாத பகுதியின் (△ABC − △ABD) பரப்பு', options: ['240 செமீ²', '336 செமீ²', '96 செமீ²', '432 செமீ²'], explanation: 'AB = √(12² + 16²) = 20 செமீ. △ABC: s = 48, பரப்பு = √(48 × 28 × 6 × 14) = 336 செமீ². △ABD = ½ × 12 × 16 = 96 செமீ². நிழலிடப்படாத பகுதி = 336 − 96 = 240 செமீ².' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 7.1 Q7, p. 253', answer: 0,
    en: { q: 'The area of quadrilateral ABCD with AB = 13 cm, BC = 12 cm, CD = 9 cm, AD = 14 cm and diagonal BD = 15 cm is', options: ['138 cm²', '84 cm²', '192 cm²', '54 cm²'], explanation: '△ABD (13, 14, 15): s = 21, area = √(21 × 8 × 7 × 6) = 84 cm². △BCD (12, 9, 15): s = 18, area = √(18 × 6 × 9 × 3) = 54 cm². Total = 138 cm².' },
    ta: { q: 'AB = 13 செமீ, BC = 12 செமீ, CD = 9 செமீ, AD = 14 செமீ பக்கங்களாகவும் BD = 15 செமீ மூலைவிட்டமாகவும் கொண்ட நாற்கரம் ABCD இன் பரப்பு', options: ['138 செமீ²', '84 செமீ²', '192 செமீ²', '54 செமீ²'], explanation: '△ABD (13, 14, 15): s = 21, பரப்பு = √(21 × 8 × 7 × 6) = 84 செமீ². △BCD (12, 9, 15): s = 18, பரப்பு = √(18 × 6 × 9 × 3) = 54 செமீ². மொத்தம் = 138 செமீ².' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 7.1 Q8, p. 253', answer: 0,
    en: { q: 'A park is a quadrilateral with sides 15 m, 20 m, 26 m and 17 m, and the angle between the first two sides is a right angle. The area of the park is', options: ['354 m²', '204 m²', '504 m²', '300 m²'], explanation: 'Diagonal = √(15² + 20²) = 25 m. Right triangle = ½ × 15 × 20 = 150 m². Triangle (26, 17, 25): s = 34, area = √(34 × 8 × 17 × 9) = 204 m². Total = 354 m².' },
    ta: { q: 'ஒரு பூங்கா நாற்கர வடிவிலுள்ளது. அதன் பக்கங்கள் 15 மீ, 20 மீ, 26 மீ, 17 மீ; முதல் இரண்டு பக்கங்களுக்கு இடையேயுள்ள கோணம் செங்கோணம் எனில் பூங்காவின் பரப்பு', options: ['354 மீ²', '204 மீ²', '504 மீ²', '300 மீ²'], explanation: 'மூலைவிட்டம் = √(15² + 20²) = 25 மீ. செங்கோண முக்கோணம் = ½ × 15 × 20 = 150 மீ². (26, 17, 25) முக்கோணம்: s = 34, பரப்பு = √(34 × 8 × 17 × 9) = 204 மீ². மொத்தம் = 354 மீ².' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 7.1 Q9, p. 253', answer: 0,
    en: { q: 'A land is in the shape of a rhombus. Its perimeter is 160 m and one of its diagonals is 48 m. The area of the land is', options: ['1536 m²', '768 m²', '1920 m²', '3072 m²'], explanation: 'Side = 40 m. Triangle (40, 40, 48): s = 64, area = √(64 × 24 × 24 × 16) = 768 m². Rhombus = 2 × 768 = 1536 m².' },
    ta: { q: 'ஒரு நிலம் சாய்சதுர வடிவில் உள்ளது. அதன் சுற்றளவு 160 மீ, ஒரு மூலைவிட்டத்தின் அளவு 48 மீ எனில் நிலத்தின் பரப்பு', options: ['1536 மீ²', '768 மீ²', '1920 மீ²', '3072 மீ²'], explanation: 'பக்கம் = 40 மீ. (40, 40, 48) முக்கோணம்: s = 64, பரப்பு = √(64 × 24 × 24 × 16) = 768 மீ². சாய்சதுரம் = 2 × 768 = 1536 மீ².' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 7.1 Q10, p. 253', answer: 0,
    en: { q: 'The adjacent sides of a parallelogram are 34 m and 20 m, and one diagonal is 42 m. The area of the parallelogram is', options: ['672 m²', '336 m²', '680 m²', '1344 m²'], explanation: 'Triangle (34, 20, 42): s = 48, area = √(48 × 14 × 28 × 6) = 336 m². Parallelogram = 2 × 336 = 672 m².' },
    ta: { q: 'ஓர் இணைகரத்தின் அடுத்தடுத்த பக்கங்கள் 34 மீ, 20 மீ; ஒரு மூலைவிட்டம் 42 மீ எனில் இணைகரத்தின் பரப்பு', options: ['672 மீ²', '336 மீ²', '680 மீ²', '1344 மீ²'], explanation: '(34, 20, 42) முக்கோணம்: s = 48, பரப்பு = √(48 × 14 × 28 × 6) = 336 மீ². இணைகரம் = 2 × 336 = 672 மீ².' },
  },
  {
    difficulty: 'hard', source: 'Book example 7.2, p. 250', answer: 0,
    en: { q: 'Three triangular plots each have perimeter 120 m: a right triangle (30, 40, 50 m), an acute triangle (35, 40, 45 m) and an equilateral triangle (40 m each). Which is the most spacious?', options: ['The equilateral triangle, about 692.8 m²', 'The right triangle, 600 m²', 'The acute triangle, about 670.8 m²', 'All three have the same area'], explanation: 'With s = 60 for all, Heron gives 600 m², 300√5 ≈ 670.8 m² and 400√3 ≈ 692.8 m². For equal perimeters the equilateral triangle has the greatest area.' },
    ta: { q: 'ஒவ்வொன்றும் 120 மீ சுற்றளவுள்ள மூன்று முக்கோண மனைகள்: செங்கோண முக்கோணம் (30, 40, 50 மீ), குறுங்கோண முக்கோணம் (35, 40, 45 மீ), சமபக்க முக்கோணம் (ஒவ்வொன்றும் 40 மீ). இவற்றில் அதிக இடவசதி உடையது எது?', options: ['சமபக்க முக்கோணம், சுமார் 692.8 மீ²', 'செங்கோண முக்கோணம், 600 மீ²', 'குறுங்கோண முக்கோணம், சுமார் 670.8 மீ²', 'மூன்றுக்கும் ஒரே பரப்பு'], explanation: 'மூன்றுக்கும் s = 60; ஹெரான் சூத்திரப்படி பரப்புகள் 600 மீ², 300√5 ≈ 670.8 மீ², 400√3 ≈ 692.8 மீ². சம சுற்றளவுகளில் சமபக்க முக்கோணத்திற்கே அதிகப் பரப்பு.' },
  },
  {
    difficulty: 'hard', source: 'Book example 7.3, p. 252', answer: 0, imageUrl: `${IMG}/rhombus-field.png`,
    en: { q: 'A field ABCD is a rhombus with perimeter 400 m and diagonal AC = 120 m (see figure). The area of the field is', options: ['9600 m²', '4800 m²', '12000 m²', '6000 m²'], explanation: 'Side = 100 m. △ABC (100, 100, 120): s = 160, area = √(160 × 60 × 60 × 40) = 4800 m². Field = 2 × 4800 = 9600 m².' },
    ta: { q: 'சாய்சதுர வடிவ வயல் ABCD இன் சுற்றளவு 400 மீ, மூலைவிட்டம் AC = 120 மீ (படம் காண்க). வயலின் பரப்பு', options: ['9600 மீ²', '4800 மீ²', '12000 மீ²', '6000 மீ²'], explanation: 'பக்கம் = 100 மீ. △ABC (100, 100, 120): s = 160, பரப்பு = √(160 × 60 × 60 × 40) = 4800 மீ². வயல் = 2 × 4800 = 9600 மீ².' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 7.2 Q2, p. 257', answer: 0,
    en: { q: 'A cuboidal box measures 6 m × 400 cm × 1.5 m. The cost of painting its entire outer surface at ₹22 per m² is', options: ['₹1716', '₹858', '₹1320', '₹3432'], explanation: '400 cm = 4 m. TSA = 2(24 + 6 + 9) = 78 m²; cost = 78 × 22 = ₹1716.' },
    ta: { q: '6 மீ × 400 செமீ × 1.5 மீ அளவுள்ள ஒரு கனசெவ்வகப் பெட்டியின் முழு வெளிப்புறத்திற்கும் ஒரு சதுர மீட்டருக்கு ₹22 வீதம் வண்ணம் பூச ஆகும் செலவு', options: ['₹1716', '₹858', '₹1320', '₹3432'], explanation: '400 செமீ = 4 மீ. மொத்தப்பரப்பு = 2(24 + 6 + 9) = 78 மீ²; செலவு = 78 × 22 = ₹1716.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 7.2 Q3, p. 257', answer: 0,
    en: { q: 'A hall measures 10 m × 9 m × 8 m. The cost of white washing its walls and ceiling at ₹8.50 per m² is', options: ['₹3349', '₹2584', '₹4114', '₹765'], explanation: 'Walls = 2(10 + 9) × 8 = 304 m²; ceiling = 90 m²; total 394 m² × 8.50 = ₹3349.' },
    ta: { q: '10 மீ × 9 மீ × 8 மீ அளவுள்ள ஓர் அறையின் சுவர்கள் மற்றும் மேற்கூரைக்கு ஒரு சதுர மீட்டருக்கு ₹8.50 வீதம் வெள்ளையடிக்க ஆகும் செலவு', options: ['₹3349', '₹2584', '₹4114', '₹765'], explanation: 'சுவர்கள் = 2(10 + 9) × 8 = 304 மீ²; மேற்கூரை = 90 மீ²; மொத்தம் 394 மீ² × 8.50 = ₹3349.' },
  },
  {
    difficulty: 'hard', source: 'Book example 7.5, p. 255', answer: 0,
    en: { q: 'A hall is 25 m long, 15 m broad and 5 m high. The cost of renovating its floor and four walls at ₹80 per m² is', options: ['₹62,000', '₹32,000', '₹92,000', '₹30,000'], explanation: 'Walls = 2(25 + 15) × 5 = 400 m²; floor = 375 m²; 775 m² × 80 = ₹62,000.' },
    ta: { q: 'ஓர் அறையின் நீளம், அகலம், உயரம் முறையே 25 மீ, 15 மீ, 5 மீ. அதன் தரை மற்றும் நான்கு சுவர்களைப் புதுப்பிக்க ஒரு சதுர மீட்டருக்கு ₹80 வீதம் ஆகும் மொத்தச் செலவு', options: ['₹62,000', '₹32,000', '₹92,000', '₹30,000'], explanation: 'சுவர்கள் = 2(25 + 15) × 5 = 400 மீ²; தரை = 375 மீ²; 775 மீ² × 80 = ₹62,000.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 7.2 Q6, p. 257', answer: 0,
    en: { q: 'A cubical container of side 6.5 m is painted on its entire outer surface at ₹24 per m². The area painted and the cost are', options: ['253.5 m² and ₹6084', '169 m² and ₹4056', '253.5 m² and ₹6804', '274.625 m² and ₹6591'], explanation: 'TSA = 6 × 6.5² = 6 × 42.25 = 253.5 m²; cost = 253.5 × 24 = ₹6084.' },
    ta: { q: '6.5 மீ பக்க அளவுள்ள கனசதுர வடிவக் கொள்கலனின் முழு வெளிப்புறத்திற்கும் ஒரு சதுர மீட்டருக்கு ₹24 வீதம் வண்ணம் பூசப்படுகிறது. பூசப்படும் பரப்பும் செலவும்', options: ['253.5 மீ², ₹6084', '169 மீ², ₹4056', '253.5 மீ², ₹6804', '274.625 மீ², ₹6591'], explanation: 'மொத்தப்பரப்பு = 6 × 6.5² = 6 × 42.25 = 253.5 மீ²; செலவு = 253.5 × 24 = ₹6084.' },
  },
  {
    difficulty: 'hard', source: 'Book example 7.8, p. 257', answer: 0,
    en: { q: 'Two identical cubes of side 7 cm are joined end to end. The TSA and LSA of the resulting cuboid are', options: ['490 cm² and 294 cm²', '588 cm² and 392 cm²', '490 cm² and 392 cm²', '294 cm² and 196 cm²'], explanation: 'Cuboid 14 × 7 × 7: TSA = 2(98 + 49 + 98) = 490 cm²; LSA = 2(14 + 7) × 7 = 294 cm².' },
    ta: { q: '7 செமீ பக்கமுள்ள இரு சர்வசம கனசதுரங்கள் பக்கவாட்டில் இணைக்கப்படுகின்றன. கிடைக்கும் கனசெவ்வகத்தின் மொத்தப்பரப்பு, பக்கப்பரப்பு முறையே', options: ['490 செமீ², 294 செமீ²', '588 செமீ², 392 செமீ²', '490 செமீ², 392 செமீ²', '294 செமீ², 196 செமீ²'], explanation: 'கனசெவ்வகம் 14 × 7 × 7: மொத்தப்பரப்பு = 2(98 + 49 + 98) = 490 செமீ²; பக்கப்பரப்பு = 2(14 + 7) × 7 = 294 செமீ².' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 7.2 Q7, p. 257', answer: 0,
    en: { q: 'Three identical cubes of side 4 cm are joined end to end. The TSA and LSA of the resulting cuboid are', options: ['224 cm² and 128 cm²', '288 cm² and 192 cm²', '224 cm² and 192 cm²', '192 cm² and 128 cm²'], explanation: 'Cuboid 12 × 4 × 4: TSA = 2(48 + 16 + 48) = 224 cm²; LSA = 2(12 + 4) × 4 = 128 cm².' },
    ta: { q: '4 செமீ பக்கமுள்ள மூன்று சர்வசம கனசதுரங்கள் பக்கவாட்டில் இணைக்கப்படுகின்றன. கிடைக்கும் கனசெவ்வகத்தின் மொத்தப்பரப்பு, பக்கப்பரப்பு முறையே', options: ['224 செமீ², 128 செமீ²', '288 செமீ², 192 செமீ²', '224 செமீ², 192 செமீ²', '192 செமீ², 128 செமீ²'], explanation: 'கனசெவ்வகம் 12 × 4 × 4: மொத்தப்பரப்பு = 2(48 + 16 + 48) = 224 செமீ²; பக்கப்பரப்பு = 2(12 + 4) × 4 = 128 செமீ².' },
  },
  {
    difficulty: 'hard', source: 'Book example 7.10, p. 259', answer: 0,
    en: { q: 'The length, breadth and height of a cuboid are in the ratio 7 : 5 : 2 and its volume is 35840 cm³. Its dimensions are', options: ['56 cm, 40 cm, 16 cm', '49 cm, 35 cm, 14 cm', '70 cm, 50 cm, 20 cm', '28 cm, 20 cm, 8 cm'], explanation: '7x × 5x × 2x = 70x³ = 35840 ⇒ x³ = 512, x = 8; dimensions 56 cm, 40 cm, 16 cm.' },
    ta: { q: 'ஒரு கனசெவ்வகத்தின் நீளம், அகலம், உயரம் 7 : 5 : 2 என்ற விகிதத்தில் உள்ளன; அதன் கன அளவு 35840 செமீ³ எனில் அதன் அளவுகள்', options: ['56 செமீ, 40 செமீ, 16 செமீ', '49 செமீ, 35 செமீ, 14 செமீ', '70 செமீ, 50 செமீ, 20 செமீ', '28 செமீ, 20 செமீ, 8 செமீ'], explanation: '7x × 5x × 2x = 70x³ = 35840 ⇒ x³ = 512, x = 8; அளவுகள் 56 செமீ, 40 செமீ, 16 செமீ.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 7.3 Q3, p. 263', answer: 0,
    en: { q: 'The length, breadth and height of a chocolate box are in the ratio 5 : 4 : 3 and its volume is 7500 cm³. Its dimensions are', options: ['25 cm, 20 cm, 15 cm', '5 cm, 4 cm, 3 cm', '50 cm, 40 cm, 30 cm', '15 cm, 12 cm, 9 cm'], explanation: '5x × 4x × 3x = 60x³ = 7500 ⇒ x³ = 125, x = 5; dimensions 25 cm, 20 cm, 15 cm.' },
    ta: { q: 'ஒரு சாக்லேட் பெட்டியின் நீளம், அகலம், உயரம் 5 : 4 : 3 என்ற விகிதத்தில் உள்ளன; அதன் கன அளவு 7500 செமீ³ எனில் அதன் பக்க அளவுகள்', options: ['25 செமீ, 20 செமீ, 15 செமீ', '5 செமீ, 4 செமீ, 3 செமீ', '50 செமீ, 40 செமீ, 30 செமீ', '15 செமீ, 12 செமீ, 9 செமீ'], explanation: '5x × 4x × 3x = 60x³ = 7500 ⇒ x³ = 125, x = 5; அளவுகள் 25 செமீ, 20 செமீ, 15 செமீ.' },
  },
  {
    difficulty: 'hard', source: 'Book example 7.12, p. 260', answer: 0,
    en: { q: 'Sweet boxes measure 22 cm × 18 cm × 10 cm. How many can be packed in a carton of 1 m × 88 cm × 63 cm?', options: ['140', '1400', '14', '280'], explanation: 'Number = (100 × 88 × 63) ÷ (22 × 18 × 10) = 554400 ÷ 3960 = 140 boxes.' },
    ta: { q: 'ஓர் இனிப்புப் பெட்டியின் அளவுகள் 22 செமீ × 18 செமீ × 10 செமீ. 1 மீ × 88 செமீ × 63 செமீ அளவுள்ள அட்டைப்பெட்டியில் எத்தனை இனிப்புப் பெட்டிகளை அடுக்கலாம்?', options: ['140', '1400', '14', '280'], explanation: 'எண்ணிக்கை = (100 × 88 × 63) ÷ (22 × 18 × 10) = 554400 ÷ 3960 = 140 பெட்டிகள்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 7.3 Q5, p. 263', answer: 0,
    en: { q: 'Bricks measure 24 cm × 12 cm × 8 cm. How many are needed to build a wall 20 m long, 48 cm broad and 6 m high?', options: ['25000', '2500', '250000', '12500'], explanation: 'Wall = 2000 × 48 × 600 = 5,76,00,000 cm³; brick = 2304 cm³; number = 25000.' },
    ta: { q: 'ஒரு செங்கலின் அளவுகள் 24 செமீ × 12 செமீ × 8 செமீ. 20 மீ நீளம், 48 செமீ அகலம், 6 மீ உயரமுள்ள சுவர் எழுப்ப எத்தனை செங்கற்கள் தேவை?', options: ['25000', '2500', '250000', '12500'], explanation: 'சுவர் = 2000 × 48 × 600 = 5,76,00,000 செமீ³; செங்கல் = 2304 செமீ³; எண்ணிக்கை = 25000.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 7.4 Q10, p. 264', answer: 0,
    en: { q: 'The number of bricks, each 50 cm × 30 cm × 20 cm, needed to build a wall 5 m × 3 m × 2 m is', options: ['1000', '2000', '3000', '5000'], explanation: 'Wall = 30 m³ = 3,00,00,000 cm³; brick = 30000 cm³; number = 1000.' },
    ta: { q: '5 மீ × 3 மீ × 2 மீ அளவுள்ள ஒரு சுவர் எழுப்ப, 50 செமீ × 30 செமீ × 20 செமீ அளவு கொண்ட செங்கற்கள் எத்தனை தேவை?', options: ['1000', '2000', '3000', '5000'], explanation: 'சுவர் = 30 மீ³ = 3,00,00,000 செமீ³; செங்கல் = 30000 செமீ³; எண்ணிக்கை = 1000.' },
  },
  {
    difficulty: 'hard', source: 'Book example 7.15, p. 261', answer: 0,
    en: { q: 'A metallic cube of side 12 cm is melted and formed into a cuboid of length 18 cm and breadth 16 cm. The height of the cuboid is', options: ['6 cm', '8 cm', '12 cm', '4 cm'], explanation: 'Volumes are equal: 18 × 16 × h = 12³ = 1728 ⇒ h = 1728 ÷ 288 = 6 cm.' },
    ta: { q: '12 செமீ பக்கமுள்ள உலோகக் கனசதுரம் உருக்கப்பட்டு 18 செமீ நீளம், 16 செமீ அகலம் கொண்ட கனசெவ்வகமாக மாற்றப்படுகிறது. கனசெவ்வகத்தின் உயரம்', options: ['6 செமீ', '8 செமீ', '12 செமீ', '4 செமீ'], explanation: 'கன அளவுகள் சமம்: 18 × 16 × h = 12³ = 1728 ⇒ h = 1728 ÷ 288 = 6 செமீ.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 7.3 Q9, p. 263', answer: 0,
    en: { q: 'A metallic cube of side 15 cm is melted and formed into a cuboid of length 25 cm and height 9 cm. The breadth of the cuboid is', options: ['15 cm', '9 cm', '25 cm', '13.5 cm'], explanation: '25 × b × 9 = 15³ = 3375 ⇒ b = 3375 ÷ 225 = 15 cm.' },
    ta: { q: '15 செமீ பக்கமுள்ள உலோகக் கனசதுரம் உருக்கப்பட்டு கனசெவ்வகமாக்கப்படுகிறது. கனசெவ்வகத்தின் நீளம் 25 செமீ, உயரம் 9 செமீ எனில் அதன் அகலம்', options: ['15 செமீ', '9 செமீ', '25 செமீ', '13.5 செமீ'], explanation: '25 × b × 9 = 15³ = 3375 ⇒ b = 3375 ÷ 225 = 15 செமீ.' },
  },
  {
    difficulty: 'hard', source: '§7.5.2 Activity, p. 262', answer: 0,
    en: { q: 'From an 18 cm × 18 cm sheet, equal squares are cut from each corner and the flaps folded up to make an open box. Of corner squares 2, 3, 4 and 5 cm, which gives the greatest volume?', options: ['3 cm, giving 432 cm³', '2 cm, giving 392 cm³', '4 cm, giving 400 cm³', '5 cm, giving 320 cm³'], explanation: 'V = (18 − 2x)² × x: x = 2 → 392, x = 3 → 432, x = 4 → 400, x = 5 → 320 cm³. The 3 cm square gives the greatest volume.' },
    ta: { q: '18 செமீ × 18 செமீ தாளின் ஒவ்வொரு மூலையிலிருந்தும் சம அளவு சதுரங்களை நீக்கி மடித்துத் திறந்த பெட்டி செய்யப்படுகிறது. 2, 3, 4, 5 செமீ மூலைச் சதுரங்களில் எது அதிகபட்சக் கன அளவைத் தரும்?', options: ['3 செமீ, 432 செமீ³', '2 செமீ, 392 செமீ³', '4 செமீ, 400 செமீ³', '5 செமீ, 320 செமீ³'], explanation: 'V = (18 − 2x)² × x: x = 2 → 392, x = 3 → 432, x = 4 → 400, x = 5 → 320 செமீ³. 3 செமீ சதுரமே அதிகக் கன அளவைத் தருகிறது.' },
  },
  {
    difficulty: 'hard', source: '§7.4.1 Note, p. 254', answer: 0,
    en: { q: 'Assertion (A): The lateral surface area of a cuboid is obtained by removing 2lb from its total surface area.\nReason (R): The total area of the top and bottom of a cuboid is 2lb and does not depend on the height.', options: AR_EN, explanation: 'TSA − 2lb = 2bh + 2lh = 2(l + b)h = LSA; the top and bottom (2lb) are independent of height, so R explains A.' },
    ta: { q: 'கூற்று (A): கனசெவ்வகத்தின் மொத்தப்பரப்பிலிருந்து 2lb ஐ நீக்கினால் பக்கப்பரப்பு கிடைக்கும்.\nகாரணம் (R): கனசெவ்வகத்தின் அடிப்பக்க, மேற்பக்கப் பரப்புகளின் கூடுதல் 2lb; அது உயரத்தோடு தொடர்புடையதல்ல.', options: AR_TA, explanation: 'மொத்தப்பரப்பு − 2lb = 2bh + 2lh = 2(l + b)h = பக்கப்பரப்பு; மேல், அடிப்பக்கங்கள் (2lb) உயரத்தைச் சார்ந்தவை அல்ல; எனவே R, A ஐ விளக்குகிறது.' },
  },
  {
    difficulty: 'hard', source: '§7.5.2 Note, p. 261', answer: 0,
    en: { q: 'Assertion (A): If the side of a cube is doubled, its volume becomes 8 times.\nReason (R): For any two cubes, ratio of volumes = (ratio of sides)³.', options: AR_EN, explanation: 'Sides 1 : 2 give volumes 1³ : 2³ = 1 : 8, which is exactly the rule in R.' },
    ta: { q: 'கூற்று (A): ஒரு கனசதுரத்தின் பக்கத்தை இரு மடங்காக்கினால் அதன் கன அளவு 8 மடங்காகும்.\nகாரணம் (R): ஏதேனும் இரு கனசதுரங்களுக்கு, கன அளவுகளின் விகிதம் = (பக்கங்களின் விகிதம்)³.', options: AR_TA, explanation: 'பக்கங்கள் 1 : 2 எனில் கன அளவுகள் 1³ : 2³ = 1 : 8; இதுவே R இல் உள்ள விதி.' },
  },
  {
    difficulty: 'hard', source: '§7.2 Note, p. 251', answer: 2,
    en: { q: 'Assertion (A): Among all triangles with the same perimeter, the equilateral triangle has the greatest area.\nReason (R): Triangles with equal perimeters always have equal areas.', options: AR_EN, explanation: 'A is true (Example 7.2: 600, 670.8 and 692.8 m² for the same 120 m perimeter). R is false because the areas differ.' },
    ta: { q: 'கூற்று (A): ஒரே சுற்றளவுள்ள எல்லா முக்கோணங்களிலும் சமபக்க முக்கோணத்திற்கே அதிகப் பரப்பு.\nகாரணம் (R): சம சுற்றளவுள்ள முக்கோணங்களின் பரப்புகள் எப்போதும் சமம்.', options: AR_TA, explanation: 'A சரி (எடுத்துக்காட்டு 7.2: ஒரே 120 மீ சுற்றளவுக்கு 600, 670.8, 692.8 மீ²). பரப்புகள் வேறுபடுவதால் R தவறு.' },
  },
  {
    difficulty: 'hard', source: '§7.4–7.5, p. 253–260', answer: 0,
    en: { q: 'Which of these statements are correct?\n(i) A cube has 6 faces, 12 edges and 8 vertices.\n(ii) The LSA of a cuboid is 2(l + b)h.\n(iii) 1 cm³ = 1 litre.\n(iv) The TSA of a cube of side a is 4a².', options: ['(i) and (ii) only', '(i), (ii) and (iii) only', '(ii) and (iv) only', '(i) and (iv) only'], explanation: '1 cm³ = 1 ml (1000 cm³ = 1 litre) and the TSA of a cube is 6a², so (iii) and (iv) are wrong.' },
    ta: { q: 'பின்வருவனவற்றுள் சரியான கூற்றுகள் எவை?\n(i) கனசதுரத்திற்கு 6 முகப்புகள், 12 விளிம்புகள், 8 முனைகள் உண்டு.\n(ii) கனசெவ்வகத்தின் பக்கப்பரப்பு 2(l + b)h.\n(iii) 1 செமீ³ = 1 லிட்டர்.\n(iv) a பக்கமுள்ள கனசதுரத்தின் மொத்தப்பரப்பு 4a².', options: ['(i), (ii) மட்டும்', '(i), (ii), (iii) மட்டும்', '(ii), (iv) மட்டும்', '(i), (iv) மட்டும்'], explanation: '1 செமீ³ = 1 மிலி (1000 செமீ³ = 1 லிட்டர்); கனசதுரத்தின் மொத்தப்பரப்பு 6a²; எனவே (iii), (iv) தவறு.' },
  },
];
