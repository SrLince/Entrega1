import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const CancelarSolicitud = () => {
    const [solicitud, setSolicitud] = useState({
        rut: ""
    });

    const { 
        rut
    } = solicitud;

    const { id } = useParams();

    const onInputChange = e => {
        setSolicitud({...solicitud, [e.target.name]: e.target.value});
    };

    const onSubmit = async e => {
        e.preventDefault();
        console.log(solicitud);
        await Axios.post(`http://localhost:3001/api/user/eliminarSolicitud/${id}`, solicitud);
    };

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Desinscripción</h2>
                <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="rut">RUT</label>
                    <input type="text" className="form-control form-control-lg" 
                    placeholder="Ingrese su rut (con puntos y guión)" name="rut" value={solicitud.rut} onChange={e => onInputChange(e)} />
                </div>
                <button className="btn btn-primary btn-block">Desinscribirse</button>
                </form>
            </div>
        </div>
    );
};

export default CancelarSolicitud;