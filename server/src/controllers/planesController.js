const mysqlConn = require('../config/database');
const { mysql } = require('../config/database');
const planesController = {};

planesController.verPlanes = (req, res) => {
    let query = 'SELECT * FROM planes;';
    mysqlConn.query(query, (err, sql) => {
        if(err) {
            res.json(err);
        }
        res.send(sql);
    });
};

planesController.crearPlanes = (req, res) => {
    let query = 'INSERT INTO `planes`(`indice`, `nombre-plan`, `fecha-creacion`, `descripcion`, `estrategia`, `nombre-riesgo`) VALUES ()';
    mysqlConn.query(query, (err, sql) => {
        if(err) {
            res.json(err);
        }
        res.send(sql);
    });
};

module.exports = planesController;