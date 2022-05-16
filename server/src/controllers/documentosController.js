const mysqlConn = require('../config/database');
const { mysql } = require('../config/database');
const documentosController = {};

documentosController.verDocumentos = (req, res) => {
    let query = 'SELECT `id`, `nombre`, DATE_FORMAT(`fecha_creacion`, "%d-%m-%Y") AS fecha_creacion, `descripcion`, `estrategia`, `metodo`, `riesgo` FROM planes;';
    mysqlConn.query(query, (err, sql) => {
        if(err) {
            res.json(err);
        }
        res.send(sql);
    });
};

documentosController.crearDocumentos = (req, res) => {
    const {nombre, fecha_creacion, descripcion, estrategia, metodo, riesgo} = req.body;

    let query = 'INSERT INTO planes SET ?';
    mysqlConn.query(query,{
        nombre: nombre, 
        fecha_creacion: fecha_creacion, 
        descripcion: descripcion, 
        estrategia: estrategia, 
        metodo: metodo,
        riesgo: riesgo 
    }, (err, sql) => {
        if(err) {
            res.json(err);
        }
        res.send(sql);
    });
};

module.exports = documentosController;