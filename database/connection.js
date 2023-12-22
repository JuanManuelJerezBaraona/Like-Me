import pg from 'pg';

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'likeme',
    password: '',
    port: 5432,
    allowExitOnIdle: true
});

try {
    await pool.query('SELECT NOW()');
    console.log('Database connected');
} catch (error) {
    console.log(error);
}

export default pool;