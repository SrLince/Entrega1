const express = require('express');
const router = express.Router();
const estrategiasController = require('../controllers/estrategiasController');

router.get('/', estrategiasController.verEstrategias);
router.post('/crear', estrategiasController.crearEstrategias);

module.exports = router;