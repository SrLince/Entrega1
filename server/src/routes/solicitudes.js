const express = require('express');
const router = express.Router();
const solicitudesController = require('../controllers/solicitudesController');

router.get('/documentos', solicitudesController.verDocumentos);
router.get('/estrategias', solicitudesController.verEstrategias);

router.delete('/eliminar/documento/:id', solicitudesController.eliminarDocumento);
router.delete('/eliminar/estrategia/:id', solicitudesController.eliminarEstrategia);

module.exports = router;