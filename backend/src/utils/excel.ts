import { Response } from 'express';
import * as XLSX from 'xlsx';

// Excel templates schools download, fill in and upload: a data sheet with
// sample rows first (the one the upload reads), then a "How to fill" sheet and
// any lookup sheets (subjects, chapters).

export interface SheetSpec {
  name: string;
  rows: any[][];
  /** Column widths in characters; defaults from the header row. */
  widths?: number[];
}

/** A "How to fill" sheet: a title, then one instruction per row (rows starting with "•" are bullet points). */
export const howToSheet = (title: string, lines: (string | string[])[]): SheetSpec => ({
  name: 'How to fill',
  rows: [[title], [], ...lines.map((l) => (Array.isArray(l) ? l : [l]))],
  widths: [34, 90],
});

export const sendWorkbook = (res: Response, filename: string, sheets: SheetSpec[]) => {
  const workbook = XLSX.utils.book_new();
  for (const spec of sheets) {
    const sheet = XLSX.utils.aoa_to_sheet(spec.rows);
    const header = spec.rows[0] || [];
    sheet['!cols'] = (spec.widths || header.map((h: any) => Math.max(12, String(h ?? '').length + 2))).map((wch) => ({ wch }));
    XLSX.utils.book_append_sheet(workbook, sheet, spec.name.slice(0, 31));
  }
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
  res.send(XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' }));
};

/** Reads the first sheet of an .xlsx/.xls/.csv file as rows keyed by header (values as typed). */
export const readFirstSheet = (filePath: string) => {
  const workbook = XLSX.readFile(filePath, { raw: false });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  // raw: false keeps admission numbers and phones as typed (no 9.87E+09)
  return XLSX.utils.sheet_to_json<Record<string, any>>(sheet, { defval: '', raw: false });
};
