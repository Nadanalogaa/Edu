// Tamil Nadu State Board, 9th Science, Unit 22 – World of Microbes (நுண்ணுயிரிகளின் உலகம்).
// source = section / exercise and printed page of the English-medium book.
import { BankQuestion, AR_EN, AR_TA } from './types';

const IMG = '/content/9/state_board/science/22';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.1, p. 270', answer: 0,
    en: { q: 'Which of the following is transmitted through air?', options: ['Tuberculosis', 'Meningitis', 'Typhoid', 'Cholera'], explanation: 'Tuberculosis spreads by droplet infection from the sputum of infected persons; typhoid and cholera are waterborne.' },
    ta: { q: 'கீழ்காண்பனவற்றுள் காற்றினால் பரப்பப்படுவது', options: ['காசநோய்', 'மூளைக்காய்ச்சல்', 'டைபாய்டு', 'காலரா'], explanation: 'காசநோய் பாதிக்கப்பட்டவரின் சளியிலுள்ள நோய்த்தொற்றுத் துளிகள் மூலம் காற்றில் பரவுகிறது; டைபாய்டு, காலரா நீர்வழி நோய்கள்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.3, p. 270', answer: 0,
    en: { q: 'Diphtheria affects the', options: ['throat', 'lungs', 'blood', 'liver'], explanation: 'Corynebacterium diphtheriae affects the upper respiratory tract – nose and throat.' },
    ta: { q: 'டிப்தீரியா எதைத் தாக்குகிறது?', options: ['தொண்டை', 'நுரையீரல்', 'இரத்தம்', 'கல்லீரல்'], explanation: 'டிப்தீரியா மேல் சுவாசக் குழாயின் மூக்கு, தொண்டைப் பகுதிகளைத் தாக்குகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.4, p. 270', answer: 0,
    en: { q: 'The primary organ infected during tuberculosis is', options: ['lungs', 'bone marrow', 'intestine', 'spleen'], explanation: 'Mycobacterium tuberculosis damages the cells of the lungs.' },
    ta: { q: 'காசநோயினால் பாதிக்கப்படும் முதன்மை உறுப்பு', options: ['நுரையீரல்', 'எலும்பு மஜ்ஜை', 'குடல்', 'மண்ணீரல்'], explanation: 'காசநோய்க் கிருமி நுரையீரல் செல்களைச் சேதப்படுத்துகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.6, p. 270', answer: 0,
    en: { q: 'The organ affected by jaundice is the', options: ['liver', 'lungs', 'kidney', 'brain'], explanation: 'Jaundice (yellowness of eyes and skin) is a symptom of hepatitis, an inflammation of the liver.' },
    ta: { q: 'மஞ்சள் காமாலையால் பாதிக்கப்படும் உறுப்பு', options: ['கல்லீரல்', 'நுரையீரல்', 'சிறுநீரகம்', 'மூளை'], explanation: 'மஞ்சள் காமாலை கல்லீரல் அழற்சியான ஹெப்பாடைட்டிஸ் நோயின் அறிகுறி.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.2, p. 271', answer: 0,
    en: { q: 'Typhoid fever is caused by _____.', options: ['Salmonella typhi', 'Vibrio cholerae', 'Mycobacterium tuberculosis', 'Bordetella pertussis'], explanation: 'Typhoid (enteric fever) is caused by the bacterium Salmonella typhi and affects the small intestine.' },
    ta: { q: 'டைபாய்டு காய்ச்சல் _____ ஆல் ஏற்படுத்தப்படுகிறது.', options: ['சால்மோனெல்லா டைஃபி', 'விப்ரியோ காலரே', 'மைக்கோபாக்டீரியம் டியூபர்குளோசிஸ்', 'போர்டெடெல்லா பெர்டுசிஸ்'], explanation: 'டைபாய்டு சால்மோனெல்லா டைஃபி என்ற பாக்டீரியாவால் ஏற்படுகிறது; இது சிறுகுடலைப் பாதிக்கிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.3, p. 271', answer: 0,
    en: { q: 'H1N1 virus causes _____.', options: ['swine flu', 'bird flu', 'dengue', 'measles'], explanation: 'Influenza virus H1N1 causes swine flu; H5N1 causes bird flu.' },
    ta: { q: 'எச்1 என்1 (H1N1) வைரஸ் _____ ஐ உருவாக்குகிறது.', options: ['பன்றிக்காய்ச்சல்', 'பறவைக்காய்ச்சல்', 'டெங்கு', 'தட்டம்மை'], explanation: 'H1N1 வைரஸ் பன்றிக்காய்ச்சலை உண்டாக்கும்; H5N1 பறவைக்காய்ச்சலை உண்டாக்கும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.4, p. 271', answer: 0,
    en: { q: '_____ is a vector of the viral disease dengue.', options: ['Aedes aegypti', 'Female Anopheles', 'Culex', 'Housefly'], explanation: 'Dengue virus is transmitted by the Aedes aegypti mosquito, which bites during the day.' },
    ta: { q: 'டெங்கு என்ற வைரஸ் நோய் ஏற்படுவதற்கு _____ ஒரு கடத்தியாகச் செயலாற்றுகிறது.', options: ['ஏடிஸ் எஜிப்டி கொசு', 'பெண் அனோஃபிலிஸ் கொசு', 'கியூலெக்ஸ் கொசு', 'வீட்டு ஈ'], explanation: 'டெங்கு வைரஸ் பகலில் கடிக்கும் ஏடிஸ் எஜிப்டி கொசுவால் பரப்பப்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.5, p. 271', answer: 0,
    en: { q: '_____ vaccine gives considerable protection against tuberculosis.', options: ['BCG', 'MMR', 'DPT', 'TAB'], explanation: 'BCG (Bacillus Calmette Guerin) uses weakened bacilli to immunise against tuberculosis.' },
    ta: { q: '_____ என்ற தடுப்பூசி காசநோய்க்கு போதுமான பாதுகாப்பினை வழங்குகிறது.', options: ['பி.சி.ஜி (BCG)', 'எம்.எம்.ஆர் (MMR)', 'டி.பி.டி (DPT)', 'டி.ஏ.பி (TAB)'], explanation: 'வலுவிழக்கச் செய்யப்பட்ட பேசில்லைகளைக் கொண்ட பி.சி.ஜி தடுப்பூசி காசநோயிலிருந்து பாதுகாக்கிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise III.1, p. 271', answer: 0,
    en: { q: 'ORS stands for', options: ['Oral Rehydration Solution', 'Oral Restoration Serum', 'Organic Rehydration Salt', 'Oral Respiratory Solution'], explanation: 'ORS – Oral Rehydration Solution – is given to replace water and salts lost in cholera and diarrhoea.' },
    ta: { q: 'ORS என்பதன் விரிவாக்கம்', options: ['வாய்வழி நீரேற்றக் கரைசல் (Oral Rehydration Solution)', 'வாய்வழி மீட்புச் சீரம் (Oral Restoration Serum)', 'கரிம நீரேற்ற உப்பு (Organic Rehydration Salt)', 'வாய்வழி சுவாசக் கரைசல் (Oral Respiratory Solution)'], explanation: 'காலரா, வயிற்றுப்போக்கில் இழந்த நீர், உப்புகளை ஈடுசெய்ய வாய்வழி நீரேற்றக் கரைசல் (ORS) கொடுக்கப்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise III.2, p. 271', answer: 0,
    en: { q: 'HIV stands for', options: ['Human Immunodeficiency Virus', 'Human Infection Virus', 'Hepatitis Immune Virus', 'Human Immunity Vaccine'], explanation: 'HIV, the Human Immunodeficiency Virus, is the retrovirus that causes AIDS.' },
    ta: { q: 'HIV என்பதன் விரிவாக்கம்', options: ['ஹியூமன் இம்யூனோ டெஃபிஷியன்சி வைரஸ் (மனித நோய்த்தடைக்காப்புக் குறைபாட்டு வைரஸ்)', 'ஹியூமன் இன்ஃபெக்ஷன் வைரஸ்', 'ஹெப்பாடைட்டிஸ் இம்யூன் வைரஸ்', 'ஹியூமன் இம்யூனிட்டி வேக்சின்'], explanation: 'எய்ட்ஸ் நோயை உண்டாக்கும் ரெட்ரோ வைரஸ் HIV – Human Immunodeficiency Virus.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise III.3, p. 271', answer: 0,
    en: { q: 'DPT stands for', options: ['Diphtheria, Pertussis, Tetanus', 'Diphtheria, Polio, Typhoid', 'Dengue, Polio, Tuberculosis', 'Diphtheria, Pneumonia, Tetanus'], explanation: 'DPT, the triple vaccine, protects against diphtheria, pertussis (whooping cough) and tetanus.' },
    ta: { q: 'DPT என்பதன் விரிவாக்கம்', options: ['டிப்தீரியா, பெர்டுசிஸ் (கக்குவான் இருமல்), டெட்டனஸ்', 'டிப்தீரியா, போலியோ, டைபாய்டு', 'டெங்கு, போலியோ, காசநோய்', 'டிப்தீரியா, நிமோனியா, டெட்டனஸ்'], explanation: 'மூவகை தடுப்பூசியான DPT டிப்தீரியா, கக்குவான் இருமல், டெட்டனஸ் ஆகியவற்றிலிருந்து பாதுகாக்கிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise III.4, p. 271', answer: 0,
    en: { q: 'WHO stands for', options: ['World Health Organization', 'World Hygiene Organization', 'World Health Office', 'World Hospital Organization'], explanation: 'WHO, the World Health Organization, gave a schedule of immunization for children in 1970.' },
    ta: { q: 'WHO என்பதன் விரிவாக்கம்', options: ['உலக சுகாதார நிறுவனம் (World Health Organization)', 'உலக சுகாதாரப் பழக்க நிறுவனம் (World Hygiene Organization)', 'உலக சுகாதார அலுவலகம் (World Health Office)', 'உலக மருத்துவமனை நிறுவனம் (World Hospital Organization)'], explanation: 'உலக சுகாதார நிறுவனம் (WHO) 1970-ல் குழந்தைகளுக்கான நோய்த்தடுப்பு அட்டவணையை வழங்கியது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise III.5, p. 271', answer: 0,
    en: { q: 'BCG stands for', options: ['Bacillus Calmette Guerin', 'Bacterial Cell Growth', 'Bacillus Culture Germ', 'Biological Control Germ'], explanation: 'BCG – Bacillus Calmette Guerin – was prepared by the French workers Calmette and Guerin.' },
    ta: { q: 'BCG என்பதன் விரிவாக்கம்', options: ['பேசில்லஸ் கால்மெட் குயரின் (Bacillus Calmette Guerin)', 'பாக்டீரியல் செல் க்ரோத் (Bacterial Cell Growth)', 'பேசில்லஸ் கல்ச்சர் ஜெர்ம் (Bacillus Culture Germ)', 'பயாலஜிக்கல் கண்ட்ரோல் ஜெர்ம் (Biological Control Germ)'], explanation: 'BCG தடுப்பூசியை பிரெஞ்சு அறிஞர்கள் கால்மெட், குயரின் தயாரித்தனர்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise VII.1, p. 271', answer: 0,
    en: { q: 'A biological agent that causes disease to its host is called a', options: ['pathogen', 'vector', 'vaccine', 'antibiotic'], explanation: 'A pathogen (e.g. bacteria, virus) is a biological agent that causes disease to its host.' },
    ta: { q: 'ஓம்புயிரியில் நோயை உண்டாக்கும் உயிரியல் காரணி', options: ['நோய்க்கிருமி', 'கடத்தி', 'தடுப்பூசி', 'எதிர் உயிரி'], explanation: 'நோயை உண்டாக்கும் உயிரிப் பொருள் (எ.கா. பாக்டீரியா, வைரஸ்) நோய்க்கிருமி எனப்படும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise VII.2, p. 271', answer: 0,
    en: { q: 'Viruses that infect bacterial cells are called', options: ['bacteriophages', 'viroids', 'prions', 'retroviruses'], explanation: 'Bacteriophages, such as the T4 bacteriophage, infect bacteria.' },
    ta: { q: 'பாக்டீரியா செல்களைத் தாக்கும் வைரஸ்கள்', options: ['பாக்டீரியோஃபேஜ்கள்', 'வீரியாய்டுகள்', 'ப்ரியான்கள்', 'ரெட்ரோ வைரஸ்கள்'], explanation: 'T4 பாக்டீரியோஃபேஜ் போன்ற வைரஸ்கள் பாக்டீரியாக்களைத் தாக்குகின்றன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise VII.4, p. 271', answer: 0,
    en: { q: 'Infectious viral particles that contain only protein and no nucleic acid are', options: ['prions', 'viroids', 'virions', 'plasmids'], explanation: 'Prions contain only proteins and no nucleic acid; viroids are protein-free RNA.' },
    ta: { q: 'புரதத்தை மட்டுமே கொண்ட, நியூக்ளிக் அமிலம் இல்லாத வைரஸ் நுண்பொருட்கள்', options: ['ப்ரியான்கள்', 'வீரியாய்டுகள்', 'வைரியான்கள்', 'பிளாஸ்மிட்கள்'], explanation: 'ப்ரியான்களில் புரதம் மட்டுமே உள்ளது; வீரியாய்டு புரதமற்ற RNA ஆகும்.' },
  },
  {
    difficulty: 'easy', source: '§22.1.1, p. 259', answer: 0,
    en: { q: 'Rod shaped bacteria are called', options: ['bacilli', 'cocci', 'spirilla', 'vibrios'], explanation: 'Spherical bacteria are cocci, rod shaped are bacilli and spiral shaped are spirilla.' },
    ta: { q: 'கோல் (குச்சி) வடிவ பாக்டீரியங்கள்', options: ['பேசில்லைகள்', 'காக்கைகள்', 'ஸ்பைரில்லா', 'விப்ரியோக்கள்'], explanation: 'கோள வடிவம் காக்கைகள், கோல் வடிவம் பேசில்லைகள், திருகு வடிவம் ஸ்பைரில்லா.' },
  },
  {
    difficulty: 'easy', source: '§22.1.1, p. 259', answer: 0,
    en: { q: 'The first microbiologist, who designed his own microscope and observed plaque from his teeth in 1674, was', options: ['Antonie Van Leeuwenhoek', 'Robert Koch', 'Louis Pasteur', 'Edward Jenner'], explanation: 'Antonie Van Leeuwenhoek observed tiny moving organisms in his own tooth plaque in 1674.' },
    ta: { q: '1674-ல் தனது பல்லின் சிதைவுற்ற பகுதியை தானே வடிவமைத்த நுண்ணோக்கியில் உற்றுநோக்கிய முதல் நுண்ணுயிரியலாளர்', options: ['ஆன்டன் வான் லூவன்ஹுக்', 'ராபர்ட் கோச்', 'லூயி பாஸ்டர்', 'எட்வர்ட் ஜென்னர்'], explanation: 'ஆன்டன் வான் லூவன்ஹுக் 1674-ல் தன் பல்லில் நகரும் நுண்ணுயிர்களைக் கண்டார்.' },
  },
  {
    difficulty: 'easy', source: '§22.1.2, p. 259', answer: 0,
    en: { q: "The Latin word 'virus' means", options: ['venom or poisonous fluid', 'small life', 'living cell', 'germ seed'], explanation: "The term 'virus' in Latin means 'venom' or 'poisonous fluid'." },
    ta: { q: "இலத்தீன் மொழியில் 'வைரஸ்' என்பதன் பொருள்", options: ['நஞ்சு அல்லது விஷத் திரவம்', 'சிறிய உயிர்', 'உயிருள்ள செல்', 'கிருமி விதை'], explanation: "'வைரஸ்' என்ற இலத்தீன் சொல்லுக்கு 'நஞ்சு' அல்லது 'விஷத் திரவம்' என்று பொருள்." },
  },
  {
    difficulty: 'easy', source: '§22.1.3, p. 260', answer: 0,
    en: { q: 'In multicellular fungi, the thallus is called', options: ['mycelium', 'hypha', 'capsule', 'conidium'], explanation: 'The fungal body is a thallus; in multicellular forms it is a mycelium made of thin filaments called hyphae.' },
    ta: { q: 'பல செல் பூஞ்சைகளில் உடலம் (தாலஸ்) எவ்வாறு அழைக்கப்படுகிறது?', options: ['மைசீலியம்', 'ஹைஃபா', 'காப்சூல்', 'கொனிடியம்'], explanation: 'பல செல் பூஞ்சைகளின் உடலம் மைசீலியம்; இது ஹைஃபாக்கள் எனும் மெல்லிய இழைகளால் ஆனது.' },
  },
  {
    difficulty: 'easy', source: '§22.2.3, p. 261', answer: 0,
    en: { q: 'The first antibiotic, penicillin, was produced in 1929 by', options: ['Alexander Fleming', 'Louis Pasteur', 'Robert Koch', 'Ronald Ross'], explanation: 'Alexander Fleming produced penicillin, the first antibiotic, in 1929.' },
    ta: { q: '1929-ல் முதல் எதிர் உயிரியான பெனிசிலினை உருவாக்கியவர்', options: ['அலெக்சாண்டர் ஃபிளெமிங்', 'லூயி பாஸ்டர்', 'ராபர்ட் கோச்', 'ரொனால்டு ராஸ்'], explanation: 'அலெக்சாண்டர் ஃபிளெமிங் 1929-ல் பெனிசிலினை உருவாக்கினார்.' },
  },
  {
    difficulty: 'easy', source: '§22.3, p. 262', answer: 0,
    en: { q: 'World AIDS Day is observed on', options: ['1st December', '7th April', '25th April', '24th March'], explanation: 'World Health Day – 7 April, World Malaria Day – 25 April, World AIDS Day – 1 December, World Anti-TB Day – 24 March.' },
    ta: { q: 'உலக எய்ட்ஸ் தினம் கடைப்பிடிக்கப்படும் நாள்', options: ['டிசம்பர் 1', 'ஏப்ரல் 7', 'ஏப்ரல் 25', 'மார்ச் 24'], explanation: 'உலக சுகாதார தினம் – ஏப்ரல் 7, உலக மலேரியா தினம் – ஏப்ரல் 25, உலக எய்ட்ஸ் தினம் – டிசம்பர் 1, உலக காசநோய் தினம் – மார்ச் 24.' },
  },
  {
    difficulty: 'easy', source: '§22.3.3, p. 263', answer: 0,
    en: { q: 'The Father of Bacteriology, who showed in 1876 that anthrax of sheep is caused by Bacillus anthracis, was', options: ['Robert Koch', 'Louis Pasteur', 'Edward Jenner', 'Alexander Fleming'], explanation: 'Robert Koch, a German physician, first studied how pathogens cause disease.' },
    ta: { q: '1876-ல் செம்மறியாடுகளின் ஆந்த்ராக்ஸ் நோய் பேசில்லஸ் ஆந்த்ராசிஸால் ஏற்படுகிறது எனக் காட்டிய பாக்டீரியவியலின் தந்தை', options: ['ராபர்ட் கோச்', 'லூயி பாஸ்டர்', 'எட்வர்ட் ஜென்னர்', 'அலெக்சாண்டர் ஃபிளெமிங்'], explanation: 'ஜெர்மானிய மருத்துவர் ராபர்ட் கோச் நோய்க்கிருமிகள் நோயை உண்டாக்கும் விதத்தை முதலில் ஆய்வு செய்தார்.' },
  },
  {
    difficulty: 'easy', source: '§22.6.3, p. 265', answer: 0,
    en: { q: 'Dengue is also known as', options: ['break bone fever', 'enteric fever', 'serum hepatitis', 'whooping cough'], explanation: 'Dengue is called break bone fever because of intense joint and muscle pain.' },
    ta: { q: 'டெங்கு காய்ச்சலின் மற்றொரு பெயர்', options: ['எலும்பு முறிவுக் காய்ச்சல்', 'குடல் காய்ச்சல்', 'சீரம் ஹெப்பாடைட்டிஸ்', 'கக்குவான் இருமல்'], explanation: 'கடுமையான மூட்டு, தசை வலியால் டெங்கு எலும்பு முறிவுக் காய்ச்சல் எனப்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: '§22.9.1, p. 269', answer: 0,
    en: { q: 'The term vaccine was coined by', options: ['Louis Pasteur', 'Edward Jenner', 'Robert Koch', 'Stanley Prusiner'], explanation: 'Louis Pasteur coined the term vaccine; Edward Jenner introduced the process of vaccination.' },
    ta: { q: 'தடுப்பூசி (vaccine) என்ற சொல்லை உருவாக்கியவர்', options: ['லூயி பாஸ்டர்', 'எட்வர்ட் ஜென்னர்', 'ராபர்ட் கோச்', 'ஸ்டான்லி புருசினர்'], explanation: 'லூயி பாஸ்டர் தடுப்பூசி என்ற சொல்லை உருவாக்கினார்; ஜென்னர் தடுப்பூசி முறையை அறிமுகப்படுத்தினார்.' },
  },

  // ------------------------------------------------------------------ Medium
  {
    difficulty: 'medium', source: 'Book exercise I.2, p. 270', answer: 0,
    en: { q: 'One of the means of indirect transmission of a disease is', options: ['vectors', 'sneezing', 'coughing', 'droplet infection'], explanation: 'Sneezing, coughing and droplets spread disease directly; vectors are intermediate carriers, an indirect means.' },
    ta: { q: 'மறைமுகவழியில் நோய் பரவும் வழிமுறை', options: ['கடத்திகள்', 'தும்மல்', 'இருமல்', 'துளிர்தொற்று முறை'], explanation: 'தும்மல், இருமல், துளிகள் நேரடியாகப் பரப்புகின்றன; கடத்திகள் இடைநிலைக் கடத்தியாகச் செயல்படுவதால் மறைமுக வழி.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.5, p. 270', answer: 0,
    en: { q: 'Microbes that generally enter the body through the nose are likely to affect the', options: ['lungs', 'gut', 'liver', 'lymph nodes'], explanation: 'Airborne pathogens inhaled through the nose cause respiratory tract infections, mainly of the lungs.' },
    ta: { q: 'மூக்கின் வழியாக உடலினை அடையும் நுண்ணுயிரிகள் பெரும்பாலும் _____ தாக்கும்.', options: ['நுரையீரலை', 'குடலினை', 'கல்லீரலை', 'நிணநீர் முனைகளை'], explanation: 'மூக்கின் வழியாக உள்ளிழுக்கப்படும் காற்றுவழிக் கிருமிகள் சுவாசப் பாதையையும் நுரையீரலையும் பாதிக்கின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.7, p. 270', answer: 0,
    en: { q: 'Poliomyelitis virus enters the body through the', options: ['mouth and nose', 'skin', 'ears', 'eyes'], explanation: 'Polio spreads by droplets and secretions from nose and throat and by contaminated water, food and milk.' },
    ta: { q: 'குழந்தை நிலையில் வாதத்தினைத் தரும் போலியோமைலிடிஸ் வைரஸானது இவ்வழியாக உடலினுள் செல்கிறது', options: ['வாய் மற்றும் மூக்கு', 'தோல்', 'காதுகள்', 'கண்'], explanation: 'போலியோ வைரஸ் மூக்கு, தொண்டைச் சுரப்புகள், மாசடைந்த நீர், உணவு, பால் மூலம் பரவுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.1, p. 271', answer: 0,
    en: { q: '_____ break down organic matter and animal waste into ammonia.', options: ['Putrefying bacteria (decomposers)', 'Nitrifying bacteria', 'Denitrifying bacteria', 'Viruses'], explanation: 'Decomposers such as putrefying bacteria and fungi break down organic wastes into ammonia (ammonification).' },
    ta: { q: '_____ கரிமப் பொருட்கள் மற்றும் விலங்குக் கழிவுகளை அம்மோனியாவாக மாற்றுகின்றன.', options: ['அழுகவைக்கும் பாக்டீரியாக்கள் (சிதைப்பவைகள்)', 'நைட்ரேட்டாக்கும் பாக்டீரியாக்கள்', 'நைட்ரேட் வெளியேற்றும் பாக்டீரியாக்கள்', 'வைரஸ்கள்'], explanation: 'அழுகவைக்கும் பாக்டீரியாக்களும் பூஞ்சைகளும் கரிமக் கழிவுகளை அம்மோனியாவாக மாற்றுகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.6, p. 271', answer: 0,
    en: { q: 'Cholera is caused by _____ and malaria is caused by _____.', options: ['Vibrio cholerae; Plasmodium', 'Plasmodium; Vibrio cholerae', 'Salmonella typhi; Plasmodium', 'Vibrio cholerae; Wuchereria bancrofti'], explanation: 'Cholera is caused by the bacterium Vibrio cholerae; malaria by the protozoan Plasmodium.' },
    ta: { q: 'காலரா _____ ஆல் ஏற்படுகிறது; மலேரியா _____ ஆல் ஏற்படுகிறது.', options: ['விப்ரியோ காலரே; பிளாஸ்மோடியம்', 'பிளாஸ்மோடியம்; விப்ரியோ காலரே', 'சால்மோனெல்லா டைஃபி; பிளாஸ்மோடியம்', 'விப்ரியோ காலரே; உச்சரேரியா பான்கிராஃப்டி'], explanation: 'காலரா விப்ரியோ காலரே பாக்டீரியாவாலும், மலேரியா பிளாஸ்மோடியம் புரோட்டோசோவாவாலும் ஏற்படுகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.1, p. 271', answer: 0,
    en: { q: 'Pick out the odd one: AIDS, Retrovirus, Lymphocytes, BCG', options: ['BCG', 'AIDS', 'Retrovirus', 'Lymphocytes'], explanation: 'AIDS is caused by a retrovirus (HIV) that attacks lymphocytes; BCG is a vaccine against tuberculosis.' },
    ta: { q: 'தனித்திருப்பதைத் தெரிந்தெடு: எய்ட்ஸ், ரெட்ரோ வைரஸ், லிம்போசைட்ஸ், பி.சி.ஜி', options: ['பி.சி.ஜி', 'எய்ட்ஸ்', 'ரெட்ரோ வைரஸ்', 'லிம்போசைட்ஸ்'], explanation: 'எய்ட்ஸ் ரெட்ரோ வைரஸால் (HIV) ஏற்பட்டு லிம்போசைட்டுகளைத் தாக்குகிறது; பி.சி.ஜி காசநோய்த் தடுப்பூசி.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.2, p. 271', answer: 0,
    en: { q: 'Pick out the odd one: Rabies, Cholera, Common cold, Influenza', options: ['Cholera', 'Rabies', 'Common cold', 'Influenza'], explanation: 'Cholera is a bacterial disease (Vibrio cholerae); rabies, common cold and influenza are viral diseases.' },
    ta: { q: 'தனித்திருப்பதைத் தெரிந்தெடு: ரேபிஸ், காலரா, சாதாரண சளி, இன்ஃப்ளுயன்சா', options: ['காலரா', 'ரேபிஸ்', 'சாதாரண சளி', 'இன்ஃப்ளுயன்சா'], explanation: 'காலரா பாக்டீரியா நோய்; ரேபிஸ், சாதாரண சளி, இன்ஃப்ளுயன்சா ஆகியவை வைரஸ் நோய்கள்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V.1–2, p. 271', answer: 0,
    en: { q: 'Which statement is correct?', options: ['Rhizobium in the root nodules of leguminous plants fixes atmospheric nitrogen.', 'Non-infectious diseases spread from the patient to others by contact.', 'Rhizobium is a free-living fungus that adds phosphorus to soil.', 'Non-infectious diseases are always caused by viruses.'], explanation: 'Rhizobium is a symbiotic nitrogen fixer; non-infectious diseases stay with the person and do not spread (both book statements are true).' },
    ta: { q: 'சரியான கூற்று எது?', options: ['பருப்பு வகைத் தாவரங்களின் வேர் முடிச்சுகளில் வாழும் ரைசோபியம் வளிமண்டல நைட்ரஜனை நிலைநிறுத்துகிறது.', 'தொற்றாத நோய்கள் நோயாளியிடமிருந்து தொடர்பின் மூலம் பிறருக்குப் பரவும்.', 'ரைசோபியம் மண்ணில் பாஸ்பரஸைச் சேர்க்கும் தனித்து வாழும் பூஞ்சை.', 'தொற்றாத நோய்கள் எப்போதும் வைரஸ்களால் ஏற்படுகின்றன.'], explanation: 'ரைசோபியம் கூட்டுயிர் நைட்ரஜன் நிலைநிறுத்தி; தொற்றாத நோய்கள் பிறருக்குப் பரவுவதில்லை (புத்தகக் கூற்றுகள் இரண்டும் சரி).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise V.3–4, p. 271', answer: 0,
    en: { q: "'Vaccination was developed by Jenner' and 'Hepatitis B is more dangerous than Hepatitis A'. These statements are", options: ['both true', 'both false', 'first true, second false', 'first false, second true'], explanation: 'Edward Jenner introduced vaccination; Hepatitis B (serum hepatitis) can cause cirrhosis of liver, so it is more dangerous than Hepatitis A.' },
    ta: { q: "'தடுப்பூசி முறையை ஜென்னர் உருவாக்கினார்', 'ஹெப்பாடைட்டிஸ் B, ஹெப்பாடைட்டிஸ் A-ஐ விட அபாயகரமானது' – இக்கூற்றுகள்", options: ['இரண்டும் சரி', 'இரண்டும் தவறு', 'முதலாவது சரி, இரண்டாவது தவறு', 'முதலாவது தவறு, இரண்டாவது சரி'], explanation: 'எட்வர்ட் ஜென்னர் தடுப்பூசி முறையை அறிமுகப்படுத்தினார்; ஹெப்பாடைட்டிஸ் B கல்லீரல் சுருக்கத்தை (சிரோசிஸ்) உண்டாக்குவதால் அதிக அபாயகரமானது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VIII.1, p. 271', answer: 0,
    en: { q: 'How does a virion differ from a viroid?', options: ['A virion is a complete virus particle with protein coat; a viroid is protein-free pathogenic RNA.', 'A virion is protein-free RNA; a viroid has a protein coat.', 'A virion contains only protein; a viroid contains only DNA.', 'A virion infects only plants; a viroid infects only animals.'], explanation: 'A simple virus particle is a virion (nucleic acid + protein coat); viroids are protein-free pathogenic RNA found in plant cells.' },
    ta: { q: 'வைரியானுக்கும் வீரியாய்டுக்கும் உள்ள வேறுபாடு', options: ['வைரியான் புரத உறையுடைய முழு வைரஸ் துகள்; வீரியாய்டு புரதமற்ற நோய் உண்டாக்கும் RNA.', 'வைரியான் புரதமற்ற RNA; வீரியாய்டு புரத உறை உடையது.', 'வைரியானில் புரதம் மட்டும்; வீரியாய்டில் DNA மட்டும் உள்ளது.', 'வைரியான் தாவரங்களை மட்டும், வீரியாய்டு விலங்குகளை மட்டும் தாக்கும்.'], explanation: 'ஒரு எளிய வைரஸ் துகள் வைரியான்; தாவர செல்களில் நோயுண்டாக்கும் புரதமற்ற RNA வீரியாய்டு.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VIII.6, p. 271', answer: 0,
    en: { q: 'Which pair of mosquito and disease is correctly matched?', options: ['Culex – filaria', 'Anopheles – dengue', 'Aedes – malaria', 'Culex – chikungunya'], explanation: 'Culex transmits filaria, female Anopheles transmits malaria and Aedes aegypti transmits dengue and chikungunya.' },
    ta: { q: 'கொசு – நோய் சரியாகப் பொருத்தப்பட்ட இணை எது?', options: ['கியூலெக்ஸ் – ஃபிலேரியா', 'அனோஃபிலிஸ் – டெங்கு', 'ஏடிஸ் – மலேரியா', 'கியூலெக்ஸ் – சிக்குன்குனியா'], explanation: 'கியூலெக்ஸ் ஃபிலேரியாவையும், பெண் அனோஃபிலிஸ் மலேரியாவையும், ஏடிஸ் எஜிப்டி டெங்கு, சிக்குன்குனியாவையும் பரப்புகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VIII.5, p. 271', answer: 0,
    en: { q: 'Cholera, an acute diarrhoeal disease, is caused by Vibrio cholerae. One precaution against it is', options: ['hygienic sanitation and intake of ORS', 'using mosquito nets', 'screening blood before transfusion', 'avoiding open air bird markets'], explanation: 'Cholera spreads through contaminated food and water; hygienic sanitary conditions and ORS are the control measures.' },
    ta: { q: 'வயிற்றுப்போக்கு நோயான காலரா விப்ரியோ காலரேவால் ஏற்படுகிறது. இதைத் தடுக்கும் ஒரு முறை', options: ['சுகாதாரமான சூழல் மற்றும் ORS உட்கொள்ளுதல்', 'கொசுவலை பயன்படுத்துதல்', 'இரத்த மாற்றத்திற்கு முன் இரத்தத்தைச் சோதித்தல்', 'பறவைகள் விற்கும் திறந்த சந்தைகளைத் தவிர்த்தல்'], explanation: 'காலரா மாசடைந்த உணவு, நீர் மூலம் பரவுவதால் சுகாதாரமான சூழலும் ORS-ம் கட்டுப்பாட்டு முறைகள்.' },
  },
  {
    difficulty: 'medium', source: '§22.1.1, p. 259', answer: 0,
    en: { q: 'The small extra-chromosomal circular DNA found in the bacterial cytoplasm is the', options: ['plasmid', 'nucleoid', 'capsule', 'ribosome'], explanation: 'Plasmids are small circular DNA molecules outside the main chromosome; ribosomes are the site of protein synthesis.' },
    ta: { q: 'பாக்டீரியாவின் சைட்டோபிளாசத்தில் காணப்படும் குரோமோசோமிற்கு அப்பாற்பட்ட சிறிய வட்ட DNA', options: ['பிளாஸ்மிட்', 'நியூக்ளியாய்டு', 'காப்சூல்', 'ரைபோசோம்'], explanation: 'முதன்மைக் குரோமோசோமிற்கு வெளியே உள்ள சிறிய வட்ட DNA பிளாஸ்மிட்; ரைபோசோம்கள் புரதச் சேர்க்கை நடைபெறும் இடம்.' },
  },
  {
    difficulty: 'medium', source: '§22.1.2, p. 259', answer: 0,
    en: { q: 'Which of these is a non-living character of viruses?', options: ['They can be crystallised.', 'They have nucleic acid that can replicate.', 'They multiply in living host cells.', 'They attack specific hosts.'], explanation: 'Viruses can be crystallised and are inert outside hosts (non-living); replication and host specificity are living characters.' },
    ta: { q: 'வைரஸ்களின் உயிரற்ற பண்பு எது?', options: ['இவற்றைப் படிகமாக்க முடியும்.', 'இரட்டிப்படையும் நியூக்ளிக் அமிலம் உள்ளது.', 'உயிருள்ள ஓம்புயிரி செல்களில் பெருகும்.', 'குறிப்பிட்ட ஓம்புயிரிகளைத் தாக்கும்.'], explanation: 'படிகமாக்கப்படுதல், ஓம்புயிரிக்கு வெளியே செயலற்றிருத்தல் உயிரற்ற பண்புகள்; இரட்டிப்படைதல், பெருகுதல் உயிருள்ள பண்புகள்.' },
  },
  {
    difficulty: 'medium', source: '§22.1.2, p. 260', answer: 0,
    en: { q: 'Which is a plant virus?', options: ['Tobacco mosaic virus', 'Adenovirus', 'Polio virus', 'T4 bacteriophage'], explanation: 'TMV, cauliflower mosaic virus and potato virus infect plants; adenovirus and polio virus infect animals; T4 infects bacteria.' },
    ta: { q: 'தாவர வைரஸ் எது?', options: ['புகையிலை மொசைக் வைரஸ்', 'அடினோ வைரஸ்', 'போலியோ வைரஸ்', 'T4 பாக்டீரியோஃபேஜ்'], explanation: 'TMV, காலிஃபிளவர் மொசைக் வைரஸ் தாவரங்களைத் தாக்கும்; அடினோ, போலியோ விலங்கு வைரஸ்கள்; T4 பாக்டீரியாவைத் தாக்கும்.' },
  },
  {
    difficulty: 'medium', source: '§22.2.1, p. 261', answer: 0,
    en: { q: "Bacillus thuringiensis is used as a biopesticide because it", options: ["produces 'cry' protein that is toxic to insect larvae", 'fixes atmospheric nitrogen in root nodules', 'produces the antibiotic streptomycin', 'converts milk into curd'], explanation: "Bt produces 'cry' protein which kills insect larvae; its spores are sprayed on infected plants." },
    ta: { q: 'பேசில்லஸ் துரின்ஜியென்சிஸ் உயிரி பூச்சிக்கொல்லியாகப் பயன்படக் காரணம்', options: ["பூச்சி லார்வாக்களுக்கு நச்சான 'க்ரை' புரதத்தை உருவாக்குகிறது", 'வேர் முடிச்சுகளில் நைட்ரஜனை நிலைநிறுத்துகிறது', 'ஸ்ட்ரெப்டோமைசின் எதிர் உயிரியை உருவாக்குகிறது', 'பாலைத் தயிராக மாற்றுகிறது'], explanation: "Bt உருவாக்கும் 'க்ரை' புரதம் பூச்சி லார்வாக்களைக் கொல்கிறது; அதன் வித்துக்கள் தாவரங்களில் தெளிக்கப்படுகின்றன." },
  },
  {
    difficulty: 'medium', source: '§22.2.2, p. 261', answer: 0,
    en: { q: 'Oxalic acid, acetic acid and citric acid are produced by the fungus', options: ['Aspergillus niger', 'Saccharomyces cerevisiae', 'Penicillium notatum', 'Bacillus megaterium'], explanation: 'Aspergillus niger produces organic acids; Saccharomyces ferments grapes into wine; Bacillus megaterium cures tea and coffee.' },
    ta: { q: 'ஆக்சாலிக் அமிலம், அசிட்டிக் அமிலம், சிட்ரிக் அமிலம் ஆகியவற்றை உற்பத்தி செய்யும் பூஞ்சை', options: ['ஆஸ்பர்ஜில்லஸ் நைஜர்', 'சாக்கரோமைசஸ் செரிவிசியே', 'பெனிசிலியம் நொட்டேட்டம்', 'பேசில்லஸ் மெகாதீரியம்'], explanation: 'ஆஸ்பர்ஜில்லஸ் நைஜர் கரிம அமிலங்களை உருவாக்கும்; சாக்கரோமைசஸ் திராட்சையை ஒயினாக நொதிக்கச் செய்யும்.' },
  },
  {
    difficulty: 'medium', source: '§22.2.3, p. 261 (Table 22.1)', answer: 0,
    en: { q: 'Streptomycin is produced by', options: ['Streptomyces griseus', 'Streptomyces erythreus', 'Bacillus subtilis', 'Cephalosporium acremonium'], explanation: 'S. griseus – streptomycin, S. erythreus – erythromycin, B. subtilis – bacitracin, Cephalosporium – cephalosporin.' },
    ta: { q: 'ஸ்ட்ரெப்டோமைசின் எதிர் உயிரியை உருவாக்குவது', options: ['ஸ்ட்ரெப்டோமைசஸ் கிரிசியஸ்', 'ஸ்ட்ரெப்டோமைசஸ் எரித்ரியஸ்', 'பேசில்லஸ் சப்டிலிஸ்', 'செஃபலோஸ்போரியம் அக்ரிமோனியம்'], explanation: 'S. கிரிசியஸ் – ஸ்ட்ரெப்டோமைசின், S. எரித்ரியஸ் – எரித்ரோமைசின், B. சப்டிலிஸ் – பேசிட்ராசின்.' },
  },
  {
    difficulty: 'medium', source: '§22.3.1, p. 262', answer: 0,
    en: { q: 'A disease widely distributed on a global scale, such as AIDS, is called', options: ['pandemic', 'epidemic', 'endemic', 'sporadic'], explanation: 'Pandemic – global (AIDS); epidemic – many people in one region at the same time (influenza); endemic – a certain area, low incidence (goitre); sporadic – occasional.' },
    ta: { q: 'எய்ட்ஸ் போன்று உலக அளவில் பரவியுள்ள நோய்', options: ['உலகளாவிய பெருந்தொற்று (பேன்டெமிக்)', 'கொள்ளை நோய் (எபிடெமிக்)', 'உள்ளூர் நோய் (எண்டெமிக்)', 'ஆங்காங்கே தோன்றும் நோய் (ஸ்போராடிக்)'], explanation: 'உலகளாவியது பேன்டெமிக்; ஒரு பகுதியில் ஒரே நேரத்தில் பலரைத் தாக்குவது எபிடெமிக்; ஒரு பகுதியில் குறைவாகக் காணப்படுவது எண்டெமிக்.' },
  },
  {
    difficulty: 'medium', source: '§22.3.2, p. 262', answer: 0,
    en: { q: 'The interval between infection and the first appearance of the disease is the', options: ['incubation period', 'reservoir of infection', 'lactation period', 'booster period'], explanation: 'Incubation period may vary from a few hours to several days.' },
    ta: { q: 'நோய்த்தொற்று ஏற்பட்டதிலிருந்து நோயின் முதல் அறிகுறி தோன்றும் வரையிலான கால இடைவெளி', options: ['நோய் அரும்பும் காலம் (தொற்று காலம்)', 'நோய்த்தொற்றுத் தேக்கம்', 'பால் சுரக்கும் காலம்', 'ஊக்கத் தடுப்பூசிக் காலம்'], explanation: 'நோய் அரும்பும் காலம் சில மணி நேரம் முதல் பல நாட்கள் வரை மாறுபடும்.' },
  },
  {
    difficulty: 'medium', source: '§22.3.2, p. 262', answer: 0,
    en: { q: 'Which of these is a non-infectious (non-communicable) disease?', options: ['Diabetes', 'Influenza', 'Chickenpox', 'Pneumonia'], explanation: 'Non-infectious diseases are caused by internal factors – e.g. diabetes, obesity, cancer, goitre.' },
    ta: { q: 'தொற்றாத நோய் எது?', options: ['நீரிழிவு', 'இன்ஃப்ளுயன்சா', 'சின்னம்மை', 'நிமோனியா'], explanation: 'உட்காரணிகளால் ஏற்படும் நீரிழிவு, உடல் பருமன், புற்றுநோய், முன்கழுத்துக் கழலை ஆகியவை தொற்றாத நோய்கள்.' },
  },
  {
    difficulty: 'medium', source: '§22.4, p. 263 (Table 22.3)', answer: 0,
    en: { q: 'Enlargement of the parotid gland, making jaw movement difficult, is a symptom of', options: ['mumps', 'measles', 'common cold', 'chickenpox'], explanation: 'Mumps, caused by Myxovirus parotitis, enlarges the parotid gland.' },
    ta: { q: 'கன்னஉமிழ்நீர்ச் சுரப்பி பெரிதாதல், தாடையை அசைப்பதில் சிரமம் ஆகியவை எந்த நோயின் அறிகுறிகள்?', options: ['பொன்னுக்கு வீங்கி', 'தட்டம்மை', 'சாதாரண சளி', 'சின்னம்மை'], explanation: 'மிக்சோ வைரஸ் பரோடிடிஸால் ஏற்படும் பொன்னுக்கு வீங்கி கன்னஉமிழ்நீர்ச் சுரப்பியைப் பெரிதாக்குகிறது.' },
  },
  {
    difficulty: 'medium', source: '§22.6.1, p. 265', answer: 0,
    en: { q: 'Sir Ronald Ross received the Nobel Prize in 1902 for', options: ['proving that malaria is transmitted by mosquito', 'discovering penicillin', 'developing the BCG vaccine', 'showing that anthrax is caused by bacteria'], explanation: 'Ronald Ross identified the stages of the malarial parasite in the mosquito gut and proved mosquito transmission.' },
    ta: { q: 'சர் ரொனால்டு ராஸ் 1902-ல் நோபல் பரிசு பெறக் காரணமான கண்டுபிடிப்பு', options: ['மலேரியா கொசுவால் பரப்பப்படுகிறது என நிரூபித்தது', 'பெனிசிலினைக் கண்டறிந்தது', 'பி.சி.ஜி தடுப்பூசியை உருவாக்கியது', 'ஆந்த்ராக்ஸ் பாக்டீரியாவால் ஏற்படுகிறது எனக் காட்டியது'], explanation: 'கொசுவின் குடலில் மலேரியா ஒட்டுண்ணியின் வளர்நிலைகளைக் கண்டறிந்து மலேரியா கொசுவால் பரவுவதை ராஸ் நிரூபித்தார்.' },
  },
  {
    difficulty: 'medium', source: '§22.6.4, p. 266', answer: 0,
    en: { q: 'Elephantiasis, which affects the legs, scrotum and arms, is the chronic stage of', options: ['filariasis', 'malaria', 'dengue', 'chikungunya'], explanation: 'Filaria is caused by the nematode Wuchereria bancrofti, transmitted by Culex; its chronic stage is elephantiasis.' },
    ta: { q: 'கால்கள், விதைப்பை, கைகளைப் பாதிக்கும் யானைக்கால் நோய் எந்த நோயின் நாள்பட்ட நிலை?', options: ['ஃபிலேரியா', 'மலேரியா', 'டெங்கு', 'சிக்குன்குனியா'], explanation: 'கியூலெக்ஸ் கொசுவால் பரவும் உச்சரேரியா பான்கிராஃப்டி புழுவால் ஃபிலேரியா ஏற்படுகிறது; அதன் நாள்பட்ட நிலை யானைக்கால் நோய்.' },
  },
  {
    difficulty: 'medium', source: '§22.8.1, p. 267', answer: 0,
    en: { q: 'HIV weakens the body’s immunity because it attacks', options: ['white blood cells (lymphocytes)', 'red blood cells', 'liver cells', 'nerve cells'], explanation: 'HIV, a retrovirus, attacks lymphocytes and weakens the self-defence mechanism of the body.' },
    ta: { q: 'HIV உடலின் நோய் எதிர்ப்புத் திறனைக் குறைக்கக் காரணம், அது தாக்குவது', options: ['வெள்ளை இரத்த அணுக்கள் (லிம்போசைட்டுகள்)', 'சிவப்பு இரத்த அணுக்கள்', 'கல்லீரல் செல்கள்', 'நரம்பு செல்கள்'], explanation: 'ரெட்ரோ வைரஸான HIV லிம்போசைட்டுகளைத் தாக்கி உடலின் தற்காப்பு அமைப்பை பலவீனப்படுத்துகிறது.' },
  },
  {
    difficulty: 'medium', source: '§22.8, p. 268 (Table 22.7)', answer: 0,
    en: { q: 'Syphilis is caused by', options: ['Treponema pallidum', 'Neisseria gonorrhoeae', 'Herpes simplex virus', 'Human papilloma virus'], explanation: 'Syphilis – Treponema pallidum (bacterium); gonorrhoea – Neisseria; genital herpes – herpes simplex virus; genital warts – HPV.' },
    ta: { q: 'கிரந்திநோய் (சிஃபிலிஸ்) ஏற்படக் காரணம்', options: ['டிரிப்போனிமா பேலிடம்', 'நைசீரியா கொனோரியா', 'ஹெர்பிஸ் சிம்ப்ளக்ஸ் வைரஸ்', 'மனித பாப்பில்லோமா வைரஸ்'], explanation: 'சிஃபிலிஸ் – டிரிப்போனிமா பேலிடம்; மேக வெட்டை – நைசீரியா; பிறப்புறுப்பு அக்கி – ஹெர்பிஸ் வைரஸ்; பாலுண்ணி – HPV.' },
  },
  {
    difficulty: 'medium', source: '§22.9.1, p. 269', answer: 0,
    en: { q: 'Which is an example of a killed (inactivated) vaccine?', options: ['Typhoid vaccine', 'BCG vaccine', 'Oral polio vaccine', 'MMR vaccine'], explanation: 'Killed vaccines (typhoid, cholera, pertussis) need a primary dose and a booster; BCG and oral polio are live vaccines.' },
    ta: { q: 'கொல்லப்பட்ட (செயலிழந்த) தடுப்பூசிக்கு உதாரணம்', options: ['டைபாய்டு தடுப்பூசி', 'பி.சி.ஜி தடுப்பூசி', 'வாய்வழி போலியோ தடுப்பூசி', 'எம்.எம்.ஆர் தடுப்பூசி'], explanation: 'டைபாய்டு, காலரா, கக்குவான் இருமல் தடுப்பூசிகள் கொல்லப்பட்டவை; பி.சி.ஜி, வாய்வழி போலியோ உயிருள்ள தடுப்பூசிகள்.' },
  },

  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise VI, p. 271', answer: 0,
    en: { q: 'Match the following:\n1. Swine flu   2. Genital warts   3. AIDS   4. Tuberculosis\na. Human Papilloma virus   b. Human Immunodeficiency Virus   c. Mycobacterium   d. Influenza virus H1N1', options: ['1-d, 2-a, 3-b, 4-c', '1-a, 2-d, 3-b, 4-c', '1-d, 2-b, 3-a, 4-c', '1-c, 2-a, 3-b, 4-d'], explanation: 'Swine flu – H1N1; genital warts – HPV; AIDS – HIV; tuberculosis – Mycobacterium tuberculosis.' },
    ta: { q: 'பொருத்துக:\n1. பன்றிக்காய்ச்சல்   2. பிறப்புறுப்பு பாலுண்ணிகள்   3. எய்ட்ஸ்   4. காசநோய்\na. மனித பாப்பில்லோமா வைரஸ்   b. ஹெச்.ஐ.வி (HIV)   c. மைக்கோபாக்டீரியம்   d. இன்ஃப்ளுயன்சா வைரஸ் H1N1', options: ['1-d, 2-a, 3-b, 4-c', '1-a, 2-d, 3-b, 4-c', '1-d, 2-b, 3-a, 4-c', '1-c, 2-a, 3-b, 4-d'], explanation: 'பன்றிக்காய்ச்சல் – H1N1; பாலுண்ணி – HPV; எய்ட்ஸ் – HIV; காசநோய் – மைக்கோபாக்டீரியம்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise X.1, p. 271', answer: 0,
    en: { q: 'Assertion: Chicken pox is a disease indicated by scars and marks on the body. Reason: Chicken pox causes rashes on the face which further spread throughout the body.', options: AR_EN, explanation: 'Varicella zoster virus causes skin eruptions that start on the face and spread over the body, leaving scars – the reason explains the assertion.' },
    ta: { q: 'கூற்று: சின்னம்மை நோய் உடலில் வடுக்களாலும் தழும்புகளாலும் சுட்டிக்காட்டப்படுகிறது. காரணம்: சின்னம்மையானது முகத்தில் அரிப்பினை ஏற்படுத்தி உடலில் அனைத்து இடங்களிலும் பரவக்கூடியது.', options: AR_TA, explanation: 'வாரிசெல்லா சோஸ்டர் வைரஸ் முகத்தில் தொடங்கி உடல் முழுவதும் கொப்புளங்களை உண்டாக்கி வடுக்களை விட்டுச் செல்கிறது; காரணம் கூற்றை விளக்குகிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise X.2, p. 271', answer: 0,
    en: { q: 'Assertion: Dengue can be treated by intake of antibiotics. Reason: Antibiotics block the multiplication of viruses. Choose the correct option.', options: ['Both assertion and reason are false.', 'Both are true, and the reason explains the assertion.', 'The assertion is true but the reason is false.', 'The assertion is false but the reason is true.'], explanation: 'Dengue is viral; antibiotics act on microbes like bacteria, not viruses. Dengue is managed with paracetamol, rest and fluids – so both statements are false.' },
    ta: { q: 'கூற்று: எதிர் உயிர்பொருட்களை உட்கொள்வதால் டெங்கு நோயைக் குணமாக்கலாம். காரணம்: நோய் எதிர் உயிர் பொருட்கள் வைரஸ்கள் பெருகுவதைத் தடுக்கின்றன. சரியானதைத் தேர்ந்தெடு.', options: ['கூற்று, காரணம் இரண்டும் தவறு.', 'இரண்டும் சரி; காரணம் கூற்றை விளக்குகிறது.', 'கூற்று சரி; காரணம் தவறு.', 'கூற்று தவறு; காரணம் சரி.'], explanation: 'டெங்கு வைரஸ் நோய்; எதிர் உயிரிகள் வைரஸ்களைக் கட்டுப்படுத்தாது. பாராசிட்டமால், ஓய்வு, அதிக நீராகாரம் கொடுக்கப்படுகிறது – எனவே இரண்டும் தவறு.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VIII.2, p. 271', answer: 0,
    en: { q: 'The vector of the malarial parasite and the species causing malignant, fatal malaria are', options: ['female Anopheles mosquito; Plasmodium falciparum', 'female Anopheles mosquito; Plasmodium vivax', 'Aedes aegypti; Plasmodium falciparum', 'Culex mosquito; Plasmodium malariae'], explanation: 'Malaria spreads by the bite of the female Anopheles; of the four Plasmodium species, P. falciparum causes malignant and fatal malaria.' },
    ta: { q: 'மலேரியா ஒட்டுண்ணியின் கடத்தி, தீங்கான மற்றும் சாவுக்கேதுவான மலேரியாவை உண்டாக்கும் சிற்றினம் ஆகியவை', options: ['பெண் அனோஃபிலிஸ் கொசு; பிளாஸ்மோடியம் ஃபால்சிபாரம்', 'பெண் அனோஃபிலிஸ் கொசு; பிளாஸ்மோடியம் வைவாக்ஸ்', 'ஏடிஸ் எஜிப்டி; பிளாஸ்மோடியம் ஃபால்சிபாரம்', 'கியூலெக்ஸ் கொசு; பிளாஸ்மோடியம் மலேரியே'], explanation: 'மலேரியா பெண் அனோஃபிலிஸ் கொசுக்கடியால் பரவுகிறது; பிளாஸ்மோடியம் ஃபால்சிபாரம் சாவுக்கேதுவான மலேரியாவை உண்டாக்குகிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise IX.4, p. 271 (Table 22.8)', answer: 0,
    en: { q: 'According to the immunization schedule, which vaccines are given to a baby at the 6th, 10th and 14th weeks?', options: ['DPT and Polio', 'BCG and Measles', 'MMR and TAB', 'TT and TAB'], explanation: 'BCG is given at birth, oral polio at 15 days, DPT and Polio at 6, 10 and 14 weeks, and measles at 9–12 months.' },
    ta: { q: 'நோய்த்தடுப்பு அட்டவணைப்படி 6, 10, 14-வது வாரங்களில் குழந்தைக்கு வழங்கப்படும் தடுப்பூசிகள்', options: ['டி.பி.டி மற்றும் போலியோ', 'பி.சி.ஜி மற்றும் தட்டம்மை', 'எம்.எம்.ஆர் மற்றும் டி.ஏ.பி', 'டி.டி மற்றும் டி.ஏ.பி'], explanation: 'பிறந்தவுடன் பி.சி.ஜி, 15 நாளில் வாய்வழி போலியோ, 6, 10, 14-வது வாரங்களில் டி.பி.டி, போலியோ, 9–12 மாதங்களில் தட்டம்மை தடுப்பூசி.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise XI.2, p. 272', answer: 0,
    en: { q: 'Tejas suffered from typhoid while Sachin suffered from tuberculosis. Which disease could have caused more damage, and why?', options: ['Tuberculosis – it damages lung tissue, persists long and spreads to others through droplets.', 'Typhoid – it permanently destroys the lungs.', 'Typhoid – it spreads through air to everyone nearby.', 'Tuberculosis – it is a non-infectious disease with no cure.'], explanation: 'TB bacilli destroy lung cells, causing persistent cough and weight loss, and spread by droplet infection; typhoid affects the small intestine and responds to antibiotics and sanitation.' },
    ta: { q: 'தேஜஸ் டைபாய்டு நோயால், சச்சின் காசநோயால் பாதிக்கப்பட்டுள்ளனர். எந்த நோய் அதிக பாதிப்பை ஏற்படுத்தும்? ஏன்?', options: ['காசநோய் – நுரையீரல் திசுவைச் சேதப்படுத்தி, நீண்ட காலம் நீடித்து, துளிகள் மூலம் பிறருக்கும் பரவும்.', 'டைபாய்டு – நுரையீரலை நிரந்தரமாக அழிக்கும்.', 'டைபாய்டு – அருகிலுள்ள அனைவருக்கும் காற்றின் மூலம் பரவும்.', 'காசநோய் – மருந்தில்லாத தொற்றாத நோய்.'], explanation: 'காசநோய்க் கிருமி நுரையீரல் செல்களை அழித்து, தொடர் இருமல், எடை இழப்பை உண்டாக்கி, துளிகள் மூலம் பரவும்; டைபாய்டு சிறுகுடலைப் பாதித்து எதிர் உயிரிகளால் குணமாகும்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VIII.3, p. 271', answer: 0,
    en: { q: 'DPT is called a triple antigen because', options: ['one vaccine protects against three diseases – diphtheria, pertussis and tetanus', 'it is given in three doses at birth', 'it contains three live viruses – measles, mumps and rubella', 'it protects against typhoid, paratyphi A and paratyphi B'], explanation: 'DPT combines antigens against diphtheria, pertussis (whooping cough) and tetanus. MMR covers measles, mumps, rubella; TAB covers typhoid and paratyphi A and B.' },
    ta: { q: 'DPT மூவகை ஆண்டிஜென் என அழைக்கப்படக் காரணம்', options: ['ஒரே தடுப்பூசி டிப்தீரியா, கக்குவான் இருமல், டெட்டனஸ் ஆகிய மூன்று நோய்களிலிருந்து பாதுகாக்கிறது', 'பிறந்தவுடன் மூன்று தவணைகளில் வழங்கப்படுகிறது', 'தட்டம்மை, பொன்னுக்கு வீங்கி, ரூபெல்லா ஆகிய மூன்று உயிருள்ள வைரஸ்களைக் கொண்டது', 'டைபாய்டு, பாராடைஃபி A, B ஆகியவற்றிலிருந்து பாதுகாக்கிறது'], explanation: 'DPT டிப்தீரியா, கக்குவான் இருமல், டெட்டனஸ் ஆண்டிஜென்களைக் கொண்டது; MMR தட்டம்மை, பொன்னுக்கு வீங்கி, ரூபெல்லா; TAB டைபாய்டு வகைகள்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise IX.1, p. 271 (Fig. 22.2)', imageUrl: `${IMG}/bacteria-shapes.png`, answer: 0,
    en: { q: 'The three shapes of bacteria in the figure, from left to right, are', options: ['bacillus, coccus, spirillum', 'coccus, bacillus, spirillum', 'spirillum, coccus, bacillus', 'bacillus, spirillum, coccus'], explanation: 'Rod shaped bacteria are bacilli, spherical ones are cocci and spiral ones are spirilla.' },
    ta: { q: 'படத்தில் இடமிருந்து வலமாக உள்ள பாக்டீரியாக்களின் வடிவங்கள்', options: ['பேசில்லஸ், காக்கஸ், ஸ்பைரில்லம்', 'காக்கஸ், பேசில்லஸ், ஸ்பைரில்லம்', 'ஸ்பைரில்லம், காக்கஸ், பேசில்லஸ்', 'பேசில்லஸ், ஸ்பைரில்லம், காக்கஸ்'], explanation: 'கோல் வடிவம் பேசில்லஸ், கோள வடிவம் காக்கஸ், திருகு வடிவம் ஸ்பைரில்லம்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise IX.3, p. 271 (Fig. 22.5)', imageUrl: `${IMG}/t4-bacteriophage.png`, answer: 0,
    en: { q: 'The virus in the photograph has a head containing DNA, a tail sheath and tail fibres. Which cells does it infect?', options: ['Bacterial cells', 'Plant cells', 'Human white blood cells', 'Liver cells'], explanation: 'This is the T4 bacteriophage, a DNA virus that infects bacteria.' },
    ta: { q: 'படத்திலுள்ள வைரஸ் DNA கொண்ட தலை, வால் உறை, வால் இழைகளைக் கொண்டது. இது எந்த செல்களைத் தாக்கும்?', options: ['பாக்டீரியா செல்கள்', 'தாவர செல்கள்', 'மனித வெள்ளை இரத்த அணுக்கள்', 'கல்லீரல் செல்கள்'], explanation: 'இது பாக்டீரியாக்களைத் தாக்கும் DNA வைரஸான T4 பாக்டீரியோஃபேஜ்.' },
  },
  {
    difficulty: 'hard', source: '§22.1.4, p. 260', answer: 0,
    en: { q: 'Which statements about prions are correct?\n(i) They contain only proteins.\n(ii) They contain RNA but no protein.\n(iii) They are found in neurons and are rod shaped.\n(iv) They cause degeneration of nervous tissue.', options: ['(i), (iii) and (iv)', '(ii), (iii) and (iv)', '(i) and (ii) only', '(ii) and (iv) only'], explanation: 'Prions (named by Stanley Prusiner, 1982) are protein-only, rod shaped particles in neurons that damage nervous tissue; protein-free RNA describes viroids.' },
    ta: { q: 'ப்ரியான்கள் பற்றிய சரியான கூற்றுகள் எவை?\n(i) புரதங்களை மட்டுமே கொண்டவை.\n(ii) புரதமின்றி RNA மட்டும் கொண்டவை.\n(iii) நியூரான்களில் காணப்படும் கோல் வடிவமுடையவை.\n(iv) நரம்புத் திசுவைச் சிதைவடையச் செய்கின்றன.', options: ['(i), (iii), (iv)', '(ii), (iii), (iv)', '(i), (ii) மட்டும்', '(ii), (iv) மட்டும்'], explanation: 'ப்ரியான்கள் புரதம் மட்டுமே கொண்ட, நியூரான்களில் உள்ள கோல் வடிவ துகள்கள்; நரம்புத் திசுவைச் சிதைக்கும். புரதமற்ற RNA வீரியாய்டு.' },
  },
  {
    difficulty: 'hard', source: '§22.2.1, p. 261', answer: 0,
    en: { q: 'Which group lists only free-living nitrogen-fixing microbes?', options: ['Azotobacter, Nitrosomonas, Nostoc', 'Rhizobium, Frankia, Nostoc', 'Rhizobium, Azotobacter, Frankia', 'Frankia, Nitrosomonas, Rhizobium'], explanation: 'Azotobacter, Nitrosomonas and Nostoc are free living; Rhizobium and Frankia are symbiotic.' },
    ta: { q: 'தனித்து வாழும் நைட்ரஜன் நிலைநிறுத்தும் நுண்ணுயிரிகளை மட்டுமே கொண்ட தொகுதி எது?', options: ['அசட்டோபாக்டர், நைட்ரோசோமோனாஸ், நாஸ்டாக்', 'ரைசோபியம், ஃபிராங்கியா, நாஸ்டாக்', 'ரைசோபியம், அசட்டோபாக்டர், ஃபிராங்கியா', 'ஃபிராங்கியா, நைட்ரோசோமோனாஸ், ரைசோபியம்'], explanation: 'அசட்டோபாக்டர், நைட்ரோசோமோனாஸ், நாஸ்டாக் தனித்து வாழ்பவை; ரைசோபியம், ஃபிராங்கியா கூட்டுயிர் வாழ்பவை.' },
  },
  {
    difficulty: 'hard', source: '§22.2.3, p. 262 (Table 22.2)', answer: 0,
    en: { q: 'Which vaccine is correctly matched with its type?', options: ['Tetanus toxoid – toxoid (inactivated antigen)', 'BCG – subunit vaccine', 'Hepatitis B vaccine – live attenuated', 'IPV – toxoid'], explanation: 'MMR and BCG are live attenuated, IPV is inactivated (killed antigen), Hepatitis B is a subunit vaccine, and tetanus and diphtheria toxoids are toxoids.' },
    ta: { q: 'தடுப்பூசியும் அதன் வகையும் சரியாகப் பொருந்திய இணை எது?', options: ['டெட்டனஸ் டாக்சாய்டு – டாக்சாய்டு (செயலிழந்த ஆண்டிஜென்)', 'பி.சி.ஜி – துணை அலகு தடுப்பூசி', 'ஹெப்பாடைட்டிஸ் B தடுப்பூசி – உயிருள்ள வலுவிழந்தது', 'IPV – டாக்சாய்டு'], explanation: 'MMR, BCG உயிருள்ள வலுவிழந்தவை; IPV செயலிழந்தது; ஹெப்பாடைட்டிஸ் B துணை அலகு; டெட்டனஸ், டிப்தீரியா டாக்சாய்டுகள்.' },
  },
  {
    difficulty: 'hard', source: '§22.6.5, p. 266', answer: 0,
    en: { q: 'Dengue cases rise in the post-monsoon season. The most effective community step is', options: ['removing stagnant water from tyres, pots and tanks where Aedes breeds', 'boiling drinking water', 'screening blood donors', 'avoiding poultry markets'], explanation: 'Aedes mosquitoes breed in water collected in uncovered containers; eliminating breeding places controls dengue.' },
    ta: { q: 'மழைக்காலத்திற்குப் பின் டெங்கு அதிகரிக்கிறது. இதைத் தடுக்க மிகச் சிறந்த சமூக நடவடிக்கை', options: ['ஏடிஸ் கொசு பெருகும் டயர்கள், பானைகள், தொட்டிகளில் தேங்கும் நீரை அகற்றுதல்', 'குடிநீரைக் கொதிக்க வைத்தல்', 'இரத்தக் கொடையாளர்களைச் சோதித்தல்', 'கோழிச் சந்தைகளைத் தவிர்த்தல்'], explanation: 'மூடப்படாத கொள்கலன்களில் தேங்கும் நீரில் ஏடிஸ் கொசு பெருகுவதால், அவ்விடங்களை அழிப்பதே டெங்குவைக் கட்டுப்படுத்தும்.' },
  },
  {
    difficulty: 'hard', source: '§22.7, p. 266–267', answer: 0,
    en: { q: 'Which statements are correct?\n(i) Swine flu is caused by influenza virus H1N1.\n(ii) Bird flu is caused by influenza virus H5N1.\n(iii) Both are spread by the Culex mosquito.\n(iv) WHO declared swine flu a pandemic in June 2009.', options: ['(i), (ii) and (iv)', '(i), (ii) and (iii)', '(ii) and (iii) only', '(i) and (iv) only'], explanation: 'Swine flu (H1N1) and bird flu (H5N1) are transmitted by animals and droplets, not by mosquitoes; WHO declared swine flu a pandemic in June 2009.' },
    ta: { q: 'சரியான கூற்றுகள் எவை?\n(i) பன்றிக்காய்ச்சல் H1N1 இன்ஃப்ளுயன்சா வைரஸால் ஏற்படுகிறது.\n(ii) பறவைக்காய்ச்சல் H5N1 இன்ஃப்ளுயன்சா வைரஸால் ஏற்படுகிறது.\n(iii) இரண்டும் கியூலெக்ஸ் கொசுவால் பரவுகின்றன.\n(iv) 2009 ஜூனில் உலக சுகாதார நிறுவனம் பன்றிக்காய்ச்சலை உலகளாவிய பெருந்தொற்றாக அறிவித்தது.', options: ['(i), (ii), (iv)', '(i), (ii), (iii)', '(ii), (iii) மட்டும்', '(i), (iv) மட்டும்'], explanation: 'பன்றிக்காய்ச்சல் (H1N1), பறவைக்காய்ச்சல் (H5N1) விலங்குகள், துளிகள் மூலம் பரவுகின்றன, கொசுவால் அல்ல; 2009 ஜூனில் பன்றிக்காய்ச்சல் பெருந்தொற்றாக அறிவிக்கப்பட்டது.' },
  },
  {
    difficulty: 'hard', source: '§22.8.2, p. 268', answer: 0,
    en: { q: 'A person shows yellowness of eyes and skin and light coloured stools. Tests show the virus spread through unscreened blood. The most likely disease and best protection are', options: ['Hepatitis B; hepatitis B vaccine and screening of blood donors', 'Hepatitis A; drinking boiled chlorinated water', 'Typhoid; avoiding food exposed to flies', 'Malaria; using mosquito nets'], explanation: 'Hepatitis B (serum hepatitis) spreads through blood and body secretions, damages the liver and is prevented by blood screening and the safe, effective HBV vaccine.' },
    ta: { q: 'ஒருவருக்குக் கண், தோல் மஞ்சளாதல், வெளிர் நிற மலம் காணப்படுகின்றன. சோதிக்கப்படாத இரத்தம் மூலம் வைரஸ் பரவியது தெரிகிறது. இது எந்த நோய், சிறந்த பாதுகாப்பு எது?', options: ['ஹெப்பாடைட்டிஸ் B; ஹெப்பாடைட்டிஸ் B தடுப்பூசியும் இரத்தக் கொடையாளர் சோதனையும்', 'ஹெப்பாடைட்டிஸ் A; கொதிக்க வைத்த குளோரின் நீர் அருந்துதல்', 'டைபாய்டு; ஈக்கள் மொய்க்கும் உணவைத் தவிர்த்தல்', 'மலேரியா; கொசுவலை பயன்படுத்துதல்'], explanation: 'ஹெப்பாடைட்டிஸ் B இரத்தம், உடல் சுரப்புகள் மூலம் பரவி கல்லீரலைச் சேதப்படுத்தும்; இரத்தச் சோதனையும் HBV தடுப்பூசியும் பாதுகாப்பு தரும்.' },
  },
  {
    difficulty: 'hard', source: '§22.9, p. 268', answer: 0,
    en: { q: 'When a large proportion of a community is immunized against a disease, even unvaccinated people benefit because', options: ['the disease does not spread in the community', 'vaccines pass from person to person', 'the pathogen becomes a vaccine', 'antibodies are present in the air'], explanation: 'Immunizing most of a community stops the disease from spreading, so the rest of the people are also protected.' },
    ta: { q: 'ஒரு சமூகத்தில் பெரும்பாலானோர் தடுப்பூசி பெற்றால், பெறாதவர்களும் பயனடைவதற்குக் காரணம்', options: ['அச்சமூகத்தில் நோய் பரவுவதில்லை', 'தடுப்பூசி ஒருவரிடமிருந்து மற்றவருக்குப் பரவுகிறது', 'நோய்க்கிருமியே தடுப்பூசியாக மாறுகிறது', 'காற்றில் நோய் எதிர்ப்பொருட்கள் உள்ளன'], explanation: 'பெரும்பாலானோர் நோய்த்தடுப்புத் திறன் பெற்றால் நோய் பரவுவது நின்றுவிடுவதால் மற்றவர்களும் பாதுகாக்கப்படுகின்றனர்.' },
  },
];
