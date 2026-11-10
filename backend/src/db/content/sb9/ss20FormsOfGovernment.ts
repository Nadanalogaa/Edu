// Tamil Nadu State Board, 9th Social Science, Unit 20 – Civics: Forms of Government and Democracy (அரசாங்க அமைப்புகள் மற்றும் மக்களாட்சி).
// Book exercise questions (Civics Unit 1) plus our own questions so that every section is covered at three levels.
// source = section or exercise and printed page of the English-medium book; Tamil wording follows the Tamil-medium book.

import { BankQuestion, AR_EN, AR_TA } from './types';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.1, p. 243', answer: 0,
    en: { q: 'A system of government in which one person reigns supreme, usually a king or queen, is called _____.', options: ['monarchy', 'autocracy', 'democracy', 'republic'], explanation: 'In a monarchy one person, usually a king or queen, reigns supreme. Bhutan, Oman and Qatar are examples.' },
    ta: { q: 'ஒரு நபரோ, அரசரோ அல்லது அரசியோ ஆட்சி செய்யும் முறை', options: ['முடியாட்சி', 'தனிநபராட்சி', 'மக்களாட்சி', 'குடியரசு'], explanation: 'ஒரு நபரால் (வழக்கமாக அரசர்) அமைக்கப்படும் அரசாங்கமே முடியாட்சி. எ.கா. பூடான், ஓமன், கத்தார்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.2, p. 243', answer: 0,
    en: { q: 'A system of government by one person with absolute power is', options: ['Autocracy', 'Aristocracy', 'Theocracy', 'Democracy'], explanation: 'Autocracy is government by one person with absolute power, e.g. North Korea and Saudi Arabia.' },
    ta: { q: 'முழு அதிகாரத்துடன் கொண்ட ஒரு நபரின் அரசாங்க முறை', options: ['தனிநபராட்சி', 'உயர்குடியாட்சி', 'மதகுருமார்களின் ஆட்சி', 'மக்களாட்சி'], explanation: 'முழு அதிகாரம் கொண்ட ஒரு நபரால் அமைக்கப்படும் அரசாங்கமே தனிநபர் ஆட்சி. எ.கா. வட கொரியா, சவுதி அரேபியா.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.5, p. 243', answer: 0,
    en: { q: 'Abraham Lincoln was the President of the _____.', options: ['USA', 'UK', 'USSR', 'India'], explanation: 'Abraham Lincoln, a President of the USA, defined democracy as government of the people, by the people and for the people.' },
    ta: { q: 'ஆபிரகாம் லிங்கன் _____ நாட்டின் ஜனாதிபதியாக இருந்தார்.', options: ['அமெரிக்க ஐக்கிய நாடுகள்', 'இங்கிலாந்து', 'சோவியத் ரஷ்யா', 'இந்தியா'], explanation: 'அமெரிக்க ஐக்கிய நாடுகளின் மேனாள் குடியரசுத் தலைவர் ஆபிரகாம் லிங்கன் மக்களாட்சிக்கு வரையறை கூறினார்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.6, p. 243', answer: 0,
    en: { q: 'The Kudavolai system was followed by the', options: ['Cholas', 'Cheras', 'Pandyas', 'Kalabhras'], explanation: 'The Kudavolai system was a notable feature of village administration in the later Chola period.' },
    ta: { q: 'குடவோலை முறையைப் பின்பற்றியவர்கள்', options: ['சோழர்கள்', 'சேரர்கள்', 'பாண்டியர்கள்', 'களப்பிரர்கள்'], explanation: 'பிற்காலச் சோழர்களின் காலத்தில் கிராம நிருவாகத்தில் குடவோலை முறை இருந்தது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.8, p. 243', answer: 0,
    en: { q: 'From which language was the term "Democracy" derived?', options: ['Greek', 'Latin', 'Persian', 'Arabic'], explanation: 'It comes from two Greek words: demos (people) and cratia (power).' },
    ta: { q: 'எந்த மொழியிலிருந்து "டெமாகிரஸி" என்ற வார்த்தை பெறப்பட்டது?', options: ['கிரேக்கம்', 'லத்தீன்', 'பாரசீகம்', 'அரபு'], explanation: 'Demos (மக்கள்), Cratia (அதிகாரம்) என்ற இரு கிரேக்கச் சொற்களிலிருந்து இச்சொல் பெறப்பட்டது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.11, p. 243', answer: 0,
    en: { q: 'The largest democratic country in the world is', options: ['India', 'Canada', 'USA', 'China'], explanation: 'The textbook states that India is the largest democratic country in the world.' },
    ta: { q: 'உலகிலேயே மிகப் பெரிய மக்களாட்சியைக் கொண்ட நாடு', options: ['இந்தியா', 'கனடா', 'அமெரிக்க ஐக்கிய நாடுகள்', 'சீனா'], explanation: 'உலகிலேயே மிகப்பெரிய ஜனநாயக நாடு இந்தியா.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.14, p. 244', answer: 0,
    en: { q: 'The meaning of Franchise is', options: ['Right to vote', 'Right to elect', 'Right to vote for the poor', 'Right to vote for the rich'], explanation: 'Franchise means the right to vote.' },
    ta: { q: 'வாக்குரிமையின் பொருள்', options: ['வாக்களிக்கும் உரிமை', 'தேர்ந்தெடுப்பதற்கான உரிமை', 'ஏழைகளுக்கு வாக்களிக்கும் உரிமை', 'பணக்காரர்களுக்கு வாக்களிக்கும் உரிமை'], explanation: 'வாக்குரிமை (Franchise) என்பது வாக்களிக்கும் உரிமை.' },
  },
  {
    difficulty: 'easy', source: '§1.1.5, p. 238', answer: 0,
    en: { q: 'Which country is given in the textbook as an example of theocracy?', options: ['Vatican', 'Bhutan', 'Australia', 'Spain'], explanation: 'In a theocracy, religious doctrines form the basis of government headed by a priest; the Vatican is the example.' },
    ta: { q: 'மதகுருமார்களின் ஆட்சிக்குப் பாடநூலில் தரப்பட்டுள்ள எடுத்துக்காட்டு நாடு எது?', options: ['வாட்டிகன்', 'பூடான்', 'ஆஸ்திரேலியா', 'ஸ்பெயின்'], explanation: 'மதகுருமார்களால் கடவுளின் பெயரால் அமைக்கப்படும் அரசாங்கம் மதகுருமார்களின் ஆட்சி; எ.கா. வாட்டிகன்.' },
  },
  // ------------------------------------------------------------------ Medium
  {
    difficulty: 'medium', source: 'Book exercise I.3, p. 243', answer: 0,
    en: { q: 'The former Soviet Union is an example of _____.', options: ['oligarchy', 'aristocracy', 'theocracy', 'republic'], explanation: 'Oligarchy is control of a country by a small group of people; examples are the former Soviet Union, China, Venezuela and North Korea.' },
    ta: { q: 'முன்னாள் சோவியத் யூனியன் _____ க்கு எடுத்துக்காட்டு.', options: ['சிறுகுழு ஆட்சி', 'உயர்குடியாட்சி', 'மதகுருமார்களின் ஆட்சி', 'குடியரசு'], explanation: 'மக்களின் சிறிய குழு ஒன்று நாட்டைக் கட்டுப்படுத்துவது சிறுகுழு ஆட்சி; எ.கா. முன்னாள் சோவியத் யூனியன், சீனா, வெனிசூலா, வடகொரியா.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.4, p. 243', answer: 0,
    en: { q: 'Select the odd one out.', options: ['Vatican', 'India', 'USA', 'France'], explanation: 'India, USA and France are given as examples of democracy; the Vatican is a theocracy.' },
    ta: { q: 'பொருந்தாத ஒன்றைத் தேர்ந்தெடுக்கவும்.', options: ['வாட்டிகன்', 'இந்தியா', 'அமெரிக்க ஐக்கிய நாடுகள்', 'பிரான்ஸ்'], explanation: 'இந்தியா, அமெரிக்கா, பிரான்ஸ் ஆகியவை மக்களாட்சி நாடுகள்; வாட்டிகன் மதகுருமார்களின் ஆட்சி.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.7, p. 243', answer: 0,
    en: { q: 'In olden times, direct democracy existed', options: ['in the city-states of ancient Greece', 'in the republics of ancient India', 'among the USA', 'among the UK'], explanation: 'Democracy began about 2,500 years ago in some city-states of ancient Greece, where people took part directly.' },
    ta: { q: 'பழங்காலத்தில் நேரடி மக்களாட்சி முறை பின்பற்றப்பட்ட பகுதி', options: ['பண்டைய ஏதன்ஸ் நகர அரசுகள்', 'பண்டைய இந்தியாவின் குடியரசுகள்', 'அமெரிக்கா', 'பிரிட்டன்'], explanation: 'ஏதென்ஸ் உட்பட பண்டைய கிரேக்க நாட்டின் சில நகர அரசுகளில் 2500 ஆண்டுகளுக்கு முன்பே மக்களாட்சி முறை தோன்றியது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.9, p. 243', answer: 0,
    en: { q: 'In a democracy the final authority rests with', options: ['the people', 'the Parliament', 'the Council of Ministers', 'the President'], explanation: 'In a democracy the supreme power is vested in the people, who elect their representatives.' },
    ta: { q: 'மக்களாட்சியில் இறுதி அதிகாரம் பெற்றவர்கள்', options: ['மக்கள்', 'நாடாளுமன்றம்', 'அமைச்சர் அவை', 'குடியரசுத் தலைவர்'], explanation: 'மக்களாட்சியில் உயரிய அதிகாரம் மக்களிடமே உள்ளது; அவர்கள் தங்கள் பிரதிநிதிகளைத் தேர்ந்தெடுக்கின்றனர்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.10, p. 243', answer: 0,
    en: { q: 'Which one of these countries has a Presidential form of government?', options: ['USA', 'India', 'Britain', 'Canada'], explanation: 'The USA (and France) have the presidential form; India and England have the parliamentary form.' },
    ta: { q: 'கீழ்க்காணும் எந்த நாடு அதிபர் அரசாங்க முறையினைக் கொண்டுள்ளது?', options: ['அமெரிக்க ஐக்கிய நாடுகள்', 'இந்தியா', 'பிரிட்டன்', 'கனடா'], explanation: 'அமெரிக்க ஐக்கிய நாடுகள், பிரான்ஸ் ஆகியவை அதிபர் அரசாங்க முறை கொண்டவை; இந்தியா, இங்கிலாந்து நாடாளுமன்ற முறை கொண்டவை.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.16, p. 244', answer: 0,
    en: { q: 'The Prime Minister of India is appointed by the', options: ['President', 'Lok Sabha', 'Rajya Sabha', 'Speaker'], explanation: 'The President of India appoints the Prime Minister, who enjoys a majority in the Lok Sabha.' },
    ta: { q: 'பிரதமரை நியமிப்பவர் / நியமிப்பது', options: ['குடியரசுத் தலைவர்', 'மக்களவை', 'மாநிலங்களவை', 'சபாநாயகர்'], explanation: 'மக்களவையில் பெரும்பான்மை ஆதரவு பெற்ற பிரதம அமைச்சரைக் குடியரசுத் தலைவர் நியமிக்கிறார்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.17, p. 244', answer: 0,
    en: { q: 'The President of India can nominate', options: ['12 members to the Rajya Sabha', '12 members to the Lok Sabha', '2 members to the Rajya Sabha', '14 members to the Rajya Sabha'], explanation: 'The President nominates 12 members to the Rajya Sabha for their contributions to art, literature, science and social services.' },
    ta: { q: 'குடியரசுத் தலைவரால் நியமிக்கப்படுபவர்கள்', options: ['ராஜ்ய சபைக்கு 12 உறுப்பினர்கள்', 'லோக்சபைக்கு 12 உறுப்பினர்கள்', 'ராஜ்ய சபைக்கு 2 உறுப்பினர்கள்', 'ராஜ்ய சபைக்கு 14 உறுப்பினர்கள்'], explanation: 'கலை, இலக்கியம், அறிவியல், சமூக சேவை ஆகிய துறைகளில் சிறந்த 12 பேரை மாநிலங்களவைக்குக் குடியரசுத் தலைவர் நியமிக்கிறார்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.18, p. 244', answer: 0,
    en: { q: 'The first general elections after independence in India were held in', options: ['1951-52', '1948-49', '1957-58', '1947-48'], explanation: 'Elections to the first Lok Sabha were held between 25 October 1951 and 21 February 1952.' },
    ta: { q: 'இந்தியாவில் சுதந்திரத்திற்குப் பிறகு முதல் பொதுத் தேர்தல் நடைபெற்ற ஆண்டு', options: ['1951-52', '1948-49', '1957-58', '1947-48'], explanation: 'மக்களவையின் முதல் பொதுத் தேர்தல் 1951 அக்டோபர் 25 முதல் 1952 பிப்ரவரி 21 வரை நடைபெற்றது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III, p. 244', answer: 0,
    en: { q: 'Match correctly: Autocracy, Right to vote, Chanakya, Theocracy with 18, Arthashastra, Vatican, North Korea.', options: ['Autocracy – North Korea; Right to vote – 18; Chanakya – Arthashastra; Theocracy – Vatican', 'Autocracy – Vatican; Right to vote – 18; Chanakya – Arthashastra; Theocracy – North Korea', 'Autocracy – North Korea; Right to vote – Arthashastra; Chanakya – 18; Theocracy – Vatican', 'Autocracy – 18; Right to vote – North Korea; Chanakya – Vatican; Theocracy – Arthashastra'], explanation: 'North Korea is an autocracy, the voting age is 18, Chanakya wrote the Arthashastra and the Vatican is a theocracy.' },
    ta: { q: 'சரியாகப் பொருத்துக: தனிநபராட்சி, வாக்குரிமை, சாணக்கியர், மதகுருமார்களின் ஆட்சி – 18, அர்த்தசாஸ்திரம், வாட்டிகன், வடகொரியா.', options: ['தனிநபராட்சி – வடகொரியா; வாக்குரிமை – 18; சாணக்கியர் – அர்த்தசாஸ்திரம்; மதகுருமார்களின் ஆட்சி – வாட்டிகன்', 'தனிநபராட்சி – வாட்டிகன்; வாக்குரிமை – 18; சாணக்கியர் – அர்த்தசாஸ்திரம்; மதகுருமார்களின் ஆட்சி – வடகொரியா', 'தனிநபராட்சி – வடகொரியா; வாக்குரிமை – அர்த்தசாஸ்திரம்; சாணக்கியர் – 18; மதகுருமார்களின் ஆட்சி – வாட்டிகன்', 'தனிநபராட்சி – 18; வாக்குரிமை – வடகொரியா; சாணக்கியர் – வாட்டிகன்; மதகுருமார்களின் ஆட்சி – அர்த்தசாஸ்திரம்'], explanation: 'வடகொரியா தனிநபராட்சி, வாக்களிக்கும் வயது 18, சாணக்கியர் அர்த்தசாஸ்திரம் எழுதினார், வாட்டிகன் மதகுருமார்களின் ஆட்சி.' },
  },
  {
    difficulty: 'medium', source: '§1.1.7, p. 239', answer: 0,
    en: { q: 'The term "republic" comes from the Latin "res publica", which means', options: ['public matter', 'power of the people', 'rule of the few', 'rule by God'], explanation: 'The term republic was first coined in 500 BCE in Rome from res publica, meaning public matter.' },
    ta: { q: '"குடியரசு" என்ற சொல் பெறப்பட்ட "res publica" என்ற லத்தீன் சொல்லின் பொருள்', options: ['பொது விவகாரம்', 'மக்களின் அதிகாரம்', 'சிலரின் ஆட்சி', 'கடவுளின் ஆட்சி'], explanation: 'கி.மு. 500இல் ரோம் நாட்டில் "குடியரசு" எனும் சொல் வடிவமைக்கப்பட்டது; res publica என்பதன் பொருள் "பொது விவகாரம்".' },
  },
  {
    difficulty: 'medium', source: '§1.2.10, p. 242', answer: 0,
    en: { q: 'In the first general elections of independent India, the Indian National Congress won', options: ['364 of the 489 seats', '489 of the 543 seats', '364 of the 543 seats', '264 of the 489 seats'], explanation: 'The Congress won 364 of the 489 seats and Jawaharlal Nehru became the first democratically elected Prime Minister.' },
    ta: { q: 'சுதந்திர இந்தியாவின் முதல் பொதுத் தேர்தலில் இந்திய தேசிய காங்கிரஸ் வென்ற இடங்கள்', options: ['489 இடங்களில் 364', '543 இடங்களில் 489', '543 இடங்களில் 364', '489 இடங்களில் 264'], explanation: 'மொத்தம் இருந்த 489 இடங்களில் 364 இடங்களில் வென்று காங்கிரஸ் ஆட்சி அமைத்தது; ஜவஹர்லால் நேரு முதல் பிரதமர் ஆனார்.' },
  },
  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise I.12, p. 243', answer: 0,
    en: { q: 'Assertion (A): Direct democracy is practised in Switzerland. Reason (R): People directly participate in decision making.', options: AR_EN, explanation: 'Switzerland is the textbook example of direct democracy, which is precisely the system where people themselves take decisions on public affairs.' },
    ta: { q: 'கூற்று (A): நேரடி மக்களாட்சி சுவிட்சர்லாந்தில் நடைமுறையில் உள்ளது. காரணம் (R): மக்கள் நேரடியாக முடிவெடுப்பதில் பங்கு பெறுகிறார்கள்.', options: AR_TA, explanation: 'பொது விவகாரங்களில் மக்களே நேரடியாக முடிவெடுப்பதே நேரடி மக்களாட்சி; சுவிட்சர்லாந்து அதற்கு எடுத்துக்காட்டு. எனவே காரணம் கூற்றை விளக்குகிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise I.13, p. 244', answer: 1,
    en: { q: 'Assertion (A): India has a parliamentary form of democracy. Reason (R): The Indian Parliament comprises two houses.', options: AR_EN, explanation: 'Both statements are true, but having two houses does not make a government parliamentary; it is parliamentary because the executive comes from and answers to the legislature.' },
    ta: { q: 'கூற்று (A): இந்தியாவில் நாடாளுமன்ற அரசாங்க முறை பின்பற்றப்படுகிறது. காரணம் (R): இந்திய நாடாளுமன்றம் இரு சபைகளை உள்ளடக்கியது.', options: AR_TA, explanation: 'இரண்டும் சரி; ஆனால் இரு அவைகள் இருப்பதால் மட்டும் ஒரு அரசு நாடாளுமன்ற முறையாகிவிடாது. எனவே காரணம் கூற்றை விளக்கவில்லை.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise I.15, p. 244', answer: 0,
    en: { q: 'The grant of universal franchise creates', options: ['Political equality', 'Social equality', 'Economic equality', 'Legal equality'], explanation: 'Giving every adult citizen an equal vote, without discrimination of caste, religion, gender or education, creates political equality.' },
    ta: { q: 'அனைவருக்கும் வாக்குரிமை வழங்குவது', options: ['அரசியல் சமத்துவம்', 'சமூகச் சமத்துவம்', 'பொருளாதார சமத்துவம்', 'சட்ட சமத்துவம்'], explanation: 'சாதி, சமயம், பாலினம், கல்வித்தகுதி என்ற பாரபட்சமின்றி அனைவருக்கும் சமமான வாக்குரிமை அளிப்பது அரசியல் சமத்துவத்தை உருவாக்குகிறது.' },
  },
  {
    difficulty: 'hard', source: '§1.2.7, p. 241', answer: 0,
    en: { q: 'Which of the following is listed in the textbook as a DEMERIT of democracy?', options: ['Delay in the decision-making process', 'Popular sovereignty', 'Local self-government', 'Sense of responsibility among common people'], explanation: 'Delay in decision-making is a demerit; popular sovereignty, local self-government and a sense of responsibility are listed as merits.' },
    ta: { q: 'பாடநூலில் மக்களாட்சியின் குறையாகக் குறிப்பிடப்பட்டுள்ளது எது?', options: ['முடிவெடுப்பதில் காலதாமதம்', 'மக்கள் இறையாண்மை', 'தல சுய ஆட்சி', 'மக்களிடையே பொறுப்புணர்ச்சி'], explanation: 'முடிவெடுப்பதில் காலதாமதம் ஒரு குறை; மக்கள் இறையாண்மை, தல சுய ஆட்சி, பொறுப்புணர்ச்சி ஆகியவை நிறைகள்.' },
  },
  {
    difficulty: 'hard', source: '§1.2.10, p. 242', answer: 0,
    en: { q: 'Which statement about early elections in India is correct according to the textbook?', options: ['The first elections in the country\'s history were held in British India in 1920, and women got the right to vote in the Madras Presidency election of 1921.', 'The first elections in the country\'s history were held in 1951, and women got the right to vote in 1952.', 'The first elections in British India were held in 1921, and women got the right to vote in 1920.', 'The first elections in British India were held in 1935, and women got the right to vote in 1947.'], explanation: 'Elections to the Imperial Legislative Council and Provincial Councils in 1920 were the country\'s first; women voted in the 1921 Madras Presidency election.' },
    ta: { q: 'இந்தியாவின் தொடக்கக்காலத் தேர்தல்கள் பற்றிப் பாடநூலின்படி சரியான கூற்று எது?', options: ['இந்திய வரலாற்றின் முதல் பொதுத் தேர்தல் 1920இல் பிரிட்டிஷ் இந்தியாவில் நடைபெற்றது; 1921இல் நடந்த சென்னை மாகாணப் பொதுத் தேர்தலில் பெண்களுக்கு வாக்குரிமை வழங்கப்பட்டது.', 'இந்திய வரலாற்றின் முதல் பொதுத் தேர்தல் 1951இல் நடைபெற்றது; 1952இல் பெண்களுக்கு வாக்குரிமை வழங்கப்பட்டது.', 'பிரிட்டிஷ் இந்தியாவின் முதல் பொதுத் தேர்தல் 1921இல் நடைபெற்றது; 1920இல் பெண்களுக்கு வாக்குரிமை வழங்கப்பட்டது.', 'பிரிட்டிஷ் இந்தியாவின் முதல் பொதுத் தேர்தல் 1935இல் நடைபெற்றது; 1947இல் பெண்களுக்கு வாக்குரிமை வழங்கப்பட்டது.'], explanation: 'இம்பீரியல் கவுன்சில், மாகாண சட்டசபைகளுக்கு 1920இல் நடந்த தேர்தலே முதல் பொதுத் தேர்தல்; 1921 சென்னை மாகாணத் தேர்தலில் பெண்கள் வாக்களித்தனர்.' },
  },
  {
    difficulty: 'hard', source: '§1.2.9, p. 242', answer: 0,
    en: { q: 'Members of the Rajya Sabha (other than those nominated) are elected by', options: ['an electoral college of the elected members of the legislative assemblies of the states and Union Territories', 'the people directly in general elections once in five years', 'the members of the Lok Sabha', 'the Election Commission of India'], explanation: 'Lok Sabha members are directly elected, but Rajya Sabha members are elected by an electoral college of elected MLAs of the states and Union Territories.' },
    ta: { q: 'மாநிலங்களவை உறுப்பினர்கள் (நியமன உறுப்பினர்கள் தவிர) தேர்ந்தெடுக்கப்படுவது', options: ['மாநிலங்கள் மற்றும் யூனியன் பிரதேசங்களின் சட்டமன்றங்களில் உள்ள தேர்ந்தெடுக்கப்பட்ட உறுப்பினர்களால்', 'ஐந்தாண்டுகளுக்கு ஒருமுறை பொதுத் தேர்தலில் மக்களால் நேரடியாக', 'மக்களவை உறுப்பினர்களால்', 'இந்தியத் தேர்தல் ஆணையத்தால்'], explanation: 'மக்களவை உறுப்பினர்கள் மக்களால் நேரடியாகத் தேர்ந்தெடுக்கப்படுகின்றனர்; மாநிலங்களவை உறுப்பினர்கள் மாநில, யூனியன் பிரதேச சட்டமன்றங்களின் தேர்ந்தெடுக்கப்பட்ட உறுப்பினர்களால் தேர்ந்தெடுக்கப்படுகின்றனர்.' },
  },
  {
    difficulty: 'hard', source: '§1.2.2, p. 239', answer: 0,
    en: { q: '"True democracy cannot be worked by twenty men sitting at the centre. It has to be worked from below by the people of every village." Who said this?', options: ['Mahatma Gandhi', 'Abraham Lincoln', 'Jawaharlal Nehru', 'Chanakya'], explanation: 'The textbook quotes Mahatma Gandhi\'s definition of true democracy, worked from below by the people of every village.' },
    ta: { q: '"ஒரு உண்மையான மக்களாட்சியை 20 பேர் குழுவாக அமர்ந்து கொண்டு செயல்படுத்த முடியாது. இது கீழ்நிலையிலுள்ள ஒவ்வொரு கிராம மக்களாலும் செயல்படுத்தப்படுவதாகும்" எனக் கூறியவர்', options: ['மகாத்மா காந்தி', 'ஆபிரகாம் லிங்கன்', 'ஜவஹர்லால் நேரு', 'சாணக்கியர்'], explanation: 'தேசப்பிதா மகாத்மா காந்தி உண்மையான மக்களாட்சி பற்றி இவ்வாறு குறிப்பிடுகிறார்.' },
  },
];
