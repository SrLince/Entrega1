const express = require('express');
const router = express.Router();
const documentosController = require('../controllers/documentosController');

router.get('/verDocumentos', documentosController.verDocumentos);

router.post('/crearDocumentos', documentosController.crearDocumentos);

module.exports = router;