// Tamil Nadu State Board, 9th Science, Unit 13 – Chemical Bonding (வேதிப் பிணைப்பு).
// Textbook exercises converted to MCQs plus our own questions covering every section.
// Tamil wording follows the terms used in the Tamil-medium textbook.
// source = section / exercise and printed page of the English-medium book.

import { BankQuestion, AR_EN, AR_TA } from './types';

const IMG = '/content/9/state_board/science/13';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.1, p. 159', answer: 0,
    en: { q: 'The number of valence electrons in carbon is', options: ['4', '2', '3', '5'], explanation: 'Carbon (atomic number 6) has the configuration 2, 4, so it has 4 valence electrons.' },
    ta: { q: 'கார்பன் அணுவில் உள்ள இணைதிறன் எலக்ட்ரான்களின் எண்ணிக்கை', options: ['4', '2', '3', '5'], explanation: 'கார்பனின் (அணு எண் 6) எலக்ட்ரான் அமைப்பு 2, 4; எனவே அதில் 4 இணைதிறன் எலக்ட்ரான்கள் உள்ளன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.2, p. 159', answer: 0,
    en: { q: 'Sodium (atomic number 11) attains the nearest noble gas configuration by', options: ['losing one electron', 'gaining one electron', 'gaining two electrons', 'losing two electrons'], explanation: 'Sodium is 2, 8, 1; losing its one valence electron gives the neon configuration 2, 8.' },
    ta: { q: 'சோடியம் (அணு எண் 11) நெருக்கமான மந்த வாயுவின் எலக்ட்ரான் அமைப்பைப் பெறுவது', options: ['ஒரு எலக்ட்ரானை இழந்து', 'ஒரு எலக்ட்ரானை ஏற்று', 'இரண்டு எலக்ட்ரான்களை ஏற்று', 'இரண்டு எலக்ட்ரான்களை இழந்து'], explanation: 'சோடியத்தின் அமைப்பு 2, 8, 1; ஒரு இணைதிறன் எலக்ட்ரானை இழந்து நியானின் அமைப்பு 2, 8 ஐப் பெறுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.3, p. 159', answer: 0,
    en: { q: 'Which element forms an anion by gaining electrons in a chemical reaction?', options: ['Fluorine', 'Potassium', 'Calcium', 'Iron'], explanation: 'Fluorine is a non-metal with 7 valence electrons; it gains one electron to form F⁻. The others are metals that lose electrons.' },
    ta: { q: 'வேதிவினையில் எலக்ட்ரான்களை ஏற்று எதிர் அயனியாக மாறும் தனிமம் எது?', options: ['புளூரின்', 'பொட்டாசியம்', 'கால்சியம்', 'இரும்பு'], explanation: 'புளூரின் 7 இணைதிறன் எலக்ட்ரான்கள் கொண்ட அலோகம்; ஒரு எலக்ட்ரானை ஏற்று F⁻ ஆகிறது. மற்றவை எலக்ட்ரானை இழக்கும் உலோகங்கள்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.4, p. 159', answer: 0,
    en: { q: 'The bond formed between a metal atom and a non-metal atom is usually', options: ['an ionic bond', 'a covalent bond', 'a coordinate bond', 'a hydrogen bond'], explanation: 'A metal transfers electrons to a non-metal, forming oppositely charged ions held by an ionic bond.' },
    ta: { q: 'உலோகங்களுக்கும் அலோகங்களுக்கும் இடையே பொதுவாகத் தோன்றும் பிணைப்பு', options: ['அயனிப் பிணைப்பு', 'சகப் பிணைப்பு', 'ஈதல் சகப் பிணைப்பு', 'ஹைட்ரஜன் பிணைப்பு'], explanation: 'உலோகம் அலோகத்திற்கு எலக்ட்ரான்களை மாற்றுவதால் உருவாகும் நேர், எதிர் அயனிகள் அயனிப் பிணைப்பால் இணைகின்றன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.5, p. 159', answer: 0,
    en: { q: '_____ compounds have high melting and boiling points.', options: ['Ionic', 'Covalent', 'Coordinate', 'Non-polar'], explanation: 'Strong electrostatic forces hold the ions tightly, so much energy is needed to separate them.' },
    ta: { q: '_____ சேர்மங்கள் அதிக உருகுநிலை மற்றும் கொதிநிலை கொண்டவை.', options: ['அயனிச்', 'சகப்பிணைப்புச்', 'ஈதல் சகப்பிணைப்புச்', 'முனைவற்ற'], explanation: 'வலிமையான நிலைமின் கவர்ச்சி விசை அயனிகளை இறுக்கமாகப் பிணைப்பதால் அவற்றைப் பிரிக்க அதிக ஆற்றல் தேவை.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.6, p. 159', answer: 0,
    en: { q: 'A covalent bond is formed by', options: ['sharing of electrons between atoms', 'transfer of electrons between atoms', 'attraction between oppositely charged ions', 'loss of electrons by both atoms'], explanation: 'In a covalent bond each atom contributes one electron to a shared pair, which becomes common to both atoms.' },
    ta: { q: 'சகப்பிணைப்பு உருவாவது', options: ['அணுக்களுக்கிடையே எலக்ட்ரான் பங்கீட்டினால்', 'அணுக்களுக்கிடையே எலக்ட்ரான் பரிமாற்றத்தினால்', 'எதிரெதிர் மின்சுமை அயனிகளின் கவர்ச்சியால்', 'இரு அணுக்களும் எலக்ட்ரான் இழப்பதால்'], explanation: 'சகப்பிணைப்பில் ஒவ்வொரு அணுவும் ஒரு எலக்ட்ரானை வழங்கி ஓர் இணையைப் பங்கிடுகின்றன; அது இரு அணுக்களுக்கும் பொதுவானது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.7, p. 159', answer: 0,
    en: { q: 'Oxidising agents are also called _____ because they remove electrons from other substances.', options: ['electron acceptors', 'electron donors', 'reducing agents', 'proton donors'], explanation: 'Oxidising agents take electrons from other substances, so they are electron acceptors.' },
    ta: { q: 'ஆக்ஸிஜனேற்றிகள் மற்றவற்றிலிருந்து எலக்ட்ரானை நீக்குவதால் அவை _____ எனவும் அழைக்கப்படுகின்றன.', options: ['எலக்ட்ரான் ஏற்பிகள்', 'எலக்ட்ரான் ஈனிகள்', 'ஒடுக்கிகள்', 'புரோட்டான் ஈனிகள்'], explanation: 'ஆக்ஸிஜனேற்றிகள் மற்ற பொருள்களிலிருந்து எலக்ட்ரான்களை வாங்கிக் கொள்வதால் அவை எலக்ட்ரான் ஏற்பிகள்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.8, p. 159', answer: 0,
    en: { q: 'Elements with a stable configuration of eight electrons in their valence shell are', options: ['noble gases', 'halogens', 'metals', 'non-metals'], explanation: 'Except helium, all noble gases have eight valence electrons and hence a stable configuration.' },
    ta: { q: 'வெளிக்கூட்டில் எட்டு எலக்ட்ரான்களுடன் நிலைத்த எலக்ட்ரான் அமைப்பைப் பெற்ற தனிமங்கள்', options: ['மந்த வாயுக்கள்', 'ஹேலஜன்கள்', 'உலோகங்கள்', 'அலோகங்கள்'], explanation: 'ஹீலியம் தவிர அனைத்து மந்த வாயுக்களும் வெளிக்கூட்டில் எட்டு எலக்ட்ரான்களைக் கொண்டுள்ளன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.6, p. 159', answer: 0,
    en: { q: 'The electron distribution of boron (atomic number 5) is', options: ['2, 3', '2, 5', '3, 2', '2, 2, 1'], explanation: 'The first shell holds 2 electrons and the remaining 3 go to the second shell: 2, 3.' },
    ta: { q: 'போரானின் (அணு எண் 5) எலக்ட்ரான் அமைப்பு', options: ['2, 3', '2, 5', '3, 2', '2, 2, 1'], explanation: 'முதல் கூட்டில் 2 எலக்ட்ரான்கள், மீதமுள்ள 3 இரண்டாம் கூட்டில்: 2, 3.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.6, p. 159', answer: 0,
    en: { q: 'How many dots are shown around the symbol Li in the Lewis dot structure of lithium (atomic number 3)?', options: ['1', '2', '3', '0'], explanation: 'Lithium is 2, 1, so it has one valence electron and its Lewis structure shows one dot.' },
    ta: { q: 'லித்தியத்தின் (அணு எண் 3) லூயிஸ் புள்ளி அமைப்பில் Li குறியீட்டைச் சுற்றி எத்தனை புள்ளிகள் இருக்கும்?', options: ['1', '2', '3', '0'], explanation: 'லித்தியத்தின் அமைப்பு 2, 1; ஒரு இணைதிறன் எலக்ட்ரான் இருப்பதால் ஒரு புள்ளி காட்டப்படும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.4, p. 159', answer: 0,
    en: { q: 'Which of the following is classified as a weak bond?', options: ['Hydrogen bond', 'Ionic bond', 'Covalent bond', 'Coordinate bond'], explanation: 'Ionic, covalent, coordinate and metallic bonds are strong bonds; hydrogen bonds and van der Waals interactions are weak.' },
    ta: { q: 'பின்வருவனவற்றுள் வலிமை குறைந்த பிணைப்பு எது?', options: ['ஹைட்ரஜன் பிணைப்பு', 'அயனிப் பிணைப்பு', 'சகப் பிணைப்பு', 'ஈதல் சகப் பிணைப்பு'], explanation: 'அயனி, சக, ஈதல், உலோகப் பிணைப்புகள் வலிமையானவை; ஹைட்ரஜன் பிணைப்பும் வாண்டர் வால்ஸ் இடையீடும் வலிமை குறைந்தவை.' },
  },
  {
    difficulty: 'easy', source: 'Introduction, p. 148', answer: 0,
    en: { q: 'The force of attraction between atoms that binds them together as a molecule is called a', options: ['chemical bond', 'valency', 'octet', 'lone pair'], explanation: 'A chemical bond is the attractive force that holds the atoms of a molecule together, like a thread holding flowers in a garland.' },
    ta: { q: 'அணுக்களை ஒன்றிணைத்து மூலக்கூறாக வைத்திருக்கும் கவர்ச்சி விசை', options: ['வேதிப் பிணைப்பு', 'இணைதிறன்', 'எண்மம்', 'தனி இரட்டை'], explanation: 'அணுக்கள் ஒருங்கிணைந்து மூலக்கூறு உருவாகக் காரணமான கவர்ச்சி விசையே வேதிப் பிணைப்பு.' },
  },
  {
    difficulty: 'easy', source: '§13.1.1, p. 149', answer: 0,
    en: { q: 'The tendency of atoms to have eight electrons in their valence shell is known as the', options: ['octet rule', 'Fajan’s rule', 'rule of two', 'Arrhenius rule'], explanation: 'This is the octet rule or rule of eight, proposed by Kossel and Lewis in 1916.' },
    ta: { q: 'அணுக்கள் வெளிக்கூட்டில் எட்டு எலக்ட்ரான்களைப் பெற முனையும் தன்மை', options: ['எண்ம விதி', 'ஃபஜான் விதி', 'இரட்டை விதி', 'அர்ஹீனியஸ் விதி'], explanation: 'இது எண்ம விதி; 1916 இல் கோசல் மற்றும் லூயிஸ் இதை முன்மொழிந்தனர்.' },
  },
  {
    difficulty: 'easy', source: '§13.1.1, p. 149', answer: 0,
    en: { q: 'The valency of noble gases is', options: ['zero', 'one', 'eight', 'two'], explanation: 'Noble gases have a stable valence shell and neither gain nor lose electrons, so their valency is zero.' },
    ta: { q: 'மந்த வாயுக்களின் இணைதிறன்', options: ['பூஜ்யம்', 'ஒன்று', 'எட்டு', 'இரண்டு'], explanation: 'மந்த வாயுக்கள் நிலைத்த வெளிக்கூட்டைக் கொண்டு எலக்ட்ரான்களை ஏற்பதோ இழப்பதோ இல்லை; எனவே இணைதிறன் பூஜ்யம்.' },
  },
  {
    difficulty: 'easy', source: '§13.2, p. 150', answer: 0,
    en: { q: 'In a Lewis dot structure, the dots around the symbol represent', options: ['valence electrons', 'all the electrons of the atom', 'protons in the nucleus', 'neutrons in the nucleus'], explanation: 'A Lewis dot symbol shows the element’s symbol surrounded by dots for the electrons of the valence shell.' },
    ta: { q: 'லூயிஸ் புள்ளி அமைப்பில் குறியீட்டைச் சுற்றியுள்ள புள்ளிகள் குறிப்பது', options: ['இணைதிறன் எலக்ட்ரான்கள்', 'அணுவின் அனைத்து எலக்ட்ரான்கள்', 'உட்கருவிலுள்ள புரோட்டான்கள்', 'உட்கருவிலுள்ள நியூட்ரான்கள்'], explanation: 'லூயிஸ் புள்ளி அமைப்பில் தனிமக் குறியீட்டைச் சுற்றி இணைதிறன் கூட்டிலுள்ள எலக்ட்ரான்கள் புள்ளிகளாகக் குறிக்கப்படுகின்றன.' },
  },
  {
    difficulty: 'easy', source: '§13.3.1, p. 151', answer: 0,
    en: { q: 'An ionic bond is also called', options: ['an electrovalent bond', 'an atomic bond', 'a dative bond', 'a metallic bond'], explanation: 'Since it is explained by transfer of valence electrons, an ionic bond is also called an electrovalent (or electrostatic) bond.' },
    ta: { q: 'அயனிப் பிணைப்பு இவ்வாறும் அழைக்கப்படுகிறது', options: ['எலக்ட்ரான் இணைதிறன் பிணைப்பு', 'அணுப்பிணைப்பு', 'ஈதல் பிணைப்பு', 'உலோகப் பிணைப்பு'], explanation: 'இணைதிறன் எலக்ட்ரான்களின் பரிமாற்றத்தால் விளக்கப்படுவதால் இது எலக்ட்ரான் இணைதிறன் பிணைப்பு (நிலைமின் பிணைப்பு) எனவும் அழைக்கப்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: '§13.3.2, p. 153', answer: 0,
    en: { q: 'Because the shared electrons become common to both atoms, a covalent bond is also called', options: ['an atomic bond', 'an electrovalent bond', 'a dative bond', 'an ionic bond'], explanation: 'The covalent bond is also called an atomic bond.' },
    ta: { q: 'பங்கிடப்பட்ட எலக்ட்ரான்கள் இரு அணுக்களுக்கும் பொதுவாவதால் சகப்பிணைப்பு இவ்வாறும் அழைக்கப்படுகிறது', options: ['அணுப்பிணைப்பு', 'எலக்ட்ரான் இணைதிறன் பிணைப்பு', 'ஈதல் பிணைப்பு', 'அயனிப் பிணைப்பு'], explanation: 'சகப்பிணைப்பு அணுப்பிணைப்பு எனவும் அழைக்கப்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: '§13.3.2, p. 153', answer: 0,
    en: { q: 'Which molecule contains a triple covalent bond?', options: ['N₂', 'O₂', 'H₂', 'Cl₂'], explanation: 'Nitrogen atoms share three pairs of electrons, N ≡ N. O₂ has a double bond; H₂ and Cl₂ have single bonds.' },
    ta: { q: 'மும்மை சகப்பிணைப்பைக் கொண்ட மூலக்கூறு எது?', options: ['N₂', 'O₂', 'H₂', 'Cl₂'], explanation: 'நைட்ரஜன் அணுக்கள் மூன்று இணை எலக்ட்ரான்களைப் பங்கிடுகின்றன, N ≡ N. O₂ இல் இரட்டைப் பிணைப்பு; H₂, Cl₂ இல் ஒற்றைப் பிணைப்பு.' },
  },
  {
    difficulty: 'easy', source: '§13.3.3, p. 155', answer: 0,
    en: { q: 'A coordinate covalent bond is also known as a', options: ['dative bond', 'metallic bond', 'hydrogen bond', 'electrostatic bond'], explanation: 'A covalent bond in which both shared electrons come from one atom is a coordinate covalent bond or dative bond.' },
    ta: { q: 'ஈதல் சகப்பிணைப்பு இவ்வாறும் அழைக்கப்படுகிறது', options: ['ஈதல் பிணைப்பு', 'உலோகப் பிணைப்பு', 'ஹைட்ரஜன் பிணைப்பு', 'நிலைமின் பிணைப்பு'], explanation: 'பிணைப்பிற்கான இரண்டு எலக்ட்ரான்களையும் ஒரே அணு தரும் பிணைப்பு ஈதல் சகப்பிணைப்பு அல்லது ஈதல் பிணைப்பு.' },
  },
  {
    difficulty: 'easy', source: '§13.4, p. 157', answer: 0,
    en: { q: 'Spoiling of food left open for a long time, due to oxidation, is called', options: ['rancidity', 'corrosion', 'neutralisation', 'reduction'], explanation: 'Oxidation of food materials left open causes them to spoil; this is rancidity.' },
    ta: { q: 'நீண்ட நேரம் திறந்து வைக்கப்பட்ட உணவுப்பொருள்கள் ஆக்ஸிஜனேற்றத்தால் கெட்டுப்போவது', options: ['கெட்டுப்போதல் (Rancidity)', 'அரிமானம்', 'நடுநிலையாக்கல்', 'ஒடுக்கம்'], explanation: 'திறந்து வைக்கப்பட்ட உணவுப்பொருள்கள் ஆக்ஸிஜனேற்றம் அடைவதால் கெட்டுப்போகின்றன; இதுவே Rancidity.' },
  },
  {
    difficulty: 'easy', source: '§13.4, p. 157', answer: 0,
    en: { q: 'The tarnishing of a shining metal surface due to formation of its oxide is called', options: ['corrosion', 'rancidity', 'catenation', 'hydration'], explanation: 'Atmospheric oxygen forms metal oxides on the surface; this is corrosion.' },
    ta: { q: 'உலோகங்களின் மேற்பரப்பில் ஆக்சைடு உருவாகி பளபளப்பு இழப்பது', options: ['அரிமானம்', 'கெட்டுப்போதல்', 'சங்கிலித் தொடராக்கம்', 'நீரேற்றம்'], explanation: 'காற்றிலுள்ள ஆக்ஸிஜனுடன் வினைபுரிந்து உலோக ஆக்சைடுகள் உருவாவது அரிமானம் (Corrosion).' },
  },

  // ------------------------------------------------------------------ Medium
  {
    difficulty: 'medium', source: 'Book exercise II.1, p. 159', answer: 0,
    en: { q: 'Atoms attain the noble gas electronic configuration by', options: ['transferring or sharing valence electrons', 'gaining protons in the nucleus', 'losing neutrons from the nucleus', 'changing their atomic number'], explanation: 'According to Kossel–Lewis theory, atoms combine by transfer or sharing of valence electrons to get a stable octet.' },
    ta: { q: 'தனிமங்கள் மந்த வாயுக்களின் எலக்ட்ரான் அமைப்பைப் பெறுவது', options: ['இணைதிறன் எலக்ட்ரான்களைப் பரிமாற்றம் அல்லது பங்கீடு செய்து', 'உட்கருவில் புரோட்டான்களை ஏற்று', 'உட்கருவிலிருந்து நியூட்ரான்களை இழந்து', 'அணு எண்ணை மாற்றிக்கொண்டு'], explanation: 'கோசல்–லூயிஸ் கொள்கைப்படி அணுக்கள் இணைதிறன் எலக்ட்ரான்களைப் பரிமாற்றம் அல்லது பங்கீடு செய்து நிலைத்த எண்மத்தைப் பெறுகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.2, p. 159', answer: 0,
    en: { q: 'NaCl dissolves in water but not in carbon tetrachloride because', options: ['ionic compounds dissolve in polar solvents only', 'NaCl is a covalent compound', 'carbon tetrachloride is a polar solvent', 'water is a non-polar solvent'], explanation: 'NaCl is ionic; ionic compounds are soluble in polar solvents like water and insoluble in non-polar solvents like CCl₄.' },
    ta: { q: 'NaCl நீரில் கரைகிறது; ஆனால் CCl₄ இல் கரைவதில்லை. காரணம்', options: ['அயனிச் சேர்மங்கள் முனைவுள்ள கரைப்பான்களில் மட்டுமே கரையும்', 'NaCl ஒரு சகப்பிணைப்புச் சேர்மம்', 'CCl₄ ஒரு முனைவுள்ள கரைப்பான்', 'நீர் ஒரு முனைவற்ற கரைப்பான்'], explanation: 'NaCl அயனிச் சேர்மம்; அது நீர் போன்ற முனைவுள்ள கரைப்பான்களில் கரையும், CCl₄ போன்ற முனைவற்ற கரைப்பான்களில் கரையாது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.3, p. 159', answer: 0,
    en: { q: 'Chlorine (2, 8, 7) obeys the octet rule by', options: ['gaining one electron to attain the argon configuration', 'losing seven electrons to attain the neon configuration', 'gaining two electrons to attain the argon configuration', 'losing one electron to attain the neon configuration'], explanation: 'Chlorine needs one more electron; gaining it gives Cl⁻ with the argon configuration 2, 8, 8.' },
    ta: { q: 'குளோரின் (2, 8, 7) எண்ம விதியைப் பின்பற்றுவது', options: ['ஒரு எலக்ட்ரானை ஏற்று ஆர்கான் அமைப்பைப் பெற்று', 'ஏழு எலக்ட்ரான்களை இழந்து நியான் அமைப்பைப் பெற்று', 'இரண்டு எலக்ட்ரான்களை ஏற்று ஆர்கான் அமைப்பைப் பெற்று', 'ஒரு எலக்ட்ரானை இழந்து நியான் அமைப்பைப் பெற்று'], explanation: 'குளோரினுக்கு ஒரு எலக்ட்ரான் குறைவு; அதை ஏற்று Cl⁻ ஆகி ஆர்கானின் அமைப்பு 2, 8, 8 ஐப் பெறுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.5, p. 159', answer: 0,
    en: { q: 'Which of these statements is correct?', options: ['Covalent compounds do not conduct electricity in molten or solution state.', 'Ionic compounds dissolve in non-polar solvents.', 'Covalent compounds conduct electricity in solution.', 'Ionic compounds are insoluble in water.'], explanation: 'Covalent compounds contain no ions, so they are bad conductors; ionic compounds dissolve in polar solvents such as water.' },
    ta: { q: 'பின்வரும் கூற்றுகளில் சரியானது எது?', options: ['சகப்பிணைப்புச் சேர்மங்கள் உருகிய அல்லது கரைசல் நிலையில் மின்சாரத்தைக் கடத்துவதில்லை.', 'அயனிச் சேர்மங்கள் முனைவற்ற கரைப்பான்களில் கரையும்.', 'சகப்பிணைப்புச் சேர்மங்கள் கரைசலில் மின்சாரத்தைக் கடத்தும்.', 'அயனிச் சேர்மங்கள் நீரில் கரையாது.'], explanation: 'சகப்பிணைப்புச் சேர்மங்களில் அயனிகள் இல்லாததால் அவை அரிதில் மின்கடத்திகள்; அயனிச் சேர்மங்கள் நீர் போன்ற முனைவுள்ள கரைப்பான்களில் கரையும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.6, p. 159', answer: 0,
    en: { q: 'Oxygen has atomic number 8. How many valence electrons are shown as dots in its Lewis structure?', options: ['6', '8', '2', '4'], explanation: 'Oxygen is 2, 6, so its Lewis structure shows 6 dots (two single dots and two pairs).' },
    ta: { q: 'ஆக்ஸிஜனின் அணு எண் 8. அதன் லூயிஸ் அமைப்பில் புள்ளிகளாகக் காட்டப்படும் இணைதிறன் எலக்ட்ரான்கள் எத்தனை?', options: ['6', '8', '2', '4'], explanation: 'ஆக்ஸிஜனின் அமைப்பு 2, 6; எனவே லூயிஸ் அமைப்பில் 6 புள்ளிகள் காட்டப்படும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.7, p. 159', answer: 0,
    en: { q: 'In the formation of a carbon dioxide (CO₂) molecule, carbon forms', options: ['a double bond with each oxygen atom', 'a single bond with each oxygen atom', 'a triple bond with each oxygen atom', 'ionic bonds with the oxygen atoms'], explanation: 'Carbon shares two pairs of electrons with each oxygen (O=C=O), so all three atoms complete their octets.' },
    ta: { q: 'கார்பன் டை ஆக்சைடு (CO₂) உருவாதலில் கார்பன் உருவாக்குவது', options: ['ஒவ்வொரு ஆக்ஸிஜனுடனும் இரட்டைப் பிணைப்பு', 'ஒவ்வொரு ஆக்ஸிஜனுடனும் ஒற்றைப் பிணைப்பு', 'ஒவ்வொரு ஆக்ஸிஜனுடனும் மும்மைப் பிணைப்பு', 'ஆக்ஸிஜன் அணுக்களுடன் அயனிப் பிணைப்புகள்'], explanation: 'கார்பன் ஒவ்வொரு ஆக்ஸிஜனுடனும் இரண்டு இணை எலக்ட்ரான்களைப் பங்கிடுகிறது (O=C=O); மூன்று அணுக்களும் எண்மத்தைப் பெறுகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.9, p. 160', answer: 0,
    en: { q: 'A property characteristic of an ionic compound is that it', options: ['is hard and brittle', 'often exists as a gas at room temperature', 'undergoes molecular reactions', 'has a low melting point'], explanation: 'Strong electrostatic forces make ionic compounds hard, though they are brittle.' },
    ta: { q: 'அயனிச் சேர்மங்களின் பொதுவான பண்பு', options: ['இவை கடினமானவை மற்றும் நொறுங்கும் தன்மை கொண்டவை', 'இவை அறை வெப்பநிலையில் வாயுக்கள்', 'இவை மூலக்கூறு வினைகளுக்குட்படுகின்றன', 'இவற்றின் உருகுநிலை குறைவு'], explanation: 'வலிமையான நிலைமின் கவர்ச்சி விசையால் அயனிச் சேர்மங்கள் கடினமானவை; ஆனால் எளிதில் நொறுங்கும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.10, p. 160', answer: 0,
    en: { q: 'The reaction Na → Na⁺ + e⁻ is an example of', options: ['oxidation', 'reduction', 'neutralisation', 'decomposition'], explanation: 'Loss of an electron is oxidation.' },
    ta: { q: 'Na → Na⁺ + e⁻ என்ற வினை', options: ['ஆக்ஸிஜனேற்றம்', 'ஒடுக்கம்', 'நடுநிலையாக்கல்', 'சிதைவுறுதல்'], explanation: 'எலக்ட்ரானை இழத்தல் ஆக்ஸிஜனேற்றம் ஆகும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.10, p. 160', answer: 0,
    en: { q: 'The reaction Fe³⁺ + 2e⁻ → Fe⁺ is an example of', options: ['reduction', 'oxidation', 'neutralisation', 'combustion'], explanation: 'Gain of electrons is reduction.' },
    ta: { q: 'Fe³⁺ + 2e⁻ → Fe⁺ என்ற வினை', options: ['ஒடுக்கம்', 'ஆக்ஸிஜனேற்றம்', 'நடுநிலையாக்கல்', 'எரிதல்'], explanation: 'எலக்ட்ரானை ஏற்றல் ஒடுக்கம் ஆகும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.11, p. 160', answer: 0,
    en: { q: 'Compounds that undergo fast, practically instantaneous reactions are', options: ['ionic compounds', 'covalent compounds', 'coordinate compounds', 'non-polar compounds'], explanation: 'Ionic compounds undergo ionic reactions, which are rapid; covalent and coordinate compounds undergo slow molecular reactions.' },
    ta: { q: 'வேகமாக, கண நேரத்தில் வினைபுரியும் சேர்மங்கள்', options: ['அயனிச் சேர்மங்கள்', 'சகப்பிணைப்புச் சேர்மங்கள்', 'ஈதல் சகப்பிணைப்புச் சேர்மங்கள்', 'முனைவற்ற சேர்மங்கள்'], explanation: 'அயனிச் சேர்மங்கள் வேகமான அயனி வினைகளில் ஈடுபடுகின்றன; சக மற்றும் ஈதல் சகப்பிணைப்புச் சேர்மங்கள் மெதுவான மூலக்கூறு வினைகளில் ஈடுபடுகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.11, p. 160', answer: 0,
    en: { q: 'A compound is soluble in non-polar solvents and does not conduct electricity. It is most likely', options: ['a covalent compound', 'an ionic compound', 'a metal', 'an alkali'], explanation: 'Covalent compounds dissolve in non-polar solvents like benzene and, having no ions, are non-conductors.' },
    ta: { q: 'ஒரு சேர்மம் முனைவற்ற கரைப்பான்களில் கரைகிறது; மின்சாரத்தைக் கடத்துவதில்லை. அது பெரும்பாலும்', options: ['சகப்பிணைப்புச் சேர்மம்', 'அயனிச் சேர்மம்', 'உலோகம்', 'எரிகாரம்'], explanation: 'சகப்பிணைப்புச் சேர்மங்கள் பென்சீன் போன்ற முனைவற்ற கரைப்பான்களில் கரையும்; அயனிகள் இல்லாததால் மின்சாரத்தைக் கடத்தாது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.13, p. 160', answer: 0,
    en: { q: 'Which correctly compares MgCl₂ (ionic) with CH₄ (covalent)?', options: ['MgCl₂ has a high melting point and dissolves in water; CH₄ has a low melting point.', 'MgCl₂ is a gas; CH₄ is a crystalline solid.', 'MgCl₂ is soluble in benzene; CH₄ is soluble in water.', 'Both conduct electricity in solid state.'], explanation: 'Ionic MgCl₂ is a high-melting solid soluble in water; covalent CH₄ is a low-melting gas soluble in non-polar solvents.' },
    ta: { q: 'MgCl₂ (அயனிச் சேர்மம்), CH₄ (சகப்பிணைப்புச் சேர்மம்) ஆகியவற்றைச் சரியாக ஒப்பிடுவது எது?', options: ['MgCl₂ அதிக உருகுநிலை கொண்டு நீரில் கரையும்; CH₄ குறைந்த உருகுநிலை கொண்டது.', 'MgCl₂ ஒரு வாயு; CH₄ ஒரு படிகத் திண்மம்.', 'MgCl₂ பென்சீனில் கரையும்; CH₄ நீரில் கரையும்.', 'இரண்டும் திண்ம நிலையில் மின்சாரத்தைக் கடத்தும்.'], explanation: 'அயனிச் சேர்மமான MgCl₂ அதிக உருகுநிலை கொண்ட, நீரில் கரையும் திண்மம்; CH₄ குறைந்த உருகுநிலை கொண்ட வாயு.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.14, p. 160', answer: 0,
    en: { q: 'Noble gases are inert in nature because', options: ['their valence shell is completely filled', 'they have no electrons', 'they are metals', 'they have only one valence electron'], explanation: 'With a stable, completely filled valence shell they have no tendency to gain or lose electrons.' },
    ta: { q: 'மந்த வாயுக்கள் மந்தத் தன்மையுடன் காணப்படுவதற்குக் காரணம்', options: ['அவற்றின் இணைதிறன் கூடு முழுமையாக நிரம்பியுள்ளது', 'அவற்றில் எலக்ட்ரான்கள் இல்லை', 'அவை உலோகங்கள்', 'அவற்றில் ஒரே ஒரு இணைதிறன் எலக்ட்ரான் உள்ளது'], explanation: 'முழுமையாக நிரம்பிய நிலைத்த வெளிக்கூடு இருப்பதால் அவை எலக்ட்ரான்களை ஏற்கவோ இழக்கவோ முனைவதில்லை.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.2, p. 160', answer: 0,
    en: { q: 'Which compound has three covalent bonds?', options: ['NH₃', 'H₂O', 'NaCl', 'CH₄'], explanation: 'In ammonia, nitrogen forms three single covalent bonds with three hydrogen atoms. H₂O has two and CH₄ four; NaCl is ionic.' },
    ta: { q: 'மூன்று சகப்பிணைப்புகள் உள்ள சேர்மம் எது?', options: ['NH₃', 'H₂O', 'NaCl', 'CH₄'], explanation: 'அம்மோனியாவில் நைட்ரஜன் மூன்று ஹைட்ரஜன் அணுக்களுடன் மூன்று சகப்பிணைப்புகளை உருவாக்குகிறது. H₂O இல் இரண்டு, CH₄ இல் நான்கு; NaCl அயனிச் சேர்மம்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.4, p. 160', answer: 0,
    en: { q: 'The melting points of coordinate covalent compounds are', options: ['higher than covalent compounds but lower than ionic compounds', 'higher than ionic compounds', 'lower than covalent compounds', 'equal to those of ionic compounds'], explanation: 'Coordinate compounds have melting and boiling points between those of purely covalent and purely ionic compounds.' },
    ta: { q: 'ஈதல் சகப்பிணைப்புச் சேர்மங்களின் உருகுநிலை', options: ['சகப்பிணைப்புச் சேர்மங்களை விட அதிகம், அயனிச் சேர்மங்களை விடக் குறைவு', 'அயனிச் சேர்மங்களை விட அதிகம்', 'சகப்பிணைப்புச் சேர்மங்களை விடக் குறைவு', 'அயனிச் சேர்மங்களுக்குச் சமம்'], explanation: 'ஈதல் சகப்பிணைப்புச் சேர்மங்களின் உருகுநிலை, கொதிநிலை சகப்பிணைப்புச் சேர்மங்களை விட அதிகமாகவும் அயனிச் சேர்மங்களை விடக் குறைவாகவும் உள்ளன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.5, p. 160', answer: 0,
    en: { q: 'The oxidation number of C in CO₂ is', options: ['+4', '+2', '–4', '+6'], explanation: 'x + 2 × (–2) = 0, so x = +4.' },
    ta: { q: 'CO₂ இல் உள்ள C இன் ஆக்ஸிஜனேற்ற எண்', options: ['+4', '+2', '–4', '+6'], explanation: 'x + 2 × (–2) = 0; எனவே x = +4.' },
  },
  {
    difficulty: 'medium', source: 'Book problem 3, p. 158', answer: 0,
    en: { q: 'The oxidation number of Cu in CuSO₄ (ON of S = +6) is', options: ['+2', '+1', '–2', '+4'], explanation: 'x + 6 + 4 × (–2) = 0, so x = +2.' },
    ta: { q: 'CuSO₄ இல் உள்ள Cu இன் ஆக்ஸிஜனேற்ற எண் (S இன் ஆ.எண் = +6)', options: ['+2', '+1', '–2', '+4'], explanation: 'x + 6 + 4 × (–2) = 0; எனவே x = +2.' },
  },
  {
    difficulty: 'medium', source: 'Book problem 4, p. 158', answer: 0,
    en: { q: 'The oxidation number of Fe in FeO is', options: ['+2', '+3', '–2', '+1'], explanation: 'x + (–2) = 0, so x = +2.' },
    ta: { q: 'FeO இல் உள்ள Fe இன் ஆக்ஸிஜனேற்ற எண்', options: ['+2', '+3', '–2', '+1'], explanation: 'x + (–2) = 0; எனவே x = +2.' },
  },
  {
    difficulty: 'medium', source: 'Book illustration 2, p. 157', answer: 0,
    en: { q: 'The oxidation number of S in H₂SO₄ is', options: ['+6', '+4', '–2', '+8'], explanation: '2 × (+1) + x + 4 × (–2) = 0, so x = +6.' },
    ta: { q: 'H₂SO₄ இல் உள்ள S இன் ஆக்ஸிஜனேற்ற எண்', options: ['+6', '+4', '–2', '+8'], explanation: '2 × (+1) + x + 4 × (–2) = 0; எனவே x = +6.' },
  },
  {
    difficulty: 'medium', source: '§13.1.1, p. 150', answer: 0,
    en: { q: 'Atoms having 5, 6 or 7 electrons in their valence shell tend to', options: ['gain electrons', 'lose electrons', 'neither gain nor lose electrons', 'lose protons'], explanation: 'Atoms with 1–3 valence electrons tend to lose electrons, while those with 5–7 tend to gain electrons to complete the octet.' },
    ta: { q: 'இணைதிறன் கூட்டில் 5, 6 அல்லது 7 எலக்ட்ரான்கள் கொண்ட அணுக்கள்', options: ['எலக்ட்ரான்களை ஏற்க முனைகின்றன', 'எலக்ட்ரான்களை இழக்க முனைகின்றன', 'எலக்ட்ரான்களை ஏற்பதுமில்லை இழப்பதுமில்லை', 'புரோட்டான்களை இழக்கின்றன'], explanation: '1–3 இணைதிறன் எலக்ட்ரான்கள் கொண்டவை இழக்கவும், 5–7 கொண்டவை எண்மத்தை நிறைவு செய்ய ஏற்கவும் முனைகின்றன.' },
  },
  {
    difficulty: 'medium', source: '§13.3.1, p. 152', answer: 0,
    en: { q: 'In the formation of MgCl₂, each magnesium atom', options: ['loses two electrons, one to each chlorine atom', 'gains two electrons from chlorine', 'shares two pairs of electrons with chlorine', 'loses one electron to one chlorine atom'], explanation: 'Mg (2, 8, 2) loses two electrons to form Mg²⁺; two chlorine atoms each gain one electron to form Cl⁻.' },
    ta: { q: 'MgCl₂ உருவாதலில் ஒவ்வொரு மெக்னீசியம் அணுவும்', options: ['இரண்டு எலக்ட்ரான்களை இழந்து ஒவ்வொரு குளோரினுக்கும் ஒன்று தருகிறது', 'குளோரினிடமிருந்து இரண்டு எலக்ட்ரான்களை ஏற்கிறது', 'குளோரினுடன் இரண்டு இணை எலக்ட்ரான்களைப் பங்கிடுகிறது', 'ஒரு குளோரின் அணுவுக்கு ஒரு எலக்ட்ரானை இழக்கிறது'], explanation: 'Mg (2, 8, 2) இரண்டு எலக்ட்ரான்களை இழந்து Mg²⁺ ஆகிறது; இரு குளோரின் அணுக்களும் தலா ஒரு எலக்ட்ரானை ஏற்று Cl⁻ ஆகின்றன.' },
  },
  {
    difficulty: 'medium', source: '§13.3.1, p. 152', answer: 0,
    en: { q: 'Ionic compounds do not conduct electricity in the solid state because', options: ['their ions are tightly held and cannot move freely', 'they contain no ions', 'they are made of neutral molecules', 'their electrons are shared'], explanation: 'In the crystal the ions are fixed; in molten state or aqueous solution the ions move and conduct electricity.' },
    ta: { q: 'அயனிச் சேர்மங்கள் திண்ம நிலையில் மின்சாரத்தைக் கடத்தாததற்குக் காரணம்', options: ['அயனிகள் இறுக்கமாகப் பிணைக்கப்பட்டு நகர இயலாது', 'அவற்றில் அயனிகள் இல்லை', 'அவை நடுநிலை மூலக்கூறுகளால் ஆனவை', 'அவற்றின் எலக்ட்ரான்கள் பங்கிடப்பட்டுள்ளன'], explanation: 'படிகத்தில் அயனிகள் நகர இயலாது; உருகிய நிலையில் அல்லது நீர்க்கரைசலில் அயனிகள் நகர்ந்து மின்சாரத்தைக் கடத்துகின்றன.' },
  },
  {
    difficulty: 'medium', source: '§13.3.2, p. 154', answer: 0,
    en: { q: 'How many pairs of electrons are shared between the two atoms in an oxygen molecule (O₂)?', options: ['Two', 'One', 'Three', 'Four'], explanation: 'Each oxygen (2, 6) needs two electrons, so the atoms share two pairs and form a double bond, O=O.' },
    ta: { q: 'ஆக்ஸிஜன் மூலக்கூறில் (O₂) இரு அணுக்களுக்கிடையே பங்கிடப்படும் எலக்ட்ரான் இணைகள் எத்தனை?', options: ['இரண்டு', 'ஒன்று', 'மூன்று', 'நான்கு'], explanation: 'ஒவ்வொரு ஆக்ஸிஜனுக்கும் (2, 6) இரண்டு எலக்ட்ரான்கள் தேவை; எனவே இரண்டு இணைகள் பங்கிடப்பட்டு இரட்டைப் பிணைப்பு O=O உருவாகிறது.' },
  },
  {
    difficulty: 'medium', source: '§13.3.2, p. 154', answer: 0,
    en: { q: 'Covalent compounds are readily soluble in', options: ['benzene', 'water', 'dilute hydrochloric acid', 'salt solution'], explanation: 'Covalent compounds dissolve in non-polar solvents like benzene and CCl₄, and are insoluble in polar solvents like water.' },
    ta: { q: 'சகப்பிணைப்புச் சேர்மங்கள் எளிதில் கரைவது', options: ['பென்சீனில்', 'நீரில்', 'நீர்த்த ஹைட்ரோகுளோரிக் அமிலத்தில்', 'உப்புக் கரைசலில்'], explanation: 'சகப்பிணைப்புச் சேர்மங்கள் பென்சீன், CCl₄ போன்ற முனைவற்ற கரைப்பான்களில் கரையும்; நீர் போன்ற முனைவுள்ள கரைப்பான்களில் கரையாது.' },
  },
  {
    difficulty: 'medium', source: '§13.3.2, p. 155', answer: 0,
    en: { q: 'According to Fajan’s rules, a bond has more covalent character when', options: ['the cation is small and the anion is large', 'the cation is large and the anion is small', 'the cation has a low positive charge', 'both ions are large'], explanation: 'A small, highly charged cation and a large anion prevent complete charge separation, giving covalent character.' },
    ta: { q: 'ஃபஜான் விதிப்படி ஒரு பிணைப்பு அதிக சகப்பிணைப்புத் தன்மை பெறுவது', options: ['நேர்மின் அயனி சிறியதாகவும் எதிர்மின் அயனி பெரியதாகவும் இருக்கும்போது', 'நேர்மின் அயனி பெரியதாகவும் எதிர்மின் அயனி சிறியதாகவும் இருக்கும்போது', 'நேர்மின் அயனியின் மின்சுமை குறைவாக இருக்கும்போது', 'இரு அயனிகளும் பெரியதாக இருக்கும்போது'], explanation: 'சிறிய, அதிக மின்சுமை கொண்ட நேர்மின் அயனியும் பெரிய எதிர்மின் அயனியும் முழுமையான மின்சுமைப் பிரிவைத் தடுத்து சகப்பிணைப்புத் தன்மையைத் தருகின்றன.' },
  },
  {
    difficulty: 'medium', source: '§13.3.3, p. 156', answer: 0,
    en: { q: 'In NH₃ → BF₃, the donor molecule is', options: ['NH₃, which gives its lone pair', 'BF₃, which gives its lone pair', 'NH₃, which accepts a lone pair', 'BF₃, which gives one electron'], explanation: 'Ammonia donates its lone pair to electron-deficient BF₃; the arrow points from donor to acceptor.' },
    ta: { q: 'NH₃ → BF₃ இல் ஈனி மூலக்கூறு', options: ['தனி இரட்டையை வழங்கும் NH₃', 'தனி இரட்டையை வழங்கும் BF₃', 'தனி இரட்டையை ஏற்கும் NH₃', 'ஒரு எலக்ட்ரானை வழங்கும் BF₃'], explanation: 'அம்மோனியா தனது தனி இரட்டை எலக்ட்ரான்களை எலக்ட்ரான் குறைவுள்ள BF₃ க்கு வழங்குகிறது; அம்புக்குறி ஈனியிலிருந்து ஏற்பியை நோக்கி இருக்கும்.' },
  },
  {
    difficulty: 'medium', source: '§13.4, p. 156', answer: 0,
    en: { q: 'In the reaction CuO + H₂ → Cu + H₂O, copper oxide is', options: ['reduced, because it loses oxygen', 'oxidised, because it loses oxygen', 'reduced, because it gains hydrogen', 'oxidised, because it gains electrons'], explanation: 'Removal of oxygen is reduction, so CuO is reduced to Cu while H₂ is oxidised.' },
    ta: { q: 'CuO + H₂ → Cu + H₂O என்ற வினையில் காப்பர் ஆக்சைடு', options: ['ஆக்ஸிஜனை இழப்பதால் ஒடுக்கமடைகிறது', 'ஆக்ஸிஜனை இழப்பதால் ஆக்ஸிஜனேற்றமடைகிறது', 'ஹைட்ரஜனை ஏற்பதால் ஒடுக்கமடைகிறது', 'எலக்ட்ரானை ஏற்பதால் ஆக்ஸிஜனேற்றமடைகிறது'], explanation: 'ஆக்ஸிஜன் நீக்கப்படுதல் ஒடுக்கம்; CuO ஒடுக்கமடைந்து Cu ஆகிறது, H₂ ஆக்ஸிஜனேற்றமடைகிறது.' },
  },
  {
    difficulty: 'medium', source: '§13.4, p. 157', answer: 0,
    en: { q: 'Which of these is a reducing agent?', options: ['LiAlH₄', 'H₂O₂', 'MnO₄⁻', 'Cr₂O₇²⁻'], explanation: 'NaBH₄, LiAlH₄, palladium and platinum are reducing agents; H₂O₂, MnO₄⁻ and Cr₂O₇²⁻ are oxidising agents.' },
    ta: { q: 'பின்வருவனவற்றுள் ஒடுக்கி எது?', options: ['LiAlH₄', 'H₂O₂', 'MnO₄⁻', 'Cr₂O₇²⁻'], explanation: 'NaBH₄, LiAlH₄, பல்லேடியம், பிளாட்டினம் ஆகியவை ஒடுக்கிகள்; H₂O₂, MnO₄⁻, Cr₂O₇²⁻ ஆகியவை ஆக்ஸிஜனேற்றிகள்.' },
  },
  {
    difficulty: 'medium', source: '§13.4, p. 157', answer: 0,
    en: { q: 'The sum of the oxidation numbers of all the atoms in a neutral compound is', options: ['zero', 'equal to the number of atoms', '+1', 'equal to the atomic number'], explanation: 'For a neutral molecule the oxidation numbers add up to zero; for an ion they add up to the charge on the ion.' },
    ta: { q: 'நடுநிலையான சேர்மம் ஒன்றில் உள்ள அனைத்து அணுக்களின் ஆக்ஸிஜனேற்ற எண்களின் கூடுதல்', options: ['பூஜ்யம்', 'அணுக்களின் எண்ணிக்கைக்குச் சமம்', '+1', 'அணு எண்ணுக்குச் சமம்'], explanation: 'நடுநிலை மூலக்கூறில் கூடுதல் பூஜ்யம்; அயனியில் அது அயனியின் மின்சுமைக்குச் சமம்.' },
  },
  {
    difficulty: 'medium', source: '§13.4, p. 157', answer: 0,
    en: { q: 'The tendency of an atom in a molecule to attract the shared pair of electrons towards itself is called', options: ['electronegativity', 'electrovalency', 'oxidation number', 'valency'], explanation: 'This is electronegativity; in a compound the negative oxidation number goes to the more electronegative atom.' },
    ta: { q: 'பிணைப்பிலுள்ள இணை எலக்ட்ரான்களை ஓர் அணு தன்னை நோக்கிக் கவர்ந்திழுக்கும் தன்மை', options: ['எலக்ட்ரான் கவர் தன்மை', 'எலக்ட்ரான் இணைதிறன்', 'ஆக்ஸிஜனேற்ற எண்', 'இணைதிறன்'], explanation: 'இது எலக்ட்ரான் கவர் தன்மை; சேர்மத்தில் அதிக எலக்ட்ரான் கவர் தன்மை உள்ள அணு எதிர் ஆக்ஸிஜனேற்ற எண்ணைப் பெறுகிறது.' },
  },

  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise II.8, p. 159', answer: 0,
    en: { q: 'From CaCl₂, H₂O, CaO, CO, KBr, HCl, CCl₄, HF, CO₂ and Al₂Cl₆, which set contains only ionic compounds?', options: ['CaCl₂, CaO, KBr', 'H₂O, HCl, HF', 'CO, Al₂Cl₆, CO₂', 'CaO, CCl₄, KBr'], explanation: 'CaCl₂, CaO and KBr are metal–non-metal compounds (ionic). H₂O, HCl, HF, CCl₄ and CO₂ are covalent; CO and Al₂Cl₆ contain coordinate bonds.' },
    ta: { q: 'CaCl₂, H₂O, CaO, CO, KBr, HCl, CCl₄, HF, CO₂, Al₂Cl₆ ஆகியவற்றுள் அயனிச் சேர்மங்களை மட்டும் கொண்ட தொகுப்பு எது?', options: ['CaCl₂, CaO, KBr', 'H₂O, HCl, HF', 'CO, Al₂Cl₆, CO₂', 'CaO, CCl₄, KBr'], explanation: 'CaCl₂, CaO, KBr ஆகியவை உலோக–அலோகச் சேர்மங்கள் (அயனி). H₂O, HCl, HF, CCl₄, CO₂ சகப்பிணைப்பு; CO, Al₂Cl₆ ஈதல் சகப்பிணைப்பு கொண்டவை.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise II.8, p. 159', answer: 0,
    en: { q: 'Which pair of molecules contains a coordinate covalent bond?', options: ['CO and Al₂Cl₆', 'HCl and HF', 'CaO and KBr', 'CCl₄ and CO₂'], explanation: 'In CO and Al₂Cl₆ one atom donates a lone pair to form a dative bond; the other pairs are purely covalent or ionic.' },
    ta: { q: 'ஈதல் சகப்பிணைப்பைக் கொண்ட மூலக்கூறு இணை எது?', options: ['CO மற்றும் Al₂Cl₆', 'HCl மற்றும் HF', 'CaO மற்றும் KBr', 'CCl₄ மற்றும் CO₂'], explanation: 'CO, Al₂Cl₆ இல் ஓர் அணு தனி இரட்டையை வழங்கி ஈதல் பிணைப்பை உருவாக்குகிறது; மற்ற இணைகள் சகப்பிணைப்பு அல்லது அயனிப் பிணைப்பு கொண்டவை.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise II.12, p. 160', answer: 0,
    en: { q: 'An atom X (atomic number 20) combines with an atom Y (atomic number 8) to form XY. Which description is correct?', options: ['X transfers two electrons to Y, forming the ionic compound CaO.', 'X and Y share two pairs of electrons, forming covalent CaO.', 'X transfers one electron to Y, forming ionic CaO.', 'Y transfers two electrons to X, forming ionic CaO.'], explanation: 'X is calcium (2, 8, 8, 2) and Y is oxygen (2, 6). Calcium loses two electrons to oxygen, giving Ca²⁺ and O²⁻ held by an ionic bond.' },
    ta: { q: 'அணு எண் 20 கொண்ட X, அணு எண் 8 கொண்ட Y உடன் இணைந்து XY ஐ உருவாக்குகிறது. சரியான விளக்கம் எது?', options: ['X இரண்டு எலக்ட்ரான்களை Y க்கு மாற்றி அயனிச் சேர்மம் CaO உருவாகிறது.', 'X, Y இரண்டு இணை எலக்ட்ரான்களைப் பங்கிட்டு சகப்பிணைப்பு CaO உருவாகிறது.', 'X ஒரு எலக்ட்ரானை Y க்கு மாற்றி அயனிச் சேர்மம் CaO உருவாகிறது.', 'Y இரண்டு எலக்ட்ரான்களை X க்கு மாற்றி அயனிச் சேர்மம் CaO உருவாகிறது.'], explanation: 'X கால்சியம் (2, 8, 8, 2), Y ஆக்ஸிஜன் (2, 6). கால்சியம் இரண்டு எலக்ட்ரான்களை ஆக்ஸிஜனுக்கு இழந்து Ca²⁺, O²⁻ அயனிகள் அயனிப் பிணைப்பால் இணைகின்றன.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise III.1, p. 160', answer: 0,
    en: { q: 'Consider these statements about ionic and covalent compounds:\n1. Ionic compounds have high melting points; covalent compounds generally have low melting points.\n2. Ionic compounds dissolve in water; covalent compounds dissolve in benzene.\n3. Ionic compounds undergo slow molecular reactions.\nWhich are correct?', options: ['1 and 2 only', '1 and 3 only', '2 and 3 only', '1, 2 and 3'], explanation: 'Statements 1 and 2 are correct. Ionic compounds undergo fast ionic reactions; slow molecular reactions are typical of covalent compounds.' },
    ta: { q: 'அயனி மற்றும் சகப்பிணைப்புச் சேர்மங்கள் பற்றிய கூற்றுகள்:\n1. அயனிச் சேர்மங்கள் அதிக உருகுநிலை கொண்டவை; சகப்பிணைப்புச் சேர்மங்கள் பொதுவாகக் குறைந்த உருகுநிலை கொண்டவை.\n2. அயனிச் சேர்மங்கள் நீரில் கரையும்; சகப்பிணைப்புச் சேர்மங்கள் பென்சீனில் கரையும்.\n3. அயனிச் சேர்மங்கள் மெதுவான மூலக்கூறு வினைகளில் ஈடுபடுகின்றன.\nசரியானவை எவை?', options: ['1, 2 மட்டும்', '1, 3 மட்டும்', '2, 3 மட்டும்', '1, 2, 3'], explanation: 'கூற்று 1, 2 சரி. அயனிச் சேர்மங்கள் வேகமான அயனி வினைகளில் ஈடுபடுகின்றன; மெதுவான மூலக்கூறு வினைகள் சகப்பிணைப்புச் சேர்மங்களுக்குரியவை.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise III.2, p. 160', answer: 0,
    en: { q: 'Which molecule is formed by two covalent bonds and one coordinate bond between its two atoms?', options: ['CO', 'CO₂', 'H₂O', 'N₂'], explanation: 'In carbon monoxide, C and O share two pairs, and oxygen donates one lone pair to carbon as a coordinate bond.' },
    ta: { q: 'இரண்டு அணுக்களுக்கிடையே இரண்டு சகப்பிணைப்புகளும் ஒரு ஈதல் சகப்பிணைப்பும் கொண்ட மூலக்கூறு எது?', options: ['CO', 'CO₂', 'H₂O', 'N₂'], explanation: 'கார்பன் மோனாக்சைடில் C, O இரண்டு இணைகளைப் பங்கிடுகின்றன; ஆக்ஸிஜன் ஒரு தனி இரட்டையை கார்பனுக்கு ஈதல் பிணைப்பாக வழங்குகிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise III.3, p. 160', answer: 0,
    en: { q: 'Which of these statements about bonds and redox reactions is correct?', options: ['Loss of electrons is called oxidation and gain of electrons is called reduction.', 'Coordinate compounds contain ions, so they are good conductors of electricity.', 'An ionic bond is weaker than a hydrogen bond.', 'Ionic bonds are formed by mutual sharing of electrons between atoms.'], explanation: 'Only the first is correct. Coordinate compounds contain no ions; the ionic bond is a strong bond; ionic bonds form by transfer of electrons.' },
    ta: { q: 'பிணைப்புகள், ஆக்ஸிஜனேற்ற ஒடுக்க வினைகள் பற்றிய கூற்றுகளில் சரியானது எது?', options: ['எலக்ட்ரான் இழப்பு ஆக்ஸிஜனேற்றம் என்றும், எலக்ட்ரான் ஏற்பு ஒடுக்கம் என்றும் அழைக்கப்படுகிறது.', 'ஈதல் சகப்பிணைப்புச் சேர்மங்கள் அயனிகளைப் பெற்றுள்ளதால் நல்ல மின்கடத்திகள்.', 'அயனிப் பிணைப்பு ஹைட்ரஜன் பிணைப்பை விட வலிமை குறைந்தது.', 'அயனிப் பிணைப்பு எலக்ட்ரான்களைச் சமமாகப் பங்கீடு செய்வதால் உருவாகிறது.'], explanation: 'முதல் கூற்று மட்டும் சரி. ஈதல் சகப்பிணைப்புச் சேர்மங்களில் அயனிகள் இல்லை; அயனிப் பிணைப்பு வலிமையானது; அது எலக்ட்ரான் பரிமாற்றத்தால் உருவாகிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise III.3, p. 160', answer: 0,
    en: { q: 'The statement "Electrons not involved in bonding are called valence electrons" is wrong. The correct term for such electrons in a valence shell is', options: ['lone pair (non-bonding) electrons', 'shared pair electrons', 'core electrons', 'free ions'], explanation: 'Valence electrons are those in the outermost shell; the pairs among them not used in bonding are lone pairs.' },
    ta: { q: '"பிணைப்பில் ஈடுபடாத எலக்ட்ரான்களை இணைதிறன் எலக்ட்ரான்கள் என்கிறோம்" என்ற கூற்று தவறு. வெளிக்கூட்டில் பிணைப்பில் ஈடுபடாத அத்தகைய எலக்ட்ரான்களின் சரியான பெயர்', options: ['தனி இரட்டை எலக்ட்ரான்கள்', 'பங்கிடப்பட்ட இணை எலக்ட்ரான்கள்', 'உட்கூட்டு எலக்ட்ரான்கள்', 'கட்டற்ற அயனிகள்'], explanation: 'வெளிக்கூட்டிலுள்ளவை இணைதிறன் எலக்ட்ரான்கள்; அவற்றுள் பிணைப்பில் ஈடுபடாத இணைகள் தனி இரட்டை எலக்ட்ரான்கள்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise III.5, p. 160', answer: 0,
    en: { q: 'The oxidation number of Mn in MnSO₄ (SO₄ group: S = +6, O = –2) is', options: ['+2', '+4', '+6', '–2'], explanation: 'x + 6 + 4 × (–2) = 0, so x = +2.' },
    ta: { q: 'MnSO₄ இல் உள்ள Mn இன் ஆக்ஸிஜனேற்ற எண் (S = +6, O = –2)', options: ['+2', '+4', '+6', '–2'], explanation: 'x + 6 + 4 × (–2) = 0; எனவே x = +2.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise III.5, p. 160', answer: 0,
    en: { q: 'The oxidation number of N in HNO₃ is', options: ['+5', '+3', '–3', '+6'], explanation: '(+1) + x + 3 × (–2) = 0, so x = +5.' },
    ta: { q: 'HNO₃ இல் உள்ள N இன் ஆக்ஸிஜனேற்ற எண்', options: ['+5', '+3', '–3', '+6'], explanation: '(+1) + x + 3 × (–2) = 0; எனவே x = +5.' },
  },
  {
    difficulty: 'hard', source: 'Book problem 1, p. 158', answer: 0,
    en: { q: 'The oxidation number of Mn in KMnO₄ is', options: ['+7', '+5', '+6', '+4'], explanation: '(+1) + x + 4 × (–2) = 0, so x = +7.' },
    ta: { q: 'KMnO₄ இல் உள்ள Mn இன் ஆக்ஸிஜனேற்ற எண்', options: ['+7', '+5', '+6', '+4'], explanation: '(+1) + x + 4 × (–2) = 0; எனவே x = +7.' },
  },
  {
    difficulty: 'hard', source: 'Book problem 2, p. 158', answer: 0,
    en: { q: 'The oxidation number of Cr in Na₂Cr₂O₇ is', options: ['+6', '+7', '+12', '+3'], explanation: '2 × (+1) + 2x + 7 × (–2) = 0 → 2x = 12 → x = +6. (+12 forgets to divide by the two Cr atoms.)' },
    ta: { q: 'Na₂Cr₂O₇ இல் உள்ள Cr இன் ஆக்ஸிஜனேற்ற எண்', options: ['+6', '+7', '+12', '+3'], explanation: '2 × (+1) + 2x + 7 × (–2) = 0 → 2x = 12 → x = +6. (+12 என்பது இரண்டு Cr அணுக்களால் வகுக்க மறந்தது.)' },
  },
  {
    difficulty: 'hard', source: '§13.4, p. 157', answer: 0,
    en: { q: 'The oxidation number of Cr in the dichromate ion Cr₂O₇²⁻ is', options: ['+6', '+7', '+5', '+12'], explanation: 'For an ion the sum equals its charge: 2x + 7 × (–2) = –2 → 2x = 12 → x = +6.' },
    ta: { q: 'Cr₂O₇²⁻ அயனியில் உள்ள Cr இன் ஆக்ஸிஜனேற்ற எண்', options: ['+6', '+7', '+5', '+12'], explanation: 'அயனியில் கூடுதல் அதன் மின்சுமைக்குச் சமம்: 2x + 7 × (–2) = –2 → 2x = 12 → x = +6.' },
  },
  {
    difficulty: 'hard', source: '§13.4, p. 156', answer: 0,
    en: { q: 'In the redox reaction Zn + CuSO₄ → Cu + ZnSO₄,', options: ['zinc is oxidised and copper ions are reduced', 'zinc is reduced and copper ions are oxidised', 'both zinc and copper are oxidised', 'sulphate ions are oxidised'], explanation: 'Zn loses two electrons to become Zn²⁺ (oxidation); Cu²⁺ gains them to become Cu (reduction).' },
    ta: { q: 'Zn + CuSO₄ → Cu + ZnSO₄ என்ற ஆக்ஸிஜனேற்ற ஒடுக்க வினையில்', options: ['துத்தநாகம் ஆக்ஸிஜனேற்றமும் காப்பர் அயனிகள் ஒடுக்கமும் அடைகின்றன', 'துத்தநாகம் ஒடுக்கமும் காப்பர் அயனிகள் ஆக்ஸிஜனேற்றமும் அடைகின்றன', 'துத்தநாகம், காப்பர் இரண்டும் ஆக்ஸிஜனேற்றமடைகின்றன', 'சல்பேட் அயனிகள் ஆக்ஸிஜனேற்றமடைகின்றன'], explanation: 'Zn இரண்டு எலக்ட்ரான்களை இழந்து Zn²⁺ ஆகிறது (ஆக்ஸிஜனேற்றம்); Cu²⁺ அவற்றை ஏற்று Cu ஆகிறது (ஒடுக்கம்).' },
  },
  {
    difficulty: 'hard', source: '§13.4, p. 156', answer: 0,
    en: { q: 'In 2PbO + C → 2Pb + CO₂, which substance acts as the reducing agent?', options: ['C, because it removes oxygen from PbO', 'PbO, because it gives oxygen to carbon', 'Pb, because it is formed from PbO', 'CO₂, because it contains oxygen'], explanation: 'Carbon takes oxygen from PbO, reducing it to Pb, and is itself oxidised to CO₂; so carbon is the reducing agent.' },
    ta: { q: '2PbO + C → 2Pb + CO₂ இல் ஒடுக்கியாகச் செயல்படுவது எது?', options: ['PbO இலிருந்து ஆக்ஸிஜனை நீக்கும் C', 'கார்பனுக்கு ஆக்ஸிஜனைத் தரும் PbO', 'PbO இலிருந்து உருவாகும் Pb', 'ஆக்ஸிஜனைக் கொண்ட CO₂'], explanation: 'கார்பன் PbO இலிருந்து ஆக்ஸிஜனை எடுத்து அதை Pb ஆக ஒடுக்குகிறது; தானே CO₂ ஆக ஆக்ஸிஜனேற்றமடைகிறது. எனவே கார்பன் ஒடுக்கி.' },
  },
  {
    difficulty: 'hard', source: '§13.3.2, p. 155', imageUrl: `${IMG}/fajans-charge-separation.png`, answer: 0,
    en: { q: 'The figure shows the relative charge separation in some ionic compounds. Which pair of ions shows the greatest covalent character?', options: ['Al³⁺ and Br⁻', 'Na⁺ and Cl⁻', 'Mg²⁺ and Cl⁻', 'Al³⁺ and F⁻'], explanation: 'Al³⁺ is small with a high charge and Br⁻ is the largest anion, so the anion is most distorted and charge separation is least.' },
    ta: { q: 'படம் சில அயனிச் சேர்மங்களின் மின்சுமைப் பிரிவைக் காட்டுகிறது. அதிக சகப்பிணைப்புத் தன்மை காட்டும் அயனி இணை எது?', options: ['Al³⁺ மற்றும் Br⁻', 'Na⁺ மற்றும் Cl⁻', 'Mg²⁺ மற்றும் Cl⁻', 'Al³⁺ மற்றும் F⁻'], explanation: 'Al³⁺ சிறிய, அதிக மின்சுமை கொண்டது; Br⁻ மிகப் பெரிய எதிர்மின் அயனி; எனவே மின்சுமைப் பிரிவு மிகக் குறைவு.' },
  },
  {
    difficulty: 'hard', source: '§13.3.1, p. 152', answer: 0,
    en: { q: 'Assertion: Ionic compounds have high melting and boiling points.\nReason: The cations and anions are held tightly by strong electrostatic forces.', options: AR_EN, explanation: 'Both are true, and the strong electrostatic attraction is exactly why much energy is needed to melt them.' },
    ta: { q: 'கூற்று: அயனிச் சேர்மங்கள் அதிக உருகுநிலையும் கொதிநிலையும் கொண்டவை.\nகாரணம்: நேர், எதிர் அயனிகள் வலிமையான நிலைமின் கவர்ச்சி விசையால் இறுக்கமாகப் பிணைக்கப்பட்டுள்ளன.', options: AR_TA, explanation: 'இரண்டும் சரி; வலிமையான நிலைமின் கவர்ச்சியே அவற்றை உருக்க அதிக ஆற்றல் தேவைப்படுவதற்குக் காரணம்.' },
  },
  {
    difficulty: 'hard', source: '§13.3.2, p. 154', answer: 0,
    en: { q: 'Assertion: Covalent compounds are bad conductors of electricity.\nReason: Covalent compounds do not contain charged particles (ions).', options: AR_EN, explanation: 'Both are true, and the absence of ions explains why they do not conduct.' },
    ta: { q: 'கூற்று: சகப்பிணைப்புச் சேர்மங்கள் அரிதில் மின்கடத்திகள்.\nகாரணம்: சகப்பிணைப்புச் சேர்மங்களில் மின்சுமையுடைய துகள்கள் (அயனிகள்) இல்லை.', options: AR_TA, explanation: 'இரண்டும் சரி; அயனிகள் இல்லாததே அவை மின்சாரத்தைக் கடத்தாததற்குக் காரணம்.' },
  },
  {
    difficulty: 'hard', source: '§13.3.2, p. 155', answer: 2,
    en: { q: 'Assertion: Sodium chloride is an ionic compound.\nReason: The sodium ion carries a high positive charge of +3.', options: AR_EN, explanation: 'NaCl is ionic, but Na⁺ has a low charge (+1); its low charge, large cation and small anion allow complete charge separation.' },
    ta: { q: 'கூற்று: சோடியம் குளோரைடு ஒரு அயனிச் சேர்மம்.\nகாரணம்: சோடியம் அயனி +3 என்ற அதிக நேர்மின்சுமையைக் கொண்டது.', options: AR_TA, explanation: 'NaCl அயனிச் சேர்மம்; ஆனால் Na⁺ இன் மின்சுமை குறைவு (+1). குறைந்த மின்சுமை, பெரிய நேர்மின் அயனி, சிறிய எதிர்மின் அயனி முழு மின்சுமைப் பிரிவைத் தருகின்றன.' },
  },
  {
    difficulty: 'hard', source: '§13.4, p. 157', answer: 3,
    en: { q: 'Assertion: Reducing agents are called electron acceptors.\nReason: Reducing agents donate electrons to other substances.', options: AR_EN, explanation: 'The reason is true, so reducing agents are electron donors, not acceptors; the assertion is false.' },
    ta: { q: 'கூற்று: ஒடுக்கிகள் எலக்ட்ரான் ஏற்பிகள் என அழைக்கப்படுகின்றன.\nகாரணம்: ஒடுக்கிகள் மற்ற பொருள்களுக்கு எலக்ட்ரான்களை வழங்குகின்றன.', options: AR_TA, explanation: 'காரணம் சரி; எனவே ஒடுக்கிகள் எலக்ட்ரான் ஈனிகள், ஏற்பிகள் அல்ல; கூற்று தவறு.' },
  },
  {
    difficulty: 'hard', source: '§13.1.1, p. 149', answer: 0,
    en: { q: 'Assertion: Noble gases exist as monoatomic gases.\nReason: They have a stable valence shell configuration and no tendency to gain or lose electrons.', options: AR_EN, explanation: 'Being so stable, noble gas atoms do not even form diatomic molecules; the reason correctly explains the assertion.' },
    ta: { q: 'கூற்று: மந்த வாயுக்கள் ஓரணு வாயுக்களாக உள்ளன.\nகாரணம்: அவை நிலைத்த வெளிக்கூட்டு அமைப்பைக் கொண்டு எலக்ட்ரான்களை ஏற்கவோ இழக்கவோ முனைவதில்லை.', options: AR_TA, explanation: 'மிகுந்த நிலைப்புத் தன்மையால் மந்த வாயு அணுக்கள் ஈரணு மூலக்கூறுகளைக் கூட உருவாக்குவதில்லை; காரணம் கூற்றைச் சரியாக விளக்குகிறது.' },
  },
  {
    difficulty: 'hard', source: '§13.3.3, p. 155', answer: 0,
    en: { q: 'Atom A has a lone pair of electrons and atom B is short of two electrons. Which statements are correct?\n1. A acts as the donor atom.\n2. The bond is shown as A → B.\n3. Each atom contributes one electron to the bond.', options: ['1 and 2 only', '1 and 3 only', '2 and 3 only', '1, 2 and 3'], explanation: 'In a coordinate bond A donates both electrons, and the arrow points from donor A to acceptor B. Statement 3 describes a normal covalent bond.' },
    ta: { q: 'A அணுவில் ஒரு தனி இரட்டை உள்ளது; B அணுவுக்கு இரண்டு எலக்ட்ரான்கள் குறைவு. சரியான கூற்றுகள் எவை?\n1. A ஈனி அணுவாகச் செயல்படுகிறது.\n2. பிணைப்பு A → B எனக் குறிக்கப்படுகிறது.\n3. ஒவ்வொரு அணுவும் பிணைப்பிற்கு ஒரு எலக்ட்ரானைத் தருகிறது.', options: ['1, 2 மட்டும்', '1, 3 மட்டும்', '2, 3 மட்டும்', '1, 2, 3'], explanation: 'ஈதல் பிணைப்பில் இரு எலக்ட்ரான்களையும் A தருகிறது; அம்புக்குறி ஈனி A இலிருந்து ஏற்பி B ஐ நோக்கி இருக்கும். கூற்று 3 சாதாரண சகப்பிணைப்பிற்குரியது.' },
  },
  {
    difficulty: 'hard', source: '§13.3.2, p. 153', answer: 0,
    en: { q: 'In a methane molecule (CH₄), how many electrons in total are shared between carbon and the hydrogen atoms?', options: ['8', '4', '6', '2'], explanation: 'Carbon forms four single covalent bonds; each bond is a shared pair, so 4 × 2 = 8 electrons are shared.' },
    ta: { q: 'மீத்தேன் (CH₄) மூலக்கூறில் கார்பனுக்கும் ஹைட்ரஜன் அணுக்களுக்கும் இடையே மொத்தம் பங்கிடப்படும் எலக்ட்ரான்கள் எத்தனை?', options: ['8', '4', '6', '2'], explanation: 'கார்பன் நான்கு ஒற்றைச் சகப்பிணைப்புகளை உருவாக்குகிறது; ஒவ்வொன்றும் ஓர் இணை; எனவே 4 × 2 = 8 எலக்ட்ரான்கள்.' },
  },
];
