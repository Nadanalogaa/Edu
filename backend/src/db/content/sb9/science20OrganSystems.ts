// Tamil Nadu State Board, 9th Science, Unit 20 – Organ Systems in Animals (விலங்குகளின் உறுப்பு மண்டலங்கள்).
// Textbook exercises converted to MCQs plus our own questions covering every section.
// source = section / exercise and printed page of the English-medium book.
import { BankQuestion, AR_EN, AR_TA } from './types';

const IMG = '/content/9/state_board/science/20';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.1, p. 244', answer: 0,
    en: { q: 'Which of the following is NOT a salivary gland?', options: ['Lachrymal', 'Sublingual', 'Submaxillary', 'Parotid'], explanation: 'The three pairs of salivary glands are parotid, sublingual and submaxillary; lachrymal glands produce tears.' },
    ta: { q: 'கீழ்க்காண்பனவற்றில் எது உமிழ்நீர் சுரப்பி இல்லை?', options: ['லாக்ரிமால் (கண்ணீர்ச் சுரப்பி)', 'நாவடிச் சுரப்பி', 'கீழ்த்தாடைச் சுரப்பி', 'மேலண்ணச் சுரப்பி'], explanation: 'மேலண்ணச் சுரப்பி, நாவடிச் சுரப்பி, தாடைச் சுரப்பி ஆகியவை உமிழ்நீர்ச் சுரப்பிகள்; லாக்ரிமால் கண்ணீரைச் சுரக்கிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.3, p. 244', answer: 0,
    en: { q: 'The opening of the trachea is guarded by the _____ to prevent the entry of food.', options: ['epiglottis', 'glottis', 'hard palate', 'soft palate'], explanation: 'During swallowing, the flap-like epiglottis closes the glottis so food does not enter the windpipe.' },
    ta: { q: 'மூச்சுக்குழலின் துளைக்குள் உணவு நுழைவதைத் தடுப்பது _____ ஆகும்.', options: ['குரல்வளை மூடி', 'குரல்வளை முனை', 'கடின அண்ணம்', 'மிருதுவான அண்ணம்'], explanation: 'விழுங்கும்போது மடல் போன்ற குரல்வளை மூடி மூச்சுக்குழலை மூடி உணவு நுழைவதைத் தடுக்கிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.5, p. 244', answer: 0,
    en: { q: 'The structural and functional unit of the kidney is the', options: ['nephron', 'villus', 'liver', 'ureter'], explanation: 'Nephrons (uriniferous tubules) are the structural and functional units of the kidney.' },
    ta: { q: 'சிறுநீரகத்தின் அடிப்படைச் செயல் அலகு', options: ['நெஃப்ரான்', 'குடலுறிஞ்சி', 'கல்லீரல்', 'சிறுநீரக்குழாய்'], explanation: 'நெஃப்ரான்கள் (சிறுநீரக நுண்குழல்கள்) சிறுநீரகத்தின் அமைப்பு மற்றும் செயல் அலகுகள்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.8, p. 244', answer: 0,
    en: { q: 'Which of the following is NOT a part of the female reproductive system?', options: ['Testes', 'Ovary', 'Uterus', 'Fallopian tube'], explanation: 'Testes are the male gonads.' },
    ta: { q: 'கீழ்க்காண்பனவற்றில் எது பெண் இனப்பெருக்க மண்டலத்தில் காணப்படாத பகுதி?', options: ['விந்தகம்', 'அண்டகம்', 'கருப்பை', 'அண்டக்குழாய்'], explanation: 'விந்தகங்கள் ஆண் பாலினச் சுரப்பிகள்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.1, p. 244', answer: 0,
    en: { q: 'The opening of the stomach into the intestine is called the _____.', options: ['pylorus', 'cardiac opening', 'epiglottis', 'anal sphincter'], explanation: 'Chyme moves slowly from the stomach into the intestine through the pylorus.' },
    ta: { q: 'சிறுகுடலோடு இரைப்பை இணையும் பகுதி _____ ஆகும்.', options: ['பைலோரஸ்', 'இதய முனை', 'குரல்வளை மூடி', 'மலவாய் சுருக்குத்தசை'], explanation: 'இரைப்பையிலிருந்து அரைசெரித்த உணவு பைலோரஸ் வழியாகச் சிறுகுடலுக்குச் செல்கிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.2, p. 244', answer: 0,
    en: { q: 'The muscular and sensory organ which helps in mixing food with saliva is the _____.', options: ['tongue', 'pharynx', 'oesophagus', 'palate'], explanation: 'The tongue mixes food with saliva and its taste buds sense taste.' },
    ta: { q: 'உமிழ்நீரோடு உணவைக் கலக்க உதவும் தசையாலான, உணர்வு உறுப்பு _____ ஆகும்.', options: ['நாக்கு', 'தொண்டை', 'உணவுக் குழல்', 'அண்ணம்'], explanation: 'நாக்கு உணவை உமிழ்நீருடன் கலக்கிறது; அதிலுள்ள சுவை மொட்டுகள் சுவையை உணர்கின்றன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.3, p. 244', answer: 0,
    en: { q: 'Bile, secreted by the liver, is stored temporarily in the _____.', options: ['gall bladder', 'pancreas', 'duodenum', 'urinary bladder'], explanation: 'Liver cells secrete bile, which is stored in the gall bladder until food enters the intestine.' },
    ta: { q: 'கல்லீரலால் சுரக்கப்படும் பித்தநீர் தற்காலிகமாக _____ ல் சேமித்து வைக்கப்படுகிறது.', options: ['பித்தப்பை', 'கணையம்', 'முன்சிறுகுடல்', 'சிறுநீர்ப்பை'], explanation: 'கல்லீரல் சுரக்கும் பித்தநீர் பித்தப்பையில் சேமிக்கப்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.4, p. 244', answer: 0,
    en: { q: 'The longest part of the alimentary canal is the _____.', options: ['small intestine', 'large intestine', 'oesophagus', 'stomach'], explanation: 'The small intestine is a coiled tube about 5–7 m long.' },
    ta: { q: 'உணவுப் பாதையில் மிகவும் நீளமான பகுதி _____ ஆகும்.', options: ['சிறுகுடல்', 'பெருங்குடல்', 'உணவுக் குழல்', 'இரைப்பை'], explanation: 'சிறுகுடல் ஏறக்குறைய 5–7 மீ நீளமுடைய சுருண்ட குழல்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.5, p. 244', answer: 0,
    en: { q: 'The human body functions normally at a temperature of about _____.', options: ['37 °C', '27 °C', '47 °C', '98 °C'], explanation: 'Normal human body temperature is about 37 °C.' },
    ta: { q: 'மனித உடலானது _____ வெப்பநிலையில் இயல்பாகச் செயல்படுகிறது.', options: ['37 °C', '27 °C', '47 °C', '98 °C'], explanation: 'மனித உடலின் இயல்பான வெப்பநிலை ஏறக்குறைய 37 °C.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.6, p. 244', answer: 0,
    en: { q: 'The largest cell in the human female body is the _____.', options: ['ovum', 'nerve cell', 'red blood cell', 'sperm'], explanation: 'The ovum is the largest human cell; the sperm is the smallest.' },
    ta: { q: 'பெண்களின் உடலிலுள்ள மிகப்பெரிய செல் _____ ஆகும்.', options: ['கருமுட்டை', 'நரம்பு செல்', 'இரத்தச் சிவப்பணு', 'விந்தணு'], explanation: 'கருமுட்டையே மிகப்பெரிய மனித செல்; விந்தணு மிகச் சிறிய செல்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise VI.4, p. 245', answer: 0,
    en: { q: 'The expulsion of urine from the urinary bladder through the urethra is called', options: ['micturition', 'egestion', 'perspiration', 'ultrafiltration'], explanation: 'When the bladder is full, urine is expelled through the urethra – micturition.' },
    ta: { q: 'சிறுநீர்ப்பையிலிருந்து சிறுநீர்ப் புறவழிக்குழாய் வழியாகச் சிறுநீர் வெளியேறும் நிகழ்வு', options: ['மைக்டியூரிஷன்', 'மலம் வெளியேற்றுதல்', 'வியர்த்தல்', 'நுண் வடிகட்டுதல்'], explanation: 'சிறுநீர்ப்பை நிரம்பியதும் சிறுநீர் வெளியேறும் நிகழ்வு மைக்டியூரிஷன் எனப்படும்.' },
  },
  {
    difficulty: 'easy', source: 'Introduction, p. 233', answer: 0,
    en: { q: 'Organs and organ systems first appeared in the phylum', options: ['Platyhelminthes', 'Porifera', 'Coelenterata', 'Protozoa'], explanation: 'Organ and organ systems appeared first in Platyhelminthes and continue up to mammals.' },
    ta: { q: 'உறுப்புகளும் உறுப்பு மண்டலங்களும் முதன்முதலில் தோன்றிய தொகுதி', options: ['தட்டைப்புழுக்கள் (பிளாட்டிஹெல்மின்தஸ்)', 'துளையுடலிகள் (போரிஃபெரா)', 'குழியுடலிகள்', 'புரோட்டோசோவா'], explanation: 'உறுப்பு மண்டலங்கள் தட்டைப்புழுக்கள் தொகுதியில் முதலில் தோன்றி பாலூட்டிகள் வரை தொடர்கின்றன.' },
  },
  {
    difficulty: 'easy', source: '§20.1.1, p. 235', answer: 0,
    en: { q: 'The number of permanent teeth in an adult human is', options: ['32', '20', '28', '16'], explanation: 'The 20 milk teeth are replaced by 32 permanent teeth, 16 in each jaw.' },
    ta: { q: 'முதிர்ந்த மனிதனின் நிரந்தரப் பற்களின் எண்ணிக்கை', options: ['32', '20', '28', '16'], explanation: '20 பால் பற்களுக்குப் பதிலாக 32 நிரந்தரப் பற்கள் (ஒரு தாடைக்கு 16) தோன்றுகின்றன.' },
  },
  {
    difficulty: 'easy', source: '§20.1.1, p. 236', answer: 0,
    en: { q: 'The enzyme ptyalin in saliva converts starch into', options: ['maltose', 'glucose', 'peptones', 'fatty acids'], explanation: 'Ptyalin (salivary amylase) converts starch (polysaccharide) into maltose (disaccharide).' },
    ta: { q: 'உமிழ்நீரில் உள்ள டயலின் (அமிலேஸ்) நொதி ஸ்டார்ச்சை எதுவாக மாற்றுகிறது?', options: ['மால்டோஸ்', 'குளுக்கோஸ்', 'பெப்டோன்கள்', 'கொழுப்பு அமிலங்கள்'], explanation: 'டயலின் ஸ்டார்ச்சை (கூட்டுச் சர்க்கரை) மால்டோஸாக (இரட்டைச் சர்க்கரை) மாற்றுகிறது.' },
  },
  {
    difficulty: 'easy', source: '§20.1.1, p. 237', answer: 0,
    en: { q: 'The largest digestive gland of the human body is the', options: ['liver', 'pancreas', 'parotid gland', 'gastric gland'], explanation: 'The reddish-brown liver is the largest digestive gland.' },
    ta: { q: 'மனித உடலின் மிகப்பெரிய செரிமானச் சுரப்பி', options: ['கல்லீரல்', 'கணையம்', 'மேலண்ணச் சுரப்பி', 'இரைப்பைச் சுரப்பி'], explanation: 'சிவந்த பழுப்பு நிறக் கல்லீரலே மிகப்பெரிய செரிமானச் சுரப்பி.' },
  },
  {
    difficulty: 'easy', source: '§20.2, p. 239', answer: 0,
    en: { q: 'The major nitrogenous excretory product in human beings is', options: ['urea', 'uric acid', 'ammonia', 'creatinine'], explanation: 'In human beings urea is the major excretory product.' },
    ta: { q: 'மனிதனின் முக்கிய நைட்ரஜன் கழிவுப் பொருள்', options: ['யூரியா', 'யூரிக் அமிலம்', 'அம்மோனியா', 'கிரியாட்டினின்'], explanation: 'மனிதரில் யூரியா முக்கியக் கழிவுப் பொருளாகும்.' },
  },
  {
    difficulty: 'easy', source: '§20.3.1, p. 242', answer: 0,
    en: { q: 'The male sex hormone produced by the testes is', options: ['testosterone', 'oestrogen', 'progesterone', 'insulin'], explanation: 'Testes produce sperms and the male sex hormone testosterone.' },
    ta: { q: 'விந்தகங்கள் உற்பத்தி செய்யும் ஆண் பாலின ஹார்மோன்', options: ['டெஸ்டோஸ்டிரான்', 'ஈஸ்ட்ரோஜன்', 'புரோஜெஸ்டிரான்', 'இன்சுலின்'], explanation: 'விந்தகங்கள் விந்தணுக்களையும் டெஸ்டோஸ்டிரான் ஹார்மோனையும் உற்பத்தி செய்கின்றன.' },
  },
  {
    difficulty: 'easy', source: '§20.3.2, p. 242', answer: 0,
    en: { q: 'The finger-like projections at the funnel-shaped end of the fallopian tube that pick up the ovum are called', options: ['fimbriae', 'villi', 'cilia', 'lacteals'], explanation: 'Fimbriae lie near the ovary, pick up the released ovum and push it into the fallopian tube.' },
    ta: { q: 'அண்டக் குழாயின் புனல் வடிவ முனையில் உள்ள, கருமுட்டையை எடுத்துச் செல்லும் விரல் போன்ற நீட்சிகள்', options: ['ஃபிம்பிரியே', 'குடலுறிஞ்சிகள்', 'குறு இழைகள்', 'நிணநீர் நாளங்கள்'], explanation: 'அண்டகத்தின் அருகிலுள்ள ஃபிம்பிரியே வெளியான கருமுட்டையை எடுத்து அண்டக் குழாய்க்குள் தள்ளுகின்றன.' },
  },
  // ---------------------------------------------------------------- Medium
  {
    difficulty: 'medium', source: 'Book exercise I.2, p. 244', answer: 0,
    en: { q: 'The stomach of human beings mainly digests', options: ['proteins', 'carbohydrates', 'fat', 'sucrose'], explanation: 'Pepsin in gastric juice acts on proteins, converting them to peptones.' },
    ta: { q: 'மனிதனின் இரைப்பையில் பெரும்பாலும் செரிப்பவை', options: ['புரதங்கள்', 'கார்போஹைட்ரேட்டுகள்', 'கொழுப்பு', 'சுக்ரோஸ்'], explanation: 'இரைப்பை நீரிலுள்ள பெப்சின் புரதங்களைப் பெப்டோன்களாக மாற்றுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.4, p. 244', answer: 0,
    en: { q: 'Bile helps in the digestion of', options: ['fats', 'proteins', 'sugar', 'carbohydrates'], explanation: 'Bile salts emulsify fats, breaking large fat droplets into small ones.' },
    ta: { q: 'பித்தநீர் _____ செரிக்க உதவுகிறது.', options: ['கொழுப்புகள்', 'புரதங்கள்', 'சர்க்கரை', 'கார்போஹைட்ரேட்டுகள்'], explanation: 'பித்த உப்புகள் பெரிய கொழுப்புத் துளிகளைச் சிறியதாக்கி (பால்மமாக்கம்) கொழுப்புச் செரிமானத்திற்கு உதவுகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.6, p. 244', answer: 0,
    en: { q: 'Which one of the following is NOT a constituent of sweat?', options: ['Protein', 'Urea', 'Water', 'Salt'], explanation: 'Sweat contains water with small amounts of urea, ammonia, lactic acid and salts – not protein.' },
    ta: { q: 'கீழ்க்காண்பனவற்றில் எது வியர்வையின் உட்கூறு இல்லை?', options: ['புரதம்', 'யூரியா', 'நீர்', 'உப்பு'], explanation: 'வியர்வையில் நீர், சிறிதளவு யூரியா, அம்மோனியா, லாக்டிக் அமிலம், உப்புகள் உள்ளன; புரதம் இல்லை.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.7, p. 244', answer: 0,
    en: { q: 'The common passage for transporting urine and sperms in males is the', options: ['urethra', 'ureter', 'vas deferens', 'scrotum'], explanation: 'The urethra inside the penis carries both urine and sperms to the exterior.' },
    ta: { q: 'ஆண்களில் சிறுநீரையும் விந்தையும் கடத்துவதற்கான பொதுவான பாதை', options: ['சிறுநீர்ப் புறவழிக்குழாய்', 'சிறுநீரக்குழாய்', 'விந்து நாளம்', 'விரைப்பை'], explanation: 'ஆணுறுப்பினுள் உள்ள சிறுநீர்ப் புறவழிக்குழாய் சிறுநீர், விந்து இரண்டையும் வெளியேற்றுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.1, p. 244', answer: 0,
    en: { q: '"Nitric acid in the stomach kills microorganisms in the food." Choose the correct version.', options: ['False – hydrochloric acid in the stomach kills them', 'True as stated', 'False – sulphuric acid in the stomach kills them', 'False – bile in the stomach kills them'], explanation: 'Gastric glands secrete hydrochloric acid, which kills bacteria swallowed with food.' },
    ta: { q: '"இரைப்பையில் காணப்படும் நைட்ரிக் அமிலம் உணவிலுள்ள நுண்ணுயிரிகளைக் கொல்லுகிறது." சரியான வடிவத்தைத் தேர்ந்தெடு.', options: ['தவறு – ஹைட்ரோகுளோரிக் அமிலம் அவற்றைக் கொல்லுகிறது', 'கூற்று சரி', 'தவறு – சல்பியூரிக் அமிலம் அவற்றைக் கொல்லுகிறது', 'தவறு – பித்தநீர் அவற்றைக் கொல்லுகிறது'], explanation: 'இரைப்பைச் சுரப்பிகள் சுரக்கும் ஹைட்ரோகுளோரிக் அமிலம் உணவுடன் வரும் பாக்டீரியாக்களைக் கொல்லுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.2, p. 244', answer: 0,
    en: { q: 'Which statement about protein digestion is correct?', options: ['During digestion, proteins are broken down into amino acids.', 'During digestion, proteins are broken down into fatty acids.', 'During digestion, proteins are broken down into glucose.', 'Proteins are absorbed without being digested.'], explanation: 'The book statement is true: pepsin, trypsin and chymotrypsin finally yield peptides and amino acids.' },
    ta: { q: 'புரதச் செரிமானம் பற்றிய சரியான கூற்று எது?', options: ['செரிமானத்தின் போது புரதங்கள் அமினோ அமிலங்களாக உடைக்கப்படுகின்றன.', 'செரிமானத்தின் போது புரதங்கள் கொழுப்பு அமிலங்களாக உடைக்கப்படுகின்றன.', 'செரிமானத்தின் போது புரதங்கள் குளுக்கோஸாக உடைக்கப்படுகின்றன.', 'புரதங்கள் செரிக்கப்படாமலே உறிஞ்சப்படுகின்றன.'], explanation: 'இக்கூற்று சரி: பெப்சின், டிரிப்சின் போன்ற நொதிகள் புரதங்களை இறுதியில் அமினோ அமிலங்களாக்குகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.3, p. 244', answer: 0,
    en: { q: 'Which statement about glomerular filtrate is correct?', options: ['It contains amino acids, vitamins, hormones, salts, glucose and other substances.', 'It contains only urea and water.', 'It contains blood cells and plasma proteins.', 'It is formed in the loop of Henle.'], explanation: 'The book statement is true: both essential and non-essential substances in blood are filtered into Bowman’s capsule.' },
    ta: { q: 'கிளாமருலார் வடிதிரவம் பற்றிய சரியான கூற்று எது?', options: ['இதில் அமினோ அமிலங்கள், வைட்டமின்கள், ஹார்மோன்கள், உப்புகள், குளுக்கோஸ் போன்றவை உள்ளன.', 'இதில் யூரியாவும் நீரும் மட்டுமே உள்ளன.', 'இதில் இரத்த செல்களும் பிளாஸ்மா புரதங்களும் உள்ளன.', 'இது ஹென்லேயின் வளைவில் உருவாகிறது.'], explanation: 'இக்கூற்று சரி: இரத்தத்திலுள்ள தேவையான, தேவையற்ற பொருள்கள் இரண்டும் பௌமானின் கிண்ணத்தில் வடிகட்டப்படுகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV, p. 244', answer: 0,
    en: { q: 'Match the organ with what it eliminates:\n1. Skin 2. Lungs 3. Intestine 4. Kidneys\n(a) urine (b) sweat (c) carbon dioxide (d) undigested food', options: ['1-b, 2-c, 3-d, 4-a', '1-a, 2-c, 3-d, 4-b', '1-b, 2-d, 3-c, 4-a', '1-c, 2-b, 3-a, 4-d'], explanation: 'Skin – sweat, lungs – CO₂, intestine – undigested food, kidneys – urine.' },
    ta: { q: 'உறுப்பையும் அது நீக்குவதையும் பொருத்துக:\n1. தோல் 2. நுரையீரல்கள் 3. பெருங்குடல் 4. சிறுநீரகங்கள்\n(a) சிறுநீர் (b) வியர்வை (c) கார்பன் டைஆக்சைடு (d) செரிக்காத உணவு', options: ['1-b, 2-c, 3-d, 4-a', '1-a, 2-c, 3-d, 4-b', '1-b, 2-d, 3-c, 4-a', '1-c, 2-b, 3-a, 4-d'], explanation: 'தோல் – வியர்வை, நுரையீரல் – CO₂, பெருங்குடல் – செரிக்காத உணவு, சிறுநீரகம் – சிறுநீர்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V(d), p. 244', answer: 0,
    en: { q: 'Humans are diphyodont and heterodont. This means they have', options: ['two sets of teeth in a lifetime, and teeth of different types', 'one set of teeth, all of the same type', 'teeth fixed in sockets of the jaw only', 'teeth that grow throughout life'], explanation: 'Diphyodont: two sets (milk and permanent). Heterodont: four types – incisors, canines, premolars and molars.' },
    ta: { q: 'மனிதர்கள் இரட்டைப் பல்வரிசையும் கலப்புப் பல்வரிசையும் உடையவர்கள். இதன் பொருள்', options: ['வாழ்நாளில் இரண்டு தொகுப்புப் பற்கள் தோன்றுகின்றன; பற்கள் பல வகையானவை', 'ஒரே ஒரு தொகுப்பு; எல்லாப் பற்களும் ஒரே வகை', 'பற்கள் தாடைக் குழிகளில் மட்டும் பொருந்தியுள்ளன', 'பற்கள் வாழ்நாள் முழுவதும் வளர்கின்றன'], explanation: 'இரட்டைப் பல்வரிசை: பால் பற்கள், நிரந்தரப் பற்கள். கலப்புப் பல்வரிசை: வெட்டுப் பற்கள், கோரைப் பற்கள், முன், பின் கடைவாய்ப் பற்கள்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V(e), p. 244', answer: 0,
    en: { q: 'Incisors and canines differ in function because', options: ['incisors cut and bite, while canines tear and pierce', 'incisors grind food, while canines cut it', 'incisors tear food, while canines crush it', 'both mainly grind and masticate food'], explanation: 'Table 20.2: incisors (8) cut and bite; canines (4) tear and pierce.' },
    ta: { q: 'வெட்டுப் பற்களும் கோரைப் பற்களும் பணியில் வேறுபடுவது', options: ['வெட்டுப் பற்கள் வெட்டவும் கடிக்கவும், கோரைப் பற்கள் கிழிக்கவும் துளையிடவும் உதவுகின்றன', 'வெட்டுப் பற்கள் அரைக்கவும், கோரைப் பற்கள் வெட்டவும் உதவுகின்றன', 'வெட்டுப் பற்கள் கிழிக்கவும், கோரைப் பற்கள் நசுக்கவும் உதவுகின்றன', 'இரண்டும் முக்கியமாக அரைத்து மெல்ல உதவுகின்றன'], explanation: 'அட்டவணை 20.2: வெட்டுப் பற்கள் (8) வெட்டவும் கடிக்கவும்; கோரைப் பற்கள் (4) கிழிக்கவும் துளையிடவும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V(b), p. 244', answer: 0,
    en: { q: 'The incorporation of absorbed food materials into the tissue cells as their own component is called', options: ['assimilation', 'absorption', 'ingestion', 'egestion'], explanation: 'Absorption is taking nutrients into blood and lymph via villi; assimilation is their incorporation into cells.' },
    ta: { q: 'உறிஞ்சப்பட்ட உணவுப் பொருள்கள் திசு செல்களின் உட்கூறாகச் சேர்க்கப்படுவது', options: ['தன்மயமாதல்', 'உறிஞ்சுதல்', 'உட்கொள்ளுதல்', 'வெளியேற்றுதல்'], explanation: 'உறிஞ்சுதல் என்பது குடலுறிஞ்சிகள் வழியே இரத்தத்தில் சேர்வது; தன்மயமாதல் என்பது அவை செல்களில் இணைக்கப்படுவது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.1, p. 245', answer: 0,
    en: { q: 'The small intestine is well designed to absorb digested food mainly because it has', options: ['millions of finger-like villi containing blood capillaries and lacteals', 'a thick wall without folds', 'many taste buds', 'a ring of sphincter muscles'], explanation: 'About 4 million villi, each with capillaries and a lacteal, give a large surface for absorption.' },
    ta: { q: 'செரிக்கப்பட்ட உணவை உறிஞ்ச சிறுகுடல் ஏற்ற அமைப்பைப் பெற்றிருக்க முக்கியக் காரணம்', options: ['இரத்த நுண்நாளங்களும் நிணநீர் நாளங்களும் கொண்ட லட்சக்கணக்கான விரல் போன்ற குடலுறிஞ்சிகள்', 'மடிப்புகள் இல்லாத தடித்த சுவர்', 'பல சுவை மொட்டுகள்', 'சுருக்குத் தசை வளையம்'], explanation: 'இரத்த நுண்நாளங்களும் நிணநீர் நாளமும் கொண்ட ஏறக்குறைய 40 லட்சம் குடலுறிஞ்சிகள் பெரிய உறிஞ்சும் பரப்பைத் தருகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.2, p. 245', answer: 0,
    en: { q: 'We sweat when it is hot mainly because', options: ['evaporation of sweat cools the body and also removes some wastes', 'sweat adds water to the blood', 'sweat helps digest fats', 'sweat produces urea in the skin'], explanation: 'Sweat glands secrete sweat when hot; its evaporation cools the body, and it carries small amounts of urea and salts.' },
    ta: { q: 'வெப்பமான சூழலில் நமக்கு வியர்க்க முக்கியக் காரணம்', options: ['வியர்வை ஆவியாகி உடலைக் குளிர்விப்பதுடன் சில கழிவுகளையும் நீக்குகிறது', 'வியர்வை இரத்தத்தில் நீரைச் சேர்க்கிறது', 'வியர்வை கொழுப்பைச் செரிக்க உதவுகிறது', 'வியர்வை தோலில் யூரியாவை உருவாக்குகிறது'], explanation: 'வெப்பத்தில் வியர்வைச் சுரப்பிகள் வியர்வையைச் சுரக்கின்றன; அது ஆவியாகி உடலைக் குளிர்விக்கிறது; சிறிதளவு யூரியா, உப்புகளும் நீங்குகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.3, p. 245', answer: 0,
    en: { q: 'Which of these is a vital function of the human kidney?', options: ['Maintaining fluid, electrolyte and acid–base balance of the blood', 'Producing bile for fat digestion', 'Secreting insulin', 'Storing iron and vitamins A and D'], explanation: 'Kidneys maintain fluid and electrolyte balance, acid–base balance and osmotic pressure; the others are liver or pancreas functions.' },
    ta: { q: 'மனித சிறுநீரகத்தின் முக்கியப் பணிகளில் ஒன்று', options: ['நீர், மின்பகு பொருள்கள், அமில–கார சமநிலையைப் பேணுதல்', 'கொழுப்புச் செரிமானத்திற்குப் பித்தநீர் சுரத்தல்', 'இன்சுலின் சுரத்தல்', 'இரும்பு, வைட்டமின் A, D ஐச் சேமித்தல்'], explanation: 'சிறுநீரகம் நீர்–மின்பகு பொருள் சமநிலை, அமில–கார சமநிலை, சவ்வூடு பரவல் அழுத்தத்தைப் பேணுகிறது; மற்றவை கல்லீரல்/கணையப் பணிகள்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.5, p. 245', answer: 0,
    en: { q: 'In each half of the upper and lower jaw of an adult, the dental formula (i, c, pm, m) is', options: ['2, 1, 2, 3', '2, 1, 2', '2, 1, 3, 2', '3, 1, 2, 2'], explanation: 'Permanent teeth: 2 incisors, 1 canine, 2 premolars, 3 molars per half jaw = 16 × 2 = 32.' },
    ta: { q: 'முதிர்ந்த மனிதனின் ஒவ்வொரு பாதி மேல், கீழ்த் தாடையிலும் பல் சூத்திரம் (வெ, கோ, முக, பிக)', options: ['2, 1, 2, 3', '2, 1, 2', '2, 1, 3, 2', '3, 1, 2, 2'], explanation: 'நிரந்தரப் பற்கள்: பாதித் தாடைக்கு 2 வெட்டுப் பற்கள், 1 கோரைப் பல், 2 முன் கடைவாய், 3 பின் கடைவாய் = 16 × 2 = 32.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IX.1, p. 245', answer: 0,
    en: { q: 'If pepsin is lacking in gastric juice, which event in the stomach will be affected?', options: ['Breaking of proteins into peptides', 'Digestion of starch into sugars', 'Digestion of nucleic acids', 'Breaking of fats into glycerol and fatty acids'], explanation: 'Pepsin acts on proteins in the stomach, converting them into peptones/peptides.' },
    ta: { q: 'இரைப்பை நீரில் பெப்சின் குறைவுபட்டால் இரைப்பையில் எச்செயல் பாதிக்கப்படும்?', options: ['புரதங்கள் பெப்டைடுகளாக உடைதல்', 'ஸ்டார்ச் சர்க்கரையாக மாறும் செரிமானம்', 'நியூக்ளிக் அமிலங்களின் செரிமானம்', 'கொழுப்புகள் கிளிசராலாகவும் கொழுப்பு அமிலங்களாகவும் உடைதல்'], explanation: 'இரைப்பையில் பெப்சின் புரதங்களைப் பெப்டோன்கள்/பெப்டைடுகளாக மாற்றுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IX.2, p. 245', answer: 0,
    en: { q: 'The blood vessels that (a) enter and (b) leave the Malpighian capsule are', options: ['(a) afferent arteriole, (b) efferent arteriole', '(a) efferent arteriole, (b) afferent arteriole', '(a) renal vein, (b) renal artery', '(a) ureter, (b) urethra'], explanation: 'Blood enters the glomerulus through the afferent arteriole and leaves through the efferent arteriole.' },
    ta: { q: 'மால்பீஜியன் கிண்ணத்திற்குள் (a) செல்லும், (b) வெளியேறும் இரத்த நாளங்கள்', options: ['(a) உட்செல் நுண் தமனி, (b) வெளிச்செல் நுண் தமனி', '(a) வெளிச்செல் நுண் தமனி, (b) உட்செல் நுண் தமனி', '(a) சிறுநீரகச் சிரை, (b) சிறுநீரகத் தமனி', '(a) சிறுநீரக்குழாய், (b) சிறுநீர்ப் புறவழிக்குழாய்'], explanation: 'இரத்தம் உட்செல் நுண் தமனி வழியாகக் கிளாமருலஸுக்குள் சென்று வெளிச்செல் நுண் தமனி வழியாக வெளியேறுகிறது.' },
  },
  {
    difficulty: 'medium', source: '§20.1.1, p. 236', answer: 0,
    en: { q: 'The wave-like movement that pushes food along the oesophagus is called', options: ['peristalsis', 'emulsification', 'regurgitation', 'mastication'], explanation: 'Rhythmic contraction and relaxation of the gut wall – peristalsis – moves food to the stomach.' },
    ta: { q: 'உணவுக் குழல் வழியே உணவைத் தள்ளும் அலை போன்ற இயக்கம்', options: ['பெரிஸ்டால்சிஸ்', 'பால்மமாக்கம்', 'எதிர்க்களித்தல்', 'மெல்லுதல்'], explanation: 'குடல் தசைச் சுவரின் சீரான சுருங்கி விரிதல் (பெரிஸ்டால்சிஸ்) உணவை இரைப்பைக்குக் கடத்துகிறது.' },
  },
  {
    difficulty: 'medium', source: '§20.1.1, p. 237', answer: 0,
    en: { q: 'In the islets of Langerhans of the pancreas, the β (beta) cells secrete', options: ['insulin', 'glucagon', 'trypsin', 'bile'], explanation: 'α cells secrete glucagon and β cells secrete insulin.' },
    ta: { q: 'கணையத்தின் லாங்கர்ஹான் திட்டுகளில் உள்ள பீட்டா (β) செல்கள் சுரப்பது', options: ['இன்சுலின்', 'குளுக்கோகான்', 'டிரிப்சின்', 'பித்தநீர்'], explanation: 'ஆல்பா செல்கள் குளுக்கோகானையும் பீட்டா செல்கள் இன்சுலினையும் சுரக்கின்றன.' },
  },
  {
    difficulty: 'medium', source: '§20.1.1, p. 238', answer: 0,
    en: { q: 'The enzyme lactase of the intestinal juice converts lactose into', options: ['glucose and galactose', 'glucose and fructose', 'glucose and glucose', 'fatty acids and glycerol'], explanation: 'Table 20.3: lactase – lactose → glucose + galactose; sucrase gives glucose + fructose; maltase gives two glucose.' },
    ta: { q: 'குடல் நீரிலுள்ள லாக்டேஸ் நொதி லாக்டோஸை எதுவாக மாற்றுகிறது?', options: ['குளுக்கோஸ் மற்றும் காலக்டோஸ்', 'குளுக்கோஸ் மற்றும் ஃப்ரக்டோஸ்', 'குளுக்கோஸ் மற்றும் குளுக்கோஸ்', 'கொழுப்பு அமிலங்கள் மற்றும் கிளிசரால்'], explanation: 'லாக்டேஸ்: லாக்டோஸ் → குளுக்கோஸ் + காலக்டோஸ்; சுக்ரேஸ்: குளுக்கோஸ் + ஃப்ரக்டோஸ்; மால்டேஸ்: இரண்டு குளுக்கோஸ்.' },
  },
  {
    difficulty: 'medium', source: '§20.1.1, p. 238', answer: 0,
    en: { q: 'Excess sugar absorbed after digestion is stored in the liver as', options: ['glycogen', 'starch', 'cellulose', 'fat'], explanation: 'Excess sugars are converted into the polysaccharide glycogen in the liver.' },
    ta: { q: 'செரிமானத்திற்குப் பின் அதிகப்படியான சர்க்கரை கல்லீரலில் எவ்வாறு சேமிக்கப்படுகிறது?', options: ['கிளைக்கோஜன்', 'ஸ்டார்ச்', 'செல்லுலோஸ்', 'கொழுப்பு'], explanation: 'அதிகப்படியான சர்க்கரை சிக்கலான கூட்டுச் சர்க்கரையான கிளைக்கோஜனாகக் கல்லீரலில் மாற்றப்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: '§20.2.2, p. 239', answer: 0,
    en: { q: 'The right kidney is placed slightly lower than the left kidney because', options: ['the liver takes up much space on the right side', 'the heart is on the right side', 'the stomach is on the right side', 'the right kidney is larger'], explanation: 'The liver occupies much of the right side of the abdomen, pushing the right kidney lower.' },
    ta: { q: 'வலது சிறுநீரகம் இடது சிறுநீரகத்தை விடச் சற்றுக் கீழே அமைந்திருக்கக் காரணம்', options: ['வலது பக்கத்தில் கல்லீரல் அதிக இடத்தை எடுத்துக்கொள்கிறது', 'இதயம் வலது பக்கத்தில் உள்ளது', 'இரைப்பை வலது பக்கத்தில் உள்ளது', 'வலது சிறுநீரகம் பெரியது'], explanation: 'வயிற்றின் வலது பக்கத்தில் கல்லீரல் அதிக இடத்தை ஆக்கிரமிப்பதால் வலது சிறுநீரகம் கீழே உள்ளது.' },
  },
  {
    difficulty: 'medium', source: '§20.2.4, p. 241', answer: 0,
    en: { q: 'When the kidneys fail, the process of purifying the blood using an artificial kidney is called', options: ['haemodialysis', 'micturition', 'ultrafiltration', 'transplantation'], explanation: 'A patient put on an artificial kidney undergoes haemodialysis.' },
    ta: { q: 'சிறுநீரகங்கள் செயலிழக்கும்போது செயற்கைச் சிறுநீரகம் மூலம் இரத்தத்தைத் தூய்மைப்படுத்தும் முறை', options: ['ஹீமோடயாலிசிஸ்', 'மைக்டியூரிஷன்', 'நுண் வடிகட்டுதல்', 'உறுப்பு மாற்று அறுவை'], explanation: 'செயற்கைச் சிறுநீரகம் மூலம் இரத்தத்தைத் தூய்மைப்படுத்துவது ஹீமோடயாலிசிஸ்.' },
  },
  {
    difficulty: 'medium', source: '§20.3.1, p. 242', answer: 0,
    en: { q: 'The scrotum acts as a thermoregulator. Sperms develop at a temperature', options: ['1–3 °C lower than normal body temperature', '1–3 °C higher than normal body temperature', 'exactly equal to body temperature', 'about 10 °C higher than body temperature'], explanation: 'The scrotum keeps the testes 1–3 °C below body temperature, which is optimum for sperm formation.' },
    ta: { q: 'விரைப்பை வெப்பச் சீராக்கியாகச் செயல்படுகிறது. விந்தணுக்கள் உருவாகும் வெப்பநிலை', options: ['இயல்பான உடல் வெப்பநிலையை விட 1–3 °C குறைவு', 'உடல் வெப்பநிலையை விட 1–3 °C அதிகம்', 'உடல் வெப்பநிலைக்குச் சமம்', 'உடல் வெப்பநிலையை விட 10 °C அதிகம்'], explanation: 'விந்தணு உருவாக்கத்திற்கு ஏற்றவாறு விரைப்பை, உடல் வெப்பநிலையை விட 1–3 °C குறைவான வெப்பநிலையை அளிக்கிறது.' },
  },
  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise VIII.1, p. 245', answer: 0,
    en: { q: 'Assertion: Urea is excreted out through the kidneys.\nReason: Urea is a toxic substance.', options: AR_EN, explanation: 'Urea is a toxic nitrogenous waste; if it accumulated it would harm the body, so the kidneys remove it.' },
    ta: { q: 'கூற்று: சிறுநீரகங்களின் வழியே யூரியா வெளியேற்றப்படுகிறது.\nகாரணம்: யூரியா ஒரு நச்சுத்தன்மையுடைய பொருள்.', options: AR_TA, explanation: 'யூரியா நச்சுத்தன்மையுடைய நைட்ரஜன் கழிவு; அது சேர்ந்தால் உடலுக்குத் தீங்கு; எனவே சிறுநீரகம் அதை வெளியேற்றுகிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VIII.2, p. 245', answer: 1,
    en: { q: 'Assertion: In both the sexes, gonads perform a dual function.\nReason: Gonads are also called primary sex organs.', options: AR_EN, explanation: 'Gonads produce gametes and secrete sex hormones (dual function); being called primary sex organs does not explain this.' },
    ta: { q: 'கூற்று: இரு பாலினங்களிலும் பாலினச் சுரப்பிகள் (gonads) இரட்டை வேலையைச் செய்கின்றன.\nகாரணம்: பாலினச் சுரப்பிகள் முதன்மை பாலியல் உறுப்புகள் என அழைக்கப்படுகின்றன.', options: AR_TA, explanation: 'பாலினச் சுரப்பிகள் இனச்செல்களையும் ஹார்மோன்களையும் உருவாக்குகின்றன; அவை முதன்மை உறுப்புகள் எனப்படுவது இதற்கு விளக்கம் அல்ல.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise X, p. 245', answer: 0,
    imageUrl: `${IMG}/female-reproductive-parts.png`,
    en: { q: 'Identify the parts numbered 1 to 5 in the figure of the female reproductive system.', options: ['1 Fallopian tube, 2 Ovary, 3 Cervix, 4 Uterus, 5 Vagina', '1 Fallopian tube, 2 Oviduct, 3 Uterus, 4 Cervix, 5 Vagina', '1 Ovary, 2 Oviduct, 3 Uterus, 4 Vagina, 5 Cervix', '1 Oviduct, 2 Cervix, 3 Vagina, 4 Ovary, 5 Uterus'], explanation: '1 is the coiled tube, 2 the almond-shaped ovary, 3 the narrow neck of the uterus (cervix), 4 the uterus and 5 the vagina.' },
    ta: { q: 'பெண் இனப்பெருக்க மண்டலப் படத்தில் 1 முதல் 5 வரை எண்ணிடப்பட்ட பாகங்களைக் கண்டறிக.', options: ['1 கருக்குழல், 2 அண்டகம், 3 செர்விக்ஸ், 4 கர்ப்பப்பை, 5 யோனி', '1 கருக்குழல், 2 அண்டக்குழாய், 3 கர்ப்பப்பை, 4 செர்விக்ஸ், 5 யோனி', '1 அண்டகம், 2 அண்டக்குழாய், 3 கர்ப்பப்பை, 4 யோனி, 5 செர்விக்ஸ்', '1 அண்டக்குழாய், 2 செர்விக்ஸ், 3 யோனி, 4 அண்டகம், 5 கர்ப்பப்பை'], explanation: '1 சுருண்ட குழல் (கருக்குழல்), 2 பாதாம் வடிவ அண்டகம், 3 கருப்பையின் குறுகிய அடிப்பகுதி (செர்விக்ஸ்), 4 கர்ப்பப்பை, 5 யோனி.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VI.6, p. 245', answer: 0,
    en: { q: 'Which sequence correctly traces the path of filtrate through a nephron?', options: ['Bowman’s capsule → proximal convoluted tubule → loop of Henle → distal convoluted tubule → collecting tubule', 'Bowman’s capsule → loop of Henle → proximal convoluted tubule → distal convoluted tubule → collecting tubule', 'Glomerulus → distal convoluted tubule → loop of Henle → proximal convoluted tubule → ureter', 'Collecting tubule → distal convoluted tubule → loop of Henle → Bowman’s capsule → ureter'], explanation: 'Bowman’s capsule continues as the PCT, the U-shaped loop of Henle and the DCT, which opens into the collecting tubule.' },
    ta: { q: 'நெஃப்ரானில் வடிதிரவம் செல்லும் சரியான வரிசை எது?', options: ['பௌமானின் கிண்ணம் → அண்மைச் சுருள் நுண்குழல் → ஹென்லேயின் வளைவு → சேய்மைச் சுருள் நுண்குழல் → சேகரிப்பு நுண்குழல்', 'பௌமானின் கிண்ணம் → ஹென்லேயின் வளைவு → அண்மைச் சுருள் நுண்குழல் → சேய்மைச் சுருள் நுண்குழல் → சேகரிப்பு நுண்குழல்', 'கிளாமருலஸ் → சேய்மைச் சுருள் நுண்குழல் → ஹென்லேயின் வளைவு → அண்மைச் சுருள் நுண்குழல் → சிறுநீரக்குழாய்', 'சேகரிப்பு நுண்குழல் → சேய்மைச் சுருள் நுண்குழல் → ஹென்லேயின் வளைவு → பௌமானின் கிண்ணம் → சிறுநீரக்குழாய்'], explanation: 'பௌமானின் கிண்ணம் அண்மைச் சுருள் நுண்குழல், U வடிவ ஹென்லேயின் வளைவு, சேய்மைச் சுருள் நுண்குழலாகத் தொடர்ந்து சேகரிப்பு நுண்குழலில் திறக்கிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VII.2, p. 245', answer: 0,
    en: { q: 'The correct order of the three stages of urine formation is', options: ['glomerular filtration → tubular reabsorption → tubular secretion', 'tubular secretion → glomerular filtration → tubular reabsorption', 'tubular reabsorption → tubular secretion → glomerular filtration', 'glomerular filtration → tubular secretion → micturition'], explanation: 'Blood is first filtered in the glomerulus, then useful substances are reabsorbed, and finally H⁺ and K⁺ ions are secreted into the tubule.' },
    ta: { q: 'சிறுநீர் உருவாகும் மூன்று படிநிலைகளின் சரியான வரிசை', options: ['கிளாமருலார் வடிகட்டுதல் → குழல்களில் மீள உறிஞ்சப்படுதல் → குழல்களில் சுரத்தல்', 'குழல்களில் சுரத்தல் → கிளாமருலார் வடிகட்டுதல் → குழல்களில் மீள உறிஞ்சப்படுதல்', 'குழல்களில் மீள உறிஞ்சப்படுதல் → குழல்களில் சுரத்தல் → கிளாமருலார் வடிகட்டுதல்', 'கிளாமருலார் வடிகட்டுதல் → குழல்களில் சுரத்தல் → மைக்டியூரிஷன்'], explanation: 'முதலில் கிளாமருலஸில் வடிகட்டுதல், பின் தேவையான பொருள்கள் மீள உறிஞ்சப்படுதல், இறுதியில் H⁺, K⁺ அயனிகள் குழலுக்குள் சுரத்தல்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VII.1, p. 245', answer: 0,
    en: { q: 'Which sequence correctly lists parts of the human alimentary canal from mouth to anus?', options: ['Buccal cavity → pharynx → oesophagus → stomach → duodenum → jejunum → ileum → caecum → colon → rectum', 'Buccal cavity → oesophagus → pharynx → stomach → ileum → jejunum → duodenum → colon → caecum → rectum', 'Pharynx → buccal cavity → stomach → oesophagus → duodenum → ileum → jejunum → rectum → colon → caecum', 'Buccal cavity → pharynx → stomach → oesophagus → jejunum → duodenum → ileum → colon → caecum → rectum'], explanation: 'Small intestine = duodenum, jejunum, ileum; large intestine = caecum, colon, rectum.' },
    ta: { q: 'வாய் முதல் மலவாய் வரை உணவுப் பாதையின் பகுதிகளைச் சரியாக வரிசைப்படுத்துவது எது?', options: ['வாய்க்குழி → தொண்டை → உணவுக் குழல் → இரைப்பை → முன்சிறுகுடல் → நடுச்சிறுகுடல் → பின்சிறுகுடல் → சீக்கம் → பெருங்குடல் → மலக்குடல்', 'வாய்க்குழி → உணவுக் குழல் → தொண்டை → இரைப்பை → பின்சிறுகுடல் → நடுச்சிறுகுடல் → முன்சிறுகுடல் → பெருங்குடல் → சீக்கம் → மலக்குடல்', 'தொண்டை → வாய்க்குழி → இரைப்பை → உணவுக் குழல் → முன்சிறுகுடல் → பின்சிறுகுடல் → நடுச்சிறுகுடல் → மலக்குடல் → பெருங்குடல் → சீக்கம்', 'வாய்க்குழி → தொண்டை → இரைப்பை → உணவுக் குழல் → நடுச்சிறுகுடல் → முன்சிறுகுடல் → பின்சிறுகுடல் → பெருங்குடல் → சீக்கம் → மலக்குடல்'], explanation: 'சிறுகுடல் = முன், நடு, பின் சிறுகுடல்; பெருங்குடல் = சீக்கம், பெருங்குடல் (கோலன்), மலக்குடல்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise IX.3, p. 245', answer: 0,
    en: { q: 'Urine analysis is an important part of medical diagnosis mainly because', options: ['abnormal substances such as glucose or proteins in urine reveal disorders of the kidneys or metabolism', 'urine contains digestive enzymes', 'urine shows how much food was eaten', 'urine contains blood cells in healthy people'], explanation: 'Essential substances like glucose are normally reabsorbed; finding them in urine points to kidney or metabolic problems.' },
    ta: { q: 'மருத்துவ நோயறிதலில் சிறுநீர் பகுப்பாய்வு முக்கியமானதாக இருக்க முக்கியக் காரணம்', options: ['சிறுநீரில் குளுக்கோஸ், புரதம் போன்ற இயல்பற்ற பொருள்கள் இருப்பது சிறுநீரக அல்லது வளர்சிதை மாற்றக் குறைபாடுகளைக் காட்டும்', 'சிறுநீரில் செரிமான நொதிகள் உள்ளன', 'சிறுநீர் உண்ட உணவின் அளவைக் காட்டும்', 'ஆரோக்கியமானவர்களின் சிறுநீரில் இரத்த செல்கள் இருக்கும்'], explanation: 'குளுக்கோஸ் போன்றவை இயல்பாக மீள உறிஞ்சப்படும்; அவை சிறுநீரில் தென்பட்டால் சிறுநீரக/வளர்சிதைக் குறைபாடு எனக் கொள்ளலாம்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise IX.4, p. 245', answer: 0,
    en: { q: 'A doctor advises you to drink plenty of water. The best reason is that water', options: ['helps the kidneys flush out urea and other toxic wastes and maintains fluid balance', 'is digested into glucose', 'increases the length of the small intestine', 'stops the formation of urine'], explanation: 'Adequate water lets the kidneys filter blood and remove toxic wastes in urine, maintaining homeostasis.' },
    ta: { q: 'மருத்துவர் உங்களை அதிக நீர் குடிக்க அறிவுறுத்துகிறார். சிறந்த காரணம், நீர்', options: ['யூரியா போன்ற நச்சுக் கழிவுகளைச் சிறுநீரகம் வெளியேற்ற உதவுவதுடன் உடல் நீர்ச் சமநிலையைப் பேணுகிறது', 'செரிக்கப்பட்டு குளுக்கோஸாக மாறுகிறது', 'சிறுகுடலின் நீளத்தை அதிகரிக்கிறது', 'சிறுநீர் உருவாவதைத் தடுக்கிறது'], explanation: 'போதுமான நீர் இருந்தால் சிறுநீரகம் இரத்தத்தை வடிகட்டி நச்சுக் கழிவுகளைச் சிறுநீராக வெளியேற்ற முடியும்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise IX.5, p. 245', answer: 0,
    en: { q: 'Sweat glands are present even on the palms and soles. A likely reason is that', options: ['sweat there helps cool the body, keeps the skin moist and improves grip', 'these sweat glands digest food', 'sweat there produces urine', 'sweat on the palms stores fat'], explanation: 'Sweat helps regulate temperature; on palms and soles slight moisture also gives better grip and friction.' },
    ta: { q: 'உள்ளங்கைகளிலும் பாதங்களின் அடியிலும் வியர்வைச் சுரப்பிகள் இருப்பதற்கான பொருத்தமான காரணம்', options: ['அங்குள்ள வியர்வை உடலைக் குளிர்வித்து தோலை ஈரமாக வைத்து பிடிப்பை மேம்படுத்துகிறது', 'அச்சுரப்பிகள் உணவைச் செரிக்கின்றன', 'அங்குள்ள வியர்வை சிறுநீரை உருவாக்குகிறது', 'உள்ளங்கை வியர்வை கொழுப்பைச் சேமிக்கிறது'], explanation: 'வியர்வை உடல் வெப்பத்தைச் சீராக்குகிறது; உள்ளங்கை, பாதங்களில் சிறிதளவு ஈரம் பிடிப்பையும் உராய்வையும் கூட்டுகிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise V(a), p. 244', answer: 0,
    en: { q: 'Which statement correctly differentiates excretion from secretion?', options: ['Excretion removes waste products from the body; secretion releases useful substances such as enzymes and hormones', 'Excretion releases enzymes; secretion removes urea', 'Both remove only nitrogenous wastes', 'Excretion takes place only through the skin'], explanation: 'Excretion eliminates wastes such as urea; secretion produces useful substances like saliva, bile and hormones.' },
    ta: { q: 'கழிவுநீக்கத்தையும் சுரத்தலையும் சரியாக வேறுபடுத்தும் கூற்று எது?', options: ['கழிவுநீக்கம் உடலிலிருந்து கழிவுகளை நீக்குகிறது; சுரத்தல் நொதிகள், ஹார்மோன்கள் போன்ற பயனுள்ள பொருள்களை வெளியிடுகிறது', 'கழிவுநீக்கம் நொதிகளை வெளியிடுகிறது; சுரத்தல் யூரியாவை நீக்குகிறது', 'இரண்டும் நைட்ரஜன் கழிவுகளை மட்டுமே நீக்குகின்றன', 'கழிவுநீக்கம் தோல் வழியாக மட்டுமே நடைபெறுகிறது'], explanation: 'கழிவுநீக்கம் யூரியா போன்ற கழிவுகளை நீக்குகிறது; சுரத்தல் உமிழ்நீர், பித்தநீர், ஹார்மோன்கள் போன்ற பயனுள்ளவற்றை உருவாக்குகிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise V(c), p. 244', answer: 0,
    en: { q: 'Arrange the five stages of nutrition in the correct order.', options: ['Ingestion → digestion → absorption → assimilation → egestion', 'Digestion → ingestion → assimilation → absorption → egestion', 'Ingestion → absorption → digestion → egestion → assimilation', 'Ingestion → digestion → egestion → absorption → assimilation'], explanation: 'Food is taken in, broken down, absorbed into blood, built into cells, and the undigested remainder is egested.' },
    ta: { q: 'ஊட்டத்தின் ஐந்து படிநிலைகளைச் சரியான வரிசையில் அமைக்கவும்.', options: ['உட்கொள்ளுதல் → செரித்தல் → உறிஞ்சுதல் → தன்மயமாதல் → வெளியேற்றுதல்', 'செரித்தல் → உட்கொள்ளுதல் → தன்மயமாதல் → உறிஞ்சுதல் → வெளியேற்றுதல்', 'உட்கொள்ளுதல் → உறிஞ்சுதல் → செரித்தல் → வெளியேற்றுதல் → தன்மயமாதல்', 'உட்கொள்ளுதல் → செரித்தல் → வெளியேற்றுதல் → உறிஞ்சுதல் → தன்மயமாதல்'], explanation: 'உணவை உட்கொண்டு, செரித்து, இரத்தத்தில் உறிஞ்சி, செல்களில் தன்மயமாக்கி, செரிக்காதவற்றை வெளியேற்றுகிறோம்.' },
  },
  {
    difficulty: 'hard', source: '§20.1.1, p. 238', answer: 0,
    en: { q: 'Which pairing of digestive gland, enzyme and product is correct?', options: ['Pancreas – trypsin – peptides and amino acids', 'Salivary glands – pepsin – peptones', 'Gastric glands – lipase – fatty acids and glycerol', 'Intestinal glands – ptyalin – maltose'], explanation: 'Table 20.3: trypsin from the pancreas acts on proteins and peptones to give peptides and amino acids.' },
    ta: { q: 'செரிமானச் சுரப்பி – நொதி – விளைபொருள் இணைகளில் சரியானது எது?', options: ['கணையம் – டிரிப்சின் – பெப்டைடுகள், அமினோ அமிலங்கள்', 'உமிழ்நீர்ச் சுரப்பி – பெப்சின் – பெப்டோன்கள்', 'இரைப்பைச் சுரப்பி – லிப்பேஸ் – கொழுப்பு அமிலங்கள், கிளிசரால்', 'குடல் சுரப்பி – டயலின் – மால்டோஸ்'], explanation: 'அட்டவணை 20.3: கணைய டிரிப்சின் புரதங்களையும் பெப்டோன்களையும் பெப்டைடுகள், அமினோ அமிலங்களாக மாற்றுகிறது.' },
  },
  {
    difficulty: 'hard', source: '§20.1.1, p. 237', answer: 0,
    en: { q: 'Which of these statements about the liver are correct?\n(i) It produces fibrinogen and prothrombin.\n(ii) It stores iron, copper and vitamins A and D.\n(iii) It produces heparin.\n(iv) It secretes insulin.', options: ['(i), (ii) and (iii) only', '(i) and (iv) only', '(ii), (iii) and (iv) only', '(iv) only'], explanation: 'Insulin is secreted by β cells of the pancreas; the other three are liver functions.' },
    ta: { q: 'கல்லீரல் பற்றிய சரியான கூற்றுகள் எவை?\n(i) இது ஃபைப்ரினோஜன், புரோத்ராம்பினை உருவாக்குகிறது.\n(ii) இது இரும்பு, தாமிரம், வைட்டமின் A, D ஐச் சேமிக்கிறது.\n(iii) இது ஹெப்பாரினை உருவாக்குகிறது.\n(iv) இது இன்சுலினைச் சுரக்கிறது.', options: ['(i), (ii), (iii) மட்டும்', '(i), (iv) மட்டும்', '(ii), (iii), (iv) மட்டும்', '(iv) மட்டும்'], explanation: 'இன்சுலின் கணையத்தின் பீட்டா செல்களால் சுரக்கப்படுகிறது; மற்ற மூன்றும் கல்லீரலின் பணிகள்.' },
  },
  {
    difficulty: 'hard', source: '§20.2.4, p. 241', answer: 0,
    en: { q: 'Two healthy kidneys filter about 170–180 litres of blood a day, and only about 1% of the filtrate becomes urine. Roughly how much urine is formed per day?', options: ['About 1.7–1.8 litres', 'About 17–18 litres', 'About 170 litres', 'About 0.17 litre'], explanation: '1% of 170–180 L ≈ 1.7–1.8 L, matching the book’s figure of one to two litres of urine a day.' },
    ta: { q: 'இரண்டு ஆரோக்கியமான சிறுநீரகங்கள் நாளொன்றுக்கு ஏறக்குறைய 170–180 லிட்டர் இரத்தத்தை வடிகட்டுகின்றன; அதில் 1% மட்டுமே சிறுநீராகிறது. நாளொன்றுக்கு ஏறக்குறைய எவ்வளவு சிறுநீர் உருவாகும்?', options: ['ஏறக்குறைய 1.7–1.8 லிட்டர்', 'ஏறக்குறைய 17–18 லிட்டர்', 'ஏறக்குறைய 170 லிட்டர்', 'ஏறக்குறைய 0.17 லிட்டர்'], explanation: '170–180 லிட்டரில் 1% ≈ 1.7–1.8 லிட்டர்; இது நாளொன்றுக்கு 1–2 லிட்டர் சிறுநீர் என்ற பாடநூல் தகவலுடன் ஒத்துப்போகிறது.' },
  },
  {
    difficulty: 'hard', source: '§20.2.4, p. 240', answer: 0,
    en: { q: 'Glucose and amino acids filtered into Bowman’s capsule are normally absent from urine because they are', options: ['selectively reabsorbed into the blood in the proximal tubule', 'secreted into the tubule with H⁺ ions', 'destroyed in the urinary bladder', 'never filtered by the glomerulus'], explanation: 'Essential substances in the filtrate are returned to the blood by selective (tubular) reabsorption.' },
    ta: { q: 'பௌமானின் கிண்ணத்தில் வடிகட்டப்படும் குளுக்கோஸ், அமினோ அமிலங்கள் இயல்பான சிறுநீரில் இல்லாததற்குக் காரணம், அவை', options: ['அண்மைச் சுருள் நுண்குழலில் தேர்ந்தெடுத்து மீள உறிஞ்சப்படுகின்றன', 'H⁺ அயனிகளுடன் குழலுக்குள் சுரக்கப்படுகின்றன', 'சிறுநீர்ப்பையில் அழிக்கப்படுகின்றன', 'கிளாமருலஸில் வடிகட்டப்படுவதே இல்லை'], explanation: 'வடிதிரவத்தில் உள்ள தேவையான பொருள்கள் தேர்ந்தெடுத்து மீள உறிஞ்சுதல் மூலம் இரத்தத்திற்குத் திரும்புகின்றன.' },
  },
  {
    difficulty: 'hard', source: '§20.3, p. 241', answer: 0,
    en: { q: 'Which of these statements are correct?\n(i) Sexual maturity is attained at 13–14 years in males and 11–13 years in females.\n(ii) The seminal vesicle fluid is rich in fructose, an energy source for sperms.\n(iii) The ovaries secrete oestrogen and progesterone.\n(iv) Fertilised eggs develop into a foetus inside the fallopian tube.', options: ['(i), (ii) and (iii) only', '(i) and (iv) only', '(ii) and (iv) only', '(i), (ii), (iii) and (iv)'], explanation: 'The foetus develops inside the uterus, so (iv) is false.' },
    ta: { q: 'சரியான கூற்றுகள் எவை?\n(i) ஆண்களில் 13–14 வயதிலும் பெண்களில் 11–13 வயதிலும் பாலியல் முதிர்ச்சி ஏற்படுகிறது.\n(ii) விந்துப்பை திரவத்தில் உள்ள ஃப்ரக்டோஸ் விந்தணுக்களுக்கு ஆற்றல் அளிக்கிறது.\n(iii) அண்டகங்கள் ஈஸ்ட்ரோஜன், புரோஜெஸ்டிரானைச் சுரக்கின்றன.\n(iv) கரு வளர்ச்சி அண்டக் குழாயினுள் நடைபெறுகிறது.', options: ['(i), (ii), (iii) மட்டும்', '(i), (iv) மட்டும்', '(ii), (iv) மட்டும்', '(i), (ii), (iii), (iv)'], explanation: 'கரு வளர்ச்சி கர்ப்பப்பையினுள் நடைபெறுகிறது; எனவே (iv) தவறு.' },
  },
  {
    difficulty: 'hard', source: 'Introduction, p. 234', answer: 0,
    en: { q: 'Which organ system is correctly matched with its organs and function?', options: ['Endocrine system – pituitary, thyroid, adrenals – coordinates the functions of all organ systems', 'Excretory system – heart and blood vessels – transport of gases', 'Skeletal system – muscle fibres – contraction and relaxation', 'Integumentary system – kidneys and ureters – elimination of nitrogenous waste'], explanation: 'Table 20.1: the endocrine glands coordinate all organ systems; the other pairs are mixed up.' },
    ta: { q: 'உறுப்பு மண்டலம் – உறுப்புகள் – பணி சரியாகப் பொருந்திய இணை எது?', options: ['நாளமில்லாச் சுரப்பி மண்டலம் – பிட்யூட்டரி, தைராய்டு, அட்ரினல் – அனைத்து உறுப்பு மண்டலங்களையும் ஒருங்கிணைத்தல்', 'கழிவுநீக்க மண்டலம் – இதயம், இரத்த நாளங்கள் – வாயுக்களைக் கடத்துதல்', 'எலும்பு மண்டலம் – தசை இழைகள் – சுருங்கி விரிதல்', 'தோல் மண்டலம் – சிறுநீரகம், சிறுநீரக்குழாய் – நைட்ரஜன் கழிவு நீக்கம்'], explanation: 'அட்டவணை 20.1: நாளமில்லாச் சுரப்பிகள் அனைத்து மண்டலங்களையும் ஒருங்கிணைக்கின்றன; மற்ற இணைகள் தவறாகக் கலக்கப்பட்டுள்ளன.' },
  },
];
