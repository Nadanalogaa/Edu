// Tamil Nadu State Board, 9th Science, Unit 4 – Electric Charge and Electric Current (மின்னூட்டமும் மின்னோட்டமும்).
// Questions are written in our own words. "Book ..." sources test the idea of that textbook
// exercise or worked example; "§" sources are our own section questions.
// source = section / exercise and printed page of the English-medium book (Tamil-medium pages match).

import { BankQuestion, AR_EN, AR_TA } from './types';

const IMG = '/content/9/state_board/science/04';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.1, p. 49', answer: 0,
    en: { q: 'In current electricity, a body is said to carry a positive charge when it has', options: ['a shortage of electrons', 'extra electrons', 'extra neutrons', 'a shortage of protons'], explanation: 'Removing electrons from a neutral atom or body leaves it positively charged (a positive ion).' },
    ta: { q: 'மின்னோட்டவியலில் ஒரு பொருள் நேர் மின்னூட்டம் பெற்றுள்ளது என்றால் அதில்', options: ['எலக்ட்ரான்கள் குறைவாக உள்ளன', 'எலக்ட்ரான்கள் கூடுதலாக உள்ளன', 'நியூட்ரான்கள் கூடுதலாக உள்ளன', 'புரோட்டான்கள் குறைவாக உள்ளன'], explanation: 'நடுநிலையான அணு அல்லது பொருளிலிருந்து எலக்ட்ரான் நீக்கப்பட்டால் அது நேர் மின்னூட்டம் பெறுகிறது (நேர் அயனி).' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.2, p. 49', answer: 0,
    en: { q: 'When a plastic comb is rubbed on dry hair, electric charge is', options: ['transferred from the hair to the comb', 'created on the comb', 'destroyed on the hair', 'created on both'], explanation: 'Rubbing only moves electrons from the hair to the comb; charge is neither created nor destroyed.' },
    ta: { q: 'பிளாஸ்டிக் சீப்பை உலர்ந்த தலைமுடியில் தேய்க்கும்போது மின்னூட்டம்', options: ['முடியிலிருந்து சீப்புக்கு இடம்பெயர்கிறது', 'சீப்பில் உருவாக்கப்படுகிறது', 'முடியில் அழிக்கப்படுகிறது', 'இரண்டிலும் உருவாக்கப்படுகிறது'], explanation: 'தேய்க்கும்போது எலக்ட்ரான்கள் முடியிலிருந்து சீப்புக்கு இடம்பெயர்கின்றன; மின்னூட்டம் உருவாவதோ அழிவதோ இல்லை.' },
  },
  {
    difficulty: 'easy', source: '§4.1.1, p. 39', answer: 0,
    en: { q: 'The SI unit of electric charge is the', options: ['coulomb', 'ampere', 'volt', 'ohm'], explanation: 'Electric charge is measured in coulomb (C).' },
    ta: { q: 'மின்னூட்டத்தின் SI அலகு', options: ['கூலூம்', 'ஆம்பியர்', 'வோல்ட்', 'ஓம்'], explanation: 'மின்னூட்டம் கூலூம் (C) என்ற அலகால் அளக்கப்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: '§4.1.1, p. 39', answer: 0,
    en: { q: 'The magnitude of the charge on one electron is', options: ['1.6 × 10⁻¹⁹ C', '1.6 × 10¹⁹ C', '6.25 × 10⁻¹⁹ C', '9.1 × 10⁻³¹ C'], explanation: 'The electron carries the fundamental charge e = 1.6 × 10⁻¹⁹ C; 9.1 × 10⁻³¹ is its mass in kg.' },
    ta: { q: 'ஒரு எலக்ட்ரானின் மின்னூட்டத்தின் மதிப்பு', options: ['1.6 × 10⁻¹⁹ C', '1.6 × 10¹⁹ C', '6.25 × 10⁻¹⁹ C', '9.1 × 10⁻³¹ C'], explanation: 'எலக்ட்ரானின் அடிப்படை மின்னூட்டம் e = 1.6 × 10⁻¹⁹ C; 9.1 × 10⁻³¹ என்பது அதன் நிறை (கிகி).' },
  },
  {
    difficulty: 'easy', source: '§4.1.2, p. 40', answer: 0,
    en: { q: 'Two charges of the same sign placed near each other will', options: ['repel each other', 'attract each other', 'neutralise each other', 'have no effect on each other'], explanation: 'Like charges repel and unlike charges attract.' },
    ta: { q: 'ஒரே வகை மின்னூட்டங்கள் அருகருகே வைக்கப்பட்டால் அவை', options: ['ஒன்றையொன்று விரட்டும்', 'ஒன்றையொன்று கவரும்', 'ஒன்றையொன்று சமன் செய்யும்', 'எந்த விளைவும் ஏற்படுத்தாது'], explanation: 'ஓரின மின்னூட்டங்கள் ஒன்றையொன்று விரட்டும்; வேறின மின்னூட்டங்கள் கவரும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II, p. 49', answer: 0,
    en: { q: 'Which is the unit of electric field?', options: ['newton per coulomb', 'coulomb per second', 'joule per coulomb', 'volt per ampere'], explanation: 'Electric field is force per unit charge, N C⁻¹. C s⁻¹ is the ampere, J C⁻¹ the volt and V A⁻¹ the ohm.' },
    ta: { q: 'மின்புலத்தின் அலகு எது?', options: ['நியூட்டன் / கூலூம்', 'கூலூம் / வினாடி', 'ஜூல் / கூலூம்', 'வோல்ட் / ஆம்பியர்'], explanation: 'மின்புலம் = ஓரலகு மின்னூட்டத்தின் மீதான விசை, N C⁻¹. C s⁻¹ ஆம்பியர், J C⁻¹ வோல்ட், V A⁻¹ ஓம்.' },
  },
  {
    difficulty: 'easy', source: '§4.2.2, p. 41', answer: 0,
    en: { q: 'The instrument used to measure electric current is the', options: ['ammeter', 'voltmeter', 'galvanometer only', 'rheostat'], explanation: 'An ammeter, connected in series, measures the current in a circuit.' },
    ta: { q: 'மின்னோட்டத்தை அளவிடப் பயன்படும் கருவி', options: ['அம்மீட்டர்', 'வோல்ட்மீட்டர்', 'கால்வனாமீட்டர் மட்டும்', 'மின்தடைமாற்றி'], explanation: 'தொடரிணைப்பில் இணைக்கப்படும் அம்மீட்டர் மின்னோட்டத்தை அளக்கிறது.' },
  },
  {
    difficulty: 'easy', source: '§4.2.4, p. 43', answer: 0,
    en: { q: 'The SI unit of both e.m.f and potential difference is the', options: ['volt', 'ampere', 'coulomb', 'watt'], explanation: 'Both are work done per unit charge, J C⁻¹, which is the volt.' },
    ta: { q: 'மின்னியக்கு விசை, மின்னழுத்த வேறுபாடு இரண்டின் SI அலகும்', options: ['வோல்ட்', 'ஆம்பியர்', 'கூலூம்', 'வாட்'], explanation: 'இரண்டுமே ஓரலகு மின்னூட்டத்திற்கான வேலை, J C⁻¹ = வோல்ட்.' },
  },
  {
    difficulty: 'easy', source: '§4.2.5, p. 43', answer: 0,
    en: { q: 'The SI unit of resistance is the', options: ['ohm (Ω)', 'volt (V)', 'ampere (A)', 'coulomb (C)'], explanation: 'Resistance is measured in ohm, symbol Ω.' },
    ta: { q: 'மின்தடையின் SI அலகு', options: ['ஓம் (Ω)', 'வோல்ட் (V)', 'ஆம்பியர் (A)', 'கூலூம் (C)'], explanation: 'மின்தடையின் அலகு ஓம்; குறியீடு Ω.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.5, p. 49', answer: 0,
    en: { q: 'The heating effect of electric current is also known as', options: ['Joule heating', 'Coulomb heating', 'Ampere heating', 'Volta heating'], explanation: 'The conversion of electrical energy into heat was studied by Joule, so it is called Joule heating.' },
    ta: { q: 'மின்னோட்டத்தின் வெப்ப விளைவு இவ்வாறும் அழைக்கப்படுகிறது', options: ['ஜூல் வெப்பமேறல்', 'கூலூம் வெப்பமேறல்', 'ஆம்பியர் வெப்பமேறல்', 'வோல்ட்டா வெப்பமேறல்'], explanation: 'மின்னாற்றல் வெப்ப ஆற்றலாக மாறுவதை ஜூல் ஆய்வு செய்ததால் அது ஜூல் வெப்பமேறல் எனப்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.7, p. 49', answer: 0,
    en: { q: 'Electroplating is an application of the', options: ['chemical effect of current', 'heating effect of current', 'magnetic effect of current', 'lighting effect of current'], explanation: 'Depositing a metal from a solution using current is a chemical effect of current.' },
    ta: { q: 'மின்முலாம் பூசுதல் எதற்கான பயன்பாடு?', options: ['மின்னோட்டத்தின் வேதி விளைவு', 'மின்னோட்டத்தின் வெப்ப விளைவு', 'மின்னோட்டத்தின் காந்த விளைவு', 'மின்னோட்டத்தின் ஒளி விளைவு'], explanation: 'கரைசலிலிருந்து மின்னோட்டத்தால் உலோகம் படிவது வேதி விளைவாகும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise IV.4, p. 50', answer: 0,
    en: { q: 'The frequency of the ac mains supply used in Indian homes is _____ Hz.', options: ['50', '60', '110', '220'], explanation: 'Domestic ac in India is 220 V at 50 Hz (the USA uses 110 V, 60 Hz).' },
    ta: { q: 'இந்தியாவில் வீடுகளுக்கு வழங்கப்படும் மாறுதிசை மின்னோட்டத்தின் அதிர்வெண் _____ Hz.', options: ['50', '60', '110', '220'], explanation: 'இந்தியாவில் வீட்டு மின்சாரம் 220 V, 50 Hz (அமெரிக்காவில் 110 V, 60 Hz).' },
  },
  {
    difficulty: 'easy', source: 'Book exercise IV.2, p. 50', answer: 0,
    en: { q: 'The current taken as flowing opposite to the motion of electrons is called _____ current.', options: ['conventional', 'electron', 'alternating', 'induced'], explanation: 'Conventional current is the flow of positive charge, opposite to the electron current.' },
    ta: { q: 'எலக்ட்ரான்கள் நகரும் திசைக்கு எதிர்த்திசையில் பாய்வதாகக் கருதப்படும் மின்னோட்டம் _____ மின்னோட்டம் எனப்படும்.', options: ['மரபு', 'எலக்ட்ரான்', 'மாறுதிசை', 'தூண்டப்பட்ட'], explanation: 'மரபு மின்னோட்டம் நேர் மின்னூட்டங்கள் இயங்கும் திசையில் கருதப்படுகிறது; அது எலக்ட்ரான் மின்னோட்டத்திற்கு எதிர்த்திசை.' },
  },
  {
    difficulty: 'easy', source: '§4.5.2, p. 47', answer: 0,
    en: { q: 'A device that converts ac into dc is called a', options: ['rectifier', 'inverter', 'transformer', 'rheostat'], explanation: 'A rectifier (battery eliminator) converts ac to dc; an inverter does the reverse.' },
    ta: { q: 'மாறுதிசை மின்னோட்டத்தை நேர்திசை மின்னோட்டமாக மாற்றும் கருவி', options: ['திருத்தி', 'நேர்மாற்றி', 'மின்மாற்றி', 'மின்தடைமாற்றி'], explanation: 'திருத்தி (மின்கல நீக்கி) ac-ஐ dc-ஆக மாற்றும்; நேர்மாற்றி dc-ஐ ac-ஆக மாற்றும்.' },
  },
  {
    difficulty: 'easy', source: '§4.4.2, p. 46', answer: 0,
    en: { q: 'In an electrolyte, the electrode connected to the positive terminal of the cell is called the', options: ['anode', 'cathode', 'electrolyte', 'resistor'], explanation: 'The positive electrode is the anode and the negative electrode is the cathode.' },
    ta: { q: 'மின்பகு திரவத்தில், மின்கலத்தின் நேர் முனையுடன் இணைக்கப்படும் மின்வாய்', options: ['ஆனோடு', 'கேதோடு', 'மின்பகுளி', 'மின்தடையம்'], explanation: 'நேர் மின்வாய் ஆனோடு; எதிர் மின்வாய் கேதோடு.' },
  },
  {
    difficulty: 'easy', source: '§4.5.4, p. 47', answer: 0,
    en: { q: 'Electrical energy can be stored (for example in a battery) only in the form of', options: ['direct current', 'alternating current', 'both ac and dc', 'high-frequency ac'], explanation: 'Electricity can be stored only as dc, which is why cells and batteries give dc.' },
    ta: { q: 'மின்சாரத்தை (எ.கா. மின்கல அடுக்கில்) எந்த வடிவில் மட்டுமே சேமிக்க இயலும்?', options: ['நேர்திசை மின்னோட்டம்', 'மாறுதிசை மின்னோட்டம்', 'ac மற்றும் dc இரண்டும்', 'அதிக அதிர்வெண் ac'], explanation: 'நேர்திசை மின்னோட்ட வடிவில் மட்டுமே மின்சாரத்தைச் சேமிக்க இயலும்.' },
  },

  {
    difficulty: 'easy', source: '§4.3, p. 44', answer: 0,
    en: { q: 'The four main components of any electric circuit are a cell, connecting wire, a switch and a', options: ['resistor or load', 'transformer', 'rectifier', 'voltmeter'], explanation: 'A basic circuit needs a cell, connecting wires, a switch and a resistor (load).' },
    ta: { q: 'எந்த மின்சுற்றிலும் உள்ள நான்கு முக்கியக் கூறுகள்: மின்கலம், இணைப்புக் கம்பி, சாவி மற்றும்', options: ['மின்தடை அல்லது மின்பளு', 'மின்மாற்றி', 'திருத்தி', 'வோல்ட்மீட்டர்'], explanation: 'அடிப்படை மின்சுற்றுக்கு மின்கலம், இணைப்புக் கம்பி, சாவி, மின்தடை ஆகியவை தேவை.' },
  },
  {
    difficulty: 'easy', source: '§4.2.5, p. 43', answer: 0,
    en: { q: 'A variable resistor used to obtain a desired resistance in a circuit is called a', options: ['rheostat', 'fuse', 'capacitor', 'galvanometer'], explanation: 'Rheostats are variable resistors; fixed resistors have a fixed value.' },
    ta: { q: 'மின்சுற்றில் தேவையான மின்தடையைப் பெறப் பயன்படும் மாறும் மின்தடையம்', options: ['மின்தடைமாற்றி', 'உருகி', 'மின்தேக்கி', 'கால்வனாமீட்டர்'], explanation: 'மின்தடைமாற்றி (ரியோஸ்டாட்) ஒரு மாறும் மின்தடையம்; நிலையான மின்தடையங்களின் மதிப்பு மாறாது.' },
  },
  {
    difficulty: 'easy', source: '§4.4.3, p. 46', answer: 0,
    en: { q: 'The direction of the magnetic field around a straight current-carrying wire is given by the', options: ['right hand thumb rule', "Fleming's left hand rule", "Ohm's law", "Joule's law"], explanation: 'Thumb along the current, the curled fingers of the right hand show the magnetic field.' },
    ta: { q: 'மின்னோட்டம் பாயும் நேர்க்கம்பியைச் சுற்றிய காந்தப்புலத்தின் திசையைத் தருவது', options: ['வலதுகை கட்டைவிரல் விதி', 'ஃபிளெமிங்கின் இடதுகை விதி', 'ஓம் விதி', 'ஜூல் விதி'], explanation: 'கட்டைவிரல் மின்னோட்டத்தின் திசையைக் காட்டினால், மடக்கிய விரல்கள் காந்தப்புலத்தின் திசையைக் காட்டும்.' },
  },
  {
    difficulty: 'easy', source: '§4.5.1, p. 46', answer: 0,
    en: { q: 'Which of these is a source of direct current?', options: ['Solar cell', 'Household mains socket', 'Step-up transformer', 'Power station ac generator'], explanation: 'Batteries, solar cells and thermocouples give dc; the mains supply is ac.' },
    ta: { q: 'பின்வருவனவற்றுள் நேர்திசை மின்னோட்ட மூலம் எது?', options: ['சூரிய மின்கலம்', 'வீட்டு மின் இணைப்புப் புள்ளி', 'ஏற்று மின்மாற்றி', 'மின்நிலைய ac மின்னியற்றி'], explanation: 'மின்கல அடுக்கு, சூரிய மின்கலம், வெப்ப மின்னிரட்டை ஆகியவை dc தரும்; வீட்டு மின்சாரம் ac.' },
  },

  // ---------------------------------------------------------------- Medium
  {
    difficulty: 'medium', source: 'Book exercise I.3, p. 49', answer: 0,
    en: { q: 'Electric lines of force _____ on a positive charge and _____ on a negative charge.', options: ['start; end', 'end; start', 'start; start', 'end; end'], explanation: 'Lines of force point radially outward from a positive charge and radially inward to a negative charge.' },
    ta: { q: 'மின்விசைக் கோடுகள் நேர் மின்னூட்டத்தில் _____, எதிர் மின்னூட்டத்தில் _____.', options: ['தொடங்கி; முடிவடையும்', 'முடிவடைந்து; தொடங்கும்', 'தொடங்கி; தொடங்கும்', 'முடிவடைந்து; முடிவடையும்'], explanation: 'நேர் மின்னூட்டத்திலிருந்து ஆரவழியில் வெளிநோக்கியும், எதிர் மின்னூட்டத்தை நோக்கி உள்நோக்கியும் கோடுகள் அமைகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.4, p. 49', answer: 0,
    en: { q: 'The electric potential at a point near a charge is a measure of the _____ needed to bring a unit positive charge to that point.', options: ['work', 'force', 'ability', 'tendency'], explanation: 'Electric potential is the work done on a unit positive charge to bring it to that point against electric forces.' },
    ta: { q: 'ஒரு மின்னூட்டத்தின் அருகிலுள்ள புள்ளியில் மின்னழுத்தம் என்பது ஓரலகு நேர் மின்னூட்டத்தை அப்புள்ளிக்குக் கொண்டுவரத் தேவையான _____ அளவாகும்.', options: ['வேலையின்', 'விசையின்', 'திறமையின்', 'போக்கின்'], explanation: 'மின்விசைகளுக்கு எதிராக ஓரலகு நேர் மின்னூட்டத்தை அப்புள்ளிக்குக் கொண்டுவரச் செய்யப்படும் வேலையே மின்னழுத்தம்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.6, p. 49', answer: 0,
    en: { q: 'When current passes through copper sulphate solution, the charge is carried by', options: ['both electrons and positive ions', 'electrons only', 'positive ions only', 'neutrons'], explanation: 'In an electrolyte both electrons and positive (copper) ions conduct electricity.' },
    ta: { q: 'தாமிர சல்பேட் கரைசலின் வழியே மின்னோட்டம் பாயும்போது மின்னூட்டத்தைக் கடத்துபவை', options: ['எலக்ட்ரான்களும் நேர் அயனிகளும்', 'எலக்ட்ரான்கள் மட்டும்', 'நேர் அயனிகள் மட்டும்', 'நியூட்ரான்கள்'], explanation: 'மின்பகுளியில் எலக்ட்ரான்களும் நேர் (தாமிர) அயனிகளும் மின்னோட்டத்தைக் கடத்துகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.8, p. 49', answer: 0,
    en: { q: 'The resistance of a wire depends on', options: ['its temperature, its shape and size, and the material', 'only the current through it', 'only the voltage across it', 'only its colour of insulation'], explanation: 'Resistance depends on temperature, geometry (length, thickness) and the nature of the material.' },
    ta: { q: 'ஒரு கம்பியின் மின்தடை எவற்றைச் சார்ந்தது?', options: ['வெப்பநிலை, வடிவம் மற்றும் அளவு, கம்பியின் இயல்பு (பொருள்)', 'அதன் வழியே பாயும் மின்னோட்டம் மட்டும்', 'அதன் குறுக்கே உள்ள மின்னழுத்தம் மட்டும்', 'காப்புறையின் நிறம் மட்டும்'], explanation: 'மின்தடை வெப்பநிலை, வடிவம் (நீளம், தடிமன்) மற்றும் கம்பியின் இயல்பைச் சார்ந்தது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II, p. 49', answer: 0,
    en: { q: 'Match the quantity with its unit:\n1. Electric charge  2. Potential difference  3. Resistance  4. Electric current\n(a) ampere  (b) ohm  (c) coulomb  (d) volt', options: ['1-c, 2-d, 3-b, 4-a', '1-a, 2-d, 3-b, 4-c', '1-c, 2-b, 3-d, 4-a', '1-d, 2-c, 3-a, 4-b'], explanation: 'Charge – coulomb, potential difference – volt, resistance – ohm, current – ampere.' },
    ta: { q: 'அளவையும் அதன் அலகையும் பொருத்துக:\n1. மின்னூட்டம்  2. மின்னழுத்த வேறுபாடு  3. மின்தடை  4. மின்னோட்டம்\n(a) ஆம்பியர்  (b) ஓம்  (c) கூலூம்  (d) வோல்ட்', options: ['1-c, 2-d, 3-b, 4-a', '1-a, 2-d, 3-b, 4-c', '1-c, 2-b, 3-d, 4-a', '1-d, 2-c, 3-a, 4-b'], explanation: 'மின்னூட்டம் – கூலூம், மின்னழுத்த வேறுபாடு – வோல்ட், மின்தடை – ஓம், மின்னோட்டம் – ஆம்பியர்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III, p. 50', answer: 0,
    en: { q: 'Which statement is correct?', options: ['An ammeter is connected in series and a voltmeter in parallel.', 'An ammeter is connected in parallel and a voltmeter in series.', 'Both meters are always connected in parallel.', 'Both meters are always connected in series.'], explanation: 'The ammeter must carry the whole current (series); the voltmeter measures across a component (parallel).' },
    ta: { q: 'சரியான கூற்று எது?', options: ['அம்மீட்டர் தொடரிணைப்பிலும் வோல்ட்மீட்டர் பக்க இணைப்பிலும் இணைக்கப்படும்.', 'அம்மீட்டர் பக்க இணைப்பிலும் வோல்ட்மீட்டர் தொடரிணைப்பிலும் இணைக்கப்படும்.', 'இரண்டும் எப்போதும் பக்க இணைப்பில் இணைக்கப்படும்.', 'இரண்டும் எப்போதும் தொடரிணைப்பில் இணைக்கப்படும்.'], explanation: 'முழு மின்னோட்டமும் அம்மீட்டர் வழியே பாய வேண்டும் (தொடர்); வோல்ட்மீட்டர் கருவியின் குறுக்கே அளக்கும் (பக்க).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.1, III.3, III.4, p. 50', answer: 0,
    en: { q: 'Which of these statements is correct?', options: ['A current-carrying wire produces a magnetic field.', 'The anode in an electrolyte is the negative electrode.', 'A neutral body must contain no charges at all.', 'Electrons in a wire flow from higher to lower potential.'], explanation: 'Current produces a magnetic field. The anode is positive, a neutral body may have equal positive and negative charges, and electrons move from lower to higher potential.' },
    ta: { q: 'பின்வருவனவற்றுள் சரியான கூற்று எது?', options: ['மின்னோட்டம் பாயும் கம்பி காந்தப்புலத்தை உருவாக்கும்.', 'மின்பகு திரவத்தில் ஆனோடு எதிர் மின்வாய் ஆகும்.', 'நடுநிலையான பொருளில் மின்னூட்டமே இருக்கக் கூடாது.', 'கம்பியில் எலக்ட்ரான்கள் உயர் மின்னழுத்தத்திலிருந்து குறைந்த மின்னழுத்தத்திற்கு நகரும்.'], explanation: 'மின்னோட்டம் காந்தப்புலத்தை உருவாக்கும். ஆனோடு நேர் மின்வாய்; நடுநிலை என்பது சம அளவு நேர், எதிர் மின்னூட்டங்களாகவும் இருக்கலாம்; எலக்ட்ரான்கள் குறைந்த மின்னழுத்தத்திலிருந்து உயர் மின்னழுத்தத்திற்கு நகரும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.3, p. 50', answer: 0,
    en: { q: 'In the water-pipe comparison of a circuit, the e.m.f of a cell plays the role of the', options: ['pump', 'pipe', 'water wheel', 'water'], explanation: 'Like a pump pushing water, the cell pushes charges round the circuit.' },
    ta: { q: 'மின்சுற்றை நீர்க்குழாய் அமைப்புடன் ஒப்பிடும்போது மின்கலத்தின் மின்னியக்கு விசை எதற்கு ஒப்பானது?', options: ['இறைப்பான்', 'குழாய்', 'நீர்ச்சக்கரம்', 'நீர்'], explanation: 'இறைப்பான் நீரைத் தள்ளுவது போல மின்கலம் மின்னூட்டங்களைச் சுற்றில் தள்ளுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book example 2, p. 42', answer: 0,
    en: { q: 'A charge of 25 C passes through a wire in 50 s. The current is', options: ['0.5 A', '2 A', '1250 A', '75 A'], explanation: 'I = q ÷ t = 25 ÷ 50 = 0.5 A.' },
    ta: { q: 'கம்பியொன்றின் குறுக்குவெட்டுப் பரப்பை 25 கூலூம் அளவிலான மின்னூட்டம் 50 வினாடி காலத்தில் கடந்து சென்றால், அதனால் விளையும் மின்னோட்டத்தின் அளவு', options: ['0.5 A', '2 A', '1250 A', '75 A'], explanation: 'I = q ÷ t = 25 ÷ 50 = 0.5 A.' },
  },
  {
    difficulty: 'medium', source: 'Book example 4, p. 42', answer: 0,
    en: { q: 'A cell of e.m.f 1.5 V drives 0.5 C of charge round a circuit. The energy it supplies is', options: ['0.75 J', '3 J', '2 J', '1 J'], explanation: 'W = ε × q = 1.5 × 0.5 = 0.75 J.' },
    ta: { q: '1.5 V மின்னியக்கு விசை கொண்ட மின்கலம் 0.5 C மின்னூட்டத்தை மின்சுற்றைச் சுற்றி அனுப்புகிறது. அது அளிக்கும் ஆற்றல் எவ்வளவு?', options: ['0.75 J', '3 J', '2 J', '1 J'], explanation: 'W = ε × q = 1.5 × 0.5 = 0.75 J.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.5, p. 50', answer: 0,
    en: { q: "According to Ohm's law, at constant temperature the current through a conductor is", options: ['directly proportional to the potential difference across it', 'inversely proportional to the potential difference across it', 'independent of the potential difference', 'proportional to the square of the potential difference'], explanation: 'Ohm\'s law: V ∝ I at constant temperature, i.e. V = IR.' },
    ta: { q: 'ஓம் விதிப்படி, மாறா வெப்பநிலையில் ஒரு கடத்தியின் வழியே பாயும் மின்னோட்டம்', options: ['அதன் முனைகளுக்கிடையேயான மின்னழுத்த வேறுபாட்டிற்கு நேர்த்தகவில் இருக்கும்', 'மின்னழுத்த வேறுபாட்டிற்கு எதிர்த்தகவில் இருக்கும்', 'மின்னழுத்த வேறுபாட்டைச் சாராது', 'மின்னழுத்த வேறுபாட்டின் இருமடிக்கு நேர்த்தகவில் இருக்கும்'], explanation: 'ஓம் விதி: மாறா வெப்பநிலையில் V ∝ I, அதாவது V = IR.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.6, p. 50', answer: 0,
    en: { q: 'Which pair of appliances both work on the heating effect of current?', options: ['Iron box and water heater', 'Electric fan and mixer', 'Radio and cell phone', 'Electric bell and loudspeaker'], explanation: 'Iron boxes, water heaters and toasters use Joule heating; fans and mixers use motors.' },
    ta: { q: 'பின்வருவனவற்றுள் இரண்டுமே மின்னோட்டத்தின் வெப்ப விளைவில் இயங்கும் சாதனங்கள் எவை?', options: ['மின்சலவைப் பெட்டி, நீர் சூடேற்றி', 'மின்விசிறி, மிக்சி', 'வானொலி, கைபேசி', 'மின்மணி, ஒலிபெருக்கி'], explanation: 'மின்சலவைப் பெட்டி, நீர் சூடேற்றி, வறுதட்டு ஆகியவை ஜூல் வெப்பமேறலில் இயங்குகின்றன; மின்விசிறி, மிக்சி மோட்டாரால் இயங்குகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.7, p. 50', answer: 0,
    en: { q: 'Household appliances are connected in parallel because', options: ['each gets the same voltage and can be switched on or off independently', 'the same current then flows through every appliance', 'it uses less wire than a series connection', 'it increases the total resistance of the house wiring'], explanation: 'In parallel every branch has the same potential difference, and one appliance can be switched off without breaking the others.' },
    ta: { q: 'வீட்டு மின்சாதனங்கள் பக்க இணைப்பில் இணைக்கப்படுவதற்குக் காரணம்', options: ['ஒவ்வொன்றும் ஒரே மின்னழுத்தம் பெறும்; தனித்தனியே இயக்கவோ நிறுத்தவோ முடியும்', 'அப்போது எல்லாச் சாதனங்களிலும் ஒரே மின்னோட்டம் பாயும்', 'தொடரிணைப்பை விடக் குறைந்த கம்பி போதும்', 'வீட்டின் மொத்த மின்தடை அதிகரிக்கும்'], explanation: 'பக்க இணைப்பில் ஒவ்வொரு கிளையிலும் மின்னழுத்த வேறுபாடு சமம்; ஒரு சாதனத்தை நிறுத்தினாலும் மற்றவை இயங்கும்.' },
  },
  {
    difficulty: 'medium', source: '§4.3.1, p. 45', answer: 0,
    en: { q: 'In a series circuit, which quantity is the same at every point?', options: ['current', 'potential difference across each component', 'resistance of each component', 'power used by each component'], explanation: 'A series circuit has only one path, so the same current flows through every component.' },
    ta: { q: 'தொடரிணைப்புச் சுற்றில் எல்லாப் புள்ளிகளிலும் சமமாக இருப்பது எது?', options: ['மின்னோட்டம்', 'ஒவ்வொரு கருவியின் குறுக்கே மின்னழுத்த வேறுபாடு', 'ஒவ்வொரு கருவியின் மின்தடை', 'ஒவ்வொரு கருவியின் திறன்'], explanation: 'தொடரிணைப்பில் ஒரே ஒரு பாதைதான் உள்ளது; எனவே எல்லாக் கருவிகளிலும் ஒரே மின்னோட்டம் பாயும்.' },
  },
  {
    difficulty: 'medium', source: '§4.5.3, p. 47', answer: 0,
    en: { q: 'Which is an advantage of ac over dc?', options: ['Its voltage can be easily stepped up or down with a transformer.', 'It is the only form in which electricity can be stored.', 'It is the only current used for electroplating.', 'Its electrons always move in one direction.'], explanation: 'ac voltage is easily changed with transformers, so it can be sent over long distances with little loss. Storage and electroplating need dc.' },
    ta: { q: 'நேர்திசை மின்னோட்டத்தை விட மாறுதிசை மின்னோட்டத்தின் நன்மை எது?', options: ['மின்மாற்றி மூலம் அதன் மின்னழுத்தத்தை எளிதில் உயர்த்தவோ குறைக்கவோ முடியும்.', 'மின்சாரத்தைச் சேமிக்கக்கூடிய ஒரே வடிவம் அதுவே.', 'மின்முலாம் பூசப் பயன்படும் ஒரே மின்னோட்டம் அதுவே.', 'அதில் எலக்ட்ரான்கள் எப்போதும் ஒரே திசையில் இயங்கும்.'], explanation: 'மின்மாற்றியால் ac மின்னழுத்தத்தை எளிதில் மாற்றலாம்; எனவே குறைந்த இழப்புடன் தொலைவுக்கு அனுப்பலாம். சேமிப்பும் மின்முலாமும் dc-யால் மட்டுமே.' },
  },
  {
    difficulty: 'medium', source: '§4.6, p. 48', answer: 0,
    en: { q: 'Why is a wet human body more likely to get a severe electric shock than a dry one?', options: ['Water lowers the body resistance from about 1,00,000 Ω to a few hundred ohm', 'Water raises the body resistance', 'Water stores electric charge like a battery', 'Water converts ac into dc'], explanation: 'A dry body has about 1,00,000 Ω, but water reduces this to a few hundred ohm, so a much larger current flows.' },
    ta: { q: 'உலர்ந்த உடலை விட ஈரமான உடலுக்கு அதிக மின் அதிர்ச்சி ஏற்படக் காரணம்', options: ['நீர் உடலின் மின்தடையை 1,00,000 ஓம்-இலிருந்து சில நூறு ஓம் ஆகக் குறைக்கிறது', 'நீர் உடலின் மின்தடையை அதிகரிக்கிறது', 'நீர் மின்கலம் போல மின்னூட்டத்தைச் சேமிக்கிறது', 'நீர் ac-ஐ dc-ஆக மாற்றுகிறது'], explanation: 'உலர்ந்த உடலின் மின்தடை சுமார் 1,00,000 ஓம்; நீரால் அது சில நூறு ஓம் ஆகக் குறைவதால் அதிக மின்னோட்டம் பாயும்.' },
  },
  {
    difficulty: 'medium', source: '§4.5.2, p. 47', imageUrl: `${IMG}/current-graph.png`, answer: 0,
    en: { q: 'The graph shows how the current in a circuit changes with time. This current is', options: ['alternating current, as supplied to homes', 'direct current from a cell', 'direct current from a solar cell', 'zero current'], explanation: 'The current rises, falls and reverses direction periodically (a sine wave), which is alternating current.' },
    ta: { q: 'ஒரு சுற்றில் மின்னோட்டம் காலத்துடன் மாறுவதை வரைபடம் காட்டுகிறது. இந்த மின்னோட்டம்', options: ['வீடுகளுக்கு வழங்கப்படும் மாறுதிசை மின்னோட்டம்', 'மின்கலத்திலிருந்து பெறும் நேர்திசை மின்னோட்டம்', 'சூரிய மின்கலத்திலிருந்து பெறும் நேர்திசை மின்னோட்டம்', 'சுழி மின்னோட்டம்'], explanation: 'மின்னோட்டம் சீராக உயர்ந்து, குறைந்து, திசை மாறுகிறது (சைன் அலை); இது மாறுதிசை மின்னோட்டம்.' },
  },

  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book example 1, p. 40', answer: 0,
    en: { q: 'How many electrons make up a charge of 1 coulomb?', options: ['6.25 × 10¹⁸', '1.6 × 10¹⁹', '1.6 × 10⁻¹⁹', '6.25 × 10⁻¹⁸'], explanation: 'n = q ÷ e = 1 ÷ (1.6 × 10⁻¹⁹) = 6.25 × 10¹⁸ electrons.' },
    ta: { q: '1 கூலூம் மின்னூட்டத்தில் எத்தனை எலக்ட்ரான்கள் உள்ளன?', options: ['6.25 × 10¹⁸', '1.6 × 10¹⁹', '1.6 × 10⁻¹⁹', '6.25 × 10⁻¹⁸'], explanation: 'n = q ÷ e = 1 ÷ (1.6 × 10⁻¹⁹) = 6.25 × 10¹⁸ எலக்ட்ரான்கள்.' },
  },
  {
    difficulty: 'hard', source: 'Book example 3, p. 42', answer: 0,
    en: { q: 'A lamp draws 0.2 A and is kept on for one hour. The charge that passes through it is', options: ['720 C', '12 C', '0.2 C', '7200 C'], explanation: 'q = I × t = 0.2 × 3600 s = 720 C (using 60 s instead of 3600 s gives 12 C).' },
    ta: { q: 'விளக்கு ஒன்றின் வழியே பாயும் மின்னோட்டம் 0.2 A. விளக்கு ஒரு மணி நேரம் எரிந்திருந்தால், அதன் வழியே பாய்ந்த மொத்த மின்னூட்டத்தின் மதிப்பு', options: ['720 C', '12 C', '0.2 C', '7200 C'], explanation: 'q = I × t = 0.2 × 3600 வி = 720 C (60 வி எடுத்தால் தவறாக 12 C வரும்).' },
  },
  {
    difficulty: 'hard', source: 'Book example 5, p. 43', answer: 0,
    en: { q: 'A charge of 2 × 10⁴ C flows through a heater and 5 × 10⁶ J of electrical energy is turned into heat. The potential difference across the heater is', options: ['250 V', '25 V', '2500 V', '1 × 10¹¹ V'], explanation: 'V = W ÷ q = (5 × 10⁶) ÷ (2 × 10⁴) = 250 V. Multiplying instead gives 1 × 10¹¹.' },
    ta: { q: 'ஒரு மின் சூடேற்றியின் வழியாக 2 × 10⁴ C மின்னூட்டம் பாய்கிறது. 5 × 10⁶ J அளவு மின்னாற்றல் வெப்ப ஆற்றலாக மாற்றப்படுகிறது எனில், சூடேற்றியின் குறுக்கே காணப்படும் மின்னழுத்த வேறுபாடு', options: ['250 V', '25 V', '2500 V', '1 × 10¹¹ V'], explanation: 'V = W ÷ q = (5 × 10⁶) ÷ (2 × 10⁴) = 250 V. பெருக்கினால் தவறாக 1 × 10¹¹ வரும்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VII.1, p. 50', answer: 0,
    en: { q: 'After being rubbed on hair, a comb has a charge of −0.4 C. Which is correct?', options: ['The comb gained 2.5 × 10¹⁸ electrons from the hair', 'The comb lost 2.5 × 10¹⁸ electrons to the hair', 'The comb gained 6.4 × 10⁻²⁰ electrons from the hair', 'The hair gained 2.5 × 10¹⁸ electrons from the comb'], explanation: 'A negative comb has gained electrons; n = q ÷ e = 0.4 ÷ (1.6 × 10⁻¹⁹) = 2.5 × 10¹⁸.' },
    ta: { q: 'தலைமுடியில் தேய்த்த பின் ஒரு சீப்பின் மின்னூட்டம் −0.4 C. சரியானது எது?', options: ['சீப்பு முடியிலிருந்து 2.5 × 10¹⁸ எலக்ட்ரான்களைப் பெற்றது', 'சீப்பு 2.5 × 10¹⁸ எலக்ட்ரான்களை முடிக்கு இழந்தது', 'சீப்பு முடியிலிருந்து 6.4 × 10⁻²⁰ எலக்ட்ரான்களைப் பெற்றது', 'முடி சீப்பிலிருந்து 2.5 × 10¹⁸ எலக்ட்ரான்களைப் பெற்றது'], explanation: 'எதிர் மின்னூட்டம் கொண்ட சீப்பு எலக்ட்ரான்களைப் பெற்றுள்ளது; n = q ÷ e = 0.4 ÷ (1.6 × 10⁻¹⁹) = 2.5 × 10¹⁸.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VII.2, p. 50', answer: 0,
    en: { q: 'A bulb filament draws 2.5 A. How much charge flows through it in 2 hours?', options: ['18000 C', '5 C', '300 C', '9000 C'], explanation: 'q = I × t = 2.5 × 7200 s = 18000 C.' },
    ta: { q: 'ஒரு மின்விளக்கின் இழை 2.5 A மின்னோட்டம் பெறுகிறது. 2 மணி நேரத்தில் அதன் வழியே பாயும் மின்னூட்டம்', options: ['18000 C', '5 C', '300 C', '9000 C'], explanation: 'q = I × t = 2.5 × 7200 வி = 18000 C.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VII.3, p. 50', answer: 0,
    en: { q: 'For a resistor, the readings are: I = 0.5, 1.0, 2.0, 3.0, 4.0 A and V = 1.6, 3.4, 6.7, 10.2, 13.2 V. The resistance (slope of the V–I graph) is about', options: ['3.3 Ω', '0.3 Ω', '33 Ω', '13.2 Ω'], explanation: 'V ÷ I is about 3.2–3.4 for every reading, so R ≈ 3.3 Ω. 0.3 is I ÷ V, the wrong way round.' },
    ta: { q: 'ஒரு மின்தடையத்திற்கான அளவீடுகள்: I = 0.5, 1.0, 2.0, 3.0, 4.0 A; V = 1.6, 3.4, 6.7, 10.2, 13.2 V. மின்தடை (V–I வரைபடத்தின் சாய்வு) ஏறக்குறைய', options: ['3.3 Ω', '0.3 Ω', '33 Ω', '13.2 Ω'], explanation: 'ஒவ்வொரு அளவீட்டிலும் V ÷ I ≈ 3.2–3.4; எனவே R ≈ 3.3 Ω. 0.3 என்பது தலைகீழாக I ÷ V.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise V.1, p. 50', answer: 0,
    en: { q: 'A bird sitting on a single high-voltage line is not harmed because', options: ['there is almost no potential difference between its two feet, so no current flows through it', 'its feathers have zero resistance', 'the line carries dc, which is harmless', 'birds are not made of conducting material'], explanation: 'Both feet touch the same wire at nearly the same potential; with no potential difference, no current passes through the body.' },
    ta: { q: 'உயர் மின்னழுத்தக் கம்பியில் அமரும் பறவை பாதிக்கப்படாததற்குக் காரணம்', options: ['அதன் இரு கால்களுக்கிடையே மின்னழுத்த வேறுபாடு கிட்டத்தட்ட இல்லாததால் அதன் உடல் வழியே மின்னோட்டம் பாயாது', 'அதன் இறகுகளின் மின்தடை சுழி', 'கம்பியில் பாதிப்பில்லாத dc பாய்கிறது', 'பறவையின் உடல் மின்கடத்தாப் பொருளால் ஆனது'], explanation: 'இரு கால்களும் ஏறக்குறைய ஒரே மின்னழுத்தத்தில் உள்ள ஒரே கம்பியில் உள்ளன; மின்னழுத்த வேறுபாடு இல்லையெனில் மின்னோட்டம் பாயாது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise V.3, p. 50', answer: 0,
    en: { q: 'Assertion: Electroplating cannot be done with alternating current. Reason: In ac the direction of current keeps reversing, so metal deposited in one half-cycle is removed in the next.', options: AR_EN, explanation: 'Both are true: electroplating needs a steady one-way flow of ions to the cathode, which only dc gives – the reason explains the assertion.' },
    ta: { q: 'கூற்று: மாறுதிசை மின்னோட்டத்தால் மின்முலாம் பூச இயலாது. காரணம்: ac-யில் மின்னோட்டத்தின் திசை தொடர்ந்து மாறுவதால் ஒரு அரைச் சுற்றில் படிந்த உலோகம் அடுத்த அரைச் சுற்றில் நீங்கிவிடும்.', options: AR_TA, explanation: 'இரண்டும் சரி: மின்முலாம் பூச அயனிகள் ஒரே திசையில் கேதோடை நோக்கிச் செல்ல வேண்டும்; அது dc-யால் மட்டுமே; காரணம் கூற்றை விளக்குகிறது.' },
  },
  {
    difficulty: 'hard', source: '§4.3.1, p. 45', answer: 0,
    en: { q: 'Assertion: In a parallel circuit, if one bulb fuses the other bulbs keep glowing. Reason: A parallel circuit has more than one path for the charge to flow.', options: AR_EN, explanation: 'Both are true, and because each bulb has its own path, breaking one path does not stop current in the others.' },
    ta: { q: 'கூற்று: பக்க இணைப்புச் சுற்றில் ஒரு விளக்கு பழுதானாலும் மற்ற விளக்குகள் ஒளிரும். காரணம்: பக்க இணைப்பில் மின்னூட்டம் பாய ஒன்றுக்கு மேற்பட்ட பாதைகள் உள்ளன.', options: AR_TA, explanation: 'இரண்டும் சரி; ஒவ்வொரு விளக்கிற்கும் தனிப் பாதை இருப்பதால் ஒன்று துண்டிக்கப்பட்டாலும் மற்றவற்றில் மின்னோட்டம் பாயும்.' },
  },
  {
    difficulty: 'hard', source: 'Book note, p. 44', answer: 2,
    en: { q: 'Assertion: The e.m.f of a cell and the potential difference across a bulb are measured in the same unit. Reason: e.m.f and potential difference are exactly the same quantity.', options: AR_EN, explanation: 'Both are in volt, but they differ: e.m.f is the voltage of the source when it gives no current; potential difference is between two points when current flows. So the reason is false.' },
    ta: { q: 'கூற்று: மின்கலத்தின் மின்னியக்கு விசையும் விளக்கின் குறுக்கே உள்ள மின்னழுத்த வேறுபாடும் ஒரே அலகால் அளக்கப்படுகின்றன. காரணம்: மின்னியக்கு விசையும் மின்னழுத்த வேறுபாடும் முற்றிலும் ஒரே அளவு.', options: AR_TA, explanation: 'இரண்டும் வோல்ட்டில் அளக்கப்படும்; ஆனால் மின்னோட்டம் பாயாதபோது மூலத்தின் முனைகளுக்கிடையேயான மின்னழுத்தம் மின்னியக்கு விசை; மின்னோட்டம் பாயும்போது இரு புள்ளிகளுக்கிடையேயானது மின்னழுத்த வேறுபாடு. எனவே காரணம் தவறு.' },
  },
  {
    difficulty: 'hard', source: '§4.1.1, p. 40', answer: 0,
    en: { q: 'A system contains charges of +5 μC, −2 μC and −4 μC. The net charge of the system is', options: ['−1 μC', '+11 μC', '+1 μC', '−11 μC'], explanation: 'Charge is additive: (+5) + (−2) + (−4) = −1 μC.' },
    ta: { q: 'ஓர் அமைப்பில் +5 μC, −2 μC, −4 μC மின்னூட்டங்கள் உள்ளன. அமைப்பின் மொத்த மின்னூட்டம்', options: ['−1 μC', '+11 μC', '+1 μC', '−11 μC'], explanation: 'மின்னூட்டங்கள் கூட்டல் பண்புடையவை: (+5) + (−2) + (−4) = −1 μC.' },
  },
  {
    difficulty: 'hard', source: '§4.1.3, p. 40', answer: 0,
    en: { q: 'Which of these statements about electric lines of force are correct?\n(i) They are imaginary lines.\n(ii) Where they are closer together, the field is stronger.\n(iii) A negative charge placed in the field moves along the direction of the field.', options: ['(i) and (ii) only', '(i) and (iii) only', '(ii) and (iii) only', '(i), (ii) and (iii)'], explanation: 'Lines of force are imaginary and their closeness shows field strength; a negative charge feels force opposite to the field, so (iii) is wrong.' },
    ta: { q: 'மின்விசைக் கோடுகள் பற்றிய கீழ்க்கண்ட கூற்றுகளில் சரியானவை எவை?\n(i) அவை கற்பனைக் கோடுகள்.\n(ii) கோடுகள் நெருக்கமாக உள்ள இடத்தில் மின்புலம் வலிமையானது.\n(iii) மின்புலத்தில் வைக்கப்படும் எதிர் மின்னூட்டம் மின்புலத்தின் திசையிலேயே நகரும்.', options: ['(i), (ii) மட்டும்', '(i), (iii) மட்டும்', '(ii), (iii) மட்டும்', '(i), (ii), (iii)'], explanation: 'மின்விசைக் கோடுகள் கற்பனைக் கோடுகள்; அவற்றின் நெருக்கம் புலவலிமையைக் காட்டும். எதிர் மின்னூட்டம் புலத்திற்கு எதிர்த்திசையில் விசை பெறும்; எனவே (iii) தவறு.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise V.2, p. 50', answer: 0,
    en: { q: 'A solar cell is connected to a small lamp. What happens to the potential difference across its terminals as clouds cover the sun?', options: ['It falls, because it depends on the light falling on the cell', 'It stays exactly the same, like any dc source', 'It rises, because the cell cools down', 'It reverses direction and becomes ac'], explanation: 'A solar cell is a dc source, but its output depends on the intensity of light, so its terminal voltage is not always constant.' },
    ta: { q: 'ஒரு சூரிய மின்கலம் சிறிய விளக்குடன் இணைக்கப்பட்டுள்ளது. மேகம் சூரியனை மறைக்கும்போது அதன் முனைகளுக்கிடையேயான மின்னழுத்தம் என்ன ஆகும்?', options: ['குறையும்; ஏனெனில் அது மின்கலத்தின் மீது விழும் ஒளியைச் சார்ந்தது', 'மற்ற dc மூலங்கள் போல மாறாமல் இருக்கும்', 'மின்கலம் குளிர்வதால் அதிகரிக்கும்', 'திசை மாறி ac ஆகிவிடும்'], explanation: 'சூரிய மின்கலம் dc மூலம்; ஆனால் அதன் வெளியீடு ஒளியின் செறிவைச் சார்ந்தது; எனவே அதன் மின்னழுத்தம் எப்போதும் மாறாமல் இருக்காது.' },
  },
];
