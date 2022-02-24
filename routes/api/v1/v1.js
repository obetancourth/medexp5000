const express = require('express');
const router = express.Router();
const { verifyApiHeaderToken } =
  require('./headerVerifyMiddleware');

const {passport, jwtMiddleware} = require('./seguridad/jwtHelper');

const pacientesRoutes = require('./pacientes/pacientes');
const seguridadRoutes = require('./seguridad/seguridad');
// const expedientesRoutes = require('./expedientes/expedientes');
router.use(passport.initialize());
//public
router.use('/seguridad', verifyApiHeaderToken, seguridadRoutes);
//middlewares
router.use(
  '/pacientes',
  verifyApiHeaderToken,
  jwtMiddleware,
  pacientesRoutes
);
// router.use('/expedientes', expedientesRoutes);
module.exports = router;
