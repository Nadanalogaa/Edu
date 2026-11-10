// Tamil Nadu State Board, 9th Social Science, Unit 21 – Civics: Election, Political Parties and Pressure Groups (தேர்தல், அரசியல் கட்சிகள் மற்றும் அழுத்தக் குழுக்கள்).
// Book exercise questions (Civics Unit 2) plus our own questions so that every section is covered at three levels.
// source = section or exercise and printed page of the English-medium book; Tamil wording follows the Tamil-medium book.

import { BankQuestion, AR_EN, AR_TA } from './types';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.1, p. 251', answer: 0,
    en: { q: 'India has adapted the electoral system followed in the', options: ['United Kingdom', 'USA', 'Canada', 'Russia'], explanation: 'The electoral system in India has been adapted from the system followed in the United Kingdom.' },
    ta: { q: 'கீழ்க்காணும் எந்த நாட்டின் தேர்தல் முறையினை இந்தியா ஏற்றுக் கொண்டுள்ளது?', options: ['இங்கிலாந்து', 'அமெரிக்க ஐக்கிய நாடுகள்', 'கனடா', 'ரஷ்யா'], explanation: 'இந்தியத் தேர்தல் முறை இங்கிலாந்தில் பின்பற்றப்படும் முறையிலிருந்து ஏற்றுக்கொள்ளப்பட்டது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.3, p. 251', answer: 0,
    en: { q: 'Which Article of the Constitution provides for an Election Commission?', options: ['Article 324', 'Article 280', 'Article 315', 'Article 325'], explanation: 'Article 324 provides for an independent Election Commission to ensure free and fair elections.' },
    ta: { q: 'இந்தியத் தேர்தல் ஆணையம் அமைக்க வழிவகை செய்யும் அரசியலமைப்புப் பிரிவு', options: ['பிரிவு 324', 'பிரிவு 280', 'பிரிவு 315', 'பிரிவு 325'], explanation: 'சுதந்திரமான, நியாயமான தேர்தல்களை உறுதி செய்யச் சுதந்திரமான தேர்தல் ஆணையத்திற்குப் பிரிவு 324 வழிவகை செய்கிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.7, p. 252', answer: 0,
    en: { q: 'NOTA was introduced in the year', options: ['2014', '2012', '2013', '2015'], explanation: 'NOTA (None Of The Above) was first introduced in the General Elections held in 2014.' },
    ta: { q: 'நோட்டா (NOTA) முறை அறிமுகப்படுத்தப்பட்ட ஆண்டு', options: ['2014', '2012', '2013', '2015'], explanation: '2014இல் நடைபெற்ற பொதுத் தேர்தலில் முதல் முறையாக NOTA அறிமுகப்படுத்தப்பட்டது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.8, p. 252', answer: 0,
    en: { q: 'The term "pressure groups" originated in _____.', options: ['USA', 'UK', 'USSR', 'India'], explanation: 'The term pressure group originated in the USA.' },
    ta: { q: 'அழுத்தக் குழுக்கள் எனும் சொல்லினை உருவாக்கிய நாடு', options: ['அமெரிக்க ஐக்கிய நாடுகள்', 'இங்கிலாந்து', 'முன்னாள் சோவியத் யூனியன்', 'இந்தியா'], explanation: '"அழுத்தக் குழு" என்ற சொல் அமெரிக்காவில் தோன்றியது.' },
  },
  {
    difficulty: 'easy', source: '§2.1.1, p. 246', answer: 0,
    en: { q: 'National Voters Day is celebrated in India on', options: ['25 January', '26 January', '26 November', '15 August'], explanation: 'We celebrate National Voters Day on 25th January in India.' },
    ta: { q: 'இந்தியாவில் தேசிய வாக்காளர் தினம் கொண்டாடப்படும் நாள்', options: ['ஜனவரி 25', 'ஜனவரி 26', 'நவம்பர் 26', 'ஆகஸ்ட் 15'], explanation: 'இந்தியாவில் ஜனவரி 25ஆம் நாளினைத் தேசிய வாக்காளர் தினமாகக் கொண்டாடுகிறோம்.' },
  },
  {
    difficulty: 'easy', source: '§2.2.1, p. 248', answer: 0,
    en: { q: 'The three components of a political party are', options: ['a leader, active members and the followers', 'a leader, ministers and voters', 'a president, a secretary and a treasurer', 'candidates, agents and voters'], explanation: 'A political party has three components: a leader, active members and the followers.' },
    ta: { q: 'அரசியல் கட்சியின் மூன்று அங்கங்கள்', options: ['ஒரு தலைவர், செயற்குழு உறுப்பினர்கள், தொண்டர்கள்', 'ஒரு தலைவர், அமைச்சர்கள், வாக்காளர்கள்', 'தலைவர், செயலாளர், பொருளாளர்', 'வேட்பாளர்கள், முகவர்கள், வாக்காளர்கள்'], explanation: 'ஒரு தலைவர், செயற்குழு உறுப்பினர்கள், தொண்டர்கள் எனும் மூன்று அங்கங்களை அரசியல் கட்சிகள் பெற்றுள்ளன.' },
  },
  {
    difficulty: 'easy', source: '§2.2.2, p. 248', answer: 0,
    en: { q: 'India follows a _____ party system.', options: ['multi-', 'single-', 'two-', 'no-'], explanation: 'India, Sri Lanka, France and Italy have a multi-party system, with more than two political parties.' },
    ta: { q: 'இந்தியாவில் _____ கட்சி முறை பின்பற்றப்படுகிறது.', options: ['பல', 'ஒரு', 'இரு', 'கட்சியற்ற'], explanation: 'இரண்டிற்கும் மேற்பட்ட கட்சிகள் பங்கு பெறும் பல கட்சி முறை இந்தியா, இலங்கை, பிரான்ஸ், இத்தாலி ஆகியவற்றில் உள்ளது.' },
  },
  {
    difficulty: 'easy', source: '§2.2.3, p. 249', answer: 0,
    en: { q: 'In 2017, how many recognised national parties were there in India?', options: ['Seven', 'Five', 'Six', 'Nine'], explanation: 'In 2017, there were seven recognised national parties.' },
    ta: { q: '2017இல் இந்தியாவில் அங்கீகரிக்கப்பட்ட தேசியக் கட்சிகளின் எண்ணிக்கை', options: ['ஏழு', 'ஐந்து', 'ஆறு', 'ஒன்பது'], explanation: '2017இல் அங்கீகரிக்கப்பட்ட தேசியக் கட்சிகளின் எண்ணிக்கை ஏழு.' },
  },
  // ------------------------------------------------------------------ Medium
  {
    difficulty: 'medium', source: 'Book exercise I.2, p. 251', answer: 0,
    en: { q: 'The Election Commission of India is a / an', options: ['Independent body', 'Statutory body', 'Private body', 'Public corporation'], explanation: 'Article 324 provides for an independent Election Commission.' },
    ta: { q: 'இந்தியத் தேர்தல் ஆணையம் ஒரு', options: ['சுதந்திரமான அமைப்பு', 'சட்டபூர்வ அமைப்பு', 'தனியார் அமைப்பு', 'பொது நிறுவனம்'], explanation: 'அரசியலமைப்புப் பிரிவு 324 சுதந்திரமான தேர்தல் ஆணையத்திற்கு வழிவகை செய்கிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.4, p. 251', answer: 0,
    en: { q: 'Which part of the Constitution of India deals with the Election Commission?', options: ['Part XV', 'Part III', 'Part XX', 'Part XXII'], explanation: 'Articles 324 to 329 in Part XV of the Constitution deal with the electoral system.' },
    ta: { q: 'இந்திய அரசியலமைப்பின் எந்தப் பகுதி தேர்தல் ஆணையத்தைப் பற்றிக் கூறுகிறது?', options: ['பகுதி XV', 'பகுதி III', 'பகுதி XX', 'பகுதி XXII'], explanation: 'அரசியலமைப்பின் பகுதி XVஇல் உள்ள பிரிவுகள் 324 முதல் 329 வரை தேர்தல் முறை பற்றிக் கூறுகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.5, p. 251', answer: 0,
    en: { q: 'Who accords recognition to various political parties as national or regional parties?', options: ['The Election Commission', 'The President', 'The Parliament', 'The President in consultation with the Election Commission'], explanation: 'Every party registers with the Election Commission, which recognises parties as national or state parties.' },
    ta: { q: 'பல்வேறு அரசியல் கட்சிகளைத் தேசியக் கட்சியாகவோ அல்லது மாநிலக் கட்சியாகவோ அங்கீகரிப்பது', options: ['தேர்தல் ஆணையம்', 'குடியரசுத் தலைவர்', 'நாடாளுமன்றம்', 'தேர்தல் ஆணையத்தின் ஆலோசனையின் பேரில் குடியரசுத் தலைவர்'], explanation: 'ஒவ்வொரு கட்சியும் தேர்தல் ஆணையத்தில் பதிவு செய்ய வேண்டும்; தேர்தல் ஆணையமே தேசிய, மாநிலக் கட்சிகளாக அங்கீகரிக்கிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III, p. 252', answer: 0,
    en: { q: 'Match correctly: National party, Single-party system, Two-party system, Pressure groups with Trade unions, USA, China, Seven.', options: ['National party – Seven; Single-party system – China; Two-party system – USA; Pressure groups – Trade unions', 'National party – Seven; Single-party system – USA; Two-party system – China; Pressure groups – Trade unions', 'National party – Trade unions; Single-party system – China; Two-party system – USA; Pressure groups – Seven', 'National party – China; Single-party system – Seven; Two-party system – Trade unions; Pressure groups – USA'], explanation: 'There were seven national parties in 2017; China has a single-party system, the USA a two-party system; trade unions are pressure groups.' },
    ta: { q: 'சரியாகப் பொருத்துக: தேசியக் கட்சி, ஒரு கட்சி ஆட்சி முறை, இரு கட்சி ஆட்சி முறை, அழுத்தக் குழுக்கள் – வணிகக் குழுக்கள், அமெரிக்க ஐக்கிய நாடுகள், சீனா, ஏழு.', options: ['தேசியக் கட்சி – ஏழு; ஒரு கட்சி ஆட்சி முறை – சீனா; இரு கட்சி ஆட்சி முறை – அமெரிக்க ஐக்கிய நாடுகள்; அழுத்தக் குழுக்கள் – வணிகக் குழுக்கள்', 'தேசியக் கட்சி – ஏழு; ஒரு கட்சி ஆட்சி முறை – அமெரிக்க ஐக்கிய நாடுகள்; இரு கட்சி ஆட்சி முறை – சீனா; அழுத்தக் குழுக்கள் – வணிகக் குழுக்கள்', 'தேசியக் கட்சி – வணிகக் குழுக்கள்; ஒரு கட்சி ஆட்சி முறை – சீனா; இரு கட்சி ஆட்சி முறை – அமெரிக்க ஐக்கிய நாடுகள்; அழுத்தக் குழுக்கள் – ஏழு', 'தேசியக் கட்சி – சீனா; ஒரு கட்சி ஆட்சி முறை – ஏழு; இரு கட்சி ஆட்சி முறை – வணிகக் குழுக்கள்; அழுத்தக் குழுக்கள் – அமெரிக்க ஐக்கிய நாடுகள்'], explanation: '2017இல் தேசியக் கட்சிகள் ஏழு; சீனாவில் ஒரு கட்சி முறை, அமெரிக்காவில் இரு கட்சி முறை; வணிகக் குழுக்கள் அழுத்தக் குழுக்கள் ஆகும்.' },
  },
  {
    difficulty: 'medium', source: '§2.1, p. 246', answer: 0,
    en: { q: 'At present, the Election Commission of India consists of', options: ['a Chief Election Commissioner and two Election Commissioners', 'a Chief Election Commissioner only', 'a Chief Election Commissioner and four Election Commissioners', 'two Election Commissioners and the President'], explanation: 'At present the commission consists of a Chief Election Commissioner and two Election Commissioners, i.e. three members.' },
    ta: { q: 'தற்போது இந்தியத் தேர்தல் ஆணையத்தில் இடம் பெற்றிருப்பவர்கள்', options: ['ஒரு தலைமைத் தேர்தல் ஆணையர் மற்றும் இரண்டு தேர்தல் ஆணையர்கள்', 'ஒரு தலைமைத் தேர்தல் ஆணையர் மட்டும்', 'ஒரு தலைமைத் தேர்தல் ஆணையர் மற்றும் நான்கு தேர்தல் ஆணையர்கள்', 'இரண்டு தேர்தல் ஆணையர்கள் மற்றும் குடியரசுத் தலைவர்'], explanation: 'தற்போது தேர்தல் ஆணையம் ஒரு தலைமைத் தேர்தல் ஆணையர், இரண்டு தேர்தல் ஆணையர்கள் என மூன்று உறுப்பினர்களைக் கொண்டது.' },
  },
  {
    difficulty: 'medium', source: '§2.1.2, p. 247', answer: 0,
    en: { q: 'The NOTA procedure is described in', options: ['Rule 49-O of the Conduct of Elections Rules, 1961', 'Article 324 of the Constitution', 'Rule 49-O of the Representation of the People Act, 1951', 'Part XV of the Constitution'], explanation: 'Rule 49-O in the Conduct of Elections Rules, 1961 describes the NOTA procedure.' },
    ta: { q: 'NOTA முறை பற்றி விவரிப்பது', options: ['இந்தியத் தேர்தல் நடத்தை விதிகள் (1961)-இன் விதி எண் 49-O', 'அரசியலமைப்புப் பிரிவு 324', 'மக்கள் பிரதிநிதித்துவச் சட்டம் 1951-இன் விதி 49-O', 'அரசியலமைப்பின் பகுதி XV'], explanation: 'இந்தியத் தேர்தல் நடத்தை விதிகள் (1961)-இன் விதி எண் 49-O இம்முறை பற்றி விவரிக்கிறது.' },
  },
  {
    difficulty: 'medium', source: '§2.1.3, p. 247', answer: 0,
    en: { q: 'Which of the following is an example of a direct election?', options: ['Elections to the state Legislative Assemblies', 'Election of the President of India', 'Election of the Prime Minister by Lok Sabha members', 'Election of Rajya Sabha members'], explanation: 'In Lok Sabha, Assembly and local body elections people vote directly; the President is elected indirectly.' },
    ta: { q: 'பின்வருவனவற்றுள் நேரடித் தேர்தலுக்கு எடுத்துக்காட்டு எது?', options: ['மாநிலச் சட்டமன்றத் தேர்தல்கள்', 'இந்தியக் குடியரசுத் தலைவர் தேர்தல்', 'மக்களவை உறுப்பினர்களால் பிரதமர் தேர்ந்தெடுக்கப்படுதல்', 'மாநிலங்களவை உறுப்பினர்கள் தேர்தல்'], explanation: 'மக்களவை, சட்டமன்றம், உள்ளாட்சித் தேர்தல்களில் மக்கள் நேரடியாக வாக்களிக்கின்றனர்; குடியரசுத் தலைவர் மறைமுகமாகத் தேர்ந்தெடுக்கப்படுகிறார்.' },
  },
  {
    difficulty: 'medium', source: '§2.1.3, p. 247', answer: 0,
    en: { q: 'Elections to local governing bodies such as village panchayats and municipalities are conducted by', options: ['the State Election Commission', 'the Election Commission of India', 'the District Collector', 'the Parliament'], explanation: 'Elections to village panchayats, town panchayats, municipalities and corporations are conducted by the state election commission.' },
    ta: { q: 'கிராம ஊராட்சி, நகராட்சி போன்ற உள்ளாட்சி அமைப்புகளுக்கான தேர்தலை நடத்துவது', options: ['மாநிலத் தேர்தல் ஆணையம்', 'இந்தியத் தேர்தல் ஆணையம்', 'மாவட்ட ஆட்சியர்', 'நாடாளுமன்றம்'], explanation: 'கிராம ஊராட்சி, பேரூராட்சி, நகராட்சி, மாநகராட்சி தேர்தல்களை மாநிலத் தேர்தல் ஆணையம் நடத்துகிறது.' },
  },
  {
    difficulty: 'medium', source: '§2.2.2, p. 248', answer: 0,
    en: { q: 'Which group of countries is given as examples of the single-party system?', options: ['China, Cuba, former USSR', 'USA, UK', 'India, Sri Lanka, France', 'France, Italy, India'], explanation: 'In a single-party system one ruling party exists and no opposition is permitted, as in China, Cuba and the former USSR.' },
    ta: { q: 'ஒரு கட்சி முறைக்கு எடுத்துக்காட்டாகத் தரப்பட்டுள்ள நாடுகள்', options: ['சீனா, கியூபா, முன்னாள் சோவியத் யூனியன்', 'அமெரிக்க ஐக்கிய நாடுகள், இங்கிலாந்து', 'இந்தியா, இலங்கை, பிரான்ஸ்', 'பிரான்ஸ், இத்தாலி, இந்தியா'], explanation: 'ஒரே ஒரு ஆளும் கட்சி மட்டும் இருந்து எதிர்க்கட்சிகள் அனுமதிக்கப்படாதது ஒரு கட்சி முறை; எ.கா. சீனா, கியூபா, முன்னாள் சோவியத் யூனியன்.' },
  },
  {
    difficulty: 'medium', source: '§2.3, p. 249', answer: 0,
    en: { q: 'Pressure groups differ from political parties because they', options: ['neither contest elections nor try to capture political power', 'contest only local body elections', 'are formed only by students', 'are registered with the Election Commission'], explanation: 'Pressure groups (interest groups) try to influence public policy but neither contest elections nor try to capture power.' },
    ta: { q: 'அழுத்தக் குழுக்கள் அரசியல் கட்சிகளிலிருந்து வேறுபடுவதற்குக் காரணம்', options: ['அவை தேர்தலில் போட்டியிடுவதில்லை; அரசியல் அதிகாரத்தைக் கைப்பற்ற முயல்வதுமில்லை', 'அவை உள்ளாட்சித் தேர்தலில் மட்டும் போட்டியிடுகின்றன', 'அவை மாணவர்களால் மட்டுமே அமைக்கப்படுகின்றன', 'அவை தேர்தல் ஆணையத்தில் பதிவு செய்யப்படுகின்றன'], explanation: 'அழுத்தக் குழுக்கள் அரசின் கொள்கைகளில் தாக்கம் ஏற்படுத்த முயல்கின்றன; ஆனால் தேர்தலில் போட்டியிடுவதோ அதிகாரத்தைக் கைப்பற்ற முயல்வதோ இல்லை.' },
  },
  {
    difficulty: 'medium', source: '§2.3.1, p. 250', answer: 0,
    en: { q: 'The Narmada Bachao Andolan is a', options: ['pressure group', 'national party', 'state party', 'trade union'], explanation: 'The textbook lists the Narmada Bachao Andolan among examples of pressure groups (environmental protection).' },
    ta: { q: 'நர்மதா பச்சாவோ அந்தோலன் என்பது ஒரு', options: ['அழுத்தக் குழு', 'தேசியக் கட்சி', 'மாநிலக் கட்சி', 'தொழிற்சங்கம்'], explanation: 'பாடநூல் நர்மதா பச்சாவோ அந்தோலனை அழுத்தக் குழுக்களுக்கு எடுத்துக்காட்டாகக் கூறுகிறது.' },
  },
  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise I.6, p. 251', answer: 0,
    en: { q: 'Assertion (A): The Indian Constitution provides for an independent Election Commission. Reason (R): To ensure free and fair elections in the country.', options: AR_EN, explanation: 'Article 324 provides for an independent Election Commission precisely in order to ensure free and fair elections.' },
    ta: { q: 'கூற்று (A): இந்திய அரசியலமைப்பு சுதந்திரமாகச் செயல்படும் தேர்தல் ஆணையத்திற்கு வழிவகை செய்கிறது. காரணம் (R): இது நாட்டின் சுதந்திரமான, நியாயமான தேர்தலை நடத்த உறுதி செய்கிறது.', options: AR_TA, explanation: 'சுதந்திரமான, நியாயமான தேர்தலை உறுதி செய்யவே பிரிவு 324 சுதந்திரமான தேர்தல் ஆணையத்தை வழங்குகிறது; காரணம் கூற்றை விளக்குகிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise I.9, p. 252', answer: 1,
    en: { q: 'Assertion (A): A large number of pressure groups exist in India. Reason (R): Pressure groups are not developed in India to the same extent as in the USA.', options: AR_EN, explanation: 'Both are true statements from the textbook, but their being less developed does not explain why there are many of them.' },
    ta: { q: 'கூற்று (A): இந்தியாவில் அதிக எண்ணிக்கையிலான அழுத்தக் குழுக்கள் காணப்படுகின்றன. காரணம் (R): அமெரிக்க ஐக்கிய நாட்டில் இருப்பதைப் போல இந்தியாவில் அழுத்தக் குழுக்கள் வளர்ச்சியடையவில்லை.', options: AR_TA, explanation: 'இரண்டும் சரி; ஆனால் அவை குறைவாக வளர்ந்துள்ளன என்பது அவை அதிக எண்ணிக்கையில் இருப்பதை விளக்கவில்லை.' },
  },
  {
    difficulty: 'hard', source: '§2.2.3, p. 249', answer: 0,
    en: { q: 'Which of the following is one of the criteria for recognition as a national party?', options: ['Recognition as a state party in at least four states', 'At least 2% votes in at least two states', 'Recognition as a state party in at least two states', 'At least 6% members in the Rajya Sabha'], explanation: 'A party needs any one of: 6% votes in at least four states and members in the Lok Sabha; 2% of Lok Sabha members from at least three states; or state-party recognition in at least four states.' },
    ta: { q: 'தேசியக் கட்சியாக அங்கீகாரம் பெறுவதற்கான நிபந்தனைகளில் ஒன்று எது?', options: ['குறைந்தது நான்கு மாநிலங்களில் மாநிலக் கட்சியாக அங்கீகாரம் பெற்றிருத்தல்', 'குறைந்தது இரண்டு மாநிலங்களில் 2% வாக்குகள் பெற்றிருத்தல்', 'குறைந்தது இரண்டு மாநிலங்களில் மாநிலக் கட்சியாக அங்கீகாரம் பெற்றிருத்தல்', 'மாநிலங்களவையில் 6% உறுப்பினர்களைப் பெற்றிருத்தல்'], explanation: 'நான்கு மாநிலங்களில் 6% வாக்குகள், மூன்று மாநிலங்களிலிருந்து மக்களவையில் 2% உறுப்பினர்கள், அல்லது நான்கு மாநிலங்களில் மாநிலக் கட்சி அங்கீகாரம் – இவற்றில் ஏதேனும் ஒன்று தேவை.' },
  },
  {
    difficulty: 'hard', source: '§2.2.1, p. 248', answer: 0,
    en: { q: 'Who among the following are NOT included in the electoral college that elects the President of India?', options: ['Members nominated to either House of Parliament', 'Elected members of the Lok Sabha', 'Elected members of the Rajya Sabha', 'Elected members of the Legislative Assemblies of the states'], explanation: 'The electoral college has the elected members of both Houses and of the state and UT assemblies; nominated members are not eligible.' },
    ta: { q: 'இந்தியக் குடியரசுத் தலைவரைத் தேர்ந்தெடுக்கும் வாக்காளர் குழுமத்தில் இடம் பெறாதவர்கள் யார்?', options: ['நாடாளுமன்ற அவைகளுக்கு நியமிக்கப்படும் நியமன உறுப்பினர்கள்', 'மக்களவையின் தேர்ந்தெடுக்கப்பட்ட உறுப்பினர்கள்', 'மாநிலங்களவையின் தேர்ந்தெடுக்கப்பட்ட உறுப்பினர்கள்', 'மாநிலங்களின் தேர்ந்தெடுக்கப்பட்ட சட்டமன்ற உறுப்பினர்கள்'], explanation: 'நாடாளுமன்ற இரு அவைகளின், மாநில, யூனியன் பிரதேச சட்டமன்றங்களின் தேர்ந்தெடுக்கப்பட்ட உறுப்பினர்கள் இடம் பெறுவர்; நியமன உறுப்பினர்கள் இடம் பெறமாட்டார்கள்.' },
  },
  {
    difficulty: 'hard', source: '§2.1.3, p. 248', answer: 0,
    en: { q: 'Which of the following is a DEMERIT of indirect elections, according to the textbook?', options: ['If the number of voters is very small, corruption, bribery and horse trading are possible.', 'They are very expensive.', 'They are not suited to large countries.', 'Election campaigns often lead to violence at every polling station.'], explanation: 'Indirect elections are less expensive and suit large countries, but with few voters corruption and horse trading are possible, and they are less democratic.' },
    ta: { q: 'பாடநூலின்படி மறைமுகத் தேர்தலின் குறை எது?', options: ['வாக்காளர்களின் எண்ணிக்கை மிகக் குறைவாக இருந்தால் ஊழல், கையூட்டு, குதிரை பேரம் நடக்க வாய்ப்புண்டு.', 'இது மிகவும் செலவு மிக்கது.', 'இது பெரிய நாடுகளுக்குப் பொருந்தாது.', 'தேர்தல் பரப்புரை ஒவ்வொரு வாக்குச்சாவடியிலும் வன்முறைக்கு வழிவகுக்கிறது.'], explanation: 'மறைமுகத் தேர்தல் செலவு குறைவானது, பெரிய நாடுகளுக்கு ஏற்றது; ஆனால் வாக்காளர்கள் குறைவாக இருந்தால் ஊழல், குதிரை பேரம் நிகழலாம்.' },
  },
  {
    difficulty: 'hard', source: '§2.2.4, p. 249', answer: 0,
    en: { q: 'Which of the following is true of the Leader of the Opposition, according to the textbook?', options: ['He enjoys the rank of a Cabinet Minister and, as Chairman of the Public Accounts Committee, examines public money spent by government departments.', 'He is appointed by the Election Commission and chairs the Rajya Sabha.', 'He enjoys the rank of the Prime Minister and appoints the Chief Election Commissioner alone.', 'He is nominated by the President and cannot criticise government policies.'], explanation: 'The Leader of the Opposition has Cabinet Minister rank, chairs the Public Accounts Committee and helps select members of the Central Vigilance and Information Commissions.' },
    ta: { q: 'பாடநூலின்படி எதிர்க்கட்சித் தலைவர் பற்றிச் சரியானது எது?', options: ['அவர் அமைச்சரவை அமைச்சருக்குரிய தகுதி பெறுகிறார்; பொதுக்கணக்குக் குழுவின் தலைவராக அரசுத் துறைகளின் செயல்பாடுகளைக் கேள்விக்குள்ளாக்குகிறார்.', 'அவர் தேர்தல் ஆணையத்தால் நியமிக்கப்பட்டு மாநிலங்களவைக்குத் தலைமை தாங்குகிறார்.', 'அவர் பிரதமருக்குரிய தகுதி பெற்று தலைமைத் தேர்தல் ஆணையரைத் தனியாக நியமிக்கிறார்.', 'அவர் குடியரசுத் தலைவரால் நியமிக்கப்படுகிறார்; அரசின் கொள்கைகளை விமர்சிக்க இயலாது.'], explanation: 'எதிர்க்கட்சித் தலைவர் அமைச்சரவை அமைச்சர் தகுதி பெற்று, பொதுக்கணக்குக் குழுவின் தலைவராக மக்கள் பணம் செலவிடப்படுவதை ஆய்வு செய்கிறார்.' },
  },
];
