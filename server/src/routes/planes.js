const express = require('express');
const router = express.Router();
const planesController = require('../controllers/planesController');

router.get('/planes', planesController.verPlanes);

router.post('/crearplan', planesController.crearPlanes);

//router.get('/verEvento/:id', adminController.verEvento);

//router.post('/crearEvento', adminController.crearEvento);

//router.delete('/eliminarEvento/:id', adminController.eliminarEvento);

module.exports = router;