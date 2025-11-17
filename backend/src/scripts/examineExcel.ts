import * as XLSX from 'xlsx';
import * as path from 'path';

// Read the Excel file
const filePath = path.join(__dirname, '../../../bl_bio_bot_unit_4_chap_9_the_tissues_qb.xlsx');
const workbook = XLSX.readFile(filePath);

// Get the first sheet name
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert sheet to JSON
const data = XLSX.utils.sheet_to_json(worksheet);

console.log('Sheet Name:', sheetName);
console.log('\nTotal Rows:', data.length);
console.log('\nFirst 3 rows:');
console.log(JSON.stringify(data.slice(0, 3), null, 2));

// Get all column headers
if (data.length > 0) {
  console.log('\nColumn Headers:');
  console.log(Object.keys(data[0]));
}
