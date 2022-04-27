import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Usuarios = () => {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        cargarUsuarios();
    }, []);

    const cargarUsuarios = async () => {
        const response = await Axios.get("http://localhost:3001/api/admin/verUsuarios");
        setUsuarios(response.data);
    };
    

    return (
        <div className="container">
            <div className="py-4">
                <h1>Usuarios</h1>
                <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Rut</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>                                                
                        <th scope="col">N° Contacto</th>
                        <th scope="col">Correo</th>                        
                        <th scope="col">Estado</th>                        
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario, index) => (
                        <tr key={index}>
                            <td>{usuario.rut}</td>
                            <td>{usuario.nombres}</td>
                            <td>{usuario.apellidos}</td>                            
                            <td>{usuario.numero_contacto}</td>
                            <td>{usuario.correo}</td>
                            <td>{usuario.estado}</td>                           
                            <td>
                                <Link className="btn btn-primary" to={`/admin/verUsuario/${usuario.rut}`}>Ver</Link>
                                <Link className="btn btn-outline-primary" to={`/admin/editarUsuario/${usuario.rut}`}>Editar</Link>                                
                            </td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default Usuarios;