const mysqlConn = require('../config/database');
const { mysql } = require('../config/database');
const solicitudesController = {};

solicitudesController.verDocumentos = (req, res) => {
  let query = 'SELECT id, DATE_FORMAT(fecha_in, "%d-%m-%Y") AS fecha_in, DATE_FORMAT(fecha_res, "%d-%m-%Y") AS fecha_res, estado, descripcion FROM solicitudes_doc;';
  mysqlConn.query(query, (err, sql) => {
    if(err) {
      res.json(err);
    }
    res.send(sql);
  });
};

solicitudesController.verEstrategias = (req, res) => {
    let query = '';
    mysqlConn.query(query, (err, sql) => {
      if(err) {
        res.json(err);
      }
      res.send(sql);
    });
};

module.exports = solicitudesController;