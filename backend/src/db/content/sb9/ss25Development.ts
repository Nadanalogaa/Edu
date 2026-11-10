// Tamil Nadu State Board, 9th Social Science, Unit 25 – Economics: Understanding Development (மேம்பாட்டை அறிவோம்: தொலைநோக்கு, அளவீடு மற்றும் நிலைத் தன்மை).
// Book exercise questions (Economics Unit 1) plus our own questions so that every section is covered at three levels.
// source = section or exercise and printed page of the English-medium book; Tamil wording follows the Tamil-medium book.

import { BankQuestion, AR_EN, AR_TA } from './types';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.2, p. 291', answer: 0,
    en: { q: 'The term "Human resources" refers to', options: ['collective abilities of people', 'investment on poor people', 'expenditure on agriculture', 'investment on assets'], explanation: 'Human resources means the collective abilities of people that can be used in the production sector.' },
    ta: { q: 'மனிதவளம் எனும் சொல் குறிப்பிடுவது', options: ['ஒட்டுமொத்த மக்களின் திறமை', 'ஏழை மக்கள் மீதான முதலீடு', 'வேளாண்மை மீதான செலவு', 'சொத்துகள் மீதான முதலீடு'], explanation: 'உற்பத்தித் துறையில் பயன்படுத்தக்கூடிய மக்களின் ஒட்டுமொத்தத் திறமையே மனிதவளம்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.3, p. 291', answer: 0,
    en: { q: 'For comparing development between countries, their _____ is considered to be one of the most important attributes.', options: ['income', 'growth', 'expenditure', 'savings'], explanation: 'Countries with higher income are considered more developed, so income is one of the most important indicators.' },
    ta: { q: 'நாடுகளுக்கு இடையேயான மேம்பாட்டை ஒப்பிட அவற்றின் மிக முக்கியப் பண்புகளில் ஒன்றாகக் கருதப்படுவது', options: ['வருமானம்', 'வளர்ச்சி', 'செலவீனம்', 'சேமிப்புகள்'], explanation: 'அதிக வருமானம் உள்ள நாடுகள் அதிக மேம்பாடு அடைந்தவையாகக் கருதப்படுகின்றன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.5, p. 291', answer: 0,
    en: { q: 'The _____ income is also called per capita income.', options: ['average', 'total', 'people', 'monthly'], explanation: 'Average income, found by dividing a country\'s total income by its total population, is called per capita income.' },
    ta: { q: '_____ வருவாயை தலா வருமானம் என்றும் அழைக்கிறோம்.', options: ['சராசரி', 'மொத்த', 'மக்கள்', 'மாத'], explanation: 'நாட்டின் மொத்த வருமானத்தை மொத்த மக்கள்தொகையால் வகுத்துக் கிடைக்கும் சராசரி வருமானமே தலா வருமானம்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.15, p. 292', answer: 0,
    en: { q: '_____ is the state with the highest installed solar capacity in India.', options: ['Tamil Nadu', 'West Bengal', 'Kerala', 'Andhra Pradesh'], explanation: 'Tamil Nadu is the state with the highest installed solar capacity; it was 1,697 MW as on 31 July 2017.' },
    ta: { q: 'இந்தியாவில் அதிகபட்ச சூரிய ஆற்றல் உற்பத்தியைச் செய்யும் மாநிலம்', options: ['தமிழ்நாடு', 'மேற்கு வங்காளம்', 'கேரளா', 'ஆந்திரப் பிரதேசம்'], explanation: 'இந்தியாவில் அதிக சூரிய ஆற்றல் நிறுவுதிறன் கொண்ட மாநிலம் தமிழ்நாடு.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.16, p. 292', answer: 0,
    en: { q: '_____ resources are those which will get exhausted after years of use.', options: ['Non-renewable', 'Natural', 'Renewable', 'New'], explanation: 'Non-renewable resources such as coal and petroleum get exhausted after years of use and cannot be replenished.' },
    ta: { q: 'பல ஆண்டுகளின் உபயோகத்திற்குப் பிறகு தீர்ந்து போகும் வளம்', options: ['புதுப்பிக்க இயலாத வளம்', 'இயற்கை', 'புதுப்பிக்க இயலும் வளம்', 'புதியவை'], explanation: 'நிலக்கரி, பெட்ரோலியம் போன்ற புதுப்பிக்க இயலாத வளங்கள் பயன்படுத்தப்பட்ட பின் தீர்ந்துவிடும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.17, p. 292', answer: 0,
    en: { q: 'Thermal plants emit large quantities of _____, which pollute the environment.', options: ['carbon dioxide', 'oxygen', 'nitrogen', 'carbon'], explanation: 'Thermal power plants emit large quantities of carbon dioxide, which pollutes the environment.' },
    ta: { q: 'அனல் மின் நிலையம் அதிக அளவிலான _____ வெளியிடுவதால் சுற்றுச்சூழல் மாசுபடுகிறது.', options: ['கார்பன்-டைஆக்சைடு', 'ஆக்சிஜன்', 'நைட்ரஜன்', 'கார்பன்'], explanation: 'அனல் மின் நிலையங்கள் அதிக அளவு கார்பன்-டைஆக்சைடை வெளியிடுகின்றன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.7, p. 291', answer: 0,
    en: { q: 'Which one of the following countries is not a member of SAARC?', options: ['China', 'India', 'Pakistan', 'Bhutan'], explanation: 'India, Pakistan and Bhutan are SAARC members; China is not.' },
    ta: { q: 'சார்க் கூட்டமைப்பின் உறுப்பு நாடுகளில் இல்லாத ஒன்று', options: ['சீனா', 'இந்தியா', 'பாகிஸ்தான்', 'பூடான்'], explanation: 'இந்தியா, பாகிஸ்தான், பூடான் ஆகியவை சார்க் உறுப்பு நாடுகள்; சீனா உறுப்பு நாடு அல்ல.' },
  },
  // ------------------------------------------------------------------ Medium
  {
    difficulty: 'medium', source: 'Book exercise I.4, p. 291', answer: 0,
    en: { q: '_____ is considered a true measure of national income.', options: ['NNP', 'GNP', 'GDP', 'NDP'], explanation: 'The Net National Product (NNP) is considered a true measure of national output; it is also known as national income.' },
    ta: { q: 'தேசிய வருமானத்தின் உண்மை மதிப்பீடாக இது கருதப்படுகிறது.', options: ['நிகர தேசிய உற்பத்தி', 'மொத்த நிகர உற்பத்தி', 'மொத்த உள்நாட்டு உற்பத்தி', 'நிகர உள்நாட்டு உற்பத்தி'], explanation: 'நிகர தேசிய உற்பத்தி (NNP) தேசிய உற்பத்தியின் உண்மை மதிப்பீடாகக் கருதப்படுகிறது; இது தேசிய வருமானம் எனவும் அழைக்கப்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.6, p. 291', answer: 0,
    en: { q: 'Which one of the following countries is not a G-8 country?', options: ['India', 'Japan', 'Canada', 'Russia'], explanation: 'Japan, Canada and Russia were members of the G-8; India is not.' },
    ta: { q: 'ஜி-8 நாடுகளின் கூட்டமைப்பின் உறுப்பு நாடுகளில் இல்லாத ஒன்று', options: ['இந்தியா', 'ஜப்பான்', 'கனடா', 'ரஷ்யா'], explanation: 'ஜப்பான், கனடா, ரஷ்யா ஆகியவை ஜி-8 உறுப்பினர்கள்; இந்தியா உறுப்பு நாடு அல்ல.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.10, p. 291', answer: 0,
    en: { q: 'The Human Development Index (HDI) does not take into account which of the following dimensions in its calculation?', options: ['Gender', 'Health', 'Education', 'Income'], explanation: 'HDI is built from health, education and income; gender is not one of its dimensions.' },
    ta: { q: 'மனிதவள மேம்பாட்டுக் குறியீடு (HDI) கணக்கில் பின்வரும் எந்தப் பரிமாணத்தை எடுத்துக் கொள்ளவில்லை?', options: ['பாலினம்', 'உடல்நலம்', 'கல்வி', 'வருமானம்'], explanation: 'உடல்நலம், கல்வி, வருமானம் ஆகியவை HDI-இன் பரிமாணங்கள்; பாலினம் அல்ல.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.11, p. 291', answer: 0,
    en: { q: 'Among the following states, which one has a literacy rate (2011) higher than the national average?', options: ['Tamil Nadu', 'Andhra Pradesh', 'Uttar Pradesh', 'Both Andhra Pradesh and Uttar Pradesh'], explanation: 'Tamil Nadu\'s literacy rate (80.09%) is above the national average (74.04%); Andhra Pradesh (67.02%) and Uttar Pradesh (69.72%) are below it.' },
    ta: { q: 'பின்வரும் எந்த மாநிலத்தில் கல்வியறிவு (2011) தேசியக் கல்வியறிவு விகிதத்தைக் காட்டிலும் அதிகமாக உள்ளது?', options: ['தமிழ்நாடு', 'ஆந்திரப் பிரதேசம்', 'உத்திரப் பிரதேசம்', 'ஆந்திரப் பிரதேசம், உத்திரப் பிரதேசம் இரண்டும்'], explanation: 'தமிழ்நாட்டின் கல்வியறிவு 80.09%; இது தேசியச் சராசரியான 74.04%-ஐ விட அதிகம். ஆந்திரா (67.02%), உத்திரப் பிரதேசம் (69.72%) குறைவு.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.12, p. 291', answer: 0,
    en: { q: 'Sex ratio means', options: ['the number of females per thousand males', 'the ratio between adult male and adult female in a population', 'the ratio between female and male in a population', 'the relationship between male and female'], explanation: 'Sex ratio is expressed as females per 1000 males; Tamil Nadu\'s was 996 and India\'s 943 in 2011.' },
    ta: { q: 'பாலின விகிதம் என்பது', options: ['ஆயிரம் ஆண்களுக்கு எத்தனை பெண்கள் என்ற விகிதம்', 'வயதான ஆண் மற்றும் வயதான பெண் விகிதம்', 'ஆண்கள் மற்றும் பெண்கள் விகிதம்', 'ஆணுக்கும் பெண்ணுக்கும் இடையே நிலவும் சமூகத் தொடர்பு'], explanation: 'பாலின விகிதம் 1000 ஆண்களுக்கு உள்ள பெண்களின் எண்ணிக்கை; 2011இல் தமிழ்நாடு 996, இந்தியா 943.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.13, p. 291', answer: 0,
    en: { q: 'Inter-generational equality is ensured under the process of', options: ['Sustainable development', 'Industrial progress', 'Economic development', 'Economic growth'], explanation: 'Sustainable development does not compromise the needs of future generations, which ensures equality between generations.' },
    ta: { q: 'பரம்பரை ரீதியான சமத்துவம் எந்த நடைமுறையில் உறுதி செய்யப்படுகிறது?', options: ['நிலையான மேம்பாடு', 'தொழிற்சாலை', 'பொருளாதார மேம்பாடு', 'பொருளாதார வளர்ச்சி'], explanation: 'எதிர்கால சந்ததியினரின் தேவைகளைப் பாதிக்காத மேம்பாடே நிலையான மேம்பாடு.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.14, p. 292', answer: 0,
    en: { q: 'Find the odd one out.', options: ['Natural gas', 'Solar energy', 'Wind energy', 'Paper'], explanation: 'Solar energy, wind energy and paper are listed as renewable resources; natural gas is a non-renewable fossil fuel.' },
    ta: { q: 'பொருந்தாத ஒன்றைக் கண்டறிக.', options: ['இயற்கை வாயு', 'சூரிய ஆற்றல்', 'காற்று ஆற்றல்', 'காகிதம்'], explanation: 'சூரிய ஆற்றல், காற்று ஆற்றல், காகிதம் ஆகியவை புதுப்பிக்கத் தக்க வளங்கள்; இயற்கை வாயு புதுப்பிக்க இயலாத வளம்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III, p. 292', answer: 0,
    en: { q: 'Match correctly: Development, Human resource, Solar energy, 1972 with Wild life Protection Act, Renewable resources, Part of daily life, Education.', options: ['Development – Part of daily life; Human resource – Education; Solar energy – Renewable resources; 1972 – Wild life Protection Act', 'Development – Education; Human resource – Part of daily life; Solar energy – Renewable resources; 1972 – Wild life Protection Act', 'Development – Part of daily life; Human resource – Renewable resources; Solar energy – Education; 1972 – Wild life Protection Act', 'Development – Wild life Protection Act; Human resource – Education; Solar energy – Part of daily life; 1972 – Renewable resources'], explanation: 'Development is part of daily life, human resources are developed through education, solar energy is renewable and the Wildlife Protection Act was passed in 1972.' },
    ta: { q: 'சரியாகப் பொருத்துக: மேம்பாடு, மனித வளம், சூரிய சக்தி, 1972 – வனவிலங்குகள் பாதுகாப்புச் சட்டம், புதுப்பிக்கத் தக்க வளங்கள், தினசரி வாழ்க்கையின் ஒரு பகுதி, கல்வி.', options: ['மேம்பாடு – தினசரி வாழ்க்கையின் ஒரு பகுதி; மனித வளம் – கல்வி; சூரிய சக்தி – புதுப்பிக்கத் தக்க வளங்கள்; 1972 – வனவிலங்குகள் பாதுகாப்புச் சட்டம்', 'மேம்பாடு – கல்வி; மனித வளம் – தினசரி வாழ்க்கையின் ஒரு பகுதி; சூரிய சக்தி – புதுப்பிக்கத் தக்க வளங்கள்; 1972 – வனவிலங்குகள் பாதுகாப்புச் சட்டம்', 'மேம்பாடு – தினசரி வாழ்க்கையின் ஒரு பகுதி; மனித வளம் – புதுப்பிக்கத் தக்க வளங்கள்; சூரிய சக்தி – கல்வி; 1972 – வனவிலங்குகள் பாதுகாப்புச் சட்டம்', 'மேம்பாடு – வனவிலங்குகள் பாதுகாப்புச் சட்டம்; மனித வளம் – கல்வி; சூரிய சக்தி – தினசரி வாழ்க்கையின் ஒரு பகுதி; 1972 – புதுப்பிக்கத் தக்க வளங்கள்'], explanation: 'மேம்பாடு தினசரி வாழ்க்கையின் ஒரு பகுதி; மனித வளம் கல்வியால் மேம்படுகிறது; சூரிய சக்தி புதுப்பிக்கத் தக்கது; வனவிலங்குகள் பாதுகாப்புச் சட்டம் 1972.' },
  },
  {
    difficulty: 'medium', source: '§1.3, p. 287', answer: 0,
    en: { q: 'The headquarters of the Ministry of Human Resource Development is situated at', options: ['Shastri Bhavan, New Delhi', 'Yojana Bhavan, New Delhi', 'Rashtrapati Bhavan, New Delhi', 'Ezhilagam, Chennai'], explanation: 'The Ministry of Human Resource Development has its headquarters at Shastri Bhavan in New Delhi.' },
    ta: { q: 'மனித வள மேம்பாட்டு அமைச்சகத்தின் தலைமையகம் அமைந்துள்ள இடம்', options: ['சாஸ்திரி பவன், புது தில்லி', 'யோஜனா பவன், புது தில்லி', 'ராஷ்டிரபதி பவன், புது தில்லி', 'எழிலகம், சென்னை'], explanation: 'மனித வள மேம்பாட்டு அமைச்சகத்தின் தலைமையகம் புது தில்லியிலுள்ள சாஸ்திரி பவனில் அமைந்துள்ளது.' },
  },
  {
    difficulty: 'medium', source: '§1.2, p. 286', answer: 0,
    en: { q: 'In terms of Purchasing Power Parity (PPP), India recently became the', options: ['third largest economy', 'largest economy', 'second largest economy', 'fifth largest economy'], explanation: 'India became the third largest economy in PPP terms; China became the largest, pushing the US to second place.' },
    ta: { q: 'வாங்கும் திறன் சமநிலையின் (PPP) அடிப்படையில் சமீபத்தில் இந்தியா', options: ['மூன்றாவது பெரிய பொருளாதார நாடாக ஆனது', 'மிகப் பெரிய பொருளாதார நாடாக ஆனது', 'இரண்டாவது பெரிய பொருளாதார நாடாக ஆனது', 'ஐந்தாவது பெரிய பொருளாதார நாடாக ஆனது'], explanation: 'வாங்கும் திறன் சமநிலையின் அடிப்படையில் இந்தியா மூன்றாவது பெரிய பொருளாதார நாடு; சீனா முதலிடம், அமெரிக்கா இரண்டாமிடம்.' },
  },
  {
    difficulty: 'medium', source: '§1.4, p. 288', answer: 0,
    en: { q: 'Which of the following is an example of a non-renewable resource?', options: ['Petroleum', 'Solar energy', 'Wind energy', 'Wood'], explanation: 'Metals, glass and fossil fuels (coal, petroleum, natural gas, diesel) are non-renewable; solar, wind, water, wood and paper are renewable.' },
    ta: { q: 'பின்வருவனவற்றுள் புதுப்பிக்க இயலாத வளத்திற்கு எடுத்துக்காட்டு எது?', options: ['பெட்ரோலியம்', 'சூரிய சக்தி', 'காற்று ஆற்றல்', 'மரம்'], explanation: 'உலோகங்கள், கண்ணாடி, நிலக்கரி, பெட்ரோலியம், இயற்கை வாயு போன்ற படிம எரிபொருள்கள் புதுப்பிக்க இயலாதவை.' },
  },
  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise I.1, p. 290', answer: 0,
    en: { q: 'Assertion (A): Development increases the quality of life. Reason (R): People will have higher incomes, better education, better health and nutrition, less poverty.', options: AR_EN, explanation: 'Higher incomes, better education, health and nutrition and less poverty are exactly what an improved quality of life means, so R explains A.' },
    ta: { q: 'கூற்று (A): மேம்பாடு வாழ்க்கைத் தரத்தை உயர்த்துகிறது. காரணம் (R): மக்கள் அதிக வருவாய், சிறந்த கல்வி, உடல்நலம் மற்றும் ஊட்டச்சத்து, குறைந்த வறுமை பெறுவார்கள்.', options: AR_TA, explanation: 'அதிக வருவாய், சிறந்த கல்வி, உடல்நலம், குறைந்த வறுமை ஆகியவையே உயர்ந்த வாழ்க்கைத் தரம்; எனவே காரணம் கூற்றை விளக்குகிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise I.8, p. 291', answer: 1,
    en: { q: 'Assertion (A): The Net National Product (NNP) is considered as a true measure of national output. Reason (R): It is also known as national income.', options: AR_EN, explanation: 'Both statements are true, but NNP being called national income is only another name for it, not the reason it is a true measure of output.' },
    ta: { q: 'கூற்று (A): நிகர தேசிய உற்பத்தி என்பது தேசிய உற்பத்தி அளவின் உண்மை மதிப்பீடாகக் கருதப்படுகிறது. காரணம் (R): இது தேசிய வருமானம் என்று அழைக்கப்படுகிறது.', options: AR_TA, explanation: 'இரண்டும் சரி; ஆனால் "தேசிய வருமானம்" என்பது அதன் மற்றொரு பெயர் மட்டுமே; அது உண்மை மதிப்பீடாக இருப்பதற்கான விளக்கம் அல்ல.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise I.9, p. 291', answer: 0,
    en: { q: 'Assertion (A): Human resource is necessary for the progress of any country. Reason (R): Investment in education and health of people can result in a high rate of returns in the future for a country.', options: AR_EN, explanation: 'Because investment in people\'s education and health brings high future returns, human resources are necessary for progress; R explains A.' },
    ta: { q: 'கூற்று (A): எந்த ஒரு நாட்டின் மேம்பாட்டிற்கும் மனித வளம் அத்தியாவசியமாக இருக்கிறது. காரணம் (R): கல்வி மற்றும் மக்கள் நலத்தில் முதலீடு செய்வதன் விளைவாக எதிர்காலத்தில் அதிக அளவு பலன் கிடைக்கும்.', options: AR_TA, explanation: 'கல்வி, உடல்நலத்தில் செய்யும் முதலீடு எதிர்காலத்தில் அதிக பலன் தருவதால் மனித வளம் மேம்பாட்டிற்கு அவசியம்; காரணம் கூற்றை விளக்குகிறது.' },
  },
  {
    difficulty: 'hard', source: '§1.2, p. 286', answer: 0,
    en: { q: 'According to the World Bank classification (July 1, 2022 for FY23) given in the textbook, a country with a per capita income of US$ 3,000 is a', options: ['Lower middle income country', 'Low income country', 'Upper middle income country', 'High income country'], explanation: 'Low income is below $1085, lower middle $1086–4255, upper middle $4256–13,205 and high income above $13,205; $3,000 is lower middle income.' },
    ta: { q: 'பாடநூலில் உள்ள உலக வங்கி வகைப்பாட்டின்படி (FY23), தலா வருமானம் 3,000 அமெரிக்க டாலர் கொண்ட நாடு', options: ['குறைந்த நடுத்தர வருமான நாடு', 'குறைந்த வருமான நாடு', 'உயர் நடுத்தர வருமான நாடு', 'உயர் வருமான நாடு'], explanation: 'குறைந்த வருமானம் < 1085, குறைந்த நடுத்தரம் 1086–4255, உயர் நடுத்தரம் 4256–13,205, உயர் வருமானம் > 13,205 டாலர்; எனவே 3,000 டாலர் குறைந்த நடுத்தர வருமானம்.' },
  },
  {
    difficulty: 'hard', source: '§1.5, p. 289', answer: 0,
    en: { q: 'Which Article of the Constitution makes it the duty of every citizen to protect and improve the natural environment, including forests, lakes, rivers and wildlife?', options: ['Article 51A(g)', 'Article 21A', 'Article 39(d)', 'Article 324'], explanation: 'Article 51A(g) states that it shall be the duty of every citizen to protect and improve the natural environment and to have compassion for living creatures.' },
    ta: { q: 'காடுகள், ஏரிகள், ஆறுகள், வன உயிரினங்கள் உள்ளிட்ட இயற்கைச் சூழலைப் பாதுகாத்து மேம்படுத்துவதை ஒவ்வொரு குடிமகனின் கடமையாக்கும் அரசியலமைப்புப் பிரிவு', options: ['பிரிவு 51A (g)', 'பிரிவு 21A', 'பிரிவு 39 (d)', 'பிரிவு 324'], explanation: 'அரசியலமைப்புப் பிரிவு 51A (g) இயற்கைச் சூழலைப் பாதுகாத்து மேம்படுத்துவதைக் குடிமக்களின் கடமையாகக் கூறுகிறது.' },
  },
  {
    difficulty: 'hard', source: '§1.5, p. 289', answer: 0,
    en: { q: 'Which environmental Act is correctly matched with its year?', options: ['Biological Diversity Act – 2002', 'National Green Tribunal Act – 1986', 'Forest (Conservation) Act – 1974', 'Water (Prevention and Control of Pollution) Act – 1980'], explanation: 'NGT Act 2010, Biological Diversity Act 2002, Environment (Protection) Act 1986, Forest (Conservation) Act 1980, Water Act 1974, Wildlife Protection Act 1972.' },
    ta: { q: 'சுற்றுச்சூழல் சட்டத்தையும் அதன் ஆண்டையும் சரியாகப் பொருத்தியுள்ளது எது?', options: ['பல்லுயிர்மை பாதுகாப்புச் சட்டம் – 2002', 'தேசியப் பசுமைத் தீர்ப்பாயச் சட்டம் – 1986', 'வன (பாதுகாப்பு) சட்டம் – 1974', 'நீர் (மாசுபடுத்துதல் தடுப்பு) சட்டம் – 1980'], explanation: 'தேசியப் பசுமைத் தீர்ப்பாயச் சட்டம் 2010, பல்லுயிர்மை பாதுகாப்புச் சட்டம் 2002, சுற்றுச்சூழல் (பாதுகாப்பு) சட்டம் 1986, வன (பாதுகாப்பு) சட்டம் 1980, நீர் சட்டம் 1974, வனவிலங்குகள் பாதுகாப்புச் சட்டம் 1972.' },
  },
  {
    difficulty: 'hard', source: '§1.3, p. 288', answer: 0,
    en: { q: 'According to the NITI Aayog table in the textbook, Tamil Nadu\'s enrolment in higher education (2015–16) was', options: ['44.3%, the highest among the states listed', '30.8%, equal to Kerala', '24.5%, equal to the national average', '80.09%, the highest in India'], explanation: 'Tamil Nadu\'s higher education enrolment was 44.3%, against 24.5% for India; enrolment for higher education in Tamil Nadu is the highest in India.' },
    ta: { q: 'பாடநூலில் உள்ள நிதி ஆயோக் அட்டவணைப்படி தமிழ்நாட்டின் உயர்கல்விச் சேர்க்கை (2015–16)', options: ['44.3% – அட்டவணையிலுள்ள மாநிலங்களில் மிக அதிகம்', '30.8% – கேரளாவுக்குச் சமம்', '24.5% – தேசியச் சராசரிக்குச் சமம்', '80.09% – இந்தியாவிலேயே மிக அதிகம்'], explanation: 'தமிழ்நாட்டின் உயர்கல்விச் சேர்க்கை 44.3%; இந்தியாவின் சராசரி 24.5%. உயர்கல்விச் சேர்க்கையில் தமிழ்நாடு இந்தியாவில் முதலிடம்.' },
  },
];
