// Tamil Nadu State Board, 9th Science, Unit 21 – Nutrition and Health (ஊட்டச்சத்து மற்றும் ஆரோக்கியம்).
// Textbook exercises converted to MCQs plus our own questions covering every section.
// source = section / exercise and printed page of the English-medium book.
import { BankQuestion, AR_EN, AR_TA } from './types';

const IMG = '/content/9/state_board/science/21';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.1, p. 254', answer: 0,
    en: { q: 'The nutrient required in trace (minute) amounts to accomplish various body functions is', options: ['vitamin', 'carbohydrate', 'protein', 'fat'], explanation: 'Vitamins are vital nutrients required in minute quantities for specific functions.' },
    ta: { q: 'மனித உடலின் சில தேவைகளைப் பூர்த்தி செய்யக் குறைந்த அளவே (மைக்ரோ) தேவைப்படும் ஊட்டச்சத்து', options: ['வைட்டமின்', 'கார்போஹைட்ரேட்', 'புரோட்டீன்', 'கொழுப்பு'], explanation: 'வைட்டமின்கள் சிறிய அளவில் தேவைப்படும் மிக முக்கியமான ஊட்டச்சத்துகள்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.2, p. 254', answer: 0,
    en: { q: 'The physician who found that scurvy can be cured by eating citrus fruits is', options: ['James Lind', 'Louis Pasteur', 'Charles Darwin', 'Isaac Newton'], explanation: 'James Lind showed that citrus fruits (rich in vitamin C) cure scurvy.' },
    ta: { q: 'சிட்ரஸ் வகை பழங்களை உணவில் சேர்த்துக்கொள்வதன் மூலம் ஸ்கர்வி நோயைக் குணப்படுத்த முடியும் என்று கூறியவர்', options: ['ஜேம்ஸ் லிண்ட்', 'லூயிஸ் பாஸ்டர்', 'சார்லஸ் டார்வின்', 'ஐசக் நியூட்டன்'], explanation: 'வைட்டமின் C நிறைந்த சிட்ரஸ் பழங்கள் ஸ்கர்வியைக் குணப்படுத்தும் என ஜேம்ஸ் லிண்ட் கண்டறிந்தார்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.4, p. 255', answer: 0,
    en: { q: 'The Prevention of Food Adulteration Act was enacted by the Government of India in the year', options: ['1954', '1964', '1950', '1963'], explanation: 'The PFA Act came in 1954 and the PFA Rules in 1955.' },
    ta: { q: 'மத்திய அரசின் உணவுக் கலப்படத் தடுப்புச் சட்டம் இயற்றப்பட்ட ஆண்டு', options: ['1954', '1964', '1950', '1963'], explanation: 'உணவுக் கலப்படத் தடுப்புச் சட்டம் 1954 இலும் அதன் விதிகள் 1955 இலும் இயற்றப்பட்டன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.1, p. 255', answer: 0,
    en: { q: 'Deficiency diseases can be prevented by taking a _____ diet.', options: ['balanced', 'fat-free', 'carbohydrate-only', 'salt-free'], explanation: 'A balanced diet provides all nutrients in the right amounts, preventing deficiency diseases.' },
    ta: { q: 'உணவில் _____ எடுத்துக்கொள்வதன் மூலம் குறைபாட்டு நோய்களைத் தடுக்க முடியும்.', options: ['சரிவிகித உணவு', 'கொழுப்பில்லா உணவு', 'கார்போஹைட்ரேட் மட்டும் உள்ள உணவு', 'உப்பில்லா உணவு'], explanation: 'சரிவிகித உணவு அனைத்து ஊட்டச்சத்துகளையும் சரியான அளவில் தந்து குறைபாட்டு நோய்களைத் தடுக்கிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.2, p. 255', answer: 0,
    en: { q: 'Altering the natural composition and quality of a food substance by adding or removing something is known as _____.', options: ['adulteration', 'preservation', 'pasteurization', 'fortification'], explanation: 'Adulteration is the addition or subtraction of any substance that affects the natural composition and quality of food.' },
    ta: { q: 'ஏதேனும் ஒன்றைச் சேர்ப்பதன் அல்லது நீக்குவதன் மூலம் உணவுப் பொருள்களின் இயல்பான தன்மையையும் தரத்தையும் பாதிக்கக்கூடிய செயல்பாடு _____ என்று அழைக்கப்படுகிறது.', options: ['உணவுக் கலப்படம்', 'உணவுப் பாதுகாப்பு', 'பாஸ்டர் பதனம்', 'ஊட்டமேற்றல்'], explanation: 'உணவில் ஏதேனும் சேர்ப்பதோ நீக்குவதோ அதன் இயல்பான தரத்தைப் பாதித்தால் அது கலப்படம்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.3, p. 255', answer: 0,
    en: { q: 'Vitamin D is called the _____ vitamin because it can be synthesised by the body using sunlight.', options: ['sunshine', 'anti-scurvy', 'anti-sterility', 'blood-clotting'], explanation: 'Skin converts dehydrocholesterol into vitamin D when exposed to sunlight.' },
    ta: { q: 'சூரிய வெளிச்சத்தின் மூலம் உடலில் வைட்டமின் D உற்பத்தியாவதால் இதற்கு _____ வைட்டமின் என்று பெயர்.', options: ['சூரிய ஒளி', 'ஸ்கர்வி எதிர்ப்பு', 'மலட்டுத்தன்மை எதிர்ப்பு', 'இரத்தம் உறைதல்'], explanation: 'சூரியக்கதிர்கள் தோலில் விழும்போது டிஹைட்ரோ கொலஸ்டிரால் வைட்டமின் D ஆக மாறுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.4, p. 255', answer: 0,
    en: { q: 'Dehydration (drying) of food is based on the principle of removal of _____.', options: ['water (moisture)', 'salt', 'sugar', 'oil'], explanation: 'Drying removes water, which inhibits the growth of bacteria, yeasts and moulds.' },
    ta: { q: 'நீரை வெளியேற்றுதல் முறையில் அடிப்படைக் கொள்கையானது _____ நீக்குவதாகும்.', options: ['ஈரப்பதத்தை', 'உப்பை', 'சர்க்கரையை', 'எண்ணெயை'], explanation: 'உலர்த்துதல் ஈரப்பதத்தை நீக்கி பாக்டீரியா, ஈஸ்ட், பூஞ்சைகள் வளர்வதைத் தடுக்கிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.5, p. 255', answer: 0,
    en: { q: 'Food should not be purchased beyond the date of _____.', options: ['expiry', 'manufacture', 'packing', 'dispatch'], explanation: 'Food past its expiry date may be spoiled and unsafe.' },
    ta: { q: 'உணவுப் பொருள்களை அவற்றின் _____ தேதி முடிந்த நிலையில் வாங்கக்கூடாது.', options: ['காலாவதி', 'தயாரிப்பு', 'பொதியிடல்', 'அனுப்புதல்'], explanation: 'காலாவதியான உணவு கெட்டுப்போயிருக்கலாம்; அது பாதுகாப்பற்றது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.6, p. 255', answer: 0,
    en: { q: 'AGMARK is used to certify _____ and _____ products in India.', options: ['agricultural; livestock', 'electrical; electronic', 'fruit; vegetable juice', 'textile; leather'], explanation: 'AGMARK certifies agricultural and livestock products like cereals, pulses, honey and butter.' },
    ta: { q: 'இந்தியாவில் தயாரிக்கப்படும் _____ மற்றும் _____ பொருள்களுக்கு அக்மார்க் தரக் குறியீடு சான்றிதழ் பெற வேண்டும்.', options: ['வேளாண்; கால்நடை', 'மின்; மின்னணு', 'பழ; காய்கறிச் சாறு', 'துணி; தோல்'], explanation: 'அக்மார்க் வேளாண், கால்நடை உற்பத்திப் பொருள்களான தானியங்கள், பருப்புகள், தேன், வெண்ணெய் போன்றவற்றிற்குச் சான்றளிக்கிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise VI, p. 255', answer: 0,
    en: { q: 'The full form of FPO is', options: ['Fruit Process Order', 'Food Preservation Office', 'Food Product Organisation', 'Fruit Packing Order'], explanation: 'FPO – Fruit Process Order – certifies fruit products like juices, jams and pickles.' },
    ta: { q: 'FPO என்பதன் விரிவாக்கம்', options: ['கனி உற்பத்திப் பொருள்கள் ஆணை (Fruit Process Order)', 'உணவுப் பாதுகாப்பு அலுவலகம்', 'உணவுப் பொருள் நிறுவனம்', 'கனி பொதியிடல் ஆணை'], explanation: 'FPO – கனி உற்பத்திப் பொருள்கள் ஆணை – பழரசம், ஜாம், ஊறுகாய் போன்றவற்றிற்குச் சான்றளிக்கிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise VI, p. 255', answer: 0,
    en: { q: 'FSSAI stands for', options: ['Food Safety and Standards Authority of India', 'Food Supply and Storage Agency of India', 'Fruit Standards and Safety Act of India', 'Food Science and Statistics Association of India'], explanation: 'FSSAI protects and promotes public health through regulation and supervision of food safety.' },
    ta: { q: 'FSSAI என்பதன் விரிவாக்கம்', options: ['இந்திய உணவுப் பாதுகாப்பு மற்றும் தர நிர்ணய ஆணையம்', 'இந்திய உணவு வழங்கல் மற்றும் சேமிப்பு முகமை', 'இந்திய கனி தர மற்றும் பாதுகாப்புச் சட்டம்', 'இந்திய உணவு அறிவியல் மற்றும் புள்ளியியல் சங்கம்'], explanation: 'FSSAI உணவுப் பாதுகாப்பைக் கண்காணித்து ஒழுங்குபடுத்துவதன் மூலம் பொதுமக்களின் சுகாதாரத்தைப் பாதுகாக்கிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise VI, p. 255', answer: 0,
    en: { q: 'The ISI mark is given by the Indian Standards Institution, now known as', options: ['Bureau of Indian Standards (BIS)', 'Food Corporation of India (FCI)', 'Agricultural Marking (AGMARK)', 'Fruit Process Order (FPO)'], explanation: 'ISI is now the Bureau of Indian Standards; it certifies industrial products like switches and water heaters.' },
    ta: { q: 'ISI (இந்தியத் தரக்கட்டுப்பாட்டு நிறுவனம்) தற்போது எவ்வாறு அழைக்கப்படுகிறது?', options: ['BIS (Bureau of Indian Standards)', 'FCI (இந்திய உணவுக் கழகம்)', 'AGMARK', 'FPO'], explanation: 'ISI தற்போது BIS எனப்படுகிறது; இது சுவிட்சுகள், நீர் சூடேற்றிகள் போன்ற தொழிற்சாலைப் பொருள்களுக்குச் சான்றளிக்கிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise V, p. 255', answer: 0,
    en: { q: 'The chemical name of vitamin C is', options: ['ascorbic acid', 'calciferol', 'retinol', 'thiamine'], explanation: 'Vitamin C is ascorbic acid; its deficiency causes scurvy.' },
    ta: { q: 'வைட்டமின் C யின் வேதிப் பெயர்', options: ['அஸ்கார்பிக் அமிலம்', 'கால்சிஃபெரால்', 'ரெட்டினால்', 'தயமின்'], explanation: 'வைட்டமின் C என்பது அஸ்கார்பிக் அமிலம்; இதன் குறைபாடு ஸ்கர்வியை உண்டாக்கும்.' },
  },
  {
    difficulty: 'easy', source: '§21.1.1, p. 247', answer: 0,
    en: { q: 'The chief source of energy for the body is', options: ['carbohydrates', 'vitamins', 'minerals', 'water'], explanation: 'Carbohydrates, made of C, H and O, provide the chief source of energy.' },
    ta: { q: 'உடலுக்கு ஆற்றலை அளிக்கும் முதன்மை மூலம்', options: ['கார்போஹைட்ரேட்டுகள்', 'வைட்டமின்கள்', 'தாது உப்புகள்', 'நீர்'], explanation: 'கார்பன், ஹைட்ரஜன், ஆக்சிஜன் கொண்ட கார்போஹைட்ரேட்டுகள் முதன்மை ஆற்றல் மூலம்.' },
  },
  {
    difficulty: 'easy', source: '§21.1.2, p. 248', answer: 0,
    en: { q: 'Proteins are made up of', options: ['amino acids', 'fatty acids', 'glucose units', 'minerals'], explanation: 'Proteins, the building blocks of the body, are made of amino acids.' },
    ta: { q: 'புரதங்கள் எவற்றால் ஆனவை?', options: ['அமினோ அமிலங்கள்', 'கொழுப்பு அமிலங்கள்', 'குளுக்கோஸ் அலகுகள்', 'தாது உப்புகள்'], explanation: 'உடலின் கட்டுமானப் பொருள்களான புரதங்கள் பல அமினோ அமிலங்களால் ஆனவை.' },
  },
  {
    difficulty: 'easy', source: '§21.1.4, p. 248', answer: 0,
    en: { q: 'The term "vitamin" was introduced by', options: ['Dr. Funk', 'James Lind', 'Louis Pasteur', 'William Beaumont'], explanation: 'Dr. Funk coined the word vitamin; vitamin A was the first one discovered.' },
    ta: { q: '"வைட்டமின்" என்ற சொல்லை அறிமுகப்படுத்தியவர்', options: ['டாக்டர் ஃபன்க்', 'ஜேம்ஸ் லிண்ட்', 'லூயிஸ் பாஸ்டர்', 'வில்லியம் பியூமாண்ட்'], explanation: 'டாக்டர் ஃபன்க் வைட்டமின் என்ற சொல்லை அறிமுகப்படுத்தினார்; முதலில் கண்டறியப்பட்டது வைட்டமின் A.' },
  },
  {
    difficulty: 'easy', source: '§21.4.1, p. 251', answer: 0,
    en: { q: 'World Food Day, which emphasises food safety and avoiding food wastage, is observed on', options: ['16 October', '7 April', '5 June', '1 December'], explanation: 'October 16 is World Food Day; 7 April is World Health Day.' },
    ta: { q: 'உணவுப் பாதுகாப்பு, உணவு வீணாவதைத் தடுத்தல் ஆகியவற்றை வலியுறுத்தும் உலக உணவு தினம்', options: ['அக்டோபர் 16', 'ஏப்ரல் 7', 'ஜூன் 5', 'டிசம்பர் 1'], explanation: 'அக்டோபர் 16 உலக உணவு தினம்; ஏப்ரல் 7 உலக சுகாதார தினம்.' },
  },
  // ---------------------------------------------------------------- Medium
  {
    difficulty: 'medium', source: 'Book exercise I.3, p. 255', answer: 0,
    en: { q: 'The sprouting of onions and potatoes can be delayed by', options: ['irradiation', 'freezing', 'salting', 'canning'], explanation: 'Exposing food to ionising radiation (irradiation) kills pests and delays sprouting while keeping it fresh.' },
    ta: { q: 'வெங்காயம், உருளைக்கிழங்கு போன்றவை முளை கட்டுவதைத் தடுக்கும் முறை', options: ['கதிர் வீச்சு முறை', 'அதிக குளிர் நிலையில் பாதுகாத்தல்', 'உப்பினைச் சேர்த்தல்', 'கலன்களில் அடைத்தல்'], explanation: 'அயனியாக்கும் கதிர்களைச் செலுத்தும் கதிர் வீச்சு முறை பூச்சிகளைக் கொன்று முளைப்பதைத் தாமதப்படுத்துகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.5, p. 255', answer: 0,
    en: { q: 'An internal factor responsible for the spoilage of food is', options: ['moisture content in food', 'wax coating', 'contaminated utensils', 'synthetic preservatives'], explanation: 'Internal factors are enzymatic activity and moisture content; utensils and adulterants are external factors.' },
    ta: { q: 'உணவு கெட்டுப்போவதற்குக் காரணமாக உள்காரணியாகச் செயல்படுவது', options: ['உணவின் ஈரத்தன்மை', 'மெழுகுப் பூச்சு', 'சுகாதாரமற்ற சமையல் பாத்திரங்கள்', 'செயற்கை உணவுப் பாதுகாப்புப் பொருள்கள்'], explanation: 'நொதிகளின் செயல்பாடும் ஈரப்பதமும் உள்காரணிகள்; பாத்திரங்கள், கலப்படம் வெளிக்காரணிகள்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.1, p. 255', answer: 0,
    en: { q: '"Iron is required for the proper functioning of the thyroid gland." Choose the correct version.', options: ['False – iodine is required for the thyroid gland', 'True as stated', 'False – calcium is required for the thyroid gland', 'False – sodium is required for the thyroid gland'], explanation: 'Iodine is needed to form thyroid hormones; iron is a component of haemoglobin.' },
    ta: { q: '"தைராய்டு சுரப்பியின் செயல்பாட்டிற்கு இரும்புச்சத்து தேவைப்படுகிறது." சரியான வடிவத்தைத் தேர்ந்தெடு.', options: ['தவறு – தைராய்டு சுரப்பிக்கு அயோடின் தேவைப்படுகிறது', 'கூற்று சரி', 'தவறு – தைராய்டு சுரப்பிக்குக் கால்சியம் தேவைப்படுகிறது', 'தவறு – தைராய்டு சுரப்பிக்குச் சோடியம் தேவைப்படுகிறது'], explanation: 'தைராய்டு ஹார்மோன் உருவாக அயோடின் தேவை; இரும்பு ஹீமோகுளோபினின் கூறு.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.2, p. 255', answer: 0,
    en: { q: '"Vitamins are required in large quantities for normal functioning of the body." Choose the correct version.', options: ['False – vitamins are required in minute quantities', 'True as stated', 'False – vitamins are not required at all', 'False – vitamins are required only by children'], explanation: 'Vitamins are needed only in small amounts, though they are vital.' },
    ta: { q: '"மனித உடலின் இயல்பான செயல்பாட்டிற்கு வைட்டமின் பெருமளவில் தேவைப்படுகின்றது." சரியான வடிவத்தைத் தேர்ந்தெடு.', options: ['தவறு – வைட்டமின்கள் சிறிய அளவில் தேவைப்படுகின்றன', 'கூற்று சரி', 'தவறு – வைட்டமின்கள் தேவையே இல்லை', 'தவறு – குழந்தைகளுக்கு மட்டுமே தேவை'], explanation: 'வைட்டமின்கள் மிக முக்கியமானவை எனினும் சிறிய அளவிலேயே தேவைப்படுகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.3, p. 255', answer: 0,
    en: { q: 'Which of these vitamins is water-soluble?', options: ['Vitamin C', 'Vitamin A', 'Vitamin D', 'Vitamin K'], explanation: 'The book statement "Vitamin C is a water-soluble vitamin" is true; A, D, E and K are fat-soluble.' },
    ta: { q: 'பின்வருவனவற்றில் நீரில் கரையும் வைட்டமின் எது?', options: ['வைட்டமின் C', 'வைட்டமின் A', 'வைட்டமின் D', 'வைட்டமின் K'], explanation: '"வைட்டமின் C நீரில் கரையக்கூடியது" என்ற கூற்று சரி; A, D, E, K கொழுப்பில் கரைபவை.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.4, p. 255', answer: 0,
    en: { q: 'Which statement is correct?', options: ['Lack of adequate fats in the diet may result in low body weight.', 'Lack of fats in the diet always causes goitre.', 'Fats provide no energy to the body.', 'Fats are needed only in trace amounts.'], explanation: 'The book statement is true: fats provide energy, so too little fat can lower body weight.' },
    ta: { q: 'சரியான கூற்று எது?', options: ['உணவில் கொழுப்புச்சத்து போதுமான அளவில் இல்லையென்றால் உடல் எடைக் குறைவு ஏற்படும்.', 'உணவில் கொழுப்பு இல்லையென்றால் எப்போதும் முன்கழுத்துக் கழலை ஏற்படும்.', 'கொழுப்புகள் உடலுக்கு ஆற்றல் தருவதில்லை.', 'கொழுப்புகள் மிகச் சிறிய அளவில் மட்டுமே தேவை.'], explanation: 'இக்கூற்று சரி: கொழுப்பு ஆற்றல் தருவதால் அது குறைந்தால் உடல் எடை குறையலாம்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.5, p. 255', answer: 0,
    en: { q: '"The ISI mark is mandatory to certify agricultural products." Choose the correct version.', options: ['False – AGMARK certifies agricultural products', 'True as stated', 'False – FPO certifies agricultural products', 'False – FCI certifies agricultural products'], explanation: 'ISI is for industrial products; AGMARK is for agricultural and livestock products.' },
    ta: { q: '"வேளாண் உற்பத்திப் பொருள்களுக்கு ISI முத்திரை கட்டாயமாக்கப்பட்டுள்ளது." சரியான வடிவத்தைத் தேர்ந்தெடு.', options: ['தவறு – வேளாண் பொருள்களுக்கு அக்மார்க் சான்றளிக்கிறது', 'கூற்று சரி', 'தவறு – வேளாண் பொருள்களுக்கு FPO சான்றளிக்கிறது', 'தவறு – வேளாண் பொருள்களுக்கு FCI சான்றளிக்கிறது'], explanation: 'ISI தொழிற்சாலைப் பொருள்களுக்கு; அக்மார்க் வேளாண், கால்நடைப் பொருள்களுக்கு.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV, p. 255', answer: 0,
    en: { q: 'Match the mineral with its deficiency effect:\n1. Calcium 2. Sodium 3. Potassium 4. Iron 5. Iodine\n(a) muscular fatigue (b) anaemia (c) osteoporosis (d) goitre (e) muscular cramps', options: ['1-c, 2-e, 3-a, 4-b, 5-d', '1-c, 2-a, 3-e, 4-b, 5-d', '1-b, 2-e, 3-a, 4-c, 5-d', '1-d, 2-e, 3-a, 4-b, 5-c'], explanation: 'Calcium – osteoporosis, sodium – cramps, potassium – fatigue, iron – anaemia, iodine – goitre.' },
    ta: { q: 'தாது உப்பையும் அதன் குறைபாட்டு விளைவையும் பொருத்துக:\n1. கால்சியம் 2. சோடியம் 3. பொட்டாசியம் 4. இரும்பு 5. அயோடின்\n(a) தசைச்சோர்வு (b) இரத்த சோகை (c) ஆஸ்டியோபோரோசிஸ் (d) முன் கழுத்துக் கழலை (e) தசைப்பிடிப்பு', options: ['1-c, 2-e, 3-a, 4-b, 5-d', '1-c, 2-a, 3-e, 4-b, 5-d', '1-b, 2-e, 3-a, 4-c, 5-d', '1-d, 2-e, 3-a, 4-b, 5-c'], explanation: 'கால்சியம் – ஆஸ்டியோபோரோசிஸ், சோடியம் – தசைப்பிடிப்பு, பொட்டாசியம் – தசைச்சோர்வு, இரும்பு – இரத்த சோகை, அயோடின் – முன் கழுத்துக் கழலை.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V, p. 255', answer: 0,
    en: { q: 'Calciferol (vitamin D) deficiency causes', options: ['rickets', 'beriberi', 'night blindness', 'scurvy'], explanation: 'Vitamin D deficiency causes rickets in children – bow legs and pigeon chest.' },
    ta: { q: 'கால்சிஃபெரால் (வைட்டமின் D) குறைபாட்டால் ஏற்படும் நோய்', options: ['ரிக்கெட்ஸ்', 'பெரிபெரி', 'மாலைக்கண் நோய்', 'ஸ்கர்வி'], explanation: 'வைட்டமின் D குறைபாடு குழந்தைகளில் ரிக்கெட்ஸ் (கவட்டைக்கால், புறா மார்பு) உண்டாக்கும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V, p. 255', answer: 0,
    en: { q: 'Papaya is a source of a vitamin whose deficiency causes night blindness. The vitamin is', options: ['vitamin A (retinol)', 'vitamin B1 (thiamine)', 'vitamin C (ascorbic acid)', 'vitamin K'], explanation: 'Vitamin A, found in carrot and papaya, prevents nyctalopia (night blindness).' },
    ta: { q: 'பப்பாளியில் உள்ள, குறைபாட்டால் மாலைக்கண் நோயை உண்டாக்கும் வைட்டமின்', options: ['வைட்டமின் A (ரெட்டினால்)', 'வைட்டமின் B1 (தயமின்)', 'வைட்டமின் C (அஸ்கார்பிக் அமிலம்)', 'வைட்டமின் K'], explanation: 'கேரட், பப்பாளியில் உள்ள வைட்டமின் A மாலைக்கண் நோயைத் தடுக்கிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V, p. 255', answer: 0,
    en: { q: 'Whole grains are a source of the vitamin whose deficiency causes beriberi. It is', options: ['vitamin B1 (thiamine)', 'vitamin B12 (cyanocobalamine)', 'vitamin D (calciferol)', 'vitamin E (tocopherol)'], explanation: 'Thiamine deficiency causes beriberi – weak muscles, nerve degeneration and paralysis.' },
    ta: { q: 'முழு தானியங்களில் உள்ள, குறைபாட்டால் பெரிபெரியை உண்டாக்கும் வைட்டமின்', options: ['வைட்டமின் B1 (தயமின்)', 'வைட்டமின் B12 (சையனோகோபாலமைன்)', 'வைட்டமின் D (கால்சிஃபெரால்)', 'வைட்டமின் E (டோகோஃபெரால்)'], explanation: 'தயமின் குறைபாட்டால் பெரிபெரி (தசை வலிமையின்மை, நரம்புச் சிதைவு, பக்கவாதம்) ஏற்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IX.1(a), p. 256', answer: 0,
    en: { q: 'Kwashiorkor differs from marasmus in that kwashiorkor', options: ['is due to severe protein deficiency in children of 1–5 years whose diet is mostly carbohydrate', 'affects infants below one year whose diet lacks carbohydrates, fats and proteins', 'is caused by lack of vitamin C', 'is caused by lack of iodine'], explanation: 'Kwashiorkor: protein lacking (1–5 years). Marasmus: all of carbohydrates, fats and proteins lacking (below 1 year).' },
    ta: { q: 'குவாஷியோர்கர் மராஸ்மஸிலிருந்து வேறுபடுவது, குவாஷியோர்கர்', options: ['1–5 வயதுக் குழந்தைகளில், உணவில் கார்போஹைட்ரேட் இருந்தும் புரதம் மிகக் குறைவதால் ஏற்படுகிறது', 'ஒரு வயதுக்குட்பட்ட குழந்தைகளில் கார்போஹைட்ரேட், கொழுப்பு, புரதம் அனைத்தும் குறைவதால் ஏற்படுகிறது', 'வைட்டமின் C குறைவால் ஏற்படுகிறது', 'அயோடின் குறைவால் ஏற்படுகிறது'], explanation: 'குவாஷியோர்கர்: புரதக் குறைபாடு (1–5 வயது). மராஸ்மஸ்: கார்போஹைட்ரேட், கொழுப்பு, புரதம் அனைத்தும் குறைவு (1 வயதுக்குட்பட்டோர்).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IX.1(b), p. 256', answer: 0,
    en: { q: 'Which of the following is a micromineral (trace element)?', options: ['Iodine', 'Calcium', 'Potassium', 'Sodium'], explanation: 'Calcium, phosphorus, potassium, sodium and magnesium are macrominerals; iodine, iron, zinc etc. are trace elements.' },
    ta: { q: 'பின்வருவனவற்றில் மைக்ரோ தனிமம் (சுவடு தனிமம்) எது?', options: ['அயோடின்', 'கால்சியம்', 'பொட்டாசியம்', 'சோடியம்'], explanation: 'கால்சியம், பாஸ்பரஸ், பொட்டாசியம், சோடியம், மெக்னீசியம் மேக்ரோ தனிமங்கள்; அயோடின், இரும்பு, துத்தநாகம் முதலியவை சுவடு தனிமங்கள்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IX.3, p. 256', answer: 0,
    en: { q: 'An adulterant is', options: ['any material used for the purpose of adulteration', 'a natural preservative such as salt', 'a vitamin added to food', 'a food quality certification mark'], explanation: 'Adulterant is any material which is used for adulterating food.' },
    ta: { q: 'கலப்படப் பொருள் என்பது', options: ['கலப்படத்திற்காகப் பயன்படுத்தப்படும் எந்தப் பொருளும்', 'உப்பு போன்ற இயற்கை பாதுகாப்புப் பொருள்', 'உணவில் சேர்க்கப்படும் வைட்டமின்', 'உணவுத் தரச் சான்று முத்திரை'], explanation: 'கலப்படத்திற்காக உபயோகப்படுத்தப்படும் பொருள் கலப்படப் பொருள் எனப்படும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IX.4, p. 256', answer: 0,
    en: { q: 'Which is a naturally occurring toxic substance in food?', options: ['Prussic acid in the seeds of apples and cherries', 'Calcium carbide on mangoes', 'Shellac wax on apples', 'Metallic lead colours on vegetables'], explanation: 'Prussic acid in apple and cherry seeds and toxins in some mushrooms are natural adulterants; the others are added intentionally.' },
    ta: { q: 'உணவில் இயற்கையாகக் காணப்படும் நச்சுப் பொருள் எது?', options: ['ஆப்பிள், செர்ரி விதைகளில் உள்ள புருசிக் அமிலம்', 'மாம்பழங்களில் கால்சியம் கார்பைடு', 'ஆப்பிள்களின் மேல் செல்லாக் மெழுகு', 'காய்கறிகளில் உலோக ஈய நிறமிகள்'], explanation: 'ஆப்பிள், செர்ரி விதைகளில் உள்ள புருசிக் அமிலம், சில காளான்களின் நச்சு ஆகியவை இயற்கைக் கலப்படப் பொருள்கள்; மற்றவை வேண்டுமென்றே சேர்க்கப்படுபவை.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IX.6, p. 256', answer: 0,
    en: { q: 'One function of the mineral iron in our body is that it', options: ['is an important component of haemoglobin', 'forms thyroid hormones', 'is the main constituent of tooth enamel', 'maintains fluid balance'], explanation: 'Iron is part of haemoglobin; iodine forms thyroid hormones, calcium builds teeth and bones, sodium balances fluids.' },
    ta: { q: 'உடலில் இரும்புச்சத்தின் ஒரு பணி', options: ['ஹீமோகுளோபினின் முக்கியக் கூறாகச் செயல்படுதல்', 'தைராய்டு ஹார்மோனை உருவாக்குதல்', 'பல் எனாமலின் முக்கியக் கூறாக இருத்தல்', 'நீர்ச் சமநிலையைப் பேணுதல்'], explanation: 'இரும்பு ஹீமோகுளோபினின் கூறு; அயோடின் தைராய்டு ஹார்மோன், கால்சியம் பல்–எலும்பு, சோடியம் நீர்ச் சமநிலை.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IX.6, p. 256', answer: 0,
    en: { q: 'One function of calcium in our body is', options: ['forming bones and teeth enamel, and helping blood clotting', 'forming thyroid hormones', 'carrying oxygen in haemoglobin', 'regulating acid–base balance only'], explanation: 'Calcium is a constituent of bones and tooth enamel, helps clotting and controls muscle contraction.' },
    ta: { q: 'உடலில் கால்சியத்தின் ஒரு பணி', options: ['எலும்புகள், பல் எனாமலை உருவாக்கி இரத்தம் உறைதலுக்கு உதவுதல்', 'தைராய்டு ஹார்மோனை உருவாக்குதல்', 'ஹீமோகுளோபினில் ஆக்சிஜனைக் கடத்துதல்', 'அமில–கார சமநிலையை மட்டும் சீராக்குதல்'], explanation: 'கால்சியம் எலும்பு, பல் எனாமலின் கூறு; இரத்தம் உறைதலுக்கும் தசைச் சுருக்கக் கட்டுப்பாட்டுக்கும் உதவுகிறது.' },
  },
  {
    difficulty: 'medium', source: '§21.1.3, p. 248', answer: 0,
    en: { q: 'Essential fatty acids, which cannot be synthesised in the body and must come from the diet, are the', options: ['omega fatty acids', 'saturated fatty acids', 'amino acids', 'nucleic acids'], explanation: 'The essential fatty acids required in human nutrition are omega fatty acids.' },
    ta: { q: 'உடலால் உருவாக்க முடியாத, உணவின் மூலம் பெற வேண்டிய அத்தியாவசிய கொழுப்பு அமிலம்', options: ['ஒமேகா கொழுப்பு அமிலம்', 'நிறைவுற்ற கொழுப்பு அமிலம்', 'அமினோ அமிலம்', 'நியூக்ளிக் அமிலம்'], explanation: 'மனித உணவூட்டத்திற்கு அத்தியாவசியமான கொழுப்பு அமிலம் ஒமேகா கொழுப்பு அமிலமாகும்.' },
  },
  {
    difficulty: 'medium', source: '§21.1.2, p. 248', answer: 0,
    en: { q: 'The number of essential amino acids that the body cannot synthesise is', options: ['nine', 'five', 'twenty', 'twelve'], explanation: 'The nine essential amino acids include valine, leucine, lysine and histidine.' },
    ta: { q: 'உடலில் உருவாக்க முடியாத அத்தியாவசிய அமினோ அமிலங்களின் எண்ணிக்கை', options: ['ஒன்பது', 'ஐந்து', 'இருபது', 'பன்னிரண்டு'], explanation: 'வேலைன், லூசைன், லைசின், ஹிஸ்டிடைன் உள்ளிட்ட ஒன்பது அத்தியாவசிய அமினோ அமிலங்கள் உள்ளன.' },
  },
  {
    difficulty: 'medium', source: '§21.1.1, p. 247', answer: 0,
    en: { q: 'Which correctly gives an example of a monosaccharide, a disaccharide and a polysaccharide?', options: ['Glucose, sucrose, cellulose', 'Sucrose, glucose, starch', 'Cellulose, lactose, glucose', 'Glucose, cellulose, sucrose'], explanation: 'Classification is by the number of sugar units: glucose (1), sucrose (2), cellulose (many).' },
    ta: { q: 'ஒற்றைச் சர்க்கரை, இரட்டைச் சர்க்கரை, கூட்டுச் சர்க்கரை ஆகியவற்றிற்கு முறையே சரியான எடுத்துக்காட்டு', options: ['குளுக்கோஸ், சுக்ரோஸ், செல்லுலோஸ்', 'சுக்ரோஸ், குளுக்கோஸ், ஸ்டார்ச்', 'செல்லுலோஸ், லாக்டோஸ், குளுக்கோஸ்', 'குளுக்கோஸ், செல்லுலோஸ், சுக்ரோஸ்'], explanation: 'சர்க்கரை மூலக்கூறுகளின் எண்ணிக்கையின் அடிப்படையில்: குளுக்கோஸ் (1), சுக்ரோஸ் (2), செல்லுலோஸ் (பல).' },
  },
  {
    difficulty: 'medium', source: '§21.4.2, p. 251', answer: 0,
    en: { q: 'Which of the following is a synthetic food preservative?', options: ['Sodium benzoate', 'Common salt', 'Sugar', 'Oil'], explanation: 'Salt, sugar and oil are natural preservatives; sodium benzoate is synthetic.' },
    ta: { q: 'பின்வருவனவற்றில் செயற்கை உணவுப் பாதுகாப்புப் பொருள் எது?', options: ['சோடியம் பென்சோயேட்', 'சாதாரண உப்பு', 'சர்க்கரை', 'எண்ணெய்'], explanation: 'உப்பு, சர்க்கரை, எண்ணெய் இயற்கைப் பாதுகாப்புப் பொருள்கள்; சோடியம் பென்சோயேட் செயற்கையானது.' },
  },
  {
    difficulty: 'medium', source: '§21.6.1, p. 253', answer: 0,
    en: { q: 'The Food Corporation of India (FCI) was set up in the year', options: ['1965', '1954', '1955', '2015'], explanation: 'FCI was set up in 1965 to support farmers, distribute food grains and keep buffer stocks.' },
    ta: { q: 'இந்திய உணவுக் கழகம் (FCI) உருவாக்கப்பட்ட ஆண்டு', options: ['1965', '1954', '1955', '2015'], explanation: 'விவசாயிகளின் நலன், உணவு தானிய விநியோகம், இருப்புக் கையிருப்பு ஆகியவற்றிற்காக FCI 1965 இல் உருவாக்கப்பட்டது.' },
  },
  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise VII.1, p. 256', answer: 1,
    en: { q: 'Assertion: Haemoglobin contains iron.\nReason: Iron deficiency leads to anaemia.', options: AR_EN, explanation: 'Both are true, but the reason states a consequence of iron deficiency; it does not explain why haemoglobin contains iron.' },
    ta: { q: 'கூற்று: ஹீமோகுளோபினில் இரும்புச்சத்து உள்ளது.\nகாரணம்: இரும்புச்சத்துக் குறைபாடு இரத்த சோகையை ஏற்படுத்தும்.', options: AR_TA, explanation: 'இரண்டும் சரி; ஆனால் காரணம் இரும்புக் குறைபாட்டின் விளைவைக் கூறுகிறது, ஹீமோகுளோபினில் இரும்பு இருப்பதை விளக்கவில்லை.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VII.2, p. 256', answer: 1,
    en: { q: 'Assertion: AGMARK is a quality control agency.\nReason: ISI is a symbol of quality.', options: AR_EN, explanation: 'Both statements are true, but ISI being a quality mark does not explain AGMARK.' },
    ta: { q: 'கூற்று: அக்மார்க் ஒரு தரக் கட்டுப்பாட்டு நிறுவனம்.\nகாரணம்: ISI ஒரு தரக் குறியீடு.', options: AR_TA, explanation: 'இரண்டும் சரி; ஆனால் ISI தரக் குறியீடு என்பது அக்மார்க் பற்றிய கூற்றை விளக்கவில்லை.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VIII(a), p. 256', answer: 0,
    en: { q: 'Salt is added as a preservative in pickles because it', options: ['draws out moisture by osmosis, preventing the growth of bacteria', 'adds vitamins to the food', 'kills bacteria by heating the food', 'coats the food and keeps air away like wax'], explanation: 'Salt removes water by osmosis, stopping bacterial growth and reducing microbial enzyme activity.' },
    ta: { q: 'ஊறுகாயில் உப்பு பாதுகாப்புப் பொருளாகச் சேர்க்கப்படக் காரணம், அது', options: ['சவ்வூடு பரவல் மூலம் ஈரப்பதத்தை நீக்கி பாக்டீரியா வளர்ச்சியைத் தடுக்கிறது', 'உணவில் வைட்டமின்களைச் சேர்க்கிறது', 'உணவைச் சூடாக்கி பாக்டீரியாவைக் கொல்கிறது', 'மெழுகு போல உணவை மூடிக் காற்றைத் தடுக்கிறது'], explanation: 'உப்பு சவ்வூடு பரவல் மூலம் ஈரப்பதத்தை நீக்கி பாக்டீரியா வளர்ச்சியையும் நுண்ணுயிர் நொதிகளின் செயலையும் குறைக்கிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VIII(b), p. 256', answer: 0,
    en: { q: 'We should not eat food items beyond the expiry date because', options: ['the food may have spoiled and contain harmful microbes or toxins', 'the food becomes richer in vitamins', 'the food loses only its colour', 'the price of the food increases'], explanation: 'After its shelf life, food can spoil and cause food poisoning.' },
    ta: { q: 'காலாவதி தேதி முடிந்த உணவுப் பொருள்களை உண்ணக்கூடாது; ஏனெனில்', options: ['உணவு கெட்டுப்போய் தீங்கு விளைவிக்கும் நுண்ணுயிரிகள் அல்லது நச்சுகள் இருக்கலாம்', 'உணவில் வைட்டமின்கள் அதிகரிக்கின்றன', 'உணவின் நிறம் மட்டுமே மாறுகிறது', 'உணவின் விலை அதிகரிக்கிறது'], explanation: 'சேமிப்புக் காலம் முடிந்த உணவு கெட்டுப்போய் உணவு நச்சுத்தன்மையை ஏற்படுத்தலாம்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VIII(c), p. 256', answer: 0,
    en: { q: 'Deficiency of calcium in the diet leads to poor skeletal growth because calcium', options: ['is a major constituent of bones and teeth', 'forms haemoglobin', 'is needed to make thyroid hormones', 'is the main source of energy'], explanation: 'Calcium builds bones and teeth enamel; lack of it causes bone deformities and osteoporosis.' },
    ta: { q: 'உணவில் கால்சியம் குறைவால் எலும்பு வளர்ச்சி குன்றுவதற்குக் காரணம், கால்சியம்', options: ['எலும்புகள், பற்களின் முக்கியக் கூறு', 'ஹீமோகுளோபினை உருவாக்குகிறது', 'தைராய்டு ஹார்மோனுக்குத் தேவை', 'முதன்மை ஆற்றல் மூலம்'], explanation: 'கால்சியம் எலும்பு, பல் எனாமலை உருவாக்குகிறது; அதன் குறைவு எலும்புக் குறைபாடு, எலும்புப்புரை நோயை உண்டாக்கும்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise IX.5, p. 256', answer: 0,
    en: { q: 'Which factors help the body obtain and absorb vitamin D?', options: ['Exposure of skin to (early morning) sunlight and dietary sources such as egg, fish and dairy products', 'Eating only citrus fruits', 'Drinking boiled water', 'Avoiding all fats in the diet'], explanation: 'Skin makes vitamin D from dehydrocholesterol in sunlight; it is fat-soluble and also comes from egg, liver, fish and dairy.' },
    ta: { q: 'உடல் வைட்டமின் D ஐப் பெறவும் உறிஞ்சவும் உதவும் காரணிகள் எவை?', options: ['தோலில் (அதிகாலை) சூரிய ஒளி படுதல் மற்றும் முட்டை, மீன், பால் பொருள்கள் போன்ற உணவு', 'சிட்ரஸ் பழங்களை மட்டும் உண்ணுதல்', 'கொதிக்க வைத்த நீரைக் குடித்தல்', 'உணவில் கொழுப்பை முழுவதும் தவிர்த்தல்'], explanation: 'சூரிய ஒளியில் தோல் டிஹைட்ரோ கொலஸ்டிராலிலிருந்து வைட்டமின் D உருவாக்குகிறது; இது கொழுப்பில் கரைவது; முட்டை, மீன், பால் பொருள்களிலும் உள்ளது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise XI.1, p. 256', answer: 0,
    imageUrl: `${IMG}/pasteurization-process.png`,
    en: { q: 'The picture shows milk from a cow being heated and then suddenly cooled before bottling. The process, and the temperature used, are', options: ['pasteurization – about 63 °C for 30 minutes', 'canning – above 100 °C under pressure', 'freezing – below 0 °C', 'irradiation – exposure to gamma rays'], explanation: 'Pasteurization heats milk to about 63 °C for about 30 minutes and then cools it suddenly to destroy microbes.' },
    ta: { q: 'படத்தில் பசுவின் பால் சூடாக்கப்பட்டுப் பின் திடீரென்று குளிர்விக்கப்பட்டுப் புட்டியில் அடைக்கப்படுகிறது. இம்முறையும் அதற்கான வெப்பநிலையும்', options: ['பாஸ்டர் பதனம் – ஏறக்குறைய 63 °C, 30 நிமிடங்கள்', 'கலன்களில் அடைத்தல் – அழுத்தத்தில் 100 °C க்கு மேல்', 'உறைய வைத்தல் – 0 °C க்குக் கீழ்', 'கதிரியக்கம் – காமா கதிர்கள்'], explanation: 'பாஸ்டர் பதனத்தில் பால் 63 °C இல் 30 நிமிடங்கள் சூடாக்கப்பட்டு உடனே குளிரூட்டப்பட்டு நுண்ணுயிரிகள் அழிக்கப்படுகின்றன.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise XI.2, p. 256', answer: 0,
    en: { q: 'A doctor advises an adolescent girl with anaemia to eat more leafy vegetables and dates because they are rich in', options: ['iron, a component of haemoglobin', 'iodine, needed for thyroid hormones', 'vitamin D, needed for bones', 'sodium, needed for nerve impulses'], explanation: 'Spinach, greens and dates supply iron; iron deficiency causes anaemia.' },
    ta: { q: 'இரத்த சோகையால் பாதிக்கப்பட்ட வளரிளம் பெண்ணை இலைக் காய்கறிகளையும் பேரீச்சம்பழத்தையும் அதிகம் உண்ண மருத்துவர் அறிவுறுத்தக் காரணம், அவற்றில்', options: ['ஹீமோகுளோபினின் கூறான இரும்புச்சத்து அதிகம்', 'தைராய்டுக்குத் தேவையான அயோடின் அதிகம்', 'எலும்புக்குத் தேவையான வைட்டமின் D அதிகம்', 'நரம்புத் தூண்டலுக்கான சோடியம் அதிகம்'], explanation: 'பசலைக்கீரை, கீரைகள், பேரீச்சம்பழம் இரும்புச்சத்து தருகின்றன; இரும்புக் குறைவால் இரத்த சோகை ஏற்படுகிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise XI.3, p. 256', answer: 0,
    en: { q: 'Sanjana wants to buy a bottle of jam. Which set of details should she check on the label?', options: ['Date of manufacture and expiry, ingredients, MRP and the FPO mark', 'Only the colour of the bottle', 'Only the ISI mark', 'Only the AGMARK symbol and the price'], explanation: 'Jam is a fruit product, so it should carry the FPO mark, along with ingredients, MRP and dates.' },
    ta: { q: 'சஞ்சனா ஒரு ஜாம் புட்டியை வாங்க விரும்புகிறாள். லேபிளில் அவள் கவனிக்க வேண்டிய விவரங்கள் எவை?', options: ['தயாரிப்பு, காலாவதி தேதி, உட்பொருள்கள், அதிகபட்ச விற்பனை விலை, FPO முத்திரை', 'புட்டியின் நிறம் மட்டும்', 'ISI முத்திரை மட்டும்', 'அக்மார்க் முத்திரையும் விலையும் மட்டும்'], explanation: 'ஜாம் ஒரு கனிப் பொருள்; அதில் FPO முத்திரை, உட்பொருள்கள், விலை, தேதிகள் இருக்க வேண்டும்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise X.1, p. 256', answer: 0,
    en: { q: 'Which of these about fat-soluble vitamins are correct?\n(i) Vitamin A deficiency causes xerophthalmia and night blindness.\n(ii) Vitamin K deficiency delays blood clotting.\n(iii) Vitamin E deficiency causes sterility and reproductive abnormalities.\n(iv) Vitamin D deficiency causes scurvy.', options: ['(i), (ii) and (iii) only', '(i) and (iv) only', '(ii), (iii) and (iv) only', '(i), (ii), (iii) and (iv)'], explanation: 'Vitamin D deficiency causes rickets; scurvy is due to lack of vitamin C.' },
    ta: { q: 'கொழுப்பில் கரையும் வைட்டமின்கள் பற்றிய சரியான கூற்றுகள் எவை?\n(i) வைட்டமின் A குறைவால் சீரோப்தால்மியா, மாலைக்கண் நோய் ஏற்படும்.\n(ii) வைட்டமின் K குறைவால் இரத்தம் உறைதல் தாமதமாகும்.\n(iii) வைட்டமின் E குறைவால் மலட்டுத்தன்மை, இனப்பெருக்கக் கோளாறுகள் ஏற்படும்.\n(iv) வைட்டமின் D குறைவால் ஸ்கர்வி ஏற்படும்.', options: ['(i), (ii), (iii) மட்டும்', '(i), (iv) மட்டும்', '(ii), (iii), (iv) மட்டும்', '(i), (ii), (iii), (iv)'], explanation: 'வைட்டமின் D குறைவால் ரிக்கெட்ஸ் ஏற்படும்; ஸ்கர்வி வைட்டமின் C குறைவால் ஏற்படும்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise X.2, p. 256', answer: 0,
    en: { q: 'Which food control agency is correctly matched with the products it certifies?', options: ['FPO – juices, jams, sauces and pickles', 'ISI – cereals, pulses and honey', 'AGMARK – electrical switches and water heaters', 'FCI – canned fruits and vegetables'], explanation: 'FPO certifies fruit products; ISI is for industrial goods, AGMARK for agricultural products, and FCI distributes food grains.' },
    ta: { q: 'உணவுக் கட்டுப்பாட்டு நிறுவனமும் அது சான்றளிக்கும் பொருள்களும் சரியாகப் பொருந்திய இணை எது?', options: ['FPO – பழரசம், ஜாம், சாஸ், ஊறுகாய்', 'ISI – தானியங்கள், பருப்புகள், தேன்', 'அக்மார்க் – மின் சுவிட்சுகள், நீர் சூடேற்றிகள்', 'FCI – பதப்படுத்தப்பட்ட கனிகள், காய்கறிகள்'], explanation: 'FPO கனிப் பொருள்களுக்கு; ISI தொழிற்சாலைப் பொருள்களுக்கு; அக்மார்க் வேளாண் பொருள்களுக்கு; FCI உணவு தானியங்களை விநியோகிக்கிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise IX.7, p. 256', answer: 0,
    en: { q: 'Which preservation method is correctly matched with how it works?', options: ['Canning – food sealed in air-tight steamed containers and heated to destroy microbes', 'Freezing – food kept above 100 °C', 'Smoking – food dipped in sugar syrup', 'Drying – food exposed to gamma rays'], explanation: 'In canning, food is sealed under pressure in clean air-tight containers and heated, then cooled.' },
    ta: { q: 'உணவுப் பாதுகாப்பு முறையும் அது செயல்படும் விதமும் சரியாகப் பொருந்தியது எது?', options: ['கலன்களில் அடைத்தல் – காற்றுப் புகாத கலன்களில் அடைத்து அதிக வெப்பத்தில் நுண்ணுயிரிகள் அழிக்கப்படுதல்', 'உறைய வைத்தல் – 100 °C க்கு மேல் வைத்தல்', 'புகையிடுதல் – சர்க்கரைப் பாகில் ஊறவைத்தல்', 'உலர்த்துதல் – காமா கதிர்களைச் செலுத்துதல்'], explanation: 'கலன்களில் அடைத்தலில் உணவு காற்றுப் புகாத கலன்களில் அடைக்கப்பட்டு அதிக வெப்பத்திற்கு உட்படுத்தி குளிர்விக்கப்படுகிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise IX.8, p. 256', answer: 0,
    en: { q: 'Which of these are health effects of consuming adulterated food?\n(i) Diarrhoea and vomiting\n(ii) Kidney and liver failure\n(iii) Allergies and neurological disorders\n(iv) Improved immunity', options: ['(i), (ii) and (iii) only', '(i) and (iv) only', '(iv) only', '(ii) and (iv) only'], explanation: 'Adulterated food can cause many disorders, including immune suppression – not improved immunity.' },
    ta: { q: 'கலப்பட உணவை உண்பதால் ஏற்படும் உடல்நல விளைவுகள் எவை?\n(i) வயிற்றுப்போக்கு, வாந்தி\n(ii) சிறுநீரகம், கல்லீரல் செயலிழப்பு\n(iii) ஒவ்வாமை, நரம்புக் கோளாறுகள்\n(iv) நோய் எதிர்ப்புத் திறன் அதிகரிப்பு', options: ['(i), (ii), (iii) மட்டும்', '(i), (iv) மட்டும்', '(iv) மட்டும்', '(ii), (iv) மட்டும்'], explanation: 'கலப்பட உணவு பல கோளாறுகளை உண்டாக்கும்; நோய் எதிர்ப்புத் திறனைக் குறைக்கும், அதிகரிக்காது.' },
  },
  {
    difficulty: 'hard', source: '§21.5, p. 252', answer: 0,
    en: { q: 'Calcium carbide used to ripen bananas and mangoes is an example of', options: ['an intentionally added adulterant', 'a natural adulterant', 'an incidental adulterant', 'a natural preservative'], explanation: 'Chemicals like calcium carbide are added deliberately for financial gain.' },
    ta: { q: 'வாழை, மாம்பழங்களைப் பழுக்க வைக்கப் பயன்படும் கால்சியம் கார்பைடு எதற்கு எடுத்துக்காட்டு?', options: ['தெரிந்தே சேர்க்கப்படும் கலப்படப் பொருள்', 'இயற்கையான கலப்படப் பொருள்', 'தெரியாமல் சேர்க்கப்படும் கலப்படப் பொருள்', 'இயற்கை உணவுப் பாதுகாப்புப் பொருள்'], explanation: 'பண ஆதாயத்திற்காக கால்சியம் கார்பைடு போன்ற வேதிப்பொருள்கள் தெரிந்தே சேர்க்கப்படுகின்றன.' },
  },
  {
    difficulty: 'hard', source: '§21.5, p. 252', answer: 0,
    en: { q: 'Pesticide residues and Salmonella contamination in ready-to-eat meat are classified as', options: ['incidental (unintentionally added) adulterants', 'intentionally added adulterants', 'natural adulterants', 'synthetic preservatives'], explanation: 'These enter food unknowingly through ignorance or carelessness during handling and packaging.' },
    ta: { q: 'பூச்சிக்கொல்லி எச்சங்களும் தயார் நிலை இறைச்சியில் சால்மோனல்லா மாசும் எவ்வகைக் கலப்படப் பொருள்கள்?', options: ['தற்செயலாக / தெரியாமல் சேர்க்கப்படும் கலப்படப் பொருள்கள்', 'தெரிந்தே சேர்க்கப்படும் கலப்படப் பொருள்கள்', 'இயற்கையான கலப்படப் பொருள்கள்', 'செயற்கைப் பாதுகாப்புப் பொருள்கள்'], explanation: 'உணவைக் கையாளும்போதும் பொதியிடும்போதும் அறியாமை அல்லது கவனக்குறைவால் இவை சேர்கின்றன.' },
  },
  {
    difficulty: 'hard', source: '§21.6.1, p. 254', answer: 0,
    en: { q: 'A few pinches of coffee powder are sprinkled on water. Most of it floats but some powder settles at the bottom. This suggests the coffee is adulterated with', options: ['tamarind powder', 'chalk powder', 'water', 'sugar solution'], explanation: 'Pure coffee powder floats; tamarind powder added as an adulterant settles down.' },
    ta: { q: 'ஒரு குவளை நீரில் சில சிட்டிகை காப்பித்தூளைத் தூவும்போது பெரும்பகுதி மிதக்கிறது, சில தூள் அடியில் படிகிறது. இது எதனுடன் கலப்படம் செய்யப்பட்டுள்ளதைக் காட்டுகிறது?', options: ['புளியங்கொட்டைப் பொடி', 'சாக்பீஸ் பொடி', 'நீர்', 'சர்க்கரைக் கரைசல்'], explanation: 'தூய காப்பித்தூள் மிதக்கும்; புளியங்கொட்டைப் பொடி கலந்திருந்தால் அது அடியில் படியும்.' },
  },
  {
    difficulty: 'hard', source: '§21.6.1, p. 254', answer: 0,
    en: { q: 'A drop of milk placed on a slanting polished surface flows fast without leaving a trail. This indicates that the milk is', options: ['adulterated with water', 'pure', 'adulterated with starch', 'pasteurised'], explanation: 'Pure milk flows slowly leaving a white trail; watered milk flows fast without a trail.' },
    ta: { q: 'சாய்வான பளபளப்பான பரப்பில் வைத்த ஒரு துளி பால் தடம் இல்லாமல் வேகமாக வடிகிறது. இது காட்டுவது', options: ['பாலில் நீர் கலக்கப்பட்டுள்ளது', 'பால் தூய்மையானது', 'பாலில் ஸ்டார்ச் கலக்கப்பட்டுள்ளது', 'பால் பாஸ்டர் பதனம் செய்யப்பட்டது'], explanation: 'தூய பால் மெதுவாக வழிந்து தடம் விடும்; நீர் கலந்த பால் தடமின்றி வேகமாக வடியும்.' },
  },
  {
    difficulty: 'hard', source: '§21.4.1, p. 251', answer: 0,
    en: { q: 'Bananas kept in a refrigerator turn dark brown because', options: ['the ripening enzyme becomes inactive while the browning enzyme becomes more active', 'cold temperature adds iron to the peel', 'freezing removes all the water from the fruit', 'microorganisms grow faster at low temperature'], explanation: 'In the cold, the enzyme causing browning and cell damage becomes more active, darkening the skin.' },
    ta: { q: 'குளிர்சாதனப் பெட்டியில் வைத்த வாழைப்பழங்களின் தோல் கரும்பழுப்பு நிறமாக மாறக் காரணம்', options: ['பழுக்கச் செய்யும் நொதி செயலிழந்து, பழுப்பு நிறத்தை உருவாக்கும் நொதி அதிகம் செயல்படுகிறது', 'குளிர் தோலில் இரும்பைச் சேர்க்கிறது', 'உறைதல் பழத்திலுள்ள நீர் முழுவதையும் நீக்குகிறது', 'குறைந்த வெப்பநிலையில் நுண்ணுயிரிகள் வேகமாக வளர்கின்றன'], explanation: 'குளிரில் பழுக்கச் செய்யும் நொதி செயலிழக்கிறது; பழுப்பு நிறம், செல் சேதத்திற்குக் காரணமான நொதி அதிகம் செயல்படுகிறது.' },
  },
  {
    difficulty: 'hard', source: '§21.4.2, p. 251', answer: 0,
    en: { q: 'Which pairing of a natural preservative with the way it preserves food is correct?', options: ['Sugar in jams – hygroscopic, reduces the water content of the food', 'Oil in pickles – kills microbes by osmosis', 'Salt in fish – coats the food and blocks air', 'Sugar in squash – adds ionising radiation'], explanation: 'Sugar/honey absorbs moisture (hygroscopic); oil keeps air away from pickles; salt removes water by osmosis.' },
    ta: { q: 'இயற்கைப் பாதுகாப்புப் பொருளும் அது உணவைப் பாதுகாக்கும் விதமும் சரியாகப் பொருந்தியது எது?', options: ['ஜாமில் சர்க்கரை – நீர் உறிஞ்சும் தன்மையால் உணவிலுள்ள நீரைக் குறைக்கிறது', 'ஊறுகாயில் எண்ணெய் – சவ்வூடு பரவலால் நுண்ணுயிரிகளைக் கொல்கிறது', 'மீனில் உப்பு – உணவை மூடிக் காற்றைத் தடுக்கிறது', 'பழச்சாற்றில் சர்க்கரை – அயனியாக்கும் கதிர்களைச் சேர்க்கிறது'], explanation: 'சர்க்கரை/தேன் ஈரத்தை உறிஞ்சும்; எண்ணெய் ஊறுகாயில் காற்றுடன் தொடர்பைத் தடுக்கும்; உப்பு சவ்வூடு பரவலால் நீரை நீக்கும்.' },
  },
  {
    difficulty: 'hard', source: '§21.2, p. 250', answer: 0,
    en: { q: 'An 8-month-old infant is severely underweight and wasted because the diet is poor in carbohydrates, fats and proteins. The condition is most likely', options: ['marasmus', 'kwashiorkor', 'goitre', 'rickets'], explanation: 'Marasmus affects infants below one year when all of carbohydrates, fats and proteins are lacking.' },
    ta: { q: '8 மாதக் குழந்தை ஒன்று உணவில் கார்போஹைட்ரேட், கொழுப்பு, புரதம் அனைத்தும் குறைவதால் மிகவும் மெலிந்து காணப்படுகிறது. இந்நிலை பெரும்பாலும்', options: ['மராஸ்மஸ்', 'குவாஷியோர்கர்', 'முன் கழுத்துக் கழலை', 'ரிக்கெட்ஸ்'], explanation: 'ஒரு வயதுக்குட்பட்ட குழந்தைகளில் கார்போஹைட்ரேட், கொழுப்பு, புரதம் அனைத்தும் குறைந்தால் மராஸ்மஸ் ஏற்படும்.' },
  },
  {
    difficulty: 'hard', source: '§21.3, p. 250', answer: 0,
    en: { q: 'Which of these are external factors responsible for food spoilage?\n(i) Contaminated utensils\n(ii) Unhygienic cooking area\n(iii) Enzymatic activity in the food\n(iv) Lack of storage facilities', options: ['(i), (ii) and (iv) only', '(i), (ii) and (iii) only', '(iii) only', '(iii) and (iv) only'], explanation: 'Enzymatic activity and moisture content are internal factors; the rest are external.' },
    ta: { q: 'உணவு கெட்டுப்போவதற்கான வெளிக்காரணிகள் எவை?\n(i) மாசடைந்த பாத்திரங்கள்\n(ii) சுகாதாரமற்ற சமையலிடம்\n(iii) உணவிலுள்ள நொதிகளின் செயல்பாடு\n(iv) சேமிப்பு வசதியின்மை', options: ['(i), (ii), (iv) மட்டும்', '(i), (ii), (iii) மட்டும்', '(iii) மட்டும்', '(iii), (iv) மட்டும்'], explanation: 'நொதிகளின் செயல்பாடும் ஈரப்பதமும் உள்காரணிகள்; மற்றவை வெளிக்காரணிகள்.' },
  },
];
