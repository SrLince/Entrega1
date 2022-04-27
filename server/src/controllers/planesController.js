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

module.exports = planesController;