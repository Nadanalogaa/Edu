import fs from 'fs';
import path from 'path';
import TEXTBOOK_PAGES from '../db/content/sb9/textbookPages.json';

// Textbook pages a question comes from, so students can study them while they
// practise. Whole books are pictures under
// /textbook/<class>/<board>/<subject>/<em|tm>/<printed page>.webp, each book
// numbered by its own printed pages. A question's source names the
// English-medium page; textbookPages.json gives the Tamil-medium page with the
// same content (matched by the figures on each page).

const SUBJECT_FOLDERS: Record<string, string> = { Science: 'science', Maths: 'maths', Mathematics: 'maths' };
const TAMIL_PAGE: Record<string, Record<string, number>> = TEXTBOOK_PAGES as any;
const ROOTS = [
  process.env.FRONTEND_DIST || path.join(__dirname, '../../../dist'),
  path.join(__dirname, '../../../public'),
];

let available: Set<string> | null = null;
const pagesOnDisk = () => {
  if (available) return available;
  available = new Set();
  for (const root of ROOTS) {
    const base = path.join(root, 'textbook');
    if (!fs.existsSync(base)) continue;
    const walk = (dir: string) => {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(full);
        else available!.add('/' + path.relative(root, full).split(path.sep).join('/'));
      }
    };
    walk(base);
  }
  return available;
};

export interface TextbookRef {
  /** Folder of the book pages: `${base}/em/031.webp`, `${base}/tm/031.webp` */
  base: string;
  section: string | null;
  page: number;
  taPage: number | null;
  en: string | null;
  ta: string | null;
}

const pageUrl = (base: string, medium: 'em' | 'tm', page: number) => `${base}/${medium}/${String(page).padStart(3, '0')}.webp`;

/** The textbook page(s) for a question, when we have them. */
export const textbookFor = (q: Record<string, any>): TextbookRef | null => {
  const folder = q.subject && SUBJECT_FOLDERS[q.subject];
  const match = typeof q.source === 'string' ? q.source.match(/pp?\.\s*(\d+)/) : null;
  if (!folder || !match || !q.board || !q.classGrade) return null;
  const page = Number(match[1]);
  const base = `/textbook/${q.classGrade}/${q.board}/${folder}`;
  const taPage = (q.board === 'state_board' && q.classGrade === 9 && TAMIL_PAGE[folder]?.[String(page)]) || null;
  const en = pagesOnDisk().has(pageUrl(base, 'em', page)) ? pageUrl(base, 'em', page) : null;
  const ta = taPage && pagesOnDisk().has(pageUrl(base, 'tm', taPage)) ? pageUrl(base, 'tm', taPage) : null;
  if (!en && !ta) return null;
  return { base, section: q.source.match(/§\s*[\d.]+/)?.[0] || null, page, taPage: ta ? taPage : null, en, ta };
};
