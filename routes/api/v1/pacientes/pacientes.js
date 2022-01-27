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

router.get('/all', async (req, res) => {
  try {
    const rows = await pacienteModel.getAll();
    res.status(200).json({status:'ok', pacientes: rows});
  } catch (ex) {
    console.log(ex);
    res.status(500).json({status:'failed'});
  }
} );
// /byid/1;
router.get('/byid/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const row = await pacienteModel.getById(parseInt(id));
    res.status(200).json({ status: 'ok', paciente: row });
  } catch (ex) {
    console.log(ex);
    res.status(500).json({ status: 'failed' });
  }
});

router.get('/byagegender/:age/:gender', async (req, res) => {
  try {
    const { age, gender } = req.params;
    const row = {}; // await pacienteModel.getById(parseInt(id));
    res.status(200).json({ status: 'ok', paciente: row });
  } catch (ex) {
    console.log(ex);
    res.status(500).json({ status: 'failed' });
  }
});

router.post('/new', async (req, res) => {
  const { nombres, apellidos, identidad, email, telefono } = req.body;
  try {
    rslt = await pacienteModel.new(nombres, apellidos, identidad, telefono, email);
    res.status(200).json(
      {
        status: 'ok',
        result: rslt
      });
  } catch (ex) {
    console.log(ex);
    res.status(500).json(
      {
        status: 'failed',
        result: {}
      });
  }
}); //POST /new


//router.put();
router.put('/update/:id', async (req, res) => {
  try{
    const { nombres, apellidos, identidad, email, telefono } = req.body;
    const { id } = req.params;
    const result = await pacienteModel.updateOne(id, nombres, apellidos, identidad, telefono, email);
    res.status(200).json({
      status:'ok',
      result
    });
  } catch(ex){
    console.log(ex);
    res.status(500).json({ status: 'failed' });
  }
});

//router.delete();
router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pacienteModel.deleteOne(id);
    res.status(200).json({
      status: 'ok',
      result
    });
  } catch (ex) {
    console.log(ex);
    res.status(500).json({ status: 'failed' });
  }
});


module.exports = router;
