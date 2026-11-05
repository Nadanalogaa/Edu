// Tamil Nadu State Board, 9th Science, Unit 6 – Light (ஒளி).
// Questions are written in our own words. "Book ..." sources test the idea of that textbook
// exercise or worked example; "§" sources are our own section questions.
// source = section / exercise and printed page of the English-medium book (Tamil-medium pages match).
// Sign convention as in the book: 1/f = 1/u + 1/v, m = h₂/h₁ = −v/u.

import { BankQuestion, AR_EN, AR_TA } from './types';

const IMG = '/content/9/state_board/science/06';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.2, p. 77', answer: 0,
    en: { q: 'The reflector used behind the bulb of a torch is a', options: ['concave mirror', 'convex mirror', 'plane mirror', 'glass prism'], explanation: 'A concave mirror sends the light from a bulb at its focus out as a strong parallel beam.' },
    ta: { q: 'டார்ச் விளக்கில் எதிரொளிப்பானாகப் பயன்படுவது _____', options: ['குழியாடி', 'குவியாடி', 'சமதள ஆடி', 'கண்ணாடி முப்பட்டகம்'], explanation: 'குழியாடியின் குவியத்தில் உள்ள விளக்கின் ஒளி இணையான வலிமையான கற்றையாக வெளிவருகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.4, p. 77', answer: 0,
    en: { q: 'A spherical mirror whose reflecting surface bulges outwards is a', options: ['convex mirror', 'concave mirror', 'plane mirror', 'parabolic reflector'], explanation: 'Reflecting surface curved outward – convex; curved inward, facing the centre – concave.' },
    ta: { q: 'எதிரொளிக்கும் பகுதி வெளிப்புறமாக வளைந்திருக்கும் கோளக ஆடி', options: ['குவியாடி', 'குழியாடி', 'சமதள ஆடி', 'பரவளைய எதிரொளிப்பான்'], explanation: 'எதிரொளிக்கும் பரப்பு வெளிப்புறம் வளைந்தால் குவியாடி; உட்புறம் (மையத்தை நோக்கி) வளைந்தால் குழியாடி.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.6, p. 77', answer: 0,
    en: { q: 'Light travels fastest in', options: ['vacuum', 'glass', 'water', 'diamond'], explanation: 'Light travels at about 3 × 10⁸ m s⁻¹ in vacuum and slower in any material medium.' },
    ta: { q: 'ஒளியின் திசைவேகம் _____ பெருமமாக உள்ளது.', options: ['வெற்றிடத்தில்', 'கண்ணாடியில்', 'நீரில்', 'வைரத்தில்'], explanation: 'வெற்றிடத்தில் ஒளியின் திசைவேகம் ஏறக்குறைய 3 × 10⁸ மீ வி⁻¹; பிற ஊடகங்களில் குறைவு.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise VI.5, p. 78', answer: 0,
    en: { q: 'The speed of light in vacuum is about', options: ['3 × 10⁸ m s⁻¹', '3 × 10⁶ m s⁻¹', '3 × 10⁵ m s⁻¹', '340 m s⁻¹'], explanation: 'Light travels nearly 300,000 km (3 × 10⁸ m) every second in vacuum; 340 m s⁻¹ is the speed of sound in air.' },
    ta: { q: 'வெற்றிடத்தில் ஒளியின் திசைவேகம் ஏறக்குறைய', options: ['3 × 10⁸ மீ வி⁻¹', '3 × 10⁶ மீ வி⁻¹', '3 × 10⁵ மீ வி⁻¹', '340 மீ வி⁻¹'], explanation: 'வெற்றிடத்தில் ஒளி ஒரு வினாடியில் ஏறக்குறைய 3,00,000 கிமீ (3 × 10⁸ மீ) செல்லும்; 340 மீ வி⁻¹ காற்றில் ஒலியின் வேகம்.' },
  },
  {
    difficulty: 'easy', source: '§6.1.1, p. 67', answer: 0,
    en: { q: 'According to the laws of reflection, the angle of incidence is', options: ['equal to the angle of reflection', 'twice the angle of reflection', 'half the angle of reflection', 'always 90°'], explanation: 'i = r, and the incident ray, reflected ray and normal lie in the same plane.' },
    ta: { q: 'எதிரொளிப்பு விதிகளின்படி படுகோணம்', options: ['எதிரொளிப்புக் கோணத்திற்குச் சமம்', 'எதிரொளிப்புக் கோணத்தின் இருமடங்கு', 'எதிரொளிப்புக் கோணத்தின் பாதி', 'எப்போதும் 90°'], explanation: 'i = r; படுகதிர், எதிரொளிப்புக் கதிர், குத்துக்கோடு மூன்றும் ஒரே தளத்தில் அமையும்.' },
  },
  {
    difficulty: 'easy', source: '§6.1.2, p. 67', answer: 0,
    en: { q: 'The word "AMBULANCE" is written in mirror form on the front of ambulances because a plane mirror shows', options: ['lateral inversion', 'total internal reflection', 'refraction', 'magnification'], explanation: 'Drivers ahead see it in their rear-view mirror, where lateral (sideways) inversion makes it read correctly.' },
    ta: { q: 'அவசர ஊர்திகளின் முன்புறம் AMBULANCE என்பது இடவலமாகத் திருப்பி எழுதப்படுவதற்குக் காரணம் சமதள ஆடியில் ஏற்படும்', options: ['இடவல மாற்றம்', 'முழு அக எதிரொளிப்பு', 'ஒளிவிலகல்', 'உருப்பெருக்கம்'], explanation: 'முன்னே செல்லும் ஓட்டுநர்கள் பின்னோக்கு ஆடியில் பார்க்கும்போது இடவல மாற்றத்தால் அது சரியாகத் தெரியும்.' },
  },
  {
    difficulty: 'easy', source: '§6.2, p. 67', answer: 0,
    en: { q: 'An image that can be caught on a screen is a', options: ['real image', 'virtual image', 'erect virtual image', 'laterally inverted image'], explanation: 'Real images form where reflected rays actually meet, so they can be obtained on a screen; virtual images cannot.' },
    ta: { q: 'திரையில் பிடிக்கக்கூடிய பிம்பம்', options: ['மெய் பிம்பம்', 'மாய பிம்பம்', 'நேரான மாய பிம்பம்', 'இடவல மாற்றப் பிம்பம்'], explanation: 'எதிரொளிப்புக் கதிர்கள் உண்மையில் சந்திக்கும் இடத்தில் மெய் பிம்பம் உருவாவதால் அதைத் திரையில் பிடிக்கலாம்; மாய பிம்பத்தைப் பிடிக்க இயலாது.' },
  },
  {
    difficulty: 'easy', source: '§6.3.1, p. 76 (glossary)', answer: 0,
    en: { q: 'The midpoint of a spherical mirror is called its', options: ['pole', 'centre of curvature', 'principal focus', 'aperture'], explanation: 'The pole P is the midpoint of the mirror; the aperture is the diameter of its rim.' },
    ta: { q: 'கோளக ஆடியின் மையப் புள்ளி', options: ['ஆடிமையம்', 'வளைவு மையம்', 'முக்கியக் குவியம்', 'ஆடிமுகப்பு'], explanation: 'ஆடிமையம் (P) ஆடியின் மையப் புள்ளி; ஆடிமுகப்பு அதன் வட்ட விளிம்பின் விட்டம்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise III.2, p. 77', answer: 0,
    en: { q: 'The mirror used in a searchlight is a _____ mirror.', options: ['concave', 'convex', 'plane', 'cylindrical'], explanation: 'Searchlights, torches and vehicle headlights use concave mirrors to give powerful beams.' },
    ta: { q: 'தேடொளி விளக்கில் (searchlight) பயன்படும் ஆடி _____.', options: ['குழியாடி', 'குவியாடி', 'சமதள ஆடி', 'உருளை ஆடி'], explanation: 'தேடொளி, டார்ச், வாகன முகப்பு விளக்குகளில் வலிமையான ஒளிக்கற்றைக்காகக் குழியாடி பயன்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise III.5, p. 77', answer: 0,
    en: { q: 'Large _____ mirrors are used to concentrate sunlight in solar furnaces.', options: ['concave', 'convex', 'plane', 'one-way'], explanation: 'Large concave mirrors focus sunlight to a point, producing heat in solar heaters and furnaces.' },
    ta: { q: 'சூரிய அடுப்புகளில் (உலைகளில்) சூரிய ஒளியைக் குவித்து வெப்பம் உண்டாக்கப் பயன்படும் பெரிய ஆடிகள் _____.', options: ['குழியாடிகள்', 'குவியாடிகள்', 'சமதள ஆடிகள்', 'ஒருவழி ஆடிகள்'], explanation: 'பெரிய குழியாடிகள் சூரிய ஒளியைக் குவித்து வெப்பத்தை உருவாக்குகின்றன.' },
  },
  {
    difficulty: 'easy', source: '§6.5.2, p. 72', answer: 0,
    en: { q: 'Rear-view mirrors in vehicles are', options: ['convex mirrors', 'concave mirrors', 'plane mirrors', 'prisms'], explanation: 'A convex mirror always gives an erect, small image and a wide field of view.' },
    ta: { q: 'வாகனங்களின் பின்னோக்கு ஆடிகள்', options: ['குவியாடிகள்', 'குழியாடிகள்', 'சமதள ஆடிகள்', 'முப்பட்டகங்கள்'], explanation: 'குவியாடி எப்போதும் நேரான, சிறிய பிம்பத்தையும் அகன்ற பார்வைப் புலத்தையும் தரும்.' },
  },
  {
    difficulty: 'easy', source: '§6.7, p. 73', answer: 0,
    en: { q: 'The bending of light when it passes obliquely from one transparent medium into another is called', options: ['refraction', 'reflection', 'dispersion', 'lateral inversion'], explanation: 'Refraction is the change in direction of light caused by its change of speed between media.' },
    ta: { q: 'ஒளி ஒரு ஒளிபுகும் ஊடகத்திலிருந்து மற்றொன்றுக்குச் சாய்வாகச் செல்லும்போது வளைவது', options: ['ஒளிவிலகல்', 'எதிரொளிப்பு', 'நிறப்பிரிகை', 'இடவல மாற்றம்'], explanation: 'ஊடகங்களுக்கிடையே திசைவேகம் மாறுவதால் ஒளியின் பாதை மாறுவதே ஒளிவிலகல்.' },
  },
  {
    difficulty: 'easy', source: '§6.8.2, p. 76', answer: 0,
    en: { q: 'The Indian-born physicist known as the Father of Fibre Optics is', options: ['Narinder Kapany', 'C. V. Raman', 'Homi Bhabha', 'J. C. Bose'], explanation: 'Narinder Kapany is regarded as the Father of Fibre Optics.' },
    ta: { q: 'இழை ஒளியியலின் தந்தை என அழைக்கப்படும் இந்தியாவைச் சேர்ந்த இயற்பியலாளர்', options: ['நரிந்தர் கபானி', 'சி. வி. ராமன்', 'ஹோமி பாபா', 'ஜெ. சி. போஸ்'], explanation: 'நரிந்தர் கபானி இழை ஒளியியலின் தந்தை எனப்படுகிறார்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.5, p. 77', answer: 0,
    en: { q: 'The sparkling brilliance of a diamond is due to', options: ['total internal reflection', 'lateral inversion', 'diffuse reflection', 'magnification'], explanation: 'Light is totally reflected many times inside a diamond, which makes it sparkle.' },
    ta: { q: 'வைரம் ஜொலிப்பதற்குக் காரணம்', options: ['முழு அக எதிரொளிப்பு', 'இடவல மாற்றம்', 'ஒழுங்கற்ற எதிரொளிப்பு', 'உருப்பெருக்கம்'], explanation: 'வைரத்தினுள் ஒளி பலமுறை முழு அக எதிரொளிப்பு அடைவதால் அது ஜொலிக்கிறது.' },
  },

  {
    difficulty: 'easy', source: '§6.6, p. 73', answer: 0,
    en: { q: 'The first estimate of the speed of light, made by observing a moon of Jupiter, was by', options: ['Ole Roemer', 'Galileo Galilei', 'Armand Fizeau', 'Isaac Newton'], explanation: 'In 1665 the Danish astronomer Ole Roemer first estimated the speed of light; Fizeau made the first land-based estimate in 1849.' },
    ta: { q: 'வியாழனின் நிலவு ஒன்றைக் கவனித்து ஒளியின் திசைவேகத்தை முதன்முதலில் மதிப்பிட்டவர்', options: ['ஓலே ரோமர்', 'கலிலியோ கலிலி', 'ஆர்மண்ட் ஃபிஸோ', 'ஐசக் நியூட்டன்'], explanation: '1665-இல் டென்மார்க் வானியலாளர் ஓலே ரோமர் முதன்முதலில் ஒளியின் திசைவேகத்தை மதிப்பிட்டார்; 1849-இல் ஃபிஸோ நிலத்தில் முதல் அளவீடு செய்தார்.' },
  },
  {
    difficulty: 'easy', source: '§6.3.3, p. 69', answer: 0,
    en: { q: 'After reflection from a concave mirror, a ray travelling parallel to the principal axis', options: ['passes through the principal focus', 'passes through the centre of curvature', 'retraces its path', 'travels parallel to the principal axis'], explanation: 'Rule 2: a ray parallel to the axis passes through F (or appears to come from F for a convex mirror).' },
    ta: { q: 'முதன்மை அச்சுக்கு இணையாகச் செல்லும் கதிர் குழியாடியில் எதிரொளித்த பின்', options: ['முக்கியக் குவியம் வழியே செல்லும்', 'வளைவு மையம் வழியே செல்லும்', 'அதே பாதையில் திரும்பும்', 'முதன்மை அச்சுக்கு இணையாகச் செல்லும்'], explanation: 'விதி 2: அச்சுக்கு இணையான கதிர் F வழியே செல்லும் (குவியாடியில் F-இலிருந்து வருவது போலத் தோன்றும்).' },
  },
  // ---------------------------------------------------------------- Medium
  {
    difficulty: 'medium', source: '§6.3.2 Activity 2, p. 68', answer: 0,
    en: { q: 'Sunlight reflected by a concave mirror onto a sheet of paper held at the right distance can set the paper on fire. This is because', options: ['the mirror converges the parallel sun rays to a point at its focus', 'the mirror spreads the rays over a wide area', 'the mirror makes the light travel faster', 'the paper reflects all the light back'], explanation: 'Parallel rays from the sun meet at the focus of a concave mirror, concentrating light and heat on a small spot.' },
    ta: { q: 'குழியாடியால் எதிரொளிக்கப்படும் சூரிய ஒளி சரியான தொலைவில் வைக்கப்பட்ட தாளை எரிக்கக் காரணம்', options: ['ஆடி இணையான சூரியக் கதிர்களைக் குவியத்தில் ஒரு புள்ளியில் குவிக்கிறது', 'ஆடி கதிர்களை அகன்ற பரப்பில் பரப்புகிறது', 'ஆடி ஒளியை வேகமாகச் செல்லச் செய்கிறது', 'தாள் எல்லா ஒளியையும் திருப்பி எதிரொளிக்கிறது'], explanation: 'சூரியனின் இணைக் கதிர்கள் குழியாடியின் குவியத்தில் சந்திப்பதால் சிறு இடத்தில் ஒளியும் வெப்பமும் குவிகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.1, p. 77', answer: 0,
    en: { q: 'A ray of light passes from one medium into another. It bends (refracts) when the angle of incidence is', options: ['45°', '0°', '90°', '0° and 90° only'], explanation: 'A ray along the normal (0°) goes straight through and a 90° ray only grazes the surface; an oblique ray, such as one at 45°, bends.' },
    ta: { q: 'ஒளி ஒரு ஊடகத்திலிருந்து மற்றொரு ஊடகத்திற்குச் செல்கிறது. எந்தப் படுகோணத்தில் அது ஒளிவிலகல் அடையும் (வளையும்)?', options: ['45°', '0°', '90°', '0°, 90° மட்டும்'], explanation: 'குத்துக்கோட்டின் வழியே (0°) செல்லும் கதிர் விலகாது; 90° கதிர் பரப்பை ஒட்டிச் செல்லும்; 45° போன்ற சாய்வான கதிர் விலகும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.3, p. 77', answer: 0,
    en: { q: 'An enlarged, virtual image can be obtained with a', options: ['concave mirror', 'convex mirror', 'plane mirror', 'convex mirror held very close'], explanation: 'With the object between F and P, a concave mirror gives a virtual, erect, magnified image. Convex and plane mirrors never magnify.' },
    ta: { q: 'பெரிதான, மாய பிம்பத்தை உருவாக்குவது _____', options: ['குழியாடி', 'குவியாடி', 'சமதள ஆடி', 'மிக அருகில் வைத்த குவியாடி'], explanation: 'பொருள் F-க்கும் P-க்கும் இடையே இருக்கும்போது குழியாடி மாய, நேரான, பெரிதான பிம்பம் தரும். குவியாடியும் சமதள ஆடியும் பெரிதாக்குவதில்லை.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.5, p. 77', answer: 0,
    en: { q: 'When a beam of white light passes through a glass prism, it is', options: ['deviated and dispersed into colours', 'only reflected', 'only deviated', 'absorbed completely'], explanation: 'A prism bends (deviates) light and also splits white light into its colours (dispersion).' },
    ta: { q: 'முப்பட்டகம் ஒன்றின் வழியே வெண்ணிற ஒளிக்கற்றை பாயும்போது, அது', options: ['விலகலடைகிறது மற்றும் நிறப்பிரிகை அடைகிறது', 'எதிரொளிக்கப்பட மட்டும் செய்கிறது', 'விலகல் மட்டும் அடைகிறது', 'முழுவதும் உட்கவரப்படுகிறது'], explanation: 'முப்பட்டகம் ஒளியை விலகச் செய்வதுடன் வெண்ணிற ஒளியை நிறங்களாகப் பிரிக்கிறது (நிறப்பிரிகை).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.2, II.3, II.4, p. 77', answer: 0,
    en: { q: 'Which statement is correct?', options: ['A convex mirror always forms a virtual, erect and diminished image.', 'An object at C of a concave mirror forms a virtual, erect image.', 'A ray passing obliquely into another medium suffers no deviation.', 'A plane mirror can form a magnified image.'], explanation: 'A convex mirror always gives a virtual, erect, small image. An object at C gives a real, inverted, same-size image; oblique rays do deviate; plane mirrors give same-size images.' },
    ta: { q: 'சரியான கூற்று எது?', options: ['குவியாடி எப்போதும் மாய, நேரான, சிறிய பிம்பத்தை உருவாக்கும்.', 'குழியாடியின் C-இல் உள்ள பொருள் மாய, நேரான பிம்பத்தை உருவாக்கும்.', 'சாய்வாக மற்றொரு ஊடகத்திற்குள் செல்லும் கதிர் விலகலடையாது.', 'சமதள ஆடி பெரிதான பிம்பத்தை உருவாக்கும்.'], explanation: 'குவியாடி எப்போதும் மாய, நேரான, சிறிய பிம்பம் தரும். C-இல் உள்ள பொருளுக்கு மெய், தலைகீழ், அதே அளவு பிம்பம்; சாய்வான கதிர் விலகும்; சமதள ஆடி அதே அளவு பிம்பம் தரும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.1, p. 77', answer: 0,
    en: { q: 'When a ray of light goes from a rarer medium into a denser medium, it bends', options: ['towards the normal', 'away from the normal', 'along the surface', 'back into the rarer medium'], explanation: 'Light slows down in the denser medium and bends towards the normal.' },
    ta: { q: 'அடர் குறை ஊடகத்திலிருந்து அடர்மிகு ஊடகத்திற்கு ஒளிக்கதிர் செல்லும்போது அது', options: ['குத்துக்கோட்டை நோக்கி விலகும்', 'குத்துக்கோட்டை விட்டு விலகும்', 'பரப்பின் வழியே செல்லும்', 'அடர் குறை ஊடகத்திற்கே திரும்பும்'], explanation: 'அடர்மிகு ஊடகத்தில் ஒளியின் திசைவேகம் குறைவதால் அது குத்துக்கோட்டை நோக்கி விலகும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.4, p. 77', answer: 0,
    en: { q: 'The radius of curvature of a concave mirror of focal length 5 cm is', options: ['10 cm', '2.5 cm', '5 cm', '25 cm'], explanation: 'R = 2f = 2 × 5 = 10 cm.' },
    ta: { q: '5 செமீ குவியத்தொலைவு கொண்ட குழியாடியின் வளைவு ஆரம் = _____', options: ['10 செமீ', '2.5 செமீ', '5 செமீ', '25 செமீ'], explanation: 'R = 2f = 2 × 5 = 10 செமீ.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV, p. 77', answer: 0,
    en: { q: 'Match:\n1. Used at hairpin bends in mountains  2. Coin in water appears raised  3. Mirage  4. Dentist\'s mirror\n(a) Total internal reflection  (b) Concave mirror  (c) Convex mirror  (d) Refraction', options: ['1-c, 2-d, 3-a, 4-b', '1-b, 2-d, 3-a, 4-c', '1-c, 2-a, 3-d, 4-b', '1-d, 2-c, 3-a, 4-b'], explanation: 'Convex mirrors at bends, refraction raises the coin, a mirage is due to total internal reflection, and dentists use concave mirrors.' },
    ta: { q: 'பொருத்துக:\n1. மலைகளில் காணப்படும் மிகக் குறுகிய (கொண்டை ஊசி) வளைவுகளில் பயன்படுவது  2. தண்ணீருக்குள் உள்ள நாணயம் சற்று மேலே உள்ளது போல் தெரிவது  3. கானல் நீர்  4. பல் மருத்துவர் பயன்படுத்துவது\n(a) முழு அக எதிரொளிப்பு  (b) குழியாடி  (c) குவியாடி  (d) ஒளிவிலகல்', options: ['1-c, 2-d, 3-a, 4-b', '1-b, 2-d, 3-a, 4-c', '1-c, 2-a, 3-d, 4-b', '1-d, 2-c, 3-a, 4-b'], explanation: 'வளைவுகளில் குவியாடி; ஒளிவிலகலால் நாணயம் மேலே தெரியும்; கானல் நீர் முழு அக எதிரொளிப்பால்; பல் மருத்துவர் குழியாடி பயன்படுத்துவார்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.1, p. 77', answer: 0,
    en: { q: 'The ratio of the height of the image to the height of the object is called', options: ['magnification', 'refractive index', 'focal length', 'critical angle'], explanation: 'Magnification m = h₂ ÷ h₁ (= −v ÷ u for a mirror).' },
    ta: { q: 'பிம்பத்தின் உயரத்திற்கும் பொருளின் உயரத்திற்கும் இடையேயான தகவு', options: ['உருப்பெருக்கம்', 'ஒளிவிலகல் எண்', 'குவியத்தொலைவு', 'மாறுநிலைக் கோணம்'], explanation: 'உருப்பெருக்கம் m = h₂ ÷ h₁ (ஆடிக்கு = −v ÷ u).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.1, p. 78', answer: 0,
    en: { q: 'Using the cartesian sign convention, which mirror has a negative focal length?', options: ['Concave mirror', 'Convex mirror', 'Plane mirror', 'Both concave and convex mirrors'], explanation: 'The focus of a concave mirror lies in front of it, against the incident light, so f is negative; for a convex mirror f is positive. (Among lenses, the concave lens has negative f.)' },
    ta: { q: 'கார்டீசியன் குறியீட்டு மரபுப்படி எந்த ஆடிக்குக் குவியத்தொலைவு எதிர்க்குறி கொண்டது?', options: ['குழியாடி', 'குவியாடி', 'சமதள ஆடி', 'குழியாடி, குவியாடி இரண்டும்'], explanation: 'குழியாடியின் குவியம் ஆடிக்கு முன், படு ஒளிக்கு எதிர்த் திசையில் உள்ளதால் f எதிர்க்குறி; குவியாடிக்கு f நேர்க்குறி. (லென்சுகளில் குழிலென்சுக்கு f எதிர்க்குறி.)' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.3, p. 78', answer: 0,
    en: { q: 'If an object is placed at the principal focus of a concave mirror, the image is formed', options: ['at infinity (no image can be seen or caught)', 'at the centre of curvature', 'behind the mirror', 'at the focus itself'], explanation: 'Rays from F leave the mirror parallel, so no real image is caught and no virtual image is seen – the image is at infinity.' },
    ta: { q: 'குழியாடியின் முக்கியக் குவியத்தில் பொருள் வைக்கப்பட்டால் பிம்பம் உருவாகும் இடம்', options: ['ஈறிலாத் தொலைவு (பிம்பத்தைக் காணவோ பிடிக்கவோ இயலாது)', 'வளைவு மையம்', 'ஆடிக்குப் பின்னால்', 'குவியத்திலேயே'], explanation: 'F-இலிருந்து வரும் கதிர்கள் இணையாக எதிரொளிப்பதால் மெய் பிம்பமோ மாய பிம்பமோ தெரியாது; பிம்பம் ஈறிலாத் தொலைவில் உள்ளது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.4, p. 78', answer: 0,
    en: { q: 'A ray of light bends when it travels obliquely from one medium to another because', options: ['its speed changes from one medium to the other', 'its frequency becomes zero', 'it is absorbed at the surface', 'the medium reflects all of it'], explanation: 'The speed of light depends on the medium: it is greater in a rarer medium and less in a denser one, and this change causes bending.' },
    ta: { q: 'ஒளிக்கதிர் ஒரு ஊடகத்திலிருந்து மற்றொன்றுக்குச் சாய்வாகச் செல்லும்போது வளைவதற்குக் காரணம்', options: ['ஊடகத்திற்கு ஊடகம் அதன் திசைவேகம் மாறுவது', 'அதன் அதிர்வெண் சுழியாவது', 'பரப்பில் உட்கவரப்படுவது', 'ஊடகம் முழுவதையும் எதிரொளிப்பது'], explanation: 'ஒளியின் திசைவேகம் ஊடகத்தைச் சார்ந்தது; அடர் குறை ஊடகத்தில் அதிகம், அடர்மிகு ஊடகத்தில் குறைவு; இந்த மாற்றமே வளைவுக்குக் காரணம்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.6, p. 78', answer: 0,
    en: { q: 'Dentists use concave mirrors to examine teeth because, held close to a tooth, the mirror gives', options: ['an erect, magnified image and focuses light on the tooth', 'a small, erect image with a wide view', 'a real, inverted image on a screen', 'an image of the same size as the tooth'], explanation: 'With the tooth inside the focus, a concave mirror gives a virtual, erect, enlarged image, and it also concentrates light on the area.' },
    ta: { q: 'பல் மருத்துவர்கள் பற்களைப் பரிசோதிக்கக் குழியாடியைப் பயன்படுத்துவதற்குக் காரணம், பல்லுக்கு அருகில் வைக்கும்போது அது', options: ['நேரான, பெரிதான பிம்பம் தருவதுடன் ஒளியைப் பல்லின் மீது குவிக்கிறது', 'சிறிய, நேரான, அகன்ற பார்வை தருகிறது', 'திரையில் மெய், தலைகீழ் பிம்பம் தருகிறது', 'பல்லின் அதே அளவுள்ள பிம்பம் தருகிறது'], explanation: 'பல் குவியத்திற்குள் இருக்கும்போது குழியாடி மாய, நேரான, பெரிதான பிம்பம் தரும்; மேலும் ஒளியை அப்பகுதியில் குவிக்கும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VII.3, p. 78', answer: 0,
    en: { q: 'A ray of light falling on a spherical mirror retraces its path after reflection if it is directed', options: ['towards the centre of curvature', 'parallel to the principal axis', 'towards the principal focus', 'at the pole at 45°'], explanation: 'A ray along the radius meets the mirror normally (i = 0°), so r = 0° and it comes back along itself.' },
    ta: { q: 'கோளக ஆடியின் மீது விழும் ஒளிக்கதிர் எதிரொளிப்புக்குப் பின் அதே பாதையில் திரும்ப வேண்டுமெனில் அது செலுத்தப்பட வேண்டிய திசை', options: ['வளைவு மையத்தை நோக்கி', 'முதன்மை அச்சுக்கு இணையாக', 'முக்கியக் குவியத்தை நோக்கி', 'ஆடிமையத்தில் 45°-இல்'], explanation: 'ஆரத்தின் வழியே செல்லும் கதிர் ஆடிக்குச் செங்குத்தாக விழுவதால் (i = 0°) r = 0°; அது அதே பாதையில் திரும்பும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VII.4, p. 78', answer: 0,
    en: { q: 'For a spherical mirror, a negative value of magnification shows that the image is', options: ['real and inverted', 'virtual and erect', 'always magnified', 'always diminished'], explanation: 'Negative m – real (inverted) image; positive m – virtual (erect) image. The size depends on whether |m| is more or less than 1.' },
    ta: { q: 'கோளக ஆடியில் உருப்பெருக்கத்தின் மதிப்பு எதிர்க்குறியாக இருந்தால் பிம்பம்', options: ['மெய்யானது, தலைகீழானது', 'மாயமானது, நேரானது', 'எப்போதும் பெரிதானது', 'எப்போதும் சிறியது'], explanation: 'எதிர்க்குறி m – மெய் (தலைகீழ்) பிம்பம்; நேர்க்குறி m – மாய (நேரான) பிம்பம். அளவு |m| 1-ஐ விடக் கூடுதலா குறைவா என்பதைச் சார்ந்தது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VII.2, p. 78', answer: 0,
    en: { q: 'Which group lists only uses of concave mirrors?', options: ["Dentist's mirror, torchlight reflector, make-up mirror", 'Rear-view mirror, dentist\'s mirror, make-up mirror', 'Mirrors in shopping malls, torchlight reflector, rear-view mirror', 'Rear-view mirror, mirrors in shopping malls, make-up mirror'], explanation: 'Dentist, torch and make-up mirrors are concave; rear-view mirrors and blind-spot mirrors in shops are convex.' },
    ta: { q: 'குழியாடியின் பயன்கள் மட்டும் உள்ள தொகுப்பு எது?', options: ['பல் மருத்துவர் ஆடி, கை மின்விளக்கு ஆடி, ஒப்பனை ஆடி', 'பின்னோக்கு ஆடி, பல் மருத்துவர் ஆடி, ஒப்பனை ஆடி', 'பல்பொருள் அங்காடிகளில் உள்ள ஆடி, கை மின்விளக்கு ஆடி, பின்னோக்கு ஆடி', 'பின்னோக்கு ஆடி, பல்பொருள் அங்காடிகளில் உள்ள ஆடி, ஒப்பனை ஆடி'], explanation: 'பல் மருத்துவர் ஆடி, கை மின்விளக்கு (டார்ச்) ஆடி, ஒப்பனை ஆடி ஆகியவை குழியாடிகள்; பின்னோக்கு ஆடியும் பல்பொருள் அங்காடிகளின் மறைவிட ஆடியும் குவியாடிகள்.' },
  },
  {
    difficulty: 'medium', source: '§6.4.1, p. 69', answer: 0,
    en: { q: 'An object is placed beyond the centre of curvature of a concave mirror. The image is', options: ['between F and C, real, inverted and smaller', 'beyond C, real, inverted and magnified', 'at C, real, inverted and same size', 'behind the mirror, virtual and erect'], explanation: 'Object beyond C gives a real, inverted, diminished image between F and C.' },
    ta: { q: 'குழியாடியின் வளைவு மையத்திற்கு அப்பால் பொருள் வைக்கப்படுகிறது. பிம்பம்', options: ['F-க்கும் C-க்கும் இடையே; மெய், தலைகீழ், சிறியது', 'C-க்கு அப்பால்; மெய், தலைகீழ், பெரியது', 'C-இல்; மெய், தலைகீழ், அதே அளவு', 'ஆடிக்குப் பின்னால்; மாய, நேரானது'], explanation: 'C-க்கு அப்பால் உள்ள பொருளுக்கு F-க்கும் C-க்கும் இடையே மெய், தலைகீழ், சிறிய பிம்பம் உருவாகும்.' },
  },
  {
    difficulty: 'medium', source: '§6.8.1, p. 75', answer: 0,
    en: { q: 'Total internal reflection can take place only when light travels', options: ['from a denser to a rarer medium at an angle greater than the critical angle', 'from a rarer to a denser medium at any angle', 'from a denser to a rarer medium at an angle less than the critical angle', 'along the normal into any medium'], explanation: 'Both conditions are needed: denser to rarer, and angle of incidence greater than the critical angle.' },
    ta: { q: 'முழு அக எதிரொளிப்பு ஏற்பட ஒளி செல்ல வேண்டியது', options: ['அடர்மிகு ஊடகத்திலிருந்து அடர் குறை ஊடகத்திற்கு, மாறுநிலைக் கோணத்தை விட அதிகப் படுகோணத்தில்', 'அடர் குறை ஊடகத்திலிருந்து அடர்மிகு ஊடகத்திற்கு, எந்தக் கோணத்திலும்', 'அடர்மிகு ஊடகத்திலிருந்து அடர் குறை ஊடகத்திற்கு, மாறுநிலைக் கோணத்தை விடக் குறைவான கோணத்தில்', 'குத்துக்கோட்டின் வழியே எந்த ஊடகத்திற்கும்'], explanation: 'இரு நிபந்தனைகளும் தேவை: அடர்மிகு ஊடகத்திலிருந்து அடர் குறை ஊடகத்திற்கு; படுகோணம் மாறுநிலைக் கோணத்தை விட அதிகம்.' },
  },
  {
    difficulty: 'medium', source: '§6.8, p. 75', answer: 0,
    en: { q: 'The critical angle is the angle of incidence in the denser medium for which the angle of refraction is', options: ['90°', '0°', '45°', 'equal to the angle of incidence'], explanation: 'At the critical angle the refracted ray grazes the surface, so r = 90°.' },
    ta: { q: 'அடர்மிகு ஊடகத்தில் உள்ள எந்தப் படுகோணத்திற்கு விலகு கோணம் _____ ஆக இருக்கிறதோ, அந்தப் படுகோணமே மாறுநிலைக் கோணம்.', options: ['90°', '0°', '45°', 'படுகோணத்திற்குச் சமம்'], explanation: 'மாறுநிலைக் கோணத்தில் விலகுகதிர் இரு ஊடகங்களையும் பிரிக்கும் பரப்பை ஒட்டிச் செல்லும்; r = 90°.' },
  },
  {
    difficulty: 'medium', source: '§6.2 Activity 1, p. 68', answer: 0,
    en: { q: 'A student 150 cm tall wants to see her full body in a plane mirror. The minimum height of the mirror needed is', options: ['75 cm', '150 cm', '300 cm', '50 cm'], explanation: 'To see your full image, the mirror must be at least half your height: 150 ÷ 2 = 75 cm.' },
    ta: { q: '150 செமீ உயரமுள்ள மாணவி சமதள ஆடியில் தன் முழு உருவத்தைக் காண விரும்புகிறாள். தேவையான ஆடியின் குறைந்தபட்ச உயரம்', options: ['75 செமீ', '150 செமீ', '300 செமீ', '50 செமீ'], explanation: 'முழு உருவத்தைக் காண ஆடி குறைந்தது நம் உயரத்தில் பாதியாக இருக்க வேண்டும்: 150 ÷ 2 = 75 செமீ.' },
  },

  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise V.1, p. 77', answer: 3,
    en: { q: 'Assertion: To watch the traffic at a hairpin bend on a mountain road, a plane mirror is preferred to a convex or concave mirror. Reason: A convex mirror has a much wider field of view than a plane or concave mirror.', options: AR_EN, explanation: 'The assertion is false – convex mirrors are used at hairpin bends – and the reason, their wider field of view, is true.' },
    ta: { q: 'கூற்று: மலைப்பாதைகளில் உள்ள கொண்டை ஊசி வளைவில் போக்குவரத்தைக் கண்காணிக்கக் குவியாடி மற்றும் குழியாடியை விடச் சமதள ஆடியே பயன்படுத்தப்படுகிறது. காரணம்: ஒரு குவியாடியானது சமதள ஆடி அல்லது குழியாடியை விட மிக அதிகமான பார்வைப்புலம் உடையது.', options: AR_TA, explanation: 'கூற்று தவறு – வளைவுகளில் குவியாடியே பயன்படுகிறது; அதன் அகன்ற பார்வைப் புலம் என்ற காரணம் சரி.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise V.2, p. 78', answer: 0,
    en: { q: 'Assertion: A ray directed towards the centre of curvature of a spherical mirror retraces its path after reflection. Reason: For this ray, the angle of incidence = angle of reflection = 0°.', options: AR_EN, explanation: 'Both true: the ray falls along the normal, so i = r = 0° and it comes back on itself – the reason explains the assertion.' },
    ta: { q: 'கூற்று: கோளக ஆடியின் வளைவு மையத்தை நோக்கிச் செலுத்தப்படும் கதிர் எதிரொளிப்புக்குப் பின் அதே பாதையில் திரும்பும். காரணம்: இக்கதிருக்குப் படுகோணம் (i) = எதிரொளிப்புக் கோணம் (r) = 0°.', options: AR_TA, explanation: 'இரண்டும் சரி: கதிர் குத்துக்கோட்டின் வழியே விழுவதால் i = r = 0°; அது அதே பாதையில் திரும்பும்; காரணம் கூற்றை விளக்குகிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book example 1, p. 71', answer: 0,
    en: { q: 'A 1 cm tall object is 15 cm in front of a concave mirror of focal length 10 cm. The image is', options: ['30 cm in front of the mirror, real, inverted, 2 cm tall', '30 cm behind the mirror, virtual, erect, 2 cm tall', '6 cm in front of the mirror, real, inverted, 0.4 cm tall', '30 cm in front of the mirror, real, erect, 2 cm tall'], explanation: 'u = −15, f = −10: 1/v = 1/f − 1/u = −1/10 + 1/15 = −1/30, so v = −30 cm. m = −v/u = −2, so the image is real, inverted and 2 cm tall.' },
    ta: { q: '10 செமீ குவியத்தொலைவு கொண்ட குழியாடி ஒன்றிலிருந்து 15 செமீ தொலைவில் (ஆடிக்கு முன்) 1 செமீ உயரம் கொண்ட பொருள் வைக்கப்பட்டுள்ளது. பிம்பம்', options: ['ஆடிக்கு முன் 30 செமீ; மெய், தலைகீழ், 2 செமீ உயரம்', 'ஆடிக்குப் பின் 30 செமீ; மாய, நேரான, 2 செமீ உயரம்', 'ஆடிக்கு முன் 6 செமீ; மெய், தலைகீழ், 0.4 செமீ உயரம்', 'ஆடிக்கு முன் 30 செமீ; மெய், நேரான, 2 செமீ உயரம்'], explanation: 'u = −15, f = −10: 1/v = 1/f − 1/u = −1/10 + 1/15 = −1/30; v = −30 செமீ. m = −v/u = −2; பிம்பம் மெய், தலைகீழ், 2 செமீ.' },
  },
  {
    difficulty: 'hard', source: 'Book example 2, p. 71', answer: 0,
    en: { q: 'A 2 cm tall object is 16 cm in front of a concave mirror, which forms a real image 3 cm tall. The image is', options: ['24 cm in front of the mirror', '24 cm behind the mirror', '10.7 cm in front of the mirror', '48 cm in front of the mirror'], explanation: 'm = h₂/h₁ = −3/2 = −1.5 (real image). Since m = −v/u, v = −m × u = 1.5 × (−16) = −24 cm, i.e. 24 cm in front.' },
    ta: { q: 'குழியாடிக்கு முன் 16 செமீ தொலைவில் வைக்கப்படும் 2 செமீ உயரம் கொண்ட பொருளின் மெய் பிம்பம் 3 செமீ உயரம் உள்ளது. பிம்பம் உருவாகும் இடம்', options: ['ஆடிக்கு முன் 24 செமீ', 'ஆடிக்குப் பின் 24 செமீ', 'ஆடிக்கு முன் 10.7 செமீ', 'ஆடிக்கு முன் 48 செமீ'], explanation: 'm = h₂/h₁ = −3/2 = −1.5 (மெய் பிம்பம்). m = −v/u என்பதால் v = 1.5 × (−16) = −24 செமீ; அதாவது ஆடிக்கு முன் 24 செமீ.' },
  },
  {
    difficulty: 'hard', source: 'Book example 3, p. 73', answer: 0,
    en: { q: 'A car has a convex rear-view mirror of focal length 20 cm. A second car 2 m broad is 6 m behind it. The image of the second car is about', options: ['19.4 cm behind the mirror and 6.45 cm broad', '19.4 cm in front of the mirror and 6.45 cm broad', '20.7 cm behind the mirror and 6.9 cm broad', '600 cm behind the mirror and 2 m broad'], explanation: 'u = −600 cm, f = +20 cm: 1/v = 1/20 + 1/600 = 31/600, v ≈ 19.35 cm (behind). m = −v/u ≈ 0.032, breadth ≈ 0.032 × 200 ≈ 6.45 cm.' },
    ta: { q: 'ஒரு மகிழுந்தில் 20 செமீ குவியத்தொலைவு கொண்ட குவியாடி பின்னோக்கு ஆடியாகப் பொருத்தப்பட்டுள்ளது. 2 மீ அகலமுள்ள இன்னொரு மகிழுந்து 6 மீ பின்னால் உள்ளது. இரண்டாவது மகிழுந்தின் பிம்பம் ஏறக்குறைய', options: ['ஆடிக்குப் பின் 19.4 செமீ; 6.45 செமீ அகலம்', 'ஆடிக்கு முன் 19.4 செமீ; 6.45 செமீ அகலம்', 'ஆடிக்குப் பின் 20.7 செமீ; 6.9 செமீ அகலம்', 'ஆடிக்குப் பின் 600 செமீ; 2 மீ அகலம்'], explanation: 'u = −600 செமீ, f = +20 செமீ: 1/v = 1/20 + 1/600 = 31/600; v ≈ 19.35 செமீ (பின்னால்). m = −v/u ≈ 0.032; அகலம் ≈ 0.032 × 200 ≈ 6.45 செமீ.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise IX.1, p. 78', answer: 0,
    en: { q: 'A concave mirror forms a real image three times the size of an object placed 7 cm in front of it. Where is the image?', options: ['21 cm in front of the mirror', '21 cm behind the mirror', '2.33 cm in front of the mirror', '10 cm in front of the mirror'], explanation: 'Real image, so m = −3 = −v/u, giving v = 3u = 3 × (−7) = −21 cm: 21 cm in front.' },
    ta: { q: 'குழியாடியின் முன் 7 செமீ தொலைவில் பொருள் வைக்கப்படும்போது அதன் மும்மடங்கு உருப்பெருக்கப்பட்ட மெய் பிம்பம் கிடைக்கிறது எனில், பிம்பம் எவ்விடத்தில் கிடைக்கும்?', options: ['ஆடிக்கு முன் 21 செமீ', 'ஆடிக்குப் பின் 21 செமீ', 'ஆடிக்கு முன் 2.33 செமீ', 'ஆடிக்கு முன் 10 செமீ'], explanation: 'மெய் பிம்பம் என்பதால் m = −3 = −v/u; v = 3u = 3 × (−7) = −21 செமீ: ஆடிக்கு முன் 21 செமீ.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise IX.2, p. 78', answer: 0,
    en: { q: 'Light enters a glass plate of refractive index 1.5 from air (speed 3 × 10⁸ m s⁻¹). The speed of light in the glass is', options: ['2 × 10⁸ m s⁻¹', '4.5 × 10⁸ m s⁻¹', '1.5 × 10⁸ m s⁻¹', '3 × 10⁸ m s⁻¹'], explanation: 'v = c ÷ μ = (3 × 10⁸) ÷ 1.5 = 2 × 10⁸ m s⁻¹. Multiplying gives the impossible 4.5 × 10⁸.' },
    ta: { q: 'காற்றிலிருந்து (திசைவேகம் 3 × 10⁸ மீ வி⁻¹) 1.5 ஒளிவிலகல் எண் கொண்ட கண்ணாடிப் பாளத்திற்குள் ஒளி செல்கிறது. கண்ணாடியில் ஒளியின் திசைவேகம்', options: ['2 × 10⁸ மீ வி⁻¹', '4.5 × 10⁸ மீ வி⁻¹', '1.5 × 10⁸ மீ வி⁻¹', '3 × 10⁸ மீ வி⁻¹'], explanation: 'v = c ÷ μ = (3 × 10⁸) ÷ 1.5 = 2 × 10⁸ மீ வி⁻¹. பெருக்கினால் இயலாத 4.5 × 10⁸ வரும்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise IX.3, p. 78', answer: 0,
    en: { q: 'The speed of light in water is 2.25 × 10⁸ m s⁻¹ and in vacuum 3 × 10⁸ m s⁻¹. The refractive index of water is', options: ['1.33', '0.75', '6.75', '1.5'], explanation: 'μ = c ÷ v = 3 ÷ 2.25 ≈ 1.33. The inverse ratio 0.75 is less than 1, which is impossible for water.' },
    ta: { q: 'நீரில் ஒளியின் திசைவேகம் 2.25 × 10⁸ மீ வி⁻¹; வெற்றிடத்தில் 3 × 10⁸ மீ வி⁻¹. நீரின் ஒளிவிலகல் எண்', options: ['1.33', '0.75', '6.75', '1.5'], explanation: 'μ = c ÷ v = 3 ÷ 2.25 ≈ 1.33. தலைகீழ் விகிதம் 0.75 என்பது 1-ஐ விடக் குறைவு; நீருக்கு இயலாது.' },
  },
  {
    difficulty: 'hard', source: 'Book example 4, p. 74', answer: 0,
    en: { q: 'The speed of light is 3 × 10⁸ m s⁻¹ in air and 2 × 10⁸ m s⁻¹ in glass. The refractive index of glass with respect to air is', options: ['1.5', '0.67', '6', '1'], explanation: 'aμg = speed in air ÷ speed in glass = 3 ÷ 2 = 1.5, with no unit.' },
    ta: { q: 'காற்றில் ஒளியின் திசைவேகம் 3 × 10⁸ மீ வி⁻¹, கண்ணாடியில் 2 × 10⁸ மீ வி⁻¹. காற்றைப் பொறுத்துக் கண்ணாடியின் ஒளிவிலகல் எண்', options: ['1.5', '0.67', '6', '1'], explanation: 'aμg = காற்றில் திசைவேகம் ÷ கண்ணாடியில் திசைவேகம் = 3 ÷ 2 = 1.5; அலகு இல்லை.' },
  },
  {
    difficulty: 'hard', source: 'Book example 5, p. 74', answer: 0,
    en: { q: 'Light passes from a rarer into a denser medium with angle of incidence 45° and angle of refraction 30°. The refractive index of the second medium with respect to the first is', options: ['√2 ≈ 1.414', '1.5', '0.707', '√3 ≈ 1.732'], explanation: '1μ2 = sin i ÷ sin r = sin 45° ÷ sin 30° = (1/√2) ÷ (1/2) = √2 ≈ 1.414.' },
    ta: { q: 'அடர் குறை ஊடகத்திலிருந்து அடர்மிகு ஊடகத்திற்கு ஒளி செல்கிறது; படுகோணம் 45°, விலகு கோணம் 30°. முதல் ஊடகத்தைப் பொறுத்து இரண்டாவது ஊடகத்தின் ஒளிவிலகல் எண்', options: ['√2 ≈ 1.414', '1.5', '0.707', '√3 ≈ 1.732'], explanation: '1μ2 = sin i ÷ sin r = sin 45° ÷ sin 30° = (1/√2) ÷ (1/2) = √2 ≈ 1.414.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise X.3, p. 78', answer: 0,
    en: { q: 'The refractive index of diamond is 2.41. What can you conclude about the speed of light in diamond?', options: ['It is about 1.24 × 10⁸ m s⁻¹, much less than in air', 'It is about 7.2 × 10⁸ m s⁻¹, more than in air', 'It is the same as in air', 'It is about 2.41 × 10⁸ m s⁻¹'], explanation: 'v = c ÷ μ = (3 × 10⁸) ÷ 2.41 ≈ 1.24 × 10⁸ m s⁻¹; light is slowed to well under half its speed in air.' },
    ta: { q: 'வைரத்தின் ஒளிவிலகல் எண்ணின் மதிப்பு 2.41. வைரத்தின் வழியாகச் செல்லும் ஒளியின் திசைவேகம் பற்றி என்ன முடிவு செய்யலாம்?', options: ['ஏறக்குறைய 1.24 × 10⁸ மீ வி⁻¹; காற்றை விட மிகக் குறைவு', 'ஏறக்குறைய 7.2 × 10⁸ மீ வி⁻¹; காற்றை விட அதிகம்', 'காற்றில் உள்ளது போலவே', 'ஏறக்குறைய 2.41 × 10⁸ மீ வி⁻¹'], explanation: 'v = c ÷ μ = (3 × 10⁸) ÷ 2.41 ≈ 1.24 × 10⁸ மீ வி⁻¹; காற்றில் உள்ள வேகத்தின் பாதிக்கும் குறைவு.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise X.2, p. 78', answer: 0,
    en: { q: 'A ray of light passes obliquely from air into glass. Compared with the angle of incidence, the angle of refraction is', options: ['smaller, because the ray bends towards the normal', 'larger, because the ray bends away from the normal', 'equal, because glass is transparent', 'always 90°'], explanation: 'Glass is optically denser than air, so the ray bends towards the normal and r < i.' },
    ta: { q: 'ஓர் ஒளிக்கதிர் காற்றிலிருந்து கண்ணாடிக்குள் சாய்வாக நுழைகிறது. படுகோணத்தின் மதிப்புடன் ஒப்பிடும்போது விலகு கோணத்தின் மதிப்பு', options: ['குறைவு; கதிர் குத்துக்கோட்டை நோக்கி விலகும்', 'அதிகம்; கதிர் குத்துக்கோட்டை விட்டு விலகும்', 'சமம்; கண்ணாடி ஒளிபுகும் பொருள்', 'எப்போதும் 90°'], explanation: 'கண்ணாடி காற்றை விட அடர்மிகு ஊடகம்; கதிர் குத்துக்கோட்டை நோக்கி விலகும்; r < i.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise X.1, p. 78', imageUrl: `${IMG}/refraction-water-air.png`, answer: 0,
    en: { q: 'The figure shows a ray of light inside water reaching the water–air surface (dashed line = normal). Which path, A, B or C, does the ray take in air?', options: ['A – bending away from the normal', 'B – going straight on without bending', 'C – bending towards the normal', 'It cannot leave the water at this angle'], explanation: 'Going from denser water into rarer air, the ray speeds up and bends away from the normal (path A). The angle is small, so it is below the critical angle and the ray does leave.' },
    ta: { q: 'படத்தில் நீரினுள் உள்ள ஒளிக்கதிர் நீர்–காற்று பரப்பை அடைகிறது (புள்ளிக்கோடு = குத்துக்கோடு). காற்றில் அது A, B, C இவற்றுள் எந்தப் பாதையில் செல்லும்?', options: ['A – குத்துக்கோட்டை விட்டு விலகி', 'B – விலகாமல் நேராக', 'C – குத்துக்கோட்டை நோக்கி விலகி', 'இக்கோணத்தில் அது நீரை விட்டு வெளியேறாது'], explanation: 'அடர்மிகு நீரிலிருந்து அடர் குறை காற்றுக்குச் செல்லும்போது திசைவேகம் அதிகரித்துக் கதிர் குத்துக்கோட்டை விட்டு விலகும் (பாதை A). கோணம் சிறியதால் மாறுநிலைக் கோணத்தை விடக் குறைவு; கதிர் வெளியேறும்.' },
  },
  {
    difficulty: 'hard', source: '§6.8.2, p. 75', answer: 0,
    en: { q: 'Which of these statements are correct?\n(i) A mirage is caused by total internal reflection in layers of hot air near the ground.\n(ii) In an optical fibre the core has a higher refractive index than the cladding.\n(iii) Optical fibres work because light is refracted out of the fibre at every bend.', options: ['(i) and (ii) only', '(i) and (iii) only', '(ii) and (iii) only', '(i), (ii) and (iii)'], explanation: 'Mirages and optical fibres both rely on total internal reflection; in a fibre light is repeatedly reflected inside, not refracted out, so (iii) is wrong.' },
    ta: { q: 'பின்வரும் கூற்றுகளில் சரியானவை எவை?\n(i) தரையை ஒட்டிய சூடான காற்று அடுக்குகளில் ஏற்படும் முழு அக எதிரொளிப்பால் கானல் நீர் தோன்றுகிறது.\n(ii) ஒளியிழையில் உள்ளகத்தின் ஒளிவிலகல் எண் பாதுகாப்பு உறையை விட அதிகம்.\n(iii) ஒவ்வொரு வளைவிலும் ஒளி இழையை விட்டு விலகி வெளியேறுவதால் ஒளியிழைகள் செயல்படுகின்றன.', options: ['(i), (ii) மட்டும்', '(i), (iii) மட்டும்', '(ii), (iii) மட்டும்', '(i), (ii), (iii)'], explanation: 'கானல் நீரும் ஒளியிழைகளும் முழு அக எதிரொளிப்பைச் சார்ந்தவை; இழையினுள் ஒளி தொடர்ந்து எதிரொளிக்கிறது, வெளியே விலகுவதில்லை; எனவே (iii) தவறு.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VI.2, VIII.1, p. 78', answer: 0,
    en: { q: 'Where should an object be placed in front of a concave mirror to get a real, inverted image of the same size?', options: ['At the centre of curvature C', 'At the principal focus F', 'Between F and the pole P', 'Between C and F'], explanation: 'Object at C gives a real, inverted, same-size image at C. Between C and F the image is magnified; between F and P it is virtual.' },
    ta: { q: 'அதே அளவுள்ள மெய், தலைகீழ் பிம்பம் பெறக் குழியாடிக்கு முன் பொருளை எங்கு வைக்க வேண்டும்?', options: ['வளைவு மையம் C-இல்', 'முக்கியக் குவியம் F-இல்', 'F-க்கும் ஆடிமையம் P-க்கும் இடையே', 'C-க்கும் F-க்கும் இடையே'], explanation: 'C-இல் உள்ள பொருளுக்கு C-இலேயே மெய், தலைகீழ், அதே அளவு பிம்பம்; C–F இடையே பெரிதான பிம்பம்; F–P இடையே மாய பிம்பம்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VIII.1, p. 78', answer: 0,
    en: { q: 'An object is placed between the centre of curvature C and the focus F of a concave mirror. The image is', options: ['beyond C, real, inverted and magnified', 'between F and C, real, inverted and smaller', 'behind the mirror, virtual, erect and magnified', 'at F, real and highly diminished'], explanation: 'For an object between C and F, the image forms beyond C and is real, inverted and enlarged.' },
    ta: { q: 'குழியாடியின் வளைவு மையம் C-க்கும் குவியம் F-க்கும் இடையே பொருள் வைக்கப்படுகிறது. பிம்பம்', options: ['C-க்கு அப்பால்; மெய், தலைகீழ், பெரியது', 'F-க்கும் C-க்கும் இடையே; மெய், தலைகீழ், சிறியது', 'ஆடிக்குப் பின்னால்; மாய, நேரான, பெரியது', 'F-இல்; மெய், மிகச் சிறியது'], explanation: 'C–F இடையே உள்ள பொருளுக்கு C-க்கு அப்பால் மெய், தலைகீழ், பெரிதான பிம்பம் உருவாகும்.' },
  },
];
