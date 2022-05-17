const mysqlConn = require('../config/database');
const { mysql } = require('../config/database');
const documentosController = {};

documentosController.verDocumentos = (req, res) => {
  let query = 'SELECT id, nombre, descripcion, categoria, tipo, DATE_FORMAT(fecha, "%d-%m-%Y") AS fecha, archivo FROM documentos WHERE estado = "Disponible";';
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