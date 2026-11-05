// Tamil Nadu State Board, 9th Science, Unit 3 – Fluids (பாய்மங்கள்).
// Pilot chapter for the full textbook question bank: original questions written
// from the textbook content, every section covered at three difficulty levels.
// Tamil wording follows the terms used in the Tamil-medium textbook.
// source = section and printed page of the English-medium book (Tamil-medium pages match).

export interface BankQuestion {
  difficulty: 'easy' | 'medium' | 'hard';
  source: string;
  imageUrl?: string;
  en: { q: string; options: [string, string, string, string]; explanation: string };
  ta: { q: string; options: [string, string, string, string]; explanation: string };
  answer: 0 | 1 | 2 | 3;
}

const IMG = '/content/9/state_board/science/03';

// Standard assertion–reason options, as worded in the textbooks
const AR_EN: [string, string, string, string] = [
  'Both assertion and reason are true, and the reason is the correct explanation of the assertion.',
  'Both assertion and reason are true, but the reason is not the correct explanation of the assertion.',
  'The assertion is true but the reason is false.',
  'The assertion is false but the reason is true.',
];
const AR_TA: [string, string, string, string] = [
  'கூற்று மற்றும் காரணம் இரண்டும் சரி; காரணம் கூற்றுக்கான சரியான விளக்கம்.',
  'கூற்று மற்றும் காரணம் இரண்டும் சரி; ஆனால் காரணம் கூற்றுக்கான சரியான விளக்கம் அல்ல.',
  'கூற்று சரி; காரணம் தவறு.',
  'கூற்று தவறு; காரணம் சரி.',
];

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
    ta: { q: 'ஒரு பனிக்கட்டி நீரிலும் மற்றொன்று சாராயத்திலும் இடப்படுகிறது. பனிக்கட்டியின் அடர்த்தி நீரை விடக் குறைவு; சாராயத்தை விட அதிகம். நீ காண்பது', options: ['நீரில் மிதக்கும்; சாராயத்தில் மூழ்கும்', 'இரண்டிலும் மூழ்கும்', 'இரண்டிலும் மிதக்கும்', 'நீரில் மூழ்கும்; சாராயத்தில் மிதக்கும்'], explanation: 'தன்னை விட அடர்த்தி அதிகமான திரவத்தில் பொருள் மிதக்கும்; குறைவானதில் மூழ்கும்.' },
  },
  {
    difficulty: 'hard', source: '§3.1, p. 27', answer: 0,
    en: { q: 'A box weighing 600 N can rest on a face of area 0.2 m² or a face of area 0.05 m². The pressure it exerts when resting on the smaller face is', options: ['12000 Pa', '3000 Pa', '120 Pa', '30 Pa'], explanation: 'P = F ÷ A = 600 ÷ 0.05 = 12000 Pa – four times the 3000 Pa on the larger face.' },
    ta: { q: '600 N எடையுள்ள ஒரு பெட்டியை 0.2 மீ² பரப்புள்ள முகத்திலோ 0.05 மீ² பரப்புள்ள முகத்திலோ வைக்கலாம். சிறிய முகத்தில் வைக்கும்போது அது ஏற்படுத்தும் அழுத்தம்', options: ['12000 பாஸ்கல்', '3000 பாஸ்கல்', '120 பாஸ்கல்', '30 பாஸ்கல்'], explanation: 'P = F ÷ A = 600 ÷ 0.05 = 12000 பாஸ்கல்; பெரிய முகத்தில் உள்ள 3000 பாஸ்கலைப் போல நான்கு மடங்கு.' },
  },
];
