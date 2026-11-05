// Tamil Nadu State Board, 9th Science, Unit 16 – Applied Chemistry (பயன்பாட்டு வேதியியல்).
// source = printed page of the English-medium book.
import { BankQuestion, AR_EN, AR_TA } from './types';

const IMG = '/content/9/state_board/science/16';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.1, p. 196', answer: 0,
    en: { q: 'One nanometre is', options: ['10⁻⁹ metre', '10⁻⁷ metre', '10⁻⁸ metre', '10⁻⁶ metre'], explanation: '1 nm = 1/1,000,000,000 m = 10⁻⁹ m.' },
    ta: { q: 'ஒரு நானோ மீட்டர் என்பது', options: ['10⁻⁹ மீட்டர்', '10⁻⁷ மீட்டர்', '10⁻⁸ மீட்டர்', '10⁻⁶ மீட்டர்'], explanation: '1 நானோ மீட்டர் = 1/1,000,000,000 மீட்டர் = 10⁻⁹ மீட்டர்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.2, p. 196', answer: 0,
    en: { q: 'The antibiotic penicillin is obtained from', options: ['a microorganism', 'a plant', 'an animal', 'sunlight'], explanation: 'Penicillin comes from the mould Penicillium notatum, a microorganism (Table 16.1).' },
    ta: { q: 'பென்சிலின் எனப்படும் நுண்ணுயிர் எதிரி எதிலிருந்து பெறப்படுகிறது?', options: ['நுண்ணுயிரிகள்', 'தாவரங்கள்', 'விலங்குகள்', 'சூரிய ஒளி'], explanation: 'பென்சிலின், பென்சிலியம் நொடேட்டம் என்ற பூஞ்சையிலிருந்து (நுண்ணுயிர்) பெறப்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.7, p. 197', answer: 0,
    en: { q: 'Which type of food protects us from deficiency diseases?', options: ['Vitamins', 'Carbohydrates', 'Proteins', 'Fats'], explanation: 'Vitamins and minerals are protective foods; proteins build the body and carbohydrates and fats give energy.' },
    ta: { q: 'குறைபாட்டு நோய்களிலிருந்து நம்மைப் பாதுகாக்கும் உணவு வகை எது?', options: ['வைட்டமின்கள்', 'கார்போஹைட்ரேட்', 'புரதங்கள்', 'கொழுப்புகள்'], explanation: 'வைட்டமின்களும் கனிமங்களும் பாதுகாப்பு உணவுகள்; புரதம் உடல் வளர்ச்சிக்கும், கார்போஹைட்ரேட், கொழுப்பு ஆற்றலுக்கும் உதவும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.8, p. 197', answer: 0,
    en: { q: 'Radiochemistry deals with', options: ['isotopes', 'oxidants', 'batteries', 'nanoparticles'], explanation: 'Radiochemistry is the study of the chemistry of radioactive and non-radioactive isotopes.' },
    ta: { q: 'கதிரியக்க வேதியியலுடன் தொடர்புள்ளது எது?', options: ['ஐசோடோப்புகள்', 'ஆக்சிஜனேற்றிகள்', 'மின்கலங்கள்', 'நானோதுகள்கள்'], explanation: 'கதிரியக்க வேதியியல் என்பது கதிரியக்க மற்றும் கதிரியக்கமற்ற ஐசோடோப்புகளின் வேதியியல் ஆகும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.10, p. 197', answer: 0,
    en: { q: 'Chlorinated hydrocarbons are used as', options: ['pesticides', 'fertilizers', 'food colourants', 'preservatives'], explanation: 'Chlorinated hydrocarbons, organophosphates and carbamates are used as pesticides and insecticides.' },
    ta: { q: 'குளோரினேற்றப்பட்ட ஹைட்ரோ கார்பன்கள் எவ்வாறு பயன்படுத்தப்படுகின்றன?', options: ['பூச்சிக்கொல்லிகள்', 'உரங்கள்', 'உணவு நிறமிகள்', 'உணவுப் பதப்படுத்திகள்'], explanation: 'குளோரினேற்றப்பட்ட ஹைட்ரோ கார்பன்கள், ஆர்கனோ பாஸ்பேட்டுகள், கார்பமேட்டுகள் பூச்சிக்கொல்லிகளாகப் பயன்படுகின்றன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.2, p. 197', answer: 0,
    en: { q: 'Painkiller drugs are called _____.', options: ['analgesics', 'antipyretics', 'antiseptics', 'antacids'], explanation: 'Analgesics relieve pain without loss of consciousness; they are called pain killers.' },
    ta: { q: 'வலி மருந்துகள் _____ என்று அழைக்கப்படுகின்றன.', options: ['வலி நிவாரணிகள்', 'காய்ச்சல் நிவாரணிகள்', 'புரைத்தடுப்பான்கள்', 'அமில நீக்கிகள்'], explanation: 'சுயநினைவை இழக்காமல் எல்லா வகை வலிகளையும் போக்கும் மருந்துகள் வலி நிவாரணிகள்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.3, p. 197', answer: 0,
    en: { q: 'Indigo is a _____ dye.', options: ['vat', 'acid', 'direct', 'mordant'], explanation: 'Indigo is applied to cotton in a large vessel called a vat, so it is a vat dye.' },
    ta: { q: 'இண்டிகோ ஒரு _____ சாயம் ஆகும்.', options: ['தொட்டிச்', 'அமிலச்', 'நேரடிச்', 'மறைமுகச்'], explanation: 'இண்டிகோ பெரிய தொட்டியில் பருத்தியில் ஏற்றப்படுவதால் அது தொட்டிச் சாயம்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.5, p. 197', answer: 0,
    en: { q: '_____ is a chemical used in fingerprint analysis.', options: ['Ninhydrin', 'Iodoform', 'Chloroform', 'Saccharin'], explanation: 'Ninhydrin turns purple with amino acids in sweat and makes hidden (occult) fingerprints visible.' },
    ta: { q: 'கைரேகைப் பதிவைக் கண்டறியப் பயன்படும் வேதிப்பொருள் _____ ஆகும்.', options: ['நின்ஹைட்ரின்', 'அயோடோஃபார்ம்', 'குளோரோஃபார்ம்', 'சாக்கரின்'], explanation: 'நின்ஹைட்ரின் வியர்வையில் உள்ள அமினோ அமிலங்களுடன் வினைபுரிந்து ஊதா நிறமாக மாறி மறைந்த கைரேகைகளைக் காட்டுகிறது.' },
  },
  {
    difficulty: 'easy', source: '§16.2.1, p. 187', answer: 0,
    en: { q: "The word 'drug' comes from the French word 'droque', which means", options: ['a dry herb', 'a healing liquid', 'a bitter root', 'a fine powder'], explanation: "The French word 'droque' means a dry herb." },
    ta: { q: 'டிரக் (Drug) என்ற சொல் பெறப்பட்ட டிரக்கு (Droque) என்ற பிரெஞ்சுச் சொல்லின் பொருள்', options: ['காய்ந்த மூலிகை', 'குணமாக்கும் திரவம்', 'கசப்பான வேர்', 'மெல்லிய பொடி'], explanation: 'டிரக்கு என்ற பிரெஞ்சுச் சொல்லுக்கு காய்ந்த மூலிகை என்று பொருள்.' },
  },
  {
    difficulty: 'easy', source: '§16.2.4, p. 187', answer: 0,
    en: { q: 'Drugs which cause loss of sensation are called', options: ['anaesthetics', 'analgesics', 'antipyretics', 'antacids'], explanation: 'Anaesthetics cause loss of sensation and are given to patients during surgery.' },
    ta: { q: 'உணர்வை இழக்கச் செய்யும் மருந்துகள்', options: ['மயக்க மருந்துகள்', 'வலி நிவாரணிகள்', 'காய்ச்சல் நிவாரணிகள்', 'அமில நீக்கிகள்'], explanation: 'உணர்வை இழக்கச் செய்யும் மருந்துகள் மயக்க மருந்துகள்; அறுவை சிகிச்சையின்போது வழங்கப்படுகின்றன.' },
  },
  {
    difficulty: 'easy', source: '§16.2.4, p. 188', answer: 0,
    en: { q: 'Antipyretics are used to', options: ['reduce fever', 'cause loss of sensation', 'clean wounds', 'relieve acidity in the stomach'], explanation: 'Antipyretics bring the body temperature down to normal; e.g. paracetamol.' },
    ta: { q: 'காய்ச்சல் நிவாரணிகள் எதற்குப் பயன்படுகின்றன?', options: ['காய்ச்சலைக் குறைக்க', 'உணர்வை இழக்கச் செய்ய', 'காயங்களைச் சுத்தம் செய்ய', 'வயிற்று எரிச்சலைப் போக்க'], explanation: 'காய்ச்சல் நிவாரணிகள் உடல் வெப்பநிலையை இயல்பு நிலைக்குக் குறைக்கின்றன; எ.கா. பாராசிட்டமால்.' },
  },
  {
    difficulty: 'easy', source: '§16.2.4, p. 189', answer: 0,
    en: { q: 'The first antibiotic, penicillin, was discovered by', options: ['Alexander Fleming', 'Louis Pasteur', 'Robert Koch', 'Edward Jenner'], explanation: 'Alexander Fleming discovered penicillin in 1929 from the mould Penicillium notatum.' },
    ta: { q: 'முதல் நுண்ணுயிர் எதிரியான பென்சிலினைக் கண்டறிந்தவர்', options: ['அலெக்சாண்டர் ஃபிளமிங்', 'லூயி பாஸ்டர்', 'ராபர்ட் கோச்', 'எட்வர்ட் ஜென்னர்'], explanation: '1929 ஆம் ஆண்டு அலெக்சாண்டர் ஃபிளமிங் பென்சிலியம் நொடேட்டம் பூஞ்சையிலிருந்து பென்சிலினைக் கண்டறிந்தார்.' },
  },
  {
    difficulty: 'easy', source: '§16.2.4, p. 189', answer: 0,
    en: { q: 'Antacids mainly contain', options: ['magnesium and aluminium hydroxides', 'sodium chloride and sugar', 'iodoform and phenol', 'quinine and chloroquine'], explanation: 'Antacids contain magnesium and aluminium hydroxides along with flavour and colour.' },
    ta: { q: 'அமில நீக்கிகளில் முக்கியமாக உள்ளவை', options: ['மெக்னீசியம், அலுமினியம் ஹைட்ராக்சைடுகள்', 'சோடியம் குளோரைடு, சர்க்கரை', 'அயோடோஃபார்ம், ஃபீனால்', 'குயினைன், குளோரோகுயின்'], explanation: 'அமில நீக்கிகளில் மெக்னீசியம் அல்லது அலுமினியம் ஹைட்ராக்சைடுகளுடன் நிறமிகளும் நறுமணப் பொருள்களும் சேர்க்கப்படுகின்றன.' },
  },
  {
    difficulty: 'easy', source: '§16.3.1, p. 189', answer: 0,
    en: { q: 'Solutions of ions or molten salts which can conduct electricity are called', options: ['electrolytes', 'electrodes', 'salt bridges', 'catalysts'], explanation: 'An electrolyte is a solution of ions or a molten salt that conducts electricity.' },
    ta: { q: 'மின்சாரத்தைக் கடத்தக்கூடிய அயனிகளின் கரைசல் அல்லது உருகிய உப்புகள்', options: ['மின்பகுளிகள்', 'மின்முனைகள்', 'உப்புப்பாலங்கள்', 'வினையூக்கிகள்'], explanation: 'மின்பகுளி என்பது மின்சாரத்தைக் கடத்தக்கூடிய அயனிக் கரைசல் அல்லது உருகிய உப்பு.' },
  },
  {
    difficulty: 'easy', source: '§16.5, p. 192', answer: 0,
    en: { q: 'Organic compounds that are used as colourants are called', options: ['dyes', 'mordants', 'lakes', 'antioxidants'], explanation: 'Organic colourants are dyes; inorganic ones like soot or hematite are pigments.' },
    ta: { q: 'நிறமூட்டிகளாகப் பயன்படும் கரிமச் சேர்மங்கள்', options: ['சாயங்கள்', 'நிறமூன்றிகள்', 'லேக்குகள்', 'ஆக்சிஜனேற்ற எதிர்ப்பொருள்கள்'], explanation: 'நிறமூட்டிகளாகப் பயன்படும் கரிமச் சேர்மங்கள் சாயங்கள் எனப்படும்.' },
  },
  {
    difficulty: 'easy', source: '§16.6.2, p. 193', answer: 0,
    en: { q: 'Body building foods, needed for physical growth, are', options: ['proteins', 'carbohydrates', 'fats', 'minerals'], explanation: 'Proteins are body building foods; carbohydrates and fats give energy.' },
    ta: { q: 'உடல் வளர்ச்சிக்குத் தேவையான உடல் வளர்ப்பு உணவுகள்', options: ['புரதங்கள்', 'கார்போஹைட்ரேட்டுகள்', 'கொழுப்புகள்', 'கனிமங்கள்'], explanation: 'புரதங்கள் உடல் வளர்ப்பு உணவுகள்; கார்போஹைட்ரேட், கொழுப்பு ஆற்றல் தரும் உணவுகள்.' },
  },
  {
    difficulty: 'easy', source: '§16.6.2, p. 194 (Do you know?)', answer: 0,
    en: { q: 'About what fraction of the global population works in agriculture?', options: ['40%', '10%', '25%', '75%'], explanation: 'About 40% of the world population works in agriculture, the single largest employment.' },
    ta: { q: 'உலக மக்கள் தொகையில் ஏறத்தாழ எத்தனை சதவீதம் பேர் வேளாண்மையில் பணிபுரிகின்றனர்?', options: ['40%', '10%', '25%', '75%'], explanation: 'உலக மக்கள் தொகையில் 40% பேர் வேளாண்மையில் பணிபுரிகின்றனர்; இதுவே மிகப்பெரிய வேலைவாய்ப்புத் துறை.' },
  },
  {
    difficulty: 'easy', source: '§16.7.2, p. 195', answer: 0,
    en: { q: 'The study and analysis of human body prints to verify identity is called', options: ['biometrics', 'radiotherapy', 'histology', 'taxonomy'], explanation: 'Biometrics compares body prints with stored data to verify who a person is.' },
    ta: { q: 'மனித உடல் பதிவுகளை ஆராய்ந்து ஒருவரை அடையாளம் காணும் அறிவியல்', options: ['உயிரியல் அளவீட்டியல்', 'கதிர் மருத்துவம்', 'திசுவியல்', 'வகைப்பாட்டியல்'], explanation: 'உயிரியல் அளவீட்டியலில் உடல் பதிவுகள் கணினியில் சேமிக்கப்பட்ட மாதிரிப் பதிவுகளோடு ஒப்பிடப்படுகின்றன.' },
  },
  {
    difficulty: 'easy', source: '§16.1.3, p. 186', answer: 0,
    en: { q: 'Nanoparticles are added to fabrics mainly to', options: ['prevent the growth of bacteria', 'make the fabric heavier', 'change the colour of the fabric', 'make the fabric conduct heat'], explanation: 'Nanoparticle substances are incorporated in fabrics to prevent bacterial growth.' },
    ta: { q: 'துணிகளில் நானோ துகள்கள் முக்கியமாக எதற்காகச் சேர்க்கப்படுகின்றன?', options: ['பாக்டீரியா வளர்ச்சியைத் தடுக்க', 'துணியின் எடையைக் கூட்ட', 'துணியின் நிறத்தை மாற்ற', 'துணி வெப்பம் கடத்த'], explanation: 'பாக்டீரியா வளர்ச்சியைத் தடுக்க நானோ துகள்கள் துணிகளில் சேர்க்கப்படுகின்றன.' },
  },
  {
    difficulty: 'easy', source: '§16.5.1, p. 192', answer: 0,
    en: { q: 'A good dye must be', options: ['fast to light and able to fix to the fabric', 'soluble in water after dyeing', 'easily removed by dilute acids', 'colourless before use'], explanation: 'A dye must have a suitable colour, fix to the fabric, be fast to light and resist water, acids and alkalies.' },
    ta: { q: 'ஒரு நல்ல சாயம் கொண்டிருக்க வேண்டிய பண்பு', options: ['ஒளியால் பாதிக்கப்படாமல் துணியில் ஒட்டும் தன்மை', 'சாயமேற்றிய பின் நீரில் கரையும் தன்மை', 'நீர்த்த அமிலத்தால் எளிதில் நீங்கும் தன்மை', 'பயன்பாட்டுக்கு முன் நிறமற்ற தன்மை'], explanation: 'சாயம் தகுந்த நிறம் கொண்டு, துணியில் ஒட்ட வேண்டும்; ஒளி, நீர், அமிலம், காரம் ஆகியவற்றால் பாதிக்கப்படக் கூடாது.' },
  },
  {
    difficulty: 'easy', source: '§16.8, p. 195', answer: 0,
    en: { q: 'Applying chemical principles to solve real-world problems, such as making drugs and fertilizers, is called', options: ['applied chemistry', 'pure chemistry', 'astrochemistry', 'geochemistry'], explanation: 'Applied chemistry applies chemical principles and theories to various fields to solve real-world problems.' },
    ta: { q: 'மருந்துகள், உரங்கள் தயாரித்தல் போன்ற அன்றாடச் சிக்கல்களைத் தீர்க்க வேதியியல் கொள்கைகளைப் பயன்படுத்துவது', options: ['பயன்பாட்டு வேதியியல்', 'தூய வேதியியல்', 'விண்வெளி வேதியியல்', 'புவி வேதியியல்'], explanation: 'வேதியியல் கொள்கைகளைப் பல துறைகளில் பயன்படுத்தி நடைமுறைச் சிக்கல்களைத் தீர்ப்பது பயன்பாட்டு வேதியியல்.' },
  },
  // ---------------------------------------------------------------- Medium
  {
    difficulty: 'medium', source: '§16.2.2, p. 187', answer: 0,
    en: { q: 'Which of these is a required characteristic of a drug?', options: ['It should be effective without side effects', 'It should be slightly toxic to work', 'It should change normal body activities', 'It should affect the receptor tissues'], explanation: 'A drug must not be toxic, must not cause side effects or affect normal activities, and must be effective.' },
    ta: { q: 'ஒரு மருந்து கொண்டிருக்க வேண்டிய பண்பு எது?', options: ['பக்க விளைவின்றித் தீவிரமாகச் செயல்பட வேண்டும்', 'சிறிது நச்சுத்தன்மை கொண்டிருக்க வேண்டும்', 'சாதாரண உடல் செயல்பாடுகளை மாற்ற வேண்டும்', 'உட்கொள்பவரின் திசுக்களைப் பாதிக்க வேண்டும்'], explanation: 'மருந்து நச்சற்றதாக, பக்க விளைவற்றதாக, சாதாரண செயல்பாடுகளைப் பாதிக்காததாக, தீவிரமாகச் செயல்படுவதாக இருக்க வேண்டும்.' },
  },
  {
    difficulty: 'medium', source: '§16.6.1, p. 193', answer: 0,
    en: { q: 'Which is a goal of agricultural chemistry?', options: ['Increasing crop yield while reducing the cost of food production', 'Increasing the use of food colourants', 'Making fingerprints visible', 'Producing radioisotopes for diagnosis'], explanation: 'Agricultural chemistry aims to increase crop yield and livestock, improve food quality and reduce production cost.' },
    ta: { q: 'வேளாண் வேதியியலின் நோக்கம் எது?', options: ['பயிர் விளைச்சலைக் கூட்டி உணவு உற்பத்திச் செலவைக் குறைத்தல்', 'உணவு நிறமிகளின் பயன்பாட்டைக் கூட்டுதல்', 'கைரேகைகளைக் கண்டறிதல்', 'நோயறிதலுக்குக் கதிரியக்க ஐசோடோப்புகள் தயாரித்தல்'], explanation: 'பயிர் விளைச்சல், கால்நடை வளம் கூட்டுதல், உணவுத் தரம் மேம்படுத்துதல், உற்பத்திச் செலவைக் குறைத்தல் ஆகியவை வேளாண் வேதியியலின் நோக்கங்கள்.' },
  },
  {
    difficulty: 'medium', source: '§16.7.1, p. 194', answer: 0,
    en: { q: 'In criminal cases, forensic chemists analyse blood and DNA mainly to find out', options: ['when and by whom the crime was committed', 'the pH of the soil at the scene', 'the age of fossils at the scene', 'the colour of dyes in clothes'], explanation: 'Analysis of evidence such as blood and DNA helps determine when and by whom a crime was committed.' },
    ta: { q: 'குற்ற வழக்குகளில் தடயவியல் வேதியியலாளர்கள் இரத்தம், டி.என்.ஏ போன்றவற்றை ஆய்வு செய்வது முக்கியமாக எதை அறிய?', options: ['யாரால், எப்போது குற்றம் நடந்தது என்பதை', 'அந்த இடத்தின் மண் pH-ஐ', 'அங்குள்ள புதைபடிவங்களின் வயதை', 'உடைகளிலுள்ள சாயத்தின் நிறத்தை'], explanation: 'இரத்தம், டி.என்.ஏ ஆய்வு மூலம் யாரால், எப்போது குற்றம் நடந்தது என்பது அறியப்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.3, p. 196', answer: 0,
    en: { q: 'A 1% solution of iodoform is used as', options: ['an antiseptic', 'an antipyretic', 'an antimalarial', 'an antacid'], explanation: 'Iodoform (CHI₃) is an antiseptic; the book notes its 1% solution acts as a disinfectant.' },
    ta: { q: '1% அயோடோஃபார்ம் _____ ஆகப் பயன்படுத்தப்படுகிறது.', options: ['புரைத் தடுப்பான்', 'காய்ச்சல் நிவாரணி', 'மலேரியா நிவாரணி', 'அமில நீக்கி'], explanation: 'அயோடோஃபார்ம் (CHI₃) புரைத் தடுப்பானாகப் பயன்படுகிறது; அதன் 1% கரைசல் தொற்று நீக்கியாகவும் செயல்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.4, p. 196', answer: 0,
    en: { q: 'The cathode of an electrochemical cell involves', options: ['reduction', 'oxidation', 'neutralisation', 'catenation'], explanation: 'At the cathode, metal ions gain electrons: reduction. Oxidation takes place at the anode.' },
    ta: { q: 'ஒரு மின்வேதிக்கலத்தின் எதிர் மின்வாயில் நிகழ்வது', options: ['ஒடுக்கம்', 'ஆக்சிஜனேற்றம்', 'நடுநிலையாக்கல்', 'சங்கிலி இணைப்பு'], explanation: 'எதிர் மின்வாயில் உலோக அயனிகள் எலக்ட்ரானைப் பெறுகின்றன: ஒடுக்கம். ஆக்சிஜனேற்றம் நேர் மின்வாயில் நிகழ்கிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.5, p. 197', answer: 0,
    en: { q: 'The age of a dead animal can be determined by using an isotope of', options: ['carbon', 'iodine', 'phosphorus', 'oxygen'], explanation: 'Radiocarbon dating uses the C-14 isotope to find the age of fossil wood or animals.' },
    ta: { q: 'இறந்த விலங்குகளின் வயதைத் தீர்மானிக்க எந்தத் தனிமத்தின் ஐசோடோப்பைப் பயன்படுத்தலாம்?', options: ['கார்பன்', 'அயோடின்', 'பாஸ்பரஸ்', 'ஆக்சிஜன்'], explanation: 'கார்பன் தேதியிடல் முறையில் C-14 ஐசோடோப்பைக் கொண்டு புதைபடிவங்களின் வயது கண்டறியப்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.6, p. 197', answer: 0,
    en: { q: 'Which of the following does NOT contain natural dyes?', options: ['Potato', 'Beetroot', 'Carrot', 'Turmeric'], explanation: 'Beetroot, carrot and turmeric are brightly coloured by natural colourants; potato is not.' },
    ta: { q: 'பின்வருவனவற்றுள் எது இயற்கைச் சாயம் இல்லாதது?', options: ['உருளைக்கிழங்கு', 'பீட்ரூட்', 'கேரட்', 'மஞ்சள்'], explanation: 'பீட்ரூட், கேரட், மஞ்சள் ஆகியவை இயற்கை நிறமிகளைக் கொண்டவை; உருளைக்கிழங்கில் இல்லை.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.9, p. 197', answer: 0,
    en: { q: 'The group responsible for the colour of an organic compound is called', options: ['chromophore', 'auxochrome', 'chromogen', 'isotope'], explanation: 'A chromophore is the colour-bearing group; an auxochrome only deepens the colour.' },
    ta: { q: 'ஒரு கரிமச் சேர்மத்தின் நிறத்திற்குக் காரணமான குழுக்கள் _____ என அழைக்கப்படுகின்றன.', options: ['நிறத் தாங்கி', 'நிற உயர்த்தி', 'நிற ஜனனிகள்', 'ஐசோடோப்புகள்'], explanation: 'நிறத்தைத் தரும் குழு நிறத் தாங்கி (குரோமோஃபோர்); நிற உயர்த்தி நிறத்தை அடர்த்தியாக்கும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.1, p. 197', answer: 0,
    en: { q: '_____ is an electrochemical cell which converts electrical energy into chemical change.', options: ['Electrolytic cell', 'Galvanic cell', 'Fuel cell', 'Lemon cell'], explanation: 'An electrolytic cell uses electricity to bring about chemical reactions; galvanic and fuel cells do the reverse.' },
    ta: { q: 'மின் ஆற்றலை வேதி ஆற்றலாக மாற்றும் வேதி மின்கலம் _____ ஆகும்.', options: ['மின்பகுப்புக் கலம்', 'கால்வனிக் மின்கலம்', 'எரிபொருள் மின்கலம்', 'எலுமிச்சை மின்கலம்'], explanation: 'மின்பகுப்புக் கலம் மின்னாற்றலைக் கொண்டு வேதிவினையை நிகழ்த்துகிறது; கால்வனிக், எரிபொருள் மின்கலங்கள் எதிர்மாறாகச் செயல்படுகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.4, p. 197', answer: 0,
    en: { q: 'The macronutrients required for plant growth, supplied by NPK fertilizer, are', options: ['nitrogen, phosphorus and potassium', 'nitrogen, sodium and calcium', 'iron, zinc and copper', 'sodium, chlorine and magnesium'], explanation: 'NPK stands for nitrogen, phosphorus and potassium.' },
    ta: { q: 'NPK உரம் வழங்கும், தாவர வளர்ச்சிக்குத் தேவையான பெரும ஊட்டத் தனிமங்கள்', options: ['நைட்ரஜன், பாஸ்பரஸ், பொட்டாசியம்', 'நைட்ரஜன், சோடியம், கால்சியம்', 'இரும்பு, துத்தநாகம், தாமிரம்', 'சோடியம், குளோரின், மெக்னீசியம்'], explanation: 'NPK என்பது நைட்ரஜன், பாஸ்பரஸ், பொட்டாசியம் ஆகியவற்றைக் குறிக்கிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III, p. 197', answer: 0,
    en: { q: 'In the matching exercise, hyperthyroidism is matched with', options: ['Iodine-131', 'Electroplating', 'Large surface area', 'Body building'], explanation: 'Iodine-131 is used to treat hyperthyroidism (Table 16.3).' },
    ta: { q: 'பொருத்துக பகுதியில் ஹைப்பர்தைராய்டிசம் எதனுடன் பொருந்தும்?', options: ['அயோடின்-131', 'மின் முலாம் பூசுதல்', 'பெரிய மேற்பரப்புப் பகுதி', 'உடல் வளர்ச்சி'], explanation: 'அயோடின்-131 ஹைப்பர்தைராய்டிசத்தைக் குணப்படுத்தப் பயன்படுகிறது (அட்டவணை 16.3).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.1, p. 197', answer: 0,
    en: { q: 'Radiocarbon dating is a method of', options: ['finding the age of fossil wood or animals using C-14', 'detecting brain tumours using I-131', 'finding the water content of the body using H-3', 'treating cancer using Gold-198'], explanation: 'Radiocarbon dating uses the C-14 isotope to determine the age of fossils.' },
    ta: { q: 'கார்பன் தேதியிடல் என்பது', options: ['C-14 ஐசோடோப்பைக் கொண்டு புதைபடிவ மரம், விலங்கின் வயதைக் கண்டறிதல்', 'I-131 கொண்டு மூளைக் கட்டியைக் கண்டறிதல்', 'H-3 கொண்டு உடலின் நீர் அளவைக் கண்டறிதல்', 'தங்கம்-198 கொண்டு புற்றுநோய் சிகிச்சை'], explanation: 'கார்பன் தேதியிடல் முறையில் C-14 ஐசோடோப்பு புதைபடிவங்களின் வயதைக் கண்டறியப் பயன்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.2, p. 197', answer: 0,
    en: { q: 'Anaesthetics are classified into', options: ['general and local anaesthetics', 'natural and synthetic anaesthetics', 'oral and external anaesthetics', 'acidic and basic anaesthetics'], explanation: 'General anaesthetics cause reversible loss of consciousness; local ones remove pain only in one area.' },
    ta: { q: 'மயக்க மருந்துகள் எவ்வாறு வகைப்படுத்தப்படுகின்றன?', options: ['பொது மயக்க மருந்துகள், உள்ளிட மயக்க மருந்துகள்', 'இயற்கை, செயற்கை மயக்க மருந்துகள்', 'வாய்வழி, வெளிப்பூச்சு மயக்க மருந்துகள்', 'அமில, கார மயக்க மருந்துகள்'], explanation: 'பொது மயக்க மருந்துகள் தற்காலிகமாகச் சுயநினைவை இழக்கச் செய்யும்; உள்ளிட மயக்க மருந்துகள் ஒரு பகுதியில் மட்டும் வலியைத் தடுக்கும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.3, p. 197', answer: 0,
    en: { q: 'Chemical fertilizers are needed in crop fields because they', options: ['supply essential micro and macro nutrients for crop growth', 'kill pests and insects on the crops', 'test the pH and texture of the soil', 'protect stored grain from spoilage'], explanation: 'Fertilizers supply the micro and macro nutrients that crops need; pesticides deal with pests.' },
    ta: { q: 'பயிர் நிலங்களில் வேதி உரங்கள் தேவைப்படுவதற்குக் காரணம், அவை', options: ['பயிர் வளர்ச்சிக்குத் தேவையான நுண், பெரும ஊட்டங்களை வழங்குகின்றன', 'பயிர்களின் பூச்சிகளை அழிக்கின்றன', 'மண்ணின் pH, அமைப்பைச் சோதிக்கின்றன', 'சேமித்த தானியம் கெடாமல் காக்கின்றன'], explanation: 'உரங்கள் பயிர்களுக்குத் தேவையான நுண் மற்றும் பெரும ஊட்டச்சத்துகளை வழங்குகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.4, p. 197', answer: 0,
    en: { q: 'Forensic chemistry is related to', options: ['the investigation of crime', 'the production of fertilizers', 'the synthesis of dyes', 'the treatment of cancer'], explanation: 'Forensic chemistry applies scientific principles and methods to investigate crime.' },
    ta: { q: 'தடயவியல் வேதியியல் எதனுடன் தொடர்புடையது?', options: ['குற்றங்களை ஆராய்தல்', 'உரங்கள் தயாரித்தல்', 'சாயங்கள் தயாரித்தல்', 'புற்றுநோய் சிகிச்சை'], explanation: 'தடயவியல் வேதியியல் அறிவியல் கொள்கைகளையும் நுட்பங்களையும் குற்ற விசாரணைக்குப் பயன்படுத்துகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V.1, p. 197', answer: 0,
    en: { q: 'Acid dyes are mainly used for dyeing', options: ['wool and silk', 'cotton only', 'rayon only', 'paper and leather'], explanation: 'Acid dyes such as picric acid are used for protein (animal) fibres like wool and silk.' },
    ta: { q: 'அமிலச் சாயங்கள் முக்கியமாக எவற்றைச் சாயமேற்றப் பயன்படுகின்றன?', options: ['கம்பளி, பட்டு', 'பருத்தி மட்டும்', 'ரேயான் மட்டும்', 'காகிதம், தோல்'], explanation: 'பிக்ரிக் அமிலம் போன்ற அமிலச் சாயங்கள் கம்பளி, பட்டு போன்ற புரத இழைகளுக்குப் பயன்படுகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V.1, p. 197', answer: 0,
    en: { q: 'Congo red, which fixes firmly on cotton without any pretreatment, is a', options: ['direct dye', 'mordant dye', 'vat dye', 'acid dye'], explanation: 'Direct dyes have high affinity for cotton, rayon and other cellulose fibres; e.g. Congo red.' },
    ta: { q: 'முன்பதப்படுத்தல் இன்றி பருத்தியில் உறுதியாக ஒட்டும் காங்கோ சிவப்பு ஒரு', options: ['நேரடிச் சாயம்', 'மறைமுகச் சாயம்', 'தொட்டிச் சாயம்', 'அமிலச் சாயம்'], explanation: 'நேரடிச் சாயங்கள் பருத்தி, ரேயான் போன்ற செல்லுலோஸ் இழைகளுடன் அதிக ஈர்ப்புடையவை; எ.கா. காங்கோ சிவப்பு.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V.2, p. 197', answer: 0,
    en: { q: 'Saccharin and cyclamate are food additives that act as', options: ['artificial sweeteners', 'preservatives', 'antioxidants', 'flavour enhancers'], explanation: 'Saccharin and cyclamate add sweet taste to food (Table 16.4).' },
    ta: { q: 'சாக்கரின், சைக்ளமேட் ஆகிய உணவுச் சேர்க்கைகள்', options: ['செயற்கை இனிப்பூட்டிகள்', 'உணவுப் பதப்படுத்திகள்', 'ஆக்சிஜனேற்ற எதிர்ப்பொருள்கள்', 'சுவையூட்டிகள்'], explanation: 'சாக்கரின், சைக்ளமேட் ஆகியவை உணவுக்கு இனிப்புச் சுவை தருகின்றன (அட்டவணை 16.4).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V.2, p. 197', answer: 0,
    en: { q: 'Sodium benzoate and vinegar are added to food as', options: ['preservatives', 'colourants', 'artificial sweeteners', 'flavour enhancers'], explanation: 'Preservatives protect stored food from spoilage by microorganisms.' },
    ta: { q: 'சோடியம் பென்சோயேட், வினிகர் ஆகியவை உணவில் _____ ஆகச் சேர்க்கப்படுகின்றன.', options: ['பதப்படுத்திகள்', 'நிறமிகள்', 'செயற்கை இனிப்பூட்டிகள்', 'சுவையூட்டிகள்'], explanation: 'பதப்படுத்திகள் சேமிப்பின்போது நுண்ணுயிரிகளால் உணவு கெடாமல் காக்கின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V.2, p. 197', answer: 0,
    en: { q: 'Monosodium glutamate is used in food as a', options: ['flavour enhancer', 'preservative', 'colourant', 'antioxidant'], explanation: 'Monosodium glutamate and calcium diglutamate enhance the flavour of food.' },
    ta: { q: 'மோனோசோடியம் குளூட்டமேட் உணவில் _____ ஆகப் பயன்படுகிறது.', options: ['சுவையூட்டி', 'பதப்படுத்தி', 'நிறமி', 'ஆக்சிஜனேற்ற எதிர்ப்பொருள்'], explanation: 'மோனோசோடியம் குளூட்டமேட், கால்சியம் டைகுளூட்டமேட் ஆகியவை உணவின் சுவையைக் கூட்டுகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Activity 1, p. 190', answer: 0,
    en: { q: 'A cell made with a lemon and two different metal strips that lights a small LED is an example of a', options: ['galvanic cell', 'electrolytic cell', 'electrolysis tank', 'salt bridge'], explanation: 'It produces electricity from a chemical reaction, which is what a galvanic cell does.' },
    ta: { q: 'எலுமிச்சையும் இரு வேறு உலோகத் தகடுகளும் கொண்டு சிறு LED-யை ஒளிரச் செய்யும் கலம்', options: ['கால்வனிக் மின்கலம்', 'மின்பகுப்புக் கலம்', 'மின்பகுப்புத் தொட்டி', 'உப்புப்பாலம்'], explanation: 'இது வேதிவினையிலிருந்து மின்சாரத்தை உருவாக்குவதால் கால்வனிக் மின்கலம் ஆகும்.' },
  },
  {
    difficulty: 'medium', source: '§16.1.2, p. 186', answer: 0,
    en: { q: 'Which instrument is used to analyse the surface properties of nanoparticles?', options: ['Scanning Electron Microscope', 'Barometer', 'Hydrometer', 'Simple microscope'], explanation: 'SEM, TEM and AFM are used to study nanoparticle surfaces at high resolution.' },
    ta: { q: 'நானோ துகள்களின் மேற்பரப்புப் பண்புகளை ஆராயப் பயன்படும் கருவி எது?', options: ['வருடு எலக்ட்ரான் நுண்ணோக்கி (SEM)', 'காற்றழுத்தமானி', 'திரவமானி', 'எளிய நுண்ணோக்கி'], explanation: 'SEM, TEM, AFM ஆகிய கருவிகள் நானோ துகள்களின் மேற்பரப்பை உயர் தெளிவுடன் ஆராயப் பயன்படுகின்றன.' },
  },
  {
    difficulty: 'medium', source: '§16.1.4, p. 186', answer: 0,
    en: { q: 'Which of these is a drawback of nanomaterials?', options: ['Their combustion with oxygen can cause explosion', 'They have a very small surface area', 'They cannot act as catalysts', 'They never react with impurities'], explanation: 'Nanoparticles are unstable with oxygen; their exothermic combustion can easily cause explosion.' },
    ta: { q: 'பின்வருவனவற்றுள் நானோ பொருள்களின் குறைபாடு எது?', options: ['ஆக்சிஜனுடன் எரிதல் வினையால் வெடிக்கக்கூடும்', 'அவற்றின் மேற்பரப்பு மிகச் சிறியது', 'அவை வினையூக்கிகளாகச் செயல்படாது', 'அவை மாசுக்களுடன் வினைபுரிவதில்லை'], explanation: 'நானோ துகள்கள் ஆக்சிஜனுடன் வெப்ப உமிழ் எரிதல் வினைபுரிந்து எளிதில் வெடிக்கக்கூடும்.' },
  },
  {
    difficulty: 'medium', source: '§16.2.4, p. 188', answer: 0,
    en: { q: 'Aspirin acts both as', options: ['an antipyretic and an analgesic', 'an antiseptic and an antacid', 'an antibiotic and an antimalarial', 'an anaesthetic and an antiseptic'], explanation: 'Aspirin reduces fever (antipyretic) and relieves pain (analgesic).' },
    ta: { q: 'ஆஸ்பிரின் எவ்வாறு செயல்படுகிறது?', options: ['காய்ச்சல் நிவாரணியாகவும் வலி நிவாரணியாகவும்', 'புரைத்தடுப்பானாகவும் அமில நீக்கியாகவும்', 'நுண்ணுயிர் எதிரியாகவும் மலேரியா நிவாரணியாகவும்', 'மயக்க மருந்தாகவும் புரைத்தடுப்பானாகவும்'], explanation: 'ஆஸ்பிரின் காய்ச்சலைக் குறைக்கும், வலியையும் போக்கும்.' },
  },
  {
    difficulty: 'medium', source: 'Figure 16.1, p. 188', answer: 0, imageUrl: `${IMG}/cinchona-bark.png`,
    en: { q: 'The bark shown in the picture is the natural source of the antimalarial drug', options: ['quinine', 'aspirin', 'penicillin', 'insulin'], explanation: 'Quinine is a natural antimalarial obtained from Cinchona bark.' },
    ta: { q: 'படத்தில் காட்டப்பட்டுள்ள மரப்பட்டை எந்த மலேரியா நிவாரணியின் இயற்கை மூலம்?', options: ['குயினைன்', 'ஆஸ்பிரின்', 'பென்சிலின்', 'இன்சுலின்'], explanation: 'குயினைன் எனும் மலேரியா நிவாரணி சின்கோனா மரப்பட்டையிலிருந்து பெறப்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: '§16.3.1, p. 190', answer: 0,
    en: { q: 'In a galvanic cell, the electrolytes of the two half-cells are connected through a', options: ['salt bridge', 'conductor wire', 'photocell', 'mordant'], explanation: 'A tube of saturated salt solution, called a salt bridge, joins the two half-cell electrolytes.' },
    ta: { q: 'கால்வனிக் மின்கலத்தில் இரு அரைக்கலங்களின் மின்பகுளிகள் எதன் மூலம் இணைக்கப்படுகின்றன?', options: ['உப்புப்பாலம்', 'கடத்தும் கம்பி', 'ஒளிமின்கலம்', 'நிறமூன்றி'], explanation: 'தெவிட்டிய உப்புக் கரைசல் கொண்ட குழாயான உப்புப்பாலம் இரு அரைக்கலங்களையும் இணைக்கிறது.' },
  },
  {
    difficulty: 'medium', source: '§16.4.1, p. 191', answer: 0,
    en: { q: 'Which radioisotope is used in the diagnosis of anaemia?', options: ['Iron-59', 'Sodium-24', 'Hydrogen-3', 'Gold-198'], explanation: 'Iron-59 is used to diagnose anaemia and pregnancy disorders (Table 16.2).' },
    ta: { q: 'இரத்த சோகையைக் கண்டறியப் பயன்படும் கதிரியக்க ஐசோடோப்பு எது?', options: ['இரும்பு-59', 'சோடியம்-24', 'ஹைட்ரஜன்-3', 'தங்கம்-198'], explanation: 'இரும்பு-59 இரத்த சோகை, கர்ப்பக் கோளாறுகளைக் கண்டறியப் பயன்படுகிறது (அட்டவணை 16.2).' },
  },
  {
    difficulty: 'medium', source: '§16.4, p. 191 (Do you know?)', answer: 0,
    en: { q: 'Uranium in the ground can decay into a dangerous gas that is a leading cause of lung cancer. The gas is', options: ['radon', 'neon', 'helium', 'chlorine'], explanation: 'Uranium decays into radon gas, thought to be the second leading cause of lung cancer.' },
    ta: { q: 'நிலத்தில் உள்ள யுரேனியம் சிதைந்து நுரையீரல் புற்றுநோய்க்குக் காரணமான ஆபத்தான வாயுவாக மாறுகிறது. அந்த வாயு', options: ['ரேடான்', 'நியான்', 'ஹீலியம்', 'குளோரின்'], explanation: 'யுரேனியம் சிதைந்து ரேடான் வாயுவாக மாறுகிறது; இது நுரையீரல் புற்றுநோய்க்கு இரண்டாவது முக்கியக் காரணமாகக் கருதப்படுகிறது.' },
  },
  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise III, p. 197', answer: 0,
    en: { q: 'Match:\n1. Antipyretics  2. Corrosion prevention  3. Hyperthyroidism  4. Nanoparticle  5. Proteins\na. Large surface area  b. Iodine-131  c. Fever  d. Body building  e. Electroplating', options: ['1-c, 2-e, 3-b, 4-a, 5-d', '1-c, 2-b, 3-e, 4-a, 5-d', '1-d, 2-e, 3-b, 4-a, 5-c', '1-c, 2-e, 3-a, 4-b, 5-d'], explanation: 'Antipyretics reduce fever, electroplating prevents corrosion, I-131 treats hyperthyroidism, nanoparticles have large surface area and proteins build the body.' },
    ta: { q: 'பொருத்துக:\n1. காய்ச்சல் நிவாரணி  2. அரிப்பைத் தடுத்தல்  3. ஹைப்பர்தைராய்டிசம்  4. நானோ துகள்கள்  5. புரதங்கள்\na. பெரிய மேற்பரப்புப் பகுதி  b. அயோடின்-131  c. காய்ச்சல்  d. உடல் வளர்ச்சி  e. மின் முலாம் பூசுதல்', options: ['1-c, 2-e, 3-b, 4-a, 5-d', '1-c, 2-b, 3-e, 4-a, 5-d', '1-d, 2-e, 3-b, 4-a, 5-c', '1-c, 2-e, 3-a, 4-b, 5-d'], explanation: 'காய்ச்சல் நிவாரணி காய்ச்சலைக் குறைக்கும்; மின் முலாம் அரிப்பைத் தடுக்கும்; I-131 ஹைப்பர்தைராய்டிசத்தைக் குணமாக்கும்; நானோ துகள்களுக்குப் பெரிய மேற்பரப்பு; புரதம் உடல் வளர்ச்சிக்கு உதவும்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VI.1 (HOTS), p. 197', answer: 0,
    en: { q: 'Mobile phone batteries can be recharged. The small button cells used in watches usually cannot, because', options: ['their cell reaction cannot be reversed by passing current (primary cells)', 'they do not contain any electrolyte', 'they have no anode or cathode', 'they convert electrical energy into chemical energy'], explanation: 'Watch cells are primary cells whose redox reaction is not reversible; lithium-ion phone batteries are secondary cells whose reaction can be reversed by charging.' },
    ta: { q: 'கைபேசியின் மின்கலங்களை மறு ஊட்டம் செய்யலாம். ஆனால் கடிகாரங்களில் பயன்படும் சிறு மின்கலங்களைப் பொதுவாக மறு ஊட்டம் செய்ய இயலாது. ஏனெனில்', options: ['அவற்றின் மின்கல வினையை மின்னோட்டம் செலுத்தி மீளச் செய்ய இயலாது (முதன்மை மின்கலங்கள்)', 'அவற்றில் மின்பகுளி இல்லை', 'அவற்றில் நேர், எதிர் மின்வாய்கள் இல்லை', 'அவை மின் ஆற்றலை வேதி ஆற்றலாக மாற்றுகின்றன'], explanation: 'கடிகார மின்கலங்கள் முதன்மை மின்கலங்கள்; அவற்றின் ஆக்சிஜனேற்ற ஒடுக்க வினை மீளாதது. கைபேசி லித்தியம் அயனி மின்கலங்களின் வினையை மறு ஊட்டத்தால் மீளச் செய்யலாம்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VI.2 (HOTS), p. 197', answer: 0,
    en: { q: 'Sudha met with a fire accident and has burns. Which drugs does she mainly need?', options: ['Antiseptics to prevent infection and analgesics to relieve pain', 'Antacids and antimalarials', 'Antipyretics and artificial sweeteners', 'General anaesthetics and antacids'], explanation: 'Burn wounds must be protected from microbial infection (antiseptics) and the pain must be relieved (analgesics).' },
    ta: { q: 'சுதாவுக்குத் தீ விபத்து ஏற்பட்டுத் தீக்காயம் உள்ளது. அவள் முக்கியமாக எந்த மருந்துகளைப் பயன்படுத்த வேண்டும்?', options: ['தொற்றைத் தடுக்கப் புரைத்தடுப்பான்கள், வலியைப் போக்க வலி நிவாரணிகள்', 'அமில நீக்கிகள், மலேரியா நிவாரணிகள்', 'காய்ச்சல் நிவாரணிகள், செயற்கை இனிப்பூட்டிகள்', 'பொது மயக்க மருந்துகள், அமில நீக்கிகள்'], explanation: 'தீக்காயத்தில் நுண்ணுயிர்த் தொற்றைத் தடுக்கப் புரைத்தடுப்பானும், வலியைப் போக்க வலி நிவாரணியும் தேவை.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VI.3 (HOTS), p. 197', answer: 0,
    en: { q: 'The soil pH of a crop land is 5. What should be added to make it suitable for most crops?', options: ['A basic (alkaline) substance such as lime', 'An acidic fertilizer such as ammonium sulphate', 'More chlorinated hydrocarbons', 'Plain sugar solution'], explanation: 'pH 5 means the soil is acidic; a basic substance like lime (or a basic fertilizer) neutralises the excess acid.' },
    ta: { q: 'ஒரு பயிர் நிலத்தின் மண் pH மதிப்பு 5. பெரும்பாலான பயிர்களுக்கு ஏற்றதாக்க எதைச் சேர்க்க வேண்டும்?', options: ['சுண்ணாம்பு போன்ற காரத்தன்மை உடைய பொருள்', 'அம்மோனியம் சல்பேட் போன்ற அமில உரம்', 'மேலும் குளோரினேற்றப்பட்ட ஹைட்ரோ கார்பன்கள்', 'சர்க்கரைக் கரைசல்'], explanation: 'pH 5 என்பது அமில மண்; சுண்ணாம்பு போன்ற காரப் பொருள் (அல்லது கார உரம்) மிகுதியான அமிலத்தை நடுநிலையாக்கும்.' },
  },
  {
    difficulty: 'hard', source: '§16.2.4, p. 188', answer: 0,
    en: { q: 'Assertion: Chloroform is no longer used as an anaesthetic.\nReason: With oxygen, chloroform forms the toxic compound carbonyl chloride.', options: AR_EN, explanation: 'Both are true, and the toxic product formed with oxygen is exactly why chloroform is not used now.' },
    ta: { q: 'கூற்று: தற்போது குளோரோஃபார்ம் மயக்க மருந்தாகப் பயன்படுத்தப்படுவதில்லை.\nகாரணம்: ஆக்சிஜனுடன் குளோரோஃபார்ம் நச்சுத்தன்மையுள்ள கார்போனைல் குளோரைடை உருவாக்குகிறது.', options: AR_TA, explanation: 'இரண்டும் சரி; ஆக்சிஜனுடன் உருவாகும் நச்சுப்பொருளே குளோரோஃபார்ம் தற்போது பயன்படாததற்குக் காரணம்.' },
  },
  {
    difficulty: 'hard', source: '§16.3.1, p. 190', answer: 2,
    en: { q: 'Assertion: An electrolytic cell converts electrical energy into chemical energy.\nReason: In an electrolytic cell, the anode and cathode are kept in separate half-cells joined by a salt bridge.', options: AR_EN, explanation: 'The assertion is true, but in an electrolytic cell both electrodes dip in the same electrolyte; separate half-cells belong to a galvanic cell.' },
    ta: { q: 'கூற்று: மின்பகுப்புக் கலம் மின் ஆற்றலை வேதி ஆற்றலாக மாற்றுகிறது.\nகாரணம்: மின்பகுப்புக் கலத்தில் நேர், எதிர் மின்வாய்கள் உப்புப்பாலத்தால் இணைக்கப்பட்ட தனித்தனி அரைக்கலங்களில் உள்ளன.', options: AR_TA, explanation: 'கூற்று சரி; ஆனால் மின்பகுப்புக் கலத்தில் இரு மின்வாய்களும் ஒரே மின்பகுளியில் உள்ளன; தனி அரைக்கலங்கள் கால்வனிக் கலத்திற்குரியவை.' },
  },
  {
    difficulty: 'hard', source: '§16.1.2, p. 186', answer: 0,
    en: { q: 'Assertion: The properties of nanomaterials are very different from those of the bulk material.\nReason: Nanometre size gives them larger surface area and high surface energy.', options: AR_EN, explanation: 'Both are true, and the large surface area and surface energy are the reason for the different properties.' },
    ta: { q: 'கூற்று: நானோ பொருள்களின் பண்புகள் அதே பொருளின் பெரும அளவுப் பண்புகளிலிருந்து மிகவும் வேறுபடுகின்றன.\nகாரணம்: நானோ அளவு அவற்றுக்குப் பெரிய மேற்பரப்பையும் உயர் மேற்பரப்பு ஆற்றலையும் தருகிறது.', options: AR_TA, explanation: 'இரண்டும் சரி; பெரிய மேற்பரப்பும் உயர் மேற்பரப்பு ஆற்றலுமே பண்பு வேறுபாட்டுக்குக் காரணம்.' },
  },
  {
    difficulty: 'hard', source: '§16.2.4, p. 188', answer: 3,
    en: { q: 'Assertion: Chloroquine is used on its own to cure malaria completely.\nReason: Chloroquine is used to control malarial parasites such as Plasmodium vivax.', options: AR_EN, explanation: 'The reason is true, but chloroquine is not used to cure the disease; it is used as an additive with other antimalarials.' },
    ta: { q: 'கூற்று: குளோரோகுயின் தனியாகவே மலேரியாவை முழுமையாகக் குணப்படுத்தப் பயன்படுகிறது.\nகாரணம்: பிளாஸ்மோடியம் வைவாக்ஸ் போன்ற மலேரியா ஒட்டுண்ணிகளைக் கட்டுப்படுத்த குளோரோகுயின் பயன்படுகிறது.', options: AR_TA, explanation: 'காரணம் சரி; ஆனால் குளோரோகுயின் நோயைக் குணமாக்கப் பயன்படுவதில்லை; மற்ற மலேரியா நிவாரணிகளுடன் கலவையாகப் பயன்படுகிறது.' },
  },
  {
    difficulty: 'hard', source: '§16.3.1, p. 190', answer: 0,
    en: { q: 'Which statements about a galvanic cell are correct?\n(i) It converts chemical energy into electrical energy.\n(ii) Oxidation takes place at the cathode.\n(iii) Electrons flow from the anode to the cathode.\n(iv) The two half-cells are connected by a salt bridge.', options: ['(i), (iii) and (iv)', '(i), (ii) and (iii)', '(ii) and (iv) only', '(i) and (ii) only'], explanation: 'Oxidation happens at the anode, not the cathode; the other three statements are correct.' },
    ta: { q: 'கால்வனிக் மின்கலம் பற்றிய சரியான கூற்றுகள் எவை?\n(i) இது வேதி ஆற்றலை மின் ஆற்றலாக மாற்றுகிறது.\n(ii) எதிர் மின்வாயில் ஆக்சிஜனேற்றம் நிகழ்கிறது.\n(iii) எலக்ட்ரான்கள் நேர் மின்வாயிலிருந்து எதிர் மின்வாய்க்குப் பாய்கின்றன.\n(iv) இரு அரைக்கலங்களும் உப்புப்பாலத்தால் இணைக்கப்படுகின்றன.', options: ['(i), (iii), (iv)', '(i), (ii), (iii)', '(ii), (iv) மட்டும்', '(i), (ii) மட்டும்'], explanation: 'ஆக்சிஜனேற்றம் நேர் மின்வாயில் நிகழ்கிறது, எதிர் மின்வாயில் அல்ல; மற்ற மூன்று கூற்றுகளும் சரி.' },
  },
  {
    difficulty: 'hard', source: '§16.6.2, p. 194', answer: 0,
    en: { q: 'Which pair of food additive and function is NOT correctly matched?', options: ['Saccharin – preservative', 'Vitamin C – antioxidant', 'Curcumin – colourant', 'Monosodium glutamate – flavour enhancer'], explanation: 'Saccharin is an artificial sweetener, not a preservative; the other three pairs match Table 16.4.' },
    ta: { q: 'பின்வரும் உணவுச் சேர்க்கை – பணி இணைகளில் தவறாகப் பொருத்தப்பட்டது எது?', options: ['சாக்கரின் – பதப்படுத்தி', 'வைட்டமின் C – ஆக்சிஜனேற்ற எதிர்ப்பொருள்', 'குர்குமின் – நிறமி', 'மோனோசோடியம் குளூட்டமேட் – சுவையூட்டி'], explanation: 'சாக்கரின் செயற்கை இனிப்பூட்டி, பதப்படுத்தி அல்ல; மற்ற மூன்றும் அட்டவணை 16.4-உடன் பொருந்துகின்றன.' },
  },
  {
    difficulty: 'hard', source: '§16.7.2, p. 195', answer: 0,
    en: { q: 'In the breath alcohol test, the solution changes from orange to green because', options: ['alcohol is oxidised and dichromate is reduced to chromic ion', 'alcohol is reduced and chromic ion is oxidised to dichromate', 'sulphuric acid is neutralised by the breath', 'silver nitrate is decomposed by light'], explanation: 'Oxidation of the alcohol reduces orange dichromate to green chromic ion.' },
    ta: { q: 'ஆல்கஹால் சோதனையில் கரைசலின் நிறம் ஆரஞ்சிலிருந்து பச்சையாக மாறக் காரணம்', options: ['ஆல்கஹால் ஆக்சிஜனேற்றம் அடைந்து டைகுரோமேட் குரோமிக் அயனியாக ஒடுக்கமடைகிறது', 'ஆல்கஹால் ஒடுக்கமடைந்து குரோமிக் அயனி டைகுரோமேட்டாக ஆக்சிஜனேற்றம் அடைகிறது', 'மூச்சுக்காற்று சல்பியூரிக் அமிலத்தை நடுநிலையாக்குகிறது', 'ஒளியால் சில்வர் நைட்ரேட் சிதைகிறது'], explanation: 'ஆல்கஹால் ஆக்சிஜனேற்றம் அடையும்போது ஆரஞ்சு நிற டைகுரோமேட் பச்சை நிறக் குரோமிக் அயனியாக ஒடுக்கமடைகிறது.' },
  },
  {
    difficulty: 'hard', source: '§16.4.1, p. 191', answer: 0,
    en: { q: 'A doctor wants to locate a blood clot and check the pumping action of the heart. Which radioisotope is suitable?', options: ['Sodium-24', 'Iodine-131', 'Hydrogen-3', 'Phosphorus-32'], explanation: 'Sodium-24 is used to locate blood clots and circulation disorders and to study the pumping action of the heart.' },
    ta: { q: 'இரத்த உறைவைக் கண்டறியவும் இதயத்தின் உந்துதல் செயலைச் சோதிக்கவும் மருத்துவர் பயன்படுத்த வேண்டிய ஐசோடோப்பு எது?', options: ['சோடியம்-24', 'அயோடின்-131', 'ஹைட்ரஜன்-3', 'பாஸ்பரஸ்-32'], explanation: 'சோடியம்-24 இரத்த உறைவு, இரத்த ஓட்டக் கோளாறுகள், இதய உந்துதல் செயல் ஆகியவற்றைக் கண்டறியப் பயன்படுகிறது.' },
  },
  {
    difficulty: 'hard', source: '§16.5.2, p. 192', answer: 0,
    en: { q: 'A dye has poor affinity for cotton, so the cloth is first treated with an aluminium salt, which then combines with the dye to form an insoluble lake. The dye is a', options: ['mordant dye, e.g. alizarin', 'direct dye, e.g. Congo red', 'vat dye, e.g. indigo', 'acid dye, e.g. picric acid'], explanation: 'Mordant (indirect) dyes need the fibre to be pretreated with a mordant such as Al, Cr or Fe salts; alizarin is an example.' },
    ta: { q: 'பருத்தியுடன் குறைந்த ஈர்ப்புடைய ஒரு சாயத்திற்காக, துணி முதலில் அலுமினிய உப்பால் பதப்படுத்தப்பட்டு, பின் சாயத்துடன் இணைந்து கரையாத லேக் உருவாகிறது. அச்சாயம்', options: ['மறைமுகச் சாயம், எ.கா. அலிசரின்', 'நேரடிச் சாயம், எ.கா. காங்கோ சிவப்பு', 'தொட்டிச் சாயம், எ.கா. இண்டிகோ', 'அமிலச் சாயம், எ.கா. பிக்ரிக் அமிலம்'], explanation: 'மறைமுகச் சாயங்களுக்கு அலுமினியம், குரோமியம், இரும்பு உப்புகள் போன்ற நிறமூன்றிகளால் முன்பதப்படுத்தல் தேவை; எ.கா. அலிசரின்.' },
  },
  {
    difficulty: 'hard', source: '§16.1.1, p. 186', answer: 0,
    en: { q: 'How many nanometres make 1 millimetre?', options: ['10⁶ nm', '10³ nm', '10⁹ nm', '10⁻⁶ nm'], explanation: '1 m = 10⁹ nm and 1 mm = 10⁻³ m, so 1 mm = 10⁹ × 10⁻³ = 10⁶ nm.' },
    ta: { q: '1 மில்லிமீட்டரில் எத்தனை நானோ மீட்டர்கள் உள்ளன?', options: ['10⁶ நானோ மீட்டர்', '10³ நானோ மீட்டர்', '10⁹ நானோ மீட்டர்', '10⁻⁶ நானோ மீட்டர்'], explanation: '1 மீ = 10⁹ நானோ மீட்டர், 1 மிமீ = 10⁻³ மீ; எனவே 1 மிமீ = 10⁶ நானோ மீட்டர்.' },
  },
  {
    difficulty: 'hard', source: '§16.1.1, p. 186', answer: 0,
    en: { q: 'Our nails grow about 1 nm every second. Roughly how much does a nail grow in one day?', options: ['86400 nm', '3600 nm', '1440 nm', '8640 nm'], explanation: 'One day = 24 × 60 × 60 = 86400 s, so the growth is 86400 nm (about 0.086 mm).' },
    ta: { q: 'நம் நகங்கள் ஒரு வினாடிக்கு சுமார் 1 நானோ மீட்டர் வளர்கின்றன. ஒரு நாளில் நகம் சுமார் எவ்வளவு வளரும்?', options: ['86400 நானோ மீட்டர்', '3600 நானோ மீட்டர்', '1440 நானோ மீட்டர்', '8640 நானோ மீட்டர்'], explanation: 'ஒரு நாள் = 24 × 60 × 60 = 86400 வினாடி; எனவே வளர்ச்சி 86400 நானோ மீட்டர் (சுமார் 0.086 மிமீ).' },
  },
  {
    difficulty: 'hard', source: '§16.2.3, p. 187', answer: 0,
    en: { q: 'Which pair of drug and source is correctly matched as given in the book?', options: ['Insulin – animal', 'Liquid paraffin – plant', 'Paracetamol – microorganism', 'Human growth hormone – minerals'], explanation: 'Table 16.1: insulin and heparin come from animals; liquid paraffin from minerals, paracetamol from chemical synthesis and human growth hormone from genetic engineering.' },
    ta: { q: 'பாடநூலின்படி சரியாகப் பொருத்தப்பட்ட மருந்து – மூலம் இணை எது?', options: ['இன்சுலின் – விலங்கு', 'திரவ பாரஃபின் – தாவரம்', 'பாராசிட்டமால் – நுண்ணுயிர்', 'மனித வளர்ச்சி ஹார்மோன் – கனிமம்'], explanation: 'அட்டவணை 16.1: இன்சுலின், ஹெபாரின் விலங்கிலிருந்து; திரவ பாரஃபின் கனிமத்திலிருந்து; பாராசிட்டமால் ரசாயனத் தொகுப்பு; மனித வளர்ச்சி ஹார்மோன் மரபுப் பொறியியல்.' },
  },
];
