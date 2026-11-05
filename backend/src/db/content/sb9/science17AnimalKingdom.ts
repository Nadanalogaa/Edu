// Tamil Nadu State Board, 9th Science, Unit 17 – Animal Kingdom (விலங்குலகம்).
// source = printed page of the English-medium book.
import { BankQuestion, AR_EN, AR_TA } from './types';

const IMG = '/content/9/state_board/science/17';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.4, p. 208', answer: 0,
    en: { q: 'Identify the animal having a four-chambered heart.', options: ['Crocodile', 'Lizard', 'Snake', 'Calotes'], explanation: 'Reptiles have a three-chambered heart, except crocodiles, which have four chambers.' },
    ta: { q: 'நான்கு அறைகளையுடைய இதயம் கொண்ட விலங்கினைக் கண்டறிக.', options: ['முதலை', 'பல்லி', 'பாம்பு', 'ஓணான்'], explanation: 'ஊர்வனவற்றின் இதயம் மூன்று அறைகளுடையது; முதலை மட்டும் விதிவிலக்காக நான்கு அறைகளுடையது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.8, p. 208', answer: 0,
    en: { q: 'Air sacs and pneumatic bones are seen in', options: ['birds', 'fish', 'frogs', 'bats'], explanation: 'Birds have lungs with air sacs and air-filled (pneumatic) bones that reduce body weight.' },
    ta: { q: 'காற்றறைகள் மற்றும் காற்றெலும்புகள் காணப்படுவது', options: ['பறவை', 'மீன்', 'தவளை', 'வௌவால்'], explanation: 'பறவைகளின் நுரையீரல்களில் காற்றறைகளும், உடல் எடையைக் குறைக்கும் காற்றெலும்புகளும் உள்ளன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.9, p. 208', answer: 0,
    en: { q: 'The excretory organ of the tapeworm is', options: ['flame cells', 'nephridia', 'body surface', 'solenocytes'], explanation: 'In flatworms excretion occurs by specialised cells called flame cells.' },
    ta: { q: 'நாடாப்புழுவின் கழிவு நீக்க உறுப்பு எது?', options: ['சுடர் செல்கள்', 'நெஃப்ரீடியா', 'உடற்பரப்பு', 'சொலினோசைட்டுகள்'], explanation: 'தட்டைப்புழுக்களில் சுடர் செல்கள் எனும் சிறப்புச் செல்கள் மூலம் கழிவு நீக்கம் நிகழ்கிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.10, p. 208', answer: 0,
    en: { q: 'The water vascular system is found in', options: ['starfish', 'Hydra', 'earthworm', 'Ascaris'], explanation: 'A fluid-filled water vascular system is the unique feature of echinoderms such as starfish.' },
    ta: { q: 'நீர்க்குழல் மண்டலம் காணப்படுவது', options: ['நட்சத்திர மீன்', 'ஹைட்ரா', 'மண்புழு', 'அஸ்காரிஸ்'], explanation: 'திரவம் நிறைந்த நீர்க்குழல் மண்டலம் நட்சத்திர மீன் போன்ற முட்தோலிகளின் தனிச்சிறப்பு.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.1, p. 208', answer: 0,
    en: { q: 'The skeletal framework of Porifera is formed by _____.', options: ['spicules', 'chitin', 'ossicles', 'cartilage'], explanation: 'The body wall of sponges contains spicules, which form the skeletal framework.' },
    ta: { q: 'துளையுடலிகளின் சட்டக அமைப்பு _____ ஆல் ஆனது.', options: ['ஸ்பிக்யூல்கள்', 'கைட்டின்', 'ஆஸிக்கிள்கள்', 'குருத்தெலும்பு'], explanation: 'கடற்பஞ்சுகளின் உடற்சுவரில் உள்ள ஸ்பிக்யூல்கள் சட்டக அமைப்பை உருவாக்குகின்றன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.3, p. 208', answer: 0,
    en: { q: 'Skates are _____ fishes.', options: ['cartilaginous', 'bony', 'jawless', 'lobe-finned'], explanation: 'Sharks and skates have a skeleton made of cartilage.' },
    ta: { q: 'ஸ்கேட்டுகள் _____ மீன்களாகும்.', options: ['குருத்தெலும்பு', 'எலும்பு', 'தாடையற்ற', 'சதைத்துடுப்பு'], explanation: 'சுறா, ஸ்கேட் ஆகியவற்றின் சட்டகம் குருத்தெலும்பால் ஆனது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.4, p. 208', answer: 0,
    en: { q: 'The larva of an amphibian is called a _____.', options: ['tadpole', 'bipinnaria', 'caterpillar', 'nymph'], explanation: 'Amphibian eggs hatch into tadpole larvae, which transform into adults.' },
    ta: { q: 'இரு வாழ்விகளின் லார்வா _____ ஆகும்.', options: ['தலைப்பிரட்டை', 'பைபின்னேரியா', 'கம்பளிப்புழு', 'இளம்பூச்சி (நிம்ஃப்)'], explanation: 'இரு வாழ்விகளின் முட்டைகள் தலைப்பிரட்டைகளாகப் பொரித்து பின் முதிர் உயிரிகளாக மாறுகின்றன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.5, p. 208', answer: 0,
    en: { q: '_____ are jawless vertebrates.', options: ['Cyclostomes', 'Sharks', 'Amphibians', 'Reptiles'], explanation: 'Cyclostomes such as lamprey and hagfish have a circular mouth not bounded by jaws.' },
    ta: { q: '_____ என்பவை தாடையற்ற முதுகெலும்பிகள் ஆகும்.', options: ['வட்டவாயுடையன', 'சுறாக்கள்', 'இரு வாழ்விகள்', 'ஊர்வன'], explanation: 'லாம்ப்ரே, ஹேக் மீன் போன்ற வட்டவாயுடையனவற்றின் வாய் தாடைகளால் சூழப்படவில்லை.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.6, p. 208', answer: 0,
    en: { q: '_____ is the unique characteristic feature of mammals.', options: ['Placenta', 'Feathers', 'Scales', 'Gills'], explanation: 'Placenta is the unique feature of mammals.' },
    ta: { q: '_____ ஆனது பாலூட்டிகளின் சிறப்புப் பண்பாகும்.', options: ['தாய்–சேய் இணைப்புத்திசு', 'இறகுகள்', 'செதில்கள்', 'செவுள்கள்'], explanation: 'தாய்–சேய் இணைப்புத்திசு (நஞ்சுக்கொடி) பாலூட்டிகளின் தனிச்சிறப்பு.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise IV, p. 209', answer: 0,
    en: { q: 'Match each phylum with its example:\nA. Coelenterata  B. Platyhelminthes  C. Echinodermata  D. Mollusca\ni. Snail  ii. Starfish  iii. Tapeworm  iv. Hydra', options: ['A-iv, B-iii, C-ii, D-i', 'A-iii, B-iv, C-ii, D-i', 'A-iv, B-iii, C-i, D-ii', 'A-ii, B-iii, C-iv, D-i'], explanation: 'Hydra is a coelenterate, tapeworm a flatworm, starfish an echinoderm and snail a mollusc.' },
    ta: { q: 'தொகுதியை அதன் எடுத்துக்காட்டுடன் பொருத்துக:\nA. குழியுடலிகள்  B. தட்டைப்புழுக்கள்  C. முட்தோலிகள்  D. மெல்லுடலிகள்\ni. நத்தை  ii. நட்சத்திர மீன்  iii. நாடாப்புழு  iv. ஹைட்ரா', options: ['A-iv, B-iii, C-ii, D-i', 'A-iii, B-iv, C-ii, D-i', 'A-iv, B-iii, C-i, D-ii', 'A-ii, B-iii, C-iv, D-i'], explanation: 'ஹைட்ரா குழியுடலி, நாடாப்புழு தட்டைப்புழு, நட்சத்திர மீன் முட்தோலி, நத்தை மெல்லுடலி.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise V.1, p. 209', answer: 0,
    en: { q: 'Taxonomy is', options: ['the science of classification of organisms', 'the study of tissues', 'the study of fossils', 'the study of cell division'], explanation: 'Taxonomy is the science of classification, which makes the study of a wide variety of organisms easier.' },
    ta: { q: 'வகைப்பாட்டியல் என்பது', options: ['உயிரினங்களை வகைப்படுத்தும் அறிவியல்', 'திசுக்களைப் பற்றிய படிப்பு', 'புதைபடிவங்களைப் பற்றிய படிப்பு', 'செல் பகுப்பைப் பற்றிய படிப்பு'], explanation: 'வகைப்பாட்டியல் என்பது உயிரினங்களை வகைப்படுத்தும் அறிவியல்; இது பல்வகை உயிரினங்களைப் படிப்பதை எளிதாக்குகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise V.5, p. 209', answer: 0,
    en: { q: 'Locomotion in starfish takes place by', options: ['tube feet', 'setae', 'parapodia', 'fins'], explanation: 'Echinoderms move with tube feet worked by the water vascular system.' },
    ta: { q: 'நட்சத்திர மீன்கள் எதன் மூலம் இடப்பெயர்ச்சி செய்கின்றன?', options: ['குழல் கால்கள்', 'சீட்டாக்கள்', 'பாரபோடியாக்கள்', 'துடுப்புகள்'], explanation: 'முட்தோலிகள் நீர்க்குழல் மண்டலத்தால் இயங்கும் குழல் கால்கள் மூலம் இடம்பெயர்கின்றன.' },
  },
  {
    difficulty: 'easy', source: 'Introduction, p. 199', answer: 0,
    en: { q: 'The first systematic approach to the classification of living organisms was made by', options: ['Carolus Linnaeus', 'Charles Darwin', 'Gregor Mendel', 'Robert Hooke'], explanation: 'The Swedish botanist Carolus Linnaeus gave the first systematic classification and naming system.' },
    ta: { q: 'உயிரினங்களை முறையாக வகைப்படுத்தும் முதல் முயற்சியை மேற்கொண்டவர்', options: ['கரோலஸ் லின்னேயஸ்', 'சார்லஸ் டார்வின்', 'கிரிகர் மெண்டல்', 'ராபர்ட் ஹூக்'], explanation: 'சுவீடன் நாட்டுத் தாவரவியலாளர் கரோலஸ் லின்னேயஸ் முதன்முதலில் முறையான வகைப்பாட்டை உருவாக்கினார்.' },
  },
  {
    difficulty: 'easy', source: '§17.1, p. 200', answer: 0,
    en: { q: 'The lowest taxonomic category is', options: ['species', 'genus', 'family', 'kingdom'], explanation: 'Species is the lowest category; kingdom is the highest.' },
    ta: { q: 'வகைப்பாட்டின் மிகக் கீழ்நிலைப் படிநிலை', options: ['சிற்றினம்', 'பேரினம்', 'குடும்பம்', 'உலகம்'], explanation: 'சிற்றினம் மிகக் கீழ்நிலை; உலகம் மிக உயர்நிலை.' },
  },
  {
    difficulty: 'easy', source: '§17.1.2, p. 202', answer: 0,
    en: { q: 'The binomial name of man is', options: ['Homo sapiens', 'Canis familiaris', 'Felis felis', 'Panthera tigris'], explanation: 'Man is Homo sapiens; dog is Canis familiaris, cat Felis felis and tiger Panthera tigris.' },
    ta: { q: 'மனிதனின் இருசொற் பெயர்', options: ['ஹோமோ சேப்பியன்ஸ்', 'கேனிஸ் ஃபெமிலியாரிஸ்', 'ஃபெலிஸ் ஃபெலிஸ்', 'பாந்தெரா டைகிரிஸ்'], explanation: 'மனிதன் ஹோமோ சேப்பியன்ஸ்; நாய் கேனிஸ் ஃபெமிலியாரிஸ், பூனை ஃபெலிஸ் ஃபெலிஸ், புலி பாந்தெரா டைகிரிஸ்.' },
  },
  {
    difficulty: 'easy', source: '§17.2.1, p. 202', answer: 0,
    en: { q: 'The pores on the body of a sponge through which water enters are called', options: ['ostia', 'metameres', 'annuli', 'tube feet'], explanation: 'Sponges have many pores called ostia, leading into a canal system.' },
    ta: { q: 'கடற்பஞ்சின் உடலில் நீர் உள்ளே செல்லும் துளைகள்', options: ['ஆஸ்டியா', 'மெட்டாமியர்கள்', 'அன்னுலைகள்', 'குழல் கால்கள்'], explanation: 'கடற்பஞ்சின் உடலில் உள்ள ஆஸ்டியா எனும் துளைகள் வழியாக நீர் கால்வாய் மண்டலத்தில் நுழைகிறது.' },
  },
  {
    difficulty: 'easy', source: '§17.2.6, p. 203', answer: 0,
    en: { q: 'The largest phylum of the animal kingdom is', options: ['Arthropoda', 'Mollusca', 'Chordata', 'Annelida'], explanation: 'Arthropoda, the animals with jointed legs, is the largest phylum.' },
    ta: { q: 'விலங்குலகின் மிகப்பெரிய தொகுதி', options: ['கணுக்காலிகள்', 'மெல்லுடலிகள்', 'முதுகு நாணுள்ளவை', 'வளைதசைப்புழுக்கள்'], explanation: 'இணைப்புக் கால்களையுடைய கணுக்காலிகளே மிகப்பெரிய தொகுதி.' },
  },
  {
    difficulty: 'easy', source: '§17.3.2, p. 206 (More to know)', answer: 0,
    en: { q: 'The state bird of Tamil Nadu is the', options: ['common emerald dove', 'peacock', 'house crow', 'rose-ringed parakeet'], explanation: 'The common emerald dove (Chalcophaps indica) is the state bird of Tamil Nadu.' },
    ta: { q: 'தமிழ்நாட்டின் மாநிலப் பறவை', options: ['மரகதப் புறா', 'மயில்', 'காகம்', 'பச்சைக்கிளி'], explanation: 'மரகதப் புறா (சால்கோஃபாப்ஸ் இண்டிகா) தமிழ்நாட்டின் மாநிலப் பறவை.' },
  },
  {
    difficulty: 'easy', source: '§17.3.2, p. 207 (More to know)', answer: 0,
    en: { q: 'The biggest vertebrate animal is the', options: ['blue whale', 'African elephant', 'whale shark', 'giraffe'], explanation: 'The blue whale, about 35 m long and 120 tons, is the biggest vertebrate.' },
    ta: { q: 'முதுகெலும்புள்ள விலங்குகளில் மிகப் பெரியது', options: ['நீலத் திமிங்கிலம்', 'ஆப்பிரிக்க யானை', 'திமிங்கிலச் சுறா', 'ஒட்டகச்சிவிங்கி'], explanation: '35 மீட்டர் நீளமும் 120 டன் எடையும் கொண்ட நீலத் திமிங்கிலமே மிகப்பெரிய முதுகெலும்பி.' },
  },
  // ---------------------------------------------------------------- Medium
  {
    difficulty: 'medium', source: 'Book exercise I.1, p. 208', answer: 0,
    en: { q: 'Find the group having only marine members.', options: ['Echinodermata', 'Mollusca', 'Coelenterata', 'Porifera'], explanation: 'Echinoderms are exclusively free-living marine animals; the other groups also have freshwater or land forms.' },
    ta: { q: 'பின்வரும் தொகுதிகளில் கடல் வாழ் உயிரினங்களை மட்டும் கொண்டதைக் கண்டறிக.', options: ['முட்தோலிகள்', 'மெல்லுடலிகள்', 'குழியுடலிகள்', 'துளையுடலிகள்'], explanation: 'முட்தோலிகள் முழுவதும் கடலில் வாழ்பவை; மற்ற தொகுதிகளில் நன்னீர் அல்லது நில வாழ் உயிரிகளும் உள்ளன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.2, p. 208', answer: 0,
    en: { q: 'Mesoglea is present in', options: ['Coelenterata', 'Porifera', 'Annelida', 'Arthropoda'], explanation: 'In coelenterates the ectoderm and endoderm are separated by a jelly-like non-cellular mesoglea.' },
    ta: { q: 'மீசோகிளியா காணப்படுவது', options: ['குழியுடலிகள்', 'துளையுடலிகள்', 'வளைதசைப்புழுக்கள்', 'கணுக்காலிகள்'], explanation: 'குழியுடலிகளில் புற அடுக்கும் அக அடுக்கும் செல்லற்ற கூழ்மப்பொருளான மீசோகிளியாவால் பிரிக்கப்பட்டுள்ளன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.3, p. 208', answer: 0,
    en: { q: 'Which one of the following pairs is NOT poikilothermic (cold-blooded)?', options: ['Aves and Mammals', 'Fishes and Amphibians', 'Amphibians and Aves', 'Reptiles and Mammals'], explanation: 'Birds and mammals are both warm-blooded (homeothermic); every other pair has at least one cold-blooded group.' },
    ta: { q: 'பின்வரும் ஜோடிகளில் எது குளிர் இரத்தப் பிராணி அல்ல?', options: ['பறவைகள் மற்றும் பாலூட்டிகள்', 'மீன்கள் மற்றும் இரு வாழ்விகள்', 'இருவாழ்விகள் மற்றும் பறவைகள்', 'ஊர்வன மற்றும் பாலூட்டிகள்'], explanation: 'பறவைகளும் பாலூட்டிகளும் வெப்ப இரத்தப் பிராணிகள்; மற்ற ஜோடிகளில் குறைந்தது ஒன்று குளிர் இரத்தப் பிராணி.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.5, p. 208', answer: 0,
    en: { q: 'An animal without a skull is called', options: ['Acrania', 'Acephalia', 'Apteria', 'Acoelomate'], explanation: 'Acrania means without a cranium (skull), as in prochordates like Amphioxus.' },
    ta: { q: 'மண்டையோடற்ற உயிரிகள் எவ்வாறு அழைக்கப்படுகின்றன?', options: ['அக்ரேனியா', 'அசெஃபாலியா', 'ஏப்டீரியா', 'ஏசீலோமேட்டா'], explanation: 'அக்ரேனியா என்றால் மண்டையோடு (கிரேனியம்) அற்றவை; எ.கா. ஆம்பியாக்சஸ் போன்ற முன்முதுகுநாணிகள்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.7, p. 208', answer: 0,
    en: { q: 'The poikilothermic organisms are', options: ['fish, frog, lizard, snake', 'fish, frog, lizard, man', 'fish, frog, lizard, cow', 'fish, frog, lizard, crow'], explanation: 'Fishes, amphibians and reptiles are cold-blooded; man, cow and crow are warm-blooded.' },
    ta: { q: 'குளிர் இரத்தப் பிராணிகள் எவை?', options: ['மீன், தவளை, பல்லி, பாம்பு', 'மீன், தவளை, பல்லி, மனிதன்', 'மீன், தவளை, பல்லி, மாடு', 'மீன், தவளை, பல்லி, காகம்'], explanation: 'மீன்கள், இரு வாழ்விகள், ஊர்வன குளிர் இரத்தப் பிராணிகள்; மனிதன், மாடு, காகம் வெப்ப இரத்தப் பிராணிகள்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.2, p. 208', answer: 0,
    en: { q: 'Ctenidia are the respiratory organs of _____.', options: ['Mollusca', 'Arthropoda', 'Annelida', 'Echinodermata'], explanation: 'Molluscs breathe through gills called ctenidia, or lungs, or both.' },
    ta: { q: 'டினிடியா என்ற சுவாச உறுப்புகள் _____ இல் காணப்படும்.', options: ['மெல்லுடலிகள்', 'கணுக்காலிகள்', 'வளைதசைப்புழுக்கள்', 'முட்தோலிகள்'], explanation: 'மெல்லுடலிகள் டினிடியா எனும் செவுள்கள், நுரையீரல்கள் அல்லது இரண்டின் மூலமும் சுவாசிக்கின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.7, p. 208', answer: 0,
    en: { q: 'The spiny anteater is an example of a(n) _____ mammal.', options: ['egg-laying', 'pouched', 'flying', 'aquatic'], explanation: 'Platypus and spiny anteater are the egg-laying mammals; all others give birth to young ones.' },
    ta: { q: 'எறும்புண்ணி _____ பாலூட்டிக்கு உதாரணமாகும்.', options: ['முட்டையிடும்', 'பை கொண்ட', 'பறக்கும்', 'நீர்வாழ்'], explanation: 'பிளாட்டிபஸ், எறும்புண்ணி ஆகியவை முட்டையிடும் பாலூட்டிகள்; மற்றவை குட்டிகளை ஈனுகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.1 and III.3, p. 208', answer: 0,
    en: { q: 'Which statement about the canal system and tracheae is correct?', options: ['The canal system is seen in Porifera, and tracheae are the respiratory organs of Arthropoda.', 'The canal system is seen in coelenterates, and tracheae are the respiratory organs of Annelida.', 'The canal system is seen in Annelida, and tracheae are the respiratory organs of Mollusca.', 'The canal system is seen in Porifera, and tracheae are the respiratory organs of Annelida.'], explanation: 'The book statements are false: the canal system belongs to sponges (Porifera) and tracheae to arthropods, not coelenterates and annelids.' },
    ta: { q: 'கால்வாய் மண்டலம், டிரக்கியா பற்றிய சரியான கூற்று எது?', options: ['கால்வாய் மண்டலம் துளையுடலிகளில் காணப்படுகிறது; டிரக்கியா கணுக்காலிகளின் சுவாச உறுப்பு.', 'கால்வாய் மண்டலம் குழியுடலிகளில் காணப்படுகிறது; டிரக்கியா வளைதசைப்புழுக்களின் சுவாச உறுப்பு.', 'கால்வாய் மண்டலம் வளைதசைப்புழுக்களில் காணப்படுகிறது; டிரக்கியா மெல்லுடலிகளின் சுவாச உறுப்பு.', 'கால்வாய் மண்டலம் துளையுடலிகளில் காணப்படுகிறது; டிரக்கியா வளைதசைப்புழுக்களின் சுவாச உறுப்பு.'], explanation: 'பாடநூல் கூற்றுகள் தவறு: கால்வாய் மண்டலம் துளையுடலிகளுக்கும், டிரக்கியா கணுக்காலிகளுக்கும் உரியவை.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.4 and III.5, p. 208', answer: 0,
    en: { q: 'Which statement about Bipinnaria and Balanoglossus is correct?', options: ['Bipinnaria is the larva of Echinodermata, and Balanoglossus is a ciliary feeder.', 'Bipinnaria is the larva of Mollusca, and Balanoglossus is a ciliary feeder.', 'Bipinnaria is the larva of Mollusca, and Balanoglossus is a parasite.', 'Bipinnaria is the larva of Echinodermata, and Balanoglossus is a parasite.'], explanation: 'Bipinnaria is the larva of echinoderms (starfish), not molluscs; Balanoglossus is indeed a ciliary feeder.' },
    ta: { q: 'பைபின்னேரியா, பலனோகிளாசஸ் பற்றிய சரியான கூற்று எது?', options: ['பைபின்னேரியா முட்தோலிகளின் லார்வா; பலனோகிளாசஸ் குறுஇழை வழி உணவூட்டி.', 'பைபின்னேரியா மெல்லுடலிகளின் லார்வா; பலனோகிளாசஸ் குறுஇழை வழி உணவூட்டி.', 'பைபின்னேரியா மெல்லுடலிகளின் லார்வா; பலனோகிளாசஸ் ஒட்டுண்ணி.', 'பைபின்னேரியா முட்தோலிகளின் லார்வா; பலனோகிளாசஸ் ஒட்டுண்ணி.'], explanation: 'பைபின்னேரியா மெல்லுடலிகளின் அல்ல, முட்தோலிகளின் (நட்சத்திர மீன்) லார்வா; பலனோகிளாசஸ் குறுஇழை வழி உணவூட்டியே.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.6 and III.7, p. 208', answer: 0,
    en: { q: 'Which statement about the heart of fishes and the skin of reptiles is correct?', options: ['Fishes have a two-chambered heart, and reptiles have dry skin with horny scales.', 'Fishes have a three-chambered heart, and reptiles have smooth, moist skin.', 'Fishes have a two-chambered heart, and reptiles have smooth, moist skin.', 'Fishes have a four-chambered heart, and reptiles have dry skin with horny scales.'], explanation: 'A fish heart has one auricle and one ventricle; reptile skin is covered with horny epidermal scales (moist skin belongs to amphibians).' },
    ta: { q: 'மீன்களின் இதயம், ஊர்வனவற்றின் தோல் பற்றிய சரியான கூற்று எது?', options: ['மீன்களின் இதயம் இரண்டு அறைகளையுடையது; ஊர்வனவற்றின் தோல் உலர்ந்த கொம்புச் செதில்களால் மூடப்பட்டது.', 'மீன்களின் இதயம் மூன்று அறைகளையுடையது; ஊர்வனவற்றின் தோல் மென்மையானது, ஈரமானது.', 'மீன்களின் இதயம் இரண்டு அறைகளையுடையது; ஊர்வனவற்றின் தோல் மென்மையானது, ஈரமானது.', 'மீன்களின் இதயம் நான்கு அறைகளையுடையது; ஊர்வனவற்றின் தோல் உலர்ந்த கொம்புச் செதில்களால் மூடப்பட்டது.'], explanation: 'மீனின் இதயத்தில் ஒரு ஆரிக்கிள், ஒரு வென்ட்ரிக்கிள் உள்ளன; ஊர்வனவற்றின் தோல் கொம்புச் செதில்களால் ஆனது (ஈரத்தோல் இரு வாழ்விகளுக்கு உரியது).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.2, III.8 and III.9, p. 208–209', answer: 0,
    en: { q: 'Which of these statements is FALSE?', options: ['Female mammals do not have mammary glands.', 'Hermaphrodite animals have both male and female sex organs.', 'Wings of birds are modified forelimbs.', 'Fishes breathe through gills.'], explanation: 'Females of mammals have mammary glands that secrete milk; the other three statements are true.' },
    ta: { q: 'பின்வருவனவற்றுள் தவறான கூற்று எது?', options: ['பெண் பாலூட்டிகளில் பால் சுரப்பிகள் இல்லை.', 'இருபால் உயிரிகள் ஆண், பெண் இனப்பெருக்க உறுப்புகளைப் பெற்றுள்ளன.', 'முன்னங்கால்களின் மாறுபாடுகளே பறவைகளின் இறக்கைகள்.', 'மீன்கள் செவுள்கள் மூலம் சுவாசிக்கின்றன.'], explanation: 'பெண் பாலூட்டிகளில் பால் சுரக்கும் பால் சுரப்பிகள் உள்ளன; மற்ற மூன்று கூற்றுகளும் சரி.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V.2, p. 209', answer: 0,
    en: { q: 'Nematocysts (cnidoblasts) are', options: ['stinging cells on the tentacles of coelenterates', 'excretory cells of flatworms', 'pores on the body of sponges', 'locomotor organs of annelids'], explanation: 'The tentacles of coelenterates bear stinging cells called cnidoblasts or nematocysts.' },
    ta: { q: 'நெமட்டோசிஸ்ட்டுகள் (நிடோபிளாஸ்ட்டுகள்) என்பவை', options: ['குழியுடலிகளின் உணர்நீட்சிகளில் உள்ள கொட்டும் செல்கள்', 'தட்டைப்புழுக்களின் கழிவு நீக்கச் செல்கள்', 'கடற்பஞ்சின் உடலில் உள்ள துளைகள்', 'வளைதசைப்புழுக்களின் இடப்பெயர்ச்சி உறுப்புகள்'], explanation: 'குழியுடலிகளின் உணர்நீட்சிகளில் நிடோபிளாஸ்ட் அல்லது நெமட்டோசிஸ்ட் எனும் கொட்டும் செல்கள் உள்ளன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V.3, p. 209', answer: 0,
    en: { q: 'Coelenterates are called diploblastic animals because', options: ['their body wall has only two germ layers, ectoderm and endoderm', 'they have two body cavities', 'they reproduce in two ways', 'they have two pairs of tentacles'], explanation: 'Diploblastic animals have two germ layers; the mesoglea between them is non-cellular.' },
    ta: { q: 'குழியுடலிகள் ஈரடுக்கு உயிரிகள் என அழைக்கப்படுவது ஏன்?', options: ['அவற்றின் உடற்சுவரில் புற அடுக்கு, அக அடுக்கு என இரு கருமூல அடுக்குகள் மட்டுமே உள்ளன', 'அவற்றுக்கு இரண்டு உடற்குழிகள் உள்ளன', 'அவை இரு முறைகளில் இனப்பெருக்கம் செய்கின்றன', 'அவற்றுக்கு இரண்டு ஜோடி உணர்நீட்சிகள் உள்ளன'], explanation: 'ஈரடுக்கு உயிரிகளில் இரு கருமூல அடுக்குகள் மட்டுமே உள்ளன; இடையிலுள்ள மீசோகிளியா செல்லற்றது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V.4, p. 209', answer: 0,
    en: { q: 'The respiratory organs of amphibians are', options: ['gills, lungs, skin and buccopharynx', 'lungs with air sacs only', 'tracheae and book lungs', 'ctenidia only'], explanation: 'Amphibians breathe through gills, lungs, skin or the buccopharynx.' },
    ta: { q: 'இரு வாழ்விகளின் சுவாச உறுப்புகள்', options: ['செவுள்கள், நுரையீரல்கள், தோல், வாய்த்தொண்டை', 'காற்றறைகளுடன் கூடிய நுரையீரல்கள் மட்டும்', 'டிரக்கியா, புத்தக நுரையீரல்கள்', 'டினிடியா மட்டும்'], explanation: 'இரு வாழ்விகள் செவுள்கள், நுரையீரல்கள், தோல் அல்லது வாய்த்தொண்டை மூலம் சுவாசிக்கின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V.6, p. 209', answer: 0,
    en: { q: 'Jellyfish and starfish are not true fishes because they', options: ['are invertebrates without a notochord or backbone', 'live only on land', 'breathe through lungs', 'have a four-chambered heart'], explanation: 'Jellyfish (coelenterate) and starfish (echinoderm) lack a backbone; fishes are vertebrates.' },
    ta: { q: 'ஜெல்லி மீனும் நட்சத்திர மீனும் உண்மையான மீன்கள் அல்ல. ஏனெனில் அவை', options: ['முதுகு நாணோ முதுகெலும்போ இல்லாத முதுகு நாணற்றவை', 'நிலத்தில் மட்டும் வாழ்பவை', 'நுரையீரல்கள் மூலம் சுவாசிப்பவை', 'நான்கு அறை இதயம் கொண்டவை'], explanation: 'ஜெல்லி மீன் (குழியுடலி), நட்சத்திர மீன் (முட்தோலி) ஆகியவற்றுக்கு முதுகெலும்பு இல்லை; மீன்கள் முதுகெலும்பிகள்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V.7, p. 209', answer: 0,
    en: { q: 'Frogs are called amphibians because they', options: ['are adapted to live both on land and in water', 'have a two-chambered heart', 'lay eggs with hard shells', 'are warm-blooded'], explanation: 'Amphi means both and bios means life: amphibians have dual adaptation to land and water.' },
    ta: { q: 'தவளைகள் இரு வாழ்விகள் என அழைக்கப்படுவது ஏன்?', options: ['அவை நிலத்திலும் நீரிலும் வாழத் தகவமைந்துள்ளன', 'அவற்றுக்கு இரண்டு அறை இதயம் உள்ளது', 'அவை கடினமான ஓடுடைய முட்டைகளை இடுகின்றன', 'அவை வெப்ப இரத்தப் பிராணிகள்'], explanation: 'ஆம்ஃபி – இரண்டு, பயாஸ் – வாழ்க்கை; இரு வாழ்விகள் நிலம், நீர் இரண்டிலும் வாழத் தகவமைந்துள்ளன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.4, p. 209', answer: 0,
    en: { q: 'Which is a characteristic feature of fishes?', options: ['A two-chambered heart and respiration through gills', 'A body covered with feathers', 'Mammary glands and external ears', 'A three-chambered heart and moist skin'], explanation: 'Fishes have scales, paired and median fins, gills and a two-chambered heart.' },
    ta: { q: 'மீன்களின் சிறப்புப் பண்பு எது?', options: ['இரண்டு அறை இதயமும் செவுள் சுவாசமும்', 'இறகுகளால் மூடப்பட்ட உடல்', 'பால் சுரப்பிகளும் புறச்செவிகளும்', 'மூன்று அறை இதயமும் ஈரத்தோலும்'], explanation: 'மீன்களுக்குச் செதில்கள், இணை மற்றும் நடுத் துடுப்புகள், செவுள்கள், இரண்டு அறை இதயம் உள்ளன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.6, p. 209', answer: 0,
    en: { q: 'How are the limbs of birds adapted for avian life?', options: ['Forelimbs form wings; hindlimbs are for walking, perching or swimming', 'Forelimbs are for perching; hindlimbs form wings', 'Both pairs of limbs form wings', 'Forelimbs are absent; hindlimbs form wings'], explanation: 'In birds the forelimbs are modified into wings for flight and the hindlimbs are adapted for walking, perching or swimming.' },
    ta: { q: 'பறவைகளின் கால்கள் பறத்தலுக்கு எவ்வாறு தகவமைந்துள்ளன?', options: ['முன்னங்கால்கள் இறக்கைகளாகவும், பின்னங்கால்கள் நடக்க, மரக்கிளையில் அமர, நீந்தவும் பயன்படுகின்றன', 'முன்னங்கால்கள் அமரவும், பின்னங்கால்கள் இறக்கைகளாகவும் உள்ளன', 'இரு ஜோடிக் கால்களும் இறக்கைகளாக உள்ளன', 'முன்னங்கால்கள் இல்லை; பின்னங்கால்கள் இறக்கைகளாக உள்ளன'], explanation: 'பறவைகளில் முன்னங்கால்கள் இறக்கைகளாக மாறியுள்ளன; பின்னங்கால்கள் நடக்க, அமர, நீந்தத் தகவமைந்துள்ளன.' },
  },
  {
    difficulty: 'medium', source: '§17.1.1, p. 200', answer: 0, imageUrl: `${IMG}/symmetry.png`,
    en: { q: 'In the figure, the Hydra on the left can be cut into similar halves along any plane through its central axis. This is', options: ['radial symmetry', 'bilateral symmetry', 'asymmetry', 'metameric segmentation'], explanation: 'In radial symmetry body parts are arranged around the central axis; the turtle on the right shows bilateral symmetry.' },
    ta: { q: 'படத்தில் இடப்புறம் உள்ள ஹைட்ராவை மைய அச்சு வழியாக எந்தத் திசையில் வெட்டினாலும் ஒத்த பாதிகள் கிடைக்கின்றன. இது', options: ['ஆரச்சமச்சீர்', 'இருபக்கச் சமச்சீர்', 'சமச்சீரற்ற அமைப்பு', 'கண்ட அமைப்பு'], explanation: 'ஆரச்சமச்சீரில் உடல் உறுப்புகள் மைய அச்சைச் சுற்றி அமைந்துள்ளன; வலப்புற ஆமை இருபக்கச் சமச்சீர் உடையது.' },
  },
  {
    difficulty: 'medium', source: '§17.1.1, p. 201', answer: 0,
    en: { q: 'Based on the coelom, the roundworm is a', options: ['pseudocoelomate', 'acoelomate', 'eucoelomate', 'diploblast without coelom'], explanation: 'Roundworms have a false body cavity (pseudocoelom); tapeworms are acoelomates and earthworms true coelomates.' },
    ta: { q: 'உடற்குழியின் அடிப்படையில் உருளைப்புழு', options: ['பொய் உடற்குழியுடையது', 'உடற்குழியற்றது', 'உண்மையான உடற்குழியுடையது', 'உடற்குழியற்ற ஈரடுக்கு உயிரி'], explanation: 'உருளைப்புழுக்களுக்குப் பொய்யான உடற்குழி உண்டு; நாடாப்புழு உடற்குழியற்றது; மண்புழு உண்மையான உடற்குழியுடையது.' },
  },
  {
    difficulty: 'medium', source: '§17.2.6, p. 203', answer: 0,
    en: { q: 'The periodic casting off and regrowing of the chitinous exoskeleton in arthropods is called', options: ['moulting', 'metamorphosis', 'regeneration', 'polymorphism'], explanation: 'Arthropods shed their chitin exoskeleton as they grow; this is moulting.' },
    ta: { q: 'கணுக்காலிகளில் கைட்டின் புறச்சட்டகம் குறிப்பிட்ட கால இடைவெளியில் உதிர்ந்து மீண்டும் உருவாவது', options: ['தோலுரித்தல்', 'உருமாற்றம்', 'இழப்பு மீட்டல்', 'பல்லுருவ அமைப்பு'], explanation: 'வளர்ச்சியின்போது கணுக்காலிகள் கைட்டின் உறையை உதிர்க்கின்றன; இதுவே தோலுரித்தல்.' },
  },
  {
    difficulty: 'medium', source: '§17.2.7, p. 204', answer: 0, imageUrl: `${IMG}/garden-snail.png`,
    en: { q: 'The animal shown has a soft unsegmented body with a muscular foot and a hard shell secreted by the mantle. It belongs to phylum', options: ['Mollusca', 'Annelida', 'Arthropoda', 'Echinodermata'], explanation: 'The garden snail is a mollusc: soft body, muscular foot, mantle and calcareous shell.' },
    ta: { q: 'படத்தில் உள்ள விலங்கு கண்டமற்ற மென்மையான உடல், தசைப் பாதம், மேன்டில் சுரக்கும் கடின ஓடு ஆகியவற்றைக் கொண்டது. இது எந்தத் தொகுதி?', options: ['மெல்லுடலிகள்', 'வளைதசைப்புழுக்கள்', 'கணுக்காலிகள்', 'முட்தோலிகள்'], explanation: 'தோட்ட நத்தை மெல்லுடலி: மென்மையான உடல், தசைப் பாதம், மேன்டில், சுண்ணாம்பு ஓடு.' },
  },
  {
    difficulty: 'medium', source: '§17.3.2, p. 205', answer: 0,
    en: { q: 'The heart of an amphibian has', options: ['two auricles and one ventricle', 'one auricle and one ventricle', 'two auricles and two ventricles', 'one auricle and two ventricles'], explanation: 'Amphibians have a three-chambered heart with two auricles and one ventricle.' },
    ta: { q: 'இரு வாழ்விகளின் இதயத்தில் உள்ளவை', options: ['இரண்டு ஆரிக்கிள்கள், ஒரு வென்ட்ரிக்கிள்', 'ஒரு ஆரிக்கிள், ஒரு வென்ட்ரிக்கிள்', 'இரண்டு ஆரிக்கிள்கள், இரண்டு வென்ட்ரிக்கிள்கள்', 'ஒரு ஆரிக்கிள், இரண்டு வென்ட்ரிக்கிள்கள்'], explanation: 'இரு வாழ்விகளின் இதயம் இரண்டு ஆரிக்கிள்கள், ஒரு வென்ட்ரிக்கிள் கொண்ட மூன்று அறை இதயம்.' },
  },
  {
    difficulty: 'medium', source: '§17.2.6, p. 203 (Do you know?)', answer: 0,
    en: { q: "The name centipede means 'hundred legs', but most species actually have about", options: ['30 pairs of legs', '100 pairs of legs', '1000 legs', '8 pairs of legs'], explanation: 'Most centipedes have only 30 pairs of legs; millipedes have two pairs of legs on each segment.' },
    ta: { q: 'சென்டிபீட் (பூரான்) என்பதற்கு நூறு கால்கள் என்று பொருள். ஆனால் பெரும்பாலானவை உண்மையில் பெற்றுள்ளவை', options: ['30 இணைக் கால்கள்', '100 இணைக் கால்கள்', '1000 கால்கள்', '8 இணைக் கால்கள்'], explanation: 'பெரும்பாலான பூரான்களுக்கு 30 இணைக் கால்கள் மட்டுமே; மரவட்டைகளுக்கு ஒவ்வொரு கண்டத்திலும் இரு இணைக் கால்கள் உண்டு.' },
  },
  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise I.6, p. 208', answer: 0,
    en: { q: 'The hermaphrodite organisms are', options: ['Hydra, tapeworm, earthworm, Ascidian', 'Hydra, tapeworm, earthworm, Amphioxus', 'Hydra, tapeworm, earthworm, Balanoglossus', 'Hydra, tapeworm, Ascaris, earthworm'], explanation: 'Hydra, tapeworm, earthworm and Ascidian bear both sex organs; Ascaris (roundworm) has separate sexes.' },
    ta: { q: 'இருபால் (Hermaphrodite) உயிரிகள் எவை?', options: ['ஹைட்ரா, நாடாப்புழு, மண்புழு, அசிடியன்', 'ஹைட்ரா, நாடாப்புழு, மண்புழு, ஆம்பியாக்சஸ்', 'ஹைட்ரா, நாடாப்புழு, மண்புழு, பலனோகிளாசஸ்', 'ஹைட்ரா, நாடாப்புழு, அஸ்காரிஸ், மண்புழு'], explanation: 'ஹைட்ரா, நாடாப்புழு, மண்புழு, அசிடியன் ஆகியவை இருபால் உயிரிகள்; அஸ்காரிஸ் (உருளைப்புழு) தனிப்பால் உயிரி.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VI.1, p. 209', answer: 0,
    en: { q: 'Which set of features describes phylum Annelida?', options: ['Body divided into metameres, first true coelomates, setae and parapodia for locomotion', 'Body round and unsegmented, pseudocoelom, sexes separate', 'Flat body, acoelomate, flame cells for excretion', 'Jointed legs, chitin exoskeleton, open circulatory system'], explanation: 'Annelids are segmented (metameres joined by annuli), the first true coelomates, and move by setae and parapodia.' },
    ta: { q: 'வளைதசைப்புழுக்கள் தொகுதியை விவரிக்கும் பண்புகள் எவை?', options: ['மெட்டாமியர்கள் எனும் கண்டங்கள், முதல் உண்மையான உடற்குழி, சீட்டா, பாரபோடியா மூலம் இடப்பெயர்ச்சி', 'உருளை வடிவக் கண்டமற்ற உடல், பொய் உடற்குழி, தனிப்பால் உயிரிகள்', 'தட்டையான உடல், உடற்குழியற்றவை, சுடர் செல்கள் மூலம் கழிவு நீக்கம்', 'இணைப்புக் கால்கள், கைட்டின் புறச்சட்டகம், திறந்த வகை இரத்த ஓட்டம்'], explanation: 'வளைதசைப்புழுக்கள் மெட்டாமியர்களாகப் பிரிந்தவை; முதல் உண்மையான உடற்குழி உயிரிகள்; சீட்டா, பாரபோடியா மூலம் இடம்பெயர்கின்றன.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VI.2, p. 209', answer: 0,
    en: { q: 'Which correctly differentiates flatworms from roundworms?', options: ['Flatworms are acoelomate hermaphrodites; roundworms are pseudocoelomates with separate sexes', 'Flatworms are pseudocoelomates; roundworms are acoelomates', 'Flatworms have separate sexes; roundworms are hermaphrodites', 'Flatworms are diploblastic; roundworms are triploblastic'], explanation: 'Both are triploblastic and bilateral, but flatworms lack a body cavity and are hermaphrodites, while roundworms have a pseudocoelom and separate sexes.' },
    ta: { q: 'தட்டைப்புழுக்களையும் உருளைப்புழுக்களையும் சரியாக வேறுபடுத்துவது எது?', options: ['தட்டைப்புழுக்கள் உடற்குழியற்ற இருபால் உயிரிகள்; உருளைப்புழுக்கள் பொய் உடற்குழியுடைய தனிப்பால் உயிரிகள்', 'தட்டைப்புழுக்கள் பொய் உடற்குழியுடையவை; உருளைப்புழுக்கள் உடற்குழியற்றவை', 'தட்டைப்புழுக்கள் தனிப்பால் உயிரிகள்; உருளைப்புழுக்கள் இருபால் உயிரிகள்', 'தட்டைப்புழுக்கள் ஈரடுக்கு உயிரிகள்; உருளைப்புழுக்கள் மூவடுக்கு உயிரிகள்'], explanation: 'இரண்டும் மூவடுக்கு, இருபக்கச் சமச்சீர் உயிரிகள்; தட்டைப்புழுக்கள் உடற்குழியற்ற இருபால் உயிரிகள், உருளைப்புழுக்கள் பொய் உடற்குழியுடைய தனிப்பால் உயிரிகள்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VI.3, p. 209', answer: 0,
    en: { q: 'In the flow chart of phylum Chordata, the three subphyla are', options: ['Urochordata, Cephalochordata and Vertebrata', 'Hemichordata, Urochordata and Vertebrata', 'Cyclostomata, Pisces and Vertebrata', 'Urochordata, Cephalochordata and Hemichordata'], explanation: 'Chordata splits into Urochordata (Ascidian), Cephalochordata (Amphioxus) and Vertebrata; Hemichordata is a separate non-chordate phylum.' },
    ta: { q: 'முதுகு நாணுள்ளவை தொகுதியின் வழிமுறைப் படத்தில் உள்ள மூன்று துணைத்தொகுதிகள்', options: ['வால்முதுகுநாணிகள், தலைமுதுகுநாணிகள், முதுகெலும்பிகள்', 'அரைநாணிகள், வால்முதுகுநாணிகள், முதுகெலும்பிகள்', 'வட்டவாயுடையன, மீன்கள், முதுகெலும்பிகள்', 'வால்முதுகுநாணிகள், தலைமுதுகுநாணிகள், அரைநாணிகள்'], explanation: 'முதுகு நாணுள்ளவை வால்முதுகுநாணிகள் (அசிடியன்), தலைமுதுகுநாணிகள் (ஆம்பியாக்சஸ்), முதுகெலும்பிகள் எனப் பிரிகின்றன; அரைநாணிகள் தனித் தொகுதி.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VII.1, p. 209', answer: 0,
    en: { q: 'How do the two groups of prochordates differ?', options: ['In Urochordata the notochord is only in the tail of the larva; in Cephalochordata it runs the whole length of the body', 'In Urochordata the notochord runs the whole body; in Cephalochordata it is only in the tail', 'Urochordata have a backbone; Cephalochordata do not', 'Urochordata are free-swimming adults; Cephalochordata are sessile adults'], explanation: 'Ascidian (Urochordata) has a notochord only in the tail of its free-living larva and the adult is sessile; Amphioxus (Cephalochordata) keeps it from head to tail.' },
    ta: { q: 'முன்முதுகுநாணிகளின் இரு பிரிவுகளும் எவ்வாறு வேறுபடுகின்றன?', options: ['வால்முதுகுநாணிகளில் முதுகு நாண் லார்வாவின் வாலில் மட்டும்; தலைமுதுகுநாணிகளில் உடல் முழுவதும் நீண்டுள்ளது', 'வால்முதுகுநாணிகளில் உடல் முழுவதும்; தலைமுதுகுநாணிகளில் வாலில் மட்டும்', 'வால்முதுகுநாணிகளுக்கு முதுகெலும்பு உண்டு; தலைமுதுகுநாணிகளுக்கு இல்லை', 'வால்முதுகுநாணிகளின் முதிர் உயிரிகள் நீந்துபவை; தலைமுதுகுநாணிகளின் முதிர் உயிரிகள் ஒட்டி வாழ்பவை'], explanation: 'அசிடியனில் (வால்முதுகுநாணி) முதுகு நாண் லார்வாவின் வாலில் மட்டும்; முதிர் உயிரி ஒட்டி வாழும். ஆம்பியாக்சஸில் (தலைமுதுகுநாணி) தலை முதல் வால் வரை நீண்டுள்ளது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VII.2, p. 209', answer: 0,
    en: { q: 'Which statements about phylum Arthropoda are correct?\n(i) The exoskeleton is made of chitin.\n(ii) Blood flows only inside blood vessels.\n(iii) The body cavity is filled with haemolymph.\n(iv) Excretion is by Malpighian tubules or green glands.', options: ['(i), (iii) and (iv)', '(i), (ii) and (iii)', '(ii) and (iv) only', '(i) and (ii) only'], explanation: 'Arthropods have an open circulatory system: blood (haemolymph) does not flow in vessels. The other three statements are correct.' },
    ta: { q: 'கணுக்காலிகள் தொகுதி பற்றிய சரியான கூற்றுகள் எவை?\n(i) புறச்சட்டகம் கைட்டினால் ஆனது.\n(ii) இரத்தம் இரத்தக் குழல்களுக்குள் மட்டுமே ஓடுகிறது.\n(iii) உடற்குழி ஹீமோலிம்ப் எனும் திரவத்தால் நிரம்பியுள்ளது.\n(iv) மால்பீஜியன் குழல்கள் அல்லது பச்சைச் சுரப்பிகள் மூலம் கழிவு நீக்கம் நிகழ்கிறது.', options: ['(i), (iii), (iv)', '(i), (ii), (iii)', '(ii), (iv) மட்டும்', '(i), (ii) மட்டும்'], explanation: 'கணுக்காலிகளில் திறந்த வகை இரத்த ஓட்டம்; இரத்தம் குழல்களுக்குள் ஓடுவதில்லை. மற்ற மூன்று கூற்றுகளும் சரி.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VI.5, p. 209', answer: 0,
    en: { q: 'Which pair best shows how amphibians use both water and land?', options: ['Eggs are laid in water and tadpoles live there; adults breathe with lungs and skin on land', 'Eggs with hard shells are laid on land; adults live only in water', 'They have gills throughout life and never leave water', 'They are warm-blooded and fly between land and water'], explanation: 'Amphibians lay eggs in water, where gill-breathing tadpoles develop; adults live on land using lungs, moist skin and buccopharynx.' },
    ta: { q: 'இரு வாழ்விகள் நீரையும் நிலத்தையும் எவ்வாறு பயன்படுத்துகின்றன என்பதைச் சிறப்பாகக் காட்டுவது எது?', options: ['முட்டைகள் நீரில் இடப்பட்டு தலைப்பிரட்டைகள் நீரில் வாழ்கின்றன; முதிர் உயிரிகள் நிலத்தில் நுரையீரல், தோல் மூலம் சுவாசிக்கின்றன', 'கடின ஓடுடைய முட்டைகள் நிலத்தில் இடப்படுகின்றன; முதிர் உயிரிகள் நீரில் மட்டும் வாழ்கின்றன', 'வாழ்நாள் முழுவதும் செவுள்கள் கொண்டு நீரை விட்டு வெளியேறுவதில்லை', 'வெப்ப இரத்தப் பிராணிகளாக நிலத்துக்கும் நீருக்கும் இடையே பறக்கின்றன'], explanation: 'இரு வாழ்விகள் நீரில் முட்டையிடுகின்றன; செவுள் சுவாசிக்கும் தலைப்பிரட்டைகள் நீரில் வளர்கின்றன; முதிர் உயிரிகள் நுரையீரல், ஈரத்தோல் மூலம் நிலத்தில் வாழ்கின்றன.' },
  },
  {
    difficulty: 'hard', source: '§17.2.9, p. 204', answer: 0, imageUrl: `${IMG}/balanoglossus.png`,
    en: { q: 'The marine worm-like animal shown (acorn worm) has gill slits but no notochord, and is a ciliary feeder. It belongs to', options: ['Hemichordata', 'Annelida', 'Cephalochordata', 'Aschelminthes'], explanation: 'Balanoglossus is a hemichordate: it shows both non-chordate and chordate features, with gill slits but no notochord.' },
    ta: { q: 'படத்தில் உள்ள புழு போன்ற கடல் விலங்கு (ஏகார்ன் புழு) செவுள் பிளவுகளைக் கொண்டது, ஆனால் முதுகு நாண் இல்லை; குறுஇழை வழி உணவூட்டி. இது எந்தத் தொகுதி?', options: ['அரைநாணிகள்', 'வளைதசைப்புழுக்கள்', 'தலைமுதுகுநாணிகள்', 'உருளைப்புழுக்கள்'], explanation: 'பலனோகிளாசஸ் அரைநாணி; முதுகு நாணற்றவை, முதுகு நாணுள்ளவை இரண்டின் பண்புகளும் உண்டு; செவுள் பிளவுகள் உண்டு, முதுகு நாண் இல்லை.' },
  },
  {
    difficulty: 'hard', source: '§17.2.8, p. 204', answer: 1,
    en: { q: 'Assertion: Adult starfish are radially symmetrical.\nReason: The larvae of echinoderms are bilaterally symmetrical.', options: AR_EN, explanation: 'Both statements are true, but the bilateral larva does not explain the radial adult; they are two separate facts.' },
    ta: { q: 'கூற்று: முதிர்ந்த நட்சத்திர மீன்கள் ஆரச்சமச்சீர் உடையவை.\nகாரணம்: முட்தோலிகளின் லார்வாக்கள் இருபக்கச் சமச்சீர் உடையவை.', options: AR_TA, explanation: 'இரண்டும் சரி; ஆனால் லார்வாவின் இருபக்கச் சமச்சீர் முதிர் உயிரியின் ஆரச்சமச்சீரை விளக்கவில்லை.' },
  },
  {
    difficulty: 'hard', source: '§17.3.2, p. 206', answer: 0,
    en: { q: 'Assertion: Birds have a light body suited for flight.\nReason: Their bones are filled with air (pneumatic bones).', options: AR_EN, explanation: 'Both are true, and the air-filled bones reduce body weight, which explains the light body.' },
    ta: { q: 'கூற்று: பறவைகளின் உடல் பறப்பதற்கு ஏற்ற எடை குறைந்த உடலாகும்.\nகாரணம்: அவற்றின் எலும்புகள் காற்றால் நிரம்பியுள்ளன (காற்றெலும்புகள்).', options: AR_TA, explanation: 'இரண்டும் சரி; காற்றெலும்புகள் உடல் எடையைக் குறைப்பதே எடை குறைந்த உடலுக்குக் காரணம்.' },
  },
  {
    difficulty: 'hard', source: '§17.3.2, p. 206', answer: 2,
    en: { q: 'Assertion: All mammals give birth to young ones.\nReason: Female mammals have mammary glands that secrete milk.', options: AR_EN, explanation: 'The reason is true, but the assertion is false: the platypus and spiny anteater lay eggs.' },
    ta: { q: 'கூற்று: எல்லாப் பாலூட்டிகளும் குட்டிகளை ஈனுகின்றன.\nகாரணம்: பெண் பாலூட்டிகளில் பால் சுரக்கும் பால் சுரப்பிகள் உள்ளன.', options: AR_TA, explanation: 'காரணம் சரி; ஆனால் கூற்று தவறு: பிளாட்டிபஸ், எறும்புண்ணி முட்டையிடுகின்றன.' },
  },
  {
    difficulty: 'hard', source: '§17.1, p. 200', answer: 0,
    en: { q: 'Arrange the taxonomic categories from the highest to the lowest.', options: ['Kingdom → Phylum → Class → Order → Family → Genus → Species', 'Kingdom → Class → Phylum → Order → Family → Species → Genus', 'Phylum → Kingdom → Class → Family → Order → Genus → Species', 'Kingdom → Phylum → Order → Class → Genus → Family → Species'], explanation: 'The hierarchy runs Kingdom, Phylum, Class, Order, Family, Genus and Species.' },
    ta: { q: 'வகைப்பாட்டுப் படிநிலைகளை உயர்நிலையிலிருந்து கீழ்நிலைக்கு வரிசைப்படுத்துக.', options: ['உலகம் → தொகுதி → வகுப்பு → வரிசை → குடும்பம் → பேரினம் → சிற்றினம்', 'உலகம் → வகுப்பு → தொகுதி → வரிசை → குடும்பம் → சிற்றினம் → பேரினம்', 'தொகுதி → உலகம் → வகுப்பு → குடும்பம் → வரிசை → பேரினம் → சிற்றினம்', 'உலகம் → தொகுதி → வரிசை → வகுப்பு → பேரினம் → குடும்பம் → சிற்றினம்'], explanation: 'படிநிலை: உலகம், தொகுதி, வகுப்பு, வரிசை, குடும்பம், பேரினம், சிற்றினம்.' },
  },
  {
    difficulty: 'hard', source: '§17.1, p. 200', answer: 0,
    en: { q: 'The Indian wolf (Canis pallipes) and the Indian jackal (Canis aures) cannot interbreed but are closely related. They belong to the same', options: ['genus but different species', 'species but different genera', 'species and genus', 'family but different orders'], explanation: 'Both share the genus name Canis, while pallipes and aures are different species.' },
    ta: { q: 'இந்திய ஓநாய் (கேனிஸ் பாலிப்ஸ்), இந்திய நரி (கேனிஸ் ஆரியஸ்) ஆகியவை நெருங்கிய தொடர்புடையவை, ஆனால் கலப்பினம் செய்ய இயலாதவை. இவை', options: ['ஒரே பேரினம், வேறுபட்ட சிற்றினங்கள்', 'ஒரே சிற்றினம், வேறுபட்ட பேரினங்கள்', 'ஒரே சிற்றினமும் பேரினமும்', 'ஒரே குடும்பம், வேறுபட்ட வரிசைகள்'], explanation: 'இரண்டுக்கும் பேரினப் பெயர் கேனிஸ்; பாலிப்ஸ், ஆரியஸ் என்பவை வேறு சிற்றினங்கள்.' },
  },
  {
    difficulty: 'hard', source: '§17.1.2, p. 202', answer: 0,
    en: { q: 'Which binomial name is written correctly?', options: ['Pavo cristatus', 'pavo cristatus', 'Pavo Cristatus', 'PAVO cristatus'], explanation: 'The genus name begins with a capital letter and the species name is written in small letters.' },
    ta: { q: 'சரியாக எழுதப்பட்ட இருசொற் பெயர் எது?', options: ['Pavo cristatus', 'pavo cristatus', 'Pavo Cristatus', 'PAVO cristatus'], explanation: 'பேரினப் பெயரின் முதல் எழுத்து பெரிய எழுத்தாகவும், சிற்றினப் பெயர் சிறிய எழுத்துகளிலும் எழுதப்படும்.' },
  },
  {
    difficulty: 'hard', source: '§17.2.2–17.2.5, p. 202–203', answer: 0,
    en: { q: 'Which statements are correct?\n(i) Coelenterates show polymorphism.\n(ii) Roundworms cause elephantiasis and ascariasis.\n(iii) Annelids are acoelomates.\n(iv) Most flatworms are parasites with suckers and hooks.', options: ['(i), (ii) and (iv)', '(i), (iii) and (iv)', '(ii) and (iii) only', '(i), (ii) and (iii)'], explanation: 'Annelids are the first true coelomates, not acoelomates; the other three statements are correct.' },
    ta: { q: 'சரியான கூற்றுகள் எவை?\n(i) குழியுடலிகள் பல்லுருவ அமைப்பைக் காட்டுகின்றன.\n(ii) உருளைப்புழுக்கள் யானைக்கால் நோய், அஸ்காரியாசிஸ் நோயைத் தோற்றுவிக்கின்றன.\n(iii) வளைதசைப்புழுக்கள் உடற்குழியற்றவை.\n(iv) பெரும்பாலான தட்டைப்புழுக்கள் உறிஞ்சிகள், கொக்கிகள் கொண்ட ஒட்டுண்ணிகள்.', options: ['(i), (ii), (iv)', '(i), (iii), (iv)', '(ii), (iii) மட்டும்', '(i), (ii), (iii)'], explanation: 'வளைதசைப்புழுக்கள் முதல் உண்மையான உடற்குழியுடைய உயிரிகள்; உடற்குழியற்றவை அல்ல. மற்ற மூன்றும் சரி.' },
  },
];
