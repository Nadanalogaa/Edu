// Tamil Nadu State Board, 9th English – Grammar: Direct and Indirect Speech.
// Questions come from the textbook's grammar exercises on reported speech (Unit 7, pp. 185–189)
// and dialogue from the lessons. source = unit and grammar section / lesson and printed page.

import { BankQuestion } from './types';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Unit 7 Grammar – Reported Speech, p. 185', answer: 0,
    en: { q: 'Change into indirect speech: She said, “I have won the first prize.”', options: ['She said that she had won the first prize.', 'She said that I have won the first prize.', 'She said that she has won the first prize.', 'She told that she had won the first prize.'], explanation: 'The reporting verb “said” is in the past, so the present perfect “have won” becomes the past perfect “had won”, and “I” becomes “she”.' },
    ta: { q: 'Change into indirect speech: She said, “I have won the first prize.”', options: ['She said that she had won the first prize.', 'She said that I have won the first prize.', 'She said that she has won the first prize.', 'She told that she had won the first prize.'], explanation: 'Reporting verb “said” இறந்தகாலம்; எனவே “have won” → “had won”; “I” → “she”. “told” க்குப் பின் ஒருவரின் பெயர் வேண்டும்.' },
  },
  {
    difficulty: 'easy', source: 'Unit 7 Grammar – Reported Speech, p. 185', answer: 0,
    en: { q: 'In direct speech, the actual words of the speaker are placed within', options: ['inverted commas (“ ”)', 'brackets ( )', 'a dash (–)', 'a full stop only'], explanation: 'Direct speech reproduces the speaker’s exact words and puts them within inverted commas.' },
    ta: { q: 'In direct speech, the actual words of the speaker are placed within', options: ['inverted commas (“ ”)', 'brackets ( )', 'a dash (–)', 'a full stop only'], explanation: 'நேர்க்கூற்றில் (Direct speech) பேசியவரின் சொற்கள் அப்படியே மேற்கோள் குறிகளுக்குள் (“ ”) எழுதப்படும்.' },
  },
  {
    difficulty: 'easy', source: 'Unit 7 Grammar – Reported Speech, p. 185', answer: 0,
    en: { q: 'Indirect speech is also called', options: ['reported speech', 'direct narration', 'passive speech', 'question speech'], explanation: 'The book says indirect speech is also called reported speech: we report the speaker’s words with a few changes.' },
    ta: { q: 'Indirect speech is also called', options: ['reported speech', 'direct narration', 'passive speech', 'question speech'], explanation: 'அயற்கூற்று (Indirect speech) “Reported speech” என்றும் அழைக்கப்படும் என நூல் கூறுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Unit 7 Grammar – Reported Speech (Key Terminology), p. 185', answer: 0,
    en: { q: 'In the sentence: She said, “I have won the first prize.” – the word “said” is the', options: ['reporting verb', 'reported verb', 'main clause object', 'auxiliary verb'], explanation: 'The verb that introduces the spoken words (said, told, asked) is called the reporting verb.' },
    ta: { q: 'In the sentence: She said, “I have won the first prize.” – the word “said” is the', options: ['reporting verb', 'reported verb', 'main clause object', 'auxiliary verb'], explanation: 'பேசிய சொற்களை அறிமுகப்படுத்தும் வினை (said, told, asked) Reporting verb எனப்படும்.' },
  },
  {
    difficulty: 'easy', source: 'Unit 7 Grammar – Reported Speech (Time and Position), p. 187', answer: 0,
    en: { q: 'In indirect speech, the word “now” usually changes to', options: ['then', 'there', 'that day', 'before'], explanation: 'From the book’s table: now → then.' },
    ta: { q: 'In indirect speech, the word “now” usually changes to', options: ['then', 'there', 'that day', 'before'], explanation: 'நூலின் அட்டவணைப்படி: now → then.' },
  },
  {
    difficulty: 'easy', source: 'Unit 7 Grammar – Reported Speech (Time and Position), p. 187', answer: 0,
    en: { q: 'In indirect speech, the word “today” usually changes to', options: ['that day', 'the previous day', 'the next day', 'then day'], explanation: 'From the book’s table: today → that day.' },
    ta: { q: 'In indirect speech, the word “today” usually changes to', options: ['that day', 'the previous day', 'the next day', 'then day'], explanation: 'நூலின் அட்டவணைப்படி: today → that day.' },
  },
  {
    difficulty: 'easy', source: 'Unit 7 Grammar – Reported Speech (Time and Position), p. 187', answer: 0,
    en: { q: 'In indirect speech, the word “tomorrow” usually changes to', options: ['the next day', 'the previous day', 'that day', 'yesterday'], explanation: 'From the book’s table: tomorrow → the next day.' },
    ta: { q: 'In indirect speech, the word “tomorrow” usually changes to', options: ['the next day', 'the previous day', 'that day', 'yesterday'], explanation: 'நூலின் அட்டவணைப்படி: tomorrow → the next day.' },
  },
  {
    difficulty: 'easy', source: 'Unit 7 Grammar – Reported Speech (Time and Position), p. 187', answer: 0,
    en: { q: 'In indirect speech, the word “yesterday” usually changes to', options: ['the previous day', 'the next day', 'that day', 'the following day'], explanation: 'From the book’s table: yesterday → the previous day.' },
    ta: { q: 'In indirect speech, the word “yesterday” usually changes to', options: ['the previous day', 'the next day', 'that day', 'the following day'], explanation: 'நூலின் அட்டவணைப்படி: yesterday → the previous day.' },
  },
  {
    difficulty: 'easy', source: 'Unit 7 Grammar – Reported Speech (Time and Position), p. 187', answer: 0,
    en: { q: 'In indirect speech, the word “here” usually changes to', options: ['there', 'then', 'that', 'those'], explanation: 'From the book’s table: here → there.' },
    ta: { q: 'In indirect speech, the word “here” usually changes to', options: ['there', 'then', 'that', 'those'], explanation: 'நூலின் அட்டவணைப்படி: here → there.' },
  },
  {
    difficulty: 'easy', source: 'Unit 7 Grammar – Reported Speech (Time and Position), p. 187', answer: 0,
    en: { q: 'In indirect speech, the word “this” usually changes to', options: ['that', 'those', 'these', 'there'], explanation: 'From the book’s table: this → that (and these → those).' },
    ta: { q: 'In indirect speech, the word “this” usually changes to', options: ['that', 'those', 'these', 'there'], explanation: 'நூலின் அட்டவணைப்படி: this → that (these → those).' },
  },
  {
    difficulty: 'easy', source: 'Unit 7 Grammar – Reported Speech (Time and Position), p. 187', answer: 0,
    en: { q: 'In indirect speech, the word “ago” usually changes to', options: ['before', 'then', 'after', 'later'], explanation: 'From the book’s table: ago → before (e.g. two days ago → two days before).' },
    ta: { q: 'In indirect speech, the word “ago” usually changes to', options: ['before', 'then', 'after', 'later'], explanation: 'நூலின் அட்டவணைப்படி: ago → before (two days ago → two days before).' },
  },
  {
    difficulty: 'easy', source: 'Unit 7 Grammar – Reported Speech (Time and Position), p. 187', answer: 0,
    en: { q: 'In indirect speech, the words “last night” usually change to', options: ['the previous night', 'the next night', 'that night before', 'tonight'], explanation: 'From the book’s table: last night → the previous night.' },
    ta: { q: 'In indirect speech, the words “last night” usually change to', options: ['the previous night', 'the next night', 'that night before', 'tonight'], explanation: 'நூலின் அட்டவணைப்படி: last night → the previous night.' },
  },
  {
    difficulty: 'easy', source: 'Unit 7 Grammar – Reporting Imperatives, p. 186', answer: 0,
    en: { q: 'Change into indirect speech: Karthi said to Ram, “Please, switch on the fan.”', options: ['Karthi requested Ram to switch on the fan.', 'Karthi said Ram that please switch on the fan.', 'Karthi requested Ram that he switches on the fan.', 'Karthi ordered Ram please to switch on the fan.'], explanation: '“Please” shows a request, so the pattern is: request + person + to-infinitive. “Please” itself is dropped.' },
    ta: { q: 'Change into indirect speech: Karthi said to Ram, “Please, switch on the fan.”', options: ['Karthi requested Ram to switch on the fan.', 'Karthi said Ram that please switch on the fan.', 'Karthi requested Ram that he switches on the fan.', 'Karthi ordered Ram please to switch on the fan.'], explanation: '“Please” – வேண்டுகோள்; அமைப்பு: requested + நபர் + to-infinitive. “Please” விடப்படும்.' },
  },
  {
    difficulty: 'easy', source: 'Unit 7 Grammar – Reported Speech (Time and Position), p. 187', answer: 0,
    en: { q: 'In indirect speech, the word “these” usually changes to', options: ['those', 'that', 'this', 'them'], explanation: 'From the book’s table: these → those.' },
    ta: { q: 'In indirect speech, the word “these” usually changes to', options: ['those', 'that', 'this', 'them'], explanation: 'நூலின் அட்டவணைப்படி: these → those.' },
  },

  // ------------------------------------------------------------------ Medium
  {
    difficulty: 'medium', source: 'Unit 7 Grammar – Reporting Statements, p. 186', answer: 0,
    en: { q: 'Change into indirect speech: Kowsalya said, “We watched a film yesterday.”', options: ['Kowsalya said that they had watched a film the previous day.', 'Kowsalya said that we watched a film yesterday.', 'Kowsalya said that they watch a film the next day.', 'Kowsalya said that we had watched a film the next day.'], explanation: '“We” → “they”, simple past → past perfect (had watched), “yesterday” → “the previous day”. (The book’s model “they watched a film the day before” is also accepted.)' },
    ta: { q: 'Change into indirect speech: Kowsalya said, “We watched a film yesterday.”', options: ['Kowsalya said that they had watched a film the previous day.', 'Kowsalya said that we watched a film yesterday.', 'Kowsalya said that they watch a film the next day.', 'Kowsalya said that we had watched a film the next day.'], explanation: '“We” → “they”; Simple past → Past perfect (had watched); “yesterday” → “the previous day”. (நூலின் “they watched a film the day before” என்ற வடிவமும் ஏற்கப்படும்.)' },
  },
  {
    difficulty: 'medium', source: 'Unit 7 Grammar – Reporting Questions, p. 186', answer: 0,
    en: { q: 'Change into indirect speech: She said to me, “Where did you go?”', options: ['She asked me where I had gone.', 'She asked me where did I go.', 'She said to me where did you go.', 'She asked me where you had gone.'], explanation: '“Said to” → “asked”; the question becomes a statement (no “did”); “you” → “I” (the listener is “me”); simple past → past perfect. (The book’s model “where I went” is also accepted.)' },
    ta: { q: 'Change into indirect speech: She said to me, “Where did you go?”', options: ['She asked me where I had gone.', 'She asked me where did I go.', 'She said to me where did you go.', 'She asked me where you had gone.'], explanation: '“said to” → “asked”; கேள்வி அமைப்பு நீங்கி வாக்கிய அமைப்பு (did இல்லை); “you” → “I” (கேட்டவர் “me”); Simple past → Past perfect. (நூலின் “where I went” வடிவமும் ஏற்கப்படும்.)' },
  },
  {
    difficulty: 'medium', source: 'Unit 7 Grammar – Reporting Questions, p. 186', answer: 0,
    en: { q: 'Change into indirect speech: Praveena asked, “Have you watered the plants?”', options: ['Praveena asked if I had watered the plants.', 'Praveena asked have I watered the plants.', 'Praveena asked that I had watered the plants.', 'Praveena asked if had I watered the plants.'], explanation: 'A yes/no question has no question word, so we add “if/whether”, use statement order (I had watered) and change the tense back.' },
    ta: { q: 'Change into indirect speech: Praveena asked, “Have you watered the plants?”', options: ['Praveena asked if I had watered the plants.', 'Praveena asked have I watered the plants.', 'Praveena asked that I had watered the plants.', 'Praveena asked if had I watered the plants.'], explanation: 'ஆம்/இல்லை கேள்வியில் வினாச்சொல் இல்லை; எனவே “if/whether” சேர்த்து, வாக்கிய வரிசையில் (I had watered) எழுதி, காலத்தை மாற்ற வேண்டும்.' },
  },
  {
    difficulty: 'medium', source: 'Unit 7 Grammar – Reported Speech, Exercise B, p. 188', answer: 0,
    en: { q: 'Report the sentence: “Can you hear me?” (said by a girl to you)', options: ['She asked if you could hear her.', 'She asked can you hear me.', 'She said if you can hear me.', 'She asked if could you hear her.'], explanation: 'This is the book’s model: “ask + if”, “can” → “could”, “me” → “her”, statement word order.' },
    ta: { q: 'Report the sentence: “Can you hear me?” (said by a girl to you)', options: ['She asked if you could hear her.', 'She asked can you hear me.', 'She said if you can hear me.', 'She asked if could you hear her.'], explanation: 'இது நூலின் மாதிரி: “asked + if”, “can” → “could”, “me” → “her”, வாக்கிய வரிசை.' },
  },
  {
    difficulty: 'medium', source: 'Unit 7 Grammar – Reported Speech, Exercise B, p. 188', answer: 0,
    en: { q: 'Report the sentence: “Consult the doctor.” (advice given by a man to you)', options: ['He advised you to consult the doctor.', 'He advised you that consult the doctor.', 'He said you consult the doctor.', 'He advised you consulting the doctor.'], explanation: 'Advice is reported as: advise + person + to-infinitive. This is the book’s model answer.' },
    ta: { q: 'Report the sentence: “Consult the doctor.” (advice given by a man to you)', options: ['He advised you to consult the doctor.', 'He advised you that consult the doctor.', 'He said you consult the doctor.', 'He advised you consulting the doctor.'], explanation: 'அறிவுரை: advised + நபர் + to-infinitive. இது நூலின் மாதிரி விடை.' },
  },
  {
    difficulty: 'medium', source: 'Unit 7 Grammar – Reported Speech, Exercise B, p. 188', answer: 0,
    en: { q: 'Report the sentence: “I won’t go to the party.” (said by a man)', options: ['He said that he wouldn’t go to the party.', 'He said that I won’t go to the party.', 'He said that he won’t went to the party.', 'He asked that he wouldn’t go to the party.'], explanation: '“I” → “he”, “will not (won’t)” → “would not (wouldn’t)”. A statement is reported with “said that”.' },
    ta: { q: 'Report the sentence: “I won’t go to the party.” (said by a man)', options: ['He said that he wouldn’t go to the party.', 'He said that I won’t go to the party.', 'He said that he won’t went to the party.', 'He asked that he wouldn’t go to the party.'], explanation: '“I” → “he”; “won’t” → “wouldn’t”. கூற்று வாக்கியம் “said that” உடன் வரும்.' },
  },
  {
    difficulty: 'medium', source: 'Unit 7 Grammar – Reported Speech, Exercise B, p. 188', answer: 0,
    en: { q: 'Report the sentence: “Don’t touch the wire.” (a warning given by a woman to you)', options: ['She warned you not to touch the wire.', 'She warned you don’t touch the wire.', 'She warned you to not touching the wire.', 'She said you that not to touch the wire.'], explanation: 'A negative command (warning) is reported as: warn + person + not + to-infinitive.' },
    ta: { q: 'Report the sentence: “Don’t touch the wire.” (a warning given by a woman to you)', options: ['She warned you not to touch the wire.', 'She warned you don’t touch the wire.', 'She warned you to not touching the wire.', 'She said you that not to touch the wire.'], explanation: 'எதிர்மறைக் கட்டளை (எச்சரிக்கை): warned + நபர் + not + to-infinitive.' },
  },
  {
    difficulty: 'medium', source: 'Unit 7 Grammar – Reported Speech, Exercise B, p. 188', answer: 0,
    en: { q: 'Report the sentence: “When did you come?” (asked by a woman to you)', options: ['She asked when you had come.', 'She asked when did you come.', 'She asked that when you had come.', 'She said when you came?'], explanation: 'A wh-question keeps the question word (when) but uses statement order and no “did”; simple past → past perfect.' },
    ta: { q: 'Report the sentence: “When did you come?” (asked by a woman to you)', options: ['She asked when you had come.', 'She asked when did you come.', 'She asked that when you had come.', 'She said when you came?'], explanation: 'Wh-கேள்வியில் வினாச்சொல் (when) அப்படியே இருக்கும்; வாக்கிய வரிசை, “did” இல்லை; Simple past → Past perfect.' },
  },
  {
    difficulty: 'medium', source: 'Unit 7 Grammar – Reported Speech, Exercise B, p. 188', answer: 0,
    en: { q: 'Report the sentence: “I have to go.” (said by a man)', options: ['He said that he had to go.', 'He said that I have to go.', 'He said that he has to went.', 'He told that he had to go.'], explanation: '“I” → “he”, “have to” → “had to”. “Told” must be followed by a person, so “He told that…” is wrong.' },
    ta: { q: 'Report the sentence: “I have to go.” (said by a man)', options: ['He said that he had to go.', 'He said that I have to go.', 'He said that he has to went.', 'He told that he had to go.'], explanation: '“I” → “he”; “have to” → “had to”. “told” க்குப் பின் நபர் வேண்டும்; எனவே “He told that…” தவறு.' },
  },
  {
    difficulty: 'medium', source: 'Unit 7 Grammar – Reported Speech, Exercise C1, p. 189', answer: 0,
    en: { q: 'Change into indirect speech: Pushpa said, “Do not spoil the eco-system.”', options: ['Pushpa advised us not to spoil the eco-system.', 'Pushpa advised us do not spoil the eco-system.', 'Pushpa said that do not spoil the eco-system.', 'Pushpa advised us to not spoiled the eco-system.'], explanation: 'A negative imperative → advise/tell + person + not + to-infinitive.' },
    ta: { q: 'Change into indirect speech: Pushpa said, “Do not spoil the eco-system.”', options: ['Pushpa advised us not to spoil the eco-system.', 'Pushpa advised us do not spoil the eco-system.', 'Pushpa said that do not spoil the eco-system.', 'Pushpa advised us to not spoiled the eco-system.'], explanation: 'எதிர்மறைக் கட்டளை → advised/told + நபர் + not + to-infinitive.' },
  },
  {
    difficulty: 'medium', source: 'Unit 7 Grammar – Reported Speech, Exercise C2, p. 189', answer: 0,
    en: { q: 'Change into indirect speech: Ebin said, “Have you booked the tickets to Delhi?”', options: ['Ebin asked if I had booked the tickets to Delhi.', 'Ebin asked have I booked the tickets to Delhi.', 'Ebin said that I had booked the tickets to Delhi.', 'Ebin asked if I have booked the tickets to Delhi?'], explanation: 'Yes/no question → “asked if/whether”; present perfect → past perfect; statement order; no question mark.' },
    ta: { q: 'Change into indirect speech: Ebin said, “Have you booked the tickets to Delhi?”', options: ['Ebin asked if I had booked the tickets to Delhi.', 'Ebin asked have I booked the tickets to Delhi.', 'Ebin said that I had booked the tickets to Delhi.', 'Ebin asked if I have booked the tickets to Delhi?'], explanation: 'ஆம்/இல்லை கேள்வி → “asked if/whether”; Present perfect → Past perfect; வாக்கிய வரிசை; கேள்விக்குறி இல்லை.' },
  },
  {
    difficulty: 'medium', source: 'Unit 7 Grammar – Reported Speech, Exercise C6, p. 189', answer: 0,
    en: { q: 'Change into indirect speech: “Tomorrow I have to take a test in English,” said Sudha.', options: ['Sudha said that she had to take a test in English the next day.', 'Sudha said that she has to take a test in English tomorrow.', 'Sudha said that I had to take a test in English the next day.', 'Sudha said that she had to take a test in English the previous day.'], explanation: '“I” → “she”, “have to” → “had to”, “tomorrow” → “the next day”.' },
    ta: { q: 'Change into indirect speech: “Tomorrow I have to take a test in English,” said Sudha.', options: ['Sudha said that she had to take a test in English the next day.', 'Sudha said that she has to take a test in English tomorrow.', 'Sudha said that I had to take a test in English the next day.', 'Sudha said that she had to take a test in English the previous day.'], explanation: '“I” → “she”; “have to” → “had to”; “tomorrow” → “the next day”.' },
  },
  {
    difficulty: 'medium', source: 'Unit 7 Grammar – Reporting Questions, p. 186', answer: 0,
    en: { q: 'When a question in direct speech has no “wh” word, which word is added in indirect speech?', options: ['if / whether', 'that', 'what', 'to'], explanation: 'The book’s note: if the “wh” question word is missing, “if” or “whether” is added.' },
    ta: { q: 'When a question in direct speech has no “wh” word, which word is added in indirect speech?', options: ['if / whether', 'that', 'what', 'to'], explanation: 'நூலின் குறிப்பு: “wh” வினாச்சொல் இல்லையெனில் “if” அல்லது “whether” சேர்க்கப்படும்.' },
  },
  {
    difficulty: 'medium', source: 'Unit 7 Grammar – Reported Speech, Exercise C7, p. 189', answer: 0,
    en: { q: 'Change into indirect speech: Amali said to her sister, “I need your help to arrange the books in the shelf.”', options: ['Amali told her sister that she needed her help to arrange the books in the shelf.', 'Amali told her sister that I need your help to arrange the books in the shelf.', 'Amali said her sister that she needed my help to arrange the books.', 'Amali asked her sister that she needs her help to arrange the books.'], explanation: '“Said to” → “told”; “I” → “she”, “your” → “her”; “need” → “needed”.' },
    ta: { q: 'Change into indirect speech: Amali said to her sister, “I need your help to arrange the books in the shelf.”', options: ['Amali told her sister that she needed her help to arrange the books in the shelf.', 'Amali told her sister that I need your help to arrange the books in the shelf.', 'Amali said her sister that she needed my help to arrange the books.', 'Amali asked her sister that she needs her help to arrange the books.'], explanation: '“said to” → “told”; “I” → “she”, “your” → “her”; “need” → “needed”.' },
  },
  {
    difficulty: 'medium', source: 'Unit 7 Grammar – Reported Speech, Exercise C5, p. 189', answer: 0,
    en: { q: 'Change into indirect speech: Gladin said to his mother, “Can you, please, buy me a hot-chocolate?”', options: ['Gladin requested his mother to buy him a hot-chocolate.', 'Gladin requested his mother to buy me a hot-chocolate.', 'Gladin asked his mother can she please buy him a hot-chocolate.', 'Gladin ordered his mother that she buys him a hot-chocolate.'], explanation: 'A polite question with “please” is really a request: request + person + to-infinitive; “me” → “him”.' },
    ta: { q: 'Change into indirect speech: Gladin said to his mother, “Can you, please, buy me a hot-chocolate?”', options: ['Gladin requested his mother to buy him a hot-chocolate.', 'Gladin requested his mother to buy me a hot-chocolate.', 'Gladin asked his mother can she please buy him a hot-chocolate.', 'Gladin ordered his mother that she buys him a hot-chocolate.'], explanation: '“please” உடன் வரும் பணிவான கேள்வி உண்மையில் வேண்டுகோள்: requested + நபர் + to-infinitive; “me” → “him”.' },
  },
  {
    difficulty: 'medium', source: 'Unit 7 Grammar – Reported Speech (Pronouns), p. 187', answer: 0,
    en: { q: 'Change into indirect speech: Raj said, “I am tired.”', options: ['Raj said that he was tired.', 'Raj said that I was tired.', 'Raj said that he is tired.', 'Raj said that he had tired.'], explanation: 'For a male speaker, “I” → “he”; the present “am” → past “was”.' },
    ta: { q: 'Change into indirect speech: Raj said, “I am tired.”', options: ['Raj said that he was tired.', 'Raj said that I was tired.', 'Raj said that he is tired.', 'Raj said that he had tired.'], explanation: 'ஆண் பேசுபவருக்கு “I” → “he”; நிகழ்கால “am” → இறந்தகால “was”.' },
  },

  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Unit 7 Grammar – Reported Speech, Exercise C3, p. 189', answer: 0,
    en: { q: 'Change into indirect speech: Rehman said to Tilak, “When are we leaving to our native?”', options: ['Rehman asked Tilak when they were leaving to their native.', 'Rehman asked Tilak when are we leaving to our native.', 'Rehman asked Tilak when were they leaving to their native.', 'Rehman told Tilak that when they are leaving to their native.'], explanation: '“Said to” → “asked”; “we/our” → “they/their”; “are leaving” → “were leaving”; statement word order after “when”.' },
    ta: { q: 'Change into indirect speech: Rehman said to Tilak, “When are we leaving to our native?”', options: ['Rehman asked Tilak when they were leaving to their native.', 'Rehman asked Tilak when are we leaving to our native.', 'Rehman asked Tilak when were they leaving to their native.', 'Rehman told Tilak that when they are leaving to their native.'], explanation: '“said to” → “asked”; “we/our” → “they/their”; “are leaving” → “were leaving”; “when” க்குப் பின் வாக்கிய வரிசை (they were).' },
  },
  {
    difficulty: 'hard', source: 'Unit 7 Grammar – Reported Speech, Exercise C4, p. 189', answer: 0,
    en: { q: 'Change into indirect speech: Maha said, “Lakshan, you should get up early in the morning.”', options: ['Maha advised Lakshan to get up early in the morning.', 'Maha advised Lakshan that you should get up early in the morning.', 'Maha ordered Lakshan that he gets up early in the morning.', 'Maha asked Lakshan should he get up early in the morning.'], explanation: '“You should …” is advice, so we report it as: advise + person + to-infinitive. The name in the vocative (Lakshan) becomes the object.' },
    ta: { q: 'Change into indirect speech: Maha said, “Lakshan, you should get up early in the morning.”', options: ['Maha advised Lakshan to get up early in the morning.', 'Maha advised Lakshan that you should get up early in the morning.', 'Maha ordered Lakshan that he gets up early in the morning.', 'Maha asked Lakshan should he get up early in the morning.'], explanation: '“You should …” – அறிவுரை; எனவே advised + நபர் + to-infinitive. விளிக்கப்பட்ட பெயர் (Lakshan) செயப்படுபொருளாகிறது.' },
  },
  {
    difficulty: 'hard', source: 'Unit 7 Grammar – Reported Speech, Exercise C8, p. 189', answer: 0,
    en: { q: 'Change into indirect speech: “Why don’t you use crayons for colouring?” said Prabhu to his son.', options: ['Prabhu asked his son why he didn’t use crayons for colouring.', 'Prabhu asked his son why don’t you use crayons for colouring.', 'Prabhu asked his son why didn’t he use crayons for colouring.', 'Prabhu told his son that why he doesn’t use crayons.'], explanation: '“Said to” → “asked”; “you” → “he”; “don’t use” → “didn’t use”; statement order after “why” (he didn’t use).' },
    ta: { q: 'Change into indirect speech: “Why don’t you use crayons for colouring?” said Prabhu to his son.', options: ['Prabhu asked his son why he didn’t use crayons for colouring.', 'Prabhu asked his son why don’t you use crayons for colouring.', 'Prabhu asked his son why didn’t he use crayons for colouring.', 'Prabhu told his son that why he doesn’t use crayons.'], explanation: '“said to” → “asked”; “you” → “he”; “don’t use” → “didn’t use”; “why” க்குப் பின் வாக்கிய வரிசை (he didn’t use).' },
  },
  {
    difficulty: 'hard', source: 'Unit 7 Supplementary – The Christmas Truce, p. 198', answer: 0,
    en: { q: 'Change into indirect speech: The captain said to his men, “Hold your fire.”', options: ['The captain ordered his men to hold their fire.', 'The captain ordered his men to hold your fire.', 'The captain said his men that hold their fire.', 'The captain requested his men that they hold their fire.'], explanation: 'A command from an officer → order + person + to-infinitive; “your” → “their”.' },
    ta: { q: 'Change into indirect speech: The captain said to his men, “Hold your fire.”', options: ['The captain ordered his men to hold their fire.', 'The captain ordered his men to hold your fire.', 'The captain said his men that hold their fire.', 'The captain requested his men that they hold their fire.'], explanation: 'அதிகாரியின் கட்டளை → ordered + நபர் + to-infinitive; “your” → “their”.' },
  },
  {
    difficulty: 'hard', source: 'Unit 2 Supplementary – The Fun They Had, p. 45', answer: 0,
    en: { q: 'Change into indirect speech: Margie said to Tommy, “Can I read the book some more with you after school?”', options: ['Margie asked Tommy if she could read the book some more with him after school.', 'Margie asked Tommy can I read the book some more with you after school.', 'Margie asked Tommy if could she read the book some more with him after school.', 'Margie told Tommy that she can read the book some more with him after school.'], explanation: 'Yes/no question → “asked if”; “I” → “she”, “you” → “him”; “can” → “could”; statement order (she could read).' },
    ta: { q: 'Change into indirect speech: Margie said to Tommy, “Can I read the book some more with you after school?”', options: ['Margie asked Tommy if she could read the book some more with him after school.', 'Margie asked Tommy can I read the book some more with you after school.', 'Margie asked Tommy if could she read the book some more with him after school.', 'Margie told Tommy that she can read the book some more with him after school.'], explanation: 'ஆம்/இல்லை கேள்வி → “asked if”; “I” → “she”, “you” → “him”; “can” → “could”; வாக்கிய வரிசை (she could read).' },
  },
  {
    difficulty: 'hard', source: 'Unit 3 Drama – Old Man River, p. 51', answer: 0,
    en: { q: 'Change into indirect speech: Jim said, “I’ve run every step of the way from school.”', options: ['Jim said that he had run every step of the way from school.', 'Jim said that he has run every step of the way from school.', 'Jim said that I had run every step of the way from school.', 'Jim said that he had ran every step of the way from school.'], explanation: '“I” → “he”; present perfect “have run” → past perfect “had run”.' },
    ta: { q: 'Change into indirect speech: Jim said, “I’ve run every step of the way from school.”', options: ['Jim said that he had run every step of the way from school.', 'Jim said that he has run every step of the way from school.', 'Jim said that I had run every step of the way from school.', 'Jim said that he had ran every step of the way from school.'], explanation: '“I” → “he”; Present perfect “have run” → Past perfect “had run”.' },
  },
  {
    difficulty: 'hard', source: 'Unit 7 Supplementary – The Christmas Truce, p. 199', answer: 0,
    en: { q: 'Change into indirect speech: An older German soldier said to me, “Why cannot we have peace and all go home?”', options: ['An older German soldier asked me why they could not have peace and all go home.', 'An older German soldier asked me why cannot we have peace and all go home.', 'An older German soldier asked me why could not they have peace and all go home.', 'An older German soldier told me that why we cannot have peace.'], explanation: '“Said to” → “asked”; “we” → “they”; “cannot” → “could not”; statement order after “why”.' },
    ta: { q: 'Change into indirect speech: An older German soldier said to me, “Why cannot we have peace and all go home?”', options: ['An older German soldier asked me why they could not have peace and all go home.', 'An older German soldier asked me why cannot we have peace and all go home.', 'An older German soldier asked me why could not they have peace and all go home.', 'An older German soldier told me that why we cannot have peace.'], explanation: '“said to” → “asked”; “we” → “they”; “cannot” → “could not”; “why” க்குப் பின் வாக்கிய வரிசை.' },
  },
  {
    difficulty: 'hard', source: 'Unit 7 Grammar – Reporting Questions, p. 186', answer: 0,
    en: { q: 'Spot the correctly reported question.', options: ['He asked me where I was going.', 'He asked me where was I going.', 'He asked me that where I was going.', 'He asked me where I was going?'], explanation: 'In a reported question, the subject comes before the verb (I was), no “that” is added, and there is no question mark.' },
    ta: { q: 'Spot the correctly reported question.', options: ['He asked me where I was going.', 'He asked me where was I going.', 'He asked me that where I was going.', 'He asked me where I was going?'], explanation: 'அயற்கூற்றுக் கேள்வியில் எழுவாய் வினைக்கு முன் வரும் (I was); “that” சேர்க்கக் கூடாது; கேள்விக்குறி இல்லை.' },
  },
  {
    difficulty: 'hard', source: 'Unit 1 Prose – Learning the Game, p. 4', answer: 0,
    en: { q: 'Change into indirect speech: Achrekar Sir said to Sachin, “Don’t waste your time playing insane games with these kids.”', options: ['Achrekar Sir told Sachin not to waste his time playing insane games with those kids.', 'Achrekar Sir told Sachin don’t waste your time playing insane games with these kids.', 'Achrekar Sir told Sachin not to waste your time playing insane games with these kids.', 'Achrekar Sir said Sachin that he doesn’t waste his time with those kids.'], explanation: 'Negative imperative → tell + person + not + to-infinitive; “your” → “his”; “these” → “those”.' },
    ta: { q: 'Change into indirect speech: Achrekar Sir said to Sachin, “Don’t waste your time playing insane games with these kids.”', options: ['Achrekar Sir told Sachin not to waste his time playing insane games with those kids.', 'Achrekar Sir told Sachin don’t waste your time playing insane games with these kids.', 'Achrekar Sir told Sachin not to waste your time playing insane games with these kids.', 'Achrekar Sir said Sachin that he doesn’t waste his time with those kids.'], explanation: 'எதிர்மறைக் கட்டளை → told + நபர் + not + to-infinitive; “your” → “his”; “these” → “those”.' },
  },
  {
    difficulty: 'hard', source: 'Unit 7 Grammar – Reporting Statements, p. 186', answer: 0,
    en: { q: 'Change into indirect speech: The teacher said, “The Earth revolves around the Sun.”', options: ['The teacher said that the Earth revolves around the Sun.', 'The teacher said that the Earth revolved around the Sun.', 'The teacher said that the Earth had revolved around the Sun.', 'The teacher asked that the Earth revolves around the Sun.'], explanation: 'A universal truth does not change its tense in indirect speech, so the simple present “revolves” stays.' },
    ta: { q: 'Change into indirect speech: The teacher said, “The Earth revolves around the Sun.”', options: ['The teacher said that the Earth revolves around the Sun.', 'The teacher said that the Earth revolved around the Sun.', 'The teacher said that the Earth had revolved around the Sun.', 'The teacher asked that the Earth revolves around the Sun.'], explanation: 'அனைவருக்கும் பொருந்தும் உண்மை (universal truth) அயற்கூற்றில் காலம் மாறாது; “revolves” அப்படியே இருக்கும்.' },
  },
];
