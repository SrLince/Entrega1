const express = require('express');
const router = express.Router();
const planesController = require('../controllers/planesController');

router.get('/verPlanes', planesController.verPlanes);

router.post('/crearPlanes', planesController.crearPlanes);

module.exports = router;