import express from 'express';
import cors from 'cors';
import { likemeModel } from './models/likeme.model.js';

const app = express(); // Creamos la aplicación express
app.use(cors({ origin: '*' })); // Habilitamos CORS
app.use(express.json()); // Middleware para parsear el cuerpo de las solicitudes POST

// // Configuración del puerto
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// GET
app.get('/posts', async (req, res) => {
    try {
        const posts = await likemeModel.findAll();
        return res.json(posts);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

// POST
app.post('/posts', async (req, res) => {
    try {
        const { titulo, img, descripcion } = req.body;
        const post = await likemeModel.create({ titulo, img, descripcion });
        return res.status(201).json(post);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
})
