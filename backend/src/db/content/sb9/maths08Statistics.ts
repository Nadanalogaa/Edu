// Tamil Nadu State Board, 9th Mathematics, Unit 8 – Statistics (புள்ளியியல்).
// Every exercise item with a single definite answer (Exercises 8.1–8.4), the solved
// examples and progress checks, plus our own questions for each section.
// source = section / exercise and printed page of the English-medium book.
// Answers checked against the book's answer key (p. 317).

import { BankQuestion, AR_EN, AR_TA } from './types';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: '§8.1, p. 266', answer: 0,
    en: { q: 'The science of collecting, organising, analysing and interpreting data in order to make decisions is called', options: ['statistics', 'probability', 'mensuration', 'geometry'], explanation: 'Statistics collects, organises, analyses and interprets data to help us make decisions.' },
    ta: { q: 'முடிவுகளை எடுப்பதற்காகத் தரவுகளைத் திரட்டுதல், ஒழுங்குபடுத்துதல், பகுப்பாய்தல், விளக்குதல் ஆகியவற்றைக் கூறும் அறிவியல்', options: ['புள்ளியியல்', 'நிகழ்தகவு', 'அளவியல்', 'வடிவியல்'], explanation: 'தரவுகளைத் திரட்டி, ஒழுங்குபடுத்தி, பகுப்பாய்ந்து, விளக்கி முடிவெடுக்க உதவுவது புள்ளியியல்.' },
  },
  {
    difficulty: 'easy', source: '§8.1, p. 266', answer: 0,
    en: { q: 'Who is known as the Father of Modern Statistics and Experimental Design?', options: ['Sir Ronald Aylmer Fisher', 'Richard Von Mises', 'Pierre Simon Laplace', 'Heron of Alexandria'], explanation: 'The British statistician and biologist Sir Ronald Aylmer Fisher (1890–1962) is called the Father of Modern Statistics.' },
    ta: { q: 'நவீனப் புள்ளியியல் மற்றும் சோதனை வடிவமைப்பின் தந்தை என அழைக்கப்படுபவர்', options: ['சர் ரொனால்டு அய்ல்மர் ஃபிஷர்', 'ரிச்சர்டு வான் மிசஸ்', 'பியர் சைமன் லாப்லஸ்', 'அலெக்சாண்டிரியாவின் ஹெரான்'], explanation: 'பிரிட்டிஷ் புள்ளியியலாளரும் உயிரியலாளருமான சர் ரொனால்டு அய்ல்மர் ஃபிஷர் (1890–1962) நவீனப் புள்ளியியலின் தந்தை எனப்படுகிறார்.' },
  },
  {
    difficulty: 'easy', source: '§8.2, p. 267', answer: 0,
    en: { q: 'First-hand, original data that we collect ourselves are called', options: ['primary data', 'secondary data', 'raw data', 'grouped data'], explanation: 'Primary data are collected first-hand, e.g. by personal interviews or experiments.' },
    ta: { q: 'நாம் நேரடியாகத் திரட்டிய தரவுகள்', options: ['முதல்நிலைத் தரவுகள்', 'இரண்டாம் நிலைத் தரவுகள்', 'செப்பனிடப்படாத தரவுகள்', 'தொகுக்கப்பட்ட தரவுகள்'], explanation: 'நேர்காணல், ஆய்வுகள் மூலம் நாமே நேரடியாகத் திரட்டுபவை முதல்நிலைத் தரவுகள்.' },
  },
  {
    difficulty: 'easy', source: '§8.2, p. 267', answer: 0,
    en: { q: 'Government-published statistics and available research reports are examples of', options: ['secondary data', 'primary data', 'raw data', 'tally marks'], explanation: 'Data taken from figures collected by someone else are secondary data.' },
    ta: { q: 'அரசு வெளியிட்ட தரவுகள், ஆய்வு அறிக்கைகள் ஆகியவை எதற்கு எடுத்துக்காட்டுகள்?', options: ['இரண்டாம் நிலைத் தரவுகள்', 'முதல்நிலைத் தரவுகள்', 'செப்பனிடப்படாத தரவுகள்', 'நேர்க்கோட்டுக் குறிகள்'], explanation: 'மற்றவர்கள் திரட்டிய தரவுகளிலிருந்து எடுக்கப்பட்டவை இரண்டாம் நிலைத் தரவுகள்.' },
  },
  {
    difficulty: 'easy', source: '§8.2.1, p. 267', answer: 0,
    en: { q: 'Data in the form in which they were first collected, before editing or processing, are called', options: ['raw data', 'secondary data', 'grouped data', 'cumulative data'], explanation: 'Initially collected, unorganised data are known as raw data.' },
    ta: { q: 'திருத்தப்படாமல், செயலாக்கப்படாமல் தொடக்க நிலையில் உள்ள தரவுகள்', options: ['செப்பனிடப்படாத தரவுகள்', 'இரண்டாம் நிலைத் தரவுகள்', 'தொகுக்கப்பட்ட தரவுகள்', 'குவிவுத் தரவுகள்'], explanation: 'தொடக்க நிலையில் ஒழுங்குபடுத்தப்படாத தரவுகள் செப்பனிடப்படாத தரவுகள் எனப்படும்.' },
  },
  {
    difficulty: 'easy', source: '§8.2.1, p. 268', answer: 0,
    en: { q: 'The number of times an item occurs in a class is called the _____ of that class.', options: ['frequency', 'class mark', 'class limit', 'range'], explanation: 'The count of items in each class is its frequency; the table of these counts is a frequency table.' },
    ta: { q: 'ஒரு பிரிவில் உறுப்புகள் இடம்பெறும் எண்ணிக்கை அந்தப் பிரிவின் _____ எனப்படும்.', options: ['நிகழ்வெண்', 'நடுப்புள்ளி', 'பிரிவு எல்லை', 'வீச்சு'], explanation: 'ஒவ்வொரு பிரிவிலும் உள்ள உறுப்புகளின் எண்ணிக்கை நிகழ்வெண்; இவற்றின் அட்டவணை நிகழ்வெண் பட்டியல்.' },
  },
  {
    difficulty: 'easy', source: '§8.2.1, p. 268', answer: 0,
    en: { q: 'While counting with tally marks, to avoid confusion, every fifth tally mark is', options: ['drawn across the four preceding marks', 'written as the digit 5', 'left out', 'drawn in a new row'], explanation: 'Every fifth tally mark is put across the four before it, so 11 is written as two bundles of five and one mark.' },
    ta: { q: 'நேர்க்கோட்டுக் குறிகளால் எண்ணும்போது குழப்பத்தைத் தவிர்க்க, ஒவ்வோர் ஐந்தாவது குறியும்', options: ['முன்னர் உள்ள நான்கு குறிகளுக்குக் குறுக்காக இடப்படும்', '5 என்ற எண்ணாக எழுதப்படும்', 'விடப்படும்', 'புதிய வரிசையில் இடப்படும்'], explanation: 'ஒவ்வோர் ஐந்தாவது நேர்க்கோட்டுக் குறியும் முன்னுள்ள நான்கு குறிகளுக்குக் குறுக்காக இடப்படும்.' },
  },
  {
    difficulty: 'easy', source: '§8.2.1 Note, p. 269', answer: 0,
    en: { q: 'In the class 56 – 60, the number 56 is called the', options: ['lower limit', 'upper limit', 'mid value', 'class size'], explanation: '56 is the lower limit and 60 is the upper limit of the class 56 – 60.' },
    ta: { q: '56 – 60 என்ற பிரிவில் 56 என்பது', options: ['கீழ் எல்லை', 'மேல் எல்லை', 'நடுப்புள்ளி', 'பிரிவு இடைவெளியின் அளவு'], explanation: '56 – 60 பிரிவில் 56 கீழ் எல்லை, 60 மேல் எல்லை.' },
  },
  {
    difficulty: 'easy', source: '§8.3, p. 269', answer: 0,
    en: { q: 'The three measures of central tendency (averages) studied in this chapter are', options: ['mean, median and mode', 'mean, range and frequency', 'median, mode and range', 'frequency, class mark and mode'], explanation: 'There are three definitions of average: the mean, the median and the mode.' },
    ta: { q: 'இப்பாடத்தில் படிக்கும் மூன்று மையப்போக்கு அளவைகள்', options: ['சராசரி, இடைநிலை அளவு, முகடு', 'சராசரி, வீச்சு, நிகழ்வெண்', 'இடைநிலை அளவு, முகடு, வீச்சு', 'நிகழ்வெண், நடுப்புள்ளி, முகடு'], explanation: 'கூட்டுச் சராசரி, இடைநிலை அளவு, முகடு ஆகியவை மூன்று மையப்போக்கு அளவைகள்.' },
  },
  {
    difficulty: 'easy', source: '§8.4.1, p. 270', answer: 0,
    en: { q: 'The arithmetic mean of n observations is', options: ['sum of all observations ÷ number of observations', 'number of observations ÷ sum of all observations', 'the middle observation', 'the most frequent observation'], explanation: 'X̄ = Σx ÷ n.' },
    ta: { q: 'n மதிப்புகளின் கூட்டுச் சராசரி', options: ['அனைத்து மதிப்புகளின் கூடுதல் ÷ மதிப்புகளின் எண்ணிக்கை', 'மதிப்புகளின் எண்ணிக்கை ÷ அனைத்து மதிப்புகளின் கூடுதல்', 'நடுவில் உள்ள மதிப்பு', 'அதிக முறை வரும் மதிப்பு'], explanation: 'X̄ = Σx ÷ n.' },
  },
  {
    difficulty: 'easy', source: '§8.4.3, p. 272', answer: 0,
    en: { q: 'The mid value (class mark) of a class interval is', options: ['(UCL + LCL) ÷ 2', 'UCL − LCL', '(UCL − LCL) ÷ 2', 'UCL × LCL'], explanation: 'Mid value = (Upper Class Limit + Lower Class Limit) ÷ 2; the class size is UCL − LCL.' },
    ta: { q: 'ஒரு பிரிவு இடைவெளியின் நடுப்புள்ளி', options: ['(UCL + LCL) ÷ 2', 'UCL − LCL', '(UCL − LCL) ÷ 2', 'UCL × LCL'], explanation: 'நடுப்புள்ளி = (மேல் எல்லை + கீழ் எல்லை) ÷ 2; பிரிவு இடைவெளியின் அளவு UCL − LCL.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 8.4 Q3, p. 288', answer: 0,
    en: { q: 'A particular observation which occurs the maximum number of times in a given data is called its', options: ['mode', 'frequency', 'range', 'median'], explanation: 'The mode is the value that occurs most frequently.' },
    ta: { q: 'ஒரு தரவில் அதிகமுறை இடம் பெற்றுள்ள உறுப்பின் மதிப்பு', options: ['முகடு', 'நிகழ்வெண்', 'வீச்சு', 'இடைநிலை அளவு'], explanation: 'அதிக முறை இடம்பெறும் மதிப்பு முகடு.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 8.4 Q5, p. 288', answer: 0,
    en: { q: 'The algebraic sum of the deviations of a set of n values from their mean is', options: ['0', 'n − 1', 'n', 'n + 1'], explanation: 'A special property of the mean: Σ(xᵢ − X̄) = 0.' },
    ta: { q: 'சராசரியிலிருந்து, அனைத்து n உறுப்புகளின் விலக்கங்களின் கூட்டுத்தொகை', options: ['0', 'n − 1', 'n', 'n + 1'], explanation: 'கூட்டுச் சராசரியின் சிறப்புப் பண்பு: Σ(xᵢ − X̄) = 0.' },
  },
  {
    difficulty: 'easy', source: '§8.5, p. 279', answer: 0,
    en: { q: 'The value which occupies the middle position when all observations are arranged in ascending or descending order is the', options: ['median', 'mean', 'mode', 'range'], explanation: 'The median is a positional average – the middle value of the ordered data.' },
    ta: { q: 'எல்லா மதிப்புகளையும் ஏறு அல்லது இறங்கு வரிசையில் அமைக்கும்போது நடுவில் அமையும் மதிப்பு', options: ['இடைநிலை அளவு', 'சராசரி', 'முகடு', 'வீச்சு'], explanation: 'இடைநிலை அளவு ஒரு நிலைச் சராசரி – வரிசைப்படுத்திய தரவின் நடு மதிப்பு.' },
  },
  {
    difficulty: 'easy', source: '§8.5, p. 279', answer: 0,
    en: { q: 'If a data set has n items and n is odd, the median is the', options: ['((n + 1) ÷ 2)th item', '(n ÷ 2)th item', '((n − 1) ÷ 2)th item', '(n + 1)th item'], explanation: 'For odd n the middle item is the ((n + 1) ÷ 2)th; e.g. 11 items → 6th item.' },
    ta: { q: 'ஒரு தரவில் n உறுப்புகள் உள்ளன, n ஒற்றை எண் எனில் இடைநிலை அளவு', options: ['((n + 1) ÷ 2) ஆவது உறுப்பு', '(n ÷ 2) ஆவது உறுப்பு', '((n − 1) ÷ 2) ஆவது உறுப்பு', '(n + 1) ஆவது உறுப்பு'], explanation: 'n ஒற்றை எனில் நடு உறுப்பு ((n + 1) ÷ 2) ஆவது; எ.கா. 11 உறுப்புகள் → 6 ஆவது உறுப்பு.' },
  },
  {
    difficulty: 'easy', source: '§8.6.1 Note, p. 285', answer: 0,
    en: { q: 'A distribution having two modes is called', options: ['bimodal', 'unimodal', 'trimodal', 'multimodal'], explanation: 'One mode – unimodal, two – bimodal, three – trimodal, more than three – multimodal.' },
    ta: { q: 'இரண்டு முகடுகள் உள்ள பரவல்', options: ['இருமுகடு உடையது', 'ஒருமுகடு உடையது', 'மும்முகடு உடையது', 'பன்முகடு உடையது'], explanation: 'ஒரு முகடு – ஒருமுகடு, இரண்டு – இருமுகடு, மூன்று – மும்முகடு, மூன்றுக்கு மேல் – பன்முகடு.' },
  },
  {
    difficulty: 'easy', source: '§8.6.3, p. 286', answer: 0,
    en: { q: 'In a grouped frequency distribution, the class interval with the maximum frequency is called the', options: ['modal class', 'median class', 'lower class', 'cumulative class'], explanation: 'The class with the highest frequency is the modal class.' },
    ta: { q: 'வகைப்படுத்தப்பட்ட நிகழ்வெண் பரவலில், மிகப்பெரிய நிகழ்வெண்ணைப் பெற்றுள்ள பிரிவு', options: ['முகட்டுப் பிரிவு', 'இடைநிலை அளவு பிரிவு', 'கீழ்ப் பிரிவு', 'குவிவுப் பிரிவு'], explanation: 'மிகப்பெரிய நிகழ்வெண்ணைப் பெற்ற பிரிவு முகட்டுப் பிரிவு எனப்படும்.' },
  },
  {
    difficulty: 'easy', source: 'Book example 8.14, p. 285', answer: 0,
    en: { q: 'Seven labourers in a rice mill receive daily wages of ₹500, ₹600, ₹600, ₹800, ₹800, ₹800 and ₹1000. The modal wage is', options: ['₹800', '₹600', '₹1000', '₹728.57'], explanation: '₹800 occurs three times, more than any other wage.' },
    ta: { q: 'ஓர் அரிசி ஆலையில் ஏழு தொழிலாளர்களின் தினக்கூலி ₹500, ₹600, ₹600, ₹800, ₹800, ₹800, ₹1000 எனில் முகட்டுக் கூலி', options: ['₹800', '₹600', '₹1000', '₹728.57'], explanation: '₹800 மூன்று முறை வருகிறது; வேறு எந்தக் கூலியும் அத்தனை முறை வரவில்லை.' },
  },
  {
    difficulty: 'easy', source: 'Book example 8.16, p. 285', answer: 0,
    en: { q: 'A set of numbers has five 4s, four 5s, nine 6s and six 9s. The mode is', options: ['6', '9', '4', '5'], explanation: '6 has the maximum frequency, 9.' },
    ta: { q: 'ஓர் எண் தொகுப்பில் ஐந்து 4 கள், நான்கு 5 கள், ஒன்பது 6 கள், ஆறு 9 கள் உள்ளன எனில் முகடு', options: ['6', '9', '4', '5'], explanation: '6 க்கு மிகப்பெரிய நிகழ்வெண் 9 உள்ளது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 8.3 Q4, p. 287', answer: 0,
    en: { q: 'Demand for track suits: size 38 – 36 persons, 39 – 15, 40 – 37, 41 – 13, 42 – 26, 43 – 8, 44 – 6, 45 – 2. Which size is in greater demand?', options: ['40', '38', '42', '45'], explanation: 'Size 40 has the highest frequency (37), so it is the mode.' },
    ta: { q: 'விளையாட்டுக் கால்சட்டைகளுக்கான தேவை: அளவு 38 – 36 பேர், 39 – 15, 40 – 37, 41 – 13, 42 – 26, 43 – 8, 44 – 6, 45 – 2. எந்த அளவுக்கு அதிகத் தேவை உள்ளது?', options: ['40', '38', '42', '45'], explanation: 'அளவு 40 க்கு அதிக நிகழ்வெண் (37) உள்ளது; அதுவே முகடு.' },
  },
  {
    difficulty: 'easy', source: 'Points to Remember, p. 289', answer: 0,
    en: { q: 'The frequency obtained by adding the frequencies of all classes up to a given class is its', options: ['cumulative frequency', 'class frequency', 'relative frequency', 'modal frequency'], explanation: 'Cumulative frequency of a class = sum of frequencies of all classes up to and including it.' },
    ta: { q: 'ஒரு பிரிவு வரை உள்ள அனைத்துப் பிரிவுகளின் நிகழ்வெண்களின் கூடுதல்', options: ['குவிவு நிகழ்வெண்', 'பிரிவு நிகழ்வெண்', 'ஒப்பீட்டு நிகழ்வெண்', 'முகட்டு நிகழ்வெண்'], explanation: 'ஒரு பிரிவின் குவிவு நிகழ்வெண் என்பது அந்தப் பிரிவு வரை உள்ள அனைத்துப் பிரிவுகளின் நிகழ்வெண்களின் கூடுதல்.' },
  },

  // ---------------------------------------------------------------- Medium
  {
    difficulty: 'medium', source: '§8.4.1, p. 270', answer: 0,
    en: { q: 'A cricketer scored 25, 32, 36, 38, 45, 41, 35, 36 in eight matches. Taking 38 as the assumed mean, the mean of the differences is −2. The mean score is', options: ['36', '40', '38', '34'], explanation: 'Correct mean = assumed mean + mean difference = 38 + (−2) = 36 (= 288 ÷ 8).' },
    ta: { q: 'ஒரு மட்டைப்பந்து வீரர் 8 ஆட்டங்களில் 25, 32, 36, 38, 45, 41, 35, 36 ஓட்டங்கள் எடுத்தார். 38 ஐ ஊகச் சராசரியாகக் கொண்டால் வேறுபாடுகளின் சராசரி −2. சராசரி ஓட்டம்', options: ['36', '40', '38', '34'], explanation: 'சராசரி = ஊகச் சராசரி + வேறுபாடுகளின் சராசரி = 38 + (−2) = 36 (= 288 ÷ 8).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 8.1 Q1, p. 277', answer: 0,
    en: { q: 'The temperatures of a place in a winter week are 26°C, 24°C, 28°C, 31°C, 30°C, 26°C, 24°C. The mean temperature is', options: ['27°C', '26°C', '28°C', '27.5°C'], explanation: 'Sum = 189; mean = 189 ÷ 7 = 27°C.' },
    ta: { q: 'ஓர் இடத்தின் ஒரு வாரக் குளிர்கால வெப்பநிலை 26°C, 24°C, 28°C, 31°C, 30°C, 26°C, 24°C எனில் சராசரி வெப்பநிலை', options: ['27°C', '26°C', '28°C', '27.5°C'], explanation: 'கூடுதல் = 189; சராசரி = 189 ÷ 7 = 27°C.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 8.1 Q2, p. 277', answer: 0,
    en: { q: 'The mean weight of 4 members of a family is 60 kg. Three of them weigh 56 kg, 68 kg and 72 kg. The weight of the fourth member is', options: ['44 kg', '60 kg', '64 kg', '52 kg'], explanation: 'Total = 4 × 60 = 240 kg; fourth = 240 − 196 = 44 kg.' },
    ta: { q: 'ஒரு குடும்பத்திலுள்ள 4 நபர்களின் சராசரி எடை 60 கி.கி. மூவரின் எடைகள் 56 கி.கி, 68 கி.கி, 72 கி.கி எனில் நான்காமவரின் எடை', options: ['44 கி.கி', '60 கி.கி', '64 கி.கி', '52 கி.கி'], explanation: 'மொத்தம் = 4 × 60 = 240 கி.கி; நான்காமவர் = 240 − 196 = 44 கி.கி.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 8.1 Q3, p. 277', answer: 0,
    en: { q: 'In a test, 10 students scored 75, 12 scored 60, 8 scored 40 and 3 scored 30. The mean score is about', options: ['56.97', '51.25', '60', '62.67'], explanation: 'Σfx = 750 + 720 + 320 + 90 = 1880; Σf = 33; mean = 1880 ÷ 33 ≈ 56.97 (about 57).' },
    ta: { q: 'ஒரு தேர்வில் 10 மாணவர்கள் 75, 12 மாணவர்கள் 60, 8 மாணவர்கள் 40, 3 மாணவர்கள் 30 மதிப்பெண் பெற்றனர். சராசரி மதிப்பெண் ஏறக்குறைய', options: ['56.97', '51.25', '60', '62.67'], explanation: 'Σfx = 750 + 720 + 320 + 90 = 1880; Σf = 33; சராசரி = 1880 ÷ 33 ≈ 56.97 (ஏறக்குறைய 57).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 8.1 Q4, p. 277', answer: 0,
    en: { q: 'The tumour volumes (mm³) of 6 treated mice are 145, 148, 142, 141, 139, 140. The mean volume is', options: ['142.5 mm³', '141.5 mm³', '143 mm³', '144 mm³'], explanation: 'Sum = 855; mean = 855 ÷ 6 = 142.5 mm³.' },
    ta: { q: 'சிகிச்சை அளிக்கப்பட்ட 6 எலிகளின் புற்றுநோய்க் கட்டிகளின் அளவுகள் (மி.மீ³) 145, 148, 142, 141, 139, 140 எனில் சராசரி அளவு', options: ['142.5 மி.மீ³', '141.5 மி.மீ³', '143 மி.மீ³', '144 மி.மீ³'], explanation: 'கூடுதல் = 855; சராசரி = 855 ÷ 6 = 142.5 மி.மீ³.' },
  },
  {
    difficulty: 'medium', source: 'Book example 8.4, p. 276', answer: 0,
    en: { q: 'The arithmetic mean of 21, 30, 22, 16, 24, 28, 18, 17 is', options: ['22', '21', '24', '20'], explanation: 'Sum = 176; mean = 176 ÷ 8 = 22. The deviations from 22 add up to 0.' },
    ta: { q: '21, 30, 22, 16, 24, 28, 18, 17 இன் கூட்டுச் சராசரி', options: ['22', '21', '24', '20'], explanation: 'கூடுதல் = 176; சராசரி = 176 ÷ 8 = 22. 22 இலிருந்து விலக்கங்களின் கூடுதல் 0.' },
  },
  {
    difficulty: 'medium', source: 'Book example 8.5, p. 276', answer: 0,
    en: { q: 'The arithmetic mean of 6 values is 45. If each value is increased by 4, the new mean is', options: ['49', '45', '69', '180'], explanation: 'Adding k to every value adds k to the mean: 45 + 4 = 49.' },
    ta: { q: '6 மதிப்புகளின் கூட்டுச் சராசரி 45. ஒவ்வொரு மதிப்புடனும் 4 கூட்டப்பட்டால் புதிய சராசரி', options: ['49', '45', '69', '180'], explanation: 'ஒவ்வொரு மதிப்புடனும் k கூட்டினால் சராசரியும் k கூடும்: 45 + 4 = 49.' },
  },
  {
    difficulty: 'medium', source: 'Book example 8.6, p. 276', answer: 0,
    en: { q: 'The arithmetic mean of 7 values is 30. If each value is divided by 3, the new mean is', options: ['10', '90', '30', '27'], explanation: 'Dividing every value by k divides the mean by k: 30 ÷ 3 = 10.' },
    ta: { q: '7 மதிப்புகளின் கூட்டுச் சராசரி 30. ஒவ்வொரு மதிப்பும் 3 ஆல் வகுக்கப்பட்டால் புதிய சராசரி', options: ['10', '90', '30', '27'], explanation: 'ஒவ்வொரு மதிப்பையும் k ஆல் வகுத்தால் சராசரியும் k ஆல் வகுபடும்: 30 ÷ 3 = 10.' },
  },
  {
    difficulty: 'medium', source: '§8.4.4 Progress Check, p. 276', answer: 0,
    en: { q: 'The mean of 10 observations is 48. If 7 is subtracted from each observation, the new mean is', options: ['41', '48', '55', '34'], explanation: 'Subtracting k from every value subtracts k from the mean: 48 − 7 = 41.' },
    ta: { q: '10 மதிப்புகளின் சராசரி 48. ஒவ்வொரு மதிப்பிலிருந்தும் 7 கழிக்கப்பட்டால் புதிய சராசரி', options: ['41', '48', '55', '34'], explanation: 'ஒவ்வொரு மதிப்பிலிருந்தும் k கழித்தால் சராசரியும் k குறையும்: 48 − 7 = 41.' },
  },
  {
    difficulty: 'medium', source: '§8.4.4 Progress Check, p. 276', answer: 0,
    en: { q: 'The mean of 12 numbers is 20. If each number is multiplied by 6, the new mean is', options: ['120', '26', '20', '240'], explanation: 'Multiplying every value by k multiplies the mean by k: 20 × 6 = 120.' },
    ta: { q: '12 எண்களின் சராசரி 20. ஒவ்வொரு எண்ணும் 6 ஆல் பெருக்கப்பட்டால் புதிய சராசரி', options: ['120', '26', '20', '240'], explanation: 'ஒவ்வொரு மதிப்பையும் k ஆல் பெருக்கினால் சராசரியும் k ஆல் பெருகும்: 20 × 6 = 120.' },
  },
  {
    difficulty: 'medium', source: '§8.4.4 Progress Check, p. 276', answer: 0,
    en: { q: 'The mean of 30 numbers is 16. If each number is divided by 4, the new mean is', options: ['4', '12', '64', '16'], explanation: 'Dividing every value by 4 divides the mean by 4: 16 ÷ 4 = 4.' },
    ta: { q: '30 எண்களின் சராசரி 16. ஒவ்வொரு எண்ணும் 4 ஆல் வகுக்கப்பட்டால் புதிய சராசரி', options: ['4', '12', '64', '16'], explanation: 'ஒவ்வொரு மதிப்பையும் 4 ஆல் வகுத்தால் சராசரியும் 4 ஆல் வகுபடும்: 16 ÷ 4 = 4.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 8.4 Q1, p. 288', answer: 0,
    en: { q: 'Let m be the mid point and b the upper limit of a class in a continuous frequency distribution. The lower limit of the class is', options: ['2m − b', '2m + b', 'm − b', 'm − 2b'], explanation: 'm = (a + b) ÷ 2, so the lower limit a = 2m − b.' },
    ta: { q: 'மையப்புள்ளி m, தொடர் நிகழ்வெண் பரவலின் ஒரு பிரிவின் மேல் எல்லை b எனில், அதன் கீழ் எல்லை', options: ['2m − b', '2m + b', 'm − b', 'm − 2b'], explanation: 'm = (a + b) ÷ 2, எனவே கீழ் எல்லை a = 2m − b.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 8.4 Q2, p. 288', answer: 0,
    en: { q: 'The mean of a set of seven numbers is 81. If one number is discarded, the mean of the rest is 78. The discarded number is', options: ['99', '101', '100', '98'], explanation: '7 × 81 = 567; 6 × 78 = 468; discarded number = 567 − 468 = 99.' },
    ta: { q: 'ஏழு மதிப்புகளின் சராசரி 81. அவற்றில் ஒரு மதிப்பு நீக்கப்படும்போது மற்ற மதிப்புகளின் சராசரி 78 எனில், நீக்கப்பட்ட மதிப்பு', options: ['99', '101', '100', '98'], explanation: '7 × 81 = 567; 6 × 78 = 468; நீக்கப்பட்டது = 567 − 468 = 99.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 8.4 Q7, p. 288', answer: 0,
    en: { q: 'If the mean of five observations x, x + 2, x + 4, x + 6, x + 8 is 11, then the mean of the first three observations is', options: ['9', '11', '13', '15'], explanation: '(5x + 20) ÷ 5 = 11 ⇒ x = 7; first three are 7, 9, 11 with mean 9.' },
    ta: { q: 'x, x + 2, x + 4, x + 6, x + 8 என்ற தரவின் சராசரி 11 எனில் முதல் மூன்று தரவுகளின் கூட்டுச் சராசரி', options: ['9', '11', '13', '15'], explanation: '(5x + 20) ÷ 5 = 11 ⇒ x = 7; முதல் மூன்று 7, 9, 11; சராசரி 9.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 8.4 Q8, p. 288', answer: 0,
    en: { q: 'The mean of 5, 9, x, 17 and 21 is 13. The value of x is', options: ['13', '9', '17', '21'], explanation: '5 × 13 = 65; 5 + 9 + 17 + 21 = 52; x = 65 − 52 = 13.' },
    ta: { q: '5, 9, x, 17, 21 இன் சராசரி 13 எனில் x இன் மதிப்பு', options: ['13', '9', '17', '21'], explanation: '5 × 13 = 65; 5 + 9 + 17 + 21 = 52; x = 65 − 52 = 13.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 8.4 Q10, p. 288', answer: 0,
    en: { q: 'The mean of a set of numbers is X̄. If each number is multiplied by z, the mean is', options: ['zX̄', 'X̄ + z', 'X̄ − z', 'X̄ ÷ z'], explanation: 'Multiplying every value by z multiplies the mean by z.' },
    ta: { q: 'ஓர் எண் தொகுப்பின் சராசரி X̄. ஒவ்வொரு மதிப்பும் z என்ற எண்ணால் பெருக்கப்படும்போது அதன் சராசரி', options: ['zX̄', 'X̄ + z', 'X̄ − z', 'X̄ ÷ z'], explanation: 'ஒவ்வொரு மதிப்பையும் z ஆல் பெருக்கினால் சராசரியும் z ஆல் பெருகும்.' },
  },
  {
    difficulty: 'medium', source: '§8.5, p. 278', answer: 0,
    en: { q: 'Incomes in an office are ₹5000, ₹6000, ₹7000, ₹8000 and ₹29000. The mean is ₹11000. Why is the mean misleading here?', options: ['The extreme value ₹29000 pulls the mean away from the central values', 'The mean is always smaller than the median', 'The number of incomes is odd', 'The incomes are not whole numbers'], explanation: 'An extreme score affects the mean; the median (₹7000) is a better average here.' },
    ta: { q: 'ஓர் அலுவலகத்தில் வருமானங்கள் ₹5000, ₹6000, ₹7000, ₹8000, ₹29000; சராசரி ₹11000. இங்கு சராசரி ஏன் தவறான எண்ணத்தைத் தருகிறது?', options: ['மிக அதிக மதிப்பான ₹29000 சராசரியை நடு மதிப்புகளிலிருந்து விலக்கி இழுக்கிறது', 'சராசரி எப்போதும் இடைநிலை அளவைவிடக் குறைவு', 'வருமானங்களின் எண்ணிக்கை ஒற்றை எண்', 'வருமானங்கள் முழு எண்கள் அல்ல'], explanation: 'மிகை மதிப்பு சராசரியைப் பாதிக்கும்; இங்கு இடைநிலை அளவு (₹7000) சிறந்த சராசரி.' },
  },
  {
    difficulty: 'medium', source: 'Book example 8.8, p. 279', answer: 0,
    en: { q: 'The scores of 11 players are 7, 21, 45, 12, 56, 35, 25, 0, 58, 66, 29. The median score is', options: ['29', '35', '25', '32'], explanation: 'Ordered: 0, 7, 12, 21, 25, 29, 35, 45, 56, 58, 66; the 6th value is 29.' },
    ta: { q: '11 வீரர்கள் எடுத்த ஓட்டங்கள் 7, 21, 45, 12, 56, 35, 25, 0, 58, 66, 29 எனில் இடைநிலை அளவு', options: ['29', '35', '25', '32'], explanation: 'வரிசைப்படுத்த: 0, 7, 12, 21, 25, 29, 35, 45, 56, 58, 66; 6 ஆவது மதிப்பு 29.' },
  },
  {
    difficulty: 'medium', source: 'Book example 8.9, p. 280', answer: 0,
    en: { q: 'The median of 10, 17, 16, 21, 13, 18, 12, 10, 19, 22 is', options: ['16.5', '16', '17', '15.8'], explanation: 'Ordered: 10, 10, 12, 13, 16, 17, 18, 19, 21, 22; median = (16 + 17) ÷ 2 = 16.5.' },
    ta: { q: '10, 17, 16, 21, 13, 18, 12, 10, 19, 22 இன் இடைநிலை அளவு', options: ['16.5', '16', '17', '15.8'], explanation: 'வரிசைப்படுத்த: 10, 10, 12, 13, 16, 17, 18, 19, 21, 22; இடைநிலை அளவு = (16 + 17) ÷ 2 = 16.5.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 8.2 Q1, p. 283', answer: 0,
    en: { q: 'The median of 47, 53, 62, 71, 83, 21, 43, 47, 41 is', options: ['47', '83', '53', '43'], explanation: 'Ordered: 21, 41, 43, 47, 47, 53, 62, 71, 83; the 5th value is 47.' },
    ta: { q: '47, 53, 62, 71, 83, 21, 43, 47, 41 இன் இடைநிலை அளவு', options: ['47', '83', '53', '43'], explanation: 'வரிசைப்படுத்த: 21, 41, 43, 47, 47, 53, 62, 71, 83; 5 ஆவது மதிப்பு 47.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 8.2 Q2, p. 283', answer: 0,
    en: { q: 'The median of 36, 44, 86, 31, 37, 44, 86, 35, 60, 51 is', options: ['44', '37', '47.5', '40.5'], explanation: 'Ordered: 31, 35, 36, 37, 44, 44, 51, 60, 86, 86; median = (44 + 44) ÷ 2 = 44.' },
    ta: { q: '36, 44, 86, 31, 37, 44, 86, 35, 60, 51 இன் இடைநிலை அளவு', options: ['44', '37', '47.5', '40.5'], explanation: 'வரிசைப்படுத்த: 31, 35, 36, 37, 44, 44, 51, 60, 86, 86; இடைநிலை அளவு = (44 + 44) ÷ 2 = 44.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 8.2 Q4, p. 284', answer: 0,
    en: { q: 'The times (seconds) taken by 13 mice to find food are 31, 33, 63, 33, 28, 29, 33, 27, 27, 34, 35, 28, 32. The median time is', options: ['32 s', '33 s', '31 s', '34.8 s'], explanation: 'Ordered: 27, 27, 28, 28, 29, 31, 32, 33, 33, 33, 34, 35, 63; the 7th value is 32 s.' },
    ta: { q: '13 எலிகள் உணவு தேட எடுத்துக்கொண்ட நேரம் (வினாடிகள்) 31, 33, 63, 33, 28, 29, 33, 27, 27, 34, 35, 28, 32 எனில் இடைநிலை அளவு', options: ['32 வினாடி', '33 வினாடி', '31 வினாடி', '34.8 வினாடி'], explanation: 'வரிசைப்படுத்த: 27, 27, 28, 28, 29, 31, 32, 33, 33, 33, 34, 35, 63; 7 ஆவது மதிப்பு 32.' },
  },
  {
    difficulty: 'medium', source: 'Book example 8.10, p. 280', answer: 0,
    en: { q: 'Twelve students have median mark 47 in Mathematics and 42 in Science. Which statement is correct?', options: ['The level of achievement is higher in Mathematics', 'The level of achievement is higher in Science', 'The achievement is equal in both subjects', 'Medians cannot be used to compare the subjects'], explanation: 'The median mark in Mathematics (47) is greater than in Science (42), so achievement is higher in Mathematics.' },
    ta: { q: '12 மாணவர்களின் இடைநிலை மதிப்பெண் கணிதத்தில் 47, அறிவியலில் 42. எது சரியான கூற்று?', options: ['கணிதத்தில் அடைவு நிலை அதிகம்', 'அறிவியலில் அடைவு நிலை அதிகம்', 'இரு பாடங்களிலும் அடைவு நிலை சமம்', 'இடைநிலை அளவைக் கொண்டு பாடங்களை ஒப்பிட இயலாது'], explanation: 'கணிதத்தின் இடைநிலை மதிப்பெண் (47) அறிவியலை (42) விட அதிகம்; எனவே கணிதத்தில் அடைவு நிலை அதிகம்.' },
  },
  {
    difficulty: 'medium', source: 'Book example 8.11, p. 281', answer: 0,
    en: { q: 'Heights (cm) and numbers of students: 150 – 8, 152 – 4, 154 – 3, 155 – 7, 156 – 3, 160 – 12, 161 – 4 (N = 41). The median height is', options: ['155 cm', '154 cm', '156 cm', '160 cm'], explanation: 'Median = 21st value. Cumulative frequencies 8, 12, 15, 22, … – the 21st student falls in 155 cm.' },
    ta: { q: 'உயரம் (செமீ), மாணவர் எண்ணிக்கை: 150 – 8, 152 – 4, 154 – 3, 155 – 7, 156 – 3, 160 – 12, 161 – 4 (N = 41). இடைநிலை அளவு', options: ['155 செமீ', '154 செமீ', '156 செமீ', '160 செமீ'], explanation: 'இடைநிலை அளவு = 21 ஆவது மதிப்பு. குவிவு நிகழ்வெண்கள் 8, 12, 15, 22, … – 21 ஆவது மாணவர் 155 செமீ இல் உள்ளார்.' },
  },
  {
    difficulty: 'medium', source: '§8.5.2 Progress Check, p. 282', answer: 0,
    en: { q: 'The median of the first four whole numbers is', options: ['1.5', '2', '2.5', '1'], explanation: 'The first four whole numbers are 0, 1, 2, 3; median = (1 + 2) ÷ 2 = 1.5. (Including 4 makes the median 2.)' },
    ta: { q: 'முதல் நான்கு முழு எண்களின் இடைநிலை அளவு', options: ['1.5', '2', '2.5', '1'], explanation: 'முதல் நான்கு முழு எண்கள் 0, 1, 2, 3; இடைநிலை அளவு = (1 + 2) ÷ 2 = 1.5. (4 ஐயும் சேர்த்தால் இடைநிலை அளவு 2.)' },
  },
  {
    difficulty: 'medium', source: 'Book example 8.15, p. 285', answer: 0,
    en: { q: 'The mode(s) of 17, 18, 20, 20, 21, 21, 22, 22 is/are', options: ['20, 21 and 22 (trimodal)', '20 only', '22 only', '21 only'], explanation: '20, 21 and 22 each occur twice, so the data have three modes.' },
    ta: { q: '17, 18, 20, 20, 21, 21, 22, 22 இன் முகடு(கள்)', options: ['20, 21, 22 (மும்முகடு)', '20 மட்டும்', '22 மட்டும்', '21 மட்டும்'], explanation: '20, 21, 22 ஒவ்வொன்றும் இருமுறை வருகின்றன; எனவே மூன்று முகடுகள்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 8.3 Q2, p. 287', answer: 0,
    en: { q: 'The mode of 3.1, 3.2, 3.3, 2.1, 1.3, 3.3, 3.1 is', options: ['3.1 and 3.3 (bimodal)', '3.3 only', '3.1 only', '3.2'], explanation: '3.1 and 3.3 both occur twice, so the data are bimodal.' },
    ta: { q: '3.1, 3.2, 3.3, 2.1, 1.3, 3.3, 3.1 இன் முகடு', options: ['3.1, 3.3 (இருமுகடு)', '3.3 மட்டும்', '3.1 மட்டும்', '3.2'], explanation: '3.1, 3.3 இரண்டும் இருமுறை வருவதால் தரவு இருமுகடு உடையது.' },
  },
  {
    difficulty: 'medium', source: '§8.6.3 Note, p. 286', answer: 0,
    en: { q: 'To convert the discontinuous class 6 – 10 into a continuous class, it becomes', options: ['5.5 – 10.5', '6.5 – 10.5', '5 – 11', '6 – 10.5'], explanation: 'Subtract 0.5 from the lower limit and add 0.5 to the upper limit.' },
    ta: { q: 'தொடர்ச்சியில்லாத 6 – 10 என்ற பிரிவு இடைவெளியைத் தொடர்ச்சியானதாக மாற்றினால் கிடைப்பது', options: ['5.5 – 10.5', '6.5 – 10.5', '5 – 11', '6 – 10.5'], explanation: 'கீழ் எல்லையிலிருந்து 0.5 ஐக் கழித்து, மேல் எல்லையுடன் 0.5 ஐக் கூட்ட வேண்டும்.' },
  },
  {
    difficulty: 'medium', source: '§8.6.4, p. 286', answer: 0,
    en: { q: 'For a nearly symmetrical distribution, the empirical relation between mean, median and mode is', options: ['Mode = 3 Median − 2 Mean', 'Mode = 2 Median − 3 Mean', 'Mean = 3 Median − 2 Mode', 'Median = 3 Mode − 2 Mean'], explanation: 'The book states Mode ≈ 3 Median − 2 Mean.' },
    ta: { q: 'நிகழ்வெண்கள் சீராகப் பரவியிருக்கும்போது சராசரி, இடைநிலை அளவு, முகடு இடையேயான தொடர்பு', options: ['முகடு = 3 இடைநிலை அளவு − 2 சராசரி', 'முகடு = 2 இடைநிலை அளவு − 3 சராசரி', 'சராசரி = 3 இடைநிலை அளவு − 2 முகடு', 'இடைநிலை அளவு = 3 முகடு − 2 சராசரி'], explanation: 'முகடு ≈ 3 இடைநிலை அளவு − 2 சராசரி.' },
  },
  {
    difficulty: 'medium', source: 'Book example 8.18, p. 287', answer: 0,
    en: { q: 'In a distribution, the mean and mode are 66 and 60. The median is', options: ['64', '63', '62', '72'], explanation: '60 = 3 Median − 2(66) ⇒ 3 Median = 192 ⇒ Median = 64.' },
    ta: { q: 'ஒரு பரவலின் சராசரி, முகடு முறையே 66, 60 எனில் இடைநிலை அளவு', options: ['64', '63', '62', '72'], explanation: '60 = 3 இடைநிலை அளவு − 2(66) ⇒ 3 இடைநிலை அளவு = 192 ⇒ இடைநிலை அளவு = 64.' },
  },
  {
    difficulty: 'medium', source: '§8.4.3 Note, p. 275', answer: 0,
    en: { q: 'When the values xᵢ and frequencies fᵢ are small, the most appropriate method to find the mean of grouped data is the', options: ['direct method', 'step deviation method', 'assumed mean method', 'median formula'], explanation: 'Direct method suits small xᵢ, fᵢ; for large numbers use the assumed mean or step deviation method.' },
    ta: { q: 'xᵢ, fᵢ சிறிய எண்களாக இருக்கும்போது தொகுக்கப்பட்ட தரவின் சராசரி காண ஏற்ற முறை', options: ['நேரடி முறை', 'படிவிலக்க முறை', 'ஊகச் சராசரி முறை', 'இடைநிலை அளவு சூத்திரம்'], explanation: 'xᵢ, fᵢ சிறியவை எனில் நேரடி முறை; பெரியவை எனில் ஊகச் சராசரி அல்லது படிவிலக்க முறை.' },
  },

  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise 8.1 Q5, p. 278', answer: 0,
    en: { q: 'Marks 10, 15, 20, 25, 30 have frequencies 6, 8, p, 10, 6. If the mean is 20.2, the value of p is', options: ['20', '10', '15', '25'], explanation: '(610 + 20p) ÷ (30 + p) = 20.2 ⇒ 610 + 20p = 606 + 20.2p ⇒ 0.2p = 4 ⇒ p = 20.' },
    ta: { q: 'மதிப்பெண்கள் 10, 15, 20, 25, 30 இன் நிகழ்வெண்கள் 6, 8, p, 10, 6. சராசரி 20.2 எனில் p இன் மதிப்பு', options: ['20', '10', '15', '25'], explanation: '(610 + 20p) ÷ (30 + p) = 20.2 ⇒ 610 + 20p = 606 + 20.2p ⇒ 0.2p = 4 ⇒ p = 20.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 8.1 Q6, p. 278', answer: 0,
    en: { q: 'Weights (kg) 15–25, 25–35, 35–45, 45–55, 55–65, 65–75 have 4, 11, 19, 14, 0, 2 students. By the direct method, the mean weight is', options: ['40.2 kg', '40 kg', '41.2 kg', '33.5 kg'], explanation: 'Mid values 20, 30, …, 70; Σfx = 2010, Σf = 50; mean = 2010 ÷ 50 = 40.2 kg.' },
    ta: { q: 'எடை (கி.கி) 15–25, 25–35, 35–45, 45–55, 55–65, 65–75 இல் மாணவர் எண்ணிக்கை 4, 11, 19, 14, 0, 2. நேரடி முறையில் சராசரி எடை', options: ['40.2 கி.கி', '40 கி.கி', '41.2 கி.கி', '33.5 கி.கி'], explanation: 'நடுப்புள்ளிகள் 20, 30, …, 70; Σfx = 2010, Σf = 50; சராசரி = 2010 ÷ 50 = 40.2 கி.கி.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 8.1 Q7, p. 278', answer: 0,
    en: { q: 'Classes 0–10, 10–20, 20–30, 30–40, 40–50 have frequencies 5, 7, 15, 28, 8. By the assumed mean method, the mean is about', options: ['29.29', '30', '36.9', '25'], explanation: 'With A = 25: Σfd = −100 − 70 + 0 + 280 + 160 = 270, Σf = 63; mean = 25 + 270 ÷ 63 ≈ 29.29.' },
    ta: { q: 'பிரிவு இடைவெளிகள் 0–10, 10–20, 20–30, 30–40, 40–50 இன் நிகழ்வெண்கள் 5, 7, 15, 28, 8. ஊகச் சராசரி முறையில் சராசரி ஏறக்குறைய', options: ['29.29', '30', '36.9', '25'], explanation: 'A = 25: Σfd = −100 − 70 + 0 + 280 + 160 = 270, Σf = 63; சராசரி = 25 + 270 ÷ 63 ≈ 29.29.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 8.1 Q8, p. 278', answer: 0,
    en: { q: 'Ages 15–19, 20–24, 25–29, 30–34, 35–39, 40–44 have 4, 20, 38, 24, 10, 9 persons. By the step deviation method, the mean age is about', options: ['29.05', '27.00', '30.50', '31.25'], explanation: 'Mid values 17, 22, …, 42; A = 27, c = 5: Σfd = −8 − 20 + 0 + 24 + 20 + 27 = 43; mean = 27 + (43 ÷ 105) × 5 ≈ 29.05.' },
    ta: { q: 'வயது 15–19, 20–24, 25–29, 30–34, 35–39, 40–44 இல் ஆட்களின் எண்ணிக்கை 4, 20, 38, 24, 10, 9. படிவிலக்க முறையில் சராசரி ஏறக்குறைய', options: ['29.05', '27.00', '30.50', '31.25'], explanation: 'நடுப்புள்ளிகள் 17, 22, …, 42; A = 27, c = 5: Σfd = −8 − 20 + 0 + 24 + 20 + 27 = 43; சராசரி = 27 + (43 ÷ 105) × 5 ≈ 29.05.' },
  },
  {
    difficulty: 'hard', source: 'Book example 8.1, p. 273', answer: 0,
    en: { q: 'Ages 0–10, 10–20, 20–30, 30–40, 40–50, 50–60 have 2, 6, 9, 7, 4, 2 residents. The average age is', options: ['28.67', '25', '30', '143.33'], explanation: 'Mid values 5, 15, …, 55; Σfx = 860, Σf = 30; mean = 860 ÷ 30 ≈ 28.67.' },
    ta: { q: 'வயது 0–10, 10–20, 20–30, 30–40, 40–50, 50–60 இல் குடியிருப்பாளர்கள் 2, 6, 9, 7, 4, 2. சராசரி வயது', options: ['28.67', '25', '30', '143.33'], explanation: 'நடுப்புள்ளிகள் 5, 15, …, 55; Σfx = 860, Σf = 30; சராசரி = 860 ÷ 30 ≈ 28.67.' },
  },
  {
    difficulty: 'hard', source: 'Book example 8.2, p. 274', answer: 0,
    en: { q: 'Classes 100–120, 120–140, …, 220–240 have frequencies 10, 8, 4, 4, 3, 1, 2. Taking A = 170, Σfd = −780 and Σf = 32. The mean is', options: ['145.625', '194.375', '146.25', '170'], explanation: 'X̄ = A + Σfd ÷ Σf = 170 − 780 ÷ 32 = 170 − 24.375 = 145.625.' },
    ta: { q: 'பிரிவுகள் 100–120, 120–140, …, 220–240 இன் நிகழ்வெண்கள் 10, 8, 4, 4, 3, 1, 2. A = 170 எனக் கொண்டால் Σfd = −780, Σf = 32. சராசரி', options: ['145.625', '194.375', '146.25', '170'], explanation: 'X̄ = A + Σfd ÷ Σf = 170 − 780 ÷ 32 = 170 − 24.375 = 145.625.' },
  },
  {
    difficulty: 'hard', source: 'Book example 8.3, p. 275', answer: 0,
    en: { q: 'Classes 0–8, 8–16, 16–24, 24–32, 32–40, 40–48 have frequencies 10, 20, 14, 16, 18, 22. Using A = 28 and c = 8 (step deviation), Σfd = −22. The mean is', options: ['26.24', '29.76', '27.78', '28'], explanation: 'X̄ = 28 + (−22 ÷ 100) × 8 = 28 − 1.76 = 26.24.' },
    ta: { q: 'பிரிவுகள் 0–8, 8–16, 16–24, 24–32, 32–40, 40–48 இன் நிகழ்வெண்கள் 10, 20, 14, 16, 18, 22. A = 28, c = 8 (படிவிலக்க முறை) எனில் Σfd = −22. சராசரி', options: ['26.24', '29.76', '27.78', '28'], explanation: 'X̄ = 28 + (−22 ÷ 100) × 8 = 28 − 1.76 = 26.24.' },
  },
  {
    difficulty: 'hard', source: 'Book example 8.7, p. 277', answer: 0,
    en: { q: 'The average mark of 25 students was 78.4. Later a score of 96 was found misread as 69. The correct mean is', options: ['79.48', '77.32', '78.4', '79.08'], explanation: 'Incorrect total = 1960; correct total = 1960 − 69 + 96 = 1987; mean = 1987 ÷ 25 = 79.48.' },
    ta: { q: '25 மாணவர்களின் சராசரி மதிப்பெண் 78.4. பின்னர் 96 என்ற மதிப்பெண் 69 எனத் தவறாக எடுக்கப்பட்டது கண்டறியப்பட்டது. சரியான சராசரி', options: ['79.48', '77.32', '78.4', '79.08'], explanation: 'தவறான கூடுதல் = 1960; சரியான கூடுதல் = 1960 − 69 + 96 = 1987; சராசரி = 1987 ÷ 25 = 79.48.' },
  },
  {
    difficulty: 'hard', source: '§8.4.4 Progress Check, p. 277', answer: 0,
    en: { q: 'There are four numbers. Leaving out any one, the averages of the remaining three are 45, 60, 65 and 70. The average of all four numbers is', options: ['60', '80', '240', '45'], explanation: 'Sums of threes: 135, 180, 195, 210 = 720; each number counted 3 times, so total = 240 and average = 60.' },
    ta: { q: 'நான்கு எண்கள் உள்ளன. ஏதேனும் ஒன்றை விட்டால் மீதி மூன்றின் சராசரிகள் 45, 60, 65, 70. நான்கு எண்களின் சராசரி', options: ['60', '80', '240', '45'], explanation: 'மூன்றின் கூடுதல்கள்: 135, 180, 195, 210 = 720; ஒவ்வோர் எண்ணும் 3 முறை கணக்கிடப்படுவதால் மொத்தம் 240, சராசரி 60.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 8.4 Q4, p. 288', answer: 0,
    en: { q: 'For which set of numbers do the mean, median and mode all have the same value?', options: ['1, 3, 3, 3, 5', '2, 2, 2, 4', '1, 1, 2, 5, 6', '1, 1, 2, 1, 5'], explanation: 'For 1, 3, 3, 3, 5: mean = 15 ÷ 5 = 3, median = 3, mode = 3.' },
    ta: { q: 'பின்வரும் எண் தொகுதிகளில் சராசரி, இடைநிலை அளவு, முகடு ஒரே மதிப்பாக அமையும் தொகுதி எது?', options: ['1, 3, 3, 3, 5', '2, 2, 2, 4', '1, 1, 2, 5, 6', '1, 1, 2, 1, 5'], explanation: '1, 3, 3, 3, 5 க்கு: சராசரி = 15 ÷ 5 = 3, இடைநிலை அளவு = 3, முகடு = 3.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 8.4 Q6, p. 288', answer: 0,
    en: { q: 'The mean of a, b, c, d and e is 28. If the mean of a, c and e is 24, then the mean of b and d is', options: ['34', '24', '36', '26'], explanation: 'a + b + c + d + e = 140; a + c + e = 72; b + d = 68, mean = 34.' },
    ta: { q: 'a, b, c, d, e இன் சராசரி 28. a, c, e இன் சராசரி 24 எனில் b, d இன் சராசரி', options: ['34', '24', '36', '26'], explanation: 'a + b + c + d + e = 140; a + c + e = 72; b + d = 68, சராசரி = 34.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 8.4 Q9, p. 288', answer: 0,
    en: { q: 'The mean of the squares of the first 11 natural numbers is', options: ['46', '26', '48', '52'], explanation: '1² + 2² + … + 11² = 11 × 12 × 23 ÷ 6 = 506; mean = 506 ÷ 11 = 46.' },
    ta: { q: 'முதல் 11 இயல் எண்களின் வர்க்கங்களின் சராசரி', options: ['46', '26', '48', '52'], explanation: '1² + 2² + … + 11² = 11 × 12 × 23 ÷ 6 = 506; சராசரி = 506 ÷ 11 = 46.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 8.2 Q3, p. 284', answer: 0,
    en: { q: 'The median of 11, 12, 14, 18, x + 2, x + 4, 30, 32, 35, 41 (in ascending order) is 24. The value of x is', options: ['21', '24', '22', '20'], explanation: 'Median = [(x + 2) + (x + 4)] ÷ 2 = x + 3 = 24 ⇒ x = 21.' },
    ta: { q: 'ஏறு வரிசையில் அமைந்த 11, 12, 14, 18, x + 2, x + 4, 30, 32, 35, 41 இன் இடைநிலை அளவு 24 எனில் x இன் மதிப்பு', options: ['21', '24', '22', '20'], explanation: 'இடைநிலை அளவு = [(x + 2) + (x + 4)] ÷ 2 = x + 3 = 24 ⇒ x = 21.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 8.2 Q5, p. 284', answer: 0,
    en: { q: 'Marks 0–10, 10–20, 20–30, 30–40, 40–50, 50–60 have 2, 7, 15, 10, 11, 5 students. The median is', options: ['31', '30', '35', '32.5'], explanation: 'N = 50, N ÷ 2 = 25; cf up to 20–30 is 24, so median class 30–40: 30 + (25 − 24) ÷ 10 × 10 = 31.' },
    ta: { q: 'மதிப்பெண்கள் 0–10, 10–20, 20–30, 30–40, 40–50, 50–60 இல் மாணவர்கள் 2, 7, 15, 10, 11, 5. இடைநிலை அளவு', options: ['31', '30', '35', '32.5'], explanation: 'N = 50, N ÷ 2 = 25; 20–30 வரை குவிவு நிகழ்வெண் 24; இடைநிலை அளவு பிரிவு 30–40: 30 + (25 − 24) ÷ 10 × 10 = 31.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 8.2 Q6, p. 284', answer: 0,
    en: { q: 'The mean of five positive integers is twice their median. Four of them are 3, 4, 6, 9 and the median is 6. The fifth integer is', options: ['38', '12', '30', '60'], explanation: 'Mean = 2 × 6 = 12, total = 60; fifth = 60 − (3 + 4 + 6 + 9) = 38.' },
    ta: { q: 'ஐந்து மிகை முழுக்களின் சராசரி அவற்றின் இடைநிலை அளவின் இருமடங்கு. அவற்றில் நான்கு 3, 4, 6, 9; இடைநிலை அளவு 6 எனில் ஐந்தாவது எண்', options: ['38', '12', '30', '60'], explanation: 'சராசரி = 2 × 6 = 12, கூடுதல் = 60; ஐந்தாவது = 60 − (3 + 4 + 6 + 9) = 38.' },
  },
  {
    difficulty: 'hard', source: 'Book example 8.12, p. 282', answer: 0,
    en: { q: 'Weekly expenditure (₹) 0–1000, 1000–2000, 2000–3000, 3000–4000, 4000–5000 of 200 families: 28, 46, 54, 42, 30. The median expenditure is', options: ['₹2481.5', '₹2518.5', '₹2500', '₹2000'], explanation: 'N ÷ 2 = 100, median class 2000–3000, m = 74, f = 54: 2000 + (100 − 74) ÷ 54 × 1000 ≈ ₹2481.5.' },
    ta: { q: '200 குடும்பங்களின் வாராந்திரச் செலவு (₹) 0–1000, 1000–2000, 2000–3000, 3000–4000, 4000–5000: 28, 46, 54, 42, 30. இடைநிலை அளவு', options: ['₹2481.5', '₹2518.5', '₹2500', '₹2000'], explanation: 'N ÷ 2 = 100, இடைநிலை அளவு பிரிவு 2000–3000, m = 74, f = 54: 2000 + (100 − 74) ÷ 54 × 1000 ≈ ₹2481.5.' },
  },
  {
    difficulty: 'hard', source: 'Book example 8.13, p. 283', answer: 0,
    en: { q: 'Classes 0–10, 10–20, 20–30, 30–40, 40–50 have frequencies 6, 24, x, 16, 9. The median is 24. The value of x is', options: ['25', '20', '24', '30'], explanation: 'Median class 20–30: 24 = 20 + [(55 + x) ÷ 2 − 30] ÷ x × 10 ⇒ 4x = 5x − 25 ⇒ x = 25.' },
    ta: { q: 'பிரிவுகள் 0–10, 10–20, 20–30, 30–40, 40–50 இன் நிகழ்வெண்கள் 6, 24, x, 16, 9; இடைநிலை அளவு 24 எனில் x இன் மதிப்பு', options: ['25', '20', '24', '30'], explanation: 'இடைநிலை அளவு பிரிவு 20–30: 24 = 20 + [(55 + x) ÷ 2 − 30] ÷ x × 10 ⇒ 4x = 5x − 25 ⇒ x = 25.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 8.3 Q1, p. 287', answer: 0,
    en: { q: 'Monthly salaries of 10 employees: ₹5000, ₹7000, ₹5000, ₹7000, ₹8000, ₹7000, ₹7000, ₹8000, ₹7000, ₹5000. The mean, median and mode are', options: ['₹6600, ₹7000, ₹7000', '₹7000, ₹6600, ₹7000', '₹6600, ₹7000, ₹5000', '₹6000, ₹7000, ₹7000'], explanation: 'Mean = 66000 ÷ 10 = ₹6600; ordered 5th and 6th values are both 7000 so median = ₹7000; 7000 occurs 5 times so mode = ₹7000.' },
    ta: { q: '10 தொழிலாளர்களின் மாத வருமானங்கள் ₹5000, ₹7000, ₹5000, ₹7000, ₹8000, ₹7000, ₹7000, ₹8000, ₹7000, ₹5000. சராசரி, இடைநிலை அளவு, முகடு முறையே', options: ['₹6600, ₹7000, ₹7000', '₹7000, ₹6600, ₹7000', '₹6600, ₹7000, ₹5000', '₹6000, ₹7000, ₹7000'], explanation: 'சராசரி = 66000 ÷ 10 = ₹6600; வரிசைப்படுத்திய 5, 6 ஆவது மதிப்புகள் 7000 என்பதால் இடைநிலை அளவு ₹7000; 7000 ஐந்து முறை வருவதால் முகடு ₹7000.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 8.3 Q3, p. 287', answer: 0,
    en: { q: 'For the data 11, 15, 17, x + 1, 19, x − 2, 3, the mean is 14. The value of x is', options: ['17', '15', '14', '19'], explanation: 'Sum = 64 + 2x = 7 × 14 = 98 ⇒ x = 17.' },
    ta: { q: '11, 15, 17, x + 1, 19, x − 2, 3 என்ற தரவுகளின் சராசரி 14 எனில் x இன் மதிப்பு', options: ['17', '15', '14', '19'], explanation: 'கூடுதல் = 64 + 2x = 7 × 14 = 98 ⇒ x = 17.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 8.3 Q3, p. 287', answer: 0,
    en: { q: 'For the data 11, 15, 17, x + 1, 19, x − 2, 3 with mean 14, the mode of the data is', options: ['15', '17', '18', '11'], explanation: 'x = 17 gives the data 11, 15, 17, 18, 19, 15, 3; 15 occurs twice, so the mode is 15.' },
    ta: { q: '11, 15, 17, x + 1, 19, x − 2, 3 என்ற தரவுகளின் சராசரி 14 எனில் தரவுகளின் முகடு', options: ['15', '17', '18', '11'], explanation: 'x = 17 எனில் தரவுகள் 11, 15, 17, 18, 19, 15, 3; 15 இருமுறை வருவதால் முகடு 15.' },
  },
  {
    difficulty: 'hard', source: 'Book example 8.17, p. 286', answer: 0,
    en: { q: 'Marks 1–5, 6–10, 11–15, 16–20, 21–25 have 7, 10, 16, 32, 24 students. The mode is about', options: ['18.83', '19.33', '17.5', '20.5'], explanation: 'Modal class 15.5–20.5, f = 32, f₁ = 16, f₂ = 24, c = 5: 15.5 + (16 ÷ 24) × 5 ≈ 18.83.' },
    ta: { q: 'மதிப்பெண்கள் 1–5, 6–10, 11–15, 16–20, 21–25 இல் மாணவர்கள் 7, 10, 16, 32, 24. முகடு ஏறக்குறைய', options: ['18.83', '19.33', '17.5', '20.5'], explanation: 'முகட்டுப் பிரிவு 15.5–20.5, f = 32, f₁ = 16, f₂ = 24, c = 5: 15.5 + (16 ÷ 24) × 5 ≈ 18.83.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 8.3 Q5, p. 287', answer: 0,
    en: { q: 'Marks 0–10, 10–20, 20–30, 30–40, 40–50 have 22, 38, 46, 34, 20 students. The mode is', options: ['24', '25', '26', '20'], explanation: 'Modal class 20–30, f = 46, f₁ = 38, f₂ = 34: 20 + 8 ÷ (92 − 72) × 10 = 24.' },
    ta: { q: 'மதிப்பெண் 0–10, 10–20, 20–30, 30–40, 40–50 இல் மாணவர்கள் 22, 38, 46, 34, 20. முகடு', options: ['24', '25', '26', '20'], explanation: 'முகட்டுப் பிரிவு 20–30, f = 46, f₁ = 38, f₂ = 34: 20 + 8 ÷ (92 − 72) × 10 = 24.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 8.3 Q6, p. 287', answer: 0,
    en: { q: 'Weights (kg) 25–34, 35–44, 45–54, 55–64, 65–74, 75–84 have 4, 8, 10, 14, 8, 6 students. The mode is', options: ['58.5 kg', '59 kg', '54.5 kg', '60.5 kg'], explanation: 'Continuous modal class 54.5–64.5, f = 14, f₁ = 10, f₂ = 8, c = 10: 54.5 + 4 ÷ 10 × 10 = 58.5 kg.' },
    ta: { q: 'எடை (கி.கி) 25–34, 35–44, 45–54, 55–64, 65–74, 75–84 இல் மாணவர்கள் 4, 8, 10, 14, 8, 6. முகடு', options: ['58.5 கி.கி', '59 கி.கி', '54.5 கி.கி', '60.5 கி.கி'], explanation: 'தொடர்ச்சியான முகட்டுப் பிரிவு 54.5–64.5, f = 14, f₁ = 10, f₂ = 8, c = 10: 54.5 + 4 ÷ 10 × 10 = 58.5 கி.கி.' },
  },
  {
    difficulty: 'hard', source: '§8.5.2 Note, p. 283', answer: 0,
    en: { q: 'Assertion (A): The median is a good measure of average when the data include extremely high or low values.\nReason (R): Extreme values have little influence on the median.', options: AR_EN, explanation: 'The median depends only on position, so extreme values hardly change it; R explains A.' },
    ta: { q: 'கூற்று (A): தரவுகளில் மிக அதிக அல்லது மிகக் குறைந்த மதிப்புகள் இருக்கும்போது இடைநிலை அளவு சிறந்த சராசரி அளவாகும்.\nகாரணம் (R): மிகை மதிப்புகள் இடைநிலை அளவைச் சிறிதளவே பாதிக்கின்றன.', options: AR_TA, explanation: 'இடைநிலை அளவு நிலையை மட்டுமே சார்ந்தது; மிகை மதிப்புகள் அதை மாற்றுவதில்லை; R, A ஐ விளக்குகிறது.' },
  },
  {
    difficulty: 'hard', source: '§8.4.4, p. 275', answer: 3,
    en: { q: 'Assertion (A): The sum of the deviations of 21, 30, 22, 16, 24, 28, 18, 17 from 20 is zero.\nReason (R): The sum of the deviations of the entries from their arithmetic mean is always zero.', options: AR_EN, explanation: 'The mean is 22, not 20; the deviations from 20 add to 16, so A is false. R is the true property of the mean.' },
    ta: { q: 'கூற்று (A): 21, 30, 22, 16, 24, 28, 18, 17 க்கு 20 இலிருந்து விலக்கங்களின் கூடுதல் பூச்சியம்.\nகாரணம் (R): கூட்டுச் சராசரியிலிருந்து உறுப்புகளின் விலக்கங்களின் கூடுதல் எப்போதும் பூச்சியம்.', options: AR_TA, explanation: 'சராசரி 22, 20 அல்ல; 20 இலிருந்து விலக்கங்களின் கூடுதல் 16; எனவே A தவறு. R சராசரியின் சரியான பண்பு.' },
  },
  {
    difficulty: 'hard', source: '§8.4.4, p. 275', answer: 1,
    en: { q: 'Assertion (A): If each observation is multiplied by 6, the arithmetic mean is also multiplied by 6.\nReason (R): If each observation is increased by k, the arithmetic mean is also increased by k.', options: AR_EN, explanation: 'Both are true properties of the mean, but R is about adding a constant, so it does not explain A (multiplying).' },
    ta: { q: 'கூற்று (A): ஒவ்வொரு மதிப்பும் 6 ஆல் பெருக்கப்பட்டால் கூட்டுச் சராசரியும் 6 ஆல் பெருகும்.\nகாரணம் (R): ஒவ்வொரு மதிப்புடனும் k கூட்டப்பட்டால் கூட்டுச் சராசரியும் k கூடும்.', options: AR_TA, explanation: 'இரண்டும் சராசரியின் சரியான பண்புகள்; ஆனால் R மாறிலியைக் கூட்டுவது பற்றியது, A பெருக்குவது பற்றியது; எனவே R, A ஐ விளக்கவில்லை.' },
  },
  {
    difficulty: 'hard', source: '§8.4–8.6, p. 272–286', answer: 0,
    en: { q: 'Which of these statements are correct?\n(i) The median is a positional average.\n(ii) Mode ≈ 3 Median − 2 Mean.\n(iii) Mid value of a class = (UCL − LCL) ÷ 2.\n(iv) A distribution with two modes is bimodal.', options: ['(i), (ii) and (iv) only', '(i), (ii) and (iii) only', '(ii) and (iii) only', '(i) and (iv) only'], explanation: 'Mid value = (UCL + LCL) ÷ 2; UCL − LCL is the class size. So (iii) is wrong and the rest are correct.' },
    ta: { q: 'பின்வருவனவற்றுள் சரியான கூற்றுகள் எவை?\n(i) இடைநிலை அளவு ஒரு நிலைச் சராசரி.\n(ii) முகடு ≈ 3 இடைநிலை அளவு − 2 சராசரி.\n(iii) பிரிவின் நடுப்புள்ளி = (UCL − LCL) ÷ 2.\n(iv) இரண்டு முகடுகள் உள்ள பரவல் இருமுகடு உடையது.', options: ['(i), (ii), (iv) மட்டும்', '(i), (ii), (iii) மட்டும்', '(ii), (iii) மட்டும்', '(i), (iv) மட்டும்'], explanation: 'நடுப்புள்ளி = (UCL + LCL) ÷ 2; UCL − LCL என்பது பிரிவு இடைவெளியின் அளவு. எனவே (iii) தவறு; மற்றவை சரி.' },
  },
];
