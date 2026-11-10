// Tamil Nadu State Board, 9th Social Science, Unit 26 – Economics: Employment in India and Tamil Nadu (இந்தியா மற்றும் தமிழ்நாட்டில் வேலைவாய்ப்பு).
// Book exercise questions (Economics Unit 2) plus our own questions so that every section is covered at three levels.
// source = section or exercise and printed page of the English-medium book; Tamil wording follows the Tamil-medium book.

import { BankQuestion, AR_EN, AR_TA } from './types';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.1, p. 296', answer: 0,
    en: { q: 'We take the age group _____ years for computation of the workforce.', options: ['15–60', '12–60', '21–65', '5–14'], explanation: 'Persons below 15 are children and those above 60 are excluded, so the 15–60 age group is taken.' },
    ta: { q: 'பணியிடத்தைக் கணக்கிடுவதற்கு _____ வயது வரையிலான வயதைக் கணக்கிடலாம்.', options: ['15-60', '12-60', '21-65', '5-14'], explanation: '15 வயதுக்குட்பட்டோர் குழந்தைகள்; 60 வயதைக் கடந்தோர் சேர்க்கப்படுவதில்லை; எனவே 15-60 வயது எடுத்துக்கொள்ளப்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.3, p. 296', answer: 0,
    en: { q: 'Which one of the following sectors is the largest employer in India?', options: ['Primary sector', 'Secondary sector', 'Tertiary sector', 'Public sector'], explanation: 'In developing countries like India a large workforce is engaged in the primary (agricultural) sector.' },
    ta: { q: 'பின்வரும் துறைகளில் இந்தியாவின் மிகப்பெரிய வேலைவாய்ப்புத் துறை எது?', options: ['முதன்மைத் துறை', 'இரண்டாம் துறை', 'சார்புத் துறை', 'பொதுத் துறை'], explanation: 'இந்தியா போன்ற வளரும் நாடுகளில் பெரும்பாலான உழைப்பாளர்கள் முதன்மைத் துறையில் ஈடுபட்டுள்ளனர்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.4, p. 296', answer: 0,
    en: { q: 'Which one of the following is not in the primary sector?', options: ['Manufacturing', 'Agriculture', 'Mining', 'Fishery'], explanation: 'Agriculture, forestry, fishery and mining are primary activities; manufacturing is secondary.' },
    ta: { q: 'பின்வருவனவற்றுள் எது முதன்மைத் துறை சார்ந்ததல்ல?', options: ['உற்பத்திப் பொருள்கள்', 'வேளாண்மை', 'சுரங்கத் தொழில்', 'மீன்பிடித் தொழில்'], explanation: 'வேளாண்மை, காடுகள், மீன்பிடிப்பு, சுரங்கம் ஆகியவை முதன்மைத் துறை; உற்பத்தி இரண்டாம் துறை.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.5, p. 296', answer: 0,
    en: { q: 'Which one of the following is not in the secondary sector?', options: ['Forestry', 'Construction', 'Manufacturing', 'Small Scale Industry'], explanation: 'Forestry is a primary activity; construction, manufacturing and small-scale industry are secondary.' },
    ta: { q: 'பின்வருவனவற்றுள் எது இரண்டாம் துறையைச் சார்ந்ததல்ல?', options: ['காடுகள்', 'கட்டுமானம்', 'உற்பத்தி', 'சிறு தொழில்'], explanation: 'காடுகள் முதன்மைத் துறையைச் சார்ந்தவை; கட்டுமானம், உற்பத்தி, சிறு தொழில் ஆகியவை இரண்டாம் துறை.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.6, p. 296', answer: 0,
    en: { q: 'Which group of activities belongs to the tertiary sector?', options: ['Transport, insurance and banking', 'Mining, fishery and forestry', 'Construction, manufacturing and small-scale industry', 'Agriculture, poultry and dairy'], explanation: 'Transport, insurance and banking are all services, i.e. the tertiary sector.' },
    ta: { q: 'மூன்றாம் துறையில் அடங்கும் செயல்பாடுகளின் தொகுப்பு எது?', options: ['போக்குவரத்து, காப்பீடு, வங்கியியல்', 'சுரங்கம், மீன்பிடிப்பு, காடுகள்', 'கட்டுமானம், உற்பத்தி, சிறு தொழில்', 'வேளாண்மை, கோழி வளர்ப்பு, பால் பண்ணை'], explanation: 'போக்குவரத்து, காப்பீடு, வங்கியியல் ஆகிய அனைத்தும் சேவைத் துறையான மூன்றாம் துறையில் அடங்கும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.15, p. 297', answer: 0,
    en: { q: 'People who employ workers and pay rewards for their work are termed _____.', options: ['employers', 'employees', 'labour', 'caretakers'], explanation: 'Those who employ workers and pay rewards are employers; those engaged in economic activities are employees.' },
    ta: { q: 'தொழிலாளர்களைப் பணியமர்த்துபவர்களாகவும், அவர்கள் பணிக்கான வெகுமதிகளைச் செலுத்தும் நபர்களாகவும் உள்ளவர்கள்', options: ['முதலாளி', 'ஊழியர்', 'உழைப்பாளி', 'பாதுகாவலர்'], explanation: 'தொழிலாளர்களைப் பணியமர்த்தி ஊதியம் தருபவர் முதலாளி.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.16, p. 297', answer: 0,
    en: { q: '_____ continues to be the largest employer in Tamil Nadu.', options: ['Agriculture', 'Manufacturing', 'Banking', 'Small Scale Industry'], explanation: 'Despite a sharp decline in its share of GDP, agriculture continues to be the largest employer in Tamil Nadu.' },
    ta: { q: 'தமிழ்நாட்டில் _____ துறையில் அதிக நபர்கள் வேலைக்கு அமர்த்தப்பட்டுள்ளனர்.', options: ['வேளாண்மை', 'உற்பத்தி', 'வங்கியியல்', 'சிறுதொழில்'], explanation: 'மொத்த உள்நாட்டு உற்பத்தியில் கடும் வீழ்ச்சி ஏற்பட்டபோதும் தமிழ்நாட்டில் விவசாயமே அதிக மக்களுக்கு வேலையளிக்கிறது.' },
  },
  {
    difficulty: 'easy', source: 'Introduction, p. 293', answer: 0,
    en: { q: 'The number of people in the country who work and are also capable of working is called the', options: ['labour force', 'employment structure', 'employment pattern', 'organised sector'], explanation: 'Labour force of the economy is the number of people in the country who work and are also capable of working.' },
    ta: { q: 'நாட்டில் உழைக்கும் மற்றும் உழைக்கும் திறன் பெற்ற மக்களின் எண்ணிக்கை', options: ['தொழிலாளர் சக்தி', 'வேலைவாய்ப்பு அமைப்பு', 'வேலைவாய்ப்பு முறை', 'ஒழுங்கமைக்கப்பட்ட துறை'], explanation: 'நாட்டில் உழைக்கும் மற்றும் உழைக்கும் திறன் பெற்றவர்களின் எண்ணிக்கையே பொருளாதாரத்தின் தொழிலாளர் சக்தி.' },
  },
  {
    difficulty: 'easy', source: '§2.2, p. 294', answer: 0,
    en: { q: 'Street vendors and people doing small repair work on their own usually belong to the', options: ['unorganised sector', 'organised sector', 'public sector', 'service motive sector'], explanation: 'The unorganised sector includes many self-employed people doing small jobs such as selling on the street and repair work; their enterprises are not registered.' },
    ta: { q: 'தெருவில் விற்பனை செய்வோர், சிறு பழுது நீக்கும் பணி செய்வோர் பொதுவாக இடம்பெறும் துறை', options: ['ஒழுங்கமைக்கப்படாத துறை', 'ஒழுங்கமைக்கப்பட்ட துறை', 'பொதுத் துறை', 'சேவை நோக்குத் துறை'], explanation: 'தெருவில் விற்பனை, பழுது நீக்குதல் போன்ற சிறு வேலைகளைச் சொந்தமாகச் செய்வோர் பதிவு செய்யப்படாத ஒழுங்கமைக்கப்படாத துறையைச் சேர்ந்தவர்கள்.' },
  },
  // ------------------------------------------------------------------ Medium
  {
    difficulty: 'medium', source: 'Book exercise I.2, p. 296', answer: 0,
    en: { q: 'Which is the correct sequence of the various sectors in the GDP of India in descending order?', options: ['Tertiary sector, Secondary sector, Primary sector', 'Primary sector, Secondary sector, Tertiary sector', 'Primary sector, Tertiary sector, Secondary sector', 'Secondary sector, Tertiary sector, Primary sector'], explanation: 'Although most people work in the primary sector, the tertiary sector contributes the largest share of India\'s GDP, followed by the secondary and then the primary sector.' },
    ta: { q: 'இந்தியாவின் பல்வேறு துறைகளின் மொத்த உள்நாட்டு உற்பத்தியில் எந்த இறங்கு வரிசை சரியானது?', options: ['சார்புத் துறை, இரண்டாம் துறை, முதன்மைத் துறை', 'முதன்மைத் துறை, இரண்டாம் துறை, சார்புத் துறை', 'முதன்மைத் துறை, சார்புத் துறை, இரண்டாம் துறை', 'இரண்டாம் துறை, சார்புத் துறை, முதன்மைத் துறை'], explanation: 'பெரும்பாலானோர் முதன்மைத் துறையில் பணியாற்றினாலும், மொத்த உள்நாட்டு உற்பத்தியில் சார்புத் துறையின் பங்கே அதிகம்; அடுத்து இரண்டாம் துறை, பின்னர் முதன்மைத் துறை.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.7, p. 296', answer: 0,
    en: { q: 'Which sector is not included in the occupational pattern?', options: ['Private sector', 'Primary sector', 'Secondary sector', 'Tertiary sector'], explanation: 'The occupational pattern uses the primary, secondary and tertiary sectors; private sector is a classification by ownership.' },
    ta: { q: 'எந்தத் துறை தொழிலமைப்பு முறையில் சேர்க்கப்படவில்லை?', options: ['தனியார் துறை', 'முதன்மைத் துறை', 'இரண்டாம் துறை', 'சார்புத் துறை'], explanation: 'தொழிலமைப்பு முறை முதன்மை, இரண்டாம், சார்புத் துறைகளைக் கொண்டது; தனியார் துறை என்பது உரிமையின் அடிப்படையிலான பிரிவு.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.9, p. 297', answer: 0,
    en: { q: 'Which Delhi Sultan of medieval India formed an "Employment Bureau" to solve the unemployment problem?', options: ['Feroz Shah Tugluq', 'Muhammad Bin Tugluq', 'Allauddin Khilji', 'Balban'], explanation: 'In the medieval period Feroz Shah Tugluq, the Sultan of Delhi, set up an Employment Bureau.' },
    ta: { q: 'எந்த டெல்லி சுல்தான் வேலையின்மைப் பிரச்சனையைத் தீர்க்க "வேலை வாய்ப்பு அலுவலகத்தை" அமைத்தார்?', options: ['ஃபெரோஷ் ஷா துக்ளக்', 'முகமது பின் துக்ளக்', 'அலாவுதீன் கில்ஜி', 'பால்பன்'], explanation: 'இடைக்காலத்தில் டெல்லி சுல்தான் ஃபெரோஷ் ஷா துக்ளக் வேலைவாய்ப்பு அலுவலகம் அமைத்தார்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.10, p. 297', answer: 0,
    en: { q: 'The _____ sector is registered and follows government rules.', options: ['organised', 'agriculture', 'unorganised', 'private'], explanation: 'The organised sector is incorporated with the appropriate authority or government and follows rules and regulations.' },
    ta: { q: '_____ துறை பதிவு செய்யப்பட்டு அரசு விதிகளைப் பின்பற்றுகிறது.', options: ['ஒழுங்கமைக்கப்பட்ட', 'வேளாண்மை', 'ஒழுங்கமைக்கப்படாத', 'தனியார்'], explanation: 'ஒழுங்கமைக்கப்பட்ட துறை அரசிடம் பதிவு செய்யப்பட்டு விதிமுறைகளைப் பின்பற்றுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.11, p. 297', answer: 0,
    en: { q: 'The _____ provides job security and higher wages.', options: ['organised sector', 'public sector', 'unorganised sector', 'private sector'], explanation: 'Employees in the organised sector get job security and higher wages than those in the unorganised sector.' },
    ta: { q: '_____ வேலைப் பாதுகாப்பு மற்றும் அதிக ஊதியம் வழங்குகிறது.', options: ['ஒழுங்கமைக்கப்பட்ட துறை', 'பொதுத் துறை', 'ஒழுங்கமைக்கப்படாத துறை', 'தனியார் துறை'], explanation: 'ஒழுங்கமைக்கப்பட்ட துறைப் பணியாளர்களுக்கு வேலைப் பாதுகாப்பும் அதிக ஊதியமும் கிடைக்கின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.12, p. 297', answer: 0,
    en: { q: 'Find the odd one out.', options: ['Small Scale Industry', 'Banking', 'Railways', 'Insurance'], explanation: 'Banks, railways and insurance are examples of the organised sector; small-scale industry characterises the unorganised sector.' },
    ta: { q: 'பொருந்தாத ஒன்றைக் கண்டறிக.', options: ['சிறு தொழில்', 'வங்கியியல்', 'ரயில்வே', 'காப்பீடு'], explanation: 'வங்கி, ரயில்வே, காப்பீடு ஆகியவை ஒழுங்கமைக்கப்பட்ட துறை; சிறு தொழில் ஒழுங்கமைக்கப்படாத துறையின் பண்பு.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.13, p. 297', answer: 0,
    en: { q: 'Sectors are classified into public and private sectors on the basis of', options: ['ownership of enterprises', 'number of workers employed', 'nature of economic activity', 'employment conditions'], explanation: 'Activities are classified into public and private sectors based on who owns the assets and is responsible for delivering services.' },
    ta: { q: 'பொதுத் துறை மற்றும் தனியார் துறை என்று எதன் அடிப்படையில் துறைகள் வகைப்படுத்தப்படுகின்றன?', options: ['நிறுவனங்களின் உரிமை', 'பணியாளர்களின் எண்ணிக்கை', 'பொருளாதாரச் செயல்முறை', 'வேலைவாய்ப்பின் நிலை'], explanation: 'சொத்துகளின் உரிமை யாரிடம் உள்ளது என்பதன் அடிப்படையில் பொதுத் துறை, தனியார் துறை எனப் பிரிக்கப்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III, p. 298', answer: 0,
    en: { q: 'Match correctly: Public sector, Private sector, Primary sector, Tertiary sector with Banking, Poultry, Profit motive, Service motive.', options: ['Public – Service motive; Private – Profit motive; Primary – Poultry; Tertiary – Banking', 'Public – Profit motive; Private – Service motive; Primary – Poultry; Tertiary – Banking', 'Public – Service motive; Private – Profit motive; Primary – Banking; Tertiary – Poultry', 'Public – Banking; Private – Poultry; Primary – Profit motive; Tertiary – Service motive'], explanation: 'The public sector has a service motive, the private sector a profit motive; poultry is primary and banking is tertiary.' },
    ta: { q: 'சரியாகப் பொருத்துக: பொதுத் துறை, தனியார் துறை, முதன்மைத் துறை, சார்புத் துறை – வங்கியியல், கோழி வளர்ப்பு, இலாப நோக்கம், சேவை நோக்கம்.', options: ['பொதுத் துறை – சேவை நோக்கம்; தனியார் துறை – இலாப நோக்கம்; முதன்மைத் துறை – கோழி வளர்ப்பு; சார்புத் துறை – வங்கியியல்', 'பொதுத் துறை – இலாப நோக்கம்; தனியார் துறை – சேவை நோக்கம்; முதன்மைத் துறை – கோழி வளர்ப்பு; சார்புத் துறை – வங்கியியல்', 'பொதுத் துறை – சேவை நோக்கம்; தனியார் துறை – இலாப நோக்கம்; முதன்மைத் துறை – வங்கியியல்; சார்புத் துறை – கோழி வளர்ப்பு', 'பொதுத் துறை – வங்கியியல்; தனியார் துறை – கோழி வளர்ப்பு; முதன்மைத் துறை – இலாப நோக்கம்; சார்புத் துறை – சேவை நோக்கம்'], explanation: 'பொதுத் துறை சேவை நோக்கம், தனியார் துறை இலாப நோக்கம் கொண்டவை; கோழி வளர்ப்பு முதன்மைத் துறை, வங்கியியல் சார்புத் துறை.' },
  },
  {
    difficulty: 'medium', source: '§2.1, p. 294', answer: 0,
    en: { q: 'During the past four decades since 1972–73, employment in India has grown at an average rate of', options: ['2%', '5%', '10%', '0.5%'], explanation: 'Employment growth has increased at an average rate of 2% during the past four decades since 1972–73.' },
    ta: { q: '1972–73 முதல் கடந்த நான்கு பத்தாண்டுகளில் இந்தியாவில் வேலைவாய்ப்பு வளர்ச்சியின் சராசரி விகிதம்', options: ['2%', '5%', '10%', '0.5%'], explanation: '1972–73 முதல் கடந்த நான்கு பத்தாண்டுகளில் வேலைவாய்ப்பு சராசரியாக 2% அளவுக்கு உயர்ந்துள்ளது.' },
  },
  {
    difficulty: 'medium', source: '§2.3, p. 295', answer: 0,
    en: { q: 'Iruvelpattu, a village studied for more than 100 years, is also called Slater village because', options: ['Gilbert Slater of the University of Madras first studied it with his students in 1916', 'it was founded by a British collector named Slater', 'its main occupation is slate quarrying', 'Gilbert Slater was its first panchayat president'], explanation: 'Gilbert Slater, of the University of Madras, was the first scholar to go with his students to study this Villupuram district village in 1916.' },
    ta: { q: 'நூறு ஆண்டுகளுக்கும் மேலாக ஆய்வு செய்யப்பட்ட இருவேல்பட்டு கிராமம் "ஸ்லேட்டர் கிராமம்" என அழைக்கப்படக் காரணம்', options: ['சென்னைப் பல்கலைக்கழகத்தின் கில்பர்ட் ஸ்லேட்டர் 1916இல் தம் மாணவர்களுடன் இக்கிராமத்தை முதன்முதலில் ஆய்வு செய்தார்', 'இதை ஸ்லேட்டர் என்ற ஆங்கிலேய ஆட்சியர் நிறுவினார்', 'இதன் முக்கியத் தொழில் கற்பலகை வெட்டுதல்', 'கில்பர்ட் ஸ்லேட்டர் இதன் முதல் ஊராட்சித் தலைவர்'], explanation: 'சென்னைப் பல்கலைக்கழகத்தின் கில்பர்ட் ஸ்லேட்டர் 1916ஆம் ஆண்டு தம் மாணவர்களுடன் விழுப்புரம் மாவட்டத்திலுள்ள இக்கிராமத்திற்குச் சென்று ஆய்வு செய்தார்.' },
  },
  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise I.14, p. 297', answer: 1,
    en: { q: 'Assertion (A): The unorganised sector of the economy is characterised by household manufacturing activity and small-scale industry. Reason (R): Jobs here are low paid and often not regular.', options: AR_EN, explanation: 'Both statements describe the unorganised sector correctly, but low and irregular pay is a further feature, not the explanation of why it consists of household and small-scale units.' },
    ta: { q: 'கூற்று (A): ஒழுங்கமைக்கப்படாத துறையின் பொருளாதாரப் பண்பு என்பது வீட்டில் உற்பத்தி மற்றும் சிறுதொழில் செய்வதாகும். காரணம் (R): இங்குக் குறைவான ஊதியம் வழங்கப்படுகிறது; வேலைகள் முறையாக வழங்கப்படுவதில்லை.', options: AR_TA, explanation: 'இரண்டும் ஒழுங்கமைக்கப்படாத துறையின் சரியான பண்புகள்; ஆனால் குறைந்த, முறையற்ற ஊதியம் கூற்றுக்கான விளக்கம் அல்ல.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise II.8, p. 297', answer: 0,
    en: { q: 'Match: (A) Agriculture, forestry, fishery and mining; (B) Manufacturing, electricity, gas and water supply; (C) Trade, transport and communication; (D) Unincorporated enterprises and household industries – with 1. Unorganised sector, 2. Service sector, 3. Secondary sector, 4. Primary sector.', options: ['A–4, B–3, C–2, D–1', 'A–1, B–2, C–3, D–4', 'A–2, B–3, C–1, D–4', 'A–3, B–2, C–4, D–1'], explanation: 'Agriculture etc. is primary (4), manufacturing etc. secondary (3), trade and transport the service sector (2) and household industries the unorganised sector (1).' },
    ta: { q: 'பொருத்துக: (அ) வேளாண்மை, காடுகள், மீன்பிடிப்பு மற்றும் சுரங்கம்; (ஆ) உற்பத்தி, மின்உற்பத்தி, எரிவாயு மற்றும் குடிநீர் விநியோகம்; (இ) வாணிபம், போக்குவரத்து மற்றும் தொலைத்தொடர்பு; (ஈ) குழுமப் பதிவற்ற நிறுவனங்கள் மற்றும் வீட்டுத் தொழில்கள் – 1. ஒழுங்கமைக்கப்படாத துறை, 2. சார்புத் துறை, 3. இரண்டாம் துறை, 4. முதன்மைத் துறை.', options: ['அ–4, ஆ–3, இ–2, ஈ–1', 'அ–1, ஆ–2, இ–3, ஈ–4', 'அ–2, ஆ–3, இ–1, ஈ–4', 'அ–3, ஆ–2, இ–4, ஈ–1'], explanation: 'வேளாண்மை முதலியன முதன்மைத் துறை (4), உற்பத்தி முதலியன இரண்டாம் துறை (3), வாணிபம், போக்குவரத்து சார்புத் துறை (2), வீட்டுத் தொழில்கள் ஒழுங்கமைக்கப்படாத துறை (1).' },
  },
  {
    difficulty: 'hard', source: '§2.3, p. 295', answer: 0,
    en: { q: 'In Iruvelpattu, the share of households engaged in non-agricultural labour changed between 1981 and 2008 from', options: ['24% to 41%', '42% to 33%', '34% to 26%', '41% to 24%'], explanation: 'Non-agricultural labourers rose from 24% to 41%, while cultivators fell from 42% to 33% and agricultural labourers from 34% to 26%.' },
    ta: { q: 'இருவேல்பட்டில் 1981 முதல் 2008 வரை விவசாயமல்லாத கூலித் தொழிலில் ஈடுபட்ட குடும்பங்களின் பங்கு மாறிய விதம்', options: ['24%-இலிருந்து 41%', '42%-இலிருந்து 33%', '34%-இலிருந்து 26%', '41%-இலிருந்து 24%'], explanation: 'விவசாயமல்லாத கூலித் தொழிலாளர்கள் 24%-இலிருந்து 41% ஆக உயர்ந்தனர்; பயிரிடுவோர் 42%-இலிருந்து 33%, விவசாயக் கூலிகள் 34%-இலிருந்து 26% ஆகக் குறைந்தனர்.' },
  },
  {
    difficulty: 'hard', source: '§2.3, p. 295', answer: 0,
    en: { q: 'Which of the following is NOT one of the recent trends in employment pattern given in the textbook?', options: ['Firms employing more full-time permanent employees', 'Increasing self-employment', 'More short-term contracts', 'Growth in part-time employment'], explanation: 'The trends are increasing self-employment, firms using fewer full-time employees with more short-term contracts, and growth in part-time work.' },
    ta: { q: 'பாடநூலில் கூறப்பட்டுள்ள சமீபத்திய வேலைவாய்ப்புப் போக்குகளில் இடம்பெறாதது எது?', options: ['நிறுவனங்கள் அதிக நிரந்தர முழுநேர ஊழியர்களைப் பணியமர்த்துதல்', 'அதிகரித்துவரும் சுய-வேலைவாய்ப்பு', 'குறுகிய கால ஒப்பந்தப் பணிகள்', 'பகுதி நேர வேலைவாய்ப்பில் வளர்ச்சி'], explanation: 'அதிகரிக்கும் சுய-வேலைவாய்ப்பு, சில நிரந்தர ஊழியர்கள் மற்றும் குறுகிய கால ஒப்பந்தங்கள், பகுதி நேர வேலைவாய்ப்பு வளர்ச்சி ஆகியவையே போக்குகள்.' },
  },
  {
    difficulty: 'hard', source: '§2.2, p. 295', answer: 0,
    en: { q: 'Which set consists only of public sector enterprises given as examples in the textbook?', options: ['NLC, SAIL, BSNL', 'TVS Motors, Ashok Leyland, TATA Steel', 'NLC, TVS Motors, BSNL', 'SAIL, TATA Steel, Ashok Leyland'], explanation: 'NLC, SAIL and BSNL are public sector examples; TVS Motors, Ashok Leyland and TATA Steel are private sector examples.' },
    ta: { q: 'பாடநூலில் பொதுத் துறைக்கு மட்டுமே எடுத்துக்காட்டுகளாகத் தரப்பட்டுள்ள தொகுப்பு எது?', options: ['NLC, SAIL, BSNL', 'TVS Motors, Ashok Leyland, TATA Steel', 'NLC, TVS Motors, BSNL', 'SAIL, TATA Steel, Ashok Leyland'], explanation: 'NLC, SAIL, BSNL ஆகியவை பொதுத் துறை; TVS Motors, Ashok Leyland, TATA Steel ஆகியவை தனியார் துறை எடுத்துக்காட்டுகள்.' },
  },
  {
    difficulty: 'hard', source: '§2.3, p. 295', answer: 0,
    en: { q: 'Why does agriculture remain the largest employer in Tamil Nadu despite a sharp decline in its share of GDP?', options: ['The non-agriculture sectors are yet to generate enough employment to shift the labour force.', 'Agricultural wages are higher than wages in all other sectors.', 'The government does not allow farmers to change occupation.', 'Agriculture is part of the organised sector with job security.'], explanation: 'The textbook explains that non-agriculture sectors have not yet generated enough jobs to effect a shift of the labour force.' },
    ta: { q: 'மொத்த உள்நாட்டு உற்பத்தியில் கடும் வீழ்ச்சி ஏற்பட்டபோதும் தமிழ்நாட்டில் விவசாயமே அதிக மக்களுக்கு வேலையளிப்பதற்குக் காரணம்', options: ['விவசாயமல்லாத துறைகள் உழைப்பாளர்கள் தொழில் மாறுவதற்குப் போதுமான வேலைவாய்ப்பை இன்னும் உருவாக்கவில்லை.', 'மற்ற அனைத்துத் துறைகளையும் விட விவசாயக் கூலி அதிகம்.', 'விவசாயிகள் தொழில் மாறுவதை அரசு அனுமதிப்பதில்லை.', 'விவசாயம் வேலைப் பாதுகாப்புள்ள ஒழுங்கமைக்கப்பட்ட துறையாகும்.'], explanation: 'விவசாயமல்லாத துறைகள் உழைப்பாளர்கள் தொழில்களை மாற்றிக் கொள்வதற்குப் போதுமான வேலைவாய்ப்பை உருவாக்கவில்லை என்பதே காரணம்.' },
  },
];
