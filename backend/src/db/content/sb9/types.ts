// Shared shape of a textbook question-bank question (TN State Board, 9th).
// Write every question with the right option first (answer: 0); options are
// shuffled with a fixed seed when loaded (see index.ts).

export interface BankQuestion {
  difficulty: 'easy' | 'medium' | 'hard';
  /** Where it comes from: "§3.4.1, p. 31" for our own questions, "Book exercise I.3, p. 37" for textbook exercises */
  source: string;
  imageUrl?: string;
  en: { q: string; options: [string, string, string, string]; explanation: string };
  ta: { q: string; options: [string, string, string, string]; explanation: string };
  answer: 0 | 1 | 2 | 3;
}

// Standard assertion–reason options, as worded in the textbooks (kept in this order)
export const AR_EN: [string, string, string, string] = [
  'Both assertion and reason are true, and the reason is the correct explanation of the assertion.',
  'Both assertion and reason are true, but the reason is not the correct explanation of the assertion.',
  'The assertion is true but the reason is false.',
  'The assertion is false but the reason is true.',
];
export const AR_TA: [string, string, string, string] = [
  'கூற்று மற்றும் காரணம் இரண்டும் சரி; காரணம் கூற்றுக்கான சரியான விளக்கம்.',
  'கூற்று மற்றும் காரணம் இரண்டும் சரி; ஆனால் காரணம் கூற்றுக்கான சரியான விளக்கம் அல்ல.',
  'கூற்று சரி; காரணம் தவறு.',
  'கூற்று தவறு; காரணம் சரி.',
];
