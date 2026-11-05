// Tamil Nadu State Board, 9th Science, Unit 14 – Acids, Bases and Salts (அமிலங்கள், காரங்கள் மற்றும் உப்புகள்).
// Textbook exercises converted to MCQs plus our own questions covering every section.
// Tamil wording follows the terms used in the Tamil-medium textbook.
// source = section / exercise and printed page of the English-medium book.

import { BankQuestion, AR_EN, AR_TA } from './types';

const IMG = '/content/9/state_board/science/14';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.1, p. 170', answer: 0,
    en: { q: 'Complete the reaction: Zn + 2HCl → ZnCl₂ + _____ ↑', options: ['H₂', 'O₂', 'CO₂', 'Cl₂'], explanation: 'Active metals react with acids to give a salt and hydrogen gas.' },
    ta: { q: 'வினையை நிறைவு செய்க: Zn + 2HCl → ZnCl₂ + _____ ↑', options: ['H₂', 'O₂', 'CO₂', 'Cl₂'], explanation: 'வினைதிறன் மிக்க உலோகங்கள் அமிலங்களுடன் வினைபுரிந்து உப்பையும் ஹைட்ரஜன் வாயுவையும் தருகின்றன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.2, p. 170', answer: 0,
    en: { q: 'Apple contains malic acid. Orange contains', options: ['ascorbic acid', 'oxalic acid', 'tartaric acid', 'lactic acid'], explanation: 'Orange contains ascorbic acid; oxalic acid is in tomato, tartaric acid in grape and lactic acid in curd.' },
    ta: { q: 'ஆப்பிளில் உள்ள அமிலம் மாலிக் அமிலம். ஆரஞ்சில் உள்ள அமிலம்', options: ['அஸ்கார்பிக் அமிலம்', 'ஆக்ஸாலிக் அமிலம்', 'டார்டாரிக் அமிலம்', 'லாக்டிக் அமிலம்'], explanation: 'ஆரஞ்சில் அஸ்கார்பிக் அமிலம்; தக்காளியில் ஆக்ஸாலிக், திராட்சையில் டார்டாரிக், தயிரில் லாக்டிக் அமிலம் உள்ளன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.3, p. 170', answer: 0,
    en: { q: 'Acids in plants and animals are organic acids, whereas acids obtained from rocks and minerals are', options: ['inorganic acids', 'weak acids', 'organic acids', 'dilute acids'], explanation: 'Acids prepared from rocks and minerals, such as HCl, HNO₃ and H₂SO₄, are inorganic or mineral acids.' },
    ta: { q: 'தாவரங்கள், விலங்குகளில் உள்ளவை கரிம அமிலங்கள்; பாறைகளிலும் கனிமப் பொருள்களிலும் இருக்கும் அமிலங்கள்', options: ['கனிம அமிலங்கள்', 'வலிமை குறைந்த அமிலங்கள்', 'கரிம அமிலங்கள்', 'நீர்த்த அமிலங்கள்'], explanation: 'HCl, HNO₃, H₂SO₄ போன்று பாறைகள், கனிமங்களிலிருந்து பெறப்படும் அமிலங்கள் கனிம அமிலங்கள்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.4, p. 170', answer: 0,
    en: { q: 'Acids turn blue litmus paper', options: ['red', 'green', 'orange', 'yellow'], explanation: 'Acids turn blue litmus red; bases turn red litmus blue.' },
    ta: { q: 'அமிலமானது நீல லிட்மஸ் தாளை _____ ஆக மாற்றும்.', options: ['சிவப்பு', 'பச்சை', 'ஆரஞ்சு', 'மஞ்சள்'], explanation: 'அமிலம் நீல லிட்மஸை சிவப்பாக்கும்; காரம் சிவப்பு லிட்மஸை நீலமாக்கும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.5, p. 170', answer: 0,
    en: { q: 'Metal carbonates and metal hydrogen carbonates react with acids to give salt and water with the liberation of', options: ['CO₂', 'NO₂', 'SO₂', 'H₂'], explanation: 'For example, Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑.' },
    ta: { q: 'உலோக கார்பனேட்டுகளும் உலோக ஹைட்ரஜன் கார்பனேட்டுகளும் அமிலத்துடன் வினைபுரிந்து உப்பையும் நீரையும் தந்து வெளியேற்றும் வாயு', options: ['CO₂', 'NO₂', 'SO₂', 'H₂'], explanation: 'எ.கா. Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.6, p. 170', answer: 0,
    en: { q: 'The colour of hydrated copper sulphate is', options: ['blue', 'white', 'red', 'green'], explanation: 'Water of crystallisation makes CuSO₄·5H₂O blue; on heating it loses water and becomes white.' },
    ta: { q: 'நீரேற்றப்பட்ட காப்பர் சல்பேட்டின் நிறம்', options: ['நீலம்', 'வெள்ளை', 'சிவப்பு', 'பச்சை'], explanation: 'படிக நீர் CuSO₄·5H₂O க்கு நீல நிறம் தருகிறது; வெப்பப்படுத்தும்போது நீரை இழந்து வெண்மையாகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.6, p. 171', answer: 0,
    en: { q: 'Which acid is called the "King of Chemicals"?', options: ['Sulphuric acid', 'Hydrochloric acid', 'Nitric acid', 'Citric acid'], explanation: 'Sulphuric acid is used to prepare many other compounds, so it is called the King of Chemicals.' },
    ta: { q: '"வேதிப் பொருள்களின் அரசன்" எனப்படும் அமிலம் எது?', options: ['சல்பியூரிக் அமிலம்', 'ஹைட்ரோகுளோரிக் அமிலம்', 'நைட்ரிக் அமிலம்', 'சிட்ரிக் அமிலம்'], explanation: 'பல வேதிப்பொருள்களைத் தயாரிக்கப் பயன்படுவதால் சல்பியூரிக் அமிலம் வேதிப் பொருள்களின் அரசன் எனப்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.7, p. 171', answer: 0,
    en: { q: 'Aquaregia is a mixture of', options: ['hydrochloric acid and nitric acid in the molar ratio 3 : 1', 'nitric acid and hydrochloric acid in the molar ratio 3 : 1', 'sulphuric acid and nitric acid in the molar ratio 1 : 1', 'hydrochloric acid and sulphuric acid in the molar ratio 3 : 1'], explanation: 'Aquaregia is 3 parts HCl to 1 part HNO₃ (3HCl + HNO₃).' },
    ta: { q: 'இராஜ திராவகம் என்பது', options: ['ஹைட்ரோகுளோரிக் அமிலமும் நைட்ரிக் அமிலமும் 3 : 1 மோலார் விகிதத்தில் கலந்த கலவை', 'நைட்ரிக் அமிலமும் ஹைட்ரோகுளோரிக் அமிலமும் 3 : 1 மோலார் விகிதத்தில் கலந்த கலவை', 'சல்பியூரிக் அமிலமும் நைட்ரிக் அமிலமும் 1 : 1 விகிதத்தில் கலந்த கலவை', 'ஹைட்ரோகுளோரிக் அமிலமும் சல்பியூரிக் அமிலமும் 3 : 1 விகிதத்தில் கலந்த கலவை'], explanation: 'இராஜ திராவகம் = மூன்று பங்கு HCl + ஒரு பங்கு HNO₃ (3HCl + HNO₃).' },
  },
  {
    difficulty: 'easy', source: '§14.1, p. 162', answer: 0,
    en: { q: 'The word "acid" comes from the Latin word "acidus", which means', options: ['sour taste', 'bitter taste', 'soapy touch', 'salty taste'], explanation: 'Substances with a sour taste are called acids.' },
    ta: { q: '"அமிலம்" (acid) என்ற சொல் "acidus" என்ற இலத்தீன் சொல்லிலிருந்து வந்தது; அதன் பொருள்', options: ['புளிப்புச் சுவை', 'கசப்புச் சுவை', 'வழவழப்புத் தன்மை', 'உப்புச் சுவை'], explanation: 'புளிப்புச் சுவையுடைய பொருள்கள் அமிலங்கள் எனப்படுகின்றன.' },
  },
  {
    difficulty: 'easy', source: '§14.1, p. 163', answer: 0,
    en: { q: 'The sting of an ant or a bee contains', options: ['formic acid', 'acetic acid', 'citric acid', 'tannic acid'], explanation: 'Ant and bee stings contain formic acid (HCOOH).' },
    ta: { q: 'எறும்பு, தேனீயின் கொடுக்கில் உள்ள அமிலம்', options: ['பார்மிக் அமிலம்', 'அசிட்டிக் அமிலம்', 'சிட்ரிக் அமிலம்', 'டானிக் அமிலம்'], explanation: 'எறும்பு, தேனீயின் கொடுக்கில் பார்மிக் அமிலம் (HCOOH) உள்ளது.' },
  },
  {
    difficulty: 'easy', source: '§14.1, p. 163', answer: 0,
    en: { q: 'Vinegar contains', options: ['acetic acid', 'lactic acid', 'malic acid', 'oxalic acid'], explanation: 'Vinegar contains acetic acid (CH₃COOH).' },
    ta: { q: 'வினிகரில் உள்ள அமிலம்', options: ['அசிட்டிக் அமிலம்', 'லாக்டிக் அமிலம்', 'மாலிக் அமிலம்', 'ஆக்ஸாலிக் அமிலம்'], explanation: 'வினிகரில் அசிட்டிக் அமிலம் (CH₃COOH) உள்ளது.' },
  },
  {
    difficulty: 'easy', source: '§14.2, p. 165', answer: 0,
    en: { q: 'Bases that are soluble in water are called', options: ['alkalis', 'salts', 'indicators', 'acids'], explanation: 'Water-soluble bases such as NaOH and KOH are alkalis.' },
    ta: { q: 'நீரில் கரையும் காரங்கள் எவ்வாறு அழைக்கப்படுகின்றன?', options: ['எரிகாரங்கள்', 'உப்புகள்', 'நிறங்காட்டிகள்', 'அமிலங்கள்'], explanation: 'NaOH, KOH போன்ற நீரில் கரையும் காரங்கள் எரிகாரங்கள் (Alkali).' },
  },
  {
    difficulty: 'easy', source: '§14.2.2, p. 166', answer: 0,
    en: { q: 'Bases have a _____ taste.', options: ['bitter', 'sour', 'sweet', 'salty'], explanation: 'Bases taste bitter and their aqueous solutions feel soapy.' },
    ta: { q: 'காரங்கள் _____ சுவை உடையவை.', options: ['கசப்புச்', 'புளிப்புச்', 'இனிப்புச்', 'உப்புச்'], explanation: 'காரங்கள் கசப்புச் சுவை உடையவை; அவற்றின் நீர்க்கரைசல் வழவழப்புத் தன்மை கொண்டது.' },
  },
  {
    difficulty: 'easy', source: '§14.2.3, p. 167', answer: 0,
    en: { q: 'Which base is used in white washing of buildings?', options: ['Calcium hydroxide', 'Sodium hydroxide', 'Magnesium hydroxide', 'Ammonium hydroxide'], explanation: 'Calcium hydroxide is used for white washing; NaOH is for soap, Mg(OH)₂ for stomach disorders, NH₄OH for grease stains.' },
    ta: { q: 'கட்டடங்களுக்கு வெள்ளையடிக்கப் பயன்படும் காரம் எது?', options: ['கால்சியம் ஹைட்ராக்சைடு', 'சோடியம் ஹைட்ராக்சைடு', 'மெக்னீசியம் ஹைட்ராக்சைடு', 'அம்மோனியம் ஹைட்ராக்சைடு'], explanation: 'கால்சியம் ஹைட்ராக்சைடு வெள்ளையடிக்க; NaOH சோப்புத் தயாரிக்க; Mg(OH)₂ வயிற்றுக் கோளாறுக்கு; NH₄OH எண்ணெய்க் கறை நீக்க.' },
  },
  {
    difficulty: 'easy', source: '§14.3, p. 167', answer: 0,
    en: { q: 'In a basic medium, phenolphthalein is', options: ['pink', 'colourless', 'yellow', 'blue'], explanation: 'Phenolphthalein is colourless in acid and pink in base.' },
    ta: { q: 'காரக் கரைசலில் பீனாப்தலீனின் நிறம்', options: ['இளஞ்சிவப்பு', 'நிறமற்றது', 'மஞ்சள்', 'நீலம்'], explanation: 'பீனாப்தலீன் அமிலத்தில் நிறமற்றது; காரத்தில் இளஞ்சிவப்பு.' },
  },
  {
    difficulty: 'easy', source: '§14.4, p. 168', answer: 0,
    en: { q: 'A neutral solution has a pH of', options: ['7', '0', '14', '1'], explanation: 'On the pH scale (0–14), acids are below 7, bases above 7 and neutral solutions exactly 7.' },
    ta: { q: 'நடுநிலைக் கரைசலின் pH மதிப்பு', options: ['7', '0', '14', '1'], explanation: 'pH அளவீட்டில் (0–14) அமிலங்கள் 7 க்குக் கீழ், காரங்கள் 7 க்கு மேல், நடுநிலைக் கரைசல் 7.' },
  },
  {
    difficulty: 'easy', source: '§14.5.3, p. 169', answer: 0,
    en: { q: 'The chemical formula of washing soda is', options: ['Na₂CO₃', 'NaHCO₃', 'CaOCl₂', 'NaCl'], explanation: 'Washing soda is sodium carbonate, Na₂CO₃; NaHCO₃ is baking soda.' },
    ta: { q: 'சலவை சோடாவின் வேதி வாய்ப்பாடு', options: ['Na₂CO₃', 'NaHCO₃', 'CaOCl₂', 'NaCl'], explanation: 'சலவை சோடா சோடியம் கார்பனேட் Na₂CO₃; NaHCO₃ சமையல் சோடா.' },
  },
  {
    difficulty: 'easy', source: '§14.5.2, p. 168', answer: 0,
    en: { q: 'A substance which absorbs water from its surroundings is called', options: ['hygroscopic', 'anhydrous', 'neutral', 'amphoteric'], explanation: 'Salt is hygroscopic: it absorbs moisture from the surroundings.' },
    ta: { q: 'சுற்றுப்புறத்திலிருந்து நீரை ஈர்க்கும் பொருள்', options: ['ஹைக்ராஸ்கோபிக்', 'நீரற்ற', 'நடுநிலை', 'ஈரியல்பு'], explanation: 'உப்பு நீரை உறிஞ்சும் (ஹைக்ராஸ்கோபிக்) தன்மையுடையது.' },
  },

  // ------------------------------------------------------------------ Medium
  {
    difficulty: 'medium', source: 'Book exercise II.1, p. 170', answer: 0,
    en: { q: 'Based on their source, HCOOH and CH₃COOH are classified as', options: ['organic acids', 'mineral acids', 'strong acids', 'tribasic acids'], explanation: 'Acids present in living things, like formic acid and acetic acid, are organic acids.' },
    ta: { q: 'மூலங்களின் அடிப்படையில் HCOOH, CH₃COOH ஆகியவை', options: ['கரிம அமிலங்கள்', 'கனிம அமிலங்கள்', 'வலிமை மிகு அமிலங்கள்', 'மூன்று காரத்துவ அமிலங்கள்'], explanation: 'உயிரினங்களில் காணப்படும் பார்மிக், அசிட்டிக் அமிலம் போன்றவை கரிம அமிலங்கள்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.2, p. 170', answer: 0,
    en: { q: 'Which acid is used in aerated drinks?', options: ['Carbonic acid', 'Oxalic acid', 'Nitric acid', 'Hydrochloric acid'], explanation: 'Carbonic acid is used in aerated drinks; oxalic acid cleans and bleaches, nitric acid is for fertilizers and HCl for cleaning toilets.' },
    ta: { q: 'காற்று அடைக்கப்பட்ட பானங்களில் பயன்படும் அமிலம் எது?', options: ['கார்பானிக் அமிலம்', 'ஆக்ஸாலிக் அமிலம்', 'நைட்ரிக் அமிலம்', 'ஹைட்ரோகுளோரிக் அமிலம்'], explanation: 'கார்பானிக் அமிலம் காற்று அடைக்கப்பட்ட பானங்களில் பயன்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.2, p. 170', answer: 0,
    en: { q: 'Which acid is used in the manufacture of fertilizers, dyes, paints and drugs?', options: ['Nitric acid', 'Citric acid', 'Tartaric acid', 'Carbonic acid'], explanation: 'Nitric acid is used to make fertilizers, dyes, paints and drugs.' },
    ta: { q: 'உரங்கள், சாயங்கள், வண்ணப்பூச்சுகள், மருந்துகள் தயாரிக்கப் பயன்படும் அமிலம் எது?', options: ['நைட்ரிக் அமிலம்', 'சிட்ரிக் அமிலம்', 'டார்டாரிக் அமிலம்', 'கார்பானிக் அமிலம்'], explanation: 'நைட்ரிக் அமிலம் உரங்கள், சாயங்கள், வண்ணப்பூச்சுகள், மருந்துகள் தயாரிப்பில் பயன்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.3, p. 170', answer: 0,
    en: { q: 'A farmer finds that his field soil is too acidic for the crop. To raise the soil pH he should add', options: ['lime (calcium hydroxide)', 'dilute hydrochloric acid', 'vinegar', 'citric acid'], explanation: 'Crops need soil of suitable pH; a base such as lime neutralises excess acidity and raises the pH.' },
    ta: { q: 'ஒரு விவசாயியின் வயல் மண் பயிருக்குத் தேவையானதை விட அதிக அமிலத் தன்மை கொண்டுள்ளது. மண்ணின் pH ஐ உயர்த்த அவர் சேர்க்க வேண்டியது', options: ['சுண்ணாம்பு (கால்சியம் ஹைட்ராக்சைடு)', 'நீர்த்த ஹைட்ரோகுளோரிக் அமிலம்', 'வினிகர்', 'சிட்ரிக் அமிலம்'], explanation: 'பயிர்களுக்கு ஏற்ற pH உள்ள மண் தேவை; சுண்ணாம்பு போன்ற காரம் அதிகப்படியான அமிலத்தன்மையை நடுநிலையாக்கி pH ஐ உயர்த்தும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.4, p. 170', answer: 0,
    en: { q: 'Aquaregia is used for', options: ['cleaning and refining gold', 'softening hard water', 'plastering broken bones', 'making cakes soft'], explanation: 'Aquaregia dissolves noble metals such as gold and platinum and is used for cleaning and refining gold.' },
    ta: { q: 'இராஜ திராவகத்தின் பயன்', options: ['தங்கத்தை சுத்தம் செய்யவும் சுத்திகரிக்கவும்', 'கடின நீரை மென்னீராக்க', 'முறிந்த எலும்புகளை ஒட்ட', 'கேக்குகளை மென்மையாக்க'], explanation: 'இராஜ திராவகம் தங்கம், பிளாட்டினம் போன்ற உலோகங்களைக் கரைக்கும்; தங்கத்தை சுத்தம் செய்யவும் சுத்திகரிக்கவும் பயன்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.5, p. 170', answer: 0,
    en: { q: 'Plaster of Paris (CaSO₄·½H₂O) is used for', options: ['plastering fractured bones and making casts for statues', 'bleaching cotton and linen', 'softening hard water', 'neutralising excess stomach acid'], explanation: 'Plaster of Paris is used for plastering bones and making casts for statues.' },
    ta: { q: 'பாரிஸ் சாந்தின் (CaSO₄·½H₂O) பயன்', options: ['முறிந்த எலும்புகளை ஒட்டவும் சிலைகளுக்கான வார்ப்புகளைச் செய்யவும்', 'பருத்தி, லினன் துணிகளை வெளுக்க', 'கடின நீரை மென்னீராக்க', 'வயிற்றிலுள்ள அதிகப்படியான அமிலத்தை நடுநிலையாக்க'], explanation: 'பாரிஸ் சாந்து முறிந்த எலும்புகளை ஒட்டவும் சிலைகளுக்கான வார்ப்புகளைச் செய்யவும் பயன்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.6, p. 171', answer: 0,
    en: { q: 'Acid A gives one hydrogen ion per molecule and acid B gives two hydrogen ions per molecule in solution. A and B could be', options: ['A = HCl, B = H₂SO₄', 'A = H₂SO₄, B = HCl', 'A = H₃PO₄, B = HNO₃', 'A = H₂CO₃, B = H₃PO₄'], explanation: 'A is monobasic (HCl or HNO₃); B is dibasic (H₂SO₄ or H₂CO₃).' },
    ta: { q: 'A என்ற அமிலம் நீர்க்கரைசலில் ஒரு மூலக்கூறுக்கு ஒரு ஹைட்ரஜன் அயனியையும், B இரண்டு ஹைட்ரஜன் அயனிகளையும் தருகின்றன. A, B ஆகியவை', options: ['A = HCl, B = H₂SO₄', 'A = H₂SO₄, B = HCl', 'A = H₃PO₄, B = HNO₃', 'A = H₂CO₃, B = H₃PO₄'], explanation: 'A ஒற்றைக் காரத்துவ அமிலம் (HCl அல்லது HNO₃); B இரு காரத்துவ அமிலம் (H₂SO₄ அல்லது H₂CO₃).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.8, p. 171', answer: 0,
    en: { q: 'The salt used for making cakes and bread soft and spongy is', options: ['baking soda (NaHCO₃)', 'washing soda (Na₂CO₃)', 'bleaching powder (CaOCl₂)', 'plaster of Paris (CaSO₄·½H₂O)'], explanation: 'Baking powder, a mixture of baking soda and tartaric acid, makes cakes soft; washing soda is for softening hard water.' },
    ta: { q: 'கேக், ரொட்டிகளை மென்மையாக்கப் பயன்படும் உப்பு', options: ['சமையல் சோடா (NaHCO₃)', 'சலவை சோடா (Na₂CO₃)', 'சலவைத் தூள் (CaOCl₂)', 'பாரிஸ் சாந்து (CaSO₄·½H₂O)'], explanation: 'சமையல் சோடாவும் டார்டாரிக் அமிலமும் சேர்ந்த ரொட்டிச் சோடா கேக்குகளை மென்மையாக்கும்; சலவை சோடா கடின நீரை மென்னீராக்கும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.8, p. 171', answer: 0,
    en: { q: 'The substance used in the textile industry for bleaching cotton and linen is', options: ['calcium oxychloride (bleaching powder)', 'calcium sulphate hemihydrate', 'sodium bicarbonate', 'sodium chloride'], explanation: 'Bleaching powder, CaOCl₂, bleaches cotton and linen; calcium sulphate hemihydrate is plaster of Paris.' },
    ta: { q: 'துணி ஆலைகளில் பருத்தி, லினன் துணிகளை வெளுக்கப் பயன்படுவது', options: ['கால்சியம் ஆக்ஸிகுளோரைடு (சலவைத் தூள்)', 'கால்சியம் சல்பேட் ஹெமிஹைட்ரேட்', 'சோடியம் பைகார்பனேட்', 'சோடியம் குளோரைடு'], explanation: 'சலவைத் தூள் CaOCl₂ பருத்தி, லினனை வெளுக்கும்; கால்சியம் சல்பேட் ஹெமிஹைட்ரேட் பாரிஸ் சாந்து.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.9, p. 171', answer: 0,
    en: { q: 'The reaction between an acid and a base to give salt and water is called', options: ['neutralisation', 'oxidation', 'hydration', 'decomposition'], explanation: 'For example, HCl + NaOH → NaCl + H₂O is a neutralisation reaction.' },
    ta: { q: 'அமிலமும் காரமும் வினைபுரிந்து உப்பையும் நீரையும் தரும் வினை', options: ['நடுநிலையாக்கல் வினை', 'ஆக்ஸிஜனேற்றம்', 'நீரேற்றம்', 'சிதைவுறுதல்'], explanation: 'எ.கா. HCl + NaOH → NaCl + H₂O ஒரு நடுநிலையாக்கல் வினை.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.1, p. 171', answer: 0,
    en: { q: 'Which of these is an anhydrous salt?', options: ['CaCl₂', 'CuSO₄·5H₂O', 'ZnSO₄·7H₂O', 'FeSO₄·7H₂O'], explanation: 'Anhydrous salts contain no water of crystallisation; the others are hydrated salts.' },
    ta: { q: 'பின்வருவனவற்றுள் நீரற்ற உப்பு எது?', options: ['CaCl₂', 'CuSO₄·5H₂O', 'ZnSO₄·7H₂O', 'FeSO₄·7H₂O'], explanation: 'நீரற்ற உப்பில் படிக நீர் இல்லை; மற்றவை நீரேறிய உப்புகள்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.2, p. 171', answer: 0,
    en: { q: 'In an acidic medium, methyl orange turns', options: ['pink', 'yellow', 'colourless', 'blue'], explanation: 'Methyl orange is pink in acid and yellow in base.' },
    ta: { q: 'அமிலக் கரைசலில் மெத்தில் ஆரஞ்சின் நிறம்', options: ['இளஞ்சிவப்பு', 'மஞ்சள்', 'நிறமற்றது', 'நீலம்'], explanation: 'மெத்தில் ஆரஞ்சு அமிலத்தில் இளஞ்சிவப்பு; காரத்தில் மஞ்சள்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.3, p. 171', answer: 0,
    en: { q: 'Which base is used as a medicine for stomach disorders?', options: ['Magnesium hydroxide', 'Sodium hydroxide', 'Calcium hydroxide', 'Potassium hydroxide'], explanation: 'Magnesium hydroxide is used as a medicine for stomach disorders.' },
    ta: { q: 'வயிற்றுக் கோளாறுகளுக்கு மருந்தாகப் பயன்படும் காரம் எது?', options: ['மெக்னீசியம் ஹைட்ராக்சைடு', 'சோடியம் ஹைட்ராக்சைடு', 'கால்சியம் ஹைட்ராக்சைடு', 'பொட்டாசியம் ஹைட்ராக்சைடு'], explanation: 'மெக்னீசியம் ஹைட்ராக்சைடு வயிற்றுக் கோளாறுகளுக்கு மருந்தாகப் பயன்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.4, p. 171', answer: 0,
    en: { q: 'Washing soda is used for', options: ['softening hard water', 'plastering bones', 'disinfecting drinking water', 'making baking powder'], explanation: 'Sodium carbonate softens hard water and is used in glass, soap and paper industries.' },
    ta: { q: 'சலவை சோடாவின் பயன்', options: ['கடின நீரை மென்னீராக்குதல்', 'எலும்புகளை ஒட்டுதல்', 'குடிநீரைத் தொற்று நீக்குதல்', 'ரொட்டிச் சோடா தயாரித்தல்'], explanation: 'சோடியம் கார்பனேட் கடின நீரை மென்னீராக்கும்; கண்ணாடி, சோப்பு, பேப்பர் தொழிற்சாலைகளில் பயன்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.5, p. 171', answer: 0,
    en: { q: 'Sulphuric acid is called the King of Chemicals because', options: ['it is used in the preparation of many other compounds', 'it can dissolve gold', 'it is the weakest acid', 'it is found in all fruits'], explanation: 'Its use in making a large number of other compounds (and in car batteries) earns it this name.' },
    ta: { q: 'சல்பியூரிக் அமிலம் வேதிப் பொருள்களின் அரசன் எனப்படக் காரணம்', options: ['அது பல சேர்மங்களைத் தயாரிக்கப் பயன்படுகிறது', 'அது தங்கத்தைக் கரைக்கும்', 'அது மிக வலிமை குறைந்த அமிலம்', 'அது எல்லாப் பழங்களிலும் உள்ளது'], explanation: 'பல வேதிச் சேர்மங்களைத் தயாரிக்க (மற்றும் கார் மின்கலங்களில்) பயன்படுவதால் இப்பெயர் பெற்றது.' },
  },
  {
    difficulty: 'medium', source: '§14.1.1, p. 163', answer: 0,
    en: { q: 'Acetic acid (CH₃COOH) has four hydrogen atoms but is monobasic because', options: ['only one of its hydrogen atoms is replaceable', 'it ionises completely in water', 'it is an organic acid', 'it has only one oxygen atom'], explanation: 'Basicity is the number of replaceable hydrogen atoms; acetic acid has only one.' },
    ta: { q: 'அசிட்டிக் அமிலத்தில் (CH₃COOH) நான்கு ஹைட்ரஜன் அணுக்கள் இருந்தாலும் அது ஒற்றைக் காரத்துவ அமிலம். காரணம்', options: ['அதில் ஒரே ஒரு ஹைட்ரஜன் மட்டுமே இடப்பெயர்ச்சி செய்யக்கூடியது', 'அது நீரில் முழுமையாக அயனியுறுகிறது', 'அது ஒரு கரிம அமிலம்', 'அதில் ஒரே ஒரு ஆக்ஸிஜன் அணு உள்ளது'], explanation: 'காரத்துவம் என்பது இடப்பெயர்ச்சி செய்யக்கூடிய ஹைட்ரஜன் அணுக்களின் எண்ணிக்கை; அசிட்டிக் அமிலத்தில் அது ஒன்று.' },
  },
  {
    difficulty: 'medium', source: '§14.1.1, p. 164', answer: 0,
    en: { q: 'An acid that ionises only partially in water, such as CH₃COOH, is called a', options: ['weak acid', 'strong acid', 'concentrated acid', 'mineral acid'], explanation: 'Weak acids ionise partially; strong acids like HCl ionise completely.' },
    ta: { q: 'CH₃COOH போன்று நீரில் பகுதியளவு மட்டும் அயனியுறும் அமிலம்', options: ['வலிமை குறைந்த அமிலம்', 'வலிமை மிகு அமிலம்', 'செறிவு மிகு அமிலம்', 'கனிம அமிலம்'], explanation: 'வலிமை குறைந்த அமிலங்கள் பகுதியளவு அயனியுறும்; HCl போன்ற வலிமை மிகு அமிலங்கள் முழுமையாக அயனியுறும்.' },
  },
  {
    difficulty: 'medium', source: '§14.1, p. 163', answer: 0,
    en: { q: 'Methane (CH₄) and ammonia (NH₃) contain hydrogen but are not acids because', options: ['they do not produce H⁺ ions in aqueous solution', 'they are solids', 'they contain oxygen', 'they turn blue litmus red'], explanation: 'An acid must furnish H⁺ (H₃O⁺) ions in water; CH₄ and NH₃ do not.' },
    ta: { q: 'மீத்தேன் (CH₄), அம்மோனியா (NH₃) ஹைட்ரஜனைக் கொண்டிருந்தாலும் அமிலங்கள் அல்ல. காரணம்', options: ['அவை நீர்க்கரைசலில் H⁺ அயனிகளைத் தருவதில்லை', 'அவை திண்மங்கள்', 'அவற்றில் ஆக்ஸிஜன் உள்ளது', 'அவை நீல லிட்மஸை சிவப்பாக்கும்'], explanation: 'அமிலம் நீரில் H⁺ (H₃O⁺) அயனிகளைத் தர வேண்டும்; CH₄, NH₃ அவ்வாறு தருவதில்லை.' },
  },
  {
    difficulty: 'medium', source: '§14.2.1, p. 166', answer: 0,
    en: { q: 'Al(OH)₃, which gives three hydroxide ions per molecule, is a', options: ['triacidic base', 'monoacidic base', 'diacidic base', 'tribasic acid'], explanation: 'Acidity of a base is the number of replaceable hydroxyl groups; Al(OH)₃ and Fe(OH)₃ are triacidic.' },
    ta: { q: 'ஒரு மூலக்கூறுக்கு மூன்று ஹைட்ராக்சைடு அயனிகளைத் தரும் Al(OH)₃', options: ['மூன்று அமிலத்துவக் காரம்', 'ஒற்றை அமிலத்துவக் காரம்', 'இரு அமிலத்துவக் காரம்', 'மூன்று காரத்துவ அமிலம்'], explanation: 'காரத்தின் அமிலத்துவம் என்பது இடப்பெயர்ச்சி செய்யக்கூடிய ஹைட்ராக்சைடு தொகுதிகளின் எண்ணிக்கை; Al(OH)₃, Fe(OH)₃ மூன்று அமிலத்துவக் காரங்கள்.' },
  },
  {
    difficulty: 'medium', source: '§14.2.2, p. 166', answer: 0,
    en: { q: 'On heating with ammonium chloride, sodium hydroxide gives off', options: ['ammonia gas', 'hydrogen gas', 'carbon dioxide', 'chlorine gas'], explanation: 'NaOH + NH₄Cl → NaCl + H₂O + NH₃↑.' },
    ta: { q: 'சோடியம் ஹைட்ராக்சைடை அம்மோனியம் குளோரைடுடன் வெப்பப்படுத்தும்போது வெளிவருவது', options: ['அம்மோனியா வாயு', 'ஹைட்ரஜன் வாயு', 'கார்பன் டை ஆக்சைடு', 'குளோரின் வாயு'], explanation: 'NaOH + NH₄Cl → NaCl + H₂O + NH₃↑.' },
  },
  {
    difficulty: 'medium', source: '§14.5.1, p. 168', answer: 0,
    en: { q: 'NaHSO₄, formed by partial replacement of the hydrogen ions of H₂SO₄ by sodium, is', options: ['an acid salt', 'a normal salt', 'a basic salt', 'a double salt'], explanation: 'NaOH + H₂SO₄ → NaHSO₄ + H₂O; partial replacement of an acid’s hydrogen gives an acid salt.' },
    ta: { q: 'H₂SO₄ இன் ஹைட்ரஜன் அயனிகள் சோடியத்தால் பகுதியளவு இடப்பெயர்ச்சி செய்யப்பட்டு உருவாகும் NaHSO₄', options: ['அமில உப்பு', 'சாதாரண உப்பு', 'கார உப்பு', 'இரட்டை உப்பு'], explanation: 'NaOH + H₂SO₄ → NaHSO₄ + H₂O; அமிலத்தின் ஹைட்ரஜன் பகுதியளவு இடப்பெயர்ச்சி செய்யப்படுவதால் அமில உப்பு உருவாகிறது.' },
  },
  {
    difficulty: 'medium', source: '§14.5.4, p. 169', answer: 0,
    en: { q: 'In the flame test, a salt gives a golden yellow flame. The ion present is', options: ['Na⁺', 'Ca²⁺', 'K⁺', 'Zn²⁺'], explanation: 'Na⁺ gives golden yellow, Ca²⁺ brick red, K⁺ pink-violet and Zn²⁺ green flashes.' },
    ta: { q: 'சுடர் சோதனையில் ஒரு உப்பு பொன்னிற மஞ்சள் சுடரைத் தருகிறது. அதில் உள்ள அயனி', options: ['Na⁺', 'Ca²⁺', 'K⁺', 'Zn²⁺'], explanation: 'Na⁺ பொன்னிற மஞ்சள், Ca²⁺ செங்கல் சிவப்பு, K⁺ இளஞ்சிவப்பு ஊதா, Zn²⁺ பச்சை.' },
  },

  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: '§14.1.2, p. 164', answer: 0,
    en: { q: 'Assertion: Concentrated acid should be added slowly to water with constant stirring, not water to acid.\nReason: Mixing generates a large amount of heat and adding water to acid makes the mixture splash out.', options: AR_EN, explanation: 'Both are true, and the heat released (causing splashing and burns) is the reason for the safe order of mixing.' },
    ta: { q: 'கூற்று: செறிவு மிகு அமிலத்தை நீரில் மெதுவாகக் கலக்கியபடி சேர்க்க வேண்டும்; அமிலத்தில் நீரைச் சேர்க்கக் கூடாது.\nகாரணம்: கலக்கும்போது அதிக வெப்பம் உருவாகிறது; அமிலத்தில் நீரைச் சேர்த்தால் கலவை தெறித்து வெளியேறும்.', options: AR_TA, explanation: 'இரண்டும் சரி; வெளிப்படும் வெப்பமே (தெறித்துக் காயம் ஏற்படுத்துவது) பாதுகாப்பான கலக்கும் முறைக்குக் காரணம்.' },
  },
  {
    difficulty: 'hard', source: '§14.2, p. 165', answer: 0,
    en: { q: 'Assertion: HCl dissolved in ethanol does not show acidic properties.\nReason: HCl ionises to give H⁺ ions only in water, not in organic solvents.', options: AR_EN, explanation: 'Acids show their properties only in water, where they ionise; in ethanol HCl remains as molecules.' },
    ta: { q: 'கூற்று: எத்தனாலில் கரைக்கப்பட்ட HCl அமிலப் பண்புகளைக் காட்டுவதில்லை.\nகாரணம்: HCl நீரில் மட்டுமே அயனியுற்று H⁺ அயனிகளைத் தருகிறது; கரிமக் கரைப்பான்களில் அல்ல.', options: AR_TA, explanation: 'அமிலங்கள் நீரில் அயனியுறும்போது மட்டுமே பண்புகளை வெளிப்படுத்தும்; எத்தனாலில் HCl மூலக்கூறுகளாகவே இருக்கும்.' },
  },
  {
    difficulty: 'hard', source: '§14.2, p. 165', answer: 2,
    en: { q: 'Assertion: All alkalis are bases.\nReason: All bases are soluble in water.', options: AR_EN, explanation: 'Alkalis are water-soluble bases, so the assertion is true; but not all bases dissolve in water, e.g. Al(OH)₃ and Zn(OH)₂.' },
    ta: { q: 'கூற்று: அனைத்து எரிகாரங்களும் காரங்களே.\nகாரணம்: அனைத்து காரங்களும் நீரில் கரையும்.', options: AR_TA, explanation: 'எரிகாரங்கள் நீரில் கரையும் காரங்கள், எனவே கூற்று சரி; ஆனால் Al(OH)₃, Zn(OH)₂ போன்ற காரங்கள் நீரில் கரையாது, எனவே காரணம் தவறு.' },
  },
  {
    difficulty: 'hard', source: '§14.2.2, p. 166', answer: 0,
    en: { q: 'Assertion: Non-metallic oxides such as CO₂ are acidic in nature.\nReason: They react with bases to form salt and water, just as acids do.', options: AR_EN, explanation: 'Ca(OH)₂ + CO₂ → CaCO₃ + H₂O resembles a neutralisation, so non-metallic oxides are concluded to be acidic.' },
    ta: { q: 'கூற்று: CO₂ போன்ற அலோக ஆக்சைடுகள் அமிலத்தன்மை கொண்டவை.\nகாரணம்: அமிலங்களைப் போலவே அவை காரங்களுடன் வினைபுரிந்து உப்பையும் நீரையும் தருகின்றன.', options: AR_TA, explanation: 'Ca(OH)₂ + CO₂ → CaCO₃ + H₂O நடுநிலையாக்கல் வினையை ஒத்திருப்பதால் அலோக ஆக்சைடுகள் அமிலத்தன்மை கொண்டவை எனலாம்.' },
  },
  {
    difficulty: 'hard', source: '§14.5.3, p. 168', answer: 1,
    en: { q: 'Assertion: Blue copper sulphate crystals turn white on heating.\nReason: Copper sulphate is a salt formed by an acid and a base.', options: AR_EN, explanation: 'Both are true, but the colour change is due to loss of water of crystallisation, not to its being a salt.' },
    ta: { q: 'கூற்று: நீல நிற காப்பர் சல்பேட் படிகங்கள் வெப்பப்படுத்தும்போது வெண்மையாகின்றன.\nகாரணம்: காப்பர் சல்பேட் அமிலமும் காரமும் சேர்ந்து உருவான ஒரு உப்பு.', options: AR_TA, explanation: 'இரண்டும் சரி; ஆனால் நிற மாற்றத்திற்குக் காரணம் படிக நீர் இழப்பே, அது உப்பு என்பதல்ல.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise III.2, p. 171', answer: 0,
    en: { q: 'A colourless solution turns red litmus blue and turns phenolphthalein pink. Which statements about it are correct?\n1. The solution is basic.\n2. Its pH is greater than 7.\n3. Methyl orange would turn pink in it.', options: ['1 and 2 only', '1 and 3 only', '2 and 3 only', '1, 2 and 3'], explanation: 'It is a base with pH above 7; in a base methyl orange is yellow, not pink.' },
    ta: { q: 'ஒரு நிறமற்ற கரைசல் சிவப்பு லிட்மஸை நீலமாக்குகிறது; பீனாப்தலீனை இளஞ்சிவப்பாக்குகிறது. அதைப் பற்றிய சரியான கூற்றுகள் எவை?\n1. கரைசல் காரத்தன்மை உடையது.\n2. அதன் pH 7 ஐ விட அதிகம்.\n3. அதில் மெத்தில் ஆரஞ்சு இளஞ்சிவப்பாக மாறும்.', options: ['1, 2 மட்டும்', '1, 3 மட்டும்', '2, 3 மட்டும்', '1, 2, 3'], explanation: 'அது pH 7 க்கு மேல் உள்ள காரம்; காரத்தில் மெத்தில் ஆரஞ்சு மஞ்சள் நிறம், இளஞ்சிவப்பு அல்ல.' },
  },
  {
    difficulty: 'hard', source: '§14.1.1, p. 164', answer: 0,
    en: { q: 'Which statements are correct?\n1. H₃PO₄ is a tribasic acid.\n2. HCl is a strong acid because it ionises completely in water.\n3. H₂SO₄ is a monobasic acid.', options: ['1 and 2 only', '1 and 3 only', '2 and 3 only', '1, 2 and 3'], explanation: 'H₃PO₄ gives three H⁺ ions (tribasic) and HCl ionises completely (strong). H₂SO₄ gives two H⁺ ions, so it is dibasic.' },
    ta: { q: 'சரியான கூற்றுகள் எவை?\n1. H₃PO₄ ஒரு மூன்று காரத்துவ அமிலம்.\n2. HCl நீரில் முழுமையாக அயனியுறுவதால் வலிமை மிகு அமிலம்.\n3. H₂SO₄ ஒரு ஒற்றைக் காரத்துவ அமிலம்.', options: ['1, 2 மட்டும்', '1, 3 மட்டும்', '2, 3 மட்டும்', '1, 2, 3'], explanation: 'H₃PO₄ மூன்று H⁺ அயனிகளைத் தரும் (மூன்று காரத்துவம்); HCl முழுமையாக அயனியுறும் (வலிமை மிகு). H₂SO₄ இரண்டு H⁺ அயனிகளைத் தருவதால் இரு காரத்துவ அமிலம்.' },
  },
  {
    difficulty: 'hard', source: '§14.2.1, p. 166', answer: 0,
    en: { q: 'Which statements about bases are correct?\n1. NaOH and KOH are strong, monoacidic bases.\n2. Ca(OH)₂ is a diacidic base.\n3. NH₄OH ionises completely in water.', options: ['1 and 2 only', '1 and 3 only', '2 and 3 only', '1, 2 and 3'], explanation: 'NaOH and KOH give one OH⁻ and ionise completely; Ca(OH)₂ gives two OH⁻. NH₄OH is a weak base that ionises partially.' },
    ta: { q: 'காரங்கள் பற்றிய சரியான கூற்றுகள் எவை?\n1. NaOH, KOH ஆகியவை வலிமை மிகு ஒற்றை அமிலத்துவக் காரங்கள்.\n2. Ca(OH)₂ ஒரு இரு அமிலத்துவக் காரம்.\n3. NH₄OH நீரில் முழுமையாக அயனியுறுகிறது.', options: ['1, 2 மட்டும்', '1, 3 மட்டும்', '2, 3 மட்டும்', '1, 2, 3'], explanation: 'NaOH, KOH ஒரு OH⁻ தந்து முழுமையாக அயனியுறும்; Ca(OH)₂ இரண்டு OH⁻ தரும். NH₄OH பகுதியளவு அயனியுறும் வலிமை குறைந்த காரம்.' },
  },
  {
    difficulty: 'hard', source: '§14.5.1, p. 168', answer: 0,
    en: { q: 'In the reaction Pb(OH)₂ + HCl → Pb(OH)Cl + H₂O, the product Pb(OH)Cl is', options: ['a basic salt, formed by partial replacement of the hydroxide ions of the base', 'an acid salt, formed by partial replacement of the hydrogen ions of the acid', 'a normal salt, formed by complete neutralisation', 'a double salt, formed from two simple salts'], explanation: 'Only one of the two OH⁻ groups of the diacidic base Pb(OH)₂ is replaced by Cl⁻, giving a basic salt.' },
    ta: { q: 'Pb(OH)₂ + HCl → Pb(OH)Cl + H₂O என்ற வினையில் உருவாகும் Pb(OH)Cl', options: ['காரத்தின் ஹைட்ராக்சைடு அயனிகள் பகுதியளவு இடப்பெயர்ச்சி செய்யப்பட்டு உருவான கார உப்பு', 'அமிலத்தின் ஹைட்ரஜன் அயனிகள் பகுதியளவு இடப்பெயர்ச்சி செய்யப்பட்டு உருவான அமில உப்பு', 'முழுமையான நடுநிலையாக்கலால் உருவான சாதாரண உப்பு', 'இரண்டு எளிய உப்புகளிலிருந்து உருவான இரட்டை உப்பு'], explanation: 'இரு அமிலத்துவக் காரமான Pb(OH)₂ இன் இரண்டு OH⁻ இல் ஒன்று மட்டும் Cl⁻ ஆல் இடப்பெயர்ச்சி செய்யப்படுவதால் கார உப்பு உருவாகிறது.' },
  },
  {
    difficulty: 'hard', source: '§14.5.1, p. 168', answer: 0,
    en: { q: 'Potash alum, KAl(SO₄)₂·12H₂O, is an example of', options: ['a double salt of potassium sulphate and aluminium sulphate', 'an acid salt of sulphuric acid', 'a basic salt of aluminium hydroxide', 'an anhydrous normal salt'], explanation: 'Double salts form when saturated solutions of two simple salts in equimolar ratio are crystallised together.' },
    ta: { q: 'பொட்டாஷ் படிகாரம் KAl(SO₄)₂·12H₂O எதற்கு எடுத்துக்காட்டு?', options: ['பொட்டாசியம் சல்பேட், அலுமினியம் சல்பேட் சேர்ந்த இரட்டை உப்பு', 'சல்பியூரிக் அமிலத்தின் அமில உப்பு', 'அலுமினியம் ஹைட்ராக்சைடின் கார உப்பு', 'நீரற்ற சாதாரண உப்பு'], explanation: 'இரண்டு எளிய உப்புகளின் தெவிட்டிய கரைசல்களை சம மோலார் அளவில் சேர்த்துப் படிகமாக்கும்போது இரட்டை உப்பு உருவாகிறது.' },
  },
  {
    difficulty: 'hard', source: 'Activity 4, p. 169', answer: 0,
    en: { q: 'Sodium thiosulphate pentahydrate has the formula', options: ['Na₂S₂O₃·5H₂O', 'Na₂S₂O₃·7H₂O', 'Na₂SO₄·5H₂O', 'Na₂S₂O₃·2H₂O'], explanation: '"Penta" means five, so five water molecules are written after the dot of Na₂S₂O₃.' },
    ta: { q: 'சோடியம் தயோ சல்பேட் பென்டா ஹைட்ரேட்டின் வாய்ப்பாடு', options: ['Na₂S₂O₃·5H₂O', 'Na₂S₂O₃·7H₂O', 'Na₂SO₄·5H₂O', 'Na₂S₂O₃·2H₂O'], explanation: '"பென்டா" என்பது ஐந்து; Na₂S₂O₃ க்குப் பின் புள்ளி வைத்து ஐந்து நீர் மூலக்கூறுகள் எழுதப்படுகின்றன.' },
  },
  {
    difficulty: 'hard', source: 'Activity 2, p. 166', imageUrl: `${IMG}/conductivity-setup.png`, answer: 0,
    en: { q: 'The set-up shown is used to test the conduction of electricity by solutions. If the dilute HCl in the beaker is replaced by each liquid below, in which case will the bulb still glow?', options: ['Sodium hydroxide solution', 'Glucose solution', 'Alcohol', 'Distilled water'], explanation: 'The bulb glows only when the solution contains ions. Alkalis like NaOH give OH⁻ ions; glucose and alcohol solutions do not conduct.' },
    ta: { q: 'படத்திலுள்ள அமைப்பு கரைசல்களின் மின்கடத்துத் திறனைச் சோதிக்கப் பயன்படுகிறது. முகவையிலுள்ள நீர்த்த HCl க்குப் பதிலாக கீழ்க்கண்டவற்றில் எதை வைத்தால் மின்விளக்கு தொடர்ந்து ஒளிரும்?', options: ['சோடியம் ஹைட்ராக்சைடு கரைசல்', 'குளுக்கோஸ் கரைசல்', 'ஆல்கஹால்', 'காய்ச்சி வடித்த நீர்'], explanation: 'கரைசலில் அயனிகள் இருந்தால் மட்டுமே விளக்கு ஒளிரும். NaOH போன்ற எரிகாரங்கள் OH⁻ அயனிகளைத் தரும்; குளுக்கோஸ், ஆல்கஹால் கரைசல்கள் மின்சாரத்தைக் கடத்தாது.' },
  },
  {
    difficulty: 'hard', source: '§14.5.5, p. 169', answer: 0,
    en: { q: 'Baking soda gives relief from acidity in the stomach because', options: ['its solution is basic and neutralises the excess acid', 'it is acidic and dissolves food quickly', 'it absorbs water from the stomach', 'it releases oxygen in the stomach'], explanation: 'Sodium bicarbonate is basic; it neutralises excess hydrochloric acid in the stomach.' },
    ta: { q: 'சமையல் சோடா வயிற்றிலுள்ள அமிலத்தன்மையிலிருந்து நிவாரணம் தருவதற்குக் காரணம்', options: ['அதன் கரைசல் காரத்தன்மை கொண்டு அதிகப்படியான அமிலத்தை நடுநிலையாக்குகிறது', 'அது அமிலத்தன்மை கொண்டு உணவை விரைவில் கரைக்கிறது', 'அது வயிற்றிலிருந்து நீரை உறிஞ்சுகிறது', 'அது வயிற்றில் ஆக்ஸிஜனை வெளியிடுகிறது'], explanation: 'சோடியம் பைகார்பனேட் காரத்தன்மை கொண்டது; வயிற்றிலுள்ள அதிகப்படியான ஹைட்ரோகுளோரிக் அமிலத்தை நடுநிலையாக்குகிறது.' },
  },
  {
    difficulty: 'hard', source: '§14.1.4, p. 165', answer: 0,
    en: { q: 'Which statements about aquaregia are correct?\n1. Its name is Latin for "King’s Water".\n2. It can dissolve gold and platinum.\n3. Gold dissolves in HCl alone and in HNO₃ alone.', options: ['1 and 2 only', '1 and 3 only', '2 and 3 only', '1, 2 and 3'], explanation: 'Gold does not react with HCl or HNO₃ separately; only their 3 : 1 mixture, aquaregia ("King’s Water"), dissolves it.' },
    ta: { q: 'இராஜ திராவகம் பற்றிய சரியான கூற்றுகள் எவை?\n1. அதன் பெயர் "அரசனின் திரவம்" எனப் பொருள்படும் இலத்தீன் சொல்.\n2. அது தங்கம், பிளாட்டினத்தைக் கரைக்கும்.\n3. தங்கம் HCl இல் தனியாகவும் HNO₃ இல் தனியாகவும் கரையும்.', options: ['1, 2 மட்டும்', '1, 3 மட்டும்', '2, 3 மட்டும்', '1, 2, 3'], explanation: 'தங்கம் HCl அல்லது HNO₃ உடன் தனித்தனியாக வினைபுரிவதில்லை; அவற்றின் 3 : 1 கலவையான இராஜ திராவகம் மட்டுமே அதைக் கரைக்கும்.' },
  },
  {
    difficulty: 'hard', source: '§14.2.2, p. 166', answer: 0,
    en: { q: 'Zinc reacts with sodium hydroxide: Zn + 2NaOH → Na₂ZnO₂ + H₂↑. Which metal would NOT give hydrogen with sodium hydroxide?', options: ['Copper', 'Zinc', 'Aluminium', 'Tin'], explanation: 'Bases react with some metals to give salt and hydrogen, but metals such as Cu, Ag and Cr do not react with NaOH.' },
    ta: { q: 'துத்தநாகம் சோடியம் ஹைட்ராக்சைடுடன் வினைபுரிகிறது: Zn + 2NaOH → Na₂ZnO₂ + H₂↑. சோடியம் ஹைட்ராக்சைடுடன் ஹைட்ரஜனைத் தராத உலோகம் எது?', options: ['தாமிரம்', 'துத்தநாகம்', 'அலுமினியம்', 'வெள்ளீயம்'], explanation: 'காரங்கள் சில உலோகங்களுடன் வினைபுரிந்து உப்பையும் ஹைட்ரஜனையும் தரும்; ஆனால் Cu, Ag, Cr போன்றவை NaOH உடன் வினைபுரிவதில்லை.' },
  },
];
