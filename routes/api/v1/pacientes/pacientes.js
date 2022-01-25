const express = require('express');
const router = express.Router();

const Pacientes = new require('../../../../dao/pacientes/pacientes.model');
const pacienteModel = new Pacientes();

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
  rslt = await pacienteModel.new(nombres, apellidos, identidad, telefono, email);
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
