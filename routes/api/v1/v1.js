const express = require('express');
const router = express.Router();
const { verifyApiHeaderToken } =
  require('./headerVerifyMiddleware');

// const middlewares = require('./headerVerifyMiddleware');
const pacientesRoutes = require('./pacientes/pacientes');
// const expedientesRoutes = require('./expedientes/expedientes');
//middlewares
router.use(
  '/pacientes',
  verifyApiHeaderToken,
  pacientesRoutes
);
// router.use('/expedientes', expedientesRoutes);
module.exports = router;
