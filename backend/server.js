const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./config/db'); // Importa la conexión a la base de datos
const glosarioRoutes = require('./routes/glosario'); // Ejemplo de una ruta para la tabla glosario
const usuarioRoutes = require('./routes/usuario');
const claseRoutes = require('./routes/clase');

const app = express();

// Configurar CORS para permitir solicitudes desde tu dominio Netlify
app.use(cors({
  origin: 'https://pukllaspayachay2.netlify.app', // Reemplaza con tu dominio Netlify
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Middleware para servir archivos estáticos (como imágenes)
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(express.json());

// Usar las rutas específicas de las tablas
app.use('/glosario', glosarioRoutes);
app.use('/usuario', usuarioRoutes);
app.use('/clase', claseRoutes);

// Ruta GET para la raíz del servidor
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de PUKLLASPA YACHAY');
});

// Asegurar que el servidor escuche en el puerto proporcionado por Railway o en el puerto 3001 
const PORT = process.env.PORT || 3001; 
app.listen(PORT, () => { 
console.log(`Servidor corriendo en el puerto ${PORT}`);});