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
    const {nombre, descripcion, categoria, tipo, archivo} = req.body;

    let query = 'INSERT INTO documentos SET ?';
    mysqlConn.query(query,{
        nombre: nombre, 
        descripcion: descripcion, 
        categoria: categoria, 
        tipo: tipo, 
        archivo: archivo
    }, (err, sql) => {
        if (err) {
            res.json(err);
        }
        res.send(sql);
    });
};

module.exports = documentosController;