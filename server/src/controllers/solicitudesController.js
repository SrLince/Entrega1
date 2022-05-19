const mysqlConn = require('../config/database');
const { mysql } = require('../config/database');
const solicitudesController = {};

solicitudesController.verDocumentos = (req, res) => {
  let query = '';
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