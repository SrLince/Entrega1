import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const Admin = () => {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        cargarEventos();
    }, []);

    const cargarEventos = async () => {
        const response = await Axios.get("http://localhost:3001/api/admin/verEventos");
        setEventos(response.data.reverse());
    };

    const eliminarEvento = async id => {
        await Axios.delete(`http://localhost:3001/api/admin/eliminarEvento/${id}`);
        cargarEventos();
    };

    return (
        <div className="container">
            <div className="py-4">
                <h1>Eventos</h1>
                <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Nombre Evento</th>
                        <th scope="col">Tipo Evento</th>
                        <th scope="col">Cupos</th>
                        <th scope="col">Direccion</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Modalidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {eventos.map((evento, index) => (
                        <tr key={index}>
                            <td>{evento.nombre_actividad}</td>
                            <td>{evento.tipo}</td>
                            <td>{evento.cupos}</td>
                            <td>{evento.direccion}</td>
                            <td>{evento.estado_actividad}</td>
                            <td>{"Desde " + evento.fecha_inicio + " hasta " + evento.fecha_termino}</td>
                            <td>{evento.modalidad}</td>
                            <td>
                                <Link className="btn btn-primary" to={`/admin/verEvento/${evento.codigo_actividad}`}>Ver</Link>
                                <Link className="btn btn-outline-primary" to={`/admin/editarEvento/${evento.codigo_actividad}`}>Editar</Link>
                                <Link className="btn btn-danger" onClick={() => eliminarEvento(evento.codigo_actividad)}>Eliminar</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;