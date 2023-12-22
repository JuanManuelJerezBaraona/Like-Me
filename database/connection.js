import pkg from 'pg';
import pg from 'pg';

export const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'likeme',
    password: '855518qwe',
    port: 5432,
    allowExitOnIdle: true
});

try {
    await pool.query('SELECT NOW()');
    console.log('Database connected');
} catch (error) {
    console.log(error);
}