// Tamil Nadu State Board, 9th Social Science, Unit 28 – Economics: Agriculture in Tamil Nadu (தமிழ்நாட்டில் வேளாண்மை).
// Book exercise questions (Economics Unit 4) plus our own questions so that every section is covered at three levels.
// source = section or exercise and printed page of the English-medium book; Tamil wording follows the Tamil-medium book.

import { BankQuestion } from './types';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.1, p. 311', answer: 0,
    en: { q: 'The irrigated land surface out of the cultivable land in Tamil Nadu is', options: ['57%', '27%', '28%', '49%'], explanation: 'The area under irrigation is about 57 percent of the total area under cultivation.' },
    ta: { q: 'பயிர் செய்யப்படும் பரப்பளவில் பாசன வசதி பெற்ற நிலத்தின் பரப்பளவு', options: ['57%', '27%', '28%', '49%'], explanation: 'பயிர் செய்யப்படும் மொத்தப் பரப்பில் ஏறக்குறைய 57 விழுக்காடு பாசன வசதி பெற்றுள்ளது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.2, p. 311', answer: 0,
    en: { q: 'Out of the following, which is not a food crop?', options: ['Coconut', 'Bajra', 'Ragi', 'Maize'], explanation: 'Coconut is a non-food crop; in fact it stands first among non-food crops in Tamil Nadu.' },
    ta: { q: 'இவற்றுள் உணவல்லாத பிற பயிர் எது?', options: ['தென்னை', 'கம்பு', 'கேழ்வரகு', 'சோளம்'], explanation: 'தென்னை உணவல்லாத பயிர்; உணவல்லாத பிற பயிர்களில் தென்னை முதலிடம் வகிக்கிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.5, p. 311', answer: 0,
    en: { q: 'The Northeast monsoon period in Tamil Nadu is', options: ['October – December', 'August – October', 'September – November', 'November – January'], explanation: 'The Northeast monsoon (October–December) is a major source of water for Tamil Nadu.' },
    ta: { q: 'தமிழ்நாட்டில் வடகிழக்குப் பருவமழை பொழியும் மாதங்கள்', options: ['அக்டோபர் – டிசம்பர்', 'ஆகஸ்டு – அக்டோபர்', 'செப்டம்பர் – நவம்பர்', 'நவம்பர் – ஜனவரி'], explanation: 'வடகிழக்குப் பருவமழை (அக்டோபர் – டிசம்பர்) தமிழ்நாட்டின் முக்கிய நீர் ஆதாரம்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.1, p. 311', answer: 0,
    en: { q: 'The major occupation of the people of Tamil Nadu, at independence and for long after, has been', options: ['agriculture', 'fishing', 'mining', 'banking'], explanation: 'Most of the people of Tamil Nadu depended on agriculture at the time of independence and even 40 years after.' },
    ta: { q: 'தமிழ்நாட்டு மக்களில் பெரும்பான்மையினர் சார்ந்திருக்கும் தொழில்', options: ['வேளாண்மை', 'மீன்பிடித்தல்', 'சுரங்கத் தொழில்', 'வங்கியியல்'], explanation: 'விடுதலையின்போதும் அதற்குப் பின் நீண்ட காலமும் தமிழ்நாட்டு மக்களில் பெரும்பான்மையினர் வேளாண்மையைச் சார்ந்திருந்தனர்.' },
  },
  {
    difficulty: 'easy', source: '§4.3, p. 308', answer: 0,
    en: { q: 'Which statement about rivers in Tamil Nadu is correct?', options: ['There are no perennial rivers in Tamil Nadu.', 'Tamil Nadu has many perennial rivers fed by glaciers.', 'The Cauvery is the largest river in India.', 'Tamil Nadu gets no water from monsoons.'], explanation: 'There are no perennial rivers in Tamil Nadu; it receives water from the Northeast and Southwest monsoons.' },
    ta: { q: 'தமிழ்நாட்டின் ஆறுகள் பற்றிய சரியான கூற்று எது?', options: ['தமிழ்நாட்டில் வற்றாத ஆறுகள் இல்லை.', 'தமிழ்நாட்டில் பனியாறுகளால் நீர் பெறும் வற்றாத ஆறுகள் பல உள்ளன.', 'காவிரி இந்தியாவின் மிகப் பெரிய ஆறு.', 'தமிழ்நாடு பருவமழையிலிருந்து நீர் பெறுவதில்லை.'], explanation: 'தமிழ்நாட்டில் வற்றாத ஆறுகள் இல்லை; வடகிழக்கு, தென்மேற்குப் பருவமழைகளிலிருந்து நீர் பெறுகிறது.' },
  },
  {
    difficulty: 'easy', source: '§4.4, p. 310', answer: 0,
    en: { q: 'Which dams are constructed across the Cauvery in Tamil Nadu?', options: ['Mettur Dam and Kallanai', 'Bhakra and Nangal', 'Hirakud and Tehri', 'Sardar Sarovar and Tungabhadra'], explanation: 'The dams constructed across the Cauvery in Tamil Nadu are Mettur Dam and Kallanai.' },
    ta: { q: 'காவிரி ஆற்றின் குறுக்கே தமிழ்நாட்டில் கட்டப்பட்டுள்ள அணைகள்', options: ['மேட்டூர் அணை, கல்லணை', 'பக்ரா, நங்கல்', 'ஹிராகுட், தெஹ்ரி', 'சர்தார் சரோவர், துங்கபத்ரா'], explanation: 'காவிரி ஆற்றின் குறுக்கே தமிழ்நாட்டில் மேட்டூர் அணை, கல்லணை கட்டப்பட்டுள்ளன.' },
  },
  {
    difficulty: 'easy', source: '§4.6, p. 310', answer: 0,
    en: { q: 'Among the sources of irrigation in Tamil Nadu, which irrigates the largest share of the irrigated area?', options: ['Wells', 'Canals', 'Lakes', 'Rivers directly'], explanation: 'Wells irrigate 62% of the irrigated area, canals 24% and lakes 14%.' },
    ta: { q: 'தமிழ்நாட்டின் பாசன ஆதாரங்களில் அதிகப் பரப்பிற்கு நீர் வழங்குவது எது?', options: ['கிணறுகள்', 'வாய்க்கால்கள்', 'ஏரிகள்', 'நேரடியாக ஆறுகள்'], explanation: 'பாசனப் பரப்பில் கிணறுகள் 62%, வாய்க்கால்கள் 24%, ஏரிகள் 14% பங்கு வகிக்கின்றன.' },
  },
  // ------------------------------------------------------------------ Medium
  {
    difficulty: 'medium', source: 'Book exercise I.3, p. 311', answer: 0,
    en: { q: 'The productivity of paddy in Tamil Nadu during the year 2014–2015 was', options: ['4,429 kg per hectare', '3,039 kg per hectare', '2,775 kg per hectare', '3,519 kg per hectare'], explanation: 'Paddy productivity was 4,429 kg per hectare in 2014–15, up from 3,039 kg in 2010–11.' },
    ta: { q: '2014-15ஆம் ஆண்டில் நெல் உற்பத்தித் திறன்', options: ['ஹெக்டேருக்கு 4,429 கி.கி', 'ஹெக்டேருக்கு 3,039 கி.கி', 'ஹெக்டேருக்கு 2,775 கி.கி', 'ஹெக்டேருக்கு 3,519 கி.கி'], explanation: 'நெல்லின் உற்பத்தித் திறன் 2014–15இல் ஹெக்டேருக்கு 4,429 கிலோ; 2010–11இல் இது 3,039 கிலோ.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.4, p. 311', answer: 0,
    en: { q: 'In Tamil Nadu, both agricultural productivity and food production have', options: ['increased', 'decreased', 'not been stable', 'remained stable'], explanation: 'Both productivity and food production continue to increase, even though the area under food grains has reduced.' },
    ta: { q: 'தமிழ்நாட்டின் வேளாண் உற்பத்தித்திறன் மற்றும் உணவு உற்பத்தி ஆகிய இரண்டுமே', options: ['அதிகரித்துள்ளது', 'குறைந்துள்ளது', 'எதிர்மறையாக உள்ளது', 'நிலையாக உள்ளது'], explanation: 'பரப்பளவு குறைந்தபோதும் உற்பத்தித்திறன், உணவு உற்பத்தி இரண்டும் தொடர்ந்து அதிகரித்துள்ளன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III, p. 312', answer: 0,
    en: { q: 'Match correctly: Non-food crops, Dhal, North east monsoon, Marginal farmers, No. of farmers in 2015-2016.', options: ['Coconut, Channa; Urad Dal, Toor Dal, Green grams; October – December; less than 1 hectare of cultivable land; 79,38,000', 'Urad Dal, Toor Dal, Green grams; Coconut, Channa; October – December; less than 1 hectare of cultivable land; 79,38,000', 'Coconut, Channa; Urad Dal, Toor Dal, Green grams; less than 1 hectare of cultivable land; October – December; 79,38,000', 'Coconut, Channa; Urad Dal, Toor Dal, Green grams; October – December; 79,38,000; less than 1 hectare of cultivable land'], explanation: 'Coconut is a non-food crop, urad, toor and green gram are dhals, the NE monsoon is October–December, marginal farmers cultivate less than 1 hectare and there were 79,38,000 cultivators in 2015–16.' },
    ta: { q: 'சரியாகப் பொருத்துக: உணவல்லாத பிற பயிர்கள், பருப்பு வகைகள், வடகிழக்குப் பருவமழை, குறு விவசாயிகள், 2015இல் விவசாயிகளின் எண்ணிக்கை.', options: ['தேங்காய், கொண்டைக் கடலை; உளுந்து, துவரை, பாசிப்பயிறு; அக்டோபர் – டிசம்பர்; ஒரு ஹெக்டேருக்கும் குறைவான பரப்பில் சாகுபடி செய்வோர்; 79,38,000', 'உளுந்து, துவரை, பாசிப்பயிறு; தேங்காய், கொண்டைக் கடலை; அக்டோபர் – டிசம்பர்; ஒரு ஹெக்டேருக்கும் குறைவான பரப்பில் சாகுபடி செய்வோர்; 79,38,000', 'தேங்காய், கொண்டைக் கடலை; உளுந்து, துவரை, பாசிப்பயிறு; ஒரு ஹெக்டேருக்கும் குறைவான பரப்பில் சாகுபடி செய்வோர்; அக்டோபர் – டிசம்பர்; 79,38,000', 'தேங்காய், கொண்டைக் கடலை; உளுந்து, துவரை, பாசிப்பயிறு; அக்டோபர் – டிசம்பர்; 79,38,000; ஒரு ஹெக்டேருக்கும் குறைவான பரப்பில் சாகுபடி செய்வோர்'], explanation: 'தேங்காய் உணவல்லாத பயிர்; உளுந்து, துவரை, பாசிப்பயிறு பருப்பு வகைகள்; வடகிழக்குப் பருவமழை அக்டோபர் – டிசம்பர்; குறு விவசாயிகள் ஒரு ஹெக்டேருக்கும் குறைவாகச் சாகுபடி செய்வோர்; 2015–16இல் விவசாயிகள் 79,38,000.' },
  },
  {
    difficulty: 'medium', source: 'Introduction, p. 307', answer: 0,
    en: { q: 'According to the 2001 and 2011 censuses, the percentage of workers in Tamil Nadu involved in agriculture changed from', options: ['49.3% to 42.1%', '42.1% to 49.3%', '55% to 35.3%', '78% to 36%'], explanation: 'In 2001, 49.3% of workers were in agriculture; this reduced to 42.1% in 2011.' },
    ta: { q: '2001, 2011 மக்கள்தொகைக் கணக்கெடுப்புகளின்படி தமிழ்நாட்டில் வேளாண்மையில் ஈடுபட்ட தொழிலாளர்களின் விழுக்காடு மாறிய விதம்', options: ['49.3%-இலிருந்து 42.1%', '42.1%-இலிருந்து 49.3%', '55%-இலிருந்து 35.3%', '78%-இலிருந்து 36%'], explanation: '2001இல் 49.3 விழுக்காடாக இருந்த வேளாண் தொழிலாளர் அளவு 2011இல் 42.1 விழுக்காடாகக் குறைந்தது.' },
  },
  {
    difficulty: 'medium', source: '§4.1, p. 307', answer: 0,
    en: { q: 'Farmers who cultivate an area of less than 1 hectare are called', options: ['micro (marginal) farmers', 'small farmers', 'medium farmers', 'large farmers'], explanation: 'Most cultivators in Tamil Nadu are micro farmers cultivating less than 1 hectare; small farmers cultivate 1–2 hectares.' },
    ta: { q: 'ஒரு ஹெக்டேருக்கும் குறைவான பரப்பில் சாகுபடி செய்வோர் அழைக்கப்படுவது', options: ['குறுவிவசாயிகள்', 'சிறுவிவசாயிகள்', 'நடுத்தர விவசாயிகள்', 'பெரு விவசாயிகள்'], explanation: 'ஒரு ஹெக்டேருக்கும் குறைவாகச் சாகுபடி செய்வோர் குறுவிவசாயிகள்; 1-2 ஹெக்டேர் சாகுபடி செய்வோர் சிறுவிவசாயிகள்.' },
  },
  {
    difficulty: 'medium', source: '§4.2, p. 308', answer: 0,
    en: { q: 'Out of Tamil Nadu\'s total geographical area, about how much land is used for agriculture?', options: ['One-third (45,44,000 hectares)', 'One-half', 'One-tenth', 'Two-thirds'], explanation: 'Of the total geographical area of 1 crore 30 lakh 33 thousand hectares, only about one-third (45,44,000 hectares) is used for agriculture.' },
    ta: { q: 'தமிழ்நாட்டின் மொத்தப் புவியியல் பரப்பில் ஏறக்குறைய எவ்வளவு நிலம் வேளாண்மைக்குப் பயன்படுகிறது?', options: ['மூன்றில் ஒரு பங்கு (45,44,000 ஹெக்டேர்)', 'இரண்டில் ஒரு பங்கு', 'பத்தில் ஒரு பங்கு', 'மூன்றில் இரண்டு பங்கு'], explanation: 'மொத்தப் புவியியல் பரப்பான ஒரு கோடியே 30 இலட்சத்து 33 ஆயிரம் ஹெக்டேரில் மூன்றில் ஒரு பங்கு (45,44,000 ஹெக்டேர்) மட்டுமே வேளாண்மைக்குப் பயன்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: '§4.3, p. 309', answer: 0,
    en: { q: 'Which body constantly monitors the level and nature of ground water?', options: ['The Union Ground Water Board', 'The Reserve Bank of India', 'The State Election Commission', 'NITI Aayog'], explanation: 'The Union Ground Water Board constantly monitors the level and nature of ground water.' },
    ta: { q: 'நிலத்தடி நீரின் அளவையும் தன்மையையும் தொடர்ந்து கண்காணிக்கும் அமைப்பு', options: ['மத்திய நிலத்தடி நீர் வாரியம்', 'இந்திய ரிசர்வ் வங்கி', 'மாநிலத் தேர்தல் ஆணையம்', 'நிதி ஆயோக்'], explanation: 'நிலத்தடி நீரின் அளவையும் தன்மையையும் மத்திய நிலத்தடி நீர் வாரியம் தொடர்ந்து கண்காணிக்கிறது.' },
  },
  {
    difficulty: 'medium', source: '§4.3, p. 309', answer: 0,
    en: { q: 'Which irrigation technology supplies only the required amount of water at regular intervals and reduces labour expenses and weed growth?', options: ['Micro irrigation', 'Flood irrigation', 'Canal irrigation', 'Tank irrigation'], explanation: 'Micro irrigation supplies only the required water at regular intervals, increases yield and fertilizer use, and reduces labour expenses and weeds.' },
    ta: { q: 'தேவையான அளவு நீரை மட்டும் சீரான இடைவெளியில் வழங்கி, வேலையாள் செலவையும் களைகளையும் குறைக்கும் பாசனத் தொழில்நுட்பம்', options: ['நுண்ணீர் பாசனம்', 'வெள்ளப் பாசனம்', 'வாய்க்கால் பாசனம்', 'ஏரிப் பாசனம்'], explanation: 'நுண்ணீர் பாசனத் தொழில்நுட்பம் தேவையான நீரை மட்டும் வழங்கி விளைச்சலை உயர்த்துகிறது; வேலையாள் செலவு, களை வளர்ச்சியைக் குறைக்கிறது.' },
  },
  {
    difficulty: 'medium', source: '§4.5, p. 310', answer: 0,
    en: { q: 'In 2014–15, the contribution of paddy to the total food grain production of Tamil Nadu was', options: ['62%', '20%', '30%', '80%'], explanation: 'Paddy alone accounted for about 80 lakh tonnes, i.e. 62% of the total food grain production; maize contributed 20%.' },
    ta: { q: '2014–15இல் தமிழ்நாட்டின் மொத்த உணவு தானிய உற்பத்தியில் நெல்லின் பங்கு', options: ['62%', '20%', '30%', '80%'], explanation: 'நெல் மட்டும் ஏறத்தாழ 80 இலட்சம் டன்கள் விளைந்தது; மொத்த உணவு தானிய உற்பத்தியில் நெல்லின் பங்கு 62 விழுக்காடு.' },
  },
  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: '§4.3, p. 309', answer: 0,
    en: { q: 'The term "virtual water" was introduced by', options: ['Tony Allen in 1990', 'Gilbert Slater in 1916', 'Amartya Sen in 1998', 'M.S. Swaminathan in 1965'], explanation: 'Tony Allen introduced the term in 1990; virtual water is the water consumed in producing an agricultural or industrial product.' },
    ta: { q: '"மறைநீர்" (virtual water) எனும் பதத்தை அறிமுகப்படுத்தியவர்', options: ['டோனி ஆலன், 1990', 'கில்பர்ட் ஸ்லேட்டர், 1916', 'அமர்த்தியா சென், 1998', 'எம்.எஸ். சுவாமிநாதன், 1965'], explanation: 'மறைநீர் எனும் பதம் 1990இல் டோனி ஆலனால் அறிமுகப்படுத்தப்பட்டது; ஒரு பொருளின் உற்பத்தியில் நுகரப்படும் நீரே மறைநீர்.' },
  },
  {
    difficulty: 'hard', source: '§4.3, p. 309', answer: 0,
    en: { q: 'Based on the world average, about how much water is needed to produce one metric ton of wheat (its virtual water)?', options: ['1340 cubic metres', '50 litres', '765 cubic metres', '9,750 cubic metres'], explanation: 'It takes 1340 cubic metres of water to produce one metric ton of wheat, so exporting that wheat also "exports" this water.' },
    ta: { q: 'உலகச் சராசரியின்படி ஒரு மெட்ரிக் டன் கோதுமையை உற்பத்தி செய்யத் தேவைப்படும் நீர் (மறைநீர்) ஏறக்குறைய', options: ['1340 கன மீட்டர்', '50 லிட்டர்', '765 கன மீட்டர்', '9,750 கன மீட்டர்'], explanation: 'ஒரு மெட்ரிக் டன் கோதுமை உற்பத்திக்கு 1340 கன மீட்டர் நீர் தேவை; அதை ஏற்றுமதி செய்தால் அந்நீரும் மறைமுகமாக ஏற்றுமதியாகிறது.' },
  },
  {
    difficulty: 'hard', source: '§4.1, p. 308', answer: 0,
    en: { q: 'Micro farmers make up about 78% of the cultivators in Tamil Nadu. What share of the cultivated area do they cultivate?', options: ['36%', '78%', '26%', '14%'], explanation: 'Micro farmers are around 78% of cultivators but cultivate just 36% of the area; small farmers (1–2 ha) are 14% and cultivate 26%.' },
    ta: { q: 'தமிழ்நாட்டின் விவசாயிகளில் குறுவிவசாயிகள் ஏறக்குறைய 78%. அவர்கள் சாகுபடி செய்யும் பரப்பளவின் பங்கு', options: ['36%', '78%', '26%', '14%'], explanation: 'குறுவிவசாயிகள் 78% இருந்தாலும் அவர்களின் சாகுபடிப் பரப்பு 36% மட்டுமே; சிறுவிவசாயிகள் 14%, அவர்களின் பரப்பு 26%.' },
  },
  {
    difficulty: 'hard', source: '§4.1, p. 308', answer: 0,
    en: { q: 'Which statement about marginal farmers is correct according to the textbook?', options: ['Their number is increasing in India but decreasing in Tamil Nadu, showing that farmers are taking up other occupations.', 'Their number is decreasing in India but increasing in Tamil Nadu.', 'Their number is increasing both in India and in Tamil Nadu.', 'Their number is stable both in India and in Tamil Nadu.'], explanation: 'The number of marginal farmers has increased in India but is decreasing in Tamil Nadu, which shows farmers are doing other occupations.' },
    ta: { q: 'பாடநூலின்படி குறுவிவசாயிகள் பற்றிய சரியான கூற்று எது?', options: ['இந்திய அளவில் அவர்களின் எண்ணிக்கை அதிகரிக்கிறது; தமிழ்நாட்டில் குறைகிறது – மக்கள் வேளாண்மையை விட்டு விலகுவதை இது காட்டுகிறது.', 'இந்திய அளவில் குறைகிறது; தமிழ்நாட்டில் அதிகரிக்கிறது.', 'இந்தியாவிலும் தமிழ்நாட்டிலும் அதிகரிக்கிறது.', 'இந்தியாவிலும் தமிழ்நாட்டிலும் நிலையாக உள்ளது.'], explanation: 'இந்திய அளவில் குறுவிவசாயிகள் அதிகரிக்கும்போது தமிழ்நாட்டில் குறைகின்றனர்; மக்கள் வேளாண்மைத் தொழிலை விட்டு விலகுவதை இது காட்டுகிறது.' },
  },
  {
    difficulty: 'hard', source: '§4.6, p. 311', answer: 0,
    en: { q: 'Between 1965–66 and 2014–15, the productivity of paddy in Tamil Nadu rose from 1,409 kg to 4,429 kg per hectare. This is an increase of', options: ['more than three times', 'about one and a half times', 'exactly two times', 'about ten times'], explanation: 'In the past fifty years paddy productivity has increased more than three times; food grain productivity rose about 3.5 times.' },
    ta: { q: '1965–66 முதல் 2014–15 வரை தமிழ்நாட்டில் நெல் உற்பத்தித்திறன் ஹெக்டேருக்கு 1,409 கிலோவிலிருந்து 4,429 கிலோவாக உயர்ந்தது. இது', options: ['மூன்று மடங்கிற்கும் கூடுதலான உயர்வு', 'ஏறக்குறைய ஒன்றரை மடங்கு உயர்வு', 'சரியாக இரண்டு மடங்கு உயர்வு', 'ஏறக்குறைய பத்து மடங்கு உயர்வு'], explanation: 'கடந்த ஐம்பது ஆண்டுகளில் நெல் உற்பத்தித்திறன் மூன்று மடங்கிற்கும் கூடுதலாக உயர்ந்துள்ளது; உணவு தானிய உற்பத்தித் திறன் ஏறத்தாழ 3.5 மடங்கு உயர்ந்தது.' },
  },
  {
    difficulty: 'hard', source: '§4.3, p. 308', answer: 0,
    en: { q: 'Which statement about irrigation infrastructure in Tamil Nadu is correct according to the textbook?', options: ['There are 2,239 canals covering 9,750 km, and open wells irrigate the largest area (11.91 lakh hectares).', 'There are 9,750 canals covering 2,239 km, and lakes irrigate the largest area.', 'Borewells irrigate 11.91 lakh hectares, more than any other source.', 'Canals irrigate 3.68 lakh hectares, the smallest area of all sources.'], explanation: 'Tamil Nadu has 2,239 canals (9,750 km); lakes irrigate 3.68, canals 6.68, borewells 4.93 and open wells 11.91 lakh hectares.' },
    ta: { q: 'பாடநூலின்படி தமிழ்நாட்டின் பாசனக் கட்டமைப்பு பற்றிய சரியான கூற்று எது?', options: ['2,239 வாய்க்கால்கள் ஏறத்தாழ 9,750 கி.மீ. பாய்கின்றன; திறந்தவெளிக் கிணறுகள் மிக அதிகப் பரப்பிற்கு (11.91 இலட்சம் ஹெக்டேர்) பாசனம் தருகின்றன.', '9,750 வாய்க்கால்கள் 2,239 கி.மீ. பாய்கின்றன; ஏரிகள் மிக அதிகப் பரப்பிற்கு நீர் தருகின்றன.', 'ஆழ்துளைக் கிணறுகள் 11.91 இலட்சம் ஹெக்டேருக்குப் பாசனம் தருகின்றன.', 'வாய்க்கால்கள் 3.68 இலட்சம் ஹெக்டேருக்கு மட்டுமே நீர் தருகின்றன; இதுவே மிகக் குறைவு.'], explanation: '2,239 வாய்க்கால்கள் (9,750 கி.மீ.); ஏரிகள் 3.68, வாய்க்கால்கள் 6.68, ஆழ்துளைக் கிணறுகள் 4.93, திறந்தவெளிக் கிணறுகள் 11.91 இலட்சம் ஹெக்டேருக்குப் பாசனம் தருகின்றன.' },
  },
  {
    difficulty: 'hard', source: 'Introduction, p. 307', answer: 0,
    en: { q: 'According to the textbook, in 2011 what share of women and of men in Tamil Nadu were involved in agriculture?', options: ['Nearly 55% of women and 35.3% of men', 'Nearly 35.3% of women and 55% of men', 'Nearly 49.3% of women and 42.1% of men', 'Nearly 78% of women and 14% of men'], explanation: 'In 2011 nearly 55% of women were involved in agriculture, against about one-third (35.3%) of men.' },
    ta: { q: 'பாடநூலின்படி 2011இல் தமிழ்நாட்டில் வேளாண்மையில் ஈடுபட்ட பெண்கள், ஆண்களின் விழுக்காடு', options: ['பெண்கள் ஏறக்குறைய 55%, ஆண்கள் 35.3%', 'பெண்கள் 35.3%, ஆண்கள் ஏறக்குறைய 55%', 'பெண்கள் 49.3%, ஆண்கள் 42.1%', 'பெண்கள் 78%, ஆண்கள் 14%'], explanation: '2011இல் ஏறக்குறைய 55% பெண்கள் வேளாண்மையில் ஈடுபட்டனர்; ஆண்களில் மூன்றில் ஒரு பகுதி (35.3%) ஈடுபட்டனர்.' },
  },
];
