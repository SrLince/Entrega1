const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/verEventos', userController.verEventos);
router.get('/verEvento/:id', userController.verEvento);

router.post('/crearSolicitud/:id', userController.crearSolicitud);

router.post('/eliminarSolicitud/:id', userController.eliminarSolicitud);

module.exports = router;