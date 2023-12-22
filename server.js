import express from 'express';
import cors from 'cors';
import router from './routes/postsRoutes.js';

const app = express(); // Creamos la aplicación express
app.use(cors()); // Habilitamos CORS
app.use(express.json()); // Middleware para parsear el cuerpo de las solicitudes POST
app.use(router); // Habilitamos las rutas

// // Configuración del puerto
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

