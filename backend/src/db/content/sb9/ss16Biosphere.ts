// Tamil Nadu State Board, 9th Social Science, Unit 16 – Geography: Biosphere (உயிர்க்கோளம்).
// Book exercise questions (Geography Unit 5) plus our own questions covering every section.
// source = section or exercise and printed page of the English-medium book; Tamil wording follows the Tamil-medium book.

import { BankQuestion, AR_EN, AR_TA } from './types';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.1, p. 207', answer: 0,
    en: { q: 'The coldest biome on Earth is', options: ['Tundra', 'Taiga', 'Desert', 'Oceans'], explanation: 'The tundra has long severe winters and short cool summers, and its ground remains frozen.' },
    ta: { q: 'புவியின் குளிர்ச்சியான பல்லுயிர்த்தொகுதி', options: ['தூந்திரா', 'டைகா', 'பாலைவனம்', 'பெருங்கடல்கள்'], explanation: 'தூந்திரப் பகுதியில் குளிர்காலம் நீண்ட கடுங்குளிரைக் கொண்டிருக்கும்; நிலம் பெரும்பாலும் உறைந்தே காணப்படும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.2, p. 207', answer: 0,
    en: { q: 'The smallest unit of the biosphere is the', options: ['ecosystem', 'biome', 'environment', 'hotspot'], explanation: 'The biosphere is made up of different ecosystems and biomes; ecosystems range from the smallest units, such as the bark of a tree.' },
    ta: { q: 'உயிர்க்கோளத்தின் மிகச் சிறிய அலகு', options: ['சூழ்நிலை மண்டலம்', 'பல்லுயிர்த் தொகுதி', 'சுற்றுச்சூழல்', 'வள மையம்'], explanation: 'உயிர்க்கோளம் பல்வேறு சூழ்நிலை மண்டலங்களாலும் பல்லுயிர்த் தொகுதிகளாலும் ஆனது; சூழ்நிலை மண்டலம் மரப்பட்டை போன்ற மிகச் சிறிய அலகிலிருந்து தொடங்குகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.3, p. 207', answer: 0,
    en: { q: 'Nutrients are recycled in the atmosphere with the help of certain micro-organisms, referred to as', options: ['Decomposers', 'Producers', 'Consumers', 'Herbivores'], explanation: 'Decomposers live on dead and decaying plants and animals and break them down.' },
    ta: { q: 'வளிமண்டலத்தில் உள்ள நுண்ணுயிரிகளைக் கொண்டு, ஊட்டச்சத்துக்களை மறுசுழற்சி செய்வோர்', options: ['சிதைப்போர்கள்', 'உற்பத்தியாளர்கள்', 'நுகர்வோர்கள்', 'தாவர உண்ணிகள்'], explanation: 'சிதைப்போர்கள் இறந்த, அழுகிய தாவரங்கள் மற்றும் விலங்கினங்களை உணவாக உட்கொண்டு வாழ்கின்றன.' },
  },
  {
    difficulty: 'easy', source: '§5 Introduction, p. 202', answer: 0,
    en: { q: 'The vertical range of the biosphere, measured from the ocean floor to the troposphere, is approximately', options: ['20 km', '1 km', '5 km', '50 km'], explanation: 'The biosphere extends vertically for about 20 km, from the ocean floor to the troposphere.' },
    ta: { q: 'உயிர்க்கோளம் வளிமண்டலத்தின் கீழ் அடுக்கு (Troposphere) வரை பரவியுள்ள உயரம் சுமார்', options: ['20 கி.மீ.', '1 கி.மீ.', '5 கி.மீ.', '50 கி.மீ.'], explanation: 'உயிர்க்கோளம் வளிமண்டலத்தின் கீழ் அடுக்கு (Troposphere) வரை சுமார் 20 கி.மீ. உயரம் வரை பரவியுள்ளது.' },
  },
  {
    difficulty: 'easy', source: '§5 Introduction, p. 202', answer: 0,
    en: { q: 'The area in which an animal, plant or micro-organism lives is called its', options: ['habitat', 'biome', 'trophic level', 'food web'], explanation: 'The place where an organism lives is its habitat.' },
    ta: { q: 'விலங்கு, தாவரம் மற்றும் நுண்ணுயிரி எந்த இடத்தில் வாழ்கின்றதோ அவ்விடம் அவற்றின்', options: ['வாழ்விடம்', 'பல்லுயிர்த் தொகுதி', 'ஆற்றல் மட்டம்', 'உணவு வலை'], explanation: 'ஓர் உயிரினம் வாழும் இடம் அதன் வாழ்விடம் எனப்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: '§5.1, p. 203', answer: 0,
    en: { q: 'The branch of science that deals with ecosystems is called', options: ['Ecology', 'Seismology', 'Demography', 'Meteorology'], explanation: 'Ecology is the study of ecosystems; a person who studies it is an ecologist.' },
    ta: { q: 'சூழ்நிலை மண்டலத்தைப் பற்றி படிக்கும் அறிவியல்', options: ['சூழலியல்', 'நிலநடுக்கவியல்', 'மக்கள்தொகையியல்', 'வானிலையியல்'], explanation: 'சூழ்நிலை மண்டலத்தைப் பற்றி படிக்கும் அறிவியல் சூழலியல் (Ecology); அதைப் படிப்பவர் சூழலியலாளர்.' },
  },
  {
    difficulty: 'easy', source: '§5.1.1, p. 203', answer: 0,
    en: { q: 'The ultimate source of energy for the biosphere as a whole is', options: ['the Sun', 'the Moon', 'the producers', 'the decomposers'], explanation: 'The Sun is the ultimate source of energy; solar energy is transformed into other forms through the components of the ecosystem.' },
    ta: { q: 'உயிர்க்கோளம் முழுமைக்கும் ஆற்றலை வழங்கக்கூடியது', options: ['சூரியன்', 'சந்திரன்', 'உற்பத்தியாளர்கள்', 'சிதைப்போர்கள்'], explanation: 'உயிர்க்கோளம் முழுமைக்கும் சூரியனே ஆற்றலை வழங்குகிறது; சூரிய ஆற்றல் பிற ஆற்றல் வடிவங்களாக மாற்றப்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: '§5.1.1, p. 203', answer: 0,
    en: { q: 'Producers are self-nourishing components of the ecosystem. Hence they are called', options: ['Autotrophs', 'Heterotrophs', 'Saprotrophs', 'Carnivores'], explanation: 'Producers make their own food, so they are called autotrophs, e.g., plants, algae, bacteria.' },
    ta: { q: 'தமக்கு வேண்டிய உணவைத் தாமே உற்பத்தி செய்யும் உற்பத்தியாளர்கள் இவ்வாறும் அழைக்கப்படுகின்றனர்', options: ['தற்சார்பு ஊட்டஉயிரி', 'பிறச்சார்பு ஊட்டஉயிரி', 'சாறுண்ணிகள்', 'ஊன்உண்ணிகள்'], explanation: 'உற்பத்தியாளர்கள் தங்கள் உணவைத் தாமே தயாரிப்பதால் தற்சார்பு ஊட்டஉயிரி (Autotrophs) எனப்படுகின்றன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise III.4, p. 208', answer: 0,
    en: { q: 'A geographically extensive ecosystem where all flora and fauna are found collectively is a', options: ['biome', 'habitat', 'food chain', 'trophic level'], explanation: 'A biome is a geographically extensive ecosystem: the total assemblage of plant and animal life interacting within the biosphere.' },
    ta: { q: 'பல்வேறு வகையான தாவரங்களும் விலங்கினங்களும் இணைந்து வாழும் மிகப் பரந்த சூழ்நிலையியல் அமைப்பு', options: ['பல்லுயிர்த் தொகுதி', 'வாழ்விடம்', 'உணவுச் சங்கிலி', 'ஆற்றல் மட்டம்'], explanation: 'பல்லுயிர்த் தொகுதி (Biome) என்பது தாவரங்களும் விலங்கினங்களும் இணைந்து வாழும் மிகப் பரந்த சூழ்நிலையியல் அமைப்பாகும்.' },
  },
  {
    difficulty: 'easy', source: '§5.3.3, p. 207', answer: 0,
    en: { q: 'How many Biosphere Reserves are there in India?', options: ['18', '34', '28', '12'], explanation: 'The book states that there are 18 Biosphere Reserves in India.' },
    ta: { q: 'இந்தியாவில் உள்ள முக்கியமான உயிர்க்கோளக் காப்பகங்களின் எண்ணிக்கை', options: ['18', '34', '28', '12'], explanation: 'இந்தியாவில் பதினெட்டு முக்கியமான உயிர்க்கோளக் காப்பகங்கள் உள்ளன.' },
  },
  {
    difficulty: 'easy', source: '§5.3.1 E, p. 206', answer: 0,
    en: { q: 'In winter, the people of the tundra live in', options: ['igloos', 'tents', 'mud houses', 'tree houses'], explanation: 'Tundra people live in igloos in winter and in tents during summer.' },
    ta: { q: 'தூந்திரப் பகுதி மக்கள் குளிர்காலங்களில் வாழ்வது', options: ['“இக்ளு” என்ற பனி வீடுகளில்', 'கூடாரங்களில்', 'மண் வீடுகளில்', 'மர வீடுகளில்'], explanation: 'இவர்கள் குளிர்காலங்களில் “இக்ளு” என்ற பனி வீடுகளிலும், கோடை காலங்களில் கூடாரங்களிலும் வாழ்கிறார்கள்.' },
  },

  // ------------------------------------------------------------------ Medium
  {
    difficulty: 'medium', source: 'Book exercise I.4, p. 207', answer: 0,
    en: { q: 'To which climatic conditions are xerophytic plants specifically adapted?', options: ['Limited moisture availability', 'Saline and sandy', 'Cold temperature', 'Humid'], explanation: 'Xerophytes are the special vegetation of deserts, adapted to the lack of rainfall and arid conditions.' },
    ta: { q: 'பாலைவனத்தாவரங்கள் வளரும் சூழல்', options: ['குறைந்த அளவு ஈரப்பசை', 'உவர்ப்பியமுள்ள மணற்பகுதி', 'குளிர் வெப்பநிலை', 'ஈரப்பதம்'], explanation: 'மழைப்பொழிவு பற்றாக்குறை மற்றும் வறண்ட காலநிலைக்கு ஏற்ற தனித்துவமான தாவரங்களே பாலைவனத் தாவரங்கள் (Xerophytes).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.5, p. 208', answer: 0,
    en: { q: 'Why is the usage of rainforest biomes for large-scale agriculture unsustainable?', options: ['Because the soil is poor', 'Because it is too wet', 'Because the temperature is too warm', 'Because the soil is too thin'], explanation: 'Rainforest soils are poor in nutrients, so clearing the forest for large-scale farming cannot be sustained.' },
    ta: { q: 'மழைக்காடுகள் பல்லுயிர்த் தொகுதி அதிகளவு விவசாயத்திற்குப் பயன்படுத்த இயலாததற்குக் காரணம்', options: ['வளமற்ற மண்', 'மிக அதிகப்படியான ஈரப்பதம்', 'மிக அதிகமான வெப்பநிலை', 'மிக மெல்லிய மண்ணடுக்கு'], explanation: 'மழைக்காட்டு மண் வளமற்றது; எனவே காடுகளை அழித்துப் பெரிய அளவில் விவசாயம் செய்வது நீடிக்காது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.1, p. 208', answer: 0,
    en: { q: 'Assertion (A): Heterotrophs do not produce their own food.\nReason (R): They depend on autotrophs for their nourishment.', options: AR_EN, explanation: 'Heterotrophs (consumers) cannot make their own food, which is why they depend directly or indirectly on producers (autotrophs).' },
    ta: { q: 'கூற்று: பிறச்சார்பு ஊட்ட உயிரிகள் தங்கள் உணவை தாங்களே தயாரிக்க இயலாதவை.\nகாரணம்: ஊட்டச்சத்திற்காக இவை உற்பத்தியாளர்களைச் சார்ந்து இருக்கும்.', options: AR_TA, explanation: 'நுகர்வோர்கள் தங்கள் உணவைத் தாமே தயாரிக்க இயலாததால் உற்பத்தியாளர்களை நேரடியாகவோ மறைமுகமாகவோ சார்ந்துள்ளன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.2, p. 208', answer: 0,
    en: { q: 'Organisms that depend on producers directly or indirectly, and are therefore called heterotrophs, are', options: ['consumers', 'producers', 'decomposers', 'autotrophs'], explanation: 'Consumers depend on producers, directly or indirectly, so they are called heterotrophs.' },
    ta: { q: 'உற்பத்தியாளர்களை நேரடியாகவோ மறைமுகமாகவோ சார்ந்திருப்பதால் பிறச்சார்பு ஊட்டஉயிரிகள் என அழைக்கப்படுபவை', options: ['நுகர்வோர்கள்', 'உற்பத்தியாளர்கள்', 'சிதைப்போர்கள்', 'தற்சார்பு ஊட்டஉயிரிகள்'], explanation: 'நுகர்வோர்கள் உற்பத்தியாளர்களைச் சார்ந்திருப்பதால் பிறச்சார்பு ஊட்டஉயிரி (Heterotrophs) எனப்படுகின்றன.' },
  },
  {
    difficulty: 'medium', source: '§5.1.1, p. 203', answer: 0,
    en: { q: 'Primary consumers depend on producers for their food. They are exclusively', options: ['herbivores', 'small carnivores', 'top carnivores', 'saprotrophs'], explanation: 'Primary consumers are exclusively herbivores, e.g., zebra and goat.' },
    ta: { q: 'உணவிற்காக உற்பத்தியாளர்களைச் சார்ந்திருக்கும் முதல்நிலை நுகர்வோர்', options: ['தாவர உண்ணிகள்', 'ஊன்உண்ணிகள்', 'உயர்நிலை ஊன்உண்ணிகள்', 'சாறுண்ணிகள்'], explanation: 'முதல்நிலை நுகர்வோரைத் தாவர உண்ணிகள் என்கிறோம்; (எ.கா.) வரிக்குதிரை, ஆடு.' },
  },
  {
    difficulty: 'medium', source: '§5.1.1, p. 203', answer: 0,
    en: { q: 'Which of the following is given in the book as an example of a tertiary consumer?', options: ['Crocodile', 'Zebra', 'Snake', 'Mushroom'], explanation: 'Tertiary consumers are top carnivores, e.g., owl and crocodile; zebra is a primary consumer, snake a secondary consumer and mushroom a decomposer.' },
    ta: { q: 'கீழ்க்காண்பவற்றில் மூன்றாம்நிலை நுகர்வோருக்கு எடுத்துக்காட்டு', options: ['முதலை', 'வரிக்குதிரை', 'பாம்பு', 'காளான்'], explanation: 'மூன்றாம்நிலை நுகர்வோர் ஊன்உண்ணிகளில் உயர்நிலையில் உள்ளவை, (எ.கா.) ஆந்தை, முதலை; வரிக்குதிரை முதல்நிலை, பாம்பு இரண்டாம் நிலை நுகர்வோர், காளான் சிதைப்போர்.' },
  },
  {
    difficulty: 'medium', source: '§5.1.1, p. 203', answer: 0,
    en: { q: 'Decomposers live on dead and decaying plants and animals. Hence they are called', options: ['Saprotrophs', 'Autotrophs', 'Herbivores', 'Producers'], explanation: 'Decomposers such as fungus and mushrooms are called saprotrophs.' },
    ta: { q: 'இறந்த, அழுகிய தாவரங்கள் மற்றும் விலங்கினங்களை உணவாக உட்கொண்டு வாழும் சிதைப்போர்கள் இவ்வாறு அழைக்கப்படுகின்றன', options: ['சாறுண்ணிகள்', 'தற்சார்பு ஊட்டஉயிரி', 'தாவர உண்ணிகள்', 'உற்பத்தியாளர்கள்'], explanation: 'சிதைப்போர்கள் சாறுண்ணிகள் (Saprotrophs) என்று அழைக்கப்படுகின்றன; (உ.ம்.) பூஞ்சைகள், காளான்கள்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.3, p. 208', answer: 0,
    en: { q: 'A system of interlocking and interdependent food chains is called a', options: ['food web', 'trophic level', 'biome', 'habitat'], explanation: 'Interlocking and interdependent food chains together form a food web.' },
    ta: { q: 'உணவுச் சங்கிலிகள் ஒன்றினையொன்று சார்ந்து பிணைக்கப்பட்ட அமைப்பு', options: ['உணவு வலை', 'ஆற்றல் மட்டம்', 'பல்லுயிர்த் தொகுதி', 'வாழ்விடம்'], explanation: 'உணவுச் சங்கிலிகள் ஒன்றினையொன்று சார்ந்து பிணைக்கப்பட்ட அமைப்பு உணவு வலை (Food Web) எனப்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: '§5.1.2, p. 203', answer: 0,
    en: { q: 'Energy flow in an ecosystem takes place in a hierarchical order through various levels. These levels are called', options: ['trophic levels', 'food webs', 'biomes', 'hotspots'], explanation: 'The levels through which energy flows in a hierarchical order are called trophic levels.' },
    ta: { q: 'சூழ்நிலை மண்டலத்தில் ஆற்றல் ஓட்டம் படிநிலை ஒழுங்கு முறையில் நடைபெறும் நிலைகள்', options: ['ஆற்றல் மட்டம்', 'உணவு வலை', 'பல்லுயிர்த் தொகுதி', 'வள மையம்'], explanation: 'ஆற்றல் ஓட்டம் படிநிலை ஒழுங்கு முறையில் நடைபெறும் நிலைகள் ஆற்றல் மட்டம் எனப்படுகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.6, p. 208', answer: 0,
    en: { q: 'The aquatic biome found where fresh water and salt water mix is', options: ['an estuary', 'a coral reef', 'a pond', 'a stream'], explanation: 'Estuaries, coastal areas where salt water and fresh water mix, form a unique marine biome.' },
    ta: { q: 'நன்னீர் மற்றும் கடல் நீர் கலக்கும் இடத்தில் காணப்படும் நீர் வாழ் பல்லுயிர்த்தொகுதி', options: ['கழிமுகம்', 'பவளப்பாறை', 'குளம்', 'ஓடை'], explanation: 'கடற்கரைப் பகுதிகள் மற்றும் கழிமுகங்களில் நன்னீரும் கடல்நீரும் கலந்த சூழல் காணப்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: '§5.3, p. 204', answer: 0,
    en: { q: 'An ecological region is considered a hotspot when it has lost more than what share of its original habitat?', options: ['70%', '50%', '30%', '90%'], explanation: 'An ecological region that has lost more than 70% of its original habitat is considered a hotspot.' },
    ta: { q: 'ஒரு சூழலியல் பிரதேசம் வள மையமாக (Hotspot) கருதப்பட, அது தன் சுயமான வாழ்விடத்தில் இழந்திருக்க வேண்டிய அளவு', options: ['70%ற்கும் மேல்', '50%ற்கும் மேல்', '30%ற்கும் மேல்', '90%ற்கும் மேல்'], explanation: 'ஒரு சூழலியல் பிரதேசத்தில் 70%ற்கும் மேலாக சுயமான வாழ்விடம் இழக்கப்பட்டால் அவ்விடம் வள மையமாகக் கருதப்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: '§5.3, p. 204', answer: 0,
    en: { q: 'How many areas around the world qualify as biodiversity hotspots?', options: ['34', '18', '70', '24'], explanation: 'There are 34 areas around the world which are qualified as biodiversity hotspots.' },
    ta: { q: 'உலகில் உயிரினப்பன்மை வள மையங்களாகக் (Hotspot) கருதப்படும் இடங்களின் எண்ணிக்கை', options: ['34', '18', '70', '24'], explanation: 'உலகில் 34 இடங்கள் உயிரினப்பன்மை வள மையங்களாகக் கருதப்படுகின்றன.' },
  },
  {
    difficulty: 'medium', source: '§5.3.1, p. 204', answer: 0,
    en: { q: 'Terrestrial biomes are mainly determined by', options: ['temperature and rainfall', 'soil and relief', 'latitude and longitude', 'altitude and winds'], explanation: 'Terrestrial biomes are mainly determined by temperature and rainfall.' },
    ta: { q: 'நிலவாழ் பல்லுயிர்த் தொகுதியில் வாழ்கின்ற சூழலைத் தீர்மானிப்பவை', options: ['வெப்பமும் மழையும்', 'மண்ணும் நிலத்தோற்றமும்', 'அட்சமும் தீர்க்கமும்', 'உயரமும் காற்றும்'], explanation: 'நிலவாழ் பல்லுயிர்த் தொகுதியில் வெப்பமும் மழையும் வாழ்கின்ற சூழலைத் தீர்மானிக்கின்றன.' },
  },
  {
    difficulty: 'hard', source: '§5.3.1 B, p. 205', answer: 0,
    en: { q: 'Tropical Savanna biomes are found between', options: ['10° and 20° North and South latitudes', '20° and 30° North and South latitudes', '0° and 10° North and South latitudes', '40° and 60° North and South latitudes'], explanation: 'Tropical Savanna biomes lie between 10° and 20° North and South latitudes, between tropical forests and deserts.' },
    ta: { q: 'வெப்ப மண்டல சவானா பல்லுயிர்த் தொகுதி காணப்படும் அட்சப் பகுதி', options: ['10° முதல் 20° வட, தென் அட்சங்கள்', '20° முதல் 30° வட, தென் அட்சங்கள்', '0° முதல் 10° வட, தென் அட்சங்கள்', '40° முதல் 60° வட, தென் அட்சங்கள்'], explanation: 'சவானா பல்லுயிர்த் தொகுதி 10° முதல் 20° வட, தென் அட்சங்களுக்கு இடையே, வெப்ப மண்டலக் காடுகளுக்கும் பாலைவனங்களுக்கும் இடையே காணப்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: '§5.3.1 C, p. 205', answer: 0,
    en: { q: 'The annual rainfall in desert biomes is less than', options: ['25 cm', '50 cm', '75 cm', '100 cm'], explanation: 'Deserts lie on the western margins of continents between 20° and 30° N and S, with annual rainfall below 25 cm.' },
    ta: { q: 'பாலைவனப் பல்லுயிர்த் தொகுதியில் ஆண்டுச் சராசரி மழைப்பொழிவு இதைவிடக் குறைவு', options: ['25 செ.மீ.', '50 செ.மீ.', '75 செ.மீ.', '100 செ.மீ.'], explanation: 'பாலைவனங்கள் 20° முதல் 30° வட, தென் அட்சங்களுக்கிடையே காணப்படுகின்றன; இங்கு ஆண்டுச் சராசரி மழைப்பொழிவு 25 செ.மீட்டருக்கும் குறைவு.' },
  },
  {
    difficulty: 'easy', source: '§5.3.1 C, p. 205', answer: 0,
    en: { q: 'An oasis, a fertile fresh water source in deserts and semi-arid regions, is fed by', options: ['springs', 'glaciers', 'canals', 'monsoon rivers'], explanation: 'Oases are fed by springs; date palms, figs, citrus fruits and maize are grown near them.' },
    ta: { q: 'பாலைவனங்களில் காணப்படும் வளமான நன்னீர்ப் பகுதியான பாலைவனச் சோலை நீரைப் பெறுவது', options: ['நீருற்றிலிருந்து', 'பனியாறுகளிலிருந்து', 'கால்வாய்களிலிருந்து', 'பருவமழை ஆறுகளிலிருந்து'], explanation: 'பாலைவனச் சோலைகள் நீருற்றிலிருந்து நீரைப் பெறுகின்றன; பேரீச்சை, அத்தி, சிட்ரஸ் பழங்கள், மக்காச்சோளம் அருகில் விளைவிக்கப்படுகின்றன.' },
  },
  {
    difficulty: 'medium', source: '§5.3.2 B, p. 206', answer: 0,
    en: { q: 'The largest aquatic biomes on earth are the', options: ['marine biomes', 'freshwater biomes', 'wetland biomes', 'river biomes'], explanation: 'Marine biomes are the largest aquatic biomes; they are continuous bodies of saltwater.' },
    ta: { q: 'புவியில் காணப்படும் மிகப்பெரிய நீர்வாழ் பல்லுயிர்த்தொகுதி', options: ['கடல்நீர் வாழ் பல்லுயிர்த் தொகுதி', 'நன்னீர் வாழ் பல்லுயிர்த் தொகுதி', 'சதுப்பு நிலப் பல்லுயிர்த் தொகுதி', 'ஆற்று நீர் பல்லுயிர்த் தொகுதி'], explanation: 'புவியின் மிகப்பெரிய நீர்வாழ் பல்லுயிர்த்தொகுதி கடல்நீர் வாழ் பல்லுயிர்த் தொகுதியாகும்.' },
  },
  {
    difficulty: 'medium', source: '§5.3.1 B, p. 205', answer: 0,
    en: { q: 'The chief occupation of the people of the tropical Savanna biome is', options: ['herding', 'lumbering', 'fishing', 'mechanised wheat farming'], explanation: 'Savanna grass is tall and sharp, so the chief occupation is herding; the primitive people here are nomadic.' },
    ta: { q: 'வெப்ப மண்டல சவானா பல்லுயிர்த் தொகுதியில் வாழும் மக்களின் முக்கியத் தொழில்', options: ['கால்நடை மேய்த்தல்', 'மரம் வெட்டுதல்', 'மீன் பிடித்தல்', 'இயந்திரமயமாக்கப்பட்ட கோதுமை விவசாயம்'], explanation: 'இங்கு புற்கள் உயரமாகவும் கூர்மையாகவும் இருப்பதால் மக்களின் முக்கியத் தொழில் கால்நடை மேய்த்தல்; இவர்கள் நாடோடிகள்.' },
  },
  {
    difficulty: 'hard', source: '§5.3.1 E, p. 206', answer: 0,
    en: { q: 'Which of the following animals is found in the tundra biome?', options: ['Reindeer', 'Jaguar', 'Giraffe', 'Bison'], explanation: 'Tundra fauna include the polar bear, wolverine, reindeer and snowy owl; jaguars live in tropical forests, giraffes in savannas and bison in temperate grasslands.' },
    ta: { q: 'கீழ்க்காண்பவற்றில் தூந்திரப் பல்லுயிர்த் தொகுதியில் காணப்படும் விலங்கு', options: ['துருவமான்', 'சிறுத்தை', 'ஒட்டகச் சிவிங்கி', 'காட்டெருமை'], explanation: 'துருவக்கரடிகள், ஓநாய்கள், துருவமான்கள் போன்றவை தூந்திரப் பகுதியில் உள்ளன; சிறுத்தை வெப்பமண்டலக் காடுகளிலும், ஒட்டகச் சிவிங்கி சவானாவிலும், காட்டெருமை மிதவெப்ப மண்டலப் புல்வெளியிலும் காணப்படுகின்றன.' },
  },

  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise II.2, p. 208', answer: 0,
    en: { q: 'Assertion (A): Hotspots are the regions characterised by numerous endemic plants and animal species living in a vulnerable environment.\nReason (R): To manage and focus on conservation work more effectively, researchers identified hotspots.', options: AR_EN, explanation: 'Hotspots are biologically rich but deeply threatened areas; researchers identified them so that conservation work could be focused on them.' },
    ta: { q: 'கூற்று: குறிப்பிட்ட பகுதிகளில் மட்டும் காணப்படக்கூடியதும் எளிதில் பாதிக்கப்படும் சூழலில் வாழும் பலவகையான தாவரங்களும் விலங்குகளும் கொண்ட பகுதியே வளமையம் ஆகும்.\nகாரணம்: இப்பகுதி சிறப்பான கவனம் கொண்டு பாதுகாக்கப்பட வேண்டும், ஆராய்ச்சியாளர்கள் இதனை அடையாளங் காண்பர்.', options: AR_TA, explanation: 'வள மையங்கள் உயிரின வளம் மிகுந்தவை, அதேசமயம் பாதிப்புக்கு உள்ளானவை; எனவே பாதுகாப்புப் பணிகளைக் கவனமாக மேற்கொள்ள ஆராய்ச்சியாளர்கள் அவற்றை அடையாளம் கண்டனர்.' },
  },
  {
    difficulty: 'hard', source: '§5.3, p. 204', answer: 0,
    en: { q: 'Which of the following is NOT one of the hotspots in India named in the book?', options: ['Thar Desert', 'Himalayas', 'Western Ghats', 'Sundaland'], explanation: 'The hotspots in India named in the book are the Himalayas, Western Ghats, Indo-Burma Region and Sundaland.' },
    ta: { q: 'கீழ்க்காண்பவற்றில் இந்தியாவின் வள மையங்களில் (Hotspot) ஒன்று அல்லாதது', options: ['தார் பாலைவனம்', 'இமயமலைகள்', 'மேற்கு தொடர்ச்சி மலைகள்', 'சுந்தா நிலப்பகுதி'], explanation: 'இந்தியாவின் இமயமலைகள், மேற்கு தொடர்ச்சி மலைகள், இந்தோ பர்மா பிரதேசம், சுந்தா நிலப்பகுதி போன்றவை வள மையங்களாகும்.' },
  },
  {
    difficulty: 'hard', source: '§5.3.1 D, p. 206', answer: 0,
    en: { q: 'Which pair of temperate grassland and region is correctly matched?', options: ['Downs – Australia', 'Steppes – North America', 'Veld – Argentina and Uruguay', 'Prairies – Eurasia'], explanation: 'Prairies – North America, Steppes – Eurasia, Pampas – Argentina and Uruguay, Veld – South Africa, Downs – Australia.' },
    ta: { q: 'மிதவெப்ப மண்டலப் புல்வெளியும் அது காணப்படும் பகுதியும் சரியாகப் பொருந்தியுள்ள இணை', options: ['டௌன்ஸ் – ஆஸ்திரேலியா', 'ஸ்டெப்பி – வட அமெரிக்கா', 'வெல்ட் – அர்ஜென்டினா மற்றும் உருகுவே', 'ப்ரெய்ரி – யுரேஷியா'], explanation: 'ப்ரெய்ரி – வட அமெரிக்கா, ஸ்டெப்பி – யுரேஷியா, பாம்பாஸ் – அர்ஜென்டினா மற்றும் உருகுவே, வெல்ட் – தென்ஆப்பிரிக்கா, டௌன்ஸ் – ஆஸ்திரேலியா.' },
  },
  {
    difficulty: 'hard', source: '§5.3.1 A, p. 205', answer: 0,
    en: { q: 'According to the U.S. National Cancer Institute, about what share of the plants used for treating cancer are found only in rain forests?', options: ['70%', '18%', '34%', '25%'], explanation: 'About 70% of the plants used for treating cancer are found only in rain forests, e.g., Lapacho.' },
    ta: { q: 'அமெரிக்க ஐக்கிய நாடுகளின் புற்றுநோய் நிறுவனத்தின்படி, புற்றுநோயைக் குணப்படுத்தப் பயன்படும் தாவரங்களில் மழைக்காடுகளில் காணப்படுபவை சுமார்', options: ['70%', '18%', '34%', '25%'], explanation: 'புற்றுநோயைக் குணப்படுத்தப் பயன்படுத்தப்படும் தாவரங்களில் சுமார் 70% மழைக்காடுகளில் காணப்படுகின்றன; (எ.கா.) லப்போச்சா.' },
  },
  {
    difficulty: 'hard', source: '§5.3.1 A, p. 204', answer: 0,
    en: { q: 'Which terrestrial biome has the highest biodiversity and primary productivity?', options: ['Tropical forest biome', 'Tropical Savanna biome', 'Temperate grassland biome', 'Tundra biome'], explanation: 'Tropical forests have the highest biodiversity and primary productivity of any terrestrial biome, e.g., the Amazon basin, Congo basin and Indonesian islands.' },
    ta: { q: 'பிற நிலவாழ் பல்லுயிர்த் தொகுதிகளை விட பல்வேறு விதமான உயிரினங்களின் வாழ்விடமாகவும் முதன்மை உற்பத்தி மிகுந்ததாகவும் உள்ள பல்லுயிர்த் தொகுதி', options: ['வெப்பமண்டலக் காடுகள் பல்லுயிர்த் தொகுதி', 'வெப்ப மண்டல சவானா பல்லுயிர்த் தொகுதி', 'மித வெப்ப மண்டல புல்வெளி பல்லுயிர்த் தொகுதி', 'தூந்திரப் பல்லுயிர்த் தொகுதி'], explanation: 'பிற நிலவாழ் பல்லுயிர்த் தொகுதிகளை விட வெப்ப மண்டலக் காடுகள் பல்வேறு விதமான உயிரினங்களின் வாழ்விடமாக உள்ளன; (எ.கா.) அமேசான் படுகை, காங்கோ படுகை, இந்தோனேசியத் தீவுகள்.' },
  },
  {
    difficulty: 'hard', source: '§5.3.1 E, p. 206', answer: 0,
    en: { q: 'Why is the net primary productivity very low in the tundra?', options: ['Low temperature and short growing seasons', 'Excessive rainfall leaches the soil', 'The soil is sandy and saline', 'Dense forests block the sunlight'], explanation: 'Because of the prevailing low temperature and short growing seasons, net primary productivity is very low in the tundra.' },
    ta: { q: 'தூந்திரப் பகுதியில் முதன்மை உற்பத்தித் திறன் மிகக் குறைவாகக் காணப்படக் காரணம்', options: ['மிகக்குறைந்த வெப்பநிலையும் குறுகிய கால பருவத் தாவரங்களும்', 'அதிக மழையால் மண் அரிக்கப்படுதல்', 'மணல் உவர்ப்பாக இருத்தல்', 'அடர்ந்த காடுகள் சூரிய ஒளியைத் தடுத்தல்'], explanation: 'மிகக்குறைந்த வெப்பநிலை காரணமாக குறுகிய கால பருவத் தாவரங்கள் மட்டுமே காணப்படுவதால் முதன்மை உற்பத்தித் திறன் மிகக் குறைவு.' },
  },
  {
    difficulty: 'hard', source: '§5.3.1 D, p. 205', answer: 0,
    en: { q: 'Why is extensive mechanised agriculture practised in the temperate grasslands?', options: ['Due to lack of farm labour', 'Due to very high rainfall', 'Because the soil is frozen', 'Because the land is hilly'], explanation: 'Temperate grasslands favour wheat cultivation, and extensive mechanised agriculture is practised due to lack of farm labour.' },
    ta: { q: 'மிதவெப்பமண்டல புல்வெளிகளில் பரந்த அளவில் இயந்திரமயமாக்கப்பட்ட விவசாயம் நடைபெறக் காரணம்', options: ['விவசாயத் தொழிலாளர்களின் பற்றாக்குறை', 'மிக அதிகமான மழைப்பொழிவு', 'நிலம் உறைந்திருத்தல்', 'நிலம் மலைப்பாங்காக இருத்தல்'], explanation: 'இப்பிரதேசங்கள் கோதுமை பயிரிடுவதற்குச் சாதகமானவை; விவசாயத் தொழிலாளர்களின் பற்றாக்குறையினால் இயந்திரமயமாக்கப்பட்ட விவசாயம் நடைபெறுகிறது.' },
  },
  {
    difficulty: 'hard', source: '§5.3.3, p. 207', answer: 0,
    en: { q: 'According to the book, the primary cause of today’s loss of biodiversity is', options: ['habitat alteration caused by human activities', 'volcanic eruptions', 'changes in the Earth’s magnetic field', 'natural ageing of species'], explanation: 'The primary cause of today’s loss of biodiversity is habitat alteration caused by human activities; the growing population over-exploits biological resources.' },
    ta: { q: 'பாடநூலின்படி, இன்றைய உயிரினப்பன்மை இழப்பிற்கு முதன்மைக் காரணம்', options: ['மனித நடவடிக்கைகளால் ஏற்படும் வாழ்விட மாற்றம்', 'எரிமலை வெடிப்புகள்', 'புவி காந்தப்புல மாற்றங்கள்', 'உயிரினங்களின் இயற்கையான முதுமை'], explanation: 'உயிரினங்களின் அழிவிற்கும் இடமாற்றத்திற்கும் மனிதனின் நடவடிக்கைகள் முதன்மைக் காரணியாக உள்ளன; பெருகும் மக்கள்தொகையால் உயிரின வளங்கள் சுரண்டப்படுகின்றன.' },
  },
];
