// Tamil Nadu State Board, 9th Mathematics, Unit 9 – Probability (நிகழ்தகவு).
// Every exercise item with a single definite answer (Exercises 9.1–9.3), the solved
// examples, progress checks and thinking-corner items, plus our own questions.
// source = section / exercise and printed page of the English-medium book.
// Answers checked against the book's answer key (p. 318).

import { BankQuestion, AR_EN, AR_TA } from './types';

const IMG = '/content/9/state_board/maths/09';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise 9.3 Q1, p. 302', answer: 0,
    en: { q: 'A number between 0 and 1 that is used to measure uncertainty is called', options: ['probability', 'random variable', 'trial', 'simple event'], explanation: 'Probability is a way of quantifying or measuring uncertainty; its value lies from 0 to 1.' },
    ta: { q: '0 க்கும் 1 க்கும் இடைப்பட்ட ஓர் எண்ணைக் கொண்டு உறுதியற்றவற்றை அளவிடுவது எவ்வாறு அழைக்கப்படுகிறது?', options: ['நிகழ்தகவு', 'சமவாய்ப்பு மாறி', 'முயற்சி', 'எளிய நிகழ்ச்சி'], explanation: 'உறுதியற்ற தன்மையை அளவிடும் முறை நிகழ்தகவு; அதன் மதிப்பு 0 முதல் 1 வரை.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 9.3 Q2, p. 302', answer: 0,
    en: { q: 'Probability lies between', options: ['0 and 1', '−1 and +1', '0 and 2', '0 and 0.5'], explanation: 'For any event E, 0 ≤ P(E) ≤ 1.' },
    ta: { q: 'நிகழ்தகவு மதிப்பின் இடைவெளி', options: ['0 மற்றும் 1', '−1 மற்றும் +1', '0 மற்றும் 2', '0 மற்றும் 0.5'], explanation: 'எந்த நிகழ்ச்சி E க்கும் 0 ≤ P(E) ≤ 1.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 9.3 Q3, p. 302', answer: 0,
    en: { q: 'The probability based on the concept of relative frequency theory is called', options: ['empirical probability', 'classical probability', 'a priori probability', 'conditional probability'], explanation: 'The empirical approach (relative frequency theory) uses the percentage of times an outcome occurs in many trials.' },
    ta: { q: 'ஒப்பீட்டு நிகழ்வெண் கருத்தை அடிப்படையாகக் கொண்ட நிகழ்தகவு எவ்வாறு அழைக்கப்படுகிறது?', options: ['பட்டறி நிகழ்தகவு', 'தொன்மை நிகழ்தகவு', 'முன்னறி நிகழ்தகவு', 'நிபந்தனை நிகழ்தகவு'], explanation: 'பல முயற்சிகளில் ஒரு விளைவு நிகழும் விகிதத்தைக் கொண்டு காண்பது பட்டறி (ஒப்பீட்டு நிகழ்வெண்) நிகழ்தகவு.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 9.3 Q4, p. 302', answer: 0,
    en: { q: 'The probability of an event cannot be', options: ['less than zero', 'equal to zero', 'greater than zero', 'equal to one'], explanation: 'Since 0 ≤ P(E) ≤ 1, a probability can never be negative.' },
    ta: { q: 'ஒரு நிகழ்ச்சியின் நிகழ்தகவு எவ்வாறு இருக்க முடியாது?', options: ['பூச்சியத்தை விடச் சிறியது', 'பூச்சியத்திற்குச் சமம்', 'பூச்சியத்தை விடப் பெரியது', '1 இக்குச் சமம்'], explanation: '0 ≤ P(E) ≤ 1 என்பதால் நிகழ்தகவு குறை எண்ணாக இருக்க முடியாது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 9.3 Q5, p. 302', answer: 0,
    en: { q: 'The probability of all possible outcomes of a random experiment (the sample space) is always equal to', options: ['one', 'zero', 'infinity', 'less than one'], explanation: 'The whole sample space is a sure event, so its probability is 1.' },
    ta: { q: 'ஒரு சமவாய்ப்புச் சோதனையில் வாய்ப்புள்ள அனைத்து விளைவுகளின் நிகழ்தகவு எப்பொழுதும் _____ இக்குச் சமம்', options: ['ஒன்று', 'பூச்சியம்', 'முடிவிலி', 'ஒன்றை விடக் குறைவு'], explanation: 'முழுக் கூறுவெளி ஓர் உறுதியான நிகழ்ச்சி; எனவே அதன் நிகழ்தகவு 1.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 9.3 Q8, p. 303', answer: 0,
    en: { q: 'A particular result of an experiment is called', options: ['an outcome', 'a trial', 'a simple event', 'a compound event'], explanation: 'The result of a trial is called an outcome, e.g. getting Head when a coin is flipped.' },
    ta: { q: 'ஒரு சோதனையின் குறிப்பிட்ட முடிவு எவ்வாறு அழைக்கப்படுகிறது?', options: ['விளைவு', 'முயற்சி', 'எளிய நிகழ்ச்சி', 'கூட்டு நிகழ்ச்சி'], explanation: 'ஒரு முயற்சியின் முடிவு விளைவு எனப்படும்; எ.கா. நாணயம் சுண்டும்போது தலை கிடைப்பது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 9.3 Q9, p. 303', answer: 0,
    en: { q: 'A collection of one or more outcomes of an experiment is called', options: ['an event', 'an outcome', 'a sample point', 'a trial'], explanation: 'Any subset of the sample space is an event; it can have one or more outcomes.' },
    ta: { q: 'ஒரு சோதனையின் ஒன்று அல்லது அதற்கு மேற்பட்ட விளைவுகளின் தொகுப்பு _____ என அழைக்கப்படுகிறது.', options: ['நிகழ்ச்சி', 'விளைவு', 'கூறுபுள்ளி', 'முயற்சி'], explanation: 'கூறுவெளியின் எந்த உட்கணமும் ஒரு நிகழ்ச்சி; அதில் ஒன்று அல்லது பல விளைவுகள் இருக்கலாம்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 9.3 Q10, p. 303', answer: 0,
    en: { q: 'The six faces of a dice are called equally likely if the dice is', options: ['fair', 'small', 'six-faced', 'round'], explanation: 'Only a fair (unbiased) dice gives each face the same chance.' },
    ta: { q: 'ஒரு பகடையானது _____ இருக்கும்போது, அதன் ஆறு முகங்களும் சமவாய்ப்புடையவை என அழைக்கப்படுகிறது.', options: ['சீரானதாக', 'சிறியதாக', 'ஆறு முகம் கொண்டதாக', 'வட்டமாக'], explanation: 'சீரான பகடையில் மட்டுமே ஒவ்வொரு முகத்திற்கும் சம வாய்ப்பு உண்டு.' },
  },
  {
    difficulty: 'easy', source: '§9.1, p. 291', answer: 0,
    en: { q: 'The notion of sample space in probability comes from', options: ['Richard Von Mises', 'Ronald Fisher', 'Heron', 'Pythagoras'], explanation: 'The empirical attitude was developed mainly by R. A. Fisher and R. Von Mises; the notion of sample space comes from Von Mises.' },
    ta: { q: 'நிகழ்தகவில் கூறுவெளி என்ற கருத்தைத் தந்தவர்', options: ['ரிச்சர்டு வான் மிசஸ்', 'ரொனால்டு ஃபிஷர்', 'ஹெரான்', 'பிதாகரஸ்'], explanation: 'பட்டறி அணுகுமுறையை ஃபிஷர், வான் மிசஸ் வளர்த்தனர்; கூறுவெளி என்ற கருத்து வான் மிசஸிடமிருந்து வந்தது.' },
  },
  {
    difficulty: 'easy', source: '§9.2, p. 292', answer: 0,
    en: { q: 'Experiments such as verifying Ohm’s law, whose outcomes can be predicted in advance, are called', options: ['deterministic experiments', 'random experiments', 'empirical experiments', 'equally likely experiments'], explanation: 'Repeated under identical conditions they give almost the same result, so they are deterministic.' },
    ta: { q: 'ஓம் விதியைச் சரிபார்த்தல் போன்ற, முடிவை முன்கூட்டியே கணிக்கக்கூடிய சோதனைகள்', options: ['உறுதியான சோதனைகள்', 'சமவாய்ப்புச் சோதனைகள்', 'பட்டறிச் சோதனைகள்', 'சமவாய்ப்புள்ள சோதனைகள்'], explanation: 'ஒரே நிபந்தனைகளில் மீண்டும் செய்தாலும் ஏறக்குறைய ஒரே முடிவு கிடைப்பதால் அவை உறுதியான சோதனைகள்.' },
  },
  {
    difficulty: 'easy', source: '§9.2, p. 293', answer: 0,
    en: { q: 'Rolling a fair dice or flipping a fair coin, where the exact outcome cannot be predicted, is a', options: ['random experiment', 'deterministic experiment', 'sure event', 'sample point'], explanation: 'When the outcome cannot be predicted even under identical conditions, the experiment is random.' },
    ta: { q: 'சீரான பகடையை உருட்டுதல், சீரான நாணயத்தைச் சுண்டுதல் போன்ற, சரியான விளைவைக் கணிக்க இயலாத சோதனை', options: ['சமவாய்ப்புச் சோதனை', 'உறுதியான சோதனை', 'உறுதியான நிகழ்ச்சி', 'கூறுபுள்ளி'], explanation: 'ஒரே நிபந்தனைகளிலும் விளைவைக் கணிக்க இயலாத சோதனை சமவாய்ப்புச் சோதனை.' },
  },
  {
    difficulty: 'easy', source: '§9.2, p. 293', answer: 0,
    en: { q: 'Each performance of a random experiment is called a', options: ['trial', 'sample space', 'event', 'probability'], explanation: 'Each performance is a trial and the result of each trial is an outcome.' },
    ta: { q: 'ஒரு சமவாய்ப்புச் சோதனையை ஒவ்வொரு முறை செய்வதும்', options: ['முயற்சி', 'கூறுவெளி', 'நிகழ்ச்சி', 'நிகழ்தகவு'], explanation: 'ஒவ்வொரு முறை செய்வதும் முயற்சி; ஒவ்வொரு முயற்சியின் முடிவும் விளைவு.' },
  },
  {
    difficulty: 'easy', source: '§9.2, p. 293', answer: 0,
    en: { q: 'The set of all possible outcomes of a random experiment is called the', options: ['sample space', 'sample point', 'event', 'trial'], explanation: 'The sample space is denoted by S and its number of elements by n(S).' },
    ta: { q: 'ஒரு சமவாய்ப்புச் சோதனையின் வாய்ப்புள்ள அனைத்து விளைவுகளின் கணம்', options: ['கூறுவெளி', 'கூறுபுள்ளி', 'நிகழ்ச்சி', 'முயற்சி'], explanation: 'கூறுவெளி S எனக் குறிக்கப்படும்; அதன் உறுப்புகளின் எண்ணிக்கை n(S).' },
  },
  {
    difficulty: 'easy', source: '§9.2, p. 293', answer: 0,
    en: { q: 'When a single coin is flipped, the sample space is', options: ['S = {H, T}', 'S = {H}', 'S = {HH, TT}', 'S = {HH, HT, TH, TT}'], explanation: 'A single flip gives Head or Tail, so S = {H, T}.' },
    ta: { q: 'ஒரு நாணயத்தை ஒருமுறை சுண்டும்போது கூறுவெளி', options: ['S = {H, T}', 'S = {H}', 'S = {HH, TT}', 'S = {HH, HT, TH, TT}'], explanation: 'ஒருமுறை சுண்டினால் தலை அல்லது பூ; எனவே S = {H, T}.' },
  },
  {
    difficulty: 'easy', source: '§9.5, p. 299', answer: 0,
    en: { q: 'An event whose probability is 1 is called', options: ['a sure (certain) event', 'an impossible event', 'a complementary event', 'an equally likely event'], explanation: 'If P(E) = 1, E is a certain or sure event; if P(E) = 0, it is impossible.' },
    ta: { q: 'நிகழ்தகவு 1 ஆக உள்ள நிகழ்ச்சி', options: ['உறுதியான நிகழ்ச்சி', 'இயலா நிகழ்ச்சி', 'நிரப்பு நிகழ்ச்சி', 'சமவாய்ப்பு நிகழ்ச்சி'], explanation: 'P(E) = 1 எனில் E உறுதியான நிகழ்ச்சி; P(E) = 0 எனில் இயலா நிகழ்ச்சி.' },
  },
  {
    difficulty: 'easy', source: '§9.5, p. 299', answer: 0,
    en: { q: 'The probability of an impossible event is', options: ['0', '1', '0.5', '−1'], explanation: 'An event that never happens has probability 0, e.g. getting 7 on a dice.' },
    ta: { q: 'இயலா நிகழ்ச்சியின் நிகழ்தகவு', options: ['0', '1', '0.5', '−1'], explanation: 'ஒருபோதும் நிகழாத நிகழ்ச்சியின் நிகழ்தகவு 0; எ.கா. பகடையில் 7 பெறுதல்.' },
  },
  {
    difficulty: 'easy', source: '§9.1 Note, p. 292', answer: 0,
    en: { q: 'In a fair dice, the sum of the numbers on opposite faces is always', options: ['7', '6', '12', '5'], explanation: 'Opposite faces are (1, 6), (2, 5), (3, 4); each pair adds to 7.' },
    ta: { q: 'ஒரு சீரான பகடையில் எதிரெதிர் முகங்களில் உள்ள எண்களின் கூடுதல் எப்போதும்', options: ['7', '6', '12', '5'], explanation: 'எதிர் முகங்கள் (1, 6), (2, 5), (3, 4); ஒவ்வொரு இணையின் கூடுதலும் 7.' },
  },
  {
    difficulty: 'easy', source: '§9.5, p. 299', answer: 0,
    en: { q: 'If two events cannot occur at the same time in a single trial, they are called', options: ['mutually exclusive events', 'equally likely events', 'sure events', 'complementary trials'], explanation: 'For example, Head and Tail cannot both occur in a single flip of a coin.' },
    ta: { q: 'ஒரு முயற்சியில் இரு நிகழ்ச்சிகள் ஒரே நேரத்தில் நடக்க இயலாது எனில் அவை', options: ['ஒன்றையொன்று விலக்கும் நிகழ்ச்சிகள்', 'சமவாய்ப்பு நிகழ்ச்சிகள்', 'உறுதியான நிகழ்ச்சிகள்', 'நிரப்பு முயற்சிகள்'], explanation: 'எ.கா. ஒருமுறை நாணயம் சுண்டும்போது தலையும் பூவும் ஒருசேரக் கிடைக்காது.' },
  },

  // ---------------------------------------------------------------- Medium
  {
    difficulty: 'medium', source: 'Book exercise 9.3 Q6, p. 302', answer: 0,
    en: { q: 'If A is any event in S and A′ is its complement, then P(A′) is equal to', options: ['1 − P(A)', '1', '0', '1 − A'], explanation: 'P(A) + P(A′) = 1, so P(A′) = 1 − P(A).' },
    ta: { q: 'A என்பது S இன் ஏதேனும் ஒரு நிகழ்ச்சி, A′ என்பது A இன் நிரப்பு நிகழ்ச்சி எனில் P(A′) இன் மதிப்பு', options: ['1 − P(A)', '1', '0', '1 − A'], explanation: 'P(A) + P(A′) = 1, எனவே P(A′) = 1 − P(A).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 9.3 Q7, p. 302', answer: 0,
    en: { q: 'Which of the following cannot be taken as the probability of an event?', options: ['−1', '0', '0.5', '1'], explanation: 'A probability cannot be negative; it lies from 0 to 1.' },
    ta: { q: 'பின்வருவனவற்றுள் எது ஒரு நிகழ்ச்சியின் நிகழ்தகவாக இருக்க முடியாது?', options: ['−1', '0', '0.5', '1'], explanation: 'நிகழ்தகவு குறை எண்ணாக இருக்க முடியாது; அது 0 முதல் 1 வரை.' },
  },
  {
    difficulty: 'medium', source: '§9.1, p. 292', answer: 0,
    en: { q: 'Ten blue cards numbered 1 to 10 are shuffled face down and one is picked. The probability that it is the number 6 card is', options: ['1/10', '1/6', '6/10', '1/40'], explanation: 'One favourable card out of 10 equally likely cards: 1/10.' },
    ta: { q: '1 முதல் 10 வரை எண்ணிடப்பட்ட 10 நீல அட்டைகள் கவிழ்த்துக் கலைக்கப்பட்டு ஒன்று எடுக்கப்படுகிறது. அது 6 ஆம் எண் அட்டையாக இருக்க நிகழ்தகவு', options: ['1/10', '1/6', '6/10', '1/40'], explanation: '10 சமவாய்ப்பு அட்டைகளில் சாதகமானது ஒன்று: 1/10.' },
  },
  {
    difficulty: 'medium', source: '§9.2, p. 293', answer: 0,
    en: { q: 'When two coins are tossed, the sample space is', options: ['{HH, HT, TH, TT}', '{HH, TT}', '{H, T}', '{HH, HT, TT}'], explanation: 'Each coin can show H or T, giving 2 × 2 = 4 sample points.' },
    ta: { q: 'இரு நாணயங்களைச் சுண்டும்போது கூறுவெளி', options: ['{HH, HT, TH, TT}', '{HH, TT}', '{H, T}', '{HH, HT, TT}'], explanation: 'ஒவ்வொரு நாணயமும் H அல்லது T; எனவே 2 × 2 = 4 கூறுபுள்ளிகள்.' },
  },
  {
    difficulty: 'medium', source: '§9.3, p. 295', answer: 0,
    en: { q: 'An urn contains 4 red balls and 6 blue balls. A ball is chosen at random. The probability that it is red is', options: ['2/5', '3/5', '2/3', '1/4'], explanation: 'P(red) = 4/10 = 2/5 = 0.4; P(blue) = 6/10 = 0.6, and the two add to 1.' },
    ta: { q: 'ஒரு பையில் 4 சிவப்பு, 6 நீலப் பந்துகள் உள்ளன. சமவாய்ப்பு முறையில் ஒரு பந்து எடுக்கப்படுகிறது. அது சிவப்பாக இருக்க நிகழ்தகவு', options: ['2/5', '3/5', '2/3', '1/4'], explanation: 'P(சிவப்பு) = 4/10 = 2/5 = 0.4; P(நீலம்) = 6/10 = 0.6; இரண்டின் கூடுதல் 1.' },
  },
  {
    difficulty: 'medium', source: '§9.3 Thinking Corner, p. 295', answer: 0,
    en: { q: 'If the probability of success of an experiment is 0.4, the probability of failure is', options: ['0.6', '0.4', '1.4', '0.04'], explanation: 'Success and failure are complementary: 1 − 0.4 = 0.6.' },
    ta: { q: 'ஒரு சோதனை வெற்றி பெறுவதற்கான நிகழ்தகவு 0.4 எனில் அது தோல்வி அடைவதற்கான நிகழ்தகவு', options: ['0.6', '0.4', '1.4', '0.04'], explanation: 'வெற்றியும் தோல்வியும் நிரப்பு நிகழ்ச்சிகள்: 1 − 0.4 = 0.6.' },
  },
  {
    difficulty: 'medium', source: '§9.3, p. 295', answer: 0,
    en: { q: 'In the classical approach, the probability of an event E is', options: ['n(E) ÷ n(S)', 'n(S) ÷ n(E)', 'n(E) − n(S)', 'n(E) × n(S)'], explanation: 'P(E) = number of favourable outcomes ÷ total number of outcomes = n(E)/n(S), for equally likely outcomes.' },
    ta: { q: 'தொன்மை அணுகுமுறையில் நிகழ்ச்சி E இன் நிகழ்தகவு', options: ['n(E) ÷ n(S)', 'n(S) ÷ n(E)', 'n(E) − n(S)', 'n(E) × n(S)'], explanation: 'சமவாய்ப்பு விளைவுகளுக்கு P(E) = சாதகமான விளைவுகளின் எண்ணிக்கை ÷ மொத்த விளைவுகளின் எண்ணிக்கை = n(E)/n(S).' },
  },
  {
    difficulty: 'medium', source: '§9.4, p. 296', answer: 0,
    en: { q: 'A manufacturer produces 10,000 switches a month and 1,000 are found defective. The empirical probability of producing a defective switch is', options: ['0.1', '0.01', '0.9', '1'], explanation: 'P(E) = r/n = 1000/10000 = 0.1.' },
    ta: { q: 'ஓர் உற்பத்தியாளர் ஒவ்வொரு மாதமும் 10,000 மின் சொடுக்கிகள் தயாரிக்கிறார்; அவற்றில் 1,000 சொடுக்கிகள் குறைபாடுடையவை எனக் கண்டறியப்பட்டன. குறைபாடுடைய மின் சொடுக்கியைத் தயாரிப்பதற்கான பட்டறி நிகழ்தகவு', options: ['0.1', '0.01', '0.9', '1'], explanation: 'P(E) = r/n = 1000/10000 = 0.1.' },
  },
  {
    difficulty: 'medium', source: '§9.4 Thinking Corner, p. 296', answer: 0,
    en: { q: 'A student gave 3/2 as the answer to a probability question. The teacher said it was wrong because', options: ['a probability cannot be greater than 1', 'a probability cannot be a fraction', 'a probability must be a whole number', 'a probability must be less than 0.5'], explanation: 'Since 0 ≤ P(E) ≤ 1, the value 3/2 = 1.5 is impossible.' },
    ta: { q: 'ஒரு நிகழ்தகவு வினாவிற்கு மாணவனின் பதில் 3/2. அது தவறு என ஆசிரியர் கூறினார். ஏனெனில்', options: ['நிகழ்தகவு 1 ஐ விட அதிகமாக இருக்க முடியாது', 'நிகழ்தகவு பின்னமாக இருக்க முடியாது', 'நிகழ்தகவு முழு எண்ணாக இருக்க வேண்டும்', 'நிகழ்தகவு 0.5 ஐ விடக் குறைவாக இருக்க வேண்டும்'], explanation: '0 ≤ P(E) ≤ 1 என்பதால் 3/2 = 1.5 இயலாது.' },
  },
  {
    difficulty: 'medium', source: 'Book example 9.1, p. 297', answer: 0,
    en: { q: 'When a dice is rolled, the probability of getting a number greater than 4 is', options: ['1/3', '2/3', '1/2', '1/6'], explanation: 'E = {5, 6}; P(E) = 2/6 = 1/3 ≈ 0.333.' },
    ta: { q: 'ஒரு பகடை உருட்டப்படும்போது, 4 ஐ விடப் பெரிய எண் கிடைப்பதற்கான நிகழ்தகவு', options: ['1/3', '2/3', '1/2', '1/6'], explanation: 'E = {5, 6}; P(E) = 2/6 = 1/3 ≈ 0.333.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 9.1 Q1, p. 298', answer: 0,
    en: { q: 'The probability that a person’s birthday falls on a Sunday is', options: ['1/7', '1/365', '1/30', '6/7'], explanation: 'A week has 7 equally likely days, one of which is Sunday: 1/7.' },
    ta: { q: 'ஒரு மனிதரின் பிறந்த நாள் ஞாயிற்றுக்கிழமையாக இருக்க நிகழ்தகவு', options: ['1/7', '1/365', '1/30', '6/7'], explanation: 'வாரத்தில் 7 சமவாய்ப்பு நாள்கள்; அவற்றுள் ஞாயிறு ஒன்று: 1/7.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 9.1 Q2, p. 298', answer: 0,
    en: { q: 'The probability of getting a perfect square from the natural numbers 1 to 13 is', options: ['3/13', '4/13', '2/13', '3/10'], explanation: 'Perfect squares: 1, 4, 9 → 3 out of 13.' },
    ta: { q: '1 முதல் 13 வரை உள்ள இயல் எண்களில், முழுவர்க்க எண்ணாக இருக்க நிகழ்தகவு', options: ['3/13', '4/13', '2/13', '3/10'], explanation: 'முழு வர்க்கங்கள்: 1, 4, 9 → 13 இல் 3.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 9.1 Q3, p. 298', answer: 0,
    en: { q: 'The probability of throwing an even number with a single standard six-faced dice is', options: ['1/2', '1/3', '1/6', '2/3'], explanation: 'Even numbers {2, 4, 6}: 3/6 = 1/2.' },
    ta: { q: 'ஆறு முகங்கள் கொண்ட ஒரு சீரான பகடையை உருட்டும்போது ஓர் இரட்டை எண் கிடைப்பதற்கான நிகழ்தகவு', options: ['1/2', '1/3', '1/6', '2/3'], explanation: 'இரட்டை எண்கள் {2, 4, 6}: 3/6 = 1/2.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 9.1 Q4(i), p. 298', answer: 0,
    en: { q: 'A pot has 24 balls: 3 red, 5 blue and the rest green. The probability of picking a blue ball is', options: ['5/24', '1/8', '2/3', '5/19'], explanation: 'P(blue) = 5/24.' },
    ta: { q: 'ஒரு பானையில் 24 பந்துகள் உள்ளன; அவற்றில் 3 சிவப்பு, 5 நீலம், மீதி இருப்பவை பச்சை நிறமுடையவை. அவற்றில் ஒன்றைத் தேர்ந்தெடுக்கும்போது அது நீல நிறப் பந்தாக இருக்க நிகழ்தகவு', options: ['5/24', '1/8', '2/3', '5/19'], explanation: 'P(நீலம்) = 5/24.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 9.1 Q4(ii), p. 298', answer: 0,
    en: { q: 'A pot has 24 balls: 3 red, 5 blue and the rest green. The probability of picking a red ball is', options: ['1/8', '5/24', '3/21', '1/3'], explanation: 'P(red) = 3/24 = 1/8.' },
    ta: { q: 'ஒரு பானையில் 24 பந்துகள் உள்ளன; அவற்றில் 3 சிவப்பு, 5 நீலம், மீதி இருப்பவை பச்சை நிறமுடையவை. அவற்றில் ஒன்றைத் தேர்ந்தெடுக்கும்போது அது சிவப்பு நிறப் பந்தாக இருக்க நிகழ்தகவு', options: ['1/8', '5/24', '3/21', '1/3'], explanation: 'P(சிவப்பு) = 3/24 = 1/8.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 9.1 Q4(iii), p. 298', answer: 0,
    en: { q: 'A pot has 24 balls: 3 red, 5 blue and the rest green. The probability of picking a green ball is', options: ['2/3', '1/3', '8/24', '16/21'], explanation: 'Green = 24 − 8 = 16; P(green) = 16/24 = 2/3.' },
    ta: { q: 'ஒரு பானையில் 24 பந்துகள் உள்ளன; அவற்றில் 3 சிவப்பு, 5 நீலம், மீதி இருப்பவை பச்சை நிறமுடையவை. அவற்றில் ஒன்றைத் தேர்ந்தெடுக்கும்போது அது பச்சை நிறப் பந்தாக இருக்க நிகழ்தகவு', options: ['2/3', '1/3', '8/24', '16/21'], explanation: 'பச்சை = 24 − 8 = 16; P(பச்சை) = 16/24 = 2/3.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 9.1 Q5, p. 298', answer: 0,
    en: { q: 'When two coins are tossed, the probability of getting two heads is', options: ['1/4', '1/2', '3/4', '1/3'], explanation: 'S = {HH, HT, TH, TT}; only HH is favourable: 1/4.' },
    ta: { q: 'இரண்டு நாணயங்களை ஒரே நேரத்தில் சுண்டும்போது, இரு தலைகள் கிடைப்பதற்கான நிகழ்தகவு', options: ['1/4', '1/2', '3/4', '1/3'], explanation: 'S = {HH, HT, TH, TT}; HH மட்டுமே சாதகமானது: 1/4.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 9.1 Q6(i), p. 298', answer: 0,
    en: { q: 'Two dice are rolled. The probability that the sum is equal to 1 is', options: ['0', '1/36', '1/6', '1/12'], explanation: 'The smallest possible sum is 2, so a sum of 1 is impossible: probability 0.' },
    ta: { q: 'இரு பகடைகள் உருட்டப்படும்போது கிடைக்கும் எண்களின் கூடுதல் 1 க்குச் சமமாக இருக்க நிகழ்தகவு', options: ['0', '1/36', '1/6', '1/12'], explanation: 'மிகச் சிறிய கூடுதல் 2; எனவே கூடுதல் 1 இயலாது: நிகழ்தகவு 0.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 9.1 Q6(iii), p. 298', answer: 0,
    en: { q: 'Two dice are rolled. The probability that the sum is less than 13 is', options: ['1', '0', '35/36', '11/12'], explanation: 'The largest possible sum is 12, so every outcome has a sum less than 13: a sure event.' },
    ta: { q: 'இரு பகடைகள் உருட்டப்படும்போது கிடைக்கும் எண்களின் கூடுதல் 13 ஐ விடச் சிறியதாக இருக்க நிகழ்தகவு', options: ['1', '0', '35/36', '11/12'], explanation: 'மிகப்பெரிய கூடுதல் 12; எனவே எல்லா விளைவுகளின் கூடுதலும் 13 க்குக் குறைவு: உறுதியான நிகழ்ச்சி.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 9.1 Q7, p. 298', answer: 0,
    en: { q: 'A manufacturer tested 7000 LED lights and found 25 defective. The probability that a randomly selected LED light is defective is', options: ['1/280', '1/250', '25/6975', '279/280'], explanation: 'P = 25/7000 = 1/280.' },
    ta: { q: 'ஓர் உற்பத்தியாளர் 7000 ஒளி உமிழ் இருமுனைய விளக்குகளை (LED lights) சோதனை செய்ததில் அவற்றில் 25 விளக்குகள் குறைபாடுடையதாகக் கண்டறியப்பட்டன. சமவாய்ப்பு முறையில் ஒரு விளக்கைத் தேர்ந்தெடுக்கும்போது அது குறைபாடுடையதாக இருக்க நிகழ்தகவு', options: ['1/280', '1/250', '25/6975', '279/280'], explanation: 'P = 25/7000 = 1/280.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 9.1 Q8, p. 299', answer: 0,
    en: { q: 'A goalkeeper stops the goal 32 times out of 40 attempts. The probability that the opponent converts an attempt into a goal is', options: ['1/5', '4/5', '1/4', '8/32'], explanation: 'Goals scored = 40 − 32 = 8; P = 8/40 = 1/5.' },
    ta: { q: 'ஒரு கால்பந்தாட்டத்தில், ஓர் இலக்குக் காப்பாளரால் (goalkeeper) 40 இல் 32 முயற்சிகளைத் தடுக்க இயலும் எனில், எதிரணியானது ஒரு முயற்சியை இலக்காக (கோலாக) மாற்றுவதற்கான நிகழ்தகவு', options: ['1/5', '4/5', '1/4', '8/32'], explanation: 'இலக்காக மாறியவை = 40 − 32 = 8; P = 8/40 = 1/5.' },
  },
  {
    difficulty: 'medium', source: 'Book example 9.3, p. 297', answer: 0,
    en: { q: 'In 10 cricket matches, Team I beat Team II in the 1st, 6th and 9th matches. The relative frequency of Team I winning is', options: ['0.3', '0.7', '0.03', '0.6'], explanation: 'Team I won 3 of the 10 trials: 3/10 = 0.3.' },
    ta: { q: 'அணி I, அணி II ஆகிய இரு அணிகளும் 10 முறை மட்டைப் பந்து ஆடுகின்றன; அணி I முதலாவது, ஆறாவது, ஒன்பதாவது ஆட்டங்களில் அணி II ஐ வென்றது. அணி I வெற்றி பெறுவதற்கான ஒப்பீட்டு நிகழ்வெண் நிகழ்தகவு', options: ['0.3', '0.7', '0.03', '0.6'], explanation: '10 முயற்சிகளில் அணி I 3 இல் வென்றது: 3/10 = 0.3.' },
  },
  {
    difficulty: 'medium', source: 'Book example 9.4, p. 300', answer: 0,
    en: { q: 'The probability that it will rain tomorrow is 91/100. The probability that it will not rain tomorrow is', options: ['0.09', '0.91', '0.19', '1.91'], explanation: 'P(E′) = 1 − P(E) = 1 − 0.91 = 0.09.' },
    ta: { q: 'நாளைய மழை பொழிவிற்கான நிகழ்தகவு 91/100 எனில், நாளை மழை பொழியாமல் இருப்பதற்கான நிகழ்தகவு', options: ['0.09', '0.91', '0.19', '1.91'], explanation: 'P(E′) = 1 − P(E) = 1 − 0.91 = 0.09.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 9.2 Q1, p. 301', answer: 0,
    en: { q: 'A company manufactured 10000 laptops in 6 months and 25 were defective. The probability that a laptop chosen at random is a good one is', options: ['0.9975', '0.0025', '0.975', '0.25'], explanation: 'Good laptops = 9975; P = 9975/10000 = 0.9975.' },
    ta: { q: 'ஒரு நிறுவனம் ஆறு மாதங்களில் 10000 மடிக்கணினிகளை உற்பத்தி செய்தது. அவற்றில் 25 மடிக்கணினிகள் குறைபாடு உடையனவாகக் கண்டறியப்பட்டன. சமவாய்ப்பு முறையில் ஒரு மடிக்கணினியைத் தேர்ந்தெடுக்கும்போது அது குறைபாடில்லாததாக இருக்க நிகழ்தகவு', options: ['0.9975', '0.0025', '0.975', '0.25'], explanation: 'நல்லவை = 9975; P = 9975/10000 = 0.9975.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 9.2 Q2, p. 301', answer: 0,
    en: { q: 'In a survey of 400 youngsters, 191 have a voter ID card. The probability that a youngster selected at random does not have one is', options: ['209/400', '191/400', '209/191', '191/209'], explanation: 'P(not) = 1 − 191/400 = 209/400.' },
    ta: { q: '400 இளைஞர்களிடம் நடத்தப்பட்ட ஓர் ஆய்வில், 191 பேர் வாக்காளர் அடையாள அட்டை வைத்திருப்பதாகக் கண்டறியப்பட்டது. சமவாய்ப்பு முறையில் அவர்களில் ஒருவரைத் தேர்ந்தெடுக்கும்போது அவர் வாக்காளர் அடையாள அட்டை வைத்திருக்கும் நபராக இல்லாமல் இருக்க நிகழ்தகவு', options: ['209/400', '191/400', '209/191', '191/209'], explanation: 'P(இல்லாமை) = 1 − 191/400 = 209/400.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 9.2 Q4, p. 302', answer: 0,
    en: { q: 'The probability of a player winning a particular tennis match is 0.72. The probability of the player losing the match is', options: ['0.28', '0.72', '1.72', '0.38'], explanation: 'P(lose) = 1 − 0.72 = 0.28.' },
    ta: { q: 'ஒரு வரிப்பந்து (tennis) விளையாட்டு வீரர் ஒரு குறிப்பிட்ட ஆட்டத்தில் வெற்றி பெறுவதற்கான நிகழ்தகவு 0.72 எனில், அவர் அந்த ஆட்டத்தில் தோல்வியடைவதற்கான நிகழ்தகவு', options: ['0.28', '0.72', '1.72', '0.38'], explanation: 'P(தோல்வி) = 1 − 0.72 = 0.28.' },
  },
  {
    difficulty: 'medium', source: '§9.5, p. 299', answer: 0,
    en: { q: 'When a dice is rolled, which pair of events are equally likely?', options: ['Getting an odd number and getting an even number', 'Getting an even number and getting 1', 'Getting 6 and getting a number less than 6', 'Getting a prime number and getting 1'], explanation: 'Odd {1, 3, 5} and even {2, 4, 6} each have probability 1/2; even (1/2) and 1 (1/6) are not equally likely.' },
    ta: { q: 'ஒரு பகடை உருட்டப்படும்போது எந்த இரு நிகழ்ச்சிகள் சமவாய்ப்பு நிகழ்ச்சிகள்?', options: ['ஒற்றை எண் கிடைத்தல், இரட்டை எண் கிடைத்தல்', 'இரட்டை எண் கிடைத்தல், 1 கிடைத்தல்', '6 கிடைத்தல், 6 ஐ விடக் குறைந்த எண் கிடைத்தல்', 'பகா எண் கிடைத்தல், 1 கிடைத்தல்'], explanation: 'ஒற்றை {1, 3, 5}, இரட்டை {2, 4, 6} இரண்டின் நிகழ்தகவும் 1/2; இரட்டை (1/2), 1 (1/6) சமவாய்ப்புடையவை அல்ல.' },
  },
  {
    difficulty: 'medium', source: '§9.5, p. 299', answer: 0,
    en: { q: 'A dice is thrown and E is the event of getting an even face. The complementary event E′ is', options: ['getting an odd face', 'getting a 6', 'getting a prime number', 'getting a number greater than 3'], explanation: 'E = {2, 4, 6}, so E′ = {1, 3, 5}, the odd faces; P(E) + P(E′) = 1.' },
    ta: { q: 'ஒரு பகடை உருட்டப்படுகிறது; E என்பது இரட்டை எண் கிடைக்கும் நிகழ்ச்சி. நிரப்பு நிகழ்ச்சி E′', options: ['ஒற்றை எண் கிடைத்தல்', '6 கிடைத்தல்', 'பகா எண் கிடைத்தல்', '3 ஐ விடப் பெரிய எண் கிடைத்தல்'], explanation: 'E = {2, 4, 6}, எனவே E′ = {1, 3, 5}, ஒற்றை எண்கள்; P(E) + P(E′) = 1.' },
  },

  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise 9.1 Q6(ii), p. 298', answer: 0,
    en: { q: 'Two dice are rolled. The probability that the sum is equal to 4 is', options: ['1/12', '1/9', '1/6', '1/18'], explanation: 'Favourable: (1, 3), (2, 2), (3, 1) – 3 out of 36 = 1/12.' },
    ta: { q: 'இரு பகடைகள் உருட்டப்படும்போது கிடைக்கும் எண்களின் கூடுதல் 4 க்குச் சமமாக இருக்க நிகழ்தகவு', options: ['1/12', '1/9', '1/6', '1/18'], explanation: 'சாதகமானவை: (1, 3), (2, 2), (3, 1) – 36 இல் 3 = 1/12.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 9.1 Q9, p. 299', answer: 0, imageUrl: `${IMG}/spinner.png`,
    en: { q: 'The spinner shown has 8 equal sectors numbered 1 to 8. The probability that it will not land on a multiple of 3 is', options: ['3/4', '1/4', '5/8', '2/3'], explanation: 'Multiples of 3 are 3 and 6 (2 of 8); P(not) = 1 − 2/8 = 6/8 = 3/4.' },
    ta: { q: 'படத்திலுள்ள சுழலட்டையில் (spinner) 1 முதல் 8 வரை எண்ணிடப்பட்ட 8 சம பகுதிகள் உள்ளன. அதன் முள் 3 இன் மடங்குகளில் நிலை கொள்ளாமல் இருப்பதற்கான நிகழ்தகவு', options: ['3/4', '1/4', '5/8', '2/3'], explanation: '3 இன் மடங்குகள் 3, 6 (8 இல் 2); P = 1 − 2/8 = 6/8 = 3/4.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 9.1 Q10, p. 299', answer: 0, imageUrl: `${IMG}/spinner.png`,
    en: { q: 'On the same spinner with 8 equal sectors numbered 1 to 8, the probability that the pointer lands on a prime number is', options: ['1/2', '3/8', '5/8', '1/4'], explanation: 'Primes from 1 to 8 are 2, 3, 5, 7 – 4 of 8 = 1/2 (1 is not prime).' },
    ta: { q: '1 முதல் 8 வரை எண்ணிடப்பட்ட 8 சம பகுதிகள் கொண்ட அதே சுழலட்டையில், முள் ஒரு பகா எண்ணில் நிற்பதற்கான நிகழ்தகவு', options: ['1/2', '3/8', '5/8', '1/4'], explanation: '1 முதல் 8 வரை பகா எண்கள் 2, 3, 5, 7 – 8 இல் 4 = 1/2 (1 பகா எண் அல்ல).' },
  },
  {
    difficulty: 'hard', source: 'Book example 9.2, p. 297', answer: 0,
    en: { q: 'In an office of 42 staff, 7 use cars, 20 use two-wheelers and 15 use cycles. The relative frequency of two-wheeler users is', options: ['10/21', '1/6', '5/14', '20/22'], explanation: '20/42 = 10/21. Also 1/6 + 10/21 + 5/14 = 1.' },
    ta: { q: '42 நபர்கள் பணி செய்யும் ஓர் அலுவலகத்தில் 7 பணியாளர்கள் மகிழுந்து, 20 பணியாளர்கள் இரு சக்கர வண்டி, மீதி 15 பணியாளர்கள் மிதிவண்டி பயன்படுத்துகிறார்கள். இரு சக்கர வண்டி பயன்படுத்துவோருக்கான ஒப்பீட்டு நிகழ்வெண் நிகழ்தகவு', options: ['10/21', '1/6', '5/14', '20/22'], explanation: '20/42 = 10/21. மேலும் 1/6 + 10/21 + 5/14 = 1.' },
  },
  {
    difficulty: 'hard', source: 'Book example 9.5, p. 301', answer: 0,
    en: { q: 'Of 1184 centum scorers, 233 were in Mathematics, 125 in Social Science and 106 in Science. The probability that a randomly selected centum scorer is in Mathematics is', options: ['233/1184', '106/1184', '233/464', '951/1184'], explanation: 'n(E₁) = 233, n(S) = 1184; P(E₁) = 233/1184.' },
    ta: { q: 'நூற்றுக்கு நூறு மதிப்பெண்கள் பெற்ற 1184 மாணவர்களில், 233 பேர் கணிதத்திலும், 125 பேர் சமூக அறிவியலிலும், 106 பேர் அறிவியலிலும் நூற்றுக்கு நூறு பெற்றுள்ளனர். சமவாய்ப்பு முறையில் ஒரு மாணவரைத் தேர்ந்தெடுக்கும்போது அந்த மாணவர் கணிதத்தில் நூற்றுக்கு நூறு மதிப்பெண் பெற்றவராக இருக்க நிகழ்தகவு', options: ['233/1184', '106/1184', '233/464', '951/1184'], explanation: 'n(E₁) = 233, n(S) = 1184; P(E₁) = 233/1184.' },
  },
  {
    difficulty: 'hard', source: 'Book example 9.5, p. 301', answer: 0,
    en: { q: 'Of 1184 centum scorers, 106 were in Science. The probability that a randomly selected centum scorer is NOT a centum scorer in Science is', options: ['1078/1184', '106/1184', '951/1184', '1078/106'], explanation: 'P(E₂′) = 1 − 106/1184 = 1078/1184.' },
    ta: { q: 'நூற்றுக்கு நூறு மதிப்பெண்கள் பெற்ற 1184 மாணவர்களில், 106 பேர் அறிவியலில் நூற்றுக்கு நூறு பெற்றுள்ளனர். சமவாய்ப்பு முறையில் ஒரு மாணவரைத் தேர்ந்தெடுக்கும்போது அந்த மாணவர் அறிவியலில் நூற்றுக்கு நூறு பெறாதவராக இருக்க நிகழ்தகவு', options: ['1078/1184', '106/1184', '951/1184', '1078/106'], explanation: 'P(E₂′) = 1 − 106/1184 = 1078/1184.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 9.2 Q3, p. 301', answer: 0,
    en: { q: 'The probability of guessing the correct answer to a question is x/3 and of not guessing it is x/5. The value of x is', options: ['15/8', '8/15', '3/5', '5/3'], explanation: 'x/3 + x/5 = 1 ⇒ 8x/15 = 1 ⇒ x = 15/8.' },
    ta: { q: 'ஒரு வினாவிற்கான சரியான விடையை ஊகிப்பதற்கான நிகழ்தகவு x/3 என்க. சரியான விடையை ஊகிக்காமல் இருப்பதற்கான நிகழ்தகவு x/5 எனில், x இன் மதிப்பு', options: ['15/8', '8/15', '3/5', '5/3'], explanation: 'x/3 + x/5 = 1 ⇒ 8x/15 = 1 ⇒ x = 15/8.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 9.2 Q5(i), p. 302', answer: 0,
    en: { q: '1500 families were surveyed: 860 have only part-time maids, 370 only full-time maids and 250 both. The probability that a selected family has both types of maids is', options: ['1/6', '37/150', '43/75', '1/75'], explanation: 'P = 250/1500 = 1/6.' },
    ta: { q: '1500 குடும்பங்களின் பணிப்பெண்கள் பற்றிய தரவு: பகுதிநேரம் மட்டும் – 860, முழுநேரம் மட்டும் – 370, இரண்டு வகைப் பணிப்பெண்களும் – 250 குடும்பங்கள். சமவாய்ப்பு முறையில் ஒரு குடும்பம் தேர்ந்தெடுக்கப்படும்போது, அக்குடும்பம் இரு வகைப் பணிப்பெண்களும் வைத்திருக்க நிகழ்தகவு', options: ['1/6', '37/150', '43/75', '1/75'], explanation: 'P = 250/1500 = 1/6.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 9.2 Q5(ii), p. 302', answer: 0,
    en: { q: '1500 families were surveyed: 860 have only part-time maids, 370 only full-time maids and 250 both. The probability that a selected family has only part-time maids is', options: ['43/75', '37/50', '1/6', '37/150'], explanation: 'P = 860/1500 = 43/75 (the book’s answer uses the "only part-time" count).' },
    ta: { q: '1500 குடும்பங்களின் பணிப்பெண்கள் பற்றிய தரவு: பகுதிநேரம் மட்டும் – 860, முழுநேரம் மட்டும் – 370, இரண்டு வகைப் பணிப்பெண்களும் – 250 குடும்பங்கள். சமவாய்ப்பு முறையில் ஒரு குடும்பம் தேர்ந்தெடுக்கப்படும்போது, அக்குடும்பம் பகுதிநேரப் பணிப்பெண் மட்டும் வைத்திருக்க நிகழ்தகவு', options: ['43/75', '37/50', '1/6', '37/150'], explanation: 'P = 860/1500 = 43/75 (நூலின் விடை “பகுதிநேரம் மட்டும்” எண்ணிக்கையைப் பயன்படுத்துகிறது).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 9.2 Q5(iii), p. 302', answer: 0,
    en: { q: '1500 families were surveyed: 860 have only part-time maids, 370 only full-time maids and 250 both. The probability that a selected family has no maids is', options: ['1/75', '1/6', '0', '74/75'], explanation: 'No maids = 1500 − (860 + 370 + 250) = 20; P = 20/1500 = 1/75.' },
    ta: { q: '1500 குடும்பங்களின் பணிப்பெண்கள் பற்றிய தரவு: பகுதிநேரம் மட்டும் – 860, முழுநேரம் மட்டும் – 370, இரண்டு வகைப் பணிப்பெண்களும் – 250 குடும்பங்கள். சமவாய்ப்பு முறையில் ஒரு குடும்பம் தேர்ந்தெடுக்கப்படும்போது, அக்குடும்பம் பணிப்பெண் வைத்திருக்காமல் இருக்க நிகழ்தகவு', options: ['1/75', '1/6', '0', '74/75'], explanation: 'பணிப்பெண் இல்லாதவை = 1500 − (860 + 370 + 250) = 20; P = 20/1500 = 1/75.' },
  },
  {
    difficulty: 'hard', source: '§9.4 Progress Check, p. 297', answer: 0,
    en: { q: 'Which of these values can NOT be the probability of an outcome?\n1/5, −1/7, 0.40, −0.52, 0, 1.3, 1, 72%, 107%', options: ['−1/7, −0.52, 1.3 and 107%', '−1/7 and −0.52 only', '1.3 and 107% only', '0, 1, −1/7 and 1.3'], explanation: 'A probability lies from 0 to 1 (0% to 100%); negative values and values above 1 are impossible. 0 and 1 are allowed.' },
    ta: { q: 'பின்வருவனவற்றுள் எவை ஒரு விளைவின் நிகழ்தகவாக இருக்க முடியாது?\n1/5, −1/7, 0.40, −0.52, 0, 1.3, 1, 72%, 107%', options: ['−1/7, −0.52, 1.3, 107%', '−1/7, −0.52 மட்டும்', '1.3, 107% மட்டும்', '0, 1, −1/7, 1.3'], explanation: 'நிகழ்தகவு 0 முதல் 1 வரை (0% முதல் 100% வரை); குறை எண்களும் 1 ஐ விடப் பெரியவையும் இயலாது. 0, 1 ஏற்கத்தக்கவை.' },
  },
  {
    difficulty: 'hard', source: '§9.5 Progress Check, p. 300', answer: 0,
    en: { q: 'Which pair of events is mutually exclusive?', options: ['Rolling a dice: getting a 5 and getting an even number', 'Rolling a dice: getting a 5 and getting an odd number', 'Rolling a dice: getting a prime number and getting an odd number', 'Selecting a day: getting Sunday and getting a holiday'], explanation: '5 is odd, so it can never be even – these cannot occur together. In the other pairs both events can happen at once (5 is odd; 3 is prime and odd; Sunday can be a holiday).' },
    ta: { q: 'பின்வருவனவற்றுள் எந்த இணை ஒன்றையொன்று விலக்கும் நிகழ்ச்சிகள்?', options: ['பகடை உருட்டுதல்: 5 கிடைத்தல், இரட்டை எண் கிடைத்தல்', 'பகடை உருட்டுதல்: 5 கிடைத்தல், ஒற்றை எண் கிடைத்தல்', 'பகடை உருட்டுதல்: பகா எண் கிடைத்தல், ஒற்றை எண் கிடைத்தல்', 'ஒரு நாளைத் தேர்ந்தெடுத்தல்: ஞாயிறு கிடைத்தல், விடுமுறை கிடைத்தல்'], explanation: '5 ஒற்றை எண்; அது இரட்டையாக இருக்க முடியாது – இவை ஒருசேர நிகழா. மற்ற இணைகளில் இரண்டும் ஒரே நேரத்தில் நிகழலாம் (5 ஒற்றை; 3 பகா, ஒற்றை; ஞாயிறு விடுமுறையாகலாம்).' },
  },
  {
    difficulty: 'hard', source: '§9.4, p. 296', answer: 0,
    en: { q: 'Assertion (A): 1.3 cannot be the probability of an event.\nReason (R): For any event E, 0 ≤ P(E) ≤ 1.', options: AR_EN, explanation: 'Because a probability can never exceed 1, the value 1.3 is impossible; R explains A.' },
    ta: { q: 'கூற்று (A): 1.3 ஒரு நிகழ்ச்சியின் நிகழ்தகவாக இருக்க முடியாது.\nகாரணம் (R): எந்த நிகழ்ச்சி E க்கும் 0 ≤ P(E) ≤ 1.', options: AR_TA, explanation: 'நிகழ்தகவு 1 ஐ மிஞ்சாது என்பதால் 1.3 இயலாது; R, A ஐ விளக்குகிறது.' },
  },
  {
    difficulty: 'hard', source: '§9.5, p. 299', answer: 3,
    en: { q: 'Assertion (A): When a dice is rolled, getting a 5 and getting an odd number are mutually exclusive events.\nReason (R): Two events that cannot occur simultaneously in a single trial are mutually exclusive.', options: AR_EN, explanation: 'Getting 5 is itself an odd number, so both events occur together – A is false. R is the correct definition.' },
    ta: { q: 'கூற்று (A): பகடை உருட்டும்போது 5 கிடைத்தலும் ஒற்றை எண் கிடைத்தலும் ஒன்றையொன்று விலக்கும் நிகழ்ச்சிகள்.\nகாரணம் (R): ஒரு முயற்சியில் ஒரே நேரத்தில் நடக்க இயலாத இரு நிகழ்ச்சிகள் ஒன்றையொன்று விலக்கும் நிகழ்ச்சிகள்.', options: AR_TA, explanation: '5 ஓர் ஒற்றை எண்; எனவே இரண்டும் ஒருசேர நிகழும் – A தவறு. R சரியான வரையறை.' },
  },
  {
    difficulty: 'hard', source: '§9.3, p. 295', answer: 0,
    en: { q: 'Assertion (A): The classical approach to probability can be used only when the outcomes are equally likely.\nReason (R): Classical probability P(E) = n(E)/n(S) counts outcomes, treating each outcome as having the same chance.', options: AR_EN, explanation: 'Counting favourable outcomes over total outcomes only gives the probability if every outcome is equally likely, so R explains A.' },
    ta: { q: 'கூற்று (A): விளைவுகள் சமவாய்ப்புடையவையாக இருக்கும்போது மட்டுமே தொன்மை அணுகுமுறையைப் பயன்படுத்த முடியும்.\nகாரணம் (R): தொன்மை நிகழ்தகவு P(E) = n(E)/n(S) ஒவ்வொரு விளைவுக்கும் சம வாய்ப்பு எனக் கொண்டு விளைவுகளை எண்ணுகிறது.', options: AR_TA, explanation: 'சாதகமான விளைவுகளை மொத்த விளைவுகளால் வகுப்பது, ஒவ்வொரு விளைவும் சமவாய்ப்புடையது எனில் மட்டுமே நிகழ்தகவைத் தரும்; R, A ஐ விளக்குகிறது.' },
  },
  {
    difficulty: 'hard', source: '§9.5, p. 299–300', answer: 0,
    en: { q: 'Which of these statements are correct?\n(i) E and its complement E′ are mutually exclusive.\n(ii) P(E) + P(E′) = 1.\n(iii) The probability of a sure event is 0.\n(iv) Getting a head and a tail in a single flip of a fair coin is impossible.', options: ['(i), (ii) and (iv) only', '(i), (ii) and (iii) only', '(ii) and (iii) only', '(i) and (iv) only'], explanation: 'A sure event has probability 1, not 0, so (iii) is wrong; the others are correct.' },
    ta: { q: 'பின்வருவனவற்றுள் சரியான கூற்றுகள் எவை?\n(i) E உம் அதன் நிரப்பு E′ உம் ஒன்றையொன்று விலக்கும் நிகழ்ச்சிகள்.\n(ii) P(E) + P(E′) = 1.\n(iii) உறுதியான நிகழ்ச்சியின் நிகழ்தகவு 0.\n(iv) சீரான நாணயத்தை ஒருமுறை சுண்டும்போது தலையும் பூவும் ஒருசேரக் கிடைப்பது இயலாது.', options: ['(i), (ii), (iv) மட்டும்', '(i), (ii), (iii) மட்டும்', '(ii), (iii) மட்டும்', '(i), (iv) மட்டும்'], explanation: 'உறுதியான நிகழ்ச்சியின் நிகழ்தகவு 1, 0 அல்ல; எனவே (iii) தவறு; மற்றவை சரி.' },
  },
  {
    difficulty: 'hard', source: '§9.4, p. 296', answer: 0,
    en: { q: 'A coin is tossed 50 times and heads come up 23 times. Which statement about the empirical probability of a head is correct?', options: ['It is 23/50 = 0.46, and it may change if the experiment is repeated', 'It must be exactly 1/2 for every set of 50 tosses', 'It is 27/50 because tails are complementary', 'It cannot be found without knowing the classical probability'], explanation: 'Empirical P(E) = r/n = 23/50; relative frequencies can differ each time the experiment is repeated, and get closer to the true value as n grows.' },
    ta: { q: 'ஒரு நாணயம் 50 முறை சுண்டப்பட்டதில் 23 முறை தலை கிடைத்தது. தலை கிடைப்பதற்கான பட்டறி நிகழ்தகவு பற்றிய சரியான கூற்று எது?', options: ['அது 23/50 = 0.46; சோதனையை மீண்டும் செய்தால் மாறலாம்', 'ஒவ்வொரு 50 சுண்டல்களுக்கும் அது சரியாக 1/2 ஆக இருக்க வேண்டும்', 'பூ நிரப்பு நிகழ்ச்சி என்பதால் அது 27/50', 'தொன்மை நிகழ்தகவு தெரியாமல் அதைக் காண இயலாது'], explanation: 'பட்டறி P(E) = r/n = 23/50; சோதனையை ஒவ்வொரு முறை செய்யும்போதும் ஒப்பீட்டு நிகழ்வெண் மாறலாம்; n பெருகப் பெருக உண்மை மதிப்பை நெருங்கும்.' },
  },
];
