const mysqlConn = require('../config/database');
const { mysql } = require('../config/database');
const planesController = {};

planesController.verPlanes = (req, res) => {
    let query = 'SELECT `indice`, `nombre_plan`, DATE_FORMAT(`fecha_creacion`, "%d-%m-%Y"), `descripcion`, `estrategia`, `nombre_riesgo` FROM planes;';
    mysqlConn.query(query, (err, sql) => {
        if(err) {
            res.json(err);
        }
        res.send(sql);
    });
};

planesController.crearPlanes = (req, res) => {
    let query = 'INSERT INTO `planes`(`nombre_plan`, DATE_FORMAT(`fecha_creacion`, "%Y-%m-%d"), `descripcion`, `estrategia`, `nombre_riesgo`) VALUES ()';
    mysqlConn.query(query, (err, sql) => {
        if(err) {
            res.json(err);
        }
        res.send(sql);
    });
};

module.exports = planesController;