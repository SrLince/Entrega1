const express = require('express');
const router = express.Router();
const estrategiasController = require('../controllers/estrategiasController');

router.get('/', estrategiasController.verEstrategias);

router.get('/solicitudes', estrategiasController.verSolicitudes);
router.get('/solicitudes/ver/:id', estrategiasController.verSolicitud);

router.post('/crear', estrategiasController.crearEstrategias);

module.exports = router;