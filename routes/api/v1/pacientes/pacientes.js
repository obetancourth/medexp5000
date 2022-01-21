const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json(
    {
      endpoint: 'Pacientes',
      updates: new Date(2022,0,19,18,41,00)
    }
  );
}); //GET /

router.post('/new', async (req, res) => {
  const { nombres, apellidos, identidad, email, telefono } = req.body;

  res.status(200).json(
    {
      status: 'ok',
      recieved: {
        nombres,
        apellidos,
        nombreCompleto: `${nombres} ${apellidos}`,
        identidad,
        email,
        telefono
      }
    });
}); //POST /new


//router.post();
//router.put();
//router.delete();



module.exports = router;
