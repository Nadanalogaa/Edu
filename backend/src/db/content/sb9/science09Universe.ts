// Tamil Nadu State Board, 9th Science, Unit 9 – Universe (அண்டம்).
// Book exercises and examples, plus our own questions covering every section.
// Tamil wording follows the terms used in the Tamil-medium textbook.
// source = section/exercise and printed page of the English-medium book.
import { BankQuestion, AR_EN, AR_TA } from './types';

const IMG = '/content/9/state_board/science/09';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.1, p. 111', answer: 0,
    en: { q: 'Who proposed the heliocentric model of the universe?', options: ['Nicolaus Copernicus', 'Tycho Brahe', 'Ptolemy', 'Archimedes'], explanation: 'The Polish astronomer Copernicus placed the Sun at the centre of the solar system.' },
    ta: { q: 'சூரிய மையக் கொள்கையை முன்மொழிந்தவர் யார்?', options: ['நிகோலஸ் கோப்பர் நிக்கஸ்', 'டைக்கோ பிராஹே', 'டாலமி', 'ஆர்க்கிமிடிஸ்'], explanation: 'போலந்து வானியலாளர் கோப்பர் நிக்கஸ் சூரியனை சூரிய மண்டலத்தின் மையத்தில் வைத்தார்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.2, p. 111', answer: 0,
    en: { q: 'Which of the following is not a part of the outer solar system?', options: ['Mercury', 'Saturn', 'Uranus', 'Neptune'], explanation: 'Mercury is an inner (rocky) planet; Saturn, Uranus and Neptune are outer gas giants.' },
    ta: { q: 'இவற்றுள் எது வெளிப்புற சூரிய மண்டலத்தில் உள்ள கோள் அல்ல?', options: ['புதன்', 'சனி', 'யுரேனஸ்', 'நெப்டியூன்'], explanation: 'புதன் உட்புறப் பாறைக் கோள்; சனி, யுரேனஸ், நெப்டியூன் வெளிப்புற வாயுக் கோள்கள்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.3, p. 111', answer: 0,
    en: { q: 'Ceres is a(n)', options: ['asteroid', 'meteor', 'star', 'planet'], explanation: 'Ceres, 946 km across, is the biggest asteroid in the belt between Mars and Jupiter.' },
    ta: { q: 'செரஸ் என்பது', options: ['சிறுகோள்', 'விண்கல்', 'விண்மீன்', 'கோள்'], explanation: '946 கிமீ விட்டமுள்ள செரஸ், செவ்வாய்க்கும் வியாழனுக்கும் இடையிலுள்ள மிகப்பெரிய சிறுகோள்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.5, p. 111', answer: 0,
    en: { q: 'The Big Bang occurred _____ years ago.', options: ['13.7 billion', '15 million', '15 billion', '20 million'], explanation: 'According to the Big Bang theory, the explosion occurred about 13.7 billion years ago.' },
    ta: { q: '_____ ஆண்டுகளுக்கு முன்பு பெருவெடிப்பு ஏற்பட்டது.', options: ['13.7 பில்லியன்', '15 மில்லியன்', '15 பில்லியன்', '20 மில்லியன்'], explanation: 'பெருவெடிப்புக் கொள்கையின்படி ஏறக்குறைய 13.7 பில்லியன் ஆண்டுகளுக்கு முன்பு வெடிப்பு நிகழ்ந்தது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.1, p. 111', answer: 0,
    en: { q: 'The speed of the Sun (around the centre of the Milky Way) in km/s is _____.', options: ['250', '30', '3,00,000', '11.2'], explanation: 'The Sun travels at about 250 km per second (9 lakh km/h) around the galaxy.' },
    ta: { q: 'சூரியனின் திசைவேகம் (பால்வெளி வீதியின் மையத்தைச் சுற்றி) _____ கிமீ/வி.', options: ['250', '30', '3,00,000', '11.2'], explanation: 'சூரியன் வினாடிக்கு ஏறக்குறைய 250 கிமீ (மணிக்கு 9 லட்சம் கிமீ) வேகத்தில் விண்மீன் திரளைச் சுற்றுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.3, p. 111', answer: 0,
    en: { q: 'India’s first satellite is _____.', options: ['Aryabhatta', 'Sputnik', 'Chandrayaan', 'Bhaskara'], explanation: 'India launched its first satellite Aryabhatta on April 19, 1975.' },
    ta: { q: 'இந்தியாவின் முதல் செயற்கைக்கோள் _____.', options: ['ஆர்யபட்டா', 'ஸ்புட்னிக்', 'சந்திரயான்', 'பாஸ்கரா'], explanation: 'இந்தியா தனது முதல் செயற்கைக்கோள் ஆர்யபட்டாவை 1975 ஏப்ரல் 19 அன்று செலுத்தியது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.4, p. 111', answer: 0,
    en: { q: 'The third law of Kepler is also known as the Law of _____.', options: ['Harmonies', 'Ellipses', 'Equal Areas', 'Gravitation'], explanation: 'Kepler’s laws: first – ellipses, second – equal areas, third – harmonies.' },
    ta: { q: 'கெப்ளரின் மூன்றாம் விதியை _____ என்றும் அழைப்பர்.', options: ['ஒத்திசைவுகளின் விதி', 'நீள்வட்டங்களின் விதி', 'சம பரப்புகளின் விதி', 'ஈர்ப்பு விதி'], explanation: 'கெப்ளரின் விதிகள்: முதல் – நீள்வட்டங்கள், இரண்டாம் – சம பரப்புகள், மூன்றாம் – ஒத்திசைவுகள்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.5, p. 111', answer: 0,
    en: { q: 'The number of planets in our solar system is _____.', options: ['8', '9', '7', '10'], explanation: 'There are eight planets: four inner (rocky) and four outer (gas giants).' },
    ta: { q: 'நம் சூரிய குடும்பத்திலுள்ள கோள்களின் எண்ணிக்கை _____ ஆகும்.', options: ['8', '9', '7', '10'], explanation: 'எட்டுக் கோள்கள் உள்ளன: நான்கு உட்புறப் பாறைக் கோள்கள், நான்கு வெளிப்புற வாயுக் கோள்கள்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise III.4, p. 111', answer: 0,
    en: { q: 'Which planet is called the red planet?', options: ['Mars', 'Venus', 'Jupiter', 'Mercury'], explanation: 'Mars appears slightly reddish, so it is called the red planet. The book statement is true.' },
    ta: { q: 'எந்தக் கோள் சிவப்புக்கோள் என்றழைக்கப்படுகிறது?', options: ['செவ்வாய்', 'வெள்ளி', 'வியாழன்', 'புதன்'], explanation: 'செவ்வாய் சற்றே சிவப்பு நிறத்தில் தோன்றுவதால் சிவப்புக்கோள் எனப்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise IV.1, p. 111', answer: 0,
    en: { q: 'The Sun and the celestial bodies which revolve around it together form the', options: ['solar system', 'galaxy', 'constellation', 'universe'], explanation: 'The solar system includes the Sun, planets, comets, asteroids and meteors held by the Sun’s gravity.' },
    ta: { q: 'சூரியனும் அதைச் சுற்றி இயங்கும் வான் பொருள்களும் சேர்ந்தது', options: ['சூரிய மண்டலம்', 'விண்மீன் திரள்', 'விண்மீன் குழு', 'அண்டம்'], explanation: 'சூரியன், கோள்கள், வால் விண்மீன்கள், சிறுகோள்கள், விண்கற்கள் ஆகியவை சேர்ந்து சூரிய மண்டலம்.' },
  },
  {
    difficulty: 'easy', source: '§9.1, p. 102', answer: 0,
    en: { q: 'One light year is the', options: ['distance that light travels in one year', 'time light takes to reach the Earth from the Sun', 'speed of light in one year', 'age of a star'], explanation: '1 light year = 9.4607 × 10¹² km, the distance light travels in one year.' },
    ta: { q: 'ஒரு ஒளி ஆண்டு என்பது', options: ['ஒளி ஓர் ஆண்டில் கடக்கும் தொலைவு', 'சூரியனிடமிருந்து ஒளி பூமியை அடைய ஆகும் காலம்', 'ஓர் ஆண்டில் ஒளியின் வேகம்', 'ஒரு விண்மீனின் வயது'], explanation: '1 ஒளி ஆண்டு = 9.4607 × 10¹² கிமீ; ஒளி ஓர் ஆண்டில் கடக்கும் தொலைவு.' },
  },
  {
    difficulty: 'easy', source: '§9.1.2, p. 103', answer: 0,
    en: { q: 'Our nearest neighbouring galaxy is', options: ['Andromeda', 'Milky Way', 'Orion', 'Cassiopeia'], explanation: 'Andromeda, about 2.5 million light years away, is the closest galaxy to the Milky Way.' },
    ta: { q: 'நமக்கு மிக அருகிலுள்ள விண்மீன் திரள்', options: ['ஆண்ட்ரோமெடா', 'பால்வெளி வீதி', 'ஓரியன்', 'காசியோப்பியா'], explanation: 'ஏறக்குறைய 2.5 மில்லியன் ஒளி ஆண்டுகள் தொலைவிலுள்ள ஆண்ட்ரோமெடா நமக்கு அருகிலுள்ள விண்மீன் திரள்.' },
  },
  {
    difficulty: 'easy', source: '§9.1.2, p. 103', answer: 0,
    en: { q: 'The shape of the Milky Way galaxy is', options: ['spiral', 'elliptical', 'irregular', 'spherical'], explanation: 'Galaxies are spiral, elliptical or irregular; the Milky Way is spiral.' },
    ta: { q: 'பால்வெளி வீதி விண்மீன் திரளின் வடிவம்', options: ['சுருள்', 'நீள்வட்டம்', 'ஒழுங்கற்றது', 'கோளம்'], explanation: 'விண்மீன் திரள்கள் சுருள், நீள்வட்ட, ஒழுங்கற்ற வடிவங்களில் உள்ளன; பால்வெளி வீதி சுருள் வடிவம்.' },
  },
  {
    difficulty: 'easy', source: '§9.1.3, p. 104', answer: 0,
    en: { q: 'The number of formally accepted constellations is', options: ['88', '12', '100', '8'], explanation: 'There are 88 formally accepted constellations, such as Aries, Leo, Orion and Scorpius.' },
    ta: { q: 'முறையாக ஏற்றுக்கொள்ளப்பட்ட விண்மீன் குழுக்களின் எண்ணிக்கை', options: ['88', '12', '100', '8'], explanation: 'மேஷம், சிம்மம், ஓரியன், விருச்சிகம் போன்ற 88 விண்மீன் குழுக்கள் முறையாக ஏற்கப்பட்டுள்ளன.' },
  },
  {
    difficulty: 'easy', source: '§9.2.2, p. 106', answer: 0,
    en: { q: 'The largest planet in the solar system is', options: ['Jupiter', 'Saturn', 'Earth', 'Neptune'], explanation: 'Jupiter is about 11 times larger and 318 times heavier than the Earth.' },
    ta: { q: 'சூரிய மண்டலத்தின் மிகப்பெரிய கோள்', options: ['வியாழன்', 'சனி', 'புவி', 'நெப்டியூன்'], explanation: 'வியாழன் பூமியை விட ஏறக்குறைய 11 மடங்கு பெரியது, 318 மடங்கு எடை கொண்டது.' },
  },
  {
    difficulty: 'easy', source: '§9.2.2, p. 106', answer: 0,
    en: { q: 'The hottest planet in our solar system is', options: ['Venus', 'Mercury', 'Mars', 'Jupiter'], explanation: 'Venus, almost the size of Earth, is the hottest planet; it is also the brightest object in the night sky after the Moon.' },
    ta: { q: 'நம் சூரிய மண்டலத்தின் மிக அதிக வெப்பம் கொண்ட கோள்', options: ['வெள்ளி', 'புதன்', 'செவ்வாய்', 'வியாழன்'], explanation: 'பூமியின் அளவையொத்த வெள்ளி மிக அதிக வெப்பநிலை கொண்ட கோள்; நிலவுக்குப் பிறகு வானத்தில் மிகப் பிரகாசமானதும் இதுவே.' },
  },
  {
    difficulty: 'easy', source: '§9.6, p. 109', answer: 0,
    en: { q: 'The International Space Station (ISS) orbits the Earth at a height of approximately', options: ['400 km', '36,000 km', '4000 km', '40 km'], explanation: 'The ISS goes around in low Earth orbit at about 400 km.' },
    ta: { q: 'பன்னாட்டு விண்வெளி மையம் பூமியைச் சுற்றி வரும் உயரம் ஏறக்குறைய', options: ['400 கிமீ', '36,000 கிமீ', '4000 கிமீ', '40 கிமீ'], explanation: 'பன்னாட்டு விண்வெளி மையம் ஏறக்குறைய 400 கிமீ உயரத்தில் தாழ்வான புவிச் சுற்றுப்பாதையில் இயங்குகிறது.' },
  },
  // ---------------------------------------------------------------- Medium
  {
    difficulty: 'medium', source: 'Book exercise III.1, p. 111', answer: 0,
    en: { q: 'Which statement about the ISS is correct?', options: ['The ISS is a proof of international cooperation.', 'The ISS was built by NASA alone.', 'The ISS orbits the Sun.', 'The ISS has been empty since 2000.'], explanation: 'Five space agencies of 16 countries build and run the ISS, and it has always had crew since 2000. The book statement is true.' },
    ta: { q: 'பன்னாட்டு விண்வெளி மையம் பற்றிய சரியான கூற்று எது?', options: ['பன்னாட்டு விண்வெளி மையம் என்பது சர்வதேச ஒத்துழைப்பின் ஒரு ஆதாரமாகும்.', 'இது நாசாவால் மட்டும் கட்டப்பட்டது.', 'இது சூரியனைச் சுற்றி வருகிறது.', '2000 முதல் இதில் யாரும் இல்லை.'], explanation: '16 நாடுகளின் ஐந்து விண்வெளி நிறுவனங்கள் இதை இயக்குகின்றன; 2000 முதல் எப்போதும் மனிதர்கள் உள்ளனர். பாடநூல் கூற்று சரி.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.2, p. 111', answer: 0,
    en: { q: '"Halley’s comet appears after nearly 67 hours." This statement is', options: ['false; it appears nearly every 76 years', 'true', 'false; it appears every 67 years', 'false; it appears every 76 days'], explanation: 'Halley’s comet appears nearly every 76 years; it was last seen in 1986 and will next be seen in 2062.' },
    ta: { q: '"ஹேலிஸ் வால்மீன் 67 மணி நேரங்களுக்கு ஒரு முறை தோன்றும்." இக்கூற்று', options: ['தவறு; ஏறக்குறைய 76 ஆண்டுகளுக்கு ஒரு முறை தோன்றும்', 'சரி', 'தவறு; 67 ஆண்டுகளுக்கு ஒரு முறை தோன்றும்', 'தவறு; 76 நாட்களுக்கு ஒரு முறை தோன்றும்'], explanation: 'ஹேலி வால் விண்மீன் ஏறக்குறைய 76 ஆண்டுகளுக்கு ஒருமுறை தோன்றும்; கடைசியாக 1986 இல் தோன்றியது, அடுத்து 2062 இல் தோன்றும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.3, p. 111', answer: 0,
    en: { q: '"Satellites nearer to the Earth should have lesser orbital velocity." This statement is', options: ['false; nearer satellites need a greater orbital velocity', 'true', 'false; orbital velocity does not depend on height', 'false; nearer satellites need zero velocity'], explanation: 'v = √(GM/(R + h)): the smaller the height h, the larger the orbital velocity.' },
    ta: { q: '"பூமிக்கு அருகே உள்ள துணைக்கோள்களுக்குச் சுழலும் திசைவேகம் குறைவாக இருக்கும்." இக்கூற்று', options: ['தவறு; அருகிலுள்ள துணைக்கோள்களுக்குச் சுழற்சித் திசைவேகம் அதிகம்', 'சரி', 'தவறு; சுழற்சித் திசைவேகம் உயரத்தைச் சார்ந்ததல்ல', 'தவறு; அருகிலுள்ளவற்றுக்குத் திசைவேகம் சுழி'], explanation: 'v = √(GM/(R + h)): உயரம் h குறையக் குறைய சுழற்சித் திசைவேகம் அதிகரிக்கும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.2, p. 111', answer: 0,
    en: { q: 'Orbital velocity is the', options: ['horizontal velocity given to a satellite at a given height so that it makes a circular orbit around the planet', 'velocity of a planet around the Sun', 'vertical velocity needed to escape from the Earth', 'speed of rotation of the Earth'], explanation: 'This is the book definition; the satellite is released horizontally with this velocity from the rocket.' },
    ta: { q: 'சுழற்சித் திசைவேகம் என்பது', options: ['குறிப்பிட்ட உயரத்தில் துணைக்கோள் கோளைச் சுற்றி வட்டப்பாதையில் இயங்க அதற்கு அளிக்கப்படும் கிடைமட்டத் திசைவேகம்', 'சூரியனைச் சுற்றும் கோளின் திசைவேகம்', 'பூமியிலிருந்து தப்பிக்கத் தேவையான செங்குத்துத் திசைவேகம்', 'பூமி தன்னைத்தானே சுற்றும் வேகம்'], explanation: 'இது பாடநூல் வரையறை; ராக்கெட்டிலிருந்து துணைக்கோள் இத்திசைவேகத்துடன் கிடைமட்டமாக விடுவிக்கப்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.3, p. 111', answer: 0,
    en: { q: 'The time period of a satellite is the time taken by it to', options: ['complete one revolution around the Earth', 'rotate once on its own axis', 'reach its orbit from the launch pad', 'cross the equator once'], explanation: 'T = distance covered ÷ orbital velocity = 2π(R + h)/v.' },
    ta: { q: 'துணைக்கோளின் சுற்றுக்காலம் என்பது அது', options: ['பூமியை ஒருமுறை சுற்றி வர எடுக்கும் காலம்', 'தன்னைத்தானே ஒருமுறை சுற்ற எடுக்கும் காலம்', 'ஏவுதளத்திலிருந்து சுற்றுப்பாதையை அடைய எடுக்கும் காலம்', 'நிலநடுக்கோட்டை ஒருமுறை கடக்க எடுக்கும் காலம்'], explanation: 'T = கடந்த தொலைவு ÷ சுழற்சித் திசைவேகம் = 2π(R + h)/v.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.4, p. 111', answer: 0,
    en: { q: 'A body moving in an orbit around a planet is a satellite. The two types of satellites are', options: ['natural satellites (moons) and artificial satellites', 'inner and outer satellites', 'rocky and gaseous satellites', 'comets and asteroids'], explanation: 'Moons are natural satellites; man-made ones like Aryabhatta are artificial satellites.' },
    ta: { q: 'ஒரு கோளைச் சுற்றி வரும் பொருள் துணைக்கோள். துணைக்கோள்களின் இரு வகைகள்', options: ['இயற்கைத் துணைக்கோள்கள் (நிலவுகள்), செயற்கைத் துணைக்கோள்கள்', 'உட்புற, வெளிப்புறத் துணைக்கோள்கள்', 'பாறை, வாயுத் துணைக்கோள்கள்', 'வால் விண்மீன்கள், சிறுகோள்கள்'], explanation: 'நிலவுகள் இயற்கைத் துணைக்கோள்கள்; ஆர்யபட்டா போன்ற மனிதர் உருவாக்கியவை செயற்கைத் துணைக்கோள்கள்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.5, p. 111', answer: 0,
    en: { q: 'Which statement about the inner planets is correct?', options: ['They have a solid rocky crust and no rings', 'They are gas giants with rings', 'They are farther apart than the outer planets', 'They are made mainly of hydrogen and helium'], explanation: 'Mercury, Venus, Earth and Mars are terrestrial (rocky) planets close together near the Sun and have no rings.' },
    ta: { q: 'உட்புறக் கோள்கள் பற்றிய சரியான கூற்று எது?', options: ['இவை திடமான பாறை மேலோடு கொண்டவை; வளையங்கள் இல்லை', 'இவை வளையங்களுடைய வாயுப் பெருங்கோள்கள்', 'இவை வெளிப்புறக் கோள்களை விட அதிக இடைவெளியில் உள்ளன', 'இவை பெரும்பாலும் ஹைட்ரஜன், ஹீலியத்தால் ஆனவை'], explanation: 'புதன், வெள்ளி, புவி, செவ்வாய் ஆகியவை சூரியனுக்கு அருகில் நெருக்கமாக அமைந்த பாறைக் கோள்கள்; இவற்றுக்கு வளையங்கள் இல்லை.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.6, p. 111', answer: 0,
    en: { q: 'Comets are', options: ['lumps of dust and ice that revolve around the Sun in highly elliptical orbits', 'rocks between the orbits of Mars and Jupiter', 'stars that have burnt out', 'natural satellites of Jupiter'], explanation: 'Near the Sun a comet vaporises and forms a head and a long tail; its period of revolution is very long.' },
    ta: { q: 'வால் விண்மீன்கள் என்பவை', options: ['அதி நீள்வட்டப் பாதையில் சூரியனைச் சுற்றி வரும் தூசு, பனி நிறைந்த பொருள்கள்', 'செவ்வாய்க்கும் வியாழனுக்கும் இடையிலுள்ள பாறைகள்', 'எரிந்து முடிந்த விண்மீன்கள்', 'வியாழனின் இயற்கைத் துணைக்கோள்கள்'], explanation: 'சூரியனை நெருங்கும்போது வால் விண்மீன் ஆவியாகித் தலையும் நீண்ட வாலும் உருவாகும்; இதன் சுற்றுக்காலம் மிக நீண்டது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.8, p. 111', answer: 0,
    en: { q: 'Which factors have made life on Earth possible?', options: ['Right distance from the Sun, right temperature, water, suitable atmosphere and an ozone blanket', 'Its rings and many moons', 'Its large size and strong winds', 'Its retrograde rotation'], explanation: 'Due to its right distance from the Sun, the Earth has the right temperature, water, atmosphere and ozone layer.' },
    ta: { q: 'பூமியில் உயிர்வாழ்வதற்கான காரணிகள் யாவை?', options: ['சூரியனிடமிருந்து சரியான தொலைவு, சரியான வெப்பநிலை, நீர், ஏற்ற வளிமண்டலம், ஓசோன் படலம்', 'அதன் வளையங்களும் பல நிலவுகளும்', 'அதன் பெரிய அளவும் வேகமான காற்றும்', 'அதன் எதிர்த்திசைச் சுழற்சி'], explanation: 'சூரியனிடமிருந்து சரியான தொலைவில் இருப்பதால் பூமிக்கு ஏற்ற வெப்பநிலை, நீர், வளிமண்டலம், ஓசோன் படலம் உள்ளன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.2, p. 111', answer: 0,
    en: { q: 'The rotational period of the Sun near its poles is _____.', options: ['about 36 days', '24 hours', '365 days', '25 years'], explanation: 'The Sun is not solid; it rotates faster at its equator (about 25 days) and more slowly near the poles (about 36 days).' },
    ta: { q: 'முனைகளில், சூரியனின் சுழற்சிக் காலம் _____.', options: ['ஏறக்குறைய 36 நாட்கள்', '24 மணி நேரம்', '365 நாட்கள்', '25 ஆண்டுகள்'], explanation: 'சூரியன் திடப்பொருள் அல்ல; நிலநடுக்கோட்டில் வேகமாகவும் (ஏறக்குறைய 25 நாட்கள்) முனைகளில் மெதுவாகவும் (ஏறக்குறைய 36 நாட்கள்) சுழல்கிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.1, p. 111', answer: 0,
    en: { q: 'Some stars appear blue and some red because', options: ['the colour of a star depends on its temperature – hot stars are blue or white, cooler stars are red or orange', 'blue stars are closer to the Earth', 'red stars are bigger', 'stars reflect the colour of nearby planets'], explanation: 'Stars appear in different colours depending on their temperature.' },
    ta: { q: 'சில விண்மீன்கள் நீல நிறமாகவும், சில சிவப்பு நிறமாகவும் தோன்றுவது ஏன்?', options: ['விண்மீனின் நிறம் அதன் வெப்பநிலையைச் சார்ந்தது – வெப்பமானவை நீலம் அல்லது வெள்ளை, குளிர்ந்தவை சிவப்பு அல்லது ஆரஞ்சு', 'நீல விண்மீன்கள் பூமிக்கு அருகில் உள்ளன', 'சிவப்பு விண்மீன்கள் பெரியவை', 'அருகிலுள்ள கோள்களின் நிறத்தை எதிரொளிக்கின்றன'], explanation: 'விண்மீன்கள் அவற்றின் வெப்பநிலைக்கு ஏற்ப வெவ்வேறு நிறங்களில் தோன்றுகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.3, p. 111', answer: 0,
    en: { q: 'Some satellites are called geostationary because', options: ['they take 24 hours per revolution, the same as the Earth’s rotation, so they stay over the same spot', 'they do not move at all in space', 'they are placed on the surface of the Earth', 'they orbit the Sun with the Earth'], explanation: 'A satellite whose period equals the Earth’s rotation period stays fixed relative to a point on the Earth.' },
    ta: { q: 'சில செயற்கைக் கோள்கள் புவி நிலை செயற்கைக் கோள்கள் எனக் கருதப்படுவது ஏன்?', options: ['அவை பூமியின் சுழற்சியைப் போலவே 24 மணியில் ஒருமுறை சுற்றுவதால் ஒரே இடத்தின் மேல் நிலையாக உள்ளன', 'அவை விண்வெளியில் நகரவே இல்லை', 'அவை பூமியின் மேற்பரப்பில் வைக்கப்பட்டுள்ளன', 'அவை பூமியுடன் சூரியனைச் சுற்றுகின்றன'], explanation: 'சுற்றுக்காலம் பூமியின் சுழற்சிக் காலத்திற்குச் சமமான துணைக்கோள் பூமியின் ஒரு புள்ளியைப் பொறுத்து நிலையாக இருக்கும்.' },
  },
  {
    difficulty: 'medium', source: '§9.1, p. 102', answer: 0,
    en: { q: 'All the atoms together make up only about what percent of the universe?', options: ['4 %', '40 %', '96 %', '75 %'], explanation: 'About 4 % is ordinary matter; most of the universe is dark matter and dark energy.' },
    ta: { q: 'அண்டத்திலுள்ள அனைத்து அணுக்களும் சேர்ந்து அண்டத்தின் ஏறக்குறைய எத்தனை சதவீதம்?', options: ['4 %', '40 %', '96 %', '75 %'], explanation: 'ஏறக்குறைய 4 % மட்டுமே சாதாரணப் பொருள்; பெரும்பகுதி கரும்பொருளும் கரும் ஆற்றலும்.' },
  },
  {
    difficulty: 'medium', source: '§9.1.1, p. 103', answer: 0,
    en: { q: 'Nearly all of the matter in the universe created in the Big Bang is made of', options: ['hydrogen and helium', 'oxygen and carbon', 'iron and silicon', 'calcium and nitrogen'], explanation: 'Hydrogen and helium came from the Big Bang; heavier elements like oxygen, carbon and iron are formed in the cores of stars.' },
    ta: { q: 'பெருவெடிப்பில் உருவான அண்டத்தின் ஏறக்குறைய அனைத்துப் பொருள்களும் எவற்றால் ஆனவை?', options: ['ஹைட்ரஜன், ஹீலியம்', 'ஆக்சிஜன், கார்பன்', 'இரும்பு, சிலிக்கான்', 'கால்சியம், நைட்ரஜன்'], explanation: 'ஹைட்ரஜனும் ஹீலியமும் பெருவெடிப்பில் உருவாயின; ஆக்சிஜன், கார்பன், இரும்பு போன்றவை விண்மீன்களின் உள்ளகத்தில் உருவாகின்றன.' },
  },
  {
    difficulty: 'medium', source: '§9.2.1, p. 105', answer: 0,
    en: { q: 'The Sun shines and gives heat because of', options: ['nuclear fusion of hydrogen into helium', 'burning of coal and oil', 'reflection of light from planets', 'nuclear fission of uranium'], explanation: 'Under enormous pressure hydrogen atoms fuse to form helium, releasing huge energy as light and heat.' },
    ta: { q: 'சூரியன் ஒளிர்ந்து வெப்பம் தருவதற்குக் காரணம்', options: ['ஹைட்ரஜன் ஹீலியமாக மாறும் அணுக்கரு இணைவு', 'நிலக்கரி, எண்ணெய் எரிதல்', 'கோள்களிலிருந்து ஒளி எதிரொளிப்பு', 'யுரேனியத்தின் அணுக்கரு பிளவு'], explanation: 'பெரும் அழுத்தத்தில் ஹைட்ரஜன் அணுக்கள் இணைந்து ஹீலியமாகி ஒளியாகவும் வெப்பமாகவும் பெரும் ஆற்றலை வெளியிடுகின்றன.' },
  },
  {
    difficulty: 'medium', source: '§9.2.2, p. 106', answer: 0,
    en: { q: 'On which planet does the Sun rise in the west and set in the east?', options: ['Venus', 'Mars', 'Mercury', 'Saturn'], explanation: 'Venus spins in the direction opposite to all other planets.' },
    ta: { q: 'எந்தக் கோளில் சூரியன் மேற்கே தோன்றி கிழக்கே மறைகிறது?', options: ['வெள்ளி', 'செவ்வாய்', 'புதன்', 'சனி'], explanation: 'வெள்ளி மற்ற கோள்களுக்கு எதிர்த் திசையில் சுழல்கிறது.' },
  },
  {
    difficulty: 'medium', source: '§9.2.2, p. 106', answer: 0,
    en: { q: 'Match each moon with its feature: Ganymede, Titan, Triton', options: ['Ganymede – largest moon in the solar system; Titan – only moon with clouds; Triton – moves opposite to its planet’s spin', 'Ganymede – only moon with clouds; Titan – largest moon; Triton – moon of Saturn', 'Ganymede – moon of Mars; Titan – largest moon; Triton – only moon with clouds', 'Ganymede – moon of Neptune; Titan – moon of Jupiter; Triton – moon of Saturn'], explanation: 'Ganymede (Jupiter) is the largest moon, Titan (Saturn) is the only moon with clouds, and Triton (Neptune) moves opposite to its planet’s spin.' },
    ta: { q: 'நிலவுகளையும் அவற்றின் சிறப்பையும் பொருத்துக: கானிமீடு, டைட்டன், டிரைட்டான்', options: ['கானிமீடு – சூரிய மண்டலத்தின் மிகப்பெரிய நிலவு; டைட்டன் – மேகங்களுடைய ஒரே நிலவு; டிரைட்டான் – கோளின் சுழற்சிக்கு எதிர்த்திசையில் சுற்றும் நிலவு', 'கானிமீடு – மேகங்களுடைய ஒரே நிலவு; டைட்டன் – மிகப்பெரிய நிலவு; டிரைட்டான் – சனியின் நிலவு', 'கானிமீடு – செவ்வாயின் நிலவு; டைட்டன் – மிகப்பெரிய நிலவு; டிரைட்டான் – மேகங்களுடைய ஒரே நிலவு', 'கானிமீடு – நெப்டியூனின் நிலவு; டைட்டன் – வியாழனின் நிலவு; டிரைட்டான் – சனியின் நிலவு'], explanation: 'கானிமீடு (வியாழன்) மிகப்பெரிய நிலவு, டைட்டன் (சனி) மேகங்களுடைய ஒரே நிலவு, டிரைட்டான் (நெப்டியூன்) கோளின் சுழற்சிக்கு எதிர்த்திசையில் சுற்றுகிறது.' },
  },
  {
    difficulty: 'medium', source: '§9.2.3, p. 107', answer: 0,
    en: { q: 'A meteor that does not burn up completely in the atmosphere and falls on the Earth’s surface is called a', options: ['meteorite', 'comet', 'asteroid', 'satellite'], explanation: 'Most meteors burn up due to friction; bigger ones that reach the ground are meteorites.' },
    ta: { q: 'வளிமண்டலத்தில் முழுவதும் எரியாமல் பூமியின் மேற்பரப்பில் விழும் விண்கல்', options: ['விண் வீழ்கல்', 'வால் விண்மீன்', 'சிறுகோள்', 'துணைக்கோள்'], explanation: 'பெரும்பாலான விண்கற்கள் உராய்வால் எரிந்துவிடும்; தரையை அடையும் பெரியவை விண் வீழ்கற்கள்.' },
  },
  {
    difficulty: 'medium', source: '§9.2.3, p. 107', answer: 0,
    en: { q: 'Which two planets have no moons?', options: ['Mercury and Venus', 'Mars and Venus', 'Mercury and Mars', 'Uranus and Neptune'], explanation: 'Among the planets, all have moons except Mercury and Venus.' },
    ta: { q: 'நிலவுகள் இல்லாத இரண்டு கோள்கள்', options: ['புதன், வெள்ளி', 'செவ்வாய், வெள்ளி', 'புதன், செவ்வாய்', 'யுரேனஸ், நெப்டியூன்'], explanation: 'புதன், வெள்ளி தவிர அனைத்துக் கோள்களுக்கும் நிலவுகள் உள்ளன.' },
  },
  {
    difficulty: 'medium', source: '§9.2.3, p. 107 (Do you know?)', answer: 0,
    en: { q: 'The time taken by the Sun to complete one revolution around the Milky Way (about 225 million years) is called a', options: ['cosmic year', 'light year', 'solar year', 'galactic day'], explanation: 'Travelling at about 250 km/s, the Sun takes about 225 million years for one revolution – a cosmic year.' },
    ta: { q: 'சூரியன் பால்வெளி வீதியை ஒருமுறை சுற்றி வர எடுக்கும் காலம் (ஏறக்குறைய 225 மில்லியன் ஆண்டுகள்) எவ்வாறு அழைக்கப்படுகிறது?', options: ['அண்ட ஆண்டு', 'ஒளி ஆண்டு', 'சூரிய ஆண்டு', 'விண்மீன் திரள் நாள்'], explanation: 'வினாடிக்கு ஏறக்குறைய 250 கிமீ வேகத்தில் சென்று ஒருமுறை சுற்ற 225 மில்லியன் ஆண்டுகள் ஆகிறது – இதுவே அண்ட ஆண்டு.' },
  },
  {
    difficulty: 'medium', source: '§9.5, p. 108', answer: 0,
    en: { q: 'According to Kepler’s first law, all planets revolve around the Sun in', options: ['elliptical orbits with the Sun at one focus', 'circular orbits with the Sun at the centre', 'elliptical orbits with the Sun at the centre', 'straight lines'], explanation: 'The Law of Ellipses: orbits are ellipses with the Sun at one of the foci.' },
    ta: { q: 'கெப்ளரின் முதல் விதிப்படி கோள்கள் சூரியனைச் சுற்றி வருவது', options: ['சூரியனை ஒரு குவியத்தில் கொண்ட நீள்வட்டப் பாதைகளில்', 'சூரியனை மையத்தில் கொண்ட வட்டப் பாதைகளில்', 'சூரியனை மையத்தில் கொண்ட நீள்வட்டப் பாதைகளில்', 'நேர்க்கோடுகளில்'], explanation: 'நீள்வட்டங்களின் விதி: சூரியன் ஒரு குவியத்தில் உள்ள நீள்வட்டப் பாதைகளில் கோள்கள் சுற்றுகின்றன.' },
  },
  {
    difficulty: 'medium', source: '§9.4, p. 108 (Do you know?)', answer: 0,
    en: { q: 'The Pole star appears fixed in the northern sky because', options: ['it lies on the axis of rotation of the Earth', 'it does not shine', 'it is the nearest star', 'it moves at the same speed as the Earth'], explanation: 'It lies on the Earth’s axis of rotation, so it does not appear to move; it is not visible from the southern hemisphere.' },
    ta: { q: 'துருவ விண்மீன் வடக்கு வானில் நிலையாகத் தோன்றுவதற்குக் காரணம்', options: ['அது பூமியின் சுழற்சி அச்சில் அமைந்துள்ளது', 'அது ஒளிர்வதில்லை', 'அதுவே மிக அருகிலுள்ள விண்மீன்', 'அது பூமியின் வேகத்திலேயே நகர்கிறது'], explanation: 'அது பூமியின் சுழற்சி அச்சில் இருப்பதால் நகர்வதாகத் தோன்றுவதில்லை; தென் அரைக்கோளத்திலிருந்து தெரியாது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V.2, p. 111', answer: 0,
    en: { q: 'Which of these is a benefit of the ISS mentioned in the book?', options: ['Water purification systems that saved a village in Iraq', 'Weather control on the Earth', 'Mining asteroids for gold', 'Generating electricity for cities'], explanation: 'The Water Recovery System and Oxygen Generation System developed for the ISS helped a village in Iraq get clean water.' },
    ta: { q: 'பாடநூலில் கூறப்பட்டுள்ள பன்னாட்டு விண்வெளி மையத்தின் பயன் எது?', options: ['ஈராக்கில் ஒரு கிராமத்தைக் காப்பாற்றிய நீர் சுத்திகரிப்பு அமைப்புகள்', 'பூமியின் வானிலையைக் கட்டுப்படுத்துதல்', 'சிறுகோள்களிலிருந்து தங்கம் எடுத்தல்', 'நகரங்களுக்கு மின்சாரம் உற்பத்தி செய்தல்'], explanation: 'விண்வெளி மையத்திற்காக உருவான நீர் மீட்பு அமைப்பும் (WRS) ஆக்சிஜன் உருவாக்கும் அமைப்பும் (OGS) ஈராக் கிராமத்திற்குச் சுத்தமான நீர் தந்தன.' },
  },
  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise I.4, p. 111', answer: 0,
    en: { q: 'The period of revolution of planet A around the Sun is 8 times that of planet B. How many times is the distance of planet A as great as that of planet B?', options: ['4', '2', '5', '3'], explanation: 'T² ∝ R³: (8)² = 64 = R³ ⇒ R = 4. Taking T ∝ R by mistake would give 8.' },
    ta: { q: 'A என்ற கோள் சூரியனைச் சுற்றி வர எடுத்துக்கொள்ளும் சுழற்சி நேரம் B என்ற கோளை விட எட்டு மடங்கு அதிகம் எனில், கோள் Aவின் தூரம் கோள் Bயின் தூரத்தைவிட எத்தனை மடங்கு அதிகம்?', options: ['4', '2', '5', '3'], explanation: 'T² ∝ R³: 8² = 64 = R³ ⇒ R = 4. T ∝ R எனத் தவறாகக் கொண்டால் 8 என வரும்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VII.1, p. 111', answer: 0,
    en: { q: 'A satellite at a height of 36,000 km above the Earth’s surface has an orbital period of 24 h. Taking R = 6370 km, its speed is about', options: ['3.08 km s⁻¹', '2.62 km s⁻¹', '0.49 km s⁻¹', '11.1 km s⁻¹'], explanation: 'v = 2π(R + h)/T = 2π × 42,370 km ÷ 86,400 s ≈ 3.08 km s⁻¹. Using h alone (forgetting R) gives 2.62 km s⁻¹.' },
    ta: { q: 'புவியின் பரப்பிலிருந்து 36000 கிமீ உயரத்தில் உள்ள, சுழற்சிக் காலம் 24 மணி நேரத்தைக் கொண்டுள்ள செயற்கைக் கோளின் வேகம் ஏறக்குறைய (R = 6370 கிமீ)', options: ['3.08 கிமீ வி⁻¹', '2.62 கிமீ வி⁻¹', '0.49 கிமீ வி⁻¹', '11.1 கிமீ வி⁻¹'], explanation: 'v = 2π(R + h)/T = 2π × 42,370 கிமீ ÷ 86,400 வி ≈ 3.08 கிமீ வி⁻¹. R ஐச் சேர்க்க மறந்தால் 2.62 கிமீ வி⁻¹ எனத் தவறாக வரும்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VII.2, p. 111', answer: 0,
    en: { q: 'At an orbital height of 400 km (G = 6.673 × 10⁻¹¹ N m² kg⁻², M = 5.972 × 10²⁴ kg, R = 6371 km), the orbital period of a satellite is about', options: ['5545 s (about 92 min)', '5668 s (about 95 min)', '86,400 s (24 h)', '554 s (about 9 min)'], explanation: 'v = √(GM/(R + h)) ≈ 7672 m s⁻¹; T = 2π × 6.771 × 10⁶ ÷ 7672 ≈ 5545 s ≈ 92 min. 5668 s is the answer for 500 km.' },
    ta: { q: 'பூமியிலிருந்து 400 கிமீ உயரத்தில் உள்ள செயற்கைக் கோளின் சுழற்சிக் காலம் ஏறக்குறைய (G = 6.673 × 10⁻¹¹ N மீ² கிகி⁻², M = 5.972 × 10²⁴ கிகி, R = 6371 கிமீ)', options: ['5545 வி (ஏறக்குறைய 92 நிமிடம்)', '5668 வி (ஏறக்குறைய 95 நிமிடம்)', '86,400 வி (24 மணி)', '554 வி (ஏறக்குறைய 9 நிமிடம்)'], explanation: 'v = √(GM/(R + h)) ≈ 7672 மீ வி⁻¹; T = 2π × 6.771 × 10⁶ ÷ 7672 ≈ 5545 வி ≈ 92 நிமிடம். 5668 வி என்பது 500 கிமீ உயரத்திற்கான விடை.' },
  },
  {
    difficulty: 'hard', source: 'Book example, Problem 1, p. 108', answer: 0,
    en: { q: 'The orbital velocity of a satellite orbiting at an altitude of 500 km (G = 6.673 × 10⁻¹¹, M = 5.972 × 10²⁴ kg, R = 6371 km) is about', options: ['7.6 km s⁻¹', '28.2 km s⁻¹', '7.9 km s⁻¹', '3.1 km s⁻¹'], explanation: 'v = √(GM/(R + h)) = √(3.985 × 10¹⁴ ÷ 6.871 × 10⁶) ≈ 7613 m s⁻¹ ≈ 7.6 km s⁻¹. Ignoring h gives about 7.9 km s⁻¹.' },
    ta: { q: '500 கிமீ உயரத்தில் இயங்கிக் கொண்டிருக்கும் செயற்கைக்கோளின் சுற்றியக்கத் திசைவேகம் ஏறக்குறைய (G = 6.673 × 10⁻¹¹, M = 5.972 × 10²⁴ கிகி, R = 6371 கிமீ)', options: ['7.6 கிமீ வி⁻¹', '28.2 கிமீ வி⁻¹', '7.9 கிமீ வி⁻¹', '3.1 கிமீ வி⁻¹'], explanation: 'v = √(GM/(R + h)) = √(3.985 × 10¹⁴ ÷ 6.871 × 10⁶) ≈ 7613 மீ வி⁻¹ ≈ 7.6 கிமீ வி⁻¹. h ஐ விட்டால் ஏறக்குறைய 7.9 கிமீ வி⁻¹ எனத் தவறாக வரும்.' },
  },
  {
    difficulty: 'hard', source: 'Book example, Problem 2, p. 108', answer: 0,
    en: { q: 'A satellite at 500 km height moves with orbital velocity 7616 m s⁻¹ (R = 6371 km). Its orbital period is about', options: ['95 min', '24 h', '9.5 min', '57 min'], explanation: 'T = 2π(R + h)/v = 2π × 6,871,000 ÷ 7616 ≈ 5668 s ≈ 95 min.' },
    ta: { q: '500 கிமீ உயரத்திலுள்ள செயற்கைக்கோள் 7616 மீ வி⁻¹ சுற்றியக்கத் திசைவேகத்தில் இயங்குகிறது (R = 6371 கிமீ). அதன் சுற்றுக்காலம் ஏறக்குறைய', options: ['95 நிமிடம்', '24 மணி', '9.5 நிமிடம்', '57 நிமிடம்'], explanation: 'T = 2π(R + h)/v = 2π × 6,871,000 ÷ 7616 ≈ 5668 வி ≈ 95 நிமிடம்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VI.2, p. 111', answer: 0,
    en: { q: 'Assertion: A satellite released horizontally with the orbital velocity keeps moving in a nearly circular orbit.\nReason: The Earth’s gravity provides the centripetal force needed for circular motion.', options: AR_EN, explanation: 'Gravity pulls the satellite towards the Earth and acts as the centripetal force, while the horizontal velocity keeps it from falling in.' },
    ta: { q: 'கூற்று: சுழற்சித் திசைவேகத்துடன் கிடைமட்டமாக விடப்படும் துணைக்கோள் ஏறக்குறைய வட்டப்பாதையில் தொடர்ந்து இயங்குகிறது.\nகாரணம்: வட்ட இயக்கத்திற்குத் தேவையான மையநோக்கு விசையைப் பூமியின் ஈர்ப்பு விசை அளிக்கிறது.', options: AR_TA, explanation: 'ஈர்ப்பு விசை துணைக்கோளைப் பூமியை நோக்கி இழுத்து மையநோக்கு விசையாகச் செயல்படுகிறது; கிடைமட்டத் திசைவேகம் அது கீழே விழாமல் காக்கிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VI.4, p. 111', answer: 0,
    en: { q: 'A man weighing 60 kg on the Earth would "weigh 1680 kg" on the Sun. This is because', options: ['the acceleration due to gravity on the Sun is about 28 times that on the Earth', 'his mass becomes 28 times greater on the Sun', 'the Sun is hotter than the Earth', 'there is no atmosphere on the Sun'], explanation: 'Mass stays the same; weight = mg, and g on the Sun is 1680/60 = 28 times larger because of the Sun’s huge mass.' },
    ta: { q: 'பூமியில் 60 கிகி எடையுள்ள மனிதன் சூரியனில் 1680 கிகி எடையைக் கொண்டிருப்பது ஏன்?', options: ['சூரியனின் ஈர்ப்பு முடுக்கம் பூமியினுடையதை விட ஏறக்குறைய 28 மடங்கு அதிகம்', 'சூரியனில் அவனது நிறை 28 மடங்கு அதிகமாகிறது', 'சூரியன் பூமியை விட அதிக வெப்பமானது', 'சூரியனில் வளிமண்டலம் இல்லை'], explanation: 'நிறை மாறாது; எடை = mg; சூரியனின் பெரும் நிறையால் அங்கு g ஆனது 1680/60 = 28 மடங்கு அதிகம்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise V.1, p. 111', answer: 0,
    en: { q: 'Which statements about the planets are correct?\n1. Mercury has no moons.\n2. Saturn has the least density of all planets.\n3. Uranus appears to roll on its side because of its greatly tilted axis.\n4. Neptune has rings, while Mars does not.', options: ['1, 2, 3 and 4', '1, 2 and 3 only', '2 and 4 only', '1 and 3 only'], explanation: 'All four are from the book: Mercury and Venus have no moons; Saturn is the least dense; Uranus has a tilted axis; only the outer planets have rings.' },
    ta: { q: 'கோள்கள் பற்றிய சரியான கூற்றுகள் எவை?\n1. புதனுக்கு நிலவுகள் இல்லை.\n2. கோள்களில் சனியின் அடர்த்தி மிகக் குறைவு.\n3. மிகவும் சாய்ந்த அச்சின் காரணமாக யுரேனஸ் உருண்டோடுவது போல் தெரிகிறது.\n4. நெப்டியூனுக்கு வளையங்கள் உண்டு; செவ்வாய்க்கு இல்லை.', options: ['1, 2, 3, 4', '1, 2, 3 மட்டும்', '2, 4 மட்டும்', '1, 3 மட்டும்'], explanation: 'நான்கும் பாடநூல் கூற்றுகள்: புதன், வெள்ளிக்கு நிலவுகள் இல்லை; சனியின் அடர்த்தி மிகக் குறைவு; யுரேனஸின் அச்சு சாய்ந்தது; வெளிப்புறக் கோள்களுக்கு மட்டுமே வளையங்கள்.' },
  },
  {
    difficulty: 'hard', source: '§9.5, p. 109 (Fig. 9.7)', imageUrl: `${IMG}/equal-areas.png`, answer: 0,
    en: { q: 'The figure shows a planet sweeping equal (shaded) areas in equal intervals of time. Which law does it illustrate, and where does the planet move fastest?', options: ['Kepler’s second law; fastest when nearest the Sun', 'Kepler’s second law; fastest when farthest from the Sun', 'Kepler’s first law; fastest when nearest the Sun', 'Kepler’s third law; speed is the same everywhere'], explanation: 'Law of Equal Areas: to sweep the same area in the same time, the planet must move faster when it is closer to the Sun.' },
    ta: { q: 'சம கால இடைவெளிகளில் கோள் சம பரப்புகளைக் கடப்பதைப் படம் காட்டுகிறது. இது எந்த விதி? கோள் எங்கு அதிக வேகத்தில் இயங்கும்?', options: ['கெப்ளரின் இரண்டாம் விதி; சூரியனுக்கு மிக அருகில் இருக்கும்போது', 'கெப்ளரின் இரண்டாம் விதி; சூரியனிலிருந்து மிகத் தொலைவில் இருக்கும்போது', 'கெப்ளரின் முதல் விதி; சூரியனுக்கு மிக அருகில் இருக்கும்போது', 'கெப்ளரின் மூன்றாம் விதி; எல்லா இடத்திலும் ஒரே வேகம்'], explanation: 'சம பரப்புகளின் விதி: சம காலத்தில் சம பரப்பைக் கடக்க, சூரியனுக்கு அருகில் இருக்கும்போது கோள் வேகமாக இயங்க வேண்டும்.' },
  },
  {
    difficulty: 'hard', source: '§9.5, p. 109 (Fig. 9.8)', imageUrl: `${IMG}/harmonies.png`, answer: 0,
    en: { q: 'In the figure, T is the period of revolution of the planet and R is its distance from the Sun. Kepler’s third law states that', options: ['T² ∝ R³', 'T ∝ R', 'T³ ∝ R²', 'T ∝ 1/R'], explanation: 'Law of Harmonies: the square of the period is directly proportional to the cube of the distance from the Sun.' },
    ta: { q: 'படத்தில் T என்பது கோளின் சுற்றுக்காலம், R என்பது சூரியனிலிருந்து அதன் தொலைவு. கெப்ளரின் மூன்றாம் விதிப்படி', options: ['T² ∝ R³', 'T ∝ R', 'T³ ∝ R²', 'T ∝ 1/R'], explanation: 'ஒத்திசைவுகளின் விதி: சுற்றுக்காலத்தின் இருமடி சூரியனிலிருந்துள்ள தொலைவின் மும்மடிக்கு நேர்த்தகவில் இருக்கும்.' },
  },
  {
    difficulty: 'hard', source: '§9.3, p. 107', answer: 0,
    en: { q: 'Two satellites orbit the Earth at heights of 300 km and 3000 km. Which statement is correct?', options: ['The one at 300 km has the greater orbital velocity and the shorter period', 'The one at 3000 km has the greater orbital velocity', 'Both have the same orbital velocity', 'The one at 300 km has the longer period'], explanation: 'v = √(GM/(R + h)) is larger for smaller h, and T = 2π(R + h)/v is then shorter.' },
    ta: { q: 'இரண்டு துணைக்கோள்கள் 300 கிமீ, 3000 கிமீ உயரங்களில் பூமியைச் சுற்றுகின்றன. சரியான கூற்று எது?', options: ['300 கிமீ உயரத்திலுள்ளதன் சுழற்சித் திசைவேகம் அதிகம், சுற்றுக்காலம் குறைவு', '3000 கிமீ உயரத்திலுள்ளதன் சுழற்சித் திசைவேகம் அதிகம்', 'இரண்டின் சுழற்சித் திசைவேகமும் சமம்', '300 கிமீ உயரத்திலுள்ளதன் சுற்றுக்காலம் அதிகம்'], explanation: 'v = √(GM/(R + h)) உயரம் குறைவாக இருந்தால் அதிகம்; அப்போது T = 2π(R + h)/v குறைவு.' },
  },
  {
    difficulty: 'hard', source: '§9.1.2, p. 104 (Do you know?)', answer: 0,
    en: { q: 'Andromeda is about 2.5 million light years away. Light from Andromeda reaching us today left it about', options: ['2.5 million years ago', '2.5 million days ago', '2.5 years ago', '25 billion years ago'], explanation: 'A light year is the distance light covers in one year, so light from 2.5 million light years away took 2.5 million years.' },
    ta: { q: 'ஆண்ட்ரோமெடா ஏறக்குறைய 2.5 மில்லியன் ஒளி ஆண்டுகள் தொலைவில் உள்ளது. இன்று நம்மை அடையும் அதன் ஒளி அதிலிருந்து புறப்பட்டது ஏறக்குறைய', options: ['2.5 மில்லியன் ஆண்டுகளுக்கு முன்', '2.5 மில்லியன் நாட்களுக்கு முன்', '2.5 ஆண்டுகளுக்கு முன்', '25 பில்லியன் ஆண்டுகளுக்கு முன்'], explanation: 'ஒளி ஆண்டு என்பது ஒளி ஓர் ஆண்டில் கடக்கும் தொலைவு; எனவே 2.5 மில்லியன் ஒளி ஆண்டு தொலைவிலிருந்து ஒளி வர 2.5 மில்லியன் ஆண்டுகள் ஆகும்.' },
  },
  {
    difficulty: 'hard', source: 'Introduction, p. 102', answer: 3,
    en: { q: 'Assertion: Ptolemy and Aryabhatta held that the Sun is at the centre of all objects in space.\nReason: In the heliocentric model proposed by Copernicus, the Sun is at the centre of the solar system.', options: AR_EN, explanation: 'Ptolemy and Aryabhatta held the geocentric model (Earth at the centre), so the assertion is false; the reason is true.' },
    ta: { q: 'கூற்று: டாலமியும் ஆர்யபட்டாவும் விண்வெளியிலுள்ள அனைத்துப் பொருள்களுக்கும் சூரியனே மையம் எனக் கருதினர்.\nகாரணம்: கோப்பர் நிக்கஸ் முன்மொழிந்த சூரிய மையக் கொள்கையில் சூரியன் சூரிய மண்டலத்தின் மையத்தில் உள்ளது.', options: AR_TA, explanation: 'டாலமி, ஆர்யபட்டா புவி மையக் கொள்கையை (பூமியே மையம்) கொண்டிருந்தனர்; எனவே கூற்று தவறு, காரணம் சரி.' },
  },
  {
    difficulty: 'hard', source: '§9.6.2, p. 110', answer: 0,
    en: { q: 'Which statements about the ISS are correct?\n1. Its first part was placed in orbit in 1998.\n2. It is the largest man-made object in space and can be seen with the naked eye.\n3. It is run by five space agencies of 16 countries.\n4. It orbits at the geostationary height of 36,000 km.', options: ['1, 2 and 3 only', '1, 2, 3 and 4', '2 and 4 only', '1 and 4 only'], explanation: 'The ISS is in low Earth orbit at about 400 km, so statement 4 is wrong; the others are from the book.' },
    ta: { q: 'பன்னாட்டு விண்வெளி மையம் பற்றிய சரியான கூற்றுகள் எவை?\n1. அதன் முதல் பகுதி 1998 இல் சுற்றுப்பாதையில் நிலைநிறுத்தப்பட்டது.\n2. விண்வெளியிலுள்ள மனிதனால் உருவாக்கப்பட்ட மிகப்பெரிய பொருள்; வெறும் கண்ணால் காணலாம்.\n3. 16 நாடுகளின் ஐந்து விண்வெளி நிறுவனங்கள் இதை இயக்குகின்றன.\n4. இது 36,000 கிமீ புவி நிலை உயரத்தில் சுற்றுகிறது.', options: ['1, 2, 3 மட்டும்', '1, 2, 3, 4', '2, 4 மட்டும்', '1, 4 மட்டும்'], explanation: 'இது ஏறக்குறைய 400 கிமீ உயரத்தில் தாழ்வான புவிச் சுற்றுப்பாதையில் உள்ளது; எனவே 4 தவறு, மற்றவை பாடநூல் கூற்றுகள்.' },
  },
  {
    difficulty: 'hard', source: '§9.2.3, p. 106', answer: 0,
    en: { q: 'Halley’s comet was last seen in 1986. Using its period from the book, in which year will it next be seen?', options: ['2062', '2053', '2076', '2086'], explanation: 'Halley’s comet appears nearly every 76 years: 1986 + 76 = 2062.' },
    ta: { q: 'ஹேலி வால் விண்மீன் கடைசியாக 1986 இல் தோன்றியது. பாடநூலில் உள்ள அதன் சுற்றுக்காலத்தைக் கொண்டு அடுத்து எந்த ஆண்டு தோன்றும்?', options: ['2062', '2053', '2076', '2086'], explanation: 'ஹேலி வால் விண்மீன் ஏறக்குறைய 76 ஆண்டுகளுக்கு ஒருமுறை தோன்றும்: 1986 + 76 = 2062.' },
  },
];
