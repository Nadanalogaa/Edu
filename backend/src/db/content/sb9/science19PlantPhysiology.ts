// Tamil Nadu State Board, 9th Science, Unit 19 – Plant Physiology (தாவர உலகம் – தாவர செயலியல்).
// Textbook exercises converted to MCQs plus our own questions covering every section.
// source = section / exercise and printed page of the English-medium book.
import { BankQuestion, AR_EN, AR_TA } from './types';

const IMG = '/content/9/state_board/science/19';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.1, p. 230', answer: 0,
    en: { q: 'The tropic movement that helps climbing vines to find a suitable support is', options: ['thigmotropism', 'phototropism', 'geotropism', 'chemotropism'], explanation: 'Climbing vines respond to touch with their support – this is thigmotropism.' },
    ta: { q: 'ஏறும் கொடிகள் தங்களுக்குப் பொருத்தமான ஆதாரத்தைக் கண்டறிய உதவும் சார்பசைவு', options: ['தொடு உணர்வு சார்பசைவு', 'ஒளிச் சார்பசைவு', 'புவிச் சார்பசைவு', 'வேதிச் சார்பசைவு'], explanation: 'ஏறும் கொடிகள் ஆதாரத்தைத் தொடுவதற்கு ஏற்ப வளைகின்றன; இது தொடு உணர்வு சார்பசைவு.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.3, p. 230', answer: 0,
    en: { q: 'The bending of the root of a plant in response to water is called', options: ['hydrotropism', 'thigmonasty', 'phototropism', 'photonasty'], explanation: 'Movement of a plant part towards water is hydrotropism; roots show it.' },
    ta: { q: 'நீர்த் தூண்டலுக்கு ஏற்ப தாவர வேர் வளைவது', options: ['நீர்ச் சார்பசைவு', 'நடுக்கமுறு வளைதல்', 'ஒளிச் சார்பசைவு', 'ஒளியுறு வளைதல்'], explanation: 'நீரை நோக்கித் தாவரப் பாகம் நகர்வது நீர்ச் சார்பசைவு; வேர் இதைக் காட்டுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.6, p. 230', answer: 0,
    en: { q: 'The non-directional movement of a plant part in response to temperature is called', options: ['thermonasty', 'thermotropism', 'chemotropism', 'thigmonasty'], explanation: 'A non-directional (nastic) response to temperature is thermonasty, e.g. tulip flowers opening as it gets warmer.' },
    ta: { q: 'வெப்பத் தூண்டலுக்கு ஏற்ப தாவர உறுப்பு திசை சாரா முறையில் அசைவது', options: ['வெப்பமுறு வளைதல்', 'வெப்பச் சார்பசைவு', 'வேதிச் சார்பசைவு', 'நடுக்கமுறு வளைதல்'], explanation: 'வெப்பநிலைக்கு ஏற்ப ஏற்படும் திசை சாரா அசைவு வெப்பமுறு வளைதல்; எ.கா. டுலிப் மலர்கள்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.7, p. 230', answer: 0,
    en: { q: 'Chlorophyll in a leaf is required for', options: ['photosynthesis', 'tropic movement', 'transpiration', 'nastic movement'], explanation: 'Chlorophyll is the green pigment that traps light energy for photosynthesis.' },
    ta: { q: 'இலையில் காணப்படும் பச்சையம் எதற்குத் தேவைப்படுகிறது?', options: ['ஒளிச்சேர்க்கை', 'சார்பசைவு', 'நீராவிப்போக்கு', 'திசை சாரா தூண்டல் அசைவு'], explanation: 'பச்சையம் ஒளி ஆற்றலை ஈர்த்து ஒளிச்சேர்க்கைக்கு உதவும் பச்சை நிறமி.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.8, p. 230', answer: 0,
    en: { q: 'Transpiration takes place through', options: ['stomata', 'fruit', 'seed', 'flower'], explanation: 'Water vapour escapes mainly through the stomata, the tiny pores on leaves.' },
    ta: { q: 'நீராவிப்போக்கு எதன் வழியாக நடைபெறுகிறது?', options: ['இலைத்துளை', 'பழம்', 'விதை', 'மலர்'], explanation: 'இலைகளில் உள்ள நுண்ணிய இலைத்துளைகள் வழியாக நீர் நீராவியாக வெளியேறுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.1, p. 231', answer: 0,
    en: { q: 'The shoot system grows upward in response to _____.', options: ['light', 'gravity', 'water', 'touch'], explanation: 'The shoot is positively phototropic: it grows towards light (and away from gravity).' },
    ta: { q: 'தண்டுத் தொகுப்பு _____ இன் தூண்டலால் மேல்நோக்கி வளர்கிறது.', options: ['ஒளி', 'புவியீர்ப்பு', 'நீர்', 'தொடுதல்'], explanation: 'தண்டு நேர் ஒளிச் சார்பசைவு உடையது; ஒளியை நோக்கி வளர்கிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.2, p. 231', answer: 0,
    en: { q: '_____ is positively hydrotropic as well as positively geotropic.', options: ['Root', 'Shoot', 'Leaf', 'Flower'], explanation: 'Roots grow towards water and towards gravity.' },
    ta: { q: '_____ நேர் நீர்ச் சார்பசைவும் நேர் புவிச் சார்பசைவும் உடையது.', options: ['வேர்', 'தண்டு', 'இலை', 'மலர்'], explanation: 'வேர் நீரை நோக்கியும் புவியீர்ப்பின் திசையிலும் வளர்கிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.3, p. 231', answer: 0,
    en: { q: 'The green pigment present in plants is _____.', options: ['chlorophyll', 'xanthopterin', 'haemoglobin', 'carotene'], explanation: 'Chlorophyll is the green pigment in leaves needed for photosynthesis.' },
    ta: { q: 'தாவரத்தில் காணப்படும் பச்சை நிறமி _____ எனப்படும்.', options: ['பச்சையம்', 'சாந்தோப்டெரின்', 'ஹீமோகுளோபின்', 'கரோட்டின்'], explanation: 'இலைகளில் உள்ள பச்சை நிறமி பச்சையம்; இது ஒளிச்சேர்க்கைக்குத் தேவை.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.5, p. 231', answer: 0,
    en: { q: 'The response of a plant part towards gravity is _____.', options: ['geotropism', 'phototropism', 'hydrotropism', 'chemotropism'], explanation: 'Geotropism is the movement of a plant part in response to gravity, e.g. roots.' },
    ta: { q: 'புவியீர்ப்பு விசைக்கு ஏற்ப தாவரம் வளைவது _____ எனப்படும்.', options: ['புவிச் சார்பசைவு', 'ஒளிச் சார்பசைவு', 'நீர்ச் சார்பசைவு', 'வேதிச் சார்பசைவு'], explanation: 'புவியீர்ப்பு விசைக்கு ஏற்ப ஏற்படும் அசைவு புவிச் சார்பசைவு; எ.கா. வேர்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.6, p. 231', answer: 0,
    en: { q: 'Plants take in carbon dioxide for photosynthesis but need _____ for their living (respiration).', options: ['oxygen', 'nitrogen', 'hydrogen', 'carbon monoxide'], explanation: 'Plants need oxygen to carry on cellular respiration.' },
    ta: { q: 'ஒளிச்சேர்க்கையின் போது தாவரங்கள் CO₂ வை உள்ளிழுக்கின்றன; ஆனால் உயிர் வாழ்தலுக்கு _____ தேவைப்படுகிறது.', options: ['ஆக்சிஜன்', 'நைட்ரஜன்', 'ஹைட்ரஜன்', 'கார்பன் மோனாக்சைடு'], explanation: 'செல் சுவாசத்திற்குத் தாவரங்களுக்கு ஆக்சிஜன் தேவை.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise V.6, p. 231', answer: 0,
    en: { q: 'The cells that surround each stoma are called', options: ['guard cells', 'companion cells', 'epidermal hairs', 'root hairs'], explanation: 'Each stoma is surrounded by two guard cells, which open and close it.' },
    ta: { q: 'இலைத்துளையைச் சூழ்ந்துள்ள செல்கள்', options: ['காப்புச் செல்கள்', 'துணைச் செல்கள்', 'புறத்தோல் உரோமங்கள்', 'வேர்த் தூவிகள்'], explanation: 'ஒவ்வொரு இலைத்துளையும் காப்புச் செல்களால் சூழப்பட்டுள்ளது; இவை துளையைத் திறந்து மூடுகின்றன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise V.5, p. 231', answer: 0,
    en: { q: 'Transpiration is defined as', options: ['the loss of water as water vapour from the aerial parts of a plant', 'the absorption of water by roots', 'the making of food using light', 'the movement of a plant part towards water'], explanation: 'Transpiration is the loss of water in the form of vapour, mainly from leaves.' },
    ta: { q: 'நீராவிப்போக்கு என்பது', options: ['தாவரத்தின் வான்பகுதிகளிலிருந்து நீர் நீராவியாக வெளியேறுவது', 'வேர்கள் நீரை உறிஞ்சுவது', 'ஒளியைப் பயன்படுத்தி உணவு தயாரிப்பது', 'நீரை நோக்கித் தாவரப் பாகம் நகர்வது'], explanation: 'இலைகள் போன்ற வான்பகுதிகளிலிருந்து நீர் நீராவியாக வெளியேறுவதே நீராவிப்போக்கு.' },
  },
  {
    difficulty: 'easy', source: '§19.1, p. 226', answer: 0,
    en: { q: 'A unidirectional movement of a whole plant or a plant part towards the direction of a stimulus is called', options: ['tropism', 'nastic movement', 'transpiration', 'photosynthesis'], explanation: 'Tropism is a directional growth movement determined by the direction of the stimulus.' },
    ta: { q: 'தூண்டலின் திசையை நோக்கித் தாவரம் அல்லது அதன் பகுதி ஒரு திசையில் நகர்வது', options: ['சார்பசைவு', 'திசை சாரா தூண்டல் அசைவு', 'நீராவிப்போக்கு', 'ஒளிச்சேர்க்கை'], explanation: 'தூண்டலின் திசையைச் சார்ந்த ஒரு திசை அசைவு சார்பசைவு எனப்படும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise V.1, p. 231', answer: 0,
    en: { q: 'A non-directional response of a plant or a plant part to a stimulus is called', options: ['nastic movement', 'tropic movement', 'transpiration', 'phototropism'], explanation: 'Nastic movements, such as photonasty and thigmonasty, do not depend on the direction of the stimulus.' },
    ta: { q: 'தூண்டலுக்கு ஏற்ப தாவரம் அல்லது அதன் பகுதி திசை சாராமல் துலங்குவது', options: ['திசை சாரா தூண்டல் அசைவு', 'சார்பசைவு', 'நீராவிப்போக்கு', 'ஒளிச் சார்பசைவு'], explanation: 'ஒளியுறு வளைதல், நடுக்கமுறு வளைதல் போன்ற திசை சாரா தூண்டல் அசைவுகள் தூண்டலின் திசையைச் சார்ந்தவை அல்ல.' },
  },
  {
    difficulty: 'easy', source: '§19.1.1, p. 226', answer: 0,
    en: { q: 'The growth of a pollen tube towards the sugar on the stigma is an example of', options: ['chemotropism', 'thigmotropism', 'geotropism', 'phototropism'], explanation: 'Response to a chemical (sugar on the stigma) is chemotropism.' },
    ta: { q: 'சூல்முடியில் உள்ள சர்க்கரையை நோக்கி மகரந்தக் குழாய் வளர்வது', options: ['வேதிச் சார்பசைவு', 'தொடு உணர்வு சார்பசைவு', 'புவிச் சார்பசைவு', 'ஒளிச் சார்பசைவு'], explanation: 'வேதிப்பொருளின் (சர்க்கரை) தூண்டலுக்கு ஏற்ப நிகழ்வதால் இது வேதிச் சார்பசைவு.' },
  },
  {
    difficulty: 'easy', source: '§19.2, p. 227', answer: 0,
    en: { q: 'Thigmonasty in Mimosa pudica is also known as', options: ['seismonasty', 'photonasty', 'thermonasty', 'geotropism'], explanation: 'The folding of Mimosa leaves on touch (thigmonasty) is also called seismonasty.' },
    ta: { q: 'தொட்டாற் சிணுங்கியில் காணப்படும் தொடுதல் சார்ந்த திசை சாரா அசைவு வேறு எவ்வாறு அழைக்கப்படுகிறது?', options: ['சீஸ்மோநாஸ்டி (நடுக்கமுறு வளைதல்)', 'ஒளியுறு வளைதல்', 'வெப்பமுறு வளைதல்', 'புவிச் சார்பசைவு'], explanation: 'தொட்டாற் சிணுங்கி இலைகள் தொட்டதும் மடிவது நடுக்கமுறு வளைதல் (சீஸ்மோநாஸ்டி) ஆகும்.' },
  },
  {
    difficulty: 'easy', source: '§19.4.1, p. 229', answer: 0,
    en: { q: 'Loss of water through the cuticle is called', options: ['cuticular transpiration', 'stomatal transpiration', 'lenticular transpiration', 'guttation'], explanation: 'Water lost through the cuticle of the epidermis is cuticular transpiration.' },
    ta: { q: 'கியூட்டிக்கிள் வழியாக நீர் இழப்பு ஏற்படுவது', options: ['கியூட்டிக்கிள் நீராவிப்போக்கு', 'இலைத்துளை நீராவிப்போக்கு', 'பட்டைத்துளை நீராவிப்போக்கு', 'நீர் வடிதல்'], explanation: 'புறத்தோலின் மேலுள்ள கியூட்டிக்கிள் அடுக்கின் வழியாக நடைபெறுவது கியூட்டிக்கிள் நீராவிப்போக்கு.' },
  },
  // ---------------------------------------------------------------- Medium
  {
    difficulty: 'medium', source: 'Book exercise I.4, p. 230', answer: 0,
    en: { q: 'A seedling kept in a dark room bends its tip towards a burning candle placed near it. This is an example of', options: ['phototropism', 'chemotropism', 'geotropism', 'thigmotropism'], explanation: 'The candle is the only light source, so the shoot tip grows towards light: phototropism.' },
    ta: { q: 'இருட்டறையில் வைக்கப்பட்ட இளம் நாற்றின் முனை அருகிலுள்ள எரியும் மெழுகுவர்த்தியை நோக்கி வளைகிறது. இது எதற்கு எடுத்துக்காட்டு?', options: ['ஒளிச் சார்பசைவு', 'வேதிச் சார்பசைவு', 'புவிச் சார்பசைவு', 'தொடு உணர்வு சார்பசைவு'], explanation: 'மெழுகுவர்த்தி மட்டுமே ஒளி மூலம்; தண்டு முனை ஒளியை நோக்கி வளைவது ஒளிச் சார்பசைவு.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.4, p. 231', answer: 0,
    en: { q: 'Sunflower flowers follow the path of the sun from east to west. This solar tracking is due to', options: ['phototropism', 'geotropism', 'thigmonasty', 'hydrotropism'], explanation: 'The flower head turns in the direction of light, a phototropic movement.' },
    ta: { q: 'சூரியகாந்தி மலர் சூரியனின் பாதைக்கு ஏற்ப (கிழக்கிலிருந்து மேற்காக) வளைவது', options: ['ஒளிச் சார்பசைவு', 'புவிச் சார்பசைவு', 'நடுக்கமுறு வளைதல்', 'நீர்ச் சார்பசைவு'], explanation: 'மலர் ஒளியின் திசையில் திரும்புவதால் இது ஒளிச் சார்பசைவு.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III, p. 231', answer: 0,
    en: { q: 'Match:\n1. Roots growing downwards into soil\n2. Shoots growing towards the light\n3. Shoots growing upward\n4. Roots growing downwards away from light\n(a) positive phototropism (b) negative geotropism (c) negative phototropism (d) positive geotropism', options: ['1-d, 2-a, 3-b, 4-c', '1-a, 2-d, 3-c, 4-b', '1-b, 2-a, 3-d, 4-c', '1-d, 2-c, 3-b, 4-a'], explanation: 'Roots go with gravity (positive geotropism) and away from light (negative phototropism); shoots go towards light and against gravity.' },
    ta: { q: 'பொருத்துக:\n1. வேர் நிலத்தில் கீழ்நோக்கி வளர்வது\n2. தண்டு ஒளியை நோக்கி வளர்வது\n3. தண்டு மேல்நோக்கி வளர்வது\n4. வேர் சூரிய ஒளிக்கு எதிராகக் கீழ்நோக்கி வளர்வது\n(a) நேர் ஒளிச் சார்பசைவு (b) எதிர் புவிச் சார்பசைவு (c) எதிர் ஒளிச் சார்பசைவு (d) நேர் புவிச் சார்பசைவு', options: ['1-d, 2-a, 3-b, 4-c', '1-a, 2-d, 3-c, 4-b', '1-b, 2-a, 3-d, 4-c', '1-d, 2-c, 3-b, 4-a'], explanation: 'வேர் புவியீர்ப்பின் திசையில் (நேர் புவிச் சார்பசைவு), ஒளிக்கு எதிராக (எதிர் ஒளிச் சார்பசைவு) வளர்கிறது; தண்டு ஒளியை நோக்கியும் புவியீர்ப்புக்கு எதிராகவும் வளர்கிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.1, p. 231', answer: 0,
    en: { q: '"The response of a part of a plant to a chemical stimulus is called phototropism." Choose the correct version.', options: ['False – it is called chemotropism', 'True as stated', 'False – it is called hydrotropism', 'False – it is called thigmotropism'], explanation: 'Response to a chemical stimulus is chemotropism; phototropism is response to light.' },
    ta: { q: '"வேதிப்பொருள்களின் தூண்டலுக்கு ஏற்ப தாவர உறுப்பு வளைதல் ஒளிச் சார்பசைவு எனப்படும்." சரியான வடிவத்தைத் தேர்ந்தெடு.', options: ['தவறு – இது வேதிச் சார்பசைவு', 'கூற்று சரி', 'தவறு – இது நீர்ச் சார்பசைவு', 'தவறு – இது தொடு உணர்வு சார்பசைவு'], explanation: 'வேதிப்பொருள் தூண்டலுக்கான அசைவு வேதிச் சார்பசைவு; ஒளிக்கான அசைவே ஒளிச் சார்பசைவு.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.2, p. 231', answer: 0,
    en: { q: 'Which statement about the shoot is correct?', options: ['The shoot is positively phototropic and negatively geotropic.', 'The shoot is negatively phototropic and positively geotropic.', 'The shoot is positively phototropic and positively geotropic.', 'The shoot is positively hydrotropic and positively geotropic.'], explanation: 'The book statement is true: shoots grow towards light and away from gravity.' },
    ta: { q: 'தண்டு பற்றிய சரியான கூற்று எது?', options: ['தண்டு நேர் ஒளிச் சார்பசைவும் எதிர் புவிச் சார்பசைவும் உடையது.', 'தண்டு எதிர் ஒளிச் சார்பசைவும் நேர் புவிச் சார்பசைவும் உடையது.', 'தண்டு நேர் ஒளிச் சார்பசைவும் நேர் புவிச் சார்பசைவும் உடையது.', 'தண்டு நேர் நீர்ச் சார்பசைவும் நேர் புவிச் சார்பசைவும் உடையது.'], explanation: 'இக்கூற்று சரி: தண்டு ஒளியை நோக்கியும் புவியீர்ப்புக்கு எதிராகவும் வளர்கிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.3, p. 231', answer: 0,
    en: { q: '"When the weather is hot, water evaporates less due to the opening of stomata." Choose the correct version.', options: ['False – in hot weather more water evaporates through the open stomata', 'True as stated', 'False – in hot weather stomata never open', 'False – in hot weather water is lost only through lenticels'], explanation: 'Heat increases evaporation; open stomata let more water vapour escape, not less.' },
    ta: { q: '"வெப்பம் அதிகரிக்கும்போது இலைத்துளைகள் திறந்து கொள்வதால் நீர் ஆவியாதல் குறைந்துவிடும்." சரியான வடிவத்தைத் தேர்ந்தெடு.', options: ['தவறு – வெப்பம் அதிகரிக்கும்போது திறந்த இலைத்துளைகள் வழியே அதிக நீர் ஆவியாகும்', 'கூற்று சரி', 'தவறு – வெப்பத்தில் இலைத்துளைகள் திறப்பதே இல்லை', 'தவறு – வெப்பத்தில் பட்டைத்துளை வழியே மட்டுமே நீர் இழப்பு'], explanation: 'வெப்பம் ஆவியாதலை அதிகரிக்கிறது; திறந்த இலைத்துளைகள் வழியே அதிக நீராவி வெளியேறுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.4, p. 231', answer: 0,
    en: { q: '"Photosynthesis produces glucose and carbon dioxide." Choose the correct version.', options: ['False – photosynthesis produces glucose and oxygen', 'True as stated', 'False – it produces starch and nitrogen', 'False – it produces only water'], explanation: 'Carbon dioxide is a raw material; glucose, water and oxygen are the products.' },
    ta: { q: '"ஒளிச்சேர்க்கையின் போது குளுக்கோஸ் மற்றும் CO₂ உற்பத்தியாகும்." சரியான வடிவத்தைத் தேர்ந்தெடு.', options: ['தவறு – குளுக்கோஸ் மற்றும் ஆக்சிஜன் உற்பத்தியாகும்', 'கூற்று சரி', 'தவறு – ஸ்டார்ச் மற்றும் நைட்ரஜன் உற்பத்தியாகும்', 'தவறு – நீர் மட்டுமே உற்பத்தியாகும்'], explanation: 'CO₂ மூலப்பொருள்; குளுக்கோஸ், நீர், ஆக்சிஜன் ஆகியவை விளைபொருள்கள்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.5, p. 231', answer: 0,
    en: { q: 'Which statement about photosynthesis is correct?', options: ['It releases oxygen and helps keep the atmosphere in balance.', 'It removes oxygen from the atmosphere.', 'It releases carbon dioxide into the atmosphere.', 'It takes place only at night.'], explanation: 'The book statement is true: photosynthesis releases oxygen, balancing atmospheric gases.' },
    ta: { q: 'ஒளிச்சேர்க்கை பற்றிய சரியான கூற்று எது?', options: ['இது ஆக்சிஜனை வெளியிட்டு வளிமண்டலச் சமநிலையைப் பேணுகிறது.', 'இது வளிமண்டலத்திலிருந்து ஆக்சிஜனை நீக்குகிறது.', 'இது வளிமண்டலத்தில் CO₂ வை வெளியிடுகிறது.', 'இது இரவில் மட்டுமே நடைபெறுகிறது.'], explanation: 'இக்கூற்று சரி: ஒளிச்சேர்க்கை ஆக்சிஜனை வெளியிட்டு வளிமண்டலச் சமநிலைக்கு உதவுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.6, p. 231', answer: 0,
    en: { q: '"Plants lose water when the stomata on leaves are closed." Choose the correct version.', options: ['False – plants lose most water when the stomata are open', 'True as stated', 'False – plants never lose water through leaves', 'False – plants lose water only through roots'], explanation: 'Stomatal transpiration (90–95% of water loss) happens through open stomata.' },
    ta: { q: '"இலைகளில் உள்ள இலைத்துளைகள் மூடிக்கொள்ளும்போது நீர் இழப்பு ஏற்படும்." சரியான வடிவத்தைத் தேர்ந்தெடு.', options: ['தவறு – இலைத்துளைகள் திறந்திருக்கும்போதுதான் பெருமளவு நீர் இழப்பு ஏற்படும்', 'கூற்று சரி', 'தவறு – இலைகள் வழியே நீர் இழப்பே இல்லை', 'தவறு – வேர்கள் வழியே மட்டுமே நீர் இழப்பு'], explanation: 'பெருமளவு (90–95%) நீர் இழப்பு திறந்த இலைத்துளைகள் வழியாகவே நடைபெறுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V.2, p. 231', answer: 0,
    en: { q: 'Which plant part bends in the direction of gravity but away from light?', options: ['Root', 'Shoot', 'Leaf', 'Flower'], explanation: 'The root is positively geotropic and negatively phototropic.' },
    ta: { q: 'புவியீர்ப்பு விசையின் திசையை நோக்கியும் ஒளிக்கு எதிராகவும் வளையும் தாவரப் பாகம்', options: ['வேர்', 'தண்டு', 'இலை', 'மலர்'], explanation: 'வேர் நேர் புவிச் சார்பசைவும் எதிர் ஒளிச் சார்பசைவும் உடையது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V.4, p. 231', answer: 0,
    en: { q: 'Photosynthesis converts energy X into energy Y. X and Y are', options: ['X = light energy, Y = chemical energy', 'X = chemical energy, Y = light energy', 'X = heat energy, Y = electrical energy', 'X = chemical energy, Y = heat energy'], explanation: 'During photosynthesis light energy is converted into chemical energy stored in glucose.' },
    ta: { q: 'ஒளிச்சேர்க்கையின் போது ஆற்றல் X ஆனது ஆற்றல் Y ஆக மாறுகிறது. X, Y என்பவை', options: ['X = ஒளி ஆற்றல், Y = வேதி ஆற்றல்', 'X = வேதி ஆற்றல், Y = ஒளி ஆற்றல்', 'X = வெப்ப ஆற்றல், Y = மின் ஆற்றல்', 'X = வேதி ஆற்றல், Y = வெப்ப ஆற்றல்'], explanation: 'ஒளிச்சேர்க்கையில் ஒளி ஆற்றல் வேதி ஆற்றலாக மாற்றப்பட்டு குளுக்கோஸில் சேமிக்கப்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V.4(b), p. 231', answer: 0,
    en: { q: 'Green plants are called autotrophic because they', options: ['prepare their own food by photosynthesis', 'depend on animals for food', 'absorb ready-made food from soil', 'feed on dead organic matter'], explanation: 'Green plants make their own food through photosynthesis, so their nutrition is autotrophic.' },
    ta: { q: 'பசுந்தாவரங்கள் தற்சார்பு ஊட்ட முறை உடையவை எனப்படக் காரணம்', options: ['ஒளிச்சேர்க்கை மூலம் தங்கள் உணவைத் தாங்களே தயாரிக்கின்றன', 'உணவுக்கு விலங்குகளைச் சார்ந்துள்ளன', 'மண்ணிலிருந்து தயாரான உணவை உறிஞ்சுகின்றன', 'இறந்த கரிமப் பொருள்களை உண்கின்றன'], explanation: 'பசுந்தாவரங்கள் ஒளிச்சேர்க்கை மூலம் தங்களுக்குத் தேவையான உணவைத் தாமே தயாரிக்கின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.1, p. 231', answer: 0,
    en: { q: 'Growth-dependent and growth-independent movements in plants are respectively called', options: ['tropic movements and nastic movements', 'nastic movements and tropic movements', 'transpiration and photosynthesis', 'photonasty and thigmonasty'], explanation: 'Tropic movements depend on growth; nastic movements do not.' },
    ta: { q: 'தாவரத்தில் வளர்ச்சி சார்ந்த அசைவுகளும் வளர்ச்சி சாரா அசைவுகளும் முறையே', options: ['சார்பசைவுகள் மற்றும் திசை சாரா தூண்டல் அசைவுகள்', 'திசை சாரா தூண்டல் அசைவுகள் மற்றும் சார்பசைவுகள்', 'நீராவிப்போக்கு மற்றும் ஒளிச்சேர்க்கை', 'ஒளியுறு வளைதல் மற்றும் நடுக்கமுறு வளைதல்'], explanation: 'சார்பசைவுகள் வளர்ச்சியைச் சார்ந்தவை; திசை சாரா தூண்டல் அசைவுகள் வளர்ச்சியைச் சார்ந்தவை அல்ல.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.3, p. 231', answer: 0,
    en: { q: 'Complete the equation: 6CO₂ + _____ → (sunlight, chlorophyll) → _____ + 6H₂O + 6O₂', options: ['12H₂O; C₆H₁₂O₆', '6H₂O; C₆H₁₂O₆', '12H₂O; C₁₂H₂₂O₁₁', '6O₂; C₆H₁₂O₆'], explanation: 'The overall equation is 6CO₂ + 12H₂O → C₆H₁₂O₆ + 6H₂O + 6O₂.' },
    ta: { q: 'சமன்பாட்டை நிறைவு செய்: 6CO₂ + _____ → (சூரிய ஒளி, பச்சையம்) → _____ + 6H₂O + 6O₂', options: ['12H₂O; C₆H₁₂O₆', '6H₂O; C₆H₁₂O₆', '12H₂O; C₁₂H₂₂O₁₁', '6O₂; C₆H₁₂O₆'], explanation: 'ஒளிச்சேர்க்கையின் ஒட்டுமொத்த சமன்பாடு: 6CO₂ + 12H₂O → C₆H₁₂O₆ + 6H₂O + 6O₂.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.5, p. 231', answer: 0,
    en: { q: 'The root shows positive geotropism because it', options: ['grows downward in the direction of gravity', 'grows upward against gravity', 'grows towards light', 'bends when touched'], explanation: 'Growth towards the stimulus is positive; roots grow down towards gravity.' },
    ta: { q: 'வேர் நேர் புவிச் சார்பசைவு உடையது; ஏனெனில் அது', options: ['புவியீர்ப்பு விசையின் திசையில் கீழ்நோக்கி வளர்கிறது', 'புவியீர்ப்புக்கு எதிராக மேல்நோக்கி வளர்கிறது', 'ஒளியை நோக்கி வளர்கிறது', 'தொட்டால் வளைகிறது'], explanation: 'தூண்டலை நோக்கிய வளர்ச்சி நேர் சார்பசைவு; வேர் புவியீர்ப்பின் திசையில் கீழ்நோக்கி வளர்கிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.8, p. 232', answer: 0,
    en: { q: 'Lenticular transpiration differs from stomatal transpiration because it', options: ['occurs through lenticels in the bark of woody stems', 'occurs through pores on leaves', 'accounts for 90–95% of water loss', 'is controlled by guard cells'], explanation: 'Lenticels are openings on the bark; stomata are leaf pores controlled by guard cells.' },
    ta: { q: 'பட்டைத்துளை நீராவிப்போக்கு, இலைத்துளை நீராவிப்போக்கிலிருந்து வேறுபடக் காரணம், அது', options: ['மரத்தண்டுகளின் பட்டையில் உள்ள பட்டைத்துளைகள் வழியே நடைபெறுகிறது', 'இலைகளில் உள்ள துளைகள் வழியே நடைபெறுகிறது', '90–95% நீர் இழப்புக்குக் காரணமாகிறது', 'காப்புச் செல்களால் கட்டுப்படுத்தப்படுகிறது'], explanation: 'பட்டைத்துளைகள் மரப்பட்டையில் உள்ள துளைகள்; இலைத்துளைகள் காப்புச் செல்களால் கட்டுப்படுத்தப்படும் இலைத் துளைகள்.' },
  },
  {
    difficulty: 'medium', source: '§19.1.1, p. 227', answer: 0,
    en: { q: 'Roots of halophytes such as Rhizophora turn upright out of the soil for respiration. These roots are', options: ['negatively geotropic', 'positively geotropic', 'positively phototropic only', 'thigmonastic'], explanation: 'They grow up, against gravity, so they are negatively geotropic.' },
    ta: { q: 'ரைசோஃபோரா போன்ற உவர்நிலத் தாவரங்களின் சில வேர்கள் சுவாசத்திற்காக மேல்நோக்கி வளர்கின்றன. இவ்வேர்கள்', options: ['எதிர் புவிச் சார்பசைவு உடையவை', 'நேர் புவிச் சார்பசைவு உடையவை', 'நேர் ஒளிச் சார்பசைவு மட்டும் உடையவை', 'நடுக்கமுறு வளைதல் உடையவை'], explanation: 'இவை புவியீர்ப்புக்கு எதிராக மேல்நோக்கி வளர்வதால் எதிர் புவிச் சார்பசைவு உடையவை.' },
  },
  {
    difficulty: 'medium', source: '§19.2, p. 227', answer: 0,
    en: { q: 'Taraxacum officinale blooms in the morning and closes in the evening. This movement is', options: ['photonasty', 'thigmonasty', 'thermonasty', 'geotropism'], explanation: 'A non-directional response to light (day/night) is photonasty.' },
    ta: { q: 'டாராக்சகம் அஃபிசினேல் காலையில் மலர்ந்து மாலையில் மூடுகிறது. இந்த அசைவு', options: ['ஒளியுறு வளைதல்', 'நடுக்கமுறு வளைதல்', 'வெப்பமுறு வளைதல்', 'புவிச் சார்பசைவு'], explanation: 'ஒளிக்கு ஏற்ப ஏற்படும் திசை சாரா அசைவு ஒளியுறு வளைதல்.' },
  },
  {
    difficulty: 'medium', source: '§19.3, p. 228', answer: 0,
    en: { q: 'The glucose made in photosynthesis is converted into _____ and stored in the plant body.', options: ['starch', 'cellulose', 'protein', 'fat'], explanation: 'Glucose, the end product of photosynthesis, is stored as starch.' },
    ta: { q: 'ஒளிச்சேர்க்கையில் உருவாகும் குளுக்கோஸ் _____ ஆக மாற்றப்பட்டுச் சேமிக்கப்படுகிறது.', options: ['ஸ்டார்ச்', 'செல்லுலோஸ்', 'புரதம்', 'கொழுப்பு'], explanation: 'ஒளிச்சேர்க்கையின் முடிவில் குளுக்கோஸ் ஸ்டார்ச்சாக மாற்றப்பட்டுச் சேமிக்கப்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: '§19.4.1, p. 229', answer: 0,
    en: { q: 'About what share of the water transpired from leaves is lost through stomata?', options: ['90–95%', '50–60%', '10–15%', '1–2%'], explanation: 'Stomatal transpiration accounts for 90–95% of the water transpired from leaves.' },
    ta: { q: 'இலைகளிலிருந்து நிகழும் நீராவிப்போக்கில் எவ்வளவு பங்கு இலைத்துளைகள் வழியே நடைபெறுகிறது?', options: ['90–95%', '50–60%', '10–15%', '1–2%'], explanation: 'இலைத்துளை நீராவிப்போக்கால் ஏறக்குறைய 90–95% நீர் இழப்பு ஏற்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: '§19.4.2, p. 229', answer: 0,
    en: { q: 'Exchange of gases (CO₂ and O₂) between a leaf and the air takes place mainly through', options: ['stomata', 'root hairs', 'xylem vessels', 'the flower'], explanation: 'Air exchange takes place continuously through the stomata.' },
    ta: { q: 'இலைக்கும் காற்றுக்கும் இடையே வாயுப் பரிமாற்றம் (CO₂, O₂) முக்கியமாக எதன் வழியே நடைபெறுகிறது?', options: ['இலைத்துளைகள்', 'வேர்த் தூவிகள்', 'சைலக் குழாய்கள்', 'மலர்'], explanation: 'இலைத்துளைகள் வழியாகத் தொடர்ந்து வாயுப் பரிமாற்றம் நடைபெறுகிறது.' },
  },
  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise I.2, p. 230', answer: 0,
    en: { q: 'The chemical reaction that occurs during photosynthesis is that', options: ['CO₂ is reduced and water is oxidised', 'water is reduced and CO₂ is oxidised', 'both CO₂ and water are oxidised', 'both CO₂ and water are produced'], explanation: 'Water is split (oxidised) releasing O₂, while CO₂ gains hydrogen (reduced) to form glucose.' },
    ta: { q: 'ஒளிச்சேர்க்கையின் போது நடைபெறும் வேதிவினை', options: ['CO₂ ஒடுக்கமடைகிறது; நீர் ஆக்சிஜனேற்றம் அடைகிறது', 'நீர் ஒடுக்கமடைகிறது; CO₂ ஆக்சிஜனேற்றம் அடைகிறது', 'நீர், CO₂ இரண்டுமே ஆக்சிஜனேற்றம் அடைகின்றன', 'நீர், CO₂ இரண்டுமே உற்பத்தி செய்யப்படுகின்றன'], explanation: 'நீர் பிளக்கப்பட்டு (ஆக்சிஜனேற்றம்) O₂ வெளியாகிறது; CO₂ ஹைட்ரஜனைப் பெற்று (ஒடுக்கம்) குளுக்கோஸ் ஆகிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise I.5, p. 230', answer: 0,
    en: { q: 'The root of a plant is\n(i) positively phototropic but negatively geotropic\n(ii) positively geotropic but negatively phototropic\n(iii) negatively phototropic but positively hydrotropic\n(iv) negatively hydrotropic but positively phototropic', options: ['(ii) and (iii)', '(i) and (ii)', '(iii) and (iv)', '(i) and (iv)'], explanation: 'Roots grow towards gravity and water and away from light, so (ii) and (iii) are true.' },
    ta: { q: 'தாவரத்தின் வேர்\n(i) நேர் ஒளிச் சார்பசைவு, எதிர் புவிச் சார்பசைவு\n(ii) நேர் புவிச் சார்பசைவு, எதிர் ஒளிச் சார்பசைவு\n(iii) எதிர் ஒளிச் சார்பசைவு, நேர் நீர்ச் சார்பசைவு\n(iv) எதிர் நீர்ச் சார்பசைவு, நேர் ஒளிச் சார்பசைவு', options: ['(ii) மற்றும் (iii)', '(i) மற்றும் (ii)', '(iii) மற்றும் (iv)', '(i) மற்றும் (iv)'], explanation: 'வேர் புவியீர்ப்பையும் நீரையும் நோக்கியும் ஒளிக்கு எதிராகவும் வளர்வதால் (ii), (iii) சரி.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise V.3, p. 231', answer: 0,
    en: { q: 'Which correctly distinguishes phototropism from photonasty?', options: ['Phototropism is a directional growth response to light; photonasty is a non-directional response to light', 'Phototropism is a response to touch; photonasty is a response to light', 'Both are non-directional and reversible', 'Phototropism is fast and reversible; photonasty is slow and permanent'], explanation: 'Both respond to light, but tropism depends on the direction of the stimulus and nasty does not.' },
    ta: { q: 'ஒளிச் சார்பசைவையும் ஒளியுறு வளைதலையும் சரியாக வேறுபடுத்துவது எது?', options: ['ஒளிச் சார்பசைவு ஒளியின் திசையைச் சார்ந்த வளர்ச்சி அசைவு; ஒளியுறு வளைதல் திசை சாரா அசைவு', 'ஒளிச் சார்பசைவு தொடுதலுக்கான அசைவு; ஒளியுறு வளைதல் ஒளிக்கான அசைவு', 'இரண்டுமே திசை சாராதவை, மீளக்கூடியவை', 'ஒளிச் சார்பசைவு விரைவானது, மீளக்கூடியது; ஒளியுறு வளைதல் மெதுவானது, நிரந்தரமானது'], explanation: 'இரண்டும் ஒளிக்கான துலங்கல்கள்; சார்பசைவு தூண்டலின் திசையைச் சார்ந்தது, ஒளியுறு வளைதல் சாராதது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VI.2, p. 231', answer: 0,
    en: { q: 'The pneumatophores (breathing roots) of Avicennia grow vertically upward out of the mud. The movement they show is', options: ['negative geotropism', 'positive geotropism', 'positive hydrotropism', 'thigmonasty'], explanation: 'Like Rhizophora roots, pneumatophores grow up against gravity to get air – negative geotropism.' },
    ta: { q: 'அவிசென்னியா தாவரத்தின் சுவாச வேர்கள் (நிமோடோஃபோர்கள்) சேற்றிலிருந்து மேல்நோக்கி வளர்கின்றன. இவை காட்டும் அசைவு', options: ['எதிர் புவிச் சார்பசைவு', 'நேர் புவிச் சார்பசைவு', 'நேர் நீர்ச் சார்பசைவு', 'நடுக்கமுறு வளைதல்'], explanation: 'காற்றைப் பெற புவியீர்ப்புக்கு எதிராக மேல்நோக்கி வளர்வதால் இது எதிர் புவிச் சார்பசைவு.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VI.6, p. 231', answer: 0,
    en: { q: 'The movement of the sunflower head and the closing of Mimosa pudica leaves differ because', options: ['the sunflower shows phototropism (directional), while Mimosa shows thigmonasty (non-directional)', 'both are examples of thigmotropism', 'the sunflower shows thigmonasty, while Mimosa shows phototropism', 'both are examples of photonasty'], explanation: 'The sunflower follows the direction of light; Mimosa folds on touch regardless of direction.' },
    ta: { q: 'சூரியகாந்தி மலரின் அசைவுக்கும் தொட்டாற் சிணுங்கி இலைகள் மூடுவதற்கும் உள்ள வேறுபாடு', options: ['சூரியகாந்தி ஒளிச் சார்பசைவு (திசை சார்ந்தது); தொட்டாற் சிணுங்கி நடுக்கமுறு வளைதல் (திசை சாராதது)', 'இரண்டுமே தொடு உணர்வு சார்பசைவுகள்', 'சூரியகாந்தி நடுக்கமுறு வளைதல்; தொட்டாற் சிணுங்கி ஒளிச் சார்பசைவு', 'இரண்டுமே ஒளியுறு வளைதல்கள்'], explanation: 'சூரியகாந்தி ஒளியின் திசையைப் பின்பற்றுகிறது; தொட்டாற் சிணுங்கி தொடுதலுக்குத் திசை சாராமல் மடிகிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VI.7, p. 232', answer: 0,
    en: { q: 'To demonstrate transpiration in a potted rose plant, the best method is to', options: ['tie a plastic bag over a leafy shoot and keep it in light; water droplets collect inside', 'cover the soil with black paper and test a leaf with iodine', 'keep the plant in the dark for 2 days', 'place the pot in a trough of moist sand'], explanation: 'Water vapour lost by the leaves condenses inside the bag, showing transpiration (Activity 5).' },
    ta: { q: 'தொட்டியில் வளரும் ரோஜா செடியைக் கொண்டு நீராவிப்போக்கை நிரூபிக்கச் சிறந்த வழி', options: ['இலைகளுடன் உள்ள கிளையை நெகிழிப் பையால் கட்டி வெயிலில் வைத்தால் பையினுள் நீர்த்துளிகள் தோன்றும்', 'மண்ணைக் கருப்புத் தாளால் மூடி இலையை அயோடினால் சோதித்தல்', 'செடியை 2 நாள்கள் இருட்டறையில் வைத்தல்', 'தொட்டியை ஈரமணல் நிரம்பிய தொட்டியில் வைத்தல்'], explanation: 'இலைகள் வெளியிடும் நீராவி பையினுள் குளிர்ந்து நீர்த்துளிகளாகிறது; இது நீராவிப்போக்கைக் காட்டுகிறது (செயல்பாடு 5).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VII.1, p. 232', answer: 0,
    en: { q: 'Which pair correctly contrasts tropic and nastic movements?', options: ['Tropic: growth dependent and more or less permanent; Nastic: growth independent and reversible', 'Tropic: growth independent and immediate; Nastic: growth dependent and slow', 'Tropic: found only in a few plants; Nastic: found in all plants', 'Tropic: non-directional; Nastic: unidirectional'], explanation: 'Tropic movements are growth-dependent, slow, irreversible and found in all plants; nastic movements are the opposite (Table 19.1).' },
    ta: { q: 'சார்பசைவுகளையும் திசை சாரா தூண்டல் அசைவுகளையும் சரியாக வேறுபடுத்தும் இணை எது?', options: ['சார்பசைவு: வளர்ச்சி சார்ந்தது, ஏறக்குறைய நிரந்தரமானது; திசை சாரா அசைவு: வளர்ச்சி சாராதது, மீளக்கூடியது', 'சார்பசைவு: வளர்ச்சி சாராதது, உடனடியானது; திசை சாரா அசைவு: வளர்ச்சி சார்ந்தது, மெதுவானது', 'சார்பசைவு: சில தாவரங்களில் மட்டும்; திசை சாரா அசைவு: அனைத்துத் தாவரங்களிலும்', 'சார்பசைவு: திசை சாராதது; திசை சாரா அசைவு: ஒரு திசை சார்ந்தது'], explanation: 'அட்டவணை 19.1: சார்பசைவு வளர்ச்சி சார்ந்தது, மெதுவானது, மீளாதது, எல்லாத் தாவரங்களிலும் உண்டு; திசை சாரா அசைவு இதற்கு நேர்மாறானது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VIII.1, p. 232', answer: 0,
    imageUrl: `${IMG}/moon-flower-day-night.png`,
    en: { q: 'The picture shows a Moon flower (Ipomoea alba) at night (left) and during the day (right). It opens at night and closes in bright light. The phenomenon is', options: ['photonasty', 'thigmonasty', 'phototropism', 'thermonasty'], explanation: 'Opening and closing in response to light, without regard to its direction, is photonasty.' },
    ta: { q: 'படத்தில் நிலவு மலர் (ஐப்போமியா ஆல்பா) இரவில் (இடது) மற்றும் பகலில் (வலது) காட்டப்பட்டுள்ளது. இது இரவில் மலர்ந்து பகலில் மூடுகிறது. இந்நிகழ்வு', options: ['ஒளியுறு வளைதல்', 'நடுக்கமுறு வளைதல்', 'ஒளிச் சார்பசைவு', 'வெப்பமுறு வளைதல்'], explanation: 'ஒளிக்கு ஏற்ப, அதன் திசையைச் சாராமல் மலர் திறந்து மூடுவது ஒளியுறு வளைதல்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VIII.1, p. 232', answer: 0,
    en: { q: 'Flowers of plant A open in bright daylight and close at night; flowers of plant B open at night and close by day; leaves of plant C droop when touched. A, B and C could be', options: ['A – Taraxacum, B – Moon flower, C – Mimosa pudica', 'A – Moon flower, B – Taraxacum, C – Tulip', 'A – Mimosa pudica, B – Tulip, C – Sunflower', 'A – Tulip, B – Mimosa pudica, C – Moon flower'], explanation: 'Taraxacum blooms by day, Ipomoea alba by night (photonasty); Mimosa shows thigmonasty.' },
    ta: { q: 'A தாவர மலர்கள் பகல் ஒளியில் திறந்து இரவில் மூடுகின்றன; B தாவர மலர்கள் இரவில் திறந்து பகலில் மூடுகின்றன; C தாவர இலைகள் தொட்டால் மடிகின்றன. A, B, C என்பவை', options: ['A – டாராக்சகம், B – நிலவு மலர், C – தொட்டாற் சிணுங்கி', 'A – நிலவு மலர், B – டாராக்சகம், C – டுலிப்', 'A – தொட்டாற் சிணுங்கி, B – டுலிப், C – சூரியகாந்தி', 'A – டுலிப், B – தொட்டாற் சிணுங்கி, C – நிலவு மலர்'], explanation: 'டாராக்சகம் பகலில், நிலவு மலர் இரவில் மலர்கின்றன (ஒளியுறு வளைதல்); தொட்டாற் சிணுங்கி நடுக்கமுறு வளைதல் காட்டுகிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VIII.2, p. 232', answer: 0,
    en: { q: 'A student keeps a potted plant in the dark for 24 hours, covers the centre of one leaf with black paper, places the plant in sunlight and then tests the leaf for starch. What is being investigated?', options: ['Whether light is necessary for photosynthesis', 'Whether CO₂ is necessary for photosynthesis', 'Whether chlorophyll is necessary for photosynthesis', 'Whether water is lost through stomata'], explanation: 'Only the covered part lacks light; it does not turn blue-black with iodine, showing light is needed.' },
    ta: { q: 'ஒரு மாணவர் தொட்டிச் செடியை 24 மணி நேரம் இருட்டில் வைத்து, ஓர் இலையின் நடுப்பகுதியைக் கருப்புத் தாளால் மூடி, வெயிலில் வைத்த பின் இலையை ஸ்டார்ச்சுக்குச் சோதிக்கிறார். எது ஆராயப்படுகிறது?', options: ['ஒளிச்சேர்க்கைக்கு ஒளி அவசியமா என்பது', 'ஒளிச்சேர்க்கைக்கு CO₂ அவசியமா என்பது', 'ஒளிச்சேர்க்கைக்குப் பச்சையம் அவசியமா என்பது', 'இலைத்துளை வழியே நீர் இழப்பு நிகழ்கிறதா என்பது'], explanation: 'மூடப்பட்ட பகுதிக்கு மட்டும் ஒளி கிடைக்காது; அது அயோடினுடன் கருநீலமாகாது. எனவே ஒளி அவசியம்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VIII.2, p. 232', answer: 0,
    en: { q: 'In a starch test experiment, why is the plant kept in the dark for 24 hours (or more) before the experiment?', options: ['To destarch the leaves so that any starch found later was made during the experiment', 'To increase the chlorophyll in the leaves', 'To close the stomata permanently', 'To kill the guard cells'], explanation: 'In the dark the stored starch is used up, so a positive iodine test later shows new photosynthesis.' },
    ta: { q: 'ஸ்டார்ச் சோதனைக்கு முன் செடியை 24 மணி நேரம் இருட்டில் வைப்பது ஏன்?', options: ['இலைகளில் உள்ள ஸ்டார்ச்சை நீக்க; பின்னர் காணப்படும் ஸ்டார்ச் சோதனையின் போது உருவானது என உறுதி செய்ய', 'இலைகளில் பச்சையத்தை அதிகரிக்க', 'இலைத்துளைகளை நிரந்தரமாக மூட', 'காப்புச் செல்களை அழிக்க'], explanation: 'இருட்டில் சேமித்த ஸ்டார்ச் செலவாகிவிடும்; பின்னர் அயோடின் சோதனை நேர்மறையானால் அது புதிய ஒளிச்சேர்க்கையைக் காட்டும்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VIII.2, p. 232', answer: 0,
    en: { q: 'In the iodine test for starch, the leaf is first boiled in water and then placed in alcohol. The alcohol is used to', options: ['remove chlorophyll so the colour change can be seen', 'add starch to the leaf', 'kill the stomata', 'supply carbon dioxide'], explanation: 'Alcohol decolourises the leaf; the starch-containing part then turns blue-black with iodine.' },
    ta: { q: 'ஸ்டார்ச் சோதனையில் இலையை முதலில் கொதிநீரிலும் பின் ஆல்கஹாலிலும் வைப்பது ஏன்? ஆல்கஹால் பயன்படுவது', options: ['பச்சையத்தை நீக்கி நிற மாற்றத்தைத் தெளிவாகக் காண', 'இலையில் ஸ்டார்ச் சேர்க்க', 'இலைத்துளைகளை அழிக்க', 'கார்பன் டைஆக்சைடு அளிக்க'], explanation: 'ஆல்கஹால் பச்சையத்தை நீக்குகிறது; பின் ஸ்டார்ச் உள்ள பகுதி அயோடினுடன் கருநீலமாக மாறும்.' },
  },
  {
    difficulty: 'hard', source: '§19.3.1, p. 228', answer: 0,
    en: { q: 'A variegated Coleus leaf is destarched, kept in sunlight and tested with iodine. Only the green patches turn blue-black. This shows that', options: ['chlorophyll is necessary for photosynthesis', 'light is not needed for photosynthesis', 'CO₂ is produced in photosynthesis', 'the white patches contain the most starch'], explanation: 'Starch forms only where chlorophyll is present (Activity 3).' },
    ta: { q: 'பல வண்ண கோலியஸ் இலையை ஸ்டார்ச் நீக்கி, வெயிலில் வைத்து அயோடினால் சோதித்தபோது பச்சைப் பகுதிகள் மட்டுமே கருநீலமாகின. இது காட்டுவது', options: ['ஒளிச்சேர்க்கைக்குப் பச்சையம் அவசியம்', 'ஒளிச்சேர்க்கைக்கு ஒளி தேவையில்லை', 'ஒளிச்சேர்க்கையில் CO₂ உருவாகிறது', 'வெள்ளைப் பகுதிகளில் அதிக ஸ்டார்ச் உள்ளது'], explanation: 'பச்சையம் உள்ள பகுதிகளில் மட்டுமே ஸ்டார்ச் உருவாகிறது (செயல்பாடு 3).' },
  },
  {
    difficulty: 'hard', source: '§19.1.1, p. 227', answer: 0,
    en: { q: 'Soaked pea seeds are sown in sand around a porous pot of water placed in the centre of a trough. After a week the roots bend towards the pot. This demonstrates', options: ['positive hydrotropism of roots', 'positive phototropism of roots', 'negative geotropism of roots', 'thigmonasty of roots'], explanation: 'The roots grow sideways towards the water source (Activity 1), showing hydrotropism.' },
    ta: { q: 'மணல் நிரம்பிய தொட்டியின் நடுவில் நீருள்ள நுண்துளைப் பானையை வைத்து, சுற்றிலும் ஊறவைத்த பட்டாணி விதைகளை விதைத்தால், ஒரு வாரத்தில் வேர்கள் பானையை நோக்கி வளைகின்றன. இது காட்டுவது', options: ['வேரின் நேர் நீர்ச் சார்பசைவு', 'வேரின் நேர் ஒளிச் சார்பசைவு', 'வேரின் எதிர் புவிச் சார்பசைவு', 'வேரின் நடுக்கமுறு வளைதல்'], explanation: 'வேர்கள் நீர் மூலத்தை நோக்கிப் பக்கவாட்டில் வளைகின்றன (செயல்பாடு 1); இது நீர்ச் சார்பசைவு.' },
  },
  {
    difficulty: 'hard', source: '§19.4.1, p. 229', answer: 0,
    en: { q: 'Which of these statements about transpiration are correct?\n(i) It creates a pull in the leaf and stem.\n(ii) It creates an absorption force in the roots.\n(iii) It helps regulate the temperature of the plant.\n(iv) It stops the supply of minerals to leaves.', options: ['(i), (ii) and (iii) only', '(i) and (iv) only', '(ii) and (iv) only', '(i), (ii), (iii) and (iv)'], explanation: 'Transpiration is needed for a continuous supply of minerals, so (iv) is false; the rest are true.' },
    ta: { q: 'நீராவிப்போக்கு பற்றிய சரியான கூற்றுகள் எவை?\n(i) இது தண்டு மற்றும் இலையில் இழுவிசையை ஏற்படுத்துகிறது.\n(ii) இது வேரின் உறிஞ்சும் தன்மையை அதிகரிக்கிறது.\n(iii) இது தாவரத்தின் வெப்பநிலையைச் சீர்படுத்துகிறது.\n(iv) இது இலைகளுக்குத் தாது உப்புகள் செல்வதைத் தடுக்கிறது.', options: ['(i), (ii), (iii) மட்டும்', '(i), (iv) மட்டும்', '(ii), (iv) மட்டும்', '(i), (ii), (iii), (iv)'], explanation: 'தாது உப்புகள் தொடர்ந்து கிடைக்க நீராவிப்போக்கு அவசியம்; எனவே (iv) தவறு, மற்றவை சரி.' },
  },
  {
    difficulty: 'hard', source: '§19.3, p. 228', answer: 3,
    en: { q: 'Assertion: Oriental hornets (Vespa orientalis) prepare glucose by photosynthesis like green plants.\nReason: The yellow patch on the hornet contains xanthopterin, a light-harvesting pigment that converts light energy into electrical energy.', options: AR_EN, explanation: 'The hornet has no chlorophyll and does not photosynthesise; xanthopterin converts light into electrical energy, so the assertion is false and the reason true.' },
    ta: { q: 'கூற்று: ஓரியண்டல் குளவிகள் (வெஸ்பா ஓரியண்டாலிஸ்) பசுந்தாவரங்களைப் போல ஒளிச்சேர்க்கை மூலம் குளுக்கோஸ் தயாரிக்கின்றன.\nகாரணம்: குளவியின் மஞ்சள் திட்டில் உள்ள சாந்தோப்டெரின் என்ற நிறமி ஒளி ஆற்றலை மின் ஆற்றலாக மாற்றுகிறது.', options: AR_TA, explanation: 'குளவியில் பச்சையம் இல்லை; அது ஒளிச்சேர்க்கை செய்வதில்லை. சாந்தோப்டெரின் ஒளியை மின் ஆற்றலாக மாற்றுகிறது. எனவே கூற்று தவறு, காரணம் சரி.' },
  },
  {
    difficulty: 'hard', source: '§19.2, p. 228', answer: 0,
    en: { q: 'Assertion: The folding of Mimosa pudica leaves on touch is a nastic movement.\nReason: Nastic movements are non-directional, growth-independent and reversible.', options: AR_EN, explanation: 'Mimosa leaves fold whatever the direction of touch and reopen later, which is exactly what nastic movements are.' },
    ta: { q: 'கூற்று: தொட்டாற் சிணுங்கி இலைகள் தொட்டதும் மடிவது திசை சாரா தூண்டல் அசைவு ஆகும்.\nகாரணம்: திசை சாரா தூண்டல் அசைவுகள் திசையைச் சாராதவை, வளர்ச்சியைச் சாராதவை, மீளக்கூடியவை.', options: AR_TA, explanation: 'தொடுதலின் திசையைச் சாராமல் இலைகள் மடிந்து பின் விரிவதால், காரணம் கூற்றைச் சரியாக விளக்குகிறது.' },
  },
];
