// Tamil Nadu State Board, 9th Science, Unit 11 – Atomic Structure (அணு அமைப்பு).
// source = section / exercise and printed page of the English-medium book.
import { BankQuestion, AR_EN, AR_TA } from './types';

const IMG = '/content/9/state_board/science/11';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.3, p. 135', answer: 0,
    en: { q: 'The term nucleons refers to', options: ['protons and neutrons', 'protons and electrons', 'only neutrons', 'electrons and neutrons'], explanation: 'Protons and neutrons are found in the nucleus and are together called nucleons.' },
    ta: { q: 'நியூக்ளியான் குறிப்பது', options: ['புரோட்டான் + நியூட்ரான்', 'புரோட்டான் + எலக்ட்ரான்', 'நியூட்ரான் மட்டும்', 'எலக்ட்ரான் + நியூட்ரான்'], explanation: 'உட்கருவில் உள்ள புரோட்டான்களும் நியூட்ரான்களும் சேர்ந்து நியூக்ளியான்கள் எனப்படுகின்றன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.5, p. 135', answer: 0,
    en: { q: 'The correct electronic configuration of potassium is', options: ['2, 8, 8, 1', '2, 8, 9', '2, 8, 1', '2, 8, 8, 3'], explanation: 'K has 19 electrons; the outermost shell cannot hold more than 8, so the 19th electron goes to the N shell: 2, 8, 8, 1.' },
    ta: { q: 'பொட்டாசியத்தின் சரியான எலக்ட்ரான் அமைப்பு', options: ['2, 8, 8, 1', '2, 8, 9', '2, 8, 1', '2, 8, 8, 3'], explanation: 'K-ல் 19 எலக்ட்ரான்கள்; வெளிக்கூட்டில் 8-க்கு மேல் இருக்க முடியாது; எனவே 19-வது எலக்ட்ரான் N கூட்டிற்குச் செல்கிறது: 2, 8, 8, 1.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise III.1, p. 136', answer: 0,
    en: { q: 'Calcium and argon are examples of a pair of _____.', options: ['isobars', 'isotopes', 'isotones', 'noble gases'], explanation: 'Both have mass number 40 but different atomic numbers (20 and 18), so they are isobars.' },
    ta: { q: 'கால்சியம் மற்றும் ஆர்கான் இணை _____க்கு எடுத்துக்காட்டு.', options: ['ஐசோபார்கள்', 'ஐசோடோப்புகள்', 'ஐசோடோன்கள்', 'மந்த வாயுக்கள்'], explanation: 'இரண்டின் நிறை எண்ணும் 40; அணு எண்கள் வேறு (20, 18); எனவே அவை ஐசோபார்கள்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise III.2, p. 136', answer: 0,
    en: { q: 'The total number of electrons that can be accommodated in an orbit (shell) is given by _____.', options: ['2n²', 'n²', '2n', '8n'], explanation: 'Bohr–Bury rule 1: the maximum number of electrons in the nth shell is 2n².' },
    ta: { q: 'ஒரு ஆற்றல் மட்டத்தில் நிரப்பப்படும் அதிகபட்ச எலக்ட்ரான்களின் எண்ணிக்கை _____.', options: ['2n²', 'n²', '2n', '8n'], explanation: 'போர் – புரி விதி 1: n-வது கூட்டில் அதிகபட்ச எலக்ட்ரான்களின் எண்ணிக்கை 2n².' },
  },
  {
    difficulty: 'easy', source: 'Book exercise III.3, p. 136', answer: 0,
    en: { q: '_____ isotope is used in nuclear reactors.', options: ['Uranium-235', 'Cobalt-60', 'Carbon-12', 'Hydrogen-1'], explanation: 'Uranium-235 is a radioisotope used as the source in nuclear reactors; cobalt-60 is used in radiotherapy.' },
    ta: { q: '_____ ஐசோடோப் அணு உலையில் பயன்படுத்தப்படுகின்றது.', options: ['யுரேனியம்-235', 'கோபால்ட்-60', 'கார்பன்-12', 'ஹைட்ரஜன்-1'], explanation: 'யுரேனியம்-235 அணுக்கரு உலையின் மூலமாகப் பயன்படும் கதிரியக்க ஐசோடோப்; கோபால்ட்-60 கதிர்வீச்சு சிகிச்சையில் பயன்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise III.5, p. 136', answer: 0,
    en: { q: 'The valency of argon is _____.', options: ['0', '1', '2', '8'], explanation: 'Argon (2, 8, 8) has a completely filled outermost shell, so it shows zero valency.' },
    ta: { q: 'ஆர்கானின் இணைதிறன் _____.', options: ['0', '1', '2', '8'], explanation: 'ஆர்கானின் (2, 8, 8) வெளிக்கூடு முழுமையாக நிரம்பியுள்ளதால் அதன் இணைதிறன் பூஜ்யம்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise IV, p. 136', answer: 0,
    en: { q: 'James Chadwick is known for the', options: ['discovery of neutrons', 'discovery of nucleus', 'first atomic theory', 'hydrogen atom model'], explanation: 'In 1932 Chadwick found that beryllium exposed to alpha particles emits neutral particles – neutrons.' },
    ta: { q: 'ஜேம்ஸ் சாட்விக் எதற்காக அறியப்படுகிறார்?', options: ['நியூட்ரான் கண்டுபிடிப்பு', 'நியூக்ளியஸ் (உட்கரு) கண்டுபிடிப்பு', 'முதல் அணுக் கொள்கை', 'ஹைட்ரஜன் அணு மாதிரி'], explanation: '1932-ல் ஆல்ஃபா கதிரால் தாக்கப்பட்ட பெரிலியம் மின்சுமையற்ற துகள்களை (நியூட்ரான்கள்) வெளியிடுவதைச் சாட்விக் கண்டறிந்தார்.' },
  },
  {
    difficulty: 'easy', source: '§11.1, p. 125', answer: 0,
    en: { q: 'In his scattering experiment, Rutherford bombarded a thin foil of', options: ['gold', 'silver', 'aluminium', 'copper'], explanation: 'He chose gold because it is the most malleable metal and can be made into a very thin layer.' },
    ta: { q: 'ரூதர்போர்டு தனது சிதறல் சோதனையில் எந்த உலோகத்தின் மெல்லிய தகட்டைப் பயன்படுத்தினார்?', options: ['தங்கம்', 'வெள்ளி', 'அலுமினியம்', 'தாமிரம்'], explanation: 'தங்கம் மிக அதிகத் தகடாகும் தன்மை கொண்டது; மிக மெல்லிய தகடாக்க முடியும் என்பதால் அதைத் தேர்ந்தெடுத்தார்.' },
  },
  {
    difficulty: 'easy', source: '§11.1, p. 125', answer: 0,
    en: { q: 'In the gold foil experiment, most of the alpha particles', options: ['passed straight through the foil', 'bounced straight back', 'were absorbed by the foil', 'were deflected through large angles'], explanation: 'Most α-particles went straight through, showing that the atom contains a large empty space.' },
    ta: { q: 'தங்கத் தகடு சோதனையில் பெரும்பாலான ஆல்ஃபா துகள்கள்', options: ['தகட்டினைக் கடந்து நேராகச் சென்றன', 'நேராகத் திரும்பி வந்தன', 'தகட்டால் உறிஞ்சப்பட்டன', 'பெரிய கோணத்தில் விலகின'], explanation: 'பெரும்பாலான ஆல்ஃபா துகள்கள் நேராகச் சென்றதால், அணுவின் பெரும்பகுதி வெற்றிடம் என அறியப்பட்டது.' },
  },
  {
    difficulty: 'easy', source: '§11.1.1, p. 126', answer: 0,
    en: { q: 'Rutherford’s model of the atom is similar to the structure of the', options: ['solar system', 'plum pudding', 'water molecule', 'honeycomb'], explanation: 'As planets revolve around the Sun, electrons revolve around the central nucleus in orbits.' },
    ta: { q: 'ரூதர்போர்டின் அணு அமைப்பு எதன் அமைப்போடு ஒத்துள்ளது?', options: ['சூரிய குடும்பம்', 'பிளம்புட்டிங்', 'நீர் மூலக்கூறு', 'தேன்கூடு'], explanation: 'சூரியனைக் கோள்கள் சுற்றுவதுபோல், அணுவின் மையத்திலுள்ள உட்கருவை எலக்ட்ரான்கள் ஆர்பிட்டுகளில் சுற்றுகின்றன.' },
  },
  {
    difficulty: 'easy', source: '§11.2, p. 127', answer: 0,
    en: { q: 'In Bohr’s model, the shell closest to the nucleus is the', options: ['K shell', 'L shell', 'M shell', 'N shell'], explanation: 'Shells are named K, L, M, N… (n = 1, 2, 3, 4…); the K shell is nearest to the nucleus and has the least energy.' },
    ta: { q: 'போர் மாதிரியில் உட்கருவிற்கு அருகாமையில் உள்ள கூடு', options: ['K கூடு', 'L கூடு', 'M கூடு', 'N கூடு'], explanation: 'கூடுகள் K, L, M, N… (n = 1, 2, 3, 4…) எனப் பெயரிடப்படுகின்றன; K கூடு உட்கருவிற்கு அருகில் உள்ளது, குறைந்த ஆற்றல் உடையது.' },
  },
  {
    difficulty: 'easy', source: '§11.3, p. 127', answer: 0,
    en: { q: 'The mass of a neutron is about', options: ['1 amu', '1/1837 amu', '0 amu', '2 amu'], explanation: 'A neutron has mass 1.676 × 10⁻²⁴ g, which is about 1 amu – nearly the same as a proton.' },
    ta: { q: 'நியூட்ரானின் நிறை தோராயமாக', options: ['1 amu', '1/1837 amu', '0 amu', '2 amu'], explanation: 'நியூட்ரானின் நிறை 1.676 × 10⁻²⁴ கி, அதாவது சுமார் 1 amu – ஏறக்குறைய புரோட்டானின் நிறைக்குச் சமம்.' },
  },
  {
    difficulty: 'easy', source: '§11.4, Table 11.1, p. 127', answer: 0,
    en: { q: 'The relative mass of an electron is', options: ['1/1837 amu', '1 amu', '1837 amu', '0.5 amu'], explanation: 'An electron is about 1837 times lighter than a proton, so its mass is taken as 1/1837 amu.' },
    ta: { q: 'எலக்ட்ரானின் ஒப்பு நிறை', options: ['1/1837 amu', '1 amu', '1837 amu', '0.5 amu'], explanation: 'எலக்ட்ரான் புரோட்டானை விட சுமார் 1837 மடங்கு லேசானது; எனவே அதன் நிறை 1/1837 amu.' },
  },
  {
    difficulty: 'easy', source: '§11.5, p. 128', answer: 0,
    en: { q: 'The atomic number (Z) of an element is equal to the number of', options: ['protons in its nucleus', 'neutrons in its nucleus', 'protons and neutrons together', 'shells in the atom'], explanation: 'Z = number of protons = number of electrons in a neutral atom.' },
    ta: { q: 'ஒரு தனிமத்தின் அணு எண் (Z) எதன் எண்ணிக்கைக்குச் சமம்?', options: ['உட்கருவில் உள்ள புரோட்டான்கள்', 'உட்கருவில் உள்ள நியூட்ரான்கள்', 'புரோட்டான்கள், நியூட்ரான்கள் இரண்டும் சேர்ந்து', 'அணுவில் உள்ள கூடுகள்'], explanation: 'Z = புரோட்டான்களின் எண்ணிக்கை = நடுநிலை அணுவில் எலக்ட்ரான்களின் எண்ணிக்கை.' },
  },
  {
    difficulty: 'easy', source: '§11.5.2, p. 129', answer: 0,
    en: { q: 'The electrons present in the outermost shell of an atom are called', options: ['valence electrons', 'K electrons', 'nucleons', 'free electrons'], explanation: 'The outermost shell is the valence shell; its electrons take part in chemical reactions and decide chemical properties.' },
    ta: { q: 'அணுவின் வெளிக்கூட்டில் உள்ள எலக்ட்ரான்கள்', options: ['இணைதிறன் எலக்ட்ரான்கள்', 'K எலக்ட்ரான்கள்', 'நியூக்ளியான்கள்', 'கட்டற்ற எலக்ட்ரான்கள்'], explanation: 'வெளிக்கூடு இணைதிறன் கூடு; அதிலுள்ள எலக்ட்ரான்கள் வேதிவினையில் பங்கேற்று வேதிப்பண்புகளைத் தீர்மானிக்கின்றன.' },
  },
  {
    difficulty: 'easy', source: '§11.6.1, p. 132', answer: 0,
    en: { q: 'Atoms of the same element having the same atomic number but different mass numbers are called', options: ['isotopes', 'isobars', 'isotones', 'ions'], explanation: 'Protium, deuterium and tritium (mass numbers 1, 2, 3) are isotopes of hydrogen.' },
    ta: { q: 'ஒரே அணு எண்ணையும் வெவ்வேறு நிறை எண்களையும் கொண்ட ஒரே தனிமத்தின் அணுக்கள்', options: ['ஐசோடோப்புகள்', 'ஐசோபார்கள்', 'ஐசோடோன்கள்', 'அயனிகள்'], explanation: 'புரோட்டியம், டியூட்டிரியம், டிரிட்டியம் (நிறை எண் 1, 2, 3) ஆகியவை ஹைட்ரஜனின் ஐசோடோப்புகள்.' },
  },
  {
    difficulty: 'easy', source: '§11.7.1, p. 133', answer: 0,
    en: { q: 'The law of multiple proportions was proposed by', options: ['John Dalton', 'Jeremias Richter', 'Gay Lussac', 'Niels Bohr'], explanation: 'John Dalton proposed the law of multiple proportions in 1804.' },
    ta: { q: 'பெருக்கல் விகித விதியை முன்மொழிந்தவர்', options: ['ஜான் டால்டன்', 'ஜெர்மியஸ் ரிச்சர்', 'கேலூசாக்', 'நீல்ஸ் போர்'], explanation: 'இந்த விதியானது 1804-ல் ஜான் டால்டனால் முன்மொழியப்பட்டது.' },
  },
  {
    difficulty: 'easy', source: '§11.8, p. 134', answer: 0,
    en: { q: 'The principal quantum number (n) tells us about the', options: ['main energy level', 'shape of the orbital', 'orientation of the orbital', 'spin of the electron'], explanation: 'n – main energy level; l – sub shell/shape; m – orientation; s – spin of the electron.' },
    ta: { q: 'முதன்மைக் குவாண்டம் எண் (n) அறிவிப்பது', options: ['முதன்மை ஆற்றல் மட்டம்', 'ஆர்பிட்டலின் வடிவம்', 'ஆர்பிட்டலின் அமைவிடம்', 'எலக்ட்ரானின் சுழற்சி'], explanation: 'n – முதன்மை ஆற்றல் மட்டம்; l – துணைக் கூடு / வடிவம்; m – அமைவிடம்; s – எலக்ட்ரானின் சுழற்சி.' },
  },
  // ---------------------------------------------------------------- Medium
  {
    difficulty: 'medium', source: 'Book exercise I.2, p. 135', answer: 0,
    en: { q: 'A change in the number of neutrons in an atom changes it to', options: ['an isotope', 'an ion', 'an isobar', 'another element'], explanation: 'The number of protons (atomic number) stays the same, only the mass number changes – giving an isotope.' },
    ta: { q: 'நியூட்ரான் எண்ணிக்கையின் மாற்றம் அந்த அணுவை இவ்வாறு மாற்றுகிறது', options: ['ஒரு ஐசோடோப்', 'ஒரு அயனி', 'ஒரு ஐசோபார்', 'வேறு தனிமம்'], explanation: 'புரோட்டான் எண்ணிக்கை (அணு எண்) மாறாது; நிறை எண் மட்டும் மாறுவதால் ஐசோடோப் உருவாகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.4, p. 135', answer: 0,
    en: { q: 'The numbers of protons, neutrons and electrons in ⁸⁰₃₅Br are respectively', options: ['35, 45, 35', '80, 80, 35', '35, 55, 80', '35, 35, 80'], explanation: 'Protons = electrons = Z = 35; neutrons = A − Z = 80 − 35 = 45.' },
    ta: { q: '⁸⁰₃₅Br-ல் உள்ள புரோட்டான், நியூட்ரான், எலக்ட்ரான்களின் எண்ணிக்கை முறையே', options: ['35, 45, 35', '80, 80, 35', '35, 55, 80', '35, 35, 80'], explanation: 'புரோட்டான் = எலக்ட்ரான் = Z = 35; நியூட்ரான் = A − Z = 80 − 35 = 45.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.1, p. 136', answer: 0,
    en: { q: 'Which statement is correct according to Bohr’s model?', options: ['In an atom, electrons revolve around the nucleus in fixed orbits.', 'Electrons are fixed inside the nucleus.', 'Electrons revolve in any path and keep losing energy.', 'Electrons revolve around the nucleus only in the K shell.'], explanation: 'The book statement is true: electrons revolve in stationary circular orbits (energy levels) without losing energy.' },
    ta: { q: 'போர் மாதிரியின்படி சரியான கூற்று எது?', options: ['அணுவில் உள்ள எலக்ட்ரான்கள், உட்கருவினை நிலையான சுற்றுப்பாதையில் சுற்றுகின்றன.', 'எலக்ட்ரான்கள் உட்கருவினுள் நிலையாக உள்ளன.', 'எலக்ட்ரான்கள் எந்தப் பாதையிலும் சுற்றி ஆற்றலை இழக்கின்றன.', 'எலக்ட்ரான்கள் K கூட்டில் மட்டுமே சுற்றுகின்றன.'], explanation: 'பாடநூல் கூற்று சரி: எலக்ட்ரான்கள் ஆற்றலை இழக்காமல் நிலையான வட்டப்பாதைகளில் (ஆற்றல் மட்டங்கள்) சுற்றுகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.2, p. 136', answer: 0,
    en: { q: '"Isotopes of an element have different atomic numbers." The correct form of this statement is', options: ['Isotopes of an element have the same atomic number but different mass numbers.', 'Isotopes of an element have different atomic numbers and the same mass number.', 'Isotopes of an element have the same atomic number and the same mass number.', 'Isotopes are atoms of different elements with the same number of neutrons.'], explanation: 'The statement is false: isotopes have the same atomic number; only their mass numbers (neutrons) differ.' },
    ta: { q: '"ஒரு தனிமத்தின் ஐசோடோப்பு வெவ்வேறு அணு எண்களைக் கொண்டது." இக்கூற்றின் சரியான வடிவம்', options: ['ஒரு தனிமத்தின் ஐசோடோப்புகள் ஒரே அணு எண்ணையும் வெவ்வேறு நிறை எண்களையும் கொண்டவை.', 'ஐசோடோப்புகள் வெவ்வேறு அணு எண்களையும் ஒரே நிறை எண்ணையும் கொண்டவை.', 'ஐசோடோப்புகள் ஒரே அணு எண்ணையும் ஒரே நிறை எண்ணையும் கொண்டவை.', 'ஐசோடோப்புகள் ஒரே நியூட்ரான் எண்ணிக்கை கொண்ட வெவ்வேறு தனிமங்களின் அணுக்கள்.'], explanation: 'கூற்று தவறு: ஐசோடோப்புகளின் அணு எண் ஒன்றே; நிறை எண் (நியூட்ரான்கள்) மட்டுமே வேறுபடும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.3, p. 136', answer: 0,
    en: { q: '"Electrons have negligible mass and charge." The correct form of this statement is', options: ['Electrons have negligible mass but carry a unit negative charge (−1).', 'Electrons have a mass of 1 amu and no charge.', 'Electrons have negligible charge but a mass of 1 amu.', 'Electrons have a mass of 1 amu and a positive charge.'], explanation: 'The statement is false: an electron’s mass (1/1837 amu) is negligible, but it carries a charge of −1.' },
    ta: { q: '"எலக்ட்ரான்கள் மிகச்சிறிய அளவு நிறை மற்றும் மின்சுமை கொண்டவை." இக்கூற்றின் சரியான வடிவம்', options: ['எலக்ட்ரானின் நிறை புறக்கணிக்கத்தக்கது; ஆனால் அது ஓரலகு எதிர்மின் சுமை (−1) கொண்டது.', 'எலக்ட்ரானின் நிறை 1 amu; மின்சுமை இல்லை.', 'எலக்ட்ரானின் மின்சுமை புறக்கணிக்கத்தக்கது; நிறை 1 amu.', 'எலக்ட்ரானின் நிறை 1 amu; நேர்மின் சுமை கொண்டது.'], explanation: 'கூற்று தவறு: எலக்ட்ரானின் நிறை (1/1837 amu) மிகக் குறைவு; ஆனால் அதன் மின்சுமை −1.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.4, p. 136', answer: 0,
    en: { q: 'Which statement about the energy of orbits is correct?', options: ['Smaller the size of the orbit, lower is its energy.', 'Smaller the size of the orbit, higher is its energy.', 'All orbits have the same energy.', 'The K shell has the highest energy.'], explanation: 'The book statement is true: the K shell, nearest the nucleus, has the least energy; energy increases outward.' },
    ta: { q: 'ஆர்பிட்டுகளின் ஆற்றல் பற்றிய சரியான கூற்று எது?', options: ['ஆர்பிட்டின் அளவு சிறிதாக இருந்தால், அதன் ஆற்றல் குறைவாக இருக்கும்.', 'ஆர்பிட்டின் அளவு சிறிதாக இருந்தால், அதன் ஆற்றல் அதிகமாக இருக்கும்.', 'எல்லா ஆர்பிட்டுகளும் ஒரே ஆற்றல் கொண்டவை.', 'K கூடு மிக அதிக ஆற்றல் கொண்டது.'], explanation: 'பாடநூல் கூற்று சரி: உட்கருவிற்கு அருகில் உள்ள K கூடு குறைந்த ஆற்றல் கொண்டது; வெளியே செல்லச் செல்ல ஆற்றல் அதிகரிக்கிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.5, p. 136', answer: 0,
    en: { q: 'The maximum number of electrons in the L shell is', options: ['8', '10', '2', '18'], explanation: 'For L, n = 2, so 2n² = 2 × 2² = 8 (the book statement "10" is false).' },
    ta: { q: 'L-மட்டத்தில் உள்ள அதிகபட்ச எலக்ட்ரான்களின் எண்ணிக்கை', options: ['8', '10', '2', '18'], explanation: 'L கூட்டிற்கு n = 2; 2n² = 2 × 2² = 8 (பாடநூலில் உள்ள "10" என்ற கூற்று தவறு).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.4, p. 136', answer: 0,
    en: { q: 'The number of neutrons present in ⁷₃Li is _____.', options: ['4', '3', '7', '10'], explanation: 'n = A − Z = 7 − 3 = 4.' },
    ta: { q: '⁷₃Li-ல் உள்ள நியூட்ரான்களின் எண்ணிக்கை _____.', options: ['4', '3', '7', '10'], explanation: 'n = A − Z = 7 − 3 = 4.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.1, p. 136', answer: 0,
    en: { q: 'An element which has the same number of electrons in its first and second shells is', options: ['beryllium', 'helium', 'lithium', 'neon'], explanation: 'Beryllium (Z = 4) has the configuration 2, 2.' },
    ta: { q: 'முதல் வட்டப்பாதையிலும் இரண்டாவது வட்டப்பாதையிலும் ஒரே மாதிரியான எலக்ட்ரான் எண்ணிக்கையைப் பெற்றுள்ள தனிமம்', options: ['பெரிலியம்', 'ஹீலியம்', 'லித்தியம்', 'நியான்'], explanation: 'பெரிலியத்தின் (Z = 4) எலக்ட்ரான் அமைப்பு 2, 2.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.2, p. 136', answer: 0,
    en: { q: 'The electronic configuration of chlorine (Z = 17) is', options: ['2, 8, 7', '2, 8, 8, 1', '2, 7, 8', '2, 8, 6, 1'], explanation: '17 electrons fill K (2), L (8) and then 7 in M: 2, 8, 7. Potassium (Z = 19) is 2, 8, 8, 1.' },
    ta: { q: 'குளோரினின் (Z = 17) எலக்ட்ரான் பகிர்வு', options: ['2, 8, 7', '2, 8, 8, 1', '2, 7, 8', '2, 8, 6, 1'], explanation: '17 எலக்ட்ரான்கள் K (2), L (8), பின் M-ல் 7: 2, 8, 7. பொட்டாசியம் (Z = 19): 2, 8, 8, 1.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.3, p. 136', answer: 0,
    en: { q: 'In the symbol ₀n¹ for the neutron, the superscript 1 and the subscript 0 stand for', options: ['its mass and its charge', 'its charge and its mass', 'its atomic number and mass number', 'its shell number and valency'], explanation: 'For ₁H¹, ₀n¹ and ₋₁e⁰, the superscript gives the mass and the subscript gives the electric charge.' },
    ta: { q: 'நியூட்ரானின் குறியீடு ₀n¹-ல் மேலே உள்ள 1, கீழே உள்ள 0 குறிப்பவை', options: ['அதன் நிறை மற்றும் மின்சுமை', 'அதன் மின்சுமை மற்றும் நிறை', 'அதன் அணு எண் மற்றும் நிறை எண்', 'அதன் கூட்டு எண் மற்றும் இணைதிறன்'], explanation: '₁H¹, ₀n¹, ₋₁e⁰ ஆகியவற்றில் மேலே உள்ள எண் நிறையையும், கீழே உள்ள எண் மின்சுமையையும் குறிக்கின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.5, p. 136', answer: 0,
    en: { q: 'What is the same about the electron structures of lithium, sodium and potassium?', options: ['Each has one electron in its outermost shell', 'Each has two electrons in its outermost shell', 'Each has the same number of shells', 'Each has a completely filled outermost shell'], explanation: 'Li (2, 1), Na (2, 8, 1) and K (2, 8, 8, 1) all have one valence electron; Be, Mg and Ca all have two.' },
    ta: { q: 'லித்தியம், சோடியம், பொட்டாசியம் ஆகியவற்றின் எலக்ட்ரான் அமைப்பில் உள்ள ஒற்றுமை', options: ['ஒவ்வொன்றின் வெளிக்கூட்டிலும் ஒரு எலக்ட்ரான்', 'ஒவ்வொன்றின் வெளிக்கூட்டிலும் இரண்டு எலக்ட்ரான்கள்', 'அனைத்திற்கும் ஒரே எண்ணிக்கையிலான கூடுகள்', 'அனைத்தின் வெளிக்கூடும் முழுமையாக நிரம்பியுள்ளது'], explanation: 'Li (2, 1), Na (2, 8, 1), K (2, 8, 8, 1) – அனைத்திற்கும் ஒரு இணைதிறன் எலக்ட்ரான்; Be, Mg, Ca-க்கு இரண்டு.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VII.5, p. 136', answer: 0,
    en: { q: 'How many nucleons are present in phosphorus, ³¹₁₅P?', options: ['31', '15', '16', '46'], explanation: 'Nucleons = protons + neutrons = mass number = 31 (15 protons + 16 neutrons).' },
    ta: { q: 'பாஸ்பரஸில் (³¹₁₅P) எத்தனை நியூக்ளியான்கள் உள்ளன?', options: ['31', '15', '16', '46'], explanation: 'நியூக்ளியான்கள் = புரோட்டான்கள் + நியூட்ரான்கள் = நிறை எண் = 31 (15 புரோட்டான்கள் + 16 நியூட்ரான்கள்).' },
  },
  {
    difficulty: 'medium', source: 'Book problem 1, p. 128', answer: 0,
    en: { q: 'An element has mass number 39 and 20 neutrons. Its atomic number and name are', options: ['19, potassium', '20, calcium', '59, cobalt', '39, yttrium'], explanation: 'Z = A − n = 39 − 20 = 19, which is potassium (K).' },
    ta: { q: 'ஒரு தனிமத்தின் அணுவின் நிறை எண் 39, நியூட்ரான்களின் எண்ணிக்கை 20 எனில் அதன் அணு எண்ணும் அத்தனிமத்தின் பெயரும்', options: ['19, பொட்டாசியம்', '20, கால்சியம்', '59, கோபால்ட்', '39, இட்ரியம்'], explanation: 'Z = A − n = 39 − 20 = 19; இது பொட்டாசியம் (K).' },
  },
  {
    difficulty: 'medium', source: 'Book problem 2, p. 129', answer: 0,
    en: { q: 'The electronic configuration of aluminium (Z = 13) is', options: ['2, 8, 3', '2, 3, 8', '2, 8, 2, 1', '2, 11'], explanation: 'K shell 2, L shell 8 and M shell 3 electrons: 2, 8, 3.' },
    ta: { q: 'அலுமினியம் அணுவின் (Z = 13) எலக்ட்ரான் பகிர்வு', options: ['2, 8, 3', '2, 3, 8', '2, 8, 2, 1', '2, 11'], explanation: 'K கூடு 2, L கூடு 8, M கூடு 3 எலக்ட்ரான்கள்: 2, 8, 3.' },
  },
  {
    difficulty: 'medium', source: 'Book problem 3, p. 130', answer: 0,
    en: { q: 'Sulphur has the electronic configuration 2, 8, 6. Its valency is', options: ['2', '6', '8', '4'], explanation: 'With 5, 6 or 7 valence electrons, valency = 8 − valence electrons = 8 − 6 = 2.' },
    ta: { q: 'சல்ஃபரின் எலக்ட்ரான் பகிர்வு 2, 8, 6. அதன் இணைதிறன்', options: ['2', '6', '8', '4'], explanation: '5, 6, 7 இணைதிறன் எலக்ட்ரான்கள் உள்ளபோது இணைதிறன் = 8 − இணைதிறன் எலக்ட்ரான்கள் = 8 − 6 = 2.' },
  },
  {
    difficulty: 'medium', source: 'Book Test Yourself, p. 128', answer: 0,
    en: { q: 'The number of neutrons in ²⁷₁₃Al is', options: ['14', '13', '27', '40'], explanation: 'n = A − Z = 27 − 13 = 14.' },
    ta: { q: '²⁷₁₃Al-ல் உள்ள நியூட்ரான்களின் எண்ணிக்கை', options: ['14', '13', '27', '40'], explanation: 'n = A − Z = 27 − 13 = 14.' },
  },
  {
    difficulty: 'medium', source: 'Book Activity 2, p. 130', answer: 0,
    en: { q: 'The valency of phosphorus (2, 8, 5) is', options: ['3', '5', '8', '2'], explanation: 'Phosphorus has 5 valence electrons; valency = 8 − 5 = 3.' },
    ta: { q: 'பாஸ்பரஸின் (2, 8, 5) இணைதிறன்', options: ['3', '5', '8', '2'], explanation: 'பாஸ்பரஸுக்கு 5 இணைதிறன் எலக்ட்ரான்கள்; இணைதிறன் = 8 − 5 = 3.' },
  },
  {
    difficulty: 'medium', source: '§11.1.2, p. 126', answer: 0,
    en: { q: 'Rutherford’s model failed because, according to electromagnetic theory, a revolving electron should', options: ['continuously lose energy and fall into the nucleus', 'gain energy and leave the atom', 'stop moving and stay at rest', 'turn into a neutron'], explanation: 'A moving electron should lose energy and spiral into the nucleus, making atoms unstable – but atoms are stable.' },
    ta: { q: 'மின்காந்தக் கொள்கைப்படி சுற்றும் எலக்ட்ரான் என்ன செய்ய வேண்டும் என்பதால் ரூதர்போர்டு மாதிரி தோல்வியடைந்தது?', options: ['தொடர்ந்து ஆற்றலை இழந்து உட்கருவினுள் விழ வேண்டும்', 'ஆற்றலைப் பெற்று அணுவை விட்டு வெளியேற வேண்டும்', 'இயக்கத்தை நிறுத்தி ஓய்வில் இருக்க வேண்டும்', 'நியூட்ரானாக மாற வேண்டும்'], explanation: 'இயங்கும் எலக்ட்ரான் ஆற்றலை இழந்து பாதை சுருங்கி உட்கருவினுள் விழ வேண்டும்; அப்படியானால் அணு நிலைப்புத்தன்மையை இழக்கும் – ஆனால் அணுக்கள் நிலையானவை.' },
  },
  {
    difficulty: 'medium', source: '§11.2.1, p. 127', answer: 0,
    en: { q: 'A main limitation of Bohr’s model is that it applies only to', options: ['hydrogen and hydrogen-like ions such as He⁺ and Li²⁺', 'all multi-electron atoms', 'noble gases only', 'metals only'], explanation: 'Bohr’s model works for one-electron systems and could not be extended to multi-electron atoms.' },
    ta: { q: 'போர் அணுக்கொள்கையின் முக்கியக் குறைபாடு, அது பொருந்துவது', options: ['ஹைட்ரஜன் மற்றும் He⁺, Li²⁺ போன்ற ஹைட்ரஜன் போன்ற அயனிகளுக்கு மட்டும்', 'பல எலக்ட்ரான்களைக் கொண்ட எல்லா அணுக்களுக்கும்', 'மந்த வாயுக்களுக்கு மட்டும்', 'உலோகங்களுக்கு மட்டும்'], explanation: 'போர் மாதிரி ஒரு எலக்ட்ரான் அமைப்புகளுக்குப் பொருந்தும்; பல எலக்ட்ரான்களுடைய அணுக்களுக்கு விரிவாக்கம் செய்யப்படவில்லை.' },
  },
  {
    difficulty: 'medium', source: '§11.7.3, p. 134', answer: 0,
    en: { q: 'One volume of hydrogen reacts with one volume of chlorine. The volume of hydrogen chloride formed is', options: ['2 volumes', '1 volume', '3 volumes', '1/2 volume'], explanation: 'By Gay Lussac’s law the volumes are in the simple ratio 1 : 1 : 2.' },
    ta: { q: 'ஒரு பருமன் ஹைட்ரஜன், ஒரு பருமன் குளோரினுடன் வினைபுரிகிறது. உருவாகும் ஹைட்ரஜன் குளோரைடின் பருமன்', options: ['2 பருமன்', '1 பருமன்', '3 பருமன்', '1/2 பருமன்'], explanation: 'கேலூசாக்கின் விதிப்படி பருமன்கள் 1 : 1 : 2 என்ற எளிய விகிதத்தில் உள்ளன.' },
  },
  {
    difficulty: 'medium', source: '§11.7.1, p. 133', answer: 0,
    en: { q: 'For a fixed mass of sulphur, the ratio of the masses of oxygen in SO₂ and SO₃ is', options: ['2 : 3', '1 : 2', '3 : 2', '1 : 1'], explanation: 'SO₂ has 32 g and SO₃ 48 g of oxygen per 32 g sulphur: 32 : 48 = 2 : 3, a simple ratio (law of multiple proportions).' },
    ta: { q: 'ஒரு குறிப்பிட்ட நிறையுள்ள சல்ஃபருடன் இணைந்துள்ள, SO₂, SO₃ ஆகியவற்றிலுள்ள ஆக்ஸிஜனின் நிறை விகிதம்', options: ['2 : 3', '1 : 2', '3 : 2', '1 : 1'], explanation: '32 கி சல்ஃபருக்கு SO₂-ல் 32 கி, SO₃-ல் 48 கி ஆக்ஸிஜன்: 32 : 48 = 2 : 3 – எளிய விகிதம் (பெருக்கல் விகித விதி).' },
  },
  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise I.1, p. 135', answer: 0,
    en: { q: 'Among the following, the odd pair is', options: ['⁴⁰₁₈Ar, ¹⁴₇N', '¹⁸₈O, ¹⁹₉F', '³⁰₁₄Si, ³¹₁₅P', '⁴⁰₂₀Ca, ³⁹₁₉K'], explanation: 'O-18/F-19 (10 n), Si-30/P-31 (16 n) and Ca-40/K-39 (20 n) are isotones; Ar-40 (22 n) and N-14 (7 n) are not related.' },
    ta: { q: 'பின்வருவனவற்றுள் தவறான (பொருந்தாத) இணை', options: ['⁴⁰₁₈Ar, ¹⁴₇N', '¹⁸₈O, ¹⁹₉F', '³⁰₁₄Si, ³¹₁₅P', '⁴⁰₂₀Ca, ³⁹₁₉K'], explanation: 'O-18/F-19 (10 n), Si-30/P-31 (16 n), Ca-40/K-39 (20 n) ஆகியவை ஐசோடோன்கள்; Ar-40 (22 n), N-14 (7 n) தொடர்பற்றவை.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise IV, p. 136', answer: 0,
    en: { q: 'Match:\na) Dalton  b) Chadwick  c) Rutherford  d) Niels Bohr\nwith\n1. Hydrogen atom model  2. Discovery of nucleus  3. First atomic theory  4. Plum pudding model  5. Discovery of neutrons', options: ['a-3, b-5, c-2, d-1', 'a-4, b-5, c-2, d-1', 'a-3, b-2, c-5, d-1', 'a-3, b-5, c-1, d-2'], explanation: 'Dalton – first atomic theory; Chadwick – neutrons; Rutherford – nucleus; Bohr – hydrogen atom model. The plum pudding model was J.J. Thomson’s.' },
    ta: { q: 'பொருத்துக:\na) டால்டன்  b) சாட்விக்  c) ரூதர்போர்ட்  d) நீல்ஸ்போர்\n1. ஹைட்ரஜன் அணு மாதிரி  2. நியூக்ளியஸ் கண்டுபிடிப்பு  3. முதல் அணுக் கொள்கை  4. பிளம்புட்டிங் மாதிரி  5. நியூட்ரான் கண்டுபிடிப்பு', options: ['a-3, b-5, c-2, d-1', 'a-4, b-5, c-2, d-1', 'a-3, b-2, c-5, d-1', 'a-3, b-5, c-1, d-2'], explanation: 'டால்டன் – முதல் அணுக் கொள்கை; சாட்விக் – நியூட்ரான்; ரூதர்போர்ட் – உட்கரு; போர் – ஹைட்ரஜன் அணு மாதிரி. பிளம்புட்டிங் மாதிரி ஜெ.ஜெ. தாம்சனுடையது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise V, p. 136', answer: 0,
    en: { q: 'An atom has atomic number 9 and 10 neutrons. Its mass number, number of electrons and name are', options: ['19, 9, fluorine', '10, 9, neon', '19, 10, neon', '9, 10, fluorine'], explanation: 'A = Z + n = 9 + 10 = 19; electrons = Z = 9; Z = 9 is fluorine.' },
    ta: { q: 'ஒரு அணுவின் அணு எண் 9, நியூட்ரான்கள் 10. அதன் நிறை எண், எலக்ட்ரான்களின் எண்ணிக்கை, பெயர்', options: ['19, 9, ஃபுளூரின்', '10, 9, நியான்', '19, 10, நியான்', '9, 10, ஃபுளூரின்'], explanation: 'A = Z + n = 9 + 10 = 19; எலக்ட்ரான்கள் = Z = 9; Z = 9 என்பது ஃபுளூரின்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise V, p. 136', answer: 0,
    en: { q: 'An atom has mass number 2 and 1 proton. Its number of neutrons and its name are', options: ['1, deuterium (an isotope of hydrogen)', '2, helium', '0, protium', '1, helium'], explanation: 'n = A − Z = 2 − 1 = 1; Z = 1 is hydrogen, and the isotope with mass number 2 is deuterium.' },
    ta: { q: 'ஒரு அணுவின் நிறை எண் 2, புரோட்டான் 1. அதன் நியூட்ரான் எண்ணிக்கையும் பெயரும்', options: ['1, டியூட்டிரியம் (ஹைட்ரஜனின் ஐசோடோப்)', '2, ஹீலியம்', '0, புரோட்டியம்', '1, ஹீலியம்'], explanation: 'n = A − Z = 2 − 1 = 1; Z = 1 ஹைட்ரஜன்; நிறை எண் 2 உள்ள ஐசோடோப் டியூட்டிரியம்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VI.4, p. 136', answer: 0,
    en: { q: 'For an atom X, the K, L and M shells are completely filled. How many electrons are present in it?', options: ['28', '18', '10', '36'], explanation: 'Completely filled shells hold 2n² electrons: 2 + 8 + 18 = 28.' },
    ta: { q: 'X என்ற அணுவில் K, L, M கூடுகள் அனைத்தும் முழுமையாக நிரம்பியிருந்தால், அதில் உள்ள மொத்த எலக்ட்ரான்கள்', options: ['28', '18', '10', '36'], explanation: 'முழுமையாக நிரம்பிய கூடுகளில் 2n² எலக்ட்ரான்கள்: 2 + 8 + 18 = 28.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VII.4, p. 136', answer: 0,
    en: { q: 'An atom has atomic number 92 and mass number 238. The numbers of protons, electrons and neutrons are', options: ['92, 92, 146', '92, 146, 92', '238, 92, 146', '146, 146, 92'], explanation: 'Protons = electrons = 92; neutrons = 238 − 92 = 146.' },
    ta: { q: 'ஒரு அணுவின் அணு எண் 92, நிறை எண் 238. அதில் உள்ள புரோட்டான்கள், எலக்ட்ரான்கள், நியூட்ரான்கள்', options: ['92, 92, 146', '92, 146, 92', '238, 92, 146', '146, 146, 92'], explanation: 'புரோட்டான் = எலக்ட்ரான் = 92; நியூட்ரான் = 238 − 92 = 146.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VII.2, p. 136', answer: 0,
    en: { q: 'Assertion: ³⁵₁₇Cl and ³⁷₁₇Cl have the same chemical properties.\nReason: Both have 17 electrons with the same electronic configuration (2, 8, 7); they differ only in the number of neutrons.', options: AR_EN, explanation: 'Chemical properties depend on valence electrons, which are the same; the isotopes differ in mass number (18 vs 20 neutrons).' },
    ta: { q: 'கூற்று: ³⁵₁₇Cl, ³⁷₁₇Cl ஆகியவற்றின் வேதியியல் பண்புகள் ஒன்றாக உள்ளன.\nகாரணம்: இரண்டிலும் 17 எலக்ட்ரான்கள், ஒரே எலக்ட்ரான் அமைப்பு (2, 8, 7); நியூட்ரான் எண்ணிக்கையில் மட்டுமே வேறுபடுகின்றன.', options: AR_TA, explanation: 'வேதிப்பண்புகள் இணைதிறன் எலக்ட்ரான்களைச் சார்ந்தவை; அவை ஒன்றே; ஐசோடோப்புகள் நிறை எண்ணில் (18, 20 நியூட்ரான்கள்) வேறுபடுகின்றன.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VII.1 / VIII.1, p. 136', answer: 0,
    en: { q: 'Assertion: The atom contains a large empty space.\nReason: In the gold foil experiment, most alpha particles passed straight through the foil.', options: AR_EN, explanation: 'Because most α-particles were undeflected, Rutherford concluded that most of the atom is empty space.' },
    ta: { q: 'கூற்று: அணுவின் பெரும்பகுதி வெற்றிடமாக உள்ளது.\nகாரணம்: தங்கத் தகடு சோதனையில் பெரும்பாலான ஆல்ஃபா துகள்கள் தகட்டை நேராகக் கடந்து சென்றன.', options: AR_TA, explanation: 'பெரும்பாலான ஆல்ஃபா துகள்கள் விலகாமல் சென்றதால் அணுவின் பெரும்பகுதி வெற்றிடம் என ரூதர்போர்டு முடிவு செய்தார்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VIII.1, p. 137', answer: 0,
    en: { q: 'In the gold foil experiment, very few alpha particles bounced back. This showed that', options: ['the positive charge and mass are concentrated in a very small nucleus', 'electrons are spread throughout the atom', 'the atom is mostly solid', 'alpha particles are negatively charged'], explanation: 'Only a tiny, dense, positively charged nucleus could repel a few α-particles straight back.' },
    ta: { q: 'தங்கத் தகடு சோதனையில் மிகச் சில ஆல்ஃபா துகள்களே திரும்பி வந்தன. இது காட்டுவது', options: ['நேர்மின் சுமையும் நிறையும் மிகச்சிறிய உட்கருவில் செறிந்துள்ளன', 'எலக்ட்ரான்கள் அணு முழுவதும் பரவியுள்ளன', 'அணு பெரும்பாலும் திடமானது', 'ஆல்ஃபா துகள்கள் எதிர்மின் சுமை கொண்டவை'], explanation: 'மிகச்சிறிய, அடர்த்தியான, நேர்மின் சுமையுடைய உட்கருவே சில ஆல்ஃபா துகள்களைத் திருப்பி அனுப்ப முடியும்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VIII.2, p. 137', answer: 0,
    en: { q: 'Which statements are postulates of Bohr’s model?\n(i) Electrons revolve in stationary orbits called energy levels.\n(ii) An electron in an orbit neither loses nor gains energy.\n(iii) An electron moves to a higher shell by absorbing a fixed amount of energy.\n(iv) Electrons are embedded in a sphere of positive charge.', options: ['(i), (ii) and (iii)', '(i) and (iv) only', '(ii), (iii) and (iv)', '(iv) only'], explanation: 'Statements (i)–(iii) are Bohr’s postulates; (iv) describes Thomson’s plum pudding model.' },
    ta: { q: 'போர் அணுக் கொள்கையின் கருத்துகள் எவை?\n(i) எலக்ட்ரான்கள் ஆற்றல் மட்டங்கள் எனப்படும் நிலையான வட்டப்பாதைகளில் சுற்றுகின்றன.\n(ii) ஒரே வட்டப்பாதையில் சுற்றும் எலக்ட்ரான் ஆற்றலை இழப்பதோ ஏற்பதோ இல்லை.\n(iii) குறிப்பிட்ட ஆற்றலை ஏற்று எலக்ட்ரான் உயர் ஆற்றல் மட்டத்திற்கு நகரும்.\n(iv) நேர்மின் கோளத்தினுள் எலக்ட்ரான்கள் பதிந்துள்ளன.', options: ['(i), (ii), (iii)', '(i), (iv) மட்டும்', '(ii), (iii), (iv)', '(iv) மட்டும்'], explanation: '(i)–(iii) போரின் கருத்துகள்; (iv) தாம்சனின் பிளம்புட்டிங் மாதிரியைக் குறிக்கிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VIII.3, p. 137', answer: 0,
    en: { q: 'Nitrogen reacts with hydrogen to form ammonia: N₂ + 3H₂ → 2NH₃ (all gases). By Gay Lussac’s law, 10 L of nitrogen reacts with', options: ['30 L of hydrogen to give 20 L of ammonia', '10 L of hydrogen to give 20 L of ammonia', '30 L of hydrogen to give 40 L of ammonia', '20 L of hydrogen to give 10 L of ammonia'], explanation: 'The volumes are in the ratio 1 : 3 : 2, so 10 L N₂ needs 30 L H₂ and gives 20 L NH₃ (Activity 6).' },
    ta: { q: 'நைட்ரஜன் ஹைட்ரஜனுடன் சேர்ந்து அம்மோனியாவை உருவாக்குகிறது: N₂ + 3H₂ → 2NH₃ (அனைத்தும் வாயுக்கள்). கேலூசாக்கின் விதிப்படி 10 லி நைட்ரஜன்', options: ['30 லி ஹைட்ரஜனுடன் வினைபுரிந்து 20 லி அம்மோனியா தரும்', '10 லி ஹைட்ரஜனுடன் வினைபுரிந்து 20 லி அம்மோனியா தரும்', '30 லி ஹைட்ரஜனுடன் வினைபுரிந்து 40 லி அம்மோனியா தரும்', '20 லி ஹைட்ரஜனுடன் வினைபுரிந்து 10 லி அம்மோனியா தரும்'], explanation: 'பருமன் விகிதம் 1 : 3 : 2; எனவே 10 லி N₂-க்கு 30 லி H₂ தேவை, 20 லி NH₃ கிடைக்கும் (செயல்பாடு 6).' },
  },
  {
    difficulty: 'hard', source: '§11.7.2, p. 134', answer: 0,
    en: { q: 'With 12 g of carbon, hydrogen forms CH₄ (4 g H) and oxygen forms CO₂ (32 g O). In water, H : O = 2 : 16. These data illustrate the law of', options: ['reciprocal proportions', 'multiple proportions', 'conservation of mass', 'combining volumes'], explanation: 'H : O combining with fixed carbon is 4 : 32 = 1 : 8, the same as in water (2 : 16 = 1 : 8) – Richter’s law of reciprocal proportions.' },
    ta: { q: '12 கி கார்பனுடன் ஹைட்ரஜன் CH₄ (4 கி H), ஆக்ஸிஜன் CO₂ (32 கி O) உருவாக்குகின்றன. நீரில் H : O = 2 : 16. இத்தரவுகள் விளக்கும் விதி', options: ['தலைகீழ் விகித விதி', 'பெருக்கல் விகித விதி', 'நிறை மாறா விதி', 'பருமன் இணைப்பு விதி'], explanation: 'ஒரே நிறையுள்ள கார்பனுடன் இணையும் H : O = 4 : 32 = 1 : 8; நீரில் 2 : 16 = 1 : 8 – ரிச்சரின் தலைகீழ் விகித விதி.' },
  },
  {
    difficulty: 'hard', source: '§11.7.1, p. 133', answer: 0,
    en: { q: 'Assertion: CO and CO₂ illustrate the law of multiple proportions.\nReason: For a fixed 12 g of carbon, the masses of oxygen in CO and CO₂ are 16 g and 32 g, a simple ratio 1 : 2.', options: AR_EN, explanation: 'Different masses of oxygen that combine with a fixed mass of carbon are in a simple ratio – exactly Dalton’s law.' },
    ta: { q: 'கூற்று: CO, CO₂ ஆகியவை பெருக்கல் விகித விதியை விளக்குகின்றன.\nகாரணம்: 12 கி கார்பனுடன் CO-ல் 16 கி, CO₂-ல் 32 கி ஆக்ஸிஜன் இணைகிறது; விகிதம் 1 : 2.', options: AR_TA, explanation: 'ஒரே நிறையுள்ள கார்பனுடன் இணையும் ஆக்ஸிஜனின் வெவ்வேறு நிறைகள் எளிய விகிதத்தில் உள்ளன – இதுவே டால்டனின் விதி.' },
  },
  {
    difficulty: 'hard', source: '§11.5.1, p. 129', answer: 2,
    en: { q: 'Assertion: Calcium (20 electrons) has the configuration 2, 8, 8, 2.\nReason: The M shell can hold a maximum of only 8 electrons.', options: AR_EN, explanation: 'The assertion is true (outermost shell cannot have more than 8 electrons), but the reason is false: the M shell can hold 2 × 3² = 18 electrons.' },
    ta: { q: 'கூற்று: கால்சியத்தின் (20 எலக்ட்ரான்கள்) எலக்ட்ரான் பகிர்வு 2, 8, 8, 2.\nகாரணம்: M கூட்டில் அதிகபட்சம் 8 எலக்ட்ரான்கள் மட்டுமே இருக்க முடியும்.', options: AR_TA, explanation: 'கூற்று சரி (வெளிக்கூட்டில் 8-க்கு மேல் இருக்க முடியாது); ஆனால் காரணம் தவறு: M கூட்டில் 2 × 3² = 18 எலக்ட்ரான்கள் வரை இருக்கலாம்.' },
  },
  {
    difficulty: 'hard', source: '§11.6.2, Fig. 11.10, p. 132', imageUrl: `${IMG}/isobars-ar-ca.png`, answer: 0,
    en: { q: 'The two atoms shown (argon, 18p 22n, and calcium, 20p 20n) are', options: ['isobars – same mass number, different atomic numbers', 'isotopes – same atomic number, different mass numbers', 'isotones – same number of neutrons', 'atoms of the same element'], explanation: 'Both have 40 nucleons (18 + 22 and 20 + 20) but different numbers of protons, so they are isobars.' },
    ta: { q: 'படத்தில் உள்ள இரு அணுக்கள் (ஆர்கான் 18P 22n, கால்சியம் 20P 20n)', options: ['ஐசோபார்கள் – ஒரே நிறை எண், வெவ்வேறு அணு எண்கள்', 'ஐசோடோப்புகள் – ஒரே அணு எண், வெவ்வேறு நிறை எண்கள்', 'ஐசோடோன்கள் – ஒரே நியூட்ரான் எண்ணிக்கை', 'ஒரே தனிமத்தின் அணுக்கள்'], explanation: 'இரண்டிலும் 40 நியூக்ளியான்கள் (18 + 22, 20 + 20); புரோட்டான் எண்ணிக்கை வேறு; எனவே ஐசோபார்கள்.' },
  },
  {
    difficulty: 'hard', source: '§11.6.3, Fig. 11.11, p. 133', imageUrl: `${IMG}/isotones-b-c.png`, answer: 0,
    en: { q: 'The two atoms shown (boron, 5p 6n, and carbon, 6p 6n) are', options: ['isotones – same number of neutrons, different atomic and mass numbers', 'isobars – same mass number', 'isotopes – same atomic number', 'atoms with the same valency'], explanation: 'Both have 6 neutrons (11 − 5 and 12 − 6), but different atomic numbers and mass numbers, so they are isotones.' },
    ta: { q: 'படத்தில் உள்ள இரு அணுக்கள் (போரான் 5P 6n, கார்பன் 6P 6n)', options: ['ஐசோடோன்கள் – ஒரே நியூட்ரான் எண்ணிக்கை, வெவ்வேறு அணு எண், நிறை எண்', 'ஐசோபார்கள் – ஒரே நிறை எண்', 'ஐசோடோப்புகள் – ஒரே அணு எண்', 'ஒரே இணைதிறன் கொண்ட அணுக்கள்'], explanation: 'இரண்டிலும் 6 நியூட்ரான்கள் (11 − 5, 12 − 6); அணு எண்ணும் நிறை எண்ணும் வேறு; எனவே ஐசோடோன்கள்.' },
  },
  {
    difficulty: 'hard', source: 'Book Activity 5, p. 133', answer: 0,
    en: { q: 'Which of these pairs are isotones?', options: ['²³₁₁Na and ²⁴₁₂Mg', '¹²₆C and ¹³₆C', '⁴⁰₁₈Ar and ⁴⁰₂₀Ca', '³⁵₁₇Cl and ³⁷₁₇Cl'], explanation: 'Na-23 and Mg-24 both have 12 neutrons; the C and Cl pairs are isotopes and Ar/Ca are isobars.' },
    ta: { q: 'பின்வருவனவற்றுள் ஐசோடோன் இணை எது?', options: ['²³₁₁Na மற்றும் ²⁴₁₂Mg', '¹²₆C மற்றும் ¹³₆C', '⁴⁰₁₈Ar மற்றும் ⁴⁰₂₀Ca', '³⁵₁₇Cl மற்றும் ³⁷₁₇Cl'], explanation: 'Na-23, Mg-24 இரண்டிலும் 12 நியூட்ரான்கள்; C, Cl இணைகள் ஐசோடோப்புகள்; Ar/Ca ஐசோபார்கள்.' },
  },
  {
    difficulty: 'hard', source: '§11.6.1, p. 132', answer: 0,
    en: { q: 'Which statements about radioisotopes are correct?\n(i) They are unstable because of extra neutrons in the nucleus.\n(ii) Uranium-235 is used in nuclear reactors.\n(iii) Cobalt-60 is used in radiotherapy.\n(iv) They have a different atomic number from the stable isotope.', options: ['(i), (ii) and (iii)', '(i) and (iv) only', '(ii) and (iv) only', '(i), (iii) and (iv)'], explanation: 'Radioisotopes are isotopes, so they have the same atomic number; statements (i)–(iii) are given in the book.' },
    ta: { q: 'கதிரியக்க ஐசோடோப்புகள் பற்றிய சரியான கூற்றுகள் எவை?\n(i) உட்கருவில் உள்ள கூடுதல் நியூட்ரான்களால் அவை நிலைப்புத் தன்மையற்றவை.\n(ii) யுரேனியம்-235 அணுக்கரு உலையில் பயன்படுகிறது.\n(iii) கோபால்ட்-60 கதிர்வீச்சு சிகிச்சையில் பயன்படுகிறது.\n(iv) நிலையான ஐசோடோப்பிலிருந்து வேறுபட்ட அணு எண் கொண்டவை.', options: ['(i), (ii), (iii)', '(i), (iv) மட்டும்', '(ii), (iv) மட்டும்', '(i), (iii), (iv)'], explanation: 'கதிரியக்க ஐசோடோப்புகளும் ஐசோடோப்புகளே; எனவே அணு எண் ஒன்றே; (i)–(iii) பாடநூலில் உள்ளவை.' },
  },
];
