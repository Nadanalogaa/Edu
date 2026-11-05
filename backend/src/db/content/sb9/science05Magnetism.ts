// Tamil Nadu State Board, 9th Science, Unit 5 – Magnetism and Electromagnetism (காந்தவியல் மற்றும் மின்காந்தவியல்).
// Questions are written in our own words. "Book ..." sources test the idea of that textbook
// exercise or worked example; "§" sources are our own section questions.
// source = section / exercise and printed page of the English-medium book (Tamil-medium pages match).

import { BankQuestion, AR_EN, AR_TA } from './types';

const IMG = '/content/9/state_board/science/05';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.1, p. 63', answer: 0,
    en: { q: 'Which device changes electrical energy into mechanical energy?', options: ['Electric motor', 'Electric generator', 'Battery', 'Switch'], explanation: 'A motor uses electrical energy to produce motion; a generator does the reverse.' },
    ta: { q: 'பின்வருவனவற்றுள் எது மின் ஆற்றலை இயந்திர ஆற்றலாக மாற்றுகிறது?', options: ['மின் மோட்டார்', 'மின்னியற்றி', 'மின்கலன்', 'சாவி'], explanation: 'மோட்டார் மின்னாற்றலைக் கொண்டு இயக்கத்தை உருவாக்குகிறது; மின்னியற்றி இதற்கு நேர்மாறாகச் செயல்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.1, p. 64', answer: 0,
    en: { q: 'The SI unit of magnetic field (magnetic induction) B is the', options: ['tesla', 'weber', 'ampere', 'henry'], explanation: 'Magnetic field B is measured in tesla (T); magnetic flux is measured in weber.' },
    ta: { q: 'காந்தப் புலத் தூண்டலின் (காந்தப்புலம் B) SI அலகு', options: ['டெஸ்லா', 'வெபர்', 'ஆம்பியர்', 'ஹென்றி'], explanation: 'காந்தப்புலம் B டெஸ்லா (T) அலகால் அளக்கப்படுகிறது; காந்தப்பாயத்தின் அலகு வெபர்.' },
  },
  {
    difficulty: 'easy', source: '§5.2.1, p. 53', answer: 0,
    en: { q: 'The unit of magnetic flux (ϕ) is the', options: ['weber', 'tesla', 'newton', 'coulomb'], explanation: 'Magnetic flux, the number of field lines through an area, is measured in weber (Wb).' },
    ta: { q: 'காந்தப் பாயத்தின் (ϕ) அலகு', options: ['வெபர்', 'டெஸ்லா', 'நியூட்டன்', 'கூலூம்'], explanation: 'ஒரு பரப்பின் வழியே செல்லும் காந்தப்புலக் கோடுகளின் எண்ணிக்கையான காந்தப் பாயம் வெபர் (Wb) அலகால் அளக்கப்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.4, p. 64', answer: 0,
    en: { q: 'The unit of magnetic flux density is', options: ['weber/metre²', 'weber', 'weber/metre', 'weber × metre²'], explanation: 'Flux density is flux per unit area, so its unit is Wb/m².' },
    ta: { q: 'காந்தப் பாய அடர்த்தியின் அலகு', options: ['வெபர் / மீட்டர்²', 'வெபர்', 'வெபர் / மீட்டர்', 'வெபர் × மீட்டர்²'], explanation: 'பாய அடர்த்தி = ஓரலகு பரப்பிற்கான பாயம்; எனவே அலகு Wb/மீ².' },
  },
  {
    difficulty: 'easy', source: '§5.1, p. 52', answer: 0,
    en: { q: 'The strongest natural magnet is', options: ['lodestone (magnetite)', 'soft iron', 'copper', 'an electromagnet'], explanation: 'Lodestone (magnetite) is the strongest natural magnet and was used in early compasses.' },
    ta: { q: 'வலிமையான இயற்கைக் காந்தம்', options: ['காந்தக்கல் (மேக்னடைட்)', 'தேனிரும்பு', 'தாமிரம்', 'மின்காந்தம்'], explanation: 'காந்தக்கல் (மேக்னடைட்) வலிமையான இயற்கைக் காந்தம்; பண்டைய திசைகாட்டிகளில் பயன்பட்டது.' },
  },
  {
    difficulty: 'easy', source: '§5.2, p. 53', answer: 0,
    en: { q: 'Outside a bar magnet, magnetic field lines go from', options: ['the north pole to the south pole', 'the south pole to the north pole', 'the middle of the magnet to both poles', 'both poles to the middle'], explanation: 'Field lines start at the north pole and end at the south pole outside the magnet.' },
    ta: { q: 'சட்டக் காந்தத்திற்கு வெளியே காந்தப்புலக் கோடுகள் செல்லும் திசை', options: ['வட துருவத்திலிருந்து தென் துருவத்திற்கு', 'தென் துருவத்திலிருந்து வட துருவத்திற்கு', 'காந்தத்தின் நடுவிலிருந்து இரு துருவங்களுக்கு', 'இரு துருவங்களிலிருந்து நடுப்பகுதிக்கு'], explanation: 'காந்தத்திற்கு வெளியே புலக் கோடுகள் வட துருவத்தில் தொடங்கி தென் துருவத்தில் முடிவடையும்.' },
  },
  {
    difficulty: 'easy', source: '§5.3, p. 54', answer: 0,
    en: { q: 'The magnetic effect of electric current was discovered by', options: ['Hans Christian Oersted', 'Michael Faraday', 'H. A. Lorentz', 'John Ambrose Fleming'], explanation: 'In 1820 Oersted noticed a compass needle deflect when current flowed in a nearby wire.' },
    ta: { q: 'மின்னோட்டத்தின் காந்த விளைவைக் கண்டறிந்தவர்', options: ['ஹான்ஸ் கிறிஸ்டியன் அயர்ஸ்டெட்', 'மைக்கேல் ஃபாரடே', 'ஹெச். ஏ. லாரன்ஸ்', 'ஜான் ஆம்ப்ரோஸ் ஃபிளெமிங்'], explanation: '1820-இல் அருகிலுள்ள கம்பியில் மின்னோட்டம் பாயும்போது திசைகாட்டி ஊசி விலகுவதை அயர்ஸ்டெட் கண்டார்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.3, p. 64', answer: 0,
    en: { q: 'An electric motor converts _____.', options: ['electrical energy into mechanical energy', 'mechanical energy into electrical energy', 'chemical energy into electrical energy', 'heat energy into electrical energy'], explanation: 'A motor turns electrical energy into motion; it is used in fans, pumps and mixers.' },
    ta: { q: 'மின் மோட்டார் _____ மாற்றுகிறது.', options: ['மின்னாற்றலை இயந்திர ஆற்றலாக', 'இயந்திர ஆற்றலை மின்னாற்றலாக', 'வேதி ஆற்றலை மின்னாற்றலாக', 'வெப்ப ஆற்றலை மின்னாற்றலாக'], explanation: 'மோட்டார் மின்னாற்றலை இயக்கமாக மாற்றுகிறது; மின்விசிறி, நீரேற்றி, மிக்சி போன்றவற்றில் பயன்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.4, p. 64', answer: 0,
    en: { q: 'A device that produces electric current from mechanical energy is the', options: ['generator (dynamo)', 'motor', 'transformer', 'loudspeaker'], explanation: 'A generator or dynamo converts mechanical energy into electrical energy by electromagnetic induction.' },
    ta: { q: 'இயந்திர ஆற்றலிலிருந்து மின்னோட்டத்தை உருவாக்குவதற்கான கருவி', options: ['மின்னியற்றி (டைனமோ)', 'மோட்டார்', 'மின்மாற்றி', 'ஒலிபெருக்கி'], explanation: 'மின்னியற்றி அல்லது டைனமோ மின்காந்தத் தூண்டல் மூலம் இயந்திர ஆற்றலை மின்னாற்றலாக மாற்றுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.2, p. 64', answer: 0,
    en: { q: 'A device used to change a high alternating voltage into a low alternating voltage is a', options: ['step-down transformer', 'step-up transformer', 'dc motor', 'rectifier'], explanation: 'A step-down transformer lowers ac voltage (Vs < Vp).' },
    ta: { q: 'உயர் மாறுதிசை மின்னழுத்தத்தைக் குறைந்த மாறுதிசை மின்னழுத்தமாக மாற்றும் கருவி', options: ['இறக்கு மின்மாற்றி', 'ஏற்று மின்மாற்றி', 'dc மோட்டார்', 'திருத்தி'], explanation: 'இறக்கு மின்மாற்றி ac மின்னழுத்தத்தைக் குறைக்கும் (Vs < Vp).' },
  },
  {
    difficulty: 'easy', source: 'Book exercise IV.3, p. 64', answer: 0,
    en: { q: "Fleming's right hand rule is also called the", options: ['generator (dynamo) rule', 'motor rule', 'thumb rule for wires', 'lever rule'], explanation: "The right hand rule gives the induced current in a generator; the left hand rule is used for motors." },
    ta: { q: 'ஃபிளெமிங்கின் வலது கை விதி இவ்வாறும் அழைக்கப்படுகிறது', options: ['மின்னியற்றி (டைனமோ) விதி', 'மோட்டார் விதி', 'கம்பிக்கான கட்டைவிரல் விதி', 'நெம்புகோல் விதி'], explanation: 'வலதுகை விதி மின்னியற்றியில் தூண்டப்பட்ட மின்னோட்டத்தின் திசையைத் தரும்; இடதுகை விதி மோட்டாருக்கு.' },
  },
  {
    difficulty: 'easy', source: '§5.10.2, p. 62', answer: 0,
    en: { q: 'Maglev trains move without touching the track by using', options: ['magnetic levitation', 'compressed air', 'steam pressure', 'rubber wheels'], explanation: 'Maglev trains are lifted and pushed forward by magnets, so there is no friction with the track.' },
    ta: { q: 'காந்தத்தூக்கல் (மேக்லெவ்) தொடர்வண்டிகள் தண்டவாளத்தைத் தொடாமல் இயங்கப் பயன்படுவது', options: ['காந்தத்தூக்கல் (காந்த மிதத்தல்)', 'அழுத்தப்பட்ட காற்று', 'நீராவி அழுத்தம்', 'ரப்பர் சக்கரங்கள்'], explanation: 'காந்தங்களால் தூக்கப்பட்டு முன்னோக்கித் தள்ளப்படுவதால் காந்தத்தூக்கல் தொடர்வண்டிகளுக்குத் தண்டவாளத்துடன் உராய்வு இல்லை.' },
  },
  {
    difficulty: 'easy', source: '§5.10.3, p. 62', answer: 0,
    en: { q: 'MRI, used to obtain images of internal parts of the body, works on', options: ['electromagnetism', 'sound echoes only', 'the heating effect of current', 'chemical reactions'], explanation: 'Magnetic resonance imaging uses electromagnetic fields to scan fine details of the body.' },
    ta: { q: 'உடலின் உள்ளுறுப்புகளின் பிம்பங்களைப் பெறும் MRI எதன் அடிப்படையில் இயங்குகிறது?', options: ['மின்காந்தவியல்', 'ஒலி எதிரொலிகள் மட்டும்', 'மின்னோட்டத்தின் வெப்ப விளைவு', 'வேதிவினைகள்'], explanation: 'காந்த ஒத்ததிர்வு தோற்றுருவாக்கல் (MRI) மின்காந்தப் புலங்களைக் கொண்டு உடலின் நுண்விவரங்களைக் காட்டுகிறது.' },
  },

  // ---------------------------------------------------------------- Medium
  {
    difficulty: 'medium', source: 'Book exercise I.2, p. 63', answer: 0,
    en: { q: 'A transformer works with', options: ['ac only', 'dc only', 'both ac and dc', 'neither ac nor dc'], explanation: 'A transformer needs a changing current in the primary to change the flux; steady dc gives no induced e.m.f.' },
    ta: { q: 'கீழ்க்கண்ட எவற்றில் மின்மாற்றி வேலை செய்கிறது?', options: ['AC இல் மட்டும்', 'DC இல் மட்டும்', 'AC மற்றும் DC இரண்டிலும்', 'AC, DC இரண்டிலும் இல்லை'], explanation: 'முதன்மைச் சுருளில் மாறும் மின்னோட்டம் இருந்தால்தான் பாயம் மாறும்; நிலையான DC-யால் மின்னியக்கு விசை தூண்டப்படாது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.3, p. 63', answer: 0,
    en: { q: 'In an ac generator, the parts that pass the current from the rotating coil to the external circuit are the', options: ['brushes (pressing on the slip rings)', 'field magnets', 'split rings', 'armature axle'], explanation: 'The coil ends join the slip rings; the stationary brushes resting on the rings connect to the external circuit.' },
    ta: { q: 'மின்னோட்டத்தை AC மின்னியற்றியின் சுழலும் சுருளிலிருந்து வெளிச் சுற்றுக்கு எடுத்துச் செல்லும் மின்னியற்றியின் பகுதி', options: ['தூரிகைகள் (நழுவு வளையங்களின் மீது அழுந்தியிருப்பவை)', 'புலக் காந்தங்கள்', 'பிளவு வளையங்கள்', 'ஆர்மேச்சர் அச்சு'], explanation: 'சுருளின் முனைகள் நழுவு வளையங்களுடனும், வளையங்களின் மீதுள்ள நிலையான தூரிகைகள் வெளிச்சுற்றுடனும் இணைக்கப்பட்டுள்ளன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III, p. 64', answer: 0,
    en: { q: 'Match:\n1. Magnetic material  2. Non-magnetic material  3. Current and magnetism  4. Electromagnetic induction\n(a) Oersted  (b) Wood  (c) Faraday  (d) Iron', options: ['1-d, 2-b, 3-a, 4-c', '1-b, 2-d, 3-a, 4-c', '1-d, 2-b, 3-c, 4-a', '1-a, 2-b, 3-d, 4-c'], explanation: 'Iron is magnetic, wood is not; Oersted linked current and magnetism; Faraday discovered electromagnetic induction.' },
    ta: { q: 'பொருத்துக:\n1. காந்தப் பொருள்  2. காந்தமல்லாத பொருள்  3. மின்னோட்டம் மற்றும் காந்தவியல்  4. மின்காந்தத் தூண்டல்\n(a) அயர்ஸ்டெட்  (b) மரம்  (c) ஃபாரடே  (d) இரும்பு', options: ['1-d, 2-b, 3-a, 4-c', '1-b, 2-d, 3-a, 4-c', '1-d, 2-b, 3-c, 4-a', '1-a, 2-b, 3-d, 4-c'], explanation: 'இரும்பு காந்தப் பொருள், மரம் அல்ல; அயர்ஸ்டெட் மின்னோட்டத்தையும் காந்தவியலையும் இணைத்தார்; ஃபாரடே மின்காந்தத் தூண்டலைக் கண்டறிந்தார்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.5, p. 64', answer: 0,
    en: { q: 'An electric generator works on the principle of', options: ['electromagnetic induction', 'the heating effect of current', 'electrolysis', 'total internal reflection'], explanation: 'Rotating the coil changes the flux linked with it, inducing an e.m.f.' },
    ta: { q: 'மின்னியற்றி எந்தத் தத்துவத்தின் அடிப்படையில் இயங்குகிறது?', options: ['மின்காந்தத் தூண்டல்', 'மின்னோட்டத்தின் வெப்ப விளைவு', 'மின்னாற்பகுப்பு', 'முழு அக எதிரொளிப்பு'], explanation: 'சுருளைச் சுழற்றும்போது அதனுடன் தொடர்புடைய பாயம் மாறி மின்னியக்கு விசை தூண்டப்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.1, IV.5, IV.6, p. 64', answer: 0,
    en: { q: 'Which statement is correct?', options: ['In a step-down transformer the primary has more turns than the secondary.', 'A transformer can step up direct current.', 'A generator converts electrical energy into mechanical energy.', 'In a step-up transformer the secondary has fewer turns than the primary.'], explanation: 'Step-down: Np > Ns. Transformers do not work on dc, a generator converts mechanical to electrical energy, and a step-up transformer has Ns > Np.' },
    ta: { q: 'சரியான கூற்று எது?', options: ['இறக்கு மின்மாற்றியில் முதன்மைச் சுருளின் சுற்றுகள் துணைச் சுருளை விட அதிகம்.', 'மின்மாற்றி நேர்திசை மின்னோட்டத்தை உயர்த்தும்.', 'மின்னியற்றி மின்னாற்றலை இயந்திர ஆற்றலாக மாற்றும்.', 'ஏற்று மின்மாற்றியில் துணைச் சுருளின் சுற்றுகள் முதன்மைச் சுருளை விடக் குறைவு.'], explanation: 'இறக்கு மின்மாற்றியில் Np > Ns. மின்மாற்றி dc-யில் இயங்காது; மின்னியற்றி இயந்திர ஆற்றலை மின்னாற்றலாக மாற்றும்; ஏற்று மின்மாற்றியில் Ns > Np.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.2, p. 64', answer: 0,
    en: { q: 'Which is a property of magnetic lines of force?', options: ['They never intersect each other.', 'They start at the south pole and end at the north pole outside the magnet.', 'They are open lines that end in the air.', 'The field is weakest at the poles.'], explanation: 'Lines of force never cross, form closed loops, go N to S outside, and the field is strongest at the poles.' },
    ta: { q: 'காந்த விசைக் கோடுகளின் பண்பு எது?', options: ['அவை ஒன்றையொன்று வெட்டிக்கொள்வதில்லை.', 'காந்தத்திற்கு வெளியே தென் துருவத்தில் தொடங்கி வட துருவத்தில் முடியும்.', 'அவை காற்றில் முடியும் திறந்த கோடுகள்.', 'துருவங்களில் புலம் மிகக் குறைவு.'], explanation: 'விசைக் கோடுகள் வெட்டிக்கொள்வதில்லை; மூடிய வளைவுகள்; வெளியே வடக்கிலிருந்து தெற்கு; துருவங்களில் புலம் அதிகம்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V.1, p. 64', answer: 0,
    en: { q: "In Fleming's left hand rule, with the thumb, forefinger and middle finger held mutually perpendicular, the middle finger shows the direction of the", options: ['current', 'magnetic field', 'force or motion', 'induced e.m.f'], explanation: 'Forefinger – field, middle finger – current, thumb – force (motion) of the conductor.' },
    ta: { q: 'ஃபிளெமிங்கின் இடதுகை விதியில் கட்டைவிரல், சுட்டுவிரல், நடுவிரல் மூன்றும் ஒன்றுக்கொன்று செங்குத்தாக இருக்கும்போது நடுவிரல் காட்டுவது', options: ['மின்னோட்டத்தின் திசை', 'காந்தப்புலத்தின் திசை', 'விசை அல்லது இயக்கத்தின் திசை', 'தூண்டப்பட்ட மின்னியக்கு விசையின் திசை'], explanation: 'சுட்டுவிரல் – காந்தப்புலம், நடுவிரல் – மின்னோட்டம், கட்டைவிரல் – கடத்தியின் விசை (இயக்கம்).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V.2, p. 64', answer: 0,
    en: { q: 'Magnetic flux density is defined as the number of magnetic field lines', options: ['crossing unit area held normal to the field', 'crossing any area at any angle', 'around a single pole', 'per unit length of the magnet'], explanation: 'Flux density = flux through unit area kept perpendicular to the field lines, in Wb/m².' },
    ta: { q: 'காந்தப் பாய அடர்த்தி என்பது பின்வருவனவற்றைக் கடக்கும் காந்தப்புலக் கோடுகளின் எண்ணிக்கை', options: ['புலத்திற்குச் செங்குத்தாக வைக்கப்பட்ட ஓரலகு பரப்பு', 'எந்தக் கோணத்திலும் உள்ள எந்தப் பரப்பும்', 'ஒரே துருவத்தின் சுற்றுப்பகுதி', 'காந்தத்தின் ஓரலகு நீளம்'], explanation: 'பாய அடர்த்தி = புலக் கோடுகளுக்குச் செங்குத்தான ஓரலகு பரப்பின் வழியே செல்லும் பாயம், Wb/மீ².' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V.3, p. 64', answer: 0,
    en: { q: 'Which part of a dc motor reverses the current in the coil every half rotation?', options: ['Split ring commutator', 'Slip rings', 'Permanent magnet', 'Axle'], explanation: 'The split ring commutator reverses the current each half turn so the coil keeps turning in one direction.' },
    ta: { q: 'dc மோட்டாரில் ஒவ்வொரு அரைச் சுழற்சியிலும் சுருளின் மின்னோட்டத் திசையை மாற்றும் பகுதி எது?', options: ['பிளவு வளையத் திசைமாற்றி', 'நழுவு வளையங்கள்', 'நிலைக் காந்தம்', 'அச்சு'], explanation: 'பிளவு வளையத் திசைமாற்றி ஒவ்வொரு அரைச் சுழற்சியிலும் மின்னோட்டத்தைத் திருப்புவதால் சுருள் ஒரே திசையில் சுழல்கிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V.7, p. 64', answer: 0,
    en: { q: 'A portable radio has a built-in transformer so that it can run on the mains instead of batteries. This transformer is', options: ['step-down, because it lowers the 220 V mains to a few volts', 'step-up, because it raises the 220 V mains', 'step-up, because a radio needs high voltage', 'neither, because a radio needs dc only'], explanation: 'The radio works on a few volts like its batteries, so the mains voltage must be stepped down (and then rectified).' },
    ta: { q: 'ஒரு வானொலிப் பெட்டி மின்கலங்களுக்குப் பதிலாக வீட்டின் முதன்மைச் சுற்று மின்சாரத்தில் இயங்கும் வண்ணம் அதில் ஒரு மின்மாற்றி பொருத்தப்பட்டுள்ளது. இந்த மின்மாற்றி', options: ['இறக்கு மின்மாற்றி; 220 V-ஐச் சில வோல்ட்டுகளாகக் குறைக்கிறது', 'ஏற்று மின்மாற்றி; 220 V-ஐ உயர்த்துகிறது', 'ஏற்று மின்மாற்றி; வானொலிக்கு உயர் மின்னழுத்தம் தேவை', 'இரண்டும் அல்ல; வானொலிக்கு dc மட்டுமே தேவை'], explanation: 'வானொலி அதன் மின்கலங்களைப் போலச் சில வோல்ட்டுகளில் இயங்குவதால் வீட்டு மின்னழுத்தத்தைக் குறைக்க வேண்டும் (பின் திருத்த வேண்டும்).' },
  },
  {
    difficulty: 'medium', source: '§5.6, p. 59', answer: 0,
    en: { q: 'The speed of rotation of an electric motor can be increased by', options: ['increasing the number of turns in the coil', 'decreasing the area of the coil', 'decreasing the current in the coil', 'using a weaker magnet'], explanation: 'Speed increases with more current, more turns, larger coil area and a stronger magnetic field.' },
    ta: { q: 'மின் மோட்டாரின் சுழற்சி வேகத்தை அதிகரிக்க', options: ['சுருளின் சுற்றுகளின் எண்ணிக்கையை அதிகரிக்கலாம்', 'சுருளின் பரப்பைக் குறைக்கலாம்', 'சுருளின் மின்னோட்டத்தைக் குறைக்கலாம்', 'வலிமை குறைந்த காந்தத்தைப் பயன்படுத்தலாம்'], explanation: 'மின்னோட்டம், சுற்றுகளின் எண்ணிக்கை, சுருளின் பரப்பு, காந்தப்புல வலிமை ஆகியவற்றை அதிகரித்தால் வேகம் அதிகரிக்கும்.' },
  },
  {
    difficulty: 'medium', source: '§5.5, p. 57', answer: 0,
    en: { q: 'Two long parallel wires carry currents in the same direction. The wires will', options: ['attract each other', 'repel each other', 'not affect each other', 'twist around each other'], explanation: "By Fleming's left hand rule, currents in the same direction attract and currents in opposite directions repel." },
    ta: { q: 'இரண்டு நீண்ட இணைக் கம்பிகளில் ஒரே திசையில் மின்னோட்டம் பாய்கிறது. கம்பிகள்', options: ['ஒன்றையொன்று ஈர்க்கும்', 'ஒன்றையொன்று விலக்கும்', 'ஒன்றையொன்று பாதிக்காது', 'ஒன்றையொன்று சுற்றிக்கொள்ளும்'], explanation: 'ஃபிளெமிங்கின் இடதுகை விதிப்படி ஒரே திசை மின்னோட்டங்கள் ஈர்க்கும்; எதிரெதிர் திசை மின்னோட்டங்கள் விலக்கும்.' },
  },
  {
    difficulty: 'medium', source: '§5.7.1, p. 59', answer: 0,
    en: { q: "In Faraday's experiment with a magnet and a coil, a larger voltage is induced when", options: ['the coil has more turns', 'the magnet is held still inside the coil', 'the coil has fewer turns', 'the galvanometer is removed'], explanation: 'Moving the magnet in or out induces a voltage; more turns give a higher voltage. A stationary magnet gives none.' },
    ta: { q: 'காந்தமும் கம்பிச்சுருளும் கொண்ட ஃபாரடே சோதனையில் அதிக மின்னழுத்தம் தூண்டப்படுவது', options: ['சுருளில் அதிகச் சுற்றுகள் இருக்கும்போது', 'காந்தம் சுருளுக்குள் அசையாமல் இருக்கும்போது', 'சுருளில் குறைவான சுற்றுகள் இருக்கும்போது', 'கால்வனாமீட்டரை நீக்கும்போது'], explanation: 'காந்தத்தை உள்ளே அல்லது வெளியே இயக்கும்போது மின்னழுத்தம் தூண்டப்படும்; அதிகச் சுற்றுகள் அதிக மின்னழுத்தம் தரும்; காந்தம் அசையாவிட்டால் தூண்டல் இல்லை.' },
  },
  {
    difficulty: 'medium', source: '§5.10.1, p. 62', answer: 0,
    en: { q: 'In a loudspeaker, the cone vibrates because', options: ['the electromagnet is attracted and repelled by the permanent magnet as the current changes', 'the permanent magnet heats the cone', 'the cone is charged by friction', 'air pressure pushes the cone'], explanation: 'Changing current reverses the field of the movable electromagnet, so it is pulled and pushed by the fixed magnet, vibrating the cone.' },
    ta: { q: 'ஒலிபெருக்கியில் கூம்பு அதிர்வதற்குக் காரணம்', options: ['மின்னோட்டம் மாறும்போது மின்காந்தம் நிலைக் காந்தத்தால் ஈர்க்கப்பட்டும் விலக்கப்பட்டும் இயங்குகிறது', 'நிலைக் காந்தம் கூம்பைச் சூடாக்குகிறது', 'உராய்வால் கூம்பு மின்னூட்டம் பெறுகிறது', 'காற்றழுத்தம் கூம்பைத் தள்ளுகிறது'], explanation: 'மாறும் மின்னோட்டத்தால் நகரும் மின்காந்தத்தின் புலம் திசை மாறுகிறது; நிலைக் காந்தம் அதை ஈர்த்தும் விலக்கியும் கூம்பை அதிரச் செய்கிறது.' },
  },
  {
    difficulty: 'medium', source: '§5.8, p. 61', answer: 0,
    en: { q: 'To get direct current from a generator, the slip rings are replaced by a', options: ['split ring commutator', 'transformer', 'second magnet', 'rheostat'], explanation: 'With a split ring commutator each brush always touches the arm moving the same way, giving one-way current (dc generator).' },
    ta: { q: 'மின்னியற்றியிலிருந்து நேர்திசை மின்னோட்டம் பெற நழுவு வளையங்களுக்குப் பதிலாகப் பயன்படுத்துவது', options: ['பிளவு வளையத் திசைமாற்றி', 'மின்மாற்றி', 'இரண்டாவது காந்தம்', 'மின்தடைமாற்றி'], explanation: 'பிளவு வளையத் திசைமாற்றியால் ஒவ்வொரு தூரிகையும் எப்போதும் ஒரே திசையில் இயங்கும் பக்கத்துடன் தொடர்பில் இருப்பதால் ஒரு திசை மின்னோட்டம் கிடைக்கிறது (dc மின்னியற்றி).' },
  },

  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book example 1, p. 56', answer: 0,
    en: { q: 'A 50 cm long conductor carrying 5 A is placed perpendicular to a magnetic field of 2 × 10⁻³ T. The force on it is', options: ['5 × 10⁻³ N', '0.5 N', '5 × 10⁻¹ N', '2.5 × 10⁻³ N'], explanation: 'F = ILB = 5 × 0.5 × 2 × 10⁻³ = 5 × 10⁻³ N. Using 50 instead of 0.5 m gives 0.5 N.' },
    ta: { q: '5 A மின்னோட்டம் பாயும் 50 செமீ நீளமுடைய ஒரு கடத்தியானது 2 × 10⁻³ T வலிமையுடைய காந்தப் புலத்திற்குச் செங்குத்தாக வைக்கப்படுகிறது. கடத்தி மீது செயல்படும் விசை', options: ['5 × 10⁻³ N', '0.5 N', '5 × 10⁻¹ N', '2.5 × 10⁻³ N'], explanation: 'F = ILB = 5 × 0.5 × 2 × 10⁻³ = 5 × 10⁻³ N. 0.5 மீ-க்குப் பதில் 50 எடுத்தால் தவறாக 0.5 N வரும்.' },
  },
  {
    difficulty: 'hard', source: 'Book example 2, p. 56', answer: 0,
    en: { q: 'A conductor perpendicular to a magnetic field feels a force F. If the current is made 4 times, the length halved and the field tripled, the new force is', options: ['6F', '12F', '24F', '1.5F'], explanation: 'F = ILB, so the new force = 4 × ½ × 3 = 6 times F.' },
    ta: { q: 'காந்தப் புலத்திற்குச் செங்குத்தாக வைக்கப்பட்ட மின்னோட்டம் பாயும் கடத்தி F விசைக்கு உட்படுகிறது. மின்னோட்டம் நான்கு மடங்காகவும், நீளம் பாதியாகவும், காந்தப்புலம் மூன்று மடங்காகவும் ஆனால் புதிய விசை', options: ['6F', '12F', '24F', '1.5F'], explanation: 'F = ILB; புதிய விசை = 4 × ½ × 3 = 6 மடங்கு F.' },
  },
  {
    difficulty: 'hard', source: 'Book example 3, p. 62', answer: 0,
    en: { q: 'A transformer has 800 turns in the primary and 8 turns in the secondary. If the primary is connected to 220 V ac, the output voltage is', options: ['2.2 V', '22000 V', '22 V', '0.22 V'], explanation: 'Vs = (Ns ÷ Np) × Vp = (8 ÷ 800) × 220 = 2.2 V. Inverting the ratio gives 22000 V.' },
    ta: { q: 'ஒரு மின்மாற்றியின் முதன்மைச் சுருளில் 800 சுற்றுகள் உள்ளன, துணைச் சுருள் 8 சுற்றுகளைக் கொண்டுள்ளது. முதன்மைச் சுருள் 220 V AC மூலத்துடன் இணைக்கப்பட்டால் வெளியீட்டு மின்னழுத்தம்', options: ['2.2 V', '22000 V', '22 V', '0.22 V'], explanation: 'Vs = (Ns ÷ Np) × Vp = (8 ÷ 800) × 220 = 2.2 V. விகிதத்தைத் தலைகீழாக்கினால் தவறாக 22000 V வரும்.' },
  },
  {
    difficulty: 'hard', source: '§5.9, p. 61', answer: 0,
    en: { q: 'A step-up transformer raises 220 V to 2200 V. If the primary current is 5 A (ignoring losses), the secondary current is', options: ['0.5 A', '50 A', '5 A', '0.05 A'], explanation: 'Is ÷ Ip = Np ÷ Ns = Vp ÷ Vs = 1/10, so Is = 0.5 A. Stepping up voltage steps down current.' },
    ta: { q: 'ஒரு ஏற்று மின்மாற்றி 220 V-ஐ 2200 V ஆக உயர்த்துகிறது. முதன்மை மின்னோட்டம் 5 A எனில் (இழப்பைப் புறக்கணித்து) துணை மின்னோட்டம்', options: ['0.5 A', '50 A', '5 A', '0.05 A'], explanation: 'Is ÷ Ip = Np ÷ Ns = Vp ÷ Vs = 1/10; எனவே Is = 0.5 A. மின்னழுத்தம் உயர்ந்தால் மின்னோட்டம் குறையும்.' },
  },
  {
    difficulty: 'hard', source: '§5.4, p. 56', answer: 0,
    en: { q: 'A current-carrying wire is turned so that it lies parallel to the magnetic field. The force on it now', options: ['becomes zero', 'becomes maximum (BIL)', 'doubles', 'reverses but keeps the same size'], explanation: 'The force is maximum (BIL) when the wire is perpendicular to the field and zero when it is parallel.' },
    ta: { q: 'மின்னோட்டம் பாயும் கம்பி காந்தப்புலத்திற்கு இணையாக இருக்குமாறு திருப்பப்படுகிறது. அதன் மீதான விசை', options: ['சுழியாகும்', 'பெருமம் (BIL) ஆகும்', 'இருமடங்காகும்', 'அதே அளவில் திசை மாறும்'], explanation: 'கம்பி புலத்திற்குச் செங்குத்தாக இருக்கும்போது விசை பெருமம் (BIL); இணையாக இருக்கும்போது விசை சுழி.' },
  },
  {
    difficulty: 'hard', source: '§5.3, p. 54', answer: 0,
    en: { q: 'In Oersted\'s set-up, a wire runs north–south with one compass above it and one below. When current flows, the needle above points east. The needle below the wire points', options: ['west', 'east', 'north', 'south'], explanation: 'The magnetic field circles the wire, so it points in opposite directions above and below it: east above, west below.' },
    ta: { q: 'அயர்ஸ்டெட் அமைப்பில் கம்பி வடக்கு–தெற்காக உள்ளது; ஒரு திசைகாட்டி அதற்கு மேலும் மற்றொன்று கீழும் உள்ளன. மின்னோட்டம் பாயும்போது மேலுள்ள ஊசி கிழக்கைக் காட்டுகிறது. கீழுள்ள ஊசி காட்டுவது', options: ['மேற்கு', 'கிழக்கு', 'வடக்கு', 'தெற்கு'], explanation: 'காந்தப்புலம் கம்பியைச் சுற்றி வட்டமாக இருப்பதால் மேலும் கீழும் எதிரெதிர் திசையில் இருக்கும்: மேலே கிழக்கு, கீழே மேற்கு.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise IV.4, p. 64', answer: 0,
    en: { q: 'Which change would NOT increase the speed of an electric motor?', options: ['Decreasing the area of the coil', 'Increasing the current', 'Using a stronger magnet', 'Adding more turns to the coil'], explanation: 'Larger coil area increases the speed, so decreasing it slows the motor; the other three all increase speed.' },
    ta: { q: 'பின்வரும் எந்த மாற்றம் மின் மோட்டாரின் வேகத்தை அதிகரிக்காது?', options: ['சுருளின் பரப்பைக் குறைத்தல்', 'மின்னோட்டத்தை அதிகரித்தல்', 'வலிமையான காந்தத்தைப் பயன்படுத்துதல்', 'சுருளில் அதிகச் சுற்றுகள் சேர்த்தல்'], explanation: 'சுருளின் பரப்பு அதிகமானால் வேகம் கூடும்; எனவே பரப்பைக் குறைத்தால் வேகம் குறையும். மற்ற மூன்றும் வேகத்தை அதிகரிக்கும்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise V.8, p. 64', answer: 0,
    en: { q: "Which of these statements about Faraday's laws of electromagnetic induction are correct?\n(i) An e.m.f is induced whenever the magnetic flux linked with a closed circuit changes.\n(ii) The induced e.m.f is directly proportional to the rate of change of flux.\n(iii) A steady magnetic field linked with a stationary coil induces a steady current.", options: ['(i) and (ii) only', '(i) and (iii) only', '(ii) and (iii) only', '(i), (ii) and (iii)'], explanation: 'Induction needs a change in flux, and the e.m.f grows with the rate of change; a steady flux induces nothing.' },
    ta: { q: 'ஃபாரடேயின் மின்காந்தத் தூண்டல் விதிகள் பற்றிய கூற்றுகளில் சரியானவை எவை?\n(i) மூடிய சுற்றுடன் தொடர்புடைய காந்தப் பாயம் மாறும்போதெல்லாம் மின்னியக்கு விசை தூண்டப்படும்.\n(ii) தூண்டப்பட்ட மின்னியக்கு விசை பாயம் மாறும் வீதத்திற்கு நேர்த்தகவில் இருக்கும்.\n(iii) அசையாத சுருளுடன் தொடர்புடைய நிலையான காந்தப்புலம் நிலையான மின்னோட்டத்தைத் தூண்டும்.', options: ['(i), (ii) மட்டும்', '(i), (iii) மட்டும்', '(ii), (iii) மட்டும்', '(i), (ii), (iii)'], explanation: 'தூண்டலுக்குப் பாய மாற்றம் தேவை; மின்னியக்கு விசை மாற்ற வீதத்துடன் அதிகரிக்கும். நிலையான பாயம் எதையும் தூண்டாது.' },
  },
  {
    difficulty: 'hard', source: '§5.9, p. 61', answer: 0,
    en: { q: 'Assertion: A transformer cannot be used with a dc source. Reason: With dc in the primary, the magnetic flux linked with the secondary does not change, so no e.m.f is induced.', options: AR_EN, explanation: 'Both are true, and the reason – no change of flux with steady dc – is exactly why a transformer fails on dc.' },
    ta: { q: 'கூற்று: நேர்திசை மின்னோட்ட மூலத்துடன் மின்மாற்றியைப் பயன்படுத்த இயலாது. காரணம்: முதன்மைச் சுருளில் dc இருந்தால் துணைச் சுருளுடன் தொடர்புடைய காந்தப் பாயம் மாறாது; எனவே மின்னியக்கு விசை தூண்டப்படாது.', options: AR_TA, explanation: 'இரண்டும் சரி; நிலையான dc-யால் பாயம் மாறாததே மின்மாற்றி dc-யில் இயங்காததற்கான காரணம்.' },
  },
  {
    difficulty: 'hard', source: '§5.6, p. 58', answer: 0,
    en: { q: 'Assertion: A coil carrying current between the poles of a magnet starts to rotate. Reason: The two opposite sides of the coil carry current in opposite directions, so they are pushed in opposite directions.', options: AR_EN, explanation: "Both true: by Fleming's left hand rule the sides AB and CD get opposite forces, which form a turning effect – the principle of the motor." },
    ta: { q: 'கூற்று: காந்தத் துருவங்களுக்கிடையே வைக்கப்பட்ட மின்னோட்டம் பாயும் சுருள் சுழலத் தொடங்குகிறது. காரணம்: சுருளின் எதிரெதிர்ப் பக்கங்களில் மின்னோட்டம் எதிரெதிர் திசையில் பாய்வதால் அவை எதிரெதிர் திசையில் தள்ளப்படுகின்றன.', options: AR_TA, explanation: 'இரண்டும் சரி: ஃபிளெமிங்கின் இடதுகை விதிப்படி AB, CD பக்கங்கள் எதிரெதிர் விசைகளைப் பெற்றுச் சுழற்சி விளைவை உருவாக்குகின்றன – இதுவே மோட்டாரின் தத்துவம்.' },
  },
  {
    difficulty: 'hard', source: '§5.2.2, p. 54', answer: 3,
    en: { q: 'Assertion: Two magnetic field lines can cross each other at a point. Reason: The tangent drawn at any point of a field line gives the direction of the magnetic field there.', options: AR_EN, explanation: 'The assertion is false: if two lines crossed, the field would have two directions at one point, which is impossible. The reason is a true property.' },
    ta: { q: 'கூற்று: இரண்டு காந்தப்புலக் கோடுகள் ஒரு புள்ளியில் வெட்டிக்கொள்ளலாம். காரணம்: புலக் கோட்டின் எந்தப் புள்ளியிலும் வரையப்படும் தொடுகோடு அங்குள்ள காந்தப்புலத்தின் திசையைத் தரும்.', options: AR_TA, explanation: 'கூற்று தவறு: இரு கோடுகள் வெட்டினால் ஒரே புள்ளியில் புலத்திற்கு இரண்டு திசைகள் இருக்கும்; இது இயலாது. காரணம் சரியான பண்பு.' },
  },
  {
    difficulty: 'hard', source: '§5.5, p. 57', imageUrl: `${IMG}/parallel-wires.png`, answer: 0,
    en: { q: 'The figure shows two long parallel wires P and Q carrying currents in the directions of the arrows. What happens to the wires?', options: ['They repel each other', 'They attract each other', 'Only P moves, towards Q', 'Nothing happens'], explanation: 'The currents are in opposite directions, so the forces on the wires are equal and opposite and push them apart.' },
    ta: { q: 'படத்தில் இரண்டு நீண்ட இணைக் கம்பிகள் P, Q-இல் அம்புக்குறி திசைகளில் மின்னோட்டம் பாய்கிறது. கம்பிகளுக்கு என்ன நிகழும்?', options: ['ஒன்றையொன்று விலக்கும்', 'ஒன்றையொன்று ஈர்க்கும்', 'P மட்டும் Q-ஐ நோக்கி நகரும்', 'எதுவும் நிகழாது'], explanation: 'மின்னோட்டங்கள் எதிரெதிர் திசையில் உள்ளதால் கம்பிகளின் மீதான விசைகள் சமமாகவும் எதிராகவும் இருந்து அவற்றைப் பிரிக்கின்றன.' },
  },
  {
    difficulty: 'hard', source: '§5.8, p. 60', answer: 0,
    en: { q: 'In an ac generator, how often does the direction of the induced current in the external circuit reverse?', options: ['Every half rotation of the coil', 'Every full rotation of the coil', 'Every two rotations of the coil', 'Never, it always flows one way'], explanation: 'The current flows ABCD in the first half turn and DCBA in the second, so it reverses every half rotation.' },
    ta: { q: 'AC மின்னியற்றியில் வெளிச்சுற்றில் தூண்டப்பட்ட மின்னோட்டத்தின் திசை எவ்வளவு அடிக்கடி மாறும்?', options: ['சுருளின் ஒவ்வொரு அரைச் சுழற்சியிலும்', 'ஒவ்வொரு முழுச் சுழற்சியிலும்', 'ஒவ்வொரு இரண்டு சுழற்சிகளிலும்', 'ஒருபோதும் மாறாது'], explanation: 'முதல் அரைச் சுழற்சியில் ABCD வழியாகவும் அடுத்ததில் DCBA வழியாகவும் பாய்வதால் ஒவ்வொரு அரைச் சுழற்சியிலும் திசை மாறும்.' },
  },
];
