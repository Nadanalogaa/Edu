// Tamil Nadu State Board, 9th Science, Unit 1 – Measurement (அளவீடு).
// Every textbook exercise/example question that can be multiple choice, plus our own
// questions so every section is covered. source = printed page of the English-medium book.
import { BankQuestion, AR_EN, AR_TA } from './types';

const IMG = '/content/9/state_board/science/01';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.1, p. 11', answer: 0,
    en: { q: 'Choose the correct order of units of length.', options: ['mm < cm < m < km', 'mm > cm > m > km', 'km < m < cm < mm', 'mm > m > cm > km'], explanation: '1 mm = 0.1 cm, 1 cm = 0.01 m and 1 km = 1000 m, so mm is the smallest and km the largest.' },
    ta: { q: 'நீள அலகுகளின் சரியான வரிசையைத் தேர்ந்தெடு.', options: ['மிமீ < செமீ < மீ < கிமீ', 'மிமீ > செமீ > மீ > கிமீ', 'கிமீ < மீ < செமீ < மிமீ', 'மிமீ > மீ > செமீ > கிமீ'], explanation: '1 மிமீ = 0.1 செமீ, 1 செமீ = 0.01 மீ, 1 கிமீ = 1000 மீ; எனவே மிமீ மிகச் சிறியது, கிமீ மிகப் பெரியது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.2, p. 11', answer: 0,
    en: { q: 'Rulers, measuring tapes and metre scales are used to measure', options: ['length', 'mass', 'weight', 'time'], explanation: 'These are graduated in cm and mm and measure length.' },
    ta: { q: 'அளவுகோல், அளவிடும் நாடா மற்றும் மீட்டர் அளவுகோல் ஆகியவை எந்த அளவை அளவிடப் பயன்படுகின்றன?', options: ['நீளம்', 'நிறை', 'எடை', 'காலம்'], explanation: 'இவை செமீ, மிமீ அளவீடுகளைக் கொண்டவை; நீளத்தை அளக்கின்றன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.3, p. 11', answer: 0,
    en: { q: '1 metric tonne is equal to', options: ['10 quintals', '100 quintals', '1/10 quintal', '1/100 quintal'], explanation: '1 quintal = 100 kg and 1 metric tonne = 1000 kg = 10 quintals.' },
    ta: { q: 'ஒரு மெட்ரிக் டன் என்பது', options: ['10 குவிண்டால்', '100 குவிண்டால்', '1/10 குவிண்டால்', '1/100 குவிண்டால்'], explanation: '1 குவிண்டால் = 100 கிகி; 1 மெட்ரிக் டன் = 1000 கிகி = 10 குவிண்டால்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.1, p. 11', answer: 0,
    en: { q: 'Metre is the unit of _____.', options: ['length', 'mass', 'time', 'temperature'], explanation: 'The metre is the SI unit of length.' },
    ta: { q: '_____ இன் அலகு மீட்டர் ஆகும்.', options: ['நீளம்', 'நிறை', 'காலம்', 'வெப்பநிலை'], explanation: 'மீட்டர் என்பது நீளத்தின் SI அலகு.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.2, p. 11', answer: 0,
    en: { q: '1 kg of rice is weighed by a _____.', options: ['common (beam) balance', 'physical balance', 'screw gauge', 'Vernier caliper'], explanation: 'A common beam balance compares the rice with standard masses such as 1 kg; it is accurate up to 5 g.' },
    ta: { q: '1 கிகி அரிசியினை அளவிட _____ பயன்படுகிறது.', options: ['பொதுத் தராசு', 'இயற்பியல் தராசு', 'திருகு அளவி', 'வெர்னியர் அளவி'], explanation: 'பொதுத் தராசு அரிசியை 1 கிகி போன்ற படித்தர நிறைகளுடன் ஒப்பிடுகிறது; இது 5 கி வரை துல்லியமானது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.3, p. 11', answer: 0,
    en: { q: 'The thickness (diameter) of a cricket ball is measured by a _____.', options: ['Vernier caliper', 'screw gauge', 'metre scale', 'spring balance'], explanation: 'A cricket ball is a few centimetres across, which suits the jaws of a Vernier caliper (accuracy 0.1 mm).' },
    ta: { q: 'கிரிக்கெட் பந்தின் தடிமனை அளவிடப் பயன்படுவது _____ கருவியாகும்.', options: ['வெர்னியர் அளவி', 'திருகு அளவி', 'மீட்டர் அளவுகோல்', 'சுருள் தராசு'], explanation: 'கிரிக்கெட் பந்து சில செமீ அளவுடையது; இது வெர்னியர் அளவியின் தாடைகளுக்குப் பொருத்தமானது (துல்லியம் 0.1 மிமீ).' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.4, p. 11', answer: 0,
    en: { q: 'The radius of a thin wire is measured by a _____.', options: ['screw gauge', 'Vernier caliper', 'metre scale', 'measuring tape'], explanation: 'A screw gauge measures up to 0.01 mm, so it is used for thin wires and thin sheets.' },
    ta: { q: 'மெல்லிய கம்பியின் ஆரத்தை அளவிட _____ பயன்படுகிறது.', options: ['திருகு அளவி', 'வெர்னியர் அளவி', 'மீட்டர் அளவுகோல்', 'அளவிடும் நாடா'], explanation: 'திருகு அளவி 0.01 மிமீ வரை அளக்கும்; எனவே மெல்லிய கம்பி, தகடுகளுக்குப் பயன்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.5, p. 11', answer: 0,
    en: { q: 'A physical balance measures small differences in mass up to _____.', options: ['a milligram', '5 grams', '1 kilogram', '1 quintal'], explanation: 'A physical balance is far more sensitive than a beam balance and can measure mass correct to a milligram.' },
    ta: { q: 'இயற்பியல் தராசைப் பயன்படுத்தி அளவிடக் கூடிய துல்லியமான நிறை _____ ஆகும்.', options: ['ஒரு மில்லிகிராம்', '5 கிராம்', '1 கிலோகிராம்', '1 குவிண்டால்'], explanation: 'இயற்பியல் தராசு பொதுத் தராசை விட உணர்திறன் மிக்கது; ஒரு மில்லிகிராம் வரை நிறையை அளக்கும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise III.1, p. 11', answer: 0,
    en: { q: "'The SI unit of electric current is kilogram.' Correct the statement: the SI unit of electric current is the", options: ['ampere', 'kilogram', 'kelvin', 'candela'], explanation: 'The statement is false: kilogram is the unit of mass; electric current is measured in ampere (A).' },
    ta: { q: '"மின்னோட்டத்தின் SI அலகு கிலோகிராம்" – இக்கூற்றைத் திருத்துக. மின்னோட்டத்தின் SI அலகு', options: ['ஆம்பியர்', 'கிலோகிராம்', 'கெல்வின்', 'கேண்டிலா'], explanation: 'கூற்று தவறு: கிலோகிராம் நிறையின் அலகு; மின்னோட்டம் ஆம்பியரில் (A) அளக்கப்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise III.6, p. 11', answer: 0,
    en: { q: 'With a Vernier caliper and a screw gauge we can measure with an accuracy of, respectively,', options: ['0.1 mm and 0.01 mm', '0.01 mm and 0.1 mm', '1 mm and 0.1 mm', '0.1 mm and 0.001 mm'], explanation: 'True statement: Vernier caliper LC = 0.1 mm (0.01 cm), screw gauge LC = 0.01 mm.' },
    ta: { q: 'வெர்னியர் அளவி, திருகு அளவி ஆகியவற்றின் உதவியால் முறையே எந்த அளவிற்குத் துல்லியமாக அளவிட முடியும்?', options: ['0.1 மிமீ மற்றும் 0.01 மிமீ', '0.01 மிமீ மற்றும் 0.1 மிமீ', '1 மிமீ மற்றும் 0.1 மிமீ', '0.1 மிமீ மற்றும் 0.001 மிமீ'], explanation: 'கூற்று சரி: வெர்னியர் அளவியின் மீச்சிற்றளவு 0.1 மிமீ (0.01 செமீ), திருகு அளவியின் மீச்சிற்றளவு 0.01 மிமீ.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise VI.1, p. 12', answer: 0,
    en: { q: 'Measurement is defined as', options: ['the determination of the size or magnitude of a quantity', 'the comparison of two different physical quantities', 'the conversion of one unit into another unit', 'the counting of objects in a group'], explanation: 'Measurement assigns a number to a characteristic: it is the determination of the size or magnitude of a quantity.' },
    ta: { q: 'அளவீடு என்பது', options: ['ஒரு அளவின் பருமன் அல்லது எண்மதிப்பைக் கண்டறிதல்', 'இரு வெவ்வேறு இயற்பியல் அளவுகளை ஒப்பிடுதல்', 'ஓர் அலகை மற்றோர் அலகாக மாற்றுதல்', 'ஒரு தொகுப்பில் உள்ள பொருள்களை எண்ணுதல்'], explanation: 'ஒரு அளவின் பருமன் அல்லது எண்மதிப்பைக் கண்டறிவதே அளவீடு ஆகும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise VI.2, p. 12', answer: 0,
    en: { q: 'A standard unit is', options: ['a standard quantity with which unknown quantities are compared', 'a quantity that cannot be measured at all', 'the numerical value of a physical quantity', 'the error present in a measuring instrument'], explanation: 'A unit is a specific magnitude of a quantity, adopted by law or convention, against which unknown quantities are compared.' },
    ta: { q: 'அலகு (படித்தர அலகு) என்பது', options: ['தெரியாத அளவுகளை ஒப்பிடப் பயன்படும் படித்தரமான அளவு', 'அளவிடவே முடியாத ஓர் அளவு', 'ஓர் இயற்பியல் அளவின் எண் மதிப்பு', 'அளவிடும் கருவியில் உள்ள பிழை'], explanation: 'தெரியாத அளவு ஒன்றுடன் ஒப்பிடக்கூடிய படித்தரமான அளவே அலகு ஆகும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise VI.3, p. 12', answer: 0,
    en: { q: 'The full form of SI system is', options: ['International System of Units', 'Standard International System', 'Scientific Indian System', 'System of Integrated Units'], explanation: 'SI stands for Système International – the International System of Units, recommended at Paris in 1960.' },
    ta: { q: 'SI அலகின் விரிவாக்கம்', options: ['பன்னாட்டு அலகு முறை', 'படித்தரப் பன்னாட்டு முறை', 'அறிவியல் இந்திய முறை', 'ஒருங்கிணைந்த அலகு முறை'], explanation: 'SI என்பது பன்னாட்டு அலகு முறை; 1960-இல் பாரிஸில் பரிந்துரைக்கப்பட்டது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise VI.4, p. 12', answer: 0,
    en: { q: 'The least count of a measuring device is', options: ['the smallest measurement that can be made with it', 'the largest value that it can measure', 'the error when its jaws are closed', 'the number of divisions on its main scale'], explanation: 'Least count is the smallest length (value) an instrument can measure; for a metre scale it is 1 mm.' },
    ta: { q: 'ஒரு கருவியின் மீச்சிற்றளவு என்பது', options: ['அக்கருவியால் அளக்கக்கூடிய மிகச்சிறிய அளவு', 'அக்கருவியால் அளக்கக்கூடிய மிகப்பெரிய அளவு', 'தாடைகளை மூடும்போது உள்ள பிழை', 'முதன்மைக் கோலில் உள்ள பிரிவுகளின் எண்ணிக்கை'], explanation: 'ஒரு கருவியால் அளக்கக்கூடிய மிகச்சிறிய அளவே மீச்சிற்றளவு; மீட்டர் அளவுகோலுக்கு இது 1 மிமீ.' },
  },
  {
    difficulty: 'easy', source: '§1.1.1, p. 1', answer: 0,
    en: { q: 'Which of the following is a fundamental quantity?', options: ['Time', 'Area', 'Volume', 'Density'], explanation: 'Time cannot be expressed in terms of other quantities; area, volume and density are derived from length and mass.' },
    ta: { q: 'பின்வருவனவற்றுள் அடிப்படை அளவு எது?', options: ['காலம்', 'பரப்பளவு', 'கன அளவு', 'அடர்த்தி'], explanation: 'காலத்தை வேறு அளவுகளால் குறிக்க முடியாது; பரப்பளவு, கன அளவு, அடர்த்தி ஆகியவை வழி அளவுகள்.' },
  },
  {
    difficulty: 'easy', source: '§1.2, p. 2', answer: 0,
    en: { q: 'How many fundamental (base) units are there in the SI system?', options: ['Seven', 'Five', 'Three', 'Ten'], explanation: 'Metre, kilogram, second, kelvin, ampere, candela and mole – seven base units.' },
    ta: { q: 'SI முறையில் உள்ள அடிப்படை அலகுகளின் எண்ணிக்கை', options: ['ஏழு', 'ஐந்து', 'மூன்று', 'பத்து'], explanation: 'மீட்டர், கிலோகிராம், வினாடி, கெல்வின், ஆம்பியர், கேண்டிலா, மோல் – ஏழு அடிப்படை அலகுகள்.' },
  },
  {
    difficulty: 'easy', source: '§1.2, p. 2', answer: 0,
    en: { q: 'The SI unit of luminous intensity is', options: ['candela', 'mole', 'kelvin', 'ampere'], explanation: 'Luminous intensity is measured in candela (cd); mole is for amount of substance.' },
    ta: { q: 'ஒளிச்செறிவின் SI அலகு', options: ['கேண்டிலா', 'மோல்', 'கெல்வின்', 'ஆம்பியர்'], explanation: 'ஒளிச்செறிவு கேண்டிலாவில் (cd) அளக்கப்படுகிறது; மோல் பொருளின் அளவிற்கான அலகு.' },
  },
  {
    difficulty: 'easy', source: '§1.3.1, p. 3', answer: 0,
    en: { q: '1 angstrom (Å) is equal to', options: ['10⁻¹⁰ m', '10⁻¹⁵ m', '10⁻⁹ m', '10⁻⁶ m'], explanation: 'Å = 10⁻¹⁰ m; 10⁻¹⁵ m is a fermi, 10⁻⁹ m a nanometre and 10⁻⁶ m a micron.' },
    ta: { q: '1 ஆங்ஸ்ட்ராம் (Å) என்பது', options: ['10⁻¹⁰ மீ', '10⁻¹⁵ மீ', '10⁻⁹ மீ', '10⁻⁶ மீ'], explanation: 'Å = 10⁻¹⁰ மீ; 10⁻¹⁵ மீ ஃபெர்மி, 10⁻⁹ மீ நானோமீட்டர், 10⁻⁶ மீ மைக்ரான்.' },
  },
  {
    difficulty: 'easy', source: '§1.3.2, p. 3', answer: 0,
    en: { q: 'The international prototype of the kilogram kept at Sevres, France, is a cylinder made of', options: ['platinum–iridium alloy', 'stainless steel', 'gold–silver alloy', 'pure copper'], explanation: 'One kilogram is the mass of a platinum–iridium cylinder kept at the International Bureau of Weights and Measures, Sevres.' },
    ta: { q: 'பிரான்ஸ் நாட்டின் செவ்ரெஸில் வைக்கப்பட்டுள்ள கிலோகிராமின் முன் மாதிரி உருளை எதனால் ஆனது?', options: ['பிளாட்டினம்–இரிடியம் உலோகக்கலவை', 'துருப்பிடிக்காத எஃகு', 'தங்கம்–வெள்ளி உலோகக்கலவை', 'தூய தாமிரம்'], explanation: 'ஒரு கிலோகிராம் என்பது செவ்ரெஸில் வைக்கப்பட்டுள்ள பிளாட்டினம்–இரிடியம் உருளையின் நிறை.' },
  },
  {
    difficulty: 'easy', source: '§1.3.4, p. 4', answer: 0,
    en: { q: 'Zero kelvin (0 K) is commonly known as', options: ['absolute zero', 'the triple point of water', 'the freezing point of water', 'the boiling point of water'], explanation: '0 K is absolute zero; the triple point of water is 273.16 K.' },
    ta: { q: 'சுழி கெல்வின் (0 K) பொதுவாக எவ்வாறு அழைக்கப்படுகிறது?', options: ['தனிச்சுழி வெப்பநிலை', 'நீரின் முப்புள்ளி', 'நீரின் உறைநிலை', 'நீரின் கொதிநிலை'], explanation: '0 K தனிச்சுழி எனப்படும்; நீரின் முப்புள்ளி 273.16 K.' },
  },
  {
    difficulty: 'easy', source: '§1.4, p. 4', answer: 0,
    en: { q: 'The unit prefix giga (G) stands for', options: ['10⁹', '10⁶', '10¹²', '10³'], explanation: 'giga = 10⁹; mega = 10⁶, tera = 10¹², kilo = 10³.' },
    ta: { q: 'ஜிகா (G) என்ற முன்னொட்டு குறிப்பது', options: ['10⁹', '10⁶', '10¹²', '10³'], explanation: 'ஜிகா = 10⁹; மெகா = 10⁶, டெரா = 10¹², கிலோ = 10³.' },
  },
  {
    difficulty: 'easy', source: 'More to know, p. 4', answer: 0,
    en: { q: 'The mass of 1 ml of water is', options: ['1 g', '1 kg', '1 mg', '10 g'], explanation: '1 ml of water has a mass of 1 g, and 1 litre of water has a mass of 1 kg.' },
    ta: { q: '1 மிலி நீரின் நிறை', options: ['1 கி', '1 கிகி', '1 மிகி', '10 கி'], explanation: '1 மிலி நீரின் நிறை 1 கி; 1 லிட்டர் நீரின் நிறை 1 கிகி.' },
  },
  {
    difficulty: 'easy', source: 'Do you know?, p. 8', answer: 0,
    en: { q: 'The shell of an egg makes up about what fraction of the mass of the egg?', options: ['12%', '50%', '2%', '30%'], explanation: 'The textbook notes that the shell of an egg is 12% of its mass.' },
    ta: { q: 'ஒரு முட்டையின் ஓடு அதன் நிறையில் ஏறக்குறைய எவ்வளவு?', options: ['12%', '50%', '2%', '30%'], explanation: 'முட்டையின் ஓடு அதன் நிறையில் 12% என்று பாடநூல் கூறுகிறது.' },
  },
  {
    difficulty: 'easy', source: '§1.8, p. 9', answer: 0,
    en: { q: 'A spring balance works on', options: ["Hooke's law", "Pascal's law", "Archimedes' principle", "Newton's law of gravitation"], explanation: "By Hooke's law, the added weight produces a proportional increase in the length of the spring." },
    ta: { q: 'சுருள் தராசு எந்த விதியின் அடிப்படையில் செயல்படுகிறது?', options: ['ஹூக் விதி', 'பாஸ்கல் விதி', 'ஆர்க்கிமிடிஸ் தத்துவம்', 'நியூட்டனின் ஈர்ப்பியல் விதி'], explanation: 'ஹூக் விதிப்படி, சேர்க்கப்படும் எடைக்கு நேர்விகிதத்தில் சுருளின் நீளம் அதிகரிக்கிறது.' },
  },
  // ---------------------------------------------------------------- Medium
  {
    difficulty: 'medium', source: 'Book exercise I.4, p. 11', answer: 0,
    en: { q: 'Which among the following is NOT a device to measure mass?', options: ['Spring balance', 'Beam balance', 'Physical balance', 'Digital balance'], explanation: 'A spring balance measures weight (a force); the other three compare or measure mass.' },
    ta: { q: 'கீழ்க்கண்டவற்றுள் எது நிறையை அளவிடும் கருவியல்ல?', options: ['சுருள் தராசு', 'பொதுத் தராசு', 'இயற்பியல் தராசு', 'எண்ணியல் தராசு'], explanation: 'சுருள் தராசு எடையை (விசையை) அளக்கும்; மற்ற மூன்றும் நிறையை அளக்கின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.2, p. 11', answer: 0,
    en: { q: "'Kilometre is one of the SI units of measurement.' This statement is", options: ['false – the SI unit of length is the metre; km is a multiple of it', 'true – kilometre is the SI unit of length', 'false – the SI unit of length is the centimetre', 'true – every unit of length is an SI unit'], explanation: 'The SI base unit of length is the metre; 1 km = 10³ m is only a multiple formed with a prefix.' },
    ta: { q: '"கிலோமீட்டர் என்பது ஒரு SI அலகுமுறை" – இக்கூற்று', options: ['தவறு – நீளத்தின் SI அலகு மீட்டர்; கிமீ அதன் மடங்கு', 'சரி – நீளத்தின் SI அலகு கிலோமீட்டர்', 'தவறு – நீளத்தின் SI அலகு சென்டிமீட்டர்', 'சரி – நீளத்தின் எல்லா அலகுகளும் SI அலகுகள்'], explanation: 'நீளத்தின் SI அடிப்படை அலகு மீட்டர்; 1 கிமீ = 10³ மீ என்பது முன்னொட்டால் ஆன மடங்கு மட்டுமே.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.3, p. 11', answer: 0,
    en: { q: "'In everyday life, we use the term weight instead of mass.' This statement is", options: ['true – when we buy 3 kg of vegetables, we call the mass "weight"', 'false – in daily life we always use the term mass', 'false – mass and weight are the same quantity', 'true – mass and weight have the same SI unit'], explanation: 'True: what we commonly call weight is actually mass (in kg); weight is a force measured in newton.' },
    ta: { q: '"அன்றாட வாழ்வில் நாம் நிறை என்ற பதத்திற்குப் பதிலாக எடை என்ற பதத்தைப் பயன்படுத்துகிறோம்" – இக்கூற்று', options: ['சரி – 3 கிகி காய்கறி வாங்கும்போது நிறையை "எடை" என்கிறோம்', 'தவறு – அன்றாட வாழ்வில் எப்போதும் நிறை என்றே கூறுகிறோம்', 'தவறு – நிறையும் எடையும் ஒரே அளவு', 'சரி – நிறைக்கும் எடைக்கும் ஒரே SI அலகு'], explanation: 'சரி: நாம் பொதுவாக எடை எனக் கூறுவது உண்மையில் நிறை (கிகி); எடை என்பது நியூட்டனில் அளக்கப்படும் விசை.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.4, p. 11', answer: 0,
    en: { q: 'Which statement about balances is correct?', options: ['A physical balance is more sensitive than a beam balance', 'A beam balance is more sensitive than a physical balance', 'A beam balance can measure mass correct to a milligram', 'A physical balance is used to weigh sacks of vegetables'], explanation: 'True statement from the book: a beam balance is accurate to 5 g, while a physical balance measures to a milligram.' },
    ta: { q: 'தராசுகள் பற்றிய சரியான கூற்று எது?', options: ['இயற்பியல் தராசு பொதுத் தராசை விடத் துல்லியமானது', 'பொதுத் தராசு இயற்பியல் தராசை விடத் துல்லியமானது', 'பொதுத் தராசு ஒரு மில்லிகிராம் வரை நிறையை அளக்கும்', 'காய்கறி மூட்டைகளை அளக்க இயற்பியல் தராசு பயன்படுகிறது'], explanation: 'பொதுத் தராசு 5 கி வரை மட்டுமே துல்லியமானது; இயற்பியல் தராசு மில்லிகிராம் வரை அளக்கும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.5, p. 11', answer: 0,
    en: { q: 'Which statement about the Celsius and kelvin scales is correct?', options: ['One Celsius degree is an interval of 1 K, and 0 °C is 273.15 K', 'One Celsius degree is an interval of 1 K, and 0 °C is 0 K', 'One Celsius degree is an interval of 273 K', 'One kelvin is an interval of 1.8 Celsius degrees'], explanation: 'True statement: both scales have the same size of degree, and 0 °C corresponds to 273.15 K.' },
    ta: { q: 'செல்சியஸ், கெல்வின் அளவீடுகள் பற்றிய சரியான கூற்று எது?', options: ['ஒரு டிகிரி செல்சியஸ் என்பது 1 K இடைவெளி; 0 °C என்பது 273.15 K', 'ஒரு டிகிரி செல்சியஸ் என்பது 1 K இடைவெளி; 0 °C என்பது 0 K', 'ஒரு டிகிரி செல்சியஸ் என்பது 273 K இடைவெளி', 'ஒரு கெல்வின் என்பது 1.8 டிகிரி செல்சியஸ் இடைவெளி'], explanation: 'இரு அளவீடுகளிலும் ஒரு டிகிரியின் அளவு சமம்; 0 °C = 273.15 K.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.1, p. 12', answer: 0,
    en: { q: 'Match each physical quantity with its SI unit:\n1. Length  2. Mass  3. Time  4. Temperature\na. kelvin  b. metre  c. kilogram  d. second', options: ['1-b, 2-c, 3-d, 4-a', '1-a, 2-b, 3-c, 4-d', '1-b, 2-d, 3-c, 4-a', '1-c, 2-b, 3-d, 4-a'], explanation: 'Length – metre, mass – kilogram, time – second, temperature – kelvin.' },
    ta: { q: 'இயற்பியல் அளவுகளை அவற்றின் SI அலகுகளுடன் பொருத்துக:\n1. நீளம்  2. நிறை  3. காலம்  4. வெப்பநிலை\na. கெல்வின்  b. மீட்டர்  c. கிலோகிராம்  d. வினாடி', options: ['1-b, 2-c, 3-d, 4-a', '1-a, 2-b, 3-c, 4-d', '1-b, 2-d, 3-c, 4-a', '1-c, 2-b, 3-d, 4-a'], explanation: 'நீளம் – மீட்டர், நிறை – கிலோகிராம், காலம் – வினாடி, வெப்பநிலை – கெல்வின்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.2, p. 12', answer: 0,
    en: { q: 'Match each instrument with the object it is best used for:\n1. Screw gauge  2. Vernier caliper  3. Beam balance  4. Digital balance\na. Vegetables  b. Coins  c. Gold ornaments  d. Cricket ball', options: ['1-b, 2-d, 3-a, 4-c', '1-d, 2-b, 3-a, 4-c', '1-b, 2-d, 3-c, 4-a', '1-a, 2-c, 3-b, 4-d'], explanation: 'Screw gauge – thickness of coins, Vernier – cricket ball, beam balance – vegetables, digital balance – gold ornaments.' },
    ta: { q: 'கருவியை அது அளவிடும் பொருளுடன் பொருத்துக:\n1. திருகு அளவி  2. வெர்னியர் அளவி  3. சாதாரணத் தராசு  4. மின்னணுத் தராசு\na. காய்கறிகள்  b. நாணயம்  c. தங்க நகைகள்  d. கிரிக்கெட் பந்து', options: ['1-b, 2-d, 3-a, 4-c', '1-d, 2-b, 3-a, 4-c', '1-b, 2-d, 3-c, 4-a', '1-a, 2-c, 3-b, 4-d'], explanation: 'திருகு அளவி – நாணயம், வெர்னியர் அளவி – கிரிக்கெட் பந்து, சாதாரணத் தராசு – காய்கறிகள், மின்னணுத் தராசு – தங்க நகைகள்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.5, p. 12', answer: 0,
    en: { q: 'The pitch of a screw gauge is', options: ['the distance moved by the screw tip for one complete rotation of the head', 'the distance moved by the screw tip for one head scale division', 'the number of divisions on the head scale', 'the total length of the pitch scale'], explanation: 'Pitch = distance moved ÷ number of rotations; it is 1 mm in a typical screw gauge.' },
    ta: { q: 'திருகு அளவியின் புரியிடைத் தூரம் என்பது', options: ['தலைக்கோல் ஒரு முழுச்சுற்று சுற்றும்போது திருகின் முனை நகரும் தொலைவு', 'தலைக்கோலின் ஒரு பிரிவுக்குத் திருகின் முனை நகரும் தொலைவு', 'தலைக்கோலில் உள்ள பிரிவுகளின் எண்ணிக்கை', 'புரிக்கோலின் மொத்த நீளம்'], explanation: 'புரியிடைத் தூரம் = திருகு நகர்ந்த தொலைவு ÷ சுற்றுகளின் எண்ணிக்கை; பொதுவாக இது 1 மிமீ.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.6, p. 12', answer: 0,
    en: { q: 'Can you find the diameter of a thin wire of length 2 m using the ruler from your instrument box?', options: ["No – the ruler's least count of 1 mm is larger than the wire's diameter", 'Yes – the wire is long enough to be measured', 'Yes – a ruler can measure up to 0.01 mm', 'No – a ruler can measure only lengths above 1 m'], explanation: 'A thin wire is much thinner than 1 mm, the least count of a ruler; a screw gauge (LC 0.01 mm) is needed.' },
    ta: { q: '2 மீ நீளம் கொண்ட ஒரு மெல்லிய கம்பியின் விட்டத்தை உனது கருவிப் பெட்டியிலிருக்கும் அளவுகோலால் கண்டறிய முடியுமா?', options: ['முடியாது – அளவுகோலின் மீச்சிற்றளவு 1 மிமீ; கம்பியின் விட்டம் அதைவிடச் சிறியது', 'முடியும் – கம்பி போதுமான நீளம் கொண்டது', 'முடியும் – அளவுகோல் 0.01 மிமீ வரை அளக்கும்', 'முடியாது – அளவுகோல் 1 மீட்டருக்கு மேற்பட்ட நீளங்களை மட்டுமே அளக்கும்'], explanation: 'மெல்லிய கம்பியின் விட்டம் 1 மிமீ-ஐ விட மிகக் குறைவு; திருகு அளவி (மீச்சிற்றளவு 0.01 மிமீ) தேவை.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VII.1, p. 12', answer: 0,
    en: { q: 'Which of these is written correctly according to the SI rules?', options: ['10 kg', '10 kgs', '10 Kg.', '10kgs'], explanation: 'Symbols are not written in plural, take no full stop, kilogram uses small letters, and a space separates number and unit.' },
    ta: { q: 'SI விதிகளின்படி சரியாக எழுதப்பட்டது எது?', options: ['10 kg', '10 kgs', '10 Kg.', '10kgs'], explanation: 'குறியீடுகள் பன்மையில் எழுதப்படுவதில்லை; முற்றுப்புள்ளி இல்லை; kg சிறிய எழுத்தில்; எண்ணுக்கும் அலகுக்கும் இடையே இடைவெளி.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VII.1, p. 12', answer: 0,
    en: { q: 'According to SI rules, the unit named after Isaac Newton is written as', options: ['newton, with the symbol N', 'Newton, with the symbol n', 'newton, with the symbol n', 'Newton, with the symbol Nw'], explanation: 'Units named after scientists are written without a capital initial, but their symbols take a capital letter.' },
    ta: { q: 'SI விதிகளின்படி ஐசக் நியூட்டன் பெயரால் அமைந்த அலகு எவ்வாறு எழுதப்படுகிறது?', options: ['newton; குறியீடு N', 'Newton; குறியீடு n', 'newton; குறியீடு n', 'Newton; குறியீடு Nw'], explanation: 'அறிவியலாளர் பெயரால் அமைந்த அலகுகள் சிறிய எழுத்தில் தொடங்கும்; ஆனால் அவற்றின் குறியீடுகள் பெரிய எழுத்தில் எழுதப்படும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VII.2, p. 12', answer: 0,
    en: { q: 'A standard unit system is needed mainly because', options: ['measurements made anywhere can then be compared and understood by all', 'it removes every error from measurements', 'each country can then use its own units', 'it is required only inside laboratories'], explanation: 'Different countries used CGS, FPS and MKS; the SI system was adopted in 1960 so that measurements are uniform worldwide.' },
    ta: { q: 'நிலையான (படித்தர) அலகு முறையின் தேவைக்கு முக்கியக் காரணம்', options: ['எங்கு அளந்தாலும் அளவீடுகளை அனைவரும் ஒப்பிட்டுப் புரிந்துகொள்ள முடியும்', 'அளவீடுகளில் உள்ள எல்லாப் பிழைகளையும் அது நீக்குகிறது', 'ஒவ்வொரு நாடும் தன் சொந்த அலகுகளைப் பயன்படுத்தலாம்', 'அது ஆய்வகங்களில் மட்டுமே தேவைப்படுகிறது'], explanation: 'பல நாடுகள் CGS, FPS, MKS முறைகளைப் பயன்படுத்தின; உலகம் முழுவதும் ஒரே மாதிரியாக இருக்க 1960-இல் SI முறை ஏற்கப்பட்டது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VII.3, p. 12', answer: 0,
    en: { q: 'Which of these is true of weight but NOT of mass?', options: ['It varies from place to place', 'It is a fundamental quantity', 'It is measured in kilogram', 'It is measured using a physical balance'], explanation: 'Weight (mg) changes with g, so it varies from place to place; mass is fundamental, in kg, and the same everywhere.' },
    ta: { q: 'எடைக்குப் பொருந்தும், ஆனால் நிறைக்குப் பொருந்தாத கூற்று எது?', options: ['இடத்திற்கு இடம் மாறுபடும்', 'இது ஓர் அடிப்படை அளவு', 'இது கிலோகிராமில் அளக்கப்படுகிறது', 'இது இயற்பியல் தராசால் அளக்கப்படுகிறது'], explanation: 'எடை (mg) g-ஐப் பொறுத்து இடத்திற்கு இடம் மாறும்; நிறை அடிப்படை அளவு, கிகி-இல் அளக்கப்படும், எங்கும் மாறாது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VII.4, p. 12', answer: 0,
    en: { q: 'A Vernier caliper has a smallest main scale division of 1 mm and 10 divisions on its vernier scale. Its least count is', options: ['0.1 mm', '1 mm', '0.01 mm', '10 mm'], explanation: 'LC = value of one main scale division ÷ number of vernier divisions = 1 mm ÷ 10 = 0.1 mm = 0.01 cm.' },
    ta: { q: 'ஒரு வெர்னியர் அளவியின் முதன்மைக் கோலின் மிகச்சிறிய பிரிவு 1 மிமீ; வெர்னியர் கோலில் 10 பிரிவுகள். அதன் மீச்சிற்றளவு', options: ['0.1 மிமீ', '1 மிமீ', '0.01 மிமீ', '10 மிமீ'], explanation: 'மீச்சிற்றளவு = முதன்மைக் கோலின் ஒரு பிரிவின் மதிப்பு ÷ வெர்னியர் பிரிவுகளின் எண்ணிக்கை = 1 ÷ 10 = 0.1 மிமீ = 0.01 செமீ.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VIII.2, p. 12', answer: 0,
    en: { q: 'When you find the thickness of a one-rupee coin with a screw gauge, the observed reading is', options: ['PSR + (HSC × LC)', 'PSR × HSC × LC', 'PSR + HSC', '(PSR + HSC) × LC'], explanation: 'Reading = pitch scale reading + head scale coincidence × least count, then apply the zero correction.' },
    ta: { q: 'ஒரு ரூபாய் நாணயத்தின் தடிமனைத் திருகு அளவியால் அளக்கும்போது அளவீடு', options: ['PSR + (HSC × LC)', 'PSR × HSC × LC', 'PSR + HSC', '(PSR + HSC) × LC'], explanation: 'அளவீடு = புரிக்கோல் அளவு + தலைக்கோல் ஒன்றிப்பு × மீச்சிற்றளவு; பின் சுழித்திருத்தம் செய்யப்படும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IX.3, p. 12', answer: 0,
    en: { q: 'Find the thickness of a five-rupee coin with a screw gauge (LC = 0.01 mm) if the pitch scale reading is 1 mm and the head scale coincidence is 68.', options: ['1.68 mm', '1.068 mm', '69 mm', '0.68 mm'], explanation: 'Thickness = PSR + (HSC × LC) = 1 + (68 × 0.01) = 1.68 mm.' },
    ta: { q: 'ஐந்து ரூபாய் நாணயத்தினைத் திருகு அளவியால் (மீச்சிற்றளவு 0.01 மிமீ) அளக்கும் பொழுது புரிக்கோல் அளவு 1 மிமீ, தலைக்கோல் ஒன்றிப்பு 68 எனில், அதன் தடிமன்', options: ['1.68 மிமீ', '1.068 மிமீ', '69 மிமீ', '0.68 மிமீ'], explanation: 'தடிமன் = PSR + (HSC × LC) = 1 + (68 × 0.01) = 1.68 மிமீ.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IX.4, p. 12', answer: 0,
    en: { q: 'Find the mass of an object weighing 98 N. (g = 9.8 m s⁻²)', options: ['10 kg', '960.4 kg', '98 kg', '1 kg'], explanation: 'm = w ÷ g = 98 ÷ 9.8 = 10 kg.' },
    ta: { q: '98 நியூட்டன் எடையுள்ள ஒரு பொருளின் நிறையைக் காண்க. (g = 9.8 மீ வி⁻²)', options: ['10 கிகி', '960.4 கிகி', '98 கிகி', '1 கிகி'], explanation: 'm = w ÷ g = 98 ÷ 9.8 = 10 கிகி.' },
  },
  {
    difficulty: 'medium', source: 'Book example (Problem 1), p. 6', answer: 0,
    en: { q: 'Calculate the correct reading of a Vernier caliper (LC = 0.01 cm) if the main scale reading is 8 cm, vernier coincidence is 4 and positive zero error is 0.05 cm.', options: ['7.99 cm', '8.09 cm', '8.04 cm', '7.95 cm'], explanation: 'Correct reading = 8 + (4 × 0.01) − 0.05 = 7.99 cm; a positive error is subtracted.' },
    ta: { q: 'முதன்மைக் கோல் அளவு 8 செமீ, வெர்னியர் ஒன்றிப்பு 4, நேர் சுழிப்பிழை 0.05 செமீ எனில் வெர்னியர் அளவியின் (மீச்சிற்றளவு 0.01 செமீ) சரியான அளவு', options: ['7.99 செமீ', '8.09 செமீ', '8.04 செமீ', '7.95 செமீ'], explanation: 'சரியான அளவு = 8 + (4 × 0.01) − 0.05 = 7.99 செமீ; நேர் சுழிப்பிழை கழிக்கப்படும்.' },
  },
  {
    difficulty: 'medium', source: 'Book example (Problem 2), p. 6', answer: 0,
    en: { q: 'The main scale reading of a Vernier caliper (LC = 0.01 cm) is 8 cm, vernier coincidence is 4 and negative zero error is 0.02 cm. The correct reading is', options: ['8.06 cm', '8.02 cm', '8.04 cm', '7.98 cm'], explanation: 'Correct reading = 8 + (4 × 0.01) + 0.02 = 8.06 cm; for a negative error the correction is added.' },
    ta: { q: 'வெர்னியர் அளவியின் (மீச்சிற்றளவு 0.01 செமீ) முதன்மைக் கோல் அளவு 8 செமீ, வெர்னியர் ஒன்றிப்பு 4, எதிர் சுழிப்பிழை 0.02 செமீ எனில் சரியான அளவு', options: ['8.06 செமீ', '8.02 செமீ', '8.04 செமீ', '7.98 செமீ'], explanation: 'சரியான அளவு = 8 + (4 × 0.01) + 0.02 = 8.06 செமீ; எதிர் சுழிப்பிழைக்குத் திருத்தம் கூட்டப்படும்.' },
  },
  {
    difficulty: 'medium', source: 'Book example (Problem 3), p. 9', answer: 0,
    en: { q: 'A man has a mass of 50 kg on the Earth. What is his weight? (g = 9.8 m s⁻²)', options: ['490 N', '50 N', '5.1 N', '4900 N'], explanation: 'w = mg = 50 × 9.8 = 490 N.' },
    ta: { q: 'புவியில் ஒரு மனிதனின் நிறை 50 கிகி எனில் அவரது எடை என்ன? (g = 9.8 மீ வி⁻²)', options: ['490 N', '50 N', '5.1 N', '4900 N'], explanation: 'w = mg = 50 × 9.8 = 490 N.' },
  },
  {
    difficulty: 'medium', source: '§1.8.1, p. 9', answer: 0,
    en: { q: 'A man of mass 70 kg weighs 686 N on the Earth and 114 N on the Moon. What is his mass on the Moon?', options: ['70 kg', '11.6 kg', '420 kg', '114 kg'], explanation: 'Mass is the quantity of matter and stays the same everywhere; only the weight changes.' },
    ta: { q: '70 கிகி நிறையுள்ள மனிதனின் எடை புவியில் 686 N, நிலவில் 114 N. நிலவில் அவரது நிறை', options: ['70 கிகி', '11.6 கிகி', '420 கிகி', '114 கிகி'], explanation: 'நிறை என்பது பருப்பொருளின் அளவு; அது எங்கும் மாறாது; எடை மட்டுமே மாறும்.' },
  },
  {
    difficulty: 'medium', source: '§1.6.1, p. 5', answer: 0,
    en: { q: 'In a Vernier caliper, the upper jaws are used to measure', options: ['internal dimensions, such as the inner diameter of a beaker', 'external dimensions, such as the diameter of a ball', 'the depth of a hollow object', 'the diameter of a thin wire'], explanation: 'Lower jaws measure external dimensions, upper jaws internal dimensions and the thin bar measures depth.' },
    ta: { q: 'வெர்னியர் அளவியின் மேல்நோக்கிய தாடைகள் எதனை அளக்கப் பயன்படுகின்றன?', options: ['உட்புற அளவுகள் – எ.கா. முகவையின் உள்விட்டம்', 'வெளிப்புற அளவுகள் – எ.கா. பந்தின் விட்டம்', 'உள்ளீடற்ற பொருள்களின் ஆழம்', 'மெல்லிய கம்பியின் விட்டம்'], explanation: 'கீழ்நோக்கிய தாடைகள் வெளிப்புற அளவுகளையும், மேல்நோக்கிய தாடைகள் உட்புற அளவுகளையும், மெல்லிய பட்டை ஆழத்தையும் அளக்கின்றன.' },
  },
  {
    difficulty: 'medium', source: '§1.7.2, p. 7', answer: 0,
    en: { q: 'A screw gauge works on the principle that, when a screw rotates in a nut, the distance moved by its tip is', options: ['directly proportional to the number of rotations', 'inversely proportional to the number of rotations', 'independent of the number of rotations', 'proportional to the square of the rotations'], explanation: 'Each full rotation moves the tip by one pitch, so distance ∝ number of rotations.' },
    ta: { q: 'நிலையான உலோக உருளைக்குள் திருகு சுற்றும்போது, அதன் முனை நகரும் தொலைவு', options: ['சுற்றுகளின் எண்ணிக்கைக்கு நேர்தகவில் இருக்கும்', 'சுற்றுகளின் எண்ணிக்கைக்கு எதிர்தகவில் இருக்கும்', 'சுற்றுகளின் எண்ணிக்கையைச் சார்ந்தது அல்ல', 'சுற்றுகளின் இருமடிக்கு நேர்தகவில் இருக்கும்'], explanation: 'ஒவ்வொரு முழுச்சுற்றுக்கும் முனை ஒரு புரியிடைத் தூரம் நகர்கிறது; எனவே தொலைவு சுற்றுகளின் எண்ணிக்கைக்கு நேர்தகவு.' },
  },
  {
    difficulty: 'medium', source: '§1.7.1, p. 7', answer: 0,
    en: { q: 'The ratchet on the head of a screw gauge is provided to', options: ['prevent the user from exerting undue pressure on the object', 'increase the least count of the screw gauge', 'read the pitch scale directly', 'remove the zero error automatically'], explanation: 'The ratchet is a safety device: it slips once the object is just held, so it is not squeezed.' },
    ta: { q: 'திருகு அளவியின் தலைப்பகுதியில் உள்ள பற்சட்ட அமைப்பின் பயன்', options: ['பொருளின் மீது தேவையற்ற அழுத்தம் செலுத்தப்படுவதைத் தடுக்கிறது', 'மீச்சிற்றளவை அதிகரிக்கிறது', 'புரிக்கோல் அளவை நேரடியாகக் காட்டுகிறது', 'சுழிப்பிழையைத் தானாகவே நீக்குகிறது'], explanation: 'பற்சட்டம் ஒரு பாதுகாப்பு அமைப்பு; பொருள் பிடிபட்டவுடன் அது நழுவுவதால் பொருள் நசுக்கப்படுவதில்லை.' },
  },
  {
    difficulty: 'medium', source: '§1.9, p. 10', answer: 0,
    en: { q: 'Which practice gives a more accurate value of a measured quantity?', options: ['Repeating the measurement and taking the average', 'Measuring only once, as quickly as possible', 'Ignoring the zero error of the instrument', 'Rounding every reading off to a whole number'], explanation: 'Checking the instrument and averaging repeated readings reduces errors and gives an accurate value.' },
    ta: { q: 'அளவிடப்பட்ட அளவின் துல்லியமான மதிப்பைப் பெற உதவும் வழி எது?', options: ['அளவீடுகளை மீண்டும் மீண்டும் செய்து சராசரி காணுதல்', 'ஒருமுறை மட்டும் விரைவாக அளத்தல்', 'கருவியின் சுழிப்பிழையைப் புறக்கணித்தல்', 'ஒவ்வொரு அளவையும் முழு எண்ணாக்குதல்'], explanation: 'கருவியின் சரித்தன்மையைச் சோதித்து, பலமுறை அளந்து சராசரி காண்பதால் பிழைகள் குறைந்து துல்லியமான மதிப்பு கிடைக்கிறது.' },
  },
  {
    difficulty: 'medium', source: '§1.5, p. 5', answer: 0,
    en: { q: 'According to the SI conventions, the density of mercury should be written as', options: ['1.36 × 10⁴ kg m⁻³', '13600 kg m⁻³', '136 × 10² kg m⁻³', '13600 kgs m⁻³'], explanation: 'Numerical values should be written in scientific form: 1.36 × 10⁴ kg m⁻³, not 13600 kg m⁻³.' },
    ta: { q: 'SI மரபுகளின்படி பாதரசத்தின் அடர்த்தி எவ்வாறு எழுதப்பட வேண்டும்?', options: ['1.36 × 10⁴ kg m⁻³', '13600 kg m⁻³', '136 × 10² kg m⁻³', '13600 kgs m⁻³'], explanation: 'எண் மதிப்புகள் அறிவியல் முறையில் எழுதப்பட வேண்டும்: 13600 kg m⁻³ அல்ல, 1.36 × 10⁴ kg m⁻³.' },
  },
  {
    difficulty: 'medium', source: '§1.3.3, p. 4', answer: 0,
    en: { q: 'One second is also defined as what fraction of a mean solar day?', options: ['1/86400', '1/3600', '1/1440', '1/60'], explanation: 'A day has 24 × 60 × 60 = 86400 s, so one second is 1/86400 of a mean solar day.' },
    ta: { q: 'ஒரு வினாடி என்பது சராசரி சூரிய நாளின் எத்தனையாவது பகுதி?', options: ['1/86400', '1/3600', '1/1440', '1/60'], explanation: 'ஒரு நாள் = 24 × 60 × 60 = 86400 வினாடி; எனவே ஒரு வினாடி சராசரி சூரிய நாளின் 1/86400 பகுதி.' },
  },
  {
    difficulty: 'medium', source: '§1.2 (Table 1.3), p. 2', answer: 0,
    en: { q: 'Momentum = mass × velocity. Its SI unit is', options: ['kg m s⁻¹', 'kg m s⁻²', 'N m⁻²', 'kg m⁻³'], explanation: 'kg × m s⁻¹ = kg m s⁻¹; kg m s⁻² is the unit of force (N).' },
    ta: { q: 'உந்தம் = நிறை × திசைவேகம். அதன் SI அலகு', options: ['kg m s⁻¹', 'kg m s⁻²', 'N m⁻²', 'kg m⁻³'], explanation: 'kg × m s⁻¹ = kg m s⁻¹; kg m s⁻² என்பது விசையின் அலகு (N).' },
  },
  {
    difficulty: 'medium', source: '§1.6.2, p. 6', answer: 0,
    en: { q: 'A Vernier caliper (LC = 0.01 cm) has a negative zero error. Counting backwards from 10, the 4th vernier line coincides. The zero correction is', options: ['+0.04 cm', '−0.04 cm', '+0.06 cm', '−0.06 cm'], explanation: 'Negative zero error = −4 × 0.01 = −0.04 cm, so the zero correction is +0.04 cm.' },
    ta: { q: 'ஒரு வெர்னியர் அளவியில் (மீச்சிற்றளவு 0.01 செமீ) எதிர் சுழிப்பிழை உள்ளது. 10-இலிருந்து பின்னோக்கி எண்ணும்போது 4-வது கோடு ஒன்றிப்பு. சுழித்திருத்தம்', options: ['+0.04 செமீ', '−0.04 செமீ', '+0.06 செமீ', '−0.06 செமீ'], explanation: 'எதிர் சுழிப்பிழை = −4 × 0.01 = −0.04 செமீ; எனவே சுழித்திருத்தம் +0.04 செமீ.' },
  },
  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise VIII.1, p. 12', answer: 0,
    en: { q: 'How do you find the thickness of the wall of a hollow tea cup with a Vernier caliper?', options: ['Measure the outer diameter (lower jaws) and inner diameter (upper jaws); thickness = (outer − inner) ÷ 2', 'Measure the outer diameter with the depth probe; thickness = outer diameter ÷ 2', 'Measure the inner diameter with the lower jaws; thickness = outer − inner', 'Measure the depth with the lower jaws; thickness = depth ÷ 2'], explanation: 'The wall appears on both sides of a diameter, so thickness = (outer diameter − inner diameter) ÷ 2.' },
    ta: { q: 'ஒரு உள்ளீடற்ற தேநீர்க் குவளையின் சுவர்த் தடிமனை வெர்னியர் அளவியால் எவ்வாறு கண்டறிவாய்?', options: ['வெளிவிட்டம் (கீழ்நோக்கிய தாடைகள்), உள்விட்டம் (மேல்நோக்கிய தாடைகள்) அளந்து, தடிமன் = (வெளிவிட்டம் − உள்விட்டம்) ÷ 2', 'ஆழம் அளக்கும் பட்டையால் வெளிவிட்டம் அளந்து, தடிமன் = வெளிவிட்டம் ÷ 2', 'கீழ்நோக்கிய தாடைகளால் உள்விட்டம் அளந்து, தடிமன் = வெளிவிட்டம் − உள்விட்டம்', 'கீழ்நோக்கிய தாடைகளால் ஆழம் அளந்து, தடிமன் = ஆழம் ÷ 2'], explanation: 'விட்டத்தின் இரு பக்கங்களிலும் சுவர் உள்ளது; எனவே தடிமன் = (வெளிவிட்டம் − உள்விட்டம்) ÷ 2.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise IX.1, p. 12', answer: 0,
    en: { q: 'Inian says a light year is 9.46 × 10¹⁵ m; Ezhilan says it is 9.46 × 10¹² km. Who is right?', options: ['Both are right, since 1 km = 10³ m', 'Only Inian is right', 'Only Ezhilan is right', 'Neither; it is 9.46 × 10¹⁸ m'], explanation: '9.46 × 10¹² km × 10³ m/km = 9.46 × 10¹⁵ m, so both values are the same distance.' },
    ta: { q: 'இனியன் ஒரு ஒளி ஆண்டு என்பதனை 9.46 × 10¹⁵ மீ எனவும், எழிலன் 9.46 × 10¹² கிமீ எனவும் வாதிடுகின்றனர். யார் கூற்று சரி?', options: ['இருவரும் சரி; 1 கிமீ = 10³ மீ', 'இனியன் மட்டும் சரி', 'எழிலன் மட்டும் சரி', 'இருவரும் தவறு; அது 9.46 × 10¹⁸ மீ'], explanation: '9.46 × 10¹² கிமீ × 10³ = 9.46 × 10¹⁵ மீ; இரண்டும் ஒரே தொலைவு.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise IX.2, p. 12', answer: 0,
    en: { q: 'While measuring the thickness (diameter) of a rubber ball with a Vernier caliper (LC = 0.01 cm), the main scale reading is 7 cm and the vernier coincidence is 6. Find the radius of the ball.', options: ['3.53 cm', '7.06 cm', '3.56 cm', '3.8 cm'], explanation: 'Diameter = 7 + (6 × 0.01) = 7.06 cm, so radius = 7.06 ÷ 2 = 3.53 cm.' },
    ta: { q: 'ஒரு இரப்பர் பந்தின் விட்டத்தை வெர்னியர் அளவியால் (மீச்சிற்றளவு 0.01 செமீ) அளவிடும்போது முதன்மைக் கோலின் அளவு 7 செமீ, வெர்னியர் ஒன்றிப்பு 6 எனில் அதன் ஆரம்', options: ['3.53 செமீ', '7.06 செமீ', '3.56 செமீ', '3.8 செமீ'], explanation: 'விட்டம் = 7 + (6 × 0.01) = 7.06 செமீ; ஆரம் = 7.06 ÷ 2 = 3.53 செமீ.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise V.1, p. 12', answer: 1,
    en: { q: 'Assertion: The scientifically correct expression is "The mass of the bag is 10 kg". Reason: In everyday life, we use the term weight instead of mass.', options: AR_EN, explanation: 'Both are true: kg is the unit of mass, so "mass is 10 kg" is correct; but the everyday habit of saying weight does not explain why the expression is correct.' },
    ta: { q: 'கூற்று: ஒரு பையின் நிறை 10 கிகி என்பது அறிவியல் பூர்வமாக சரியான வெளிப்படுத்துதல் ஆகும். காரணம்: அன்றாட வாழ்வில் நாம் நிறை என்ற வார்த்தைக்குப் பதிலாக எடை என்ற வார்த்தையைப் பயன்படுத்துகிறோம்.', options: AR_TA, explanation: 'இரண்டும் சரி: கிகி நிறையின் அலகு; ஆனால் அன்றாடப் பழக்கம் கூற்று ஏன் சரி என்பதை விளக்கவில்லை.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise V.2, p. 12', answer: 3,
    en: { q: 'Assertion: 0 °C = 273.16 K. For our convenience we take it as 273 K after rounding off the decimal. Reason: To convert a temperature on the Celsius scale to kelvin we have to add 273 to the given temperature.', options: AR_EN, explanation: '0 °C is 273.15 K (273.16 K is the triple point of water), so the assertion as stated is false; adding 273 to a Celsius reading does give kelvin, so the reason is true.' },
    ta: { q: 'கூற்று: 0 °C = 273.16 K. நாம் அதை முழு எண்ணாக 273 K என எடுத்துக் கொள்கிறோம். காரணம்: செல்சியஸ் அளவை கெல்வின் அளவிற்கு மாற்றும்போது 273 ஐக் கூட்டினால் போதுமானது.', options: AR_TA, explanation: '0 °C = 273.15 K (273.16 K என்பது நீரின் முப்புள்ளி); எனவே கூற்று தவறு. செல்சியஸுடன் 273 கூட்டினால் கெல்வின் கிடைக்கும்; காரணம் சரி.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise V.3, p. 12', answer: 0,
    en: { q: 'Assertion: Distance between two celestial bodies is measured in terms of light year. Reason: The distance travelled by light in one year is one light year.', options: AR_EN, explanation: 'Both true: a light year (9.46 × 10¹⁵ m) is a very large unit of distance, which is why it suits astronomical distances.' },
    ta: { q: 'கூற்று: இரண்டு வான் பொருட்களுக்கு இடையே உள்ள தொலைவு ஒளி ஆண்டு என்ற அலகினால் அளக்கப்படுகிறது. காரணம்: ஒளியானது தொடர்ந்து ஒரு ஆண்டு செல்லக்கூடிய தொலைவு ஓர் ஒளி ஆண்டு எனப்படும்.', options: AR_TA, explanation: 'இரண்டும் சரி: ஒளி ஆண்டு (9.46 × 10¹⁵ மீ) மிகப் பெரிய தொலைவு அலகு; எனவே வானியல் தொலைவுகளுக்குப் பொருத்தமானது.' },
  },
  {
    difficulty: 'hard', source: '§1.6.2 (Fig. 1.3), p. 6', imageUrl: `${IMG}/vernier-zero-error.png`, answer: 0,
    en: { q: 'The figure shows a Vernier caliper (LC = 0.01 cm) with its jaws closed. The 5th vernier division coincides with a main scale division. What are the zero error and the zero correction?', options: ['+0.05 cm error; −0.05 cm correction', '−0.05 cm error; +0.05 cm correction', '+0.05 cm error; +0.05 cm correction', '−0.05 cm error; −0.05 cm correction'], explanation: 'The vernier zero is to the right of the main scale zero: positive error = +5 × 0.01 = +0.05 cm, so the correction is −0.05 cm.' },
    ta: { q: 'படத்தில் தாடைகள் மூடிய நிலையில் உள்ள வெர்னியர் அளவி (மீச்சிற்றளவு 0.01 செமீ) காட்டப்பட்டுள்ளது. 5-வது வெர்னியர் பிரிவு முதன்மைக் கோலின் ஒரு பிரிவுடன் ஒன்றிப்பு. சுழிப்பிழையும் சுழித்திருத்தமும்', options: ['பிழை +0.05 செமீ; திருத்தம் −0.05 செமீ', 'பிழை −0.05 செமீ; திருத்தம் +0.05 செமீ', 'பிழை +0.05 செமீ; திருத்தம் +0.05 செமீ', 'பிழை −0.05 செமீ; திருத்தம் −0.05 செமீ'], explanation: 'வெர்னியர் சுழி முதன்மைக் கோலின் சுழிக்கு வலப்புறம் உள்ளது: நேர் சுழிப்பிழை = +5 × 0.01 = +0.05 செமீ; திருத்தம் −0.05 செமீ.' },
  },
  {
    difficulty: 'hard', source: '§1.7.2 (Fig. 1.7), p. 8', imageUrl: `${IMG}/screw-gauge-zero-error.png`, answer: 0,
    en: { q: 'The figure shows the head scale of a screw gauge (LC = 0.01 mm) when the studs are in contact. The zero of the head scale lies below the pitch scale axis and the 5th division coincides with it. The zero correction is', options: ['−0.05 mm', '+0.05 mm', '−0.95 mm', '+0.95 mm'], explanation: 'Zero below the axis means a positive zero error = +(5 × 0.01) = +0.05 mm, so the zero correction is −0.05 mm.' },
    ta: { q: 'படத்தில் திருகு அளவியின் (மீச்சிற்றளவு 0.01 மிமீ) முனைகள் தொடும்போது தலைக்கோல் காட்டப்பட்டுள்ளது. தலைக்கோலின் சுழி புரிக்கோல் அச்சுக்குக் கீழே உள்ளது; 5-வது பிரிவு அச்சுடன் ஒன்றிப்பு. சுழித்திருத்தம்', options: ['−0.05 மிமீ', '+0.05 மிமீ', '−0.95 மிமீ', '+0.95 மிமீ'], explanation: 'சுழி அச்சுக்குக் கீழே இருப்பதால் நேர் சுழிப்பிழை = +(5 × 0.01) = +0.05 மிமீ; சுழித்திருத்தம் −0.05 மிமீ.' },
  },
  {
    difficulty: 'hard', source: '§1.7.2 (Fig. 1.8), p. 8', answer: 0,
    en: { q: 'With the studs of a screw gauge (LC = 0.01 mm, 100 head scale divisions) in contact, the zero of the head scale lies above the pitch scale axis and the 95th division coincides with the axis. The zero error is', options: ['−0.05 mm', '−0.95 mm', '+0.95 mm', '+0.05 mm'], explanation: 'ZE = −(100 − n) × LC = −(100 − 95) × 0.01 = −0.05 mm; the zero correction is +0.05 mm.' },
    ta: { q: 'திருகு அளவியின் (மீச்சிற்றளவு 0.01 மிமீ, தலைக்கோலில் 100 பிரிவுகள்) முனைகள் தொடும்போது தலைக்கோலின் சுழி புரிக்கோல் அச்சுக்கு மேலே உள்ளது; 95-வது பிரிவு அச்சுடன் ஒன்றிப்பு. சுழிப்பிழை', options: ['−0.05 மிமீ', '−0.95 மிமீ', '+0.95 மிமீ', '+0.05 மிமீ'], explanation: 'சுழிப்பிழை = −(100 − n) × LC = −(100 − 95) × 0.01 = −0.05 மிமீ; சுழித்திருத்தம் +0.05 மிமீ.' },
  },
  {
    difficulty: 'hard', source: '§1.6.2, p. 6', answer: 0,
    en: { q: 'A Vernier caliper (LC = 0.01 cm) with a negative zero error of 0.03 cm gives a main scale reading of 3.1 cm and a vernier coincidence of 7. The correct reading is', options: ['3.20 cm', '3.14 cm', '3.17 cm', '3.80 cm'], explanation: 'Observed = 3.1 + 7 × 0.01 = 3.17 cm; negative error, so add 0.03 cm: 3.20 cm.' },
    ta: { q: '0.03 செமீ எதிர் சுழிப்பிழை கொண்ட வெர்னியர் அளவியில் (மீச்சிற்றளவு 0.01 செமீ) முதன்மைக் கோல் அளவு 3.1 செமீ, வெர்னியர் ஒன்றிப்பு 7. சரியான அளவு', options: ['3.20 செமீ', '3.14 செமீ', '3.17 செமீ', '3.80 செமீ'], explanation: 'காணப்பட்ட அளவு = 3.1 + 7 × 0.01 = 3.17 செமீ; எதிர் சுழிப்பிழை என்பதால் 0.03 கூட்ட: 3.20 செமீ.' },
  },
  {
    difficulty: 'hard', source: '§1.7.2, p. 8', answer: 0,
    en: { q: 'A screw gauge (LC = 0.01 mm) has a positive zero error of 0.03 mm. For a wire, the pitch scale reading is 2 mm and the head scale coincidence is 45. The correct diameter is', options: ['2.42 mm', '2.48 mm', '2.45 mm', '2.75 mm'], explanation: 'Observed = 2 + 45 × 0.01 = 2.45 mm; subtract the positive error: 2.45 − 0.03 = 2.42 mm.' },
    ta: { q: '0.03 மிமீ நேர் சுழிப்பிழை கொண்ட திருகு அளவியில் (மீச்சிற்றளவு 0.01 மிமீ) ஒரு கம்பிக்குப் புரிக்கோல் அளவு 2 மிமீ, தலைக்கோல் ஒன்றிப்பு 45. கம்பியின் சரியான விட்டம்', options: ['2.42 மிமீ', '2.48 மிமீ', '2.45 மிமீ', '2.75 மிமீ'], explanation: 'காணப்பட்ட அளவு = 2 + 45 × 0.01 = 2.45 மிமீ; நேர் பிழையைக் கழிக்க: 2.45 − 0.03 = 2.42 மிமீ.' },
  },
  {
    difficulty: 'hard', source: '§1.8.1, p. 9', answer: 0,
    en: { q: 'An astronaut has a mass of 60 kg. Acceleration due to gravity on the Moon is 1.63 m s⁻². His weight on the Moon is about', options: ['97.8 N', '588 N', '60 N', '36.8 N'], explanation: 'w = mg = 60 × 1.63 ≈ 97.8 N; his mass stays 60 kg.' },
    ta: { q: 'ஒரு விண்வெளி வீரரின் நிறை 60 கிகி. நிலவில் புவியீர்ப்பு முடுக்கம் 1.63 மீ வி⁻². நிலவில் அவரது எடை ஏறக்குறைய', options: ['97.8 N', '588 N', '60 N', '36.8 N'], explanation: 'w = mg = 60 × 1.63 ≈ 97.8 N; அவரது நிறை 60 கிகி-ஆகவே இருக்கும்.' },
  },
  {
    difficulty: 'hard', source: '§1.5, pp. 4–5', answer: 0,
    en: { q: 'Which of these SI rules are correct?\n(i) Units named after scientists are written with a capital initial letter.\n(ii) Symbols of units named after scientists are written with a capital letter.\n(iii) Symbols of units are not written in plural form.\n(iv) The degree sign is omitted when temperature is in kelvin.', options: ['(ii), (iii) and (iv) only', '(i), (ii) and (iii) only', '(i) and (iv) only', '(ii) and (iii) only'], explanation: 'Rule (i) is wrong – we write newton, not Newton; (ii), (iii) and (iv) are the book’s rules 2, 5 and 6.' },
    ta: { q: 'பின்வரும் SI விதிகளில் சரியானவை எவை?\n(i) அறிவியலாளர் பெயரால் அமைந்த அலகுகள் பெரிய எழுத்தில் தொடங்கி எழுதப்படும்.\n(ii) அறிவியலாளர் பெயரால் அமைந்த அலகுகளின் குறியீடுகள் பெரிய எழுத்தில் எழுதப்படும்.\n(iii) அலகுகளின் குறியீடுகள் பன்மையில் எழுதப்படுவதில்லை.\n(iv) கெல்வினில் வெப்பநிலையைக் குறிக்கும்போது டிகிரி குறி இடப்படுவதில்லை.', options: ['(ii), (iii), (iv) மட்டும்', '(i), (ii), (iii) மட்டும்', '(i), (iv) மட்டும்', '(ii), (iii) மட்டும்'], explanation: '(i) தவறு – Newton அல்ல newton என எழுத வேண்டும்; (ii), (iii), (iv) பாடநூலின் விதிகள் 2, 5, 6.' },
  },
  {
    difficulty: 'hard', source: '§1.3.1, p. 3', answer: 0,
    en: { q: '1 parsec = 3.26 light year and 1 light year = 9.46 × 10¹⁵ m. One parsec is therefore about', options: ['3.08 × 10¹⁶ m', '9.46 × 10¹⁵ m', '2.90 × 10¹⁵ m', '3.26 × 10¹⁵ m'], explanation: '3.26 × 9.46 × 10¹⁵ ≈ 30.8 × 10¹⁵ = 3.08 × 10¹⁶ m, as in Table 1.4.' },
    ta: { q: '1 விண்ணியல் ஆரம் (பார்செக்) = 3.26 ஒளி ஆண்டு; 1 ஒளி ஆண்டு = 9.46 × 10¹⁵ மீ. எனவே ஒரு பார்செக் ஏறக்குறைய', options: ['3.08 × 10¹⁶ மீ', '9.46 × 10¹⁵ மீ', '2.90 × 10¹⁵ மீ', '3.26 × 10¹⁵ மீ'], explanation: '3.26 × 9.46 × 10¹⁵ ≈ 30.8 × 10¹⁵ = 3.08 × 10¹⁶ மீ (அட்டவணை 1.4).' },
  },
  {
    difficulty: 'hard', source: '§1.8.1, p. 9', answer: 2,
    en: { q: 'Assertion: The weight of a body on the Moon is less than its weight on the Earth. Reason: The mass of a body becomes less on the Moon.', options: AR_EN, explanation: 'The assertion is true because g on the Moon is about 1/6 of that on Earth; the reason is false – mass stays the same everywhere.' },
    ta: { q: 'கூற்று: நிலவில் ஒரு பொருளின் எடை புவியில் உள்ள எடையை விடக் குறைவு. காரணம்: நிலவில் ஒரு பொருளின் நிறை குறைகிறது.', options: AR_TA, explanation: 'நிலவின் ஈர்ப்பு புவியின் 1/6 மடங்கு என்பதால் கூற்று சரி; நிறை எங்கும் மாறாது என்பதால் காரணம் தவறு.' },
  },
  {
    difficulty: 'hard', source: '§1.3.2, p. 3', answer: 0,
    en: { q: 'A lorry carries 2.5 metric tonnes of rice. This load expressed in quintals and in kilograms is', options: ['25 quintals = 2500 kg', '250 quintals = 25000 kg', '2.5 quintals = 250 kg', '25 quintals = 250 kg'], explanation: '1 metric tonne = 1000 kg = 10 quintals, so 2.5 t = 2500 kg = 25 quintals.' },
    ta: { q: 'ஒரு லாரி 2.5 மெட்ரிக் டன் அரிசியைச் சுமக்கிறது. இதனை குவிண்டாலிலும் கிலோகிராமிலும் குறிப்பிட்டால்', options: ['25 குவிண்டால் = 2500 கிகி', '250 குவிண்டால் = 25000 கிகி', '2.5 குவிண்டால் = 250 கிகி', '25 குவிண்டால் = 250 கிகி'], explanation: '1 மெட்ரிக் டன் = 1000 கிகி = 10 குவிண்டால்; எனவே 2.5 டன் = 2500 கிகி = 25 குவிண்டால்.' },
  },
];
