// Tamil Nadu State Board, 9th Mathematics, Unit 1 – Set Language (கண மொழி).
// Book exercise / example questions (answers checked against the book's answer key)
// plus our own questions so that every section is covered at three levels.
// source = section or exercise and printed page of the English-medium book.

import { BankQuestion, AR_EN, AR_TA } from './types';

const IMG = '/content/9/state_board/maths/01';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: '§1.2, p. 2', answer: 0,
    en: { q: 'A set is', options: ['a well-defined collection of objects', 'any collection of objects', 'a collection of numbers only', 'a collection of good things'], explanation: 'A set is a well-defined collection of objects: we must be able to decide whether a given object belongs to it.' },
    ta: { q: 'கணம் என்பது', options: ['நன்கு வரையறுக்கப்பட்ட பொருட்களின் தொகுப்பு', 'ஏதேனும் பொருட்களின் தொகுப்பு', 'எண்களின் தொகுப்பு மட்டும்', 'நல்ல பொருட்களின் தொகுப்பு'], explanation: 'கணம் என்பது நன்கு வரையறுக்கப்பட்ட பொருட்களின் தொகுப்பு; ஒரு பொருள் அதில் உள்ளதா என்பதை உறுதியாகக் கூற முடிய வேண்டும்.' },
  },
  {
    difficulty: 'easy', source: '§1.1, p. 1', answer: 0,
    en: { q: 'The theory of sets was developed by the German mathematician', options: ['Georg Cantor', 'John Venn', 'Augustus De Morgan', 'Diophantus'], explanation: 'Set theory was developed by Georg Cantor (1845–1918).' },
    ta: { q: 'கணக் கோட்பாட்டை உருவாக்கிய ஜெர்மானியக் கணிதவியலாளர்', options: ['ஜார்ஜ் கேண்டர்', 'ஜான் வென்', 'அகஸ்டஸ் டி மார்கன்', 'டயோஃபாண்டஸ்'], explanation: 'கணக் கோட்பாட்டை உருவாக்கியவர் ஜார்ஜ் கேண்டர் (1845–1918).' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 1.1 Q1, p. 5', answer: 0,
    en: { q: 'Which of the following is a set?', options: ['The collection of prime numbers up to 100', 'The collection of rich people in India', 'The collection of good hockey players', 'The collection of beautiful flowers in a garden'], explanation: 'Prime numbers up to 100 are well defined; "rich", "good" and "beautiful" are not, so those collections are not sets.' },
    ta: { q: 'கீழ்க்காண்பனவற்றில் எது கணம்?', options: ['100 வரையிலான பகா எண்களின் தொகுப்பு', 'இந்தியாவில் உள்ள பணக்காரர்களின் தொகுப்பு', 'சிறந்த ஹாக்கி வீரர்களின் தொகுப்பு', 'தோட்டத்தில் உள்ள அழகான மலர்களின் தொகுப்பு'], explanation: '100 வரையிலான பகா எண்கள் நன்கு வரையறுக்கப்பட்டவை; "பணக்காரர்", "சிறந்த", "அழகான" என்பவை வரையறுக்கப்படாதவை.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 1.1 Q1, p. 5', answer: 0,
    en: { q: 'Which of the following is NOT a set?', options: ['The collection of good hockey players', 'The collection of all rivers in India', 'The collection of prime numbers up to 100', 'The collection of days in a week'], explanation: 'Whether a player is "good" is a matter of opinion, so that collection is not well defined.' },
    ta: { q: 'கீழ்க்காண்பனவற்றில் எது கணம் அல்ல?', options: ['சிறந்த ஹாக்கி வீரர்களின் தொகுப்பு', 'இந்தியாவில் உள்ள அனைத்து ஆறுகளின் தொகுப்பு', '100 வரையிலான பகா எண்களின் தொகுப்பு', 'ஒரு வாரத்தின் நாட்களின் தொகுப்பு'], explanation: 'ஒரு வீரர் "சிறந்தவர்" என்பது கருத்து வேறுபாட்டிற்கு உரியது; எனவே அத்தொகுப்பு நன்கு வரையறுக்கப்படவில்லை.' },
  },
  {
    difficulty: 'easy', source: 'Book example 1.1, p. 3', answer: 0,
    en: { q: 'A = {Ashwin, Murali Vijay, Vijay Shankar, Badrinath}. Then Ganguly _____ A.', options: ['∉', '∈', '⊂', '='], explanation: 'Ganguly is not an element of A, so Ganguly ∉ A.' },
    ta: { q: 'A = {அஸ்வின், முரளி விஜய், விஜய் சங்கர், பத்ரிநாத்} எனில், கங்குலி _____ A.', options: ['∉', '∈', '⊂', '='], explanation: 'கங்குலி A இன் உறுப்பு அல்ல; எனவே கங்குலி ∉ A.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 1.1 Q3(a), p. 5', answer: 0,
    en: { q: 'A = {0, 3, 5, 8}, B = {2, 4, 6, 10}, C = {12, 14, 18, 20}. Which statement is correct?', options: ['18 ∈ C', '14 ∉ C', '5 ∈ B', '0 ∈ B'], explanation: '18 is in C, so 18 ∈ C is true; 14 is in C, and 5 and 0 are not in B.' },
    ta: { q: 'A = {0, 3, 5, 8}, B = {2, 4, 6, 10}, C = {12, 14, 18, 20}. கீழ்க்காண்பனவற்றில் சரியானது எது?', options: ['18 ∈ C', '14 ∉ C', '5 ∈ B', '0 ∈ B'], explanation: '18 ஆனது C இல் உள்ளது; 14 ஆனது C இல் உள்ளது; 5, 0 ஆகியவை B இல் இல்லை.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 1.1 Q3(b), p. 5', answer: 0,
    en: { q: 'A = {0, 3, 5, 8}, B = {2, 4, 6, 10}, C = {12, 14, 18, 20}. Fill in the blank: 3 ∈ _____', options: ['A', 'B', 'C', 'B and C'], explanation: '3 is an element of A only.' },
    ta: { q: 'A = {0, 3, 5, 8}, B = {2, 4, 6, 10}, C = {12, 14, 18, 20}. கோடிட்ட இடத்தை நிரப்புக: 3 ∈ _____', options: ['A', 'B', 'C', 'B மற்றும் C'], explanation: '3 ஆனது A இன் உறுப்பு மட்டுமே.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 1.1 Q2, p. 5', answer: 0,
    en: { q: 'The set of letters of the word MISSISSIPPI in roster form is', options: ['{M, I, S, P}', '{M, I, S, S, I, P}', '{M, I, S}', '{M, S, P}'], explanation: 'In a set each element is listed only once: M, I, S, P.' },
    ta: { q: 'MISSISSIPPI என்ற சொல்லின் எழுத்துகளின் கணத்தின் பட்டியல் முறை', options: ['{M, I, S, P}', '{M, I, S, S, I, P}', '{M, I, S}', '{M, S, P}'], explanation: 'கணத்தில் ஒவ்வோர் உறுப்பும் ஒரு முறை மட்டுமே எழுதப்படும்: M, I, S, P.' },
  },
  {
    difficulty: 'easy', source: 'Book example 1.2, p. 4', answer: 0,
    en: { q: 'The set of letters of the word ASSESSMENT in roster form is', options: ['{A, S, E, M, N, T}', '{A, S, E, M, T}', '{A, S, S, E, M, N, T}', '{A, E, M, N, T}'], explanation: 'Listing each letter once: A, S, E, M, N, T.' },
    ta: { q: 'ASSESSMENT என்ற சொல்லின் எழுத்துகளின் கணத்தின் பட்டியல் முறை', options: ['{A, S, E, M, N, T}', '{A, S, E, M, T}', '{A, S, S, E, M, N, T}', '{A, E, M, N, T}'], explanation: 'ஒவ்வோர் எழுத்தையும் ஒருமுறை எழுத: A, S, E, M, N, T.' },
  },
  {
    difficulty: 'easy', source: '§1.3.2, p. 4', answer: 0,
    en: { q: 'In set builder form, the symbol ":" or "|" stands for', options: ['such that', 'belongs to', 'is a subset of', 'union'], explanation: 'In {x : x is a vowel}, the colon is read "such that".' },
    ta: { q: 'கணக் கட்டமைப்பு முறையில் ":" அல்லது "|" என்ற குறியீடு குறிப்பது', options: ['"என்றவாறு"', '"உறுப்பு"', '"உட்கணம்"', '"சேர்ப்பு"'], explanation: '{x : x ஓர் உயிரெழுத்து} என்பதில் ":" ஐ "என்றவாறு" எனப் படிக்கிறோம்.' },
  },
  {
    difficulty: 'easy', source: '§1.3.3, p. 4', answer: 0,
    en: { q: 'Writing a set by listing all its elements, such as A = {a, e, i, o, u}, is called', options: ['roster form', 'set builder form', 'descriptive form', 'Venn form'], explanation: 'Listing the elements inside braces is the roster (tabular) form.' },
    ta: { q: 'A = {a, e, i, o, u} என உறுப்புகளைப் பட்டியலிட்டு எழுதும் முறை', options: ['பட்டியல் முறை', 'கணக் கட்டமைப்பு முறை', 'விவரிப்பு முறை', 'வென்பட முறை'], explanation: 'உறுப்புகளை அடைப்புக்குறிக்குள் பட்டியலிடுவது பட்டியல் முறை.' },
  },
  {
    difficulty: 'easy', source: '§1.4.1, p. 6', answer: 0,
    en: { q: 'A set with no element is called', options: ['the empty (null) set', 'a singleton set', 'a universal set', 'an infinite set'], explanation: 'A set with no element is the empty set, null set or void set, written ∅ or { }.' },
    ta: { q: 'உறுப்புகள் எதுவும் இல்லாத கணம்', options: ['வெற்றுக் கணம்', 'ஓருறுப்புக் கணம்', 'அனைத்துக் கணம்', 'முடிவுறாக் கணம்'], explanation: 'உறுப்புகள் இல்லாத கணம் வெற்றுக் கணம்; இது ∅ அல்லது { } எனக் குறிக்கப்படும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 1.2 Q4(iii), p. 12', answer: 0,
    en: { q: 'The set C = {0} is', options: ['a singleton set', 'the null set', 'an infinite set', 'a power set'], explanation: 'C has exactly one element, 0, so it is a singleton set (not the empty set).' },
    ta: { q: 'C = {0} என்ற கணம்', options: ['ஓருறுப்புக் கணம்', 'வெற்றுக் கணம்', 'முடிவுறாக் கணம்', 'அடுக்குக் கணம்'], explanation: 'C இல் 0 என்ற ஒரே ஓர் உறுப்பு உள்ளது; எனவே அது ஓருறுப்புக் கணம், வெற்றுக் கணம் அல்ல.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 1.2 Q4(iv), p. 12', answer: 0,
    en: { q: 'D = the set of all triangles having four sides. D is', options: ['a null set', 'a singleton set', 'an infinite set', 'a universal set'], explanation: 'No triangle has four sides, so D has no element.' },
    ta: { q: 'D = நான்கு பக்கங்கள் கொண்ட அனைத்து முக்கோணங்களின் கணம். D என்பது', options: ['வெற்றுக் கணம்', 'ஓருறுப்புக் கணம்', 'முடிவுறாக் கணம்', 'அனைத்துக் கணம்'], explanation: 'எந்த முக்கோணத்திற்கும் நான்கு பக்கங்கள் இல்லை; எனவே D இல் உறுப்பு இல்லை.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 1.2 Q2(ii), p. 11', answer: 0,
    en: { q: 'Y = the set of all straight lines passing through a point. Y is', options: ['an infinite set', 'a finite set', 'a null set', 'a singleton set'], explanation: 'Infinitely many lines pass through a point.' },
    ta: { q: 'Y = ஒரு புள்ளி வழியாகச் செல்லும் அனைத்து நேர்க்கோடுகளின் கணம். Y என்பது', options: ['முடிவுறாக் கணம்', 'முடிவுறு கணம்', 'வெற்றுக் கணம்', 'ஓருறுப்புக் கணம்'], explanation: 'ஒரு புள்ளி வழியே எண்ணற்ற நேர்க்கோடுகள் செல்லும்.' },
  },
  {
    difficulty: 'easy', source: '§1.4.4, p. 7', answer: 0,
    en: { q: 'The number of elements in a finite set A is called its', options: ['cardinal number, n(A)', 'power set, P(A)', 'complement, A′', 'universal set, U'], explanation: 'The cardinal number n(A) is the number of elements of A.' },
    ta: { q: 'முடிவுறு கணம் A இல் உள்ள உறுப்புகளின் எண்ணிக்கை', options: ['ஆதி எண், n(A)', 'அடுக்குக் கணம், P(A)', 'நிரப்பி, A′', 'அனைத்துக் கணம், U'], explanation: 'A இன் உறுப்புகளின் எண்ணிக்கை அதன் ஆதி எண் n(A) ஆகும்.' },
  },
  {
    difficulty: 'easy', source: 'Book example 1.3, p. 7', answer: 0,
    en: { q: 'If A = {1, 2, 3, 4, 5, 7, 9, 11}, then n(A) is', options: ['8', '11', '7', '9'], explanation: 'A contains 8 elements, so n(A) = 8 (not the largest element 11).' },
    ta: { q: 'A = {1, 2, 3, 4, 5, 7, 9, 11} எனில் n(A) =', options: ['8', '11', '7', '9'], explanation: 'A இல் 8 உறுப்புகள் உள்ளன; எனவே n(A) = 8 (மிகப்பெரிய உறுப்பு 11 அல்ல).' },
  },
  {
    difficulty: 'easy', source: '§1.4.7, p. 8', answer: 0,
    en: { q: 'The set that contains all the elements of all the sets under consideration is the', options: ['universal set', 'power set', 'empty set', 'equivalent set'], explanation: 'The universal set, denoted U, contains all elements under consideration.' },
    ta: { q: 'கருத்தில் கொள்ளப்படும் எல்லாக் கணங்களின் அனைத்து உறுப்புகளையும் கொண்ட கணம்', options: ['அனைத்துக் கணம்', 'அடுக்குக் கணம்', 'வெற்றுக் கணம்', 'சமான கணம்'], explanation: 'அனைத்து உறுப்புகளையும் உள்ளடக்கிய கணம் அனைத்துக் கணம் U ஆகும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 1.7 Q1, p. 36', answer: 0,
    en: { q: 'Which of the following is correct?', options: ['7 ∈ {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}', '{7} ∈ {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}', '7 ∉ {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}', '{7} ⊄ {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}'], explanation: '7 is an element of the set, so 7 ∈ {1, …, 10}; {7} is a subset, not an element.' },
    ta: { q: 'கீழ்க்காண்பனவற்றில் சரியானது எது?', options: ['7 ∈ {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}', '{7} ∈ {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}', '7 ∉ {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}', '{7} ⊄ {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}'], explanation: '7 அக்கணத்தின் உறுப்பு; எனவே 7 ∈ {1, …, 10}. {7} என்பது உட்கணம், உறுப்பு அல்ல.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 1.7 Q6, p. 37', answer: 0,
    en: { q: 'Which of the following is correct for the set {a, b}?', options: ['∅ ⊆ {a, b}', '∅ ∈ {a, b}', '{a} ∈ {a, b}', 'a ⊆ {a, b}'], explanation: 'The empty set is a subset of every set; ∅ and {a} are not elements of {a, b}, and a is an element, not a subset.' },
    ta: { q: 'பின்வருவனவற்றுள் சரியானது எது?', options: ['∅ ⊆ {a, b}', '∅ ∈ {a, b}', '{a} ∈ {a, b}', 'a ⊆ {a, b}'], explanation: 'வெற்றுக் கணம் எல்லாக் கணங்களுக்கும் உட்கணம்; ∅, {a} ஆகியவை {a, b} இன் உறுப்புகள் அல்ல; a ஓர் உறுப்பு, உட்கணம் அல்ல.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 1.7 Q7, p. 37', answer: 0,
    en: { q: 'If A ∪ B = A ∩ B, then', options: ['A = B', 'A ≠ B', 'A ⊂ B', 'B ⊂ A'], explanation: 'If the union equals the intersection of two non-empty sets, the sets must be equal.' },
    ta: { q: 'A ∪ B = A ∩ B எனில்', options: ['A = B', 'A ≠ B', 'A ⊂ B', 'B ⊂ A'], explanation: 'இரு கணங்களின் சேர்ப்பும் வெட்டும் சமம் எனில் அக்கணங்கள் சமம்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise 1.7 Q8, p. 37', answer: 0,
    en: { q: 'If B − A is B, then A ∩ B is', options: ['∅', 'A', 'B', 'U'], explanation: 'B − A = B means no element of B lies in A, so A and B are disjoint: A ∩ B = ∅.' },
    ta: { q: 'B − A என்பது B எனில், A ∩ B என்பது', options: ['∅', 'A', 'B', 'U'], explanation: 'B − A = B எனில் B இன் எந்த உறுப்பும் A இல் இல்லை; எனவே A ∩ B = ∅.' },
  },
  {
    difficulty: 'easy', source: '§1.4.10, p. 10', answer: 0,
    en: { q: 'Two sets A and B with A ∩ B = ∅ are called', options: ['disjoint sets', 'overlapping sets', 'equal sets', 'equivalent sets'], explanation: 'Sets with no common element are disjoint; sets with at least one common element are overlapping.' },
    ta: { q: 'A ∩ B = ∅ என அமையும் A, B ஆகிய கணங்கள்', options: ['வெட்டாக் கணங்கள்', 'வெட்டும் கணங்கள்', 'சம கணங்கள்', 'சமான கணங்கள்'], explanation: 'பொது உறுப்பு இல்லாத கணங்கள் வெட்டாக் கணங்கள்; குறைந்தது ஒரு பொது உறுப்பு இருந்தால் வெட்டும் கணங்கள்.' },
  },
  {
    difficulty: 'easy', source: '§1.4.11, p. 11', answer: 0,
    en: { q: 'The set of all subsets of a set A is called the', options: ['power set of A', 'universal set of A', 'complement of A', 'proper subset of A'], explanation: 'The power set P(A) is the set of all subsets of A.' },
    ta: { q: 'A என்ற கணத்தின் அனைத்து உட்கணங்களையும் கொண்ட கணம்', options: ['A இன் அடுக்குக் கணம்', 'A இன் அனைத்துக் கணம்', 'A இன் நிரப்பி', 'A இன் தகு உட்கணம்'], explanation: 'A இன் அனைத்து உட்கணங்களின் கணம் அடுக்குக் கணம் P(A).' },
  },
  {
    difficulty: 'easy', source: '§1.5, p. 13', answer: 0,
    en: { q: 'Venn diagrams, which show relations between sets as pictures, were invented by', options: ['John Venn', 'Georg Cantor', 'Augustus De Morgan', 'Al-Khwarizmi'], explanation: 'The English mathematician John Venn invented Venn diagrams.' },
    ta: { q: 'கணங்களுக்கிடையேயான தொடர்புகளைப் படமாகக் காட்டும் வென்படங்களை உருவாக்கியவர்', options: ['ஜான் வென்', 'ஜார்ஜ் கேண்டர்', 'அகஸ்டஸ் டி மார்கன்', 'அல்-குவாரிஸ்மி'], explanation: 'ஆங்கிலக் கணிதவியலாளர் ஜான் வென் வென்படங்களை உருவாக்கினார்.' },
  },
  {
    difficulty: 'easy', source: '§1.7, p. 24', answer: 0,
    en: { q: 'Augustus De Morgan, who formulated the laws for set difference and complementation, was born in', options: ['Madurai, Tamil Nadu', 'Cambridge, England', 'Berlin, Germany', 'Chennai, Tamil Nadu'], explanation: 'De Morgan was born on 27 June 1806 in Madurai; his family moved to England when he was seven months old.' },
    ta: { q: 'கண வித்தியாசம், நிரப்பிக்கான விதிகளை அமைத்த அகஸ்டஸ் டி மார்கன் பிறந்த இடம்', options: ['மதுரை, தமிழ்நாடு', 'கேம்பிரிட்ஜ், இங்கிலாந்து', 'பெர்லின், ஜெர்மனி', 'சென்னை, தமிழ்நாடு'], explanation: 'டி மார்கன் 1806 ஜூன் 27 அன்று மதுரையில் பிறந்தார்; ஏழு மாதக் குழந்தையாக இருந்தபோது குடும்பம் இங்கிலாந்து சென்றது.' },
  },
  {
    difficulty: 'easy', source: 'Book example 1.10, p. 13', answer: 0,
    en: { q: 'If U = {c, d, e, f, g, h, i, j} and A = {c, d, g, j}, then A′ is', options: ['{e, f, h, i}', '{c, d, g, j}', '{e, f, g, h, i}', '{c, d, e, f}'], explanation: 'A′ contains the elements of U that are not in A: e, f, h, i.' },
    ta: { q: 'U = {c, d, e, f, g, h, i, j}, A = {c, d, g, j} எனில் A′ =', options: ['{e, f, h, i}', '{c, d, g, j}', '{e, f, g, h, i}', '{c, d, e, f}'], explanation: 'A இல் இல்லாத U இன் உறுப்புகள் e, f, h, i; இவையே A′.' },
  },
  {
    difficulty: 'easy', source: '§1.5.1, p. 13', answer: 0,
    en: { q: 'For any set A in a universal set U, (A′)′ is', options: ['A', 'A′', 'U', '∅'], explanation: 'The complement of the complement of A is A itself.' },
    ta: { q: 'அனைத்துக் கணம் U இல் உள்ள கணம் A க்கு (A′)′ என்பது', options: ['A', 'A′', 'U', '∅'], explanation: 'A இன் நிரப்பியின் நிரப்பி A யே ஆகும்.' },
  },
  {
    difficulty: 'easy', source: 'Book example 1.11, p. 14', answer: 0,
    en: { q: 'If P = {m, n} and Q = {m, i, j}, then P ∪ Q is', options: ['{m, n, i, j}', '{m}', '{n, i, j}', '{m, m, n, i, j}'], explanation: 'The union contains every element of P or Q, each listed once.' },
    ta: { q: 'P = {m, n}, Q = {m, i, j} எனில் P ∪ Q =', options: ['{m, n, i, j}', '{m}', '{n, i, j}', '{m, m, n, i, j}'], explanation: 'சேர்ப்பில் P அல்லது Q இல் உள்ள ஒவ்வோர் உறுப்பும் ஒருமுறை இடம்பெறும்.' },
  },
  {
    difficulty: 'easy', source: 'Book example 1.12, p. 15', answer: 0,
    en: { q: 'A = {x : x is an even natural number and 1 < x ≤ 12} and B = {x : x is a multiple of 3, x ∈ ℕ and x ≤ 12}. A ∩ B is', options: ['{6, 12}', '{2, 3, 4, 6, 8, 9, 10, 12}', '{3, 6, 9, 12}', '{6}'], explanation: 'A = {2, 4, 6, 8, 10, 12} and B = {3, 6, 9, 12}; common elements are 6 and 12.' },
    ta: { q: 'A = {x : x ஓர் இரட்டை இயல் எண், 1 < x ≤ 12}, B = {x : x என்பது 3 இன் மடங்கு, x ∈ ℕ, x ≤ 12} எனில் A ∩ B =', options: ['{6, 12}', '{2, 3, 4, 6, 8, 9, 10, 12}', '{3, 6, 9, 12}', '{6}'], explanation: 'A = {2, 4, 6, 8, 10, 12}, B = {3, 6, 9, 12}; பொதுவானவை 6, 12.' },
  },
  // ---------------------------------------------------------------- Medium
  {
    difficulty: 'medium', source: 'Book exercise 1.1 Q2, p. 5', answer: 0,
    en: { q: 'How many elements are there in the set of letters of the word PARALLELOGRAM?', options: ['8', '13', '7', '9'], explanation: 'The distinct letters are P, A, R, L, E, O, G, M – 8 letters.' },
    ta: { q: 'PARALLELOGRAM என்ற சொல்லின் எழுத்துகளின் கணத்தில் எத்தனை உறுப்புகள் உள்ளன?', options: ['8', '13', '7', '9'], explanation: 'வேறுபட்ட எழுத்துகள் P, A, R, L, E, O, G, M – 8.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.1 Q4(ii), p. 5', answer: 0,
    en: { q: 'B = {y : y = 1/(2n), n ∈ ℕ, n ≤ 5} in roster form is', options: ['{1/2, 1/4, 1/6, 1/8, 1/10}', '{1/2, 1/3, 1/4, 1/5, 1/6}', '{1/2, 1/4, 1/8, 1/16, 1/32}', '{2, 4, 6, 8, 10}'], explanation: 'Putting n = 1, 2, 3, 4, 5 in 1/(2n) gives 1/2, 1/4, 1/6, 1/8, 1/10.' },
    ta: { q: 'B = {y : y = 1/(2n), n ∈ ℕ, n ≤ 5} இன் பட்டியல் முறை', options: ['{1/2, 1/4, 1/6, 1/8, 1/10}', '{1/2, 1/3, 1/4, 1/5, 1/6}', '{1/2, 1/4, 1/8, 1/16, 1/32}', '{2, 4, 6, 8, 10}'], explanation: '1/(2n) இல் n = 1, 2, 3, 4, 5 எனப் பிரதியிட 1/2, 1/4, 1/6, 1/8, 1/10.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.1 Q4(iii), p. 5', answer: 0,
    en: { q: 'C = {x : x is a perfect cube, 27 < x < 216} in roster form is', options: ['{64, 125}', '{27, 64, 125, 216}', '{64, 125, 216}', '{27, 64, 125}'], explanation: 'The perfect cubes strictly between 27 and 216 are 4³ = 64 and 5³ = 125.' },
    ta: { q: 'C = {x : x ஒரு முழுக் கனம், 27 < x < 216} இன் பட்டியல் முறை', options: ['{64, 125}', '{27, 64, 125, 216}', '{64, 125, 216}', '{27, 64, 125}'], explanation: '27, 216 க்கு இடையே (அவை நீங்கலாக) உள்ள முழுக் கனங்கள் 4³ = 64, 5³ = 125.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.1 Q4(iv), p. 5', answer: 0,
    en: { q: 'D = {x : x ∈ ℤ, −5 < x ≤ 2} in roster form is', options: ['{−4, −3, −2, −1, 0, 1, 2}', '{−5, −4, −3, −2, −1, 0, 1, 2}', '{−4, −3, −2, −1, 0, 1}', '{−5, −4, −3, −2, −1, 0, 1}'], explanation: '−5 is excluded (strict <) and 2 is included (≤).' },
    ta: { q: 'D = {x : x ∈ ℤ, −5 < x ≤ 2} இன் பட்டியல் முறை', options: ['{−4, −3, −2, −1, 0, 1, 2}', '{−5, −4, −3, −2, −1, 0, 1, 2}', '{−4, −3, −2, −1, 0, 1}', '{−5, −4, −3, −2, −1, 0, 1}'], explanation: '−5 சேர்க்கப்படாது (<), 2 சேர்க்கப்படும் (≤).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.1 Q5(ii), p. 5', answer: 0,
    en: { q: 'C = {1/2, 2/3, 3/4, …} in set builder form is', options: ['{x : x = n/(n + 1), n ∈ ℕ}', '{x : x = (n + 1)/n, n ∈ ℕ}', '{x : x = 1/n, n ∈ ℕ}', '{x : x = n/(n + 2), n ∈ ℕ}'], explanation: 'n = 1, 2, 3 in n/(n + 1) gives 1/2, 2/3, 3/4, …' },
    ta: { q: 'C = {1/2, 2/3, 3/4, …} இன் கணக் கட்டமைப்பு முறை', options: ['{x : x = n/(n + 1), n ∈ ℕ}', '{x : x = (n + 1)/n, n ∈ ℕ}', '{x : x = 1/n, n ∈ ℕ}', '{x : x = n/(n + 2), n ∈ ℕ}'], explanation: 'n/(n + 1) இல் n = 1, 2, 3 என வைக்க 1/2, 2/3, 3/4, … கிடைக்கும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.1 Q6(ii), p. 6', answer: 0,
    en: { q: 'Q = {7, 11, 13, 17, 19, 23, 29} in descriptive form is', options: ['the set of prime numbers between 5 and 31', 'the set of odd numbers between 5 and 31', 'the set of prime numbers less than 30', 'the set of prime numbers between 7 and 29'], explanation: 'These are exactly the primes greater than 5 and less than 31; "less than 30" would also include 2, 3, 5.' },
    ta: { q: 'Q = {7, 11, 13, 17, 19, 23, 29} இன் விவரிப்பு முறை', options: ['5 க்கும் 31 க்கும் இடையே உள்ள பகா எண்களின் கணம்', '5 க்கும் 31 க்கும் இடையே உள்ள ஒற்றை எண்களின் கணம்', '30 ஐ விடக் குறைவான பகா எண்களின் கணம்', '7 க்கும் 29 க்கும் இடையே உள்ள பகா எண்களின் கணம்'], explanation: 'இவை 5 ஐ விடப் பெரிய, 31 ஐ விடச் சிறிய பகா எண்கள்; "30 ஐ விடக் குறைவான" எனில் 2, 3, 5 உம் சேரும்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.1 Q6(i), p. 6', answer: 0,
    en: { q: 'P = {January, June, July} in descriptive form is', options: ['the set of English months beginning with the letter J', 'the set of months with 31 days', 'the set of the first three months of a year', 'the set of months of the summer season'], explanation: 'January, June and July are the English months starting with J.' },
    ta: { q: 'P = {ஜனவரி, ஜூன், ஜூலை} இன் விவரிப்பு முறை', options: ['J என்ற எழுத்தில் தொடங்கும் ஆங்கில மாதங்களின் கணம்', '31 நாட்கள் கொண்ட மாதங்களின் கணம்', 'ஓர் ஆண்டின் முதல் மூன்று மாதங்களின் கணம்', 'கோடைக்கால மாதங்களின் கணம்'], explanation: 'January, June, July ஆகியவை J இல் தொடங்கும் ஆங்கில மாதங்கள்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.2 Q1(ii), p. 11', answer: 0,
    en: { q: 'If P = {x : x = 3n + 2, n ∈ 𝕎 and x < 15}, then n(P) is', options: ['5', '4', '6', '15'], explanation: 'n = 0, 1, 2, 3, 4 give 2, 5, 8, 11, 14; n = 5 gives 17 > 15. So n(P) = 5.' },
    ta: { q: 'P = {x : x = 3n + 2, n ∈ 𝕎 மற்றும் x < 15} எனில் n(P) =', options: ['5', '4', '6', '15'], explanation: 'n = 0, 1, 2, 3, 4 எனில் 2, 5, 8, 11, 14; n = 5 எனில் 17 > 15. எனவே n(P) = 5.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.2 Q1(iii), p. 11', answer: 0,
    en: { q: 'If Q = {y : y = 4/(3n), n ∈ ℕ and 2 < n ≤ 5}, then n(Q) is', options: ['3', '4', '5', '2'], explanation: 'n can be 3, 4 or 5 only, giving three values of y.' },
    ta: { q: 'Q = {y : y = 4/(3n), n ∈ ℕ மற்றும் 2 < n ≤ 5} எனில் n(Q) =', options: ['3', '4', '5', '2'], explanation: 'n = 3, 4, 5 மட்டுமே; எனவே y இன் மூன்று மதிப்புகள்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.2 Q1(iv), p. 11', answer: 0,
    en: { q: 'If R = {x : x ∈ ℤ and −5 ≤ x < 5}, then n(R) is', options: ['10', '11', '9', '5'], explanation: 'R = {−5, −4, …, 3, 4}: 5 negative integers, 0, and 4 positive integers = 10.' },
    ta: { q: 'R = {x : x ∈ ℤ மற்றும் −5 ≤ x < 5} எனில் n(R) =', options: ['10', '11', '9', '5'], explanation: 'R = {−5, −4, …, 3, 4}: 5 குறை முழுக்கள், 0, 4 மிகை முழுக்கள் = 10.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.2 Q1(v), p. 11', answer: 0,
    en: { q: 'S = the set of all leap years between 1882 and 1906. n(S) is', options: ['5', '6', '4', '7'], explanation: 'Leap years: 1884, 1888, 1892, 1896, 1904. 1900 is not a leap year (a century year must be divisible by 400).' },
    ta: { q: 'S = 1882 க்கும் 1906 க்கும் இடையே உள்ள லீப் ஆண்டுகளின் கணம். n(S) =', options: ['5', '6', '4', '7'], explanation: 'லீப் ஆண்டுகள்: 1884, 1888, 1892, 1896, 1904. 1900 லீப் ஆண்டு அல்ல (நூற்றாண்டு 400 ஆல் வகுபட வேண்டும்).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.2 Q2(iii), p. 11', answer: 0,
    en: { q: 'A = {x : x ∈ ℤ and x < 5} is', options: ['an infinite set', 'a finite set with 5 elements', 'a finite set with 4 elements', 'the empty set'], explanation: 'All integers less than 5 (…, −2, −1, 0, …, 4) – there is no end on the negative side.' },
    ta: { q: 'A = {x : x ∈ ℤ மற்றும் x < 5} என்பது', options: ['முடிவுறாக் கணம்', '5 உறுப்புகள் கொண்ட முடிவுறு கணம்', '4 உறுப்புகள் கொண்ட முடிவுறு கணம்', 'வெற்றுக் கணம்'], explanation: '5 ஐ விடக் குறைவான அனைத்து முழுக்களும் (…, −2, −1, 0, …, 4); குறை எண் பக்கம் முடிவில்லை.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.2 Q2(iv), p. 11', answer: 0,
    en: { q: 'B = {x : x² − 5x + 6 = 0, x ∈ ℕ} is', options: ['a finite set with 2 elements', 'an infinite set', 'the empty set', 'a singleton set'], explanation: 'x² − 5x + 6 = (x − 2)(x − 3) = 0 gives B = {2, 3}.' },
    ta: { q: 'B = {x : x² − 5x + 6 = 0, x ∈ ℕ} என்பது', options: ['2 உறுப்புகள் கொண்ட முடிவுறு கணம்', 'முடிவுறாக் கணம்', 'வெற்றுக் கணம்', 'ஓருறுப்புக் கணம்'], explanation: 'x² − 5x + 6 = (x − 2)(x − 3) = 0 எனவே B = {2, 3}.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.2 Q3(i), p. 12', answer: 0,
    en: { q: 'A = the set of vowels in the English alphabet and B = the set of letters in the word "VOWEL". A and B are', options: ['equivalent but not equal', 'equal', 'neither equal nor equivalent', 'disjoint'], explanation: 'A = {a, e, i, o, u} and B = {V, O, W, E, L} both have 5 elements but different elements.' },
    ta: { q: 'A = ஆங்கில உயிரெழுத்துகளின் கணம், B = "VOWEL" என்ற சொல்லின் எழுத்துகளின் கணம். A, B ஆகியவை', options: ['சமான கணங்கள், ஆனால் சம கணங்கள் அல்ல', 'சம கணங்கள்', 'சம கணங்களும் அல்ல, சமான கணங்களும் அல்ல', 'வெட்டாக் கணங்கள்'], explanation: 'A = {a, e, i, o, u}, B = {V, O, W, E, L}; இரண்டிலும் 5 உறுப்புகள், ஆனால் உறுப்புகள் வேறுபடுகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.2 Q3(ii), p. 12', answer: 0,
    en: { q: 'C = {2, 3, 4, 5} and D = {x : x ∈ 𝕎, 1 < x < 5}. C and D are', options: ['unequal sets', 'equal sets', 'equivalent sets', 'disjoint sets'], explanation: 'D = {2, 3, 4} has 3 elements while C has 4, so they are neither equal nor equivalent.' },
    ta: { q: 'C = {2, 3, 4, 5}, D = {x : x ∈ 𝕎, 1 < x < 5}. C, D ஆகியவை', options: ['சமமற்ற கணங்கள்', 'சம கணங்கள்', 'சமான கணங்கள்', 'வெட்டாக் கணங்கள்'], explanation: 'D = {2, 3, 4} இல் 3 உறுப்புகள், C இல் 4; எனவே சம கணங்களும் அல்ல, சமான கணங்களும் அல்ல.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.2 Q3(iv), p. 12', answer: 0,
    en: { q: 'G = {x : x is a prime number and 3 < x < 23} and H = {x : x is a divisor of 18}. G and H are', options: ['equivalent sets', 'equal sets', 'unequal and not equivalent', 'disjoint singleton sets'], explanation: 'G = {5, 7, 11, 13, 17, 19} and H = {1, 2, 3, 6, 9, 18}: 6 elements each, but different elements.' },
    ta: { q: 'G = {x : x ஒரு பகா எண், 3 < x < 23}, H = {x : x என்பது 18 இன் வகுத்தி}. G, H ஆகியவை', options: ['சமான கணங்கள்', 'சம கணங்கள்', 'சமமற்றவை, சமானமும் அல்ல', 'வெட்டும் ஓருறுப்புக் கணங்கள்'], explanation: 'G = {5, 7, 11, 13, 17, 19}, H = {1, 2, 3, 6, 9, 18}: இரண்டிலும் 6 உறுப்புகள், உறுப்புகள் வேறு.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.2 Q5(ii), p. 12', answer: 0,
    en: { q: 'C = {x : x is a prime number, x > 2} and D = {x : x is an even prime number}. C and D are', options: ['disjoint', 'overlapping', 'equal', 'equivalent'], explanation: 'D = {2}, and every element of C is greater than 2, so C ∩ D = ∅.' },
    ta: { q: 'C = {x : x ஒரு பகா எண், x > 2}, D = {x : x ஓர் இரட்டைப் பகா எண்}. C, D ஆகியவை', options: ['வெட்டாக் கணங்கள்', 'வெட்டும் கணங்கள்', 'சம கணங்கள்', 'சமான கணங்கள்'], explanation: 'D = {2}; C இன் எல்லா உறுப்புகளும் 2 ஐ விடப் பெரியவை; எனவே C ∩ D = ∅.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.2 Q5(iii), p. 12', answer: 0,
    en: { q: 'E = {x : x is a factor of 24} and F = {x : x is a multiple of 3, x < 30}. E and F are', options: ['overlapping', 'disjoint', 'equal', 'equivalent'], explanation: '3, 6, 12 and 24 are common to both, so E ∩ F ≠ ∅.' },
    ta: { q: 'E = {x : x என்பது 24 இன் காரணி}, F = {x : x என்பது 3 இன் மடங்கு, x < 30}. E, F ஆகியவை', options: ['வெட்டும் கணங்கள்', 'வெட்டாக் கணங்கள்', 'சம கணங்கள்', 'சமான கணங்கள்'], explanation: '3, 6, 12, 24 இரண்டிலும் உள்ளன; எனவே E ∩ F ≠ ∅.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.2 Q6, p. 12', answer: 0,
    en: { q: 'S = {square, rectangle, circle, rhombus, triangle}. The subset of shapes which have 4 equal sides is', options: ['{square, rhombus}', '{square, rectangle, rhombus}', '{square}', '{rectangle, rhombus}'], explanation: 'Only a square and a rhombus have all four sides equal; a rectangle need not.' },
    ta: { q: 'S = {சதுரம், செவ்வகம், வட்டம், சாய்சதுரம், முக்கோணம்}. 4 சம பக்கங்களைக் கொண்ட வடிவங்களின் உட்கணம்', options: ['{சதுரம், சாய்சதுரம்}', '{சதுரம், செவ்வகம், சாய்சதுரம்}', '{சதுரம்}', '{செவ்வகம், சாய்சதுரம்}'], explanation: 'சதுரம், சாய்சதுரம் மட்டுமே நான்கு சம பக்கங்களைக் கொண்டவை; செவ்வகத்திற்கு அவசியமில்லை.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.2 Q6(iii), p. 12', answer: 0,
    en: { q: 'S = {square, rectangle, circle, rhombus, triangle}. The subset of shapes in which the sum of all interior angles is 180° is', options: ['{triangle}', '{square, rectangle}', '{triangle, rhombus}', '{ }'], explanation: 'Only the angles of a triangle add up to 180°; quadrilaterals add up to 360°.' },
    ta: { q: 'S = {சதுரம், செவ்வகம், வட்டம், சாய்சதுரம், முக்கோணம்}. உட்கோணங்களின் கூடுதல் 180° ஆக உள்ள வடிவங்களின் உட்கணம்', options: ['{முக்கோணம்}', '{சதுரம், செவ்வகம்}', '{முக்கோணம், சாய்சதுரம்}', '{ }'], explanation: 'முக்கோணத்தின் கோணங்களின் கூடுதல் மட்டுமே 180°; நாற்கரங்களுக்கு 360°.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.2 Q7, p. 12', answer: 0,
    en: { q: 'How many subsets does A = {a, {a, b}} have?', options: ['4', '8', '3', '2'], explanation: 'A has 2 elements (a and the set {a, b}), so it has 2² = 4 subsets: ∅, {a}, {{a, b}}, A.' },
    ta: { q: 'A = {a, {a, b}} என்ற கணத்திற்கு எத்தனை உட்கணங்கள் உள்ளன?', options: ['4', '8', '3', '2'], explanation: 'A இல் 2 உறுப்புகள் (a, {a, b}); எனவே 2² = 4 உட்கணங்கள்: ∅, {a}, {{a, b}}, A.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.2 Q8(iv), p. 12', answer: 0,
    en: { q: 'The power set of the empty set E = ∅ is', options: ['{∅}', '∅', '{0}', '{∅, {∅}}'], explanation: 'The only subset of ∅ is ∅ itself, so P(∅) = {∅}, which has one element.' },
    ta: { q: 'E = ∅ என்ற வெற்றுக் கணத்தின் அடுக்குக் கணம்', options: ['{∅}', '∅', '{0}', '{∅, {∅}}'], explanation: '∅ இன் ஒரே உட்கணம் ∅; எனவே P(∅) = {∅}, இதில் ஓர் உறுப்பு உள்ளது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.2 Q9(i), p. 12', answer: 0,
    en: { q: 'For W = {red, blue, yellow}, the number of subsets and the number of proper subsets are', options: ['8 and 7', '8 and 6', '6 and 5', '9 and 8'], explanation: 'n(W) = 3, so there are 2³ = 8 subsets and 2³ − 1 = 7 proper subsets.' },
    ta: { q: 'W = {சிவப்பு, நீலம், மஞ்சள்} இன் உட்கணங்களின் எண்ணிக்கை மற்றும் தகு உட்கணங்களின் எண்ணிக்கை', options: ['8, 7', '8, 6', '6, 5', '9, 8'], explanation: 'n(W) = 3; உட்கணங்கள் 2³ = 8, தகு உட்கணங்கள் 2³ − 1 = 7.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.2 Q10, p. 12', answer: 0,
    en: { q: 'If n(A) = 4, then n[P(A)] is', options: ['16', '8', '4', '15'], explanation: 'n[P(A)] = 2ⁿ⁽ᴬ⁾ = 2⁴ = 16.' },
    ta: { q: 'n(A) = 4 எனில் n[P(A)] =', options: ['16', '8', '4', '15'], explanation: 'n[P(A)] = 2⁴ = 16.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.2 Q10, p. 12', answer: 0,
    en: { q: 'If n(A) = 0, then n[P(A)] is', options: ['1', '0', '2', 'not defined'], explanation: 'n[P(A)] = 2⁰ = 1; the power set of ∅ is {∅}.' },
    ta: { q: 'n(A) = 0 எனில் n[P(A)] =', options: ['1', '0', '2', 'வரையறுக்கப்படவில்லை'], explanation: 'n[P(A)] = 2⁰ = 1; ∅ இன் அடுக்குக் கணம் {∅}.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.2 Q10, p. 12', answer: 0,
    en: { q: 'If n[P(A)] = 256, then n(A) is', options: ['8', '16', '128', '7'], explanation: '2ⁿ = 256 = 2⁸, so n(A) = 8.' },
    ta: { q: 'n[P(A)] = 256 எனில் n(A) =', options: ['8', '16', '128', '7'], explanation: '2ⁿ = 256 = 2⁸; எனவே n(A) = 8.' },
  },
  {
    difficulty: 'medium', source: 'Book example 1.9, p. 11', answer: 0,
    en: { q: 'The number of proper subsets of X = {a, b, c, x, y, z} is', options: ['63', '64', '36', '32'], explanation: 'n(X) = 6, so the number of proper subsets is 2⁶ − 1 = 63.' },
    ta: { q: 'X = {a, b, c, x, y, z} இன் தகு உட்கணங்களின் எண்ணிக்கை', options: ['63', '64', '36', '32'], explanation: 'n(X) = 6; தகு உட்கணங்கள் 2⁶ − 1 = 63.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.7 Q5, p. 36', answer: 0,
    en: { q: 'If A = {x, y, z}, then the number of non-empty subsets of A is', options: ['7', '8', '6', '5'], explanation: 'A has 2³ = 8 subsets; leaving out ∅ gives 7.' },
    ta: { q: 'A = {x, y, z} எனில், A இன் வெற்றுக் கணமில்லாத உட்கணங்களின் எண்ணிக்கை', options: ['7', '8', '6', '5'], explanation: 'A க்கு 2³ = 8 உட்கணங்கள்; ∅ ஐ நீக்கினால் 7.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.7 Q2, p. 36', answer: 0,
    en: { q: 'The set P = {x | x ∈ ℤ, −1 < x < 1} is a', options: ['singleton set', 'power set', 'null set', 'infinite set'], explanation: 'The only integer between −1 and 1 is 0, so P = {0}.' },
    ta: { q: 'கணம் P = {x | x ∈ ℤ, −1 < x < 1} என்பது', options: ['ஓருறுப்புக் கணம்', 'அடுக்குக் கணம்', 'வெற்றுக் கணம்', 'முடிவுறாக் கணம்'], explanation: '−1, 1 க்கு இடையே உள்ள ஒரே முழு 0; எனவே P = {0}.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.7 Q3, p. 36', answer: 0,
    en: { q: 'If U = {x | x ∈ ℕ, x < 10} and A = {x | x ∈ ℕ, 2 ≤ x < 6}, then (A′)′ is', options: ['{2, 3, 4, 5}', '{1, 6, 7, 8, 9}', '{1, 2, 3, 4}', '{ }'], explanation: '(A′)′ = A = {2, 3, 4, 5}.' },
    ta: { q: 'U = {x | x ∈ ℕ, x < 10}, A = {x | x ∈ ℕ, 2 ≤ x < 6} எனில் (A′)′ =', options: ['{2, 3, 4, 5}', '{1, 6, 7, 8, 9}', '{1, 2, 3, 4}', '{ }'], explanation: '(A′)′ = A = {2, 3, 4, 5}.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.7 Q4, p. 36', answer: 0,
    en: { q: 'If B ⊆ A, then n(A ∩ B) is', options: ['n(B)', 'n(A)', 'n(A − B)', 'n(B − A)'], explanation: 'When B ⊆ A, A ∩ B = B, so n(A ∩ B) = n(B).' },
    ta: { q: 'B ⊆ A எனில் n(A ∩ B) =', options: ['n(B)', 'n(A)', 'n(A − B)', 'n(B − A)'], explanation: 'B ⊆ A எனில் A ∩ B = B; எனவே n(A ∩ B) = n(B).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.7 Q10, p. 37', answer: 0,
    en: { q: 'If n(A) = 10 and n(B) = 15, then the minimum and maximum numbers of elements in A ∩ B are', options: ['0 and 10', '10 and 15', '15 and 10', '10 and 0'], explanation: 'A ∩ B can be empty (minimum 0) and can be at most the smaller set (maximum min{10, 15} = 10).' },
    ta: { q: 'n(A) = 10, n(B) = 15 எனில் A ∩ B இல் உள்ள குறைந்தபட்ச மற்றும் அதிகபட்ச உறுப்புகளின் எண்ணிக்கை', options: ['0, 10', '10, 15', '15, 10', '10, 0'], explanation: 'A ∩ B வெற்றுக் கணமாக இருக்கலாம் (குறைந்தபட்சம் 0); அதிகபட்சம் சிறிய கணத்தின் அளவு min{10, 15} = 10.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.7 Q12, p. 37', answer: 0,
    en: { q: 'In a class of 50 boys, 35 play Carrom and 20 play Chess (every boy plays at least one). The number of boys who play both games is', options: ['5', '15', '30', '10'], explanation: 'n(C ∩ Ch) = 35 + 20 − 50 = 5.' },
    ta: { q: '50 மாணவர்கள் உள்ள வகுப்பில் 35 பேர் சுண்டாட்டம், 20 பேர் சதுரங்கம் விளையாடுகின்றனர் (ஒவ்வொருவரும் குறைந்தது ஒன்று). இரண்டையும் விளையாடுபவர்களின் எண்ணிக்கை', options: ['5', '15', '30', '10'], explanation: '35 + 20 − 50 = 5.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.7 Q13, p. 37', answer: 0,
    en: { q: 'If U = {x : x ∈ ℕ and x < 10}, A = {1, 2, 3, 5, 8} and B = {2, 5, 6, 7, 9}, then n[(A ∪ B)′] is', options: ['1', '2', '4', '8'], explanation: 'A ∪ B = {1, 2, 3, 5, 6, 7, 8, 9}, so (A ∪ B)′ = {4} and its cardinal number is 1.' },
    ta: { q: 'U = {x : x ∈ ℕ மற்றும் x < 10}, A = {1, 2, 3, 5, 8}, B = {2, 5, 6, 7, 9} எனில் n[(A ∪ B)′] =', options: ['1', '2', '4', '8'], explanation: 'A ∪ B = {1, 2, 3, 5, 6, 7, 8, 9}; (A ∪ B)′ = {4}; ஆதி எண் 1.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.7 Q15, p. 37', answer: 0,
    en: { q: 'Which of the following is true?', options: ["(A ∩ B)′ = A′ ∪ B′", 'A − B = A ∩ B', 'A − B = B − A', "(A ∪ B)′ = A′ ∪ B′"], explanation: "This is De Morgan's law; the correct form of the other law is (A ∪ B)′ = A′ ∩ B′." },
    ta: { q: 'கீழ்க்காண்பனவற்றில் எது சரி?', options: ["(A ∩ B)′ = A′ ∪ B′", 'A − B = A ∩ B', 'A − B = B − A', "(A ∪ B)′ = A′ ∪ B′"], explanation: 'இது டி மார்கன் விதி; மற்றொரு விதியின் சரியான வடிவம் (A ∪ B)′ = A′ ∩ B′.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.3 Q1, p. 18', answer: 0, imageUrl: `${IMG}/venn-ex1-3-q1.png`,
    en: { q: 'Using the given Venn diagram, A ∩ B is', options: ['{4, 7}', '{2, 4, 7, 8, 10}', '{2, 8, 10}', '{1, 12}'], explanation: 'The common region of the two circles contains 4 and 7.' },
    ta: { q: 'கொடுக்கப்பட்ட வென்படத்திலிருந்து A ∩ B =', options: ['{4, 7}', '{2, 4, 7, 8, 10}', '{2, 8, 10}', '{1, 12}'], explanation: 'இரு வட்டங்களின் பொதுப் பகுதியில் 4, 7 உள்ளன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.3 Q1, p. 18', answer: 0, imageUrl: `${IMG}/venn-ex1-3-q1.png`,
    en: { q: 'Using the given Venn diagram, B′ is', options: ['{1, 2, 8, 10, 12}', '{2, 8, 10}', '{3, 4, 6, 7, 9, 11}', '{1, 12}'], explanation: 'B′ contains everything in U outside circle B: 2, 8, 10 (only in A) and 1, 12 (outside both).' },
    ta: { q: 'கொடுக்கப்பட்ட வென்படத்திலிருந்து B′ =', options: ['{1, 2, 8, 10, 12}', '{2, 8, 10}', '{3, 4, 6, 7, 9, 11}', '{1, 12}'], explanation: 'B வட்டத்திற்கு வெளியே உள்ள U இன் உறுப்புகள்: 2, 8, 10 (A இல் மட்டும்) மற்றும் 1, 12.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.3 Q2(i), p. 18', answer: 0,
    en: { q: 'If A = {2, 6, 10, 14} and B = {2, 5, 14, 16}, then A − B is', options: ['{6, 10}', '{5, 16}', '{2, 14}', '{2, 5, 6, 10, 14, 16}'], explanation: 'Remove from A the elements that are also in B (2 and 14): A − B = {6, 10}.' },
    ta: { q: 'A = {2, 6, 10, 14}, B = {2, 5, 14, 16} எனில் A − B =', options: ['{6, 10}', '{5, 16}', '{2, 14}', '{2, 5, 6, 10, 14, 16}'], explanation: 'B இலும் உள்ள 2, 14 ஐ A இலிருந்து நீக்க A − B = {6, 10}.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.3 Q2(iv), p. 18', answer: 0,
    en: { q: 'A = set of letters in the word "mathematics" and B = set of letters in the word "geometry". A ∩ B is', options: ['{e, m, t}', '{m, a, t, h, e}', '{g, o, r, y}', '{e, t}'], explanation: 'A = {m, a, t, h, e, i, c, s} and B = {g, e, o, m, t, r, y}; common letters are e, m, t.' },
    ta: { q: 'A = "mathematics" என்ற சொல்லின் எழுத்துகளின் கணம், B = "geometry" என்ற சொல்லின் எழுத்துகளின் கணம். A ∩ B =', options: ['{e, m, t}', '{m, a, t, h, e}', '{g, o, r, y}', '{e, t}'], explanation: 'A = {m, a, t, h, e, i, c, s}, B = {g, e, o, m, t, r, y}; பொதுவான எழுத்துகள் e, m, t.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.3 Q2(iii), p. 18', answer: 0,
    en: { q: 'A = {x : x ∈ ℕ, x ≤ 10} and B = {x : x ∈ 𝕎, x < 6}. B − A is', options: ['{0}', '{ }', '{6, 7, 8, 9, 10}', '{1, 2, 3, 4, 5}'], explanation: 'B = {0, 1, 2, 3, 4, 5}; only 0 is not a natural number, so B − A = {0}.' },
    ta: { q: 'A = {x : x ∈ ℕ, x ≤ 10}, B = {x : x ∈ 𝕎, x < 6}. B − A =', options: ['{0}', '{ }', '{6, 7, 8, 9, 10}', '{1, 2, 3, 4, 5}'], explanation: 'B = {0, 1, 2, 3, 4, 5}; இயல் எண் அல்லாதது 0 மட்டுமே; எனவே B − A = {0}.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.3 Q3, p. 19', answer: 0,
    en: { q: 'If U = {a, b, c, d, e, f, g, h}, A = {b, d, f, h} and B = {a, d, e, h}, then (A ∪ B)′ is', options: ['{c, g}', '{d, h}', '{a, b, e, f}', '{a, c, e, g}'], explanation: 'A ∪ B = {a, b, d, e, f, h}; the elements of U left out are c and g.' },
    ta: { q: 'U = {a, b, c, d, e, f, g, h}, A = {b, d, f, h}, B = {a, d, e, h} எனில் (A ∪ B)′ =', options: ['{c, g}', '{d, h}', '{a, b, e, f}', '{a, c, e, g}'], explanation: 'A ∪ B = {a, b, d, e, f, h}; U இல் மீதமுள்ளவை c, g.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.3 Q4, p. 19', answer: 0,
    en: { q: 'Let U = {0, 1, 2, 3, 4, 5, 6, 7}, A = {1, 3, 5, 7} and B = {0, 2, 3, 5, 7}. Then A′ ∩ B′ is', options: ['{4, 6}', '{0, 2, 4, 6}', '{1, 4, 6}', '{0, 1, 2, 4, 6}'], explanation: 'A′ = {0, 2, 4, 6} and B′ = {1, 4, 6}; their intersection is {4, 6}.' },
    ta: { q: 'U = {0, 1, 2, 3, 4, 5, 6, 7}, A = {1, 3, 5, 7}, B = {0, 2, 3, 5, 7} எனில் A′ ∩ B′ =', options: ['{4, 6}', '{0, 2, 4, 6}', '{1, 4, 6}', '{0, 1, 2, 4, 6}'], explanation: 'A′ = {0, 2, 4, 6}, B′ = {1, 4, 6}; அவற்றின் வெட்டு {4, 6}.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.3 Q5(i), p. 19', answer: 0,
    en: { q: 'The symmetric difference of P = {2, 3, 5, 7, 11} and Q = {1, 3, 5, 11} is', options: ['{1, 2, 7}', '{3, 5, 11}', '{2, 7}', '{1, 2, 3, 5, 7, 11}'], explanation: 'P − Q = {2, 7} and Q − P = {1}; PΔQ = {1, 2, 7}.' },
    ta: { q: 'P = {2, 3, 5, 7, 11}, Q = {1, 3, 5, 11} ஆகியவற்றின் சமச்சீர் வித்தியாசம்', options: ['{1, 2, 7}', '{3, 5, 11}', '{2, 7}', '{1, 2, 3, 5, 7, 11}'], explanation: 'P − Q = {2, 7}, Q − P = {1}; PΔQ = {1, 2, 7}.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.3 Q5(iii), p. 19', answer: 0,
    en: { q: 'The symmetric difference of X = {5, 6, 7} and Y = {5, 7, 9, 10} is', options: ['{6, 9, 10}', '{5, 7}', '{6}', '{5, 6, 7, 9, 10}'], explanation: 'X − Y = {6}, Y − X = {9, 10}, so XΔY = {6, 9, 10}.' },
    ta: { q: 'X = {5, 6, 7}, Y = {5, 7, 9, 10} ஆகியவற்றின் சமச்சீர் வித்தியாசம்', options: ['{6, 9, 10}', '{5, 7}', '{6}', '{5, 6, 7, 9, 10}'], explanation: 'X − Y = {6}, Y − X = {9, 10}; XΔY = {6, 9, 10}.' },
  },
  {
    difficulty: 'medium', source: 'Book example 1.15, p. 16', answer: 0,
    en: { q: 'If A = {6, 7, 8, 9} and B = {8, 10, 12}, then AΔB is', options: ['{6, 7, 9, 10, 12}', '{8}', '{6, 7, 9}', '{6, 7, 8, 9, 10, 12}'], explanation: 'AΔB = (A − B) ∪ (B − A) = {6, 7, 9} ∪ {10, 12}.' },
    ta: { q: 'A = {6, 7, 8, 9}, B = {8, 10, 12} எனில் AΔB =', options: ['{6, 7, 9, 10, 12}', '{8}', '{6, 7, 9}', '{6, 7, 8, 9, 10, 12}'], explanation: 'AΔB = (A − B) ∪ (B − A) = {6, 7, 9} ∪ {10, 12}.' },
  },
  {
    difficulty: 'medium', source: 'Book example 1.14, p. 16', answer: 0,
    en: { q: 'If A = {−3, −2, 1, 4} and B = {0, 1, 2, 4}, then B − A is', options: ['{0, 2}', '{−3, −2}', '{1, 4}', '{−3, −2, 0, 2}'], explanation: 'Remove 1 and 4 (which are in A) from B: B − A = {0, 2}.' },
    ta: { q: 'A = {−3, −2, 1, 4}, B = {0, 1, 2, 4} எனில் B − A =', options: ['{0, 2}', '{−3, −2}', '{1, 4}', '{−3, −2, 0, 2}'], explanation: 'A இலும் உள்ள 1, 4 ஐ B இலிருந்து நீக்க B − A = {0, 2}.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.3 Q6, p. 19', answer: 0, imageUrl: `${IMG}/shaded-fig1-28.png`,
    en: { q: 'The shaded region in the given Venn diagram is', options: ['(X − Y) ∪ (Y − X)', 'X ∩ Y', 'X ∪ Y', '(X ∪ Y)′'], explanation: 'Both circles are shaded except their common part: that is the symmetric difference XΔY = (X − Y) ∪ (Y − X).' },
    ta: { q: 'கொடுக்கப்பட்ட வென்படத்தில் நிழலிடப்பட்ட பகுதி', options: ['(X − Y) ∪ (Y − X)', 'X ∩ Y', 'X ∪ Y', '(X ∪ Y)′'], explanation: 'பொதுப் பகுதி தவிர இரு வட்டங்களும் நிழலிடப்பட்டுள்ளன; இது சமச்சீர் வித்தியாசம் (X − Y) ∪ (Y − X).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.3 Q6, p. 19', answer: 0,
    en: { q: 'In a Venn diagram of two overlapping sets X and Y, only the part of circle Y that lies outside circle X is shaded. The shaded region is', options: ['Y − X', 'X − Y', 'X ∩ Y', "X′"], explanation: 'Elements in Y but not in X form Y − X.' },
    ta: { q: 'வெட்டும் கணங்கள் X, Y இன் வென்படத்தில் X வட்டத்திற்கு வெளியே உள்ள Y வட்டத்தின் பகுதி மட்டும் நிழலிடப்பட்டுள்ளது. நிழலிடப்பட்ட பகுதி', options: ['Y − X', 'X − Y', 'X ∩ Y', "X′"], explanation: 'Y இல் உள்ள, X இல் இல்லாத உறுப்புகள் Y − X.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.4 Q1, p. 22', answer: 0,
    en: { q: 'If P = {1, 2, 5, 7, 9}, Q = {2, 3, 5, 9, 11} and R = {3, 4, 5, 7, 9}, then (P ∪ Q) ∪ R is', options: ['{1, 2, 3, 4, 5, 7, 9, 11}', '{5, 9}', '{1, 2, 3, 5, 7, 9, 11}', '{2, 3, 4, 5, 7, 9}'], explanation: 'Collect every element appearing in P, Q or R: 1, 2, 3, 4, 5, 7, 9, 11.' },
    ta: { q: 'P = {1, 2, 5, 7, 9}, Q = {2, 3, 5, 9, 11}, R = {3, 4, 5, 7, 9} எனில் (P ∪ Q) ∪ R =', options: ['{1, 2, 3, 4, 5, 7, 9, 11}', '{5, 9}', '{1, 2, 3, 5, 7, 9, 11}', '{2, 3, 4, 5, 7, 9}'], explanation: 'P, Q, R இல் உள்ள எல்லா உறுப்புகளும்: 1, 2, 3, 4, 5, 7, 9, 11.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.4 Q1, p. 22', answer: 0,
    en: { q: 'If Q = {2, 3, 5, 9, 11}, S = {2, 3, 4, 5, 8} and R = {3, 4, 5, 7, 9}, then (Q ∩ S) ∩ R is', options: ['{3, 5}', '{2, 3, 5}', '{3, 4, 5}', '{5}'], explanation: 'Q ∩ S = {2, 3, 5}; with R this leaves {3, 5}.' },
    ta: { q: 'Q = {2, 3, 5, 9, 11}, S = {2, 3, 4, 5, 8}, R = {3, 4, 5, 7, 9} எனில் (Q ∩ S) ∩ R =', options: ['{3, 5}', '{2, 3, 5}', '{3, 4, 5}', '{5}'], explanation: 'Q ∩ S = {2, 3, 5}; R உடன் வெட்ட {3, 5}.' },
  },
  {
    difficulty: 'medium', source: '§1.6.1, p. 21', answer: 0,
    en: { q: 'For A = {a, b, c} and B = {b, c, d}, A − B = {a} and B − A = {d}. This shows that', options: ['set difference is not commutative', 'set difference is commutative', 'union is not commutative', 'intersection is not commutative'], explanation: 'A − B ≠ B − A, so set difference is not commutative (like subtraction of numbers).' },
    ta: { q: 'A = {a, b, c}, B = {b, c, d} எனில் A − B = {a}, B − A = {d}. இது காட்டுவது', options: ['கண வித்தியாசம் பரிமாற்றுப் பண்பு உடையதல்ல', 'கண வித்தியாசம் பரிமாற்றுப் பண்பு உடையது', 'சேர்ப்பு பரிமாற்றுப் பண்பு உடையதல்ல', 'வெட்டு பரிமாற்றுப் பண்பு உடையதல்ல'], explanation: 'A − B ≠ B − A; எனவே எண்களின் கழித்தல் போலவே கண வித்தியாசமும் பரிமாற்றுப் பண்பு உடையதல்ல.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.5 Q1, p. 28', answer: 0, imageUrl: `${IMG}/venn-ex1-5-q1.png`,
    en: { q: 'Using the given Venn diagram, A − B is', options: ['{3, 4, 6}', '{4, 6}', '{−1, −2, 3, 4, 6}', '{5, 7, 8}'], explanation: 'Elements of A outside circle B are 4, 6 (only A) and 3 (A ∩ C only).' },
    ta: { q: 'கொடுக்கப்பட்ட வென்படத்திலிருந்து A − B =', options: ['{3, 4, 6}', '{4, 6}', '{−1, −2, 3, 4, 6}', '{5, 7, 8}'], explanation: 'B வட்டத்திற்கு வெளியே உள்ள A இன் உறுப்புகள் 4, 6 (A இல் மட்டும்), 3 (A ∩ C இல் மட்டும்).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.5 Q1, p. 28', answer: 0, imageUrl: `${IMG}/venn-ex1-5-q1.png`,
    en: { q: 'Using the given Venn diagram, (B ∪ C)′ is', options: ['{1, 2, 4, 6}', '{1, 2}', '{4, 6}', '{0, −3, 1, 2}'], explanation: 'Outside both B and C lie 4, 6 (only in A) and 1, 2 (outside all circles).' },
    ta: { q: 'கொடுக்கப்பட்ட வென்படத்திலிருந்து (B ∪ C)′ =', options: ['{1, 2, 4, 6}', '{1, 2}', '{4, 6}', '{0, −3, 1, 2}'], explanation: 'B, C இரண்டிற்கும் வெளியே 4, 6 (A இல் மட்டும்) மற்றும் 1, 2 (எல்லா வட்டங்களுக்கும் வெளியே).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.5 Q2, p. 28', answer: 0,
    en: { q: 'If K = {a, b, d, e, f}, L = {b, c, d, g} and M = {a, b, c, d, h}, then K ∩ (L ∪ M) is', options: ['{a, b, d}', '{b, d}', '{a, b, c, d, e, f}', '{a, b, c, d}'], explanation: 'L ∪ M = {a, b, c, d, g, h}; its common elements with K are a, b, d.' },
    ta: { q: 'K = {a, b, d, e, f}, L = {b, c, d, g}, M = {a, b, c, d, h} எனில் K ∩ (L ∪ M) =', options: ['{a, b, d}', '{b, d}', '{a, b, c, d, e, f}', '{a, b, c, d}'], explanation: 'L ∪ M = {a, b, c, d, g, h}; K உடன் பொதுவானவை a, b, d.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.5 Q10, p. 28', answer: 0,
    en: { q: 'U = {4, 7, 8, 10, 11, 12, 15, 16}, A = {7, 8, 11, 12} and B = {4, 8, 12, 15}. Then (A ∪ B)′ = A′ ∩ B′ =', options: ['{10, 16}', '{8, 12}', '{4, 7, 10, 11, 15, 16}', '{10, 15, 16}'], explanation: 'A ∪ B = {4, 7, 8, 11, 12, 15}, so (A ∪ B)′ = {10, 16}; A′ ∩ B′ gives the same set.' },
    ta: { q: 'U = {4, 7, 8, 10, 11, 12, 15, 16}, A = {7, 8, 11, 12}, B = {4, 8, 12, 15} எனில் (A ∪ B)′ = A′ ∩ B′ =', options: ['{10, 16}', '{8, 12}', '{4, 7, 10, 11, 15, 16}', '{10, 15, 16}'], explanation: 'A ∪ B = {4, 7, 8, 11, 12, 15}; (A ∪ B)′ = {10, 16}; A′ ∩ B′ உம் இதே கணம்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.6 Q1(i), p. 35', answer: 0,
    en: { q: 'If n(A) = 25, n(B) = 40, n(A ∪ B) = 50 and n(B′) = 25, then n(A ∩ B) and n(U) are', options: ['15 and 65', '15 and 75', '65 and 15', '10 and 65'], explanation: 'n(A ∩ B) = 25 + 40 − 50 = 15; n(U) = n(B) + n(B′) = 40 + 25 = 65.' },
    ta: { q: 'n(A) = 25, n(B) = 40, n(A ∪ B) = 50, n(B′) = 25 எனில் n(A ∩ B), n(U) ஆகியவை', options: ['15, 65', '15, 75', '65, 15', '10, 65'], explanation: 'n(A ∩ B) = 25 + 40 − 50 = 15; n(U) = n(B) + n(B′) = 40 + 25 = 65.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.6 Q1(ii), p. 35', answer: 0,
    en: { q: 'If n(A) = 300, n(A ∪ B) = 500, n(A ∩ B) = 50 and n(B′) = 350, then n(B) and n(U) are', options: ['250 and 600', '250 and 850', '200 and 550', '150 and 500'], explanation: 'n(B) = n(A ∪ B) − n(A) + n(A ∩ B) = 500 − 300 + 50 = 250; n(U) = 250 + 350 = 600.' },
    ta: { q: 'n(A) = 300, n(A ∪ B) = 500, n(A ∩ B) = 50, n(B′) = 350 எனில் n(B), n(U) ஆகியவை', options: ['250, 600', '250, 850', '200, 550', '150, 500'], explanation: 'n(B) = 500 − 300 + 50 = 250; n(U) = 250 + 350 = 600.' },
  },
  {
    difficulty: 'medium', source: 'Book example 1.28, p. 29', answer: 0,
    en: { q: 'If n(A) = 36, n(B) = 10, n(A ∪ B) = 40 and n(A′) = 27, then n(U) and n(A ∩ B) are', options: ['63 and 6', '63 and 4', '46 and 6', '67 and 6'], explanation: 'n(U) = n(A) + n(A′) = 63; n(A ∩ B) = 36 + 10 − 40 = 6.' },
    ta: { q: 'n(A) = 36, n(B) = 10, n(A ∪ B) = 40, n(A′) = 27 எனில் n(U), n(A ∩ B) ஆகியவை', options: ['63, 6', '63, 4', '46, 6', '67, 6'], explanation: 'n(U) = 36 + 27 = 63; n(A ∩ B) = 36 + 10 − 40 = 6.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.6 Q4, p. 35', answer: 0,
    en: { q: 'In a class, all students take part in music or drama or both: 25 in music, 30 in drama and 8 in both. The total number of students is', options: ['47', '55', '63', '39'], explanation: '25 + 30 − 8 = 47 (17 only music, 22 only drama, 8 both).' },
    ta: { q: 'ஒரு வகுப்பில் அனைவரும் இசை அல்லது நாடகம் அல்லது இரண்டிலும் பங்கேற்கின்றனர்: இசையில் 25, நாடகத்தில் 30, இரண்டிலும் 8. வகுப்பின் மொத்த மாணவர்கள்', options: ['47', '55', '63', '39'], explanation: '25 + 30 − 8 = 47 (இசையில் மட்டும் 17, நாடகத்தில் மட்டும் 22, இரண்டிலும் 8).' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.6 Q5, p. 35', answer: 0,
    en: { q: 'In a party of 45 people, each likes tea or coffee or both; 35 like tea and 20 like coffee. The number who like both is', options: ['10', '15', '25', '55'], explanation: 'n(T ∩ C) = 35 + 20 − 45 = 10.' },
    ta: { q: '45 பேர் கொண்ட குழுவில் ஒவ்வொருவரும் தேநீர் அல்லது குளம்பி அல்லது இரண்டையும் விரும்புகின்றனர்; 35 பேர் தேநீர், 20 பேர் குளம்பி. இரண்டையும் விரும்புபவர்கள்', options: ['10', '15', '25', '55'], explanation: '35 + 20 − 45 = 10.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise 1.6 Q5, p. 35', answer: 0,
    en: { q: 'In a party of 45 people, each likes tea or coffee or both; 35 like tea and 20 like coffee. The number who do NOT like coffee is', options: ['25', '10', '35', '15'], explanation: 'Not liking coffee = 45 − 20 = 25 (those who like only tea).' },
    ta: { q: '45 பேர் கொண்ட குழுவில் ஒவ்வொருவரும் தேநீர் அல்லது குளம்பி அல்லது இரண்டையும் விரும்புகின்றனர்; 35 பேர் தேநீர், 20 பேர் குளம்பி. குளம்பியை விரும்பாதவர்கள்', options: ['25', '10', '35', '15'], explanation: 'குளம்பியை விரும்பாதவர்கள் = 45 − 20 = 25 (தேநீரை மட்டும் விரும்புபவர்கள்).' },
  },
  {
    difficulty: 'medium', source: 'Book example 1.30, p. 30', answer: 0,
    en: { q: 'In a school every student plays hockey or cricket or both: 300 play hockey, 250 play cricket and 110 play both. The number who play only hockey is', options: ['190', '140', '300', '410'], explanation: 'n(H − C) = n(H) − n(H ∩ C) = 300 − 110 = 190.' },
    ta: { q: 'ஒரு பள்ளியில் ஒவ்வொரு மாணவரும் ஹாக்கி அல்லது கிரிக்கெட் அல்லது இரண்டையும் விளையாடுகின்றனர்: ஹாக்கி 300, கிரிக்கெட் 250, இரண்டும் 110. ஹாக்கி மட்டும் விளையாடுபவர்கள்', options: ['190', '140', '300', '410'], explanation: 'n(H − C) = 300 − 110 = 190.' },
  },
  {
    difficulty: 'medium', source: 'Book example 1.31, p. 31', answer: 0,
    en: { q: 'In a party of 60 people, 35 had vanilla ice cream and 30 had chocolate ice cream; everyone had at least one. How many had only vanilla?', options: ['30', '35', '25', '5'], explanation: 'Both = 35 + 30 − 60 = 5, so only vanilla = 35 − 5 = 30.' },
    ta: { q: '60 பேர் கொண்ட விருந்தில் 35 பேர் வெண்ணிலா, 30 பேர் சாக்லேட் பனிக்கூழ் உண்டனர்; ஒவ்வொருவரும் குறைந்தது ஒன்றை உண்டனர். வெண்ணிலா மட்டும் உண்டவர்கள்', options: ['30', '35', '25', '5'], explanation: 'இரண்டும் = 35 + 30 − 60 = 5; வெண்ணிலா மட்டும் = 35 − 5 = 30.' },
  },
  {
    difficulty: 'medium', source: '§1.8, p. 29', answer: 0,
    en: { q: 'If A and B are two finite sets, then n(A − B) is equal to', options: ['n(A) − n(A ∩ B)', 'n(A) − n(B)', 'n(A ∪ B) − n(A)', 'n(A) + n(B) − n(A ∩ B)'], explanation: 'A − B is A with the common part removed, so n(A − B) = n(A) − n(A ∩ B).' },
    ta: { q: 'A, B என்பன முடிவுறு கணங்கள் எனில் n(A − B) =', options: ['n(A) − n(A ∩ B)', 'n(A) − n(B)', 'n(A ∪ B) − n(A)', 'n(A) + n(B) − n(A ∩ B)'], explanation: 'A இலிருந்து பொதுப் பகுதியை நீக்கினால் A − B; எனவே n(A − B) = n(A) − n(A ∩ B).' },
  },
  {
    difficulty: 'medium', source: '§1.4.9, p. 10', answer: 0,
    en: { q: 'If A = {1, 2, 5} and B = {1, 2, 3, 4, 5}, then', options: ['A is a proper subset of B', 'A is equal to B', 'B is a subset of A', 'A and B are disjoint'], explanation: 'Every element of A is in B and A ≠ B, so A ⊂ B (proper subset).' },
    ta: { q: 'A = {1, 2, 5}, B = {1, 2, 3, 4, 5} எனில்', options: ['A என்பது B இன் தகு உட்கணம்', 'A = B', 'B என்பது A இன் உட்கணம்', 'A, B வெட்டாக் கணங்கள்'], explanation: 'A இன் ஒவ்வோர் உறுப்பும் B இல் உள்ளது, A ≠ B; எனவே A என்பது B இன் தகு உட்கணம்.' },
  },
  {
    difficulty: 'medium', source: 'Book example 1.4, p. 7', answer: 0,
    en: { q: 'P = {x : −3 ≤ x ≤ 0, x ∈ ℤ} and Q = the set of all prime factors of 210. Then', options: ['P and Q are equivalent sets', 'P and Q are equal sets', 'n(P) = 3', 'n(Q) = 5'], explanation: 'P = {−3, −2, −1, 0} and Q = {2, 3, 5, 7}: n(P) = n(Q) = 4, but the elements differ.' },
    ta: { q: 'P = {x : −3 ≤ x ≤ 0, x ∈ ℤ}, Q = 210 இன் பகாக் காரணிகளின் கணம் எனில்', options: ['P, Q சமான கணங்கள்', 'P, Q சம கணங்கள்', 'n(P) = 3', 'n(Q) = 5'], explanation: 'P = {−3, −2, −1, 0}, Q = {2, 3, 5, 7}; n(P) = n(Q) = 4, ஆனால் உறுப்புகள் வேறு.' },
  },
  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise 1.6 Q6, p. 35', answer: 0,
    en: { q: 'In an examination, 50% of the students passed in Mathematics and 70% passed in Science, while 10% failed in both. If 300 students passed in both subjects, the total number of students is', options: ['1000', '600', '3000', '1200'], explanation: 'Passed in at least one = 90%, so both = 50% + 70% − 90% = 30%. 30% of N = 300 gives N = 1000.' },
    ta: { q: 'ஒரு தேர்வில் 50% மாணவர்கள் கணிதத்திலும் 70% மாணவர்கள் அறிவியலிலும் தேர்ச்சி பெற்றனர்; 10% இரண்டிலும் தேர்ச்சி பெறவில்லை. 300 மாணவர்கள் இரண்டிலும் தேர்ச்சி எனில் மொத்த மாணவர்கள்', options: ['1000', '600', '3000', '1200'], explanation: 'குறைந்தது ஒன்றில் தேர்ச்சி = 90%; இரண்டிலும் = 50% + 70% − 90% = 30%. N இன் 30% = 300 எனவே N = 1000.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 1.6 Q7, p. 35', answer: 0,
    en: { q: 'A and B are two sets with n(A − B) = 32 + x, n(B − A) = 5x and n(A ∩ B) = x. If n(A) = n(B), then x is', options: ['8', '4', '16', '32'], explanation: 'n(A) = 32 + 2x and n(B) = 6x. 32 + 2x = 6x gives x = 8.' },
    ta: { q: 'A, B என்ற கணங்களுக்கு n(A − B) = 32 + x, n(B − A) = 5x, n(A ∩ B) = x. n(A) = n(B) எனில் x =', options: ['8', '4', '16', '32'], explanation: 'n(A) = 32 + 2x, n(B) = 6x. 32 + 2x = 6x எனவே x = 8.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 1.6 Q8, p. 35', answer: 0,
    en: { q: 'Out of 500 car owners investigated, 400 owned car A, 200 owned car B and 50 owned both. This data is', options: ['not correct, because it gives 550 owners, more than 500', 'correct, because 400 + 200 − 50 = 550 ≤ 600', 'correct, because 50 < 200', 'not correct, because 400 + 200 = 600 owners own both'], explanation: 'n(A ∪ B) = 400 + 200 − 50 = 550, which is more than the 500 people surveyed.' },
    ta: { q: '500 மகிழுந்து உரிமையாளர்களைப் பற்றிய ஆய்வில் 400 பேர் மகிழுந்து A, 200 பேர் மகிழுந்து B, 50 பேர் இரண்டையும் வைத்துள்ளனர். இத்தகவல்', options: ['சரியல்ல; இது 500 ஐ விட அதிகமான 550 உரிமையாளர்களைத் தருகிறது', 'சரி; ஏனெனில் 400 + 200 − 50 = 550 ≤ 600', 'சரி; ஏனெனில் 50 < 200', 'சரியல்ல; ஏனெனில் 400 + 200 = 600 பேர் இரண்டையும் வைத்துள்ளனர்'], explanation: 'n(A ∪ B) = 400 + 200 − 50 = 550; இது ஆய்வு செய்யப்பட்ட 500 ஐ விட அதிகம்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 1.6 Q9, p. 35', answer: 0,
    en: { q: 'In a colony, 275 families buy a Tamil newspaper, 150 English, 45 Hindi; 125 buy Tamil and English, 17 English and Hindi, 5 Tamil and Hindi and 3 buy all three. Every family buys at least one. The total number of families is', options: ['326', '470', '323', '332'], explanation: 'n = 275 + 150 + 45 − 125 − 17 − 5 + 3 = 326.' },
    ta: { q: 'ஒரு குடியிருப்பில் 275 குடும்பங்கள் தமிழ், 150 ஆங்கிலம், 45 இந்தி செய்தித்தாள் வாங்குகின்றன; 125 தமிழ், ஆங்கிலம்; 17 ஆங்கிலம், இந்தி; 5 தமிழ், இந்தி; 3 மூன்றையும் வாங்குகின்றன. ஒவ்வொன்றும் குறைந்தது ஒன்று வாங்கினால் மொத்தக் குடும்பங்கள்', options: ['326', '470', '323', '332'], explanation: '275 + 150 + 45 − 125 − 17 − 5 + 3 = 326.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 1.6 Q9, p. 35', answer: 0,
    en: { q: 'In the same colony (Tamil 275, English 150, Hindi 45, Tamil & English 125, English & Hindi 17, Tamil & Hindi 5, all three 3), the number of families buying at least two newspapers is', options: ['141', '147', '150', '144'], explanation: 'Exactly two = (125 − 3) + (17 − 3) + (5 − 3) = 138; adding the 3 who buy all three gives 141.' },
    ta: { q: 'அதே குடியிருப்பில் (தமிழ் 275, ஆங்கிலம் 150, இந்தி 45, தமிழ்-ஆங்கிலம் 125, ஆங்கிலம்-இந்தி 17, தமிழ்-இந்தி 5, மூன்றும் 3) குறைந்தது இரண்டு செய்தித்தாள்களை வாங்கும் குடும்பங்கள்', options: ['141', '147', '150', '144'], explanation: 'சரியாக இரண்டு = (125 − 3) + (17 − 3) + (5 − 3) = 138; மூன்றும் வாங்கும் 3 ஐச் சேர்க்க 141.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 1.6 Q10, p. 36', answer: 0,
    en: { q: 'A survey of 1000 farmers found 600 grew paddy, 350 ragi, 280 corn, 120 paddy and ragi, 100 ragi and corn and 80 paddy and corn. Each grew at least one. The number who grew all three is', options: ['70', '30', '100', '930'], explanation: '1000 = 600 + 350 + 280 − 120 − 100 − 80 + x = 930 + x, so x = 70.' },
    ta: { q: '1000 விவசாயிகளில் 600 பேர் நெல், 350 கேழ்வரகு, 280 மக்காச்சோளம்; 120 நெல், கேழ்வரகு; 100 கேழ்வரகு, மக்காச்சோளம்; 80 நெல், மக்காச்சோளம் பயிரிட்டனர். ஒவ்வொருவரும் குறைந்தது ஒன்று பயிரிட்டால் மூன்றையும் பயிரிட்டவர்கள்', options: ['70', '30', '100', '930'], explanation: '1000 = 600 + 350 + 280 − 120 − 100 − 80 + x = 930 + x; எனவே x = 70.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 1.6 Q11, p. 36', answer: 0,
    en: { q: 'In a Venn diagram of three sets with n(U) = 125, the regions are: only A = x, only B = y, only C = z, A ∩ B only = 4, A ∩ C only = 6, B ∩ C only = 17, all three = 3, outside = 5. If y = 2x and z = x + 10, then (x, y, z) is', options: ['(20, 40, 30)', '(25, 50, 35)', '(15, 30, 25)', '(22, 44, 32)'], explanation: 'x + 2x + (x + 10) + 4 + 6 + 17 + 3 + 5 = 125 gives 4x + 45 = 125, so x = 20, y = 40, z = 30.' },
    ta: { q: 'n(U) = 125 கொண்ட மூன்று கணங்களின் வென்படத்தில்: A மட்டும் = x, B மட்டும் = y, C மட்டும் = z, A ∩ B மட்டும் = 4, A ∩ C மட்டும் = 6, B ∩ C மட்டும் = 17, மூன்றும் = 3, வெளியே = 5. y = 2x, z = x + 10 எனில் (x, y, z) =', options: ['(20, 40, 30)', '(25, 50, 35)', '(15, 30, 25)', '(22, 44, 32)'], explanation: 'x + 2x + (x + 10) + 4 + 6 + 17 + 3 + 5 = 125; 4x + 45 = 125; x = 20, y = 40, z = 30.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 1.6 Q12, p. 36', answer: 0,
    en: { q: 'Each of 35 students plays at least one of chess, carrom and table tennis: 22 chess, 21 carrom, 15 table tennis, 10 chess and table tennis, 8 carrom and table tennis, and 6 all three. How many play chess and carrom but not table tennis?', options: ['5', '11', '7', '8'], explanation: '35 = 22 + 21 + 15 − n(Ch ∩ Ca) − 10 − 8 + 6 gives n(Ch ∩ Ca) = 11; without table tennis: 11 − 6 = 5.' },
    ta: { q: '35 மாணவர்கள் ஒவ்வொருவரும் சதுரங்கம், சுண்டாட்டம், மேசை வரிப்பந்து இவற்றில் குறைந்தது ஒன்றை விளையாடுகின்றனர்: சதுரங்கம் 22, சுண்டாட்டம் 21, மேசை வரிப்பந்து 15, சதுரங்கம்-மேசை வரிப்பந்து 10, சுண்டாட்டம்-மேசை வரிப்பந்து 8, மூன்றும் 6. சதுரங்கம், சுண்டாட்டம் விளையாடி மேசை வரிப்பந்து விளையாடாதவர்கள்', options: ['5', '11', '7', '8'], explanation: '35 = 22 + 21 + 15 − n(ச ∩ சு) − 10 − 8 + 6 எனவே n(ச ∩ சு) = 11; மேசை வரிப்பந்து இல்லாமல் 11 − 6 = 5.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 1.6 Q12, p. 36', answer: 0,
    en: { q: 'With the same data (35 students; chess 22, carrom 21, table tennis 15, chess & TT 10, carrom & TT 8, all three 6), the number who play only chess is', options: ['7', '5', '12', '8'], explanation: 'Chess & carrom only = 5, chess & TT only = 4, all three = 6; only chess = 22 − (5 + 4 + 6) = 7.' },
    ta: { q: 'அதே தரவில் (35 மாணவர்கள்; சதுரங்கம் 22, சுண்டாட்டம் 21, மேசை வரிப்பந்து 15, சதுரங்கம்-மே.வ 10, சுண்டாட்டம்-மே.வ 8, மூன்றும் 6) சதுரங்கம் மட்டும் விளையாடுபவர்கள்', options: ['7', '5', '12', '8'], explanation: 'சதுரங்கம்-சுண்டாட்டம் மட்டும் = 5, சதுரங்கம்-மே.வ மட்டும் = 4, மூன்றும் = 6; சதுரங்கம் மட்டும் = 22 − 15 = 7.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 1.6 Q13, p. 36', answer: 0,
    en: { q: 'In a class of 50, each comes to school by bus, bicycle or on foot: 25 by bus, 20 by bicycle, 30 on foot and 10 by all three. How many use exactly two modes?', options: ['5', '35', '15', '25'], explanation: '50 = 75 − (sum of pairwise) + 10, so sum of pairwise = 35. Exactly two = 35 − 3 × 10 = 5.' },
    ta: { q: '50 மாணவர்கள் உள்ள வகுப்பில் ஒவ்வொருவரும் பேருந்து, மிதிவண்டி அல்லது நடந்து வருகின்றனர்: பேருந்து 25, மிதிவண்டி 20, நடந்து 30, மூன்றிலும் 10. சரியாக இரண்டு வகைகளில் மட்டும் வருபவர்கள்', options: ['5', '35', '15', '25'], explanation: '50 = 75 − (இரு இரு வெட்டுகளின் கூடுதல்) + 10; அக்கூடுதல் = 35. சரியாக இரண்டு = 35 − 3 × 10 = 5.' },
  },
  {
    difficulty: 'hard', source: 'Book example 1.32, p. 32', answer: 0,
    en: { q: 'In a college, 240 play cricket, 180 football, 164 hockey; 42 cricket and football, 38 football and hockey, 40 cricket and hockey, and 16 all three. Each plays at least one game. The number of students in the college is', options: ['480', '584', '464', '496'], explanation: '240 + 180 + 164 − 42 − 38 − 40 + 16 = 480.' },
    ta: { q: 'ஒரு கல்லூரியில் 240 பேர் கிரிக்கெட், 180 கால்பந்து, 164 ஹாக்கி; 42 கிரிக்கெட்-கால்பந்து, 38 கால்பந்து-ஹாக்கி, 40 கிரிக்கெட்-ஹாக்கி, 16 மூன்றும் விளையாடுகின்றனர். ஒவ்வொருவரும் குறைந்தது ஒன்று எனில் கல்லூரியின் மாணவர்கள்', options: ['480', '584', '464', '496'], explanation: '240 + 180 + 164 − 42 − 38 − 40 + 16 = 480.' },
  },
  {
    difficulty: 'hard', source: 'Book example 1.34, p. 33', answer: 0,
    en: { q: 'Of 100 students, 85 speak Tamil, 40 English, 20 French; 32 speak Tamil and English, 13 English and French, 10 Tamil and French. Each speaks at least one. How many speak all three?', options: ['10', '90', '0', '20'], explanation: '100 = 85 + 40 + 20 − 32 − 13 − 10 + x = 90 + x, so x = 10.' },
    ta: { q: '100 மாணவர்களில் 85 தமிழ், 40 ஆங்கிலம், 20 பிரெஞ்சு; 32 தமிழ்-ஆங்கிலம், 13 ஆங்கிலம்-பிரெஞ்சு, 10 தமிழ்-பிரெஞ்சு பேசுகின்றனர். ஒவ்வொருவரும் குறைந்தது ஒரு மொழி பேசினால் மூன்றையும் பேசுபவர்கள்', options: ['10', '90', '0', '20'], explanation: '100 = 85 + 40 + 20 − 32 − 13 − 10 + x = 90 + x; x = 10.' },
  },
  {
    difficulty: 'hard', source: 'Book example 1.35, p. 34', answer: 0,
    en: { q: 'Among 200 subscribers of magazines A, B, C: 75 do not take A, 100 do not take B, 50 do not take C, and 125 take at least two. The number who take exactly two magazines is', options: ['75', '50', '125', '100'], explanation: 'n(A) = 125, n(B) = 100, n(C) = 150. 200 = 375 − (x + y + z + r) − r = 250 − r gives r = 50, so exactly two = 125 − 50 = 75.' },
    ta: { q: 'A, B, C இதழ்களின் 200 சந்தாதாரர்களில் 75 பேர் A ஐ, 100 பேர் B ஐ, 50 பேர் C ஐ வாங்குவதில்லை; 125 பேர் குறைந்தது இரண்டு இதழ்களை வாங்குகின்றனர். சரியாக இரண்டு இதழ்களை வாங்குபவர்கள்', options: ['75', '50', '125', '100'], explanation: 'n(A) = 125, n(B) = 100, n(C) = 150. 200 = 375 − 125 − r = 250 − r; r = 50; சரியாக இரண்டு = 125 − 50 = 75.' },
  },
  {
    difficulty: 'hard', source: 'Book example 1.33, p. 33', answer: 0,
    en: { q: 'Of 600 families, 3/5 own a scooter, 1/3 a car, 1/4 a bicycle; 120 own scooter and car, 86 car and bicycle, 90 scooter and bicycle, and 2/15 own all three. The number of families owning no vehicle is', options: ['106', '494', '80', '136'], explanation: 'n(S) = 360, n(C) = 200, n(B) = 150, all three = 80. At least one = 360 + 200 + 150 − 120 − 86 − 90 + 80 = 494; none = 600 − 494 = 106.' },
    ta: { q: '600 குடும்பங்களில் 3/5 பங்கு ஸ்கூட்டர், 1/3 பங்கு கார், 1/4 பங்கு மிதிவண்டி வைத்துள்ளனர்; 120 ஸ்கூட்டர்-கார், 86 கார்-மிதிவண்டி, 90 ஸ்கூட்டர்-மிதிவண்டி, 2/15 பங்கு மூன்றும் வைத்துள்ளனர். எந்த வாகனமும் இல்லாத குடும்பங்கள்', options: ['106', '494', '80', '136'], explanation: 'n(S) = 360, n(C) = 200, n(B) = 150, மூன்றும் = 80. குறைந்தது ஒன்று = 494; எதுவும் இல்லை = 600 − 494 = 106.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 1.7 Q9, p. 37', answer: 0, imageUrl: `${IMG}/venn-fig1-40.png`,
    en: { q: 'From the given Venn diagram, n[P(AΔB)] is', options: ['32', '8', '16', '64'], explanation: 'AΔB = {60, 85, 75, 90, 70} has 5 elements, so its power set has 2⁵ = 32 elements.' },
    ta: { q: 'கொடுக்கப்பட்ட படத்திலிருந்து n[P(AΔB)] =', options: ['32', '8', '16', '64'], explanation: 'AΔB = {60, 85, 75, 90, 70} இல் 5 உறுப்புகள்; அதன் அடுக்குக் கணத்தில் 2⁵ = 32 உறுப்புகள்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 1.7 Q11, p. 37', answer: 0,
    en: { q: 'Let A = {∅} and B = P(A). Then A ∩ B is', options: ['{∅}', '{∅, {∅}}', '∅', '{0}'], explanation: 'B = P(A) = {∅, {∅}}. The only element of A, namely ∅, is also in B, so A ∩ B = {∅}.' },
    ta: { q: 'A = {∅}, B = P(A) எனில் A ∩ B =', options: ['{∅}', '{∅, {∅}}', '∅', '{0}'], explanation: 'B = P(A) = {∅, {∅}}. A இன் ஒரே உறுப்பு ∅, அது B இலும் உள்ளது; எனவே A ∩ B = {∅}.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 1.7 Q14, p. 37', answer: 0,
    en: { q: 'For any three sets P, Q and R, P − (Q ∩ R) is', options: ['(P − Q) ∪ (P − R)', '(P − Q) ∩ (P − R)', 'P − (Q ∪ R)', '(P ∩ Q) − R'], explanation: "By De Morgan's law for set difference, P − (Q ∩ R) = (P − Q) ∪ (P − R)." },
    ta: { q: 'P, Q, R என்பன எவையேனும் மூன்று கணங்கள் எனில் P − (Q ∩ R) =', options: ['(P − Q) ∪ (P − R)', '(P − Q) ∩ (P − R)', 'P − (Q ∪ R)', '(P ∩ Q) − R'], explanation: 'கண வித்தியாசத்திற்கான டி மார்கன் விதிப்படி P − (Q ∩ R) = (P − Q) ∪ (P − R).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 1.7 Q16, p. 37', answer: 0,
    en: { q: 'If n(A ∪ B ∪ C) = 100, n(A) = 4x, n(B) = 6x, n(C) = 5x, n(A ∩ B) = 20, n(B ∩ C) = 15, n(A ∩ C) = 25 and n(A ∩ B ∩ C) = 10, then x is', options: ['10', '15', '25', '30'], explanation: '100 = 15x − 20 − 15 − 25 + 10 = 15x − 50, so 15x = 150 and x = 10.' },
    ta: { q: 'n(A ∪ B ∪ C) = 100, n(A) = 4x, n(B) = 6x, n(C) = 5x, n(A ∩ B) = 20, n(B ∩ C) = 15, n(A ∩ C) = 25, n(A ∩ B ∩ C) = 10 எனில் x =', options: ['10', '15', '25', '30'], explanation: '100 = 15x − 20 − 15 − 25 + 10 = 15x − 50; 15x = 150; x = 10.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 1.7 Q17, p. 37', answer: 0,
    en: { q: 'For any three sets A, B and C, (A − B) ∩ (B − C) is equal to', options: ['∅', 'A only', 'B only', 'C only'], explanation: 'Elements of A − B are not in B, while elements of B − C are in B; nothing can be in both.' },
    ta: { q: 'A, B, C என்பன எவையேனும் மூன்று கணங்கள் எனில் (A − B) ∩ (B − C) க்குச் சமமானது', options: ['∅', 'A மட்டும்', 'B மட்டும்', 'C மட்டும்'], explanation: 'A − B இன் உறுப்புகள் B இல் இல்லை; B − C இன் உறுப்புகள் B இல் உள்ளன; எனவே பொது உறுப்பு இல்லை.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 1.7 Q18, p. 38', answer: 0,
    en: { q: 'If J = set of three-sided shapes, K = set of shapes with two equal sides and L = set of shapes with a right angle, then J ∩ K ∩ L is the set of', options: ['isosceles right triangles', 'isosceles triangles', 'equilateral triangles', 'right-angled triangles'], explanation: 'A shape in all three is a triangle with two equal sides and a right angle: an isosceles right triangle.' },
    ta: { q: 'J = மூன்று பக்கங்கள் கொண்ட உருவங்களின் கணம், K = இரண்டு பக்கங்கள் சமமான உருவங்களின் கணம், L = ஒரு கோணம் செங்கோணமான உருவங்களின் கணம் எனில் J ∩ K ∩ L என்பது', options: ['இருசமபக்கச் செங்கோண முக்கோணங்களின் கணம்', 'இருசமபக்க முக்கோணங்களின் கணம்', 'சமபக்க முக்கோணங்களின் கணம்', 'செங்கோண முக்கோணங்களின் கணம்'], explanation: 'மூன்றிலும் உள்ள உருவம் இரு சம பக்கங்களும் ஒரு செங்கோணமும் கொண்ட முக்கோணம்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 1.7 Q19, p. 38', answer: 0, imageUrl: `${IMG}/shaded-mcq19.png`,
    en: { q: 'The shaded region in the given three-set Venn diagram is', options: ['Z − (X ∩ Y)', 'Z − (X ∪ Y)', '(X ∪ Y) ∩ Z', 'Z ∪ (X ∩ Y)'], explanation: 'All of Z is shaded except the small central part common to X and Y, so the region is Z − (X ∩ Y).' },
    ta: { q: 'கொடுக்கப்பட்ட வென்படத்தில் நிழலிடப்பட்ட பகுதியானது', options: ['Z − (X ∩ Y)', 'Z − (X ∪ Y)', '(X ∪ Y) ∩ Z', 'Z ∪ (X ∩ Y)'], explanation: 'X, Y இரண்டிற்கும் பொதுவான நடுப்பகுதி தவிர Z முழுவதும் நிழலிடப்பட்டுள்ளது; எனவே Z − (X ∩ Y).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 1.7 Q20, p. 38', answer: 0,
    en: { q: 'In a city, 40% of people like only one fruit, 35% like only two fruits and 20% like all three fruits. What percentage of people do not like any of the three fruits?', options: ['5', '8', '10', '15'], explanation: 'People who like at least one fruit = 40 + 35 + 20 = 95%, so 100 − 95 = 5% like none.' },
    ta: { q: 'ஒரு நகரில் 40% மக்கள் ஒரு வகை பழத்தை மட்டும், 35% மக்கள் இரண்டு வகை பழங்களை மட்டும், 20% மக்கள் மூன்று வகை பழங்களையும் விரும்புகின்றனர். மூன்றில் எதையும் விரும்பாதவர்களின் சதவீதம்', options: ['5', '8', '10', '15'], explanation: 'குறைந்தது ஒன்றை விரும்புபவர்கள் = 40 + 35 + 20 = 95%; எனவே 100 − 95 = 5%.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 1.5 Q6, p. 28', answer: 0,
    en: { q: 'A = {x : x = 6n, n ∈ 𝕎, n < 6}, B = {x : x = 2n, n ∈ ℕ, 2 < n ≤ 9} and C = {x : x = 3n, n ∈ ℕ, 4 ≤ n < 10}. Then A − (B ∩ C) is', options: ['{0, 6, 24, 30}', '{0, 24, 30}', '{12, 18}', '{0, 6, 12, 18, 24, 30}'], explanation: 'A = {0, 6, 12, 18, 24, 30}, B = {6, 8, …, 18}, C = {12, 15, …, 27}; B ∩ C = {12, 18}, so A − (B ∩ C) = {0, 6, 24, 30}.' },
    ta: { q: 'A = {x : x = 6n, n ∈ 𝕎, n < 6}, B = {x : x = 2n, n ∈ ℕ, 2 < n ≤ 9}, C = {x : x = 3n, n ∈ ℕ, 4 ≤ n < 10} எனில் A − (B ∩ C) =', options: ['{0, 6, 24, 30}', '{0, 24, 30}', '{12, 18}', '{0, 6, 12, 18, 24, 30}'], explanation: 'A = {0, 6, 12, 18, 24, 30}, B = {6, 8, …, 18}, C = {12, 15, …, 27}; B ∩ C = {12, 18}; A − (B ∩ C) = {0, 6, 24, 30}.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 1.5 Q7, p. 28', answer: 0,
    en: { q: 'If A = {−2, 0, 1, 3, 5}, B = {−1, 0, 2, 5, 6} and C = {−1, 2, 5, 6, 7}, then A − (B ∪ C) = (A − B) ∩ (A − C) =', options: ['{−2, 1, 3}', '{−2, 0, 1, 3}', '{0, 5}', '{−2, 1, 3, 5}'], explanation: 'B ∪ C = {−1, 0, 2, 5, 6, 7}; removing these from A leaves {−2, 1, 3}.' },
    ta: { q: 'A = {−2, 0, 1, 3, 5}, B = {−1, 0, 2, 5, 6}, C = {−1, 2, 5, 6, 7} எனில் A − (B ∪ C) = (A − B) ∩ (A − C) =', options: ['{−2, 1, 3}', '{−2, 0, 1, 3}', '{0, 5}', '{−2, 1, 3, 5}'], explanation: 'B ∪ C = {−1, 0, 2, 5, 6, 7}; இவற்றை A இலிருந்து நீக்க {−2, 1, 3}.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 1.5 Q5, p. 28', answer: 0,
    en: { q: 'If A = {b, c, e, g, h}, B = {a, c, d, g, i} and C = {a, d, e, g, h}, then A − (B ∩ C) is', options: ['{b, c, e, h}', '{b, e, h}', '{b, c, e, g, h}', '{a, d, g}'], explanation: 'B ∩ C = {a, d, g}; removing g from A gives {b, c, e, h}.' },
    ta: { q: 'A = {b, c, e, g, h}, B = {a, c, d, g, i}, C = {a, d, e, g, h} எனில் A − (B ∩ C) =', options: ['{b, c, e, h}', '{b, e, h}', '{b, c, e, g, h}', '{a, d, g}'], explanation: 'B ∩ C = {a, d, g}; A இலிருந்து g ஐ நீக்க {b, c, e, h}.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 1.4 Q2, p. 22', answer: 0,
    en: { q: 'P = {x : x is a real number between 2 and 7} and Q = {x : x is a rational number between 2 and 7}. Which is correct?', options: ['P ∪ Q = Q ∪ P = P and P ∩ Q = Q ∩ P = Q', 'P ∪ Q = Q and P ∩ Q = P', 'P ∪ Q ≠ Q ∪ P', 'P ∩ Q = ∅'], explanation: 'Q ⊂ P, so the union is P and the intersection is Q, in either order (commutative property).' },
    ta: { q: 'P = {x : x என்பது 2 க்கும் 7 க்கும் இடையே உள்ள மெய்யெண்}, Q = {x : x என்பது 2 க்கும் 7 க்கும் இடையே உள்ள விகிதமுறு எண்}. சரியானது எது?', options: ['P ∪ Q = Q ∪ P = P, P ∩ Q = Q ∩ P = Q', 'P ∪ Q = Q, P ∩ Q = P', 'P ∪ Q ≠ Q ∪ P', 'P ∩ Q = ∅'], explanation: 'Q ⊂ P; எனவே சேர்ப்பு P, வெட்டு Q – எந்த வரிசையிலும் (பரிமாற்றுப் பண்பு).' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 1.5 Q1, p. 28', answer: 0, imageUrl: `${IMG}/venn-ex1-5-q1.png`,
    en: { q: 'Using the given Venn diagram, A − (B ∩ C) is', options: ['{−1, 3, 4, 6}', '{4, 6}', '{3, 4, 6}', '{−2, 8}'], explanation: 'B ∩ C = {−2, 8}; removing −2 from A = {4, 6, −1, −2, 3} leaves {−1, 3, 4, 6}.' },
    ta: { q: 'கொடுக்கப்பட்ட வென்படத்திலிருந்து A − (B ∩ C) =', options: ['{−1, 3, 4, 6}', '{4, 6}', '{3, 4, 6}', '{−2, 8}'], explanation: 'B ∩ C = {−2, 8}; A = {4, 6, −1, −2, 3} இலிருந்து −2 ஐ நீக்க {−1, 3, 4, 6}.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise 1.3 Q7, p. 19', answer: 0,
    en: { q: 'On drawing the Venn diagrams of (A ∩ B)′ and A′ ∪ B′ for two overlapping sets, we observe that', options: ['the two shaded regions are the same', 'the two shaded regions do not overlap', '(A ∩ B)′ is a part of A ∩ B', 'A′ ∪ B′ is the empty set'], explanation: "Both shade everything except the common part of A and B: (A ∩ B)′ = A′ ∪ B′ (De Morgan's law)." },
    ta: { q: 'வெட்டும் இரு கணங்களுக்கு (A ∩ B)′, A′ ∪ B′ இன் வென்படங்களை வரைந்தால் நாம் காண்பது', options: ['இரு நிழலிடப்பட்ட பகுதிகளும் ஒன்றே', 'இரு நிழலிடப்பட்ட பகுதிகளும் வெட்டவில்லை', '(A ∩ B)′ என்பது A ∩ B இன் ஒரு பகுதி', 'A′ ∪ B′ வெற்றுக் கணம்'], explanation: 'இரண்டிலும் A, B இன் பொதுப் பகுதி தவிர மற்றவை நிழலிடப்படும்: (A ∩ B)′ = A′ ∪ B′ (டி மார்கன் விதி).' },
  },
  {
    difficulty: 'hard', source: '§1.6.3, p. 22', answer: 0,
    en: { q: 'For A = {0, 2, 4, 6, 8}, B = {2, 3, 5, 7} and C = {5, 6, 7, 8}, the set A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C) is', options: ['{0, 2, 4, 5, 6, 7, 8}', '{5, 7}', '{0, 2, 3, 4, 5, 6, 7, 8}', '{2, 6, 8}'], explanation: 'B ∩ C = {5, 7}; A ∪ {5, 7} = {0, 2, 4, 5, 6, 7, 8} (distributive property of union over intersection).' },
    ta: { q: 'A = {0, 2, 4, 6, 8}, B = {2, 3, 5, 7}, C = {5, 6, 7, 8} எனில் A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C) =', options: ['{0, 2, 4, 5, 6, 7, 8}', '{5, 7}', '{0, 2, 3, 4, 5, 6, 7, 8}', '{2, 6, 8}'], explanation: 'B ∩ C = {5, 7}; A ∪ {5, 7} = {0, 2, 4, 5, 6, 7, 8} (வெட்டின் மீதான சேர்ப்பின் பங்கீட்டுப் பண்பு).' },
  },
  {
    difficulty: 'hard', source: '§1.6.2, p. 22', answer: 0,
    en: { q: 'Which statement about set difference is correct?', options: ['(A − B) − C = A − (B − C) holds when A, B and C are mutually disjoint', '(A − B) − C = A − (B − C) for all sets', 'Set difference is commutative', 'A − B = B − A whenever A ∩ B = ∅'], explanation: 'Set difference is not associative in general, but it is when the sets are mutually disjoint; it is never commutative unless A = B.' },
    ta: { q: 'கண வித்தியாசம் பற்றிய சரியான கூற்று எது?', options: ['A, B, C ஒன்றுக்கொன்று வெட்டாக் கணங்கள் எனில் (A − B) − C = A − (B − C)', 'எல்லாக் கணங்களுக்கும் (A − B) − C = A − (B − C)', 'கண வித்தியாசம் பரிமாற்றுப் பண்பு உடையது', 'A ∩ B = ∅ எனில் A − B = B − A'], explanation: 'பொதுவாகக் கண வித்தியாசம் சேர்ப்புப் பண்பு உடையதல்ல; கணங்கள் ஒன்றுக்கொன்று வெட்டாதவை எனில் மட்டும் உண்மை.' },
  },
  {
    difficulty: 'hard', source: '§1.4.8, p. 9', answer: 0,
    en: { q: 'Consider the statements:\n(i) Every set is a subset of itself.\n(ii) The empty set is a subset of every set.\n(iii) If A ⊆ B, then n(A) > n(B).\nWhich are correct?', options: ['(i) and (ii) only', '(ii) and (iii) only', '(i) and (iii) only', '(i), (ii) and (iii)'], explanation: 'If A ⊆ B then n(A) ≤ n(B), so (iii) is false; (i) and (ii) are true.' },
    ta: { q: 'கூற்றுகள்:\n(i) ஒவ்வொரு கணமும் தனக்குத் தானே உட்கணம்.\n(ii) வெற்றுக் கணம் எல்லாக் கணங்களுக்கும் உட்கணம்.\n(iii) A ⊆ B எனில் n(A) > n(B).\nஇவற்றுள் சரியானவை', options: ['(i), (ii) மட்டும்', '(ii), (iii) மட்டும்', '(i), (iii) மட்டும்', '(i), (ii), (iii)'], explanation: 'A ⊆ B எனில் n(A) ≤ n(B); எனவே (iii) தவறு; (i), (ii) சரி.' },
  },
  {
    difficulty: 'hard', source: '§1.5.3, p. 15', answer: 0,
    en: { q: 'Let n(A) = p and n(B) = q. Which of the following is correct?', options: ['The maximum of n(A ∪ B) is p + q', 'The minimum of n(A ∪ B) is 0', 'The maximum of n(A ∩ B) is p + q', 'The minimum of n(A ∩ B) is max{p, q}'], explanation: 'n(A ∪ B) is largest (p + q) when A and B are disjoint; its minimum is max{p, q}; n(A ∩ B) ranges from 0 to min{p, q}.' },
    ta: { q: 'n(A) = p, n(B) = q எனில் கீழ்க்காண்பனவற்றில் சரியானது எது?', options: ['n(A ∪ B) இன் அதிகபட்ச மதிப்பு p + q', 'n(A ∪ B) இன் குறைந்தபட்ச மதிப்பு 0', 'n(A ∩ B) இன் அதிகபட்ச மதிப்பு p + q', 'n(A ∩ B) இன் குறைந்தபட்ச மதிப்பு max{p, q}'], explanation: 'A, B வெட்டாக் கணங்கள் எனில் n(A ∪ B) அதிகபட்சம் p + q; குறைந்தபட்சம் max{p, q}; n(A ∩ B) 0 முதல் min{p, q} வரை.' },
  },
  {
    difficulty: 'hard', source: '§1.4.6, p. 8', answer: 3,
    en: { q: 'Assertion (A): Equivalent sets are always equal sets.\nReason (R): Equal sets have the same number of elements.', options: AR_EN, explanation: 'A = {p, q, r, s, t} and B = {4, 5, 6, 7, 8} are equivalent but not equal, so A is false; R is true.' },
    ta: { q: 'கூற்று: சமான கணங்கள் எப்போதும் சம கணங்கள் ஆகும்.\nகாரணம்: சம கணங்களில் உறுப்புகளின் எண்ணிக்கை சமம்.', options: AR_TA, explanation: 'A = {p, q, r, s, t}, B = {4, 5, 6, 7, 8} சமான கணங்கள், ஆனால் சம கணங்கள் அல்ல; கூற்று தவறு, காரணம் சரி.' },
  },
  {
    difficulty: 'hard', source: '§1.4.1, p. 6', answer: 3,
    en: { q: 'Assertion (A): {0} is an empty set.\nReason (R): An empty set has no elements.', options: AR_EN, explanation: '{0} has one element, 0, so it is a singleton set, not empty; the reason is true.' },
    ta: { q: 'கூற்று: {0} என்பது வெற்றுக் கணம்.\nகாரணம்: வெற்றுக் கணத்தில் உறுப்புகள் இல்லை.', options: AR_TA, explanation: '{0} இல் 0 என்ற ஓர் உறுப்பு உள்ளது; அது ஓருறுப்புக் கணம்; காரணம் சரி.' },
  },
  {
    difficulty: 'hard', source: '§1.8, p. 29', answer: 0,
    en: { q: 'Assertion (A): For A = {1, 2} and B = {3, 4, 5}, n(A ∪ B) = n(A) + n(B) = 5.\nReason (R): If A and B are disjoint sets, then n(A ∪ B) = n(A) + n(B).', options: AR_EN, explanation: 'A ∩ B = ∅, so n(A ∩ B) = 0 and the union formula reduces to n(A) + n(B); R explains A.' },
    ta: { q: 'கூற்று: A = {1, 2}, B = {3, 4, 5} எனில் n(A ∪ B) = n(A) + n(B) = 5.\nகாரணம்: A, B வெட்டாக் கணங்கள் எனில் n(A ∪ B) = n(A) + n(B).', options: AR_TA, explanation: 'A ∩ B = ∅ என்பதால் n(A ∩ B) = 0; சூத்திரம் n(A) + n(B) ஆகிறது; காரணம் கூற்றை விளக்குகிறது.' },
  },
  {
    difficulty: 'hard', source: '§1.4.11, p. 11', answer: 1,
    en: { q: 'Assertion (A): A set with 5 elements has 31 proper subsets.\nReason (R): The empty set is a subset of every set.', options: AR_EN, explanation: 'Proper subsets = 2⁵ − 1 = 31, so A is true; R is also true but the count comes from 2ᵐ − 1, not from R.' },
    ta: { q: 'கூற்று: 5 உறுப்புகள் கொண்ட கணத்திற்கு 31 தகு உட்கணங்கள் உள்ளன.\nகாரணம்: வெற்றுக் கணம் எல்லாக் கணங்களுக்கும் உட்கணம்.', options: AR_TA, explanation: 'தகு உட்கணங்கள் 2⁵ − 1 = 31; கூற்று சரி. காரணமும் சரி, ஆனால் எண்ணிக்கை 2ᵐ − 1 என்பதிலிருந்து வருகிறது.' },
  },
  {
    difficulty: 'hard', source: '§1.7.2, p. 26', answer: 0,
    en: { q: 'Assertion (A): For U = {0, 1, 2, 3, 4, 5, 6}, A = {1, 3, 5} and B = {0, 3, 4, 5}, (A ∪ B)′ = {2, 6}.\nReason (R): (A ∪ B)′ = A′ ∩ B′, and here A′ ∩ B′ = {0, 2, 4, 6} ∩ {1, 2, 6} = {2, 6}.', options: AR_EN, explanation: "Both are true and the De Morgan's law computation in R gives exactly the set in A." },
    ta: { q: 'கூற்று: U = {0, 1, 2, 3, 4, 5, 6}, A = {1, 3, 5}, B = {0, 3, 4, 5} எனில் (A ∪ B)′ = {2, 6}.\nகாரணம்: (A ∪ B)′ = A′ ∩ B′; இங்கு A′ ∩ B′ = {0, 2, 4, 6} ∩ {1, 2, 6} = {2, 6}.', options: AR_TA, explanation: 'இரண்டும் சரி; காரணத்தில் உள்ள டி மார்கன் விதிக் கணக்கீடு கூற்றில் உள்ள கணத்தையே தருகிறது.' },
  },
  {
    difficulty: 'hard', source: '§1.5.4, p. 16', answer: 0,
    en: { q: 'Which of the following set identities is correct?', options: ["A − B = A ∩ B′", 'A − B = B − A', 'A − ∅ = ∅', 'A − A = A'], explanation: 'A − B contains the elements of A not in B, i.e. A ∩ B′. Also A − ∅ = A and A − A = ∅.' },
    ta: { q: 'கீழ்க்காண்பனவற்றில் சரியான கண முற்றொருமை எது?', options: ["A − B = A ∩ B′", 'A − B = B − A', 'A − ∅ = ∅', 'A − A = A'], explanation: 'A − B என்பது B இல் இல்லாத A இன் உறுப்புகள், அதாவது A ∩ B′. மேலும் A − ∅ = A, A − A = ∅.' },
  },
];
