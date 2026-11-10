// Tamil Nadu State Board, 9th Social Science, Unit 12 – Geography: Lithosphere – I: Endogenetic Processes (நிலக்கோளம் – I: புவி அகச்செயல்பாடுகள்).
// Book exercise questions (match / statement items turned into MCQs) plus our own questions covering every section.
// source = section or exercise and printed page of the English-medium book (Geography Unit 1).

import { BankQuestion, AR_EN, AR_TA } from './types';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.1, p. 165', answer: 0,
    en: { q: '_____ is the rigid outer layer of the Earth.', options: ['Crust', 'Core', 'Mantle', 'Inner core'], explanation: 'The crust is the solid and rigid outer layer of the Earth, where we live.' },
    ta: { q: 'புவியின் திடமான தன்மைகொண்ட மேல்புற அடுக்கை _____ என்று அழைக்கின்றோம்.', options: ['புவி மேலோடு', 'கருவம்', 'கவசம்', 'உட்கரு'], explanation: 'புவி மேலோடு புவியின் திடமான, கடினமான மேல் அடுக்கு; நாம் வாழ்வது இதன் மீதுதான்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.2, p. 165', answer: 0,
    en: { q: '_____ layer is made up of liquid iron.', options: ['Outer core', 'Inner core', 'Mantle', 'Crust'], explanation: 'The core is divided into a solid inner core and a liquid outer core; the core is made mainly of nickel and iron.' },
    ta: { q: 'புவியினுள் உருகிய இரும்பைக் கொண்ட அடுக்கை _____ என்று அழைக்கின்றோம்.', options: ['வெளிக்கரு', 'கருவம்', 'கவசம்', 'மேலோடு'], explanation: 'கருவத்தில் உட்கருவம் திடநிலையிலும், வெளிக்கருவம் திரவ நிலையிலும் உள்ளது; கருவத்தில் நிக்கலும் இரும்பும் அதிகம்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.8, p. 165', answer: 0,
    en: { q: '_____ refers to a bowl-shaped depression found at the top of the volcano.', options: ['Crater', 'Vent', 'Chamber', 'Volcanic cone'], explanation: 'A crater is a bowl-shaped depression at the top of the volcano through which the magma flows out.' },
    ta: { q: 'எரிமலை மேல்பகுதியில் கிண்ணம் போன்ற பள்ளமான அமைப்பினை _____ என்று அழைக்கின்றோம்.', options: ['எரிமலை வாய்', 'துவாரம்', 'பாறைக்குழம்புத் தேக்கம்', 'எரிமலைக் கூம்பு'], explanation: 'எரிமலை உச்சியில் காணப்படும் கிண்ணம் போன்ற வடிவமுடைய பள்ளமே எரிமலை வாய் ஆகும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.9, p. 165', answer: 0,
    en: { q: 'The point of origin of an Earthquake is called the _____', options: ['focus', 'epicentre', 'seismic wave', 'magnitude'], explanation: 'The point of origin of an Earthquake is the focus (hypocentre); the epicentre is the point on the surface directly above it.' },
    ta: { q: 'புவி அதிர்வு உருவாகும் புள்ளி _____ என்று அழைக்கப்படுகிறது.', options: ['கீழ் மையம்', 'மேல் மையம்', 'புவி அதிர்வு அலைகள்', 'புவி அதிர்வின் தீவிரம்'], explanation: 'புவிக்குள் நில அதிர்வு உருவாகும் புள்ளி கீழ்மையம்; அதன் நேர் மேலே புவியின் மேற்பரப்பில் உள்ளது மேல்மையம்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.6, p. 165', answer: 0,
    en: { q: 'Many million years ago, India was a part of the super continent _____', options: ['Gondwana', 'Laurasia', 'Panthalasa', 'Pangea'], explanation: 'About 250 million years ago the Indian Plate was a part of Gondwana land, with Africa, Australia, Antarctica and South America.' },
    ta: { q: 'பல மில்லியன் ஆண்டுகளுக்கு முன், இந்தியா _____ கண்டத்தின் ஒரு பகுதியாக இருந்தது.', options: ['கோண்டுவானா', 'லாரேஷியா', 'பாந்தலாசா', 'பாஞ்சியா'], explanation: '250 மில்லியன் ஆண்டுகளுக்கு முன் இந்தியப் புவித்தட்டு கோண்டுவானா நிலப்பகுதியின் ஒரு பகுதியாக இருந்தது.' },
  },
  {
    difficulty: 'easy', source: '§1.1, p. 157', answer: 0,
    en: { q: 'The Earth’s surface, where the four spheres interact, has an area of', options: ['510 million sq.km', '361 million sq.km', '149 million sq.km', '400 million sq.km'], explanation: 'Earth’s surface is a vast area of 510 million sq.km, where the four spheres of the Earth interact.' },
    ta: { q: 'புவியின் நான்கு கோளங்களும் தொடர்புகொள்ளும் புவியின் மேற்பரப்பின் மொத்தப் பரப்பளவு', options: ['510 மில்லியன் சதுர கிலோமீட்டர்', '361 மில்லியன் சதுர கிலோமீட்டர்', '149 மில்லியன் சதுர கிலோமீட்டர்', '400 மில்லியன் சதுர கிலோமீட்டர்'], explanation: 'புவியின் மேற்பரப்பின் மொத்தப் பரப்பளவு 510 மில்லியன் சதுர கிலோமீட்டர் ஆகும்.' },
  },
  {
    difficulty: 'easy', source: '§1.1, p. 157', answer: 0,
    en: { q: 'Which of the following is the biotic sphere of the Earth?', options: ['Biosphere', 'Lithosphere', 'Atmosphere', 'Hydrosphere'], explanation: 'The lithosphere, atmosphere and hydrosphere are abiotic spheres; the biosphere is the biotic sphere where life exists.' },
    ta: { q: 'கீழ்க்கண்டவற்றுள் உயிரினங்கள் வாழும் கோளம் எது?', options: ['உயிர்க்கோளம்', 'நிலக்கோளம்', 'வளிக்கோளம்', 'நீர்க்கோளம்'], explanation: 'நிலக்கோளம், வளிக்கோளம், நீர்க்கோளம் ஆகியவை உயிரற்ற கோளங்கள்; உயிரினங்கள் வாழும் கோளம் உயிர்க்கோளம்.' },
  },
  {
    difficulty: 'easy', source: '§1.3, p. 159', answer: 0,
    en: { q: 'The word ‘igneous’ is derived from the Latin word Ignis, meaning', options: ['Fire', 'Settle', 'Change of form', 'Rock'], explanation: 'Igneous comes from the Latin Ignis, meaning ‘fire’; ‘sediment’ means ‘settle’ and ‘metamorphosis’ means ‘change of form’.' },
    ta: { q: '‘இக்னிஸ்’ (Ignis) என்ற இலத்தீன் சொல்லின் பொருள்', options: ['நெருப்பு', 'படிதல்', 'உருமாறுதல்', 'பாறை'], explanation: '‘இக்னிஸ்’ என்ற இலத்தீன் சொல்லிற்கு ‘நெருப்பு’ என்பது பொருள்; இதிலிருந்தே தீப்பாறைகள் என்ற பெயர் வந்தது.' },
  },
  {
    difficulty: 'easy', source: '§1.4, p. 162', answer: 0,
    en: { q: 'The instrument which records the Earthquake waves is called', options: ['seismograph', 'barometer', 'Richter scale', 'hygrometer'], explanation: 'The instrument that records Earthquake waves is the seismograph or seismometer; the science of Earthquakes is seismology.' },
    ta: { q: 'புவி அதிர்வுகளைப் பதிவு செய்யும் கருவியின் பெயர்', options: ['நில அதிர்வு அளவைப் படம்', 'காற்றழுத்தமானி', 'ரிக்டர் அளவை', 'ஈரப்பதமானி'], explanation: 'புவி அதிர்வுகளைப் பதிவு செய்யும் கருவி நில அதிர்வு அளவைப் படம் (Seismograph) அல்லது நில அதிர்வு மானி எனப்படும்.' },
  },
  {
    difficulty: 'easy', source: '§1.4, p. 162', answer: 0,
    en: { q: 'The word ‘Tsunami’ is a Japanese term meaning', options: ['harbour waves', 'sea storm', 'earth shaking', 'fire mountain'], explanation: '‘Tsunami’ is a Japanese term meaning harbour waves, used for large seismically generated sea waves.' },
    ta: { q: '‘சுனாமி’ என்ற ஜப்பானிய சொல் குறிப்பது', options: ['துறைமுக அலைகள்', 'கடல் புயல்', 'நில அதிர்வு', 'நெருப்பு மலை'], explanation: '‘சுனாமி’ என்பது துறைமுக அலைகளைக் குறிக்கும் ஜப்பானிய சொல் ஆகும்.' },
  },
  {
    difficulty: 'easy', source: '§1.4, p. 163', answer: 0,
    en: { q: 'The term ‘volcano’ is derived from VULCAN, the name of the Roman', options: ['God of Fire', 'God of the Sea', 'God of Thunder', 'God of the Earth'], explanation: 'Volcano is derived from the Latin term VULCAN, the name of the Roman “God of Fire”.' },
    ta: { q: '‘வல்கனோ’ என்ற சொல் பெறப்பட்ட ‘வல்கேன்’ என்பது யாருடைய பெயர்?', options: ['ரோமானிய நெருப்புக் கடவுள்', 'ரோமானியக் கடல் கடவுள்', 'ரோமானிய இடிக் கடவுள்', 'ரோமானிய நிலக் கடவுள்'], explanation: '‘வல்கனோ’ என்ற சொல் இலத்தீன் மொழியிலுள்ள ‘வல்கேன்’ என்ற சொல்லாகும்; இது ரோமானிய நெருப்புக் கடவுளின் பெயர்.' },
  },
  // ---------------------------------------------------------------- Medium
  {
    difficulty: 'medium', source: 'Book exercise I.3, p. 165', answer: 0,
    en: { q: 'Magma is found in the', options: ['mantle', 'crust', 'core', 'inner core'], explanation: 'In the lower part of the mantle rocks are in molten form; this molten rock inside the Earth is called magma.' },
    ta: { q: 'பாறைக்குழம்பு காணப்படும் அடுக்கு _____.', options: ['கவசம்', 'புவிமேலோடு', 'கருவம்', 'உட்கரு'], explanation: 'கவசத்தின் கீழ்ப்பகுதியில் பாறைகள் உருகிய நிலையில் உள்ளன; இதுவே பாறைக்குழம்பு (மாக்மா).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.4, p. 165', answer: 0,
    en: { q: 'The movement of tectonic plates is induced by _____ energy.', options: ['thermal', 'hydel', 'wave', 'tidal'], explanation: 'The movement of tectonic plates is due to thermal energy from the mantle.' },
    ta: { q: 'புவித்தட்டுகளின் நகர்வு _____ ஆற்றலால் நிகழ்கிறது.', options: ['வெப்ப ஆற்றல்', 'நீர் ஆற்றல்', 'அலையாற்றல்', 'ஓத ஆற்றல்'], explanation: 'புவித்தட்டுகள் நகர்விற்குக் கவசத்தில் காணப்படும் வெப்ப சக்தியே காரணம்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.5, p. 165', answer: 0,
    en: { q: 'In the ancient period, Gondwanaland moved towards _____ direction.', options: ['north', 'south', 'east', 'west'], explanation: 'About 140 million years ago the Indian plate broke away from Gondwana, moved north and collided with Asia.' },
    ta: { q: 'ஆதியில் கோண்டுவானா நிலப்பகுதி _____ நோக்கி நகர்ந்தது.', options: ['வடக்கு', 'தெற்கு', 'கிழக்கு', 'மேற்கு'], explanation: '140 மில்லியன் ஆண்டுகளுக்கு முன் இந்தியத்தட்டு கோண்டுவானாவிலிருந்து விடுபட்டு வடக்கு நோக்கி நகர்ந்து ஆசியாவுடன் இணைந்தது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.7, p. 165', answer: 0,
    en: { q: 'The movement of plates that creates stress and tension in the rocks causing them to stretch and crack results in _____.', options: ['fault', 'fold', 'mountain', 'earthquake'], explanation: 'Stretching and cracking of rocks due to stress and tension produces a fault; lateral compression produces folds.' },
    ta: { q: 'புவித்தட்டுகள் நகர்வதால் ஏற்படும் அழுத்தம் மற்றும் இறுக்கத்தின் காரணமாக ஏற்படும் விரிசல் _____ எனப்படும்.', options: ['பிளவு', 'மடிப்பு', 'மலை', 'புவிஅதிர்வு'], explanation: 'அழுத்தம், இறுக்கம் காரணமாகப் பாறைகளில் ஏற்படும் விரிசல் பிளவு; கிடைமட்ட அழுத்த விசையால் மடிப்புகள் உருவாகின்றன.' },
  },
  {
    difficulty: 'medium', source: '§1.2, p. 158', answer: 0,
    en: { q: 'The continental crust is called SIAL because it is made up of', options: ['Silica and Aluminium', 'Silica and Magnesium', 'Nickel and Iron', 'Silica and Iron'], explanation: 'Continental crust is made up of SIAL (Silica and Aluminium); oceanic crust is made up of SIMA (Silica and Magnesium).' },
    ta: { q: 'கண்ட மேலோடு சியால் (Sial) என அழைக்கப்படக் காரணம், அதில் அதிகம் காணப்படுபவை', options: ['சிலிகா மற்றும் அலுமினியம்', 'சிலிகா மற்றும் மக்னீசியம்', 'நிக்கல் மற்றும் இரும்பு', 'சிலிகா மற்றும் இரும்பு'], explanation: 'கண்ட மேலோட்டில் சிலிகா, அலுமினியம் அதிகம் என்பதால் சியால்; கடலடி மேலோட்டில் சிலிகா, மக்னீசியம் அதிகம் என்பதால் சிமா.' },
  },
  {
    difficulty: 'medium', source: '§1.2, p. 159', answer: 0,
    en: { q: 'The core of the Earth is called NIFE because it is composed mainly of', options: ['Nickel and Iron', 'Silica and Aluminium', 'Silica and Magnesium', 'Nickel and Aluminium'], explanation: 'The core is composed mainly of Nickel (Ni) and Iron (Fe), hence it is called NIFE.' },
    ta: { q: 'கருவம் நைஃப் (NIFE) என அழைக்கப்படக் காரணம், அதில் அதிகம் காணப்படுபவை', options: ['நிக்கல் மற்றும் இரும்பு', 'சிலிகா மற்றும் அலுமினியம்', 'சிலிகா மற்றும் மக்னீசியம்', 'நிக்கல் மற்றும் அலுமினியம்'], explanation: 'கருவத்தில் நிக்கலும் (Ni) இரும்பும் (Fe) அதிகமாகக் காணப்படுவதால் அது நைஃப் என அழைக்கப்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: '§1.2, p. 159', answer: 0,
    en: { q: 'The mantle, the interior part beneath the crust, is about', options: ['2,900 km thick', '5 to 30 km thick', '12,376 m thick', '600 km thick'], explanation: 'The mantle is about 2,900 km thick; the crust ranges from 5 to 30 km.' },
    ta: { q: 'புவிமேலோட்டிற்குக் கீழேயுள்ள கவசத்தின் தடிமன் சுமார்', options: ['2900 கிலோமீட்டர்', '5 முதல் 30 கிலோமீட்டர்', '12,376 மீட்டர்', '600 கிலோமீட்டர்'], explanation: 'கவசத்தின் தடிமன் சுமார் 2900 கிலோமீட்டர் ஆகும்.' },
  },
  {
    difficulty: 'hard', source: '§1.2, p. 158', answer: 0,
    en: { q: 'The lithosphere includes', options: ['the crust and the uppermost part of the mantle', 'the crust only', 'the mantle and the outer core', 'the crust, mantle and core'], explanation: 'The terms ‘lithosphere’ and ‘crust’ are not the same: the lithosphere includes the crust and the uppermost part of the mantle.' },
    ta: { q: 'பாறைக்கோளம் (நிலக்கோளம்) உள்ளடக்கியது', options: ['புவி மேலோடு மற்றும் கவசத்தின் மேற்பகுதி', 'புவி மேலோடு மட்டும்', 'கவசம் மற்றும் வெளிக்கருவம்', 'மேலோடு, கவசம் மற்றும் கருவம்'], explanation: '‘நிலக்கோளம்’, ‘புவிமேலோடு’ இரண்டும் வெவ்வேறானவை; புவி மேலோட்டினையும் கவசத்தின் மேற்பகுதியையும் உள்ளடக்கியதே பாறைக்கோளம்.' },
  },
  {
    difficulty: 'medium', source: '§1.3, p. 159', answer: 0,
    en: { q: 'Igneous rocks are also called Primary or Mother rocks because', options: ['all other rocks are directly or indirectly formed from them', 'they are the hardest rocks', 'they contain fossils', 'they are found only in the core'], explanation: 'Igneous rocks are called Primary or Mother rocks because all other rocks are directly or indirectly formed from them.' },
    ta: { q: 'தீப்பாறைகள் ‘முதன்மைப் பாறைகள்’ அல்லது ‘தாய்ப் பாறைகள்’ என அழைக்கப்படக் காரணம்', options: ['மற்ற பாறைகள் நேரிடையாகவோ மறைமுகமாகவோ இவற்றிலிருந்தே உருவாகின்றன', 'இவை மிகக் கடினமான பாறைகள்', 'இவற்றில் தொல்லுயிர் எச்சங்கள் உள்ளன', 'இவை கருவத்தில் மட்டுமே காணப்படுகின்றன'], explanation: 'மற்ற பாறைகள் நேரிடையாகவோ அல்லது மறைமுகமாகவோ தீப்பாறைகளிலிருந்தே உருவாவதால் அவை முதன்மை / தாய்ப் பாறைகள் எனப்படுகின்றன.' },
  },
  {
    difficulty: 'medium', source: '§1.3, p. 160', answer: 0,
    en: { q: 'Under extreme heat and pressure, limestone is transformed into', options: ['marble', 'quartzite', 'gneiss', 'schist'], explanation: 'Granite changes to gneiss, basalt to schist, limestone to marble and sandstone to quartzite.' },
    ta: { q: 'அதிக வெப்பம், அழுத்தத்திற்கு உட்படும்போது சுண்ணாம்புப் பாறை _____ ஆக உருமாறுகிறது.', options: ['சலவைக் கல்', 'குவார்ட்சைட்', 'நீஸ்', 'சிஸ்ட்'], explanation: 'கிரானைட் நீஸ் ஆகவும், பசால்ட் சிஸ்ட் ஆகவும், சுண்ணாம்புப் பாறை சலவைக் கல்லாகவும், மணற்பாறை குவார்ட்சைட் ஆகவும் உருமாறுகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II, p. 165', answer: 0,
    en: { q: 'In the book’s match-the-following, ‘Mantle’ is matched with', options: ['SIMA', 'Seismograph', 'Subduction zone', 'Pacific Ocean'], explanation: 'The pairs are: Endogenetic process – Volcanic, Mantle – SIMA, Convergent boundaries – Subduction zone, Earthquake – Seismograph, Composite volcano – Pacific Ocean.' },
    ta: { q: 'பொருத்துக பயிற்சியில் ‘கவசம்’ என்பதற்குப் பொருத்தமானது', options: ['சிமா', 'நில அதிர்வு அளவைப்படம்', 'புவித்தட்டு அமிழ்தல்', 'பசிபிக் பெருங்கடல்'], explanation: 'உட்புறச்செயல்கள் – எரிமலை வெடிப்பு, கவசம் – சிமா, இணையும் எல்லை – புவித்தட்டு அமிழ்தல், புவி அதிர்ச்சி – நில அதிர்வு அளவைப்படம், கூட்டு எரிமலை – பசிபிக் பெருங்கடல்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II, p. 165', answer: 0,
    en: { q: 'Which pair is correctly matched?', options: ['Convergent boundaries – Subduction zone', 'Earthquake – SIMA', 'Composite volcano – Seismograph', 'Endogenetic process – Pacific Ocean'], explanation: 'At a convergent boundary one plate sinks under another; this location is called a subduction zone.' },
    ta: { q: 'சரியாகப் பொருந்திய இணை எது?', options: ['இணையும் எல்லை – புவித்தட்டு அமிழ்தல்', 'புவி அதிர்ச்சி – சிமா', 'கூட்டு எரிமலை – நில அதிர்வு அளவைப்படம்', 'உட்புறச்செயல்கள் – பசிபிக் பெருங்கடல்'], explanation: 'இணையும் எல்லையில் ஒரு தட்டு மற்றொன்றின் கீழ் சொருகுகிறது; இப்பகுதி புவித்தட்டு அமிழ்தல் மண்டலம் எனப்படும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II, p. 165', answer: 0,
    en: { q: 'Which of the following pairs is correctly matched?', options: ['Earthquake – Seismograph', 'Mantle – Subduction zone', 'Composite volcano – SIMA', 'Endogenetic process – Seismograph'], explanation: 'Earthquake waves are recorded by a seismograph; Mantle goes with SIMA, and Endogenetic process with Volcanic.' },
    ta: { q: 'கீழ்க்கண்டவற்றுள் சரியாகப் பொருந்தியுள்ள இணை எது?', options: ['புவி அதிர்ச்சி – நில அதிர்வு அளவைப்படம்', 'கவசம் – புவித்தட்டு அமிழ்தல்', 'கூட்டு எரிமலை – சிமா', 'உட்புறச்செயல்கள் – நில அதிர்வு அளவைப்படம்'], explanation: 'புவி அதிர்வுகள் நில அதிர்வு அளவைப்படத்தால் பதிவு செய்யப்படுகின்றன; கவசம் – சிமா, உட்புறச்செயல்கள் – எரிமலை வெடிப்பு.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise II, p. 165', answer: 0,
    en: { q: 'In the match-the-following, ‘Composite volcano’ is paired with', options: ['Pacific Ocean', 'SIMA', 'Seismograph', 'Subduction zone'], explanation: 'Composite (strata) volcanoes are commonly found in the Pacific Ocean, e.g. Mt. Fujiyama, Japan.' },
    ta: { q: 'பொருத்துக பயிற்சியில் ‘கூட்டு எரிமலை’ என்பதற்குப் பொருத்தமானது', options: ['பசிபிக் பெருங்கடல்', 'சிமா', 'நில அதிர்வு அளவைப்படம்', 'புவித்தட்டு அமிழ்தல்'], explanation: 'கூட்டு (அடுக்கு) எரிமலைகள் பசிபிக் பெருங்கடல் பகுதியில் பொதுவாகக் காணப்படுகின்றன; உதாரணம்: ஃபியூஜியாமா – ஜப்பான்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.1, p. 165', answer: 0,
    en: { q: 'Consider: (i) Mt. Fujiyama is a dormant volcano (ii) Mt. Kilimanjaro is a dormant volcano (iii) Mt. Tanzania is a dormant volcano. Which statement(s) is/are true?', options: ['i is true', 'ii is true', 'iii is true', 'i, ii, iii are true'], explanation: 'Mt. Fujiyama (Japan) is a dormant volcano; Mt. Kilimanjaro (Tanzania) is an extinct volcano, and Tanzania is a country, not a volcano.' },
    ta: { q: '(i) ஃபியூஜியாமா மலை ஒரு உறங்கும் எரிமலையாகும் (ii) கிளிமஞ்சாரோ மலை ஒரு உறங்கும் எரிமலையாகும் (iii) தான்சானியா ஒரு உறங்கும் எரிமலையாகும். இவற்றுள் உண்மையானது எது?', options: ['(i) உண்மையானது', '(ii) உண்மையானது', '(iii) உண்மையானது', '(i), (ii) மற்றும் (iii) உண்மையானது'], explanation: 'ஃபியூஜியாமா (ஜப்பான்) உறங்கும் எரிமலை; கிளிமஞ்சாரோ (தான்சானியா) செயலிழந்த எரிமலை; தான்சானியா ஒரு நாடு.' },
  },
  {
    difficulty: 'medium', source: '§1.4, p. 160', answer: 0,
    en: { q: 'The San Andreas Fault is an example of a', options: ['conservative/transform boundary', 'convergent boundary', 'divergent boundary', 'subduction zone'], explanation: 'At a conservative/transform boundary the plates slide horizontally past each other, e.g. San Andreas Fault.' },
    ta: { q: 'சான் ஆண்ட்ரியாஸ் பிளவு எவ்வகை எல்லைக்கு உதாரணம்?', options: ['பக்க நகர்வு எல்லை', 'இணையும் எல்லை', 'விலகும் எல்லை', 'அமிழ்தல் மண்டலம்'], explanation: 'புவித்தட்டுகள் ஒன்றுக்கொன்று கிடையாகப் பக்கவாட்டில் நகர்வது பக்க நகர்வு எல்லை; உதாரணம் சான் ஆண்ட்ரியாஸ் பிளவு.' },
  },
  {
    difficulty: 'medium', source: '§1.4, p. 160', answer: 0,
    en: { q: 'The Mid Atlantic Ridge is an example of a', options: ['divergent boundary', 'convergent boundary', 'transform boundary', 'fold mountain'], explanation: 'At a divergent boundary the plates pull away from each other as magma pushes up from the mantle, e.g. Mid Atlantic Ridge.' },
    ta: { q: 'அட்லாண்டிக் மத்திய கடலடி மலைத் தொடர் எவ்வகை எல்லைக்கு உதாரணம்?', options: ['விலகும் எல்லை', 'இணையும் எல்லை', 'பக்க நகர்வு எல்லை', 'மடிப்பு மலை'], explanation: 'புவித்தட்டுகள் ஒன்றை விட்டு ஒன்று விலகும்போது பாறைக்குழம்பு கவசத்திலிருந்து வெளியேறுகிறது; உதாரணம் அட்லாண்டிக் மத்திய கடலடி மலைத் தொடர்.' },
  },
  {
    difficulty: 'medium', source: '§1.4, p. 162', answer: 0,
    en: { q: 'Which Earthquake waves are the fastest and pass through solids, liquids and gases?', options: ['Primary or P-waves', 'Secondary or S-waves', 'Surface or L-waves', 'Tsunami waves'], explanation: 'P-waves are the fastest, the first to reach the epicentre, and pass through solids, liquids and gases (5.3 to 10.6 km per second).' },
    ta: { q: 'மிக வேகமாகப் பயணிக்கும், திட, திரவ, வாயுப்பொருட்கள் வழியாகச் செல்லும் நில அதிர் வலைகள் எவை?', options: ['முதன்மை அலைகள் (P அலைகள்)', 'இரண்டாம் நிலை அலைகள் (S அலைகள்)', 'மேற்பரப்பு அலைகள் (L அலைகள்)', 'ஆழிப்பேரலைகள்'], explanation: 'முதன்மை அலைகள் மற்ற அலைகளை விட வேகமானவை; திட, திரவ, வாயுப்பொருட்கள் வழியாகப் பயணிக்கும் (வினாடிக்கு 5.3 முதல் 10.6 கி.மீ).' },
  },
  {
    difficulty: 'easy', source: '§1.4, p. 164', answer: 0,
    en: { q: 'Mt. Kilimanjaro in Tanzania is an example of', options: ['an extinct volcano', 'an active volcano', 'a dormant volcano', 'a shield volcano'], explanation: 'A volcano that permanently stops its activity is an extinct or dead volcano, e.g. Mt. Kilimanjaro, Tanzania.' },
    ta: { q: 'தான்சானியாவிலுள்ள கிளிமஞ்சாரோ எரிமலை எதற்கு உதாரணம்?', options: ['செயலிழந்த எரிமலை', 'செயல்படும் எரிமலை', 'உறங்கும் எரிமலை', 'கேடய எரிமலை'], explanation: 'எந்தவித எரிமலைச் செயல்பாடுகளுமின்றி காணப்படும் எரிமலைகள் செயலிழந்த எரிமலைகள்; உதாரணம் கிளிமஞ்சாரோ – தான்சானியா.' },
  },
  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise III.2, p. 165', answer: 0,
    en: { q: 'Assertion (A): Magma gushes out when it finds vents. Reason (R): Interior of the Earth contains compressed hot magma.', options: AR_EN, explanation: 'Hot magma inside the Earth is under great pressure, so it erupts to the surface through vents; the reason explains the assertion.' },
    ta: { q: 'கூற்று: பாறைக்குழம்பு துவாரம் வழியாக வெளியேறும். காரணம்: புவியின் உட்பகுதி அழுத்தப்பட்ட பாறைக் குழம்பினைக் கொண்டிருக்கும்.', options: AR_TA, explanation: 'புவியின் உட்பகுதியில் அழுத்தப்பட்ட வெப்பமான பாறைக்குழம்பு துவாரம் வழியாக வெளியேறுகிறது; காரணம் கூற்றை விளக்குகிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise III.3, p. 165', answer: 0,
    en: { q: 'Statement I: Mountain ranges are formed by the collision of tectonic plates. Statement II: The movement of tectonic plates is due to the thermal energy from the mantle.', options: ['Statement I and II are true', 'Statement I is false, II is true', 'Statement I and II are false', 'Statement I is true, II is false'], explanation: 'Collisions of plates produce mountain ranges, and plate movement is due to thermal energy from the mantle; both statements are true.' },
    ta: { q: 'கூற்று I: புவித்தட்டுகள் ஒன்றோடொன்று மோதுவதால் மலைத் தொடர்கள் தோற்றுவிக்கப்படுகின்றன. கூற்று II: கவசத்தின் வெப்பத்தின் காரணமாக புவித்தட்டுகள் நகருகின்றன.', options: ['கூற்று I மற்றும் II சரி', 'கூற்று I தவறு, II சரி', 'கூற்று I மற்றும் II தவறு', 'கூற்று I சரி, II தவறு'], explanation: 'புவித்தட்டுகள் மோதுவதால் மலைத்தொடர்கள் உருவாகின்றன; கவசத்தின் வெப்ப சக்தியே தட்டுகள் நகரக் காரணம். இரண்டும் சரி.' },
  },
  {
    difficulty: 'hard', source: '§1.4, p. 162', answer: 0,
    en: { q: 'Which seismic waves travel only through solids and shake the ground perpendicular to the direction in which they propagate?', options: ['Secondary or S-waves', 'Primary or P-waves', 'Surface or L-waves', 'Elastic waves at the focus'], explanation: 'S-waves are transverse waves that travel only through solids, at 1 km to 8 km per second.' },
    ta: { q: 'திடப்பொருட்கள் வழியாக மட்டுமே பயணித்து, பயணிக்கும் திசைக்குச் செங்குத்தாகப் புவியில் அசைவை ஏற்படுத்தும் அலைகள் எவை?', options: ['இரண்டாம் நிலை அலைகள் (S அலைகள்)', 'முதன்மை அலைகள் (P அலைகள்)', 'மேற்பரப்பு அலைகள் (L அலைகள்)', 'கீழ்மையத்தின் துணை அலைகள்'], explanation: 'இரண்டாம் நிலை அலைகள் குறுக்கலைகள்; திடப்பொருட்கள் வழியாக மட்டுமே வினாடிக்கு 1 முதல் 8 கி.மீ வேகத்தில் பயணிக்கும்.' },
  },
  {
    difficulty: 'hard', source: '§1.4, p. 162', answer: 0,
    en: { q: 'Which seismic waves travel primarily along the ground surface, comparatively slower, and are the most destructive?', options: ['Surface or L-waves', 'Primary or P-waves', 'Secondary or S-waves', 'Transverse S-waves'], explanation: 'Surface (L) waves travel along the ground surface at 1 km to 5 km per second and are the most destructive.' },
    ta: { q: 'புவியின் மேற்பரப்பில் பயணிக்கும், வேகம் குறைவான, அதிக அழிவை ஏற்படுத்தும் அலைகள் எவை?', options: ['மேற்பரப்பு அலைகள் (L அலைகள்)', 'முதன்மை அலைகள் (P அலைகள்)', 'இரண்டாம் நிலை அலைகள் (S அலைகள்)', 'குறுக்கலைகள்'], explanation: 'மேற்பரப்பு அலைகள் வினாடிக்கு 1 முதல் 5 கி.மீ வேகத்தில் பயணிக்கும்; இவை அதிக அளவில் அழிவை ஏற்படுத்தக் கூடியவை.' },
  },
  {
    difficulty: 'hard', source: '§1.2, p. 159', answer: 0,
    en: { q: 'The Earth’s magnetic field, which makes the magnetic compass work, is generated because', options: ['the liquid outer core spins over the solid inner core as the Earth rotates', 'the mantle contains molten magma', 'the crust is made of SIAL and SIMA', 'large quantities of iron in the core create gravity'], explanation: 'As the Earth rotates, the liquid outer core spins over the solid inner core and generates the magnetic field; the iron in the core is responsible for gravitational force.' },
    ta: { q: 'காந்த திசைகாட்டும் கருவி செயல்படக் காரணமான புவியின் காந்தப்புலம் உருவாவது', options: ['புவி சுழலும்போது திரவ வெளிக்கருவம் திட உட்கருவத்தின் மேல் சுழலுவதால்', 'கவசத்தில் உருகிய பாறைக்குழம்பு இருப்பதால்', 'மேலோடு சியால், சிமாவால் ஆனதால்', 'கருவத்தில் அதிக இரும்பு புவியீர்ப்பை உருவாக்குவதால்'], explanation: 'புவி தனது அச்சில் சுழலும்போது திட உட்கருவத்தின் மேல் திரவ வெளிக்கருவம் சுழலுவதால் காந்தப்புலம் உருவாகிறது; இரும்பு புவியீர்ப்பு விசைக்குக் காரணம்.' },
  },
  {
    difficulty: 'hard', source: '§1.4, p. 163', answer: 0,
    en: { q: 'The tsunami of 26 December 2004 in the Indian Ocean was the result of', options: ['the Indo-Australian Plate subducting below the Eurasian Plate', 'the Pacific Plate sliding past the North American Plate', 'the Indian Plate pulling away from the African Plate', 'a volcanic eruption in Iceland'], explanation: 'It resulted from the Indo-Australian Plate subducting below the Eurasian Plate, caused by an Earthquake of magnitude above 9.1.' },
    ta: { q: '2004, டிசம்பர் 26-ல் இந்தியப் பெருங்கடலில் ஆழிப்பேரலை உண்டானதற்குக் காரணம்', options: ['இந்தோ-ஆஸ்திரேலியத் தட்டு யுரேசியத் தட்டின் கீழே அமிழ்ந்தது', 'பசிபிக் தட்டு வட அமெரிக்கத் தட்டைக் கடந்து பக்கவாட்டில் நகர்ந்தது', 'இந்தியத் தட்டு ஆப்பிரிக்கத் தட்டிலிருந்து விலகியது', 'ஐஸ்லாந்தில் நிகழ்ந்த எரிமலை வெடிப்பு'], explanation: 'இந்தோ-ஆஸ்திரேலியத் தட்டு யுரேசியத் தட்டின் கீழே அமிழ்ந்ததே காரணம்; இது ரிக்டர் அளவையில் 9.1 ஆகப் பதிவானது.' },
  },
  {
    difficulty: 'hard', source: '§1.4, p. 161', answer: 0,
    en: { q: 'Approximately how many years ago did the Indian plate break away from the ancient super continent Gondwana?', options: ['140 million years ago', '250 million years ago', '65 million years ago', '200 million years ago'], explanation: 'About 250 million years ago India was part of Gondwana; approximately 140 million years ago it broke away and began moving north.' },
    ta: { q: 'இந்தியத்தட்டு கோண்டுவானா என்ற பெருங்கண்டத்திலிருந்து விடுபட்டது சுமார் எத்தனை ஆண்டுகளுக்கு முன்?', options: ['140 மில்லியன் ஆண்டுகள்', '250 மில்லியன் ஆண்டுகள்', '65 மில்லியன் ஆண்டுகள்', '200 மில்லியன் ஆண்டுகள்'], explanation: '250 மில்லியன் ஆண்டுகளுக்கு முன் இந்தியா கோண்டுவானாவின் பகுதி; 140 மில்லியன் ஆண்டுகளுக்கு முன் அது விடுபட்டு வடக்கு நோக்கி நகர்ந்தது.' },
  },
  {
    difficulty: 'hard', source: '§1.4, p. 164', answer: 0,
    en: { q: 'A roughly circular mound formed by the slow ejection of silica-rich, highly viscous lava, as at Parícutin, Mexico, is a', options: ['volcanic dome', 'shield volcano', 'composite volcano', 'crater'], explanation: 'A lava dome or volcanic dome forms from viscous, silica-rich lava that cannot flow far from its vent, e.g. Parícutin, Mexico.' },
    ta: { q: 'சிலிகா அதிகமுள்ள, அதிகப் பிசுபிசுப்புடைய எரிமலைக் குழம்பு எரிமலை வாய்க்கு அருகிலேயே வட்ட வடிவில் படிந்து உருவாகும் எரிமலை (உதாரணம்: பாரிக்கியூட்டின் – மெக்சிகோ)', options: ['கும்மட்ட எரிமலை', 'கேடய எரிமலை', 'கூட்டு எரிமலை', 'எரிமலை வாய்'], explanation: 'சிலிகா அதிகமுள்ள பிசுபிசுப்பான குழம்பு நீண்ட தூரம் பரவ முடியாமல் சிறு குன்று போலப் படிவது கும்மட்ட எரிமலை; உதாரணம் பாரிக்கியூட்டின் – மெக்சிகோ.' },
  },
  {
    difficulty: 'hard', source: '§1.4, p. 162', answer: 0,
    en: { q: 'The highest Earthquake magnitude ever recorded on the Richter scale is', options: ['9.5 (Bio-Bio, Chile, 1960)', '9.1', '10.6', '12.0'], explanation: 'The Richter scale is open ended; the highest magnitude ever recorded is 9.5 (Bio-Bio, Chile in 1960).' },
    ta: { q: 'ரிக்டர் அளவையில் இதுவரை பதிவான மிக உயர்ந்த புவி அதிர்ச்சி', options: ['9.5 (பயோ-பயோ, சிலி, 1960)', '9.1', '10.6', '12.0'], explanation: 'ரிக்டர் அளவைக்கு எல்லை வரையறை இல்லை; சிலி நாட்டில் 1960-ல் பயோ-பயோவில் பதிவான 9.5 மிக உயர்ந்த பதிவு.' },
  },
];
