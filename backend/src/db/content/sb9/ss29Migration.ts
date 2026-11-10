// Tamil Nadu State Board, 9th Social Science, Unit 29 – Economics: Migration (இடம்பெயர்தல்).
// Book exercise questions (Economics Unit 5) plus our own questions so that every section is covered at three levels.
// source = section or exercise and printed page of the English-medium book; Tamil wording follows the Tamil-medium book.

import { BankQuestion } from './types';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.1, p. 316', answer: 0,
    en: { q: 'According to the 2011 census, the total population of India was', options: ['121 crore', '221 crore', '102 crore', '100 crore'], explanation: 'The Census of 2011 enumerated a total population of 121 crores, of which 45 crore were migrants by place of last residence.' },
    ta: { q: '2011ஆம் ஆண்டு மக்கள்தொகைக் கணக்கெடுப்பின்படி இந்தியாவின் மக்கள்தொகை', options: ['121 கோடி', '221 கோடி', '102 கோடி', '100 கோடி'], explanation: '2011 கணக்கெடுப்பின்படி இந்தியாவின் மொத்த மக்கள்தொகை 121 கோடி; இதில் 45 கோடி பேர் இடம்பெயர்ந்தவர்கள்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.2, p. 316', answer: 0,
    en: { q: '_____ has recorded the maximum number of emigrants in Tamil Nadu.', options: ['Chennai', 'Ramanathapuram', 'Coimbatore', 'Vellore'], explanation: 'Chennai district recorded the maximum number of emigrants, followed by Coimbatore, Ramanathapuram and Tiruchirapalli.' },
    ta: { q: 'வெளிக்குடியேற்றப் பதிவில் முன்னிலை வகிக்கும் மாவட்டம்', options: ['சென்னை', 'இராமநாதபுரம்', 'கோயம்புத்தூர்', 'வேலூர்'], explanation: 'சென்னை மாவட்டம் வெளிக்குடியேற்றத்தில் முதலிடம்; அடுத்து கோயம்புத்தூர், இராமநாதபுரம், திருச்சிராப்பள்ளி.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.4, p. 316', answer: 0,
    en: { q: 'The poorer sections of the population migrate', options: ['as a survival strategy', 'to improve their living standards', 'as a service', 'to get experience'], explanation: 'Poorer sections migrate as a survival strategy in response to distress in rural areas; better-off sections migrate to improve their living standards.' },
    ta: { q: 'ஏழை மக்கள் இடப்பெயர்வை மேற்கொள்வது', options: ['வாழ்வாதாரத்திற்காக', 'வாழ்க்கைத் தரத்தை மேம்படுத்திக் கொள்ள', 'சேவைக்காக', 'அனுபவத்தைப் பெறுவதற்காக'], explanation: 'ஏழை மக்கள் வாழ்வாதாரத்திற்காக இடம்பெயர்கின்றனர்; வசதி படைத்தோர் வாழ்க்கைத் தரத்தை மேம்படுத்த இடம்பெயர்கின்றனர்.' },
  },
  {
    difficulty: 'easy', source: 'Introduction, p. 313', answer: 0,
    en: { q: 'Change in the population of any settlement occurs due to', options: ['birth, death and migration', 'birth and death only', 'migration only', 'marriage and employment only'], explanation: 'In any settlement, population changes due to birth, death and migration; migration is the hardest to define and measure.' },
    ta: { q: 'எந்தக் குடியிருப்புப் பகுதியிலும் மக்கள்தொகையில் மாற்றம் ஏற்படக் காரணம்', options: ['பிறப்பு, இறப்பு, இடம்பெயர்தல்', 'பிறப்பு, இறப்பு மட்டும்', 'இடம்பெயர்தல் மட்டும்', 'திருமணம், வேலைவாய்ப்பு மட்டும்'], explanation: 'பிறப்பு, இறப்பு, இடம்பெயர்தல் ஆகியவற்றால் மக்கள்தொகையில் மாற்றம் ஏற்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: '§5.1, p. 314', answer: 0,
    en: { q: 'What is the major reason for the migration of females in India and Tamil Nadu?', options: ['Marriage', 'Work / employment', 'Education', 'Business'], explanation: 'In 2011, 70% in India and 51% in Tamil Nadu reported marriage as the reason for female migration.' },
    ta: { q: 'இந்தியாவிலும் தமிழ்நாட்டிலும் பெண்கள் அதிக எண்ணிக்கையில் இடம்பெயர்வதற்கான முக்கியக் காரணம்', options: ['திருமணம்', 'வேலை / வேலைவாய்ப்பு', 'கல்வி', 'வணிகம்'], explanation: '2011இல் இந்தியாவில் 70%, தமிழ்நாட்டில் 51% பெண்கள் திருமணத்தை இடம்பெயர்வுக்கான காரணமாகக் கூறினர்.' },
  },
  {
    difficulty: 'easy', source: '§5.1, p. 314', answer: 0,
    en: { q: 'Movement related to work and employment is the driving force for migration among', options: ['men', 'women', 'children', 'senior citizens'], explanation: 'Work is the major reason for male migration: 28% of male migrants in India and 26% in Tamil Nadu reported it in 2011.' },
    ta: { q: 'வேலை, வேலைவாய்ப்பு தொடர்பான நகர்வு யாரிடையே இடம்பெயர்வுக்கான முக்கிய உந்துசக்தி?', options: ['ஆண்கள்', 'பெண்கள்', 'குழந்தைகள்', 'முதியோர்'], explanation: 'ஆண்களின் இடம்பெயர்வுக்கு வேலையே முக்கியக் காரணம்; 2011இல் இந்தியாவில் 28%, தமிழ்நாட்டில் 26% ஆண்கள் இதைக் கூறினர்.' },
  },
  {
    difficulty: 'easy', source: '§5.2, p. 315', answer: 0,
    en: { q: 'According to the textbook, the largest migration corridor in the world in 2010 was', options: ['Mexico – U.S.A.', 'India – UAE', 'Tamil Nadu – Singapore', 'China – Australia'], explanation: 'The largest migration corridor in the world in 2010 was Mexico – U.S.A.' },
    ta: { q: 'பாடநூலின்படி 2010இல் உலகின் மிகப்பெரிய இடம்பெயர்வுப் பாதை', options: ['மெக்சிகோ – அமெரிக்கா', 'இந்தியா – ஐக்கிய அரபு அமீரகம்', 'தமிழ்நாடு – சிங்கப்பூர்', 'சீனா – ஆஸ்திரேலியா'], explanation: '2010இல் உலகின் மிகப்பெரிய இடம்பெயர்வுப் பாதை மெக்சிகோ – அமெரிக்கா.' },
  },
  {
    difficulty: 'easy', source: '§5.2, p. 315', answer: 0,
    en: { q: 'Which bird has the longest migration distance of any bird in the world?', options: ['Arctic tern', 'Siberian crane', 'Flamingo', 'Bar-headed goose'], explanation: 'The textbook notes that the Arctic tern has the longest migration distance of any bird.' },
    ta: { q: 'உலகிலேயே மிக நீண்ட தூரம் இடம்பெயரும் பறவை', options: ['வடமுனை ஆலா (Arctic tern)', 'சைபீரியக் கொக்கு', 'பூநாரை', 'வரித்தலை வாத்து'], explanation: 'வடமுனை ஆலா (Arctic tern) பறவைகளிலேயே மிக நீண்ட தூரம் இடம்பெயர்கிறது எனப் பாடநூல் குறிப்பிடுகிறது.' },
  },
  // ------------------------------------------------------------------ Medium
  {
    difficulty: 'medium', source: 'Book exercise I.3, p. 316', answer: 0,
    en: { q: 'During 2015, _____ of the migrants from Tamil Nadu were illiterates.', options: ['7%', '75%', '23%', '9%'], explanation: 'The 2015 study found about 7% of migrants were illiterate, 30% had completed Class X and 10% Class XII.' },
    ta: { q: '2015ஆம் ஆண்டில் தமிழ்நாட்டிலிருந்து இடம்பெயர்ந்தவர்களில் கல்வியறிவற்றோரின் சதவீதம்', options: ['7%', '75%', '23%', '9%'], explanation: '2015 ஆய்வின்படி இடம்பெயர்ந்தோரில் ஏறக்குறைய 7% பேர் கல்வியறிவற்றோர்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III, p. 317', answer: 0,
    en: { q: 'Match correctly: Migration policy, Female migrants, Chennai, Better-off migrants, Salem, Male migrants.', options: ['to reduce the volume of migration; marriage; maximum number of emigration; to improve the living standards; low incidence of emigration; work', 'marriage; to reduce the volume of migration; maximum number of emigration; to improve the living standards; low incidence of emigration; work', 'to reduce the volume of migration; marriage; low incidence of emigration; to improve the living standards; maximum number of emigration; work', 'to reduce the volume of migration; work; maximum number of emigration; to improve the living standards; low incidence of emigration; marriage'], explanation: 'Migration policy aims to reduce migration volume, women migrate mainly for marriage, Chennai has the most emigrants, the better-off migrate to improve living standards, Salem has few emigrants and men migrate for work.' },
    ta: { q: 'சரியாகப் பொருத்துக: இடம்பெயர்வுக் கொள்கை, பெண் இடம்பெயர்வாளர், சென்னை, வசதி வாய்ப்புடைய இடம்பெயர்வாளர், சேலம், ஆண் இடம்பெயர்வாளர்.', options: ['இடம்பெயர்தலின் அளவைக் குறைப்பது; திருமணம்; வெளிக்குடியேற்றம் அதிகம்; வாழ்க்கைத் தரத்தை மேம்படுத்திக்கொள்ள; வெளிக்குடியேற்றம் குறைவு; வேலை', 'திருமணம்; இடம்பெயர்தலின் அளவைக் குறைப்பது; வெளிக்குடியேற்றம் அதிகம்; வாழ்க்கைத் தரத்தை மேம்படுத்திக்கொள்ள; வெளிக்குடியேற்றம் குறைவு; வேலை', 'இடம்பெயர்தலின் அளவைக் குறைப்பது; திருமணம்; வெளிக்குடியேற்றம் குறைவு; வாழ்க்கைத் தரத்தை மேம்படுத்திக்கொள்ள; வெளிக்குடியேற்றம் அதிகம்; வேலை', 'இடம்பெயர்தலின் அளவைக் குறைப்பது; வேலை; வெளிக்குடியேற்றம் அதிகம்; வாழ்க்கைத் தரத்தை மேம்படுத்திக்கொள்ள; வெளிக்குடியேற்றம் குறைவு; திருமணம்'], explanation: 'இடம்பெயர்வுக் கொள்கை – அளவைக் குறைத்தல்; பெண்கள் – திருமணம்; சென்னை – வெளிக்குடியேற்றம் அதிகம்; வசதி படைத்தோர் – வாழ்க்கைத் தர மேம்பாடு; சேலம் – வெளிக்குடியேற்றம் குறைவு; ஆண்கள் – வேலை.' },
  },
  {
    difficulty: 'medium', source: 'Introduction, p. 313', answer: 0,
    en: { q: 'In the Census of India, a person whose place of birth is different from the place of enumeration is known as a', options: ['life-time migrant', 'migrant by place of last residence', 'emigrant', 'circulatory migrant'], explanation: 'Migration is enumerated by place of birth (life-time migrant) and by place of last residence.' },
    ta: { q: 'இந்திய மக்கள்தொகைக் கணக்கெடுப்பில், கணக்கெடுப்பின்போது இருக்கும் இடமும் பிறந்த இடமும் வேறுபட்டிருந்தால் அது', options: ['வாழ்நாள் இடப்பெயர்வு', 'வாழிட அடிப்படையிலான இடப்பெயர்வு', 'வெளிக்குடியேற்றம்', 'சுழற்சி இடப்பெயர்வு'], explanation: 'பிறப்பிட அடிப்படையில் (வாழ்நாள் இடப்பெயர்வு), வாழிட அடிப்படையில் என இரண்டு அடிப்படைகளில் இடப்பெயர்வு கணக்கிடப்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: '§5.1, p. 313', answer: 0,
    en: { q: 'In 2011, the percentage of migrants (by place of last residence) was 37% in India. What was it in Tamil Nadu?', options: ['43%', '37%', '27%', '65%'], explanation: 'In Tamil Nadu, 3.13 crore out of 7.2 crore people (43%) were migrants in 2011 – higher than the national 37%.' },
    ta: { q: '2011இல் இந்தியாவில் இடம்பெயர்ந்தோர் விழுக்காடு 37%. தமிழ்நாட்டில் இது எவ்வளவு?', options: ['43%', '37%', '27%', '65%'], explanation: '2011இல் தமிழ்நாட்டின் 7.2 கோடி மக்களில் 3.13 கோடி பேர் (43%) இடம்பெயர்ந்தவர்கள்; இது தேசிய அளவான 37%-ஐ விட அதிகம்.' },
  },
  {
    difficulty: 'medium', source: '§5.1, p. 313', answer: 0,
    en: { q: 'Where is the extent of migration much higher in India and Tamil Nadu?', options: ['In rural areas', 'In urban areas', 'Equal in rural and urban areas', 'Only in metropolitan cities'], explanation: 'In 2011, 37% of rural India and 27% of urban India were migrants; in Tamil Nadu 41% rural and 35% urban.' },
    ta: { q: 'இந்தியாவிலும் தமிழ்நாட்டிலும் இடப்பெயர்வின் பரவல் எங்கே மிக அதிகமாகக் காணப்படுகிறது?', options: ['கிராமப்புறங்களில்', 'நகர்ப்புறங்களில்', 'கிராமப்புறம், நகர்ப்புறம் இரண்டிலும் சமமாக', 'பெருநகரங்களில் மட்டும்'], explanation: '2011இல் இந்தியாவில் கிராமப்புறத்தில் 37%, நகர்ப்புறத்தில் 27%; தமிழ்நாட்டில் கிராமப்புறத்தில் 41%, நகர்ப்புறத்தில் 35% இடம்பெயர்ந்தோர்.' },
  },
  {
    difficulty: 'medium', source: '§5.1, p. 314', answer: 0,
    en: { q: 'According to the 2015 study, which country was chosen by the largest share (nearly 20%) of migrants from Tamil Nadu going abroad?', options: ['Singapore', 'United Arab Emirates', 'Saudi Arabia', 'United States of America'], explanation: 'Nearly 20% went to Singapore, 18% to the UAE, 16% to Saudi Arabia and 13% to the USA.' },
    ta: { q: '2015 ஆய்வின்படி தமிழ்நாட்டிலிருந்து வெளிநாடு செல்வோரில் அதிகம் பேர் (ஏறக்குறைய 20%) தேர்ந்தெடுத்த நாடு', options: ['சிங்கப்பூர்', 'ஐக்கிய அரபு அமீரகம்', 'சவுதி அரேபியா', 'அமெரிக்க ஐக்கிய நாடுகள்'], explanation: 'ஏறக்குறைய 20% சிங்கப்பூர், 18% ஐக்கிய அரபு அமீரகம், 16% சவுதி அரேபியா, 13% அமெரிக்கா சென்றனர்.' },
  },
  {
    difficulty: 'medium', source: '§5.3, p. 316', answer: 0,
    en: { q: 'Which of the following is an aim of migration policies in developing countries like India, according to the textbook?', options: ['To redirect migrant streams away from big metropolitan cities', 'To encourage all rural people to move to metropolitan cities', 'To stop all international migration', 'To increase spatial inequalities'], explanation: 'Migration policies aim to reduce the volume of migration through rural development and to redirect migrant streams away from big metros through dispersed urbanisation.' },
    ta: { q: 'பாடநூலின்படி இந்தியா போன்ற வளரும் நாடுகளின் இடம்பெயர்வுக் கொள்கைகளின் நோக்கம் எது?', options: ['பெருநகரங்கள் நோக்கிக் குவியும் இடம்பெயர்தலைத் திசைமாற்றுதல்', 'கிராம மக்கள் அனைவரையும் பெருநகரங்களுக்குச் செல்ல ஊக்குவித்தல்', 'அனைத்து வெளிநாட்டு இடம்பெயர்வையும் நிறுத்துதல்', 'நிலப்பரப்பு சார்ந்த ஏற்றத்தாழ்வுகளை அதிகரித்தல்'], explanation: 'கிராம வளர்ச்சித் திட்டங்கள் மூலம் இடம்பெயர்தலின் அளவைக் குறைத்தல், பெருநகரங்கள் நோக்கிய இடம்பெயர்தலைத் திசைமாற்றுதல் ஆகியவையே நோக்கங்கள்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI, p. 317', answer: 0,
    en: { q: 'Which of the following statements is correct?', options: ['In Tamil Nadu, two out of every five persons were reported to be migrants in 2011.', 'In recent times workers from Tamil Nadu are mainly moving to Africa.', 'In Tamil Nadu, the extent of migration is much higher in urban areas than in rural areas.', 'Any migrant stream consists of homogeneous sub-streams.'], explanation: 'Two of every five persons in Tamil Nadu were migrants in 2011; workers move to the Gulf, USA and Australia; migration is higher in rural areas; migrant streams are heterogeneous.' },
    ta: { q: 'பின்வரும் கூற்றுகளில் சரியானது எது?', options: ['2011இல் தமிழ்நாட்டில் ஐந்தில் இருவர் இடம்பெயர்ந்தவர்களாகப் பதிவாகியுள்ளனர்.', 'சமீப காலங்களில் தமிழ்நாட்டுத் தொழிலாளர்கள் பெரும்பாலும் ஆப்பிரிக்காவுக்கு இடம்பெயர்கின்றனர்.', 'தமிழ்நாட்டில் கிராமப்புறங்களை விட நகர்ப்புறங்களில் இடப்பெயர்வு மிக அதிகம்.', 'ஒவ்வோர் இடம்பெயர்வு நகர்வும் ஒரே மாதிரியான உள்நகர்வுகளைக் கொண்டது.'], explanation: '2011இல் தமிழ்நாட்டில் ஐந்தில் இருவர் இடம்பெயர்ந்தோர்; தொழிலாளர்கள் வளைகுடா நாடுகள், அமெரிக்கா, ஆஸ்திரேலியாவுக்குச் செல்கின்றனர்; கிராமப்புறங்களில் இடப்பெயர்வு அதிகம்; இடம்பெயர்வு நகர்வுகள் பலதரப்பட்டவை.' },
  },
  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: '§5.1, p. 314', answer: 0,
    en: { q: 'According to the 2011 data in the textbook, what share of females and of males in India were migrants?', options: ['53% of females and 23% of males', '23% of females and 53% of males', '52% of females and 35% of males', '70% of females and 28% of males'], explanation: 'In India 53% of females and 23% of males were migrants; in Tamil Nadu the figures were 52% and 35%.' },
    ta: { q: 'பாடநூலில் உள்ள 2011 புள்ளிவிவரப்படி இந்தியாவில் இடம்பெயர்ந்த பெண்கள், ஆண்களின் விழுக்காடு', options: ['பெண்கள் 53%, ஆண்கள் 23%', 'பெண்கள் 23%, ஆண்கள் 53%', 'பெண்கள் 52%, ஆண்கள் 35%', 'பெண்கள் 70%, ஆண்கள் 28%'], explanation: 'இந்தியாவில் 53% பெண்கள், 23% ஆண்கள் இடம்பெயர்ந்தோர்; தமிழ்நாட்டில் 52% பெண்கள், 35% ஆண்கள்.' },
  },
  {
    difficulty: 'hard', source: '§5.1, p. 314', answer: 0,
    en: { q: 'According to the 2015 study, of the total migrants from Tamil Nadu, what share moved abroad, and what share of international migrants were women?', options: ['65% moved abroad; 15% of international migrants were women', '35% moved abroad; 15% of international migrants were women', '65% moved abroad; 85% of international migrants were women', '85% moved abroad; 35% of international migrants were women'], explanation: '65% of migrants moved abroad and 35% within the country; among international migrants, 15% were women and 85% men.' },
    ta: { q: '2015 ஆய்வின்படி தமிழ்நாட்டின் மொத்த இடப்பெயர்வாளர்களில் வெளிநாடு சென்றோர் விழுக்காடு எவ்வளவு? வெளிநாட்டு இடப்பெயர்வாளர்களில் பெண்கள் எத்தனை விழுக்காடு?', options: ['65% வெளிநாடு; வெளிநாட்டு இடப்பெயர்வாளர்களில் 15% பெண்கள்', '35% வெளிநாடு; வெளிநாட்டு இடப்பெயர்வாளர்களில் 15% பெண்கள்', '65% வெளிநாடு; வெளிநாட்டு இடப்பெயர்வாளர்களில் 85% பெண்கள்', '85% வெளிநாடு; வெளிநாட்டு இடப்பெயர்வாளர்களில் 35% பெண்கள்'], explanation: '65% பேர் வெளிநாடுகளுக்கும் 35% பேர் நாட்டுக்குள்ளும் இடம்பெயர்ந்தனர்; வெளிநாட்டு இடப்பெயர்வாளர்களில் 15% பெண்கள், 85% ஆண்கள்.' },
  },
  {
    difficulty: 'hard', source: '§5.1, p. 314', answer: 0,
    en: { q: 'Which group of districts recorded a LOW number of emigrants according to the 2015 study?', options: ['Cuddalore, Karur, Salem, Dharmapuri', 'Chennai, Coimbatore, Ramanathapuram, Tiruchirapalli', 'Chennai, Salem, Coimbatore, Vellore', 'Ramanathapuram, Tiruchirapalli, Karur, Nilgiris'], explanation: 'Chennai, Coimbatore, Ramanathapuram and Tiruchirapalli had the most emigrants; Cuddalore, Karur, Thiruvannamalai, Vellore, Namakkal, Salem, Dindigul, Krishnagiri, Nilgiris and Dharmapuri had few.' },
    ta: { q: '2015 ஆய்வின்படி குறைந்த அளவு வெளிக்குடியேற்றம் பதிவான மாவட்டங்களின் தொகுப்பு எது?', options: ['கடலூர், கரூர், சேலம், தருமபுரி', 'சென்னை, கோயம்புத்தூர், இராமநாதபுரம், திருச்சிராப்பள்ளி', 'சென்னை, சேலம், கோயம்புத்தூர், வேலூர்', 'இராமநாதபுரம், திருச்சிராப்பள்ளி, கரூர், நீலகிரி'], explanation: 'சென்னை, கோயம்புத்தூர், இராமநாதபுரம், திருச்சிராப்பள்ளி அதிக வெளிக்குடியேற்றம் கொண்டவை; கடலூர், கரூர், திருவண்ணாமலை, வேலூர், நாமக்கல், சேலம், திண்டுக்கல், கிருஷ்ணகிரி, நீலகிரி, தருமபுரி குறைவு.' },
  },
  {
    difficulty: 'hard', source: '§5.2, p. 315', answer: 0,
    en: { q: 'According to the textbook, the extent and nature of migration in any society are basically determined by', options: ['the nature of the development process experienced by that society', 'the number of rivers in that society', 'the language spoken by that society', 'the climate of the destination only'], explanation: 'The type and scale of development achieved by the agricultural and industrial sectors determine the migratory patterns.' },
    ta: { q: 'பாடநூலின்படி ஒரு சமூகத்தில் இடம்பெயர்தலின் அளவையும் தன்மையையும் அடிப்படையாகத் தீர்மானிப்பது', options: ['அச்சமூகம் அனுபவிக்கும் வளர்ச்சிச் செயல்முறையின் தன்மை', 'அச்சமூகத்தின் ஆறுகளின் எண்ணிக்கை', 'அச்சமூகம் பேசும் மொழி', 'சேருமிடத்தின் தட்பவெப்பம் மட்டும்'], explanation: 'வேளாண், தொழில் துறைகள் அடைந்த வளர்ச்சியின் வகையும் அளவுமே இடம்பெயர்வு முறைகளைத் தீர்மானிக்கின்றன.' },
  },
  {
    difficulty: 'hard', source: '§5.2, p. 315', answer: 0,
    en: { q: 'Which of the following is NOT one of the factors on which the extent and nature of migrant streams depend, according to the textbook?', options: ['The number of births at the destination', 'Pressures and aspirations experienced by people at the origin', 'Opportunities at the destination and information about them', 'The cost of migration'], explanation: 'Migrant streams depend on pressures and aspirations at the origin, constraints on mobility at the origin, opportunities and information at the destination, and the cost of migration.' },
    ta: { q: 'பாடநூலின்படி இடம்பெயர்தலின் அளவும் தன்மையும் சார்ந்திருக்கும் காரணிகளில் இடம்பெறாதது எது?', options: ['சேருமிடத்தில் நிகழும் பிறப்புகளின் எண்ணிக்கை', 'இடப்பெயர்தல் தொடங்கும் இடத்தில் மக்கள் அனுபவிக்கும் அழுத்தம் மற்றும் விருப்பங்கள்', 'சேருமிடத்தில் கிடைக்கக்கூடிய வாய்ப்புகள் மற்றும் அவை குறித்த தகவல்கள்', 'குடியேற்றச் செலவு'], explanation: 'தொடங்குமிடத்தின் அழுத்தமும் விருப்பங்களும், தொடங்குமிடத்தின் கட்டுப்பாடுகள், சேருமிடத்தின் வாய்ப்புகளும் தகவல்களும், குடியேற்றச் செலவு ஆகியவையே காரணிகள்.' },
  },
  {
    difficulty: 'hard', source: '§5.1, p. 314', answer: 0,
    en: { q: 'According to the 2015 study, which was the largest group of migrants from Tamil Nadu by educational qualification?', options: ['Those who had completed Class X (30%)', 'Graduates (11%)', 'Those with vocational training (15%)', 'Illiterates (7%)'], explanation: 'About 7% were illiterate, 30% had completed Class X, 10% Class XII, 15% vocational training, 11% graduates, 12% professionally qualified and 11% postgraduates.' },
    ta: { q: '2015 ஆய்வின்படி கல்வித்தகுதி அடிப்படையில் தமிழ்நாட்டிலிருந்து இடம்பெயர்ந்தோரில் மிகப் பெரிய பிரிவு எது?', options: ['பத்தாம் வகுப்பு முடித்தோர் (30%)', 'பட்டதாரிகள் (11%)', 'தொழிற்பயிற்சி பெற்றோர் (15%)', 'கல்வியறிவற்றோர் (7%)'], explanation: 'ஏறக்குறைய 7% கல்வியறிவற்றோர், 30% பத்தாம் வகுப்பு, 10% பன்னிரண்டாம் வகுப்பு, 15% தொழிற்பயிற்சி, 11% பட்டதாரிகள், 12% தொழில்முறைத் தகுதி, 11% முதுநிலைப் பட்டதாரிகள்.' },
  },
];
