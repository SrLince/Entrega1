const mysqlConn = require('../config/database');
const { mysql } = require('../config/database');
const estrategiasController = {};

estrategiasController.verEstrategias = (req, res) => {
  let query = 'SELECT id, nombre, tipo, condicion FROM estrategias WHERE estado = "Disponible";';
  mysqlConn.query(query, (err, sql) => {
    if(err) {
      res.json(err);
    }
    res.send(sql);
  });
};

estrategiasController.verEstrategia = (req, res) => {
  const id = req.params.id;
  let query = 'SELECT id, nombre, descripcion, metodo, tipo, DATE_FORMAT(fecha, "%d-%m-%Y") AS fecha, condicion FROM estrategias WHERE id = ' + id + ' AND estado = "Disponible";';
  mysqlConn.query(query, (err, sql) => {
      if(err) {
          res.json(err);
      }
      res.send(sql);
  });
};

estrategiasController.crearEstrategias = (req, res) => {
  const {nombre, descripcion, metodo, tipo, condicion} = req.body;

  let query = 'INSERT INTO estrategias SET ?';
  mysqlConn.query(query,{
    nombre: nombre, 
    descripcion: descripcion, 
    metodo: metodo, 
    tipo: tipo, 
    condicion: condicion
  }, (err, sql) => {
    if (err) {
      res.json(err);
    }
    res.send(sql);
  });
};

module.exports = estrategiasController;