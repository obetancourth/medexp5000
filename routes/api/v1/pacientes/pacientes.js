const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json(
    {
      endpoint: 'Pacientes',
      updates: new Date(2022,0,19,18,41,00)
    }
  );
});
//router.post();
//router.put();
//router.delete();



module.exports = router;
