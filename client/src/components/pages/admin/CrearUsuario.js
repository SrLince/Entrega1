import React, { useState } from 'react';
import Axios from 'axios';

const CrearUsuario = () => {
    const [usuario, setUsuario] = useState({
        nombres: "",
        apellidos: "",
        rut: "",
        fecha_nacimiento: "",
        numero_contacto: "",
        correo: "",
        prevision: "",
        contrasena: ""
    });

    const { 
        nombres,
        apellidos,
        rut,
        fecha_nacimiento,
        numero_contacto,
        correo,
        prevision,
        contrasena

    } = usuario;

    const onInputChange = e => {
        setUsuario({...usuario, [e.target.name]: e.target.value});
    };

    const onSubmit = async e => {
        e.preventDefault();
        await Axios.post("http://localhost:3001/api/admin/crearUsuario", usuario);
    };

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Crear Usuario</h2>
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
                    <input type="text" className="form-control form-control-lg"
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
                <div className="form-group">
                   <label htmlFor="contrasena">Contraseña</label>
                    <input type="password" className="form-control form-control-lg"
                    placeholder="Ingrese Contraseña" name="contrasena" value={contrasena} onChange={e => onInputChange(e)} />
                </div>
                    <button className="btn btn-primary btn-block">Crear Usuario</button>
                </form>
            </div>
        </div>
    );
};

export default CrearUsuario;