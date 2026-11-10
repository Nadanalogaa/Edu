// Tamil Nadu State Board, 9th English – Grammar: Articles and Prepositions.
// Questions come from the textbook's grammar exercises on prepositions (Unit 1, pp. 12–16),
// prepositional phrases (Unit 3, p. 68) and determiners/articles (Unit 7, pp. 184–185).
// source = unit and grammar section / lesson and printed page.

import { BankQuestion } from './types';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Unit 1 Grammar – Prepositions, Exercise A1, p. 14', answer: 0,
    en: { q: 'Choose the correct preposition: We have been living in Chennai _____ eight years.', options: ['for', 'since', 'from', 'at'], explanation: '“For” is used with a length of time (eight years). “Since” is used with a starting point (since 2015).' },
    ta: { q: 'Choose the correct preposition: We have been living in Chennai _____ eight years.', options: ['for', 'since', 'from', 'at'], explanation: 'கால அளவுடன் (eight years) “for” வரும். தொடக்க நேரத்துடன் (since 2015) “since” வரும்.' },
  },
  {
    difficulty: 'easy', source: 'Unit 1 Grammar – Prepositions, Exercise A2, p. 14', answer: 0,
    en: { q: 'Choose the correct preposition: Abdul has taken _____ his father.', options: ['after', 'at', 'on', 'over'], explanation: '“Take after” someone means to look or behave like an older family member. Abdul is like his father.' },
    ta: { q: 'Choose the correct preposition: Abdul has taken _____ his father.', options: ['after', 'at', 'on', 'over'], explanation: '“take after” = குடும்பத்தில் மூத்தவரைப் போல் தோற்றம்/நடத்தை கொண்டிருத்தல். அப்துல் அப்பாவைப் போல் இருக்கிறான்.' },
  },
  {
    difficulty: 'easy', source: 'Unit 1 Grammar – Prepositions, Exercise A3, p. 14', answer: 0,
    en: { q: 'Choose the correct preposition: Vimal generally goes to his workplace _____ bus.', options: ['by', 'on', 'in', 'with'], explanation: 'For means of transport without an article we use “by”: by bus, by train, by car.' },
    ta: { q: 'Choose the correct preposition: Vimal generally goes to his workplace _____ bus.', options: ['by', 'on', 'in', 'with'], explanation: 'பயண வழியைக் குறிக்க (article இல்லாமல்) “by” வரும்: by bus, by train, by car.' },
  },
  {
    difficulty: 'easy', source: 'Unit 1 Grammar – Prepositions, Exercise A5, p. 14', answer: 0,
    en: { q: 'Choose the correct preposition: Mani divided his toys _____ his brothers and sisters.', options: ['among', 'between', 'beside', 'across'], explanation: 'The toys are shared within a group (brothers and sisters, more than two, not named one by one), so we use “among”.' },
    ta: { q: 'Choose the correct preposition: Mani divided his toys _____ his brothers and sisters.', options: ['among', 'between', 'beside', 'across'], explanation: 'பெயர் குறிப்பிடப்படாத ஒரு குழுவுக்குள் (சகோதர சகோதரிகள்) பகிர்வதால் “among”.' },
  },
  {
    difficulty: 'easy', source: 'Unit 1 Grammar – Prepositions of Time, p. 13', answer: 0,
    en: { q: 'Choose the correct preposition: She was born _____ the 5th of July.', options: ['on', 'in', 'at', 'since'], explanation: 'We use “on” with dates and days: on the 5th of July, on Monday.' },
    ta: { q: 'Choose the correct preposition: She was born _____ the 5th of July.', options: ['on', 'in', 'at', 'since'], explanation: 'தேதிகள், கிழமைகளுடன் “on” வரும்: on the 5th of July, on Monday.' },
  },
  {
    difficulty: 'easy', source: 'Unit 1 Grammar – Prepositions of Time, p. 13', answer: 0,
    en: { q: 'Choose the correct preposition: I will reach there _____ 6 o’clock.', options: ['at', 'on', 'in', 'for'], explanation: 'We use “at” with an exact time of the clock: at 6 o’clock.' },
    ta: { q: 'Choose the correct preposition: I will reach there _____ 6 o’clock.', options: ['at', 'on', 'in', 'for'], explanation: 'கடிகாரத்தின் சரியான நேரத்துடன் “at” வரும்: at 6 o’clock.' },
  },
  {
    difficulty: 'easy', source: 'Unit 1 Grammar – Prepositions of Movement, p. 13', answer: 0,
    en: { q: 'Choose the correct preposition: The swimmer jumped _____ the pool.', options: ['into', 'in between', 'at', 'off to'], explanation: '“Into” shows movement from outside to inside something. The swimmer moves from outside into the water.' },
    ta: { q: 'Choose the correct preposition: The swimmer jumped _____ the pool.', options: ['into', 'in between', 'at', 'off to'], explanation: '“into” – வெளியிலிருந்து உள்ளே செல்லும் இயக்கம். நீச்சல் வீரர் வெளியிலிருந்து குளத்தினுள் குதிக்கிறார்.' },
  },
  {
    difficulty: 'easy', source: 'Unit 7 Grammar – Determiners, Exercise A2, p. 184', answer: 0,
    en: { q: 'Choose the correct article: _____ Earth revolves around the sun.', options: ['The', 'A', 'An', 'No article'], explanation: 'There is only one Earth, so we use the definite article “the” (the Earth, the sun, the sky).' },
    ta: { q: 'Choose the correct article: _____ Earth revolves around the sun.', options: ['The', 'A', 'An', 'No article'], explanation: 'பூமி ஒன்றே ஒன்று; தனித்துவமானவற்றுக்கு “the” வரும் (the Earth, the sun, the sky).' },
  },
  {
    difficulty: 'easy', source: 'Unit 7 Grammar – Determiners, Exercise A5, p. 185', answer: 0,
    en: { q: 'Choose the correct article: It was _____ unforgettable experience.', options: ['an', 'a', 'the', 'no article'], explanation: '“Unforgettable” begins with a vowel sound (/ʌ/), so we use “an”.' },
    ta: { q: 'Choose the correct article: It was _____ unforgettable experience.', options: ['an', 'a', 'the', 'no article'], explanation: '“unforgettable” உயிரொலியில் (vowel sound) தொடங்குவதால் “an”.' },
  },
  {
    difficulty: 'easy', source: 'Unit 7 Grammar – Determiners, Exercise A7, p. 185', answer: 0,
    en: { q: 'Choose the correct article: He said that he wanted to become _____ engineer.', options: ['an', 'a', 'the', 'one'], explanation: '“Engineer” begins with a vowel sound, so we use “an”. He means any engineer, not a particular one, so not “the”.' },
    ta: { q: 'Choose the correct article: He said that he wanted to become _____ engineer.', options: ['an', 'a', 'the', 'one'], explanation: '“engineer” உயிரொலியில் தொடங்குகிறது → “an”. குறிப்பிட்ட ஒருவர் அல்ல; எனவே “the” அல்ல.' },
  },
  {
    difficulty: 'easy', source: 'Unit 7 Grammar – Determiners, Exercise A10, p. 185', answer: 0,
    en: { q: 'Choose the correct article: India is _____ largest democracy in the world.', options: ['the', 'a', 'an', 'no article'], explanation: 'We use “the” before a superlative adjective: the largest, the highest, the best.' },
    ta: { q: 'Choose the correct article: India is _____ largest democracy in the world.', options: ['the', 'a', 'an', 'no article'], explanation: 'Superlative பெயரடைக்கு முன் “the” வரும்: the largest, the highest, the best.' },
  },
  {
    difficulty: 'easy', source: 'Unit 7 Grammar – Determiners, Exercise A15, p. 185', answer: 0,
    en: { q: 'Choose the correct article: “What is that noise?” “I think it is _____ aeroplane.”', options: ['an', 'a', 'the', 'one'], explanation: '“Aeroplane” begins with a vowel sound, and it is not a particular plane, so we use “an”.' },
    ta: { q: 'Choose the correct article: “What is that noise?” “I think it is _____ aeroplane.”', options: ['an', 'a', 'the', 'one'], explanation: '“aeroplane” உயிரொலியில் தொடங்குகிறது; குறிப்பிட்ட விமானம் அல்ல → “an”.' },
  },
  {
    difficulty: 'easy', source: 'Unit 1 Grammar – Prepositions of Place, p. 13', answer: 0,
    en: { q: 'Choose the correct preposition: The cat is _____ the wall.', options: ['on', 'into', 'towards', 'since'], explanation: '“On” shows position on a surface. Into and towards show movement; since shows time.' },
    ta: { q: 'Choose the correct preposition: The cat is _____ the wall.', options: ['on', 'into', 'towards', 'since'], explanation: '“on” – ஒரு பரப்பின் மேல் இருக்கும் நிலை. into, towards – இயக்கம்; since – நேரம்.' },
  },
  {
    difficulty: 'easy', source: 'Unit 1 Grammar – Prepositions, Exercise B3, p. 14', answer: 0,
    en: { q: 'Which word is a preposition in: The burglar found the keys under the pot.', options: ['under', 'found', 'keys', 'burglar'], explanation: '“Under” comes before the noun “the pot” and shows where the keys were, so it is a preposition.' },
    ta: { q: 'Which word is a preposition in: The burglar found the keys under the pot.', options: ['under', 'found', 'keys', 'burglar'], explanation: '“under” – “the pot” என்ற பெயருக்கு முன் வந்து சாவி எங்கே இருந்தது எனக் காட்டுகிறது; எனவே Preposition.' },
  },

  // ------------------------------------------------------------------ Medium
  {
    difficulty: 'medium', source: 'Unit 7 Grammar – Determiners, Exercise A3, p. 184', answer: 0,
    en: { q: 'Choose the correct article: I found _____ one rupee coin in the playground while playing.', options: ['a', 'an', 'the', 'no article'], explanation: 'The choice depends on sound, not spelling. “One” begins with the sound /w/ (a consonant sound), so we say “a one rupee coin”.' },
    ta: { q: 'Choose the correct article: I found _____ one rupee coin in the playground while playing.', options: ['a', 'an', 'the', 'no article'], explanation: 'எழுத்தை அல்ல, ஒலியைப் பார்க்க வேண்டும். “one” என்பது /w/ (மெய்யொலி) ஒலியில் தொடங்குவதால் “a one rupee coin”.' },
  },
  {
    difficulty: 'medium', source: 'Unit 1 Grammar – Prepositions, Exercise A4, p. 14', answer: 0,
    en: { q: 'Choose the correct preposition: The cricket ball was hidden _____ the leaves.', options: ['among', 'between', 'into', 'since'], explanation: 'There are many leaves (a group, not two named things), so the ball was hidden “among” the leaves.' },
    ta: { q: 'Choose the correct preposition: The cricket ball was hidden _____ the leaves.', options: ['among', 'between', 'into', 'since'], explanation: 'இலைகள் பல (ஒரு கூட்டம்; இரண்டு அல்ல); எனவே “among the leaves”.' },
  },
  {
    difficulty: 'medium', source: 'Unit 1 Grammar – ‘Since’ and ‘For’, p. 13', answer: 0,
    en: { q: 'Choose the correct preposition: I have been studying _____ 5 a.m., and I am at it even now.', options: ['since', 'for', 'during', 'from to'], explanation: '“5 a.m.” is a particular point of time when the action started, so we use “since”.' },
    ta: { q: 'Choose the correct preposition: I have been studying _____ 5 a.m., and I am at it even now.', options: ['since', 'for', 'during', 'from to'], explanation: '“5 a.m.” – செயல் தொடங்கிய குறிப்பிட்ட நேரப் புள்ளி; எனவே “since”.' },
  },
  {
    difficulty: 'medium', source: 'Unit 1 Grammar – ‘Since’ and ‘For’, p. 13', answer: 0,
    en: { q: 'Choose the correct preposition: Maya has worked in this institution as an accountant _____ 23 years.', options: ['for', 'since', 'at', 'on'], explanation: '“23 years” is a duration (length of time), so we use “for”.' },
    ta: { q: 'Choose the correct preposition: Maya has worked in this institution as an accountant _____ 23 years.', options: ['for', 'since', 'at', 'on'], explanation: '“23 years” – கால அளவு; எனவே “for”.' },
  },
  {
    difficulty: 'medium', source: 'Unit 1 Grammar – ‘Between’ and ‘Among’, p. 14', answer: 0,
    en: { q: 'Choose the correct preposition: The final match will be held _____ India and Australia.', options: ['between', 'among', 'amid', 'along'], explanation: '“Between” is used for definite, individually named items – here two named teams.' },
    ta: { q: 'Choose the correct preposition: The final match will be held _____ India and Australia.', options: ['between', 'among', 'amid', 'along'], explanation: 'தனித்தனியாகப் பெயர் குறிப்பிடப்பட்டவற்றுக்கு (இரண்டு அணிகள்) “between” வரும்.' },
  },
  {
    difficulty: 'medium', source: 'Unit 1 Grammar – Prepositional Verbs, p. 15', answer: 0,
    en: { q: 'Choose the correct preposition: The kids laughed _____ the hilarious antics of the clown.', options: ['at', 'on', 'with', 'for'], explanation: 'The prepositional verb is “laugh at” (to laugh because something is funny).' },
    ta: { q: 'Choose the correct preposition: The kids laughed _____ the hilarious antics of the clown.', options: ['at', 'on', 'with', 'for'], explanation: 'சரியான prepositional verb “laugh at” (வேடிக்கையானதைப் பார்த்துச் சிரித்தல்).' },
  },
  {
    difficulty: 'medium', source: 'Unit 1 Grammar – Prepositional Verbs, p. 15', answer: 0,
    en: { q: 'Choose the correct preposition: I believe _____ the healing power of a mother’s touch.', options: ['in', 'on', 'at', 'to'], explanation: 'We say “believe in” something (to trust that it is real or good).' },
    ta: { q: 'Choose the correct preposition: I believe _____ the healing power of a mother’s touch.', options: ['in', 'on', 'at', 'to'], explanation: '“believe in” = ஒன்றின் மீது நம்பிக்கை கொள்ளுதல்.' },
  },
  {
    difficulty: 'medium', source: 'Unit 1 Grammar – Prepositional Verbs, p. 15', answer: 0,
    en: { q: 'Choose the correct preposition: I agree _____ everything you’ve said.', options: ['with', 'to', 'on', 'at'], explanation: 'We agree “with” a person or with what someone says.' },
    ta: { q: 'Choose the correct preposition: I agree _____ everything you’ve said.', options: ['with', 'to', 'on', 'at'], explanation: 'ஒருவருடனோ அவர் சொன்னதுடனோ ஒத்துப்போவதை “agree with” என்கிறோம்.' },
  },
  {
    difficulty: 'medium', source: 'Unit 1 Grammar – Prepositional Verbs, p. 15', answer: 0,
    en: { q: 'Choose the correct preposition: The elderly couple care _____ their pets as they do for their children.', options: ['for', 'of', 'at', 'with'], explanation: '“Care for” means to look after and love someone. The sentence itself repeats “for” in “as they do for their children”.' },
    ta: { q: 'Choose the correct preposition: The elderly couple care _____ their pets as they do for their children.', options: ['for', 'of', 'at', 'with'], explanation: '“care for” = அன்புடன் கவனித்துக்கொள்ளுதல். வாக்கியத்திலேயே “as they do for their children” என உள்ளது.' },
  },
  {
    difficulty: 'medium', source: 'Unit 3 Grammar – Prepositional Phrases, Exercise B1, p. 68', answer: 0,
    en: { q: 'Choose the correct prepositional phrase: I would like to order coffee _____ tea.', options: ['instead of', 'instead from', 'instead to', 'instead with'], explanation: 'The correct phrase is “instead of” (in place of).' },
    ta: { q: 'Choose the correct prepositional phrase: I would like to order coffee _____ tea.', options: ['instead of', 'instead from', 'instead to', 'instead with'], explanation: 'சரியான தொடர் “instead of” (அதற்குப் பதிலாக).' },
  },
  {
    difficulty: 'medium', source: 'Unit 3 Grammar – Prepositional Phrases, Exercise B2, p. 68', answer: 0,
    en: { q: 'Choose the correct prepositional phrase: _____ the rains, we went out.', options: ['In spite of', 'In spite', 'In spite on', 'Despite of'], explanation: 'The phrase is “in spite of” (or “despite” without “of”). “Despite of” is a common mistake.' },
    ta: { q: 'Choose the correct prepositional phrase: _____ the rains, we went out.', options: ['In spite of', 'In spite', 'In spite on', 'Despite of'], explanation: 'சரியானது “in spite of” (அல்லது “of” இல்லாமல் “despite”). “Despite of” என்பது பொதுவான தவறு.' },
  },
  {
    difficulty: 'medium', source: 'Unit 3 Grammar – Prepositional Phrases, Exercise B3, p. 68', answer: 0,
    en: { q: 'Choose the correct prepositional phrase: _____ fire, break the glass to escape.', options: ['In case of', 'In case', 'In case with', 'On case of'], explanation: '“In case of” + noun means “if there is”: in case of fire.' },
    ta: { q: 'Choose the correct prepositional phrase: _____ fire, break the glass to escape.', options: ['In case of', 'In case', 'In case with', 'On case of'], explanation: '“In case of” + பெயர்ச்சொல் = “… ஏற்பட்டால்”: in case of fire.' },
  },
  {
    difficulty: 'medium', source: 'Unit 3 Grammar – Prepositional Phrases, Exercise B4, p. 68', answer: 0,
    en: { q: 'Choose the correct prepositional phrase: I am standing here _____ my friends.', options: ['on behalf of', 'in behalf of', 'on behalf', 'by behalf to'], explanation: '“On behalf of” means “as the representative of” someone.' },
    ta: { q: 'Choose the correct prepositional phrase: I am standing here _____ my friends.', options: ['on behalf of', 'in behalf of', 'on behalf', 'by behalf to'], explanation: '“on behalf of” = ஒருவரின் சார்பாக.' },
  },
  {
    difficulty: 'medium', source: 'Unit 3 Grammar – Prepositional Phrases, Exercise B5, p. 68', answer: 0,
    en: { q: 'Choose the correct prepositional phrase: We solved the problem _____ a new device developed by our engineers.', options: ['by means of', 'by means', 'by means to', 'in means of'], explanation: '“By means of” means “with the help of / using”.' },
    ta: { q: 'Choose the correct prepositional phrase: We solved the problem _____ a new device developed by our engineers.', options: ['by means of', 'by means', 'by means to', 'in means of'], explanation: '“by means of” = … இன் உதவியால் / … ஐப் பயன்படுத்தி.' },
  },
  {
    difficulty: 'medium', source: 'Unit 1 Grammar – Prepositions, Exercise C (j), p. 15', answer: 0,
    en: { q: 'Choose the correct preposition (Villupattu passage): The whole party sits _____ the ground and performs.', options: ['on', 'into', 'over', 'since'], explanation: 'The troupe sits on the surface of the ground, so “on” is correct.' },
    ta: { q: 'Choose the correct preposition (Villupattu passage): The whole party sits _____ the ground and performs.', options: ['on', 'into', 'over', 'since'], explanation: 'குழுவினர் தரையின் மேல் அமர்கிறார்கள்; பரப்பின் மேல் → “on”.' },
  },

  {
    difficulty: 'medium', source: 'Unit 1 Grammar – ‘Since’ and ‘For’, p. 13', answer: 0,
    en: { q: 'Choose the correct preposition: Many ideas were discussed _____ three weeks before the annual day theme was finalised.', options: ['for', 'since', 'on', 'at'], explanation: '“Three weeks” is a duration (how long), so we use “for”. “Since” would need a starting point such as “since Monday”.' },
    ta: { q: 'Choose the correct preposition: Many ideas were discussed _____ three weeks before the annual day theme was finalised.', options: ['for', 'since', 'on', 'at'], explanation: '“three weeks” – கால அளவு (எவ்வளவு நேரம்); எனவே “for”. “since” க்கு “since Monday” போன்ற தொடக்கப் புள்ளி வேண்டும்.' },
  },

  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Unit 1 Grammar – Prepositions, Exercise E (b, c), p. 16', answer: 0,
    en: { q: 'Choose the correct pair (Thiruvizha passage): People throng the premises _____ catch a glimpse _____ their village deity.', options: ['to, of', 'for, of', 'to, at', 'for, from'], explanation: '“To catch” shows purpose (to-infinitive), and we say “a glimpse of” something.' },
    ta: { q: 'Choose the correct pair (Thiruvizha passage): People throng the premises _____ catch a glimpse _____ their village deity.', options: ['to, of', 'for, of', 'to, at', 'for, from'], explanation: '“to catch” – நோக்கம் (to-infinitive); “a glimpse of” – ஒன்றை ஒரு கணம் பார்த்தல்.' },
  },
  {
    difficulty: 'hard', source: 'Unit 1 Grammar – Prepositions, Exercise E (n), p. 16', answer: 0,
    en: { q: 'Choose the correct preposition: All the village people look forward _____ the thiruvizha every year.', options: ['to', 'for', 'at', 'on'], explanation: 'The phrase is “look forward to” (wait eagerly for). Here “to” is a preposition, so a noun or -ing form follows.' },
    ta: { q: 'Choose the correct preposition: All the village people look forward _____ the thiruvizha every year.', options: ['to', 'for', 'at', 'on'], explanation: 'சரியான தொடர் “look forward to” (ஆவலுடன் எதிர்பார்த்தல்). இங்கு “to” ஒரு preposition; அதன் பின் பெயர் அல்லது -ing வடிவம் வரும்.' },
  },
  {
    difficulty: 'hard', source: 'Unit 1 Grammar – Prepositions, Exercise E (a), p. 15', answer: 0,
    en: { q: 'Choose the correct preposition: The open spaces are cleaned, spruced up and decorated _____ colourful streamers.', options: ['with', 'by', 'of', 'from'], explanation: 'We decorate something “with” the things used to decorate it: decorated with streamers.' },
    ta: { q: 'Choose the correct preposition: The open spaces are cleaned, spruced up and decorated _____ colourful streamers.', options: ['with', 'by', 'of', 'from'], explanation: 'அலங்காரத்திற்குப் பயன்படும் பொருளுடன் “with” வரும்: decorated with streamers.' },
  },
  {
    difficulty: 'hard', source: 'Unit 1 Grammar – Prepositions, Exercise E (j), p. 16', answer: 0,
    en: { q: 'Choose the correct preposition: Men, women and little children dressed _____ their best clothes enjoy the Thiruvizha greatly.', options: ['in', 'with', 'on', 'by'], explanation: 'We say someone is “dressed in” certain clothes.' },
    ta: { q: 'Choose the correct preposition: Men, women and little children dressed _____ their best clothes enjoy the Thiruvizha greatly.', options: ['in', 'with', 'on', 'by'], explanation: 'ஆடை அணிந்திருப்பதை “dressed in” என்று சொல்கிறோம்.' },
  },
  {
    difficulty: 'hard', source: 'Unit 1 Grammar – ‘During’ and ‘In’, p. 13', answer: 0,
    en: { q: 'According to the book, which two prepositions can both fill the blank? We will be visiting my grandparents _____ the summer vacation.', options: ['during / in', 'since / for', 'between / among', 'on / at'], explanation: 'The book says both “during” and “in” describe actions that happen within a period, so both are correct here.' },
    ta: { q: 'According to the book, which two prepositions can both fill the blank? We will be visiting my grandparents _____ the summer vacation.', options: ['during / in', 'since / for', 'between / among', 'on / at'], explanation: 'ஒரு கால இடைவெளிக்குள் நடக்கும் செயலுக்கு “during”, “in” இரண்டும் பொருந்தும் என நூல் கூறுகிறது.' },
  },
  {
    difficulty: 'hard', source: 'Unit 1 Supplementary – The Envious Neighbour, p. 22', answer: 0,
    en: { q: 'Choose the correct article: In the old, old days, there lived _____ honest man with his wife.', options: ['an', 'a', 'no article', 'these'], explanation: 'In “honest” the h is silent, so the word begins with a vowel sound: an honest man.' },
    ta: { q: 'Choose the correct article: In the old, old days, there lived _____ honest man with his wife.', options: ['an', 'a', 'no article', 'these'], explanation: '“honest” இல் h ஒலிக்காது; உயிரொலியில் தொடங்குவதால் “an honest man”.' },
  },
  {
    difficulty: 'hard', source: 'Unit 6 Prose – From Zero to Infinity, p. 154', answer: 0,
    en: { q: 'Choose the correct article: On May 1, 1913, _____ University of Madras granted him a fellowship of ₹75 a month.', options: ['the', 'a', 'an', 'no article'], explanation: '“University of Madras” is one particular university named with “of”, so it takes “the”. (“An” is wrong anyway because “university” begins with the /j/ sound.)' },
    ta: { q: 'Choose the correct article: On May 1, 1913, _____ University of Madras granted him a fellowship of ₹75 a month.', options: ['the', 'a', 'an', 'no article'], explanation: '“University of Madras” – “of” உடன் பெயரிடப்பட்ட குறிப்பிட்ட ஒரு பல்கலைக்கழகம்; எனவே “the”. (“university” /j/ ஒலியில் தொடங்குவதால் “an” எப்படியும் தவறு.)' },
  },
  {
    difficulty: 'hard', source: 'Unit 2 Grammar – Degrees of Comparison, p. 35', answer: 0,
    en: { q: 'Spot the sentence with the correct use of articles.', options: ['Mount Everest is the highest peak in the world.', 'Mount Everest is a highest peak in the world.', 'The Mount Everest is highest peak in the world.', 'Mount Everest is an highest peak in the world.'], explanation: 'A superlative (highest) takes “the”. The name of a single mountain (Mount Everest) does not take “the”.' },
    ta: { q: 'Spot the sentence with the correct use of articles.', options: ['Mount Everest is the highest peak in the world.', 'Mount Everest is a highest peak in the world.', 'The Mount Everest is highest peak in the world.', 'Mount Everest is an highest peak in the world.'], explanation: 'Superlative (highest) க்கு முன் “the” வேண்டும். தனி மலையின் பெயருக்கு (Mount Everest) “the” வராது.' },
  },
  {
    difficulty: 'hard', source: 'Unit 7 Grammar – Determiners, Exercise A8, p. 185', answer: 0,
    en: { q: 'Choose the correct determiner: Kokila gave a pen to _____ child in the classroom on her birthday.', options: ['each', 'all', 'many', 'few'], explanation: '“Child” is singular. “Each” is used with a singular countable noun; all, many and few need a plural noun (children).' },
    ta: { q: 'Choose the correct determiner: Kokila gave a pen to _____ child in the classroom on her birthday.', options: ['each', 'all', 'many', 'few'], explanation: '“child” ஒருமை. ஒருமை எண்ணக்கூடிய பெயருடன் “each” வரும்; all, many, few உடன் பன்மை (children) வேண்டும்.' },
  },
  {
    difficulty: 'hard', source: 'Unit 1 Grammar – Prepositions, Exercise C, p. 15', answer: 0,
    en: { q: 'Choose the correct preposition (Villupattu passage): The ballad style songs are composed in the rural dialect which appeals _____ the audience.', options: ['to', 'for', 'at', 'on'], explanation: 'The verb “appeal” in the sense of “to attract or please” is followed by “to”: appeals to the audience.' },
    ta: { q: 'Choose the correct preposition (Villupattu passage): The ballad style songs are composed in the rural dialect which appeals _____ the audience.', options: ['to', 'for', 'at', 'on'], explanation: '“appeal” என்பது “கவர்தல்/பிடித்தல்” என்ற பொருளில் “to” உடன் வரும்: appeals to the audience.' },
  },
];
