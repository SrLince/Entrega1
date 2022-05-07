import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Modal from 'bootstrap/js/dist/modal';
import { data } from '../layout/SelectOptions'

const CrearPlan = () => {
    const [selectedStrategy, setSelectedStrategy] = React.useState();
    const [selectedMethod, setSelectedMethod] = React.useState();
    const availableMethod = data.estrategias.find((c) => c.nombre === selectedStrategy);
    
    const [plan, setPlan] = useState({
        nombre: '',
        descripcion: '',
        riesgo: '',
        estrategia: '',
        metodo: '',
        fecha_creacion: ''
    });

    const { 
        nombre,
        descripcion,
        riesgo,
        estrategia,
        metodo,
        fecha_creacion
    } = plan;

    const onSelectChangeStrategy = e => {
        setSelectedStrategy(e.target.value);
        setPlan({...plan, [e.target.name]: e.target.value});
    };

    const onSelectChangeMethod = e => {
        setSelectedMethod(e.target.value);
        setPlan({...plan, [e.target.name]: e.target.value});
    };

    const onInputChange = e => {
        setPlan({...plan, [e.target.name]: e.target.value});
    };

    function checkForSpecialCharacters(s) {
        var format = /[`!@#$%^&*()_+\=\[\]{};':"\\|<>\/?~]/;
        return format.test(s);
    };

    const onSubmit = async e => {
        e.preventDefault();

        const badField = Object.values(plan).some(value => {
            if (value === null || value === undefined || value === '') {
              document.getElementById("modal-body").innerHTML = "Debe completar todos los campos para registrar el plan.";
                return true;
            }
            else if(checkForSpecialCharacters(value)) {
              document.getElementById("modal-body").innerHTML = "Los campos no pueden contener caracteres especiales.";
              return true;
            }
            return false;
        });

        if(!badField) {
            await Axios.post('http://localhost:3001/api/planes/crearPlanes', plan)
            .then(document.getElementById("modal-body").innerHTML = "El plan ha sido ingresado en el sistema.");
            document.getElementById("modal-button").onclick = function() { window.location.reload(); };
        }
        const myModal = new Modal(document.getElementById("modal"));
        myModal.show();
    };
    
    return ( 
      <>
      <div className='container mt-5 mb-5'>
          <div className='w-75 mx-auto shadow p-5'>
              <h2 className='text-center mb-4'>Ingresar Plan de Riesgo</h2>
              <form onSubmit={e => onSubmit(e)}>
                  <div className='form-group'>
                      <label htmlFor='nombre'>Nombre</label>
                      <input type='text' className='form-control form-control-lg' 
                      placeholder='Ingrese nombre del plan' name='nombre' value={nombre} onChange={e => onInputChange(e)} />
                  </div>
                  <div className='form-group'>
                      <label htmlFor='descripcion'>Descripción</label>
                      <input type='text' className='form-control form-control-lg'
                      placeholder='Ingrese una descripción para el plan' name='descripcion' value={descripcion} onChange={e => onInputChange(e)} />
                  </div>       
                  <div className='form-group'>
                      <label htmlFor='riesgo'>Riesgo</label>
                      <input type='text' className='form-control form-control-lg'
                      placeholder='Ingrese nombre del riesgo al que responde el plan' name='riesgo' value={riesgo} onChange={e => onInputChange(e)} />
                  </div>
                  <div className='form-group'>
                      <label htmlFor='estrategia'>Tipo de estrategia</label>
                      <select
                        type='text'
                        className='form-control form-control-lg'
                        name='estrategia'
                        value={selectedStrategy}
                        onChange={(e) => onSelectChangeStrategy(e)}
                      >
                        <option selected disabled value={''}>Seleccione tipo de estrategia</option>
                        {data.estrategias.map((value, key) => {
                          return (
                            <option value={value.nombre} key={key}>
                              {value.nombre}
                            </option>
                          );
                        })}
                      </select>
                  </div> 
                  <div className='form-group'>
                      <label htmlFor='metodo'>Método de respuesta</label>
                      <select
                        type='text'
                        className='form-control form-control-lg'
                        name='metodo'
                        value={selectedMethod}
                        onChange={(e) => onSelectChangeMethod(e)}
                      >
                        <option selected disabled value={''}>Seleccione metodo de respuesta</option>
                        {availableMethod?.metodo.map((e, key) => {
                          return (
                            <option value={e.nombre} key={key}>
                              {e.nombre}
                            </option>
                          );
                        })}
                      </select>
                  </div>                                
                  <div className='form-group'>
                      <label htmlFor='fecha_creacion'>Fecha de creación</label>
                      <input type='date' className='form-control form-control-lg'
                      name='fecha_creacion' defaultValue={fecha_creacion} onChange={e => onInputChange(e)} />
                  </div>
                  <div className='mb-5 mt-5 d-flex justify-content-end'>
                      <Link className='btn btn-outline-primary' to={`/planes`}>Volver</Link>
                      <button className='btn btn-primary btn-block' style={{marginLeft:'10px'}} >Crear Plan</button>
                  </div>
              </form>
          </div>
      </div>
    
      <div class="modal fade" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="modalLabel">Mensaje</h5>
                  </div>
                  <div id="modal-body" class="modal-body"></div>
                  <div class="modal-footer">
                      <button id="modal-button" type="button" class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                  </div>
              </div>
          </div>
      </div>
      </>
    );
};

export default CrearPlan;