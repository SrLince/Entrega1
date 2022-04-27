import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';

const VerEvento = () => {
    const [evento, setEvento] = useState({
        codigo_actividad: "",
        rut_responsable: "",
        tipo: "",
        cupos: "",
        direccion: "",
        nombre_actividad: "",
        estado_actividad: "",
        descripción: "",
        fecha_inicio: "",
        fecha_termino: "",
        modalidad: "",
        requisitos: "",
        area: ""
    });

    const { id } = useParams();

    useEffect(() => {
        cargarEvento();
    });

    const cargarEvento = async () => {
        const result = await Axios.get(`http://localhost:3001/api/user/verEvento/${id}`, evento);
        setEvento(result.data[0]);
    };

    return (
        <div className="container py-4">
            <h1 className="display-4">{evento.nombre_actividad}</h1>
            <img src={`../${id}.png`} alt="" />
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">Area: {evento.area}</li>
                <li className="list-group-item">Tipo: {evento.tipo}</li>
                <li className="list-group-item">Cupos: {evento.cupos}</li>
                <li className="list-group-item">Dirección: {evento.direccion}</li>
                <li className="list-group-item">Estado: {evento.estado_actividad}</li>
                <li className="list-group-item">Descripción: {evento.descripción}</li>
                <li className="list-group-item">Fecha Inicio: {evento.fecha_inicio}</li>
                <li className="list-group-item">Fecha Término: {evento.fecha_termino}</li>
                <li className="list-group-item">Modalidad: {evento.modalidad}</li>
                <li className="list-group-item">Requisitos: {evento.requisitos}</li>
            </ul>
            <Link className="btn btn-primary" to={`/crearSolicitud/${evento.codigo_actividad}`} >Inscribirse</Link>
            <Link className="btn btn-primary" to={`/cancelarSolicitud/${evento.codigo_actividad}`} >Desinscribirse</Link>
            <Link className="btn btn-primary" to="/">Volver</Link>
        </div>
    );
};

export default VerEvento;
