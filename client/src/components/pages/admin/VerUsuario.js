import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';

const VerUsuario = () => {
    const [usuario, setUsuario] = useState({

    });

    const { id } = useParams();

    useEffect(() => {
        cargarUsuario();
    },[]);

    const cargarUsuario = async () => {
        const result = await Axios.get(`http://localhost:3001/api/admin/verUsuario/${id}`, usuario);
        setUsuario(result.data[0]);
    };

    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/admin/">Volver</Link>
            <h1 className="display-4">{usuario.nombres} {usuario.apellidos}</h1>
            <hr />
            <ul className="list-group w-50">                
                <li className="list-group-item">Rut: {usuario.rut}</li>                
                <li className="list-group-item">Fecha de nacimiento: {usuario.fecha_nacimiento}</li>
                <li className="list-group-item">Numero de Contacto: {usuario.numero_contacto}</li>
                <li className="list-group-item">Correo: {usuario.correo}</li>
                <li className="list-group-item">Previsión: {usuario.prevision}</li>
                <li className="list-group-item">Estado: {usuario.estado}</li>
            </ul>
        </div>
    );
};

export default VerUsuario;