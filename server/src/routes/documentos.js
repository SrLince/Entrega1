const express = require('express');
const router = express.Router();
const documentosController = require('../controllers/documentosController');

router.get('/', documentosController.verDocumentos);
router.post('/crear', documentosController.crearDocumentos);

module.exports = router;