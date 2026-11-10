// Tamil Nadu State Board, 9th Social Science, Unit 27 – Economics: Money and Credit (பணம் மற்றும் கடன்).
// Book exercise questions (Economics Unit 3; two-choice and fill-in items turned into 4-option MCQs)
// plus our own questions covering every section. source = section or exercise and printed page of the English-medium book.

import { BankQuestion } from './types';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.1, p. 306', answer: 0,
    en: { q: 'Certain metals like _____ were used as a medium of exchange during ancient times.', options: ['gold', 'iron', 'aluminium', 'lead'], explanation: 'Gold, silver and copper were the metals used first; they were called ancient currency.' },
    ta: { q: 'பண்டைய காலத்தில் பண்டமாற்றத்திற்குப் பதிலாகப் பொது மதிப்பீடாகப் பயன்படுத்தப்பட்ட உலோகம்', options: ['தங்கம்', 'இரும்பு', 'அலுமினியம்', 'ஈயம்'], explanation: 'தங்கம், வெள்ளி, செம்பு ஆகிய உலோகங்கள் புராதனப் பணம் என அழைக்கப்பட்டன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.2, p. 306', answer: 0,
    en: { q: 'The headquarters of the RBI is at _____.', options: ['Mumbai', 'Chennai', 'New Delhi', 'Kolkata'], explanation: 'The Reserve Bank of India was permanently moved to Mumbai from 1937.' },
    ta: { q: 'இந்திய ரிசர்வ் வங்கியின் தலைமையிடம் இருக்கும் இடம்', options: ['மும்பை', 'சென்னை', 'புது தில்லி', 'கொல்கத்தா'], explanation: 'இந்திய ரிசர்வ் வங்கி 1937 முதல் நிரந்தரமாக மும்பையில் இயங்கி வருகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.3, p. 306', answer: 0,
    en: { q: 'International trade is mostly carried on in terms of _____.', options: ['US Dollars', 'Pounds', 'Yen', 'Euros'], explanation: 'Most international trade transactions are carried out in US dollars.' },
    ta: { q: 'சர்வதேச வணிகத்தில் பெரும்பாலும் பயன்படுத்தப்படும் நாணய முறை', options: ['அமெரிக்க டாலர்', 'பவுண்டு', 'யென்', 'யூரோ'], explanation: 'உலக வணிகத்தின் பெரும்பகுதி அமெரிக்க டாலர் மதிப்பிலேயே நடைபெறுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.4, p. 306', answer: 0,
    en: { q: 'The currency of Japan is _____.', options: ['Yen', 'Yuan', 'Ringgit', 'Riyal'], explanation: 'Japan – Yen; China – Yuan; Malaysia – Ringgit; Saudi Arabia – Riyal.' },
    ta: { q: 'ஜப்பான் நாட்டின் பணம் _____ என்று அழைக்கப்படுகிறது.', options: ['யென்', 'யுவான்', 'ரிங்கிட்', 'ரியால்'], explanation: 'ஜப்பான் – யென்; சீனா – யுவான்; மலேசியா – ரிங்கிட்; சவுதி அரேபியா – ரியால்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.1, p. 306', answer: 0,
    en: { q: 'Which system can be considered as the first form of trade?', options: ['Barter system', 'Paper money', 'Coin system', 'Credit card system'], explanation: 'Articles exchanged through the barter system can be termed the first form of trade.' },
    ta: { q: 'வணிகத்தின் முதல் வடிவமாகக் கருதப்படுவது', options: ['பண்டமாற்று முறை', 'காகிதப் பணம்', 'நாணய முறை', 'கடன் அட்டை முறை'], explanation: 'பண்டமாற்று முறையில் பரிமாறிக் கொள்ளப்பட்ட பொருள்களே வணிகத்தின் முதல் வடிவம்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.4, p. 306', answer: 0,
    en: { q: 'Which institution acts as the regulator of the circulation of money in India?', options: ['Reserve Bank of India', 'State Bank of India', 'Ministry of Human Resource Development', 'Election Commission'], explanation: 'The Reserve Bank of India regulates the circulation of currency in India.' },
    ta: { q: 'இந்தியாவில் பணப்பரிமாற்றத்தை முறைப்படுத்தும் பொறுப்பு எந்த அமைப்பிடம் உள்ளது?', options: ['இந்திய ரிசர்வ் வங்கி', 'பாரத ஸ்டேட் வங்கி', 'மனித வள மேம்பாட்டு அமைச்சகம்', 'தேர்தல் ஆணையம்'], explanation: 'இந்தியாவில் பணப்புழக்கத்தை ஒழுங்குபடுத்தும் பணியை இந்திய ரிசர்வ் வங்கி மேற்கொள்கிறது.' },
  },
  {
    difficulty: 'easy', source: '§3.5, p. 303', answer: 0,
    en: { q: 'Which card lets you buy things on credit and pay the amount later?', options: ['Credit card', 'ATM debit card', 'Ration card', 'Demand Draft'], explanation: 'Through credit cards things are bought on credit and the amount can be paid later.' },
    ta: { q: 'பொருள்களை முன்னதாகக் கடனாகப் பெற்று பின்னர் பணம் செலுத்த உதவும் அட்டை', options: ['கடன் அட்டை', 'ATM அட்டை', 'குடும்ப அட்டை', 'கேட்பு வரைவோலை'], explanation: 'இப்போது பணம் பெற்று பின்னர் செலுத்தும் வகையில் கடன் அட்டை (Credit Card) பயன்படுத்தப்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: '§3.8, p. 304', answer: 0,
    en: { q: 'When we say a book costs ₹50, money is acting as a', options: ['unit of account', 'store of value', 'standard of deferred payments', 'barter good'], explanation: 'As a unit of account, money measures and records value: the price of the book equals 50 units of money.' },
    ta: { q: 'ஒரு புத்தகத்தின் விலை ₹50 என்று கூறும்போது பணம் எதுவாகச் செயல்படுகிறது?', options: ['கணக்கின் அலகு', 'மதிப்புச் சேமிப்பு', 'பின்னர் செலுத்துவதற்கான தரம்', 'பண்டமாற்றுப் பொருள்'], explanation: 'பணம் கணக்கின் அலகாக மதிப்பை அளந்து பதிவு செய்கிறது; புத்தகத்தின் விலை 50 அலகு பணத்திற்குச் சமம்.' },
  },
  // ------------------------------------------------------------------ Medium
  {
    difficulty: 'medium', source: 'Book exercise II.2, p. 306', answer: 0,
    en: { q: 'The silver coin weighing 178 grams issued by Sher Shah Suri was termed', options: ['Rupiya', 'Pagoda', 'Dinar', 'Tanka'], explanation: 'During his rule (1540–1546) Sher Shah Suri issued a 178-gram silver coin called the Rupiya, used through Mughal, Maratha and British times.' },
    ta: { q: 'ஷெர்ஷா சூரி காலத்தில் வெளியிடப்பட்ட 178 கிராம் எடை கொண்ட வெள்ளி நாணயம் _____ என்றழைக்கப்பட்டது.', options: ['ரூபியா', 'பகோடா', 'தினார்', 'டங்கா'], explanation: 'ஷெர்ஷா சூரி (1540–1546) வெளியிட்ட 178 கிராம் வெள்ளி நாணயம் ரூபியா எனப்பட்டது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.3, p. 306', answer: 0,
    en: { q: 'The first currency printing press, set up by the British government in 1925, was at', options: ['Nasik', 'Dewas', 'Mysuru', 'Salboni'], explanation: 'A government press was established at Nasik in Maharashtra in 1925; Dewas followed in 1974, and Mysuru and Salboni in the 1990s.' },
    ta: { q: '1925இல் ஆங்கிலேய அரசு முதன்முதலில் பண அச்சகத்தைத் தொடங்கிய இடம்', options: ['நாசிக்', 'தேவாஸ்', 'மைசூரு', 'சல்பானி'], explanation: 'ஆங்கிலேய அரசு 1925இல் மகாராஷ்டிராவின் நாசிக்கில் அச்சகம் அமைத்தது; தேவாஸ் 1974இல், மைசூரு, சல்பானி 1990களில் தொடங்கப்பட்டன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.5, p. 306', answer: 0,
    en: { q: 'Dr. B.R. Ambedkar\'s Ph.D. thesis that guided the Reserve Bank of India Act of 1934 was titled', options: ['The Problem of the Rupee – Its origin and solution', 'Annihilation of Caste', 'The Wealth of Nations', 'Poverty and Un-British Rule in India'], explanation: 'Ambedkar\'s thesis "The Problem of the Rupee – Its origin and solution" provided guidelines for the RBI Act of 1934.' },
    ta: { q: 'இந்திய ரிசர்வ் வங்கிச் சட்டம் 1934க்கு அடிப்படையாக அமைந்த டாக்டர் பி.ஆர். அம்பேத்கரின் ஆராய்ச்சிக் கட்டுரை', options: ['பணத்தின் சிக்கலும் அதன் தீர்வும் (The Problem of the Rupee)', 'சாதி ஒழிப்பு', 'நாடுகளின் செல்வம்', 'இந்தியாவில் வறுமையும் பிரிட்டிஷ் அல்லாத ஆட்சியும்'], explanation: 'அம்பேத்கரின் "பணத்தின் சிக்கலும் அதன் தீர்வும்" என்ற ஆராய்ச்சிக் கட்டுரையின் அடிப்படையில் 1934 ரிசர்வ் வங்கிச் சட்டம் உருவாக்கப்பட்டது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III, p. 306', answer: 0,
    en: { q: 'Match correctly: US Dollar, Currency in circulation, ATM, Salt, Riyal.', options: ['Universally accepted currency; 85%; Automatic Teller Machine; Substitute of money; Saudi Arabia', '85%; Universally accepted currency; Automatic Teller Machine; Saudi Arabia; Substitute of money', 'Universally accepted currency; 85%; Substitute of money; Automatic Teller Machine; Saudi Arabia', 'Saudi Arabia; 85%; Automatic Teller Machine; Substitute of money; Universally accepted currency'], explanation: 'The US dollar is universally accepted, 85% of printed currency is let into circulation, ATM is the Automatic Teller Machine, salt served as a substitute for money in barter, and the Riyal is Saudi Arabia\'s currency.' },
    ta: { q: 'சரியாகப் பொருத்துக: அமெரிக்க டாலர், நாணயச் சுழற்சி, ஏ.டி.எம், உப்பு, ரியால்.', options: ['சர்வதேச அங்கீகாரம் பெற்ற பணம்; 85%; தானியங்கி இயந்திரம்; பணத்தின் மாற்று; சவுதி அரேபியா', '85%; சர்வதேச அங்கீகாரம் பெற்ற பணம்; தானியங்கி இயந்திரம்; சவுதி அரேபியா; பணத்தின் மாற்று', 'சர்வதேச அங்கீகாரம் பெற்ற பணம்; 85%; பணத்தின் மாற்று; தானியங்கி இயந்திரம்; சவுதி அரேபியா', 'சவுதி அரேபியா; 85%; தானியங்கி இயந்திரம்; பணத்தின் மாற்று; சர்வதேச அங்கீகாரம் பெற்ற பணம்'], explanation: 'அமெரிக்க டாலர் சர்வதேச அங்கீகாரம் பெற்றது; அச்சடிக்கப்பட்ட பணத்தில் 85% புழக்கத்தில் விடப்படுகிறது; ஏ.டி.எம் தானியங்கி இயந்திரம்; உப்பு பணத்தின் மாற்றாகப் பயன்பட்டது; ரியால் சவுதி அரேபியாவின் பணம்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI(a), p. 306', answer: 0,
    en: { q: 'Statement 1: The barter system flourished wherever civilizations thrived. Statement 2: This was the initial form of trade.', options: ['Both 1 and 2 are correct', '1 is correct; 2 is wrong', 'Both 1 and 2 are wrong', '1 is wrong; 2 is correct'], explanation: 'The barter system flourished wherever civilizations thrived, both within and among civilizations, and was the initial form of trade.' },
    ta: { q: 'கூற்று 1: நாகரிகம் வளர்ச்சியடைந்த இடங்களில் பண்டமாற்றுமுறை செழித்தோங்கியது. கூற்று 2: இதுவே வணிகத்தின் முதல் வடிவம்.', options: ['இரண்டும் சரி', '1 சரி, 2 தவறு', 'இரண்டும் தவறு', '1 தவறு, 2 சரி'], explanation: 'நாகரிகங்கள் வளர்ந்த இடங்களில் பண்டமாற்றுமுறை செழித்தது; இதுவே வணிகத்தின் முதல் வடிவம்.' },
  },
  {
    difficulty: 'medium', source: '§3.6, p. 303', answer: 0,
    en: { q: 'The Reserve Bank of India started its operations on', options: ['1 April 1935', '1 April 1949', '15 August 1947', '19 July 1969'], explanation: 'The RBI started operations on 1st April 1935, moved permanently to Mumbai in 1937 and was nationalised in 1949.' },
    ta: { q: 'இந்திய ரிசர்வ் வங்கி செயல்படத் தொடங்கிய நாள்', options: ['ஏப்ரல் 1, 1935', 'ஏப்ரல் 1, 1949', 'ஆகஸ்ட் 15, 1947', 'ஜூலை 19, 1969'], explanation: 'இந்திய ரிசர்வ் வங்கி ஏப்ரல் 1, 1935 முதல் செயல்படத் தொடங்கியது; 1937 முதல் மும்பையில் இயங்குகிறது; 1949இல் நாட்டுடைமையாக்கப்பட்டது.' },
  },
  {
    difficulty: 'medium', source: '§3.3, p. 301', answer: 0,
    en: { q: 'When metals such as silver and gold were used as the standard value in the exchange of goods, it was called', options: ['natural money', 'paper money', 'barter', 'electronic money'], explanation: 'Silver and gold, used as standard value in exchange all over the world, were called natural money.' },
    ta: { q: 'வெள்ளி, தங்கம் போன்ற உலோகங்கள் பொருள்களின் பரிமாற்றத்தில் நிலையான மதிப்பாகப் பயன்படுத்தப்பட்டபோது அது அழைக்கப்பட்டது', options: ['இயற்கைப் பணம்', 'காகிதப் பணம்', 'பண்டமாற்று', 'மின்னணுப் பணம்'], explanation: 'பொருள்களின் பரிமாற்றத்தில் நிலையான மதிப்பாகப் பயன்பட்ட தங்கம், வெள்ளி இயற்கைப் பணம் எனப்பட்டது.' },
  },
  {
    difficulty: 'medium', source: '§3.4, p. 301', answer: 0,
    en: { q: 'Why were coins made using metals of lesser value?', options: ['There were insufficient reserves of gold and silver as trade prospered.', 'Gold and silver had lost all their value.', 'Kings banned the use of gold and silver.', 'Paper was not yet invented.'], explanation: 'As trade grew, reserves of gold and silver (and mines) were insufficient, so coins of lesser-value metals were made for buying cheaper goods.' },
    ta: { q: 'குறைந்த மதிப்புள்ள உலோகங்களைக் கொண்டு நாணயங்கள் தயாரிக்கப்பட்டதற்குக் காரணம்', options: ['வணிகத்தின் விரிவாக்கத்துக்கு ஏற்ப தங்கம், வெள்ளி இருப்பு இல்லை.', 'தங்கம், வெள்ளி தங்கள் மதிப்பை முழுமையாக இழந்தன.', 'அரசர்கள் தங்கம், வெள்ளியைப் பயன்படுத்தத் தடை விதித்தனர்.', 'காகிதம் அப்போது கண்டுபிடிக்கப்படவில்லை.'], explanation: 'வணிகத்தின் விரிவாக்கத்துக்கு ஏற்ப தங்கம், வெள்ளி இருப்பு இல்லாததால் குறைந்த மதிப்புள்ள உலோகங்களில் நாணயங்கள் செய்யப்பட்டன.' },
  },
  {
    difficulty: 'medium', source: '§3.9, p. 305', answer: 0,
    en: { q: 'Micro credit through nationalised banks is given mainly to', options: ['Self-Help Groups', 'large industries', 'foreign traders', 'the Reserve Bank of India'], explanation: 'Nationalised banks help Self-Help Groups through micro-credit, which benefits street vendors, fishermen, women and the poor.' },
    ta: { q: 'நாட்டுடைமையாக்கப்பட்ட வங்கிகள் நுண்கடன் (micro-credit) மூலம் உதவுவது', options: ['சுய உதவிக் குழுக்கள்', 'பெரிய தொழில்கள்', 'வெளிநாட்டு வணிகர்கள்', 'இந்திய ரிசர்வ் வங்கி'], explanation: 'நாட்டுடைமையாக்கப்பட்ட வங்கிகள் சுய உதவிக் குழுக்களுக்கு நுண்கடன் வழங்கி உதவுகின்றன.' },
  },
  {
    difficulty: 'medium', source: '§3.6, p. 303', answer: 0,
    en: { q: 'All the major and important banks in India were nationalised in', options: ['1969', '1949', '1935', '1991'], explanation: 'All the major and important banks were nationalised in 1969; the RBI itself was nationalised in 1949.' },
    ta: { q: 'இந்தியாவின் அனைத்து முக்கிய வங்கிகளும் நாட்டுடைமையாக்கப்பட்ட ஆண்டு', options: ['1969', '1949', '1935', '1991'], explanation: 'இந்தியாவில் அனைத்து முக்கிய வங்கிகளும் 1969இல் நாட்டுடைமையாக்கப்பட்டன; ரிசர்வ் வங்கி 1949இல் நாட்டுடைமையானது.' },
  },
  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise VI(b), p. 306', answer: 0,
    en: { q: 'Statement 1: Most of the international trade transactions are carried out in US dollars. Statement 2: No other country except the US carries out trade in the world.', options: ['1 is correct; 2 is wrong', 'Both the statements are correct', 'Both the statements are wrong', '1 is wrong; 2 is correct'], explanation: 'Most international trade is in US dollars, but many countries carry out world trade, so statement 2 is wrong.' },
    ta: { q: 'கூற்று 1: உலக நாடுகளில் பெரும்பான்மையான பணப் பரிமாற்றங்கள் அமெரிக்க டாலர் மதிப்பிலேயே நடைபெறுகின்றன. கூற்று 2: உலக வணிகத்தை அமெரிக்கா மட்டுமே நடத்துகிறது.', options: ['1 சரி, 2 தவறு', 'இரண்டு கூற்றுகளும் சரி', 'இரண்டு கூற்றுகளும் தவறு', '1 தவறு, 2 சரி'], explanation: 'உலக வணிகத்தின் பெரும்பகுதி டாலரில் நடைபெறுகிறது; ஆனால் அமெரிக்கா மட்டுமே வணிகம் செய்வதில்லை; எனவே கூற்று 2 தவறு.' },
  },
  {
    difficulty: 'hard', source: '§3.6, p. 303', answer: 0,
    en: { q: 'According to the textbook, what share of the printed currency is let into circulation, and how much currency was in circulation as of August 2018?', options: ['85%; ₹19 lakh crore', '90%; ₹15 lakh crore', '85%; ₹15 lakh crore', '69%; ₹19 lakh crore'], explanation: '85% of the printed currency is let into circulation; as of August 2018, currency worth ₹19 lakh crore was in circulation.' },
    ta: { q: 'பாடநூலின்படி அச்சடிக்கப்பட்ட பணத்தில் எத்தனை சதவீதம் புழக்கத்தில் விடப்படுகிறது? ஆகஸ்ட் 2018 நிலவரப்படி புழக்கத்தில் இருந்த பணம் எவ்வளவு?', options: ['85%; ₹19 லட்சம் கோடி', '90%; ₹15 லட்சம் கோடி', '85%; ₹15 லட்சம் கோடி', '69%; ₹19 லட்சம் கோடி'], explanation: 'அச்சடிக்கப்பட்ட பணத்தில் 85% புழக்கத்தில் விடப்படுகிறது; ஆகஸ்ட் 2018 நிலவரப்படி ₹19 லட்சம் கோடி புழக்கத்தில் உள்ளது.' },
  },
  {
    difficulty: 'hard', source: '§3.9, p. 305', answer: 0,
    en: { q: 'Which statement correctly compares formal and informal sources of credit, as given in the textbook?', options: ['Nationalised and co-operative banks charge comparatively less interest, while informal institutions are easily approachable but charge high interest.', 'Informal institutions charge less interest and give full safety to pledged items.', 'Co-operative banks are informal institutions with flexible procedures and high interest.', 'Self-Help Groups are formal banks run by the Reserve Bank of India.'], explanation: 'Formal banks charge comparatively less interest with guarantee for pledged goods; informal lenders are easy to approach but raise issues of safety, high interest and recovery methods.' },
    ta: { q: 'பாடநூலின்படி முறைசார்ந்த, முறைசாரா கடன் ஆதாரங்களை ஒப்பிடும் சரியான கூற்று எது?', options: ['நாட்டுடைமையாக்கப்பட்ட, கூட்டுறவு வங்கிகளில் வட்டி ஒப்பீட்டளவில் குறைவு; முறைசாரா நிறுவனங்களை எளிதில் அணுகலாம், ஆனால் வட்டி அதிகம்.', 'முறைசாரா நிறுவனங்கள் குறைந்த வட்டி வசூலித்து அடகுப் பொருள்களுக்கு முழுப் பாதுகாப்பு தருகின்றன.', 'கூட்டுறவு வங்கிகள் நெகிழ்வான நடைமுறையும் அதிக வட்டியும் கொண்ட முறைசாரா நிறுவனங்கள்.', 'சுய உதவிக் குழுக்கள் ரிசர்வ் வங்கி நடத்தும் முறைசார்ந்த வங்கிகள்.'], explanation: 'முறைசார்ந்த வங்கிகளில் வட்டி குறைவு, அடகுப் பொருள்களுக்கு உத்தரவாதம் உண்டு; முறைசாரா நிறுவனங்களில் அணுகல் எளிது, ஆனால் பாதுகாப்பு, அதிக வட்டி, வசூல் முறை ஆகிய சிக்கல்கள் உள்ளன.' },
  },
  {
    difficulty: 'hard', source: '§3.9, p. 305', answer: 0,
    en: { q: 'Which statement about the history of currency notes in India is correct according to the textbook?', options: ['One-rupee and two-rupee notes were first printed in 1917, and the RBI has issued Government of India notes since 1935.', 'One-rupee notes were first printed in 1947 after Independence.', 'Notes with the image of King George VI were in circulation until 1969.', 'The RBI at present prints notes of up to ten thousand rupees.'], explanation: 'One- and two-rupee notes were first printed in 1917; the RBI has issued notes since 1935; George VI notes circulated till 1947; the RBI may print up to ₹10,000 but at present prints up to ₹2,000.' },
    ta: { q: 'பாடநூலின்படி இந்தியாவில் ரூபாய் நோட்டுகளின் வரலாறு பற்றிய சரியான கூற்று எது?', options: ['1917இல் முதன்முதலில் ஒரு ரூபாய், இரண்டு ரூபாய் நோட்டுகள் வெளியிடப்பட்டன; 1935 முதல் பணப் பொறுப்பு இந்திய ரிசர்வ் வங்கிக்கு வந்தது.', 'சுதந்திரத்திற்குப் பின் 1947இல்தான் முதன்முதலில் ஒரு ரூபாய் நோட்டு அச்சிடப்பட்டது.', 'ஆறாம் ஜார்ஜின் உருவம் பொறித்த பணம் 1969 வரை புழக்கத்தில் இருந்தது.', 'தற்போது ரிசர்வ் வங்கி பத்தாயிரம் ரூபாய் வரையிலான நோட்டுகளை அச்சடிக்கிறது.'], explanation: '1917இல் ஒரு ரூபாய், இரண்டு ரூபாய் நோட்டுகள்; 1935இல் பணப் பொறுப்பு ரிசர்வ் வங்கிக்கு; 1947 வரை ஆறாம் ஜார்ஜ் உருவப் பணம்; தற்போது அதிகபட்சம் ₹2000 வரை மட்டுமே அச்சடிக்கப்படுகிறது.' },
  },
  {
    difficulty: 'hard', source: '§3.2, p. 301', answer: 0,
    en: { q: 'Why were metals chosen as the first form of money?', options: ['They were rare, could be kept for a long time and never lost their value.', 'They were available in plenty everywhere.', 'They were light and could be printed easily.', 'They were used only by kings for taxes.'], explanation: 'Metals were rare to find, could be maintained for a long time and never lost their value, so they became the first form of money.' },
    ta: { q: 'உலோகங்கள் பணத்தின் முதல் வடிவமாகத் தேர்ந்தெடுக்கப்பட்டதற்குக் காரணம்', options: ['அவை அரிதாகக் கிடைத்தன, நீண்ட காலம் பாதுகாக்க முடிந்தது, மதிப்பை இழக்கவில்லை.', 'அவை எங்கும் ஏராளமாகக் கிடைத்தன.', 'அவை எடை குறைவானவை, எளிதில் அச்சிடக்கூடியவை.', 'அவை அரசர்களால் வரி செலுத்த மட்டுமே பயன்படுத்தப்பட்டன.'], explanation: 'உலோகங்கள் அரிதானவை, நீண்ட காலம் நிலைத்திருப்பவை, மதிப்பை இழக்காதவை; எனவே அவை பணத்தின் முதல் வடிவமாயின.' },
  },
  {
    difficulty: 'hard', source: '§3.7, p. 304', answer: 0,
    en: { q: 'According to the textbook, about what percentage of products are manufactured with the main aim of sales or meant for services?', options: ['90%', '85%', '50%', '69%'], explanation: '90% of the products are manufactured with the main aim of sales or for services, which increases the importance of the market and money.' },
    ta: { q: 'பாடநூலின்படி உலகில் தயாரிக்கப்படும் பொருள்களில் ஏறக்குறைய எத்தனை விழுக்காடு விற்பனை அல்லது சேவையை இலக்காகக் கொண்டு தயாரிக்கப்படுகின்றன?', options: ['90%', '85%', '50%', '69%'], explanation: 'தயாரிக்கப்படும் பொருள்களில் 90 விழுக்காடு விற்பனை அல்லது சேவையை இலக்காகக் கொண்டவை; இது சந்தை, பணத்தின் முக்கியத்துவத்தை உணர்த்துகிறது.' },
  },
];
