// Tamil Nadu State Board, 9th Science, Unit 7 – Heat (வெப்பம்).
// Book exercises and examples, plus our own questions covering every section.
// Tamil wording follows the terms used in the Tamil-medium textbook.
// source = section/exercise and printed page of the English-medium book.
import { BankQuestion, AR_EN, AR_TA } from './types';

const IMG = '/content/9/state_board/science/07';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.1, p. 88', answer: 0,
    en: { q: 'Calorie is the unit of', options: ['heat', 'work', 'temperature', 'pressure'], explanation: 'The calorie is a unit of heat energy; 1 calorie = 4.18 J.' },
    ta: { q: 'கலோரி என்பது எதனுடைய அலகு?', options: ['வெப்பம்', 'வேலை', 'வெப்பநிலை', 'அழுத்தம்'], explanation: 'கலோரி என்பது வெப்ப ஆற்றலின் அலகு; 1 கலோரி = 4.18 J.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.2, p. 88', answer: 0,
    en: { q: 'The SI unit of temperature is', options: ['kelvin', 'fahrenheit', 'joule', 'celsius'], explanation: 'The SI unit of temperature is kelvin (K); celsius is used for day-to-day purposes.' },
    ta: { q: 'வெப்பநிலையின் SI அலகு', options: ['கெல்வின்', 'ஃபாரன்ஹீட்', 'ஜூல்', 'செல்சியஸ்'], explanation: 'வெப்பநிலையின் SI அலகு கெல்வின் (K); தினசரி பயன்பாட்டில் செல்சியஸ் பயன்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.4, p. 89', answer: 0,
    en: { q: 'In which mode of heat transfer do molecules pass on heat energy to neighbouring molecules without actually moving from their positions?', options: ['Conduction', 'Radiation', 'Convection', 'Both radiation and convection'], explanation: 'In conduction the molecules only vibrate about their positions and pass energy to their neighbours.' },
    ta: { q: 'மூலக்கூறுகளின் இயக்கமின்றி வெப்பமானது ஒரு மூலக்கூறிலிருந்து அருகில் இருக்கும் மற்றொரு மூலக்கூறுக்கு வெப்பத்தைக் கடத்தும் முறையின் பெயர் என்ன?', options: ['வெப்பக் கடத்தல்', 'வெப்பக் கதிர்வீச்சு', 'வெப்பச் சலனம்', 'கதிர்வீச்சு மற்றும் சலனம்'], explanation: 'வெப்பக் கடத்தலில் மூலக்கூறுகள் தங்கள் இடத்திலேயே அதிர்ந்து அருகிலுள்ளவற்றுக்கு ஆற்றலைக் கடத்துகின்றன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.5, p. 89', answer: 0,
    en: { q: 'A device in which the loss of heat due to conduction, convection and radiation is minimised is the', options: ['thermos flask', 'solar cell', 'solar cooker', 'thermometer'], explanation: 'A thermos (vacuum) flask is built to cut down heat loss by all three modes of heat transfer.' },
    ta: { q: 'வெப்பக் கடத்தல், வெப்பச் சலனம், வெப்பக் கதிர்வீச்சு ஆகியவற்றின் மூலம் ஏற்படும் வெப்ப இழப்பைக் குறைக்கும் கருவி', options: ['வெற்றிடக் குடுவை', 'சூரிய மின்கலம்', 'சூரிய அழுத்த சமையற்கலன்', 'வெப்பநிலைமானி'], explanation: 'வெற்றிடக் குடுவை மூன்று வழிகளிலும் ஏற்படும் வெப்ப இழப்பைக் குறைக்கும் வகையில் வடிவமைக்கப்பட்டுள்ளது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.1, p. 89', answer: 0,
    en: { q: 'The fastest mode of heat transfer is _____.', options: ['radiation', 'conduction', 'convection', 'evaporation'], explanation: 'Radiation travels as electromagnetic waves at the speed of light, so it is the fastest mode.' },
    ta: { q: 'வேகமாக வெப்பத்தைக் கடத்தும் முறை _____.', options: ['வெப்பக் கதிர்வீச்சு', 'வெப்பக் கடத்தல்', 'வெப்பச் சலனம்', 'ஆவியாதல்'], explanation: 'கதிர்வீச்சு ஒளியின் வேகத்தில் மின்காந்த அலைகளாகப் பரவுவதால் இதுவே வேகமான முறை.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.3, p. 89', answer: 0,
    en: { q: 'Liquids and gases are generally _____ conductors of heat.', options: ['poor', 'good', 'excellent', 'perfect'], explanation: 'Liquids and gases conduct heat only very slowly; they are poor (bad) conductors.' },
    ta: { q: 'திரவங்களும், வாயுக்களும் பொதுவாக வெப்பத்தை _____ கடத்தும்.', options: ['குறைவாக (அரிதாக)', 'நன்றாக', 'மிகச் சிறப்பாக', 'முழுமையாக'], explanation: 'திரவங்களும் வாயுக்களும் மிக மெதுவாகவே வெப்பத்தைக் கடத்தும்; அவை அரிதிற் கடத்திகள்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.4, p. 89', answer: 0,
    en: { q: 'The fixed temperature at which matter changes state from solid to liquid is called _____.', options: ['melting point', 'boiling point', 'freezing point', 'condensation point'], explanation: 'The temperature at which a solid changes to liquid is its melting point (0 °C for ice).' },
    ta: { q: 'பொருளொன்று திட நிலையில் இருந்து திரவ நிலைக்கு மாறும் நிலையான வெப்பநிலையை _____ என்கிறோம்.', options: ['உருகுநிலை', 'கொதிநிலை', 'உறைநிலை', 'ஒடுக்க நிலை'], explanation: 'திடப்பொருள் திரவமாக மாறும் வெப்பநிலை அதன் உருகுநிலை (பனிக்கட்டிக்கு 0 °C).' },
  },
  {
    difficulty: 'easy', source: 'Book exercise IV.1, p. 89', answer: 0,
    en: { q: 'The transfer of heat in solids from a region of higher temperature to a region of lower temperature without the actual movement of molecules is called', options: ['conduction', 'convection', 'radiation', 'sublimation'], explanation: 'This is the definition of conduction given in the book.' },
    ta: { q: 'அதிக வெப்பநிலையில் உள்ள பகுதியிலிருந்து குறைவான வெப்பநிலையில் உள்ள பகுதிக்கு மூலக்கூறுகளின் இயக்கமின்றி திடப்பொருளில் வெப்பம் பரவும் நிகழ்வு', options: ['வெப்பக் கடத்தல்', 'வெப்பச் சலனம்', 'வெப்பக் கதிர்வீச்சு', 'பதங்கமாதல்'], explanation: 'இதுவே பாடநூல் தரும் வெப்பக் கடத்தலின் வரையறை.' },
  },
  {
    difficulty: 'easy', source: '§7.1, p. 80', answer: 0,
    en: { q: 'Gaps are left between rails in railway tracks because in summer the rails', options: ['expand', 'contract', 'melt', 'bend upwards always'], explanation: 'More heat in summer makes the rails expand; the gap gives room for this expansion.' },
    ta: { q: 'இருப்புப் பாதைகளில் தண்டவாளங்களுக்கிடையே இடைவெளி விடப்படுவதற்குக் காரணம், கோடையில் தண்டவாளங்கள்', options: ['விரிவடைகின்றன', 'சுருங்குகின்றன', 'உருகுகின்றன', 'எப்போதும் மேல்நோக்கி வளைகின்றன'], explanation: 'கோடையில் அதிக வெப்பத்தால் தண்டவாளங்கள் விரிவடையும்; அதற்கு இடம் தரவே இடைவெளி விடப்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: '§7.1, p. 80', answer: 0,
    en: { q: 'On heating, expansion is maximum in', options: ['gases', 'liquids', 'solids', 'metals'], explanation: 'Expansion is greater in liquids than in solids and is maximum in gases.' },
    ta: { q: 'வெப்பப்படுத்தும்போது விரிவு அதிகமாக இருப்பது', options: ['வாயுக்களில்', 'திரவங்களில்', 'திடப்பொருள்களில்', 'உலோகங்களில்'], explanation: 'திடப்பொருளை விடத் திரவத்திலும், அனைத்திலும் அதிகமாக வாயுக்களிலும் விரிவு ஏற்படும்.' },
  },
  {
    difficulty: 'easy', source: '§7.2.1, p. 81', answer: 0,
    en: { q: 'Which metal is used in thermometers because it is a good conductor of heat?', options: ['Mercury', 'Iron', 'Copper', 'Aluminium'], explanation: 'Mercury is a good conductor of heat, so it is used in thermometers.' },
    ta: { q: 'சிறந்த வெப்பக் கடத்தியாக இருப்பதால் வெப்பநிலைமானியில் பயன்படும் உலோகம்', options: ['பாதரசம்', 'இரும்பு', 'தாமிரம்', 'அலுமினியம்'], explanation: 'பாதரசம் சிறந்த வெப்பக் கடத்தி என்பதால் வெப்பநிலைமானியில் பயன்படுத்தப்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: '§7.2.3, p. 83', answer: 0,
    en: { q: 'Heat from the Sun reaches the Earth by', options: ['radiation', 'conduction', 'convection', 'reflection'], explanation: 'Space is empty; only radiation can travel through vacuum.' },
    ta: { q: 'சூரியனின் வெப்பம் பூமியை வந்தடைவது', options: ['வெப்பக் கதிர்வீச்சு மூலம்', 'வெப்பக் கடத்தல் மூலம்', 'வெப்பச் சலனம் மூலம்', 'எதிரொளிப்பு மூலம்'], explanation: 'விண்வெளி வெற்றிடம்; வெற்றிடத்தின் வழியே கதிர்வீச்சு மட்டுமே பரவும்.' },
  },
  {
    difficulty: 'easy', source: '§7.3, p. 83', answer: 0,
    en: { q: 'The degree of hotness or coolness of a body is called its', options: ['temperature', 'heat', 'heat capacity', 'latent heat'], explanation: 'Temperature tells how hot or cold a body is; it is measured with a thermometer.' },
    ta: { q: 'ஒரு பொருளின் வெப்பம் அல்லது குளிர்ச்சியைக் குறிக்கும் அளவு', options: ['வெப்பநிலை', 'வெப்பம்', 'வெப்ப ஏற்புத் திறன்', 'உள்ளுறை வெப்பம்'], explanation: 'பொருள் எவ்வளவு சூடாக அல்லது குளிர்ச்சியாக உள்ளது என்பதை வெப்பநிலை குறிக்கும்; வெப்பநிலைமானியால் அளக்கப்படும்.' },
  },
  {
    difficulty: 'easy', source: '§7.3.2, p. 83', answer: 0,
    en: { q: 'On the Fahrenheit scale, the freezing and boiling points of water are', options: ['32 °F and 212 °F', '0 °F and 100 °F', '273 °F and 373 °F', '32 °F and 180 °F'], explanation: 'The Fahrenheit scale fixes 32 °F and 212 °F, with the interval divided into 180 parts.' },
    ta: { q: 'ஃபாரன்ஹீட் அளவீட்டில் நீரின் உறைநிலையும் கொதிநிலையும்', options: ['32 °F மற்றும் 212 °F', '0 °F மற்றும் 100 °F', '273 °F மற்றும் 373 °F', '32 °F மற்றும் 180 °F'], explanation: 'ஃபாரன்ஹீட் அளவீட்டில் 32 °F, 212 °F நிலைநிறுத்தப்பட்டு, இடைவெளி 180 பகுதிகளாகப் பிரிக்கப்பட்டுள்ளது.' },
  },
  {
    difficulty: 'easy', source: '§7.3.2, p. 84', answer: 0,
    en: { q: 'Absolute zero on the Celsius scale is about', options: ['–273 °C', '0 °C', '–100 °C', '–460 °C'], explanation: '0 K = –273.15 °C, the lowest possible temperature.' },
    ta: { q: 'செல்சியஸ் அளவீட்டில் தனிச் சுழி வெப்பநிலை ஏறக்குறைய', options: ['–273 °C', '0 °C', '–100 °C', '–460 °C'], explanation: '0 K = –273.15 °C; இதுவே மிகக் குறைந்த வெப்பநிலை.' },
  },
  {
    difficulty: 'easy', source: '§7.5, p. 86', answer: 0,
    en: { q: 'The SI unit of heat capacity is', options: ['J/K', 'J kg⁻¹ K⁻¹', 'J/kg', 'K'], explanation: 'Heat capacity = heat ÷ rise in temperature, so its unit is J/K.' },
    ta: { q: 'வெப்ப ஏற்புத் திறனின் SI அலகு', options: ['J/K', 'J கிகி⁻¹ K⁻¹', 'J/கிகி', 'K'], explanation: 'வெப்ப ஏற்புத் திறன் = வெப்பம் ÷ வெப்பநிலை உயர்வு; எனவே அலகு J/K.' },
  },
  {
    difficulty: 'easy', source: '§7.5, p. 86', answer: 0,
    en: { q: 'The process in which a solid changes directly into a gas without becoming a liquid is', options: ['sublimation', 'melting', 'condensation', 'freezing'], explanation: 'Dry ice, iodine and naphthalene balls sublime directly from solid to gas.' },
    ta: { q: 'திடப்பொருள் திரவமாகாமல் நேரடியாக வாயுவாக மாறும் நிகழ்வு', options: ['பதங்கமாதல்', 'உருகுதல்', 'குளிர்தல்', 'உறைதல்'], explanation: 'உலர் பனி, அயோடின், நாஃப்தலீன் உருண்டைகள் திடநிலையிலிருந்து நேரடியாக வாயுவாகின்றன.' },
  },
  {
    difficulty: 'easy', source: '§7.6, p. 87', answer: 0,
    en: { q: 'The SI unit of specific latent heat is', options: ['J/kg', 'J/K', 'J kg⁻¹ K⁻¹', 'kg/J'], explanation: 'Specific latent heat L = Q/m, so its unit is J/kg.' },
    ta: { q: 'தன் உள்ளுறை வெப்பத்தின் SI அலகு', options: ['J/கிகி', 'J/K', 'J கிகி⁻¹ K⁻¹', 'கிகி/J'], explanation: 'தன் உள்ளுறை வெப்பம் L = Q/m; எனவே அலகு J/கிகி.' },
  },
  // ---------------------------------------------------------------- Medium
  {
    difficulty: 'medium', source: 'Book exercise I.3, p. 89', answer: 0,
    en: { q: 'Two cylindrical rods of the same length and material have areas of cross-section in the ratio 2 : 1 (Rod-1 : Rod-2). Which conducts heat faster?', options: ['Rod-1', 'Rod-2', 'Both equally', 'Neither of them'], explanation: 'More heat is conducted when the area is larger, so Rod-1 with twice the area conducts faster.' },
    ta: { q: 'ஒரே நீளமும் ஒரே பொருளும் கொண்ட இரண்டு உருளை வடிவக் கம்பிகளின் குறுக்கு வெட்டுப் பரப்பின் விகிதம் 2 : 1 (கம்பி–1 : கம்பி–2). எந்தக் கம்பி வெப்பத்தை அதிகம் கடத்தும்?', options: ['கம்பி–1', 'கம்பி–2', 'இரண்டும் சமமாக', 'எதுவும் இல்லை'], explanation: 'பொருளின் பரப்பு அதிகமாகும்போது வெப்பக் கடத்தல் அதிகமாகும்; இருமடங்கு பரப்புள்ள கம்பி–1 வேகமாகக் கடத்தும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.2, p. 89', answer: 0,
    en: { q: 'During day time, air blows from _____ to _____.', options: ['sea, land', 'land, sea', 'mountain, valley', 'land, mountain'], explanation: 'By day the land gets hot and its air rises; cool air from over the sea replaces it – the sea breeze.' },
    ta: { q: 'பகல் நேரங்களில், காற்று _____ லிருந்து _____ க்கு பாயும்.', options: ['கடல், நிலம்', 'நிலம், கடல்', 'மலை, பள்ளத்தாக்கு', 'நிலம், மலை'], explanation: 'பகலில் நிலம் சூடாகி அதன் மேலுள்ள காற்று மேலெழும்; கடல் மேலிருந்து குளிர்ந்த காற்று அதை நிரப்பும் – இதுவே கடல் காற்று.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.2, p. 89', answer: 0,
    en: { q: 'Ice is kept in a double-walled container because', options: ['the space between the walls reduces heat flowing in from outside', 'the double wall makes the ice heavier', 'it helps the ice to melt faster', 'double walls absorb more heat'], explanation: 'Air or vacuum between the walls is a bad conductor, so very little heat reaches the ice.' },
    ta: { q: 'பனிக்கட்டியானது இரட்டைச் சுவர் கொள்கலன்களில் வைக்கப்படுவது ஏன்?', options: ['இரு சுவர்களுக்கிடையே உள்ள இடைவெளி வெளியிலிருந்து வரும் வெப்பத்தைக் குறைக்கிறது', 'இரட்டைச் சுவர் பனிக்கட்டியின் எடையைக் கூட்டுகிறது', 'பனிக்கட்டி வேகமாக உருக உதவுகிறது', 'இரட்டைச் சுவர் அதிக வெப்பத்தை உட்கவர்கிறது'], explanation: 'சுவர்களுக்கிடையே உள்ள காற்று அல்லது வெற்றிடம் அரிதிற் கடத்தி; எனவே வெப்பம் பனிக்கட்டியை அடைவது குறைகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.3, p. 89', answer: 0,
    en: { q: 'Water kept in an earthen pot stays cool because', options: ['water seeps through the pores and evaporates, taking heat from the pot', 'clay is a good conductor of heat', 'clay reflects all the heat of the Sun', 'the pot produces cold air'], explanation: 'Evaporation needs heat; the water escaping through the pores takes heat from the pot and the water inside.' },
    ta: { q: 'மண்பானையில் வைத்திருக்கும் தண்ணீர் எப்போதும் குளிராக இருப்பது ஏன்?', options: ['நுண்துளைகள் வழியே கசியும் நீர் ஆவியாகி பானையிலிருந்து வெப்பத்தை எடுத்துக்கொள்கிறது', 'களிமண் சிறந்த வெப்பக் கடத்தி', 'களிமண் சூரிய வெப்பம் முழுவதையும் எதிரொளிக்கிறது', 'பானை குளிர்ந்த காற்றை உருவாக்குகிறது'], explanation: 'ஆவியாதலுக்கு வெப்பம் தேவை; துளைகள் வழியே வெளியேறும் நீர் பானையிலிருந்தும் உள்ளிருக்கும் நீரிலிருந்தும் வெப்பத்தை எடுக்கிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.4, p. 89', answer: 0,
    en: { q: 'Which statement correctly differentiates convection and radiation?', options: ['Convection needs a fluid medium; radiation can take place even in vacuum', 'Convection is faster than radiation', 'Radiation needs a fluid medium; convection can occur in vacuum', 'Both need the actual movement of the medium'], explanation: 'Convection happens by the movement of the fluid itself; radiation travels as electromagnetic waves, even through vacuum.' },
    ta: { q: 'வெப்பச் சலனம், வெப்பக் கதிர்வீச்சு இவற்றை வேறுபடுத்தும் சரியான கூற்று எது?', options: ['சலனத்திற்குப் பாய்ம ஊடகம் தேவை; கதிர்வீச்சு வெற்றிடத்திலும் நிகழும்', 'கதிர்வீச்சை விடச் சலனம் வேகமானது', 'கதிர்வீச்சுக்குப் பாய்ம ஊடகம் தேவை; சலனம் வெற்றிடத்தில் நிகழும்', 'இரண்டிற்கும் ஊடகம் நகர வேண்டும்'], explanation: 'சலனம் பாய்மமே நகர்வதால் நிகழ்கிறது; கதிர்வீச்சு மின்காந்த அலைகளாக வெற்றிடத்திலும் பரவும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.5, p. 89', answer: 0,
    en: { q: 'People prefer white clothes in summer because white clothes', options: ['are good reflectors of heat', 'are good absorbers of heat', 'are good conductors of heat', 'produce cool air'], explanation: 'White or light-coloured clothes reflect most of the heat radiation and keep us cool.' },
    ta: { q: 'கோடைகாலங்களில் மக்கள் வெள்ளை நிற ஆடை அணிவதை விரும்புவது ஏனெனில் வெள்ளை ஆடைகள்', options: ['வெப்பத்தைச் சிறப்பாக எதிரொளிக்கின்றன', 'வெப்பத்தைச் சிறப்பாக உட்கவர்கின்றன', 'சிறந்த வெப்பக் கடத்திகள்', 'குளிர்ந்த காற்றை உருவாக்குகின்றன'], explanation: 'வெள்ளை அல்லது வெளிர் நிற ஆடைகள் வெப்பக் கதிர்வீச்சை எதிரொளித்து நம்மைக் குளிர்ச்சியாக வைக்கின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.6, p. 89', answer: 0,
    en: { q: 'Specific heat capacity of a substance is the amount of heat required to raise the temperature of', options: ['1 kg of the substance by 1 K', 'the whole body by 1 K', '1 kg of the substance until it melts', '1 g of water by 100 °C'], explanation: 'Specific heat capacity C = Q/(mΔT): heat per kilogram per kelvin; unit J kg⁻¹ K⁻¹.' },
    ta: { q: 'ஒரு பொருளின் தன் வெப்ப ஏற்புத் திறன் என்பது _____ உயர்த்தத் தேவையான வெப்ப ஆற்றல்.', options: ['1 கிகி பொருளின் வெப்பநிலையை 1 K', 'முழுப் பொருளின் வெப்பநிலையை 1 K', '1 கிகி பொருள் உருகும் வரை அதன் வெப்பநிலையை', '1 கி நீரின் வெப்பநிலையை 100 °C'], explanation: 'தன் வெப்ப ஏற்புத் திறன் C = Q/(mΔT): ஓரலகு நிறைக்கு, ஓரலகு வெப்பநிலைக்குத் தேவையான வெப்பம்; அலகு J கிகி⁻¹ K⁻¹.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.7, p. 89', answer: 0,
    en: { q: 'Thermal capacity (heat capacity) of a body is the heat needed to raise the temperature of', options: ['the entire body by 1 °C', '1 kg of the body by 1 °C', '1 g of the body by 1 °C', 'the body from 0 °C to 100 °C'], explanation: 'Heat capacity C′ = Q/ΔT refers to the whole mass of the body, not unit mass.' },
    ta: { q: 'ஒரு பொருளின் வெப்ப ஏற்புத் திறன் என்பது _____ உயர்த்தத் தேவையான வெப்ப ஆற்றல்.', options: ['முழுப் பொருளின் வெப்பநிலையை 1 °C', '1 கிகி பொருளின் வெப்பநிலையை 1 °C', '1 கி பொருளின் வெப்பநிலையை 1 °C', 'பொருளின் வெப்பநிலையை 0 °C இலிருந்து 100 °C வரை'], explanation: 'வெப்ப ஏற்புத் திறன் C′ = Q/ΔT; இது ஓரலகு நிறைக்கு அல்ல, முழுப் பொருளுக்குரியது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.8, p. 89', answer: 0,
    en: { q: 'Specific latent heat is the heat absorbed or released by', options: ['unit mass of a substance during change of state without change in temperature', 'unit mass of a substance when its temperature rises by 1 K', 'the whole body when its temperature rises by 1 °C', 'a substance when it expands'], explanation: 'L = Q/m, measured during a change of state at constant temperature.' },
    ta: { q: 'தன் உள்ளுறை வெப்பம் என்பது', options: ['வெப்பநிலை மாறாமல் நிலை மாற்றத்தின் போது ஓரலகு நிறை உட்கவரும் அல்லது வெளியிடும் வெப்பம்', 'ஓரலகு நிறையின் வெப்பநிலையை 1 K உயர்த்தத் தேவையான வெப்பம்', 'முழுப் பொருளின் வெப்பநிலையை 1 °C உயர்த்தத் தேவையான வெப்பம்', 'பொருள் விரிவடையும்போது உட்கவரும் வெப்பம்'], explanation: 'L = Q/m; வெப்பநிலை மாறாத நிலை மாற்றத்தின் போது அளக்கப்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book example, Problem 1, p. 84', answer: 0,
    en: { q: '25 °C on the Kelvin scale is', options: ['298.15 K', '248.15 K', '25 K', '77 K'], explanation: 'T(K) = T(°C) + 273.15 = 25 + 273.15 = 298.15 K.' },
    ta: { q: '25 °C என்பது கெல்வின் அளவீட்டில்', options: ['298.15 K', '248.15 K', '25 K', '77 K'], explanation: 'T(K) = T(°C) + 273.15 = 25 + 273.15 = 298.15 K.' },
  },
  {
    difficulty: 'medium', source: 'Book example, Problem 1, p. 84', answer: 0,
    en: { q: '200 K on the Celsius scale is', options: ['–73.15 °C', '473.15 °C', '73.15 °C', '–200 °C'], explanation: 'T(°C) = T(K) – 273.15 = 200 – 273.15 = –73.15 °C.' },
    ta: { q: '200 K என்பது செல்சியஸ் அளவீட்டில்', options: ['–73.15 °C', '473.15 °C', '73.15 °C', '–200 °C'], explanation: 'T(°C) = T(K) – 273.15 = 200 – 273.15 = –73.15 °C.' },
  },
  {
    difficulty: 'medium', source: 'Book example, Problem 2, p. 84', answer: 0,
    en: { q: '14 °F on the Celsius scale is', options: ['–10 °C', '10 °C', '–25.2 °C', '57.2 °C'], explanation: 'T(°C) = (T(°F) – 32) ÷ 1.8 = (14 – 32) ÷ 1.8 = –10 °C.' },
    ta: { q: '14 °F என்பது செல்சியஸ் அளவீட்டில்', options: ['–10 °C', '10 °C', '–25.2 °C', '57.2 °C'], explanation: 'T(°C) = (T(°F) – 32) ÷ 1.8 = (14 – 32) ÷ 1.8 = –10 °C.' },
  },
  {
    difficulty: 'medium', source: 'Book example, Problem 2, p. 84', answer: 0,
    en: { q: '35 °C on the Fahrenheit scale is', options: ['95 °F', '63 °F', '51.4 °F', '67 °F'], explanation: 'F = (9/5)C + 32 = 1.8 × 35 + 32 = 95 °F. (Forgetting the +32 gives 63; using 5/9 gives about 51.4.)' },
    ta: { q: '35 °C என்பது ஃபாரன்ஹீட் அளவீட்டில்', options: ['95 °F', '63 °F', '51.4 °F', '67 °F'], explanation: 'F = (9/5)C + 32 = 1.8 × 35 + 32 = 95 °F. (+32 ஐ விட்டால் 63; 5/9 ஐப் பயன்படுத்தினால் ஏறக்குறைய 51.4.)' },
  },
  {
    difficulty: 'medium', source: 'Book example, Problem 3, p. 85', answer: 0,
    en: { q: 'The heat needed to raise the temperature of 2 kg of water from 10 °C to 50 °C (C = 4200 J kg⁻¹ K⁻¹) is', options: ['3,36,000 J', '4,20,000 J', '1,68,000 J', '8,400 J'], explanation: 'Q = mCΔT = 2 × 4200 × 40 = 3,36,000 J.' },
    ta: { q: '2 கிகி நீரின் வெப்பநிலையை 10 °C லிருந்து 50 °C க்கு உயர்த்தத் தேவையான வெப்ப ஆற்றல் (C = 4200 J கிகி⁻¹ K⁻¹)', options: ['3,36,000 J', '4,20,000 J', '1,68,000 J', '8,400 J'], explanation: 'Q = mCΔT = 2 × 4200 × 40 = 3,36,000 J.' },
  },
  {
    difficulty: 'medium', source: 'Book example, Problem 4, p. 86', answer: 0,
    en: { q: 'An iron ball needs 5000 J of heat to raise its temperature by 20 K. Its heat capacity is', options: ['250 J K⁻¹', '1,00,000 J K⁻¹', '25 J K⁻¹', '4980 J K⁻¹'], explanation: 'Heat capacity = Q/ΔT = 5000/20 = 250 J K⁻¹.' },
    ta: { q: 'ஒரு இரும்புக் குண்டின் வெப்பநிலையை 20 K உயர்த்த 5000 J வெப்ப ஆற்றல் தேவை. அதன் வெப்ப ஏற்புத் திறன்', options: ['250 J K⁻¹', '1,00,000 J K⁻¹', '25 J K⁻¹', '4980 J K⁻¹'], explanation: 'வெப்ப ஏற்புத் திறன் = Q/ΔT = 5000/20 = 250 J K⁻¹.' },
  },
  {
    difficulty: 'medium', source: 'Book example, Problem 5, p. 87', answer: 0,
    en: { q: 'The heat needed to melt 5 kg of ice (specific latent heat of ice = 336 J g⁻¹) is', options: ['1.68 × 10⁶ J', '1680 J', '67.2 J', '1.68 × 10³ J'], explanation: 'Q = mL = 5000 g × 336 J g⁻¹ = 16,80,000 J = 1.68 × 10⁶ J. Using 5 instead of 5000 g gives 1680 J.' },
    ta: { q: '5 கிகி பனிக்கட்டியை உருக்கத் தேவையான வெப்ப ஆற்றல் (பனிக்கட்டியின் தன் உள்ளுறை வெப்பம் = 336 J கி⁻¹)', options: ['1.68 × 10⁶ J', '1680 J', '67.2 J', '1.68 × 10³ J'], explanation: 'Q = mL = 5000 கி × 336 J கி⁻¹ = 16,80,000 J = 1.68 × 10⁶ J. 5000 கி க்குப் பதில் 5 என எடுத்தால் 1680 J எனத் தவறாக வரும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.1, p. 89', answer: 0,
    en: { q: 'The heat required to raise the temperature of 25 g of water from 0 °C to 100 °C (specific heat of water = 4.18 J/g °C) is', options: ['10450 J', '2500 J', '104.5 J', '1045 J'], explanation: 'Q = mcΔT = 25 × 4.18 × 100 = 10450 J (the book answer).' },
    ta: { q: '25 கிராம் நீரை 0 °C இருந்து 100 °C க்கு வெப்பப்படுத்தத் தேவைப்படும் வெப்ப ஆற்றல் (நீரின் தன் வெப்ப ஏற்புத் திறன் = 4.18 J/கி °C)', options: ['10450 J', '2500 J', '104.5 J', '1045 J'], explanation: 'Q = mcΔT = 25 × 4.18 × 100 = 10450 J (பாடநூல் விடை).' },
  },
  {
    difficulty: 'medium', source: '§7.2.1, p. 82 (Activity 2)', answer: 0,
    en: { q: 'In the activity with rods of copper, aluminium, brass and iron, the match stick falls first from the rod of', options: ['copper', 'aluminium', 'brass', 'iron'], explanation: 'Copper conducts heat best, followed by aluminium, brass and iron.' },
    ta: { q: 'தாமிரம், அலுமினியம், பித்தளை, இரும்பு கம்பிகள் கொண்ட செயல்பாட்டில் தீக்குச்சி முதலில் கீழே விழுவது எந்தக் கம்பியிலிருந்து?', options: ['தாமிரம்', 'அலுமினியம்', 'பித்தளை', 'இரும்பு'], explanation: 'தாமிரம் அதிகக் கடத்தும் திறன் கொண்டது; அடுத்து அலுமினியம், பித்தளை, இரும்பு.' },
  },
  {
    difficulty: 'medium', source: '§7.2.2, p. 82', answer: 0,
    en: { q: 'A hot air balloon rises because the heated air inside it', options: ['is less dense than the cold air outside', 'is denser than the cold air outside', 'conducts heat to the balloon', 'has more mass than cold air'], explanation: 'Warm air is less dense and rises; trapped inside the balloon it lifts the balloon.' },
    ta: { q: 'சூடான காற்று பலூன் மேலே எழுவதற்குக் காரணம், அதனுள் உள்ள சூடான காற்று', options: ['வெளியிலுள்ள குளிர்ந்த காற்றை விட அடர்த்தி குறைந்தது', 'வெளியிலுள்ள குளிர்ந்த காற்றை விட அடர்த்தி அதிகமானது', 'பலூனுக்கு வெப்பத்தைக் கடத்துகிறது', 'குளிர்ந்த காற்றை விட அதிக நிறை கொண்டது'], explanation: 'அடர்த்தி குறைந்த சூடான காற்று மேல்நோக்கிச் செல்லும்; பலூனுள் அடைபட்டு அதை மேலே உயர்த்துகிறது.' },
  },
  {
    difficulty: 'medium', source: '§7.2.3, p. 83', answer: 0,
    en: { q: 'The base of cooking utensils is blackened because a black surface', options: ['absorbs more heat', 'reflects more heat', 'conducts less heat', 'cools quickly'], explanation: 'Black surfaces are good absorbers of radiation, so more heat enters the vessel.' },
    ta: { q: 'சமையல் பாத்திரங்களின் அடிப்பகுதி கருப்பாக்கப்படுவது ஏனெனில் கருப்பு மேற்பரப்பு', options: ['அதிக வெப்பத்தை உட்கவரும்', 'அதிக வெப்பத்தை எதிரொளிக்கும்', 'குறைவாக வெப்பத்தைக் கடத்தும்', 'விரைவாகக் குளிரும்'], explanation: 'கருப்பு மேற்பரப்பு கதிர்வீச்சைச் சிறப்பாக உட்கவர்வதால் பாத்திரத்திற்கு அதிக வெப்பம் கிடைக்கிறது.' },
  },
  {
    difficulty: 'medium', source: '§7.4, p. 85', answer: 0,
    en: { q: 'Water is used as a coolant in car radiators because it has', options: ['the highest specific heat capacity', 'a low boiling point', 'a low specific heat capacity', 'a high density'], explanation: 'Water (4200 J kg⁻¹ K⁻¹) absorbs a large amount of heat for a small rise in temperature.' },
    ta: { q: 'கார் ரேடியேட்டர்களில் நீர் குளிர்விப்பானாகப் பயன்படக் காரணம், அதன்', options: ['மிக அதிகமான தன் வெப்ப ஏற்புத் திறன்', 'குறைந்த கொதிநிலை', 'குறைந்த தன் வெப்ப ஏற்புத் திறன்', 'அதிக அடர்த்தி'], explanation: 'நீர் (4200 J கிகி⁻¹ K⁻¹) சிறிய வெப்பநிலை உயர்வுக்கே அதிக வெப்பத்தை உட்கவரும்.' },
  },
  {
    difficulty: 'medium', source: '§7.2, p. 81 (Do you know?)', answer: 0,
    en: { q: 'A dog keeps out its tongue and breathes hard on a hot day. This cools its body because', options: ['evaporation of moisture on the tongue takes heat from the body', 'the tongue radiates cold', 'air conducts heat into the body', 'the tongue reflects sunlight'], explanation: 'Heat is needed to turn a liquid into a gas, so evaporating moisture removes heat from the tongue.' },
    ta: { q: 'வெயில் நாளில் நாய் நாக்கை வெளியே நீட்டி வேகமாக மூச்சு விடுகிறது. இது உடலைக் குளிர்விக்கக் காரணம்', options: ['நாக்கிலுள்ள ஈரம் ஆவியாகும்போது உடலிலிருந்து வெப்பத்தை எடுக்கிறது', 'நாக்கு குளிர்ச்சியைக் கதிர்வீசுகிறது', 'காற்று உடலுக்குள் வெப்பத்தைக் கடத்துகிறது', 'நாக்கு சூரிய ஒளியை எதிரொளிக்கிறது'], explanation: 'திரவம் வாயுவாக மாற வெப்பம் தேவை; ஆவியாகும் ஈரம் நாக்கிலிருந்து வெப்பத்தை நீக்குகிறது.' },
  },
  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise III.1, p. 89', answer: 0,
    en: { q: 'Assertion: Food can be cooked faster in vessels with a copper bottom.\nReason: Copper is the best conductor of heat.', options: AR_EN, explanation: 'Copper conducts heat very well (best among common metals in the activity), so heat reaches the food quickly; the reason explains the assertion.' },
    ta: { q: 'கூற்று: தாமிரப் பகுதியை அடிப்பகுதியாகக் கொண்ட பாத்திரங்கள் மூலம் விரைவாக சமைக்கலாம்.\nகாரணம்: தாமிரம் மிகச் சிறந்த எளிதிற் கடத்தி.', options: AR_TA, explanation: 'தாமிரம் வெப்பத்தைச் சிறப்பாகக் கடத்துவதால் வெப்பம் உணவை விரைவாக அடைகிறது; காரணம் கூற்றை விளக்குகிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise III.2, p. 89', answer: 1,
    en: { q: 'Assertion: Maximum sunlight reaches the earth’s surface during noon time.\nReason: Heat from the Sun reaches the earth’s surface by radiation.', options: AR_EN, explanation: 'Both are true, but the noon maximum is due to the Sun being overhead, not because heat travels by radiation.' },
    ta: { q: 'கூற்று: மதிய வேளையில் அதிகமான சூரியக் கதிர்கள் பூமியை வந்தடைகின்றன.\nகாரணம்: சூரியக் கதிர்கள் வெப்பக் கதிர்வீச்சு மூலம் பூமியை வந்தடைகின்றன.', options: AR_TA, explanation: 'இரண்டும் சரி; ஆனால் மதியம் அதிகக் கதிர்கள் வருவது சூரியன் தலைக்கு மேல் இருப்பதால்; கதிர்வீச்சு என்பது அதற்கான விளக்கம் அல்ல.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise III.3, p. 89', answer: 2,
    en: { q: 'Assertion: When water is heated up to 100 °C, there is no rise in temperature until all the water gets converted into water vapour.\nReason: Boiling point of water is 10 °C.', options: AR_EN, explanation: 'The heat supplied at 100 °C is used as latent heat of vaporisation, so the assertion is true; the boiling point of water is 100 °C, not 10 °C.' },
    ta: { q: 'கூற்று: நீர் 100 °C வரை வெப்பப்படுத்தப்பட்ட பின், நீர் முழுவதும் நீராவியாக மாறும் வரை வெப்பநிலை மேலும் உயர்வதில்லை.\nகாரணம்: நீரின் கொதிநிலை 10 °C.', options: AR_TA, explanation: '100 °C இல் அளிக்கப்படும் வெப்பம் ஆவியாதலின் உள்ளுறை வெப்பமாகப் பயன்படுவதால் கூற்று சரி; நீரின் கொதிநிலை 100 °C, 10 °C அல்ல.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VI.1, p. 89', answer: 0,
    en: { q: '10450 J of heat raises 25 g of water from 0 °C to 100 °C. Taking 1 calorie = 4.18 J, this heat in calories is', options: ['2500 cal', '43,681 cal', '10450 cal', '250 cal'], explanation: '10450 ÷ 4.18 = 2500 cal (= mΔT in g °C, since water needs 1 cal per gram per °C). Multiplying instead gives 43,681.' },
    ta: { q: '25 கி நீரை 0 °C இலிருந்து 100 °C க்கு உயர்த்த 10450 J வெப்பம் தேவை. 1 கலோரி = 4.18 J எனில், இந்த வெப்பம் கலோரியில்', options: ['2500 கலோரி', '43,681 கலோரி', '10450 கலோரி', '250 கலோரி'], explanation: '10450 ÷ 4.18 = 2500 கலோரி (ஒரு கிராம் நீருக்கு 1 °C க்கு 1 கலோரி). பெருக்கினால் 43,681 எனத் தவறாக வரும்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VI.2, p. 89', answer: 0,
    en: { q: '100 g of water at 90 °C is mixed with 600 g of water at 20 °C. The final temperature of the mixture is', options: ['30 °C', '55 °C', '80 °C', '40 °C'], explanation: 'Heat lost = heat gained: 100(90 – T) = 600(T – 20) ⇒ 700T = 21000 ⇒ T = 30 °C. (55 °C is the simple average, wrongly ignoring the masses.)' },
    ta: { q: '90 °C இல் இருக்கும் 100 கி நீரும் 20 °C இல் இருக்கும் 600 கி நீரும் கலக்கப்படுகின்றன. கலவையின் இறுதி வெப்பநிலை', options: ['30 °C', '55 °C', '80 °C', '40 °C'], explanation: 'இழந்த வெப்பம் = பெற்ற வெப்பம்: 100(90 – T) = 600(T – 20) ⇒ 700T = 21000 ⇒ T = 30 °C. (55 °C என்பது நிறையைக் கருதாத சராசரி.)' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VI.3, p. 89', answer: 0,
    en: { q: 'Heat needed to change 2 kg of ice at 0 °C into water at 20 °C (L = 3,34,000 J/kg, C = 4200 J kg⁻¹ K⁻¹) is', options: ['8,36,000 J', '6,68,000 J', '1,68,000 J', '5,02,000 J'], explanation: 'Melting: mL = 2 × 334000 = 6,68,000 J; heating: mCΔT = 2 × 4200 × 20 = 1,68,000 J; total 8,36,000 J.' },
    ta: { q: '0 °C இல் இருக்கும் 2 கிகி பனிக்கட்டியை 20 °C நீராக மாற்றத் தேவைப்படும் வெப்ப ஆற்றல் (உருகுதலின் உள்ளுறை வெப்பம் = 334000 J/கிகி, நீரின் தன் வெப்ப ஏற்புத் திறன் = 4200 J/கிகி/K)', options: ['8,36,000 J', '6,68,000 J', '1,68,000 J', '5,02,000 J'], explanation: 'உருகுதல்: mL = 2 × 334000 = 6,68,000 J; வெப்பமாக்கல்: mCΔT = 2 × 4200 × 20 = 1,68,000 J; மொத்தம் 8,36,000 J.' },
  },
  {
    difficulty: 'hard', source: 'Book example, Problem 6, p. 87', answer: 0,
    en: { q: 'How much boiling water at 100 °C is needed to melt 2 kg of ice so that the mixture is all water at 0 °C? (c of water = 4.2 J g⁻¹ K⁻¹, L of ice = 336 J g⁻¹)', options: ['1.6 kg', '2.5 kg', '0.16 kg', '16 kg'], explanation: 'm × 4.2 × 100 = 2000 × 336 ⇒ m = 672000/420 = 1600 g = 1.6 kg.' },
    ta: { q: '2 கிகி பனிக்கட்டியை உருக்கி முழுவதும் 0 °C நீராக மாற்ற, 100 °C இல் உள்ள எவ்வளவு வெந்நீர் தேவை? (நீரின் தன் வெப்ப ஏற்புத் திறன் = 4.2 J கி⁻¹ K⁻¹, பனிக்கட்டியின் உள்ளுறை வெப்பம் = 336 J கி⁻¹)', options: ['1.6 கிகி', '2.5 கிகி', '0.16 கிகி', '16 கிகி'], explanation: 'm × 4.2 × 100 = 2000 × 336 ⇒ m = 672000/420 = 1600 கி = 1.6 கிகி.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise V.1, p. 89', answer: 0,
    en: { q: 'At night the air above the sea is warmer than the air above the land. The breeze that blows, and its direction, is', options: ['land breeze, from land to sea', 'sea breeze, from sea to land', 'land breeze, from sea to land', 'sea breeze, from land to sea'], explanation: 'Warm air over the sea rises and cooler air from above the land moves towards the sea: the land breeze.' },
    ta: { q: 'இரவில் கடலின் மேலுள்ள காற்று நிலத்தின் மேலுள்ள காற்றை விடச் சூடாக இருக்கும். அப்போது வீசும் காற்றும் அதன் திசையும்', options: ['நிலக் காற்று, நிலத்திலிருந்து கடலுக்கு', 'கடல் காற்று, கடலிலிருந்து நிலத்திற்கு', 'நிலக் காற்று, கடலிலிருந்து நிலத்திற்கு', 'கடல் காற்று, நிலத்திலிருந்து கடலுக்கு'], explanation: 'கடல் மேலுள்ள சூடான காற்று மேலெழ, நிலத்தின் மேலுள்ள குளிர்ந்த காற்று கடலை நோக்கி நகரும்: இதுவே நிலக் காற்று.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise V.2, p. 89', answer: 0,
    en: { q: 'Which statements about the changes of state of water are correct?\n1. Ice melts at 0 °C by absorbing heat.\n2. Water boils at 100 °C by absorbing heat.\n3. Steam condenses at 100 °C by releasing heat.\n4. Water freezes at 0 °C by absorbing heat.', options: ['1, 2 and 3 only', '1, 2, 3 and 4', '2 and 4 only', '1 and 4 only'], explanation: 'Freezing releases heat; the other three statements are correct.' },
    ta: { q: 'நீரின் நிலை மாற்றங்கள் பற்றிய சரியான கூற்றுகள் எவை?\n1. பனிக்கட்டி வெப்பத்தை உட்கவர்ந்து 0 °C இல் உருகுகிறது.\n2. நீர் வெப்பத்தை உட்கவர்ந்து 100 °C இல் கொதிக்கிறது.\n3. நீராவி வெப்பத்தை வெளியிட்டு 100 °C இல் குளிர்ந்து நீராகிறது.\n4. நீர் வெப்பத்தை உட்கவர்ந்து 0 °C இல் உறைகிறது.', options: ['1, 2, 3 மட்டும்', '1, 2, 3, 4', '2, 4 மட்டும்', '1, 4 மட்டும்'], explanation: 'உறைதலில் வெப்பம் வெளியிடப்படுகிறது; மற்ற மூன்று கூற்றுகளும் சரி.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise V.3, p. 89', answer: 0,
    en: { q: 'Water is a bad conductor of heat, yet it heats easily while cooking. This is because when the vessel is heated from below', options: ['hot water rises and cold water sinks, setting up convection currents', 'heat is conducted quickly through the water', 'water radiates heat to the bottom of the vessel', 'water molecules stay fixed and vibrate faster'], explanation: 'Heating from below lets warm, less dense water rise and cold water sink, so the whole water heats by convection.' },
    ta: { q: 'நீர் ஒரு அரிதிற் கடத்தி; ஆனாலும் சமைக்கும்போது எளிதாகச் சூடாகிறது. பாத்திரம் அடியில் சூடாக்கப்படும்போது இதற்குக் காரணம்', options: ['சூடான நீர் மேலெழுந்து குளிர்ந்த நீர் கீழிறங்கி வெப்பச் சலன ஓட்டம் ஏற்படுகிறது', 'நீரின் வழியே வெப்பம் விரைவாகக் கடத்தப்படுகிறது', 'நீர் பாத்திரத்தின் அடிக்கு வெப்பத்தைக் கதிர்வீசுகிறது', 'நீர் மூலக்கூறுகள் நகராமல் வேகமாக அதிர்கின்றன'], explanation: 'அடியில் சூடாக்கும்போது அடர்த்தி குறைந்த சூடான நீர் மேலெழுந்து குளிர்ந்த நீர் கீழிறங்குவதால் முழு நீரும் சலனம் மூலம் சூடாகிறது.' },
  },
  {
    difficulty: 'hard', source: '§7.2.3, p. 83 (Do you know?)', answer: 0,
    en: { q: 'While sitting near a wood fire: (i) the far end of a burning stick gets hot, (ii) the air above the fire rises, (iii) our hands facing the fire get warm. These are respectively due to', options: ['conduction, convection, radiation', 'convection, conduction, radiation', 'radiation, convection, conduction', 'conduction, radiation, convection'], explanation: 'Heat along the wood is conduction, rising warm air is convection, and the warmth on our hands arrives as radiation.' },
    ta: { q: 'விறகு எரியும்போது: (i) எரியும் குச்சியின் மறுமுனை சூடாகிறது, (ii) நெருப்பின் மேலுள்ள காற்று மேலெழுகிறது, (iii) நெருப்பை நோக்கிய கைகள் சூடாகின்றன. இவை முறையே', options: ['வெப்பக் கடத்தல், வெப்பச் சலனம், வெப்பக் கதிர்வீச்சு', 'வெப்பச் சலனம், வெப்பக் கடத்தல், வெப்பக் கதிர்வீச்சு', 'வெப்பக் கதிர்வீச்சு, வெப்பச் சலனம், வெப்பக் கடத்தல்', 'வெப்பக் கடத்தல், வெப்பக் கதிர்வீச்சு, வெப்பச் சலனம்'], explanation: 'விறகின் வழியே பரவுவது கடத்தல், மேலெழும் சூடான காற்று சலனம், கைகளை அடையும் வெப்பம் கதிர்வீச்சு.' },
  },
  {
    difficulty: 'hard', source: '§7.3.2, p. 84 (Fig. 7.7)', imageUrl: `${IMG}/pressure-temperature-graph.png`, answer: 0,
    en: { q: 'The graph shows how the pressure of three gases changes with temperature. All the lines extended meet the temperature axis at –273.15 °C. This temperature is called', options: ['absolute zero (0 K)', 'the triple point of water', 'the freezing point of water', 'the boiling point of the gases'], explanation: 'For all gases the pressure extrapolates to zero at –273.15 °C; this is absolute zero, 0 K.' },
    ta: { q: 'மூன்று வாயுக்களின் அழுத்தம் வெப்பநிலையைப் பொறுத்து மாறுவதை வரைபடம் காட்டுகிறது. நீட்டிக்கப்பட்ட கோடுகள் அனைத்தும் –273.15 °C இல் வெப்பநிலை அச்சைச் சந்திக்கின்றன. இந்த வெப்பநிலை', options: ['தனிச் சுழி வெப்பநிலை (0 K)', 'நீரின் மும்மைப் புள்ளி', 'நீரின் உறைநிலை', 'வாயுக்களின் கொதிநிலை'], explanation: 'அனைத்து வாயுக்களின் அழுத்தமும் –273.15 °C இல் சுழியாகிறது; இதுவே தனிச் சுழி வெப்பநிலை, 0 K.' },
  },
  {
    difficulty: 'hard', source: '§7.6, p. 86 (Fig. 7.9)', imageUrl: `${IMG}/heating-curve.png`, answer: 0,
    en: { q: 'In this heating curve, the temperature stays constant along the two flat parts even though heat is being supplied. The heat supplied there is used as', options: ['latent heat to change the state', 'specific heat to raise the temperature', 'heat lost by radiation only', 'energy to expand the container'], explanation: 'During melting and boiling the heat absorbed changes the state without changing temperature: latent heat of fusion and of vaporisation.' },
    ta: { q: 'இந்த வெப்பமாக்கல் வரைபடத்தில், வெப்பம் அளிக்கப்பட்டும் இரண்டு கிடைமட்டப் பகுதிகளில் வெப்பநிலை மாறாமல் உள்ளது. அங்கு அளிக்கப்படும் வெப்பம் எதற்குப் பயன்படுகிறது?', options: ['நிலையை மாற்றும் உள்ளுறை வெப்பமாக', 'வெப்பநிலையை உயர்த்தும் தன் வெப்பமாக', 'கதிர்வீச்சில் இழக்கப்படும் வெப்பமாக மட்டும்', 'கலனை விரிவடையச் செய்யும் ஆற்றலாக'], explanation: 'உருகும்போதும் கொதிக்கும்போதும் உட்கவரப்படும் வெப்பம் வெப்பநிலையை மாற்றாமல் நிலையை மாற்றுகிறது: உருகுதலின் மற்றும் ஆவியாதலின் உள்ளுறை வெப்பம்.' },
  },
  {
    difficulty: 'hard', source: '§7.4, p. 85', answer: 0,
    en: { q: 'Equal masses of water and land absorb the same heat from the Sun. Which statement is correct?', options: ['The land gets hotter, because water has a higher specific heat capacity', 'The water gets hotter, because water has a higher specific heat capacity', 'Both reach the same temperature, because the heat is the same', 'The land gets hotter, because land has a higher specific heat capacity'], explanation: 'ΔT = Q/(mC); water has the highest C, so its temperature rises least. That is why lake water stays at almost the same temperature.' },
    ta: { q: 'சம நிறையுள்ள நீரும் நிலமும் சூரியனிடமிருந்து ஒரே அளவு வெப்பத்தைப் பெறுகின்றன. சரியான கூற்று எது?', options: ['நிலம் அதிகம் சூடாகும்; நீரின் தன் வெப்ப ஏற்புத் திறன் அதிகம்', 'நீர் அதிகம் சூடாகும்; நீரின் தன் வெப்ப ஏற்புத் திறன் அதிகம்', 'வெப்பம் சமம் என்பதால் இரண்டும் ஒரே வெப்பநிலையை அடையும்', 'நிலம் அதிகம் சூடாகும்; நிலத்தின் தன் வெப்ப ஏற்புத் திறன் அதிகம்'], explanation: 'ΔT = Q/(mC); நீரின் C மிக அதிகம் என்பதால் அதன் வெப்பநிலை குறைவாகவே உயரும். அதனால்தான் ஏரி நீரின் வெப்பநிலை பெரிதும் மாறுவதில்லை.' },
  },
  {
    difficulty: 'hard', source: '§7.4, p. 85 (Do you know?)', answer: 0,
    en: { q: 'Using the book values (ice 2100, water 4200 J kg⁻¹ K⁻¹), the heat needed to warm 1 kg of ice from –10 °C to 0 °C and the heat to warm 1 kg of water from 0 °C to 10 °C are', options: ['21,000 J and 42,000 J', '42,000 J and 21,000 J', '21,000 J and 21,000 J', '2100 J and 4200 J'], explanation: 'Q = mCΔT: ice 1 × 2100 × 10 = 21,000 J; water 1 × 4200 × 10 = 42,000 J. The same substance has different specific heats in different states.' },
    ta: { q: 'பாடநூல் மதிப்புகளின்படி (பனிக்கட்டி 2100, நீர் 4200 J கிகி⁻¹ K⁻¹), 1 கிகி பனிக்கட்டியை –10 °C இலிருந்து 0 °C க்கும், 1 கிகி நீரை 0 °C இலிருந்து 10 °C க்கும் சூடாக்கத் தேவையான வெப்பங்கள்', options: ['21,000 J மற்றும் 42,000 J', '42,000 J மற்றும் 21,000 J', '21,000 J மற்றும் 21,000 J', '2100 J மற்றும் 4200 J'], explanation: 'Q = mCΔT: பனிக்கட்டி 1 × 2100 × 10 = 21,000 J; நீர் 1 × 4200 × 10 = 42,000 J. ஒரே பொருள் வெவ்வேறு நிலைகளில் வெவ்வேறு தன் வெப்ப ஏற்புத் திறன் கொண்டது.' },
  },
  {
    difficulty: 'hard', source: '§7.3.2, p. 83', answer: 0,
    en: { q: 'At what temperature do the Celsius and Fahrenheit scales show the same reading?', options: ['–40', '0', '32', '–273'], explanation: 'Put F = C in F = (9/5)C + 32: C – 1.8C = 32 ⇒ C = –40. So –40 °C = –40 °F.' },
    ta: { q: 'எந்த வெப்பநிலையில் செல்சியஸ், ஃபாரன்ஹீட் அளவீடுகள் ஒரே அளவைக் காட்டும்?', options: ['–40', '0', '32', '–273'], explanation: 'F = (9/5)C + 32 இல் F = C எனப் பிரதியிட: C – 1.8C = 32 ⇒ C = –40. எனவே –40 °C = –40 °F.' },
  },
  {
    difficulty: 'hard', source: '§7.2.3, p. 83', answer: 0,
    en: { q: 'Which of these statements about radiation are correct?\n1. It can take place in vacuum.\n2. It travels as electromagnetic waves at the speed of light.\n3. It is emitted only by very hot bodies.\n4. Airplane surfaces are polished to reflect heat radiation.', options: ['1, 2 and 4 only', '1, 2, 3 and 4', '1 and 3 only', '2 and 3 only'], explanation: 'Radiation is emitted by all bodies above 0 K, so statement 3 is wrong; the rest are from the book.' },
    ta: { q: 'வெப்பக் கதிர்வீச்சு பற்றிய சரியான கூற்றுகள் எவை?\n1. இது வெற்றிடத்திலும் நிகழும்.\n2. இது ஒளியின் வேகத்தில் மின்காந்த அலைகளாகப் பரவும்.\n3. மிகச் சூடான பொருள்கள் மட்டுமே இதை வெளியிடும்.\n4. வெப்பக் கதிர்வீச்சை எதிரொளிக்க விமானத்தின் மேற்பரப்பு பளபளப்பாக்கப்படுகிறது.', options: ['1, 2, 4 மட்டும்', '1, 2, 3, 4', '1, 3 மட்டும்', '2, 3 மட்டும்'], explanation: '0 K க்கு மேல் உள்ள அனைத்துப் பொருள்களும் கதிர்வீச்சை வெளியிடும்; எனவே கூற்று 3 தவறு, மற்றவை சரி.' },
  },
];
