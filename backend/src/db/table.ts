import { query, Queryable } from '../config/database';

const toSnake = (key: string) => key.replace(/[A-Z]/g, (c) => `_${c.toLowerCase()}`);
const toCamel = (key: string) => key.replace(/_([a-z0-9])/g, (_, c) => c.toUpperCase());

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export const isUuid = (value: unknown): value is string =>
  typeof value === 'string' && UUID_RE.test(value);

// Records keep the MongoDB-era JSON shape: `_id` (plus `id`) and camelCase fields.
export type Doc = Record<string, any> & { _id: string; id: string };

/**
 * A table whose rows are exposed as camelCase documents. Only the listed
 * columns can be written, so request bodies can be passed straight through
 * (unknown keys are ignored, as with Mongoose strict mode).
 */
export class Table {
  private writable: Set<string>;

  constructor(
    readonly name: string,
    columns: string[],
    private jsonColumns: string[] = [],
    private hiddenColumns: string[] = []
  ) {
    this.writable = new Set(columns);
  }

  toDoc(row: Record<string, any> | undefined, { withHidden = false } = {}): Doc | null {
    if (!row) return null;
    const doc: any = { _id: row.id, id: row.id };
    for (const [key, value] of Object.entries(row)) {
      if (key === 'id') continue;
      const camel = toCamel(key);
      if (!withHidden && this.hiddenColumns.includes(camel)) continue;
      doc[camel] = value;
    }
    return doc;
  }

  private columnValues(data: Record<string, any>) {
    const columns: string[] = [];
    const values: any[] = [];
    for (const [key, value] of Object.entries(data)) {
      if (!this.writable.has(key) || value === undefined) continue;
      columns.push(toSnake(key));
      // node-pg turns JS arrays into Postgres arrays, so JSONB values are
      // serialised explicitly.
      values.push(this.jsonColumns.includes(key) && value !== null ? JSON.stringify(value) : value);
    }
    return { columns, values };
  }

  async insert(data: Record<string, any>, client?: Queryable): Promise<Doc> {
    const { columns, values } = this.columnValues(data);
    const placeholders = values.map((_, i) => `$${i + 1}`);
    const sql = columns.length
      ? `INSERT INTO ${this.name} (${columns.join(', ')}) VALUES (${placeholders.join(', ')}) RETURNING *`
      : `INSERT INTO ${this.name} DEFAULT VALUES RETURNING *`;
    const [row] = await query(sql, values, client);
    return this.toDoc(row)!;
  }

  async updateById(id: string, data: Record<string, any>, client?: Queryable): Promise<Doc | null> {
    if (!isUuid(id)) return null;
    const { columns, values } = this.columnValues(data);
    if (columns.length === 0) return this.findById(id, client);
    const sets = columns.map((c, i) => `${c} = $${i + 1}`);
    const [row] = await query(
      `UPDATE ${this.name} SET ${sets.join(', ')}, updated_at = now() WHERE id = $${values.length + 1} RETURNING *`,
      [...values, id],
      client
    );
    return this.toDoc(row);
  }

  async findById(id: string, client?: Queryable): Promise<Doc | null> {
    if (!isUuid(id)) return null;
    const [row] = await query(`SELECT * FROM ${this.name} WHERE id = $1`, [id], client);
    return this.toDoc(row);
  }

  async findByIds(ids: string[], client?: Queryable): Promise<Map<string, Doc>> {
    const valid = [...new Set(ids.map(String).filter(isUuid))];
    const docs = new Map<string, Doc>();
    if (valid.length === 0) return docs;
    const rows = await query(`SELECT * FROM ${this.name} WHERE id = ANY($1::uuid[])`, [valid], client);
    rows.forEach((row) => docs.set(row.id, this.toDoc(row)!));
    return docs;
  }

  async select(sql: string, params: any[] = [], client?: Queryable): Promise<Doc[]> {
    const rows = await query(sql, params, client);
    return rows.map((row) => this.toDoc(row)!);
  }
}

/** Keeps only the given fields of a document (like Mongoose `populate(path, 'a b')`). */
export const pick = (doc: Doc | null | undefined, fields: string[]) => {
  if (!doc) return null;
  const picked: any = { _id: doc._id, id: doc.id };
  fields.forEach((f) => (picked[f] = doc[f]));
  return picked;
};
