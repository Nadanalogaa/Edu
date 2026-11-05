// Tamil Nadu State Board, 9th Science, Unit 2 – Motion (இயக்கம்).
// Every textbook exercise/example question that can be multiple choice, plus our own
// questions so every section is covered. source = printed page of the English-medium book.
import { BankQuestion, AR_EN, AR_TA } from './types';

const IMG = '/content/9/state_board/science/02';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.1 & II.4, pp. 23–24', answer: 0,
    en: { q: 'The area under a velocity–time graph represents the', options: ['displacement covered by the moving object', 'velocity of the moving object', 'speed of the moving object', 'acceleration of the moving object'], explanation: 'Velocity × time = displacement, so the area under the v–t graph gives the displacement.' },
    ta: { q: 'திசைவேகம் – காலம் வரைபடத்தின் உள்ளடக்கும் பரப்பளவு எதனைப் பிரதிபலிக்கிறது?', options: ['நகரும் பொருள் அடைந்த இடப்பெயர்ச்சி', 'நகரும் பொருளின் திசைவேகம்', 'நகரும் பொருளின் வேகம்', 'நகரும் பொருளின் முடுக்கம்'], explanation: 'திசைவேகம் × காலம் = இடப்பெயர்ச்சி; எனவே வரைபடத்தின் கீழ் உள்ள பரப்பு இடப்பெயர்ச்சியைத் தருகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.1, p. 24', answer: 0,
    en: { q: 'Speed is a _____ quantity whereas velocity is a _____ quantity.', options: ['scalar; vector', 'vector; scalar', 'scalar; scalar', 'vector; vector'], explanation: 'Speed has magnitude only; velocity has both magnitude and direction.' },
    ta: { q: 'வேகம் ஒரு _____ அளவு. அதே சமயம் திசைவேகம் ஒரு _____ அளவு.', options: ['ஸ்கேலர்; வெக்டர்', 'வெக்டர்; ஸ்கேலர்', 'ஸ்கேலர்; ஸ்கேலர்', 'வெக்டர்; வெக்டர்'], explanation: 'வேகத்திற்கு எண்மதிப்பு மட்டும் உண்டு; திசைவேகத்திற்கு எண்மதிப்பும் திசையும் உண்டு.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.2, p. 24', answer: 0,
    en: { q: 'The slope of the distance–time graph at any point gives the _____.', options: ['speed', 'acceleration', 'distance', 'displacement'], explanation: 'Slope = distance ÷ time = speed; the steeper the slope, the greater the speed.' },
    ta: { q: 'தொலைவு – கால வரைபடத்தின் எந்த ஒரு புள்ளியிலும் சாய்வின் மதிப்பைத் தருவது _____.', options: ['வேகம்', 'முடுக்கம்', 'தொலைவு', 'இடப்பெயர்ச்சி'], explanation: 'சாய்வு = தொலைவு ÷ காலம் = வேகம்; சாய்வு அதிகமானால் வேகம் அதிகம்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.3, p. 24', answer: 0,
    en: { q: 'Negative acceleration is called _____.', options: ['retardation (deceleration)', 'uniform velocity', 'displacement', 'centripetal acceleration'], explanation: 'When velocity decreases with time, acceleration is negative; this is retardation or deceleration.' },
    ta: { q: 'எதிர்மறை முடுக்கத்தை _____ என்றும் கூறலாம்.', options: ['வேக இறக்கம் (ஒடுக்கம்)', 'சீரான திசைவேகம்', 'இடப்பெயர்ச்சி', 'மைய நோக்கு முடுக்கம்'], explanation: 'காலத்துடன் திசைவேகம் குறைந்தால் முடுக்கம் எதிர்மறை; இது வேக இறக்கம் அல்லது ஒடுக்கம் எனப்படும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise III.1, p. 24', answer: 0,
    en: { q: 'The motion of a city bus on a road with heavy traffic is an example of', options: ['non-uniform motion', 'uniform motion', 'circular motion', 'oscillatory motion'], explanation: 'The statement "uniform motion" is false: the bus covers unequal distances in equal intervals of time.' },
    ta: { q: 'நகரத்தின் நெருக்கடி மிகுந்த போக்குவரத்தில் செல்லும் பேருந்தின் இயக்கம் எதற்கு எடுத்துக்காட்டு?', options: ['சீரற்ற இயக்கம்', 'சீரான இயக்கம்', 'வட்ட இயக்கம்', 'அலைவு இயக்கம்'], explanation: 'பேருந்து சம கால இடைவெளிகளில் சமமற்ற தொலைவுகளைக் கடக்கிறது; எனவே இது சீரற்ற இயக்கம் ("சீரான இயக்கம்" என்பது தவறு).' },
  },
  {
    difficulty: 'easy', source: 'Book exercise III.2, p. 24', answer: 0,
    en: { q: "'Acceleration can get a negative value also.' This statement is", options: ['true – acceleration is negative when velocity decreases', 'false – acceleration is always positive', 'true – but only when the body is at rest', 'false – only speed can be negative'], explanation: 'If v < u, a = (v − u)/t is negative; this is retardation.' },
    ta: { q: '"முடுக்கம் எதிர்மறை மதிப்பும் பெறும்" – இக்கூற்று', options: ['சரி – திசைவேகம் குறையும்போது முடுக்கம் எதிர்மறை', 'தவறு – முடுக்கம் எப்போதும் நேர்மறை', 'சரி – ஆனால் பொருள் ஓய்வில் இருக்கும்போது மட்டும்', 'தவறு – வேகம் மட்டுமே எதிர்மறை ஆகும்'], explanation: 'v < u எனில் a = (v − u)/t எதிர்மறை; இதுவே வேக இறக்கம்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise VI.1, p. 24', answer: 0,
    en: { q: 'Velocity is defined as the', options: ['rate of change of displacement', 'rate of change of distance', 'rate of change of acceleration', 'product of mass and speed'], explanation: 'Velocity = displacement ÷ time; it is a vector, with SI unit m s⁻¹.' },
    ta: { q: 'திசைவேகம் என்பது', options: ['இடப்பெயர்ச்சி மாறுபாட்டு வீதம்', 'தொலைவின் மாறுபாட்டு வீதம்', 'முடுக்கத்தின் மாறுபாட்டு வீதம்', 'நிறை மற்றும் வேகத்தின் பெருக்கல்'], explanation: 'திசைவேகம் = இடப்பெயர்ச்சி ÷ காலம்; இது வெக்டர் அளவு; SI அலகு மீ வி⁻¹.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise VI.3, p. 24', answer: 0,
    en: { q: 'An object is in uniform motion if it covers', options: ['equal distances in equal intervals of time', 'unequal distances in equal intervals of time', 'equal distances in unequal intervals of time', 'a circular path at varying speed'], explanation: 'Uniform motion: equal distances in equal time intervals, however small the intervals.' },
    ta: { q: 'ஒரு பொருள் சீரான இயக்கத்தில் உள்ளது எனில் அது', options: ['சம கால இடைவெளிகளில் சம தொலைவுகளைக் கடக்கும்', 'சம கால இடைவெளிகளில் சமமற்ற தொலைவுகளைக் கடக்கும்', 'சமமற்ற கால இடைவெளிகளில் சம தொலைவுகளைக் கடக்கும்', 'மாறும் வேகத்தில் வட்டப்பாதையில் செல்லும்'], explanation: 'சம கால இடைவெளிகளில் சம தொலைவுகளைக் கடந்தால் அது சீரான இயக்கம்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise VI.7, p. 24', answer: 0,
    en: { q: 'Which of these is an example of uniform circular motion?', options: ["The tip of a clock's seconds hand", 'A bus moving in heavy traffic', 'A child on a swing', 'A stone falling from a roof'], explanation: 'The tip of the seconds hand moves along a circle at constant speed; the Moon around the Earth is another example.' },
    ta: { q: 'பின்வருவனவற்றுள் சீரான வட்ட இயக்கத்திற்கு எடுத்துக்காட்டு எது?', options: ['கடிகாரத்தின் வினாடி முள்ளின் முனை', 'நெரிசலில் செல்லும் பேருந்து', 'ஊஞ்சலில் ஆடும் குழந்தை', 'கூரையிலிருந்து விழும் கல்'], explanation: 'வினாடி முள்ளின் முனை மாறாத வேகத்தில் வட்டப்பாதையில் செல்கிறது; புவியைச் சுற்றும் நிலவும் ஓர் எடுத்துக்காட்டு.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise VII.2, p. 25', answer: 0,
    en: { q: 'Repetitive to-and-fro motion of an object at regular intervals of time is called', options: ['oscillatory motion', 'linear motion', 'circular motion', 'random motion'], explanation: 'A swing or a pendulum moving to and fro at regular intervals is in oscillatory motion.' },
    ta: { q: 'ஒரு புள்ளியை மையமாகக் கொண்டு மீண்டும் மீண்டும் முன்னும் பின்னுமாக இயங்கும் பொருளின் இயக்கம்', options: ['அலைவு இயக்கம்', 'நேரான இயக்கம்', 'வட்ட இயக்கம்', 'ஒழுங்கற்ற இயக்கம்'], explanation: 'ஊஞ்சல், ஊசல் போன்றவை முன்னும் பின்னுமாக இயங்குவது அலைவு இயக்கம்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise VII.1, p. 25', answer: 0,
    en: { q: 'The third equation of motion is', options: ['v² = u² + 2as', 'v = u + at', 's = ut + ½at²', 'v² = u² + 2at'], explanation: 'v = u + at is the first, s = ut + ½at² the second and v² = u² + 2as the third equation.' },
    ta: { q: 'இயக்கத்தின் மூன்றாவது சமன்பாடு', options: ['v² = u² + 2as', 'v = u + at', 's = ut + ½at²', 'v² = u² + 2at'], explanation: 'v = u + at முதல், s = ut + ½at² இரண்டாவது, v² = u² + 2as மூன்றாவது சமன்பாடு.' },
  },
  {
    difficulty: 'easy', source: '§2.1, p. 15', answer: 0,
    en: { q: 'Trees on the roadside appear to move backward to a person in a moving car but are at rest for a person on the road. This shows that motion is', options: ['relative', 'absolute', 'always uniform', 'oscillatory'], explanation: 'Motion is a relative phenomenon: it depends on the observer.' },
    ta: { q: 'காரில் செல்பவருக்குச் சாலையோர மரங்கள் பின்னோக்கி நகர்வது போலவும், சாலையில் நிற்பவருக்கு அவை நகராமலும் தோன்றுகின்றன. இது காட்டுவது: இயக்கம் ஒரு', options: ['சார்பியல் நிகழ்வு', 'தனித்த நிகழ்வு', 'எப்போதும் சீரான நிகழ்வு', 'அலைவு நிகழ்வு'], explanation: 'இயக்கம் ஒரு சார்பியல் நிகழ்வு; அது காண்பவரைப் பொறுத்தது.' },
  },
  {
    difficulty: 'easy', source: '§2.3.2, p. 15', answer: 0,
    en: { q: 'The SI unit of displacement is', options: ['metre', 'metre per second', 'second', 'metre per second squared'], explanation: 'Distance and displacement are both lengths, measured in metre.' },
    ta: { q: 'இடப்பெயர்ச்சியின் SI அலகு', options: ['மீட்டர்', 'மீட்டர் / வினாடி', 'வினாடி', 'மீட்டர் / வினாடி²'], explanation: 'தொலைவு, இடப்பெயர்ச்சி இரண்டும் நீளங்கள்; இரண்டும் மீட்டரில் அளக்கப்படுகின்றன.' },
  },
  {
    difficulty: 'easy', source: '§2.4.3, p. 16', answer: 0,
    en: { q: 'The SI unit of acceleration is', options: ['m s⁻²', 'm s⁻¹', 'm s', 'm² s⁻¹'], explanation: 'Acceleration = change in velocity (m s⁻¹) ÷ time (s) = m s⁻².' },
    ta: { q: 'முடுக்கத்தின் SI அலகு', options: ['மீ வி⁻²', 'மீ வி⁻¹', 'மீ வி', 'மீ² வி⁻¹'], explanation: 'முடுக்கம் = திசைவேக மாற்றம் (மீ வி⁻¹) ÷ காலம் (வி) = மீ வி⁻².' },
  },
  {
    difficulty: 'easy', source: '§2.9, p. 21', answer: 0,
    en: { q: 'For a body in uniform circular motion, the centripetal force acts', options: ['along the radius, towards the centre', 'along the radius, away from the centre', 'along the tangent to the circle', 'perpendicular to the plane of the circle'], explanation: 'Centripetal acceleration and force are directed radially towards the centre of the circle.' },
    ta: { q: 'சீரான வட்ட இயக்கத்தில் உள்ள பொருளின் மீது மைய நோக்கு விசை செயல்படும் திசை', options: ['ஆரத்தின் வழியே மையத்தை நோக்கி', 'ஆரத்தின் வழியே மையத்தை விட்டு வெளிநோக்கி', 'வட்டத்தின் தொடுகோட்டின் வழியே', 'வட்டத்தின் தளத்திற்குச் செங்குத்தாக'], explanation: 'மைய நோக்கு முடுக்கமும் விசையும் ஆரத்தின் வழியே வட்டத்தின் மையத்தை நோக்கிச் செயல்படுகின்றன.' },
  },
  {
    difficulty: 'easy', source: '§2.10, p. 22', answer: 0,
    en: { q: 'The dryer in a washing machine is an application of', options: ['centrifugal force', 'frictional force', 'magnetic force', 'buoyant force'], explanation: 'The spinning drum throws water outward, away from the centre – an application of centrifugal force.' },
    ta: { q: 'துணி துவைக்கும் இயந்திரத்தில் உள்ள துணி உலர்த்தி எதன் பயன்பாடு?', options: ['மைய விலக்கு விசை', 'உராய்வு விசை', 'காந்த விசை', 'மிதப்பு விசை'], explanation: 'சுழலும் உருளை நீரை மையத்தை விட்டு வெளியே வீசுகிறது; இது மைய விலக்கு விசையின் பயன்பாடு.' },
  },
  {
    difficulty: 'easy', source: '§2.6, p. 19', answer: 0,
    en: { q: 'The three equations of motion relate displacement, velocity, acceleration and', options: ['time', 'mass', 'force', 'temperature'], explanation: 'They connect u, v, a, s and t for a uniformly accelerated object.' },
    ta: { q: 'இயக்கச் சமன்பாடுகள் இடப்பெயர்ச்சி, திசைவேகம், முடுக்கம் மற்றும் _____ ஆகியவற்றைத் தொடர்புபடுத்துகின்றன.', options: ['காலம்', 'நிறை', 'விசை', 'வெப்பநிலை'], explanation: 'சீரான முடுக்கம் பெற்ற பொருளுக்கு u, v, a, s, t ஆகியவற்றை இவை இணைக்கின்றன.' },
  },
  // ---------------------------------------------------------------- Medium
  {
    difficulty: 'medium', source: 'Book exercise I.2, p. 23', answer: 0,
    en: { q: 'Which one of the following is most likely NOT a case of uniform circular motion?', options: ['Motion of a racing car on a circular track', 'Motion of the Earth around the Sun', 'Motion of a toy train on a circular track', "Motion of the hours' hand on the dial of a clock"], explanation: 'A racing car keeps speeding up and slowing down, so its speed on the track is not constant.' },
    ta: { q: 'கீழ்க்கண்டவற்றில் எது பெரும்பாலும் சீரான வட்ட இயக்கம் அல்ல?', options: ['வட்டப் பாதையில் செல்லும் பந்தய மகிழுந்து', 'சூரியனைச் சுற்றி வரும் புவியின் இயக்கம்', 'வட்டப் பாதையில் சுற்றி வரும் பொம்மை ரயிலின் இயக்கம்', 'கடிகாரத்தில் மணி முள்ளின் இயக்கம்'], explanation: 'பந்தய மகிழுந்தின் வேகம் கூடியும் குறைந்தும் மாறுவதால் அது சீரான வட்ட இயக்கம் அல்ல.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.4, p. 23', answer: 0,
    en: { q: 'The centrifugal force is', options: ['a virtual (apparent) force', 'a real force', 'the force of reaction of centripetal force', 'directed towards the centre of the circular path'], explanation: 'Centrifugal force arises from the body’s inertia and only appears to act away from the centre, so it is a virtual force.' },
    ta: { q: 'மையவிலக்கு விசை ஒரு', options: ['மெய்நிகர் விசை', 'உண்மையான விசை', 'மைய நோக்கு விசைக்கு எதிரான விசை', 'வட்டப் பாதையின் மையத்தை நோக்கி இயங்கும் விசை'], explanation: 'மைய விலக்கு விசை பொருளின் நிலைமத்தால் தோன்றுகிறது; மையத்தை விட்டு செயல்படுவது போல் தோன்றும் மெய்நிகர் விசை.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.3, p. 24', answer: 0,
    en: { q: 'Which statement about a particle that has been moving is correct?', options: ['Its distance covered never becomes zero, but its displacement can be zero', 'Its displacement never becomes zero, but its distance can be zero', 'Its distance and displacement are always equal', 'Both its distance and displacement can never be zero'], explanation: 'True statement: if the particle returns to its starting point, displacement is zero though the path length is not.' },
    ta: { q: 'இயங்கிய ஒரு பொருள் பற்றிய சரியான கூற்று எது?', options: ['அது கடந்த தூரம் சுழி ஆகாது; ஆனால் இடப்பெயர்ச்சி சுழி ஆகலாம்', 'அதன் இடப்பெயர்ச்சி சுழி ஆகாது; ஆனால் தூரம் சுழி ஆகலாம்', 'அதன் தூரமும் இடப்பெயர்ச்சியும் எப்போதும் சமம்', 'தூரமும் இடப்பெயர்ச்சியும் ஒருபோதும் சுழி ஆகாது'], explanation: 'பொருள் தொடக்கப் புள்ளிக்கே திரும்பினால் இடப்பெயர்ச்சி சுழி; ஆனால் கடந்த தூரம் சுழி அல்ல.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise III.4, p. 24', answer: 0,
    en: { q: 'The velocity–time graph of a particle falling freely under gravity from rest is', options: ['a straight line through the origin, inclined to the time axis', 'a straight line parallel to the time (x) axis', 'a curve that bends upwards', 'a straight line parallel to the velocity axis'], explanation: 'v = gt increases uniformly, so the graph is an inclined straight line – not parallel to the x-axis as the false statement says.' },
    ta: { q: 'ஈர்ப்பு விசையால் தடையின்றி தானே விழும் ஒரு பொருளின் திசைவேகம் – கால வரைபடம்', options: ['ஆதியின் வழியே செல்லும், கால அச்சுக்குச் சாய்வான நேர்கோடு', 'கால (x) அச்சுக்கு இணையான நேர்கோடு', 'மேல்நோக்கி வளையும் வளைகோடு', 'திசைவேக அச்சுக்கு இணையான நேர்கோடு'], explanation: 'v = gt சீராக அதிகரிப்பதால் வரைபடம் சாய்வான நேர்கோடு; x-அச்சுக்கு இணையானது அல்ல.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.2, p. 24', answer: 0,
    en: { q: 'Which of these is true for displacement but NOT for distance?', options: ['It has both magnitude and direction', 'It is measured in metre', 'It is the actual length of the path travelled', 'It never decreases as the body moves'], explanation: 'Displacement is a vector (shortest change in position); distance is a scalar – the actual path length.' },
    ta: { q: 'இடப்பெயர்ச்சிக்குப் பொருந்தும், ஆனால் தொலைவுக்குப் பொருந்தாதது எது?', options: ['எண்மதிப்பும் திசையும் கொண்டது', 'மீட்டரில் அளக்கப்படுகிறது', 'கடந்த பாதையின் உண்மையான நீளம்', 'பொருள் இயங்கும்போது ஒருபோதும் குறையாது'], explanation: 'இடப்பெயர்ச்சி வெக்டர் அளவு (நிலையின் மிகக் குறைந்த மாற்றம்); தொலைவு ஸ்கேலர் – கடந்த பாதையின் நீளம்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.4, p. 24', answer: 0,
    en: { q: 'A car goes round a circular track at a constant speed of 20 m s⁻¹. Which is true?', options: ['Its speed is constant but its velocity keeps changing', 'Both its speed and velocity are constant', 'Its velocity is constant but its speed changes', 'Both its speed and velocity keep changing'], explanation: 'Speed is only magnitude; velocity also includes direction, which changes at every point on a circle.' },
    ta: { q: 'ஒரு மகிழுந்து வட்டப் பாதையில் மாறாத 20 மீ வி⁻¹ வேகத்தில் சுற்றுகிறது. எது சரி?', options: ['வேகம் மாறாது; ஆனால் திசைவேகம் தொடர்ந்து மாறுகிறது', 'வேகமும் திசைவேகமும் மாறாதவை', 'திசைவேகம் மாறாது; ஆனால் வேகம் மாறுகிறது', 'வேகமும் திசைவேகமும் தொடர்ந்து மாறுகின்றன'], explanation: 'வேகத்திற்கு எண்மதிப்பு மட்டும்; திசைவேகத்தில் திசையும் அடங்கும்; வட்டத்தில் திசை ஒவ்வொரு புள்ளியிலும் மாறுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.5, p. 24', answer: 0,
    en: { q: 'A body moving in a straight line has negative acceleration when', options: ['its final velocity is less than its initial velocity', 'its final velocity is greater than its initial velocity', 'its velocity remains constant', 'it moves backwards at constant speed'], explanation: 'a = (v − u)/t is negative when v < u: velocity decreases with time.' },
    ta: { q: 'நேர்கோட்டில் இயங்கும் பொருளுக்கு எதிர்மறை முடுக்கம் எப்போது?', options: ['இறுதித் திசைவேகம் தொடக்கத் திசைவேகத்தை விடக் குறைவாக இருக்கும்போது', 'இறுதித் திசைவேகம் தொடக்கத் திசைவேகத்தை விட அதிகமாக இருக்கும்போது', 'திசைவேகம் மாறாமல் இருக்கும்போது', 'மாறாத வேகத்தில் பின்னோக்கிச் செல்லும்போது'], explanation: 'v < u எனில் a = (v − u)/t எதிர்மறை; காலத்துடன் திசைவேகம் குறைகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VI.6, p. 24', answer: 0,
    en: { q: 'Uniform circular motion is accelerated motion because', options: ['the direction of velocity changes at every point', 'the speed keeps increasing', 'the body covers unequal distances in equal times', 'no force acts on the body'], explanation: 'A body accelerates if its velocity changes in magnitude or direction; on a circle the direction changes continuously.' },
    ta: { q: 'சீரான வட்ட இயக்கம் முடுக்கப்பட்ட இயக்கம் ஆகும், ஏனெனில்', options: ['ஒவ்வொரு புள்ளியிலும் திசைவேகத்தின் திசை மாறுகிறது', 'வேகம் தொடர்ந்து அதிகரிக்கிறது', 'சம கால அளவுகளில் சமமற்ற தொலைவுகளைக் கடக்கிறது', 'பொருளின் மீது எந்த விசையும் செயல்படுவதில்லை'], explanation: 'திசைவேகத்தின் எண்மதிப்போ திசையோ மாறினால் முடுக்கம் உண்டு; வட்டத்தில் திசை தொடர்ந்து மாறுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VII.2, p. 25', answer: 0,
    en: { q: 'The motion of an object that does not fall into the linear, circular or oscillatory categories is called', options: ['random motion', 'uniform motion', 'periodic motion', 'rotational motion'], explanation: 'The book lists four types: linear, circular, oscillatory and random motion.' },
    ta: { q: 'நேரான, வட்ட, அலைவு என மேலே குறிப்பிட்ட எந்த இயக்கத்தையும் சாராத இயக்கம்', options: ['ஒழுங்கற்ற இயக்கம்', 'சீரான இயக்கம்', 'கால ஒழுங்கு இயக்கம்', 'சுழற்சி இயக்கம்'], explanation: 'பாடநூல் நான்கு வகைகளைக் கூறுகிறது: நேரான, வட்ட, அலைவு, ஒழுங்கற்ற இயக்கம்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VIII.1, p. 25', answer: 0,
    en: { q: 'A ball is gently dropped from a height of 20 m. If its velocity increases uniformly at the rate of 10 m s⁻², with what velocity will it strike the ground?', options: ['20 m s⁻¹', '200 m s⁻¹', '10 m s⁻¹', '400 m s⁻¹'], explanation: 'v² = u² + 2as = 0 + 2 × 10 × 20 = 400, so v = 20 m s⁻¹.' },
    ta: { q: 'ஒரு பந்து 20 மீட்டர் உயரத்தில் இருந்து மெதுவாகக் கீழே விடப்பட்டது. அதன் சீரான திசைவேக மாறுபாட்டு வீதம் 10 மீ வி⁻². அது எந்தத் திசைவேகத்தில் தரையைத் தொடும்?', options: ['20 மீ வி⁻¹', '200 மீ வி⁻¹', '10 மீ வி⁻¹', '400 மீ வி⁻¹'], explanation: 'v² = u² + 2as = 0 + 2 × 10 × 20 = 400; v = 20 மீ வி⁻¹.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VIII.1, p. 25', answer: 0,
    en: { q: 'A ball dropped from rest from a height of 20 m accelerates uniformly at 10 m s⁻². After what time will it strike the ground?', options: ['2 s', '4 s', '1 s', '20 s'], explanation: 's = ½at² gives 20 = ½ × 10 × t², so t² = 4 and t = 2 s.' },
    ta: { q: '20 மீ உயரத்திலிருந்து ஓய்வு நிலையில் விடப்பட்ட பந்து 10 மீ வி⁻² சீரான முடுக்கம் பெறுகிறது. தரையைத் தொடுவதற்கு ஆகும் காலம்', options: ['2 வி', '4 வி', '1 வி', '20 வி'], explanation: 's = ½at²: 20 = ½ × 10 × t²; t² = 4; t = 2 வி.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise VIII.3, p. 25', answer: 0,
    en: { q: 'A racing car has a uniform acceleration of 4 m s⁻². What distance does it cover in 10 s after the start?', options: ['200 m', '400 m', '40 m', '20 m'], explanation: 's = ut + ½at² = 0 + ½ × 4 × 10² = 200 m.' },
    ta: { q: 'ஒரு பந்தய மகிழுந்து 4 மீ வி⁻² என்ற சீரான முடுக்கத்தில் பயணிக்கிறது. புறப்பட்ட 10 வினாடியில் அது கடந்த தூரம்', options: ['200 மீ', '400 மீ', '40 மீ', '20 மீ'], explanation: 's = ut + ½at² = 0 + ½ × 4 × 10² = 200 மீ.' },
  },
  {
    difficulty: 'medium', source: 'Book example (Problem 1), p. 16', answer: 0,
    en: { q: 'An object travels 16 m in 4 s and then another 16 m in 2 s. What is its average speed?', options: ['5.33 m s⁻¹', '6 m s⁻¹', '8 m s⁻¹', '4 m s⁻¹'], explanation: 'Average speed = total distance ÷ total time = 32 m ÷ 6 s = 5.33 m s⁻¹ (not the average of 4 and 8).' },
    ta: { q: 'ஒரு பொருள் 16 மீ தொலைவை 4 வினாடியிலும், மேலும் 16 மீ தொலைவை 2 வினாடியிலும் கடக்கிறது. அதன் சராசரி வேகம்', options: ['5.33 மீ வி⁻¹', '6 மீ வி⁻¹', '8 மீ வி⁻¹', '4 மீ வி⁻¹'], explanation: 'சராசரி வேகம் = மொத்தத் தொலைவு ÷ மொத்த நேரம் = 32 ÷ 6 = 5.33 மீ வி⁻¹ (4, 8 இன் சராசரி அல்ல).' },
  },
  {
    difficulty: 'medium', source: 'Book example (Problem 2), p. 16', answer: 0,
    en: { q: 'Thunder is heard 5 s after the lightning is seen. If the speed of sound is 346 m s⁻¹, how far away is the lightning?', options: ['1730 m', '69.2 m', '346 m', '351 m'], explanation: 'Distance = speed × time = 346 × 5 = 1730 m.' },
    ta: { q: 'மின்னல் ஏற்பட்ட 5 வினாடிகளுக்குப் பிறகு ஒலி கேட்டது. காற்றில் ஒலியின் வேகம் 346 மீ/வி எனில் மின்னல் ஏற்பட்ட இடத்தின் தொலைவு', options: ['1730 மீ', '69.2 மீ', '346 மீ', '351 மீ'], explanation: 'தொலைவு = வேகம் × காலம் = 346 × 5 = 1730 மீ.' },
  },
  {
    difficulty: 'medium', source: '§2.5.1 (Table 2.1), p. 17', answer: 0,
    en: { q: 'A person walks 500 m every 5 minutes (0, 500, 1000, 1500 m at 0, 5, 10, 15 min). His speed, from the slope of the distance–time graph, is', options: ['100 m/min', '500 m/min', '2500 m/min', '5 m/min'], explanation: 'Slope = BC/AC = 500 m ÷ 5 min = 100 m/min; the straight line shows uniform motion.' },
    ta: { q: 'ஒருவர் ஒவ்வொரு 5 நிமிடத்திலும் 500 மீ நடக்கிறார் (0, 5, 10, 15 நிமிடங்களில் 0, 500, 1000, 1500 மீ). தொலைவு – கால வரைபடத்தின் சாய்விலிருந்து அவரது வேகம்', options: ['100 மீ/நிமிடம்', '500 மீ/நிமிடம்', '2500 மீ/நிமிடம்', '5 மீ/நிமிடம்'], explanation: 'சாய்வு = 500 மீ ÷ 5 நிமிடம் = 100 மீ/நிமிடம்; நேர்கோடு சீரான இயக்கத்தைக் காட்டுகிறது.' },
  },
  {
    difficulty: 'medium', source: '§2.5.3 (Table 2.3), p. 18', answer: 0,
    en: { q: 'The velocity of a car rises from 0 to 9 m s⁻¹ in 5 s, to 18 m s⁻¹ in 10 s, and so on. Its acceleration is', options: ['1.8 m s⁻²', '9 m s⁻²', '45 m s⁻²', '0.55 m s⁻²'], explanation: 'Velocity changes by equal amounts in equal times: a = 9 ÷ 5 = 1.8 m s⁻² (uniform acceleration).' },
    ta: { q: 'ஒரு மகிழுந்தின் திசைவேகம் 5 வினாடியில் 0-இலிருந்து 9 மீ வி⁻¹, 10 வினாடியில் 18 மீ வி⁻¹ என உயர்கிறது. அதன் முடுக்கம்', options: ['1.8 மீ வி⁻²', '9 மீ வி⁻²', '45 மீ வி⁻²', '0.55 மீ வி⁻²'], explanation: 'சம காலங்களில் திசைவேகம் சம அளவு மாறுகிறது: a = 9 ÷ 5 = 1.8 மீ வி⁻² (சீரான முடுக்கம்).' },
  },
  {
    difficulty: 'medium', source: '§2.5.2, p. 18', answer: 0,
    en: { q: 'For a car in accelerated (non-uniform) motion, the distance–time graph is', options: ['a curve', 'a straight line through the origin', 'a straight line parallel to the time axis', 'a straight line parallel to the distance axis'], explanation: 'Distance varies non-linearly with time (0, 1, 4, 9, 16 … m), so the graph is not a straight line.' },
    ta: { q: 'முடுக்கப்பட்ட (சீரற்ற) இயக்கத்தில் உள்ள மகிழுந்தின் தொலைவு – கால வரைபடம்', options: ['ஒரு வளைகோடு', 'ஆதி வழியே செல்லும் நேர்கோடு', 'கால அச்சுக்கு இணையான நேர்கோடு', 'தொலைவு அச்சுக்கு இணையான நேர்கோடு'], explanation: 'தொலைவு காலத்துடன் நேரியல் அல்லாமல் மாறுகிறது (0, 1, 4, 9, 16 … மீ); எனவே வரைபடம் நேர்கோடு அல்ல.' },
  },
  {
    difficulty: 'medium', source: '§2.5.3, p. 18', answer: 0,
    en: { q: 'An object moves with uniform velocity. Its velocity–time graph is', options: ['a straight line parallel to the time axis', 'a straight line through the origin', 'a curve bending upwards', 'a straight line sloping downwards'], explanation: 'Velocity does not change with time, so the graph is parallel to the x-axis; the rectangle under it gives the displacement.' },
    ta: { q: 'ஒரு பொருள் சீரான திசைவேகத்தில் இயங்குகிறது. அதன் திசைவேகம் – கால வரைபடம்', options: ['கால அச்சுக்கு இணையான நேர்கோடு', 'ஆதி வழியே செல்லும் நேர்கோடு', 'மேல்நோக்கி வளையும் வளைகோடு', 'கீழ்நோக்கிச் சாயும் நேர்கோடு'], explanation: 'திசைவேகம் காலத்துடன் மாறாததால் வரைபடம் x-அச்சுக்கு இணையானது; அதன் கீழ் உள்ள செவ்வகம் இடப்பெயர்ச்சியைத் தரும்.' },
  },
  {
    difficulty: 'medium', source: '§2.6, p. 19', answer: 0,
    en: { q: 'A scooter starts at 5 m s⁻¹ and accelerates uniformly at 2 m s⁻² for 10 s. Its final velocity is', options: ['25 m s⁻¹', '20 m s⁻¹', '15 m s⁻¹', '7 m s⁻¹'], explanation: 'v = u + at = 5 + 2 × 10 = 25 m s⁻¹.' },
    ta: { q: 'ஒரு ஸ்கூட்டர் 5 மீ வி⁻¹ தொடக்கத் திசைவேகத்துடன் 10 வினாடிகள் 2 மீ வி⁻² சீரான முடுக்கம் பெறுகிறது. அதன் இறுதித் திசைவேகம்', options: ['25 மீ வி⁻¹', '20 மீ வி⁻¹', '15 மீ வி⁻¹', '7 மீ வி⁻¹'], explanation: 'v = u + at = 5 + 2 × 10 = 25 மீ வி⁻¹.' },
  },
  {
    difficulty: 'medium', source: 'Activity 4, §2.7, pp. 20–21', answer: 0,
    en: { q: 'Two identical sheets of paper are dropped together from the same height, one flat and one crumpled into a ball. What happens?', options: ['The crumpled ball reaches the ground first', 'The flat sheet reaches the ground first', 'Both reach the ground at exactly the same time', 'The heavier one reaches first'], explanation: 'They have equal mass, but the flat sheet has a larger area exposed to air, so it meets more air resistance.' },
    ta: { q: 'ஒரே நிறையுள்ள இரு தாள்களில் ஒன்றைத் தட்டையாகவும், மற்றொன்றைப் பந்து போலக் கசக்கியும் ஒரே உயரத்திலிருந்து ஒரே நேரத்தில் விடும்போது', options: ['கசக்கிய பந்து முதலில் தரையை அடையும்', 'தட்டையான தாள் முதலில் தரையை அடையும்', 'இரண்டும் சரியாக ஒரே நேரத்தில் அடையும்', 'கனமானது முதலில் அடையும்'], explanation: 'நிறை சமம்; ஆனால் தட்டையான தாளின் காற்றில் படும் பரப்பு அதிகம் என்பதால் காற்றின் தடை அதிகம்.' },
  },
  {
    difficulty: 'medium', source: '§2.7, p. 21', answer: 0,
    en: { q: 'In vacuum, a heavy stone and a light feather are dropped together from the same height. They', options: ['reach the ground at the same time', 'reach at different times; the stone first', 'reach at different times; the feather first', 'do not fall at all'], explanation: 'The acceleration of free fall is independent of mass; without air resistance all objects fall at the same rate.' },
    ta: { q: 'வெற்றிடத்தில் கனமான கல்லும் இலேசான இறகும் ஒரே உயரத்திலிருந்து ஒன்றாக விடப்படுகின்றன. அவை', options: ['ஒரே நேரத்தில் தரையை அடையும்', 'வெவ்வேறு நேரங்களில்; கல் முதலில் அடையும்', 'வெவ்வேறு நேரங்களில்; இறகு முதலில் அடையும்', 'கீழே விழவே விழாது'], explanation: 'தானே விழும் பொருளின் முடுக்கம் நிறையைச் சார்ந்தது அல்ல; காற்றுத் தடை இல்லையெனில் எல்லாம் ஒரே வீதத்தில் விழும்.' },
  },
  {
    difficulty: 'medium', source: '§2.7, p. 21', answer: 0,
    en: { q: 'When an object is thrown vertically upwards, in the equations of motion the acceleration a is taken as', options: ['−g', '+g', 'zero', '2g'], explanation: 'Moving up, the object moves against gravity, so a = −g; while moving down a = +g.' },
    ta: { q: 'ஒரு பொருளைச் செங்குத்தாக மேல்நோக்கி எறியும்போது இயக்கச் சமன்பாடுகளில் முடுக்கம் a', options: ['−g', '+g', 'சுழி', '2g'], explanation: 'மேல்நோக்கிச் செல்லும்போது ஈர்ப்புக்கு எதிராக இயங்குவதால் a = −g; கீழ்நோக்கி வரும்போது a = +g.' },
  },
  {
    difficulty: 'medium', source: 'Activity 5, §2.8, p. 21', answer: 0,
    en: { q: 'A stone tied to a thread is whirled in a circle and the thread is then released. The stone moves', options: ['along a straight line tangential to the circle', 'towards the centre of the circle', 'along the radius, away from the centre', 'in the same circle as before'], explanation: 'Once released, it continues in the direction it was moving at that instant – along the tangent.' },
    ta: { q: 'நூலில் கட்டிய கல்லை வட்டப்பாதையில் சுழற்றி நூலை விடுவித்தால், கல் செல்லும் திசை', options: ['வட்டத்தின் தொடுகோட்டின் வழியே நேர்கோட்டில்', 'வட்டத்தின் மையத்தை நோக்கி', 'ஆரத்தின் வழியே மையத்தை விட்டு', 'முன்பு போலவே அதே வட்டத்தில்'], explanation: 'விடுவிக்கப்பட்டவுடன் அக்கணத்தில் இயங்கிய திசையிலேயே – தொடுகோட்டின் வழியே – கல் செல்கிறது.' },
  },
  {
    difficulty: 'medium', source: '§2.8, p. 21', answer: 0,
    en: { q: 'A body goes once round a circle of radius 7 m in 22 s at constant speed. Its speed is (π = 22/7)', options: ['2 m s⁻¹', '1 m s⁻¹', '4 m s⁻¹', '0.5 m s⁻¹'], explanation: 'v = 2πr ÷ T = 2 × 22/7 × 7 ÷ 22 = 44 ÷ 22 = 2 m s⁻¹.' },
    ta: { q: 'ஒரு பொருள் 7 மீ ஆரமுடைய வட்டத்தை 22 வினாடியில் மாறாத வேகத்தில் ஒருமுறை சுற்றுகிறது. அதன் வேகம் (π = 22/7)', options: ['2 மீ வி⁻¹', '1 மீ வி⁻¹', '4 மீ வி⁻¹', '0.5 மீ வி⁻¹'], explanation: 'v = 2πr ÷ T = 2 × 22/7 × 7 ÷ 22 = 44 ÷ 22 = 2 மீ வி⁻¹.' },
  },
  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise I.3, p. 23', imageUrl: `${IMG}/distance-time-graphs.png`, answer: 0,
    en: { q: 'Which of the distance–time graphs shown represents uniform motion of a moving particle?', options: ['Graph (b)', 'Graph (a)', 'Graph (c)', 'Graph (d)'], explanation: 'In (b) distance rises in a straight line – equal distances in equal times. (a) and (c) are curves (changing speed); (d) means the body is at rest.' },
    ta: { q: 'படத்தில் உள்ள தொலைவு – கால வரைபடங்களில் சீரான இயக்கத்தில் நகரும் பொருளைக் குறிப்பிடுவது எது?', options: ['வரைபடம் (b)', 'வரைபடம் (a)', 'வரைபடம் (c)', 'வரைபடம் (d)'], explanation: '(b)-இல் தொலைவு நேர்கோடாக உயர்கிறது – சம காலங்களில் சம தொலைவு. (a), (c) வளைகோடுகள் (வேகம் மாறுகிறது); (d) பொருள் ஓய்வில் உள்ளதைக் குறிக்கிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise III.5, p. 24', answer: 0,
    en: { q: 'The velocity–time graph of a particle is a straight line inclined to the time axis. Its displacement–time graph will be', options: ['a curve (parabola)', 'a straight line inclined to the time axis', 'a straight line parallel to the time axis', 'a straight line parallel to the displacement axis'], explanation: 'An inclined v–t line means uniform acceleration, so s = ut + ½at² – a curve, not a straight line; the book statement is false.' },
    ta: { q: 'ஒரு பொருளின் திசைவேகம் – கால வரைபடம் கால அச்சுக்குச் சாய்வான நேர்கோடு. அதன் இடப்பெயர்ச்சி – கால வரைபடம்', options: ['ஒரு வளைகோடு (பரவளையம்)', 'கால அச்சுக்குச் சாய்வான நேர்கோடு', 'கால அச்சுக்கு இணையான நேர்கோடு', 'இடப்பெயர்ச்சி அச்சுக்கு இணையான நேர்கோடு'], explanation: 'சாய்வான v–t நேர்கோடு சீரான முடுக்கத்தைக் குறிக்கிறது; s = ut + ½at² என்பதால் வரைபடம் வளைகோடு; நேர்கோடு அல்ல.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise IV.1, p. 24', answer: 2,
    en: { q: 'Assertion: The accelerated motion of an object may be due to change in magnitude of velocity or direction or both of them. Reason: Acceleration can be produced only by change in magnitude of the velocity. It does not depend on the direction.', options: AR_EN, explanation: 'The assertion is true; the reason is false – a change in direction alone (uniform circular motion) also produces acceleration.' },
    ta: { q: 'கூற்று: ஒரு பொருளின் முடுக்குவிக்கப்பட்ட இயக்கம் அதன் திசைவேக அளவு அல்லது திசைமாற்றம் அல்லது இரண்டும் மாறுபடுவதால் ஏற்படுவது. காரணம்: ஒரு பொருளின் முடுக்கம் அதன் திசைவேகத்தின் அளவு மாறுபடுவதால் மட்டுமே நிகழும். அது திசை மாற்றத்தைப் பொறுத்தது அல்ல.', options: AR_TA, explanation: 'கூற்று சரி; காரணம் தவறு – திசை மாற்றம் மட்டுமே கூட (சீரான வட்ட இயக்கம்) முடுக்கத்தை உண்டாக்கும்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise IV.2, p. 24', answer: 3,
    en: { q: 'Assertion: The speedometer of a car or a motorcycle measures its average speed. Reason: Average velocity is equal to total displacement divided by total time taken.', options: AR_EN, explanation: 'A speedometer measures instantaneous speed, so the assertion is false; the reason is a correct definition.' },
    ta: { q: 'கூற்று: மகிழுந்து அல்லது மோட்டார் சைக்கிளில் உள்ள வேகமானி அதன் சராசரி வேகத்தை அளவிடுகிறது. காரணம்: மொத்த தூரத்தை நேரத்தால் வகுத்தால் அது சராசரி திசை வேகத்துக்குச் சமம்.', options: AR_TA, explanation: 'வேகமானி கணநேர வேகத்தை அளக்கிறது; எனவே கூற்று தவறு. சராசரி திசைவேகம் = மொத்த இடப்பெயர்ச்சி ÷ மொத்த நேரம்; காரணம் சரி.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise IV.3, p. 24', answer: 0,
    en: { q: 'Assertion: Displacement of a body may be zero when the distance travelled by it is not zero. Reason: The displacement is the shortest distance between the initial and final positions.', options: AR_EN, explanation: 'If the body returns to its start, the shortest distance between initial and final positions is zero – the reason explains the assertion.' },
    ta: { q: 'கூற்று: ஒரு பொருளின் இடப்பெயர்ச்சி சுழி ஆனால் அப்பொருள் கடந்த தூரம் சுழி இல்லை. காரணம்: இடப்பெயர்ச்சி தொடக்க நிலைக்கும் முடிவு நிலைக்கும் இடையே உள்ள குறுகிய பாதை ஆகும்.', options: AR_TA, explanation: 'பொருள் தொடக்க நிலைக்கே திரும்பினால் தொடக்க, முடிவு நிலைகளுக்கு இடையேயான குறுகிய தொலைவு சுழி; காரணம் கூற்றை விளக்குகிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise V, p. 24', imageUrl: `${IMG}/velocity-time-graphs.png`, answer: 0,
    en: { q: 'Match List I with the velocity–time graphs A–D shown:\n1. Motion of a body covering equal distances in equal intervals of time\n2. Motion with non-uniform acceleration\n3. Constant retardation\n4. Uniform acceleration', options: ['1-D, 2-C, 3-A, 4-B', '1-B, 2-C, 3-A, 4-D', '1-D, 2-A, 3-C, 4-B', '1-A, 2-C, 3-D, 4-B'], explanation: 'D: constant velocity (uniform motion); C: curve (non-uniform acceleration); A: velocity falling in a straight line (constant retardation); B: rising straight line (uniform acceleration).' },
    ta: { q: 'பட்டியல் I-ஐப் படத்தில் உள்ள திசைவேகம் – கால வரைபடங்கள் A–D உடன் பொருத்துக:\n1. சமகால அளவுகளில் சம இடைவெளியைக் கடக்கும் ஒரு பொருளின் இயக்கம்\n2. சீரற்ற முடுக்கம்\n3. நிலையான எதிர்மறை முடுக்கம்\n4. சீரான முடுக்கம்', options: ['1-D, 2-C, 3-A, 4-B', '1-B, 2-C, 3-A, 4-D', '1-D, 2-A, 3-C, 4-B', '1-A, 2-C, 3-D, 4-B'], explanation: 'D: மாறாத திசைவேகம் (சீரான இயக்கம்); C: வளைகோடு (சீரற்ற முடுக்கம்); A: நேர்கோடாகக் குறையும் திசைவேகம் (நிலையான எதிர்முடுக்கம்); B: நேர்கோடாக உயர்வது (சீரான முடுக்கம்).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VIII.2, p. 25', answer: 0,
    en: { q: 'An athlete completes one round of a circular track of diameter 200 m in 40 s. What distance does he cover at the end of 2 min 20 s? (π = 22/7)', options: ['2200 m', '1100 m', '4400 m', '200 m'], explanation: '2 min 20 s = 140 s = 3.5 rounds; one round = π × 200 ≈ 628.6 m, so distance = 3.5 × 628.6 ≈ 2200 m.' },
    ta: { q: 'ஒரு தடகள வீரர் 200 மீ விட்டம் உடைய வட்டப் பாதையை 40 வினாடியில் கடக்கிறார். 2 நிமிடம் 20 வினாடிக்குப் பிறகு அவர் கடந்த தொலைவு (π = 22/7)', options: ['2200 மீ', '1100 மீ', '4400 மீ', '200 மீ'], explanation: '2 நிமிடம் 20 வினாடி = 140 வி = 3.5 சுற்றுகள்; ஒரு சுற்று = π × 200 ≈ 628.6 மீ; தொலைவு = 3.5 × 628.6 ≈ 2200 மீ.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VIII.2, p. 25', answer: 0,
    en: { q: 'An athlete completes one round of a circular track of diameter 200 m in 40 s. What is his displacement at the end of 2 min 20 s?', options: ['200 m', '0 m', '100 m', '2200 m'], explanation: 'After 3.5 rounds he is at the point diametrically opposite the start, so displacement = diameter = 200 m.' },
    ta: { q: 'ஒரு தடகள வீரர் 200 மீ விட்டம் உடைய வட்டப் பாதையை 40 வினாடியில் கடக்கிறார். 2 நிமிடம் 20 வினாடிக்குப் பிறகு அவரது இடப்பெயர்ச்சி', options: ['200 மீ', '0 மீ', '100 மீ', '2200 மீ'], explanation: '3.5 சுற்றுகளுக்குப் பின் அவர் தொடக்கப் புள்ளிக்கு நேர் எதிர்ப் புள்ளியில் இருப்பார்; இடப்பெயர்ச்சி = விட்டம் = 200 மீ.' },
  },
  {
    difficulty: 'hard', source: 'Book example (Problem 3), p. 20', answer: 0,
    en: { q: 'The brakes applied to a car produce an acceleration of 6 m s⁻² opposite to the motion. If the car takes 2 s to stop, how far does it travel during this time?', options: ['12 m', '24 m', '36 m', '6 m'], explanation: 'v = u + at gives 0 = u − 12, so u = 12 m s⁻¹; s = ut + ½at² = 24 − 12 = 12 m.' },
    ta: { q: 'ஒரு மகிழுந்தில் தடை செலுத்தப்படும்போது இயக்கத்திற்கு எதிர்த்திசையில் 6 மீ வி⁻² முடுக்கம் ஏற்படுகிறது. மகிழுந்து நிற்க 2 வினாடிகள் ஆகின்றன எனில் இக்காலத்தில் அது கடந்த தொலைவு', options: ['12 மீ', '24 மீ', '36 மீ', '6 மீ'], explanation: 'v = u + at: 0 = u − 12; u = 12 மீ வி⁻¹; s = ut + ½at² = 24 − 12 = 12 மீ.' },
  },
  {
    difficulty: 'hard', source: 'Book example (Problem 4), p. 22', answer: 0,
    en: { q: 'A 900 kg car moving at 10 m s⁻¹ takes a turn around a circle of radius 25 m. Find its acceleration and the net force acting on it.', options: ['4 m s⁻² and 3600 N', '0.4 m s⁻² and 360 N', '2.5 m s⁻² and 2250 N', '4 m s⁻² and 225 N'], explanation: 'a = v²/r = 100 ÷ 25 = 4 m s⁻²; F = ma = 900 × 4 = 3600 N, directed towards the centre.' },
    ta: { q: '900 கிகி நிறையுடைய மகிழுந்து 10 மீ வி⁻¹ வேகத்தில் 25 மீ ஆரமுடைய வட்டத்தைச் சுற்றுகிறது. அதன் முடுக்கம் மற்றும் நிகர விசை', options: ['4 மீ வி⁻², 3600 நியூட்டன்', '0.4 மீ வி⁻², 360 நியூட்டன்', '2.5 மீ வி⁻², 2250 நியூட்டன்', '4 மீ வி⁻², 225 நியூட்டன்'], explanation: 'a = v²/r = 100 ÷ 25 = 4 மீ வி⁻²; F = ma = 900 × 4 = 3600 நியூட்டன்; மையத்தை நோக்கிச் செயல்படும்.' },
  },
  {
    difficulty: 'hard', source: '§2.7, p. 21', answer: 0,
    en: { q: 'Can a body have zero velocity and still have a finite acceleration?', options: ['Yes – a ball thrown up has zero velocity at its highest point but acceleration g', 'No – zero velocity always means zero acceleration', 'Yes – but only when it moves in a circle at constant speed', 'No – acceleration needs a non-zero velocity'], explanation: 'At the highest point the velocity is momentarily zero, but gravity still accelerates it downward at g.' },
    ta: { q: 'ஒரு பொருள் சுழித் திசைவேகத்துடன் இருந்தும் முடுக்கம் பெற்றிருக்க முடியுமா?', options: ['முடியும் – மேலே எறிந்த பந்து உச்சியில் சுழித் திசைவேகம், ஆனால் முடுக்கம் g', 'முடியாது – சுழித் திசைவேகம் என்றால் முடுக்கமும் சுழி', 'முடியும் – ஆனால் மாறாத வேகத்தில் வட்டத்தில் செல்லும்போது மட்டும்', 'முடியாது – முடுக்கத்திற்குச் சுழியற்ற திசைவேகம் தேவை'], explanation: 'உச்சிப் புள்ளியில் திசைவேகம் கணநேரம் சுழி; ஆனால் ஈர்ப்பு விசை அதைக் கீழ்நோக்கி g முடுக்கத்துடன் இழுக்கிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise VII.1, p. 25 (derivation p. 20)', answer: 0,
    en: { q: 'In the graphical derivation of s = ut + ½at², the area under the velocity–time graph is split into', options: ['a rectangle of area ut and a triangle of area ½at²', 'a triangle of area ut and a rectangle of area ½at²', 'two equal triangles each of area ½ut', 'a single rectangle of area vt'], explanation: 'Rectangle DOEA = u × t; triangle DAB = ½ × t × at = ½at²; their sum is s.' },
    ta: { q: 'வரைபட முறையில் s = ut + ½at² வருவிக்கும்போது திசைவேகம் – கால வரைபடத்தின் கீழ் உள்ள பரப்பு பிரிக்கப்படுவது', options: ['ut பரப்புள்ள செவ்வகம் மற்றும் ½at² பரப்புள்ள முக்கோணம்', 'ut பரப்புள்ள முக்கோணம் மற்றும் ½at² பரப்புள்ள செவ்வகம்', 'ஒவ்வொன்றும் ½ut பரப்புள்ள இரு சம முக்கோணங்கள்', 'vt பரப்புள்ள ஒரே செவ்வகம்'], explanation: 'செவ்வகம் DOEA = u × t; முக்கோணம் DAB = ½ × t × at = ½at²; இவற்றின் கூடுதல் s.' },
  },
  {
    difficulty: 'hard', source: '§2.7, p. 21', answer: 0,
    en: { q: 'A stone dropped from the top of a building reaches the ground in 3 s. The height of the building is (g = 10 m s⁻²)', options: ['45 m', '90 m', '30 m', '15 m'], explanation: 's = ½gt² = ½ × 10 × 3² = 45 m (forgetting the ½ gives 90 m).' },
    ta: { q: 'ஒரு கட்டடத்தின் உச்சியிலிருந்து விடப்பட்ட கல் 3 வினாடியில் தரையை அடைகிறது. கட்டடத்தின் உயரம் (g = 10 மீ வி⁻²)', options: ['45 மீ', '90 மீ', '30 மீ', '15 மீ'], explanation: 's = ½gt² = ½ × 10 × 3² = 45 மீ (½ விடுபட்டால் 90 மீ தவறாக வரும்).' },
  },
  {
    difficulty: 'hard', source: '§2.4, pp. 16–19', answer: 0,
    en: { q: 'Which of these statements are correct?\n(i) Speed is a scalar quantity.\n(ii) Acceleration is a vector quantity.\n(iii) Displacement can be greater than the distance travelled.\n(iv) Average velocity = total displacement ÷ total time.', options: ['(i), (ii) and (iv) only', '(i), (ii) and (iii) only', '(ii) and (iii) only', '(i) and (iv) only'], explanation: 'Displacement is the shortest distance between start and end, so it can never exceed the path length; the other three are correct.' },
    ta: { q: 'பின்வரும் கூற்றுகளில் சரியானவை எவை?\n(i) வேகம் ஒரு ஸ்கேலர் அளவு.\n(ii) முடுக்கம் ஒரு வெக்டர் அளவு.\n(iii) இடப்பெயர்ச்சி கடந்த தொலைவை விட அதிகமாக இருக்கலாம்.\n(iv) சராசரி திசைவேகம் = மொத்த இடப்பெயர்ச்சி ÷ மொத்த நேரம்.', options: ['(i), (ii), (iv) மட்டும்', '(i), (ii), (iii) மட்டும்', '(ii), (iii) மட்டும்', '(i), (iv) மட்டும்'], explanation: 'இடப்பெயர்ச்சி தொடக்க, முடிவு நிலைகளுக்கு இடையேயான மிகக் குறைந்த தொலைவு; அது கடந்த தொலைவை விட அதிகமாக இருக்க முடியாது; மற்ற மூன்றும் சரி.' },
  },
  {
    difficulty: 'hard', source: '§2.10, p. 22', answer: 0,
    en: { q: 'Assertion: On a rotating merry-go-round you feel an outward pull. Reason: Centrifugal force acts on a body away from the centre of the circular path, with the same magnitude as the centripetal force.', options: AR_EN, explanation: 'The outward pull felt on a merry-go-round is the centrifugal force, which acts away from the centre; the reason explains the assertion.' },
    ta: { q: 'கூற்று: சுழலும் இராட்டினத்தில் அமர்ந்திருக்கும்போது வெளிநோக்கிய இழுவிசையை உணர்கிறோம். காரணம்: மைய விலக்கு விசை வட்டப்பாதையின் மையத்தை விட்டு வெளிநோக்கிச் செயல்படுகிறது; அதன் எண்மதிப்பு மைய நோக்கு விசைக்குச் சமம்.', options: AR_TA, explanation: 'இராட்டினத்தில் உணரப்படும் வெளிநோக்கிய இழுவிசை மைய விலக்கு விசை; அது மையத்தை விட்டு செயல்படுகிறது; காரணம் கூற்றை விளக்குகிறது.' },
  },
  {
    difficulty: 'hard', source: '§2.6, p. 20', answer: 0,
    en: { q: 'A car moving at 20 m s⁻¹ is brought to rest with a uniform retardation of 5 m s⁻². Its stopping distance is', options: ['40 m', '80 m', '4 m', '20 m'], explanation: 'v² = u² + 2as: 0 = 400 + 2(−5)s, so s = 400 ÷ 10 = 40 m.' },
    ta: { q: '20 மீ வி⁻¹ வேகத்தில் செல்லும் மகிழுந்து 5 மீ வி⁻² சீரான எதிர்முடுக்கத்தால் நிறுத்தப்படுகிறது. அது நிற்கும் வரை கடக்கும் தொலைவு', options: ['40 மீ', '80 மீ', '4 மீ', '20 மீ'], explanation: 'v² = u² + 2as: 0 = 400 + 2(−5)s; s = 400 ÷ 10 = 40 மீ.' },
  },
  {
    difficulty: 'hard', source: 'Activity 3, §2.3, p. 16', answer: 0,
    en: { q: 'A car goes from corner A to the opposite corner C of a 4 m × 3 m rectangle ABCD along the path A → B → C. What are the distance travelled and the displacement?', options: ['7 m and 5 m', '5 m and 7 m', '7 m and 7 m', '12 m and 5 m'], explanation: 'Distance = AB + BC = 4 + 3 = 7 m; displacement = diagonal AC = √(4² + 3²) = 5 m, the shortest path.' },
    ta: { q: '4 மீ × 3 மீ அளவுள்ள செவ்வகம் ABCD-இல் ஒரு மகிழுந்து A → B → C பாதை வழியே A-யிலிருந்து எதிர் மூலை C-யை அடைகிறது. கடந்த தொலைவும் இடப்பெயர்ச்சியும்', options: ['7 மீ மற்றும் 5 மீ', '5 மீ மற்றும் 7 மீ', '7 மீ மற்றும் 7 மீ', '12 மீ மற்றும் 5 மீ'], explanation: 'தொலைவு = AB + BC = 4 + 3 = 7 மீ; இடப்பெயர்ச்சி = மூலைவிட்டம் AC = √(4² + 3²) = 5 மீ.' },
  },
];
