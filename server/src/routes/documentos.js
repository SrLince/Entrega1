const express = require('express');
const router = express.Router();
const documentosController = require('../controllers/documentosController');

router.get('/', documentosController.verDocumentos);
router.get('/:id', documentosController.verDocumento);

router.get('/solicitudes', documentosController.verSolicitudes);
router.get('/solicitudes/ver/:id', documentosController.verSolicitud);

router.post('/crear', documentosController.crearDocumento);
router.post('/editar/:id', documentosController.editarDocumento);
router.post('/eliminar/:id', documentosController.eliminarDocumento);

module.exports = router;