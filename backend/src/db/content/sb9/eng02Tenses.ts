// Tamil Nadu State Board, 9th English – Grammar: Tenses.
// Questions come from the textbook's grammar exercises on tenses (Unit 5, pp. 129–140)
// and lesson sentences. source = unit and grammar section / lesson and printed page.

import { BankQuestion } from './types';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Unit 5 Grammar – Tenses, Exercise A1, p. 135', answer: 0,
    en: { q: 'Fill in the blank with the correct form of the verb: All children _____ something new every day.', options: ['learn', 'learns', 'learned', 'learning'], explanation: 'A habit or routine is in the simple present. The subject “all children” is plural, so the verb has no -s: learn.' },
    ta: { q: 'Fill in the blank with the correct form of the verb: All children _____ something new every day.', options: ['learn', 'learns', 'learned', 'learning'], explanation: 'தினமும் நடப்பது – Simple present. “all children” பன்மை; எனவே -s சேர்க்காமல் learn.' },
  },
  {
    difficulty: 'easy', source: 'Unit 5 Grammar – Tenses, Exercise A2, p. 135', answer: 0,
    en: { q: 'Fill in the blank with the correct form of the verb: A good student always _____ hard.', options: ['works', 'work', 'worked', 'working'], explanation: '“Always” shows a habit (simple present). “A good student” is third person singular, so add -s: works.' },
    ta: { q: 'Fill in the blank with the correct form of the verb: A good student always _____ hard.', options: ['works', 'work', 'worked', 'working'], explanation: '“always” – பழக்கம் → Simple present. “A good student” – மூன்றாம் நபர் ஒருமை; எனவே works.' },
  },
  {
    difficulty: 'easy', source: 'Unit 5 Grammar – Tenses, Exercise A4, p. 135', answer: 0,
    en: { q: 'Fill in the blank with the correct form of the verb: My sister is an architect. She _____ skyscrapers.', options: ['designs', 'design', 'designed', 'designing'], explanation: 'Her job is a present fact, so we use the simple present. With “she” the verb takes -s: designs.' },
    ta: { q: 'Fill in the blank with the correct form of the verb: My sister is an architect. She _____ skyscrapers.', options: ['designs', 'design', 'designed', 'designing'], explanation: 'அவளுடைய வேலை – நிகழ்கால உண்மை → Simple present. “She” உடன் -s: designs.' },
  },
  {
    difficulty: 'easy', source: 'Unit 5 Grammar – Tenses, Exercise A5, p. 135', answer: 0,
    en: { q: 'Fill in the blank with the correct form of the verb: The Himalayas _____ India from the cold winds.', options: ['protect', 'protects', 'protected', 'protecting'], explanation: 'This is a general fact, so the simple present is used. “The Himalayas” is plural, so no -s: protect.' },
    ta: { q: 'Fill in the blank with the correct form of the verb: The Himalayas _____ India from the cold winds.', options: ['protect', 'protects', 'protected', 'protecting'], explanation: 'பொது உண்மை → Simple present. “The Himalayas” பன்மை; -s இல்லாமல் protect.' },
  },
  {
    difficulty: 'easy', source: 'Unit 5 Grammar – Tenses, Exercise A9, p. 135', answer: 0,
    en: { q: 'Fill in the blank with the correct form of the verb: Cows _____ us milk.', options: ['give', 'gives', 'gave', 'giving'], explanation: 'A general truth takes the simple present. “Cows” is plural, so the base form is used: give.' },
    ta: { q: 'Fill in the blank with the correct form of the verb: Cows _____ us milk.', options: ['give', 'gives', 'gave', 'giving'], explanation: 'பொது உண்மை → Simple present. “Cows” பன்மை; எனவே give.' },
  },
  {
    difficulty: 'easy', source: 'Unit 5 Grammar – Tenses, Exercise A7, p. 135', answer: 0,
    en: { q: 'Fill in the blank with the correct form of the verb: My mother _____ in a factory.', options: ['works', 'work', 'working', 'have worked'], explanation: 'A permanent present fact takes the simple present. “My mother” is third person singular: works.' },
    ta: { q: 'Fill in the blank with the correct form of the verb: My mother _____ in a factory.', options: ['works', 'work', 'working', 'have worked'], explanation: 'நிலையான நிகழ்கால உண்மை → Simple present. “My mother” – மூன்றாம் நபர் ஒருமை: works.' },
  },
  {
    difficulty: 'easy', source: 'Unit 5 Grammar – Tenses (Simple Present), p. 129', answer: 0,
    en: { q: 'The sentence “The Sun rises in the East” uses the simple present tense to express', options: ['a general fact or truth', 'an action happening right now', 'a completed past action', 'a future plan'], explanation: 'The book lists “The Sun rises in the East” and “Water boils at 100 °C” as general facts/truths, which use the simple present.' },
    ta: { q: 'The sentence “The Sun rises in the East” uses the simple present tense to express', options: ['a general fact or truth', 'an action happening right now', 'a completed past action', 'a future plan'], explanation: '“The Sun rises in the East”, “Water boils at 100 °C” ஆகியவை பொது உண்மைகள் என நூல் கூறுகிறது; இவை Simple present இல் வரும்.' },
  },
  {
    difficulty: 'easy', source: 'Unit 5 Grammar – Tenses, Exercise B4, p. 135', answer: 0,
    en: { q: 'Fill in the blank with the present continuous form of “wait”: I _____ for my mother.', options: ['am waiting', 'is waiting', 'are waiting', 'waiting'], explanation: 'Present continuous = am/is/are + verb-ing. With “I” we use “am”: I am waiting.' },
    ta: { q: 'Fill in the blank with the present continuous form of “wait”: I _____ for my mother.', options: ['am waiting', 'is waiting', 'are waiting', 'waiting'], explanation: 'Present continuous = am/is/are + verb-ing. “I” உடன் “am”: I am waiting.' },
  },
  {
    difficulty: 'easy', source: 'Unit 5 Grammar – Tenses, Exercise E, p. 135', answer: 0,
    en: { q: 'Choose the correct -ing form of the verb “swim”.', options: ['swimming', 'swiming', 'swimeing', 'swimmming'], explanation: 'A short verb ending in one vowel + one consonant doubles the last consonant: swim → swimming.' },
    ta: { q: 'Choose the correct -ing form of the verb “swim”.', options: ['swimming', 'swiming', 'swimeing', 'swimmming'], explanation: 'ஒரு உயிரெழுத்து + ஒரு மெய்யெழுத்தில் முடியும் சிறிய வினையில் கடைசி எழுத்து இரட்டிக்கும்: swim → swimming.' },
  },
  {
    difficulty: 'easy', source: 'Unit 5 Grammar – Tenses, Exercise E, p. 135', answer: 0,
    en: { q: 'Choose the correct -ing form of the verb “come”.', options: ['coming', 'comeing', 'comming', 'comed'], explanation: 'When a verb ends in a silent -e, drop the -e and add -ing: come → coming.' },
    ta: { q: 'Choose the correct -ing form of the verb “come”.', options: ['coming', 'comeing', 'comming', 'comed'], explanation: 'ஒலிக்காத -e இல் முடியும் வினையில் -e ஐ நீக்கி -ing சேர்க்க வேண்டும்: come → coming.' },
  },
  {
    difficulty: 'easy', source: 'Unit 5 Grammar – Tenses, Exercise M (Across 1), p. 138', answer: 0,
    en: { q: 'Fill in the blank with the past tense of “freeze”: The lake _____ overnight.', options: ['froze', 'freezed', 'frozen', 'frizzed'], explanation: '“Freeze” is an irregular verb: freeze – froze – frozen. The simple past is “froze”.' },
    ta: { q: 'Fill in the blank with the past tense of “freeze”: The lake _____ overnight.', options: ['froze', 'freezed', 'frozen', 'frizzed'], explanation: '“freeze” ஒழுங்கற்ற வினை: freeze – froze – frozen. இறந்தகாலம் “froze”.' },
  },
  {
    difficulty: 'easy', source: 'Unit 5 Grammar – Tenses, Exercise M (Across 3), p. 138', answer: 0,
    en: { q: 'Fill in the blank with the past tense of “buy”: Hema _____ a new bicycle.', options: ['bought', 'buyed', 'brought', 'buys'], explanation: '“Buy” is irregular: buy – bought – bought. Do not confuse it with “brought”, the past of “bring”.' },
    ta: { q: 'Fill in the blank with the past tense of “buy”: Hema _____ a new bicycle.', options: ['bought', 'buyed', 'brought', 'buys'], explanation: '“buy” ஒழுங்கற்ற வினை: buy – bought – bought. “brought” என்பது “bring” இன் இறந்தகாலம்.' },
  },
  {
    difficulty: 'easy', source: 'Unit 5 Grammar – Tenses, Exercise M (Across 7), p. 138', answer: 0,
    en: { q: 'Fill in the blank with the past tense of “write”: He _____ a letter to his cousin in America.', options: ['wrote', 'writed', 'written', 'writes'], explanation: '“Write” is irregular: write – wrote – written. The simple past is “wrote”; “written” needs has/had.' },
    ta: { q: 'Fill in the blank with the past tense of “write”: He _____ a letter to his cousin in America.', options: ['wrote', 'writed', 'written', 'writes'], explanation: '“write” ஒழுங்கற்ற வினை: write – wrote – written. இறந்தகாலம் “wrote”; “written” உடன் has/had வேண்டும்.' },
  },
  {
    difficulty: 'easy', source: 'Unit 5 Grammar – Tenses, Exercise M (Down 3), p. 138', answer: 0,
    en: { q: 'Fill in the blank with the past tense of “blow”: Selvi _____ out the candle.', options: ['blew', 'blowed', 'blown', 'blows'], explanation: '“Blow” is irregular: blow – blew – blown. The simple past is “blew”.' },
    ta: { q: 'Fill in the blank with the past tense of “blow”: Selvi _____ out the candle.', options: ['blew', 'blowed', 'blown', 'blows'], explanation: '“blow” ஒழுங்கற்ற வினை: blow – blew – blown. இறந்தகாலம் “blew”.' },
  },

  // ------------------------------------------------------------------ Medium
  {
    difficulty: 'medium', source: 'Unit 5 Grammar – Tenses, Exercise I1, p. 136', answer: 0,
    en: { q: 'Choose the present perfect form: She _____ to anybody.', options: ['has never apologized', 'have never apologized', 'never apologize', 'had never apologizing'], explanation: 'Present perfect = has/have + past participle. “She” takes “has”: She has never apologized.' },
    ta: { q: 'Choose the present perfect form: She _____ to anybody.', options: ['has never apologized', 'have never apologized', 'never apologize', 'had never apologizing'], explanation: 'Present perfect = has/have + past participle. “She” உடன் “has”: She has never apologized.' },
  },
  {
    difficulty: 'medium', source: 'Unit 5 Grammar – Tenses, Exercise I2, p. 136', answer: 0,
    en: { q: 'Choose the present perfect form: My mother _____ to London.', options: ['has been', 'have been', 'being in', 'is be'], explanation: '“Has been to” means she visited London at some time and came back. “My mother” is singular, so “has”.' },
    ta: { q: 'Choose the present perfect form: My mother _____ to London.', options: ['has been', 'have been', 'being in', 'is be'], explanation: '“has been to” – லண்டனுக்கு ஒருமுறை சென்று திரும்பியிருக்கிறார் என்பது பொருள். “My mother” ஒருமை → “has”.' },
  },
  {
    difficulty: 'medium', source: 'Unit 5 Grammar – Tenses, Exercise I3, p. 136', answer: 0,
    en: { q: 'Choose the present perfect form: I _____ all the plays of Shakespeare.', options: ['have read', 'has read', 'had reading', 'am read'], explanation: 'With “I” the present perfect is “have” + past participle: I have read.' },
    ta: { q: 'Choose the present perfect form: I _____ all the plays of Shakespeare.', options: ['have read', 'has read', 'had reading', 'am read'], explanation: '“I” உடன் Present perfect = have + past participle: I have read.' },
  },
  {
    difficulty: 'medium', source: 'Unit 5 Grammar – Tenses, Exercise I4, p. 136', answer: 0,
    en: { q: 'Fill in the blank: Have you _____ your lunch?', options: ['finished', 'finish', 'finishing', 'finishes'], explanation: 'After “have” the present perfect needs the past participle: Have you finished …?' },
    ta: { q: 'Fill in the blank: Have you _____ your lunch?', options: ['finished', 'finish', 'finishing', 'finishes'], explanation: '“have” க்குப் பின் Present perfect இல் past participle வர வேண்டும்: Have you finished …?' },
  },
  {
    difficulty: 'medium', source: 'Unit 5 Grammar – Tenses, Exercise I5, p. 136', answer: 0,
    en: { q: 'Fill in the blank: _____ he brought his bike?', options: ['Has', 'Have', 'Is', 'Does'], explanation: '“Brought” is a past participle, so we need the present perfect question. “He” takes “has”: Has he brought …?' },
    ta: { q: 'Fill in the blank: _____ he brought his bike?', options: ['Has', 'Have', 'Is', 'Does'], explanation: '“brought” – past participle; எனவே Present perfect கேள்வி. “he” உடன் “Has”: Has he brought …?' },
  },
  {
    difficulty: 'medium', source: 'Unit 5 Grammar – Tenses, Exercise K1, p. 137', answer: 0,
    en: { q: 'Choose the present perfect continuous form: How long _____?', options: ['have you been waiting', 'are you waiting', 'you have been waiting', 'had you wait'], explanation: '“How long” asks about an action that started in the past and is still going on: have + been + verb-ing. In a question, “have” comes before “you”.' },
    ta: { q: 'Choose the present perfect continuous form: How long _____?', options: ['have you been waiting', 'are you waiting', 'you have been waiting', 'had you wait'], explanation: '“How long” – கடந்த காலத்தில் தொடங்கி இன்னும் தொடரும் செயல்: have + been + verb-ing. கேள்வியில் “have” எழுவாய்க்கு முன் வரும்.' },
  },
  {
    difficulty: 'medium', source: 'Unit 5 Grammar – Tenses, Exercise K2, p. 137', answer: 0,
    en: { q: 'Choose the correct form: She _____ in the garden since morning.', options: ['has been working', 'is working', 'work', 'have been working'], explanation: '“Since morning” shows an action that started in the past and continues now: present perfect continuous. “She” takes “has been”.' },
    ta: { q: 'Choose the correct form: She _____ in the garden since morning.', options: ['has been working', 'is working', 'work', 'have been working'], explanation: '“since morning” – காலையில் தொடங்கி இப்போதும் தொடர்கிறது: Present perfect continuous. “She” உடன் “has been”.' },
  },
  {
    difficulty: 'medium', source: 'Unit 5 Grammar – Tenses, Exercise K3, p. 137', answer: 0,
    en: { q: 'Choose the correct form: I _____ this mobile for three years.', options: ['have been using', 'am using', 'has used', 'has been using'], explanation: '“For three years” (a period up to now) needs the present perfect continuous. With “I” we use “have been using”.' },
    ta: { q: 'Choose the correct form: I _____ this mobile for three years.', options: ['have been using', 'am using', 'has used', 'has been using'], explanation: '“for three years” – இப்போது வரையான கால அளவு: Present perfect continuous. “I” உடன் “have been using”.' },
  },
  {
    difficulty: 'medium', source: 'Unit 5 Grammar – Tenses, Exercise K4, p. 137', answer: 0,
    en: { q: 'Choose the correct form: The children _____ in the park.', options: ['have been playing', 'has been playing', 'had been play', 'has playing'], explanation: '“The children” is plural, so the present perfect continuous is “have been playing”.' },
    ta: { q: 'Choose the correct form: The children _____ in the park.', options: ['have been playing', 'has been playing', 'had been play', 'has playing'], explanation: '“The children” பன்மை; எனவே Present perfect continuous “have been playing”.' },
  },
  {
    difficulty: 'medium', source: 'Unit 5 Grammar – Tenses, Exercise K5, p. 137', answer: 0,
    en: { q: 'Choose the correct form: The workers _____ higher wages for a long time.', options: ['have been demanding', 'has been demanding', 'demands', 'is demanding'], explanation: '“For a long time” + continuing action = present perfect continuous. “The workers” is plural: have been demanding.' },
    ta: { q: 'Choose the correct form: The workers _____ higher wages for a long time.', options: ['have been demanding', 'has been demanding', 'demands', 'is demanding'], explanation: '“for a long time” + தொடரும் செயல் = Present perfect continuous. “The workers” பன்மை: have been demanding.' },
  },
  {
    difficulty: 'medium', source: 'Unit 5 Grammar – Tenses, Exercise N1, p. 138', answer: 0,
    en: { q: 'Fill in the blank with the past continuous form of “wait”: The children _____ for the bus.', options: ['were waiting', 'was waiting', 'are waited', 'had wait'], explanation: 'Past continuous = was/were + verb-ing. “The children” is plural, so “were waiting”.' },
    ta: { q: 'Fill in the blank with the past continuous form of “wait”: The children _____ for the bus.', options: ['were waiting', 'was waiting', 'are waited', 'had wait'], explanation: 'Past continuous = was/were + verb-ing. “The children” பன்மை; எனவே “were waiting”.' },
  },
  {
    difficulty: 'medium', source: 'Unit 5 Grammar – Tenses, Exercise N4, p. 138', answer: 0,
    en: { q: 'Fill in the blank with the past continuous form of “repair”: Vijay _____ his car.', options: ['was repairing', 'were repairing', 'is repaired', 'has repair'], explanation: 'Past continuous with a singular subject (Vijay) is “was” + verb-ing: was repairing.' },
    ta: { q: 'Fill in the blank with the past continuous form of “repair”: Vijay _____ his car.', options: ['was repairing', 'were repairing', 'is repaired', 'has repair'], explanation: 'ஒருமை எழுவாய் (Vijay) உடன் Past continuous = was + verb-ing: was repairing.' },
  },
  {
    difficulty: 'medium', source: 'Unit 5 Grammar – Tenses (Past Continuous), p. 131', answer: 0,
    en: { q: 'Fill in the blank: I _____ a movie when she called.', options: ['was watching', 'am watching', 'have watched', 'watch'], explanation: 'A longer past action interrupted by a short one: past continuous (was watching) + simple past (called).' },
    ta: { q: 'Fill in the blank: I _____ a movie when she called.', options: ['was watching', 'am watching', 'have watched', 'watch'], explanation: 'கடந்த காலத்தில் நடந்துகொண்டிருந்த செயல் இன்னொரு செயலால் இடைமறிக்கப்படுகிறது: Past continuous (was watching) + Simple past (called).' },
  },
  {
    difficulty: 'medium', source: 'Unit 5 Grammar – Tenses, Exercise B3, p. 135', answer: 0,
    en: { q: 'Fill in the blank with the present continuous form of “work”: My brother _____ in London now.', options: ['is working', 'are working', 'was worked', 'working'], explanation: '“Now” shows a present continuous action. “My brother” is singular: is working.' },
    ta: { q: 'Fill in the blank with the present continuous form of “work”: My brother _____ in London now.', options: ['is working', 'are working', 'was worked', 'working'], explanation: '“now” – Present continuous. “My brother” ஒருமை: is working.' },
  },
  {
    difficulty: 'medium', source: 'Unit 5 Grammar – Tenses, Exercise F1, p. 136', answer: 0,
    en: { q: 'Choose the correct negative form of: He is learning to read.', options: ['He is not learning to read.', 'He does not learning to read.', 'He not is learning to read.', 'He is not learn to read.'], explanation: 'In the present continuous, “not” comes after am/is/are and the -ing form stays: He is not learning.' },
    ta: { q: 'Choose the correct negative form of: He is learning to read.', options: ['He is not learning to read.', 'He does not learning to read.', 'He not is learning to read.', 'He is not learn to read.'], explanation: 'Present continuous இல் “not” என்பது am/is/are க்குப் பின் வரும்; -ing வடிவம் மாறாது: He is not learning.' },
  },
  {
    difficulty: 'medium', source: 'Unit 5 Grammar – Tenses (Simple Present – timetables), p. 129', answer: 0,
    en: { q: 'Fill in the blank (a fixed timetable): My train _____ tomorrow.', options: ['arrives', 'arrived', 'has arrived', 'had arrived'], explanation: 'The simple present is used for future timetables and schedules, e.g. “My train arrives tomorrow.”' },
    ta: { q: 'Fill in the blank (a fixed timetable): My train _____ tomorrow.', options: ['arrives', 'arrived', 'has arrived', 'had arrived'], explanation: 'எதிர்கால நேர அட்டவணைகளுக்கு Simple present பயன்படும்: “My train arrives tomorrow.”' },
  },

  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Unit 5 Grammar – Tenses, Exercise P1, p. 139', answer: 0,
    en: { q: 'Choose the correct verb form: Ezhil _____ a cake when they came.', options: ['had been baking', 'has been baking', 'bakes', 'will bake'], explanation: 'The baking had been going on for some time before another past action (they came): past perfect continuous.' },
    ta: { q: 'Choose the correct verb form: Ezhil _____ a cake when they came.', options: ['had been baking', 'has been baking', 'bakes', 'will bake'], explanation: 'அவர்கள் வருவதற்கு (கடந்த கால செயல்) முன்பிருந்தே கேக் செய்வது தொடர்ந்துகொண்டிருந்தது: Past perfect continuous.' },
  },
  {
    difficulty: 'hard', source: 'Unit 5 Grammar – Tenses, Exercise P3, p. 139', answer: 0,
    en: { q: 'Choose the correct verb form: We _____ in the city for ten years before we moved to the village.', options: ['had been working', 'have been working', 'are working', 'will be working'], explanation: 'An action that continued for a period (ten years) before another past action (moved) takes the past perfect continuous.' },
    ta: { q: 'Choose the correct verb form: We _____ in the city for ten years before we moved to the village.', options: ['had been working', 'have been working', 'are working', 'will be working'], explanation: 'கடந்த காலத்தில் இன்னொரு செயலுக்கு (moved) முன் ஒரு கால அளவு (ten years) தொடர்ந்த செயல்: Past perfect continuous.' },
  },
  {
    difficulty: 'hard', source: 'Unit 5 Grammar – Tenses, Exercise P5, p. 139', answer: 0,
    en: { q: 'Choose the correct verb form: Kannan _____ for a job for a long time.', options: ['had been looking', 'have been looking', 'were looking', 'had been look'], explanation: 'The book’s answer is the past perfect continuous “had been looking”. “Have been looking” is wrong because “Kannan” is singular (it would be “has”).' },
    ta: { q: 'Choose the correct verb form: Kannan _____ for a job for a long time.', options: ['had been looking', 'have been looking', 'were looking', 'had been look'], explanation: 'நூலின் விடை Past perfect continuous “had been looking”. “Kannan” ஒருமை என்பதால் “have been looking” தவறு (has வேண்டும்).' },
  },
  {
    difficulty: 'hard', source: 'Unit 5 Grammar – Tenses (Past Perfect), p. 132', answer: 0,
    en: { q: 'Fill in the blank: When we arrived, the class _____.', options: ['had already begun', 'has already begun', 'already begins', 'will already begin'], explanation: 'Of two past actions, the one completed first takes the past perfect (had begun); the later one takes the simple past (arrived).' },
    ta: { q: 'Fill in the blank: When we arrived, the class _____.', options: ['had already begun', 'has already begun', 'already begins', 'will already begin'], explanation: 'கடந்த காலத்தில் இரண்டு செயல்களில் முதலில் முடிந்தது Past perfect (had begun); பின்னர் நடந்தது Simple past (arrived).' },
  },
  {
    difficulty: 'hard', source: 'Unit 5 Grammar – Tenses (Future Perfect), p. 134', answer: 0,
    en: { q: 'Fill in the blank: By the time you arrive, I _____ the project.', options: ['will have finished', 'will finishing', 'had finished', 'have finish'], explanation: 'An action that will be complete before a future time takes the future perfect: will/shall + have + past participle.' },
    ta: { q: 'Fill in the blank: By the time you arrive, I _____ the project.', options: ['will have finished', 'will finishing', 'had finished', 'have finish'], explanation: 'எதிர்காலத்தில் ஒரு நேரத்திற்கு முன் முடிந்திருக்கும் செயல்: Future perfect = will/shall + have + past participle.' },
  },
  {
    difficulty: 'hard', source: 'Unit 5 Grammar – Tenses (Future Continuous), p. 133', answer: 0,
    en: { q: 'Fill in the blank: She _____ an exam at 2 p.m. tomorrow, so don’t call her then.', options: ['will be taking', 'took', 'has taken', 'had been taking'], explanation: 'An action in progress at a definite time in the future takes the future continuous: will be + verb-ing.' },
    ta: { q: 'Fill in the blank: She _____ an exam at 2 p.m. tomorrow, so don’t call her then.', options: ['will be taking', 'took', 'has taken', 'had been taking'], explanation: 'எதிர்காலத்தில் ஒரு குறிப்பிட்ட நேரத்தில் நடந்துகொண்டிருக்கும் செயல்: Future continuous = will be + verb-ing.' },
  },
  {
    difficulty: 'hard', source: 'Unit 5 Grammar – Tenses, Exercise Q4, p. 139', answer: 0,
    en: { q: 'Fill in the blank with the correct form of “go”: As soon as my father arrives, we _____ to watch the film.', options: ['will go', 'went', 'had gone', 'have gone'], explanation: 'The time clause “as soon as my father arrives” is in the simple present, but the main clause talks about the future, so it takes “will go”.' },
    ta: { q: 'Fill in the blank with the correct form of “go”: As soon as my father arrives, we _____ to watch the film.', options: ['will go', 'went', 'had gone', 'have gone'], explanation: '“as soon as my father arrives” என்ற நேரப் பகுதி Simple present இல் இருந்தாலும், முதன்மைப் பகுதி எதிர்காலத்தைக் குறிப்பதால் “will go”.' },
  },
  {
    difficulty: 'hard', source: 'Unit 5 Grammar – Tenses (Future – prediction with evidence), p. 133', answer: 0,
    en: { q: 'Fill in the blank (prediction based on what you see): Be careful, that mirror _____ on the floor.', options: ['is going to fall', 'fell', 'has fallen', 'had fallen'], explanation: 'When we can see evidence now that something will happen, we use “be going to” (like “It is cloudy. It’s going to rain.”).' },
    ta: { q: 'Fill in the blank (prediction based on what you see): Be careful, that mirror _____ on the floor.', options: ['is going to fall', 'fell', 'has fallen', 'had fallen'], explanation: 'நடக்கப்போவதற்கான அறிகுறி இப்போதே தெரியும்போது “be going to” பயன்படும் (“It is cloudy. It’s going to rain.” போல).' },
  },
  {
    difficulty: 'hard', source: 'Unit 5 Grammar – Tenses, Exercise T, p. 140', answer: 0,
    en: { q: 'Choose the correct future perfect form: In 50 years the ice caps _____.', options: ['will have melted', 'will melted', 'have been melt', 'will had melted'], explanation: 'Future perfect = will + have + past participle: will have melted. This is the book’s example sentence.' },
    ta: { q: 'Choose the correct future perfect form: In 50 years the ice caps _____.', options: ['will have melted', 'will melted', 'have been melt', 'will had melted'], explanation: 'Future perfect = will + have + past participle: will have melted. இது நூலின் உதாரண வாக்கியம்.' },
  },
  {
    difficulty: 'hard', source: 'Unit 5 Grammar – Tenses (Present Perfect), p. 130', answer: 0,
    en: { q: 'Spot the correct sentence.', options: ['He has been a teacher since 2002.', 'He is a teacher since 2002.', 'He was a teacher since 2002.', 'He has been a teacher for 2002.'], explanation: 'A state from a past point until now takes the present perfect with “since” + point of time. “For” is used with a period (for ten years), not a year.' },
    ta: { q: 'Spot the correct sentence.', options: ['He has been a teacher since 2002.', 'He is a teacher since 2002.', 'He was a teacher since 2002.', 'He has been a teacher for 2002.'], explanation: 'கடந்த ஒரு குறிப்பிட்ட நேரத்திலிருந்து இப்போது வரை உள்ள நிலை: Present perfect + “since” + நேரப் புள்ளி. “for” கால அளவுடன் (for ten years) வரும்.' },
  },
];
