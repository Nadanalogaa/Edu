// Tamil Nadu State Board, 9th Social Science, Unit 18 – Geography: Mapping Skills (நிலவரைபடத் திறன்கள்).
// Book exercise questions plus our own questions written from the English- and Tamil-medium textbooks.
// source = section or exercise and printed page of the English-medium book.

import { BankQuestion, AR_EN, AR_TA } from './types';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.1, p. 227', answer: 0,
    en: { q: '___________ indicates the purpose or theme of the map.', options: ['Title', 'Scale', 'Direction', 'Legend'], explanation: 'The title indicates the purpose or theme of the map, e.g. India – Physical, World – Political.' },
    ta: { q: 'ஒரு நிலவரைபடத்தின் கருத்து (அல்லது) நோக்கத்தைக் குறிப்பிடுவது', options: ['தலைப்பு', 'அளவை', 'திசைகள்', 'நிலவரைபடக் குறிப்பு'], explanation: 'தலைப்பு நிலவரைபடத்தின் நோக்கம் அல்லது கருத்தைக் குறிக்கிறது (எ.கா. இந்தியா - இயற்கை அமைப்பு, உலகம் - அரசியல்).' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.2, p. 227', answer: 0,
    en: { q: 'Standard symbols that are used in maps to convey a definite meaning are called ___________.', options: ['conventional signs and symbols', 'coordinates', 'grid references', 'directions'], explanation: 'Conventional signs and symbols are standard symbols used on a map and explained in the legend to convey a definite meaning.' },
    ta: { q: 'நிலவரைபடத்தில் உறுதியான கருத்தை வெளிப்படுத்துவதற்குப் பயன்படும் நிரந்தர குறியீடுகள்', options: ['முறைக்குறியீடுகள்', 'இணைப்பாய புள்ளிகள்', 'வலைப்பின்னல் அமைப்பு', 'திசைகள்'], explanation: 'முறைக்குறியீடுகள் நிலவரைபடத்தில் பயன்படுத்தப்படும் நிலையான குறியீடுகள்; அவற்றின் பொருள் நிலவரைபடக் குறிப்புப் பகுதியில் விளக்கப்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.3, p. 227', answer: 0,
    en: { q: 'GPS consists of a constellation of ___________ satellites.', options: ['24', '7', '32', '64'], explanation: 'NAVSTAR, the GPS network, has 24 U.S. satellites in six different orbits.' },
    ta: { q: 'உலக அமைவிடத்தை கண்டறியும் தொகுதியில் (GPS) பயன்படுத்தப்படும் செயற்கைக்கோள்கள்', options: ['24', '7', '32', '64'], explanation: 'நவ்ஸ்டார் என்பது 6 வெவ்வேறு சுற்றுப்பாதைகளில் சுற்றி வரும் 24 அமெரிக்கச் செயற்கைக்கோள்களின் வலைப்பின்னலாகும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.1, p. 227', answer: 0,
    en: { q: 'The art and science of map-making is called', options: ['Cartography', 'Geoid', 'Surveying', 'Remote sensing'], explanation: 'The art of map-making is called Cartography.' },
    ta: { q: 'நிலவரைபடங்களை உருவாக்கும் அறிவியல் கலை', options: ['நிலவரைபடவியல்', 'ஜியாய்டு', 'நில அளவை', 'தொலை நுண்ணுணர்வு'], explanation: 'நிலவரைபடத்தை உருவாக்கும் கலை நிலவரைபடவியல் (Cartography) என்று அழைக்கப்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.2, p. 227', answer: 0,
    en: { q: 'The actual shape of the Earth is termed', options: ['Geoid', 'Sphere', 'Cylinder', 'Cone'], explanation: 'The actual shape of the Earth is termed Geoid, which is an oblate spheroid.' },
    ta: { q: 'புவியின் உண்மையான வடிவம்', options: ['ஜியாய்டு', 'கோளம்', 'உருளை', 'கூம்பு'], explanation: 'புவியின் உண்மையான வடிவம் ஜியாய்டு (Geoid) எனப்படுகிறது; இது ஒரு நீள்வட்டக் கோளம் ஆகும்.' },
  },
  {
    difficulty: 'easy', source: '§7.1.1, p. 220', answer: 0,
    en: { q: 'A map is defined as', options: ['the miniature image of the 3-dimensional earth’s surface on a flat surface', 'a 3-dimensional model of the earth', 'a photograph taken from a satellite', 'a record of the measurement of a land area'], explanation: 'A map is the miniature image of the 3-dimensional earth’s surface on a paper, cloth or any flat surface.' },
    ta: { q: 'நிலவரைபடம் என்பது', options: ['தட்டையான பரப்பில் புவியின் மேற்பரப்பின் முப்பரிமாண வடிவத்தைச் சிறிய வடிவில் காட்டுவது', 'புவியின் முப்பரிமாண மாதிரி', 'செயற்கைக்கோளிலிருந்து எடுக்கப்பட்ட புகைப்படம்', 'நிலத்தை அளவீடு செய்து பதிவு செய்யும் முறை'], explanation: 'நிலவரைபடம் என்பது காகிதம்/துணி அல்லது ஏதேனும் தட்டையான பரப்பில் புவியின் மேற்பரப்பின் முப்பரிமாண வடிவத்தைச் சிறிய வடிவில் காட்டுவதாகும்.' },
  },
  {
    difficulty: 'easy', source: '§7.1.2, p. 221', answer: 0,
    en: { q: 'If you stand looking at the North Pole, the direction on your right will be', options: ['east', 'west', 'south', 'north-west'], explanation: 'Facing the North Pole, east is on your right, west on your left and south at your back.' },
    ta: { q: 'நீ வட துருவத்தைப் பார்த்து நின்றால், உனது வலக்கை காட்டும் திசை', options: ['கிழக்கு', 'மேற்கு', 'தெற்கு', 'வடமேற்கு'], explanation: 'வட துருவத்தைப் பார்த்து நின்றால் வலக்கை கிழக்கையும், இடக்கை மேற்கையும், பின்புறம் தெற்கையும் காட்டும்.' },
  },
  {
    difficulty: 'easy', source: '§7.1.2, p. 222', answer: 0,
    en: { q: 'The legend of a map is usually placed at', options: ['the left or right corner at the bottom of the map', 'the centre of the map', 'the top centre of the map', 'the back of the map'], explanation: 'The legend helps to understand the map details and is placed at the left or right corner at the bottom of the map.' },
    ta: { q: 'நிலவரைபடக் குறிப்பு பொதுவாகக் குறிக்கப்படும் இடம்', options: ['நிலவரைபடத்தின் கீழே இடது அல்லது வலது மூலை', 'நிலவரைபடத்தின் மையம்', 'நிலவரைபடத்தின் மேல் நடுப்பகுதி', 'நிலவரைபடத்தின் பின்பக்கம்'], explanation: 'நிலவரைபடக் குறிப்பு பொதுவாக நிலவரைபடத்தின் கீழே இடது அல்லது வலது மூலையில் குறிக்கப்பட்டிருக்கும்.' },
  },
  {
    difficulty: 'easy', source: '§7.2.3, p. 226', answer: 0,
    en: { q: 'India’s Global Navigation Satellite System is', options: ['IRNSS (NAVIC)', 'GLONASS', 'Galileo', 'BeiDou'], explanation: 'India’s GNSS is the IRNSS (NAVIC) system; GLONASS is Russian, Galileo European and BeiDou Chinese.' },
    ta: { q: 'இந்தியாவின் உலகளாவிய பயணச் செயற்கைக்கோள் ஒழுங்குமுறை', options: ['நாவிக் (NAVIC)', 'குளோனாஸ் (GLONASS)', 'கலிலியோ', 'பீடோ (BeiDou)'], explanation: 'இந்தியாவின் அமைப்பு நாவிக் (NAVIC); குளோனாஸ் ரஷ்யாவுடையது, கலிலியோ ஐரோப்பாவுடையது, பீடோ சீனாவுடையது.' },
  },
  // ------------------------------------------------------------------ Medium
  {
    difficulty: 'medium', source: 'Book exercise II.3, p. 227', answer: 0,
    en: { q: 'NAVSTAR is the satellite navigation network of', options: ['USA', 'Russia', 'China', 'India'], explanation: 'NAVSTAR GPS is the U.S. system, created by the U.S. Department of Defense.' },
    ta: { q: 'நவ்ஸ்டார் (NAVSTAR) எந்த நாட்டின் செயற்கைக்கோள் வலைப்பின்னல்?', options: ['அமெரிக்க ஐக்கிய நாடுகள்', 'ரஷ்யா', 'சீனா', 'இந்தியா'], explanation: 'நவ்ஸ்டார் என்பது அமெரிக்க ஐக்கிய நாடுகளின் உலக அமைவிடத்தைக் கண்டறியும் தொகுதி; அமெரிக்கப் பாதுகாப்புத் துறையினால் உருவாக்கப்பட்டது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.2, p. 228', answer: 3,
    en: { q: 'Assertion (A): The legend of a map does not help us to understand the information in a map.\nReason (R): It is usually placed at the left or right corner at the bottom of the map.', options: AR_EN, explanation: 'The legend does help us understand map details, so A is false; R correctly states where it is placed.' },
    ta: { q: 'கூற்று (A): ஒரு நிலவரைபடத்தில் உள்ள வரைபடக் குறிப்புகள் வரைபடத்தில் உள்ள செய்திகளைப் புரிந்து கொள்ளப் பயன்படாது.\nகாரணம் (R): இது பொதுவாக நிலவரைபடத்தின் அடிப்பகுதியில் இடது அல்லது வலது புற ஓரத்தில் காணப்படும்.', options: AR_TA, explanation: 'நிலவரைபடக் குறிப்பு விவரங்களைப் புரிந்துகொள்ள உதவுகிறது; எனவே கூற்று தவறு. அது இருக்கும் இடம் பற்றிய காரணம் சரி.' },
  },
  {
    difficulty: 'medium', source: '§7.1.2, p. 221', answer: 0,
    en: { q: 'A scale expressed as "1 cm = 10 km" is an example of the', options: ['statement scale', 'representative fraction', 'linear scale', 'graphical scale'], explanation: 'The statement scale describes the relationship of map distance to ground distance in words, such as one centimetre to ten kilometres.' },
    ta: { q: '‘1 செ.மீ = 10 கி.மீ’ என்று குறிக்கப்படும் அளவை', options: ['சொல்லளவை முறை', 'பிரதிபின்ன முறை', 'கோட்டளவை முறை', 'வரைபட அளவை முறை'], explanation: 'நிலவரைபடத் தூரத்தையும் புவியின் உண்மையான தூரத்தையும் சொற்களில் குறிப்பிடுவது சொல்லளவை முறையாகும்.' },
  },
  {
    difficulty: 'medium', source: '§7.1.2, p. 221', answer: 0,
    en: { q: 'A Representative Fraction of 1:100000 means', options: ['one unit on the map represents 100,000 of the same unit on the ground', 'one centimetre on the map represents 100,000 kilometres on the ground', 'one kilometre on the map represents 100,000 centimetres on the ground', 'the map is 100,000 times larger than the ground'], explanation: 'In R.F., one unit on the map represents 100,000 of the same unit on the ground; the unit may be an inch, a centimetre or any linear unit.' },
    ta: { q: 'பிரதிபின்னம் 1 : 100000 என்பதன் பொருள்', options: ['நிலவரைபடத்தில் ஓர் அலகு புவியில் அதே 100,000 அலகுகளைக் குறிக்கிறது', 'நிலவரைபடத்தில் 1 செ.மீ புவியில் 100,000 கி.மீ', 'நிலவரைபடத்தில் 1 கி.மீ புவியில் 100,000 செ.மீ', 'நிலவரைபடம் புவியைவிட 100,000 மடங்கு பெரியது'], explanation: 'நிலவரைபடத்தில் ஓர் அலகு புவியில் 100,000 அலகுகளைக் குறிக்கிறது; அந்த அலகு அங்குலம், சென்டிமீட்டர் அல்லது வேறு எந்த நீள அலகாகவும் இருக்கலாம்.' },
  },
  {
    difficulty: 'medium', source: '§7.1.2, p. 221', answer: 0,
    en: { q: 'When stating the location of a place by the grid system, normal practice is to state', options: ['latitude first and then longitude', 'longitude first and then latitude', 'only the longitude', 'only the latitude'], explanation: 'In normal practice, latitude is stated first and then comes the longitude, in degrees, minutes and seconds.' },
    ta: { q: 'ஓரிடத்தின் அமைவிடத்தைக் கூறும்போது வழக்கமாக', options: ['முதலில் அட்சக்கோடு, பின்னர் தீர்க்கக்கோடு', 'முதலில் தீர்க்கக்கோடு, பின்னர் அட்சக்கோடு', 'தீர்க்கக்கோடு மட்டும்', 'அட்சக்கோடு மட்டும்'], explanation: 'பொதுவாக ஓரிடத்தின் அட்சக்கோட்டினை முதலில் கூறிப் பின்னர் தீர்க்கக்கோட்டினைக் கூறுகிறோம்.' },
  },
  {
    difficulty: 'medium', source: '§7.1.2, p. 222', answer: 0,
    en: { q: 'The mainland of India extends from', options: ['8°4′N to 37°6′N latitude', '6°4′N to 37°6′N latitude', '8°4′N to 35°6′N latitude', '68°7′N to 97°25′N latitude'], explanation: 'The mainland of India extends from 8°4′N to 37°6′N latitude and from 68°7′E to 97°25′E longitude.' },
    ta: { q: 'இந்தியாவின் முதன்மை நிலப்பரப்பின் அட்சப் பரவல்', options: ['8° 4′ வ முதல் 37° 6′ வ வரை', '6° 4′ வ முதல் 37° 6′ வ வரை', '8° 4′ வ முதல் 35° 6′ வ வரை', '68° 7′ வ முதல் 97° 25′ வ வரை'], explanation: 'இந்தியாவின் முதன்மை நிலப்பரப்பு 8° 4′ வ முதல் 37° 6′ வ அட்சம் வரையும், 68° 7′ கி முதல் 97° 25′ கி தீர்க்கம் வரையும் பரவியுள்ளது.' },
  },
  {
    difficulty: 'medium', source: '§7.1.2, p. 222', answer: 0,
    en: { q: 'Projection directly onto a flat plane is also called', options: ['zenithal or azimuthal projection', 'cylindrical projection', 'conical projection', 'Mercator projection'], explanation: 'Projection directly onto a flat plane is called planar or zenithal or azimuthal projection.' },
    ta: { q: 'சமதளப்பரப்பில் வரையப்படும் கோட்டுச்சட்டங்களின் வேறு பெயர்', options: ['உச்சிக்கோட்டுச்சட்டங்கள் (அ) திசையளவு கோட்டுச்சட்டங்கள்', 'உருளை கோட்டுச்சட்டங்கள்', 'கூம்புக் கோட்டுச்சட்டங்கள்', 'மெர்கேட்டர் கோட்டுச்சட்டம்'], explanation: 'சமதளப்பரப்பில் வரைந்த கோட்டுச்சட்டங்கள் உச்சிக்கோட்டுச்சட்டங்கள் அல்லது திசையளவு கோட்டுச்சட்டங்கள் எனவும் அழைக்கப்படுகின்றன.' },
  },
  {
    difficulty: 'easy', source: '§7.1.2, p. 223', answer: 0,
    en: { q: 'On maps, water features such as canals, lakes, ponds and rivers are shown in', options: ['light blue', 'brown', 'green', 'pink'], explanation: 'Light blue is used for water features; brown for land features, green for vegetation and pink for international boundaries.' },
    ta: { q: 'நிலவரைபடங்களில் கால்வாய்கள், ஏரிகள், குளங்கள், ஆறுகள் போன்ற நீர் நிலைகளைக் குறிக்கும் நிறம்', options: ['வெளிர் நீலம்', 'பழுப்பு', 'பச்சை', 'இளஞ்சிவப்பு'], explanation: 'நீர் நிலைகள் வெளிர் நீலத்திலும், நில அம்சங்கள் பழுப்பிலும், தாவரங்கள் பச்சையிலும், பன்னாட்டு எல்லைகள் இளஞ்சிவப்பிலும் காட்டப்படும்.' },
  },
  {
    difficulty: 'medium', source: '§7.1.2, p. 223', answer: 0,
    en: { q: 'Railways, roads, power lines and telephone lines on a map are shown by', options: ['line symbols', 'point symbols', 'area symbols', 'colour shading only'], explanation: 'There are three types of map symbols: point, line and area; railways, roads, power lines and telephone lines are line symbols.' },
    ta: { q: 'நிலவரைபடத்தில் இருப்புப்பாதைகள், சாலைகள், மின்கம்பி இணைப்புகள், தொலைபேசி இணைப்புகள் குறிக்கப்படுவது', options: ['கோட்டுக் குறியீடுகள்', 'புள்ளிக் குறியீடுகள்', 'பரப்புக் குறியீடுகள்', 'நிறம் தீட்டுதல் மட்டும்'], explanation: 'முறைக்குறியீடுகள் புள்ளி, கோடு, பரப்பு என மூன்று வகைப்படும்; இருப்புப்பாதைகள், சாலைகள் போன்றவை கோட்டுக் குறியீடுகள்.' },
  },
  {
    difficulty: 'medium', source: '§7.1.3, p. 223', answer: 0,
    en: { q: 'Which of the following is NOT one of the surveying instruments listed in the textbook?', options: ['Seismograph', 'Prismatic compass', 'Dumpy level', 'Theodolite'], explanation: 'Geographers use Chain, Prismatic compass, Plane table, Dumpy level, Abney level, Clinometre, Theodolite, Total Station and GNSS; a seismograph records earthquakes.' },
    ta: { q: 'கீழ்க்காண்பனவற்றில் பாடநூலில் குறிப்பிடப்பட்ட நிலஅளவைக் கருவி அல்லாதது எது?', options: ['நில அதிர்வுமானி (Seismograph)', 'பட்டக் காந்தவட்டை', 'மட்டமானி', 'தியோடலைட்'], explanation: 'சங்கிலி, பட்டக் காந்தவட்டை, சமதளமேசை, மட்டமானி, நில அளவி, சாய்வுமானி, தியோடலைட், மொத்த ஆய்வு நிலையம், GNSS ஆகியவை நிலஅளவைக் கருவிகள்; நில அதிர்வுமானி நிலநடுக்கத்தைப் பதிவு செய்யும்.' },
  },
  {
    difficulty: 'easy', source: '§7.1.3, p. 224', answer: 0,
    en: { q: 'In ancient Egypt, surveyors were called ‘rope stretchers’ because', options: ['they used ropes to measure distances', 'they built bridges with ropes', 'they pulled boats along the Nile', 'they tied maps with ropes'], explanation: 'Egyptian surveyors were called rope stretchers because they used ropes to measure distances.' },
    ta: { q: 'எகிப்தில் சர்வேயர்கள் "கயிறு நீட்சியர்" என அழைக்கப்பட்டதன் காரணம்', options: ['தூரங்களை அளவிடுவதற்குக் கயிறுகளைப் பயன்படுத்தினர்', 'கயிறுகளால் பாலங்கள் கட்டினர்', 'நைல் ஆற்றில் படகுகளை இழுத்தனர்', 'நிலவரைபடங்களைக் கயிறுகளால் கட்டினர்'], explanation: 'எகிப்தில் சர்வேயர்கள் தூரங்களை அளவிடுவதற்குக் கயிறுகளைப் பயன்படுத்தியதால் "கயிறு நீட்சியர்" என அழைக்கப்பட்டனர்.' },
  },
  {
    difficulty: 'medium', source: '§7.2.1, p. 224', answer: 0,
    en: { q: 'The first person to take aerial photographs, in 1858, was', options: ['Felix Nadar', 'Anaximander', 'Waldo Tobler', 'Roger Tomlinson'], explanation: 'Felix Nadar, a French photographer and balloonist, became the first person to take aerial photographs in 1858.' },
    ta: { q: '1858 ஆம் ஆண்டில் முதன்முதலாக வான்வழிப் புகைப்படங்களை எடுத்தவர்', options: ['பெலிக்ஸ் நடார்', 'அனாக்ஸிமேன்டர்', 'வால்டோ டாப்ளர்', 'ரோஜர் டாம்லின்சன்'], explanation: 'பிரஞ்சு புகைப்படக்காரரும் பலூன் உருவாக்குபவருமான பெலிக்ஸ் நடார் 1858 இல் முதன்முதலாக வான்வழிப் புகைப்படங்களை எடுத்தார்.' },
  },
  {
    difficulty: 'medium', source: '§7.2.2, p. 225', answer: 0,
    en: { q: 'Which of the following is NOT a component of remote sensing?', options: ['Legend', 'Energy source', 'Transmission path', 'Sensor'], explanation: 'The components of remote sensing are energy source, transmission path, target and sensor.' },
    ta: { q: 'கீழ்க்காண்பனவற்றில் தொலைநுண்ணுணர்வின் கூறு அல்லாதது எது?', options: ['நிலவரைபடக் குறிப்பு', 'ஆற்றல்மூலம்', 'அனுப்பும் வழி', 'உணர்விகள்'], explanation: 'தொலைநுண்ணுணர்வின் கூறுகள்: ஆற்றல்மூலம், அனுப்பும் வழி, இலக்கு, உணர்விகள்.' },
  },
  {
    difficulty: 'medium', source: '§7.2.2, p. 225', answer: 0,
    en: { q: 'Compared with aerial photography, an advantage of satellite remote sensing is that', options: ['weather does not affect the functioning of satellites', 'it is cheap and quick to plan and launch', 'it gives an analogue record', 'it needs permission from authorities'], explanation: 'Satellites are not affected by weather, while aerial photography is adversely affected by bad weather; satellites, however, cost a lot and take at least 10 years to plan and launch.' },
    ta: { q: 'வான்வழிப் புகைப்படத்துடன் ஒப்பிடும்போது செயற்கைக்கோள் தொலைநுண்ணுணர்வின் நன்மை', options: ['வானிலை அதிகம் பாதிக்காது', 'குறைந்த செலவில் விரைவாகத் திட்டமிட்டு ஏவலாம்', 'இது ஒரு தொடருரு (Analogue) பதிவு', 'அதிகாரிகளின் அனுமதி தேவை'], explanation: 'செயற்கைக்கோள்களை வானிலை அதிகம் பாதிக்காது; வான்வழி ஆய்வை வானிலை வெகுவாகப் பாதிக்கும். ஆனால் செயற்கைக்கோள் அமைப்புகள் விலை உயர்ந்தவை, குறைந்தது 10 ஆண்டுகள் ஆகும்.' },
  },
  {
    difficulty: 'medium', source: '§7.2.3, p. 226', answer: 0,
    en: { q: 'GLONASS is the Global Navigation Satellite System of', options: ['Russia', 'Europe', 'China', 'USA'], explanation: 'GLONASS (Global’naya Navigatsionnaya Sputnikovaya Sistema) belongs to Russia.' },
    ta: { q: 'குளோனாஸ் (GLONASS) எந்த நாட்டின் செயற்கைக்கோள் அமைப்பு?', options: ['ரஷ்யா', 'ஐரோப்பா', 'சீனா', 'அமெரிக்க ஐக்கிய நாடுகள்'], explanation: 'குளோனாஸ் ரஷ்யாவின் உலகளாவிய பயணச் செயற்கைக்கோள் அமைப்பு.' },
  },
  {
    difficulty: 'medium', source: '§7.3, p. 227', answer: 0,
    en: { q: 'Bhuvan, a free internet-based application launched on August 12th 2009, was developed by', options: ['ISRO', 'NASA', 'the U.S. Department of Defense', 'Google'], explanation: 'Bhuvan (Sanskrit for Earth) was launched by the Indian Space Research Organisation (ISRO) on August 12th 2009.' },
    ta: { q: '2009 ஆகஸ்ட் 12 அன்று உருவாக்கப்பட்ட இலவச இணைய பயன்பாடான புவன் (Bhuvan) எந்த அமைப்பினால் உருவாக்கப்பட்டது?', options: ['இந்திய விண்வெளி ஆராய்ச்சி மையம் (ISRO)', 'நாசா (NASA)', 'அமெரிக்கப் பாதுகாப்புத் துறை', 'கூகுள்'], explanation: 'புவன் (‘புவி’ என்று பொருள்) இந்திய விண்வெளி ஆராய்ச்சி மையத்தினால் 2009 ஆகஸ்ட் 12 அன்று உருவாக்கப்பட்டது.' },
  },
  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise III.1, p. 228', answer: 1,
    en: { q: 'Assertion (A): The points at which the vertical and horizontal lines of the grid intersect are called coordinates.\nReason (R): The lines that run horizontally and vertically are called Northings and Eastings respectively.', options: AR_EN, explanation: 'Both statements are true, but naming the horizontal and vertical lines (Northings and Eastings) does not explain why their intersections are called coordinates.' },
    ta: { q: 'கூற்று (A): செங்குத்துக் கோடுகளும் கிடைமட்டக் கோடுகளும் ஒரு புள்ளியில் சந்திப்பதன் மூலம் உருவாகும் வலையமைப்பு இணைப்பாயங்களின் அமைப்பு.\nகாரணம் (R): கிடைமட்டமாகவும், செங்குத்தாகவும் செல்லும் கோடுகள் முறையே வடக்கைக்கோடுகள், கிழக்கைக்கோடுகள் என்று அழைக்கப்படுகின்றன.', options: AR_TA, explanation: 'இரண்டும் சரி; ஆனால் கோடுகளின் பெயர்கள் (வடக்கைக்கோடுகள், கிழக்கைக்கோடுகள்) அவை சந்திக்கும் புள்ளிகள் இணைப்பாயங்கள் எனப்படுவதற்கான விளக்கம் அல்ல.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise IV.3, p. 228', answer: 0,
    en: { q: 'The distance between two cities A and B is 5 km. It is represented by a line of 5 cm on the map. The scale as an R.F. is', options: ['1:100000', '1:500000', '1:10000', '1:50000'], explanation: '5 cm represents 5 km, so 1 cm = 1 km = 100000 cm; R.F. = 1:100000.' },
    ta: { q: 'A மற்றும் B ஆகிய இரு நகரங்களுக்கு இடையான தூரம் 5 கி.மீ. இது நிலவரைபடத்தில் 5 செ.மீ ஆகக் குறிக்கப்பட்டுள்ளது. பிரதிபின்ன முறையில் அளவை', options: ['1:100000', '1:500000', '1:10000', '1:50000'], explanation: '5 செ.மீ = 5 கி.மீ, அதாவது 1 செ.மீ = 1 கி.மீ = 100000 செ.மீ; எனவே R.F. = 1:100000.' },
  },
  {
    difficulty: 'hard', source: '§7.1.2, p. 221', answer: 0,
    en: { q: 'The R.F. of a map whose scale is 1 centimetre to 2 kilometres is', options: ['1:200000', '1:20000', '1:2000000', '1:100000'], explanation: '2 km = 200000 cm, so 1 cm on the map represents 200000 cm on the ground: R.F. = 1:200000.' },
    ta: { q: '1 செ.மீ = 2 கி.மீ என்ற அளவையின் பிரதிபின்னம்', options: ['1:200000', '1:20000', '1:2000000', '1:100000'], explanation: '2 கி.மீ = 200000 செ.மீ; எனவே R.F. = 1:200000.' },
  },
  {
    difficulty: 'hard', source: '§7.1.2, p. 223', answer: 0,
    en: { q: 'On the map in the United Nations flag, Antarctica does not appear because', options: ['the map ends at 60 degrees South latitude', 'it uses a cylindrical projection', 'the map has the 90° W longitude pointing upwards', 'it is a political map of member countries only'], explanation: 'The UN flag shows an azimuthal polar projection that ends at 60°S latitude, so Antarctica does not appear.' },
    ta: { q: 'ஐக்கிய நாடுகள் சபையின் கொடியில் உள்ள நிலவரைபடத்தில் அண்டார்க்டிகா தென்படாததற்குக் காரணம்', options: ['நிலவரைபடம் 60° தெற்கு அட்சக்கோட்டில் நிறுத்தப்பட்டுள்ளது', 'அது உருளை கோட்டுச்சட்டத்தைப் பயன்படுத்துகிறது', '90° மேற்கு தீர்க்கக்கோடு மேல்நோக்கி உள்ளது', 'அது உறுப்பு நாடுகளின் அரசியல் வரைபடம் மட்டுமே'], explanation: 'ஐ.நா. கொடியில் சமதள துருவ கோட்டுச்சட்டம் உள்ளது; நிலவரைபடம் 60° தெற்கு அட்சக்கோட்டில் நிறுத்தப்பட்டிருப்பதால் அண்டார்க்டிகா தென்படவில்லை.' },
  },
  {
    difficulty: 'hard', source: '§7.2.2, p. 225', answer: 0,
    en: { q: 'In airborne photography, the forward overlap between successive photos is about', options: ['60%', '20–40%', '10%', '90%'], explanation: 'Aerial photos have a 60% forward overlap between photos and 20–40% lateral overlap between flight lines.' },
    ta: { q: 'வான்வழிப் புகைப்படங்களில் அடுத்தடுத்த படங்களுக்கு இடையிலான முன்புற மேற்பொருந்துதல் சுமார்', options: ['60%', '20–40%', '10%', '90%'], explanation: 'இரு வான்வழிப் புகைப்படங்களுக்கு இடையே 60% மேற்பொருந்துதலும், இரு பறக்கும் வழிகளுக்கு இடையே 20% முதல் 40% வரை மேற்பொருந்துதலும் இருக்கும்.' },
  },
  {
    difficulty: 'hard', source: '§7.2.3, p. 226', answer: 0,
    en: { q: 'In GNSS, the receiver that converts satellite signals into location, speed and time data is the', options: ['User Segment', 'Space Segment', 'Control Segment', 'Ground Segment'], explanation: 'Satellites form the Space Segment, ground stations the Control Segment, and the receiver is the User Segment.' },
    ta: { q: 'ஜி.என்.எஸ்.எஸ்-இல் செயற்கைக்கோள் சமிக்ஞைகளை அமைவிடம், வேகம், நேரத் தகவல்களாக மாற்றும் பிரிவு', options: ['பயன் அடையும் பிரிவு (User segment)', 'விண்வெளி பிரிவு (Space segment)', 'கட்டுப்பாட்டுப் பிரிவு (Control segment)', 'புவி பிரிவு (Ground segment)'], explanation: 'செயற்கைக்கோள் குழு விண்வெளி பிரிவு, புவிநிலைய வலைப்பின்னல் கட்டுப்பாட்டுப் பிரிவு, பயனாளரின் கருவி பயன் அடையும் பிரிவு.' },
  },
  {
    difficulty: 'hard', source: '§7.2.3, p. 226', answer: 0,
    en: { q: 'Which statement about NAVSTAR is correct?', options: ['It has 24 satellites in six orbits about 20,350 km above the Earth, each circling the planet twice a day', 'It has 32 satellites in four orbits about 36,000 km above the Earth', 'It was created by ISRO and became operational in 2009', 'Each satellite circles the Earth once a week'], explanation: 'NAVSTAR is a network of 24 U.S. satellites in six orbits flying 20,350 km above the Earth; each circles the planet twice a day. GPS became fully operational in 1995.' },
    ta: { q: 'நவ்ஸ்டார் பற்றிய சரியான கூற்று எது?', options: ['20,350 கி.மீ உயரத்தில் 6 சுற்றுப்பாதைகளில் 24 செயற்கைக்கோள்கள்; ஒவ்வொன்றும் ஒருநாளில் இருமுறை புவியைச் சுற்றும்', '36,000 கி.மீ உயரத்தில் 4 சுற்றுப்பாதைகளில் 32 செயற்கைக்கோள்கள்', 'இஸ்ரோவால் உருவாக்கப்பட்டு 2009 இல் செயல்பாட்டுக்கு வந்தது', 'ஒவ்வொரு செயற்கைக்கோளும் வாரத்திற்கு ஒருமுறை புவியைச் சுற்றும்'], explanation: 'நவ்ஸ்டார் என்பது 20,350 கி.மீ உயரத்தில் 6 சுற்றுப்பாதைகளில் சுற்றும் 24 அமெரிக்கச் செயற்கைக்கோள்களின் வலைப்பின்னல்; ஒவ்வொன்றும் ஒருநாளில் இருமுறை புவியைச் சுற்றுகிறது. ஜி.பி.எஸ் 1995இல் முழு உபயோகத்திற்கு வந்தது.' },
  },
  {
    difficulty: 'hard', source: '§7.2.3, p. 226', answer: 0,
    en: { q: 'GIS was first recognised by', options: ['Waldo Tobler and Roger Tomlinson', 'Felix Nadar and Anaximander', 'C.F. Richter and Arthur Holmes', 'the U.S. Department of Defense and ISRO'], explanation: 'GIS was first recognised in the 1950s by Waldo Tobler and Roger Tomlinson (Canada).' },
    ta: { q: 'புவியியல் தகவல் அமைப்பை (GIS) அறிமுகப்படுத்தியவர்கள்', options: ['வால்டோ டாப்ளர் மற்றும் ரோஜர் டாம்லின்சன்', 'பெலிக்ஸ் நடார் மற்றும் அனாக்ஸிமேன்டர்', 'சி.எஃப். ரிக்டர் மற்றும் ஆர்தர் ஹோம்ஸ்', 'அமெரிக்கப் பாதுகாப்புத் துறை மற்றும் இஸ்ரோ'], explanation: 'புவியியல் தகவல் அமைப்பு 1950களில் வால்டோ டாப்ளர் மற்றும் கனடாவைச் சார்ந்த ரோஜர் டாம்லின்சன் ஆகியோரால் அறிமுகப்படுத்தப்பட்டது.' },
  },
];
