const mysqlConn = require('../config/database');
const { mysql } = require('../config/database');
const userController = {};

userController.verEventos = (req, res) => {
    let query = 'SELECT codigo_actividad, nombre_actividad, tipo, cupos, direccion, estado_actividad, DATE_FORMAT(fecha_inicio, "%d-%m-%Y") AS fecha_inicio, DATE_FORMAT(fecha_termino, "%d-%m-%Y") AS fecha_termino, modalidad, descripción FROM actividades;';
    mysqlConn.query(query, (err, sql) => {
        if(err) {
            res.json(err);
        }
        res.send(sql);
    });
};

userController.verEvento = (req, res) => {
    const id = req.params.id;

    let query = 'SELECT *, DATE_FORMAT(fecha_inicio, "%d-%m-%Y") AS fecha_inicio, DATE_FORMAT(fecha_termino, "%d-%m-%Y") AS fecha_termino FROM actividades WHERE codigo_actividad = ' + id;
    mysqlConn.query(query, (err, sql) => {
        if(err) {
            res.json(err);
        }
        res.send(sql);
    });
};

userController.crearSolicitud = (req, res) => {
    const {rut,nombres,prevision,apellidos,telefono,fecha_nacimiento} = req.body;
    const id = req.params.id;
    let query1 = 'SELECT * FROM persona WHERE rut = ?'; 
    let query2 = 'INSERT into solicitud_deportiva (rut_postulante,codigo_actividad,fecha_inscripcion,datos_extra,obs_medica,estado) VALUES (?,?,CURDATE(),"NONE","NONE","pendiente")';
    
    mysqlConn.query(query1,[rut], (err, sql) => {
        if(err) {
            res.json(err);            
        }else{
            if(!sql[0]){
                mysqlConn.query('INSERT into persona SET?',{
                    rut: rut,
                    nombres: nombres,
                    apellidos: apellidos,
                    numero_contacto: telefono,
                    fecha_nacimiento: fecha_nacimiento,
                    prevision: prevision
                }, (err, sql1) => {
                    if(err) {
                        res.json(err);            
                    }else{                        
                        mysqlConn.query(query2,[
                            rut ,
                            id 
                        ], (err, sql2) => {
                            if(err) {
                                res.json(err);
                                console.log(err);          
                            }else{
                                res.send(sql2); 
                            }
                            
                        });
                    }
                    
                });
            }else{
                mysqlConn.query(query2,[rut,id], (err, sql2) => {
                    if(err) {
                        res.json(err); 
                        console.log(err);           
                    }else{
                        res.send(sql2); 
                    }
                    
                });
               
            }
            
        }
        
    });
};

/*
mysqlConn.query(query1,[rut], (err, sql) => {
    if(err) {
        res.json(err);            
    }else{
        
    }
    
}); */


userController.eliminarSolicitud = (req, res) => {
    const id = req.params.id;
    const {rut} = req.body;
    let query = "DELETE FROM solicitud_deportiva WHERE codigo_actividad = ? and rut_postulante = ?";   
    mysqlConn.query(query,[id,rut], (err, sql) => {
        if(err) {
            console.log(err);
            res.json(err);
        }else{
            
            res.send(sql);
        }        
    });
};

module.exports = userController;