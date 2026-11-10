// Tamil Nadu State Board, 9th Social Science, Unit 10 – History: Industrial Revolution (தொழிற்புரட்சி).
// Book exercise questions (multiple choice, correct statement, assertion–reason, match the following)
// plus our own questions so that every section is covered at three levels.
// source = section or exercise and printed page of the English-medium book.

import { BankQuestion, AR_EN, AR_TA } from './types';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.1, p. 139', answer: 0,
    en: { q: 'Who established the first steam boat service?', options: ['Robert Fulton', 'Arkwright', 'Samuel Crompton', 'James Watt'], explanation: 'Robert Fulton invented the steamboat Clermont in 1807 and established the steamboat service on the Hudson River.' },
    ta: { q: 'நீராவிப் படகுப் போக்குவரத்துச் சேவையை நிறுவியவர் யார்?', options: ['ராபர்ட் ஃபுல்டன்', 'ஆர்க்ரைட்', 'சாமுவேல் கிராம்ப்டன்', 'ஜேம்ஸ் வாட்'], explanation: 'ராபர்ட் ஃபுல்டன் 1807இல் கிளர்மோண்ட் என்ற நீராவிப் படகைக் கண்டுபிடித்து ஹட்சன் நதியில் நீராவிப் படகுச் சேவையை நிறுவினார்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.2, p. 139', answer: 0,
    en: { q: 'Why was Manchester considered ideal for textile production?', options: ['cool climate', 'availability of land', 'rich human resources', 'better living condition'], explanation: 'Manchester’s cool climate was ideal for textiles; it was also close to the port of Liverpool and the coalfields of Lancashire.' },
    ta: { q: 'மான்செஸ்டர் நகரம் ஏன் ஜவுளி உற்பத்திக்கு உகந்த இடமாகக் கருதப்பட்டது?', options: ['குளிர்ச்சியான தட்பவெப்ப நிலை', 'நிலம் கிடைக்கப் பெற்றமை', 'மிகுந்த மனித வளம்', 'நல்ல வாழ்க்கைச் சூழல்'], explanation: 'மான்செஸ்டரின் குளிர்ச்சியான காலநிலை ஜவுளி உற்பத்திக்கு உகந்தது; லிவர்பூல் துறைமுகம், லங்காஷையர் நிலக்கரிச் சுரங்கம் ஆகியவற்றுக்கு அருகிலும் அது இருந்தது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.3, p. 139', answer: 0,
    en: { q: 'Who invented the sewing machine?', options: ['Elias Howe', 'Eli Whitney', 'Samuel Crompton', 'Humphrey Davy'], explanation: 'In 1846 the American Elias Howe invented the sewing machine to stitch clothes.' },
    ta: { q: 'தையல் இயந்திரத்தைக் கண்டுபிடித்தவர் யார்?', options: ['எலியாஸ் ஹோவே', 'எலி விட்னி', 'சாமுவேல் கிராம்ப்டன்', 'ஹம்ப்ரி டேவி'], explanation: '1846இல் எலியாஸ் ஹோவே என்ற அமெரிக்கர் துணி தைக்கும் தையல் இயந்திரத்தைக் கண்டுபிடித்தார்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.4, p. 139', answer: 0,
    en: { q: 'Which family introduced the steam engine in France?', options: ['de Wendel', 'de Hindal', 'de Arman', 'de Renault'], explanation: 'The Francois de Wendel family brought British technology to Lorraine and introduced the steam engine in coal mining.' },
    ta: { q: 'நீராவி இயந்திரத்தைப் பிரான்சில் அறிமுகம் செய்த குடும்பம் எது?', options: ['டி வெண்டல்', 'டி ஹிண்டல்', 'டி ஆர்மன்', 'டி ரினால்ட்'], explanation: 'பிரான்கோஸ் டி வெண்டல் குடும்பம் பிரிட்டிஷ் தொழில்நுட்பத்தை லொரைனுக்குக் கொண்டுவந்து நிலக்கரிச் சுரங்கத்தில் நீராவி இயந்திரத்தை அறிமுகப்படுத்தியது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.5, p. 139', answer: 0,
    en: { q: 'Who called Slater the father of the American Industrial Revolution?', options: ['Andrew Jackson', 'F.D. Roosevelt', 'Winston Churchill', 'Woodrow Wilson'], explanation: 'U.S. President Andrew Jackson hailed Samuel Slater as “Father of the American Industrial Revolution”.' },
    ta: { q: 'சிலேட்டரை அமெரிக்கத் தொழிற்புரட்சியின் தந்தை என அழைத்தவர் யார்?', options: ['ஆண்ட்ரூ ஜாக்சன்', 'எஃப். டி. ரூஸ்வெல்ட்', 'வின்ஸ்டன் சர்ச்சில்', 'உட்ரோ வில்சன்'], explanation: 'அமெரிக்க அதிபர் ஆண்ட்ரூ ஜாக்சன், சாமுவேல் சிலேட்டரை அமெரிக்கத் தொழிற்புரட்சியின் தந்தை என்று புகழ்ந்தார்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.6, p. 139', answer: 0,
    en: { q: 'Which of the following is observed to commemorate the Haymarket Massacre?', options: ['Labour Day', 'Independence Day', 'Farmers Day', 'Martyrs Day'], explanation: 'To commemorate the Haymarket Affair (4 May 1886), 1 May is observed as Labour Day, May Day or International Workers’ Day.' },
    ta: { q: 'கீழ்க்காண்பனவற்றில் எது ஹே மார்க்கெட் நிகழ்ச்சியின் நினைவுநாளாகக் கடைபிடிக்கப்படுகிறது?', options: ['உழைப்பாளர் தினம்', 'சுதந்திர தினம்', 'உழவர் தினம்', 'தியாகிகள் தினம்'], explanation: 'ஹே மார்க்கெட் தியாகிகளுக்கு மரியாதை செலுத்தும் விதமாக மே 1 சர்வதேசத் தொழிலாளர் நாளாக (மே தினம்) கடைபிடிக்கப்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.7, p. 139', answer: 0,
    en: { q: 'Where was the Zollverein Customs Union formed?', options: ['Germany', 'England', 'France', 'America'], explanation: 'Railroads connected the members of the German Zollverein and made trade and commerce more vibrant.' },
    ta: { q: 'எங்கு ஜோல்வெரெய்ன் சுங்க ஒன்றியம் உருவாக்கப்பட்டது?', options: ['ஜெர்மனி', 'இங்கிலாந்து', 'பிரான்ஸ்', 'அமெரிக்கா'], explanation: 'ஜெர்மனியின் ஜோல்வெரெய்ன் ஒன்றிய உறுப்பு நாடுகளை இருப்புப்பாதைகள் இணைத்து வணிகத்தைப் பெருக்கின.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.9, p. 139', answer: 0,
    en: { q: 'What was the invention that removed seeds from cotton?', options: ['Cotton Gin', 'Rolling Mill', 'Spinning Mule', 'Spinning Jenny'], explanation: 'Eli Whitney invented the cotton gin in 1793 to remove the seed from cotton.' },
    ta: { q: 'எக்கண்டுபிடிப்பு பருத்தியிலிருந்து கொட்டைகளைப் பிரித்தது?', options: ['பஞ்சுக் கடைசல் இயந்திரம்', 'உருட்டாலைகள்', 'ஸ்பின்னிங் மியூல்', 'இயந்திர நூற்புக் கருவி'], explanation: '1793இல் எலி விட்னி பருத்தியிலிருந்து கொட்டையைப் பிரித்தெடுக்கும் காட்டன் ஜின் எனப்படும் பஞ்சுக் கடைசல் கருவியைக் கண்டுபிடித்தார்.' },
  },
  {
    difficulty: 'easy', source: '§10.1, p. 131', answer: 0,
    en: { q: 'In 1733 John Kay invented the', options: ['Flying Shuttle', 'Spinning Jenny', 'Water Frame', 'Power Loom'], explanation: 'John Kay’s flying shuttle (1733), operated by hand, increased the speed of weaving cloth.' },
    ta: { q: '1733இல் ஜான் கே கண்டுபிடித்தது', options: ['பறக்கும் நாடா', 'இயந்திர நூற்புக் கருவி', 'நீர்ச்சட்டகம்', 'விசைத்தறி'], explanation: '1733இல் ஜான் கே கண்டுபிடித்த கையால் இயக்கப்படும் பறக்கும் நாடா நெசவின் வேகத்தை அதிகரித்தது.' },
  },
  {
    difficulty: 'easy', source: '§10.2, p. 133', answer: 0,
    en: { q: 'The first railway line in England was opened in 1825 between', options: ['Stockton and Darlington', 'Manchester and Liverpool', 'London and Manchester', 'Nuremberg and Furth'], explanation: 'The first English railway line ran between Stockton and Darlington (1825); in the next forty years 15,000 miles of railway were built.' },
    ta: { q: '1825இல் இங்கிலாந்தில் முதல் ரயில்பாதை அமைக்கப்பட்ட நகரங்கள்', options: ['ஸ்டாக்டன், டார்லிங்டன்', 'மான்செஸ்டர், லிவர்பூல்', 'லண்டன், மான்செஸ்டர்', 'நியூரெம்பர்க், ஃபர்த்'], explanation: '1825இல் ஸ்டாக்டன், டார்லிங்டன் இடையே முதல் ரயில்பாதை அமைந்தது; அடுத்த நாற்பதாண்டுகளில் 15,000 மைல் இருப்புப்பாதை இணைக்கப்பட்டது.' },
  },

  // ---------------------------------------------------------------- Medium
  {
    difficulty: 'medium', source: 'Book exercise I.8, p. 139', answer: 0,
    en: { q: 'Who produced the first batch of automobiles in France?', options: ['Armand Peugeot', 'Louis Renault', 'Thomas Alva Edison', 'McAdam'], explanation: 'Armand Peugeot produced the first batch of automobiles; in 1898 Louis Renault built the quadricycle.' },
    ta: { q: 'பிரான்சில் முதல் மோட்டார் வாகனங்களை உற்பத்தி செய்தவர் யார்?', options: ['அர்மான் பியூகாட்', 'லூயி ரெனால்ட்', 'தாமஸ் ஆல்வா எடிசன்', 'மெக் ஆடம்'], explanation: 'அர்மான் பியூகாட் முதல் கட்ட வாகனங்களை உற்பத்தி செய்தார்; 1898இல் லூயி ரெனால்ட் நான்கு சக்கர வாகனத்தை உருவாக்கினார்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.10, p. 139', answer: 0,
    en: { q: 'Which of the following was used as fuel in olden days to smelt iron?', options: ['Charcoal', 'Coke', 'Firewood', 'Paper'], explanation: 'In olden days charcoal was the fuel used to smelt iron.' },
    ta: { q: 'கீழ்க்காண்பனவற்றில் எது இரும்பை உருக்குவதற்காக முற்காலத்தில் பயன்படுத்தப்பட்டது?', options: ['கரி', 'கற்கரி', 'விறகு', 'காகிதம்'], explanation: 'முற்காலத்தில் இரும்பை உருக்க எரிபொருளாகக் கரி (charcoal) பயன்படுத்தப்பட்டது.' },
  },
  {
    difficulty: 'medium', source: '§10.1, p. 131', answer: 0,
    en: { q: 'James Watt, a Scottish engineer, improved the steam engine by', options: ['converting a stationary steam engine into a rotary engine that consumed less fuel', 'inventing the first engine to pump water out of mines', 'building the first steam locomotive, the Puffing Devil', 'using water power in place of steam'], explanation: 'Newcomen’s engine pumped water out of mines but used too much fuel; Watt made it a rotary engine that used less fuel.' },
    ta: { q: 'ஸ்காட்லாந்துப் பொறியாளர் ஜேம்ஸ் வாட் நீராவி இயந்திரத்தை மேம்படுத்திய விதம்', options: ['நிலையாகப் பொருத்தப்பட்ட நீராவி இயந்திரத்தைக் குறைந்த எரிபொருள் பயன்படுத்தும் சுழலும் இயந்திரமாக மாற்றினார்', 'சுரங்கங்களிலிருந்து நீரை வெளியேற்றும் முதல் இயந்திரத்தைக் கண்டுபிடித்தார்', 'முதல் நீராவி ரயில் என்ஜினான பஃபிங் டெவிலை உருவாக்கினார்', 'நீராவிக்குப் பதில் நீர் ஆற்றலைப் பயன்படுத்தினார்'], explanation: 'நியூகோமனின் இயந்திரம் அதிக எரிபொருளை விரயமாக்கியது; ஜேம்ஸ் வாட் அதைக் குறைந்த எரிபொருள் பயன்படுத்தும் சுழலும் நீராவி இயந்திரமாக மாற்றினார்.' },
  },
  {
    difficulty: 'medium', source: '§10.1, p. 131', answer: 0,
    en: { q: 'James Hargreaves’ ‘spinning jenny’ (1764) could spin', options: ['eight threads at the same time', 'hundreds of threads at the same time', 'one thread at a time but faster', 'threads using water power'], explanation: 'The spinning jenny spun eight threads at once; Crompton’s spinning mule (1779) spun hundreds of threads simultaneously.' },
    ta: { q: 'ஜேம்ஸ் ஹார்கிரீவ்ஸின் இயந்திர நூற்புக் கருவி (1764) ஒரே சமயத்தில் நூற்றது', options: ['எட்டு நூல்கள்', 'நூற்றுக்கணக்கான நூல்கள்', 'ஒரு நூல், ஆனால் வேகமாக', 'நீர் ஆற்றலால் நூல்கள்'], explanation: 'இயந்திர நூற்புக் கருவி ஒரே சமயத்தில் எட்டு நூல்களை நூற்றது; கிராம்ப்டனின் ஸ்பின்னிங் மியூல் (1779) நூற்றுக்கணக்கான நூல்களை நூற்றது.' },
  },
  {
    difficulty: 'medium', source: '§10.1, p. 132', answer: 0,
    en: { q: 'Why is Richard Arkwright’s ‘waterframe’ said to have given birth to the factory?', options: ['It used water power and was too big to be run at home', 'It was the first machine run by electricity', 'It needed eight spinners to operate it', 'It removed the seeds from cotton'], explanation: 'The waterframe used water power instead of manpower and was too big for a home, so it had to be housed in a factory.' },
    ta: { q: 'ரிச்சர்ட் ஆர்க்ரைட்டின் நீர்ச்சட்டகத்தால் தொழிற்சாலை பிறந்தது எனக் கூறப்படுவது ஏன்?', options: ['அது நீர் ஆற்றலைப் பயன்படுத்தியது; வீட்டில் வைத்து இயக்க முடியாத அளவுக்குப் பெரியதாக இருந்தது', 'அது மின்சாரத்தால் இயங்கிய முதல் இயந்திரம்', 'அதை இயக்க எட்டுத் தொழிலாளர்கள் தேவைப்பட்டனர்', 'அது பருத்தியிலிருந்து கொட்டைகளைப் பிரித்தது'], explanation: 'நீர்ச்சட்டகம் மனித ஆற்றலுக்குப் பதில் நீர் ஆற்றலைப் பயன்படுத்தியது; வீட்டில் இயக்க முடியாத அளவுக்குப் பெரியதாக இருந்ததால் தொழிற்சாலை பிறந்தது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.3, p. 139', answer: 0,
    en: { q: 'Who discovered a faster and cheaper method of producing steel in 1856?', options: ['Henry Bessemer', 'Abraham Darby', 'John Smeaton', 'Humphrey Davy'], explanation: 'In 1856 Henry Bessemer discovered a faster and cheaper method of producing steel.' },
    ta: { q: '1856இல் விரைவாகவும் குறைந்த செலவிலும் எஃகை உற்பத்தி செய்யும் முறையைக் கண்டுபிடித்தவர்', options: ['ஹென்றி பெஸ்ஸிமர்', 'ஆபிரகாம் டெர்பி', 'ஜான் ஸ்மீட்டன்', 'ஹம்ப்ரி டேவி'], explanation: '1856இல் ஹென்றி பெஸ்ஸிமர் எஃகு தயாரிக்க ஒரு விரைவான, சிக்கனமான முறையைக் கண்டுபிடித்தார்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.2, p. 139', answer: 0,
    en: { q: 'Who changed the way roads were built around the world?', options: ['John Loudon McAdam', 'George Stephenson', 'Robert Fulton', 'Richard Trevithick'], explanation: 'The Scottish engineer John Loudon McAdam single-handedly changed road building; the macadamised road was adopted worldwide.' },
    ta: { q: 'உலகம் முழுவதும் சாலைகள் அமைக்கப்படும் முறையை மாற்றியமைத்தவர்', options: ['ஜான் லவுடன் மெக் ஆடம்', 'ஜார்ஜ் ஸ்டீவன்சன்', 'ராபர்ட் ஃபுல்டன்', 'ரிச்சர்ட் ட்ரெவிதிக்'], explanation: 'ஸ்காட்லாந்துப் பொறியாளர் ஜான் லவுடன் மெக் ஆடம் சாலை அமைக்கும் முறையை மாற்றினார்; அவரது முறையிலான சாலைகள் உலகெங்கும் ஏற்கப்பட்டன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.1, p. 139', answer: 0,
    en: { q: 'Which working-class movement, active between 1836 and 1848, called for voting rights for every man over twenty-one in England?', options: ['Chartism', 'Luddism', 'Zollverein', 'Socialism'], explanation: 'Frustrated by the Reform Bill of 1832, workers presented a charter to the House of Commons; the Chartists demanded votes for men over 21, secret ballot and annual elections.' },
    ta: { q: '1836 முதல் 1848 வரை இயங்கி, இங்கிலாந்தில் இருபத்தொரு வயதான அனைவருக்கும் வாக்குரிமை கோரிய தொழிலாளர் இயக்கம்', options: ['சாசன இயக்கம்', 'இயந்திர உடைப்பு இயக்கம்', 'ஜோல்வெரெய்ன்', 'சோஷலிசம்'], explanation: '1832 சீர்திருத்த மசோதாவால் விரக்தியுற்ற தொழிலாளர்கள் சாசனத்தை மக்கள் அவையில் தாக்கல் செய்தனர்; சாசன இயக்கம் வாக்குரிமை, ரகசிய வாக்கெடுப்பு போன்றவற்றைக் கோரியது.' },
  },
  {
    difficulty: 'medium', source: '§10.2, p. 134', answer: 0,
    en: { q: 'Who advocated scientific socialism to protect the working class from the exploitative policies of the capitalist class?', options: ['Karl Marx', 'Andrew Jackson', 'Henry Bessemer', 'John D. Rockefeller'], explanation: 'Socialism was born in Europe under these conditions; Karl Marx advocated scientific socialism to protect the working class.' },
    ta: { q: 'முதலாளித்துவ வர்க்கத்தின் சுரண்டலிலிருந்து உழைக்கும் வர்க்கத்தைப் பாதுகாக்க அறிவியல்பூர்வ சோஷலிசத்தை முன்வைத்தவர்', options: ['கார்ல் மார்க்ஸ்', 'ஆண்ட்ரூ ஜாக்சன்', 'ஹென்றி பெஸ்ஸிமர்', 'ஜான் டி. ராக்ஃபெல்லர்'], explanation: 'உழைக்கும் வர்க்கத்தைப் பாதுகாக்கக் கார்ல் மார்க்ஸ் அறிவியல்பூர்வப் பொதுவுடைமை (சோஷலிசம்) எனும் கோட்பாட்டை முன்வைத்தார்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.5, p. 139', answer: 0,
    en: { q: 'The first railroad line in Germany, between Nuremberg and Furth, was opened in', options: ['1835', '1825', '1842', '1871'], explanation: 'Germany’s first railroad opened in December 1835 between Nuremberg and Furth; in 1842 Prussia created a Railway Fund.' },
    ta: { q: 'ஜெர்மனியில் நியூரெம்பர்க், ஃபர்த் இடையே முதல் இருப்புப்பாதை இயக்கப்பட்ட ஆண்டு', options: ['1835', '1825', '1842', '1871'], explanation: '1835 டிசம்பரில் நியூரெம்பர்க், ஃபர்த் நகரங்களுக்கிடையே முதல் இருப்புப்பாதை அமைந்தது; 1842இல் பிரஷ்யா ரயில்வே நிதியை உருவாக்கியது.' },
  },
  {
    difficulty: 'medium', source: '§10.3, p. 135', answer: 0,
    en: { q: 'Which pair of German automobile brands became the most popular in Germany and the world?', options: ['Daimler and Benz', 'Bayer and Hoechst', 'Peugeot and Renault', 'Siemens and Krupp'], explanation: 'Daimler and Benz were the most popular automobile brands; Bayer and Hoechst led the chemical industry and Siemens the electrical industry.' },
    ta: { q: 'ஜெர்மனியிலும் உலகிலும் மிகப் புகழ்பெற்ற ஜெர்மானிய வாகன நிறுவனங்கள்', options: ['டெய்ம்லர், பென்ஸ்', 'பேயர், ஹோக்ஸ்ட்', 'பியூகாட், ரெனால்ட்', 'சீமென்ஸ், க்ருப்'], explanation: 'டெய்ம்லர், பென்ஸ் வாகனங்கள் உலகப் புகழ் பெற்றன; வேதிப்பொருள் தொழிலில் பேயர், ஹோக்ஸ்ட்டும் மின்பொருள் தொழிலில் சீமென்ஸும் முன்னணியில் இருந்தன.' },
  },
  {
    difficulty: 'medium', source: '§10.4, p. 136', answer: 0,
    en: { q: 'Whose Standard Oil Trust came to monopolise 90% of the oil industry in the United States?', options: ['John D. Rockefeller', 'Andrew Carnegie', 'Samuel Slater', 'Moses Brown'], explanation: 'Rockefeller merged many large companies into a trust; Andrew Carnegie established the first steel mills for mass production.' },
    ta: { q: 'அமெரிக்காவில் எண்ணெய்த் தொழிலின் 90 விழுக்காட்டைத் தனி உரிமையாக்கிய ஸ்டாண்டர்ட் ஆயில் டிரஸ்டை நிறுவியவர்', options: ['ஜான் டி. ராக்ஃபெல்லர்', 'ஆண்ட்ரூ கார்னேகி', 'சாமுவேல் சிலேட்டர்', 'மோசஸ் பிரௌன்'], explanation: 'ராக்ஃபெல்லர் பல பெரிய நிறுவனங்களை இணைத்து அறக்கட்டளை ஒன்றை நிறுவினார்; ஆண்ட்ரூ கார்னேகி பெருமளவு எஃகு உற்பத்தியைத் தொடங்கினார்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV, p. 140', answer: 0,
    en: { q: 'Match: Safety Lamp –', options: ['Humphrey Davy', 'Louis Renault', 'Lancashire', 'Germany'], explanation: 'Sir Humphrey Davy invented the safety lamp in 1815, reducing the risk of explosions in coal mines. (Quadricycle – Louis Renault; Benz – Germany; Coalfield – Lancashire.)' },
    ta: { q: 'பொருத்துக: பாதுகாப்பு விளக்கு –', options: ['ஹம்ப்ரி டேவி', 'லூயி ரெனால்ட்', 'லங்காஷையர்', 'ஜெர்மனி'], explanation: '1815இல் சர் ஹம்ப்ரி டேவி உருவாக்கிய பாதுகாப்பு விளக்கு சுரங்க வெடிவிபத்து அபாயத்தைக் குறைத்தது. (நான்கு சக்கர வாகனம் – லூயி ரெனால்ட்; பென்ஸ் – ஜெர்மனி; நிலக்கரி வயல் – லங்காஷையர்.)' },
  },

  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise III.1, p. 140', answer: 0,
    en: { q: '(i) British mine-owners were faced with the problem of water seeping into their mines.\n(ii) Employing human labour was cheap for this work.\n(iii) Newton invented a steam engine to pump water out of mines.\n(iv) Water had to be removed to get coal in mines.', options: ['(i) and (iv) are correct', '(i) is correct', '(ii) and (iii) are correct', '(iii) is correct'], explanation: 'Employing human labour to pump water cost a lot of money, and the engine was invented by Thomas Newcomen, not Newton; statements (i) and (iv) are true.' },
    ta: { q: 'i) இங்கிலாந்துச் சுரங்க முதலாளிகள் சுரங்கங்களுக்குள் நீர்க்கசிவு ஏற்படும் பிரச்சனையை எதிர்கொண்டனர்.\nii) இவ்வேலையில் மனித உழைப்பை ஈடுபடுத்துவது குறைவான செலவுடையதாக இருக்கும்.\niii) சுரங்கங்களிலிருந்து நீரை வெளியேற்றும் நீராவி இயந்திரத்தை நியூட்டன் கண்டுபிடித்தார்.\niv) சுரங்கங்களிலிருந்து நிலக்கரியைப் பெறவேண்டுமானால் நீரை வெளியேற்றியாக வேண்டும்.', options: ['i) மற்றும் iv) சரி', 'i) சரி', 'ii) மற்றும் iii) சரி', 'iii) சரி'], explanation: 'மனித உழைப்பு அதிகச் செலவானது; நீரேற்று இயந்திரத்தைக் கண்டுபிடித்தவர் தாமஸ் நியூகோமன், நியூட்டன் அல்ல; எனவே i), iv) சரி.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise III.2, p. 140', answer: 0,
    en: { q: 'Find out the correct statement.', options: ['Germany’s political setup was the most significant challenge for its industrial revolution.', 'Karl Marx advocated socialism to protect capitalists.', 'There were no natural resources in Germany.', 'Employing human labour to pump water out of mines was cheap.'], explanation: 'Before 1871 Germany was made of numerous states, which the book calls the most significant challenge. Marx sought to protect workers, and Germany had large coal and iron reserves.' },
    ta: { q: 'சரியான கூற்றைக் கண்டுபிடிக்கவும்.', options: ['ஜெர்மனியின் அரசியல் முறை அதன் தொழிற்புரட்சிக்கு மிக முக்கியச் சவாலாக அமைந்திருந்தது.', 'முதலாளிகளைப் பாதுகாப்பதற்காகக் கார்ல் மார்க்ஸ் சோஷலிசத்தை முன்வைத்தார்.', 'ஜெர்மனியில் இயற்கை வளங்கள் ஏதுமில்லை.', 'சுரங்கங்களிலிருந்து நீரை வெளியேற்ற மனித உழைப்பை ஈடுபடுத்துவது குறைவான செலவுடையது.'], explanation: '1871க்கு முன் ஜெர்மனி பல அரசுகளாகப் பிரிந்திருந்தது; இதுவே மிக முக்கியச் சவால். மார்க்ஸ் தொழிலாளர்களைப் பாதுகாக்கவே சோஷலிசத்தை முன்வைத்தார்; ஜெர்மனியில் நிலக்கரி, இரும்பு வளங்கள் இருந்தன.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise III.3, p. 140', answer: 0,
    en: { q: 'Assertion (A): Workers had rights to get holidays.\nReason (R): There were laws to protect the workers.', options: ['Both A and R are wrong', 'A is correct, R is wrong', 'Both A and R are correct', 'A is correct, R is not the correct explanation of A'], explanation: 'During the Industrial Revolution workers had long hours, no protection and were not even allowed to form trade unions; legislation safeguarded the middle class, so both A and R are wrong.' },
    ta: { q: 'கூற்று: விடுமுறை பெறுவதற்குத் தொழிலாளர் உரிமை பெற்றிருந்தனர்.\nகாரணம்: பணியாளர்களைப் பாதுகாக்கச் சட்டங்கள் இருந்தன.', options: ['கூற்று, காரணம் இரண்டுமே தவறு', 'கூற்று சரி, காரணம் தவறு', 'கூற்று, காரணம் இரண்டுமே சரி', 'கூற்று சரி, காரணம் கூற்றுக்குச் சரியான விளக்கமல்ல'], explanation: 'தொழிற்புரட்சிக் காலத்தில் தொழிலாளர்களுக்கு நீண்ட வேலை நேரம், பாதுகாப்பின்மை இருந்தது; தொழிற்சங்கம் அமைக்கக்கூட அனுமதியில்லை; சட்டங்கள் நடுத்தர வர்க்க நலனையே காத்தன; எனவே இரண்டுமே தவறு.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise III.4, p. 140', answer: 0,
    en: { q: 'Assertion (A): Slater was called the Father of the American Industrial Revolution.\nReason (R): His spinning textile mill was duplicated and his techniques became popular.', options: AR_EN, explanation: 'Slater’s mill (1793) was the first water-powered roller spinning mill in the Americas; by 1800 it had been duplicated by many entrepreneurs, earning him the title.' },
    ta: { q: 'கூற்று: சிலேட்டர் அமெரிக்கத் தொழிற்புரட்சியின் தந்தை என அழைக்கப்படுகிறார்.\nகாரணம்: அவருடைய நூற்பாலையின் நகலாகப் பல நூற்பாலைகள் உருவாயின; அவருடைய தொழில்நுட்பம் பிரபலமானது.', options: AR_TA, explanation: 'சிலேட்டரின் ஆலை (1793) அமெரிக்காவின் முதல் நீர் ஆற்றல் நூற்பாலை; 1800க்குள் பலர் அதைப் போல் ஆலைகளை அமைத்தனர்; அதனால் அவர் அப்பட்டம் பெற்றார்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise IV, p. 140', answer: 0,
    en: { q: 'Which pair from the book’s match-the-following is correctly matched?', options: ['Great Railroad Strike – U.S.A', 'Benz – Lancashire', 'Quadricycle – Humphrey Davy', 'Coalfield – Germany'], explanation: 'The Great Railroad Strike of 1877 took place in the U.S.A; Benz – Germany, Quadricycle – Louis Renault, Coalfield – Lancashire.' },
    ta: { q: 'பொருத்துக பகுதியிலிருந்து சரியாகப் பொருந்தியுள்ள இணை எது?', options: ['மாபெரும் ரயில்வே ஊழியர் போராட்டம் – அமெரிக்கா', 'பென்ஸ் – லங்காஷையர்', 'நான்கு சக்கர வாகனம் – ஹம்ப்ரி டேவி', 'நிலக்கரி வயல் – ஜெர்மனி'], explanation: '1877இன் மாபெரும் ரயில்வே வேலைநிறுத்தம் அமெரிக்காவில் நடந்தது; பென்ஸ் – ஜெர்மனி, நான்கு சக்கர வாகனம் – லூயி ரெனால்ட், நிலக்கரி வயல் – லங்காஷையர்.' },
  },
  {
    difficulty: 'hard', source: '§10.5, p. 137', answer: 0,
    en: { q: 'The Great Railroad Strike of 1877 in the United States was caused by', options: ['wage cuts in the railroad industry during a prolonged economic depression', 'the demand for an eight-hour day at Haymarket Square', 'the killing of workers by police in Chicago', 'the completion of the first transcontinental railroad'], explanation: 'Wage cuts during a long depression led to the strike, which began in West Virginia, spread to three more states over 45 days and was crushed.' },
    ta: { q: '1877இல் அமெரிக்காவில் நடந்த இருப்புப்பாதைத் தொழிலாளர்களின் மாபெரும் வேலைநிறுத்தத்திற்குக் காரணம்', options: ['நீடித்த பொருளாதார மந்தத்தின்போது இருப்புப்பாதைத் தொழிலில் ஊதியம் குறைக்கப்பட்டது', 'ஹே மார்க்கெட் சதுக்கத்தில் எட்டு மணிநேர வேலை கோரிக்கை', 'சிகாகோவில் காவல்துறை தொழிலாளர்களைச் சுட்டுக் கொன்றது', 'முதல் கண்டங்கடந்த இருப்புப்பாதை நிறைவடைந்தது'], explanation: 'நீடித்த பொருளாதார மந்தத்தால் ஊதியம் குறைக்கப்பட்டதால் மேற்கு வர்ஜீனியாவில் தொடங்கிய வேலைநிறுத்தம் 45 நாள்களில் மேலும் மூன்று மாநிலங்களுக்குப் பரவி நசுக்கப்பட்டது.' },
  },
  {
    difficulty: 'hard', source: '§10.7, p. 138', answer: 0,
    en: { q: 'Which of the following was an effect of the Industrial Revolution in England on India?', options: ['India lost her old industrial position and became an exporter of raw material', 'Export of Dacca muslin to England increased sharply', 'Indian weavers found new markets in England', 'Export of raw cotton from India grew steadily because of American demand'], explanation: 'Losing the market for hand-woven goods, India became an exporter of raw material; Dacca muslin exports stopped and raw cotton exports dwindled owing to competition from the USA.' },
    ta: { q: 'இங்கிலாந்தின் தொழிற்புரட்சியினால் இந்தியாவில் ஏற்பட்ட விளைவு எது?', options: ['இந்தியா தனது பண்டைய உற்பத்தித் துறை இடத்தை இழந்து மூலப்பொருள்களை ஏற்றுமதி செய்யும் நாடாக மாறியது', 'டாக்கா மஸ்லின் துணி இங்கிலாந்துக்கு ஏற்றுமதியாவது பெருமளவு அதிகரித்தது', 'இந்திய நெசவாளர்கள் இங்கிலாந்தில் புதிய சந்தைகளைப் பெற்றனர்', 'அமெரிக்கத் தேவையால் இந்தியாவின் கச்சாப் பருத்தி ஏற்றுமதி சீராக உயர்ந்தது'], explanation: 'கைத்தறிப் பருத்தி ஆடைகளுக்கான சந்தையை இழந்த இந்தியா மூலப்பொருள் ஏற்றுமதி நாடானது; டாக்கா மஸ்லின் ஏற்றுமதி நின்றது; அமெரிக்கப் போட்டியால் கச்சாப் பருத்தி ஏற்றுமதியும் சரிந்தது.' },
  },
  {
    difficulty: 'hard', source: '§10.7, p. 138', answer: 0,
    en: { q: 'Which official reported that families of about 5000 weavers did not have the means to take more than one meal of rice a day?', options: ['The Collector of Madurai', 'The Collector of Tirunelveli', 'The Governor of Madras', 'The Collector of Thanjavur'], explanation: 'The Collector of Madurai reported this; the Collector of Tirunelveli observed that weavers had outrun their means of subsistence.' },
    ta: { q: 'சுமார் 5,000 கைத்தறி நெசவுக் குடும்பங்கள் ஒருவேளை உணவுகூடக் கிடைக்காமல் அவதியுறுவதாக அறிக்கை அளித்தவர்', options: ['மதுரை ஆட்சித்தலைவர்', 'திருநெல்வேலி ஆட்சித்தலைவர்', 'சென்னை ஆளுநர்', 'தஞ்சாவூர் ஆட்சித்தலைவர்'], explanation: 'மதுரை ஆட்சித்தலைவர் இதைப் பதிவு செய்தார்; நெசவாளர்கள் வாழ்வாதாரத்தை இழந்ததைத் திருநெல்வேலி ஆட்சித்தலைவரும் குறிப்பிட்டார்.' },
  },
];
