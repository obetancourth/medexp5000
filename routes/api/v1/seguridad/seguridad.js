const express = require('express');
const router = express.Router();


router.post('/signin', async (req, res)=>{
  res.status(502).json({msg:'No Implemented'});
});

router.post('/login', async (req, res)=>{
  res.status(502).json({ msg: 'No Implemented' });
});


module.exports = router;
