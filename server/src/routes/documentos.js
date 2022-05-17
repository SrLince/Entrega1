const express = require('express');
const router = express.Router();
const documentosController = require('../controllers/documentosController');

router.get('/', documentosController.verDocumentos);
router.get('/:id', documentosController.verDocumento);
router.post('/crear', documentosController.crearDocumentos);
router.post('/modificar/:id', documentosController.modificarDocumento);

module.exports = router;