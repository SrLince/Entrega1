const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/verEventos', adminController.verEventos);
router.get('/verEvento/:id', adminController.verEvento);
router.get('/verEditar/:id', adminController.verEditar);
router.get('/verSolicitudes', adminController.verSolicitudes);
router.get('/verUsuarios', adminController.verUsuarios);
router.get('/verUsuario/:id', adminController.verUsuario);
router.get('/verModUsuario/:id', adminController.verModUsuario);

router.post('/crearEvento', adminController.crearEvento);
router.post('/modificarEvento', adminController.modificarEvento);
router.post('/suspenderEvento', adminController.suspenderEvento);
router.post('/aceptarSolicitud/:id', adminController.aceptarSolicitud);
router.post('/rechazarSolicitud/:id', adminController.rechazarSolicitud);
router.post('/crearUsuario', adminController.crearUsuario);
router.post('/modificarUsuario', adminController.modificarUsuario);

router.delete('/eliminarEvento/:id', adminController.eliminarEvento);

/* Secundario */
//router.post('/', adminController.modificarUsuario);
//router.delete('/', adminController.eliminarUsuario);

module.exports = router;