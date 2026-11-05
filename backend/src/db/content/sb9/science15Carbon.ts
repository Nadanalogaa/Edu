// Tamil Nadu State Board, 9th Science, Unit 15 – Carbon and its Compounds (கார்பனும் அவற்றின் சேர்மங்களும்).
// Textbook exercises converted to MCQs plus our own questions covering every section.
// Tamil wording follows the terms used in the Tamil-medium textbook.
// source = section / exercise and printed page of the English-medium book.

import { BankQuestion, AR_EN, AR_TA } from './types';

const IMG = '/content/9/state_board/science/15';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.1, p. 183', answer: 0,
    en: { q: 'The phenomenon in which an element exists in different modifications in the same physical state is called', options: ['allotropy', 'isomerism', 'catenation', 'crystallinity'], explanation: 'Allotropy: an element exists in forms that are physically different but chemically similar, e.g. diamond and graphite.' },
    ta: { q: 'ஒரு தனிமம் ஒரே இயற்பியல் நிலையில் வேறுபட்ட வடிவங்களில் காணப்படும் நிகழ்வு', options: ['புறவேற்றுமை வடிவம்', 'மாற்றியம்', 'சங்கிலித் தொடராக்கம்', 'படிகமாக்கல்'], explanation: 'புறவேற்றுமை: ஒரு தனிமம் இயற்பியலில் வேறுபட்ட, வேதியியலில் ஒத்த வடிவங்களில் காணப்படுதல்; எ.கா. வைரம், கிராஃபைட்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.2, p. 183', answer: 0,
    en: { q: 'Carbon forms a very large number of organic compounds mainly due to', options: ['catenation', 'allotropy', 'its high density', 'its metallic nature'], explanation: 'Carbon links repeatedly to itself through covalent bonds to form long chains and rings; this catenation is the main reason for the huge number of organic compounds.' },
    ta: { q: 'கார்பன் அதிக எண்ணிக்கையிலான கரிமச் சேர்மங்களை உருவாக்கக் முக்கியக் காரணம்', options: ['சங்கிலித் தொடராக்கம்', 'புறவேற்றுமை வடிவம்', 'அதன் அதிக அடர்த்தி', 'அதன் உலோகத் தன்மை'], explanation: 'கார்பன் சகப்பிணைப்பின் மூலம் தன்னுடனேயே மீண்டும் மீண்டும் இணைந்து நீண்ட சங்கிலிகளையும் வளையங்களையும் உருவாக்குகிறது; இதுவே முக்கியக் காரணம்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.3, p. 183', answer: 0,
    en: { q: 'Nandhini brings lunch in a plastic container with resin code 5. The container is made of', options: ['polypropylene (PP)', 'polystyrene (PS)', 'PVC', 'LDPE'], explanation: 'Resin code 5 is PP (polypropylene); 3 is PVC, 4 is LDPE and 6 is PS.' },
    ta: { q: 'நந்தினி கொண்டு வரும் மதிய உணவுக் கலனின் (நெகிழி) ரெசின் குறியீடு 5. அந்தக் கலன் தயாரிக்கப்பட்ட நெகிழி', options: ['பாலிபுரொப்பலீன் (PP)', 'பாலிஸ்டைரீன் (PS)', 'பி.வி.சி', 'எல்.டி.பி.இ'], explanation: 'ரெசின் குறியீடு 5 – PP (பாலிபுரொப்பலீன்); 3 – PVC, 4 – LDPE, 6 – PS.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.4, p. 183', answer: 0,
    en: { q: 'Plastics made of polycarbonate (PC) and acrylonitrile butadiene styrene (ABS) carry resin code', options: ['7', '2', '5', '6'], explanation: 'Resin code 7 covers all other plastics, including PC and ABS.' },
    ta: { q: 'பாலி கார்பனேட் (PC), அக்ரைலோ நைட்ரைல் பியூட்டாடையீன் ஸ்டைரின் (ABS) நெகிழிகளின் ரெசின் குறியீடு', options: ['7', '2', '5', '6'], explanation: 'ரெசின் குறியீடு 7 PC, ABS உட்பட மற்ற அனைத்து நெகிழிகளையும் குறிக்கிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.5, p. 183', answer: 0,
    en: { q: 'Graphene, a one-atom-thick layer of carbon, is obtained from', options: ['graphite', 'diamond', 'fullerene', 'gas carbon'], explanation: 'Geim and Novoselov used adhesive tape to peel a single layer of atoms from graphite.' },
    ta: { q: 'ஓரணு தடிமனுள்ள கார்பன் அடுக்கான கிராஃபீன் எதிலிருந்து கிடைக்கிறது?', options: ['கிராஃபைட்', 'வைரம்', 'ஃபுல்லரீன்', 'வாயு கார்பன்'], explanation: 'ஜெம், நொவோசெலோவ் ஒட்டும் நாடாவைப் பயன்படுத்தி கிராஃபைட்டிலிருந்து ஒரு அணு அடுக்கைப் பிரித்தெடுத்தனர்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.6, p. 183', answer: 0,
    en: { q: 'The legal measures to prevent plastic pollution come under the _____ (Protection) Act, 1988.', options: ['Environment', 'Forest', 'Wildlife', 'Human Rights'], explanation: 'The Government of India made provisions under the Environment (Protection) Act; Tamil Nadu’s ban builds on it.' },
    ta: { q: 'நெகிழி மாசுபாட்டைத் தடுக்கும் நடைமுறைகள் _____ பாதுகாப்புச் சட்டம் 1988 இன் கீழ் வருகின்றன.', options: ['சுற்றுச்சூழல்', 'வனத்துறை', 'வனவிலங்கு', 'மனித உரிமைகள்'], explanation: 'இந்திய அரசு சுற்றுச்சூழல் பாதுகாப்புச் சட்டத்தின் கீழ் விதிகளை உருவாக்கியது; தமிழ்நாட்டின் தடை அதன் அடிப்படையில் அமைந்தது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.1, p. 183', answer: 0,
    en: { q: '_____ named carbon.', options: ['Antoine Lavoisier', 'Carl Scheele', 'Benjamin Brodie', 'Smithson Tennant'], explanation: 'Lavoisier named carbon from the Latin word "carbo", meaning coal.' },
    ta: { q: '_____ என்பவர் கார்பனுக்குப் பெயரிட்டவர்.', options: ['ஆன்டன் லவாய்சியர்', 'கார்ல் ஷீலே', 'பெஞ்சமின் பிராடி', 'ஸ்மித்சன் டென்னன்ட்'], explanation: 'கரி எனப் பொருள்படும் "கார்போ" என்ற இலத்தீன் சொல்லிலிருந்து லவாய்சியர் கார்பன் எனப் பெயரிட்டார்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.2, p. 183', answer: 0,
    en: { q: 'Buckminster fullerene contains _____ carbon atoms.', options: ['60', '20', '540', '6'], explanation: 'Its formula is C₆₀: 60 carbon atoms joined in 5- and 6-membered rings like a soccer ball.' },
    ta: { q: 'பக்மின்ஸ்டர் ஃபுல்லரீன் _____ கார்பன் அணுக்களைக் கொண்டது.', options: ['60', '20', '540', '6'], explanation: 'அதன் வாய்ப்பாடு C₆₀: 5, 6 உறுப்பு வளையங்களில் இணைந்த 60 கார்பன் அணுக்கள், கால்பந்து போன்ற வடிவம்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.3, p. 183', answer: 0,
    en: { q: 'Compounds with the same molecular formula but different structural formulae are known as', options: ['isomers', 'allotropes', 'polymers', 'isotopes'], explanation: 'Isomers (Greek isos = equal, meros = parts) share a molecular formula but differ in structure.' },
    ta: { q: 'ஒரே மூலக்கூறு வாய்ப்பாட்டையும் வேறுபட்ட மூலக்கூறுக் கட்டமைப்பையும் கொண்ட சேர்மங்கள்', options: ['மாற்றியங்கள்', 'புறவேற்றுமை வடிவங்கள்', 'பலபடிகள்', 'ஐசோடோப்புகள்'], explanation: 'மாற்றியங்கள் ஒரே மூலக்கூறு வாய்ப்பாட்டையும் வேறுபட்ட அமைப்பையும் கொண்டவை.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.4, p. 183', answer: 0,
    en: { q: '_____ is a suitable solvent for sulphur.', options: ['Carbon disulphide', 'Water', 'Carbon monoxide', 'Calcium carbonate'], explanation: 'Carbon disulphide (CS₂) is used as a solvent for sulphur.' },
    ta: { q: 'சல்பரின் கரைப்பான் _____', options: ['கார்பன் டைசல்பைடு', 'நீர்', 'கார்பன் மோனாக்சைடு', 'கால்சியம் கார்பனேட்'], explanation: 'கார்பன் டைசல்பைடு (CS₂) சல்பரின் கரைப்பானாகப் பயன்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.5, p. 183', answer: 0,
    en: { q: 'There are _____ plastic resin codes.', options: ['seven', 'five', 'six', 'ten'], explanation: 'Resin codes are numbered 1 to 7; code 7 covers all plastics that do not fit codes 1 to 6.' },
    ta: { q: 'நெகிழி ரெசின் குறியீடுகளின் எண்ணிக்கை', options: ['ஏழு', 'ஐந்து', 'ஆறு', 'பத்து'], explanation: 'ரெசின் குறியீடுகள் 1 முதல் 7 வரை; 1 முதல் 6 இல் அடங்காத நெகிழிகள் குறியீடு 7.' },
  },
  {
    difficulty: 'easy', source: 'Introduction, p. 172', answer: 0,
    en: { q: 'Carbon chemistry is also called', options: ['living chemistry', 'inorganic chemistry', 'nuclear chemistry', 'applied chemistry'], explanation: 'Carbon is present in all living matter, so carbon chemistry is called living chemistry.' },
    ta: { q: 'கார்பன் வேதியியல் இவ்வாறும் அழைக்கப்படுகிறது', options: ['உயிர் வேதியியல்', 'கனிம வேதியியல்', 'அணுக்கரு வேதியியல்', 'பயன்பாட்டு வேதியியல்'], explanation: 'எல்லா உயிர்ப் பொருள்களிலும் கார்பன் இருப்பதால் கார்பன் வேதியியல் உயிர் வேதியியல் எனப்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: '§15.2, p. 173', answer: 0,
    en: { q: 'Carbon compounds obtained from living organisms, such as ethanol, cellulose and starch, are called', options: ['organic carbon compounds', 'inorganic carbon compounds', 'carbides', 'carbonates'], explanation: 'Berzelius classified compounds from living things as organic and those from non-living matter as inorganic.' },
    ta: { q: 'எத்தனால், செல்லுலோஸ், ஸ்டார்ச் போன்று உயிரினங்களிலிருந்து பெறப்படும் கார்பன் சேர்மங்கள்', options: ['கரிம கார்பன் சேர்மங்கள்', 'கனிம கார்பன் சேர்மங்கள்', 'கார்பைடுகள்', 'கார்பனேட்டுகள்'], explanation: 'உயிருள்ளவற்றிலிருந்து பெறப்படுபவை கரிமச் சேர்மங்கள், உயிரற்றவற்றிலிருந்து பெறப்படுபவை கனிமச் சேர்மங்கள் என பெர்ஷிலியஸ் வகைப்படுத்தினார்.' },
  },
  {
    difficulty: 'easy', source: '§15.3.3, p. 175', answer: 0,
    en: { q: 'Hydrocarbons containing a carbon–carbon triple bond, such as ethyne, belong to the class', options: ['alkyne', 'alkane', 'alkene', 'alcohol'], explanation: 'Single bond – alkane (methane); double bond – alkene (ethene); triple bond – alkyne (ethyne).' },
    ta: { q: 'ஈத்தைன் போன்று கார்பன்–கார்பன் முப்பிணைப்பு கொண்ட ஹைட்ரோகார்பன்கள் சேரும் பிரிவு', options: ['ஆல்கைன்', 'ஆல்கேன்', 'ஆல்கீன்', 'ஆல்கஹால்'], explanation: 'ஒற்றைப் பிணைப்பு – ஆல்கேன் (மீத்தேன்); இரட்டைப் பிணைப்பு – ஆல்கீன் (ஈத்தீன்); முப்பிணைப்பு – ஆல்கைன் (ஈத்தைன்).' },
  },
  {
    difficulty: 'easy', source: '§15.3.5, p. 176', answer: 0,
    en: { q: 'Which of these is an amorphous form of carbon?', options: ['Charcoal', 'Diamond', 'Graphite', 'Fullerene'], explanation: 'Charcoal, coke, lamp black and gas carbon are amorphous; diamond, graphite and fullerene are crystalline.' },
    ta: { q: 'பின்வருவனவற்றுள் படிக வடிவமற்ற கார்பன் எது?', options: ['கரி', 'வைரம்', 'கிராஃபைட்', 'ஃபுல்லரீன்'], explanation: 'கரி, கல்கரி, விளக்குக் கரி, வாயு கார்பன் படிக வடிவமற்றவை; வைரம், கிராஃபைட், ஃபுல்லரீன் படிக வடிவமுடையவை.' },
  },
  {
    difficulty: 'easy', source: '§15.3.5, p. 177', answer: 0,
    en: { q: 'Buckminster fullerene is popularly called', options: ['Bucky Ball', 'Black Lead', 'Dry Ice', 'Water Gas'], explanation: 'Its structure resembled the dome-shaped halls designed by Buckminster Fuller, giving it the pet name Bucky Ball.' },
    ta: { q: 'பக்மின்ஸ்டர் ஃபுல்லரீனின் செல்லப் பெயர்', options: ['பக்கி பந்து', 'கருப்பு ஈயம்', 'உலர் பனி', 'நீர் வாயு'], explanation: 'பக்மின்ஸ்டர் ஃபுல்லர் வடிவமைத்த குவிந்த மாட அரங்குகளை ஒத்திருப்பதால் இது பக்கி பந்து என அழைக்கப்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: '§15.7.2, p. 179', answer: 0,
    en: { q: 'The resin code on a plastic item represents', options: ['the type of polymer used to make it', 'its price', 'its date of manufacture', 'its weight'], explanation: 'A resin code shows the polymer used and helps recyclers sort plastics.' },
    ta: { q: 'நெகிழிப் பொருளில் உள்ள ரெசின் குறியீடு குறிப்பது', options: ['அதை உருவாக்கப் பயன்பட்ட பலபடியின் வகை', 'அதன் விலை', 'அதன் தயாரிப்புத் தேதி', 'அதன் எடை'], explanation: 'ரெசின் குறியீடு பயன்படுத்தப்பட்ட பலபடியைக் குறிக்கிறது; மறுசுழற்சியாளர்கள் நெகிழிகளைப் பிரிக்க உதவுகிறது.' },
  },
  {
    difficulty: 'easy', source: '§15.7.3, p. 180', answer: 0,
    en: { q: 'Thermocol is made of', options: ['polystyrene (PS)', 'polypropylene (PP)', 'PET', 'HDPE'], explanation: 'Polystyrene, resin code 6, is commonly called Thermocol.' },
    ta: { q: 'தெர்மாகோல் தயாரிக்கப்படும் நெகிழி', options: ['பாலிஸ்டைரீன் (PS)', 'பாலிபுரொப்பலீன் (PP)', 'PET', 'HDPE'], explanation: 'ரெசின் குறியீடு 6 உடைய பாலிஸ்டைரீன் பொதுவாக தெர்மாகோல் எனப்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: '§15.8, p. 181', answer: 0,
    en: { q: 'Tamil Nadu banned one-time use and throwaway plastics from', options: ['1 January 2019', '1 January 2018', '25 June 2019', '1 January 1988'], explanation: 'Under G.O. No. 84 (25/06/2018), the ban on one-time use plastics came into force on 1st January 2019.' },
    ta: { q: 'தமிழ்நாட்டில் ஒருமுறை பயன்படுத்தித் தூக்கியெறியும் நெகிழிகள் தடை செய்யப்பட்ட நாள்', options: ['1 ஜனவரி 2019', '1 ஜனவரி 2018', '25 ஜூன் 2019', '1 ஜனவரி 1988'], explanation: 'அரசாணை எண் 84 (25/06/2018) இன்படி இத்தடை 1 ஜனவரி 2019 முதல் நடைமுறைக்கு வந்தது.' },
  },
  {
    difficulty: 'easy', source: 'Points to Remember, p. 182', answer: 0,
    en: { q: 'Who is called the Father of Modern Organic Chemistry?', options: ['Friedrich Wöhler', 'Antoine Lavoisier', 'Berzelius', 'Andre Geim'], explanation: 'Friedrich Wöhler is called the Father of Modern Organic Chemistry.' },
    ta: { q: 'நவீன கரிம வேதியியலின் தந்தை எனப்படுபவர் யார்?', options: ['ஃப்ரெட்ரிக் வோலர்', 'ஆன்டன் லவாய்சியர்', 'பெர்ஷிலியஸ்', 'ஆண்ட்ரே ஜெம்'], explanation: 'ஃப்ரெட்ரிக் வோலர் நவீன கரிம வேதியியலின் தந்தை எனப்படுகிறார்.' },
  },

  // ------------------------------------------------------------------ Medium
  {
    difficulty: 'medium', source: 'Book exercise III, p. 183', answer: 0,
    en: { q: 'Match the following:\n1. Alkyne – a. Bucky Ball\n2. Andre Geim – b. Oxidation\n3. C₆₀ – c. Graphene\n4. Thermocol – d. Triple bond\n5. Combustion – e. Polystyrene', options: ['1-d, 2-c, 3-a, 4-e, 5-b', '1-d, 2-a, 3-c, 4-e, 5-b', '1-b, 2-c, 3-a, 4-e, 5-d', '1-d, 2-c, 3-e, 4-a, 5-b'], explanation: 'Alkynes have a triple bond, Geim co-discovered graphene, C₆₀ is the Bucky Ball, Thermocol is polystyrene and combustion is oxidation.' },
    ta: { q: 'பொருத்துக:\n1. ஆல்கைன் – a. பக்கி பந்து\n2. ஆண்ட்ரே ஜெம் – b. ஆக்ஸிஜனேற்றம்\n3. C₆₀ – c. கிராஃபீன்\n4. தெர்மாகோல் – d. முப்பிணைப்பு\n5. எரிதல் – e. பாலிஸ்டைரீன்', options: ['1-d, 2-c, 3-a, 4-e, 5-b', '1-d, 2-a, 3-c, 4-e, 5-b', '1-b, 2-c, 3-a, 4-e, 5-d', '1-d, 2-c, 3-e, 4-a, 5-b'], explanation: 'ஆல்கைனில் முப்பிணைப்பு; ஜெம் கிராஃபீனைக் கண்டறிந்தவர்; C₆₀ பக்கி பந்து; தெர்மாகோல் பாலிஸ்டைரீன்; எரிதல் ஆக்ஸிஜனேற்றம்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.1, p. 183', answer: 0,
    en: { q: 'Which statement correctly distinguishes graphite from diamond?', options: ['Graphite conducts heat and electricity; diamond does not.', 'Graphite is hard and transparent; diamond is soft and opaque.', 'Each carbon in graphite has four covalent bonds; in diamond three.', 'Graphite has tetrahedral units; diamond has hexagonal layers.'], explanation: 'Graphite is soft, opaque, has three bonds per carbon in hexagonal layers and conducts; diamond is hard, transparent, tetrahedral and a non-conductor.' },
    ta: { q: 'கிராஃபைட்டையும் வைரத்தையும் சரியாக வேறுபடுத்தும் கூற்று எது?', options: ['கிராஃபைட் வெப்பம், மின்சாரத்தைக் கடத்தும்; வைரம் கடத்தாது.', 'கிராஃபைட் கடினமானது, ஒளிபுகும்; வைரம் மிருதுவானது, ஒளிபுகாது.', 'கிராஃபைட்டில் ஒவ்வொரு கார்பனும் நான்கு சகப்பிணைப்புகள்; வைரத்தில் மூன்று.', 'கிராஃபைட்டில் நான்முகி அலகுகள்; வைரத்தில் அறுங்கோண அடுக்குகள்.'], explanation: 'கிராஃபைட் மிருதுவானது, ஒளிபுகாதது, அறுங்கோண அடுக்குகளில் மூன்று பிணைப்புகள், மின்கடத்தும்; வைரம் கடினமானது, ஒளிபுகும், நான்முகி அமைப்பு, கடத்தாது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.2, p. 183', answer: 0,
    en: { q: 'The two isomers of C₂H₆O are', options: ['CH₃–CH₂–OH and CH₃–O–CH₃', 'CH₃–CH₃ and CH₃–OH', 'CH₃–CHO and CH₃–COOH', 'CH₄ and C₂H₂'], explanation: 'C₂H₆O can be ethanol (an alcohol, O bonded to H and C) or dimethyl ether (O bonded to two carbons).' },
    ta: { q: 'C₂H₆O இன் இரண்டு மாற்றியங்கள்', options: ['CH₃–CH₂–OH மற்றும் CH₃–O–CH₃', 'CH₃–CH₃ மற்றும் CH₃–OH', 'CH₃–CHO மற்றும் CH₃–COOH', 'CH₄ மற்றும் C₂H₂'], explanation: 'C₂H₆O ஆல்கஹால் (O ஒரு H, ஒரு C உடன்) அல்லது ஈதர் (O இரண்டு கார்பன்களுடன்) ஆக இருக்கலாம்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.3, p. 183', answer: 0,
    en: { q: 'Carbon forms only covalent compounds because', options: ['it shares its four valence electrons instead of losing or gaining them', 'it has eight valence electrons', 'it easily loses four electrons to form C⁴⁺', 'it easily gains four electrons to form C⁴⁻'], explanation: 'With configuration 2, 4, carbon completes its octet by sharing four electrons (tetravalency), forming covalent bonds.' },
    ta: { q: 'கார்பன் அயனிச் சேர்மங்களை உருவாக்காததற்குக் காரணம்', options: ['அது நான்கு இணைதிறன் எலக்ட்ரான்களை இழக்கவோ ஏற்கவோ செய்யாமல் பகிர்ந்து கொள்கிறது', 'அதில் எட்டு இணைதிறன் எலக்ட்ரான்கள் உள்ளன', 'அது எளிதில் நான்கு எலக்ட்ரான்களை இழந்து C⁴⁺ ஆகிறது', 'அது எளிதில் நான்கு எலக்ட்ரான்களை ஏற்று C⁴⁻ ஆகிறது'], explanation: '2, 4 அமைப்புடைய கார்பன் நான்கு எலக்ட்ரான்களைப் பகிர்ந்து (நான்கு இணைதிறன்) எண்மத்தை நிறைவு செய்து சகப்பிணைப்புகளை உருவாக்குகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.4, p. 183', answer: 0,
    en: { q: 'Allotropes of an element are', options: ['physically different but chemically similar', 'physically similar but chemically different', 'different elements with the same atomic number', 'compounds with the same molecular formula'], explanation: 'Allotropy is the existence of an element in more than one form that are physically different and chemically similar.' },
    ta: { q: 'ஒரு தனிமத்தின் புறவேற்றுமை வடிவங்கள்', options: ['இயற்பியலில் வேறுபட்டவை, வேதியியலில் ஒத்தவை', 'இயற்பியலில் ஒத்தவை, வேதியியலில் வேறுபட்டவை', 'ஒரே அணு எண் கொண்ட வேறு தனிமங்கள்', 'ஒரே மூலக்கூறு வாய்ப்பாடு கொண்ட சேர்மங்கள்'], explanation: 'புறவேற்றுமை என்பது ஒரு தனிமம் இயற்பியலில் வேறுபட்ட, வேதியியலில் ஒத்த பல வடிவங்களில் காணப்படுதல்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.5, p. 183', answer: 0,
    en: { q: 'One-time use and throwaway plastics are harmful mainly because', options: ['they are used briefly but stay in the environment for over 1,000 years', 'they decompose within a few days', 'they are always recycled completely', 'they are made from metals'], explanation: 'Such items are used for minutes, block drains, pollute water bodies and persist for over a thousand years.' },
    ta: { q: 'ஒருமுறை பயன்படுத்தித் தூக்கியெறியும் நெகிழிகள் ஆபத்தானவை என்பதற்கு முக்கியக் காரணம்', options: ['அவை சிறிது நேரமே பயன்பட்டு 1000 ஆண்டுகளுக்கும் மேல் சூழலில் இருக்கின்றன', 'அவை சில நாள்களில் சிதைந்துவிடும்', 'அவை எப்போதும் முழுமையாக மறுசுழற்சி செய்யப்படுகின்றன', 'அவை உலோகங்களால் ஆனவை'], explanation: 'இவை சில நிமிடங்களே பயன்பட்டு, வடிகால்களை அடைத்து, நீர்நிலைகளை மாசுபடுத்தி, ஆயிரம் ஆண்டுகளுக்கும் மேல் நிலைத்திருக்கின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V.2, p. 183', answer: 0,
    en: { q: 'When carbon reacts with steam, the mixture formed is called', options: ['water gas (CO + H₂)', 'producer gas (CO + N₂)', 'dry ice (solid CO₂)', 'natural gas (CH₄)'], explanation: 'C + H₂O → CO + H₂; this mixture of carbon monoxide and hydrogen is water gas.' },
    ta: { q: 'கார்பன் நீராவியுடன் வினைபுரியும்போது உருவாகும் கலவை', options: ['நீர் வாயு (CO + H₂)', 'உற்பத்தி வாயு (CO + N₂)', 'உலர் பனி (திண்ம CO₂)', 'இயற்கை வாயு (CH₄)'], explanation: 'C + H₂O → CO + H₂; கார்பன் மோனாக்சைடு, ஹைட்ரஜன் கலவை நீர் வாயு.' },
  },
  {
    difficulty: 'medium', source: '§15.5, p. 178', answer: 0,
    en: { q: 'At elevated temperatures carbon reacts with tungsten to form', options: ['tungsten carbide (WC)', 'tungsten oxide', 'tungsten disulphide', 'tungsten carbonate'], explanation: 'Carbon reacts with metals such as iron, tungsten and titanium to form carbides: W + C → WC.' },
    ta: { q: 'அதிக வெப்பநிலையில் கார்பன் டங்ஸ்டனுடன் வினைபுரிந்து உருவாக்குவது', options: ['டங்ஸ்டன் கார்பைடு (WC)', 'டங்ஸ்டன் ஆக்சைடு', 'டங்ஸ்டன் டைசல்பைடு', 'டங்ஸ்டன் கார்பனேட்'], explanation: 'இரும்பு, டங்ஸ்டன், டைட்டானியம் போன்ற உலோகங்களுடன் கார்பன் கார்பைடுகளை உருவாக்குகிறது: W + C → WC.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.2, p. 183', answer: 0,
    en: { q: 'It is dangerous to stay in a poorly ventilated room where a carbon fuel is burning because', options: ['incomplete combustion produces highly toxic carbon monoxide', 'complete combustion produces too much oxygen', 'the fuel produces carbon disulphide', 'the fuel forms calcium carbonate'], explanation: 'In limited air, carbon burns incompletely to CO, a colourless, odourless and highly toxic gas.' },
    ta: { q: 'குறைந்த காற்றோட்டமுள்ள அறையில் கார்பன் எரிபொருள் எரியும்போது அங்கு இருப்பது ஆபத்தானது. ஏனெனில்', options: ['முழுமையற்ற எரிதலால் நச்சுத்தன்மை மிகுந்த கார்பன் மோனாக்சைடு உருவாகிறது', 'முழுமையான எரிதலால் அதிக ஆக்ஸிஜன் உருவாகிறது', 'எரிபொருள் கார்பன் டைசல்பைடைத் தருகிறது', 'எரிபொருள் கால்சியம் கார்பனேட்டை உருவாக்குகிறது'], explanation: 'குறைந்த காற்றில் கார்பன் முழுமையாக எரியாமல் CO ஆகிறது; அது நிறமற்ற, மணமற்ற, நச்சுத்தன்மை மிகுந்த வாயு.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.3, p. 183', answer: 0,
    en: { q: 'Dioxins, among the most toxic chemicals known, are released when we burn', options: ['PVC (resin code 3)', 'PP (resin code 5)', 'HDPE (resin code 2)', 'LDPE (resin code 4)'], explanation: 'Burning polyvinyl chloride releases dioxins, which are extremely harmful to humans.' },
    ta: { q: 'மிகக் கொடிய நச்சுப்பொருள்களில் ஒன்றான டையாக்சின், எதனை எரிக்கும்போது வெளியாகிறது?', options: ['PVC (ரெசின் குறியீடு 3)', 'PP (ரெசின் குறியீடு 5)', 'HDPE (ரெசின் குறியீடு 2)', 'LDPE (ரெசின் குறியீடு 4)'], explanation: 'பாலிவினைல் குளோரைடை எரிக்கும்போது மனிதர்களுக்கு மிகுந்த கேடு விளைவிக்கும் டையாக்சின் வெளியாகிறது.' },
  },
  {
    difficulty: 'medium', source: '§15.1, p. 173', answer: 0,
    en: { q: 'Fullerenes were discovered in 1985 by', options: ['Robert Curl, Harry Kroto and Richard Smalley', 'Andre Geim and Kostya Novoselov', 'Francis Bundy and co-workers', 'Carl Scheele and Smithson Tennant'], explanation: 'Curl, Kroto and Smalley discovered fullerenes; Geim and Novoselov announced graphene in 2004; Bundy converted graphite to diamond in 1955.' },
    ta: { q: '1985 இல் ஃபுல்லரீனைக் கண்டுபிடித்தவர்கள்', options: ['இராபர்ட் கார்ல், ஹாரி க்ரோடோ, ரிச்சர்ட் ஸ்மாலி', 'ஆண்ட்ரே ஜெம், கோஸ்ட்யா நொவோசெலோவ்', 'ஃப்ரான்சிஸ் பண்டி மற்றும் உடன் ஆய்வாளர்கள்', 'கார்ல் ஷீலே, ஸ்மித்சன் டென்னன்ட்'], explanation: 'கார்ல், க்ரோடோ, ஸ்மாலி ஃபுல்லரீனைக் கண்டறிந்தனர்; ஜெம், நொவோசெலோவ் 2004 இல் கிராஃபீனை அறிவித்தனர்; பண்டி 1955 இல் கிராஃபைட்டை வைரமாக மாற்றினார்.' },
  },
  {
    difficulty: 'medium', source: '§15.1, p. 173', answer: 0,
    en: { q: 'Lavoisier burned a diamond in a closed jar and found that it formed carbon dioxide. He concluded that', options: ['diamond and charcoal are made of the same element, carbon', 'diamond is a compound of carbon and oxygen', 'diamond and graphite are different elements', 'diamond is made of oxygen'], explanation: 'Since diamond combined with oxygen to give only CO₂, Lavoisier concluded that diamond and charcoal are both carbon.' },
    ta: { q: 'மூடிய கண்ணாடிக் குடுவையில் வைரத்தை எரித்தபோது கார்பன் டை ஆக்சைடு உருவானதைக் கண்ட லவாய்சியர் கண்ட முடிவு', options: ['வைரமும் கரியும் கார்பன் எனும் ஒரே தனிமத்தால் ஆனவை', 'வைரம் கார்பனும் ஆக்ஸிஜனும் சேர்ந்த சேர்மம்', 'வைரமும் கிராஃபைட்டும் வேறுவேறு தனிமங்கள்', 'வைரம் ஆக்ஸிஜனால் ஆனது'], explanation: 'வைரம் ஆக்ஸிஜனுடன் சேர்ந்து CO₂ ஐ மட்டும் தந்ததால், வைரமும் கரியும் கார்பனே என லவாய்சியர் முடிவு செய்தார்.' },
  },
  {
    difficulty: 'medium', source: '§15.2.2, p. 174', answer: 0,
    en: { q: 'Calcium carbide (CaC₂) is used to', options: ['prepare acetylene gas for welding', 'make fire extinguishers', 'act as an antacid', 'dissolve sulphur'], explanation: 'CaC₂ is used to prepare acetylene for welding and to manufacture graphite and hydrogen.' },
    ta: { q: 'கால்சியம் கார்பைடின் (CaC₂) பயன்', options: ['பற்றவைப்பிற்கான அசிட்டிலீன் வாயுவைத் தயாரித்தல்', 'தீயணைப்பான்கள் தயாரித்தல்', 'அமில நீக்கியாகச் செயல்படுதல்', 'சல்பரைக் கரைத்தல்'], explanation: 'CaC₂ பற்றவைப்பிற்கான அசிட்டிலீன் வாயுவையும், கிராஃபைட், ஹைட்ரஜனையும் தயாரிக்கப் பயன்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: '§15.2.2, p. 174', answer: 0,
    en: { q: 'Carbon monoxide is mainly added to the atmosphere by', options: ['incomplete combustion of fuels', 'photosynthesis', 'complete combustion of coke', 'dissolving limestone in water'], explanation: 'CO is not a natural component of air; it comes mainly from incomplete burning of fuels.' },
    ta: { q: 'வளிமண்டலத்தில் கார்பன் மோனாக்சைடு சேர்வதற்கு முக்கியக் காரணம்', options: ['எரிபொருள்களின் முழுமையற்ற எரிதல்', 'ஒளிச்சேர்க்கை', 'கல்கரியின் முழுமையான எரிதல்', 'சுண்ணாம்புக்கல் நீரில் கரைதல்'], explanation: 'CO காற்றின் இயற்கைக் கூறு அல்ல; எரிபொருள்கள் முழுமையாக எரியாததால் இது உருவாகிறது.' },
  },
  {
    difficulty: 'medium', source: '§15.3.2, p. 175', answer: 0,
    en: { q: 'In methane, carbon shares its four valence electrons with four hydrogen atoms. This property is called', options: ['tetravalency', 'catenation', 'allotropy', 'isomerism'], explanation: 'Carbon (2, 4) needs four electrons to reach the neon configuration, so it forms four covalent bonds: tetravalency.' },
    ta: { q: 'மீத்தேனில் கார்பன் தனது நான்கு இணைதிறன் எலக்ட்ரான்களை நான்கு ஹைட்ரஜன் அணுக்களுடன் பகிர்கிறது. இப்பண்பு', options: ['நான்கு இணைதிறன்', 'சங்கிலித் தொடராக்கம்', 'புறவேற்றுமை வடிவம்', 'மாற்றியம்'], explanation: 'கார்பன் (2, 4) நியான் அமைப்பை அடைய நான்கு எலக்ட்ரான்கள் தேவை; எனவே நான்கு சகப்பிணைப்புகளை உருவாக்குகிறது.' },
  },
  {
    difficulty: 'medium', source: '§15.3.5, p. 176', answer: 0,
    en: { q: 'Graphite is softer than diamond because', options: ['its hexagonal layers are held together by weak van der Waals forces', 'each carbon in it forms four covalent bonds', 'its atoms are arranged in a three-dimensional tetrahedral network', 'it contains no covalent bonds'], explanation: 'In graphite each carbon bonds to three others in a plane; the layers are held only by weak forces and slide over each other.' },
    ta: { q: 'கிராஃபைட் வைரத்தை விட மிருதுவாக இருக்கக் காரணம்', options: ['அதன் அறுங்கோண அடுக்குகள் வலிமை குறைந்த வாண்டர் வால்ஸ் விசையால் பிணைக்கப்பட்டுள்ளன', 'அதில் ஒவ்வொரு கார்பனும் நான்கு சகப்பிணைப்புகளை உருவாக்குகிறது', 'அதன் அணுக்கள் முப்பரிமாண நான்முகி அமைப்பில் உள்ளன', 'அதில் சகப்பிணைப்புகள் இல்லை'], explanation: 'கிராஃபைட்டில் ஒவ்வொரு கார்பனும் ஒரே தளத்தில் மூன்று கார்பன்களுடன் பிணைந்துள்ளது; அடுக்குகள் வலிமை குறைந்த விசையால் மட்டுமே இணைந்துள்ளன.' },
  },
  {
    difficulty: 'medium', source: '§15.3.5, p. 177', answer: 0,
    en: { q: 'Amorphous carbon such as charcoal is obtained by', options: ['heating wood in the absence of air', 'heating graphite at high pressure', 'burning diamond in oxygen', 'passing CO₂ through lime water'], explanation: 'In amorphous carbon the atoms are randomly arranged; charcoal forms when wood is heated without air.' },
    ta: { q: 'கரி போன்ற படிக வடிவமற்ற கார்பன் கிடைப்பது', options: ['விறகை காற்றில்லாமல் எரிக்கும்போது', 'கிராஃபைட்டை அதிக அழுத்தத்தில் வெப்பப்படுத்தும்போது', 'வைரத்தை ஆக்ஸிஜனில் எரிக்கும்போது', 'CO₂ ஐ சுண்ணாம்பு நீரில் செலுத்தும்போது'], explanation: 'படிக வடிவமற்ற கார்பனில் அணுக்கள் ஒழுங்கின்றி அமைந்துள்ளன; விறகை காற்றில்லாமல் எரிக்கும்போது கரி கிடைக்கிறது.' },
  },
  {
    difficulty: 'medium', source: '§15.4, p. 177', answer: 0,
    en: { q: 'Which statement about the physical properties of carbon is correct?', options: ['All allotropes of carbon are solids.', 'Carbon dissolves readily in water.', 'Amorphous carbon has a higher melting point than crystalline carbon.', 'Graphite is transparent and shiny.'], explanation: 'All allotropes are solids; carbon is insoluble in water; amorphous forms melt lower; diamond (not graphite) is transparent.' },
    ta: { q: 'கார்பனின் இயற்பியல் பண்புகள் பற்றிய சரியான கூற்று எது?', options: ['கார்பனின் அனைத்துப் புறவேற்றுமை வடிவங்களும் திண்மங்கள்.', 'கார்பன் நீரில் எளிதில் கரையும்.', 'படிக வடிவமற்ற கார்பனின் உருகுநிலை படிக வடிவத்தை விட அதிகம்.', 'கிராஃபைட் ஒளிபுகும், பளபளப்பானது.'], explanation: 'அனைத்து வடிவங்களும் திண்மங்கள்; கார்பன் நீரில் கரையாது; படிக வடிவமற்றவை குறைந்த உருகுநிலை கொண்டவை; வைரமே ஒளிபுகும்.' },
  },
  {
    difficulty: 'medium', source: '§15.7, p. 178', answer: 0,
    en: { q: 'Plastics are made from long chain organic compounds called', options: ['polymer resins', 'allotropes', 'carbides', 'isomers'], explanation: 'Plastics are made from polymer resins with chemical additives that give them different properties.' },
    ta: { q: 'நெகிழிகள் தயாரிக்கப் பயன்படும் நீண்ட சங்கிலிக் கரிமச் சேர்மங்கள்', options: ['பலபடி ரெசின்கள்', 'புறவேற்றுமை வடிவங்கள்', 'கார்பைடுகள்', 'மாற்றியங்கள்'], explanation: 'நெகிழிகள் பலபடி ரெசின்களுடன் வேதிச் சேர்க்கைகளைச் சேர்த்துத் தயாரிக்கப்படுகின்றன.' },
  },
  {
    difficulty: 'medium', source: '§15.7.3, p. 180', answer: 0,
    en: { q: 'Polycarbonate (PC) plastic is harmful because it contains', options: ['Bisphenol A (BPA), which alters hormone levels', 'cadmium and lead', 'dioxins', 'only styrene'], explanation: 'BPA leaks from PC food and drink containers and increases or decreases certain hormones.' },
    ta: { q: 'பாலி கார்பனேட் (PC) நெகிழி தீங்கானது. ஏனெனில் அதில் உள்ளது', options: ['ஹார்மோன் அளவுகளை மாற்றும் பிஸ்பீனால் A (BPA)', 'காட்மியம், ஈயம்', 'டையாக்சின்கள்', 'ஸ்டைரின் மட்டும்'], explanation: 'உணவு, பானக் கலன்களிலிருந்து BPA கசிந்து சில ஹார்மோன்களைக் கூட்டவோ குறைக்கவோ செய்கிறது.' },
  },
  {
    difficulty: 'medium', source: '§15.9.2, p. 182', answer: 0,
    en: { q: 'For school projects, students are advised not to use', options: ['Thermocol (resin code 6)', 'paper', 'cardboard', 'cloth'], explanation: 'Thermocol is polystyrene, an unsafe plastic that takes a very long time to break down.' },
    ta: { q: 'பள்ளிச் செயல்திட்டங்களுக்கு மாணவர்கள் பயன்படுத்தக் கூடாதது', options: ['தெர்மாகோல் (ரெசின் குறியீடு 6)', 'காகிதம்', 'அட்டை', 'துணி'], explanation: 'தெர்மாகோல் பாலிஸ்டைரீன்; அது தீங்கான, சிதைய மிக நீண்ட காலம் ஆகும் நெகிழி.' },
  },
  {
    difficulty: 'medium', source: 'Activity 1, p. 175', answer: 0,
    en: { q: 'Which of these is an inorganic carbon compound?', options: ['Na₂CO₃', 'Propane', 'Kerosene', 'Cotton'], explanation: 'Carbonates come from non-living matter; propane, kerosene and cotton are organic.' },
    ta: { q: 'பின்வருவனவற்றுள் கனிம கார்பன் சேர்மம் எது?', options: ['Na₂CO₃', 'புரப்பேன்', 'மண்ணெண்ணெய்', 'பருத்தி'], explanation: 'கார்பனேட்டுகள் உயிரற்ற பொருள்களிலிருந்து கிடைப்பவை; புரப்பேன், மண்ணெண்ணெய், பருத்தி கரிமச் சேர்மங்கள்.' },
  },

  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise V.1, p. 183', answer: 0,
    en: { q: 'Which statements about catenation are correct?\n1. It is the binding of an element to itself through covalent bonds.\n2. Carbon can form linear, branched and ring chains.\n3. Catenation in carbon takes place through ionic bonds.', options: ['1 and 2 only', '1 and 3 only', '2 and 3 only', '1, 2 and 3'], explanation: 'Carbon links repeatedly to itself through covalent (not ionic) bonds to form open or closed chains.' },
    ta: { q: 'சங்கிலித் தொடராக்கம் பற்றிய சரியான கூற்றுகள் எவை?\n1. ஒரு தனிமம் சகப்பிணைப்பின் மூலம் தன்னுடனேயே இணைதல்.\n2. கார்பன் நீள், கிளைச், வளையச் சங்கிலிகளை உருவாக்கும்.\n3. கார்பனின் சங்கிலித் தொடராக்கம் அயனிப் பிணைப்பின் மூலம் நடைபெறுகிறது.', options: ['1, 2 மட்டும்', '1, 3 மட்டும்', '2, 3 மட்டும்', '1, 2, 3'], explanation: 'கார்பன் சகப்பிணைப்பின் மூலம் (அயனிப் பிணைப்பு அல்ல) தன்னுடன் மீண்டும் மீண்டும் இணைந்து திறந்த அல்லது மூடிய சங்கிலிகளை உருவாக்குகிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise V.3, p. 183', answer: 0,
    en: { q: 'The three unsafe plastics are PVC, PS and PC/ABS. Which set of resin codes contains only safer plastics?', options: ['2, 4, 5', '2, 3, 5', '4, 5, 6', '1, 5, 7'], explanation: 'Unsafe resin codes are #3 (PVC), #6 (PS) and #7 (PC/ABS); codes 2 (HDPE), 4 (LDPE) and 5 (PP) are safer.' },
    ta: { q: 'தீங்கு விளைவிக்கும் மூன்று நெகிழிகள் PVC, PS, PC/ABS. பாதுகாப்பான நெகிழிகளை மட்டும் கொண்ட ரெசின் குறியீட்டுத் தொகுப்பு எது?', options: ['2, 4, 5', '2, 3, 5', '4, 5, 6', '1, 5, 7'], explanation: 'தீங்கான குறியீடுகள் #3 (PVC), #6 (PS), #7 (PC/ABS); 2 (HDPE), 4 (LDPE), 5 (PP) பாதுகாப்பானவை.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VI.4, p. 183', answer: 0,
    en: { q: 'Yugaa sees plastic water bottles with resin codes 1, 3, 5 and 7. Which bottles should she avoid?', options: ['Codes 3 and 7', 'Codes 1 and 5', 'Codes 1 and 3', 'Codes 5 and 7'], explanation: 'Code 3 (PVC) and code 7 (PC/ABS) contain harmful chemicals such as phthalates and BPA; codes 1 and 5 are not among the unsafe types.' },
    ta: { q: 'யோகா கடையில் ரெசின் குறியீடு 1, 3, 5, 7 உடைய நெகிழித் தண்ணீர் புட்டிகளைக் காண்கிறாள். அவள் எவற்றைத் தவிர்க்க வேண்டும்?', options: ['குறியீடு 3, 7', 'குறியீடு 1, 5', 'குறியீடு 1, 3', 'குறியீடு 5, 7'], explanation: 'குறியீடு 3 (PVC), 7 (PC/ABS) தாலேட்டுகள், BPA போன்ற தீங்கான வேதிப்பொருள்களைக் கொண்டவை; 1, 5 தீங்கான வகைகளில் இல்லை.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VI.1, p. 183', answer: 0,
    en: { q: 'Carbon exists mostly in the combined state in nature. The best reason is that', options: ['its tetravalency lets it form stable covalent bonds with many other elements', 'it is a highly reactive metal at room temperature', 'it has a complete octet like noble gases', 'it forms ionic bonds with all metals'], explanation: 'Carbon readily shares its four electrons with elements like H, O, N and S, so most carbon occurs as compounds (carbonates, coal, petroleum, CO₂).' },
    ta: { q: 'கார்பன் பெரும்பாலும் இணைந்த நிலையிலேயே காணப்படுகிறது. அதற்கான சிறந்த காரணம்', options: ['அதன் நான்கு இணைதிறன் பல தனிமங்களுடன் நிலையான சகப்பிணைப்புகளை உருவாக்க உதவுகிறது', 'அது அறை வெப்பநிலையில் மிகுந்த வினைதிறன் கொண்ட உலோகம்', 'அது மந்த வாயுக்களைப் போல முழுமையான எண்மத்தைக் கொண்டுள்ளது', 'அது எல்லா உலோகங்களுடனும் அயனிப் பிணைப்பை உருவாக்குகிறது'], explanation: 'கார்பன் H, O, N, S போன்ற தனிமங்களுடன் நான்கு எலக்ட்ரான்களை எளிதில் பகிர்வதால் பெரும்பாலும் சேர்மங்களாகவே (கார்பனேட்டுகள், நிலக்கரி, பெட்ரோலியம், CO₂) காணப்படுகிறது.' },
  },
  {
    difficulty: 'hard', source: '§15.3.4, p. 176', answer: 0,
    en: { q: 'Assertion: The molecular formula C₂H₆O alone is not enough to name the compound.\nReason: A molecular formula shows only the number of atoms, not how they are arranged.', options: AR_EN, explanation: 'C₂H₆O could be ethanol or dimethyl ether; without the structure we cannot name it, which the reason explains.' },
    ta: { q: 'கூற்று: C₂H₆O என்ற மூலக்கூறு வாய்ப்பாட்டை மட்டும் கொண்டு சேர்மத்திற்குப் பெயரிட முடியாது.\nகாரணம்: மூலக்கூறு வாய்ப்பாடு அணுக்களின் எண்ணிக்கையை மட்டுமே காட்டும்; அவை அமைந்துள்ள விதத்தைக் காட்டாது.', options: AR_TA, explanation: 'C₂H₆O ஆல்கஹாலாகவோ ஈதராகவோ இருக்கலாம்; அமைப்பு தெரியாமல் பெயரிட முடியாது; காரணம் இதனைச் சரியாக விளக்குகிறது.' },
  },
  {
    difficulty: 'hard', source: '§15.3.5, p. 176', answer: 0,
    en: { q: 'Assertion: Diamond is extremely hard.\nReason: Each carbon atom in diamond is bonded to four others in a repeated tetrahedral, three-dimensional network.', options: AR_EN, explanation: 'The rigid three-dimensional network of strong covalent bonds accounts for diamond’s hardness.' },
    ta: { q: 'கூற்று: வைரம் மிகவும் கடினமானது.\nகாரணம்: வைரத்தில் ஒவ்வொரு கார்பனும் நான்கு கார்பன்களுடன் தொடர்ச்சியான நான்முகி, முப்பரிமாண அமைப்பில் பிணைந்துள்ளது.', options: AR_TA, explanation: 'வலிமையான சகப்பிணைப்புகளின் உறுதியான முப்பரிமாண அமைப்பே வைரத்தின் கடினத்தன்மைக்குக் காரணம்.' },
  },
  {
    difficulty: 'hard', source: '§15.3.5, p. 176', answer: 1,
    en: { q: 'Assertion: Graphite is a conductor of electricity.\nReason: Graphite is opaque and slippery to touch.', options: AR_EN, explanation: 'Both statements are true facts about graphite, but being opaque and slippery does not explain its conductivity.' },
    ta: { q: 'கூற்று: கிராஃபைட் மின்சாரத்தைக் கடத்தும்.\nகாரணம்: கிராஃபைட் ஒளிபுகாதது, தொடுவதற்கு வழவழப்பானது.', options: AR_TA, explanation: 'இரண்டும் கிராஃபைட் பற்றிய உண்மைகள்; ஆனால் ஒளிபுகாமையும் வழவழப்பும் மின்கடத்துத் திறனை விளக்குவதில்லை.' },
  },
  {
    difficulty: 'hard', source: '§15.5, p. 177', answer: 2,
    en: { q: 'Assertion: Elemental carbon undergoes only a limited number of reactions, and only at elevated temperatures.\nReason: Carbon compounds also do not react at room temperature.', options: AR_EN, explanation: 'Elemental carbon is unreactive at room temperature, but its compounds undergo a large number of reactions even at room temperature.' },
    ta: { q: 'கூற்று: தனிம கார்பன் அதிக வெப்பநிலையில் மட்டுமே சில வினைகளில் ஈடுபடுகிறது.\nகாரணம்: கார்பன் சேர்மங்களும் அறை வெப்பநிலையில் வினைபுரிவதில்லை.', options: AR_TA, explanation: 'தனிம கார்பன் அறை வெப்பநிலையில் வினைபுரியாது; ஆனால் அதன் சேர்மங்கள் அறை வெப்பநிலையிலேயே பல வினைகளில் ஈடுபடுகின்றன.' },
  },
  {
    difficulty: 'hard', source: '§15.7.2, p. 179', answer: 3,
    en: { q: 'Assertion: Every plastic that carries a resin code can be recycled.\nReason: Different polymers do not mix when plastics are recycled, so they must be sorted.', options: AR_EN, explanation: 'Resin codes look like the recycling symbol, but that does not mean all coded plastics can be recycled; the reason is true.' },
    ta: { q: 'கூற்று: ரெசின் குறியீடுள்ள எல்லா நெகிழிகளையும் மறுசுழற்சி செய்ய முடியும்.\nகாரணம்: மறுசுழற்சியின்போது வெவ்வேறு பலபடிகள் ஒன்றுடன் ஒன்று கலப்பதில்லை; எனவே அவை பிரிக்கப்பட வேண்டும்.', options: AR_TA, explanation: 'ரெசின் குறியீடு மறுசுழற்சிக் குறியீட்டைப் போலத் தோன்றினாலும் குறியீடுள்ள எல்லா நெகிழிகளையும் மறுசுழற்சி செய்ய முடியாது; காரணம் சரி.' },
  },
  {
    difficulty: 'hard', source: '§15.3.5, p. 176', imageUrl: `${IMG}/allotrope-a.png`, answer: 0,
    en: { q: 'The figure shows the arrangement of carbon atoms in one crystalline allotrope. Identify it and a property that follows from this structure.', options: ['Diamond – hard and a non-conductor of electricity', 'Graphite – soft and a conductor of electricity', 'Fullerene – a soccer-ball molecule of 60 atoms', 'Charcoal – randomly arranged atoms'], explanation: 'Each carbon is bonded to four others in a repeating tetrahedral 3-D network, which is diamond; this makes it hard and non-conducting.' },
    ta: { q: 'படம் ஒரு படிக வடிவ கார்பனில் அணுக்களின் அமைப்பைக் காட்டுகிறது. அதை அடையாளம் கண்டு, இந்த அமைப்பால் ஏற்படும் பண்பைத் தேர்ந்தெடு.', options: ['வைரம் – கடினமானது, மின்சாரத்தைக் கடத்தாது', 'கிராஃபைட் – மிருதுவானது, மின்சாரத்தைக் கடத்தும்', 'ஃபுல்லரீன் – 60 அணுக்களாலான கால்பந்து வடிவ மூலக்கூறு', 'கரி – ஒழுங்கின்றி அமைந்த அணுக்கள்'], explanation: 'ஒவ்வொரு கார்பனும் நான்கு கார்பன்களுடன் தொடர்ச்சியான நான்முகி முப்பரிமாண அமைப்பில் பிணைந்திருப்பது வைரம்; இதனால் அது கடினமானது, மின்கடத்தாது.' },
  },
  {
    difficulty: 'hard', source: '§15.3.5, p. 176', imageUrl: `${IMG}/allotrope-c.png`, answer: 0,
    en: { q: 'The figure shows a spherical allotrope of carbon. Which statement about it is correct?', options: ['It is C₆₀, made of 5- and 6-membered rings of carbon atoms.', 'It is graphite, made of flat hexagonal layers.', 'It is diamond, made of tetrahedral units.', 'It is an amorphous form obtained by heating wood.'], explanation: 'This is Buckminster fullerene (C₆₀), the third crystalline allotrope, whose 60 atoms form pentagons and hexagons like a soccer ball.' },
    ta: { q: 'படம் கார்பனின் கோள வடிவப் புறவேற்றுமை வடிவத்தைக் காட்டுகிறது. அதைப் பற்றிய சரியான கூற்று எது?', options: ['இது C₆₀; கார்பன் அணுக்களின் 5, 6 உறுப்பு வளையங்களால் ஆனது.', 'இது கிராஃபைட்; தட்டையான அறுங்கோண அடுக்குகளால் ஆனது.', 'இது வைரம்; நான்முகி அலகுகளால் ஆனது.', 'இது விறகை எரித்துப் பெறும் படிக வடிவமற்ற கார்பன்.'], explanation: 'இது பக்மின்ஸ்டர் ஃபுல்லரீன் (C₆₀); அதன் 60 அணுக்கள் கால்பந்து போல ஐங்கோணங்களையும் அறுங்கோணங்களையும் உருவாக்குகின்றன.' },
  },
  {
    difficulty: 'hard', source: '§15.3.3, p. 175', answer: 0,
    en: { q: 'Ethene (C₂H₄) is an alkene. How many electrons are shared between its two carbon atoms?', options: ['4', '2', '6', '8'], explanation: 'An alkene has a carbon–carbon double bond, i.e. two shared pairs = 4 electrons.' },
    ta: { q: 'ஈத்தீன் (C₂H₄) ஒரு ஆல்கீன். அதன் இரண்டு கார்பன் அணுக்களுக்கிடையே பங்கிடப்படும் எலக்ட்ரான்கள் எத்தனை?', options: ['4', '2', '6', '8'], explanation: 'ஆல்கீனில் கார்பன்–கார்பன் இரட்டைப் பிணைப்பு உள்ளது; இரண்டு இணைகள் = 4 எலக்ட்ரான்கள்.' },
  },
  {
    difficulty: 'hard', source: '§15.7.3, p. 180', answer: 0,
    en: { q: 'Which statements about polystyrene (PS) are correct?\n1. Its building block, styrene, may cause cancer.\n2. More styrene leaks into food that is hot or oily.\n3. It breaks down completely within a year.', options: ['1 and 2 only', '1 and 3 only', '2 and 3 only', '1, 2 and 3'], explanation: 'Styrene may cause cancer and leaks more into hot or oily food; PS takes 100 to 1 million years to break down.' },
    ta: { q: 'பாலிஸ்டைரீன் (PS) பற்றிய சரியான கூற்றுகள் எவை?\n1. அதன் அடிப்படை அலகான ஸ்டைரின் புற்றுநோயை ஏற்படுத்தலாம்.\n2. சூடான அல்லது எண்ணெய்ப் பசையுள்ள உணவில் அதிக ஸ்டைரின் கசிகிறது.\n3. அது ஓராண்டுக்குள் முழுமையாகச் சிதைந்துவிடும்.', options: ['1, 2 மட்டும்', '1, 3 மட்டும்', '2, 3 மட்டும்', '1, 2, 3'], explanation: 'ஸ்டைரின் புற்றுநோயை ஏற்படுத்தலாம், சூடான அல்லது எண்ணெய் உணவில் அதிகம் கசியும்; PS சிதைய 100 முதல் 10 லட்சம் ஆண்டுகள் ஆகும்.' },
  },
  {
    difficulty: 'hard', source: '§15.8.1, p. 181', answer: 0,
    en: { q: 'Which statements about banned plastic items are correct?\n1. About 97% of plastic bags do not get recycled.\n2. Most one-time use plates are made of polystyrene.\n3. Plastic straws are easy to recycle because they are light.', options: ['1 and 2 only', '1 and 3 only', '2 and 3 only', '1, 2 and 3'], explanation: 'Straws are too light and small to be recycled and are among the top 10 ocean plastic items; statements 1 and 2 are correct.' },
    ta: { q: 'தடைசெய்யப்பட்ட நெகிழிப் பொருள்கள் பற்றிய சரியான கூற்றுகள் எவை?\n1. ஏறத்தாழ 97% நெகிழிப் பைகள் மறுசுழற்சி செய்யப்படுவதில்லை.\n2. பெரும்பாலான ஒருமுறை பயன்படுத்தும் தட்டுகள் பாலிஸ்டைரீனால் ஆனவை.\n3. நெகிழி உறிஞ்சு குழாய்கள் எடை குறைவானவை என்பதால் எளிதில் மறுசுழற்சி செய்யலாம்.', options: ['1, 2 மட்டும்', '1, 3 மட்டும்', '2, 3 மட்டும்', '1, 2, 3'], explanation: 'உறிஞ்சு குழாய்கள் மிக இலேசானவை, சிறியவை என்பதால் மறுசுழற்சி செய்ய இயலாது; கடல் நெகிழி மாசின் முதல் பத்தில் உள்ளன. கூற்று 1, 2 சரி.' },
  },
  {
    difficulty: 'hard', source: '§15.2.2, p. 174', answer: 0,
    en: { q: 'Calcium carbonate is prepared by passing carbon dioxide into a solution of slaked lime. Which use matches this compound?', options: ['Antacid', 'Solvent for sulphur', 'Main component of water gas', 'Preparing acetylene for welding'], explanation: 'CaCO₃ (insoluble crystalline solid) is used as an antacid; CS₂ dissolves sulphur, CO is in water gas, CaC₂ gives acetylene.' },
    ta: { q: 'நீர்த்த சுண்ணாம்புக் கரைசலில் கார்பன் டை ஆக்சைடைச் செலுத்தி கால்சியம் கார்பனேட் தயாரிக்கப்படுகிறது. இச்சேர்மத்தின் பயன் எது?', options: ['அமில நீக்கி', 'சல்பரின் கரைப்பான்', 'நீர் வாயுவின் முக்கியக் கூறு', 'பற்றவைப்பிற்கான அசிட்டிலீன் தயாரிப்பு'], explanation: 'CaCO₃ (நீரில் கரையாத படிகத் திண்மம்) அமில நீக்கியாகப் பயன்படுகிறது; CS₂ சல்பரைக் கரைக்கும், CO நீர் வாயுவில் உள்ளது, CaC₂ அசிட்டிலீனைத் தரும்.' },
  },
];
