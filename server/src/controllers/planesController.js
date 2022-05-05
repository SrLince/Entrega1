const mysqlConn = require('../config/database');
const { mysql } = require('../config/database');
const planesController = {};

planesController.verPlanes = (req, res) => {
    let query = 'SELECT `id`, `nombre_plan`, DATE_FORMAT(`fecha_creacion`, "%d-%m-%Y") AS fecha_creacion, `descripcion`, `estrategia`, `riesgo` FROM planes;';
    mysqlConn.query(query, (err, sql) => {
        if(err) {
            res.json(err);
        }
        res.send(sql);
    });
};

planesController.crearPlanes = (req, res) => {
    const {nombre_plan, fecha_creacion, descripcion, estrategia, riesgo} = req.body;

    let query = 'INSERT INTO planes SET ?';
    mysqlConn.query(query,{
        nombre_plan: nombre_plan, 
        fecha_creacion: fecha_creacion, 
        descripcion: descripcion, 
        estrategia: estrategia, 
        riesgo: riesgo 
    }, (err, sql) => {
        if(err) {
            res.json(err);
        }
        res.send(sql);
    });
};

module.exports = planesController;