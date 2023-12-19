import { pool } from '../database/connection.js';

const findAll = async () => {
    const { rows } = await pool.query('SELECT * FROM posts');
    return rows;
}

const create = async ({ titulo, img, descripcion }) => {
    const query = "INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *";
    const { rows } = await pool.query(query, [titulo, img, descripcion]);
    return rows[0];
};
    

export const likemeModel = {
    findAll,
    create
};