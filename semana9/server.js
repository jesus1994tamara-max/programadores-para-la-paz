const express = require('express');
const app = express();

<<<<<<< HEAD
app.get('/', (req, res) => {
  res.send('Servidor activo y funcionando');
});

app.get('/estado', (req, res) => {
  res.json({
    estado: "Servidor funcionando",
    servicio: "API comunitaria"
  });
=======
app.use(express.json());

let reportes = [];

app.get('/reportes', (req, res) => {
  res.json(reportes);
});

app.post('/reportes', (req, res) => {

  const reporte = {
    id: reportes.length + 1,
    tipo: req.body.tipo,
    descripcion: req.body.descripcion
  };

  reportes.push(reporte);

  res.json({
    mensaje: "Reporte registrado",
    reporte: reporte
  });

>>>>>>> 78e526398e822001aebc39f6f3788e0fb9551a9f
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});
