// Tamil Nadu State Board, 9th English – Grammar: Active and Passive Voice.
// Questions come from the textbook's grammar exercises on voice (Unit 6, pp. 160–163)
// and lesson sentences. source = unit and grammar section / lesson and printed page.

import { BankQuestion } from './types';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Unit 6 Grammar – Active Voice and Passive Voice, p. 160', answer: 0,
    en: { q: '“The team leader presented the report.” This sentence is in the', options: ['active voice', 'passive voice', 'reported speech', 'imperative mood'], explanation: 'The subject (the team leader) is the doer of the action, so the sentence is in the active voice.' },
    ta: { q: '“The team leader presented the report.” This sentence is in the', options: ['active voice', 'passive voice', 'reported speech', 'imperative mood'], explanation: 'எழுவாய் (the team leader) தான் செயலைச் செய்பவர்; எனவே இது Active voice (செய்வினை).' },
  },
  {
    difficulty: 'easy', source: 'Unit 6 Grammar – Active Voice and Passive Voice, p. 160', answer: 0,
    en: { q: 'In a passive voice sentence, the subject', options: ['is not the doer of the action', 'is always the doer of the action', 'is always a pronoun', 'is left out every time'], explanation: 'In the passive voice the subject receives the action, e.g. “The report was presented by the team leader.”' },
    ta: { q: 'In a passive voice sentence, the subject', options: ['is not the doer of the action', 'is always the doer of the action', 'is always a pronoun', 'is left out every time'], explanation: 'Passive voice (செயப்பாட்டுவினை) இல் எழுவாய் செயலைச் செய்பவர் அல்ல; செயலை ஏற்பவர். எ.கா. “The report was presented by the team leader.”' },
  },
  {
    difficulty: 'easy', source: 'Unit 6 Grammar – Voice (tense table), p. 161', answer: 0,
    en: { q: 'Change into passive voice: He makes coffee.', options: ['Coffee is made by him.', 'Coffee was made by him.', 'Coffee is making by him.', 'Coffee made by he.'], explanation: 'Simple present passive = am/is/are + past participle. The object “him” replaces “he”.' },
    ta: { q: 'Change into passive voice: He makes coffee.', options: ['Coffee is made by him.', 'Coffee was made by him.', 'Coffee is making by him.', 'Coffee made by he.'], explanation: 'Simple present passive = am/is/are + past participle. “he” → “by him”.' },
  },
  {
    difficulty: 'easy', source: 'Unit 6 Grammar – Voice (tense table), p. 161', answer: 0,
    en: { q: 'Change into passive voice: He made coffee.', options: ['Coffee was made by him.', 'Coffee is made by him.', 'Coffee has been made by him.', 'Coffee was make by him.'], explanation: 'Simple past passive = was/were + past participle: Coffee was made by him.' },
    ta: { q: 'Change into passive voice: He made coffee.', options: ['Coffee was made by him.', 'Coffee is made by him.', 'Coffee has been made by him.', 'Coffee was make by him.'], explanation: 'Simple past செய்வினை “made” → செயப்பாட்டுவினையில் was/were + past participle: Coffee was made by him.' },
  },
  {
    difficulty: 'easy', source: 'Unit 6 Grammar – Voice (tense table), p. 161', answer: 0,
    en: { q: 'Change into passive voice: He will make coffee.', options: ['Coffee will be made by him.', 'Coffee will made by him.', 'Coffee will been made by him.', 'Coffee would make by him.'], explanation: 'Simple future passive = will/shall + be + past participle: will be made.' },
    ta: { q: 'Change into passive voice: He will make coffee.', options: ['Coffee will be made by him.', 'Coffee will made by him.', 'Coffee will been made by him.', 'Coffee would make by him.'], explanation: 'எதிர்காலச் செயப்பாட்டுவினை = will/shall + be + past participle: will be made.' },
  },
  {
    difficulty: 'easy', source: 'Unit 6 Grammar – Voice, Exercise B1, p. 161', answer: 0,
    en: { q: 'Choose the passive form: She will not recognize us. / We _____ by her.', options: ['will not be recognized', 'will not recognize', 'will not being recognized', 'will not recognized'], explanation: 'Future passive: will + not + be + past participle → will not be recognized.' },
    ta: { q: 'Choose the passive form: She will not recognize us. / We _____ by her.', options: ['will not be recognized', 'will not recognize', 'will not being recognized', 'will not recognized'], explanation: 'எதிர்கால Passive: will + not + be + past participle → will not be recognized.' },
  },
  {
    difficulty: 'easy', source: 'Unit 6 Grammar – Voice, Exercise B7, p. 162', answer: 0,
    en: { q: 'Choose the passive form: They speak English in New Zealand. / English _____ in New Zealand.', options: ['is spoken', 'is speaking', 'is being spoken', 'was spoke'], explanation: 'Simple present active (speak) → simple present passive (is spoken). The doer “they” is general, so it is left out.' },
    ta: { q: 'Choose the passive form: They speak English in New Zealand. / English _____ in New Zealand.', options: ['is spoken', 'is speaking', 'is being spoken', 'was spoke'], explanation: 'Simple present (speak) → Passive (is spoken). “they” பொதுவானவர்கள் என்பதால் by them விடப்படுகிறது.' },
  },
  {
    difficulty: 'easy', source: 'Unit 6 Grammar – Voice, Exercise B8, p. 162', answer: 0,
    en: { q: 'Choose the passive form: His attitude shocked me. / I _____ by his attitude.', options: ['was shocked', 'had shocked', 'had been shocked', 'am shocking'], explanation: 'Simple past active (shocked) → was + past participle. “Me” becomes the subject “I”: I was shocked.' },
    ta: { q: 'Choose the passive form: His attitude shocked me. / I _____ by his attitude.', options: ['was shocked', 'had shocked', 'had been shocked', 'am shocking'], explanation: 'Simple past (shocked) → was + past participle. “me” → எழுவாய் “I”: I was shocked.' },
  },
  {
    difficulty: 'easy', source: 'Unit 6 Grammar – Voice, Exercise B10, p. 162', answer: 0,
    en: { q: 'Choose the passive form: Her silence worries me. / I _____ her silence.', options: ['am worried by', 'am worrying by', 'have worried by', 'was worry by'], explanation: 'Simple present active → am/is/are + past participle. With “I”: I am worried by her silence.' },
    ta: { q: 'Choose the passive form: Her silence worries me. / I _____ her silence.', options: ['am worried by', 'am worrying by', 'have worried by', 'was worry by'], explanation: 'Simple present → am/is/are + past participle. “I” உடன்: I am worried by her silence.' },
  },
  {
    difficulty: 'easy', source: 'Unit 6 Grammar – Voice, Exercise C2, p. 162', answer: 0,
    en: { q: 'Change into passive voice: Mother made a cake yesterday.', options: ['A cake was made by mother yesterday.', 'A cake is made by mother yesterday.', 'A cake was making by mother yesterday.', 'Mother was made a cake yesterday.'], explanation: 'The object “a cake” becomes the subject, and the simple past “made” becomes “was made”.' },
    ta: { q: 'Change into passive voice: Mother made a cake yesterday.', options: ['A cake was made by mother yesterday.', 'A cake is made by mother yesterday.', 'A cake was making by mother yesterday.', 'Mother was made a cake yesterday.'], explanation: 'செயப்படுபொருள் “a cake” எழுவாயாகிறது; “made” (Simple past) → “was made”.' },
  },
  {
    difficulty: 'easy', source: 'Unit 6 Grammar – Voice (uses of the passive), p. 161', answer: 0,
    en: { q: 'In “My bike was stolen yesterday”, the passive voice is used because', options: ['we do not know who the doer is', 'the doer is very famous', 'it is a newspaper headline', 'it is a command'], explanation: 'The book says we use the passive when we do not know who the doer is – we do not know who stole the bike.' },
    ta: { q: 'In “My bike was stolen yesterday”, the passive voice is used because', options: ['we do not know who the doer is', 'the doer is very famous', 'it is a newspaper headline', 'it is a command'], explanation: 'செயலைச் செய்தவர் யார் எனத் தெரியாதபோது Passive பயன்படும் என நூல் கூறுகிறது – பைக்கைத் திருடியவர் யார் எனத் தெரியவில்லை.' },
  },
  {
    difficulty: 'easy', source: 'Unit 6 Grammar – Imperatives in Passive, p. 162', answer: 0,
    en: { q: 'Change into passive voice: Open the window.', options: ['Let the window be opened.', 'Let the window opened.', 'The window is opening.', 'Let the window be open by.'], explanation: 'Positive imperative → Let + object + be + past participle: Let the window be opened.' },
    ta: { q: 'Change into passive voice: Open the window.', options: ['Let the window be opened.', 'Let the window opened.', 'The window is opening.', 'Let the window be open by.'], explanation: 'கட்டளை வாக்கியம் (உடன்பாடு) → Let + object + be + past participle: Let the window be opened.' },
  },
  {
    difficulty: 'easy', source: 'Unit 4 Prose – Seventeen Oranges (Vocabulary E), p. 94', answer: 0,
    en: { q: 'Change into passive voice: Pongo locked the narrator inside the cabin.', options: ['The narrator was locked inside the cabin by Pongo.', 'The narrator is locked inside the cabin by Pongo.', 'The narrator locked inside the cabin by Pongo.', 'Pongo was locked inside the cabin by the narrator.'], explanation: 'Simple past “locked” → “was locked”. The object (the narrator) becomes the subject and the doer goes after “by”.' },
    ta: { q: 'Change into passive voice: Pongo locked the narrator inside the cabin.', options: ['The narrator was locked inside the cabin by Pongo.', 'The narrator is locked inside the cabin by Pongo.', 'The narrator locked inside the cabin by Pongo.', 'Pongo was locked inside the cabin by the narrator.'], explanation: 'Simple past “locked” → “was locked”. செயப்படுபொருள் (the narrator) எழுவாயாகிறது; செய்தவர் “by” க்குப் பின் வருகிறார்.' },
  },
  {
    difficulty: 'easy', source: 'Unit 6 Grammar – Voice (tense table), p. 161', answer: 0,
    en: { q: 'Which form of the main verb is always used in a passive voice sentence?', options: ['past participle', 'present participle (-ing)', 'base form', 'simple past'], explanation: 'Every passive is a form of “be” + the past participle (made, written, spoken).' },
    ta: { q: 'Which form of the main verb is always used in a passive voice sentence?', options: ['past participle', 'present participle (-ing)', 'base form', 'simple past'], explanation: 'ஒவ்வொரு Passive வாக்கியமும் “be” வடிவம் + past participle (made, written, spoken) கொண்டிருக்கும்.' },
  },

  // ------------------------------------------------------------------ Medium
  {
    difficulty: 'medium', source: 'Unit 6 Grammar – Voice (tense table), p. 161', answer: 0,
    en: { q: 'Change into passive voice: He is making coffee.', options: ['Coffee is being made by him.', 'Coffee is made by him.', 'Coffee has been made by him.', 'Coffee is been making by him.'], explanation: 'Present continuous passive = am/is/are + being + past participle: is being made.' },
    ta: { q: 'Change into passive voice: He is making coffee.', options: ['Coffee is being made by him.', 'Coffee is made by him.', 'Coffee has been made by him.', 'Coffee is been making by him.'], explanation: 'நிகழ்காலத் தொடர்வினையின் செயப்பாட்டுவினை = am/is/are + being + past participle: is being made.' },
  },
  {
    difficulty: 'medium', source: 'Unit 6 Grammar – Voice (tense table), p. 161', answer: 0,
    en: { q: 'Change into passive voice: He has made coffee.', options: ['Coffee has been made by him.', 'Coffee has made by him.', 'Coffee had been made by him.', 'Coffee is been made by him.'], explanation: 'Present perfect passive = has/have + been + past participle: has been made.' },
    ta: { q: 'Change into passive voice: He has made coffee.', options: ['Coffee has been made by him.', 'Coffee has made by him.', 'Coffee had been made by him.', 'Coffee is been made by him.'], explanation: 'நிகழ்கால முற்றுவினையின் செயப்பாட்டுவினை = has/have + been + past participle: has been made.' },
  },
  {
    difficulty: 'medium', source: 'Unit 6 Grammar – Voice (tense table), p. 161', answer: 0,
    en: { q: 'Change into passive voice: He was making coffee.', options: ['Coffee was being made by him.', 'Coffee was made by him.', 'Coffee had been made by him.', 'Coffee was been making by him.'], explanation: 'Past continuous passive = was/were + being + past participle: was being made.' },
    ta: { q: 'Change into passive voice: He was making coffee.', options: ['Coffee was being made by him.', 'Coffee was made by him.', 'Coffee had been made by him.', 'Coffee was been making by him.'], explanation: 'இறந்தகாலத் தொடர்வினையின் செயப்பாட்டுவினை = was/were + being + past participle: was being made.' },
  },
  {
    difficulty: 'medium', source: 'Unit 6 Grammar – Voice (tense table), p. 161', answer: 0,
    en: { q: 'Change into passive voice: He had made coffee.', options: ['Coffee had been made by him.', 'Coffee has been made by him.', 'Coffee had made by him.', 'Coffee was been made by him.'], explanation: 'Past perfect passive = had + been + past participle: had been made.' },
    ta: { q: 'Change into passive voice: He had made coffee.', options: ['Coffee had been made by him.', 'Coffee has been made by him.', 'Coffee had made by him.', 'Coffee was been made by him.'], explanation: 'இறந்தகால முற்றுவினையின் செயப்பாட்டுவினை = had + been + past participle: had been made.' },
  },
  {
    difficulty: 'medium', source: 'Unit 6 Grammar – Voice, Exercise B2, p. 161', answer: 0,
    en: { q: 'Choose the passive form: They didn’t invite me, but I went anyway. / I _____ but I went anyway.', options: ['wasn’t invited', 'wasn’t inviting', 'wasn’t being invited', 'didn’t invited'], explanation: 'Negative simple past “didn’t invite” → was not + past participle: I wasn’t invited.' },
    ta: { q: 'Choose the passive form: They didn’t invite me, but I went anyway. / I _____ but I went anyway.', options: ['wasn’t invited', 'wasn’t inviting', 'wasn’t being invited', 'didn’t invited'], explanation: 'எதிர்மறை Simple past “didn’t invite” → was not + past participle: I wasn’t invited.' },
  },
  {
    difficulty: 'medium', source: 'Unit 6 Grammar – Voice, Exercise B3, p. 161', answer: 0,
    en: { q: 'Choose the passive form: They broke up the table for firewood. / The table _____ up for firewood.', options: ['was broken', 'broke', 'had broken', 'was breaking'], explanation: 'Simple past “broke” → was + past participle “broken”: The table was broken up.' },
    ta: { q: 'Choose the passive form: They broke up the table for firewood. / The table _____ up for firewood.', options: ['was broken', 'broke', 'had broken', 'was breaking'], explanation: 'இறந்தகால “broke” → செயப்பாட்டுவினையில் was + past participle “broken”: The table was broken up.' },
  },
  {
    difficulty: 'medium', source: 'Unit 6 Grammar – Voice, Exercise B4, p. 161', answer: 0,
    en: { q: 'Choose the passive form: She has won the first prize. / The first prize _____ by her.', options: ['has been won', 'has won', 'had been won', 'is winning'], explanation: 'Present perfect “has won” → has + been + past participle: has been won.' },
    ta: { q: 'Choose the passive form: She has won the first prize. / The first prize _____ by her.', options: ['has been won', 'has won', 'had been won', 'is winning'], explanation: 'நிகழ்கால முற்றுவினை “has won” → செயப்பாட்டுவினையில் has + been + past participle: has been won.' },
  },
  {
    difficulty: 'medium', source: 'Unit 6 Grammar – Voice, Exercise B5, p. 162', answer: 0,
    en: { q: 'Choose the passive form: A friend of mine is repairing the car. / The car _____ by a friend of mine.', options: ['is being repaired', 'is repaired', 'is repairing', 'has repaired'], explanation: 'Present continuous “is repairing” → is + being + past participle: is being repaired.' },
    ta: { q: 'Choose the passive form: A friend of mine is repairing the car. / The car _____ by a friend of mine.', options: ['is being repaired', 'is repaired', 'is repairing', 'has repaired'], explanation: 'நிகழ்காலத் தொடர்வினை “is repairing” → செயப்பாட்டுவினையில் is + being + past participle: is being repaired.' },
  },
  {
    difficulty: 'medium', source: 'Unit 6 Grammar – Voice, Exercise B6, p. 162', answer: 0,
    en: { q: 'Choose the passive form: Begin the work tomorrow. / Let the work _____ tomorrow.', options: ['be begun', 'begin', 'is beginning', 'be began'], explanation: 'Imperative → Let + object + be + past participle. The past participle of “begin” is “begun” (begin – began – begun).' },
    ta: { q: 'Choose the passive form: Begin the work tomorrow. / Let the work _____ tomorrow.', options: ['be begun', 'begin', 'is beginning', 'be began'], explanation: 'கட்டளை → Let + object + be + past participle. “begin” இன் past participle “begun” (begin – began – begun).' },
  },
  {
    difficulty: 'medium', source: 'Unit 6 Grammar – Voice, Exercise B9, p. 162', answer: 0,
    en: { q: 'Choose the passive form: She had already sent the parcel. / The parcel _____ by her.', options: ['had already been sent', 'has already been sent', 'was already sent', 'had already sent'], explanation: 'Past perfect “had sent” → had + been + past participle: had already been sent.' },
    ta: { q: 'Choose the passive form: She had already sent the parcel. / The parcel _____ by her.', options: ['had already been sent', 'has already been sent', 'was already sent', 'had already sent'], explanation: 'இறந்தகால முற்றுவினை “had sent” → செயப்பாட்டுவினையில் had + been + past participle: had already been sent.' },
  },
  {
    difficulty: 'medium', source: 'Unit 6 Grammar – Voice, Exercise C1, p. 162', answer: 0,
    en: { q: 'Change into passive voice: I will never forget this experience.', options: ['This experience will never be forgotten by me.', 'This experience will never forgotten by me.', 'This experience will never be forgot by me.', 'This experience is never forgotten by I.'], explanation: 'Future passive: will + never + be + past participle (forgotten). “I” becomes “by me”.' },
    ta: { q: 'Change into passive voice: I will never forget this experience.', options: ['This experience will never be forgotten by me.', 'This experience will never forgotten by me.', 'This experience will never be forgot by me.', 'This experience is never forgotten by I.'], explanation: 'எதிர்கால Passive: will + never + be + past participle (forgotten). “I” → “by me”.' },
  },
  {
    difficulty: 'medium', source: 'Unit 6 Grammar – Voice, Exercise C3, p. 162', answer: 0,
    en: { q: 'Change into passive voice: Have you finished the report?', options: ['Has the report been finished by you?', 'Have the report been finished by you?', 'Has the report finished by you?', 'Is the report been finished by you?'], explanation: 'The new subject “the report” is singular, so “have” becomes “has”: Has the report been finished by you?' },
    ta: { q: 'Change into passive voice: Have you finished the report?', options: ['Has the report been finished by you?', 'Have the report been finished by you?', 'Has the report finished by you?', 'Is the report been finished by you?'], explanation: 'புதிய எழுவாய் “the report” ஒருமை; எனவே “have” → “has”: Has the report been finished by you?' },
  },
  {
    difficulty: 'medium', source: 'Unit 6 Grammar – Voice, Exercise C4, p. 162', answer: 0,
    en: { q: 'Change into passive voice: The tiger was chasing the deer.', options: ['The deer was being chased by the tiger.', 'The deer was chased by the tiger.', 'The deer is being chased by the tiger.', 'The tiger was being chased by the deer.'], explanation: 'Past continuous → was + being + past participle. Keep the meaning: the deer is the one chased.' },
    ta: { q: 'Change into passive voice: The tiger was chasing the deer.', options: ['The deer was being chased by the tiger.', 'The deer was chased by the tiger.', 'The deer is being chased by the tiger.', 'The tiger was being chased by the deer.'], explanation: 'Past continuous → was + being + past participle. பொருள் மாறக்கூடாது: துரத்தப்படுவது மான்.' },
  },
  {
    difficulty: 'medium', source: 'Unit 6 Grammar – Voice, Exercise C5, p. 162', answer: 0,
    en: { q: 'Change into passive voice: She has written a novel.', options: ['A novel has been written by her.', 'A novel had been written by her.', 'A novel has written by her.', 'A novel has been wrote by her.'], explanation: 'Present perfect → has + been + past participle (written). “She” becomes “by her”.' },
    ta: { q: 'Change into passive voice: She has written a novel.', options: ['A novel has been written by her.', 'A novel had been written by her.', 'A novel has written by her.', 'A novel has been wrote by her.'], explanation: 'Present perfect → has + been + past participle (written). “She” → “by her”.' },
  },
  {
    difficulty: 'medium', source: 'Unit 6 Grammar – Voice, Exercise D1, p. 163', answer: 0,
    en: { q: 'Change into passive voice: Stanley will inform you later.', options: ['You will be informed later by Stanley.', 'You will informed later by Stanley.', 'You would be inform later by Stanley.', 'Stanley will be informed later by you.'], explanation: 'Future passive: will + be + past participle. The object “you” becomes the subject.' },
    ta: { q: 'Change into passive voice: Stanley will inform you later.', options: ['You will be informed later by Stanley.', 'You will informed later by Stanley.', 'You would be inform later by Stanley.', 'Stanley will be informed later by you.'], explanation: 'எதிர்கால Passive: will + be + past participle. செயப்படுபொருள் “you” எழுவாயாகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Unit 6 Grammar – Voice, Exercise D2, p. 163', answer: 0,
    en: { q: 'Change into passive voice: People speak Portuguese in Brazil.', options: ['Portuguese is spoken in Brazil.', 'Portuguese was spoken in Brazil.', 'Portuguese is speaking in Brazil.', 'Portuguese are spoken by people in Brazil.'], explanation: 'Simple present → is + past participle. A general doer like “people” is usually left out.' },
    ta: { q: 'Change into passive voice: People speak Portuguese in Brazil.', options: ['Portuguese is spoken in Brazil.', 'Portuguese was spoken in Brazil.', 'Portuguese is speaking in Brazil.', 'Portuguese are spoken by people in Brazil.'], explanation: 'Simple present → is + past participle. “people” போன்ற பொதுவான செய்பவர் பொதுவாக விடப்படுவர்.' },
  },

  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Unit 6 Grammar – Voice, Exercise D3, p. 163', answer: 0,
    en: { q: 'Change into passive voice: My grandfather built this house in 1943.', options: ['This house was built by my grandfather in 1943.', 'This house is built by my grandfather in 1943.', 'This house has been built by my grandfather in 1943.', 'This house was build by my grandfather in 1943.'], explanation: '“In 1943” is a finished past time, so simple past passive: was + built (past participle of build).' },
    ta: { q: 'Change into passive voice: My grandfather built this house in 1943.', options: ['This house was built by my grandfather in 1943.', 'This house is built by my grandfather in 1943.', 'This house has been built by my grandfather in 1943.', 'This house was build by my grandfather in 1943.'], explanation: '“in 1943” – முடிந்த கடந்த காலம்; Simple past passive: was + built (build இன் past participle).' },
  },
  {
    difficulty: 'hard', source: 'Unit 6 Grammar – Voice, Exercise D4, p. 163', answer: 0,
    en: { q: 'Change into passive voice: Do not hurt the animals.', options: ['Let the animals not be hurt.', 'Let not the animals hurt.', 'The animals are not hurting.', 'Let the animals be not hurting.'], explanation: 'Negative imperative → Let + object + not + be + past participle: Let the animals not be hurt.' },
    ta: { q: 'Change into passive voice: Do not hurt the animals.', options: ['Let the animals not be hurt.', 'Let not the animals hurt.', 'The animals are not hurting.', 'Let the animals be not hurting.'], explanation: 'எதிர்மறைக் கட்டளை → Let + object + not + be + past participle: Let the animals not be hurt.' },
  },
  {
    difficulty: 'hard', source: 'Unit 6 Grammar – Voice, Exercise D5, p. 163', answer: 0,
    en: { q: 'Change into passive voice: You must not drop litter in the streets.', options: ['Litter must not be dropped in the streets.', 'Litter must not dropped in the streets.', 'Litter must not been dropped in the streets.', 'Litter was not dropped in the streets.'], explanation: 'With a modal, the passive is modal + be + past participle: must not be dropped.' },
    ta: { q: 'Change into passive voice: You must not drop litter in the streets.', options: ['Litter must not be dropped in the streets.', 'Litter must not dropped in the streets.', 'Litter must not been dropped in the streets.', 'Litter was not dropped in the streets.'], explanation: 'Modal உடன் Passive = modal + be + past participle: must not be dropped.' },
  },
  {
    difficulty: 'hard', source: 'Unit 6 Grammar – Voice, Exercise D6, p. 163', answer: 0,
    en: { q: 'Change into passive voice: Carry it home.', options: ['Let it be carried home.', 'Let it carried home.', 'It is carrying home.', 'Let it be carry home.'], explanation: 'Positive imperative → Let + object + be + past participle: Let it be carried home.' },
    ta: { q: 'Change into passive voice: Carry it home.', options: ['Let it be carried home.', 'Let it carried home.', 'It is carrying home.', 'Let it be carry home.'], explanation: 'உடன்பாட்டுக் கட்டளை → Let + object + be + past participle: Let it be carried home.' },
  },
  {
    difficulty: 'hard', source: 'Unit 6 Grammar – Voice, Exercise D7, p. 163', answer: 0,
    en: { q: 'Change into passive voice: They are decorating the wall.', options: ['The wall is being decorated by them.', 'The wall is decorated by them.', 'The wall are being decorated by them.', 'The wall has been decorating by them.'], explanation: 'Present continuous → is + being + past participle. “The wall” is singular, so “is”.' },
    ta: { q: 'Change into passive voice: They are decorating the wall.', options: ['The wall is being decorated by them.', 'The wall is decorated by them.', 'The wall are being decorated by them.', 'The wall has been decorating by them.'], explanation: 'Present continuous → is + being + past participle. “The wall” ஒருமை; எனவே “is”.' },
  },
  {
    difficulty: 'hard', source: 'Unit 6 Grammar – Voice, Exercise D8, p. 163', answer: 0,
    en: { q: 'Change into passive voice: He has already mended the TV set.', options: ['The TV set has already been mended by him.', 'The TV set had already been mended by him.', 'The TV set has already mended by him.', 'The TV set is already being mended by him.'], explanation: 'Present perfect → has + been + past participle; “already” stays after “has”.' },
    ta: { q: 'Change into passive voice: He has already mended the TV set.', options: ['The TV set has already been mended by him.', 'The TV set had already been mended by him.', 'The TV set has already mended by him.', 'The TV set is already being mended by him.'], explanation: 'Present perfect → has + been + past participle; “already” என்பது “has” க்குப் பின் இருக்கும்.' },
  },
  {
    difficulty: 'hard', source: 'Unit 6 Grammar – Imperatives in Passive, p. 163', answer: 0,
    en: { q: 'Change into passive voice (request): Help me.', options: ['You are requested to help me.', 'You are warned to help me.', 'Let me be helped by you to.', 'I am helping by you.'], explanation: 'For a request, the book gives the passive “You are requested to help me.” “Warned” is used for warnings, not requests.' },
    ta: { q: 'Change into passive voice (request): Help me.', options: ['You are requested to help me.', 'You are warned to help me.', 'Let me be helped by you to.', 'I am helping by you.'], explanation: 'வேண்டுகோளுக்கு நூல் தரும் Passive: “You are requested to help me.” “warned” எச்சரிக்கைக்கு மட்டும்.' },
  },
  {
    difficulty: 'hard', source: 'Unit 6 Grammar – Imperatives in Passive, p. 163', answer: 0,
    en: { q: 'Change into passive voice (warning): Don’t touch it.', options: ['You are warned not to touch it.', 'You are requested to touch it.', 'Let it be touched.', 'It is not touching by you.'], explanation: 'A negative command that warns becomes “You are warned not to …” in the passive, as shown in the book.' },
    ta: { q: 'Change into passive voice (warning): Don’t touch it.', options: ['You are warned not to touch it.', 'You are requested to touch it.', 'Let it be touched.', 'It is not touching by you.'], explanation: 'எச்சரிக்கும் எதிர்மறைக் கட்டளை Passive இல் “You are warned not to …” ஆகும் என நூல் காட்டுகிறது.' },
  },
  {
    difficulty: 'hard', source: 'Unit 6 Grammar – Voice (tense table), p. 161', answer: 0,
    en: { q: 'Change into passive voice: He will have made coffee.', options: ['Coffee will have been made by him.', 'Coffee will be made by him.', 'Coffee will have made by him.', 'Coffee will been made by him.'], explanation: 'Future perfect passive = will + have + been + past participle: will have been made.' },
    ta: { q: 'Change into passive voice: He will have made coffee.', options: ['Coffee will have been made by him.', 'Coffee will be made by him.', 'Coffee will have made by him.', 'Coffee will been made by him.'], explanation: 'எதிர்கால முற்றுவினையின் செயப்பாட்டுவினை = will + have + been + past participle: will have been made.' },
  },
  {
    difficulty: 'hard', source: 'Unit 3 Supplementary – Earthquake, p. 83', answer: 0,
    en: { q: 'Change into passive voice: The soldiers had set up a makeshift camp.', options: ['A makeshift camp had been set up by the soldiers.', 'A makeshift camp has been set up by the soldiers.', 'A makeshift camp was setting up by the soldiers.', 'A makeshift camp had set up by the soldiers.'], explanation: 'Past perfect “had set up” → had + been + past participle (set). The phrasal verb “set up” stays together.' },
    ta: { q: 'Change into passive voice: The soldiers had set up a makeshift camp.', options: ['A makeshift camp had been set up by the soldiers.', 'A makeshift camp has been set up by the soldiers.', 'A makeshift camp was setting up by the soldiers.', 'A makeshift camp had set up by the soldiers.'], explanation: 'Past perfect “had set up” → had + been + past participle (set). “set up” என்ற phrasal verb பிரியாமல் வரும்.' },
  },
  {
    difficulty: 'hard', source: 'Unit 6 Grammar – Voice (uses of the passive), p. 161', answer: 0,
    en: { q: 'In the newspaper headline “20 sportsmen felicitated by PM”, which part of the passive verb has been left out?', options: ['a form of the verb “be” (are)', 'the preposition “by”', 'the past participle', 'the doer of the action'], explanation: 'The book says that in headlines the “be” verb is omitted to keep the language short: “20 sportsmen (are) felicitated by PM.”' },
    ta: { q: 'In the newspaper headline “20 sportsmen felicitated by PM”, which part of the passive verb has been left out?', options: ['a form of the verb “be” (are)', 'the preposition “by”', 'the past participle', 'the doer of the action'], explanation: 'தலைப்புச் செய்திகளில் சுருக்கத்திற்காக “be” வினை விடப்படும் என நூல் கூறுகிறது: “20 sportsmen (are) felicitated by PM.”' },
  },
];
