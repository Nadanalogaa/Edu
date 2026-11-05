// Tamil Nadu State Board, 9th Science, Unit 8 – Sound (ஒலி).
// Book exercises and examples, plus our own questions covering every section.
// Tamil wording follows the terms used in the Tamil-medium textbook.
// source = section/exercise and printed page of the English-medium book.
import { BankQuestion, AR_EN, AR_TA } from './types';

const IMG = '/content/9/state_board/science/08';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.1, p. 100', answer: 0,
    en: { q: 'Which of the following vibrates when a musical note is produced by the cymbals in an orchestra?', options: ['Metal plates', 'Stretched strings', 'Stretched membranes', 'Air columns'], explanation: 'Cymbals are metal plates; the vibrating plates produce the sound.' },
    ta: { q: 'இசைக் கச்சேரிகளில் ஜால்ரா எனும் இசைக் கருவியை இசைக்கும் போது எது அதிர்வடையும்?', options: ['உலோகத் தகடு', 'நீட்டிக்கப்பட்ட கம்பி', 'நீட்டிக்கப்பட்ட சவ்வு', 'காற்றுத்தம்பம்'], explanation: 'ஜால்ரா உலோகத் தகடுகளால் ஆனது; அதிரும் தகடுகள் ஒலியை உண்டாக்குகின்றன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.3, p. 100', answer: 0,
    en: { q: 'A musical instrument is producing a continuous note, but a person with normal hearing cannot hear it. The note must be passing through', options: ['vacuum', 'wax', 'water', 'an empty vessel'], explanation: 'Sound needs a material medium and cannot travel through vacuum.' },
    ta: { q: 'ஒரு இசைக் கருவி உண்டாக்கும் தொடர் குறிப்புகளை சாதாரண செவித்திறன் கொண்ட ஒருவரால் உணர முடியவில்லையெனில் இக்குறிப்புகள் எதன் உள்ளே புகுந்து செல்கின்றன?', options: ['வெற்றிடம்', 'மெழுகு', 'நீர்', 'வெறுமையான பாத்திரம்'], explanation: 'ஒலி பரவ ஊடகம் தேவை; வெற்றிடத்தின் வழியே ஒலி செல்வதில்லை.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.5, p. 100', answer: 0,
    en: { q: 'Sound waves travel fastest', options: ['in solids', 'in liquids', 'in gases', 'in vacuum'], explanation: 'The speed of sound is greatest in solids and least in gases; it cannot travel in vacuum.' },
    ta: { q: 'ஒலி அலைகள் வேகமாகப் பயணிப்பது', options: ['திடப்பொருள்களில்', 'திரவங்களில்', 'வாயுக்களில்', 'வெற்றிடத்தில்'], explanation: 'ஒலியின் வேகம் திடப்பொருளில் அதிகம், வாயுவில் குறைவு; வெற்றிடத்தில் ஒலி பரவாது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.1, p. 100', answer: 0,
    en: { q: 'Sound is a _____ wave and needs a material medium to travel.', options: ['longitudinal', 'transverse', 'electromagnetic', 'light'], explanation: 'Sound travels as compressions and rarefactions, i.e. as a longitudinal mechanical wave.' },
    ta: { q: 'ஒலி என்பது _____ அலை. எனவே ஒலி பரவ ஊடகம் தேவை.', options: ['நெட்டலை', 'குறுக்கலை', 'மின்காந்த அலை', 'ஒளி அலை'], explanation: 'ஒலி நெருக்கங்களாகவும் நெகிழ்ச்சிகளாகவும் பரவும் நெட்டலை.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.2, p. 100', answer: 0,
    en: { q: 'The number of vibrations produced in one second is _____.', options: ['frequency', 'time period', 'wavelength', 'amplitude'], explanation: 'Frequency (n) is the number of vibrations per second; unit hertz.' },
    ta: { q: 'ஒரு வினாடியில் உருவாகும் அதிர்வுகளின் எண்ணிக்கை _____ எனப்படும்.', options: ['அதிர்வெண்', 'அலைவு நேரம்', 'அலை நீளம்', 'வீச்சு'], explanation: 'ஒரு வினாடியில் உண்டாகும் அதிர்வுகளின் எண்ணிக்கை அதிர்வெண் (n); அலகு ஹெர்ட்ஸ்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.3, p. 100', answer: 0,
    en: { q: 'The velocity of sound in a solid is _____ than the velocity of sound in air.', options: ['greater', 'less', 'the same', 'zero'], explanation: 'For example, sound travels at 5950 m s⁻¹ in iron but only 340 m s⁻¹ in air.' },
    ta: { q: 'திடப்பொருளில் ஒலியின் திசைவேகமானது, காற்றில் உள்ள திசைவேகத்தை விட _____.', options: ['அதிகம்', 'குறைவு', 'சமம்', 'சுழி'], explanation: 'எ.கா. இரும்பில் ஒலியின் வேகம் 5950 மீ வி⁻¹, காற்றில் 340 மீ வி⁻¹ மட்டுமே.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.4, p. 100', answer: 0,
    en: { q: 'Vibration of an object produces _____.', options: ['sound', 'light', 'heat only', 'magnetism'], explanation: 'All sounds are produced by vibrations of objects.' },
    ta: { q: 'அதிர்வுறும் பொருட்கள் _____ உருவாக்கும்.', options: ['ஒலியை', 'ஒளியை', 'வெப்பத்தை மட்டும்', 'காந்தத்தை'], explanation: 'எல்லா ஒலிகளும் பொருள்களின் அதிர்வினால் உண்டாகின்றன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.5, p. 100', answer: 0,
    en: { q: 'Loudness is proportional to the square of the _____.', options: ['amplitude', 'frequency', 'wavelength', 'time period'], explanation: 'Loudness depends on the amplitude of the wave; it is proportional to the square of the amplitude.' },
    ta: { q: 'ஒலியின் உரப்பு _____ இன் இருமடிக்கு நேர்த்தகவில் உள்ளது.', options: ['வீச்சு', 'அதிர்வெண்', 'அலை நீளம்', 'அலைவு நேரம்'], explanation: 'ஒலியின் உரப்பு அலையின் வீச்சைச் சார்ந்தது; வீச்சின் இருமடிக்கு நேர்த்தகவில் இருக்கும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.6, p. 100', answer: 0,
    en: { q: '_____ is a medical instrument used for listening to sounds produced in the body.', options: ['Stethoscope', 'SONAR', 'Megaphone', 'Echogram'], explanation: 'In a stethoscope, body sounds reach the doctor by multiple reflections in the tube.' },
    ta: { q: 'உடலில் ஏற்படும் ஒலிகளை உணர பயன்படுத்தப்படும் மருத்துவக் கருவி _____.', options: ['ஸ்டெதஸ்கோப்', 'சோனார்', 'ஒலிபெருக்கி', 'எதிரொலி வரைவு'], explanation: 'ஸ்டெதஸ்கோப்பில் உடல் ஒலிகள் குழாயில் பன்முக எதிரொலிப்பின் மூலம் மருத்துவரின் காதை அடைகின்றன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.7, p. 100', answer: 0,
    en: { q: 'The repeated reflection that results in persistence of sound is called _____.', options: ['reverberation', 'echo', 'refraction', 'resonance'], explanation: 'Persistence of sound in a big hall due to repeated reflections is reverberation.' },
    ta: { q: 'ஒலியை நீட்டிக்கும் தொடர் எதிரொலித்தலுக்கு _____ என்று பெயர்.', options: ['எதிர்முழக்கம்', 'எதிரொலி', 'ஒளிவிலகல்', 'ஒத்ததிர்வு'], explanation: 'பெரிய அறைகளில் பன்முக எதிரொலிப்பால் ஒலி நீடித்திருப்பது எதிர்முழக்கம்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise IV.2, p. 100', answer: 0,
    en: { q: 'The physical quantity whose SI unit is hertz is', options: ['frequency', 'wavelength', 'amplitude', 'intensity'], explanation: 'Frequency, the number of vibrations per second, is measured in hertz (s⁻¹).' },
    ta: { q: 'ஹெர்ட்ஸ் என்ற அலகினைக் கொண்ட இயற்பியல் அளவு', options: ['அதிர்வெண்', 'அலை நீளம்', 'வீச்சு', 'செறிவு'], explanation: 'ஒரு வினாடியில் ஏற்படும் அதிர்வுகளின் எண்ணிக்கையான அதிர்வெண்ணின் அலகு ஹெர்ட்ஸ் (வி⁻¹).' },
  },
  {
    difficulty: 'easy', source: '§8.3, p. 93', answer: 0,
    en: { q: 'The audible range of frequency for human beings is', options: ['20 Hz to 20,000 Hz', '2 Hz to 2000 Hz', '200 Hz to 2,00,000 Hz', '0 Hz to 20 Hz'], explanation: 'Below 20 Hz is infrasonic and above 20,000 Hz is ultrasonic; humans hear neither.' },
    ta: { q: 'மனிதனின் செவியுணர் ஒலியின் அதிர்வெண் நெடுக்கம்', options: ['20 ஹெர்ட்ஸ் முதல் 20,000 ஹெர்ட்ஸ்', '2 ஹெர்ட்ஸ் முதல் 2000 ஹெர்ட்ஸ்', '200 ஹெர்ட்ஸ் முதல் 2,00,000 ஹெர்ட்ஸ்', '0 ஹெர்ட்ஸ் முதல் 20 ஹெர்ட்ஸ்'], explanation: '20 ஹெர்ட்ஸுக்குக் குறைவானது குற்றொலி, 20,000 ஹெர்ட்ஸுக்கு அதிகமானது மீயொலி; இரண்டையும் மனிதர் கேட்க இயலாது.' },
  },
  {
    difficulty: 'easy', source: '§8.3, p. 93', answer: 0,
    en: { q: 'Sound with frequency less than 20 Hz is called', options: ['infrasonic sound', 'ultrasonic sound', 'audible sound', 'supersonic sound'], explanation: 'Frequencies below the audible range are infrasonic.' },
    ta: { q: '20 ஹெர்ட்ஸை விடக் குறைவான அதிர்வெண் கொண்ட ஒலி', options: ['குற்றொலி', 'மீயொலி', 'செவியுணர் ஒலி', 'மீ ஒலி வேகம்'], explanation: 'செவியுணர் நெடுக்கத்திற்குக் கீழுள்ள அதிர்வெண் கொண்ட ஒலி குற்றொலி.' },
  },
  {
    difficulty: 'easy', source: '§8.3, p. 93', answer: 0,
    en: { q: 'The maximum displacement of the particles of the medium from their undisturbed positions is called', options: ['amplitude', 'wavelength', 'frequency', 'time period'], explanation: 'This is amplitude (A); its SI unit is metre.' },
    ta: { q: 'ஊடகத் துகள்கள் தங்கள் சமநிலையிலிருந்து அடையும் பெரும இடப்பெயர்ச்சி', options: ['வீச்சு', 'அலை நீளம்', 'அதிர்வெண்', 'அலைவு நேரம்'], explanation: 'இதுவே வீச்சு (A); அதன் SI அலகு மீட்டர்.' },
  },
  {
    difficulty: 'easy', source: '§8.4, p. 94', answer: 0,
    en: { q: 'The unit of intensity level of sound is', options: ['decibel (dB)', 'hertz (Hz)', 'metre (m)', 'pascal (Pa)'], explanation: 'Sound level is measured in decibels, named after Alexander Graham Bell.' },
    ta: { q: 'ஒலியின் செறிவு அளவிடப்படும் அலகு', options: ['டெசிபல் (dB)', 'ஹெர்ட்ஸ் (Hz)', 'மீட்டர் (மீ)', 'பாஸ்கல் (Pa)'], explanation: 'ஒலிச் செறிவு டெசிபலில் அளக்கப்படுகிறது; அலெக்ஸாண்டர் கிரஹாம் பெல் நினைவாக இப்பெயர்.' },
  },
  {
    difficulty: 'easy', source: '§8.10, p. 98', answer: 0,
    en: { q: 'SONAR stands for', options: ['Sound Navigation And Ranging', 'Sound Network And Radio', 'Signal Of Navigation And Radar', 'Sonic Noise And Reflection'], explanation: 'SONAR = SOund Navigation And Ranging; it uses ultrasonic waves under water.' },
    ta: { q: 'SONAR என்பதன் விரிவாக்கம்', options: ['Sound Navigation And Ranging', 'Sound Network And Radio', 'Signal Of Navigation And Radar', 'Sonic Noise And Reflection'], explanation: 'SONAR = SOund Navigation And Ranging; இது நீருக்கடியில் மீயொலியைப் பயன்படுத்துகிறது.' },
  },
  {
    difficulty: 'easy', source: '§8.12, p. 98', answer: 0,
    en: { q: 'The outer part of the ear that collects sound from the surroundings is called the', options: ['pinna', 'cochlea', 'eardrum', 'anvil'], explanation: 'The pinna collects sound, which then passes through the auditory canal to the eardrum.' },
    ta: { q: 'சுற்றுப்புறத்திலிருந்து ஒலியைச் சேகரிக்கும் செவியின் வெளிப்பகுதி', options: ['செவிமடல்', 'காக்ளியா', 'செவிப்பறை', 'பட்டை'], explanation: 'செவிமடல் ஒலியைச் சேகரிக்கிறது; அது செவிக் குழாய் வழியே செவிப்பறையை அடைகிறது.' },
  },
  // ---------------------------------------------------------------- Medium
  {
    difficulty: 'medium', source: 'Book exercise I.2, p. 100', answer: 0,
    en: { q: 'Sound travels in air', options: ['if the disturbance moves', 'if there is no moisture in the atmosphere', 'if particles of the medium travel from one place to another', 'if both particles and disturbance move from one place to another'], explanation: 'Only the disturbance travels; particles of the medium just vibrate to and fro about their positions.' },
    ta: { q: 'காற்றில் எப்பொழுது ஒலி பயணிக்கும்?', options: ['அதிர்வுகள் நகரும் போது', 'காற்றில் ஈரப்பதம் இல்லாதபோது', 'துகள்கள் ஒரு இடத்திலிருந்து மற்றொரு இடத்திற்கு நகரும் போது', 'துகள்களும் அதிர்வுகளும் ஒரு இடத்திலிருந்து வேறிடத்திற்கு நகரும் போது'], explanation: 'அதிர்வு (இடையூறு) மட்டுமே பரவுகிறது; ஊடகத் துகள்கள் தங்கள் இடத்திலேயே முன்னும் பின்னும் அதிர்கின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.4, p. 100', answer: 0,
    en: { q: 'The maximum speed of vibrations which produce audible sound will be in', options: ['ground glass', 'sea water', 'dry air', 'human blood'], explanation: 'Glass is a solid (3980 m s⁻¹); sound is slower in liquids like sea water and blood, and slowest in air.' },
    ta: { q: 'செவியுணர் ஒலியினால் ஏற்படும் அதிர்வுகளின் பெரும வேகம், கீழ்க்கண்டவற்றுள் எவற்றில் பயணிக்கும் போது ஏற்படும்?', options: ['கண்ணாடி', 'கடல் நீர்', 'உலர்ந்த காற்று', 'மனித இரத்தம்'], explanation: 'கண்ணாடி திடப்பொருள் (3980 மீ வி⁻¹); கடல் நீர், இரத்தம் போன்ற திரவங்களில் குறைவு, காற்றில் மிகக் குறைவு.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III, p. 100', answer: 0,
    en: { q: 'Match the following:\n1. Tuning fork\n2. Sound\n3. Compressions\n4. Amplitude\n(a) Longitudinal wave\n(b) Maximum displacement from the equilibrium position\n(c) Production of sound\n(d) The point where density of air is maximum', options: ['1-c, 2-a, 3-d, 4-b', '1-a, 2-c, 3-b, 4-d', '1-c, 2-d, 3-a, 4-b', '1-d, 2-a, 3-c, 4-b'], explanation: 'A tuning fork produces sound; sound is a longitudinal wave; compressions are regions of maximum density; amplitude is the maximum displacement.' },
    ta: { q: 'பொருத்துக:\n1. இசைக்கவை\n2. ஒலி\n3. அழுத்தங்கள் (நெருக்கங்கள்)\n4. வீச்சு\n(a) நெட்டலைகள்\n(b) சமநிலையில் இருந்து ஏற்படும் பெரும இடப்பெயர்ச்சி\n(c) ஒலியின் உற்பத்தி\n(d) காற்றின் அடர்த்தி அதிகமாக உள்ள புள்ளி', options: ['1-c, 2-a, 3-d, 4-b', '1-a, 2-c, 3-b, 4-d', '1-c, 2-d, 3-a, 4-b', '1-d, 2-a, 3-c, 4-b'], explanation: 'இசைக்கவை ஒலியை உற்பத்தி செய்கிறது; ஒலி நெட்டலை; நெருக்கங்களில் அடர்த்தி அதிகம்; வீச்சு பெரும இடப்பெயர்ச்சி.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III, p. 100', answer: 0,
    en: { q: 'In the match-the-following, "Ultrasonics" is matched with', options: ['sound whose frequency is greater than 20,000 Hz', 'sound whose frequency is less than 20 Hz', 'the point where density of air is maximum', 'production of sound'], explanation: 'Ultrasonic sound has frequency above 20,000 Hz, beyond the human audible range.' },
    ta: { q: 'பொருத்துக வினாவில் "மீயொலி" என்பது எதனுடன் பொருந்தும்?', options: ['20000 ஐ விட அதிகமான அதிர்வெண் கொண்ட ஒலி', '20 ஐ விடக் குறைவான அதிர்வெண் கொண்ட ஒலி', 'காற்றின் அடர்த்தி அதிகமாக உள்ள புள்ளி', 'ஒலியின் உற்பத்தி'], explanation: 'மீயொலி 20,000 ஹெர்ட்ஸுக்கு அதிகமான அதிர்வெண் கொண்டது; மனிதச் செவியால் கேட்க இயலாது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.1, p. 100', answer: 0,
    en: { q: 'Sound travels faster through iron than through water because', options: ['sound is faster in solids than in liquids', 'iron is a good conductor of heat', 'water is a transparent medium', 'iron has free electrons'], explanation: 'Speed of sound in iron is 5950 m s⁻¹ and in distilled water 1498 m s⁻¹; sound is faster in solids.' },
    ta: { q: 'இரும்பு, நீர் – இவற்றில் இரும்பின் வழியே ஒலி வேகமாகச் செல்லக் காரணம்', options: ['திரவங்களை விடத் திடப்பொருள்களில் ஒலி வேகமாகச் செல்லும்', 'இரும்பு சிறந்த வெப்பக் கடத்தி', 'நீர் ஒளிபுகும் ஊடகம்', 'இரும்பில் கட்டுறா எலக்ட்ரான்கள் உள்ளன'], explanation: 'இரும்பில் ஒலியின் வேகம் 5950 மீ வி⁻¹, தூய நீரில் 1498 மீ வி⁻¹; திடப்பொருளில் ஒலி வேகமானது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.3, p. 100', answer: 0,
    en: { q: 'An object is said to travel at supersonic speed when its speed', options: ['is greater than the speed of sound in air', 'is equal to the speed of light', 'is less than the speed of sound in air', 'is greater than 20,000 Hz'], explanation: 'Above about 330 m s⁻¹ in air, objects such as jets and bullets are supersonic and produce a sonic boom.' },
    ta: { q: 'ஒரு பொருள் சூப்பர் சோனிக் வேகத்தில் செல்கிறது என்பது அதன் வேகம்', options: ['காற்றில் ஒலியின் வேகத்தை விட அதிகமாக இருக்கும்போது', 'ஒளியின் வேகத்திற்குச் சமமாக இருக்கும்போது', 'காற்றில் ஒலியின் வேகத்தை விடக் குறைவாக இருக்கும்போது', '20,000 ஹெர்ட்ஸை விட அதிகமாக இருக்கும்போது'], explanation: 'காற்றில் ஏறக்குறைய 330 மீ வி⁻¹ க்கு மேல் செல்லும் ஜெட் விமானங்கள், தோட்டாக்கள் சூப்பர் சோனிக் வேகம் கொண்டவை; அவை ஒலி ஏற்றத்தை உண்டாக்கும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.5, p. 100', answer: 0,
    en: { q: 'You and your friend are on the Moon. Can you hear a sound produced by your friend directly?', options: ['No, because there is no air to carry sound', 'Yes, because the Moon has a thin atmosphere', 'Yes, but only very loud sounds', 'No, because the Moon is too cold'], explanation: 'The Moon has no atmosphere; sound needs a material medium.' },
    ta: { q: 'நீயும் உனது நண்பனும் நிலவில் இருக்கிறீர்கள். உனது நண்பன் ஏற்படுத்தும் ஒலியை உன்னால் கேட்க முடியுமா?', options: ['முடியாது; ஒலியைக் கடத்தக் காற்று இல்லை', 'முடியும்; நிலவில் மெல்லிய வளிமண்டலம் உண்டு', 'முடியும்; ஆனால் உரத்த ஒலிகள் மட்டும்', 'முடியாது; நிலவு மிகக் குளிராக உள்ளது'], explanation: 'நிலவில் வளிமண்டலம் இல்லை; ஒலி பரவ ஊடகம் தேவை.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV.4, p. 100', answer: 0,
    en: { q: 'Sound produced by a vibrating object reaches our ears because', options: ['each particle of the medium disturbs the next and the disturbance travels forward', 'the particles of the medium travel from the object to our ears', 'the object itself moves to our ears', 'sound travels as light waves'], explanation: 'Particles only vibrate to and fro and push neighbours; the disturbance (wave) is carried forward to the ear.' },
    ta: { q: 'அதிர்வடையும் பொருட்கள் ஏற்படுத்தும் ஒலி நமது செவிகளை வந்தடையக் காரணம்', options: ['ஊடகத்தின் ஒவ்வொரு துகளும் அடுத்ததை இடம்பெயரச் செய்து இடையூறு முன்னோக்கிப் பரவுகிறது', 'ஊடகத் துகள்கள் பொருளிலிருந்து செவி வரை பயணிக்கின்றன', 'பொருளே செவி வரை நகர்கிறது', 'ஒலி ஒளி அலையாகப் பரவுகிறது'], explanation: 'துகள்கள் முன்னும் பின்னும் அதிர்ந்து அடுத்த துகளைத் தள்ளுகின்றன; இடையூறு (அலை) மட்டும் செவியை அடைகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.1, p. 101', answer: 0,
    en: { q: 'The frequency of a source of sound is 600 Hz. How many times does it vibrate in a minute?', options: ['36,000', '600', '10', '3600'], explanation: '600 vibrations per second × 60 s = 36,000 vibrations per minute.' },
    ta: { q: 'ஒலியின் அதிர்வெண் 600 Hz எனில், அதனை உண்டாக்கும் பொருள் ஒரு நிமிடத்திற்கு எத்தனை முறை அதிர்வுறும்?', options: ['36,000', '600', '10', '3600'], explanation: 'வினாடிக்கு 600 அதிர்வுகள் × 60 வி = நிமிடத்திற்கு 36,000 அதிர்வுகள்.' },
  },
  {
    difficulty: 'medium', source: 'Book example, Problem 1, p. 95', answer: 0,
    en: { q: 'A sound wave has frequency 2 kHz and wavelength 15 cm. How much time will it take to travel 1.5 km?', options: ['5 s', '0.5 s', '50 s', '3 s'], explanation: 'v = nλ = 2000 × 0.15 = 300 m s⁻¹; t = 1500/300 = 5 s.' },
    ta: { q: 'ஒரு ஒலி அலையின் அதிர்வெண் 2 கிலோ ஹெர்ட்ஸ், அலைநீளம் 15 செ.மீ எனில், 1.5 கி.மீ தூரத்தைக் கடக்க அது எடுத்துக் கொள்ளும் காலம்', options: ['5 வி', '0.5 வி', '50 வி', '3 வி'], explanation: 'v = nλ = 2000 × 0.15 = 300 மீ வி⁻¹; t = 1500/300 = 5 வி.' },
  },
  {
    difficulty: 'medium', source: 'Book example, Problem 2, p. 95', answer: 0,
    en: { q: 'The wavelength of a sound wave of frequency 22 MHz in air (v = 344 m s⁻¹) is', options: ['15.64 µm', '15.64 m', '7568 m', '1.564 mm'], explanation: 'λ = v/n = 344 ÷ (22 × 10⁶) = 15.64 × 10⁻⁶ m = 15.64 µm.' },
    ta: { q: '22 மெகா ஹெர்ட்ஸ் அதிர்வெண் கொண்ட ஒலியின் காற்றில் அலைநீளம் (v = 344 மீ வி⁻¹)', options: ['15.64 µm', '15.64 மீ', '7568 மீ', '1.564 மிமீ'], explanation: 'λ = v/n = 344 ÷ (22 × 10⁶) = 15.64 × 10⁻⁶ மீ = 15.64 µm.' },
  },
  {
    difficulty: 'medium', source: '§8.2.3, p. 92', answer: 0,
    en: { q: 'In a longitudinal wave, the particles of the medium move', options: ['to and fro along the direction of propagation', 'up and down, perpendicular to the direction of propagation', 'in circles', 'along with the wave to the listener'], explanation: 'In longitudinal waves the particles vibrate along the direction in which the wave travels.' },
    ta: { q: 'நெட்டலையில் ஊடகத் துகள்கள் நகர்வது', options: ['அலை பரவும் திசையிலேயே முன்னும் பின்னும்', 'அலை பரவும் திசைக்குச் செங்குத்தாக மேலும் கீழும்', 'வட்டப் பாதையில்', 'அலையுடன் சேர்ந்து கேட்பவர் வரை'], explanation: 'நெட்டலையில் துகள்கள் அலை பரவும் திசையிலேயே முன்னும் பின்னும் அதிர்கின்றன.' },
  },
  {
    difficulty: 'medium', source: '§8.2.3, p. 93', answer: 0,
    en: { q: 'Rarefactions in a sound wave are regions of', options: ['low pressure where particles are spread apart', 'high pressure where particles are crowded together', 'maximum density', 'no particles at all'], explanation: 'Compressions are high-pressure crowded regions; rarefactions are low-pressure regions where particles are spread apart.' },
    ta: { q: 'ஒலி அலையில் நெகிழ்ச்சிகள் என்பவை', options: ['துகள்கள் விலகியிருக்கும் குறைந்த அழுத்தப் பகுதிகள்', 'துகள்கள் நெருங்கியிருக்கும் அதிக அழுத்தப் பகுதிகள்', 'அடர்த்தி பெருமமாக உள்ள பகுதிகள்', 'துகள்களே இல்லாத பகுதிகள்'], explanation: 'நெருக்கம் அதிக அழுத்தப் பகுதி; நெகிழ்ச்சி துகள்கள் விலகியிருக்கும் குறைந்த அழுத்தப் பகுதி.' },
  },
  {
    difficulty: 'medium', source: '§8.3, p. 93', answer: 0,
    en: { q: 'The time period of a sound wave of frequency 50 Hz is', options: ['0.02 s', '50 s', '0.2 s', '2 s'], explanation: 'T = 1/n = 1/50 = 0.02 s.' },
    ta: { q: '50 ஹெர்ட்ஸ் அதிர்வெண் கொண்ட ஒலி அலையின் அலைவு நேரம்', options: ['0.02 வி', '50 வி', '0.2 வி', '2 வி'], explanation: 'T = 1/n = 1/50 = 0.02 வி.' },
  },
  {
    difficulty: 'medium', source: '§8.4, p. 94', answer: 0,
    en: { q: 'Two notes from the same instrument have the same amplitude but different frequencies. They differ in', options: ['pitch', 'loudness', 'timbre', 'speed'], explanation: 'Pitch depends on frequency: a high-frequency note is shrill, a low-frequency note is flat.' },
    ta: { q: 'ஒரே கருவியிலிருந்து வரும் இரு ஒலிகள் ஒரே வீச்சும் வேறுபட்ட அதிர்வெண்ணும் கொண்டவை. அவை வேறுபடுவது', options: ['சுருதியில்', 'உரப்பில்', 'தரத்தில்', 'வேகத்தில்'], explanation: 'சுருதி அதிர்வெண்ணைச் சார்ந்தது: அதிக அதிர்வெண் கீச்சொலி, குறைந்த அதிர்வெண் கனத்த ஒலி.' },
  },
  {
    difficulty: 'medium', source: '§8.4, p. 94', answer: 0,
    en: { q: 'We can recognise a flute and a veena playing the same note with the same loudness because of their', options: ['timbre (quality)', 'pitch', 'amplitude', 'frequency'], explanation: 'Timbre distinguishes two sounds of the same loudness and pitch from different instruments.' },
    ta: { q: 'ஒரே உரப்பும் ஒரே சுருதியும் கொண்ட புல்லாங்குழல், வீணை ஒலிகளை வேறுபடுத்த உதவுவது', options: ['தரம்', 'சுருதி', 'வீச்சு', 'அதிர்வெண்'], explanation: 'ஒரே உரப்பும் சுருதியும் கொண்ட வெவ்வேறு கருவிகளின் ஒலிகளை வேறுபடுத்தும் பண்பு தரம்.' },
  },
  {
    difficulty: 'medium', source: '§8.5.1, p. 95', answer: 0,
    en: { q: 'We see the lightning flash before we hear the thunder because', options: ['sound travels much slower than light', 'light is produced before sound', 'sound needs no medium', 'thunder is reflected many times'], explanation: 'Both are produced together, but sound (about 340 m s⁻¹) is far slower than light.' },
    ta: { q: 'இடியோசையைக் கேட்பதற்கு முன்பே மின்னலைக் காண்கிறோம். காரணம்', options: ['ஒளியை விட ஒலி மிகக் குறைந்த வேகத்தில் செல்கிறது', 'ஒலிக்கு முன்பே ஒளி உண்டாகிறது', 'ஒலி பரவ ஊடகம் தேவையில்லை', 'இடி பலமுறை எதிரொலிக்கிறது'], explanation: 'இரண்டும் ஒரே நேரத்தில் உண்டாகின்றன; ஆனால் ஒலி (ஏறக்குறைய 340 மீ வி⁻¹) ஒளியை விட மிக மெதுவானது.' },
  },
  {
    difficulty: 'medium', source: '§8.5.1, p. 95', answer: 0,
    en: { q: 'The speed of sound in air at 0 °C is 330 m s⁻¹ and at 25 °C is 340 m s⁻¹. This shows that the speed of sound', options: ['increases with temperature', 'decreases with temperature', 'does not depend on temperature', 'depends only on frequency'], explanation: 'In any medium the speed of sound increases as the temperature increases.' },
    ta: { q: 'காற்றில் 0 °C இல் ஒலியின் வேகம் 330 மீ வி⁻¹, 25 °C இல் 340 மீ வி⁻¹. இதிலிருந்து ஒலியின் வேகம்', options: ['வெப்பநிலை அதிகரிக்க அதிகரிக்கும்', 'வெப்பநிலை அதிகரிக்கக் குறையும்', 'வெப்பநிலையைச் சார்ந்ததல்ல', 'அதிர்வெண்ணை மட்டுமே சார்ந்தது'], explanation: 'எந்த ஊடகத்திலும் வெப்பநிலை அதிகரிக்கும்போது ஒலியின் வேகம் அதிகரிக்கும்.' },
  },
  {
    difficulty: 'medium', source: '§8.6.1, p. 96', answer: 0,
    en: { q: 'Megaphones, horns and the nathaswaram send sound mainly in one direction by', options: ['multiple reflection of sound in a tube with a conical opening', 'refraction of sound', 'absorbing sound in the tube', 'converting sound into electric signals'], explanation: 'The tube and conical opening reflect sound successively and guide it forward towards the audience.' },
    ta: { q: 'ஒலிபெருக்கி, குழல் ஒலிப்பான், நாதஸ்வரம் போன்றவை ஒலியை ஒரே திசையில் அனுப்புவது', options: ['கூம்பு வடிவத் திறப்புடைய குழாயில் ஏற்படும் பன்முக எதிரொலிப்பால்', 'ஒலி விலகலால்', 'குழாயில் ஒலியை உட்கவர்வதால்', 'ஒலியை மின் சைகைகளாக மாற்றுவதால்'], explanation: 'குழாயும் கூம்பு வடிவத் திறப்பும் ஒலியைத் தொடர்ந்து எதிரொளித்து முன்னோக்கிப் பார்வையாளர்களிடம் செலுத்துகின்றன.' },
  },
  {
    difficulty: 'medium', source: '§8.8, p. 97', answer: 0,
    en: { q: 'To reduce reverberation in an auditorium, the walls and roof are covered with', options: ['sound-absorbing materials like fibreboard and draperies', 'polished marble', 'glass panels', 'metal sheets'], explanation: 'Compressed fibreboard, flannel, rough plaster and draperies absorb sound and reduce repeated reflections.' },
    ta: { q: 'கலையரங்கில் எதிர்முழக்கத்தைக் குறைக்க சுவர்களும் மேற்கூரையும் எதனால் மூடப்படுகின்றன?', options: ['அழுத்தப்பட்ட அட்டை, திரைச்சீலைகள் போன்ற ஒலியை உட்கவரும் பொருள்கள்', 'பளபளப்பான பளிங்குக் கற்கள்', 'கண்ணாடித் தகடுகள்', 'உலோகத் தகடுகள்'], explanation: 'அழுத்தப்பட்ட அட்டை, திரைச்சீலைகள், பிளாஸ்டர் போன்றவை ஒலியை உட்கவர்ந்து தொடர் எதிரொலிப்பைக் குறைக்கின்றன.' },
  },
  {
    difficulty: 'medium', source: '§8.9.1, p. 97', answer: 0,
    en: { q: 'Which of these is NOT an application of ultrasonic waves given in the book?', options: ['Recording an ECG of the heart', 'Cleaning minute particles from objects', 'Detecting cracks in metal blocks', 'Breaking kidney stones into fine grains'], explanation: 'An ECG records the electrical activity of the heart; echocardiography is the ultrasound technique.' },
    ta: { q: 'பாடநூலில் கொடுக்கப்பட்டுள்ள மீயொலியின் பயன்பாடு அல்லாதது எது?', options: ['இதயத்தின் ECG பதிவு', 'பொருள்களிலுள்ள நுண் துகள்களைச் சுத்தம் செய்தல்', 'உலோகக் கட்டிகளில் உள்ள விரிசல்களைக் கண்டறிதல்', 'சிறுநீரகக் கற்களை நுண்ணிய துகள்களாக உடைத்தல்'], explanation: 'ECG இதயத் தசையின் மின் செயல்பாட்டைப் பதிவு செய்கிறது; மீயொலி நுட்பம் எக்கோ கார்டியோகிராஃபி.' },
  },
  {
    difficulty: 'medium', source: '§8.12, p. 98', answer: 0,
    en: { q: 'In the human ear, the vibrations of the eardrum are amplified by', options: ['three bones – hammer, anvil and stirrup', 'the cochlea', 'the auditory nerve', 'the pinna'], explanation: 'The three small bones of the middle ear amplify the vibrations several times.' },
    ta: { q: 'மனிதச் செவியில் செவிப்பறையின் அதிர்வுகள் எதனால் பெருக்கமடைகின்றன?', options: ['சுத்தி, பட்டை, அங்கவடி எனும் மூன்று எலும்புகள்', 'காக்ளியா', 'செவி நரம்பு', 'செவிமடல்'], explanation: 'நடுச்செவியிலுள்ள மூன்று எலும்புகள் அதிர்வுகளைப் பலமுறை பெருக்குகின்றன.' },
  },
  {
    difficulty: 'medium', source: '§8.2.1, p. 92 (Fig. 8.1)', imageUrl: `${IMG}/bell-jar.png`, answer: 0,
    en: { q: 'In the bell-jar experiment shown, the electric bell keeps ringing while air is pumped out of the jar. What happens to the sound we hear?', options: ['It becomes feebler and finally cannot be heard', 'It becomes louder', 'Its pitch rises but loudness stays the same', 'It does not change at all'], explanation: 'As air is removed the medium disappears; sound cannot travel through vacuum.' },
    ta: { q: 'படத்தில் உள்ள மணிச்சாடி சோதனையில், சாடியிலிருந்து காற்று வெளியேற்றப்படும்போதும் மின்மணி தொடர்ந்து ஒலிக்கிறது. நாம் கேட்கும் ஒலிக்கு என்ன நிகழும்?', options: ['ஒலி மெல்ல மெல்லக் குறைந்து இறுதியில் கேட்காது', 'ஒலி உரக்கக் கேட்கும்', 'சுருதி அதிகரிக்கும்; உரப்பு மாறாது', 'எந்த மாற்றமும் இருக்காது'], explanation: 'காற்று நீக்கப்பட ஊடகம் இல்லாமல் போகிறது; வெற்றிடத்தின் வழியே ஒலி பரவாது.' },
  },
  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise VI.2, p. 101', answer: 0,
    en: { q: 'A stone is dropped from the top of a tower 750 m high into a pond at its base. After how long is the splash heard at the top? (g = 10 m s⁻², speed of sound = 340 m s⁻¹)', options: ['About 14.5 s', 'About 12.2 s', 'About 2.2 s', 'About 75 s'], explanation: 'Fall: t₁ = √(2h/g) = √150 ≈ 12.25 s. Sound up: t₂ = 750/340 ≈ 2.21 s. Total ≈ 14.5 s.' },
    ta: { q: '750 மீ உயரமுள்ள கோபுரத்தின் உச்சியிலிருந்து ஒரு கல் அதன் கீழே உள்ள குளத்தில் போடப்படுகிறது. நீர் தெளிக்கும் ஒலி உச்சியில் எத்தனை வினாடிகளில் கேட்கும்? (g = 10 மீ வி⁻², ஒலியின் வேகம் = 340 மீ வி⁻¹)', options: ['ஏறக்குறைய 14.5 வி', 'ஏறக்குறைய 12.2 வி', 'ஏறக்குறைய 2.2 வி', 'ஏறக்குறைய 75 வி'], explanation: 'விழும் காலம்: t₁ = √(2h/g) = √150 ≈ 12.25 வி. ஒலி மேலே வர: t₂ = 750/340 ≈ 2.21 வி. மொத்தம் ≈ 14.5 வி.' },
  },
  {
    difficulty: 'hard', source: 'Book example, Problem 3, p. 97', answer: 0,
    en: { q: 'A man fires a gun and hears its echo after 5 s. He moves 310 m towards the hill, fires again and hears the echo after 3 s. The speed of sound is', options: ['310 m s⁻¹', '155 m s⁻¹', '620 m s⁻¹', '340 m s⁻¹'], explanation: '2d = 5v and 2d – 620 = 3v ⇒ 2v = 620 ⇒ v = 310 m s⁻¹.' },
    ta: { q: 'ஒருவர் துப்பாக்கியைச் சுட்டு 5 வினாடிக்குப் பிறகு எதிரொலியைக் கேட்கிறார். குன்றை நோக்கி 310 மீ நகர்ந்து மீண்டும் சுட, 3 வினாடிக்குப் பிறகு எதிரொலியைக் கேட்கிறார். ஒலியின் வேகம்', options: ['310 மீ வி⁻¹', '155 மீ வி⁻¹', '620 மீ வி⁻¹', '340 மீ வி⁻¹'], explanation: '2d = 5v, 2d – 620 = 3v ⇒ 2v = 620 ⇒ v = 310 மீ வி⁻¹.' },
  },
  {
    difficulty: 'hard', source: 'Book example, Problem 4, p. 98', answer: 0,
    en: { q: 'A ship sends out ultrasound that returns from the seabed after 3.42 s. If the speed of ultrasound in sea water is 1531 m s⁻¹, the depth of the seabed is', options: ['2618 m', '5236 m', '1309 m', '447 m'], explanation: '2d = vt = 1531 × 3.42 = 5236 m ⇒ d = 2618 m. Forgetting to halve gives 5236 m.' },
    ta: { q: 'ஒரு கப்பல் அனுப்பும் மீயொலி கடல் தரையிலிருந்து எதிரொலித்து 3.42 வி இல் திரும்புகிறது. கடல் நீரில் மீயொலியின் வேகம் 1531 மீ வி⁻¹ எனில், கடலின் ஆழம்', options: ['2618 மீ', '5236 மீ', '1309 மீ', '447 மீ'], explanation: '2d = vt = 1531 × 3.42 = 5236 மீ ⇒ d = 2618 மீ. இரண்டால் வகுக்க மறந்தால் 5236 மீ.' },
  },
  {
    difficulty: 'hard', source: '§8.7, p. 96', answer: 0,
    en: { q: 'The sensation of sound persists in the brain for about 0.1 s. If the speed of sound is 340 m s⁻¹, the minimum distance of the reflecting surface to hear a distinct echo is', options: ['17 m', '34 m', '3.4 m', '340 m'], explanation: 'Sound must travel 340 × 0.1 = 34 m there and back, so the obstacle must be at least 34/2 = 17 m away.' },
    ta: { q: 'ஒலியின் உணர்வு மூளையில் ஏறக்குறைய 0.1 வி நீடிக்கும். ஒலியின் வேகம் 340 மீ வி⁻¹ எனில், தெளிவான எதிரொலியைக் கேட்க எதிரொலிக்கும் பரப்பு இருக்க வேண்டிய குறைந்தபட்சத் தொலைவு', options: ['17 மீ', '34 மீ', '3.4 மீ', '340 மீ'], explanation: 'ஒலி சென்று திரும்ப 340 × 0.1 = 34 மீ கடக்க வேண்டும்; எனவே தடை குறைந்தது 34/2 = 17 மீ தொலைவில் இருக்க வேண்டும்.' },
  },
  {
    difficulty: 'hard', source: '§8.5, p. 95', answer: 0,
    en: { q: 'A sound wave travels at 340 m s⁻¹ in air. If its frequency is doubled from 170 Hz to 340 Hz, its wavelength', options: ['halves from 2 m to 1 m', 'doubles from 2 m to 4 m', 'stays 2 m', 'halves from 1 m to 0.5 m'], explanation: 'Speed is the same for all frequencies in a medium; λ = v/n = 340/170 = 2 m and 340/340 = 1 m.' },
    ta: { q: 'காற்றில் 340 மீ வி⁻¹ வேகத்தில் செல்லும் ஒலியின் அதிர்வெண் 170 ஹெர்ட்ஸிலிருந்து 340 ஹெர்ட்ஸாக இருமடங்காகிறது. அதன் அலைநீளம்', options: ['2 மீ இலிருந்து 1 மீ ஆகப் பாதியாகும்', '2 மீ இலிருந்து 4 மீ ஆக இருமடங்காகும்', '2 மீ ஆகவே இருக்கும்', '1 மீ இலிருந்து 0.5 மீ ஆகப் பாதியாகும்'], explanation: 'ஒரே ஊடகத்தில் எல்லா அதிர்வெண்களுக்கும் வேகம் சமம்; λ = v/n = 340/170 = 2 மீ, 340/340 = 1 மீ.' },
  },
  {
    difficulty: 'hard', source: '§8.5.1, p. 95 (Table 8.1)', answer: 0,
    en: { q: 'Sound takes 0.5 s to travel along a 2.98 km steel rail (speed 5960 m s⁻¹). How long does the same sound take to travel 2.98 km through air (340 m s⁻¹)?', options: ['About 8.8 s', 'About 0.5 s', 'About 17.5 s', 'About 4.4 s'], explanation: 'Steel: 2980/5960 = 0.5 s. Air: 2980/340 ≈ 8.8 s – sound is much faster in solids.' },
    ta: { q: '2.98 கிமீ நீள எஃகு தண்டவாளத்தின் வழியே (வேகம் 5960 மீ வி⁻¹) ஒலி 0.5 வி இல் செல்கிறது. அதே ஒலி 2.98 கிமீ காற்றின் வழியே (340 மீ வி⁻¹) செல்ல எடுக்கும் காலம்', options: ['ஏறக்குறைய 8.8 வி', 'ஏறக்குறைய 0.5 வி', 'ஏறக்குறைய 17.5 வி', 'ஏறக்குறைய 4.4 வி'], explanation: 'எஃகு: 2980/5960 = 0.5 வி. காற்று: 2980/340 ≈ 8.8 வி – திடப்பொருளில் ஒலி மிக வேகமானது.' },
  },
  {
    difficulty: 'hard', source: '§8.5.1, p. 96 (Do you know?)', answer: 0,
    en: { q: 'Two whales are 153 km apart in the sea. Taking the speed of sound in sea water as 1530 m s⁻¹, the call of one reaches the other in', options: ['100 s', '10 s', '1000 s', '450 s'], explanation: 't = d/v = 153000/1530 = 100 s. Sound in sea water is about 5 times faster than in air.' },
    ta: { q: 'கடலில் 153 கிமீ இடைவெளியில் இரண்டு திமிங்கலங்கள் உள்ளன. கடல் நீரில் ஒலியின் வேகம் 1530 மீ வி⁻¹ எனில், ஒன்றின் ஒலி மற்றொன்றை அடையும் காலம்', options: ['100 வி', '10 வி', '1000 வி', '450 வி'], explanation: 't = d/v = 153000/1530 = 100 வி. கடல் நீரில் ஒலி காற்றை விட ஏறக்குறைய 5 மடங்கு வேகமானது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise V.1, p. 100', answer: 0,
    en: { q: 'Which statements about compressions and rarefactions are correct?\n1. Compressions are regions of high pressure.\n2. The distance between two consecutive compressions is one wavelength.\n3. In rarefactions particles are crowded together.\n4. Compressions and rarefactions move along the medium as the source vibrates.', options: ['1, 2 and 4 only', '1, 2, 3 and 4', '2 and 3 only', '1 and 3 only'], explanation: 'In rarefactions particles are spread apart, so 3 is wrong; the others are correct.' },
    ta: { q: 'நெருக்கங்கள், நெகிழ்ச்சிகள் பற்றிய சரியான கூற்றுகள் எவை?\n1. நெருக்கங்கள் அதிக அழுத்தப் பகுதிகள்.\n2. அடுத்தடுத்த இரு நெருக்கங்களுக்கு இடையேயான தொலைவு ஒரு அலைநீளம்.\n3. நெகிழ்ச்சிகளில் துகள்கள் நெருங்கியிருக்கும்.\n4. மூலம் அதிரும்போது நெருக்கங்களும் நெகிழ்ச்சிகளும் ஊடகத்தில் நகர்கின்றன.', options: ['1, 2, 4 மட்டும்', '1, 2, 3, 4', '2, 3 மட்டும்', '1, 3 மட்டும்'], explanation: 'நெகிழ்ச்சிகளில் துகள்கள் விலகியிருக்கும்; எனவே 3 தவறு, மற்றவை சரி.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise V.2, p. 100', answer: 0,
    en: { q: 'In an experiment on reflection of sound, a sound incident on a wall at 40° to the normal is reflected. The reflected sound', options: ['makes 40° with the normal, in the same plane as the incident sound and the normal', 'makes 50° with the normal', 'makes 80° with the normal', 'travels back along the incident path'], explanation: 'Laws of reflection: angle of incidence = angle of reflection, and incident sound, reflected sound and normal lie in one plane.' },
    ta: { q: 'ஒலி எதிரொலித்தல் சோதனையில், செங்குத்துக் கோட்டுடன் 40° கோணத்தில் சுவரில் படும் ஒலி எதிரொலிக்கிறது. எதிரொலித்த ஒலி', options: ['செங்குத்துக் கோட்டுடன் 40° கோணம்; படும் ஒலி, செங்குத்துக் கோடு அமைந்த அதே தளத்தில்', 'செங்குத்துக் கோட்டுடன் 50° கோணம்', 'செங்குத்துக் கோட்டுடன் 80° கோணம்', 'படும் பாதையிலேயே திரும்பும்'], explanation: 'எதிரொலிப்பு விதிகள்: படுகோணம் = எதிரொளிப்புக் கோணம்; படும் ஒலி, எதிரொலித்த ஒலி, செங்குத்துக் கோடு மூன்றும் ஒரே தளத்தில் அமையும்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise V.4, p. 100', answer: 0,
    en: { q: 'A SONAR signal returns 2 s after being sent. If the speed of sound in sea water is 1500 m s⁻¹, the object is at a distance of', options: ['1500 m', '3000 m', '750 m', '6000 m'], explanation: 'Echo-ranging: 2d = vt = 1500 × 2 = 3000 m, so d = 1500 m.' },
    ta: { q: 'சோனார் அனுப்பிய சைகை 2 வி கழித்துத் திரும்புகிறது. கடல் நீரில் ஒலியின் வேகம் 1500 மீ வி⁻¹ எனில், பொருளின் தொலைவு', options: ['1500 மீ', '3000 மீ', '750 மீ', '6000 மீ'], explanation: 'எதிரொலி மூலம் தொலைவு காணல்: 2d = vt = 1500 × 2 = 3000 மீ; எனவே d = 1500 மீ.' },
  },
  {
    difficulty: 'hard', source: '§8.4, p. 94', answer: 0,
    en: { q: 'Assertion: A sound becomes softer as we move away from its source.\nReason: As a sound wave spreads out from its source, its amplitude decreases.', options: AR_EN, explanation: 'Loudness depends on amplitude; amplitude falls as the wave spreads, so the sound is softer far away.' },
    ta: { q: 'கூற்று: ஒலிமூலத்திலிருந்து விலகிச் செல்லச் செல்ல ஒலி மென்மையாகிறது.\nகாரணம்: ஒலி அலை மூலத்திலிருந்து விரிந்து செல்லும்போது அதன் வீச்சு குறைகிறது.', options: AR_TA, explanation: 'உரப்பு வீச்சைச் சார்ந்தது; அலை விரியும்போது வீச்சு குறைவதால் தொலைவில் ஒலி மென்மையாகிறது.' },
  },
  {
    difficulty: 'hard', source: '§8.9, p. 97 (More to know)', answer: 1,
    en: { q: 'Assertion: Bats can navigate through dark caves.\nReason: Dogs can hear ultrasonic sound.', options: AR_EN, explanation: 'Both are true, but bats navigate by echolocation using their own ultrasonic echoes; dogs hearing ultrasound does not explain it.' },
    ta: { q: 'கூற்று: வெளவால்கள் இருண்ட குகைகளில் பயணிக்க முடியும்.\nகாரணம்: நாய்களால் மீயொலியைக் கேட்க முடியும்.', options: AR_TA, explanation: 'இரண்டும் சரி; ஆனால் வெளவால்கள் மீயொலி எதிரொலி மூலம் இடம் கண்டறிகின்றன; நாய்கள் மீயொலியைக் கேட்பது அதற்கான விளக்கம் அல்ல.' },
  },
  {
    difficulty: 'hard', source: '§8.11, p. 98', answer: 2,
    en: { q: 'Assertion: An ECG is a record of the electrical activity of the heart muscle as it changes with time.\nReason: An ECG uses ultrasonic waves reflected from the heart to form its image.', options: AR_EN, explanation: 'The assertion is the book definition of ECG; forming an image of the heart with reflected ultrasound is echocardiography, so the reason is false.' },
    ta: { q: 'கூற்று: ECG என்பது காலத்தைப் பொறுத்து மாறும் இதயத் தசையின் மின் செயல்பாட்டின் பதிவு.\nகாரணம்: ECG இதயத்திலிருந்து எதிரொலிக்கும் மீயொலியைக் கொண்டு அதன் உருவத்தை அமைக்கிறது.', options: AR_TA, explanation: 'கூற்று பாடநூல் தரும் ECG வரையறை; எதிரொலிக்கும் மீயொலி மூலம் இதய உருவம் பெறுவது எக்கோ கார்டியோகிராஃபி; எனவே காரணம் தவறு.' },
  },
  {
    difficulty: 'hard', source: '§8.12, p. 99 (Fig. 8.10)', imageUrl: `${IMG}/human-ear.png`, answer: 0,
    en: { q: 'In the diagram of the human ear, which part turns the pressure variations into electrical signals that go to the brain through the auditory nerve?', options: ['Cochlea', 'Tympanic membrane', 'Ear canal', 'Helix'], explanation: 'The eardrum vibrates, the middle-ear bones amplify, and the cochlea in the inner ear converts the variations into electrical signals.' },
    ta: { q: 'மனிதக் காது படத்தில், அழுத்த மாறுபாடுகளை மின் சைகைகளாக மாற்றி செவி நரம்பு வழியே மூளைக்கு அனுப்பும் பகுதி எது?', options: ['காக்ளியா', 'செவிப்பறை', 'செவிக் குழாய்', 'செவிமடலின் விளிம்பு'], explanation: 'செவிப்பறை அதிர்கிறது, நடுச்செவி எலும்புகள் பெருக்குகின்றன, உட்செவியிலுள்ள காக்ளியா அவற்றை மின் சைகைகளாக மாற்றுகிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise V.3, p. 100', answer: 0,
    en: { q: 'Which of these use reflection of sound or ultrasound?\n1. Stethoscope\n2. SONAR\n3. Echocardiography\n4. Electric bell in a vacuum jar', options: ['1, 2 and 3 only', '1, 2, 3 and 4', '2 and 3 only', '1 and 4 only'], explanation: 'Stethoscope (multiple reflection), SONAR and echocardiography (reflected ultrasound) all use reflection; the bell jar shows sound needs a medium.' },
    ta: { q: 'இவற்றில் ஒலி அல்லது மீயொலியின் எதிரொலிப்பைப் பயன்படுத்துபவை எவை?\n1. ஸ்டெதஸ்கோப்\n2. சோனார்\n3. எக்கோ கார்டியோகிராஃபி\n4. வெற்றிடச் சாடியிலுள்ள மின்மணி', options: ['1, 2, 3 மட்டும்', '1, 2, 3, 4', '2, 3 மட்டும்', '1, 4 மட்டும்'], explanation: 'ஸ்டெதஸ்கோப் (பன்முக எதிரொலிப்பு), சோனார், எக்கோ கார்டியோகிராஃபி (எதிரொலிக்கும் மீயொலி) எதிரொலிப்பைப் பயன்படுத்துகின்றன; மணிச்சாடி ஒலிக்கு ஊடகம் தேவை என்பதைக் காட்டுகிறது.' },
  },
];
