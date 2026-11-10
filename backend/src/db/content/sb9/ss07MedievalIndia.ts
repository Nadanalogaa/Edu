// Tamil Nadu State Board, 9th Social Science, Unit 7 – History: State and Society in Medieval India (இடைக்கால இந்தியாவில் அரசும் சமூகமும்).
// Book exercise questions (multiple choice, correct statement, assertion–reason, match the following)
// plus our own questions so that every section is covered at three levels.
// source = section or exercise and printed page of the English-medium book.

import { BankQuestion, AR_EN, AR_TA } from './types';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.1, p. 99', answer: 0,
    en: { q: '_________ was the second stronghold of Ala-ud-din Khalji’s expanding kingdom.', options: ['Daulatabad', 'Delhi', 'Madurai', 'Bidar'], explanation: 'Devagiri (near Aurangabad) was captured by Alauddin Khalji, renamed Daulatabad and became the second stronghold of his kingdom.' },
    ta: { q: 'விரிவடைந்துவரும் அலாவுதீன் கில்ஜியின் இரண்டாவது வலிமை வாய்ந்த இடம் _________.', options: ['தௌலதாபாத்', 'டெல்லி', 'மதுரை', 'பிடார்'], explanation: 'அலாவுதீன் கில்ஜியால் கைப்பற்றப்பட்ட தேவகிரி ‘தௌலதாபாத்’ என மறுபெயர் சூட்டப்பெற்று அவருடைய நாட்டின் இரண்டாவது வலிமைமிகுந்த தளமாயிற்று.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.2, p. 99', answer: 0,
    en: { q: 'The Deccan Sultanates were conquered by _________.', options: ['Aurangzeb', 'Ala-ud-din Khalji', 'Ala-ud-din Bahman Shah', 'Malik Kafur'], explanation: 'Aurangzeb conquered the Deccan sultanates in the 1660s, and the region as far south as Madras became part of the Mughal empire.' },
    ta: { q: 'தக்காண சுல்தானியங்கள் _________ ஆல் கைப்பற்றப்பட்டன.', options: ['ஔரங்கசீப்', 'அலாவுதீன் கில்ஜி', 'அலாவுதீன் பாமன் ஷா', 'மாலிக்காபூர்'], explanation: 'கி.பி. (பொ.ஆ.) 1660களில் தக்காணச் சுல்தானியங்களை ஔரங்கசீப் கைப்பற்றினார்; தெற்கே மெட்ராஸ் வரை மொகலாயப் பேரரசின் பகுதிகளாயின.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.3, p. 99', answer: 0,
    en: { q: 'The establishment of the _________ empire changed the administrative and institutional structures of South India.', options: ['Vijayanagar', 'Bahmani', 'Mughal', 'Nayak'], explanation: 'The Vijayanagar empire reorganised the administration of the conquered territories, especially the Tamil region, through nayakas and palayakkarars.' },
    ta: { q: '_________ பேரரசு நிறுவப்பட்டது தென்னிந்தியாவின் நிருவாக நிறுவனக் கட்டமைப்புகளை மாற்றியது.', options: ['விஜயநகர்', 'பாமினி', 'மொகலாயர்', 'நாயக்கர்'], explanation: 'விஜயநகரப் பேரரசு கைப்பற்றிய பகுதிகளின், குறிப்பாகத் தமிழகத்தின், நிருவாகத்தை நாயக்கர்கள், பாளையக்காரர்கள் மூலம் மறுசீரமைத்தது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.4, p. 99', answer: 0,
    en: { q: 'Krishnadeva Raya was a contemporary of _________.', options: ['Babur', 'Humayun', 'Akbar', 'Shershah'], explanation: 'Krishnadeva Raya ruled Vijayanagar from 1509 to 1529, and Babur founded the Mughal empire in 1526.' },
    ta: { q: 'கிருஷ்ணதேவராயர் _________ இன் சமகாலத்தவர்.', options: ['பாபர்', 'ஹுமாயுன்', 'அக்பர்', 'ஷெர்ஷா'], explanation: 'கிருஷ்ணதேவராயர் கி.பி. (பொ.ஆ.) 1509–29 இல் ஆட்சி செய்தார்; பாபர் 1526இல் மொகலாயப் பேரரசை நிறுவினார்.' },
  },
  {
    difficulty: 'easy', source: '§7.1 (c), p. 91', answer: 0,
    en: { q: 'The kingdom of Vijayanagar was established in 1336 A.D. (C.E.) by', options: ['Harihara and Bukka', 'Krishnadeva Raya and Achyuta Raya', 'Alauddin Bahman Shah and Mahmud Gawan', 'Rajaraja I and Rajendra I'], explanation: 'Two brothers, Harihara and Bukka, the first rulers of the Sangama dynasty, founded Vijayanagar in 1336.' },
    ta: { q: 'கி.பி. (பொ.ஆ.) 1336இல் விஜயநகர அரசை நிறுவியவர்கள்', options: ['ஹரிஹரர், புக்கர்', 'கிருஷ்ணதேவராயர், அச்சுதராயர்', 'அலாவுதீன் பாமன் ஷா, மகமுத் கவான்', 'முதலாம் இராஜராஜன், முதலாம் இராஜேந்திரன்'], explanation: 'சங்கம வம்சத்தின் முதல் அரசர்களான ஹரிஹரர், புக்கர் ஆகிய இரு சகோதரர்களால் 1336இல் விஜயநகர அரசு நிறுவப்பட்டது.' },
  },
  {
    difficulty: 'easy', source: '§7.1 (c), p. 91', answer: 0,
    en: { q: 'The combined forces of the five Deccan Sultanates defeated Vijayanagar in 1565 A.D. (C.E.) at the Battle of', options: ['Talikota', 'Panipat', 'Plassey', 'Buxar'], explanation: 'Vijayanagar was defeated at the Battle of Talikota in 1565; its capital then shifted to Penugonda and later Chandragiri.' },
    ta: { q: 'கி.பி. (பொ.ஆ.) 1565இல் தக்காண சுல்தான்களின் கூட்டுப்படைகள் விஜயநகரைத் தோற்கடித்த போர்', options: ['தலைக்கோட்டைப் போர்', 'பானிபட் போர்', 'பிளாசிப் போர்', 'பக்சார் போர்'], explanation: '1565இல் தலைக்கோட்டைப் போரில் விஜயநகரம் தோற்றது; பின்னர் தலைநகர் பெனுகொண்டாவிற்கும் சந்திரகிரிக்கும் மாற்றப்பட்டது.' },
  },
  {
    difficulty: 'easy', source: '§7.1 (d), p. 91', answer: 0,
    en: { q: 'The Mughal empire was founded in 1526 A.D. (C.E.) by Babur after he defeated', options: ['Ibrahim Lodi at Panipat', 'Rana Sanga at Talikota', 'Muhammad bin Tughlaq at Delhi', 'Krishnadeva Raya at Raichur'], explanation: 'Babur founded the Mughal empire in 1526 after defeating Ibrahim Lodi at Panipat.' },
    ta: { q: 'கி.பி. (பொ.ஆ.) 1526இல் பாபர் மொகலாயப் பேரரசை நிறுவியது யாரைத் தோற்கடித்த பின்னர்?', options: ['பானிபட்டில் இப்ராகிம் லோடியை', 'தலைக்கோட்டையில் ராணா சங்காவை', 'டெல்லியில் முகமதுபின் துக்ளக்கை', 'ராய்ச்சூரில் கிருஷ்ணதேவராயரை'], explanation: '1526இல் பானிபட் போர்க்களத்தில் இப்ராகிம் லோடியை வெற்றி கொண்ட பின்னர் பாபர் மொகலாயப் பேரரசை நிறுவினார்.' },
  },
  {
    difficulty: 'easy', source: '§7.1 (e), p. 91', answer: 0,
    en: { q: 'Vasco da Gama landed on the Kerala coast, having sailed around the Cape of Good Hope, in', options: ['1498 A.D. (C.E.)', '1503 A.D. (C.E.)', '1510 A.D. (C.E.)', '1526 A.D. (C.E.)'], explanation: 'Vasco da Gama reached the Kerala coast in 1498; the Portuguese built their first fort at Cochin in 1503 and captured Goa in 1510.' },
    ta: { q: 'நன்னம்பிக்கை முனையைச் சுற்றிக்கொண்டு வாஸ்கோடகாமா கேரளக் கடற்கரையை வந்தடைந்த ஆண்டு', options: ['கி.பி. (பொ.ஆ.) 1498', 'கி.பி. (பொ.ஆ.) 1503', 'கி.பி. (பொ.ஆ.) 1510', 'கி.பி. (பொ.ஆ.) 1526'], explanation: 'வாஸ்கோடகாமா 1498இல் கேரளக் கடற்கரையை அடைந்தார்; 1503இல் போர்ச்சுகீசியர்கள் கொச்சியில் முதல் கோட்டையைக் கட்டினர்; 1510இல் கோவா கைப்பற்றப்பட்டது.' },
  },
  {
    difficulty: 'easy', source: '§7.4, p. 94', answer: 0,
    en: { q: 'Kamban’s Ramayana in Tamil was formally presented (Arangetram) in the temple at', options: ['Srirangam', 'Chidambaram', 'Tanjavur', 'Madurai'], explanation: 'Kamban’s Ramayana was presented at Srirangam, while Sekkilar’s Periyapuranam was presented at Chidambaram.' },
    ta: { q: 'கம்பர் தமிழில் எழுதிய இராமாயணம் அரங்கேற்றம் செய்யப்பட்ட கோவில்', options: ['ஸ்ரீரங்கம்', 'சிதம்பரம்', 'தஞ்சாவூர்', 'மதுரை'], explanation: 'கம்பராமாயணம் ஸ்ரீரங்கம் கோவிலிலும், சேக்கிழாரின் பெரியபுராணம் சிதம்பரம் கோவிலிலும் அரங்கேற்றம் செய்யப்பட்டன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise IV.2, p. 100', answer: 0,
    en: { q: 'Match: Tansen –', options: ['Court of Akbar', 'Kottam', 'Bengal', 'Cambodia'], explanation: 'Tansen of Hindustani music shows the patronage Akbar gave to classical music.' },
    ta: { q: 'பொருத்துக: தான்சேன் –', options: ['அக்பரின் அரச சபை', 'கோட்டம்', 'வங்காளம்', 'கம்போடியா'], explanation: 'இந்துஸ்தானி இசையில் தான்சேன் புகழ்பெற்று விளங்கியது, அக்பர் இசைக்கு அளித்த ஆதரவைக் காட்டுகிறது.' },
  },

  // ---------------------------------------------------------------- Medium
  {
    difficulty: 'medium', source: '§7.1 (b), p. 90', answer: 0,
    en: { q: 'Which Chola ruler earned the title “Gangaiyum Kadaramum Konda Cholan”?', options: ['Rajendra I', 'Rajaraja I', 'Kulottunga I', 'Rajendra III'], explanation: 'Rajendra I took his armies up to the Ganges and sent naval expeditions against Sri Vijaya, Kadaram (Kedah) and Ceylon.' },
    ta: { q: '“கங்கையும் கடாரமும் கொண்ட சோழன்” என்ற பட்டத்தைப் பெற்ற சோழ அரசர்', options: ['முதலாம் இராஜேந்திரன்', 'முதலாம் இராஜராஜன்', 'முதலாம் குலோத்துங்கன்', 'மூன்றாம் இராஜேந்திரன்'], explanation: 'முதலாம் இராஜேந்திரன் கங்கை நதிவரை படைகளை நடத்திச் சென்றார்; ஸ்ரீவிஜயம், கடாரம், ஸ்ரீலங்கா ஆகியவற்றுக்கு எதிராகக் கப்பற்படைகளை அனுப்பினார்.' },
  },
  {
    difficulty: 'medium', source: '§7.1 (b), p. 90', answer: 0,
    en: { q: 'The influence of Indic culture and art that spread to Southeast Asia through Tamil merchants in the Chola period is seen in the temples of', options: ['Angkor Wat in Cambodia', 'Borobudur in Java', 'Pagan in Burma', 'Ayutthaya in Siam'], explanation: 'Continued interaction with Tamil merchants spread Indic culture into Southeast Asia, as seen in the temples of Angkor Wat in Cambodia.' },
    ta: { q: 'சோழர் காலத்தில் தமிழ் வணிகர்கள் மூலம் தென்கிழக்கு ஆசியாவில் பரவிய இந்தியப் பண்பாட்டின் செல்வாக்கைக் காட்டும் கோவில்கள்', options: ['கம்போடியாவின் அங்கோர்வாட் கோவில்கள்', 'ஜாவாவின் போரோபுதூர்', 'பர்மாவின் பாகன்', 'சயாமின் அயுத்தயா'], explanation: 'தமிழ் வணிகர்களோடு ஏற்பட்ட இடைவிடாத தொடர்பினால் பரவிய இந்தியக் கலையின் செல்வாக்கை கம்போடியாவின் அங்கோர்வாட் கோவில்களில் காணலாம்.' },
  },
  {
    difficulty: 'medium', source: '§7.1 (a), p. 90', answer: 0,
    en: { q: 'Alauddin Bahman Shah set up the Bahmani sultanate in 1347 A.D. (C.E.) with its capital at', options: ['Bidar', 'Bijapur', 'Golkonda', 'Daulatabad'], explanation: 'After a revolt at Daulatabad under Muhammad bin Tughlaq, Alauddin Bahman Shah founded the Bahmani sultanate in 1347 with Bidar as capital.' },
    ta: { q: 'கி.பி. (பொ.ஆ.) 1347இல் அலாவுதீன் பாமன் ஷா உருவாக்கிய பாமினி சுல்தானியத்தின் தலைநகர்', options: ['பிடார்', 'பீஜப்பூர்', 'கோல்கொண்டா', 'தௌலதாபாத்'], explanation: 'முகமதுபின் துக்ளக் காலத்தில் தௌலதாபாத்தில் கலகம் வெடித்ததன் விளைவாக 1347இல் பாமினி சுல்தானியம் உருவானது; பிடார் அதன் தலைநகரானது.' },
  },
  {
    difficulty: 'medium', source: '§7.1 (a), p. 90', answer: 0,
    en: { q: 'The Bahmani kingdom survived for nearly a century and a half mainly due to the able administration of', options: ['Mahmud Gawan', 'Malik Kafur', 'Firuz Shah Tughlaq', 'Ferishta'], explanation: 'The great statesman and loyal minister Mahmud Gawan kept the Bahmani kingdom strong; after his death many viceroys declared independence.' },
    ta: { q: 'பாமினி சுல்தானியம் சுமார் நூற்றைம்பது ஆண்டு காலம் நிலைத்திருந்ததற்குக் காரணமான அமைச்சர்', options: ['மகமுத் கவான்', 'மாலிக்கபூர்', 'பெரோஸ் துக்ளக்', 'பெரிஷ்டா'], explanation: 'அரசியல் மேதையும் விசுவாசமிக்க அமைச்சருமான மகமுத் கவானின் சிறந்த நிருவாகமே காரணம்; அவரது இறப்பிற்குப் பின் பல ஆளுநர்கள் சுதந்திர அரசர்களாக அறிவித்துக் கொண்டனர்.' },
  },
  {
    difficulty: 'medium', source: '§7.1 (a), p. 90', answer: 0,
    en: { q: 'Which of the following was NOT one of the five Deccan sultanates that came up by the end of the fifteenth century?', options: ['Warangal', 'Bijapur', 'Ahmednagar', 'Berar'], explanation: 'The five sultanates were Bijapur, Golkonda, Ahmednagar, Berar and Bidar; Warangal was the capital of the Kakatiyas.' },
    ta: { q: 'பதினைந்தாம் நூற்றாண்டின் இறுதியில் தக்காணத்தில் உதயமான ஐந்து சுல்தானியங்களில் இல்லாதது எது?', options: ['வாராங்கல்', 'பீஜப்பூர்', 'அகமதுநகர்', 'பிரார்'], explanation: 'பீஜப்பூர், கோல்கொண்டா, அகமதுநகர், பிரார், பிடார் ஆகியவையே ஐந்து சுல்தானியங்கள்; வாராங்கல் காகத்தியர்களின் தலைநகர்.' },
  },
  {
    difficulty: 'medium', source: '§7.2, p. 92', answer: 0,
    en: { q: 'Under the Cholas, tax-free villages granted to Brahmins were known as', options: ['brahmadeya', 'nagaram', 'nadu', 'kottam'], explanation: 'The basic unit was the village (ur), then nadu and kottam; tax-free Brahmin villages were brahmadeya and market towns were nagaram.' },
    ta: { q: 'சோழர் காலத்தில் பிராமணர்களுக்கு மானியமாக வழங்கப்பட்ட வரிவிலக்கு அளிக்கப்பட்ட கிராமங்கள்', options: ['பிரம்மதேயம்', 'நகரம்', 'நாடு', 'கோட்டம்'], explanation: 'உள்ளாட்சியின் அடிப்படை அலகு ஊர்; அடுத்து நாடு, கோட்டம்; வரிவிலக்குப் பெற்ற பிராமணக் கிராமங்கள் பிரம்மதேயம்; சந்தை கூடும் சிறுநகரங்கள் நகரம்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.5, p. 100', answer: 0,
    en: { q: 'Match: District (in Chola administration) –', options: ['Kottam', 'Court of Akbar', 'Goa', 'Bengal'], explanation: 'The Chola administrative units were ur (village), nadu (sub-region) and kottam (district).' },
    ta: { q: 'பொருத்துக: மாவட்டம் (சோழர் நிருவாகம்) –', options: ['கோட்டம்', 'அக்பரின் அரச சபை', 'கோவா', 'வங்காளம்'], explanation: 'சோழர் நிருவாக அலகுகள்: ஊர் (கிராமம்), நாடு, கோட்டம் (மாவட்டம்).' },
  },
  {
    difficulty: 'medium', source: '§7.2, p. 93', answer: 0,
    en: { q: 'The three major nayaka kingdoms that owed allegiance to Vijayanagar emerged between 1500 and 1550 A.D. (C.E.) in', options: ['Madurai, Tanjavur and Gingee', 'Madurai, Tirunelveli and Ramanathapuram', 'Tanjavur, Pudukkottai and Vellore', 'Gingee, Chandragiri and Penugonda'], explanation: 'Nayaka kingdoms arose at Madurai, Tanjavur and Gingee (Senji); their capitals became great cultural centres.' },
    ta: { q: 'விஜயநகரப் பேரரசுக்கு விசுவாசமான மூன்று முக்கிய நாயக்க அரசுகள் 1500–1550க்கு இடையில் உருவான இடங்கள்', options: ['மதுரை, தஞ்சாவூர், செஞ்சி', 'மதுரை, திருநெல்வேலி, இராமநாதபுரம்', 'தஞ்சாவூர், புதுக்கோட்டை, வேலூர்', 'செஞ்சி, சந்திரகிரி, பெனுகொண்டா'], explanation: 'மதுரை, தஞ்சாவூர், செஞ்சி ஆகியவற்றை மையமாகக் கொண்டு நாயக்க அரசுகள் உருவாயின; இவை பெரும் பண்பாட்டு மையங்களாயின.' },
  },
  {
    difficulty: 'medium', source: '§7.2, p. 93', answer: 0,
    en: { q: 'Under Vijayanagar, the lesser military leaders who essentially supplied the manpower for the army were the', options: ['palayakkarar', 'nayakas', 'zamindars', 'mansabdars'], explanation: 'Nayakas were military officers who received land grants; below them the palayakkarar supplied soldiers for the army.' },
    ta: { q: 'விஜயநகர ஆட்சியில் படைகளுக்குத் தேவையான வீரர்களை வழங்கிய கீழ்நிலை இராணுவத் தலைவர்கள்', options: ['பாளையக்காரர்கள்', 'நாயக்கர்கள்', 'ஜமீன்தார்கள்', 'மன்சப்தார்கள்'], explanation: 'நிலமானியம் பெற்ற இராணுவ அதிகாரிகள் நாயக்கர்கள்; அவர்களுக்கு அடுத்த நிலையில் இருந்த பாளையக்காரர்கள் படைகளுக்கு வீரர்களை வழங்கினர்.' },
  },
  {
    difficulty: 'medium', source: '§7.2, p. 92', answer: 0,
    en: { q: 'In South India the European companies had their own enclaves. The Danes were at', options: ['Tarangampadi (Tranquebar)', 'Pulicat', 'Pondicherry', 'Madras'], explanation: 'The Dutch were in Pulicat (later Nagapatnam), the English in Madras, the French in Pondicherry and the Danes in Tarangampadi.' },
    ta: { q: 'தென்னிந்தியாவில் ஐரோப்பியக் கம்பெனிகள் தங்கள் குடியிருப்புகளைக் கொண்டிருந்தன. டேனியர்கள் நிலை கொண்ட இடம்', options: ['தரங்கம்பாடி', 'பழவேற்காடு', 'பாண்டிச்சேரி', 'மெட்ராஸ்'], explanation: 'பழவேற்காடு, நாகப்பட்டினத்தில் டச்சுக்காரர்களும், மெட்ராஸில் ஆங்கிலேயர்களும், பாண்டிச்சேரியில் பிரெஞ்சுக்காரர்களும், தரங்கம்பாடியில் டேனியர்களும் நிலை கொண்டனர்.' },
  },
  {
    difficulty: 'medium', source: '§7.4, p. 94', answer: 0,
    en: { q: 'The best-known Chola bronze, made by the ‘lost wax’ process, is the image of', options: ['Siva as Nataraja', 'Vishnu as Ranganatha', 'Buddha in meditation', 'Murugan with his spear'], explanation: 'Chola bronze images were made by the lost wax process; the best known is Siva as Nataraja performing the cosmic dance.' },
    ta: { q: 'மெழுகு அச்சு (lost wax) முறையில் வார்க்கப்பட்ட சோழர்கால செப்புச்சிலைகளில் மிகவும் புகழ் பெற்றது', options: ['பிரபஞ்ச நடனமாடும் நடராஜர் (சிவன்) சிலை', 'அரங்கநாதர் (விஷ்ணு) சிலை', 'தியானத்தில் புத்தர் சிலை', 'வேலுடன் முருகன் சிலை'], explanation: 'செப்புச் சிலைகள் மெழுகு அச்சு முறையில் வார்க்கப்பட்டன; பிரபஞ்ச நடனமாடும் நடராஜர் சிலை அவற்றில் மிகவும் புகழ் பெற்றது.' },
  },
  {
    difficulty: 'medium', source: '§7.5 (a), p. 95', answer: 0,
    en: { q: 'The biggest network of canals known in India was built in the fourteenth century in the Delhi area by', options: ['Firuz Shah Tughluq', 'Alauddin Khalji', 'Akbar', 'Muhammad Ghori'], explanation: 'Firuz Shah Tughluq built the largest canal network in the Delhi area in the fourteenth century.' },
    ta: { q: 'பதினான்காம் நூற்றாண்டில் டெல்லி பகுதியில் மிகப்பெரிய கால்வாய் வலைப்பின்னலை அமைத்தவர்', options: ['பெரோஸ் துக்ளக்', 'அலாவுதீன் கில்ஜி', 'அக்பர்', 'முகமது கோரி'], explanation: 'இந்தியா அறிந்திருந்த மிகப்பெரிய கால்வாய்கள் பதினான்காம் நூற்றாண்டில் பெரோஸ் துக்ளக்கால் டெல்லி பகுதியில் அமைக்கப்பட்டவை.' },
  },
  {
    difficulty: 'medium', source: '§7.5 (a), p. 96', answer: 0,
    en: { q: 'Which two new crops were introduced into India after the arrival of the Europeans?', options: ['Maize and tobacco', 'Rice and wheat', 'Pepper and cinnamon', 'Sugarcane and indigo'], explanation: 'Maize and tobacco came after the Europeans, along with papaya, pineapple, guava, cashew nut, potatoes, chillies and tomatoes.' },
    ta: { q: 'ஐரோப்பியருடைய வருகைக்குப் பின்னர் புதிய பயிர்களாக அறிமுகமானவை', options: ['சோளமும் புகையிலையும்', 'நெல்லும் கோதுமையும்', 'மிளகும் இலவங்கப்பட்டையும்', 'கரும்பும் அவுரியும்'], explanation: 'ஐரோப்பியர் வருகைக்குப் பின் சோளமும் புகையிலையும் அறிமுகமாயின; பப்பாளி, அன்னாசி, கொய்யா, முந்திரி, உருளைக்கிழங்கு, மிளகாய், தக்காளி ஆகியவையும் வந்தன.' },
  },
  {
    difficulty: 'medium', source: '§7.5 (d), p. 97', answer: 0,
    en: { q: 'In medieval India, textiles accounted for nearly what share of India’s total exports?', options: ['90 percent', '50 percent', '25 percent', '10 percent'], explanation: 'Textiles made up nearly 90 percent of India’s exports; pepper, gems (especially diamonds) and iron and steel were also exported.' },
    ta: { q: 'இடைக்கால இந்தியாவின் ஒட்டுமொத்த ஏற்றுமதியில் துணியின் பங்கு ஏறத்தாழ', options: ['90 விழுக்காடு', '50 விழுக்காடு', '25 விழுக்காடு', '10 விழுக்காடு'], explanation: 'இந்தியாவின் ஒட்டுமொத்த ஏற்றுமதியில் 90% துணியாக இருந்தது; மிளகு, வைரம் போன்ற மணிக்கற்கள், இரும்பு, எஃகு ஆகியவையும் ஏற்றுமதியாயின.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.3, p. 100', answer: 0,
    en: { q: 'Match: Sericulture –', options: ['Bengal', 'Goa', 'Cambodia', 'Kottam'], explanation: 'Silk weaving developed in Bengal, where silk was produced, and in Gujarat.' },
    ta: { q: 'பொருத்துக: பட்டுவளர்ப்பு –', options: ['வங்காளம்', 'கோவா', 'கம்போடியா', 'கோட்டம்'], explanation: 'பட்டு உற்பத்தி செய்யப்பட்ட வங்காளத்திலும் குஜராத்திலும் பட்டு நெசவு வளர்ச்சி பெற்றது.' },
  },

  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise III.1, p. 99', answer: 0,
    en: { q: 'Find out the correct statement about Vijayanagar and its neighbours.', options: ['The establishment of the Vijayanagar Kingdom witnessed the most momentous development in the history of South India.', 'The Saluva dynasty ruled for a longer period.', 'The rulers of Vijayanagara had smooth relations with the Bahmani Sultanate.', 'Rajput kingdoms attracted migrants from Persia and Arabia.'], explanation: 'The Saluvas ruled only briefly, Vijayanagar was almost always at war with the Bahmanis, and it was the Muslim kingdoms that attracted Persian and Arab migrants.' },
    ta: { q: 'விஜயநகரம், அதன் அண்டை அரசுகள் பற்றிய சரியான கூற்றைக் கண்டுபிடி.', options: ['விஜயநகர அரசு உருவாக்கப்பட்டதே தென்னிந்திய வரலாற்றின் அதிமுக்கியத்துவம் வாய்ந்த வளர்ச்சியாகும்.', 'சாளுவ வம்சம் நீண்ட காலம் ஆட்சி செய்தது.', 'விஜயநகர அரசர்கள் பாமினி சுல்தானியத்துடன் சுமுகமான உறவு கொண்டிருந்தனர்.', 'இராஜபுத்திர அரசுகள் பாரசீகம், அரேபியாவிலிருந்து குடியேறியவர்களை ஈர்த்தன.'], explanation: 'சாளுவர்கள் குறுகிய காலமே ஆண்டனர்; விஜயநகர அரசர்கள் பாமினியுடன் தொடர்ந்து போரிட்டனர்; பாரசீக, அரேபியக் குடியேறிகளை ஈர்த்தவை முஸ்லிம் அரசுகளே.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise III.2, p. 99', answer: 0,
    en: { q: 'Find out the correct statement about the Nayaks, the Mughals and the Europeans.', options: ['The Nayak Kingdom came up in Senji.', 'The appointment of Telugu Nayaks resulted in the migration of Telugu-speaking people from Madurai.', 'The Mughal Empire started declining from the time of Jahangir.', 'The Europeans came to India in search of slaves.'], explanation: 'A nayaka kingdom arose at Gingee (Senji). Telugu speakers migrated from the north into Tamil Nadu, the Mughal decline began after Aurangzeb, and the Europeans came for the spice trade.' },
    ta: { q: 'நாயக்கர்கள், மொகலாயர், ஐரோப்பியர் பற்றிய சரியான கூற்றைக் கண்டுபிடி.', options: ['செஞ்சியில் நாயக்க அரசு உருவானது.', 'தெலுங்கு நாயக்கர்களின் நியமனத்தால் மதுரையிலிருந்து தெலுங்கு பேசும் மக்கள் இடம்பெயர்ந்தனர்.', 'ஜஹாங்கீர் காலம் முதல் மொகலாயப் பேரரசு வீழ்ச்சியடையத் தொடங்கியது.', 'ஐரோப்பியர்கள் அடிமைகளைத் தேடி இந்தியாவிற்கு வந்தனர்.'], explanation: 'செஞ்சியில் நாயக்க அரசு உருவானது. தெலுங்கு பேசும் மக்கள் வடக்கிலிருந்து தமிழகத்திற்கு இடம்பெயர்ந்தனர்; ஔரங்கசீப்பிற்குப் பின்னரே மொகலாயப் பேரரசு சிதைந்தது; ஐரோப்பியர் நறுமணப் பொருள் வணிகத்திற்காக வந்தனர்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise III.3, p. 99', answer: 0,
    en: { q: 'Find out the correct statement about genealogies, crops, ministers and forts.', options: ['Mythical genealogies were collected by Col. Mackenzie.', 'Indigo was the most important beverage crop in India.', 'Mahmud Gawan was the minister in Alauddin Khalji’s kingdom.', 'The Portuguese built their first fort in Goa.'], explanation: 'Caste genealogies are found in manuscripts collected by Colin Mackenzie. Indigo was a dye crop, Mahmud Gawan served the Bahmani kingdom, and the first Portuguese fort was at Cochin (1503).' },
    ta: { q: 'வம்சாவளிகள், பயிர்கள், அமைச்சர்கள், கோட்டைகள் பற்றிய சரியான கூற்றைக் கண்டுபிடி.', options: ['புராண வம்சாவளிகள் காலின் மெக்கன்சியால் சேகரிக்கப்பட்டன.', 'அவுரி இந்தியாவின் மிக முக்கியமான பானப் பயிராகும்.', 'மகமுத் கவான் அலாவுதீன் கில்ஜியின் அரசில் அமைச்சராக இருந்தார்.', 'போர்ச்சுகீசியர்கள் தங்கள் முதல் கோட்டையைக் கோவாவில் கட்டினர்.'], explanation: 'காலின் மெக்கன்சியால் சேகரிக்கப்பட்ட கையெழுத்துப் பிரதிகளில் இத்தகைய வம்சாவளிகளைக் காணலாம். அவுரி ஒரு சாயப் பயிர்; மகமுத் கவான் பாமினி அமைச்சர்; முதல் போர்ச்சுகீசியக் கோட்டை கொச்சியில் (1503) கட்டப்பட்டது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise III.4, p. 99', answer: 0,
    en: { q: 'Assertion (A): India was an integral part of maritime trade, extending from China in the east to Africa in the west.\nReason (R): The geographical location of India is in the middle of the Indian Ocean.', options: AR_EN, explanation: 'Maritime trade across the Indian Ocean from China to Africa flourished for centuries, and India’s central position in that ocean made it a key part of the trade.' },
    ta: { q: 'கூற்று: கிழக்கே சீனா முதல் மேற்கே ஆப்பிரிக்கா வரை நீண்டிருந்த கடல் வணிகத்தின் ஒருங்கிணைந்த பகுதியாக இந்தியா இருந்தது.\nகாரணம்: இந்தியாவின் நிலவியல் அமைப்பு இந்தியப் பெருங்கடலின் மையத்தில் அமைந்துள்ளது.', options: AR_TA, explanation: 'சீனா முதல் ஆப்பிரிக்கா வரையிலான இந்தியப் பெருங்கடல் வணிகம் பல நூற்றாண்டுகள் செழித்தது; பெருங்கடலின் மையத்தில் இந்தியா அமைந்திருப்பதே அதற்குக் காரணம்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise III.5, p. 99', answer: 0,
    en: { q: '(i) Gold images of great beauty and artistry were made by the Cholas.\n(ii) The best example of Chola architecture is Siva as Nataraja performing the cosmic dance.', options: ['Both (i) and (ii) are wrong', '(i) is correct, (ii) is wrong', 'Both (i) and (ii) are correct', '(i) is wrong, (ii) is correct'], explanation: 'The Chola images of great beauty were bronzes, not gold, and the Nataraja is a bronze sculpture, not architecture; the great temple of Tanjavur is an example of Chola architecture.' },
    ta: { q: 'i) பேரழகும் கலைத்திறனும் மிக்க தங்கச் சிலைகளைச் சோழர்கள் வடித்தனர்.\nii) சோழர்களின் கட்டடக் கலைக்குச் சிறந்த எடுத்துக்காட்டு சிவனின் மறுவடிவான நடராஜரின் பிரபஞ்ச நடனம்.', options: ['i), ii) ஆகிய இரண்டும் தவறு', 'i) சரி ii) தவறு', 'i), ii) ஆகிய இரண்டும் சரி', 'i) தவறு ii) சரி'], explanation: 'சோழர்கள் வார்த்தவை செப்புச் சிலைகள், தங்கச் சிலைகள் அல்ல; நடராஜர் ஒரு செப்புச் சிலை, கட்டடக்கலை அல்ல; தஞ்சாவூர் பெரிய கோவில் சோழர் கட்டடக் கலைக்கு எடுத்துக்காட்டு.' },
  },
  {
    difficulty: 'hard', source: '§7.3 (b), p. 94', answer: 0,
    en: { q: 'The Varkari sampradaya (tradition) of the devotees of Vithoba arose in the 14th century in', options: ['Maharashtra', 'Karnataka', 'Tamil Nadu', 'Gujarat'], explanation: 'In Maharashtra the Varkari tradition of Vithoba’s devotees arose; Karnataka had the Virasaivas and Tamil Nadu the Saiva Siddhanta.' },
    ta: { q: 'விதோபாவின் பக்தர்களால் உருவாக்கப்பட்ட வர்க்கரி சம்பிரதாயம் 14ஆம் நூற்றாண்டில் எழுச்சி பெற்ற பகுதி', options: ['மகாராஷ்டிரம்', 'கர்நாடகம்', 'தமிழகம்', 'குஜராத்'], explanation: 'மகாராஷ்டிரத்தில் வர்க்கரி சம்பிரதாயம் எழுச்சி பெற்றது; கர்நாடகத்தில் வீர சைவமும், தமிழகத்தில் சைவ சித்தாந்தமும் உருவாயின.' },
  },
  {
    difficulty: 'hard', source: '§7.4, p. 95', answer: 0,
    en: { q: 'Venkatamakhi, who codified the ragas of Carnatic music, was the son of', options: ['Govindha Dikshidar', 'Tansen', 'Sekkilar', 'Vidyaranya'], explanation: 'Venkatamakhi, son of Govindha Dikshidar, codified the ragas of Carnatic music during the Vijayanagar–nayaka period.' },
    ta: { q: 'கர்நாடக இசைக்குரிய ராகங்களை வகைப்படுத்திய வேங்கட மகி யாருடைய மகன்?', options: ['கோவிந்த தீட்சிதர்', 'தான்சேன்', 'சேக்கிழார்', 'வித்யாரண்யர்'], explanation: 'கோவிந்த தீட்சிதரின் மகன் வேங்கட மகி கர்நாடக இசைக்குரிய ராகங்களை வகைப்படுத்தினார்.' },
  },
  {
    difficulty: 'hard', source: '§7.5 (c), p. 96', answer: 0,
    en: { q: 'Which of the following was one of India’s two natural advantages in cotton weaving?', options: ['The technology of producing a permanent colour on cotton using vegetable dyes', 'The use of power looms run by water power', 'The import of cheap raw cotton from America', 'The use of chemical dyes from Europe'], explanation: 'Cotton grew in almost all parts of India, and Indians knew how to fix permanent vegetable-dye colours on cotton using mordants, unknown elsewhere.' },
    ta: { q: 'பருத்தி நெசவில் இந்தியர் பெற்றிருந்த இரண்டு இயற்கையான சாதகங்களில் ஒன்று', options: ['தாவரச் சாயங்களைப் பயன்படுத்திப் பருத்தி இழைகளின் மேல் நிரந்தரமாக வர்ணம் ஏற்றும் தொழில்நுட்பம்', 'நீர் ஆற்றலால் இயங்கும் விசைத்தறிகள்', 'அமெரிக்காவிலிருந்து மலிவான பருத்தி இறக்குமதி', 'ஐரோப்பாவிலிருந்து வேதியியல் சாயங்கள்'], explanation: 'இந்தியாவின் அனைத்துப் பகுதிகளிலும் பருத்தி விளைந்தது; தாவரச் சாயங்களைக் கொண்டு நிரந்தர வர்ணம் ஏற்றும் நுட்பம் இந்தியர்களுக்கு ஆரம்ப காலத்திலேயே தெரிந்திருந்தது.' },
  },
  {
    difficulty: 'hard', source: '§7.2, p. 93', answer: 0,
    en: { q: 'The explosion in the demand for Indian textiles in European markets, which expanded textile production and commercial crops like cotton and indigo, was referred to as', options: ['the ‘Indian craze’', 'the ‘Columbian Exchange’', 'the ‘Commercial Revolution’', 'the ‘Drain of Wealth’'], explanation: 'The European rage for Indian cloth was called the ‘Indian craze’; it expanded textile production and commercial crops like cotton and indigo.' },
    ta: { q: 'ஐரோப்பியச் சந்தையில் இந்தியத் துணிகளுக்கு ஏற்பட்ட மிகப் பெருந்தேவை எவ்வாறு குறிக்கப்பட்டது?', options: ['இந்தியத் துணி மீது மயக்கம்', 'கொலம்பியப் பரிமாற்றம்', 'வணிகப் புரட்சி', 'செல்வச் சுரண்டல்'], explanation: 'இந்தியத் துணிகளுக்கான இப்பெருந்தேவை ‘இந்தியத் துணி மீது மயக்கம்’ எனக் குறிக்கப்பட்டது; இதனால் துணி உற்பத்தியும், பருத்தி, அவுரி போன்ற வணிகப் பயிர்களும் பெருகின.' },
  },
];
