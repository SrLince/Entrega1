import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'bootstrap/js/dist/modal';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { data } from '../services/constants/SelectOptions';

const EditarDocumento = () => {
    const { id } = useParams();
    const [selectedCategory, setSelectedCategory] = React.useState();
    const [selectedType, setSelectedType] = React.useState();
    const availableType = data.documentos.find((c) => c.categoria === selectedCategory);
    var modalMessage = '';
    
    const [documento, setDocumento] = useState({
      id: id,
      nombre: '',
      descripcion: '',
      categoria: '',
      tipo: '',
      archivo: ''
    });

    const { 
      nombre,
      descripcion,
      categoria,
      tipo,
      archivo
    } = documento;

    useEffect(() => {
        cargarDocumento()
    }, []);

    const cargarDocumento = async () => {
        const result = await Axios.get(`http://localhost:3001/api/documentos/${id}`, documento);
        setSelectedCategory(result.data[0].categoria);
        setDocumento(result.data[0]);
    };

    const onSelectChangeCategory = e => {
      setSelectedCategory(e.target.value);
      setDocumento({...documento, [e.target.name]: e.target.value});
    };

    const onSelectChangeType = e => {
      setSelectedType(e.target.value);
      setDocumento({...documento, [e.target.name]: e.target.value});
    };

    const onInputChange = e => {
      setDocumento({...documento, [e.target.name]: e.target.value});
    };

    const onFileChange = e => {
      setDocumento({...documento, [e.target.name]: e.target.files[0]});
    };

    /*
    function specialCharacters(s) {
      var format = /[`!@#$%^&*()_+\=\[\]{};':"\\|<>\/?~]/;
      return format.test(s);
    };
    */

    const onSubmit = async e => {
      e.preventDefault();

      const emptyField = Object.values(documento).some(value => {
        if (value === null || value === undefined || value === '') {
          modalMessage = 'No puede dejar campos vacios al editar el documento.';
          return true;
        }
        return false;
      });

      if(!emptyField) {
          console.log(documento);
        await Axios.post(`http://localhost:3001/api/documentos/editar/${id}`, documento);
        modalMessage = "El documento ha sido modificado correctamente en el sistema.";
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
              <h2 className='text-center mb-4'>Editar Documento</h2>
              <form onSubmit={e => onSubmit(e)}>
                  <div className='form-group'>
                      <label htmlFor='nombre'>Nombre</label>
                      <input type='text' className='form-control form-control-lg' 
                      placeholder='Ingrese nombre del documento' name='nombre' value={nombre} onChange={e => onInputChange(e)} />
                  </div>
                  <div className='form-group'>
                      <label htmlFor='descripcion'>Descripción</label>
                      <textarea type='text' className='form-control form-control-lg'
                      placeholder='Ingrese una descripción para el documento' name='descripcion' value={descripcion} onChange={e => onInputChange(e)} />
                  </div>
                  <div className='form-group'>
                      <label htmlFor='categoria'>Categoría del documento</label>
                      <select
                        type='text'
                        className='form-control form-control-lg'
                        name='categoria'
                        value={selectedCategory}
                        onChange={(e) => onSelectChangeCategory(e)}
                      >
                        {data.documentos.map((value, key) => {
                          return (
                            <option value={value.categoria} key={key}>
                              {value.categoria}
                            </option>
                          );
                        })}
                      </select>
                  </div> 
                  <div className='form-group'>
                      <label htmlFor='tipo'>Tipo de documento</label>
                      <select
                        type='text'
                        className='form-control form-control-lg'
                        name='tipo'
                        value={selectedType}
                        onChange={(e) => onSelectChangeType(e)}
                      >
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
                      <label htmlFor='Documento'>Documento del proyecto</label>
                      <input type='file' className='form-control form-control-lg'
                      placeholder='Ingrese documento del proyecto' name='archivo' onChange={e => onFileChange(e)} />
                  </div> 
                  <div className='mb-5 mt-5 d-flex justify-content-end'>
                      <Link className='btn btn-outline-primary' to={`/documentos`}>Volver</Link>
                      <button className='btn dark-bg btn-block ms-5'>Editar documento</button>
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

export default EditarDocumento;