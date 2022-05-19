const mysqlConn = require('../config/database');
const { mysql } = require('../config/database');
const documentosController = {};

documentosController.verDocumentos = (req, res) => {
  let query = 'SELECT id, nombre, descripcion, categoria, tipo, DATE_FORMAT(fecha, "%d-%m-%Y") AS fecha FROM documentos WHERE estado = "Disponible";';
  mysqlConn.query(query, (err, sql) => {
    if(err) {
      res.json(err);
    }
    res.send(sql);
  });
};

documentosController.verDocumento = (req, res) => {
  const id = req.params.id;
  let query = 'SELECT nombre, descripcion, categoria, tipo, DATE_FORMAT(fecha, "%d-%m-%Y") AS fecha FROM documentos WHERE id = ' + id + ' AND estado = "Disponible";';
  mysqlConn.query(query, (err, sql) => {
      if(err) {
          res.json(err);
      }
      res.send(sql);
  });
};

documentosController.verSolicitudes = (req, res) => {

};

documentosController.verSolicitud = (req, res) => {
  const id = req.params.id;
};

documentosController.crearDocumento = (req, res) => {
  const {nombre, descripcion, categoria, tipo, archivo} = req.body;

  let query = 'INSERT INTO documentos SET ?';
  mysqlConn.query(query,{
    nombre: nombre, 
    descripcion: descripcion, 
    categoria: categoria, 
    tipo: tipo
  }, (err, sql) => {
    if (err) {
      res.json(err);
    } 
    res.send(sql);
    });
};

documentosController.editarDocumento = (req, res) => {
  const id = req.params.id;
  const {nombre, descripcion, categoria, tipo} = req.body;

  var query = 'INSERT INTO solicitudes_doc SET ?';
  mysqlConn.query(query,{
    id: id,
    nombre: nombre, 
    descripcion: descripcion, 
    categoria: categoria, 
    tipo: tipo
  }, (err, sql) => {
    if(err) {
      res.send(err);
    }
    res.send(sql);        
  });
};

documentosController.eliminarDocumento = (req, res) => {
  const id = req.params.id;
  var query = 'UPDATE `documentos` SET estado = "No Disponible" WHERE id = ' + id;

  mysqlConn.query(query, (err, sql) => {
    if(err) {
      res.send(err);
    }
    res.send(sql);        
  });
}

module.exports = documentosController;