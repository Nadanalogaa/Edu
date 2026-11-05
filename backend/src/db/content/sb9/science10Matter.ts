// Tamil Nadu State Board, 9th Science, Unit 10 – Matter Around Us (நம்மைச் சுற்றியுள்ள பொருட்கள்).
// source = section / exercise and printed page of the English-medium book.
import { BankQuestion, AR_EN, AR_TA } from './types';

const IMG = '/content/9/state_board/science/10';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.1, p. 123', answer: 0,
    en: { q: 'The separation of denser particles from lighter particles done by rotation at high speed is called', options: ['centrifugation', 'filtration', 'sedimentation', 'decantation'], explanation: 'In a centrifuge the heavier solid particles move down on fast rotation and the lighter liquid stays on top.' },
    ta: { q: 'மிக அதிக வேகத்தில் சுழலச் செய்து, கனமான பொருட்களிலிருந்து லேசான பொருட்களைப் பிரித்தெடுக்கும் முறை', options: ['மைய விலக்கம்', 'வடிகட்டல்', 'வண்டல்', 'சாய்த்து வடித்தல்'], explanation: 'மைய விலக்கியில் வேகமாகச் சுழலும்போது கனமான திண்மத் துகள்கள் கீழே செல்கின்றன; லேசான திரவம் மேலே தங்குகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.2, p. 123', answer: 0,
    en: { q: 'Among the following, which is a mixture?', options: ['Juice', 'Common salt', 'Carbon dioxide', 'Pure silver'], explanation: 'Juice contains fruit juice, sugar and water mixed in any ratio; salt and CO₂ are compounds and silver is an element.' },
    ta: { q: 'பின்வருவனவற்றுள் எது ஒரு கலவை?', options: ['சாறு', 'சாதாரண உப்பு', 'கார்பன் டைஆக்ஸைடு', 'தூய வெள்ளி'], explanation: 'சாற்றில் பழச்சாறு, சர்க்கரை, நீர் ஆகியவை எந்த விகிதத்திலும் கலந்துள்ளன; உப்பும் CO₂-ம் சேர்மங்கள், வெள்ளி ஒரு தனிமம்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.4, p. 123', answer: 0,
    en: { q: 'Which apparatus is essential to perform separation by the solvent extraction method?', options: ['Separating funnel', 'Filter paper', 'Centrifuge machine', 'Sieve'], explanation: 'Two immiscible liquids such as oil and water are separated in a separating funnel.' },
    ta: { q: 'கரைப்பான் சாறு இறக்கல் முறையில் பிரித்தெடுக்க அவசியமான கருவி', options: ['பிரிபுனல்', 'வடிதாள்', 'மைய விலக்கு இயந்திரம்', 'சல்லடை'], explanation: 'எண்ணெய், நீர் போன்ற ஒன்றாகக் கலவாத திரவங்கள் பிரிபுனலில் பிரிக்கப்படுகின்றன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.5, p. 123', answer: 0,
    en: { q: 'Which of these has the same properties throughout the sample?', options: ['Pure substance', 'Mixture', 'Colloid', 'Suspension'], explanation: 'A pure substance contains only one kind of particles, so every part of it has the same properties.' },
    ta: { q: 'பின்வருவனவற்றுள் எது மாதிரி முழுவதும் ஒரே பண்புகளைக் கொண்டுள்ளது?', options: ['தூய பொருள்', 'கலவை', 'கூழ்மம்', 'தொங்கல்'], explanation: 'தூய பொருளில் ஒரே வகையான துகள்கள் மட்டுமே உள்ளதால் அதன் எல்லாப் பகுதிகளும் ஒரே பண்புகளைக் கொண்டுள்ளன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise IV.1, p. 123', answer: 0,
    en: { q: 'A _____ mixture has no distinguishable boundary between its components.', options: ['homogeneous', 'heterogeneous', 'suspension', 'immiscible'], explanation: 'In a homogeneous mixture the components cannot be seen separately; it has a uniform composition.' },
    ta: { q: '_____ கலவையின் இயைபுப் பொருட்களுக்கு வேறுபடுத்தக்கூடிய எல்லைக்கோடு இல்லை.', options: ['ஒருபடித்தான', 'பலபடித்தான', 'தொங்கல்', 'கலவாத'], explanation: 'ஒருபடித்தான கலவையில் பகுதிப்பொருட்களைத் தனித்தனியாகப் பார்க்க இயலாது; அதன் இயைபு சீரானது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise IV.2, p. 123', answer: 0,
    en: { q: 'An example of a substance that sublimes is', options: ['camphor', 'common salt', 'sand', 'sugar'], explanation: 'Camphor, iodine, naphthalene and ammonium chloride change directly from solid to vapour on heating.' },
    ta: { q: 'பதங்கமாகும் பொருளுக்கு ஓர் எடுத்துக்காட்டு', options: ['கற்பூரம்', 'சாதாரண உப்பு', 'மணல்', 'சர்க்கரை'], explanation: 'கற்பூரம், அயோடின், நாஃப்தலீன், அம்மோனியம் குளோரைடு ஆகியவை வெப்பப்படுத்தும்போது நேரடியாக வாயுவாக மாறுகின்றன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise IV.3, p. 123', answer: 0,
    en: { q: 'Alcohol can be separated from water by _____.', options: ['fractional distillation', 'sublimation', 'filtration', 'magnetic separation'], explanation: 'Alcohol and water are miscible liquids with boiling points differing by less than 25 K, so fractional distillation is used.' },
    ta: { q: 'நீரிலிருந்து ஆல்கஹால் _____ மூலம் பிரித்தெடுக்கப்படுகிறது.', options: ['பின்னக் காய்ச்சி வடித்தல்', 'பதங்கமாதல்', 'வடிகட்டுதல்', 'காந்தப்பிரிகை'], explanation: 'ஆல்கஹாலும் நீரும் கலக்கும் திரவங்கள்; அவற்றின் கொதிநிலை வேறுபாடு 25 K-க்கும் குறைவு; எனவே பின்னக் காய்ச்சி வடித்தல் பயன்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise IV.4, p. 123', answer: 0,
    en: { q: 'In petroleum refining, the method of separation used is _____.', options: ['fractional distillation', 'chromatography', 'centrifugation', 'sublimation'], explanation: 'Fractional distillation is used in the petrochemical industry to obtain different fractions of petroleum.' },
    ta: { q: 'பெட்ரோலிய சுத்திகரிப்பில் பயன்படுத்தப்படும் பிரித்தெடுத்தல் முறை _____.', options: ['பின்னக் காய்ச்சி வடித்தல்', 'வண்ணப்பிரிகை', 'மைய விலக்கம்', 'பதங்கமாதல்'], explanation: 'பெட்ரோலியத்தின் பல்வேறு பகுதிப்பொருட்களைப் பெற பின்னக் காய்ச்சி வடித்தல் பயன்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise IV.5, p. 123', answer: 0,
    en: { q: 'Chromatography is based on the principle of _____.', options: ['adsorption', 'absorption', 'sublimation', 'centrifugal force'], explanation: 'The dyes are adsorbed to different extents by the chromatography paper and have different solubilities in the solvent.' },
    ta: { q: 'வண்ணப்பிரிகை முறை _____ தத்துவத்தின் அடிப்படையில் செயல்படுகிறது.', options: ['பரப்புக் கவர்தல்', 'உறிஞ்சுதல்', 'பதங்கமாதல்', 'மைய விலக்கு விசை'], explanation: 'சாயங்கள் வண்ணப்பிரிகைத் தாளில் வெவ்வேறு அளவில் பரப்புக் கவரப்படுகின்றன; கரைப்பானில் அவற்றின் கரைதிறனும் வேறுபடுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise III, p. 123', answer: 0,
    en: { q: 'In the match-the-following, a suspension is matched with', options: ['settles down on standing', 'made up of atoms', 'made up of molecules', 'pure substance'], explanation: 'Suspension particles (>100 nm) settle on their own when the mixture is left to stand.' },
    ta: { q: 'பொருத்துக வினாவில் தொங்கல் எதனுடன் பொருந்தும்?', options: ['அசையாமல் வைக்கும்போது கீழே படிகிறது', 'அணுக்களால் உருவானது', 'மூலக்கூறுகளால் உருவானது', 'தூய்மையான பொருள்'], explanation: 'தொங்கலின் துகள்கள் (>100 nm) அசையாமல் வைத்தால் தானாகவே கீழே படிகின்றன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise III, p. 123', answer: 0,
    en: { q: 'In the match-the-following, an element is matched with', options: ['made up of atoms', 'made up of molecules', 'impure substance', 'settles down on standing'], explanation: 'An element is made up of only one kind of atom.' },
    ta: { q: 'பொருத்துக வினாவில் தனிமம் எதனுடன் பொருந்தும்?', options: ['அணுக்களால் உருவானது', 'மூலக்கூறுகளால் உருவானது', 'தூய்மையற்ற பொருள்', 'அசையாமல் வைக்கும்போது கீழே படிகிறது'], explanation: 'தனிமம் ஒரே வகையான அணுக்களால் மட்டுமே ஆனது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise VI.2, p. 124', answer: 0,
    en: { q: 'Oxygen, which forms 21% of air by volume, is', options: ['an element', 'a compound', 'a mixture', 'a colloid'], explanation: 'Oxygen is made of only oxygen atoms (O₂ molecules), so it is an element.' },
    ta: { q: 'காற்றில் 21% கனஅளவு உள்ள ஆக்ஸிஜன் ஒரு', options: ['தனிமம்', 'சேர்மம்', 'கலவை', 'கூழ்மம்'], explanation: 'ஆக்ஸிஜன் ஆக்ஸிஜன் அணுக்களால் மட்டுமே (O₂ மூலக்கூறுகள்) ஆனதால் அது ஒரு தனிமம்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise V.2, p. 123', answer: 0,
    en: { q: 'Sublimation is the process in which a solid on heating', options: ['changes directly into vapour without becoming a liquid', 'melts into a liquid', 'dissolves in water', 'settles at the bottom'], explanation: 'Certain solids change directly from solid to gas on heating; the vapours give back the solid on cooling.' },
    ta: { q: 'பதங்கமாதல் என்பது வெப்பப்படுத்தும்போது ஒரு திண்மம்', options: ['திரவ நிலையை அடையாமல் நேரடியாக வாயுவாக மாறுவது', 'உருகித் திரவமாவது', 'நீரில் கரைவது', 'அடியில் படிவது'], explanation: 'சில திண்மங்கள் வெப்பப்படுத்தும்போது திரவ நிலையை அடையாமல் நேரடியாக வாயுவாக மாறுகின்றன; குளிர வைக்கும்போது மீண்டும் திண்மமாகின்றன.' },
  },
  {
    difficulty: 'easy', source: 'Introduction, p. 113', answer: 0,
    en: { q: 'Matter is anything that', options: ['has mass and occupies space', 'has energy but no mass', 'can be seen with the eye', 'produces light'], explanation: 'Everything around us that has mass and occupies space is matter; sunlight, sound and energy are not matter.' },
    ta: { q: 'பருப்பொருள் என்பது', options: ['நிறையைக் கொண்டு இடத்தை அடைத்துக்கொள்ளும் எதுவும்', 'நிறையற்ற ஆற்றல் மட்டும்', 'கண்ணால் காணக்கூடியவை மட்டும்', 'ஒளியைத் தருபவை'], explanation: 'நிறை உடையதும் இடத்தை அடைத்துக்கொள்வதுமான அனைத்தும் பருப்பொருள்; சூரிய ஒளி, ஒலி, ஆற்றல் ஆகியவை பருப்பொருள் அல்ல.' },
  },
  {
    difficulty: 'easy', source: '§10.1.1, p. 114', answer: 0,
    en: { q: 'How many elements are known in the modern periodic table?', options: ['118', '92', '26', '112'], explanation: 'There are 118 known elements; 92 occur naturally and 26 have been artificially created.' },
    ta: { q: 'நவீன ஆவர்த்தன அட்டவணையில் அறியப்பட்டுள்ள தனிமங்களின் எண்ணிக்கை', options: ['118', '92', '26', '112'], explanation: '118 தனிமங்கள் அறியப்பட்டுள்ளன; அவற்றுள் 92 இயற்கையில் காணப்படுகின்றன, 26 செயற்கை முறையில் உருவாக்கப்பட்டவை.' },
  },
  {
    difficulty: 'easy', source: '§10.1.1, p. 114', answer: 0,
    en: { q: 'Which of these is a metalloid?', options: ['Silicon', 'Copper', 'Oxygen', 'Chlorine'], explanation: 'Boron, silicon, germanium and arsenic are metalloids; copper is a metal; oxygen and chlorine are non-metals.' },
    ta: { q: 'பின்வருவனவற்றுள் உலோகப்போலி எது?', options: ['சிலிக்கான்', 'தாமிரம்', 'ஆக்ஸிஜன்', 'குளோரின்'], explanation: 'போரான், சிலிக்கான், ஜெர்மானியம், ஆர்செனிக் ஆகியவை உலோகப்போலிகள்; தாமிரம் உலோகம்; ஆக்ஸிஜன், குளோரின் அலோகங்கள்.' },
  },
  {
    difficulty: 'easy', source: '§10.1.3, p. 115', answer: 0,
    en: { q: 'LPG is a mixture mainly of', options: ['butane and propane', 'methane and ethane', 'oxygen and nitrogen', 'hydrogen and helium'], explanation: 'Liquefied Petroleum Gas is a highly inflammable mixture of butane and propane.' },
    ta: { q: 'LPG முக்கியமாக எவற்றின் கலவை?', options: ['பியூட்டேன் மற்றும் புரொப்பேன்', 'மீத்தேன் மற்றும் ஈத்தேன்', 'ஆக்ஸிஜன் மற்றும் நைட்ரஜன்', 'ஹைட்ரஜன் மற்றும் ஹீலியம்'], explanation: 'திரவமாக்கப்பட்ட பெட்ரோலிய வாயு (LPG) எளிதில் தீப்பற்றக்கூடிய பியூட்டேன், புரொப்பேன் வாயுக்களின் கலவை.' },
  },
  {
    difficulty: 'easy', source: '§10.4, p. 119', answer: 0,
    en: { q: 'In a solution, the component present in the larger amount by weight is called the', options: ['solvent', 'solute', 'dispersed phase', 'residue'], explanation: 'The component in larger amount is the solvent; the one in lesser amount is the solute.' },
    ta: { q: 'ஒரு கரைசலில் அதிக அளவு நிறையில் உள்ள பகுதிப்பொருள்', options: ['கரைப்பான்', 'கரைபொருள்', 'பரவிய நிலைமை', 'வீழ்படிவு'], explanation: 'அதிக அளவில் உள்ளது கரைப்பான்; குறைந்த அளவில் உள்ளது கரைபொருள்.' },
  },
  {
    difficulty: 'easy', source: '§10.4.2, p. 120', answer: 0,
    en: { q: 'The path of a beam of light becoming visible in a colloidal solution is called the', options: ['Tyndall effect', 'Brownian movement', 'emulsification', 'adsorption'], explanation: 'Tyndall (1869) observed that colloidal particles scatter light; the lit path is the Tyndall cone.' },
    ta: { q: 'கூழ்மக் கரைசலில் ஒளிக்கற்றையின் பாதை புலப்படும் நிகழ்வு', options: ['டிண்டால் விளைவு', 'பிரௌனியன் இயக்கம்', 'பால்மமாக்கல்', 'பரப்புக் கவர்தல்'], explanation: 'கூழ்மத் துகள்கள் ஒளியைச் சிதறடிப்பதால் ஒளிக்கற்றையின் பாதை தெரிகிறது என டிண்டால் (1869) கண்டறிந்தார்.' },
  },
  {
    difficulty: 'easy', source: '§10.4.3, p. 121', answer: 0,
    en: { q: 'A colloid in which one liquid is dispersed in another immiscible liquid is called', options: ['an emulsion', 'a gel', 'a foam', 'an aerosol'], explanation: 'An emulsion is made by combining two liquids that normally do not mix, e.g. milk.' },
    ta: { q: 'ஒன்றுடன் ஒன்று கலவாத ஒரு திரவம் மற்றொரு திரவத்தில் பரவியுள்ள கூழ்மம்', options: ['பால்மம்', 'கூழ்', 'நுரை', 'தூசிப்படலம்'], explanation: 'இயல்பாகக் கலவாத இரண்டு திரவங்களைச் சேர்ப்பதால் பால்மம் உருவாகிறது; எ.கா. பால்.' },
  },
  // ---------------------------------------------------------------- Medium
  {
    difficulty: 'medium', source: 'Book exercise I.3, p. 123', answer: 0,
    en: { q: 'When we mix a drop of ink in water we get a', options: ['homogeneous mixture', 'heterogeneous mixture', 'compound', 'suspension'], explanation: 'The ink spreads uniformly through the water and its components cannot be seen separately.' },
    ta: { q: 'ஒரு துளி மையினை நாம் நீரில் கலக்கும்போது நமக்குக் கிடைப்பது', options: ['ஒருபடித்தான கலவை', 'பலபடித்தான கலவை', 'சேர்மம்', 'தொங்கல்'], explanation: 'மை நீர் முழுவதும் சீராகப் பரவுகிறது; அதன் பகுதிப்பொருட்களைத் தனித்தனியாகக் காண இயலாது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.1, p. 123', answer: 0,
    en: { q: 'Which statement about oil and water is correct?', options: ['Oil and water are immiscible with each other.', 'Oil and water are miscible in all proportions.', 'Oil and water form a true solution.', 'Oil and water can be separated only by chromatography.'], explanation: 'The book statement is true: oil and water do not mix and can be separated with a separating funnel.' },
    ta: { q: 'எண்ணெய், நீர் பற்றிய சரியான கூற்று எது?', options: ['எண்ணெயும் தண்ணீரும் ஒன்றில் ஒன்று கலவாதவை.', 'எண்ணெயும் தண்ணீரும் எல்லா விகிதத்திலும் கலக்கின்றன.', 'எண்ணெயும் தண்ணீரும் உண்மைக் கரைசலை உருவாக்குகின்றன.', 'எண்ணெயையும் தண்ணீரையும் வண்ணப்பிரிகையால் மட்டுமே பிரிக்க முடியும்.'], explanation: 'பாடநூல் கூற்று சரி: எண்ணெயும் நீரும் கலவாதவை; பிரிபுனல் மூலம் அவற்றைப் பிரிக்கலாம்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.2, p. 123', answer: 0,
    en: { q: '"A compound cannot be broken into simpler substances chemically." The correct form of this statement is', options: ['A compound can be broken into simpler substances by chemical methods.', 'A compound can be broken into simpler substances only by physical methods.', 'A compound can never be broken into simpler substances.', 'An element can be broken into simpler substances chemically.'], explanation: 'The statement is false: a compound can be broken down into its elements by chemical reactions.' },
    ta: { q: '"வேதிமுறையில் ஒரு சேர்மத்தை தனிமங்களாகப் பிரிக்க முடியாது." இக்கூற்றின் சரியான வடிவம்', options: ['வேதிமுறைகளால் ஒரு சேர்மத்தை எளிய பொருட்களாகப் பிரிக்க முடியும்.', 'இயற்பியல் முறைகளால் மட்டுமே ஒரு சேர்மத்தைப் பிரிக்க முடியும்.', 'ஒரு சேர்மத்தை ஒருபோதும் பிரிக்க முடியாது.', 'வேதிமுறையில் ஒரு தனிமத்தை எளிய பொருட்களாகப் பிரிக்க முடியும்.'], explanation: 'கூற்று தவறு: வேதிவினைகள் மூலம் ஒரு சேர்மத்தை அதன் தனிமங்களாகப் பிரிக்க முடியும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.3, p. 123', answer: 0,
    en: { q: '"Liquid–liquid colloids are called gel." This statement is', options: ['False; liquid–liquid colloids are emulsions (liquid in solid is a gel).', 'True; liquid–liquid colloids are gels.', 'False; liquid–liquid colloids are foams.', 'False; liquid–liquid colloids are aerosols.'], explanation: 'A liquid dispersed in a liquid is an emulsion, e.g. milk; a liquid dispersed in a solid is a gel, e.g. curd.' },
    ta: { q: '"திரவ – திரவ கூழ்மங்கள் களிம்பு (கூழ்) எனப்படும்." இக்கூற்று', options: ['தவறு; திரவ – திரவ கூழ்மங்கள் பால்மங்கள் (திண்மத்தில் திரவம் கூழ்).', 'சரி; திரவ – திரவ கூழ்மங்கள் கூழ் ஆகும்.', 'தவறு; திரவ – திரவ கூழ்மங்கள் நுரைகள்.', 'தவறு; திரவ – திரவ கூழ்மங்கள் தூசிப்படலங்கள்.'], explanation: 'திரவத்தில் திரவம் பரவியிருப்பது பால்மம் (எ.கா. பால்); திண்மத்தில் திரவம் பரவியிருப்பது கூழ் (எ.கா. தயிர்).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.4, p. 123', answer: 0,
    en: { q: 'According to the book, buttermilk is an example of a', options: ['heterogeneous mixture', 'homogeneous mixture', 'compound', 'element'], explanation: 'The book statement "Buttermilk is an example of heterogeneous mixture" is true: its components are not uniformly mixed.' },
    ta: { q: 'பாடநூலின்படி மோர் எதற்கு எடுத்துக்காட்டு?', options: ['பலபடித்தான கலவை', 'ஒருபடித்தான கலவை', 'சேர்மம்', 'தனிமம்'], explanation: '"மோர் ஒரு பலபடித்தான கலவைக்கு எடுத்துக்காட்டு" என்ற கூற்று சரி: அதன் பகுதிப்பொருட்கள் சீராகக் கலக்கவில்லை.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.5, p. 123', answer: 0,
    en: { q: 'Aspirin is always composed of 60% carbon, 4.5% hydrogen and 35.5% oxygen by mass. Aspirin is therefore', options: ['a compound', 'a mixture', 'an element', 'a colloid'], explanation: 'Its constituents are present in a definite proportion, so aspirin is a compound, not a mixture.' },
    ta: { q: 'ஆஸ்பிரின் தனது நிறையில் எப்போதும் 60% கார்பன், 4.5% ஹைட்ரஜன், 35.5% ஆக்ஸிஜனைக் கொண்டுள்ளது. எனவே ஆஸ்பிரின் ஒரு', options: ['சேர்மம்', 'கலவை', 'தனிமம்', 'கூழ்மம்'], explanation: 'அதன் பகுதிப்பொருட்கள் குறிப்பிட்ட விகிதத்தில் உள்ளதால் ஆஸ்பிரின் ஒரு சேர்மம்; கலவை அல்ல.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III, p. 123', answer: 0,
    en: { q: 'In the match-the-following, a mixture is matched with', options: ['impure substance', 'pure substance', 'made up of atoms', 'made up of molecules'], explanation: 'A mixture contains more than one kind of particles, so it is an impure substance.' },
    ta: { q: 'பொருத்துக வினாவில் கலவை எதனுடன் பொருந்தும்?', options: ['தூய்மையற்ற பொருள்', 'தூய்மையான பொருள்', 'அணுக்களால் உருவானது', 'மூலக்கூறுகளால் உருவானது'], explanation: 'கலவையில் ஒன்றுக்கு மேற்பட்ட வகைத் துகள்கள் உள்ளதால் அது தூய்மையற்ற பொருள்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V.1, p. 123', answer: 0,
    en: { q: 'Which statement correctly distinguishes adsorption from absorption?', options: ['In adsorption a substance concentrates only at the surface; in absorption it spreads through the bulk.', 'In absorption a substance concentrates only at the surface; in adsorption it spreads through the bulk.', 'Both mean the substance spreads uniformly through the bulk.', 'Both mean the substance stays only at the surface.'], explanation: 'Chalk dipped in ink keeps the colour at its surface (adsorption) while the solvent goes deeper (absorption).' },
    ta: { q: 'பரப்புக் கவர்தலையும் உறிஞ்சுதலையும் சரியாக வேறுபடுத்தும் கூற்று எது?', options: ['பரப்புக் கவர்தலில் பொருள் மேற்பரப்பில் மட்டும் செறிகிறது; உறிஞ்சுதலில் அது முழுவதும் பரவுகிறது.', 'உறிஞ்சுதலில் பொருள் மேற்பரப்பில் மட்டும் செறிகிறது; பரப்புக் கவர்தலில் அது முழுவதும் பரவுகிறது.', 'இரண்டிலும் பொருள் முழுவதும் சீராகப் பரவுகிறது.', 'இரண்டிலும் பொருள் மேற்பரப்பில் மட்டுமே தங்குகிறது.'], explanation: 'மையில் நனைத்த சாக்பீஸின் மேற்பரப்பில் நிறம் தங்குகிறது (பரப்புக் கவர்தல்); கரைப்பான் உள்ளே செல்கிறது (உறிஞ்சுதல்).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V.3, p. 123', answer: 0,
    en: { q: 'A few drops of Dettol added to water make the mixture turbid because', options: ['Dettol is oily and forms an emulsion (colloid) with water', 'Dettol dissolves completely to form a true solution', 'Dettol reacts with water to form a new compound', 'Dettol particles are large and settle down'], explanation: 'The oily liquid gets dispersed as tiny droplets in water, forming an oil-in-water emulsion that scatters light.' },
    ta: { q: 'டெட்டாலின் சிறு துளிகளை நீரில் கலக்கும்போது கலவை கலங்கலாக மாறக் காரணம்', options: ['எண்ணெய்த் தன்மையுள்ள டெட்டால் நீருடன் பால்மத்தை (கூழ்மம்) உருவாக்குகிறது', 'டெட்டால் முழுமையாகக் கரைந்து உண்மைக் கரைசலாகிறது', 'டெட்டால் நீருடன் வினைபுரிந்து புதிய சேர்மமாகிறது', 'டெட்டால் துகள்கள் பெரியவை; அவை அடியில் படிகின்றன'], explanation: 'எண்ணெய்த் தன்மையுள்ள திரவம் நுண்துளிகளாக நீரில் பரவி எ/நீ பால்மத்தை உருவாக்குகிறது; அது ஒளியைச் சிதறடிக்கிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V.4, p. 123', answer: 0,
    en: { q: 'To separate two immiscible liquids you would use a', options: ['separating funnel', 'fractionating column', 'china dish and funnel', 'centrifuge'], explanation: 'Immiscible liquids form two layers that are drained separately through the stopcock of a separating funnel; miscible liquids need a fractionating column.' },
    ta: { q: 'ஒன்றாகக் கலவாத இரு திரவங்களைப் பிரிக்கப் பயன்படும் சாதனம்', options: ['பிரிபுனல்', 'பின்னக் காய்ச்சி வடிக்கும் கலன்', 'சைனாக் கிண்ணமும் புனலும்', 'மைய விலக்கி'], explanation: 'கலவாத திரவங்கள் இரண்டு அடுக்குகளாகப் பிரிகின்றன; பிரிபுனலின் அடைப்பான் வழியே அவற்றைத் தனியாக எடுக்கலாம்; கலக்கும் திரவங்களுக்குப் பின்னக் காய்ச்சி வடித்தல் தேவை.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V.5, p. 123', answer: 0,
    en: { q: 'The components of lemonade are', options: ['lemon juice, sugar and water', 'clay, sand and salts', 'nitrogen, oxygen and carbon dioxide', 'milk, sugar and fat only'], explanation: 'Lemonade is a mixture of lemon juice, sugar and water; soil is clay, sand and salts; air is nitrogen, oxygen, CO₂ and water vapour.' },
    ta: { q: 'எலுமிச்சை பானத்தின் பகுதிப்பொருட்கள்', options: ['எலுமிச்சைச் சாறு, சர்க்கரை, நீர்', 'களிமண், மணல், உப்புகள்', 'நைட்ரஜன், ஆக்ஸிஜன், கார்பன் டைஆக்ஸைடு', 'பால், சர்க்கரை, கொழுப்பு மட்டும்'], explanation: 'எலுமிச்சை பானம் எலுமிச்சைச் சாறு, சர்க்கரை, நீர் ஆகியவற்றின் கலவை; மண் – களிமண், மணல், உப்புகள்; காற்று – நைட்ரஜன், ஆக்ஸிஜன், CO₂, நீராவி.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.1, p. 124', answer: 0,
    en: { q: 'From the list ice, milk, iron, mercury and brick, the pure substances are', options: ['ice, iron and mercury', 'milk and brick', 'ice, milk and brick', 'iron, milk and mercury'], explanation: 'Ice (water), iron and mercury contain one kind of particle; milk and brick are mixtures.' },
    ta: { q: 'பனிக்கட்டி, பால், இரும்பு, பாதரசம், செங்கல் – இவற்றுள் தூய பொருட்கள்', options: ['பனிக்கட்டி, இரும்பு, பாதரசம்', 'பால், செங்கல்', 'பனிக்கட்டி, பால், செங்கல்', 'இரும்பு, பால், பாதரசம்'], explanation: 'பனிக்கட்டி (நீர்), இரும்பு, பாதரசம் ஆகியவை ஒரே வகைத் துகள்களைக் கொண்டவை; பால், செங்கல் கலவைகள்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.3, p. 124', answer: 0,
    en: { q: 'A medal made of 22-carat gold is', options: ['an impure substance (a mixture/alloy)', 'a pure substance', 'a compound of gold and copper', 'an element'], explanation: '22-carat gold is gold mixed with other metals such as copper; alloys are mixtures, so it is impure.' },
    ta: { q: '22 காரட் தங்கத்திலான பதக்கம் ஒரு', options: ['தூய்மையற்ற பொருள் (கலவை / உலோகக் கலவை)', 'தூய பொருள்', 'தங்கம், தாமிரம் இவற்றின் சேர்மம்', 'தனிமம்'], explanation: '22 காரட் தங்கத்தில் தாமிரம் போன்ற பிற உலோகங்கள் கலந்துள்ளன; உலோகக் கலவைகள் கலவைகள் என்பதால் அது தூய்மையற்றது.' },
  },
  {
    difficulty: 'medium', source: 'Activity 1, p. 114', answer: 0,
    en: { q: 'Brass, made of about 30% zinc and 70% copper, is', options: ['a mixture', 'a compound', 'an element', 'a pure substance'], explanation: 'Brass is an alloy; alloys are mixtures of metals in variable proportions.' },
    ta: { q: '30% துத்தநாகம், 70% தாமிரம் கொண்ட பித்தளை ஒரு', options: ['கலவை', 'சேர்மம்', 'தனிமம்', 'தூய பொருள்'], explanation: 'பித்தளை ஒரு உலோகக் கலவை; உலோகக் கலவைகள் மாறுபடும் விகிதங்களில் கலந்த கலவைகளே.' },
  },
  {
    difficulty: 'medium', source: '§10.1.4, p. 116', answer: 0,
    en: { q: 'Which property belongs to a compound and NOT to a mixture?', options: ['Its constituents are present in a definite proportion.', 'Its constituents can be separated by physical methods.', 'It shows the properties of its constituents.', 'Its constituents may be present in any proportion.'], explanation: 'A compound has a fixed composition and new properties; a mixture has variable composition and keeps the properties of its parts.' },
    ta: { q: 'கலவைக்கு அல்லாமல் சேர்மத்திற்கு மட்டுமே உரிய பண்பு எது?', options: ['பகுதிப்பொருட்கள் குறிப்பிட்ட விகிதத்தில் உள்ளன.', 'பகுதிப்பொருட்களை இயற்பியல் முறைகளால் பிரிக்கலாம்.', 'பகுதிப்பொருட்களின் பண்புகளைக் காட்டுகிறது.', 'பகுதிப்பொருட்கள் எந்த விகிதத்திலும் இருக்கலாம்.'], explanation: 'சேர்மத்தின் இயைபு மாறாதது, புதிய பண்புகள் கொண்டது; கலவையின் இயைபு மாறும், பகுதிப்பொருட்களின் பண்புகளைக் கொண்டிருக்கும்.' },
  },
  {
    difficulty: 'medium', source: '§10.1.4, Activity 3, p. 116', answer: 0,
    en: { q: 'A magnet is brought near iron sulphide formed by heating iron filings and sulphur. What happens?', options: ['It has no effect, because iron sulphide is a new compound', 'The iron powder is attracted', 'The whole solid is attracted', 'Only sulphur is attracted'], explanation: 'In the mixture the iron is attracted, but iron sulphide (a black compound) does not show the properties of iron.' },
    ta: { q: 'இரும்புத்தூளும் கந்தகமும் சேர்த்து வெப்பப்படுத்தி உருவான இரும்பு சல்பைடு அருகே காந்தத்தைக் கொண்டு வந்தால் என்ன நிகழும்?', options: ['எந்த விளைவும் இல்லை; இரும்பு சல்பைடு ஒரு புதிய சேர்மம்', 'இரும்புத்தூள் கவரப்படும்', 'முழுத் திண்மமும் கவரப்படும்', 'கந்தகம் மட்டும் கவரப்படும்'], explanation: 'கலவையில் இரும்பு காந்தத்தால் கவரப்படும்; ஆனால் கருப்பு நிறச் சேர்மமான இரும்பு சல்பைடு இரும்பின் பண்பைக் காட்டாது.' },
  },
  {
    difficulty: 'medium', source: '§10.2.1, p. 117', answer: 0,
    en: { q: 'Which of these is a heterogeneous mixture?', options: ['Sugar and sand', 'Salt solution', 'Sugar syrup', 'Air'], explanation: 'In sugar and sand the components can be seen separately; the other three have a uniform composition.' },
    ta: { q: 'பின்வருவனவற்றுள் பலபடித்தான கலவை எது?', options: ['சர்க்கரை மற்றும் மணல் கலவை', 'உப்பு நீர்', 'சர்க்கரைப் பாகு', 'காற்று'], explanation: 'சர்க்கரை – மணல் கலவையில் பகுதிப்பொருட்களைத் தனித்தனியாகக் காணலாம்; மற்ற மூன்றும் சீரான இயைபு கொண்டவை.' },
  },
  {
    difficulty: 'medium', source: '§10.3.2, p. 118', answer: 0,
    en: { q: 'Which is an application of centrifugation?', options: ['Separating cream from milk in dairies', 'Getting drinking water from sea water', 'Separating dyes in ink', 'Separating oil from water'], explanation: 'Centrifuges separate cream from milk, squeeze water from clothes and separate blood cells.' },
    ta: { q: 'மைய விலக்கத்தின் பயன்பாடு எது?', options: ['பால் பண்ணைகளில் பாலிலிருந்து வெண்ணெயை (கிரீம்) பிரித்தல்', 'கடல்நீரிலிருந்து குடிநீர் பெறுதல்', 'மையில் உள்ள சாயங்களைப் பிரித்தல்', 'நீரிலிருந்து எண்ணெயைப் பிரித்தல்'], explanation: 'மைய விலக்கம் பாலிலிருந்து கிரீமைப் பிரிக்கவும், ஈரத் துணிகளிலிருந்து நீரைப் பிழியவும், இரத்த செல்களைப் பிரிக்கவும் பயன்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: '§10.3.4, p. 118', answer: 0,
    en: { q: 'Simple distillation is a combination of', options: ['evaporation and condensation', 'filtration and evaporation', 'sublimation and condensation', 'sedimentation and decantation'], explanation: 'The liquid is vapourised by heating and the vapours are cooled to condense into pure liquid.' },
    ta: { q: 'காய்ச்சி வடித்தல் என்பது எவற்றின் சேர்க்கை?', options: ['ஆவியாதல் மற்றும் குளிர்தல் (சுருங்குதல்)', 'வடிகட்டல் மற்றும் ஆவியாதல்', 'பதங்கமாதல் மற்றும் குளிர்தல்', 'வீழ்படிவாதல் மற்றும் தெளிய வைத்து இறுத்தல்'], explanation: 'வெப்பப்படுத்தி திரவத்தை ஆவியாக்கி, அந்த ஆவியைக் குளிர்வித்துத் தூய திரவமாகப் பெறுவதே காய்ச்சி வடித்தல்.' },
  },
  {
    difficulty: 'medium', source: '§10.3.4–10.3.5, p. 118', answer: 0,
    en: { q: 'Fractional distillation is used instead of simple distillation when the boiling points of two miscible liquids differ by', options: ['less than 25 K', 'more than 25 K', 'exactly 100 K', 'more than 100 K'], explanation: 'Simple distillation works for a difference of more than 25 K; for less than 25 K a fractionating column is needed.' },
    ta: { q: 'கலக்கும் இரு திரவங்களின் கொதிநிலை வேறுபாடு எவ்வளவாக இருந்தால் பின்னக் காய்ச்சி வடித்தல் பயன்படுகிறது?', options: ['25 K-க்கும் குறைவு', '25 K-க்கும் அதிகம்', 'சரியாக 100 K', '100 K-க்கும் அதிகம்'], explanation: 'வேறுபாடு 25 K-க்கு மேல் இருந்தால் சாதாரண காய்ச்சி வடித்தல் போதும்; 25 K-க்குக் குறைவாக இருந்தால் பின்னக் காய்ச்சி வடித்தல் தேவை.' },
  },
  {
    difficulty: 'medium', source: '§10.4.1, Activity 5, p. 120', answer: 0,
    en: { q: 'Wheat flour stirred in water gives a turbid mixture whose particles settle after some time. This mixture is a', options: ['suspension', 'true solution', 'colloidal solution', 'emulsion'], explanation: 'Sugar gives a true solution, starch a colloid, and wheat flour a suspension whose particles settle down.' },
    ta: { q: 'கோதுமை மாவை நீரில் கலக்கும்போது கலங்கலான கலவை உருவாகிச் சிறிது நேரத்தில் துகள்கள் படிகின்றன. இக்கலவை', options: ['தொங்கல்', 'உண்மைக் கரைசல்', 'கூழ்மக் கரைசல்', 'பால்மம்'], explanation: 'சர்க்கரை உண்மைக் கரைசலையும், ஸ்டார்ச் கூழ்மத்தையும், கோதுமை மாவு படியும் தொங்கலையும் தருகின்றன.' },
  },
  {
    difficulty: 'medium', source: '§10.4.1, p. 121', answer: 0,
    en: { q: 'The particle size of a colloidal solution is about', options: ['1 to 100 nm', 'less than 1 nm', 'more than 100 nm', 'more than 1 mm'], explanation: 'True solution < 1 nm, colloid 1–100 nm, suspension > 100 nm.' },
    ta: { q: 'கூழ்மக் கரைசலின் துகள்களின் உருவ அளவு', options: ['1 முதல் 100 nm', '1 nm-க்கும் குறைவு', '100 nm-க்கும் அதிகம்', '1 mm-க்கும் அதிகம்'], explanation: 'உண்மைக் கரைசல் < 1 nm, கூழ்மம் 1–100 nm, தொங்கல் > 100 nm.' },
  },
  {
    difficulty: 'medium', source: '§10.4.2, Table 10.4, p. 120', answer: 0,
    en: { q: 'Curd, cheese and jelly are colloids of a liquid dispersed in a solid. Such a colloid is called a', options: ['gel', 'sol', 'foam', 'emulsion'], explanation: 'Liquid in solid = gel; solid in liquid = sol; gas in liquid = foam; liquid in liquid = emulsion.' },
    ta: { q: 'தயிர், பாலாடைக்கட்டி, ஜெல்லி ஆகியவை திண்மத்தில் திரவம் பரவிய கூழ்மங்கள். இவை', options: ['கூழ்', 'கரைசல் (சால்)', 'நுரை', 'பால்மம்'], explanation: 'திண்மத்தில் திரவம் = கூழ்; திரவத்தில் திண்மம் = கரைசல் (சால்); திரவத்தில் வாயு = நுரை; திரவத்தில் திரவம் = பால்மம்.' },
  },
  {
    difficulty: 'medium', source: '§10.4.2, p. 120', answer: 0,
    en: { q: 'Brownian movement of colloidal particles is caused by', options: ['unbalanced bombardment by molecules of the dispersion medium', 'gravity pulling the particles down', 'light falling on the particles', 'magnetic attraction between particles'], explanation: 'Molecules of the dispersion medium hit the colloidal particles unevenly, so they move rapidly in zig-zag paths.' },
    ta: { q: 'கூழ்மத் துகள்களின் பிரௌனியன் இயக்கத்திற்குக் காரணம்', options: ['பரவல் ஊடக மூலக்கூறுகள் சமநிலையற்ற முறையில் மோதுவது', 'புவியீர்ப்பு துகள்களைக் கீழே இழுப்பது', 'துகள்கள் மீது ஒளி விழுவது', 'துகள்களுக்கிடையேயான காந்தக் கவர்ச்சி'], explanation: 'பரவல் ஊடக மூலக்கூறுகள் கூழ்மத் துகள்களைச் சமநிலையற்ற முறையில் மோதுவதால் அவை இங்குமங்குமாக வேகமாக நகர்கின்றன.' },
  },
  {
    difficulty: 'medium', source: '§10.4.3, p. 121', answer: 0,
    en: { q: 'Butter is an example of which type of emulsion?', options: ['Water in oil (W/O)', 'Oil in water (O/W)', 'Gas in liquid', 'Solid in liquid'], explanation: 'In butter water is dispersed in oil (W/O); in cream oil droplets are dispersed in water (O/W).' },
    ta: { q: 'வெண்ணெய் எந்த வகைப் பால்மத்திற்கு எடுத்துக்காட்டு?', options: ['எண்ணெயில் நீர் (நீ/எ)', 'நீரில் எண்ணெய் (எ/நீ)', 'திரவத்தில் வாயு', 'திரவத்தில் திண்மம்'], explanation: 'வெண்ணெயில் எண்ணெயில் நீர் பரவியுள்ளது (நீ/எ); பால்குழைவில் (கிரீம்) நீரில் எண்ணெய்த் துளிகள் பரவியுள்ளன (எ/நீ).' },
  },
  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise III, p. 123', answer: 0,
    en: { q: 'Match:\n1. Element  2. Compound  3. Suspension  4. Mixture\nwith\na. Impure substance  b. Made up of atoms  c. Settles down on standing  d. Made up of molecules', options: ['1-b, 2-d, 3-c, 4-a', '1-d, 2-b, 3-c, 4-a', '1-b, 2-d, 3-a, 4-c', '1-a, 2-d, 3-c, 4-b'], explanation: 'Element – atoms of one kind; compound – molecules; suspension – settles on standing; mixture – impure substance.' },
    ta: { q: 'பொருத்துக:\n1. தனிமம்  2. சேர்மம்  3. தொங்கல்  4. கலவை\na. தூய்மையற்ற பொருள்  b. அணுக்களால் உருவானது  c. அசையாமல் வைக்கும்போது கீழே படிகிறது  d. மூலக்கூறுகளால் உருவானது', options: ['1-b, 2-d, 3-c, 4-a', '1-d, 2-b, 3-c, 4-a', '1-b, 2-d, 3-a, 4-c', '1-a, 2-d, 3-c, 4-b'], explanation: 'தனிமம் – அணுக்கள்; சேர்மம் – மூலக்கூறுகள்; தொங்கல் – அசையாமல் வைத்தால் படியும்; கலவை – தூய்மையற்ற பொருள்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VI.4, p. 124', answer: 0,
    en: { q: 'A mixture contains saw dust, naphthalene and iron filings. Which sequence separates all three?', options: ['Magnet to remove iron, then sublimation to remove naphthalene, leaving saw dust', 'Filtration, then distillation, then magnet', 'Sublimation to remove iron, then magnet to remove naphthalene', 'Centrifugation, then chromatography'], explanation: 'Iron is attracted by a magnet; naphthalene sublimes on heating and collects on the funnel; saw dust is left behind.' },
    ta: { q: 'மரத்தூள், இரும்புத் துகள், நாஃப்தலீன் கலந்த கலவையை எந்த வரிசையில் பிரிக்கலாம்?', options: ['காந்தத்தால் இரும்பை நீக்கி, பின் பதங்கமாதலால் நாஃப்தலீனைப் பிரித்தால் மரத்தூள் மீதமிருக்கும்', 'வடிகட்டல், காய்ச்சி வடித்தல், பின் காந்தம்', 'பதங்கமாதலால் இரும்பை நீக்கி, பின் காந்தத்தால் நாஃப்தலீனைப் பிரித்தல்', 'மைய விலக்கம், பின் வண்ணப்பிரிகை'], explanation: 'இரும்பு காந்தத்தால் கவரப்படும்; வெப்பப்படுத்தினால் நாஃப்தலீன் பதங்கமாகிப் புனலில் படியும்; மரத்தூள் மீதமிருக்கும்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VII.3, p. 124', answer: 0,
    en: { q: 'How can a mixture of common salt, oil and water be separated?', options: ['Separating funnel to remove oil, then evaporation (or distillation) of the salt water', 'Filtration to remove salt, then sublimation of oil', 'Magnetic separation, then centrifugation', 'Chromatography, then sieving'], explanation: 'Oil and water are immiscible, so a separating funnel removes the oil; salt is then recovered from the salt solution by evaporation or distillation.' },
    ta: { q: 'எளிய உப்பு, எண்ணெய், நீர் கலந்த கலவையை எவ்வாறு பிரிக்கலாம்?', options: ['பிரிபுனலால் எண்ணெயைப் பிரித்து, உப்புநீரை ஆவியாக்குதல் (அல்லது காய்ச்சி வடித்தல்)', 'வடிகட்டி உப்பை நீக்கி, எண்ணெயைப் பதங்கமாக்குதல்', 'காந்தப்பிரிகை, பின் மைய விலக்கம்', 'வண்ணப்பிரிகை, பின் சலித்தல்'], explanation: 'எண்ணெயும் நீரும் கலவாதவை; பிரிபுனலால் எண்ணெயைப் பிரிக்கலாம்; பின் உப்புக் கரைசலை ஆவியாக்கி அல்லது காய்ச்சி வடித்து உப்பைப் பெறலாம்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VI.5, p. 124', answer: 0,
    en: { q: 'Which pair correctly gives one homogeneous and one heterogeneous mixture, in that order?', options: ['Salt solution; oil and water', 'Soil; sugar syrup', 'Oil and water; air', 'Iron and sulphur; ink'], explanation: 'Salt solution has a uniform composition (single phase); oil and water form separate layers (more than one phase).' },
    ta: { q: 'முதலில் ஒருபடித்தான கலவை, அடுத்து பலபடித்தான கலவை என்ற வரிசையில் சரியாக உள்ள இணை எது?', options: ['உப்புக் கரைசல்; எண்ணெய் – நீர்', 'மண்; சர்க்கரைப் பாகு', 'எண்ணெய் – நீர்; காற்று', 'இரும்பு – கந்தகம்; மை'], explanation: 'உப்புக் கரைசல் சீரான இயைபு கொண்டது (ஒரே நிலைமை); எண்ணெய் – நீர் தனி அடுக்குகளாகப் பிரிகின்றன (ஒன்றுக்கு மேற்பட்ட நிலைமைகள்).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VII.1, p. 124', answer: 0,
    en: { q: 'Which statements about elements and compounds are correct?\n(i) An element is made up of only one kind of atom.\n(ii) The smallest particle of a compound that keeps its properties is the molecule.\n(iii) An element can be broken down by chemical methods.\n(iv) Water is a compound; copper is an element.', options: ['(i), (ii) and (iv)', '(i) and (iii) only', '(ii), (iii) and (iv)', '(iii) and (iv) only'], explanation: 'Elements cannot be broken into simpler substances; compounds can be broken into elements by chemical methods (Table 10.1).' },
    ta: { q: 'தனிமங்கள், சேர்மங்கள் பற்றிய சரியான கூற்றுகள் எவை?\n(i) தனிமம் ஒரே வகையான அணுக்களால் ஆனது.\n(ii) சேர்மத்தின் பண்புகளைக் கொண்ட மிகச்சிறிய துகள் மூலக்கூறு.\n(iii) வேதிமுறைகளால் தனிமத்தைப் பிரிக்க முடியும்.\n(iv) நீர் ஒரு சேர்மம்; தாமிரம் ஒரு தனிமம்.', options: ['(i), (ii), (iv)', '(i), (iii) மட்டும்', '(ii), (iii), (iv)', '(iii), (iv) மட்டும்'], explanation: 'தனிமத்தை எளிய பொருட்களாகப் பிரிக்க இயலாது; சேர்மத்தை வேதிமுறைகளால் தனிமங்களாகப் பிரிக்கலாம் (அட்டவணை 10.1).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VII.2, p. 124', answer: 0,
    en: { q: 'Assertion: A beam of light passing through a starch solution becomes visible, but not through a sugar solution.\nReason: Colloidal particles are large enough to scatter light, while particles of a true solution (< 1 nm) do not.', options: AR_EN, explanation: 'The Tyndall effect is shown by colloids because their 1–100 nm particles scatter light; true solutions do not scatter.' },
    ta: { q: 'கூற்று: ஸ்டார்ச் கரைசல் வழியே செல்லும் ஒளிக்கற்றை புலப்படுகிறது; சர்க்கரைக் கரைசலில் புலப்படுவதில்லை.\nகாரணம்: கூழ்மத் துகள்கள் ஒளியைச் சிதறடிக்கும் அளவுக்குப் பெரியவை; உண்மைக் கரைசலின் துகள்கள் (< 1 nm) சிதறடிப்பதில்லை.', options: AR_TA, explanation: '1–100 nm அளவுள்ள கூழ்மத் துகள்கள் ஒளியைச் சிதறடிப்பதால் டிண்டால் விளைவு ஏற்படுகிறது; உண்மைக் கரைசல் சிதறடிப்பதில்லை.' },
  },
  {
    difficulty: 'hard', source: '§10.4.2, Test Yourself, p. 121', answer: 0,
    en: { q: 'Assertion: Whole milk looks white.\nReason: Milk is an emulsion whose colloidal fat droplets scatter light.', options: AR_EN, explanation: 'Milk is a colloid (emulsion of fat in water); its particles scatter all colours of light, so it appears white.' },
    ta: { q: 'கூற்று: பால் வெண்மை நிறமாகத் தோன்றுகிறது.\nகாரணம்: பால் ஒரு பால்மம்; அதன் கூழ்மக் கொழுப்புத் துளிகள் ஒளியைச் சிதறடிக்கின்றன.', options: AR_TA, explanation: 'பால் ஒரு கூழ்மம் (நீரில் கொழுப்பு பால்மம்); அதன் துகள்கள் எல்லா நிற ஒளியையும் சிதறடிப்பதால் வெண்மையாகத் தோன்றுகிறது.' },
  },
  {
    difficulty: 'hard', source: '§10.3.5, p. 119', answer: 3,
    en: { q: 'Assertion: Alcohol and water can be separated by simple distillation.\nReason: Fractional distillation is used for miscible liquids whose boiling points differ by less than 25 K.', options: AR_EN, explanation: 'The assertion is false: alcohol and water have close boiling points, so they need fractional distillation, as the reason correctly states.' },
    ta: { q: 'கூற்று: ஆல்கஹாலையும் நீரையும் சாதாரண காய்ச்சி வடித்தலால் பிரிக்கலாம்.\nகாரணம்: கொதிநிலை வேறுபாடு 25 K-க்கும் குறைவான கலக்கும் திரவங்களுக்குப் பின்னக் காய்ச்சி வடித்தல் பயன்படுகிறது.', options: AR_TA, explanation: 'கூற்று தவறு: ஆல்கஹால், நீரின் கொதிநிலைகள் நெருக்கமானவை; எனவே பின்னக் காய்ச்சி வடித்தல் தேவை – காரணம் சரி.' },
  },
  {
    difficulty: 'hard', source: '§10.2.1, p. 117', answer: 2,
    en: { q: 'Assertion: Steel and bronze are homogeneous mixtures.\nReason: In a homogeneous mixture the components can be seen separately.', options: AR_EN, explanation: 'Alloys such as steel and bronze are homogeneous, but the reason is false: in a homogeneous mixture the components cannot be seen separately.' },
    ta: { q: 'கூற்று: எஃகு, வெண்கலம் ஆகியவை ஒருபடித்தான கலவைகள்.\nகாரணம்: ஒருபடித்தான கலவையில் பகுதிப்பொருட்களைத் தனித்தனியாகப் பார்க்க இயலும்.', options: AR_TA, explanation: 'எஃகு, வெண்கலம் போன்ற உலோகக் கலவைகள் ஒருபடித்தானவை; ஆனால் காரணம் தவறு – ஒருபடித்தான கலவையில் பகுதிப்பொருட்களைத் தனியாகப் பார்க்க இயலாது.' },
  },
  {
    difficulty: 'hard', source: '§10.3, Table 10.3, p. 117', answer: 0,
    en: { q: 'Which pairing of mixture and separation method is correct?', options: ['Solution of two or more solids in a liquid – chromatography', 'Two miscible liquids – separating funnel', 'Insoluble solid and liquid – fractional distillation', 'Two immiscible liquids – sublimation'], explanation: 'Table 10.3: dyes in a liquid – chromatography; miscible liquids – fractional distillation; insoluble solid – filtration; immiscible liquids – solvent extraction.' },
    ta: { q: 'கலவை – பிரித்தெடுக்கும் முறை சரியாகப் பொருந்தியுள்ள இணை எது?', options: ['இரண்டு அல்லது அதற்கு மேற்பட்ட திடப்பொருட்கள் கொண்ட கரைசல் – வண்ணப்பிரிகை', 'கலக்கும் பண்புள்ள திரவங்கள் – பிரிபுனல்', 'கரையாத திடப்பொருள் மற்றும் திரவம் – பின்னக் காய்ச்சி வடித்தல்', 'ஒன்றாகக் கலவாத திரவங்கள் – பதங்கமாதல்'], explanation: 'அட்டவணை 10.3: திரவத்தில் உள்ள சாயங்கள் – வண்ணப்பிரிகை; கலக்கும் திரவங்கள் – பின்னக் காய்ச்சி வடித்தல்; கரையாத திண்மம் – வடிகட்டல்; கலவாத திரவங்கள் – கரைப்பான் சாறு இறக்கல்.' },
  },
  {
    difficulty: 'hard', source: '§10.4.1, p. 121', answer: 0,
    en: { q: 'A mixture is translucent, cannot be separated by filtration, settles only on centrifugation and shows Brownian movement. It is a', options: ['colloidal solution', 'true solution', 'suspension', 'pure compound'], explanation: 'These are the properties of a colloid; a suspension is opaque and filterable, a true solution is transparent and never settles.' },
    ta: { q: 'ஒரு கலவை பகுதி ஒளி ஊடுருவக்கூடியது, வடிகட்டிப் பிரிக்க இயலாதது, மைய விலக்கம் செய்தால் மட்டும் படிவது, பிரௌனியன் இயக்கம் காட்டுவது. அது', options: ['கூழ்மக் கரைசல்', 'உண்மைக் கரைசல்', 'தொங்கல்', 'தூய சேர்மம்'], explanation: 'இவை கூழ்மத்தின் பண்புகள்; தொங்கல் ஒளி ஊடுருவாதது, வடிகட்டக்கூடியது; உண்மைக் கரைசல் ஒளி ஊடுருவக்கூடியது, படியாதது.' },
  },
  {
    difficulty: 'hard', source: '§10.4.2, Table 10.4, p. 120', answer: 0,
    en: { q: 'Which of these combinations of dispersed phase and dispersion medium cannot form a colloid?', options: ['Gas in gas', 'Gas in liquid', 'Liquid in gas', 'Solid in solid'], explanation: 'Gas in gas always forms a true solution, so only eight colloid combinations are possible.' },
    ta: { q: 'பரவிய நிலைமை – பரவல் ஊடகம் சேர்க்கைகளில் எது கூழ்மத்தை உருவாக்காது?', options: ['வாயுவில் வாயு', 'திரவத்தில் வாயு', 'வாயுவில் திரவம்', 'திண்மத்தில் திண்மம்'], explanation: 'வாயுவில் வாயு எப்போதும் உண்மைக் கரைசலை உருவாக்குவதால் எட்டு வகைக் கூழ்மங்கள் மட்டுமே சாத்தியம்.' },
  },
  {
    difficulty: 'hard', source: '§10.4.2, Table 10.4, p. 120', answer: 0,
    en: { q: 'Smoke and fog are both aerosols. What do they have in common?', options: ['Both have a gas as the dispersion medium', 'Both have a liquid as the dispersed phase', 'Both have a solid as the dispersed phase', 'Both have a liquid as the dispersion medium'], explanation: 'Smoke is solid in gas and fog is liquid in gas; in both the dispersion medium is a gas.' },
    ta: { q: 'புகையும் மூடுபனியும் தூசிப்படலங்கள். இவற்றுக்கிடையேயான ஒற்றுமை', options: ['இரண்டிலும் பரவல் ஊடகம் வாயு', 'இரண்டிலும் பரவிய நிலைமை திரவம்', 'இரண்டிலும் பரவிய நிலைமை திண்மம்', 'இரண்டிலும் பரவல் ஊடகம் திரவம்'], explanation: 'புகை – வாயுவில் திண்மம்; மூடுபனி – வாயுவில் திரவம்; இரண்டிலும் பரவல் ஊடகம் வாயு.' },
  },
  {
    difficulty: 'hard', source: '§10.3.1, Fig. 10.5, p. 117', imageUrl: `${IMG}/sublimation.png`, answer: 0,
    en: { q: 'In the set-up shown, ammonium chloride is separated from sand. Why does pure ammonium chloride collect on the inner side of the funnel?', options: ['It sublimes on heating and its vapours turn back to solid on the cool funnel', 'It melts and flows up the funnel', 'It dissolves in moisture on the funnel', 'Sand vapourises and pushes it upward'], explanation: 'Ammonium chloride is volatile: it changes directly to vapour, which solidifies on the cooler funnel; non-volatile sand stays in the china dish.' },
    ta: { q: 'படத்தில் உள்ள அமைப்பில் அம்மோனியம் குளோரைடு மணலிலிருந்து பிரிக்கப்படுகிறது. தூய அம்மோனியம் குளோரைடு புனலின் உட்புறத்தில் படியக் காரணம்', options: ['வெப்பத்தால் அது பதங்கமாகி, அதன் ஆவி குளிர்ந்த புனலில் மீண்டும் திண்மமாகிறது', 'அது உருகிப் புனல் வழியே மேலே பாய்கிறது', 'புனலில் உள்ள ஈரத்தில் அது கரைகிறது', 'மணல் ஆவியாகி அதை மேலே தள்ளுகிறது'], explanation: 'அம்மோனியம் குளோரைடு நேரடியாக ஆவியாகி குளிர்ந்த புனலில் திண்மமாகப் படிகிறது; ஆவியாகாத மணல் சைனாக் கிண்ணத்தில் தங்குகிறது.' },
  },
  {
    difficulty: 'hard', source: '§10.3.6, Fig. 10.10, p. 119', imageUrl: `${IMG}/paper-chromatography.png`, answer: 0,
    en: { q: 'In the paper chromatogram shown, the black ink spot separates into several coloured spots at different heights because the dyes', options: ['have different solubilities in the solvent and are adsorbed to different extents by the paper', 'have different boiling points', 'have different magnetic properties', 'react with water to form new compounds'], explanation: 'As the solvent rises, each dye moves a different distance depending on its solubility and adsorption on the paper.' },
    ta: { q: 'படத்தில் உள்ள வண்ணப்பிரிகைத் தாளில் கருப்பு மைப்புள்ளி வெவ்வேறு உயரங்களில் பல வண்ணப் புள்ளிகளாகப் பிரியக் காரணம், சாயங்கள்', options: ['கரைப்பானில் வெவ்வேறு கரைதிறனும், தாளில் வெவ்வேறு அளவு பரப்புக் கவர்தலும் கொண்டவை', 'வெவ்வேறு கொதிநிலைகளைக் கொண்டவை', 'வெவ்வேறு காந்தப் பண்புகளைக் கொண்டவை', 'நீருடன் வினைபுரிந்து புதிய சேர்மங்களாகின்றன'], explanation: 'கரைப்பான் மேலே ஏறும்போது ஒவ்வொரு சாயமும் அதன் கரைதிறன் மற்றும் தாளில் பரப்புக் கவர்தலுக்கு ஏற்ப வெவ்வேறு தூரம் நகர்கிறது.' },
  },
  {
    difficulty: 'hard', source: '§10.4.2, Fig. 10.12, p. 121', imageUrl: `${IMG}/tyndall-effect.png`, answer: 0,
    en: { q: 'In the figure, the laser beam is invisible in pure water but visible in the second beaker. This shows that the second beaker contains', options: ['a colloidal solution showing the Tyndall effect', 'a true solution showing Brownian movement', 'a pure compound', 'a suspension that has fully settled'], explanation: 'Colloidal particles scatter light, so the path of the beam (Tyndall cone) becomes visible; pure water does not scatter it.' },
    ta: { q: 'படத்தில் லேசர் ஒளிக்கற்றை தூய நீரில் புலப்படவில்லை; இரண்டாவது முகவையில் புலப்படுகிறது. இதிலிருந்து இரண்டாவது முகவையில் இருப்பது', options: ['டிண்டால் விளைவைக் காட்டும் கூழ்மக் கரைசல்', 'பிரௌனியன் இயக்கம் காட்டும் உண்மைக் கரைசல்', 'தூய சேர்மம்', 'முழுவதும் படிந்த தொங்கல்'], explanation: 'கூழ்மத் துகள்கள் ஒளியைச் சிதறடிப்பதால் ஒளிக்கற்றையின் பாதை (டிண்டால் கூம்பு) புலப்படுகிறது; தூய நீர் சிதறடிப்பதில்லை.' },
  },
  {
    difficulty: 'hard', source: '§10.3.6, p. 119', answer: 0,
    en: { q: 'A chalk stick dipped in ink is coloured on its surface but white inside when broken. This is because', options: ['the coloured molecules are adsorbed at the surface while the solvent is absorbed deeper', 'the solvent is adsorbed and the dye is absorbed', 'the chalk sublimes', 'the ink forms a suspension inside the chalk'], explanation: 'The dye concentrates only on the surface (adsorption) and the solvent spreads through the bulk (absorption).' },
    ta: { q: 'மையில் நனைத்த சாக்பீஸ் மேற்பரப்பில் வண்ணமாகவும், உடைத்தால் உள்ளே வெண்மையாகவும் இருக்கக் காரணம்', options: ['வண்ண மூலக்கூறுகள் மேற்பரப்பில் பரப்புக் கவரப்படுகின்றன; கரைப்பான் உள்ளே உறிஞ்சப்படுகிறது', 'கரைப்பான் பரப்புக் கவரப்படுகிறது; சாயம் உறிஞ்சப்படுகிறது', 'சாக்பீஸ் பதங்கமாகிறது', 'மை சாக்பீஸினுள் தொங்கலாகிறது'], explanation: 'சாயம் மேற்பரப்பில் மட்டும் செறிகிறது (பரப்புக் கவர்தல்); கரைப்பான் முழுவதும் பரவுகிறது (உறிஞ்சுதல்).' },
  },
];
