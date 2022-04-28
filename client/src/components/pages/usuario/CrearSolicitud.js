import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const CrearSolicitud = () => {
    const [solicitud, setSolicitud] = useState({
        rut: "",
        nombres: "",
        apellidos: "",
        telefono: "",
        fecha_nacimiento: "",
        prevision: ""
    });

    const { 
        rut,
        nombres,
        apellidos,
        telefono,
        fecha_nacimiento,
        prevision
    } = solicitud;

    const { id } = useParams();

    const onInputChange = e => {
        setSolicitud({...solicitud, [e.target.name]: e.target.value});
    };

    const onSubmit = async e => {
        e.preventDefault();
        await Axios.post(`http://localhost:3001/api/user/crearSolicitud/${id}`, solicitud);
    };

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Inscripción</h2>
                <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="rut">RUT</label>
                    <input type="text" className="form-control form-control-lg" 
                    placeholder="Ingrese su rut (con puntos y guión)" name="rut" value={solicitud.rut} onChange={e => onInputChange(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="nombres">Nombres</label>
                    <input type="text" className="form-control form-control-lg"
                    placeholder="Ingrese sus nombres" name="nombres" value={solicitud.nombres} onChange={e => onInputChange(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="apellidos">Apellidos</label>
                    <input type="text" className="form-control form-control-lg"
                    placeholder="Ingrese sus apellidos" name="apellidos" value={solicitud.apellidos} onChange={e => onInputChange(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="telefono">Teléfono</label>
                    <input type="tel" className="form-control form-control-lg"
                    placeholder="Ingrese su teléfono" name="telefono" value={solicitud.telefono} onChange={e => onInputChange(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="fecha_nacimiento">Fecha de Nacimiento</label>
                    <input type="date" className="form-control form-control-lg"
                    placeholder="Ingrese fecha de nacimiento" name="fecha_nacimiento" value={solicitud.fecha_nacimiento} onChange={e => onInputChange(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="prevision">Previsión Médica</label>
                    <select className="form-control form-control-lg" name="prevision" value={solicitud.prevision} onChange={e => onInputChange(e)}>
                        <option disabled selected value="">Seleccione el tipo de previsión</option>
                        <option value="ISAPRE">ISAPRE</option>
                        <option value="FONASA">FONASA</option>
                    </select>
                </div>
                <button className="btn btn-primary btn-block">Inscribirse</button>
                </form>
            </div>
        </div>
    );
};

export default CrearSolicitud;