// Tamil Nadu State Board, 9th Science, Unit 12 – Periodic Classification of Elements (தனிமங்களின் வகைப்பாட்டு அட்டவணை).
// source = section / exercise and printed page of the English-medium book.
import { BankQuestion, AR_EN, AR_TA } from './types';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.1, p. 146', answer: 0,
    en: { q: 'If Dobereiner is related with the "law of triads", then Newlands is related with the', options: ['law of octaves', 'modern periodic law', 'Hund’s rule', 'Pauli’s exclusion principle'], explanation: 'In 1866 John Newlands proposed the law of octaves.' },
    ta: { q: 'டாபர்னீர் மும்மை விதியோடு தொடர்பு கொண்டிருந்தால், நியூலாந்தோடு தொடர்புடையது', options: ['எண்ம விதி', 'நவீன ஆவர்த்தன விதி', 'ஹூண்ட்ஸ் விதி', 'பௌலீயின் விலக்கல் கோட்பாடு'], explanation: '1866-ல் ஜான் நியூலாந்து எண்ம விதியை முன்மொழிந்தார்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.2, p. 146', answer: 0,
    en: { q: 'The modern periodic law states that the physical and chemical properties of elements are periodic functions of their', options: ['atomic numbers', 'atomic masses', 'similarities', 'anomalies'], explanation: 'Moseley showed that properties depend on atomic number, not atomic mass.' },
    ta: { q: 'நவீன ஆவர்த்தன விதியின்படி தனிமங்களின் இயற்பியல், வேதியியல் பண்புகள் அவற்றின் _____ ஆவர்த்தன செயல்பாடாகும்.', options: ['அணு எண்', 'அணு நிறை', 'ஒத்த தன்மை', 'முரண்பாடு'], explanation: 'பண்புகள் அணு நிறையை அல்ல, அணு எண்ணைச் சார்ந்தவை என மோஸ்லே நிரூபித்தார்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.3, p. 146', answer: 0,
    en: { q: 'Elements in the modern periodic table are arranged in _____ groups and _____ periods.', options: ['18, 7', '7, 18', '17, 8', '8, 17'], explanation: 'The modern periodic table has 18 vertical groups and 7 horizontal periods.' },
    ta: { q: 'நவீன தனிம அட்டவணையின் தனிமங்கள் _____ தொகுதி _____ தொடர்களாக அடுக்கப்பட்டுள்ளன.', options: ['18, 7', '7, 18', '17, 8', '8, 17'], explanation: 'நவீன தனிம அட்டவணையில் 18 செங்குத்துத் தொகுதிகளும் 7 கிடைமட்டத் தொடர்களும் உள்ளன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.2, p. 146', answer: 0,
    en: { q: 'Noble gases belong to the _____ group of the periodic table.', options: ['18th', '17th', '1st', '2nd'], explanation: 'He, Ne, Ar, Kr, Xe and Rn are the group 18 elements.' },
    ta: { q: 'அரிய வாயுக்கள் / மந்த வாயுக்கள் தனிம அட்டவணையின் _____ தொகுதியில் காணப்படும்.', options: ['18-வது', '17-வது', '1-வது', '2-வது'], explanation: 'He, Ne, Ar, Kr, Xe, Rn ஆகியவை 18-ஆம் தொகுதித் தனிமங்கள்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.3, p. 146', answer: 0,
    en: { q: 'The basis of the classifications proposed by Dobereiner, Newlands and Mendeleev was _____.', options: ['atomic mass', 'atomic number', 'electronic configuration', 'valency'], explanation: 'All three early classifications arranged elements by their atomic masses.' },
    ta: { q: 'தனிமங்களை அட்டவணைப்படுத்துவதில் டாபர்னீர், நியூலாந்து, மெண்டலீவ் ஆகியோரின் அடிப்படைக் கொள்கை _____ ஆகும்.', options: ['அணு நிறை', 'அணு எண்', 'எலக்ட்ரான் அமைப்பு', 'இணைதிறன்'], explanation: 'இம்மூன்று ஆரம்பகால வகைப்பாடுகளும் தனிமங்களை அவற்றின் அணு நிறையின் அடிப்படையில் அமைத்தன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.4, p. 146', answer: 0,
    en: { q: 'An example of a liquid metal is _____.', options: ['mercury', 'bromine', 'sodium', 'gallium chloride'], explanation: 'Except mercury, all metals are solids at room temperature (bromine is a liquid non-metal).' },
    ta: { q: 'திரவ உலோகத்திற்கு எடுத்துக்காட்டு _____.', options: ['பாதரசம்', 'புரோமின்', 'சோடியம்', 'காலியம் குளோரைடு'], explanation: 'பாதரசத்தைத் தவிர எல்லா உலோகங்களும் அறை வெப்ப நிலையில் திண்மங்கள் (புரோமின் ஒரு திரவ அலோகம்).' },
  },
  {
    difficulty: 'easy', source: 'Book exercise III, p. 146', answer: 0,
    en: { q: 'In the match-the-following, "modern periodic law" is matched with', options: ['Henry Moseley', 'Dobereiner', 'Newlands', 'Mendeleev'], explanation: 'In 1913 Henry Moseley proved that properties depend on atomic number, leading to the modern periodic law.' },
    ta: { q: 'பொருத்துக வினாவில் "நவீன ஆவர்த்தன விதி" எதனுடன் பொருந்தும்?', options: ['ஹென்றி மோஸ்லே', 'டாபர்னீர்', 'நியூலாந்து', 'மெண்டலீவ்'], explanation: '1913-ல் ஹென்றி மோஸ்லே பண்புகள் அணு எண்ணைச் சார்ந்தவை என நிரூபித்தார்; இதுவே நவீன ஆவர்த்தன விதிக்கு வழிவகுத்தது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise III, p. 146', answer: 0,
    en: { q: 'In the match-the-following, "alkaline earth metal" is matched with', options: ['calcium', 'sodium', 'chlorine', 'neon'], explanation: 'Calcium is a group 2 (alkaline earth) metal; sodium is an alkali metal.' },
    ta: { q: 'பொருத்துக வினாவில் "கார மண் உலோகம்" எதனுடன் பொருந்தும்?', options: ['கால்சியம்', 'சோடியம்', 'குளோரின்', 'நியான்'], explanation: 'கால்சியம் 2-ஆம் தொகுதி (கார மண்) உலோகம்; சோடியம் கார உலோகம்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise IV.5, p. 146', answer: 0,
    en: { q: 'Group 17 elements are named', options: ['halogens', 'noble gases', 'alkali metals', 'chalcogens'], explanation: 'The book statement "Group 17 elements are named as halogens" is true (F, Cl, Br, I).' },
    ta: { q: '17-ஆம் தொகுதித் தனிமங்கள் இவ்வாறு அழைக்கப்படுகின்றன', options: ['ஹாலஜன்கள் (உப்பீனிகள்)', 'மந்த வாயுக்கள்', 'கார உலோகங்கள்', 'சால்கோஜன்கள்'], explanation: '"தொகுதி 17 தனிமங்கள் ஹாலஜன்கள் (உப்பீனிகள்)" என்ற கூற்று சரி (F, Cl, Br, I).' },
  },
  {
    difficulty: 'easy', source: '§12.1.1, p. 138', answer: 0,
    en: { q: 'Dobereiner arranged elements into groups of three called', options: ['triads', 'octaves', 'periods', 'blocks'], explanation: 'In 1817 Dobereiner grouped elements in threes ("tri" = three) based on relative atomic masses.' },
    ta: { q: 'டாபர்னீர் தனிமங்களை மூன்று மூன்றாக அமைத்த குழுக்கள்', options: ['மும்மைகள்', 'எண்மங்கள்', 'தொடர்கள்', 'தொகுதிகள் (பிளாக்)'], explanation: '1817-ல் டாபர்னீர் சார்பு அணு நிறையின் அடிப்படையில் தனிமங்களை மூன்று மூன்றாகக் குழுக்களாக்கினார்.' },
  },
  {
    difficulty: 'easy', source: '§12.1.2, p. 139', answer: 0,
    en: { q: 'How many known elements did Newlands arrange in 1866?', options: ['56', '63', '118', '31'], explanation: 'Newlands arranged the 56 known elements in increasing order of atomic mass.' },
    ta: { q: '1866-ல் நியூலாந்து எத்தனை தனிமங்களை வரிசைப்படுத்தினார்?', options: ['56', '63', '118', '31'], explanation: 'நியூலாந்து 56 அறியப்பட்ட தனிமங்களை அணு நிறையின் ஏறு வரிசையில் அமைத்தார்.' },
  },
  {
    difficulty: 'easy', source: '§12.1.3, p. 139', answer: 0,
    en: { q: 'The horizontal rows of Mendeleev’s periodic table are called', options: ['periods', 'groups', 'triads', 'families'], explanation: 'Mendeleev’s table has 8 vertical groups and 7 horizontal periods.' },
    ta: { q: 'மெண்டலீவின் அட்டவணையில் உள்ள கிடைமட்ட வரிசைகள்', options: ['தொடர்கள்', 'தொகுதிகள்', 'மும்மைகள்', 'குடும்பங்கள்'], explanation: 'மெண்டலீவ் அட்டவணையில் 8 செங்குத்துத் தொகுதிகளும் 7 கிடைமட்டத் தொடர்களும் உள்ளன.' },
  },
  {
    difficulty: 'easy', source: '§12.2.3, p. 143', answer: 0,
    en: { q: 'Elements of groups 3 to 12 are called', options: ['transition elements (d-block)', 'representative elements', 'inner transition elements', 'noble gases'], explanation: 'd-block elements lie in the centre, with properties between s- and p-block elements.' },
    ta: { q: '3 முதல் 12 வரை உள்ள தொகுதித் தனிமங்கள்', options: ['இடைநிலைத் தனிமங்கள் (d-தொகுதி)', 'பிரதிநிதித்துவ தனிமங்கள்', 'உள் இடைநிலைத் தனிமங்கள்', 'மந்த வாயுக்கள்'], explanation: 'd-தொகுதித் தனிமங்கள் அட்டவணையின் மையத்தில் உள்ளன; அவற்றின் பண்புகள் s, p தொகுதிகளுக்கு இடைப்பட்டவை.' },
  },
  {
    difficulty: 'easy', source: '§12.3.3, p. 144', answer: 0,
    en: { q: 'Elements which have the properties of both metals and non-metals are called', options: ['metalloids', 'alloys', 'noble gases', 'halogens'], explanation: 'Boron and arsenic are examples of metalloids.' },
    ta: { q: 'உலோகம் மற்றும் அலோகம் ஆகியவற்றின் பண்புகளைக் கொண்டவை', options: ['உலோகப் போலிகள்', 'உலோகக் கலவைகள்', 'மந்த வாயுக்கள்', 'ஹாலஜன்கள்'], explanation: 'போரான், ஆர்செனிக் ஆகியவை உலோகப் போலிகளுக்கு எடுத்துக்காட்டுகள்.' },
  },
  {
    difficulty: 'easy', source: '§12.4, p. 145', answer: 0,
    en: { q: 'Brass is an alloy of', options: ['copper and zinc', 'copper and tin', 'lead and tin', 'iron and carbon'], explanation: 'Brass is made from copper and zinc; solder is lead and tin.' },
    ta: { q: 'பித்தளை எவற்றின் உலோகக் கலவை?', options: ['செம்பு, துத்தநாகம்', 'செம்பு, வெள்ளீயம்', 'ஈயம், வெள்ளீயம்', 'இரும்பு, கார்பன்'], explanation: 'பித்தளை செம்பு, துத்தநாகம் கலந்த கலவை; பற்றாசு ஈயம், வெள்ளீயம் கலந்தது.' },
  },
  {
    difficulty: 'easy', source: '§12.4.1, p. 145', answer: 0,
    en: { q: 'When a metal is alloyed with mercury, the alloy is called', options: ['an amalgam', 'bronze', 'solder', 'steel'], explanation: 'Any alloy of a metal with mercury is called an amalgam.' },
    ta: { q: 'ஒரு உலோகம் பாதரசத்துடன் கலந்து உருவாகும் உலோகக் கலவை', options: ['இரசக்கலவை (அமால்கம்)', 'வெண்கலம்', 'பற்றாசு', 'எஃகு'], explanation: 'பாதரசத்துடன் ஒரு உலோகம் சேர்ந்த கலவை இரசக்கலவை (அமால்கம்) எனப்படும்.' },
  },
  // ---------------------------------------------------------------- Medium
  {
    difficulty: 'medium', source: 'Book exercise II.1, p. 146', answer: 0,
    en: { q: 'In Dobereiner’s triads, the atomic mass of the middle element is the _____ of the atomic masses of the 1st and 3rd elements.', options: ['arithmetic mean (average)', 'sum', 'difference', 'product'], explanation: 'E.g. Na = (6.9 + 39.1) ÷ 2 = 23, the average of Li and K.' },
    ta: { q: 'டாபர்னீர் மும்மை விதியில் நடு தனிமத்தின் அணு நிறையானது முதல் மற்றும் மூன்றாம் அணு நிறையின் _____ ஆகும்.', options: ['சராசரி', 'கூட்டுத்தொகை', 'வேறுபாடு', 'பெருக்கல்'], explanation: 'எ.கா. Na = (6.9 + 39.1) ÷ 2 = 23; இது Li, K இவற்றின் சராசரி.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.1, p. 146', answer: 0,
    en: { q: 'Which statement is correct?', options: ['Newlands’ table is based on atomic masses; the modern periodic table is based on atomic numbers.', 'Newlands’ table is based on atomic numbers; the modern table is based on atomic masses.', 'Both tables are based on atomic numbers.', 'Both tables are based on valency.'], explanation: 'The book statement is true: Newlands used atomic mass; the modern table, after Moseley, uses atomic number.' },
    ta: { q: 'சரியான கூற்று எது?', options: ['நியூலாந்தின் தனிம அட்டவணை தனிமத்தின் நிறையையும், நவீன அட்டவணை அணு எண்ணையும் அடிப்படையாகக் கொண்டது.', 'நியூலாந்தின் அட்டவணை அணு எண்ணையும், நவீன அட்டவணை அணு நிறையையும் அடிப்படையாகக் கொண்டது.', 'இரண்டு அட்டவணைகளும் அணு எண்ணை அடிப்படையாகக் கொண்டவை.', 'இரண்டு அட்டவணைகளும் இணைதிறனை அடிப்படையாகக் கொண்டவை.'], explanation: 'பாடநூல் கூற்று சரி: நியூலாந்து அணு நிறையைப் பயன்படுத்தினார்; மோஸ்லேவுக்குப் பின் நவீன அட்டவணை அணு எண்ணைப் பயன்படுத்துகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.2, p. 146', answer: 0,
    en: { q: '"Metals can gain electrons." The correct form of this statement is', options: ['Metals can lose electrons.', 'Metals can share electrons only.', 'Metals neither gain nor lose electrons.', 'Non-metals can lose electrons easily.'], explanation: 'The statement is false: metals have 1–3 valence electrons and lose them to form positive ions.' },
    ta: { q: '"உலோகங்கள் எலக்ட்ரான்களை ஏற்கும்." இக்கூற்றின் சரியான வடிவம்', options: ['உலோகங்கள் எலக்ட்ரான்களை இழக்கும்.', 'உலோகங்கள் எலக்ட்ரான்களைப் பங்கிட மட்டுமே செய்யும்.', 'உலோகங்கள் எலக்ட்ரான்களை ஏற்பதுமில்லை, இழப்பதுமில்லை.', 'அலோகங்கள் எளிதில் எலக்ட்ரான்களை இழக்கும்.'], explanation: 'கூற்று தவறு: உலோகங்களுக்கு 1–3 இணைதிறன் எலக்ட்ரான்கள்; அவற்றை இழந்து நேர் அயனிகளாகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.3, p. 146', answer: 0,
    en: { q: '"Alloys bear the characteristics of both metals and non-metals." The correct form is', options: ['Metalloids bear the characteristics of both metals and non-metals; alloys are mixtures of metals.', 'Alloys are pure compounds of metals and non-metals.', 'Alloys bear only the characteristics of non-metals.', 'Metalloids are mixtures of two or more metals.'], explanation: 'It is metalloids (e.g. boron, arsenic) that show both metallic and non-metallic properties; alloys are mixtures of metals.' },
    ta: { q: '"உலோகக் கலவைகள் உலோகம், அலோகம் இரண்டின் பண்புகளையும் கொண்டவை." இதன் சரியான வடிவம்', options: ['உலோகப் போலிகள் உலோகம், அலோகம் இரண்டின் பண்புகளையும் கொண்டவை; உலோகக் கலவைகள் உலோகங்களின் கலவை.', 'உலோகக் கலவைகள் உலோகம், அலோகம் இவற்றின் தூய சேர்மங்கள்.', 'உலோகக் கலவைகள் அலோகப் பண்புகளை மட்டும் கொண்டவை.', 'உலோகப் போலிகள் இரண்டு அல்லது அதற்கு மேற்பட்ட உலோகங்களின் கலவை.'], explanation: 'உலோகம், அலோகம் இரண்டின் பண்புகளையும் காட்டுபவை உலோகப் போலிகள் (எ.கா. போரான், ஆர்செனிக்); உலோகக் கலவைகள் உலோகங்களின் கலவைகள்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.4, p. 146', answer: 0,
    en: { q: 'Lanthanides and actinides are kept at the bottom of the periodic table because', options: ['they resemble each other but do not resemble any other group', 'they are all gases', 'they have the lowest atomic masses', 'they were discovered last'], explanation: 'The book statement is true: these f-block (inner transition) elements resemble each other but not other groups.' },
    ta: { q: 'லாந்தனைடுகளும் ஆக்டினைடுகளும் அட்டவணையின் அடியில் வைக்கப்படக் காரணம்', options: ['அவை ஒன்றையொன்று ஒத்திருக்கின்றன; ஆனால் வேறு எந்தத் தொகுதியுடனும் ஒத்துப்போவதில்லை', 'அவை அனைத்தும் வாயுக்கள்', 'அவை மிகக் குறைந்த அணு நிறை கொண்டவை', 'அவை கடைசியாகக் கண்டுபிடிக்கப்பட்டவை'], explanation: 'பாடநூல் கூற்று சரி: இந்த f-தொகுதி (உள் இடைநிலை) தனிமங்கள் ஒன்றையொன்று ஒத்துள்ளன; பிற தொகுதிகளுடன் ஒத்துப்போவதில்லை.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.1, p. 146', answer: 0,
    en: { q: 'The modern periodic law states that', options: ['the chemical and physical properties of elements are periodic functions of their atomic numbers', 'the properties of elements are periodic functions of their atomic masses', 'every eighth element resembles the first', 'the middle element of a triad has the average atomic mass'], explanation: 'The other options are Mendeleev’s law, Newlands’ law of octaves and Dobereiner’s law of triads.' },
    ta: { q: 'நவீன ஆவர்த்தன விதி கூறுவது', options: ['தனிமங்களின் இயற்பியல், வேதியியல் பண்புகள் அவற்றின் அணு எண்களின் ஆவர்த்தனச் சார்புகள்', 'தனிமங்களின் பண்புகள் அவற்றின் அணு நிறைகளின் ஆவர்த்தனச் சார்புகள்', 'ஒவ்வொரு எட்டாவது தனிமமும் முதல் தனிமத்தை ஒத்திருக்கும்', 'மும்மையின் நடுத் தனிமம் சராசரி அணு நிறை கொண்டது'], explanation: 'மற்ற விடைகள் முறையே மெண்டலீவின் விதி, நியூலாந்தின் எண்ம விதி, டாபர்னீரின் மும்மை விதி.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.2, p. 146', answer: 0,
    en: { q: 'In the modern periodic table, elements are placed in periods based on', options: ['the number of shells in their atoms', 'the number of neutrons', 'their atomic masses', 'their physical state'], explanation: 'Elements with the same number of shells are in the same period; vertical columns are groups.' },
    ta: { q: 'நவீன தனிம அட்டவணையில் தனிமங்கள் தொடர்களில் வைக்கப்படுவது எதன் அடிப்படையில்?', options: ['அவற்றின் அணுக்களில் உள்ள கூடுகளின் எண்ணிக்கை', 'நியூட்ரான்களின் எண்ணிக்கை', 'அவற்றின் அணு நிறை', 'அவற்றின் இயற்பியல் நிலை'], explanation: 'ஒரே எண்ணிக்கையிலான கூடுகளைக் கொண்ட தனிமங்கள் ஒரே தொடரில் உள்ளன; செங்குத்து நிரல்கள் தொகுதிகள்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III, p. 146', answer: 0,
    en: { q: 'In the match-the-following, "alkali metal" is matched with', options: ['sodium', 'calcium', 'Henry Moseley', 'Dobereiner'], explanation: 'Sodium is a group 1 alkali metal; its solution in water turns red litmus blue.' },
    ta: { q: 'பொருத்துக வினாவில் "கார உலோகம்" எதனுடன் பொருந்தும்?', options: ['சோடியம்', 'கால்சியம்', 'ஹென்றி மோஸ்லே', 'டாபர்னீர்'], explanation: 'சோடியம் 1-ஆம் தொகுதி கார உலோகம்; அதன் நீர்க்கரைசல் சிவப்பு லிட்மஸை நீலமாக்கும்.' },
  },
  {
    difficulty: 'medium', source: '§12.1.1, Table 12.1, p. 139', answer: 0,
    en: { q: 'In the triad Ca (40.1), Sr, Ba (137.3), the atomic mass of strontium predicted by Dobereiner’s law is about', options: ['88.7', '97.2', '177.4', '48.6'], explanation: '(40.1 + 137.3) ÷ 2 = 88.7, close to the actual value 87.6.' },
    ta: { q: 'Ca (40.1), Sr, Ba (137.3) என்ற மும்மையில் டாபர்னீர் விதிப்படி ஸ்ட்ரான்ஷியத்தின் அணு நிறை தோராயமாக', options: ['88.7', '97.2', '177.4', '48.6'], explanation: '(40.1 + 137.3) ÷ 2 = 88.7; இது உண்மை மதிப்பு 87.6-க்கு அருகில் உள்ளது.' },
  },
  {
    difficulty: 'medium', source: '§12.1.1, p. 139', answer: 0,
    en: { q: 'A limitation of Dobereiner’s triads was that', options: ['only three triads could be identified and all elements could not be classified', 'it placed two elements in the same slot', 'it was based on atomic number', 'it left gaps for undiscovered elements'], explanation: 'Dobereiner found only three triads, and the law did not work for very light or very heavy elements.' },
    ta: { q: 'டாபர்னீரின் மும்மை விதியின் குறைபாடு', options: ['மூன்று மும்மைகளே கண்டறியப்பட்டன; எல்லாத் தனிமங்களையும் மும்மைகளாகக் காண முடியவில்லை', 'இரண்டு தனிமங்களை ஒரே இடத்தில் வைத்தது', 'அது அணு எண்ணை அடிப்படையாகக் கொண்டது', 'கண்டுபிடிக்கப்படாத தனிமங்களுக்கு இடம் விட்டது'], explanation: 'டாபர்னீர் மூன்று மும்மைகளை மட்டுமே கண்டறிந்தார்; மிகக் குறைந்த, மிக அதிக அணு நிறை கொண்ட தனிமங்களுக்கு இவ்விதி பொருந்தவில்லை.' },
  },
  {
    difficulty: 'medium', source: '§12.1.2, p. 139', answer: 0,
    en: { q: 'Newlands’ law of octaves was not valid for elements with atomic masses higher than that of', options: ['calcium', 'sodium', 'iron', 'hydrogen'], explanation: 'The law of octaves worked only up to calcium.' },
    ta: { q: 'எண்ம விதியானது எந்தத் தனிமத்தைவிட அதிக அணு நிறை கொண்ட தனிமங்களுக்கு ஏற்புடையதாக இல்லை?', options: ['கால்சியம்', 'சோடியம்', 'இரும்பு', 'ஹைட்ரஜன்'], explanation: 'எண்ம விதி கால்சியம் வரை மட்டுமே பொருந்தியது.' },
  },
  {
    difficulty: 'medium', source: '§12.1.3, p. 140', answer: 0,
    en: { q: 'Mendeleev left gaps and predicted the properties of eka-silicon. This element was later discovered as', options: ['germanium', 'gallium', 'scandium', 'silicon'], explanation: 'The discovery of germanium (1886), with properties close to his predictions, proved Mendeleev right.' },
    ta: { q: 'மெண்டலீவ் இடம் விட்டு, எகா-சிலிக்கானின் பண்புகளை முன்கூட்டியே கணித்தார். பின்னர் அது கண்டுபிடிக்கப்பட்ட தனிமம்', options: ['ஜெர்மானியம்', 'காலியம்', 'ஸ்காண்டியம்', 'சிலிக்கான்'], explanation: 'அவரது கணிப்புக்கு மிக நெருக்கமான பண்புகளுடன் ஜெர்மானியம் (1886) கண்டுபிடிக்கப்பட்டது; இது மெண்டலீவ் சரி என நிரூபித்தது.' },
  },
  {
    difficulty: 'medium', source: '§12.1.3, p. 140', answer: 0,
    en: { q: 'Mendeleev corrected the atomic mass of beryllium from 14 to', options: ['9', '7', '12', '4'], explanation: 'He reassessed the wrongly determined atomic mass of beryllium as 9 and gave it a proper place.' },
    ta: { q: 'பெரிலியத்தின் அணு நிறையை 14 என்பதிலிருந்து மெண்டலீவ் எந்த மதிப்பாகத் திருத்தினார்?', options: ['9', '7', '12', '4'], explanation: 'தவறாகக் கணக்கிடப்பட்ட பெரிலியத்தின் அணு நிறையை 9 என மறுமதிப்பீடு செய்து அதற்குச் சரியான இடம் அளித்தார்.' },
  },
  {
    difficulty: 'medium', source: '§12.2.3, p. 143', answer: 0,
    en: { q: 'Group 2 elements are called alkaline earth metals because', options: ['their oxides, formerly called "earths", give alkaline solutions in water', 'they are found only in the earth’s crust', 'they are liquids at room temperature', 'they do not react with oxygen'], explanation: 'Group 2 metals combine with oxygen to form oxides ("earths") that dissolve in water to give alkaline solutions.' },
    ta: { q: '2-ஆம் தொகுதித் தனிமங்கள் கார மண் உலோகங்கள் எனப்படக் காரணம்', options: ['முன்பு "புவி" (மண்) எனப்பட்ட அவற்றின் ஆக்சைடுகள் நீரில் கார கரைசல்களைத் தருகின்றன', 'அவை புவியின் மேலோட்டில் மட்டுமே காணப்படுகின்றன', 'அவை அறை வெப்ப நிலையில் திரவங்கள்', 'அவை ஆக்ஸிஜனுடன் வினைபுரிவதில்லை'], explanation: '2-ஆம் தொகுதி உலோகங்கள் ஆக்ஸிஜனுடன் இணைந்து உருவாக்கும் ஆக்சைடுகள் ("புவி") நீரில் கரைந்து கார கரைசல்களைத் தருகின்றன.' },
  },
  {
    difficulty: 'medium', source: '§12.2.3, p. 143', answer: 0,
    en: { q: 'Which block is the only one that contains all three types of elements – metals, non-metals and metalloids?', options: ['p-block', 's-block', 'd-block', 'f-block'], explanation: 'The p-block (groups 13–18) has the biggest variety of elements, including metals, non-metals and metalloids.' },
    ta: { q: 'உலோகங்கள், அலோகங்கள், உலோகப் போலிகள் என்ற மூன்று வகைகளையும் கொண்ட ஒரே தொகுதி (பிளாக்) எது?', options: ['p-தொகுதி', 's-தொகுதி', 'd-தொகுதி', 'f-தொகுதி'], explanation: 'p-தொகுதியில் (13 முதல் 18 தொகுதிகள்) மட்டுமே உலோகங்கள், அலோகங்கள், உலோகப் போலிகள் மூன்றும் காணப்படுகின்றன.' },
  },
  {
    difficulty: 'medium', source: '§12.2.5, p. 144', answer: 0,
    en: { q: 'Hydrogen resembles the halogens because it can', options: ['gain one electron to form the hydride ion (H⁻)', 'lose one electron to form H⁺', 'form a solid at room temperature', 'have a completely filled shell'], explanation: 'Like halogens, hydrogen can gain one electron (H⁻); like alkali metals it can lose one (H⁺).' },
    ta: { q: 'ஹைட்ரஜன் ஹாலஜன்களை ஒத்திருக்கக் காரணம், அது', options: ['ஒரு எலக்ட்ரானை ஏற்று ஹைட்ரைடு அயனியாக (H⁻) மாறும்', 'ஒரு எலக்ட்ரானை இழந்து H⁺ ஆக மாறும்', 'அறை வெப்ப நிலையில் திண்மமாகும்', 'முழுமையாக நிரம்பிய கூட்டைக் கொண்டது'], explanation: 'ஹாலஜன்கள் போல் ஒரு எலக்ட்ரானைப் பெற்று H⁻ ஆகும்; கார உலோகங்கள் போல் ஒன்றை இழந்து H⁺ ஆகும்.' },
  },
  {
    difficulty: 'medium', source: '§12.2.6, p. 144', answer: 0,
    en: { q: 'Noble gases do not react easily with other substances because they', options: ['have completely filled subshells', 'are found in large quantities', 'are metals', 'have only one electron'], explanation: 'Their completely filled subshells make them inert; they are rare because they occur in very small quantities.' },
    ta: { q: 'மந்த வாயுக்கள் மற்ற பொருட்களுடன் எளிதில் வினைபுரியாததற்குக் காரணம்', options: ['அவற்றின் துணைக் கூடுகள் முழுமையாக நிரம்பியுள்ளன', 'அவை அதிக அளவில் காணப்படுகின்றன', 'அவை உலோகங்கள்', 'அவற்றில் ஒரே ஒரு எலக்ட்ரான் உள்ளது'], explanation: 'முழுமையாக நிரம்பிய துணைக் கூடுகள் அவற்றை மந்தமாக்குகின்றன; மிகச் சிறிய அளவிலேயே காணப்படுவதால் அரிய வாயுக்கள் எனப்படுகின்றன.' },
  },
  {
    difficulty: 'medium', source: '§12.3.2, p. 144', answer: 0,
    en: { q: 'In the modern periodic table, all non-metals are placed in the', options: ['p-block only', 's-block only', 'd-block only', 'f-block only'], explanation: 'C, N, O, P, S, Se, the halogens and the inert gases are all in the p-block (upper right).' },
    ta: { q: 'நவீன தனிம அட்டவணையில் அனைத்து அலோகங்களும் அமைந்துள்ள இடம்', options: ['p-தொகுதி மட்டும்', 's-தொகுதி மட்டும்', 'd-தொகுதி மட்டும்', 'f-தொகுதி மட்டும்'], explanation: 'C, N, O, P, S, Se, ஹாலஜன்கள், மந்த வாயுக்கள் அனைத்தும் p-தொகுதியில் (மேல் வலது மூலை) உள்ளன.' },
  },
  {
    difficulty: 'medium', source: '§12.4.1, p. 145', answer: 0,
    en: { q: 'Which is an advantage of alloys over pure metals?', options: ['They are harder and stronger and corrode less', 'They always conduct electricity better', 'They always have higher melting points', 'They are always softer'], explanation: 'Alloys resist corrosion and are harder; they conduct less, and some (like solder) melt at lower temperatures.' },
    ta: { q: 'தூய உலோகங்களை விட உலோகக் கலவைகளின் நன்மை எது?', options: ['அவை கடினமானவை, வலிமையானவை, குறைவாகவே அரிக்கப்படுகின்றன', 'அவை எப்போதும் மின்சாரத்தை நன்கு கடத்துகின்றன', 'அவை எப்போதும் அதிக உருகுநிலை கொண்டவை', 'அவை எப்போதும் மென்மையானவை'], explanation: 'உலோகக் கலவைகள் அரிமானத்தைத் தாங்குகின்றன, கடினமானவை; கடத்துதிறன் குறைவு; சில (பற்றாசு போன்றவை) குறைந்த வெப்பத்தில் உருகும்.' },
  },
  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise III, p. 146', answer: 0,
    en: { q: 'Match:\n1. Triads  2. Alkali metal  3. Law of octaves  4. Alkaline earth metal  5. Modern periodic law\nwith\na. Newlands  b. Calcium  c. Henry Moseley  d. Sodium  e. Dobereiner', options: ['1-e, 2-d, 3-a, 4-b, 5-c', '1-a, 2-d, 3-e, 4-b, 5-c', '1-e, 2-b, 3-a, 4-d, 5-c', '1-c, 2-d, 3-a, 4-b, 5-e'], explanation: 'Triads – Dobereiner; alkali metal – sodium; octaves – Newlands; alkaline earth metal – calcium; modern periodic law – Moseley.' },
    ta: { q: 'பொருத்துக:\n1. மும்மை விதி  2. கார உலோகம்  3. எண்ம விதி  4. கார மண் உலோகம்  5. நவீன ஆவர்த்தன விதி\na. நியூலாந்து  b. கால்சியம்  c. ஹென்றி மோஸ்லே  d. சோடியம்  e. டாபர்னீர்', options: ['1-e, 2-d, 3-a, 4-b, 5-c', '1-a, 2-d, 3-e, 4-b, 5-c', '1-e, 2-b, 3-a, 4-d, 5-c', '1-c, 2-d, 3-a, 4-b, 5-e'], explanation: 'மும்மை – டாபர்னீர்; கார உலோகம் – சோடியம்; எண்மம் – நியூலாந்து; கார மண் உலோகம் – கால்சியம்; நவீன ஆவர்த்தன விதி – மோஸ்லே.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise V, p. 146', answer: 0,
    en: { q: 'Assertion: Elements in a group generally possess similar properties, but elements along a period have different properties.\nReason: The difference in electronic configuration makes the elements differ in their chemical properties along a period.', options: AR_EN, explanation: 'Elements in a group have the same number of valence electrons; along a period the valence electrons change, so properties change.' },
    ta: { q: 'கூற்று: தொகுதியில் உள்ள தனிமங்கள் ஒரே பண்புகளையும், வரிசையில் உள்ள தனிமங்கள் வேறு வேறு பண்புகளையும் கொண்டுள்ளன.\nகாரணம்: அணு அமைப்பில் உள்ள வேறுபாடுதான் தனிமங்களின் வரிசையில் தனிமங்களின் வேற்றுமைக்குக் காரணம்.', options: AR_TA, explanation: 'ஒரு தொகுதியில் இணைதிறன் எலக்ட்ரான்கள் ஒன்றே; ஒரு தொடரில் அவை மாறுவதால் பண்புகளும் மாறுகின்றன.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VI.3, p. 146', answer: 0,
    en: { q: 'Which statements are limitations of Mendeleev’s periodic table?\n(i) No proper position could be given to hydrogen.\n(ii) The increasing order of atomic mass was not strictly followed (Co & Ni, Te & I).\n(iii) There was no place for isotopes.\n(iv) Gaps were left for undiscovered elements.', options: ['(i), (ii) and (iii)', '(ii) and (iv) only', '(i) and (iv) only', '(iii) and (iv) only'], explanation: 'Leaving gaps and predicting properties (eka-aluminium, eka-silicon) was a merit of Mendeleev’s table, not a limitation.' },
    ta: { q: 'மெண்டலீவ் அட்டவணையின் குறைகள் எவை?\n(i) ஹைட்ரஜனுக்குச் சரியான இடம் அளிக்கப்படவில்லை.\n(ii) அணு நிறையின் ஏறு வரிசை கண்டிப்பாகப் பின்பற்றப்படவில்லை (Co & Ni, Te & I).\n(iii) ஐசோடோப்புகளுக்கு இடமில்லை.\n(iv) கண்டுபிடிக்கப்படாத தனிமங்களுக்கு இடம் விடப்பட்டது.', options: ['(i), (ii), (iii)', '(ii), (iv) மட்டும்', '(i), (iv) மட்டும்', '(iii), (iv) மட்டும்'], explanation: 'இடம் விட்டுப் பண்புகளைக் கணித்தது (எகா-அலுமினியம், எகா-சிலிக்கான்) மெண்டலீவ் அட்டவணையின் சிறப்பு; குறை அல்ல.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VI.4, p. 146', answer: 0,
    en: { q: 'Which statements are features of the modern periodic table?\n(i) Elements are arranged in increasing order of atomic number.\n(ii) There are 7 periods and 18 groups.\n(iii) Each group has subgroups A and B.\n(iv) Elements are grouped into families based on their properties.', options: ['(i), (ii) and (iv)', '(i), (ii) and (iii)', '(iii) and (iv) only', '(ii) and (iii) only'], explanation: 'Subgroups A and B belong to Mendeleev’s table; in the modern table each group is independent and the idea of subgroups is discarded.' },
    ta: { q: 'நவீன தனிம அட்டவணையின் சிறப்புகள் எவை?\n(i) தனிமங்கள் அணு எண்ணின் ஏறு வரிசையில் அமைக்கப்பட்டுள்ளன.\n(ii) 7 தொடர்களும் 18 தொகுதிகளும் உள்ளன.\n(iii) ஒவ்வொரு தொகுதிக்கும் A, B என்ற துணைத் தொகுதிகள் உண்டு.\n(iv) பண்புகளின் அடிப்படையில் தனிமங்கள் குடும்பங்களாகத் தொகுக்கப்பட்டுள்ளன.', options: ['(i), (ii), (iv)', '(i), (ii), (iii)', '(iii), (iv) மட்டும்', '(ii), (iii) மட்டும்'], explanation: 'A, B துணைத் தொகுதிகள் மெண்டலீவ் அட்டவணைக்குரியவை; நவீன அட்டவணையில் ஒவ்வொரு தொகுதியும் தனித்தது; துணைத் தொகுதிகள் வேண்டாம் என முடிவு செய்யப்பட்டது.' },
  },
  {
    difficulty: 'hard', source: '§12.1.2, Activity 1, p. 139', answer: 0,
    en: { q: 'In Newlands’ arrangement H, Li, Be, B, C, N, O, F, Na, Mg, Al, Si, P, S, Cl, K, Ca…, which pair shows similar properties as every eighth element?', options: ['Al and B', 'Al and Mg', 'Si and S', 'C and O'], explanation: 'Counting B as the first, Al is the eighth element, so they are similar (like Mg & Ca, H & F).' },
    ta: { q: 'நியூலாந்தின் வரிசை H, Li, Be, B, C, N, O, F, Na, Mg, Al, Si, P, S, Cl, K, Ca… – இதில் எட்டாவது தனிமமாக ஒத்த பண்புகளைக் காட்டும் இணை எது?', options: ['Al மற்றும் B', 'Al மற்றும் Mg', 'Si மற்றும் S', 'C மற்றும் O'], explanation: 'B-ஐ முதலாவதாக எண்ணினால் Al எட்டாவது தனிமம்; எனவே அவை ஒத்தவை (Mg & Ca, H & F போல).' },
  },
  {
    difficulty: 'hard', source: '§12.1.2, p. 139', answer: 0,
    en: { q: 'Which was NOT a limitation of Newlands’ law of octaves?', options: ['It was based on atomic numbers instead of atomic masses', 'Cobalt and nickel were fitted into the same slot', 'It did not leave room for new elements', 'The discovery of noble gases made the 9th element similar to the first'], explanation: 'Newlands arranged elements by atomic mass; the other three are limitations listed in the book.' },
    ta: { q: 'நியூலாந்தின் எண்ம விதியின் குறைபாடு அல்லாதது எது?', options: ['அது அணு நிறைக்குப் பதிலாக அணு எண்ணை அடிப்படையாகக் கொண்டது', 'கோபால்ட், நிக்கல் ஒரே இடத்தில் வைக்கப்பட்டன', 'புதிய தனிமங்களுக்கு இடமில்லை', 'மந்த வாயுக்களின் கண்டுபிடிப்பால் 9-வது தனிமம் முதல் தனிமத்தை ஒத்தது'], explanation: 'நியூலாந்து அணு நிறையின் அடிப்படையில் அமைத்தார்; மற்ற மூன்றும் பாடநூலில் உள்ள குறைகள்.' },
  },
  {
    difficulty: 'hard', source: '§12.1.3, Table 12.4, p. 141', answer: 0,
    en: { q: 'Mendeleev predicted eka-silicon (Es) to have oxide EsO₂ and chloride EsCl₄. Which actual compounds of germanium confirmed this?', options: ['GeO₂ and GeCl₄', 'GeO and GeCl₂', 'Ge₂O₃ and GeCl₃', 'GeO₃ and GeCl₆'], explanation: 'Germanium (atomic mass 72.59, dark grey) forms GeO₂ and GeCl₄, exactly as predicted.' },
    ta: { q: 'எகா-சிலிக்கானின் (Es) ஆக்சைடு EsO₂, குளோரைடு EsCl₄ என மெண்டலீவ் கணித்தார். இதை உறுதிப்படுத்திய ஜெர்மானியத்தின் சேர்மங்கள்', options: ['GeO₂ மற்றும் GeCl₄', 'GeO மற்றும் GeCl₂', 'Ge₂O₃ மற்றும் GeCl₃', 'GeO₃ மற்றும் GeCl₆'], explanation: 'ஜெர்மானியம் (அணு நிறை 72.59, அடர் சாம்பல் நிறம்) GeO₂, GeCl₄ ஆகியவற்றை உருவாக்குகிறது – கணிப்பின்படியே.' },
  },
  {
    difficulty: 'hard', source: '§12.2.4, p. 143', answer: 0,
    en: { q: 'Assertion: All isotopes of an element occupy one position in the modern periodic table.\nReason: Isotopes have the same atomic number.', options: AR_EN, explanation: 'The modern table is based on atomic number; since isotopes share it, one position for all isotopes is justified.' },
    ta: { q: 'கூற்று: ஒரு தனிமத்தின் ஐசோடோப்புகள் அனைத்தும் நவீன அட்டவணையில் ஒரே இடத்தில் வைக்கப்படுகின்றன.\nகாரணம்: ஐசோடோப்புகள் ஒரே அணு எண்ணைக் கொண்டுள்ளன.', options: AR_TA, explanation: 'நவீன அட்டவணை அணு எண்ணை அடிப்படையாகக் கொண்டது; ஐசோடோப்புகளின் அணு எண் ஒன்றே என்பதால் அவற்றுக்கு ஒரே இடம் பொருத்தமானது.' },
  },
  {
    difficulty: 'hard', source: '§12.2.5, p. 144', answer: 1,
    en: { q: 'Assertion: The position of hydrogen in the periodic table is still under debate.\nReason: Hydrogen is a gas, while the alkali metals are solids.', options: AR_EN, explanation: 'Both are true, but the debate arises because hydrogen behaves like both alkali metals (H⁺) and halogens (H⁻); its being a gas is only one difference.' },
    ta: { q: 'கூற்று: தனிம வரிசை அட்டவணையில் ஹைட்ரஜனின் நிலைப்பாடு இன்னும் சர்ச்சைக்குரியதே.\nகாரணம்: ஹைட்ரஜன் ஒரு வாயு; கார உலோகங்கள் திண்மங்கள்.', options: AR_TA, explanation: 'இரண்டும் சரி; ஆனால் ஹைட்ரஜன் கார உலோகங்கள் (H⁺) போலவும் ஹாலஜன்கள் (H⁻) போலவும் செயல்படுவதே சர்ச்சைக்கு முக்கியக் காரணம்; வாயு என்பது ஒரு வேறுபாடு மட்டுமே.' },
  },
  {
    difficulty: 'hard', source: '§12.2.4, p. 143', answer: 0,
    en: { q: 'In Mendeleev’s table, Co and Ni (and Te and I) appeared out of order. Why are their positions justified in the modern table?', options: ['Because the modern table is arranged by atomic number', 'Because their atomic masses were corrected', 'Because they were moved to the f-block', 'Because they are isotopes of each other'], explanation: 'Elements misfit by atomic mass fall into the right order when arranged by atomic number (Co 27, Ni 28; Te 52, I 53).' },
    ta: { q: 'மெண்டலீவ் அட்டவணையில் Co, Ni (மற்றும் Te, I) இடம் மாறியிருந்தன. நவீன அட்டவணையில் அவற்றின் இடம் சரியாக இருப்பதற்குக் காரணம்', options: ['நவீன அட்டவணை அணு எண்ணின் அடிப்படையில் அமைந்தது', 'அவற்றின் அணு நிறைகள் திருத்தப்பட்டன', 'அவை f-தொகுதிக்கு நகர்த்தப்பட்டன', 'அவை ஒன்றுக்கொன்று ஐசோடோப்புகள்'], explanation: 'அணு நிறையால் இடம் மாறிய தனிமங்கள் அணு எண்ணின்படி அமைக்கும்போது சரியான வரிசைக்கு வருகின்றன (Co 27, Ni 28; Te 52, I 53).' },
  },
  {
    difficulty: 'hard', source: '§12.2.2–12.2.3, p. 141', answer: 0,
    en: { q: 'An element has the electronic configuration 2, 8, 2. In which period and group of the modern periodic table is it found?', options: ['Period 3, group 2', 'Period 2, group 3', 'Period 2, group 2', 'Period 3, group 12'], explanation: 'Three shells → period 3; two valence electrons → group 2 (it is magnesium, an alkaline earth metal).' },
    ta: { q: 'ஒரு தனிமத்தின் எலக்ட்ரான் அமைப்பு 2, 8, 2. நவீன அட்டவணையில் அது எந்தத் தொடர், தொகுதியில் உள்ளது?', options: ['தொடர் 3, தொகுதி 2', 'தொடர் 2, தொகுதி 3', 'தொடர் 2, தொகுதி 2', 'தொடர் 3, தொகுதி 12'], explanation: 'மூன்று கூடுகள் → 3-ஆம் தொடர்; இரண்டு இணைதிறன் எலக்ட்ரான்கள் → 2-ஆம் தொகுதி (இது மெக்னீசியம், கார மண் உலோகம்).' },
  },
  {
    difficulty: 'hard', source: '§12.2.3, Table 12.6, p. 144', answer: 0,
    en: { q: 'The maximum numbers of electrons in the s, p, d and f subshells are respectively', options: ['2, 6, 10, 14', '2, 8, 18, 32', '1, 3, 5, 7', '2, 4, 6, 8'], explanation: 'Each s, p, d and f subshell holds 2, 6, 10 and 14 electrons; shell totals 2, 8, 18, 32 come from adding them.' },
    ta: { q: 's, p, d, f துணைக் கூடுகளில் உள்ள அதிகபட்ச எலக்ட்ரான்களின் எண்ணிக்கை முறையே', options: ['2, 6, 10, 14', '2, 8, 18, 32', '1, 3, 5, 7', '2, 4, 6, 8'], explanation: 's, p, d, f துணைக் கூடுகளில் முறையே 2, 6, 10, 14 எலக்ட்ரான்கள்; கூடுகளின் மொத்தம் 2, 8, 18, 32 இவற்றைக் கூட்டினால் வருகிறது.' },
  },
  {
    difficulty: 'hard', source: '§12.3, §12.4.1, p. 144–145', answer: 0,
    en: { q: 'Which statements are correct?\n(i) Except mercury, most metals are solids at room temperature.\n(ii) Alloys usually conduct electricity better than pure copper.\n(iii) Solder melts at a lower temperature than lead or tin.\n(iv) Non-metals are found in the upper right part of the periodic table.', options: ['(i), (iii) and (iv)', '(i), (ii) and (iii)', '(ii) and (iv) only', '(ii), (iii) and (iv)'], explanation: 'Alloys have less conductance than pure metals – brass and bronze are not good conductors – so (ii) is wrong.' },
    ta: { q: 'சரியான கூற்றுகள் எவை?\n(i) பாதரசத்தைத் தவிர பெரும்பாலான உலோகங்கள் அறை வெப்ப நிலையில் திண்மங்கள்.\n(ii) உலோகக் கலவைகள் பொதுவாகத் தூய செம்பை விட நன்கு மின்சாரத்தைக் கடத்துகின்றன.\n(iii) பற்றாசு ஈயம், வெள்ளீயத்தை விடக் குறைந்த வெப்பநிலையில் உருகும்.\n(iv) அலோகங்கள் அட்டவணையின் மேல் வலது மூலையில் உள்ளன.', options: ['(i), (iii), (iv)', '(i), (ii), (iii)', '(ii), (iv) மட்டும்', '(ii), (iii), (iv)'], explanation: 'உலோகக் கலவைகள் தூய உலோகங்களை விடக் குறைவாகக் கடத்துகின்றன – பித்தளை, வெண்கலம் நல்ல கடத்திகள் அல்ல – எனவே (ii) தவறு.' },
  },
];
