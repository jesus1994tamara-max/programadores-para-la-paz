const express = require('express');
const app = express();

// Ruta principal que responde al navegador
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

// El servidor escucha en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});
