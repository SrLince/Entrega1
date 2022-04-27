const express = require('express');
const router = express.Router();
const planesController = require('../controllers/planesController');

router.get('/verPlanes', planesController.verPlanes);

router.post('/crearPlanes', planesController.crearPlanes);

//router.get('/verEvento/:id', adminController.verEvento);

//router.post('/crearEvento', adminController.crearEvento);

//router.delete('/eliminarEvento/:id', adminController.eliminarEvento);

module.exports = router;