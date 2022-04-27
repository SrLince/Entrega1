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
    }, []);

    const cargarEvento = async () => {
        const result = await Axios.get(`http://localhost:3001/api/admin/verEvento/${id}`, evento);
        setEvento(result.data[0]);
    };

    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/admin/">Volver</Link>
            <h1 className="display-4">{evento.nombre_actividad}</h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">ID Evento: {evento.codigo_actividad}</li>
                <li className="list-group-item">Rut Inscripción: {evento.rut_responsable}</li>
                <li className="list-group-item">Tipo: {evento.tipo}</li>
                <li className="list-group-item">Cupos: {evento.cupos}</li>
                <li className="list-group-item">Dirección: {evento.direccion}</li>
                <li className="list-group-item">Nombre del Evento: {evento.nombre_actividad}</li>
                <li className="list-group-item">Estado: {evento.estado_actividad}</li>
                <li className="list-group-item">Descripción: {evento.descripción}</li>
                <li className="list-group-item">Fecha Inicio: {evento.fecha_inicio}</li>
                <li className="list-group-item">Fecha Término: {evento.fecha_termino}</li>
                <li className="list-group-item">Modalidad: {evento.modalidad}</li>
                <li className="list-group-item">Requisitos: {evento.requisitos}</li>
                <li className="list-group-item">Area: {evento.area}</li>
            </ul>
        </div>
    );
};

export default VerEvento;