import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const CrearPlan = () => {
    const [plan, setPlan] = useState({
        nombre_plan: '',
        descripcion: '',
        riesgo: '',
        estrategia: '',
        fecha_creacion: ''
    });

    const { 
        nombre_plan,
        descripcion,
        riesgo,
        estrategia,
        fecha_creacion
    } = plan;

    const onInputChange = e => {
        setPlan({...plan, [e.target.name]: e.target.value});
    };

    const onSubmit = async e => {
        e.preventDefault();
        const emptyField = Object.values(plan).some(value => {
            if (value === null || value === undefined || value === '') {
                return true;
            }
            return false;
        });
        if(!emptyField) {
            //await Axios.post('http://localhost:3001/api/planes/crearPlanes', plan);
        } else {
            console.log("Debe llenar todos los campos para poder ingresar el plan");
        }
    };
    
    return(
        <div className='container mt-5 mb-5'>
            <div className='w-75 mx-auto shadow p-5'>
                <h2 className='text-center mb-4'>Ingresar Plan de Riesgo</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className='form-group'>
                        <label htmlFor='nombre_plan'>Nombre del plan</label>
                        <input type='text' className='form-control form-control-lg' 
                        placeholder='Ingrese Nombre Plan' name='nombre_plan' value={nombre_plan} onChange={e => onInputChange(e)} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='descripcion'>Descripción del plan</label>
                        <input type='text' className='form-control form-control-lg'
                        placeholder='Ingrese Descripcion del plan' name='descripcion' value={descripcion} onChange={e => onInputChange(e)} />
                    </div>       
                    <div className='form-group'>
                        <label htmlFor='riesgo'>Nombre del riego al que responde el plan</label>
                        <input type='text' className='form-control form-control-lg'
                        placeholder='Ingrese Nombre del Riesgo' name='riesgo' value={riesgo} onChange={e => onInputChange(e)} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='tipo_riesgo'>Tipo de riesgo</label>
                        <select type='text' className='form-control form-control-lg'
                        name='tipo_riesgo' value={''}>
                            <option selected disabled value={''}>Seleccione el tipo de riesgo</option>
                            <option></option>
                            <option></option>
                        </select>
                    </div> 
                    <div className='form-group'>
                        <label htmlFor='estrategia'>Estrategia a utilizar</label>
                        <select type='text' className='form-control form-control-lg'
                        name='estrategia' value={estrategia} onChange={e => onInputChange(e)}>
                            <option selected disabled value={''}>Seleccione la estrategia a utilizar</option>
                            <option></option>
                            <option></option>
                        </select>
                    </div>                                
                    <div className='form-group'>
                        <label htmlFor='fecha_plan'>Fecha de la creacion del plan</label>
                        <input type='date' className='form-control form-control-lg'
                        placeholder='Ingrese la fecha de creación del plan' name='fecha_creacion' defaultValue={fecha_creacion} onChange={e => onInputChange(e)} />
                    </div>
                    <div className='mb-5 mt-5'>
                        <Link className='btn btn-outline-primary' to={`/planes`}>Volver</Link>
                        <button className='btn btn-primary btn-block' style={{marginLeft:'10px'}} >Crear Plan</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CrearPlan;
