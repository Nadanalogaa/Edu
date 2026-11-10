// Tamil Nadu State Board, 9th Social Science, Unit 15 – Geography: Hydrosphere (நீர்க்கோளம்).
// Book exercise questions plus our own questions so that every section is covered at three levels.
// source = section or exercise and printed page of the English-medium book; Tamil follows the Tamil-medium book.

import { BankQuestion, AR_EN, AR_TA } from './types';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.1, p. 199', answer: 0,
    en: { q: 'The temperature of the ocean waters generally _______ at greater depth.', options: ['decreases', 'increases', 'remains constant', 'first decreases and then increases'], explanation: 'Sunlight penetrates less with depth, so ocean temperature generally decreases; the continental slope and trenches are nearly freezing.' },
    ta: { q: 'பெருங்கடலின் வெப்பநிலை ஆழத்தை நோக்கிச் செல்லச் செல்ல _______', options: ['குறையும்', 'அதிகரிக்கும்', 'ஒரே அளவாக இருக்கும்', 'முதலில் குறைந்து பின் அதிகரிக்கும்'], explanation: 'ஆழம் அதிகரிக்க சூரிய ஒளி குறைவாக ஊடுருவுவதால் பெருங்கடலின் வெப்பநிலை பொதுவாகக் குறையும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise III.1, p. 200', answer: 0,
    en: { q: 'The Mariana trench is', options: ['the deepest point in the Pacific', 'a coral reef in Australia', 'a warm current along the coast of Japan', 'a second order landform on the continental shelf'], explanation: 'Trenches are the deepest parts of the oceans; the Mariana trench is the deepest point in the Pacific.' },
    ta: { q: 'மரியானா அகழி என்பது', options: ['பசிபிக் பெருங்கடலின் ஆழமான பகுதி', 'ஆஸ்திரேலியாவில் உள்ள பவளப்பாறைத் திட்டு', 'ஜப்பான் கடற்கரையோர வெப்ப நீரோட்டம்', 'கண்டத்திட்டில் உள்ள இரண்டாம் நிலை நிலத்தோற்றம்'], explanation: 'அகழிகள் பெருங்கடலின் மிக ஆழமான பகுதிகள்; மரியானா அகழி பசிபிக் பெருங்கடலின் ஆழமான பகுதியாகும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise III.2, p. 200', answer: 0,
    en: { q: 'The Great Barrier Reef is located off the coast of', options: ['Australia', 'Japan', 'Namibia', 'Newfoundland'], explanation: 'The Great Barrier Reef, the world\'s largest coral reef system, is in the Coral Sea off Queensland, Australia.' },
    ta: { q: 'கிரேட் பேரியர் ரீப் அமைந்துள்ள கடற்கரை', options: ['ஆஸ்திரேலியா', 'ஜப்பான்', 'நமீபியா', 'நியூபவுண்ட்லாந்து'], explanation: 'உலகின் மிக நீளமான பவளப்பாறைத் திட்டு ஆஸ்திரேலியாவின் குயின்ஸ்லாந்து அருகேயுள்ள பவளக்கடலில் அமைந்துள்ளது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise III.3, p. 200', answer: 0,
    en: { q: 'Spring tides always occur', options: ['on full moon and new moon days', 'on first and last quarter moon days', 'only during the monsoon', 'once a year'], explanation: 'When the Sun, Moon and Earth are in a line, high spring tides form on full moon and new moon days.' },
    ta: { q: 'உயர் ஓதங்கள் ஏற்படும் நாட்கள்', options: ['அமாவாசை மற்றும் முழு நிலவு நாட்கள்', 'சந்திரனின் முதல் மற்றும் இறுதி கால் பகுதி நாட்கள்', 'பருவக்காற்றுக் காலத்தில் மட்டும்', 'ஆண்டுக்கு ஒரு முறை'], explanation: 'புவி, சூரியன், சந்திரன் ஒரே நேர்க்கோட்டில் வரும்போது அமாவாசை மற்றும் முழு நிலவு தினங்களில் உயர் ஓதங்கள் ஏற்படுகின்றன.' },
  },
  {
    difficulty: 'easy', source: '§4.1, p. 192', answer: 0,
    en: { q: 'Over _______ of the water on the Earth\'s surface is confined to oceans.', options: ['97%', '71%', '61%', '3%'], explanation: 'Over 97% of surface water is in the oceans; less than 3% is on land as glaciers, ice caps, groundwater, rivers and lakes.' },
    ta: { q: 'புவியின் மேற்பரப்பில் உள்ள நீரில் _______ கடல் நீராகக் காணப்படுகிறது.', options: ['97%', '71%', '61%', '3%'], explanation: 'புவியின் மேற்பரப்பில் 97% நீர் கடல் நீராகவும், 3% பனிப்பாறைகள், ஆறுகள், ஏரிகள், நிலத்தடி நீர் போன்றவையாகவும் உள்ளது.' },
  },
  {
    difficulty: 'easy', source: '§4.1, p. 192', answer: 0,
    en: { q: 'The Earth is also called the', options: ['Blue planet', 'Red planet', 'Water hemisphere', 'Resource bowl'], explanation: 'The Earth holds water in abundance, so it is called the Blue planet.' },
    ta: { q: 'புவி இவ்வாறும் அழைக்கப்படுகிறது', options: ['நீலக்கோளம்', 'சிவப்புக்கோளம்', 'நீர் அரைக்கோளம்', 'வள கிண்ணம்'], explanation: 'புவிக்கோளத்தில் நீர்வளம் மிகுந்து காணப்படுவதால் இது “நீலக்கோளம்” என்று அழைக்கப்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: '§4.2, p. 192', answer: 0,
    en: { q: 'The three major processes involved in the water cycle are', options: ['evaporation, condensation and precipitation', 'evaporation, erosion and deposition', 'condensation, weathering and transpiration', 'precipitation, tides and currents'], explanation: 'Evaporation, condensation and precipitation are the three major processes of the hydrological cycle.' },
    ta: { q: 'நீரியல் சுழற்சியின் மூன்று முக்கியச் செயல்பாடுகள்', options: ['ஆவியாதல், நீர்சுருங்குதல், மழைப்பொழிவு', 'ஆவியாதல், அரித்தல், படியவைத்தல்', 'நீர்சுருங்குதல், வானிலைச்சிதைவு, நீராவிப்போக்கு', 'மழைப்பொழிவு, ஓதங்கள், நீரோட்டங்கள்'], explanation: 'ஆவியாதல், நீர்சுருங்குதல் மற்றும் மழைப்பொழிவு ஆகிய மூன்றும் நீரியல் சுழற்சியின் முக்கியச் செயல்பாடுகளாகும்.' },
  },
  {
    difficulty: 'easy', source: '§4.3, p. 193', answer: 0,
    en: { q: 'Which country is known as the \'Land of Thousand Lakes\'?', options: ['Finland', 'Norway', 'Japan', 'Australia'], explanation: 'Finland is known as the Land of Thousand Lakes.' },
    ta: { q: '‘ஆயிரம் ஏரிகளின் நிலம்’ என்று அழைக்கப்படும் நாடு எது?', options: ['பின்லாந்து', 'நார்வே', 'ஜப்பான்', 'ஆஸ்திரேலியா'], explanation: '‘ஆயிரம் ஏரிகளின் நிலம்’ என்று பின்லாந்து அழைக்கப்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: '§4.3, p. 193', answer: 0,
    en: { q: 'Which is considered the purest form of water?', options: ['Rain water', 'Sea water', 'Groundwater', 'River water'], explanation: 'Rain water contains a very small proportion of salts compared to oceans and seas, so it is the purest form of water.' },
    ta: { q: 'தூய்மையான நீராகக் கருதப்படுவது எது?', options: ['மழைநீர்', 'கடல்நீர்', 'நிலத்தடி நீர்', 'ஆற்று நீர்'], explanation: 'கடல் நீரோடு ஒப்பிடும்போது உவர்ப்பின் சதவீதம் மழைநீரில் மிகக் குறைவாக இருப்பதால் அது தூய்மையான நீராகக் கருதப்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: '§4.4.1, p. 194', answer: 0,
    en: { q: 'The Grand Banks of Newfoundland, one of the richest fishing grounds, lies on the', options: ['continental shelf', 'continental slope', 'abyssal plain', 'oceanic deep'], explanation: 'The shallow continental shelf lets sunlight in, encouraging plankton and making it the richest fishing ground, e.g., the Grand Banks.' },
    ta: { q: 'உலகின் செழிப்பான மீன்பிடித்தளமான நியூபவுண்ட்லாந்தின் ‘கிராண்ட் பாங்க்’ அமைந்துள்ள பகுதி', options: ['கண்டத்திட்டு', 'கண்டச்சரிவு', 'ஆழ்கடல் சமவெளி', 'கடல் அகழி'], explanation: 'ஆழமற்ற கண்டத்திட்டில் சூரிய ஒளி ஊடுருவுவதால் பிளாங்டன் நன்கு வளர்ந்து செழிப்பான மீன்பிடித்தளமாக உள்ளது.' },
  },
  // ------------------------------------------------------------------ Medium
  {
    difficulty: 'medium', source: 'Book exercise I.2, p. 199', answer: 0,
    en: { q: 'Ocean currents are produced due to', options: ['the Earth\'s rotation, prevailing winds and differences in temperature and salinity', 'only the gravitational pull of the moon', 'only tremors on the ocean floor', 'only the shape of the coastline'], explanation: 'The factors that generate ocean currents are the Earth\'s rotation, prevailing winds and differences in temperature and salinity of ocean water.' },
    ta: { q: 'கடல் நீரோட்டங்கள் உருவாகக் காரணம்', options: ['புவியின் சுழற்சி, வீசும் காற்று, வெப்பம் மற்றும் உவர்ப்பிய வேறுபாடு', 'சந்திரனின் ஈர்ப்பு விசை மட்டும்', 'கடலடியில் ஏற்படும் நில அதிர்வுகள் மட்டும்', 'கடற்கரையின் வடிவம் மட்டும்'], explanation: 'புவியின் சுழற்சி, வீசும் காற்று, கடல் நீரின் வெப்பம் மற்றும் உவர்ப்பியத்தில் உள்ள வேறுபாடு ஆகியவை கடல் நீரோட்டங்களை உருவாக்குகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.4, p. 200', answer: 0,
    en: { q: 'The oceanic ridge comes into existence due to', options: ['divergence of tectonic plates', 'convergence of tectonic plates', 'lateral movements of plates', 'steering of plates'], explanation: 'Oceanic ridges are made of young basaltic rock formed when two tectonic plates move apart.' },
    ta: { q: 'கடலடி மலைத்தொடர் உருவாகக் காரணம்', options: ['புவித்தட்டுகள் விலகுதல்', 'புவித்தட்டுகள் இணைதல்', 'புவித்தட்டுகளின் பக்கவாட்டு இயக்கம்', 'புவித்தட்டுகள் திசைதிரும்புதல்'], explanation: 'இரண்டு நிலத்தட்டுகள் விலகிச் செல்வதால் இளம் பசால்ட் பாறைகளால் ஆன கடலடி மலைத்தொடர்கள் உருவாகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.5, p. 200', answer: 0,
    en: { q: 'Which of the following indicates the correct sequence of the topography beneath the surface of the sea?', options: ['Continental shelf – Continental slope – Sea plain – Sea trench', 'Continental slope – Continental shelf – Sea plain – Sea trench', 'Sea plain – Continental slope – Continental shelf – Sea trench', 'Continental slope – Sea plain – Continental shelf – Sea trench'], explanation: 'From the coast outward: the shallow shelf, then the steep slope, then the deep sea plain, with trenches as the deepest parts.' },
    ta: { q: 'கடல்மட்டத்தின் கீழுள்ள நிலத்தோற்றங்கள் வரிசைக்கிரமமாக உள்ளவை எவை?', options: ['கண்டத்திட்டு – கண்டச்சரிவு – கடலடி சமவெளி – கடல் அகழி', 'கண்டச்சரிவு – கண்டத்திட்டு – கடலடி சமவெளி – கடல் அகழி', 'கடலடி சமவெளி – கண்டச்சரிவு – கண்டத்திட்டு – கடல் அகழி', 'கண்டச்சரிவு – கடலடி சமவெளி – கண்டத்திட்டு – கடல் அகழி'], explanation: 'கரையிலிருந்து: ஆழமற்ற கண்டத்திட்டு, வன்சரிவுடைய கண்டச்சரிவு, ஆழ்கடல் சமவெளி, மிக ஆழமான அகழி என அமைந்துள்ளன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.6, p. 200', answer: 0,
    en: { q: 'Which of the following is NOT correctly matched?', options: ['Gulf Stream – Pacific Ocean', 'Labrador current – North Atlantic Ocean', 'Canary current – North Atlantic Ocean', 'Mozambique current – Indian Ocean'], explanation: 'The Gulf Stream is a warm current of the North Atlantic Ocean, not the Pacific.' },
    ta: { q: 'பின்வருவனவற்றுள் சரியாகப் பொருந்தாதது எது?', options: ['கல்ஃப் நீரோட்டம் – பசிபிக் பெருங்கடல்', 'லாப்ரடார் கடல்நீரோட்டம் – வட அட்லாண்டிக் பெருங்கடல்', 'கேனரி கடல்நீரோட்டம் – வட அட்லாண்டிக் பெருங்கடல்', 'மொசாம்பிக் கடல்நீரோட்டம் – இந்தியப் பெருங்கடல்'], explanation: 'கல்ஃப் நீரோட்டம் வட அட்லாண்டிக் பெருங்கடலின் வெப்ப நீரோட்டம்; பசிபிக் பெருங்கடலில் அல்ல.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise III.4, p. 200', answer: 0,
    en: { q: 'Heavy rains over the oceans', options: ['decrease salinity in the oceans', 'increase salinity in the oceans', 'cause spring tides', 'create oceanic ridges'], explanation: 'Rain water is fresh water, so heavy rains dilute sea water and decrease its salinity.' },
    ta: { q: 'கடல்களின் மீது பெய்யும் அதிக மழை', options: ['கடலில் உவர்ப்பியத்தைக் குறைக்கிறது', 'கடலில் உவர்ப்பியத்தை அதிகரிக்கிறது', 'உயர் ஓதங்களை உருவாக்குகிறது', 'கடலடி மலைத்தொடர்களை உருவாக்குகிறது'], explanation: 'மழைநீர் நன்னீர் என்பதால் அதிக மழை கடல்நீரை நீர்க்கச் செய்து உவர்ப்பியத்தைக் குறைக்கிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.5, p. 200', answer: 0,
    en: { q: 'The Kuroshio Current flows', options: ['along the coast of Japan', 'along the coast of Namibia', 'along the coast of Peru', 'along the coast of California'], explanation: 'The Kuroshio is a warm current of the North Pacific; its meeting with the Oyashio produces fog around Hokkaido, Japan.' },
    ta: { q: 'குரோஷியோ நீரோட்டம் பாயும் பகுதி', options: ['ஜப்பான் கடற்கரையோரம்', 'நமீபியா கடற்கரையோரம்', 'பெரு கடற்கரையோரம்', 'கலிபோர்னியா கடற்கரையோரம்'], explanation: 'குரோஷியோ வட பசிபிக் பெருங்கடலின் வெப்ப நீரோட்டம்; ஒயோஷியோ நீரோட்டத்துடன் இணைந்து ஹொக்கைடோவில் பனிமூட்டத்தை உருவாக்குகிறது.' },
  },
  {
    difficulty: 'medium', source: '§4.3, p. 193', answer: 0,
    en: { q: 'Porous rock strata filled with water, found below the earth\'s surface, are called', options: ['aquifers', 'water table', 'isobaths', 'abyssal plains'], explanation: 'Aquifers are porous rock strata filled with water; the water table is the level below the ground where water is collected.' },
    ta: { q: 'நிலத்தின் அடியில் நீர் தேங்கி நிற்கும் நீர்க்கொள் பாறை அடுக்குகள் இவ்வாறு அழைக்கப்படுகின்றன', options: ['நீர்க்கொள்படுகை', 'நிலத்தடி நீர்மட்டம்', 'சம ஆழக்கோடு', 'ஆழ்கடல் சமவெளி'], explanation: 'நீர் உட்புகாப் பாறையின் மேல்பகுதியில் நீர் தேங்கி நிற்கும் பகுதி நீர்க்கொள்படுகை (Aquifers); நிலத்தடி நீரின் மேல்மட்டம் நிலத்தடி நீர்மட்டம்.' },
  },
  {
    difficulty: 'medium', source: '§4.4, p. 193', answer: 0,
    en: { q: 'The Northern Hemisphere is called the Land Hemisphere because it holds', options: ['61% of land', '81% of land', '61% of water', '97% of land'], explanation: 'The Northern Hemisphere holds 61% of land, while the Southern Hemisphere holds 81% of water (Water Hemisphere).' },
    ta: { q: 'வட அரைக்கோளம் நில அரைக்கோளம் என்று அழைக்கப்படக் காரணம், அது கொண்டுள்ள', options: ['61% நிலப்பரப்பு', '81% நிலப்பரப்பு', '61% நீர்ப்பரப்பு', '97% நிலப்பரப்பு'], explanation: 'வட அரைக்கோளம் 61% நிலப்பரப்பையும், தென் அரைக்கோளம் 81% நீர்ப்பரப்பையும் கொண்டுள்ளன.' },
  },
  {
    difficulty: 'medium', source: '§4.4.1, p. 194', answer: 0,
    en: { q: 'Mumbai High in the Arabian Sea is an example of', options: ['oil drilling on the continental shelf', 'a fishing ground on the continental slope', 'an oceanic trench', 'a mid-oceanic ridge'], explanation: 'Continental shelves have extensive mineral fuel deposits and are accessible for oil drilling, e.g., Mumbai High.' },
    ta: { q: 'அரபிக் கடலில் உள்ள ‘மும்பை ஹை’ எதற்கு எடுத்துக்காட்டு?', options: ['கண்டத்திட்டில் எண்ணெய் எடுத்தல்', 'கண்டச்சரிவில் உள்ள மீன்பிடித்தளம்', 'கடல் அகழி', 'மத்தியக் கடலடி மலைத்தொடர்'], explanation: 'கண்டத்திட்டுகளில் எரிசக்தி கனிமங்கள் அதிகம்; இவை ஆழ்துளைக் கிணறுகள் மூலம் எண்ணெய் எடுக்கச் சிறந்த இடம் (எ.கா.) மும்பை ஹை.' },
  },
  {
    difficulty: 'medium', source: '§4.4.1, p. 195', answer: 0,
    en: { q: 'An imaginary line on a map joining points of equal depth is called', options: ['Isobath', 'Isohaline', 'Fathom', 'Isotherm'], explanation: 'An isobath joins points of equal depth; an isohaline joins points of equal salinity; a fathom is a unit of depth.' },
    ta: { q: 'ஒரே அளவிலான ஆழம் கொண்ட இடங்களை வரைபடத்தில் இணைக்கும் கற்பனைக் கோடு', options: ['சம ஆழக்கோடு', 'சம உவர்ப்புக்கோடு', 'பாத்தோம்', 'சம வெப்பக்கோடு'], explanation: 'சம ஆழக்கோடு (Isobath) சம ஆழ இடங்களையும், சம உவர்ப்புக்கோடு (Isohaline) சம உப்புத்தன்மை இடங்களையும் இணைக்கும்; பாத்தோம் ஆழத்தின் அலகு.' },
  },
  {
    difficulty: 'medium', source: '§4.4.1, p. 195', answer: 0,
    en: { q: 'The largest unbroken oceanic ridge is the', options: ['Mid-Atlantic Ridge', 'East Pacific Ridge', 'Mariana Ridge', 'Grand Banks'], explanation: 'The Mid-Atlantic Ridge and the East Pacific Ridge are well known; the Mid-Atlantic Ridge is the largest unbroken oceanic ridge.' },
    ta: { q: 'தொடர்ச்சியாக அமைந்த மிகப்பெரிய கடலடி மலைத்தொடர்', options: ['மத்திய அட்லாண்டிக் மலைத்தொடர்', 'கிழக்கு பசிபிக் மலைத்தொடர்', 'மரியானா மலைத்தொடர்', 'கிராண்ட் பாங்க்'], explanation: 'மத்திய அட்லாண்டிக் மலைத்தொடரும் கிழக்கு பசிபிக் மலைத்தொடரும் நன்கு அறியப்பட்டவை; மத்திய அட்லாண்டிக் மலைத்தொடர் மிகப்பெரிய தொடர்ச்சியான கடலடி மலைத்தொடர்.' },
  },
  {
    difficulty: 'medium', source: '§4.4.2, p. 196', answer: 0,
    en: { q: 'In India, wave energy power plants have been installed at', options: ['Vizhinjam (Kerala) and the Andaman and Nicobar islands', 'the Gulf of Khambhat and the Gulf of Kutch', 'Mumbai High', 'Dona Paula, Goa'], explanation: 'Wave energy plants are at Vizhinjam and the Andaman and Nicobar islands; the Gulfs of Khambhat and Kutch are potential tidal energy zones.' },
    ta: { q: 'இந்தியாவில் அலையாற்றல் மின் உற்பத்தி நிலையங்கள் நிறுவப்பட்டுள்ள இடங்கள்', options: ['விழிஞ்சியம் (கேரளா) மற்றும் அந்தமான் நிக்கோபார் தீவுகள்', 'காம்பே வளைகுடா மற்றும் கட்ச் வளைகுடா', 'மும்பை ஹை', 'டோனா பெளலா, கோவா'], explanation: 'கேரளக் கடற்கரையில் உள்ள விழிஞ்சியம் மற்றும் அந்தமான் நிக்கோபார் தீவுகளில் அலையாற்றல் நிலையங்கள் உள்ளன; காம்பே, கட்ச் வளைகுடாக்கள் ஓதசக்தி மண்டலங்கள்.' },
  },
  {
    difficulty: 'easy', source: '§4.4.1, p. 195', answer: 0,
    en: { q: 'The deepest known underwater sinkhole in the world, called the \'eye\' of the South China Sea, is', options: ['Dragon Hole', 'Mariana Trench', 'Grand Banks', 'Mumbai High'], explanation: 'Dragon Hole is the deepest known underwater sinkhole; local fishermen call it the eye of the South China Sea.' },
    ta: { q: '‘தென் சீனக்கடலின் கண்’ என அழைக்கப்படும் உலகின் மிக ஆழமான கடலடி உறிஞ்சித்துளை', options: ['டிராகன் துளை', 'மரியானா அகழி', 'கிராண்ட் பாங்க்', 'மும்பை ஹை'], explanation: 'உலகின் மிக ஆழமான கடலடி உறிஞ்சித்துளை டிராகன் துளை; மீனவர்கள் இதனை ‘தென் சீனக்கடலின் கண்’ என அழைக்கின்றனர்.' },
  },
  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise I.3, p. 199', answer: 0,
    en: { q: 'Consider the statements: 1. Most of the fishing grounds occur in areas where the continental shelf is wide. 2. Fishing is well developed in warm tropical waters. 3. Mixing of warm and cold currents facilitates plant nutrients for fish. 4. Inland fishing became significant in India. Which are correct?', options: ['1 and 3 are correct', '1 and 2 are correct', '2, 3 and 4 are correct', '1, 2 and 3 are correct'], explanation: 'Wide shallow shelves (e.g., Grand Banks) and the meeting of warm and cold currents (e.g., Newfoundland, Hokkaido) make the major fishing grounds.' },
    ta: { q: 'கீழ்காணும் கூற்றுகளை ஆராய்க: 1. மீன்பிடித்தளங்கள் பெரும்பாலும் அகலமான கண்டத்திட்டுப் பகுதிகளில் காணப்படுகின்றன. 2. வெப்பமண்டல வெதுவெதுப்பான நீர்ப்பகுதிகளில் மீன்பிடித்தொழில் நன்கு வளர்ச்சியடைந்துள்ளது. 3. மீனின் முதன்மை உணவான தாவர ஊட்டச்சத்து வளர்வதற்கு வெப்ப நீரோட்டமும் குளிர் நீரோட்டமும் இணைவதே காரணமாகும். 4. இந்தியாவின் உள்நாட்டு மீன்பிடித்தொழில் குறிப்பிடத்தக்கது ஆகும். சரியானவை எவை?', options: ['1 மற்றும் 3 சரி', '1 மற்றும் 2 சரி', '2, 3 மற்றும் 4 சரி', '1, 2 மற்றும் 3 சரி'], explanation: 'அகலமான ஆழமற்ற கண்டத்திட்டுகளும் (எ.கா. கிராண்ட் பாங்க்) வெப்ப, குளிர் நீரோட்டங்கள் இணையும் பகுதிகளும் (எ.கா. நியூபவுண்ட்லாந்து, ஹொக்கைடோ) சிறந்த மீன்பிடித்தளங்கள்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise II.1, p. 200', answer: 2,
    en: { q: 'Assertion (A): Oceans are always shown in blue in maps.\nReason (R): It indicates the natural colour of the oceans.', options: AR_EN, explanation: 'Showing water bodies in blue is a map convention; it does not show a "natural colour" of ocean water, so R is false.' },
    ta: { q: 'கூற்று (A): வரைபடங்களில் கடல்கள் எப்பொழுதும் நீல நிறத்தில் கொடுக்கப்படும்.\nகாரணம் (R): இது கடல்களின் இயற்கையான நிறத்தைக் காட்டுகிறது.', options: AR_TA, explanation: 'நீர்நிலைகளை நீல நிறத்தில் காட்டுவது வரைபட மரபு; அது கடலின் இயற்கை நிறத்தைக் காட்டுவதல்ல; எனவே காரணம் தவறு.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise II.2, p. 200', answer: 1,
    en: { q: 'Assertion (A): Flat topped seamounts are known as Guyots.\nReason (R): All guyot features are of volcanic origin.', options: AR_EN, explanation: 'Both statements are true, but volcanic origin does not explain why the top is flat, so R does not explain A.' },
    ta: { q: 'கூற்று (A): ஆழ்கடல் மட்டக்குன்றுகள் கயாட் என்று அழைக்கப்படுகின்றன.\nகாரணம் (R): அனைத்து கயாட்டுகளும் எரிமலைச் செயல்பாடுகளால் உருவானவை.', options: AR_TA, explanation: 'இரண்டும் சரி; ஆனால் எரிமலைத் தோற்றம் அவற்றின் மேற்பகுதி தட்டையாக இருப்பதை விளக்கவில்லை.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise II.3, p. 200', answer: 1,
    en: { q: 'Assertion (A): Submarine canyons are deep gorges on the ocean floor.\nReason (R): They are mainly restricted to continental shelf, slope and rise.', options: AR_EN, explanation: 'Both are true (deep canyons are a key feature of the continental slope), but where canyons occur does not explain what they are.' },
    ta: { q: 'கூற்று (A): கடலடித்தளத்தில் காணப்படும் ஆழமான குறுகிய பகுதி கடலடிப் பள்ளத்தாக்குகள் ஆகும்.\nகாரணம் (R): இவை பெரும்பாலும் கண்டத்திட்டு, சரிவு மற்றும் உயர்ச்சிப் பகுதிகளில் மட்டுமே காணப்படுகின்றன.', options: AR_TA, explanation: 'இரண்டும் சரி (கடலடிப் பள்ளத்தாக்குகள் கண்டச்சரிவின் சிறப்பம்சம்); ஆனால் அவை காணப்படும் இடம் அவை என்ன என்பதை விளக்கவில்லை.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise II.4, p. 200', answer: 3,
    en: { q: 'Assertion (A): Atolls are more common in the Atlantic ocean.\nReason (R): The marine population at the depth is less.', options: AR_EN, explanation: 'Atolls are not more common in the Atlantic (coral atolls are typical of the warm Pacific and Indian Oceans), so A is false; marine life is indeed less at depth.' },
    ta: { q: 'கூற்று (A): வட்டப் பவளத்திட்டுகள் (Atolls) அட்லாண்டிக் பெருங்கடலில் பரவலாகக் காணப்படுகின்றன.\nகாரணம் (R): ஆழமான பகுதிகளில் கடல்வாழ் உயிரினங்கள் குறைவாக உள்ளன.', options: AR_TA, explanation: 'வட்டப் பவளத்திட்டுகள் அட்லாண்டிக்கில் பரவலாக இல்லை; எனவே கூற்று தவறு; ஆழமான பகுதிகளில் கடல்வாழ் உயிரினங்கள் குறைவு என்பது சரி.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.6, p. 200', answer: 0,
    en: { q: 'In the match-the-following exercise, the continental slope is matched with', options: ['second order landform', 'deepest point in the Pacific', 'on full and new moon days', 'decreases salinity in the oceans'], explanation: 'Relief features of the ocean floor such as the continental slope are second order landforms.' },
    ta: { q: 'பொருத்துக பயிற்சியில் கண்டச்சரிவுடன் பொருந்துவது', options: ['இரண்டாம் நிலை நிலத்தோற்றம்', 'பசிபிக் பெருங்கடலின் ஆழமான பகுதி', 'அமாவாசை மற்றும் முழு நிலவு நாள்', 'கடலில் உவர்ப்பியம் குறைவு'], explanation: 'கண்டச்சரிவு போன்ற கடலடி நிலத்தோற்றங்கள் இரண்டாம் நிலை நிலத்தோற்றங்கள் ஆகும்.' },
  },
  {
    difficulty: 'hard', source: '§4.4.1, p. 194', answer: 0,
    en: { q: 'Submarine fans, similar to alluvial fans on land, are found in the', options: ['continental rise', 'continental shelf', 'oceanic deeps', 'oceanic ridge'], explanation: 'The continental rise, between the continental slope and abyssal plains, consists of submarine fans similar to alluvial fans on land.' },
    ta: { q: 'நிலத்தில் காணப்படும் வண்டல் விசிறிகளைப் போன்ற கடலடி வண்டல் விசிறிகள் காணப்படும் பகுதி', options: ['கண்ட உயர்ச்சி', 'கண்டத்திட்டு', 'கடல் அகழி', 'கடலடி மலைத்தொடர்'], explanation: 'கண்டச்சரிவிற்கும் கடலடிச் சமவெளிக்கும் இடையில் உள்ள கண்ட உயர்ச்சி கடலடி வண்டல் விசிறிகளைக் கொண்டுள்ளது.' },
  },
  {
    difficulty: 'hard', source: '§4.4.1, p. 195', answer: 0,
    en: { q: 'Abyssal plains in the Atlantic and Indian Oceans are more extensive than in the Pacific because', options: ['most of the world\'s largest rivers empty their sediments into them', 'they have more trenches', 'they are formed by converging plates', 'they receive more sunlight'], explanation: 'Rivers such as the Amazon, Ganga and Brahmaputra empty their sediments into the Atlantic or Indian Ocean.' },
    ta: { q: 'அட்லாண்டிக் மற்றும் இந்தியப் பெருங்கடல்களின் கடலடிச் சமவெளிகள் பசிபிக்கை விடப் பரந்து காணப்படக் காரணம்', options: ['மிகப்பெரிய ஆறுகளுள் பல இக்கடல்களில் படிவுகளைக் கொண்டு சேர்ப்பது', 'அங்கு அகழிகள் அதிகம் இருப்பது', 'புவித்தட்டுகள் இணைவதால் உருவாவது', 'அதிக சூரிய ஒளி பெறுவது'], explanation: 'அமேசான், கங்கை, பிரம்மபுத்திரா போன்ற பெரிய ஆறுகள் இக்கடல்களில் கலப்பதால் கடலடிச் சமவெளிகள் பரந்து காணப்படுகின்றன.' },
  },
  {
    difficulty: 'hard', source: '§4.4.2, p. 196', answer: 0,
    en: { q: 'A neap tide occurs when', options: ['the sun and the moon are at right angles to the earth', 'the Sun, Moon and Earth are in the same line', 'there is a full moon', 'there is a new moon'], explanation: 'At right angles the gravitational forces of the sun and moon work against each other, causing a low neap tide, twice a month at the first and last quarter moon.' },
    ta: { q: 'தாழ் ஓதம் ஏற்படுவது', options: ['சூரியனும் சந்திரனும் புவியுடன் செங்குத்துக் கோணத்தில் வரும்போது', 'புவி, சூரியன், சந்திரன் ஒரே நேர்க்கோட்டில் வரும்போது', 'முழு நிலவு நாளில்', 'அமாவாசை நாளில்'], explanation: 'செங்குத்துக் கோணத்தில் ஈர்ப்பு விசைகள் ஒன்றுக்கொன்று எதிராகச் செயல்படுவதால் தாழ் ஓதம் ஏற்படுகிறது; இது சந்திரனின் முதல் மற்றும் இறுதி கால் பகுதியில், மாதத்தில் இரண்டு முறை நிகழும்.' },
  },
  {
    difficulty: 'medium', source: '§4.4.2, p. 196', answer: 0,
    en: { q: 'Ocean currents move in', options: ['clockwise motion in the Northern Hemisphere and anti-clockwise in the Southern Hemisphere', 'anti-clockwise motion in the Northern Hemisphere and clockwise in the Southern Hemisphere', 'clockwise motion in both hemispheres', 'anti-clockwise motion in both hemispheres'], explanation: 'Ocean currents are in clockwise motion in the Northern Hemisphere and anti-clockwise in the Southern Hemisphere.' },
    ta: { q: 'பெருங்கடல் நீரோட்டங்கள் நகரும் திசை', options: ['வட அரைக்கோளத்தில் கடிகார திசை, தென் அரைக்கோளத்தில் கடிகார திசைக்கு எதிர்திசை', 'வட அரைக்கோளத்தில் கடிகார திசைக்கு எதிர்திசை, தென் அரைக்கோளத்தில் கடிகார திசை', 'இரு அரைக்கோளங்களிலும் கடிகார திசை', 'இரு அரைக்கோளங்களிலும் கடிகார திசைக்கு எதிர்திசை'], explanation: 'பெருங்கடல் நீரோட்டங்கள் வட அரைக்கோளத்தில் கடிகார திசையிலும், தென் அரைக்கோளத்தில் கடிகார திசைக்கு எதிர்திசையிலும் நகருகின்றன.' },
  },
  {
    difficulty: 'hard', source: '§4.4.2, p. 197', answer: 0,
    en: { q: 'Which cold current is one of the causes of the Atacama Desert and is associated with "El Nino"?', options: ['Peruvian / Humboldt Current', 'Benguela Current', 'Canaries Current', 'California Current'], explanation: 'The Peruvian (Humboldt) cold current helps form the Atacama Desert; changes in it are associated with El Nino. Benguela relates to the Namib/Kalahari, Canaries to the Sahara.' },
    ta: { q: 'அட்டகாமா பாலைவனத்திற்குக் காரணமாகவும் எல்-நினோவுடன் தொடர்புடையதாகவும் உள்ள குளிர் நீரோட்டம் எது?', options: ['பெருவியன் (அ) ஹம்போல்டு நீரோட்டம்', 'பெங்குலா நீரோட்டம்', 'கேனரிஸ் நீரோட்டம்', 'கலிபோர்னியா நீரோட்டம்'], explanation: 'பெருவியன் (ஹம்போல்டு) குளிர் நீரோட்டம் அட்டகாமா பாலைவனத்திற்குக் காரணமாக உள்ளது; எல்-நினோவுடனும் தொடர்புடையது.' },
  },
  {
    difficulty: 'hard', source: '§4.4.2, p. 197', answer: 0,
    en: { q: 'Which warm current keeps ports at higher latitudes such as Murmansk ice-free throughout the year?', options: ['North Atlantic Drift', 'Labrador Current', 'Canaries Current', 'Oyashio Current'], explanation: 'The warm North Atlantic Drift keeps ports like Rorvik (Norway), Murmansk and Severodvinsk (Russia) ice-free.' },
    ta: { q: 'மர்மான்ஸ்க் போன்ற உயர் அட்சத் துறைமுகங்களை ஆண்டு முழுவதும் பனி உறையாமல் வைக்கும் வெப்ப நீரோட்டம் எது?', options: ['வட அட்லாண்டிக் நீரோட்டம்', 'லாப்ரடார் நீரோட்டம்', 'கேனரிஸ் நீரோட்டம்', 'ஒயோஷியோ நீரோட்டம்'], explanation: 'வட அட்லாண்டிக் வெப்ப நீரோட்டம் ரோர்விக் (நார்வே), மர்மான்ஸ்க், செவிரோட்வின்ஸ்க் (இரஷ்யா) துறைமுகங்களை பனி உறையாமல் வைக்கிறது.' },
  },
];
