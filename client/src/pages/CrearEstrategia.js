import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Modal from 'bootstrap/js/dist/modal';
import { data } from '../services/constants/SelectOptions';

const CrearEstrategia = () => {
    const [selectedMethod, setSelectedMethod] = React.useState();
    const [selectedType, setSelectedType] = React.useState();
    const availableType = data.estrategias.find((c) => c.metodo === selectedMethod);
    var modalMessage = '';
    
    const [estrategia, setEstrategia] = useState({
        nombre: '',
        descripcion: '',
        metodo: '',
        tipo: '',
        condicion: ''
    });

    const { 
        nombre,
        descripcion,
        metodo,
        tipo,
        condicion
    } = estrategia;

    const onSelectChangeMethod = e => {
        setSelectedMethod(e.target.value);
        setEstrategia({...estrategia, [e.target.name]: e.target.value});
    };

    const onSelectChangeType = e => {
        setSelectedType(e.target.value);
        setEstrategia({...estrategia, [e.target.name]: e.target.value});
    };

    const onInputChange = e => {
        setEstrategia({...estrategia, [e.target.name]: e.target.value});
    };

    /*
    function checkForSpecialCharacters(s) {
        var format = /[`!@#$%^&*()_+\=\[\]{};':"\\|<>\/?~]/;
        return format.test(s);
    };
    */

    const onSubmit = async e => {
        e.preventDefault();

        const emptyField = Object.values(estrategia).some(value => {
            if (value === null || value === undefined || value === '') {
              modalMessage = "Debe completar todos los campos para registrar la estrategia.";
                return true;
            }
            return false;
        });

        if(!emptyField) {
            await Axios.post('http://localhost:3001/api/estrategias/crear', estrategia)
            modalMessage = "La estrategia ha sido ingresada correctamente en el sistema.";
            document.getElementById("modal-button").onclick = function() { window.location.reload(); };
        }

        document.getElementById("modal-body").innerHTML = modalMessage;
        const myModal = new Modal(document.getElementById("modal"));
        myModal.show();
    };
    
    return ( 
      <>
      <div className='container mt-5 mb-5'>
          <div className='w-75 mx-auto shadow p-5'>
              <h2 className='text-center mb-4'>Crear Estrategia</h2>
              <form onSubmit={e => onSubmit(e)}>
                  <div className='form-group'>
                      <label htmlFor='nombre'>Nombre</label>
                      <input type='text' className='form-control form-control-lg' 
                      placeholder='Ingrese nombre de la estrategia' name='nombre' value={nombre} onChange={e => onInputChange(e)} />
                  </div>
                  <div className='form-group'>
                      <label htmlFor='metodo'>Método de estrategia</label>
                      <select
                        type='text'
                        className='form-control form-control-lg'
                        name='metodo'
                        value={selectedMethod}
                        onChange={(e) => onSelectChangeMethod(e)}
                      >
                        <option selected disabled value={''}>Seleccione método de estrategia</option>
                        {data.estrategias.map((value, key) => {
                          return (
                            <option value={value.metodo} key={key}>
                              {value.metodo}
                            </option>
                          );
                        })}
                      </select>
                  </div> 
                  <div className='form-group'>
                      <label htmlFor='tipo'>Tipo de estrategia</label>
                      <select
                        type='text'
                        className='form-control form-control-lg'
                        name='tipo'
                        value={selectedType}
                        onChange={(e) => onSelectChangeType(e)}
                      >
                        <option selected disabled value={''}>Seleccione tipo de estrategia</option>
                        {availableType?.tipos.map((e, key) => {
                          return (
                            <option value={e.tipo} key={key}>
                              {e.tipo}
                            </option>
                          );
                        })}
                      </select>
                  </div>                                
                  <div className='form-group'>
                      <label htmlFor='condiciones'>Condiciones de activación</label>
                      <textarea type='text' className='form-control form-control-lg'
                      placeholder='Ingrese condiciones de activación' name='condiciones' value={condicion} onChange={e => onInputChange(e)} />
                  </div>
                  <div className='form-group'>
                      <label htmlFor='descripcion'>Descripción</label>
                      <textarea type='text' className='form-control form-control-lg'
                      placeholder='Ingrese una descripción para la estrategia' name='descripcion' value={descripcion} onChange={e => onInputChange(e)} />
                  </div> 
                  <div className='mb-5 mt-5 d-flex justify-content-end'>
                      <Link className='btn btn-outline-primary' to={`/estrategias`}>Volver</Link>
                      <button className='btn dark-bg btn-block ms-5'>Crear Estrategia</button>
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
                      <button id="modal-button" type="button" class="btn dark-bg" data-bs-dismiss="modal">Cerrar</button>
                  </div>
              </div>
          </div>
      </div>
      </>
    );
};

export default CrearEstrategia;