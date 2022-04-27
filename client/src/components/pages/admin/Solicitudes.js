import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';

const Solicitudes = () => {

    const [solicitudes, setSolicitudes] = useState([]);

    useEffect(() => {
        cargarSolicitudes();
    }, []);

    const cargarSolicitudes = async () => {
        const response = await Axios.get("http://localhost:3001/api/admin/verSolicitudes");
        setSolicitudes(response.data.reverse());
    };

    const aceptarSolicitud = async id => {
        await Axios.post(`http://localhost:3001/api/admin/aceptarSolicitud/${id}`);
        cargarSolicitudes();
    };

    const rechazarSolicitud = async id => {
        await Axios.post(`http://localhost:3001/api/admin/rechazarSolicitud/${id}`);
        cargarSolicitudes();
    };

    return (
        <div className="container">
            <div className="py-4">
                <h1>Solicitudes</h1>
                <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID Postulante</th>
                        <th scope="col">RUT Postulante</th>
                        <th scope="col">Fecha Inscripción</th>
                        <th scope="col">Datos Extras</th>
                        <th scope="col">Observaciones</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {solicitudes.map((solicitud, index) => (
                        <tr key={index}>
                            <td>{solicitud.id_solicitud}</td>
                            <td>{solicitud.rut_postulante}</td>
                            <td>{solicitud.fecha_inscripcion}</td>
                            <td>{solicitud.datos_extra}</td>
                            <td>{solicitud.obs_medica}</td>
                            <td>
                                <Link className="btn btn-primary" onClick={() => aceptarSolicitud(solicitud.id_solicitud)}>Aceptar</Link>
                                <Link className="btn btn-danger" onClick={() => rechazarSolicitud(solicitud.id_solicitud)}>Rechazar</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default Solicitudes;