import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

const EditarUsuario = () => {
    const { id } = useParams();
    const [usuario, setUsuario] = useState({
        rut:"",
        nombres:"",
        apellidos:"",
        fecha_nacimiento:"",
        numero_contacto:"",
        correo:"",
        prevision:""

       
    });

    const {
        rut,
        nombres,
        apellidos,
        fecha_nacimiento,
        numero_contacto,
        correo,
        prevision
           
    } = usuario;

    const onInputChange = e => {
        setUsuario({...usuario, [e.target.name]: e.target.value});
    };

    useEffect(() => {
        cargarUsuario()
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        console.log(usuario);
        await Axios.post("http://localhost:3001/api/admin/modificarUsuario", usuario);

    };

    const cargarUsuario = async () => {
        const result = await Axios.get(`http://localhost:3001/api/admin/verModUsuario/${id}`, usuario);
        setUsuario(result.data[0]);
    };

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Editar Usuario</h2>                
                <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="nombres">Nombres</label>
                    <input type="text" className="form-control form-control-lg" 
                    placeholder="Ingrese Nombres" name="nombres" value={nombres} onChange={e => onInputChange(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="apellidos">Apellidos</label>
                    <input type="text" className="form-control form-control-lg"
                    placeholder="Ingrese Apellidos" name="apellidos" value={apellidos} onChange={e => onInputChange(e)} />
                </div>       
                <div className="form-group">
                    <label htmlFor="rut">Rut</label>
                    <input type="text" readOnly className="form-control form-control-lg"
                    placeholder="Ingrese Rut" name="rut" value={rut} onChange={e => onInputChange(e)} />
                </div>                
                <div className="form-group">
                    <label htmlFor="fecha_nacimiento">Fecha de nacimiento</label>
                    <input type="date" className="form-control form-control-lg"
                    placeholder="Ingrese la fecha de nacimiento" name="fecha_nacimiento" defaultValue={fecha_nacimiento} onChange={e => onInputChange(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="numero_contacto">Numero de contacto</label>
                    <input type="text" className="form-control form-control-lg"
                    placeholder="Ingrese numero de contacto" name="numero_contacto" value={numero_contacto} onChange={e => onInputChange(e)} />
                </div>                
                <div className="form-group">
                   <label htmlFor="correo">Correo</label>
                    <input type="text" className="form-control form-control-lg"
                    placeholder="Ingrese correo" name="correo" value={correo} onChange={e => onInputChange(e)} />
                </div>
                <div className="form-group">
                   <label htmlFor="prevision">Previsión</label>
                    <input type="text" className="form-control form-control-lg"
                    placeholder="Ingrese prevision" name="prevision" value={prevision} onChange={e => onInputChange(e)} />
                </div>
                    <button className="btn btn-warning btn-block">Editar Usuario</button>
                </form>
            </div>
        </div>
    );
};

export default EditarUsuario;