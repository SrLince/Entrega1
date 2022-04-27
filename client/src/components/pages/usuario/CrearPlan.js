import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const CrearPlan = () => {
    const [plan, setPlan] = useState({
        nombre_plan: "",
        descripcion: "",
        nombre_riesgo: "",
        estrategia: "",
        fecha_plan: ""
    });

    const { 
        nombre_plan,
        descripcion,
        nombre_riesgo,
        estrategia,
        fecha_plan

    } = plan;

    const onInputChange = e => {
        setPlan({...plan, [e.target.name]: e.target.value});
    };

    const onSubmit = async e => {
        e.preventDefault();
        //await Axios.post("http://localhost:3306/api/", usuario);
    };
    
    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Crear plan</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="nombre_plan">Nombre del plan</label>
                        <input type="text" className="form-control form-control-lg" 
                        placeholder="Ingrese Nombre Plan" name="nombre_plan" value={nombre_plan} onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descripcion">Descripción del plan</label>
                        <input type="text" className="form-control form-control-lg"
                        placeholder="Ingrese Descripcion del plan" name="descripcion" value={descripcion} onChange={e => onInputChange(e)} />
                    </div>       
                    <div className="form-group">
                        <label htmlFor="nombre_riesgo">Nombre del riego al que responde el plan</label>
                        <input type="text" className="form-control form-control-lg"
                        placeholder="Ingrese Nombre del Riesgo" name="nombre_riesgo" value={nombre_riesgo} onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="estrategia">Estrategia utilizada</label>
                        <input type="text" className="form-control form-control-lg"
                        placeholder="Ingrese la estrategia utilizada" name="estrategia" value={estrategia} onChange={e => onInputChange(e)} />
                    </div>                                
                    <div className="form-group">
                        <label htmlFor="fecha_plan">Fecha de la creacion del plan</label>
                        <input type="date" className="form-control form-control-lg"
                        placeholder="Ingrese la fecha de creación del plan" name="fecha_plan" defaultValue={fecha_plan} onChange={e => onInputChange(e)} />
                    </div>
                    <div className='mb-5 mt-5'>
                        <Link className="btn btn-outline-primary" to={`/planes`}>Volver</Link>
                        <button className="btn btn-primary btn-block" style={{marginLeft:'10px'}} >Crear Plan</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default CrearPlan;
