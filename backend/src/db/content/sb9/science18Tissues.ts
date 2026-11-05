// Tamil Nadu State Board, 9th Science, Unit 18 – Organisation of Tissues (திசுக்களின் அமைப்பு).
// source = printed page of the English-medium book.
import { BankQuestion, AR_EN, AR_TA } from './types';

const IMG = '/content/9/state_board/science/18';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.1, p. 223', answer: 0,
    en: { q: 'The tissue composed of living, thin-walled, polyhedral cells is', options: ['parenchyma', 'collenchyma', 'sclerenchyma', 'xylem'], explanation: 'Parenchyma cells are living and thin walled, oval, rounded or polygonal in shape.' },
    ta: { q: 'உயிருள்ள மெல்லிய சுவருடைய பலகோண வடிவ செல்களைக் கொண்டுள்ள திசு', options: ['பாரன்கைமா', 'கோலன்கைமா', 'ஸ்கிளீரன்கைமா', 'சைலம்'], explanation: 'பாரன்கைமா செல்கள் உயிருள்ளவை, மெல்லிய சுவருடையவை, முட்டை, உருண்டை அல்லது பலகோண வடிவமுடையவை.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.2, p. 223', answer: 0,
    en: { q: 'Fibres consist of', options: ['sclerenchyma', 'parenchyma', 'collenchyma', 'chlorenchyma'], explanation: 'Sclerenchyma cells are grouped into fibres and sclereids.' },
    ta: { q: 'நார்கள் கொண்டுள்ளது', options: ['ஸ்கிளீரன்கைமா', 'பாரன்கைமா', 'கோலன்கைமா', 'குளோரன்கைமா'], explanation: 'ஸ்கிளீரன்கைமா செல்கள் நார்கள், ஸ்கிளீரைடுகள் என இருவகைப்படும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.3, p. 223', answer: 0,
    en: { q: 'Companion cells are closely associated with', options: ['sieve elements', 'vessel elements', 'trichomes', 'guard cells'], explanation: 'Companion cells are attached to the lateral wall of the sieve tubes in phloem.' },
    ta: { q: 'துணை செல்கள் _____ உடன் மிக நெருக்கமாக இணைந்துள்ளன.', options: ['சல்லடைக் கூறுகள்', 'பாத்திரக் கூறுகள்', 'ட்ரைக்கோம்கள்', 'காப்பு செல்கள்'], explanation: 'ஃபுளோயத்தில் துணை செல்கள் சல்லடைக் குழாய்களின் பக்கச்சுவரில் ஒட்டியுள்ளன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.4, p. 223', answer: 0,
    en: { q: 'Which of the following is a complex tissue?', options: ['Xylem', 'Parenchyma', 'Collenchyma', 'Sclerenchyma'], explanation: 'Xylem and phloem are complex tissues; the other three are simple tissues.' },
    ta: { q: 'கீழ்க்கண்டவற்றுள் எது ஒரு கூட்டுத் திசுவாகும்?', options: ['சைலம்', 'பாரன்கைமா', 'கோலன்கைமா', 'ஸ்கிளீரன்கைமா'], explanation: 'சைலமும் ஃபுளோயமும் கூட்டுத்திசுக்கள்; மற்ற மூன்றும் எளிய திசுக்கள்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.7, p. 223', answer: 0,
    en: { q: 'A nerve cell does NOT contain', options: ['tendons', 'an axon', 'nerve endings', 'dendrites'], explanation: 'A neuron has a cyton, dendrites, an axon and terminal endings; tendons are dense connective tissue.' },
    ta: { q: 'நரம்பு செல்லில் இல்லாதது எது?', options: ['தசை நாண்கள்', 'ஆக்சான்', 'நரம்பு முனைகள்', 'டென்ட்ரைட்டுகள்'], explanation: 'நியூரானில் சைட்டான், டென்ட்ரைட்டுகள், ஆக்சான், முனை கிளைகள் உண்டு; தசை நாண்கள் அடர்த்தியான இணைப்புத் திசு.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise III.2, p. 223', answer: 0,
    en: { q: 'Parenchyma, collenchyma and sclerenchyma are _____ tissues.', options: ['simple permanent', 'complex permanent', 'meristematic', 'conducting'], explanation: 'They are simple tissues made of structurally and functionally similar cells.' },
    ta: { q: 'பாரன்கைமா, கோலன்கைமா, ஸ்கிளீரன்கைமா ஆகியவை _____ வகை திசுக்களாகும்.', options: ['எளிய நிலையான', 'கூட்டு நிலையான', 'ஆக்குத்', 'கடத்தும்'], explanation: 'இவை அமைப்பிலும் பணியிலும் ஒத்த செல்களால் ஆன எளிய திசுக்கள்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise III.3, p. 223', answer: 0,
    en: { q: '_____ and _____ are complex tissues.', options: ['Xylem, phloem', 'Parenchyma, collenchyma', 'Collenchyma, sclerenchyma', 'Aerenchyma, chlorenchyma'], explanation: 'Xylem and phloem are made of more than one type of cell working together.' },
    ta: { q: '_____ மற்றும் _____ ஆகியவை கூட்டுத்திசுக்களாகும்.', options: ['சைலம், ஃபுளோயம்', 'பாரன்கைமா, கோலன்கைமா', 'கோலன்கைமா, ஸ்கிளீரன்கைமா', 'ஏரன்கைமா, குளோரன்கைமா'], explanation: 'சைலமும் ஃபுளோயமும் பலவகை செல்கள் ஒருங்கிணைந்து செயல்படும் திசுக்கள்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise IV.1 and IV.3, p. 224', answer: 0,
    en: { q: 'Which statement about epithelial tissue and parenchyma is correct?', options: ['Epithelial tissue is a protective tissue, and parenchyma is a simple tissue.', 'Epithelial tissue is a conducting tissue, and parenchyma is a complex tissue.', 'Epithelial tissue is a protective tissue, and parenchyma is a complex tissue.', 'Epithelial tissue is a contractile tissue, and parenchyma is a simple tissue.'], explanation: 'Both book statements are true: epithelium protects the body and parenchyma is a simple permanent tissue.' },
    ta: { q: 'எபிதீலியத் திசு, பாரன்கைமா பற்றிய சரியான கூற்று எது?', options: ['எபிதீலியத் திசு பாதுகாப்புத் திசு; பாரன்கைமா ஒரு எளிய திசு.', 'எபிதீலியத் திசு கடத்தும் திசு; பாரன்கைமா ஒரு கூட்டுத் திசு.', 'எபிதீலியத் திசு பாதுகாப்புத் திசு; பாரன்கைமா ஒரு கூட்டுத் திசு.', 'எபிதீலியத் திசு சுருங்கும் திசு; பாரன்கைமா ஒரு எளிய திசு.'], explanation: 'பாடநூலின் இரு கூற்றுகளும் சரி: எபிதீலியம் உடலைப் பாதுகாக்கும்; பாரன்கைமா எளிய நிலையான திசு.' },
  },
  {
    difficulty: 'easy', source: '§18.1.1, p. 210', answer: 0,
    en: { q: "The word 'meristem' comes from the Greek word 'meristos', which means", options: ['divisible', 'permanent', 'conducting', 'supporting'], explanation: 'Meristos means divisible, i.e. having cell division activity.' },
    ta: { q: "'மெரிஸ்டம்' என்ற சொல் 'மெரிஸ்டோஸ்' என்ற கிரேக்கச் சொல்லிலிருந்து வந்தது. அதன் பொருள்", options: ['பகுப்படையக்கூடியது', 'நிலையானது', 'கடத்துவது', 'தாங்குவது'], explanation: 'மெரிஸ்டோஸ் என்றால் பகுப்படையக்கூடியது, அதாவது செல் பகுப்புத் திறன் உடையது.' },
  },
  {
    difficulty: 'easy', source: '§18.1.1, p. 211', answer: 0,
    en: { q: 'Meristems found at the tips of root and shoot, which increase the length, are', options: ['apical meristems', 'lateral meristems', 'intercalary meristems', 'cork cambium'], explanation: 'Apical meristems at the growing points of root and shoot bring about increase in length.' },
    ta: { q: 'வேர், தண்டு நுனிகளில் காணப்பட்டு நீள வளர்ச்சியை ஏற்படுத்தும் ஆக்குத்திசுக்கள்', options: ['நுனி ஆக்குத்திசுக்கள்', 'பக்க ஆக்குத்திசுக்கள்', 'இடை ஆக்குத்திசுக்கள்', 'தக்கை கேம்பியம்'], explanation: 'வேர், தண்டின் வளர் நுனிகளில் உள்ள நுனி ஆக்குத்திசுக்கள் நீள வளர்ச்சியை ஏற்படுத்துகின்றன.' },
  },
  {
    difficulty: 'easy', source: '§18.1.2, p. 211 (Do you know?)', answer: 0,
    en: { q: 'In potato, the vacuoles of parenchyma cells are filled with', options: ['starch', 'sugar', 'fat', 'protein'], explanation: 'Potato parenchyma stores starch; apple parenchyma stores sugar.' },
    ta: { q: 'உருளைக்கிழங்கில் பாரன்கைமா செல்களின் நுண்குமிழ்கள் எதனால் நிரம்பியுள்ளன?', options: ['ஸ்டார்ச்', 'சர்க்கரை', 'கொழுப்பு', 'புரதம்'], explanation: 'உருளைக்கிழங்கின் பாரன்கைமா ஸ்டார்ச்சையும், ஆப்பிளின் பாரன்கைமா சர்க்கரையையும் சேமிக்கின்றன.' },
  },
  {
    difficulty: 'easy', source: '§18.2, p. 214', answer: 0,
    en: { q: 'The study of tissues is known as', options: ['histology', 'cytology', 'taxonomy', 'ecology'], explanation: 'Histology is the study of tissues.' },
    ta: { q: 'திசுக்களைப் பற்றிய படிப்பு', options: ['திசுவியல்', 'செல்லியல்', 'வகைப்பாட்டியல்', 'சூழ்நிலையியல்'], explanation: 'திசுக்களைப் பற்றிய படிப்பு திசுவியல் (ஹிஸ்டாலஜி).' },
  },
  {
    difficulty: 'easy', source: '§18.2.2, p. 217', answer: 0,
    en: { q: 'Cord-like strong structures that join skeletal muscles to bones are', options: ['tendons', 'ligaments', 'cartilages', 'areolar tissues'], explanation: 'Tendons join muscles to bones; ligaments join bones to bones.' },
    ta: { q: 'எலும்புச் சட்டகத் தசைகளை எலும்புகளுடன் இணைக்கும் கயிறு போன்ற உறுதியான அமைப்புகள்', options: ['தசை நாண்கள்', 'தசைநார்கள் (லிகமெண்ட்)', 'குருத்தெலும்புகள்', 'ஏரியோலார் திசுக்கள்'], explanation: 'தசை நாண்கள் தசைகளை எலும்புகளுடன் இணைக்கின்றன; லிகமெண்ட்கள் எலும்புகளை எலும்புகளுடன் இணைக்கின்றன.' },
  },
  {
    difficulty: 'easy', source: '§18.2.2, p. 218', answer: 0,
    en: { q: 'The respiratory pigment present in red blood corpuscles is', options: ['haemoglobin', 'chlorophyll', 'melanin', 'keratin'], explanation: 'RBCs contain haemoglobin, which transports oxygen to the tissues.' },
    ta: { q: 'இரத்தச் சிவப்பணுக்களில் உள்ள சுவாச நிறமி', options: ['ஹீமோகுளோபின்', 'பச்சையம்', 'மெலனின்', 'கெரட்டின்'], explanation: 'சிவப்பணுக்களில் உள்ள ஹீமோகுளோபின் திசுக்களுக்கு ஆக்சிஜனைக் கடத்துகிறது.' },
  },
  {
    difficulty: 'easy', source: '§18.2.4, p. 219', answer: 0,
    en: { q: 'The structural and functional units of nervous tissue, which are the longest cells of the body, are', options: ['neurons', 'osteocytes', 'chondrocytes', 'adipocytes'], explanation: 'Neurons are the structural and functional units of nervous tissue and the longest cells in the body.' },
    ta: { q: 'நரம்புத் திசுவின் அமைப்பு மற்றும் செயல்பாட்டு அலகுகளான, உடலின் மிக நீண்ட செல்கள்', options: ['நியூரான்கள்', 'ஆஸ்டியோசைட்டுகள்', 'காண்ட்ரோசைட்டுகள்', 'கொழுப்பு செல்கள்'], explanation: 'நியூரான்கள் நரம்புத் திசுவின் அமைப்பு, செயல்பாட்டு அலகுகள்; உடலின் மிக நீண்ட செல்கள்.' },
  },
  {
    difficulty: 'easy', source: '§18.3.1, p. 219', answer: 0,
    en: { q: 'Mitosis was first discovered by', options: ['Fleming in 1879', 'Farmer in 1905', 'Linnaeus in 1753', 'Hooke in 1665'], explanation: 'Fleming discovered mitosis in 1879; Farmer coined the term meiosis in 1905.' },
    ta: { q: 'மைட்டாசிஸ் முதன்முதலில் கண்டறியப்பட்டது', options: ['1879-இல் ஃபிளெமிங்கால்', '1905-இல் ஃபார்மரால்', '1753-இல் லின்னேயஸால்', '1665-இல் ஹூக்கால்'], explanation: '1879-இல் ஃபிளெமிங் மைட்டாசிஸைக் கண்டறிந்தார்; 1905-இல் ஃபார்மர் மியாசிஸ் என்ற சொல்லை அறிமுகப்படுத்தினார்.' },
  },
  {
    difficulty: 'easy', source: '§18.3.1, p. 220', answer: 0,
    en: { q: 'The resting phase of the nucleus between two successive cell divisions is', options: ['interphase', 'prophase', 'telophase', 'anaphase'], explanation: 'In interphase the cell prepares itself for the next division.' },
    ta: { q: 'இரு அடுத்தடுத்த செல் பகுப்புகளுக்கு இடையிலான உட்கருவின் ஓய்வு நிலை', options: ['இடைநிலை', 'புரோநிலை', 'டீலோநிலை', 'அனாநிலை'], explanation: 'இடைநிலையில் செல் அடுத்த பகுப்புக்குத் தன்னைத் தயார்படுத்துகிறது.' },
  },
  // ---------------------------------------------------------------- Medium
  {
    difficulty: 'medium', source: 'Book exercise I.5, p. 223', answer: 0,
    en: { q: 'Aerenchyma is found in', options: ['hydrophytes', 'epiphytes', 'halophytes', 'xerophytes'], explanation: 'In aquatic plants (hydrophytes) parenchyma has intercellular air spaces and is called aerenchyma.' },
    ta: { q: 'ஏரன்கைமா எதில் கண்டறியப்படுகிறது?', options: ['நீர்வாழ் தாவரம்', 'தொற்று தாவரம்', 'சதுப்புநில தாவரம்', 'வறண்ட தாவரம்'], explanation: 'நீர்வாழ் தாவரங்களில் பாரன்கைமா காற்று இடைவெளிகளுடன் ஏரன்கைமாவாக உள்ளது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.6, p. 223', answer: 0,
    en: { q: 'Smooth muscles occur in the walls of', options: ['the uterus, arteries and veins', 'the biceps and triceps', 'the heart only', 'the limbs and tongue only'], explanation: 'Smooth (involuntary) muscle lines internal organs such as blood vessels, the urinary bladder and the uterus.' },
    ta: { q: 'மிருதுவான தசைகள் காணப்படுவது', options: ['கர்ப்பப்பை, தமனி, சிரை ஆகியவற்றின் சுவர்கள்', 'கையின் இருதலை, முத்தலைத் தசைகள்', 'இதயம் மட்டும்', 'கை, கால், நாக்கு மட்டும்'], explanation: 'மிருதுவான தசைகள் (தன்னிச்சையற்றவை) இரத்தநாளம், சிறுநீர்ப்பை, கர்ப்பப்பை போன்ற உள்ளுறுப்புகளின் சுவர்களில் உள்ளன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.1, p. 223', answer: 0,
    en: { q: '_____ tissues, with thick lignified walls, provide mechanical support to organs.', options: ['Sclerenchyma', 'Parenchyma', 'Aerenchyma', 'Meristematic'], explanation: 'Sclerenchyma cells have thick, often lignified walls and give mechanical strength.' },
    ta: { q: 'தடித்த லிக்னின் சுவருடைய _____ திசுக்கள் உள்ளுறுப்புகளுக்கு உறுதியை அளிக்கின்றன.', options: ['ஸ்கிளீரன்கைமா', 'பாரன்கைமா', 'ஏரன்கைமா', 'ஆக்கு'], explanation: 'ஸ்கிளீரன்கைமா செல்கள் லிக்னின் படிந்த தடித்த சுவர் கொண்டு உறுதியை அளிக்கின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.4, p. 223', answer: 0,
    en: { q: 'Epithelial cells with cilia are found in the _____ of our body.', options: ['trachea (windpipe)', 'skin surface', 'stomach lining', 'thyroid vesicles'], explanation: 'Ciliated epithelium lines the trachea, bronchioles, kidney tubules and fallopian tubes.' },
    ta: { q: 'குறுயிழை கொண்ட எபிதீலிய செல்கள் நமது உடலின் _____ பகுதியில் உள்ளன.', options: ['மூச்சுக்குழல்', 'தோலின் மேற்பரப்பு', 'இரைப்பையின் உட்சுவர்', 'தைராய்டு நுண்பைகள்'], explanation: 'குறுயிழை எபிதீலியம் மூச்சுக்குழல், மூச்சுக் கிளைக்குழல்கள், சிறுநீரக நுண்குழல்கள், அண்டநாளங்களில் உள்ளது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.5, p. 223', answer: 0,
    en: { q: 'The lining of the small intestine is made up of _____.', options: ['columnar epithelium', 'squamous epithelium', 'compound epithelium', 'cartilage'], explanation: 'Pillar-like columnar epithelium lines the stomach, small intestine and colon and helps in secretion and absorption.' },
    ta: { q: 'சிறுகுடலின் புறணி _____ ஆல் ஆனது.', options: ['தூண் எபிதீலியம்', 'தட்டை எபிதீலியம்', 'கூட்டு எபிதீலியம்', 'குருத்தெலும்பு'], explanation: 'தூண் போன்ற செல்களாலான தூண் எபிதீலியம் இரைப்பை, சிறுகுடல், பெருங்குடலின் உட்சுவரில் உள்ளது; சுரத்தல், உறிஞ்சுதலுக்கு உதவும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.2, p. 224', answer: 0,
    en: { q: "The book's statement 'Bone and cartilage are two types of areolar connective tissue' is false. The correct statement is", options: ['Bone and cartilage are supportive (skeletal) connective tissues.', 'Bone and cartilage are fluid connective tissues.', 'Bone and cartilage are dense connective tissues.', 'Bone and cartilage are epithelial tissues.'], explanation: 'Cartilage and bone are supportive connective tissues that form the endoskeleton; areolar and adipose are connective tissue proper.' },
    ta: { q: "'எலும்பு மற்றும் குருத்தெலும்பு ஆகியவை சிற்றிட இணைப்புத் திசுவின் இருவகைகள்' என்பது தவறு. சரியான கூற்று", options: ['எலும்பும் குருத்தெலும்பும் ஆதார (எலும்புச் சட்டக) இணைப்புத் திசுக்கள்.', 'எலும்பும் குருத்தெலும்பும் திரவ இணைப்புத் திசுக்கள்.', 'எலும்பும் குருத்தெலும்பும் அடர்த்தியான இணைப்புத் திசுக்கள்.', 'எலும்பும் குருத்தெலும்பும் எபிதீலியத் திசுக்கள்.'], explanation: 'குருத்தெலும்பும் எலும்பும் அகச்சட்டகத்தை உருவாக்கும் ஆதார இணைப்புத் திசுக்கள்; சிற்றிட (ஏரியோலார்), கொழுப்புத் திசுக்கள் இணைப்புத் திசு வகையைச் சேர்ந்தவை.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.4 and IV.5, p. 224', answer: 0,
    en: { q: 'Which statement about the make-up of xylem and phloem is correct?', options: ['Xylem is made up of tracheids and vessels; phloem is made up of sieve elements.', 'Phloem is made up of tracheids; vessels are found in collenchyma.', 'Phloem is made up of vessels; tracheids are found in collenchyma.', 'Xylem is made up of sieve tubes; vessels are found in phloem.'], explanation: 'The book statements are false: tracheids and vessels belong to xylem, while phloem has sieve elements and companion cells.' },
    ta: { q: 'சைலம், ஃபுளோயம் ஆகியவற்றின் கூறுகள் பற்றிய சரியான கூற்று எது?', options: ['சைலம் டிரக்கீடுகள், சைலக்குழாய்களால் ஆனது; ஃபுளோயம் சல்லடைக் கூறுகளால் ஆனது.', 'ஃபுளோயம் டிரக்கீடுகளால் ஆனது; கோலன்கைமாவில் நாளங்கள் காணப்படுகின்றன.', 'ஃபுளோயம் நாளங்களால் ஆனது; கோலன்கைமாவில் டிரக்கீடுகள் காணப்படுகின்றன.', 'சைலம் சல்லடைக் குழாய்களால் ஆனது; ஃபுளோயத்தில் நாளங்கள் காணப்படுகின்றன.'], explanation: 'பாடநூல் கூற்றுகள் தவறு: டிரக்கீடுகளும் நாளங்களும் சைலத்தில்; ஃபுளோயத்தில் சல்லடைக் கூறுகளும் துணை செல்களும் உள்ளன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V.1, p. 224', answer: 0,
    en: { q: 'Intercalary meristems differ from other meristems because they', options: ['lie between permanent tissues, at the base of leaves or internodes', 'are found only at the root tip', 'run parallel to the sides and cause thickness', 'are made of dead cells'], explanation: 'Intercalary meristem lies between regions of permanent tissue, e.g. at the base of internodes in grasses.' },
    ta: { q: 'இடை ஆக்குத்திசுக்கள் மற்ற ஆக்குத்திசுக்களிலிருந்து வேறுபடக் காரணம், அவை', options: ['நிலையான திசுக்களுக்கு இடையே, இலை அல்லது கணுவிடைப் பகுதியின் அடியில் உள்ளன', 'வேர் நுனியில் மட்டும் காணப்படுகின்றன', 'பக்கவாட்டில் இணையாக அமைந்து பருமனைக் கூட்டுகின்றன', 'இறந்த செல்களால் ஆனவை'], explanation: 'இடை ஆக்குத்திசு நிலையான திசுக்களுக்கு இடையே அமைந்துள்ளது; எ.கா. புற்களின் கணுவிடைப் பகுதியின் அடியில்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V.2, p. 224', answer: 0,
    en: { q: 'A complex tissue is one that', options: ['is made of more than one type of cell working together as a unit', 'is made of only one type of cell', 'is made of dead cells only', 'keeps dividing throughout life'], explanation: 'Complex tissues such as xylem and phloem have several cell types working together.' },
    ta: { q: 'கூட்டுத்திசு என்பது', options: ['பலவகை செல்கள் ஒரு அலகாக இணைந்து செயல்படும் திசு', 'ஒரே வகை செல்களால் ஆன திசு', 'இறந்த செல்களால் மட்டும் ஆன திசு', 'வாழ்நாள் முழுவதும் பகுப்படையும் திசு'], explanation: 'சைலம், ஃபுளோயம் போன்ற கூட்டுத்திசுக்களில் பலவகை செல்கள் இணைந்து செயல்படுகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V.3, p. 224', answer: 0,
    en: { q: 'The most abundant muscular tissue in our body, attached to bones, and its function are', options: ['skeletal (striated) muscle – voluntary body movements', 'cardiac muscle – pumping blood', 'smooth muscle – moving food in the gut', 'skeletal muscle – involuntary rhythmic contraction'], explanation: 'Skeletal muscles are attached to bones, work under our control and bring about body movements.' },
    ta: { q: 'நம் உடலில் அதிக அளவில் காணப்படும், எலும்புகளுடன் இணைந்த தசைத் திசுவும் அதன் பணியும்', options: ['எலும்புச் சட்டகத் தசை (வரித் தசை) – விருப்பப்படி இயங்கும் உடல் அசைவுகள்', 'இதயத் தசை – இரத்தத்தை உந்துதல்', 'மிருதுவான தசை – உணவுக்குழாயில் உணவை நகர்த்துதல்', 'எலும்புச் சட்டகத் தசை – தன்னிச்சையற்ற சீரான சுருக்கம்'], explanation: 'எலும்புச் சட்டகத் தசைகள் எலும்புகளுடன் இணைந்து நம் கட்டுப்பாட்டில் இயங்கி உடல் அசைவுகளை ஏற்படுத்துகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V.4, p. 224', answer: 0,
    en: { q: 'Skeletal (supportive) connective tissue includes', options: ['cartilage and bone', 'blood and lymph', 'areolar and adipose tissue', 'tendons and ligaments'], explanation: 'Cartilage and bone form the endoskeleton, protect organs and help in locomotion.' },
    ta: { q: 'எலும்புச் சட்டக (ஆதார) இணைப்புத் திசுவில் அடங்குபவை', options: ['குருத்தெலும்பு, எலும்பு', 'இரத்தம், நிணநீர்', 'ஏரியோலார், கொழுப்புத் திசு', 'தசை நாண்கள், லிகமெண்ட்கள்'], explanation: 'குருத்தெலும்பும் எலும்பும் அகச்சட்டகத்தை உருவாக்கி உறுப்புகளைப் பாதுகாத்து இடப்பெயர்ச்சிக்கு உதவுகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V.6, p. 224', answer: 0,
    en: { q: 'In which stage of mitosis do the chromosomes line up on the equatorial plate?', options: ['Metaphase', 'Prophase', 'Anaphase', 'Telophase'], explanation: 'In metaphase the chromosomes arrange on the equator, each attached to a spindle fibre by its centromere.' },
    ta: { q: 'மைட்டாசிஸின் எந்த நிலையில் குரோமோசோம்கள் செல்லின் மையப்பகுதியில் (மையத் தட்டில்) அமைகின்றன?', options: ['மெட்டாநிலை', 'புரோநிலை', 'அனாநிலை', 'டீலோநிலை'], explanation: 'மெட்டாநிலையில் குரோமோசோம்கள் மையப்பகுதியில் ஒருங்கமைந்து, சென்ட்ரோமியர் மூலம் கதிர் இழைகளுடன் இணைகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.1, p. 224', answer: 0,
    en: { q: 'Permanent tissues are those in which', options: ['growth has stopped either completely or for the time being', 'cells keep dividing all the time', 'all cells are always dead', 'only chloroplasts are present'], explanation: 'Permanent tissues have stopped growing, though at times they may become meristematic again.' },
    ta: { q: 'நிலைத்த திசுக்கள் என்பவை', options: ['வளர்ச்சி முழுமையாகவோ தற்காலிகமாகவோ நின்றுவிட்ட திசுக்கள்', 'எப்போதும் பகுப்படையும் செல்களைக் கொண்டவை', 'எப்போதும் இறந்த செல்களைக் கொண்டவை', 'பசுங்கணிகங்களை மட்டும் கொண்டவை'], explanation: 'நிலையான திசுக்களில் வளர்ச்சி நின்றுவிட்டது; சில நேரங்களில் அவை மீண்டும் ஆக்குத்திசுவாக மாறலாம்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.2, p. 224', answer: 0,
    en: { q: 'Which element of xylem is living?', options: ['Xylem parenchyma', 'Tracheids', 'Xylem vessels', 'Xylem fibres'], explanation: 'Xylem parenchyma cells are living and store starch and fat; tracheids, vessels and fibres are dead.' },
    ta: { q: 'சைலத்தின் கூறுகளில் உயிருள்ளது எது?', options: ['சைலம் பாரன்கைமா', 'டிரக்கீடுகள்', 'சைலக்குழாய்கள்', 'சைலம் நார்கள்'], explanation: 'சைலம் பாரன்கைமா உயிருள்ள செல்கள், ஸ்டார்ச்சையும் கொழுப்பையும் சேமிக்கும்; மற்றவை இறந்த செல்கள்.' },
  },
  {
    difficulty: 'medium', source: '§18.1.1, p. 210', answer: 0,
    en: { q: 'Which is a characteristic of meristematic cells?', options: ['Thin walls, dense cytoplasm and large nuclei', 'Thick lignified walls and no protoplast', 'Large central vacuole and stored food', 'Large intercellular air spaces'], explanation: 'Meristematic cells are living, small and thin walled, with dense cytoplasm, large nuclei and small vacuoles; they do not store food.' },
    ta: { q: 'ஆக்குத்திசு செல்களின் பண்பு எது?', options: ['மெல்லிய சுவர், அடர்த்தியான சைட்டோபிளாசம், பெரிய உட்கரு', 'லிக்னின் படிந்த தடித்த சுவர், புரோட்டோபிளாசம் இல்லை', 'பெரிய மைய நுண்குமிழ், சேமிப்பு உணவு', 'பெரிய செல் இடைவெளிகள்'], explanation: 'ஆக்குத்திசு செல்கள் உயிருள்ளவை, சிறியவை, மெல்லிய சுவருடையவை; அடர்த்தியான சைட்டோபிளாசம், பெரிய உட்கரு கொண்டவை; உணவைச் சேமிப்பதில்லை.' },
  },
  {
    difficulty: 'medium', source: '§18.1.2, p. 211', answer: 0,
    en: { q: 'Parenchyma cells that develop chloroplasts when exposed to light are called', options: ['chlorenchyma', 'aerenchyma', 'collenchyma', 'sclereids'], explanation: 'Chlorenchyma is parenchyma with chloroplasts; aerenchyma has air spaces.' },
    ta: { q: 'ஒளியில் பசுங்கணிகங்களை உருவாக்கும் பாரன்கைமா செல்கள்', options: ['குளோரன்கைமா', 'ஏரன்கைமா', 'கோலன்கைமா', 'ஸ்கிளீரைடுகள்'], explanation: 'பசுங்கணிகங்கள் கொண்ட பாரன்கைமா குளோரன்கைமா; காற்று இடைவெளிகள் கொண்டது ஏரன்கைமா.' },
  },
  {
    difficulty: 'medium', source: '§18.1.2, p. 213', answer: 0,
    en: { q: 'Which statement correctly compares xylem and phloem?', options: ['Xylem conduction is mostly upward only; phloem conduction can be in both directions.', 'Xylem conducts food; phloem conducts water.', 'Both conduct only from leaves to roots.', 'Phloem conduction is one-way only; xylem conduction is in both directions.'], explanation: 'Xylem carries water and minerals mainly from roots upward; phloem carries food from leaves to storage organs or from storage organs to growing parts.' },
    ta: { q: 'சைலம், ஃபுளோயம் பற்றிய சரியான ஒப்பீடு எது?', options: ['சைலத்தில் கடத்தல் பெரும்பாலும் மேல்நோக்கி ஒரே திசையில்; ஃபுளோயத்தில் இரு திசையிலும் நிகழலாம்.', 'சைலம் உணவைக் கடத்துகிறது; ஃபுளோயம் நீரைக் கடத்துகிறது.', 'இரண்டும் இலையிலிருந்து வேருக்கு மட்டும் கடத்துகின்றன.', 'ஃபுளோயத்தில் ஒரே திசையில்; சைலத்தில் இரு திசையிலும் கடத்தல் நிகழ்கிறது.'], explanation: 'சைலம் நீர், கனிமங்களை வேரிலிருந்து மேல்நோக்கிக் கடத்துகிறது; ஃபுளோயம் உணவை இலையிலிருந்து சேமிப்பு உறுப்புக்கும் அங்கிருந்து வளரும் பகுதிகளுக்கும் கடத்துகிறது.' },
  },
  {
    difficulty: 'medium', source: '§18.2.1, p. 215', answer: 0,
    en: { q: 'The epithelium made of thin, flat cells that lines the alveoli of lungs and the buccal cavity is', options: ['squamous epithelium', 'cuboidal epithelium', 'columnar epithelium', 'glandular epithelium'], explanation: 'Squamous (pavement) epithelium forms the delicate lining of the buccal cavity and alveoli.' },
    ta: { q: 'நுரையீரல் காற்று நுண்ணறைகள், வாய்க்குழியின் உட்பரப்பை மூடியுள்ள, மெல்லிய தட்டையான செல்களாலான எபிதீலியம்', options: ['தட்டை எபிதீலியம்', 'கனசதுர எபிதீலியம்', 'தூண் எபிதீலியம்', 'சுரப்பு எபிதீலியம்'], explanation: 'தட்டை (பாவுதள) எபிதீலியம் வாய்க்குழி, காற்று நுண்ணறைகளின் மென்மையான உட்பரப்பை அமைக்கிறது.' },
  },
  {
    difficulty: 'medium', source: '§18.2.2, p. 216', answer: 0,
    en: { q: 'Adipose tissue acts as a shock absorber around the', options: ['kidneys and eyeballs', 'bones and joints', 'heart valves', 'blood capillaries'], explanation: 'Adipose tissue stores fat, cushions the kidneys and eyeballs and insulates the body.' },
    ta: { q: 'கொழுப்புத் திசு எவற்றைச் சுற்றி அதிர்ச்சி உறிஞ்சியாகச் செயல்படுகிறது?', options: ['சிறுநீரகங்கள், கண் விழிகள்', 'எலும்புகள், மூட்டுகள்', 'இதய வால்வுகள்', 'இரத்த நுண்நாளங்கள்'], explanation: 'கொழுப்புத் திசு கொழுப்பைச் சேமித்து, சிறுநீரகம், கண்விழிகளைப் பாதுகாத்து, உடல் வெப்பத்தைச் சீராக்குகிறது.' },
  },
  {
    difficulty: 'medium', source: '§18.2.2, p. 217 (Do you know?)', answer: 0,
    en: { q: 'A sprain is caused by excessive stretching of', options: ['ligaments', 'tendons', 'cartilage', 'nerves'], explanation: 'Ligaments connect bones to bones; over-stretching them causes a sprain.' },
    ta: { q: 'சுளுக்கு ஏற்படக் காரணம், எதன் மிகையான இழுப்பு?', options: ['லிகமெண்ட்கள் (தசைநார்கள்)', 'தசை நாண்கள்', 'குருத்தெலும்பு', 'நரம்புகள்'], explanation: 'எலும்புகளை இணைக்கும் லிகமெண்ட்கள் மிகையாக இழுக்கப்படும்போது சுளுக்கு ஏற்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: '§18.2.3, p. 218', answer: 0,
    en: { q: 'The intercalated disc is a distinguishing feature of', options: ['cardiac muscle', 'skeletal muscle', 'smooth muscle', 'nervous tissue'], explanation: 'The branches of cardiac muscle fibres join to form intercalated discs, unique to heart muscle.' },
    ta: { q: 'இடைச்செருகுத்தட்டு எதன் தனிச்சிறப்புப் பண்பு?', options: ['இதயத் தசை', 'எலும்புச் சட்டகத் தசை', 'மிருதுவான தசை', 'நரம்புத் திசு'], explanation: 'இதயத் தசை நார்களின் கிளைகள் இணைந்து இடைச்செருகுத்தட்டுகளை உருவாக்குகின்றன; இது இதயத் தசைக்கு மட்டுமே உரியது.' },
  },
  {
    difficulty: 'medium', source: '§18.3.1, p. 219', answer: 0, imageUrl: `${IMG}/amitosis.png`,
    en: { q: 'The figure shows a nucleus elongating and splitting by a constriction, followed by division of the cytoplasm. This simplest mode of cell division is', options: ['amitosis', 'mitosis', 'meiosis', 'cytokinesis II'], explanation: 'In amitosis (direct division) the nucleus elongates and is divided by a deepening constriction, then the cytoplasm divides.' },
    ta: { q: 'படத்தில் உட்கரு நீண்டு, இடுக்கம் ஏற்பட்டு இரண்டாகப் பிரிந்து, பின் சைட்டோபிளாசம் பிரிகிறது. இந்த எளிய செல் பகுப்பு முறை', options: ['ஏமைட்டாசிஸ்', 'மைட்டாசிஸ்', 'மியாசிஸ்', 'சைட்டோபிளாச பகுப்பு – II'], explanation: 'ஏமைட்டாசிஸில் (நேரடி பகுப்பு) உட்கரு நீண்டு, இடுக்கம் ஆழமாகி இரண்டாகப் பிரிகிறது; பின் சைட்டோபிளாசம் பிரிகிறது.' },
  },
  {
    difficulty: 'medium', source: '§18.2.4, p. 219 (Info bit)', answer: 0,
    en: { q: 'Red blood cells last for about', options: ['120 days', '5 days', '2 weeks', '10 years'], explanation: 'RBCs live about 120 days; gut epithelial cells last about 5 days and bone cells are replaced about every 10 years.' },
    ta: { q: 'இரத்தச் சிவப்பணுக்களின் வாழ்நாள் சுமார்', options: ['120 நாள்கள்', '5 நாள்கள்', '2 வாரங்கள்', '10 ஆண்டுகள்'], explanation: 'சிவப்பணுக்கள் சுமார் 120 நாள்கள் வாழ்கின்றன; குடல் எபிதீலிய செல்கள் 5 நாள்கள்; எலும்பு செல்கள் 10 ஆண்டுக்கு ஒருமுறை புதுப்பிக்கப்படுகின்றன.' },
  },
  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise II, p. 223', answer: 0,
    en: { q: 'Match:\n1. Sclereids  2. Chloroplast  3. Simple tissue  4. Companion cell  5. Tracheids\na. Chlorenchyma  b. Sclerenchyma  c. Collenchyma  d. Xylem  e. Phloem', options: ['1-b, 2-a, 3-c, 4-e, 5-d', '1-a, 2-b, 3-c, 4-e, 5-d', '1-b, 2-a, 3-c, 4-d, 5-e', '1-c, 2-a, 3-b, 4-e, 5-d'], explanation: 'Sclereids are sclerenchyma, chloroplasts make chlorenchyma, collenchyma is a simple tissue, companion cells are in phloem and tracheids in xylem.' },
    ta: { q: 'பொருத்துக:\n1. ஸ்கிளீரைடுகள்  2. பசுங்கணிகம்  3. எளிய திசு  4. துணை செல்  5. டிரக்கீடுகள்\na. குளோரன்கைமா  b. ஸ்கிளீரன்கைமா  c. கோலன்கைமா  d. சைலம்  e. ஃபுளோயம்', options: ['1-b, 2-a, 3-c, 4-e, 5-d', '1-a, 2-b, 3-c, 4-e, 5-d', '1-b, 2-a, 3-c, 4-d, 5-e', '1-c, 2-a, 3-b, 4-e, 5-d'], explanation: 'ஸ்கிளீரைடுகள் ஸ்கிளீரன்கைமா; பசுங்கணிகம் குளோரன்கைமா; கோலன்கைமா எளிய திசு; துணை செல் ஃபுளோயம்; டிரக்கீடுகள் சைலம்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise V.5, p. 224', answer: 0,
    en: { q: 'Why must gametes be produced by meiosis during sexual reproduction?', options: ['So that haploid gametes fuse to restore the diploid number and keep the chromosome number constant', 'So that gametes have double the parent chromosome number', 'So that gametes are identical to the parent cell', 'So that gametes can repair damaged tissues'], explanation: 'Meiosis halves the chromosome number (2n to n); fertilisation restores 2n, keeping it constant across generations, and crossing over adds variation.' },
    ta: { q: 'பாலினப் பெருக்கத்தின்போது கேமீட்டுகள் ஏன் மியாசிஸ் மூலம் உருவாக வேண்டும்?', options: ['ஒற்றைமய கேமீட்டுகள் இணைந்து இரட்டைமய நிலை மீண்டு, குரோமோசோம் எண்ணிக்கை மாறாமல் இருக்க', 'கேமீட்டுகள் தாய் செல்லைவிட இருமடங்கு குரோமோசோம்களைப் பெற', 'கேமீட்டுகள் தாய் செல்லை ஒத்திருக்க', 'கேமீட்டுகள் காயமடைந்த திசுக்களைச் சீரமைக்க'], explanation: 'மியாசிஸ் குரோமோசோம் எண்ணிக்கையை 2n-இலிருந்து n ஆகக் குறைக்கிறது; கருவுறுதலில் 2n மீண்டும் கிடைத்து எண்ணிக்கை மாறாமல் உள்ளது; குறுக்கே கலத்தல் வேறுபாடுகளைத் தருகிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VI.3, p. 224', answer: 0,
    en: { q: 'Which is a correct difference between mitosis and meiosis?', options: ['Mitosis gives two diploid daughter cells; meiosis gives four haploid daughter cells.', 'Mitosis occurs in reproductive cells; meiosis occurs in somatic cells.', 'Mitosis has two divisions; meiosis has a single division.', 'Mitosis gives non-identical cells; meiosis gives identical cells.'], explanation: 'Mitosis (somatic cells, one division) gives two identical 2n cells; meiosis (reproductive cells, two divisions) gives four n cells.' },
    ta: { q: 'மைட்டாசிஸ், மியாசிஸ் இடையிலான சரியான வேறுபாடு எது?', options: ['மைட்டாசிஸில் இரு இரட்டைமய சேய் செல்கள்; மியாசிஸில் நான்கு ஒற்றைமய சேய் செல்கள்.', 'மைட்டாசிஸ் இனச்செல்களில்; மியாசிஸ் உடல் செல்களில் நிகழ்கிறது.', 'மைட்டாசிஸில் இரு பகுப்புகள்; மியாசிஸில் ஒரே பகுப்பு.', 'மைட்டாசிஸில் ஒத்திராத செல்கள்; மியாசிஸில் ஒத்த செல்கள்.'], explanation: 'மைட்டாசிஸ் (உடல் செல்கள், ஒரு பகுப்பு) இரு ஒத்த 2n செல்களையும், மியாசிஸ் (இனச்செல்கள், இரு பகுப்புகள்) நான்கு n செல்களையும் தருகிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VII.1 (HOTS), p. 224', answer: 0,
    en: { q: 'What would happen if all the blood platelets were removed from the blood?', options: ['Blood would not clot, so even a small wound would bleed heavily', 'Oxygen could no longer be carried to tissues', 'The body could no longer fight germs at all', 'Blood would become solid in the vessels'], explanation: 'Platelets play the key role in blood clotting; without them bleeding would not stop.' },
    ta: { q: 'இரத்தத்திலிருந்து அனைத்து இரத்தத் தட்டுகளையும் நீக்கினால் என்ன விளைவு ஏற்படும்?', options: ['இரத்தம் உறையாது; சிறு காயத்திலும் அதிக இரத்தப்போக்கு ஏற்படும்', 'திசுக்களுக்கு ஆக்சிஜன் கடத்தப்படாது', 'உடல் கிருமிகளை எதிர்க்கவே இயலாது', 'இரத்தநாளங்களில் இரத்தம் திடமாகிவிடும்'], explanation: 'இரத்தம் உறைதலில் இரத்தத் தட்டுகள் முக்கியப் பங்கு வகிக்கின்றன; அவை இல்லையெனில் இரத்தப்போக்கு நிற்காது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VII.2 (HOTS), p. 224', answer: 0,
    en: { q: 'Which components of blood are not true cells, and why?', options: ['Platelets and mature mammalian RBCs, because they have no nucleus', 'WBCs, because they show amoeboid movement', 'Lymphocytes, because they lack granules', 'Neutrophils, because their nucleus is irregular'], explanation: 'Mature mammalian RBCs lose their nucleus and platelets are anucleate fragments of megakaryocytes, so neither is a complete cell.' },
    ta: { q: 'இரத்தத்தில் உண்மையான செல்கள் இல்லாதவை எவை? ஏன்?', options: ['இரத்தத் தட்டுகளும் முதிர்ந்த பாலூட்டி சிவப்பணுக்களும்; அவற்றுக்கு உட்கரு இல்லை', 'வெள்ளையணுக்கள்; அவை அமீபா போல இயங்குகின்றன', 'லிம்போசைட்டுகள்; அவற்றில் துகள்கள் இல்லை', 'நியூட்ரோஃபில்கள்; அவற்றின் உட்கரு ஒழுங்கற்றது'], explanation: 'முதிர்ந்த பாலூட்டி சிவப்பணுக்களுக்கு உட்கரு இல்லை; இரத்தத் தட்டுகள் மெகாகேரியோசைட்டுகளின் உட்கருவற்ற துண்டுகள்; எனவே இவை முழுமையான செல்கள் அல்ல.' },
  },
  {
    difficulty: 'hard', source: '§18.1.2, p. 214', answer: 0,
    en: { q: 'Which statements about meristematic and permanent tissues are correct?\n(i) Meristematic cells have no intercellular spaces.\n(ii) Permanent cells usually have a large central vacuole.\n(iii) Meristematic cells do not normally divide.\n(iv) Permanent cells have a thick cell wall.', options: ['(i), (ii) and (iv)', '(i), (iii) and (iv)', '(ii) and (iii) only', '(i), (ii) and (iii)'], explanation: 'Meristematic cells grow and divide regularly; it is permanent cells that do not normally divide. The other three are correct (Table 18.2).' },
    ta: { q: 'ஆக்குத்திசு, நிலையான திசு பற்றிய சரியான கூற்றுகள் எவை?\n(i) ஆக்குத்திசு செல்களுக்கிடையே இடைவெளி இல்லை.\n(ii) நிலையான செல்களில் பொதுவாகப் பெரிய மைய நுண்குமிழ் உண்டு.\n(iii) ஆக்குத்திசு செல்கள் சாதாரணமாகப் பகுப்படைவதில்லை.\n(iv) நிலையான செல்களின் சுவர் தடித்தது.', options: ['(i), (ii), (iv)', '(i), (iii), (iv)', '(ii), (iii) மட்டும்', '(i), (ii), (iii)'], explanation: 'ஆக்குத்திசு செல்கள் தொடர்ந்து வளர்ந்து பகுப்படையும்; பகுப்படையாதவை நிலையான செல்கள். மற்ற மூன்றும் சரி (அட்டவணை 18.2).' },
  },
  {
    difficulty: 'hard', source: '§18.1.2, p. 212', answer: 0,
    en: { q: 'Assertion: Sclerenchyma cells are dead at maturity.\nReason: Their walls are thick and often lignified, and they lose their living protoplast.', options: AR_EN, explanation: 'Both are true, and the heavily lignified walls with no protoplast are why mature sclerenchyma cells are dead.' },
    ta: { q: 'கூற்று: முதிர்ந்த ஸ்கிளீரன்கைமா செல்கள் இறந்த செல்கள்.\nகாரணம்: அவற்றின் சுவர் லிக்னினால் ஆன தடித்த சுவர்; அவை உயிருள்ள புரோட்டோபிளாசத்தை இழக்கின்றன.', options: AR_TA, explanation: 'இரண்டும் சரி; லிக்னின் படிந்த தடித்த சுவரும் புரோட்டோபிளாசம் இல்லாததுமே அவை இறந்த செல்களாக இருப்பதற்குக் காரணம்.' },
  },
  {
    difficulty: 'hard', source: '§18.2.4, p. 219 (Do you know?)', answer: 0,
    en: { q: 'Assertion: Nerve cells do not undergo cell division.\nReason: Centrioles are absent in nerve cells.', options: AR_EN, explanation: 'The book explains that nerve cells do not divide because they lack centrioles.' },
    ta: { q: 'கூற்று: நரம்பு செல்கள் செல் பகுப்படைவதில்லை.\nகாரணம்: நரம்பு செல்களில் சென்ட்ரியோல்கள் இல்லை.', options: AR_TA, explanation: 'சென்ட்ரியோல்கள் இல்லாததால் நரம்பு செல்கள் பகுப்படைவதில்லை என்று பாடநூல் விளக்குகிறது.' },
  },
  {
    difficulty: 'hard', source: '§18.2.3, p. 218', answer: 3,
    en: { q: 'Assertion: Smooth muscles are called voluntary muscles.\nReason: Smooth muscle fibres have no striations.', options: AR_EN, explanation: 'Smooth muscles are involuntary, so the assertion is false; the reason (no striations, hence non-striated) is true.' },
    ta: { q: 'கூற்று: மிருதுவான தசைகள் இயக்கு (விருப்பப்படி இயங்கும்) தசைகள் என அழைக்கப்படுகின்றன.\nகாரணம்: மிருதுவான தசை நார்களில் வரிகள் இல்லை.', options: AR_TA, explanation: 'மிருதுவான தசைகள் தானே இயங்கும் தசைகள்; எனவே கூற்று தவறு. வரிகள் இல்லாததால் வரியற்ற தசை என்பது (காரணம்) சரி.' },
  },
  {
    difficulty: 'hard', source: '§18.3.1, p. 220', answer: 0,
    en: { q: 'Arrange the phases of karyokinesis in mitosis in the correct order.', options: ['Prophase → Metaphase → Anaphase → Telophase', 'Metaphase → Prophase → Anaphase → Telophase', 'Prophase → Anaphase → Metaphase → Telophase', 'Telophase → Anaphase → Metaphase → Prophase'], explanation: 'Karyokinesis has four phases: prophase, metaphase, anaphase and telophase, followed by cytokinesis.' },
    ta: { q: 'மைட்டாசிஸில் உட்கருப் பகுப்பின் நிலைகளைச் சரியான வரிசையில் அமைக்க.', options: ['புரோநிலை → மெட்டாநிலை → அனாநிலை → டீலோநிலை', 'மெட்டாநிலை → புரோநிலை → அனாநிலை → டீலோநிலை', 'புரோநிலை → அனாநிலை → மெட்டாநிலை → டீலோநிலை', 'டீலோநிலை → அனாநிலை → மெட்டாநிலை → புரோநிலை'], explanation: 'உட்கருப் பகுப்பில் புரோநிலை, மெட்டாநிலை, அனாநிலை, டீலோநிலை என நான்கு நிலைகள்; அதன் பின் சைட்டோபிளாச பகுப்பு.' },
  },
  {
    difficulty: 'hard', source: '§18.3.1, p. 221', answer: 0,
    en: { q: 'Crossing over, in which broken segments of chromatids are exchanged at the chiasmata, takes place during', options: ['pachytene of prophase I', 'leptotene of prophase I', 'metaphase II', 'anaphase of mitosis'], explanation: 'In pachytene, bivalents form tetrads, chiasmata appear and chromatid segments may be interchanged, giving genetic recombination.' },
    ta: { q: 'கயாஸ்மாக்களில் குரோமாட்டிட் துண்டுகள் பரிமாறப்படும் குறுக்கே கலத்தல் நிகழும் நிலை', options: ['புரோநிலை I-இன் பாக்கிட்டீன்', 'புரோநிலை I-இன் லெப்டோட்டீன்', 'மெட்டாநிலை II', 'மைட்டாசிஸின் அனாநிலை'], explanation: 'பாக்கிட்டீனில் இருவலன்கள் நான்கு குரோமாட்டிட்களாகத் தோன்றி, கயாஸ்மாக்களில் துண்டுகள் பரிமாறப்பட்டு மரபியல் மறுசேர்க்கை நிகழ்கிறது.' },
  },
  {
    difficulty: 'hard', source: '§18.3.1, p. 221', answer: 0,
    en: { q: 'The pairing of homologous chromosomes, called synapsis, begins in', options: ['zygotene', 'leptotene', 'diplotene', 'diakinesis'], explanation: 'In zygotene (zygon = adjoining) homologous chromosomes approach each other and pair: synapsis.' },
    ta: { q: 'ஒத்திசைவு குரோமோசோம்கள் ஜோடி சேரும் ஒன்றி ஒருங்கல் (சினாப்சிஸ்) தொடங்கும் நிலை', options: ['சைகோட்டீன்', 'லெப்டோட்டீன்', 'டிப்ளோட்டீன்', 'டையாகைனசிஸ்'], explanation: 'சைகோட்டீனில் ஒத்திசைவு குரோமோசோம்கள் அருகருகே வந்து ஜோடி சேர்கின்றன: ஒன்றி ஒருங்கல்.' },
  },
  {
    difficulty: 'hard', source: '§18.3.1, p. 221–222', answer: 0,
    en: { q: 'A cell with 2n = 46 chromosomes undergoes meiosis. How many cells are formed and how many chromosomes does each have?', options: ['4 cells with 23 chromosomes each', '2 cells with 46 chromosomes each', '4 cells with 46 chromosomes each', '2 cells with 23 chromosomes each'], explanation: 'Meiosis gives four haploid cells; n = 46 ÷ 2 = 23. Two cells with 46 each would be the result of mitosis.' },
    ta: { q: '2n = 46 குரோமோசோம்கள் கொண்ட ஒரு செல் மியாசிஸ் பகுப்படைகிறது. எத்தனை செல்கள் உருவாகும்? ஒவ்வொன்றிலும் எத்தனை குரோமோசோம்கள்?', options: ['4 செல்கள், ஒவ்வொன்றிலும் 23', '2 செல்கள், ஒவ்வொன்றிலும் 46', '4 செல்கள், ஒவ்வொன்றிலும் 46', '2 செல்கள், ஒவ்வொன்றிலும் 23'], explanation: 'மியாசிஸ் நான்கு ஒற்றைமய செல்களைத் தரும்; n = 46 ÷ 2 = 23. இரு செல்கள், ஒவ்வொன்றிலும் 46 என்பது மைட்டாசிஸின் விளைவு.' },
  },
  {
    difficulty: 'hard', source: '§18.2.2, p. 218', answer: 0,
    en: { q: 'Which statements about blood are correct?\n(i) Mature mammalian RBCs lack a nucleus.\n(ii) Lymphocytes and monocytes are granulocytes.\n(iii) Platelets are fragments of megakaryocytes.\n(iv) Plasma is the fluid matrix of blood.', options: ['(i), (iii) and (iv)', '(i), (ii) and (iii)', '(ii) and (iv) only', '(ii), (iii) and (iv)'], explanation: 'Lymphocytes and monocytes are agranulocytes; neutrophils, basophils and eosinophils are the granulocytes. The other three statements are correct.' },
    ta: { q: 'இரத்தம் பற்றிய சரியான கூற்றுகள் எவை?\n(i) முதிர்ந்த பாலூட்டி சிவப்பணுக்களில் உட்கரு இல்லை.\n(ii) லிம்போசைட்டுகளும் மோனோசைட்டுகளும் துகள் உள்ளவை.\n(iii) இரத்தத் தட்டுகள் மெகாகேரியோசைட்டுகளின் துண்டுகள்.\n(iv) பிளாஸ்மா இரத்தத்தின் திரவ மேட்ரிக்ஸ்.', options: ['(i), (iii), (iv)', '(i), (ii), (iii)', '(ii), (iv) மட்டும்', '(ii), (iii), (iv)'], explanation: 'லிம்போசைட்டுகளும் மோனோசைட்டுகளும் துகளற்றவை; நியூட்ரோஃபில், பேசோஃபில், ஈசினோஃபில் ஆகியவையே துகள் உள்ளவை. மற்ற மூன்றும் சரி.' },
  },
  {
    difficulty: 'hard', source: '§18.2.1, p. 215', answer: 0,
    en: { q: 'A tissue sample shows many layers of cells, with only the deepest layer resting on the basement membrane. It protects against mechanical and chemical stress. The tissue is', options: ['compound (stratified) epithelium', 'simple squamous epithelium', 'ciliated epithelium', 'cuboidal epithelium'], explanation: 'Compound epithelium has more than one layer and gives a stratified appearance; it covers the skin, buccal cavity and pharynx.' },
    ta: { q: 'ஒரு திசு மாதிரியில் பல அடுக்கு செல்கள் உள்ளன; ஆழமான அடுக்கு மட்டும் அடித்தளச் சவ்வின் மீது உள்ளது. இது இயந்திர, வேதி அழுத்தங்களிலிருந்து பாதுகாக்கிறது. இத்திசு', options: ['கூட்டு (அடுக்கு) எபிதீலியம்', 'எளிய தட்டை எபிதீலியம்', 'குறுயிழை எபிதீலியம்', 'கனசதுர எபிதீலியம்'], explanation: 'கூட்டு எபிதீலியம் பல அடுக்குகளைக் கொண்டு அடுக்கு அமைப்பைத் தருகிறது; தோல், வாய்க்குழி, தொண்டையை மூடுகிறது.' },
  },
  {
    difficulty: 'hard', source: '§18.3.1, p. 222', answer: 0,
    en: { q: 'Why is the first meiotic division called heterotypic?', options: ['The daughter cells differ from the parent cell in chromosome number', 'The daughter cells are identical to the parent cell', 'It occurs only in somatic cells', 'It produces four cells directly'], explanation: 'The first division turns one diploid cell into two haploid cells, so the chromosome number differs from the parent; the second (homotypic) division keeps it the same.' },
    ta: { q: 'முதல் மியாசிஸ் பகுப்பு ஹெட்டிரோடைப்பிக் பகுப்பு என அழைக்கப்படுவது ஏன்?', options: ['சேய் செல்களின் குரோமோசோம் எண்ணிக்கை தாய் செல்லிலிருந்து வேறுபடுகிறது', 'சேய் செல்கள் தாய் செல்லை ஒத்திருக்கின்றன', 'இது உடல் செல்களில் மட்டும் நிகழ்கிறது', 'இது நேரடியாக நான்கு செல்களை உருவாக்குகிறது'], explanation: 'முதல் பகுப்பில் ஒரு இரட்டைமய செல் இரு ஒற்றைமய செல்களாகிறது; எனவே குரோமோசோம் எண்ணிக்கை வேறுபடுகிறது. இரண்டாம் (ஹோமோடைப்பிக்) பகுப்பில் மாறாது.' },
  },
];
