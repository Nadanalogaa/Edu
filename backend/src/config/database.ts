import { Pool, PoolClient, QueryResultRow, types } from 'pg';
import { runMigrations } from '../db/migrations';

// Return DATE columns as 'YYYY-MM-DD' strings. As JS Dates they would be local
// midnight, which turns into the previous day once serialised to UTC JSON.
types.setTypeParser(1082, (value: string) => value);

// DATABASE_URL example: postgresql://edu_user:password@edu-db:5432/education
// Set DATABASE_SSL=true for a managed database that requires TLS; the database
// container on the VPS is reached over the Docker network without SSL.
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: false } : false,
  max: Number(process.env.DATABASE_POOL_SIZE) || 10,
});

pool.on('error', (error) => {
  console.error('PostgreSQL pool error:', error);
});

export type Queryable = Pick<Pool, 'query'> | PoolClient;

export const query = async <T extends QueryResultRow = any>(
  text: string,
  params: any[] = [],
  client: Queryable = pool
): Promise<T[]> => {
  const result = await client.query<T>(text, params);
  return result.rows;
};

export const withTransaction = async <T>(fn: (client: PoolClient) => Promise<T>): Promise<T> => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const result = await fn(client);
    await client.query('COMMIT');
    return result;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};

// Connects (retrying while the database container starts) and applies pending migrations.
const connectDB = async (): Promise<void> => {
  if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL is not defined in environment variables');
    process.exit(1);
  }

  const attempts = 10;
  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      const [info] = await query('SELECT current_database() AS db');
      const client = await pool.connect();
      try {
        await runMigrations(client);
      } finally {
        client.release();
      }
      console.log(`PostgreSQL connected: ${info.db}`);
      return;
    } catch (error: any) {
      console.error(`Error connecting to PostgreSQL (attempt ${attempt}/${attempts}): ${error.message}`);
      if (attempt === attempts) process.exit(1);
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }
  }
};

const shutdown = async () => {
  await pool.end();
  console.log('PostgreSQL pool closed through app termination');
  process.exit(0);
};
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

export default connectDB;
