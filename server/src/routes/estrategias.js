const express = require('express');
const router = express.Router();
const estrategiasController = require('../controllers/estrategiasController');

router.get('/', estrategiasController.verEstrategias);
router.get('/:id', estrategiasController.verEstrategia);

router.post('/crear', estrategiasController.crearEstrategias);

module.exports = router;