const express = require('express');
const router = express.Router();
const solicitudesController = require('../controllers/solicitudesController');

router.get('/documentos', solicitudesController.verDocumentos);
router.get('/estrategias', solicitudesController.verEstrategias);

module.exports = router;