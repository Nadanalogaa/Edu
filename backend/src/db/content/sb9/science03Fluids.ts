// Tamil Nadu State Board, 9th Science, Unit 3 – Fluids (பாய்மங்கள்).
// Each level: our own questions first, then the textbook exercise/example questions
// (source 'Book …') that the original 30 did not already cover.
// Pilot chapter for the full textbook question bank: original questions written
// from the textbook content, every section covered at three difficulty levels.
// Tamil wording follows the terms used in the Tamil-medium textbook.
// source = section and printed page of the English-medium book (Tamil-medium pages match).

import { BankQuestion, AR_EN, AR_TA } from './types';

export type { BankQuestion };

const IMG = '/content/9/state_board/science/03';

export const FLUIDS_QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: '§3.1, p. 26', answer: 0,
    en: { q: 'A force acting perpendicular to a surface is called', options: ['thrust', 'pressure', 'density', 'upthrust'], explanation: 'Force acting perpendicular to a surface is thrust; thrust per unit area is pressure.' },
    ta: { q: 'ஒரு பரப்பிற்குச் செங்குத்தாகச் செயல்படும் விசை', options: ['உந்து விசை', 'அழுத்தம்', 'அடர்த்தி', 'மேல்நோக்கு விசை'], explanation: 'பரப்பிற்குச் செங்குத்தாகச் செயல்படும் விசை உந்து விசை; ஓரலகு பரப்பில் செயல்படும் உந்து விசையே அழுத்தம்.' },
  },
  {
    difficulty: 'easy', source: '§3.1, p. 27', answer: 0,
    en: { q: 'The SI unit of pressure is', options: ['pascal', 'newton', 'joule', 'watt'], explanation: 'Pressure is measured in N m⁻², called pascal (Pa) after Blaise Pascal.' },
    ta: { q: 'அழுத்தத்தின் SI அலகு', options: ['பாஸ்கல்', 'நியூட்டன்', 'ஜூல்', 'வாட்'], explanation: 'அழுத்தத்தின் அலகு N மீ⁻²; பிளெய்ஸ் பாஸ்கல் நினைவாக இது பாஸ்கல் (Pa) எனப்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: '§3.1, p. 27', answer: 0,
    en: { q: '1 pascal is equal to', options: ['1 N m⁻²', '1 N m²', '1 N m', '1 kg m⁻³'], explanation: '1 Pa = 1 newton per square metre.' },
    ta: { q: '1 பாஸ்கல் என்பது', options: ['1 N மீ⁻²', '1 N மீ²', '1 N மீ', '1 கிகி மீ⁻³'], explanation: '1 பாஸ்கல் = ஒரு சதுர மீட்டருக்கு 1 நியூட்டன்.' },
  },
  {
    difficulty: 'easy', source: '§3.2, p. 27', answer: 0,
    en: { q: 'Substances that can flow, such as liquids and gases, are called', options: ['fluids', 'solids', 'crystals', 'metals'], explanation: 'All flowing substances – liquids and gases – are fluids.' },
    ta: { q: 'பாயும் தன்மையுடைய திரவங்களும் வாயுக்களும் எவ்வாறு அழைக்கப்படுகின்றன?', options: ['பாய்மங்கள்', 'திண்மங்கள்', 'படிகங்கள்', 'உலோகங்கள்'], explanation: 'பாயும் தன்மையுடைய திரவங்களும் வாயுக்களும் பாய்மங்கள் எனப்படும்.' },
  },
  {
    difficulty: 'easy', source: '§3.3.1, p. 29', answer: 0,
    en: { q: 'The instrument used to measure atmospheric pressure is the', options: ['barometer', 'hydrometer', 'lactometer', 'pycnometer'], explanation: 'A barometer measures atmospheric pressure; a hydrometer measures relative density of liquids.' },
    ta: { q: 'வளிமண்டல அழுத்தத்தை அளக்கப் பயன்படும் கருவி', options: ['காற்றழுத்தமானி', 'திரவமானி', 'பால்மானி', 'பிக்னோமீட்டர்'], explanation: 'காற்றழுத்தமானி வளிமண்டல அழுத்தத்தை அளக்கும்; திரவமானி திரவங்களின் ஒப்படர்த்தியை அளக்கும்.' },
  },
  {
    difficulty: 'easy', source: '§3.3.1, p. 29', answer: 0,
    en: { q: 'The mercury barometer was first designed by', options: ['Torricelli', 'Pascal', 'Archimedes', 'Newton'], explanation: 'The Italian physicist Torricelli first designed the mercury barometer.' },
    ta: { q: 'பாதரச காற்றழுத்தமானியை முதன்முதலில் உருவாக்கியவர்', options: ['டாரிசெல்லி', 'பாஸ்கல்', 'ஆர்க்கிமிடிஸ்', 'நியூட்டன்'], explanation: 'இத்தாலிய இயற்பியலாளர் டாரிசெல்லி முதன்முதலில் பாதரச காற்றழுத்தமானியை உருவாக்கினார்.' },
  },
  {
    difficulty: 'easy', source: '§3.5, p. 32', answer: 0,
    en: { q: 'The SI unit of density is', options: ['kg m⁻³', 'kg m³', 'N m⁻²', 'kg'], explanation: 'Density = mass ÷ volume, so its SI unit is kg m⁻³.' },
    ta: { q: 'அடர்த்தியின் SI அலகு', options: ['கிகி மீ⁻³', 'கிகி மீ³', 'N மீ⁻²', 'கிகி'], explanation: 'அடர்த்தி = நிறை ÷ பருமன்; எனவே அலகு கிகி மீ⁻³.' },
  },
  {
    difficulty: 'easy', source: '§3.5.1, p. 35', answer: 0,
    en: { q: 'Relative density of a substance has', options: ['no unit', 'the unit kg m⁻³', 'the unit g cm⁻³', 'the unit N'], explanation: 'It is a ratio of two densities, so it is a pure number without a unit.' },
    ta: { q: 'ஒரு பொருளின் ஒப்படர்த்தியின் அலகு', options: ['அலகு இல்லை', 'கிகி மீ⁻³', 'கி செமீ⁻³', 'நியூட்டன்'], explanation: 'இரு அடர்த்திகளின் விகிதம் என்பதால் ஒப்படர்த்தி அலகு இல்லாத எண்.' },
  },
  {
    difficulty: 'easy', source: '§3.5.4, p. 33', answer: 0,
    en: { q: 'A lactometer is used to check the purity of', options: ['milk', 'water', 'petrol', 'honey'], explanation: 'A lactometer is a hydrometer that measures the density of milk.' },
    ta: { q: 'பால்மானி எதன் தூய்மையைச் சோதிக்கப் பயன்படுகிறது?', options: ['பால்', 'நீர்', 'பெட்ரோல்', 'தேன்'], explanation: 'பால்மானி பாலின் அடர்த்தியைக் கண்டறியும் ஒரு வகைத் திரவமானி.' },
  },
  {
    difficulty: 'easy', source: '§3.6, p. 34', answer: 0,
    en: { q: 'The upward force exerted by a fluid on an object immersed in it is called', options: ['buoyant force (upthrust)', 'frictional force', 'gravitational force', 'tension'], explanation: 'The pressure difference between the bottom and top of the object pushes it up: buoyant force.' },
    ta: { q: 'பாய்மத்தில் மூழ்கியுள்ள பொருளின் மீது பாய்மம் செலுத்தும் மேல்நோக்கு விசை', options: ['மிதப்பு விசை (மேல்நோக்கு விசை)', 'உராய்வு விசை', 'ஈர்ப்பு விசை', 'இழுவிசை'], explanation: 'பொருளின் அடியிலும் மேலிலும் உள்ள அழுத்த வேறுபாடு அதை மேலே தள்ளுகிறது: மிதப்பு விசை.' },
  },
  // Easy – textbook exercises, examples and boxes
  {
    difficulty: 'easy', source: 'Book exercise I.2, p. 36', answer: 0,
    en: { q: 'Clouds float in the atmosphere because of their low', options: ['density', 'pressure', 'velocity', 'mass'], explanation: 'A cloud is made of tiny droplets spread through a huge volume of air, so its density is low and the air buoys it up.' },
    ta: { q: 'வளிமண்டலத்தில் மேகங்கள் மிதப்பதற்கு, அவற்றின் குறைந்த _____ காரணமாகும்.', options: ['அடர்த்தி', 'அழுத்தம்', 'திசைவேகம்', 'நிறை'], explanation: 'மேகம் மிகப் பெரிய பருமன் காற்றில் பரவிய நுண்துளிகளால் ஆனது; அதன் அடர்த்தி குறைவு; காற்று அதை மிதக்கச் செய்கிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.1, p. 36', answer: 0,
    en: { q: 'The weight of a body immersed in a liquid appears to be _____ than its actual weight.', options: ['less', 'more', 'equal to', 'double'], explanation: 'The upthrust of the liquid acts upward, so the body apparently loses some weight.' },
    ta: { q: 'பொருளானது திரவத்தில் மூழ்கியிருக்கும் போது உணரப்படும் எடையானது அதன் உண்மையான எடையை விட _____ ஆகத் தோன்றும்.', options: ['குறைவு', 'அதிகம்', 'சமம்', 'இருமடங்கு'], explanation: 'திரவத்தின் மேல்நோக்கு விசை மேல்நோக்கிச் செயல்படுவதால் பொருள் தன் எடையில் ஒரு பகுதியை இழந்தது போலத் தோன்றும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.3, p. 36', answer: 0,
    en: { q: 'The magnitude of buoyant force acting on an object immersed in a liquid depends on the _____ of the liquid.', options: ['density', 'colour', 'depth of the vessel', 'surface area'], explanation: 'Buoyant force depends on the density of the fluid and the volume displaced; that is why salt water buoys more.' },
    ta: { q: 'திரவத்தில் மூழ்கியுள்ள பொருளின் மீது செயல்படும் மிதப்பு விசையின் எண் மதிப்பு திரவத்தின் _____ ஐப் பொறுத்தது.', options: ['அடர்த்தி', 'நிறம்', 'பாத்திரத்தின் ஆழம்', 'மேற்பரப்பு'], explanation: 'மிதப்பு விசை பாய்மத்தின் அடர்த்தியையும் வெளியேற்றப்பட்ட பருமனையும் பொறுத்தது; எனவே உப்பு நீர் அதிகமாக மிதக்கச் செய்கிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.4, p. 36', answer: 0,
    en: { q: 'A drinking straw works on the existence of _____.', options: ['atmospheric pressure', 'buoyant force', 'surface tension', 'magnetic force'], explanation: 'Sucking lowers the pressure inside the straw; atmospheric pressure on the liquid surface pushes the liquid up.' },
    ta: { q: 'பழரசம் அருந்தப் பயன்படும் உறிஞ்சு குழல் _____ மூலம் வேலை செய்கிறது.', options: ['வளிமண்டல அழுத்தம்', 'மிதப்பு விசை', 'பரப்பு இழுவிசை', 'காந்த விசை'], explanation: 'உறிஞ்சும்போது குழலினுள் அழுத்தம் குறைகிறது; திரவப் பரப்பின் மீதுள்ள வளிமண்டல அழுத்தம் திரவத்தை மேலே தள்ளுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise III.4, p. 36', answer: 0,
    en: { q: "Archimedes' principle can be applied to", options: ['both liquids and gases', 'liquids only', 'solids only', 'gases only'], explanation: 'True statement: the principle holds for any fluid – a helium balloon is buoyed up by air.' },
    ta: { q: 'ஆர்க்கிமிடிஸ் தத்துவம் எவற்றுக்குப் பொருந்தும்?', options: ['திரவங்கள், வாயுக்கள் இரண்டுக்கும்', 'திரவங்களுக்கு மட்டும்', 'திண்மங்களுக்கு மட்டும்', 'வாயுக்களுக்கு மட்டும்'], explanation: 'கூற்று சரி: இத்தத்துவம் எல்லாப் பாய்மங்களுக்கும் பொருந்தும் – ஹீலியம் பலூனைக் காற்று மிதக்கச் செய்கிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise III.5, p. 36', answer: 0,
    en: { q: 'A hydraulic press is used in', options: ['the extraction of oil from oil seeds', 'measuring atmospheric pressure', 'checking the purity of milk', 'measuring relative density'], explanation: 'True statement: the hydraulic press multiplies force and is used to squeeze oil out of oil seeds.' },
    ta: { q: 'நீரியல் அழுத்தி எதற்குப் பயன்படுகிறது?', options: ['எண்ணெய் வித்துக்களிலிருந்து எண்ணெய் எடுக்க', 'வளிமண்டல அழுத்தத்தை அளக்க', 'பாலின் தூய்மையைச் சோதிக்க', 'ஒப்படர்த்தியை அளக்க'], explanation: 'கூற்று சரி: நீரியல் அழுத்தி விசையைப் பெருக்குகிறது; எண்ணெய் வித்துக்களிலிருந்து எண்ணெய் பிழிய உதவுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise V.4, p. 37', answer: 0,
    en: { q: 'Atmospheric pressure is', options: ['the pressure exerted by the air of the atmosphere on the Earth and its surroundings', 'the pressure exerted by water at the bottom of the sea', 'the pressure inside a closed tyre', 'the pressure of a liquid on the walls of its container'], explanation: 'Air has weight, so the layer of air around the Earth (about 300 km) exerts pressure – atmospheric pressure.' },
    ta: { q: 'வளிமண்டல அழுத்தம் என்பது', options: ['வளிமண்டலக் காற்று புவியின் மேற்பரப்பின் மீதும் சுற்றுப்புறத்தின் மீதும் செலுத்தும் அழுத்தம்', 'கடலின் அடியில் நீர் செலுத்தும் அழுத்தம்', 'மூடிய டயரின் உள்ளே உள்ள அழுத்தம்', 'பாத்திரத்தின் சுவர்களின் மீது திரவம் செலுத்தும் அழுத்தம்'], explanation: 'காற்றுக்கு எடை உண்டு; புவியைச் சூழ்ந்த காற்றுப் படலம் (ஏறக்குறைய 300 கிமீ) செலுத்தும் அழுத்தமே வளிமண்டல அழுத்தம்.' },
  },
  {
    difficulty: 'easy', source: '§3.3.1, p. 30', answer: 0,
    en: { q: '1 bar is equal to', options: ['1 × 10⁵ Pa', '1.013 × 10⁵ Pa', '1 × 10³ Pa', '760 Pa'], explanation: '1 bar = 1 × 10⁵ Pa, while 1 atm = 1.013 × 10⁵ Pa = 1.013 bar.' },
    ta: { q: '1 பார் என்பது', options: ['1 × 10⁵ பாஸ்கல்', '1.013 × 10⁵ பாஸ்கல்', '1 × 10³ பாஸ்கல்', '760 பாஸ்கல்'], explanation: '1 பார் = 1 × 10⁵ பாஸ்கல்; 1 atm = 1.013 × 10⁵ பாஸ்கல் = 1.013 பார்.' },
  },
  {
    difficulty: 'easy', source: 'Do you know?, p. 29', answer: 0,
    en: { q: 'The human lung is well adapted to breathe at the sea-level pressure of', options: ['101.3 kPa', '10.13 kPa', '1013 kPa', '1.013 kPa'], explanation: 'At higher altitudes the pressure falls below 101.3 kPa, so mountain climbers carry oxygen cylinders.' },
    ta: { q: 'மனித நுரையீரல் எந்தக் கடல்மட்ட அழுத்தத்தில் சுவாசிக்கத் தகவமைந்துள்ளது?', options: ['101.3 கிலோ பாஸ்கல்', '10.13 கிலோ பாஸ்கல்', '1013 கிலோ பாஸ்கல்', '1.013 கிலோ பாஸ்கல்'], explanation: 'உயரத்தில் அழுத்தம் 101.3 கிலோ பாஸ்கலை விடக் குறைவதால் மலையேறுபவர்கள் ஆக்சிஜன் உருளைகளை எடுத்துச் செல்கின்றனர்.' },
  },
  {
    difficulty: 'easy', source: 'Do you know?, p. 35', answer: 0,
    en: { q: 'Flotation therapy uses water containing Epsom salts, which are rich in', options: ['magnesium', 'iron', 'calcium', 'sodium'], explanation: 'The floater absorbs magnesium through the skin; magnesium helps the body process insulin.' },
    ta: { q: 'மிதத்தல் சிகிச்சையில் பயன்படும் நீரில் உள்ள எப்சம் உப்பில் மிகுதியாக உள்ளது', options: ['மெக்னீசியம்', 'இரும்பு', 'கால்சியம்', 'சோடியம்'], explanation: 'மிதப்பவர் தோல் வழியாக மெக்னீசியத்தை உறிஞ்சுகிறார்; இது உடல் இன்சுலினைப் பயன்படுத்த உதவுகிறது.' },
  },
  {
    difficulty: 'easy', source: '§3.5.4, p. 33', answer: 0,
    en: { q: 'A saccharometer is a hydrometer used for measuring the density of', options: ['sugar in a liquid', 'cream in milk', 'alcohol in spirits', 'salt in sea water'], explanation: 'Hydrometers are calibrated as lactometers (milk), saccharometers (sugar) and alcoholometers (alcohol).' },
    ta: { q: 'சர்க்கரைமானி (Saccharometer) என்ற திரவமானி எதன் அடர்த்தியை அளக்கப் பயன்படுகிறது?', options: ['திரவத்தில் உள்ள சர்க்கரை', 'பாலில் உள்ள கொழுப்பு', 'சாராயத்தில் உள்ள ஆல்கஹால்', 'கடல் நீரில் உள்ள உப்பு'], explanation: 'திரவமானிகள் பால்மானி (பால்), சர்க்கரைமானி (சர்க்கரை), சாராயமானி (ஆல்கஹால்) எனப் பல வகைகளில் உள்ளன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise VI.4, p. 37', answer: 0,
    en: { q: 'A hydrometer works on the principle of', options: ['flotation', 'Pascal’s law of pressure transmission', 'conservation of energy', 'thermal expansion'], explanation: 'The weight of liquid displaced by the immersed part of the hydrometer equals its own weight.' },
    ta: { q: 'திரவமானி எந்தத் தத்துவத்தின் அடிப்படையில் செயல்படுகிறது?', options: ['மிதத்தல் தத்துவம்', 'அழுத்தம் கடத்தப்படும் பாஸ்கல் விதி', 'ஆற்றல் அழிவின்மை விதி', 'வெப்ப விரிவு'], explanation: 'திரவமானியின் மூழ்கிய பகுதி வெளியேற்றும் திரவத்தின் எடை அதன் எடைக்குச் சமம்.' },
  },
  {
    difficulty: 'easy', source: '§3.5.4, p. 33', answer: 0,
    en: { q: 'The average lactometer reading of normal milk is about', options: ['32', '15', '45', '60'], explanation: 'The lactometer scale runs from 15 (top) to 45 (bottom); normal milk reads about 32, at 60 °F.' },
    ta: { q: 'சாதாரணப் பாலின் சராசரி பால்மானி அளவீடு ஏறக்குறைய', options: ['32', '15', '45', '60'], explanation: 'பால்மானியின் அளவீடு மேலே 15 முதல் கீழே 45 வரை; சாதாரணப் பால் ஏறக்குறைய 32 காட்டும் (60 °F-இல்).' },
  },
  // ---------------------------------------------------------------- Medium
  {
    difficulty: 'medium', source: '§3.1, p. 26', answer: 0,
    en: { q: 'A camel walks easily on sand because its broad feet', options: ['reduce the pressure on the sand', 'increase the pressure on the sand', 'reduce its weight', 'increase the thrust on the sand'], explanation: 'The same weight spread over a larger area gives a lower pressure, so the feet do not sink.' },
    ta: { q: 'ஒட்டகம் பாலைவன மணலில் எளிதாக நடக்கக் காரணம், அதன் அகன்ற பாதங்கள்', options: ['மணலின் மீதான அழுத்தத்தைக் குறைக்கின்றன', 'மணலின் மீதான அழுத்தத்தை அதிகரிக்கின்றன', 'அதன் எடையைக் குறைக்கின்றன', 'மணலின் மீதான உந்து விசையை அதிகரிக்கின்றன'], explanation: 'அதே எடை பெரிய பரப்பில் பரவுவதால் அழுத்தம் குறைகிறது; பாதங்கள் மணலில் புதைவதில்லை.' },
  },
  {
    difficulty: 'medium', source: '§3.2.2, p. 28', answer: 0,
    en: { q: 'The pressure at a point in a liquid does NOT depend on', options: ['the area of the base of the vessel', 'the depth of the point', 'the density of the liquid', 'the acceleration due to gravity'], explanation: 'P = hρg: only depth, density and g appear; the area cancels out.' },
    ta: { q: 'திரவத்தில் ஒரு புள்ளியில் உள்ள அழுத்தம் எதைச் சார்ந்தது அல்ல?', options: ['பாத்திரத்தின் அடிப்பரப்பு', 'அப்புள்ளியின் ஆழம்', 'திரவத்தின் அடர்த்தி', 'புவியீர்ப்பு முடுக்கம்'], explanation: 'P = hρg: ஆழம், அடர்த்தி, g மட்டுமே இடம்பெறுகின்றன; பரப்பு நீங்கிவிடுகிறது.' },
  },
  {
    difficulty: 'medium', source: '§3.2.3, p. 29', answer: 0,
    en: { q: 'The pressure due to a 2 m column of water (ρ = 1000 kg m⁻³, g = 10 m s⁻²) is', options: ['20000 Pa', '2000 Pa', '200 Pa', '200000 Pa'], explanation: 'P = hρg = 2 × 1000 × 10 = 20000 Pa.' },
    ta: { q: '2 மீ உயர நீர்த் தம்பம் ஏற்படுத்தும் அழுத்தம் (ρ = 1000 கிகி மீ⁻³, g = 10 மீ வி⁻²)', options: ['20000 பாஸ்கல்', '2000 பாஸ்கல்', '200 பாஸ்கல்', '200000 பாஸ்கல்'], explanation: 'P = hρg = 2 × 1000 × 10 = 20000 பாஸ்கல்.' },
  },
  {
    difficulty: 'medium', source: '§3.3, p. 29', answer: 0,
    en: { q: 'As we climb a mountain, atmospheric pressure', options: ['decreases', 'increases', 'stays the same', 'first increases, then decreases'], explanation: 'Higher up, a shorter column of air presses down, so the pressure is lower.' },
    ta: { q: 'மலையின் மீது ஏறும்போது வளிமண்டல அழுத்தம்', options: ['குறைகிறது', 'அதிகரிக்கிறது', 'மாறாமல் இருக்கிறது', 'முதலில் அதிகரித்துப் பின் குறைகிறது'], explanation: 'உயரத்தில் மேலே உள்ள காற்றுத் தம்பம் குறைவு; எனவே அழுத்தம் குறைகிறது.' },
  },
  {
    difficulty: 'medium', source: '§3.3.1, p. 30', answer: 0,
    en: { q: 'On a normal day at sea level, the height of mercury in a barometer is', options: ['760 mm', '76 mm', '7.6 mm', '1013 mm'], explanation: '1 atm supports a 760 mm (76 cm) column of mercury.' },
    ta: { q: 'கடல் மட்டத்தில் ஒரு சாதாரண நாளில் காற்றழுத்தமானியில் பாதரசத்தின் உயரம்', options: ['760 மிமீ', '76 மிமீ', '7.6 மிமீ', '1013 மிமீ'], explanation: '1 atm அழுத்தம் 760 மிமீ (76 செமீ) பாதரசத் தம்பத்தைத் தாங்குகிறது.' },
  },
  {
    difficulty: 'medium', source: '§3.3.2, p. 30', answer: 0,
    en: { q: 'A tyre gauge reads 2 × 10⁵ Pa. If atmospheric pressure is 1 × 10⁵ Pa, the absolute pressure inside the tyre is', options: ['3 × 10⁵ Pa', '2 × 10⁵ Pa', '1 × 10⁵ Pa', '0.5 × 10⁵ Pa'], explanation: 'Above atmospheric pressure: absolute = atmospheric + gauge = 1 × 10⁵ + 2 × 10⁵ = 3 × 10⁵ Pa.' },
    ta: { q: 'டயரின் அளவி அழுத்தம் 2 × 10⁵ பாஸ்கல். வளிமண்டல அழுத்தம் 1 × 10⁵ பாஸ்கல் எனில் டயரின் தனிச்சுழி அழுத்தம்', options: ['3 × 10⁵ பாஸ்கல்', '2 × 10⁵ பாஸ்கல்', '1 × 10⁵ பாஸ்கல்', '0.5 × 10⁵ பாஸ்கல்'], explanation: 'தனிச்சுழி அழுத்தம் = வளிமண்டல அழுத்தம் + அளவி அழுத்தம் = 3 × 10⁵ பாஸ்கல்.' },
  },
  {
    difficulty: 'medium', source: '§3.4, p. 31', answer: 0,
    en: { q: "By Pascal's law, external pressure applied on an incompressible liquid is", options: ['transmitted uniformly throughout the liquid', 'transmitted only downwards', 'felt only at the bottom of the vessel', 'lost at the walls of the vessel'], explanation: 'The pressure is passed on equally in all directions – the basis of hydraulic machines.' },
    ta: { q: 'பாஸ்கல் விதிப்படி, அழுத்தமுறாத திரவத்தின் மீது செலுத்தப்படும் புற அழுத்தம்', options: ['திரவம் முழுவதும் சீராகக் கடத்தப்படுகிறது', 'கீழ்நோக்கி மட்டும் கடத்தப்படுகிறது', 'பாத்திரத்தின் அடியில் மட்டும் உணரப்படுகிறது', 'பாத்திரத்தின் சுவர்களில் இழக்கப்படுகிறது'], explanation: 'அழுத்தம் எல்லாத் திசைகளிலும் சமமாகக் கடத்தப்படுகிறது; இதுவே நீரியல் இயந்திரங்களின் அடிப்படை.' },
  },
  {
    difficulty: 'medium', source: '§3.5.3, p. 33', answer: 0,
    en: { q: 'A block of mass 600 g and volume 1000 cm³ is put in water. It will', options: ['float, because its density (0.6 g cm⁻³) is less than that of water', 'sink, because it is heavy', 'sink, because its density is more than that of water', 'stay exactly at the bottom'], explanation: 'Density = 600 ÷ 1000 = 0.6 g cm⁻³, less than water (1 g cm⁻³), so it floats.' },
    ta: { q: '600 கி நிறையும் 1000 செமீ³ பருமனும் கொண்ட ஒரு கட்டை நீரில் இடப்படுகிறது. அது', options: ['மிதக்கும்; அதன் அடர்த்தி (0.6 கி செமீ⁻³) நீரை விடக் குறைவு', 'மூழ்கும்; அது கனமானது', 'மூழ்கும்; அதன் அடர்த்தி நீரை விட அதிகம்', 'சரியாக அடியில் தங்கும்'], explanation: 'அடர்த்தி = 600 ÷ 1000 = 0.6 கி செமீ⁻³; நீரை (1 கி செமீ⁻³) விடக் குறைவு; எனவே மிதக்கும்.' },
  },
  {
    difficulty: 'medium', source: '§3.6, p. 34', answer: 0,
    en: { q: 'It is easier to swim in sea water than in river water because sea water', options: ['is denser, so it gives a greater buoyant force', 'is less dense, so it gives a greater buoyant force', 'is warmer', 'has waves'], explanation: 'Buoyant force depends on the density of the fluid; salt water is denser than fresh water.' },
    ta: { q: 'ஆற்று நீரை விடக் கடல் நீரில் நீந்துவது எளிது, ஏனெனில் கடல் நீர்', options: ['அடர்த்தி அதிகம்; எனவே அதிக மிதப்பு விசை தருகிறது', 'அடர்த்தி குறைவு; எனவே அதிக மிதப்பு விசை தருகிறது', 'வெப்பமானது', 'அலைகளைக் கொண்டது'], explanation: 'மிதப்பு விசை பாய்மத்தின் அடர்த்தியைச் சார்ந்தது; உப்பு நீர் நன்னீரை விட அடர்த்தியானது.' },
  },
  {
    difficulty: 'medium', source: '§3.7, p. 34', answer: 0,
    en: { q: 'A stone weighs 5 N in air and 3 N when fully immersed in water. The upthrust on it is', options: ['2 N', '8 N', '3 N', '5 N'], explanation: 'Upthrust = apparent loss of weight = 5 N − 3 N = 2 N.' },
    ta: { q: 'ஒரு கல் காற்றில் 5 N எடையும், நீரில் முழுமையாக மூழ்கியபோது 3 N எடையும் கொண்டுள்ளது. அதன் மீதான மேல்நோக்கு விசை', options: ['2 N', '8 N', '3 N', '5 N'], explanation: 'மேல்நோக்கு விசை = தோற்ற எடை இழப்பு = 5 N − 3 N = 2 N.' },
  },
  // Medium – textbook exercises, examples and activities
  {
    difficulty: 'medium', source: 'Book exercise I.1, p. 36', answer: 0,
    en: { q: 'The size of an air bubble rising up in water', options: ['increases', 'decreases', 'remains the same', 'may increase or decrease'], explanation: 'As the bubble rises, the depth and so the water pressure on it decrease, so the air inside expands.' },
    ta: { q: 'நீரில் மூழ்கியிருக்கும் காற்றுக்குமிழி மேலே எழும்பும் போது, அதன் அளவு', options: ['அதிகரிக்கும்', 'குறையும்', 'அதே அளவில் இருக்கும்', 'குறையும் அல்லது அதிகரிக்கும்'], explanation: 'குமிழி மேலே வரும்போது ஆழம் குறைவதால் நீரின் அழுத்தம் குறைகிறது; உள்ளே உள்ள காற்று விரிவடைகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.3, p. 36', answer: 0,
    en: { q: 'In a pressure cooker, the food is cooked faster because', options: ['increased pressure raises the boiling point', 'increased pressure lowers the boiling point', 'decreased pressure raises the boiling point', 'increased pressure lowers the melting point'], explanation: 'The trapped steam raises the pressure, so water boils above 100 °C and food cooks at a higher temperature.' },
    ta: { q: 'அழுத்த சமையற்கலனில் (pressure cooker) உணவு விரைவாக சமைக்கப்படுவதற்குக் காரணம், அதனுடைய', options: ['அதிகரிக்கப்பட்ட அழுத்தம் கொதி நிலையை உயர்த்துகிறது', 'அதிகரிக்கப்பட்ட அழுத்தம் கொதி நிலையைக் குறைக்கிறது', 'குறைக்கப்பட்ட அழுத்தம் கொதி நிலையை உயர்த்துகிறது', 'அதிகரிக்கப்பட்ட அழுத்தம் உருகு நிலையைக் குறைக்கிறது'], explanation: 'அடைபட்ட நீராவி அழுத்தத்தை உயர்த்துவதால் நீர் 100 °C-க்கு மேல் கொதிக்கிறது; உணவு அதிக வெப்பநிலையில் வேகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.1, p. 36', answer: 0,
    en: { q: 'Which statement about buoyant force is correct?', options: ['The weight of fluid displaced determines the buoyant force on an object', 'The weight of the object in air determines the buoyant force', 'Only the shape of the object determines the buoyant force', 'The buoyant force is the same in every liquid'], explanation: "True statement: by Archimedes' principle, upthrust = weight of the fluid displaced." },
    ta: { q: 'மிதப்பு விசை பற்றிய சரியான கூற்று எது?', options: ['இடப்பெயர்ச்சி செய்யப்பட்ட பாய்மத்தின் எடை மிதப்பு விசையைத் தீர்மானிக்கிறது', 'காற்றில் பொருளின் எடை மிதப்பு விசையைத் தீர்மானிக்கிறது', 'பொருளின் வடிவம் மட்டுமே மிதப்பு விசையைத் தீர்மானிக்கிறது', 'எல்லாத் திரவங்களிலும் மிதப்பு விசை ஒன்றே'], explanation: 'கூற்று சரி: ஆர்க்கிமிடிஸ் தத்துவப்படி மேல்நோக்கு விசை = வெளியேற்றப்பட்ட பாய்மத்தின் எடை.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.2, p. 36', answer: 0,
    en: { q: "'The shape of an object helps to determine whether the object will float or not.' This statement is", options: ['true – the shape decides how much water it can displace, as with a ship', 'false – only the mass of the object matters', 'false – all metal objects sink, whatever their shape', 'true – only round objects can float'], explanation: 'An iron ship floats but an iron nail sinks: the ship’s hollow shape displaces water equal to its weight.' },
    ta: { q: '"ஒரு பொருளின் வடிவம் அப்பொருள் மிதக்குமா இல்லையா என்பதைத் தீர்மானிக்கிறது" – இக்கூற்று', options: ['சரி – வடிவம் எவ்வளவு நீரை வெளியேற்றும் என்பதைத் தீர்மானிக்கிறது (எ.கா. கப்பல்)', 'தவறு – பொருளின் நிறை மட்டுமே தீர்மானிக்கிறது', 'தவறு – வடிவம் எதுவாயினும் உலோகப் பொருள்கள் மூழ்கும்', 'சரி – உருண்டையான பொருள்கள் மட்டுமே மிதக்கும்'], explanation: 'இரும்பு ஆணி மூழ்குகிறது, இரும்புக் கப்பல் மிதக்கிறது: கப்பலின் உள்ளீடற்ற வடிவம் தன் எடைக்குச் சமமான நீரை வெளியேற்றுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.3, p. 36', answer: 0,
    en: { q: 'The foundations of high-rise buildings are kept wide so that they', options: ['exert less pressure on the ground', 'exert more pressure on the ground', 'weigh less', 'exert more thrust on the ground'], explanation: 'The statement "more pressure" is false: a wider base spreads the same weight over a larger area, lowering the pressure.' },
    ta: { q: 'மிக உயரமான கட்டடங்களின் அடிப்பாகம் அகலமாக இருப்பதற்குக் காரணம்', options: ['புவியின் மீது குறைந்த அழுத்தத்தைச் செலுத்த', 'புவியின் மீது அதிக அழுத்தத்தைச் செலுத்த', 'கட்டடத்தின் எடையைக் குறைக்க', 'புவியின் மீது அதிக உந்து விசையைச் செலுத்த'], explanation: '"அதிக அழுத்தம்" என்ற கூற்று தவறு: அகலமான அடிப்பாகம் அதே எடையைப் பெரிய பரப்பில் பரப்புவதால் அழுத்தம் குறைகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV, p. 37', answer: 0,
    en: { q: "Match the following:\n1. Density  2. Pascal's law  3. Pressure exerted by a fluid  4. Lactometer\na. hρg  b. Milk  c. Mass/Volume  d. Pressure", options: ['1-c, 2-d, 3-a, 4-b', '1-a, 2-d, 3-c, 4-b', '1-c, 2-a, 3-d, 4-b', '1-b, 2-d, 3-a, 4-c'], explanation: 'Density = mass/volume; Pascal’s law is about transmission of pressure; fluid pressure = hρg; a lactometer tests milk.' },
    ta: { q: 'பொருத்துக:\n1. அடர்த்தி  2. பாஸ்கல் விதி  3. பாய்மம் ஏற்படுத்தும் அழுத்தம்  4. பால்மானி\na. hρg  b. பால்  c. நிறை/பருமன்  d. அழுத்தம்', options: ['1-c, 2-d, 3-a, 4-b', '1-a, 2-d, 3-c, 4-b', '1-c, 2-a, 3-d, 4-b', '1-b, 2-d, 3-a, 4-c'], explanation: 'அடர்த்தி = நிறை/பருமன்; பாஸ்கல் விதி அழுத்தம் கடத்தப்படுவது பற்றியது; பாய்ம அழுத்தம் = hρg; பால்மானி பாலைச் சோதிக்கிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V.2, p. 37', answer: 0,
    en: { q: 'A helium balloon floats in air because', options: ['helium is less dense than air, so the upthrust exceeds its weight', 'helium is denser than air', 'air pressure is zero around the balloon', 'helium has no mass'], explanation: 'The balloon displaces air heavier than itself, so the buoyant force of air is greater than its weight.' },
    ta: { q: 'ஹீலியம் வாயு நிரப்பப்பட்ட பலூன் காற்றில் மிதப்பது ஏன்?', options: ['ஹீலியம் காற்றை விட அடர்த்தி குறைவு; மேல்நோக்கு விசை எடையை விட அதிகம்', 'ஹீலியம் காற்றை விட அடர்த்தி அதிகம்', 'பலூனைச் சுற்றியுள்ள காற்றழுத்தம் சுழி', 'ஹீலியத்திற்கு நிறையே இல்லை'], explanation: 'பலூன் தன்னை விடக் கனமான காற்றை வெளியேற்றுகிறது; எனவே காற்றின் மிதப்பு விசை அதன் எடையை விட அதிகம்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.2, p. 37', answer: 0,
    en: { q: 'In a mercury barometer, the space between the mercury and the closed end of the tube contains', options: ['vacuum', 'air at atmospheric pressure', 'mercury vapour at high pressure', 'water vapour'], explanation: 'No air is trapped there, so it is a vacuum that exerts no pressure; the mercury column alone balances the air pressure.' },
    ta: { q: 'பாதரசக் காற்றழுத்தமானியில் பாதரசத்திற்கும் குழாயின் மூடிய முனைக்கும் இடையே உள்ள பகுதியில் இருப்பது', options: ['வெற்றிடம்', 'வளிமண்டல அழுத்தத்தில் உள்ள காற்று', 'அதிக அழுத்தத்தில் உள்ள பாதரச ஆவி', 'நீராவி'], explanation: 'அங்கு காற்று இல்லாததால் அது வெற்றிடம்; அது அழுத்தம் செலுத்தாது; பாதரசத் தம்பம் மட்டுமே காற்றழுத்தத்தைச் சமன் செய்கிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.4, p. 37', answer: 0,
    en: { q: 'The bulb at the lower end of a hydrometer is partly filled with lead shots or mercury so that it', options: ['floats upright in the liquid', 'sinks to the bottom of the jar', 'measures the temperature of the liquid', 'becomes lighter than the liquid'], explanation: 'The heavy bulb keeps the hydrometer vertical; the reading on the narrow stem gives the relative density.' },
    ta: { q: 'திரவமானியின் கீழ்முனைக் குமிழில் காரீயக் குண்டுகள் அல்லது பாதரசம் நிரப்பப்படுவதன் நோக்கம்', options: ['திரவத்தில் செங்குத்தாக மிதக்க', 'ஜாடியின் அடியில் மூழ்க', 'திரவத்தின் வெப்பநிலையை அளக்க', 'திரவத்தை விட இலேசாக்க'], explanation: 'கனமான குமிழ் திரவமானியைச் செங்குத்தாக நிறுத்துகிறது; குறுகிய குழாயின் அளவீடு ஒப்படர்த்தியைத் தருகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.5, p. 37', answer: 0,
    en: { q: 'According to the second law of flotation, for a floating body', options: ['the centre of gravity and the centre of buoyancy lie on the same vertical line', 'the centre of buoyancy lies above the water surface', 'the centre of gravity lies below the bottom of the body', 'the weight of the body is double the weight of fluid displaced'], explanation: 'The two laws: weight of the floating body = weight of fluid displaced; centre of gravity and centre of buoyancy are in one vertical line.' },
    ta: { q: 'மிதத்தல் விதிகளின் இரண்டாவது விதிப்படி மிதக்கும் பொருளுக்கு', options: ['ஈர்ப்பு மையமும் மிதப்பு மையமும் ஒரே செங்குத்துக் கோட்டில் அமையும்', 'மிதப்பு மையம் நீர்ப்பரப்பிற்கு மேலே அமையும்', 'ஈர்ப்பு மையம் பொருளின் அடிப்பகுதிக்குக் கீழே அமையும்', 'பொருளின் எடை வெளியேற்றப்பட்ட பாய்மத்தின் எடையைப் போல் இருமடங்கு'], explanation: 'இரு விதிகள்: மிதக்கும் பொருளின் எடை = வெளியேற்றப்பட்ட பாய்மத்தின் எடை; ஈர்ப்பு மையமும் மிதப்பு மையமும் ஒரே செங்குத்துக் கோட்டில்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VIII.1, p. 37', answer: 0,
    en: { q: 'A block of wood of mass 200 g floats on the surface of water. If the volume of the block is 300 cm³, the upthrust due to water is (g = 9.8 m s⁻²)', options: ['1.96 N', '2.94 N', '0.98 N', '19.6 N'], explanation: 'A floating body displaces its own weight of water: upthrust = 0.2 kg × 9.8 = 1.96 N (not the weight of 300 cm³ of water).' },
    ta: { q: '200 கிராம் எடை கொண்ட மரக்கட்டை ஒன்று நீரின் மேல் மிதக்கிறது. மரக்கட்டையின் பருமன் 300 செமீ³ எனில் நீரினால் ஏற்படும் மேல்நோக்கு விசை (g = 9.8 மீ வி⁻²)', options: ['1.96 N', '2.94 N', '0.98 N', '19.6 N'], explanation: 'மிதக்கும் பொருள் தன் எடைக்குச் சமமான நீரை வெளியேற்றும்: மேல்நோக்கு விசை = 0.2 × 9.8 = 1.96 N (300 செமீ³ நீரின் எடை அல்ல).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VIII.3, p. 37', answer: 0,
    en: { q: 'The density of water is 1 g cm⁻³. Its density in SI units is', options: ['1000 kg m⁻³', '1 kg m⁻³', '100 kg m⁻³', '0.001 kg m⁻³'], explanation: '1 g cm⁻³ = 10⁻³ kg ÷ 10⁻⁶ m³ = 1000 kg m⁻³.' },
    ta: { q: 'நீரின் அடர்த்தி 1 கி செமீ⁻³ எனில் அதன் அடர்த்தி SI அலகில்', options: ['1000 கிகி மீ⁻³', '1 கிகி மீ⁻³', '100 கிகி மீ⁻³', '0.001 கிகி மீ⁻³'], explanation: '1 கி செமீ⁻³ = 10⁻³ கிகி ÷ 10⁻⁶ மீ³ = 1000 கிகி மீ⁻³.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VIII.4, p. 37', answer: 0,
    en: { q: 'A piece of wood weighs 100 g in air and floats on water. Its apparent weight in water is', options: ['zero', '100 g', '50 g', '200 g'], explanation: 'For a floating body, upthrust = its full weight, so apparent weight = 100 g − 100 g = 0.' },
    ta: { q: '100 கி எடை கொண்ட மரக்கட்டை ஒன்று நீரில் மிதக்கிறது எனில் அதன் தோற்ற எடை', options: ['சுழி', '100 கி', '50 கி', '200 கி'], explanation: 'மிதக்கும் பொருளுக்கு மேல்நோக்கு விசை = முழு எடை; தோற்ற எடை = 100 − 100 = 0.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IX.2, p. 37', answer: 0,
    en: { q: 'A fish manages to rise up and move down in water by', options: ['changing the amount of air in its swim bladder, which changes its average density', 'changing its mass by drinking water', 'changing the density of the surrounding water', 'moving its tail faster only'], explanation: 'More air in the swim bladder lowers its average density so it rises; less air makes it denser so it sinks.' },
    ta: { q: 'மீன் நீரில் மேலெழும்பவும் கீழே செல்லவும் உதவுவது', options: ['அதன் காற்றுப்பையில் உள்ள காற்றின் அளவை மாற்றி சராசரி அடர்த்தியை மாற்றுவது', 'நீரைக் குடித்து நிறையை மாற்றுவது', 'சுற்றியுள்ள நீரின் அடர்த்தியை மாற்றுவது', 'வாலை வேகமாக அசைப்பது மட்டும்'], explanation: 'காற்றுப்பையில் காற்று அதிகமானால் சராசரி அடர்த்தி குறைந்து மேலே எழும்; காற்று குறைந்தால் அடர்த்தி கூடி கீழே செல்லும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IX.4, p. 37', answer: 0,
    en: { q: 'A boat with a hole in the bottom eventually sinks because', options: ['water fills it, so its total weight becomes more than the weight of water it can displace', 'the hole makes the water around it less dense', 'atmospheric pressure inside the boat drops to zero', 'the hole reduces the mass of the boat'], explanation: 'As water enters, the average density of boat + water rises above that of water, so the upthrust can no longer balance the weight.' },
    ta: { q: 'அடியில் துளையுள்ள படகு இறுதியில் மூழ்குவதற்குக் காரணம்', options: ['நீர் உள்ளே நிரம்புவதால் மொத்த எடை, அது வெளியேற்றக்கூடிய நீரின் எடையை விட அதிகமாகிறது', 'துளை சுற்றியுள்ள நீரின் அடர்த்தியைக் குறைக்கிறது', 'படகினுள் வளிமண்டல அழுத்தம் சுழியாகிறது', 'துளை படகின் நிறையைக் குறைக்கிறது'], explanation: 'நீர் நுழைவதால் படகு + நீரின் சராசரி அடர்த்தி நீரை விட அதிகமாகிறது; மேல்நோக்கு விசை எடையைச் சமன் செய்ய முடிவதில்லை.' },
  },
  {
    difficulty: 'medium', source: 'Book example (Problem 1), p. 27', answer: 0,
    en: { q: 'A man of mass 90 kg stands on a floor. The total area of contact of his two feet with the floor is 0.036 m². What pressure does he exert? (g = 10 m s⁻²)', options: ['25000 Pa', '2500 Pa', '3240 Pa', '32.4 Pa'], explanation: 'Thrust F = mg = 900 N; P = F ÷ A = 900 ÷ 0.036 = 25000 Pa.' },
    ta: { q: '90 கிகி நிறையுள்ள ஒருவர் தரையில் நிற்கிறார். அவரது இரு பாதங்களும் தரையைத் தொடும் மொத்தப் பரப்பு 0.036 மீ². அவர் தரையின் மீது செலுத்தும் அழுத்தம் (g = 10 மீ வி⁻²)', options: ['25000 பாஸ்கல்', '2500 பாஸ்கல்', '3240 பாஸ்கல்', '32.4 பாஸ்கல்'], explanation: 'உந்து விசை F = mg = 900 N; P = F ÷ A = 900 ÷ 0.036 = 25000 பாஸ்கல்.' },
  },
  {
    difficulty: 'medium', source: 'Book example (Problem 2), p. 29', answer: 0,
    en: { q: 'Calculate the pressure exerted by a column of kerosene of height 0.85 m (density 800 kg m⁻³, g = 10 m s⁻²).', options: ['6800 Pa', '8500 Pa', '680 Pa', '9410 Pa'], explanation: 'P = hρg = 0.85 × 800 × 10 = 6800 Pa; the same column of water gives 8500 Pa.' },
    ta: { q: '0.85 மீ உயர மண்ணெண்ணெய்த் தம்பம் (அடர்த்தி 800 கிகி மீ⁻³, g = 10 மீ வி⁻²) ஏற்படுத்தும் அழுத்தத்தைக் கணக்கிடுக.', options: ['6800 பாஸ்கல்', '8500 பாஸ்கல்', '680 பாஸ்கல்', '9410 பாஸ்கல்'], explanation: 'P = hρg = 0.85 × 800 × 10 = 6800 பாஸ்கல்; அதே உயர நீர்த் தம்பம் 8500 பாஸ்கல் தரும்.' },
  },
  {
    difficulty: 'medium', source: 'Book example (Problem 5), p. 33', answer: 0,
    en: { q: 'A block of mystery material is 12 cm long, 11 cm wide and 3.5 cm thick, with a mass of 1155 g. What is its density, and will it float in water?', options: ['2.5 g cm⁻³; it sinks', '2.5 g cm⁻³; it floats', '0.4 g cm⁻³; it floats', '0.4 g cm⁻³; it sinks'], explanation: 'Volume = 12 × 11 × 3.5 = 462 cm³; density = 1155 ÷ 462 = 2.5 g cm⁻³, denser than water, so it sinks.' },
    ta: { q: '12 செமீ நீளமும், 11 செமீ அகலமும், 3.5 செமீ தடிமனும் கொண்ட ஒரு விநோதமான பொருளின் நிறை 1155 கி. அதன் அடர்த்தி யாது? அது தண்ணீரில் மிதக்குமா? மூழ்குமா?', options: ['2.5 கி செமீ⁻³; மூழ்கும்', '2.5 கி செமீ⁻³; மிதக்கும்', '0.4 கி செமீ⁻³; மிதக்கும்', '0.4 கி செமீ⁻³; மூழ்கும்'], explanation: 'பருமன் = 12 × 11 × 3.5 = 462 செமீ³; அடர்த்தி = 1155 ÷ 462 = 2.5 கி செமீ⁻³; நீரை விட அதிகம்; எனவே மூழ்கும்.' },
  },
  {
    difficulty: 'medium', source: 'Activity 5, §3.5, p. 32', answer: 0,
    en: { q: 'A flask of mass 80 g weighs 280 g when filled with 250 cm³ of kerosene. The density of kerosene is', options: ['0.8 g cm⁻³', '1.12 g cm⁻³', '1.0 g cm⁻³', '0.32 g cm⁻³'], explanation: 'Mass of kerosene = 280 − 80 = 200 g; density = 200 ÷ 250 = 0.8 g cm⁻³ (forgetting the flask gives 1.12).' },
    ta: { q: '80 கி நிறையுள்ள குடுவையில் 250 செமீ³ மண்ணெண்ணெய் நிரப்பியபோது நிறை 280 கி. மண்ணெண்ணெயின் அடர்த்தி', options: ['0.8 கி செமீ⁻³', '1.12 கி செமீ⁻³', '1.0 கி செமீ⁻³', '0.32 கி செமீ⁻³'], explanation: 'மண்ணெண்ணெயின் நிறை = 280 − 80 = 200 கி; அடர்த்தி = 200 ÷ 250 = 0.8 கி செமீ⁻³ (குடுவையைக் கழிக்காவிட்டால் 1.12 வரும்).' },
  },
  {
    difficulty: 'medium', source: '§3.6.1, p. 34', answer: 0,
    en: { q: 'In a Cartesian diver experiment, pressing the sides of the bottle makes the diver sink because', options: ['extra water enters the diver, increasing its average density', 'the water in the bottle becomes denser', 'air enters the diver, making it heavier', 'the diver loses mass'], explanation: 'The squeeze pushes water into the diver, compressing its air; its average density rises above that of water and it sinks.' },
    ta: { q: 'கார்டீசியன் மூழ்கி சோதனையில் புட்டியை அழுத்தும்போது மூழ்கி கீழே செல்வதற்குக் காரணம்', options: ['கூடுதல் நீர் மூழ்கியினுள் நுழைந்து அதன் சராசரி அடர்த்தியை அதிகரிக்கிறது', 'புட்டியில் உள்ள நீரின் அடர்த்தி அதிகரிக்கிறது', 'காற்று மூழ்கியினுள் நுழைந்து அதைக் கனமாக்குகிறது', 'மூழ்கியின் நிறை குறைகிறது'], explanation: 'அழுத்தும்போது நீர் மூழ்கியினுள் நுழைந்து காற்றை அமுக்குகிறது; சராசரி அடர்த்தி நீரை விட அதிகமாகி மூழ்குகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Activity 3, §3.2.2, p. 28', answer: 0,
    en: { q: 'Holes are punched in a vertical line on the side of a can filled with water. Water squirts out with the greatest speed from', options: ['the lowest hole', 'the highest hole', 'the middle hole', 'all holes equally'], explanation: 'Pressure increases with depth, so the bottom hole has the greatest pressure.' },
    ta: { q: 'நீர் நிரப்பிய குவளையின் பக்கவாட்டில் செங்குத்து வரிசையில் துளைகள் இடப்பட்டுள்ளன. நீர் மிக அதிக வேகத்துடன் வெளியேறுவது', options: ['மிகக் கீழே உள்ள துளை', 'மிக மேலே உள்ள துளை', 'நடுவில் உள்ள துளை', 'எல்லாத் துளைகளிலும் சமமாக'], explanation: 'ஆழம் அதிகரிக்க அழுத்தம் அதிகரிப்பதால் அடியில் உள்ள துளையில் அழுத்தம் அதிகம்.' },
  },
  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: '§3.4.1, p. 31 (Fig. 3.9)', imageUrl: `${IMG}/hydraulic-press.png`, answer: 0,
    en: { q: 'In the hydraulic press shown, the small piston has area 0.01 m² and the large piston 0.5 m². A force of 100 N is applied on the small piston. What force acts on the large piston?', options: ['5000 N', '50 N', '500 N', '2 N'], explanation: 'F₂ = F₁ × A₂ ÷ A₁ = 100 × 0.5 ÷ 0.01 = 5000 N. The press multiplies the force 50 times.' },
    ta: { q: 'படத்தில் உள்ள நீரியல் அழுத்தியில் சிறிய பிஸ்டனின் பரப்பு 0.01 மீ², பெரிய பிஸ்டனின் பரப்பு 0.5 மீ². சிறிய பிஸ்டனின் மீது 100 N விசை செலுத்தப்படுகிறது. பெரிய பிஸ்டனின் மீது செயல்படும் விசை எவ்வளவு?', options: ['5000 N', '50 N', '500 N', '2 N'], explanation: 'F₂ = F₁ × A₂ ÷ A₁ = 100 × 0.5 ÷ 0.01 = 5000 N. அழுத்தி விசையை 50 மடங்கு பெருக்குகிறது.' },
  },
  {
    difficulty: 'hard', source: '§3.2.3, p. 28 (Fig. 3.4)', imageUrl: `${IMG}/liquid-column.png`, answer: 0,
    en: { q: 'A wide vessel and a narrow vessel are filled with water to the same height h. How does the pressure at the bottom compare?', options: ['It is the same in both', 'It is greater in the wide vessel', 'It is greater in the narrow vessel', 'It depends on the total mass of water'], explanation: 'P = hρg does not contain the area; with equal h and the same liquid, the pressure is equal.' },
    ta: { q: 'அகன்ற பாத்திரம் ஒன்றும் குறுகிய பாத்திரம் ஒன்றும் ஒரே உயரம் h வரை நீரால் நிரப்பப்பட்டுள்ளன. அடிப்பகுதியில் உள்ள அழுத்தம்', options: ['இரண்டிலும் சமம்', 'அகன்ற பாத்திரத்தில் அதிகம்', 'குறுகிய பாத்திரத்தில் அதிகம்', 'நீரின் மொத்த நிறையைப் பொறுத்தது'], explanation: 'P = hρg-இல் பரப்பு இல்லை; h-உம் திரவமும் ஒன்றே என்பதால் அழுத்தம் சமம்.' },
  },
  {
    difficulty: 'hard', source: '§3.3.1, p. 30', answer: 0,
    en: { q: 'On a day when atmospheric pressure is 98.6 kPa, how high will the mercury stand in a barometer? (ρ of mercury = 13600 kg m⁻³, g = 9.8 m s⁻²)', options: ['about 740 mm', 'about 760 mm', 'about 986 mm', 'about 724 mm'], explanation: 'h = P ÷ (ρg) = 98600 ÷ (13600 × 9.8) ≈ 0.74 m = 740 mm.' },
    ta: { q: 'வளிமண்டல அழுத்தம் 98.6 கிலோ பாஸ்கல் உள்ள நாளில் காற்றழுத்தமானியில் பாதரசத்தின் உயரம் எவ்வளவு? (பாதரசத்தின் ρ = 13600 கிகி மீ⁻³, g = 9.8 மீ வி⁻²)', options: ['ஏறக்குறைய 740 மிமீ', 'ஏறக்குறைய 760 மிமீ', 'ஏறக்குறைய 986 மிமீ', 'ஏறக்குறைய 724 மிமீ'], explanation: 'h = P ÷ (ρg) = 98600 ÷ (13600 × 9.8) ≈ 0.74 மீ = 740 மிமீ.' },
  },
  {
    difficulty: 'hard', source: '§3.5.1, p. 32', answer: 0,
    en: { q: 'The density of a liquid is 13600 kg m⁻³. Its relative density is', options: ['13.6', '136', '1.36', '13600'], explanation: 'RD = 13600 ÷ 1000 (density of water at 4 °C) = 13.6, with no unit.' },
    ta: { q: 'ஒரு திரவத்தின் அடர்த்தி 13600 கிகி மீ⁻³. அதன் ஒப்படர்த்தி', options: ['13.6', '136', '1.36', '13600'], explanation: 'ஒப்படர்த்தி = 13600 ÷ 1000 (4 °C-இல் நீரின் அடர்த்தி) = 13.6; அலகு இல்லை.' },
  },
  {
    difficulty: 'hard', source: '§3.5.3, p. 33', answer: 0,
    en: { q: 'A block 10 cm × 5 cm × 4 cm has a mass of 300 g. What is its density, and will it float in water?', options: ['1.5 g cm⁻³; it sinks', '1.5 g cm⁻³; it floats', '0.67 g cm⁻³; it floats', '0.67 g cm⁻³; it sinks'], explanation: 'Volume = 200 cm³, density = 300 ÷ 200 = 1.5 g cm⁻³ > 1 g cm⁻³, so it sinks.' },
    ta: { q: '10 செமீ × 5 செமீ × 4 செமீ அளவுள்ள ஒரு கட்டையின் நிறை 300 கி. அதன் அடர்த்தி என்ன? அது நீரில் மிதக்குமா?', options: ['1.5 கி செமீ⁻³; மூழ்கும்', '1.5 கி செமீ⁻³; மிதக்கும்', '0.67 கி செமீ⁻³; மிதக்கும்', '0.67 கி செமீ⁻³; மூழ்கும்'], explanation: 'பருமன் = 200 செமீ³; அடர்த்தி = 300 ÷ 200 = 1.5 கி செமீ⁻³ > 1; எனவே மூழ்கும்.' },
  },
  {
    difficulty: 'hard', source: '§3.8, p. 35', answer: 0,
    en: { q: 'A wooden block of mass 150 g and volume 250 cm³ floats on water. The upthrust on it is (g = 10 m s⁻²)', options: ['1.5 N', '2.5 N', '1 N', '4 N'], explanation: 'A floating body displaces fluid equal to its own weight, so upthrust = weight = 0.15 kg × 10 = 1.5 N (not the full 250 cm³).' },
    ta: { q: '150 கி நிறையும் 250 செமீ³ பருமனும் கொண்ட மரக்கட்டை நீரில் மிதக்கிறது. அதன் மீதான மேல்நோக்கு விசை (g = 10 மீ வி⁻²)', options: ['1.5 N', '2.5 N', '1 N', '4 N'], explanation: 'மிதக்கும் பொருள் தன் எடைக்குச் சமமான பாய்மத்தை வெளியேற்றும்; மேல்நோக்கு விசை = எடை = 0.15 × 10 = 1.5 N.' },
  },
  {
    difficulty: 'hard', source: '§3.4.1, p. 31', answer: 0,
    en: { q: 'Assertion: A hydraulic lift can raise a car with a small force. Reason: Pressure applied on the small piston is transmitted equally to the large piston, which has a larger area.', options: AR_EN, explanation: "Both are true: by Pascal's law F₂ = F₁ × A₂ ÷ A₁, so the larger area gives a larger force – the reason explains the assertion." },
    ta: { q: 'கூற்று: நீரியல் தூக்கி சிறிய விசையைக் கொண்டு காரைத் தூக்க முடியும். காரணம்: சிறிய பிஸ்டனின் மீது செலுத்தப்படும் அழுத்தம், அதிகப் பரப்புடைய பெரிய பிஸ்டனுக்குச் சமமாகக் கடத்தப்படுகிறது.', options: AR_TA, explanation: 'இரண்டும் சரி: பாஸ்கல் விதிப்படி F₂ = F₁ × A₂ ÷ A₁; அதிகப் பரப்பு அதிக விசை தருகிறது; காரணம் கூற்றை விளக்குகிறது.' },
  },
  {
    difficulty: 'hard', source: '§3.6–3.8, pp. 34–35', answer: 0,
    en: { q: 'Assertion: An iron nail sinks in water, but a ship made of iron floats. Reason: The ship displaces a large volume of water whose weight equals the weight of the ship.', options: AR_EN, explanation: "The ship's shape lets it displace water equal to its own weight (law of flotation), so the reason explains the assertion." },
    ta: { q: 'கூற்று: இரும்பு ஆணி நீரில் மூழ்குகிறது; ஆனால் இரும்பால் ஆன கப்பல் மிதக்கிறது. காரணம்: கப்பல் தன் எடைக்குச் சமமான எடையுள்ள அதிகப் பருமன் நீரை வெளியேற்றுகிறது.', options: AR_TA, explanation: 'கப்பலின் வடிவம் தன் எடைக்குச் சமமான நீரை வெளியேற்ற உதவுகிறது (மிதத்தல் விதி); காரணம் கூற்றை விளக்குகிறது.' },
  },
  {
    difficulty: 'hard', source: '§3.5.3, p. 33', answer: 0,
    en: { q: 'One ice cube is put in water and another in alcohol. Ice is less dense than water but denser than alcohol. What will you observe?', options: ['It floats in water and sinks in alcohol', 'It sinks in both', 'It floats in both', 'It sinks in water and floats in alcohol'], explanation: 'An object floats in a liquid denser than itself and sinks in a less dense one.' },
    ta: { q: 'ஒரு பனிக்கட்டி ஒரு குவளை நீரிலும், மற்றொன்று ஒரு குவளை ஆல்கஹாலிலும் போடப்படுகிறது. பனிக்கட்டியின் அடர்த்தி நீரை விடக் குறைவு; ஆல்கஹாலை விட அதிகம். நீ காண்பது', options: ['நீரில் மிதக்கும்; ஆல்கஹாலில் மூழ்கும்', 'இரண்டிலும் மூழ்கும்', 'இரண்டிலும் மிதக்கும்', 'நீரில் மூழ்கும்; ஆல்கஹாலில் மிதக்கும்'], explanation: 'தன்னை விட அடர்த்தி அதிகமான திரவத்தில் பொருள் மிதக்கும்; குறைவானதில் மூழ்கும்.' },
  },
  {
    difficulty: 'hard', source: '§3.1, p. 27', answer: 0,
    en: { q: 'A box weighing 600 N can rest on a face of area 0.2 m² or a face of area 0.05 m². The pressure it exerts when resting on the smaller face is', options: ['12000 Pa', '3000 Pa', '120 Pa', '30 Pa'], explanation: 'P = F ÷ A = 600 ÷ 0.05 = 12000 Pa – four times the 3000 Pa on the larger face.' },
    ta: { q: '600 N எடையுள்ள ஒரு பெட்டியை 0.2 மீ² பரப்புள்ள முகத்திலோ 0.05 மீ² பரப்புள்ள முகத்திலோ வைக்கலாம். சிறிய முகத்தில் வைக்கும்போது அது ஏற்படுத்தும் அழுத்தம்', options: ['12000 பாஸ்கல்', '3000 பாஸ்கல்', '120 பாஸ்கல்', '30 பாஸ்கல்'], explanation: 'P = F ÷ A = 600 ÷ 0.05 = 12000 பாஸ்கல்; பெரிய முகத்தில் உள்ள 3000 பாஸ்கலைப் போல நான்கு மடங்கு.' },
  },
  // Hard – textbook exercises and examples
  {
    difficulty: 'hard', source: 'Book exercise I.4, p. 36', answer: 0,
    en: { q: 'An empty plastic bottle closed with an airtight stopper is pushed down into a bucket of water. As it is pushed down, there is an increasing force on its bottom. Which of these explain it?\n(i) More volume of liquid is displaced.\n(ii) More weight of liquid is displaced.\n(iii) Pressure increases with depth.', options: ['(i), (ii) and (iii)', '(i) and (ii) only', '(iii) only', '(ii) and (iii) only'], explanation: 'Pushing it deeper displaces a larger volume (and so weight) of water, and the bottom meets greater pressure at greater depth – all three apply (the book’s "all the above").' },
    ta: { q: 'நீருள்ள வாளியில், காற்றுப் புகாத அடைப்பானால் மூடப்பட்ட காலி பிளாஸ்டிக் பாட்டில் ஒன்று கீழ்நோக்கி அழுத்தப்படுகிறது. பாட்டிலின் அடிப்பகுதியில் செயல்படும் விசை அதிகரிக்கிறது. இதற்கான காரணங்கள் எவை?\n(i) அதிக பருமனுள்ள நீர் வெளியேற்றப்படுகிறது.\n(ii) அதிக எடையுள்ள நீர் வெளியேற்றப்படுகிறது.\n(iii) ஆழம் அதிகரிக்கும் போது அழுத்தம் அதிகரிக்கிறது.', options: ['(i), (ii), (iii)', '(i), (ii) மட்டும்', '(iii) மட்டும்', '(ii), (iii) மட்டும்'], explanation: 'ஆழமாக அழுத்தும்போது அதிகப் பருமன் (எனவே அதிக எடை) நீர் வெளியேறுகிறது; ஆழத்தில் அழுத்தமும் அதிகம் – மூன்றும் பொருந்தும் (பாடநூலின் "மேலே கூறிய யாவும்").' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VII.1, p. 37', answer: 0,
    en: { q: 'Assertion: To float, a body must displace liquid whose weight is equal to its actual weight. Reason: The body will then experience no net downward force.', options: AR_EN, explanation: 'When upthrust (weight of liquid displaced) equals the weight, the net force is zero and the body floats – the reason explains the assertion.' },
    ta: { q: 'கூற்று: ஒரு பொருள் மிதப்பதற்கு, தனது எடைக்குச் சமமான எடையுள்ள நீரை வெளியேற்ற வேண்டும். காரணம்: அப்போது அப்பொருள் எந்தவொரு நிகர கீழ்நோக்கிய விசையையும் உணர்வதில்லை.', options: AR_TA, explanation: 'மேல்நோக்கு விசை (வெளியேற்றிய நீரின் எடை) பொருளின் எடைக்குச் சமமானால் நிகர விசை சுழி; பொருள் மிதக்கும் – காரணம் கூற்றை விளக்குகிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VII.2, p. 37', answer: 1,
    en: { q: "Assertion: Pascal's law is the working principle of a hydraulic lift. Reason: Pressure is thrust per unit area.", options: AR_EN, explanation: 'Both are true, but the definition of pressure does not explain the lift; it works because pressure is transmitted equally through the liquid.' },
    ta: { q: 'கூற்று: நீரியல் தூக்கி பாஸ்கல் விதியின் அடிப்படையில் செயல்படுகிறது. காரணம்: ஓரலகு பரப்பில் செயல்படும் செங்குத்து விசையே அழுத்தம் ஆகும்.', options: AR_TA, explanation: 'இரண்டும் சரி; ஆனால் அழுத்தத்தின் வரையறை தூக்கியின் செயல்பாட்டை விளக்கவில்லை; அழுத்தம் திரவத்தில் சமமாகக் கடத்தப்படுவதே காரணம்.' },
  },
  {
    difficulty: 'hard', source: 'Book example (Problem 3), p. 30', answer: 0,
    en: { q: 'A mercury barometer in a laboratory shows a 732 mm vertical column of mercury. Calculate the atmospheric pressure. (ρ = 1.36 × 10⁴ kg m⁻³, g = 9.8 m s⁻²)', options: ['9.76 × 10⁴ Pa', '1.013 × 10⁵ Pa', '9.76 × 10⁷ Pa', '7.32 × 10⁴ Pa'], explanation: 'P = hρg = 0.732 × 1.36 × 10⁴ × 9.8 ≈ 9.76 × 10⁴ Pa (using 732 instead of 0.732 m gives the 10⁷ value).' },
    ta: { q: 'இயற்பியல் ஆய்வகத்தில் உள்ள பாதரசக் காற்றழுத்தமானி 732 மிமீ செங்குத்துப் பாதரசத் தம்பத்தைக் காட்டுகிறது. வளிமண்டல அழுத்தத்தைக் கணக்கிடுக. (ρ = 1.36 × 10⁴ கிகி மீ⁻³, g = 9.8 மீ வி⁻²)', options: ['9.76 × 10⁴ பாஸ்கல்', '1.013 × 10⁵ பாஸ்கல்', '9.76 × 10⁷ பாஸ்கல்', '7.32 × 10⁴ பாஸ்கல்'], explanation: 'P = hρg = 0.732 × 1.36 × 10⁴ × 9.8 ≈ 9.76 × 10⁴ பாஸ்கல் (மீட்டருக்குப் பதில் 732 என எடுத்தால் 10⁷ வரும்).' },
  },
  {
    difficulty: 'hard', source: 'Book example (Problem 4), p. 31', answer: 0,
    en: { q: 'A hydraulic system lifts a 2000 kg vehicle sitting on a piston of area 0.5 m². The force is applied on a piston of area 0.03 m². What is the minimum force needed? (g = 9.8 m s⁻²)', options: ['1176 N', '19600 N', '326667 N', '120 N'], explanation: 'Weight = 2000 × 9.8 = 19600 N; F = 19600 × 0.03 ÷ 0.5 = 1176 N.' },
    ta: { q: '2000 கிகி நிறை கொண்ட வாகனத்தைத் தூக்குவதற்கு நீரியல் அமைப்பு பயன்படுத்தப்படுகிறது. வாகனம் இருக்கும் பிஸ்டனின் பரப்பளவு 0.5 மீ², விசை செயல்படும் பிஸ்டனின் பரப்பளவு 0.03 மீ² எனில், வாகனத்தைத் தூக்குவதற்குத் தேவைப்படும் குறைந்த அளவு விசை யாது? (g = 9.8 மீ வி⁻²)', options: ['1176 N', '19600 N', '326667 N', '120 N'], explanation: 'எடை = 2000 × 9.8 = 19600 N; F = 19600 × 0.03 ÷ 0.5 = 1176 N.' },
  },
  {
    difficulty: 'hard', source: '§3.3.1, p. 30', answer: 0,
    en: { q: 'On a typical day at sea level, a barometer shows 760 mm of mercury (ρ = 13600 kg m⁻³, g = 9.8 m s⁻²). The atmospheric pressure is', options: ['1.013 × 10⁵ Pa', '1.013 × 10³ Pa', '7.6 × 10⁵ Pa', '1.36 × 10⁴ Pa'], explanation: 'P = hρg = 0.76 × 13600 × 9.8 ≈ 1.013 × 10⁵ Pa = 1 atm = 101.3 kPa.' },
    ta: { q: 'கடல் மட்டத்தில் ஒரு சாதாரண நாளில் காற்றழுத்தமானி 760 மிமீ பாதரசத்தைக் காட்டுகிறது (ρ = 13600 கிகி மீ⁻³, g = 9.8 மீ வி⁻²). வளிமண்டல அழுத்தம்', options: ['1.013 × 10⁵ பாஸ்கல்', '1.013 × 10³ பாஸ்கல்', '7.6 × 10⁵ பாஸ்கல்', '1.36 × 10⁴ பாஸ்கல்'], explanation: 'P = hρg = 0.76 × 13600 × 9.8 ≈ 1.013 × 10⁵ பாஸ்கல் = 1 atm = 101.3 கிலோ பாஸ்கல்.' },
  },
];
