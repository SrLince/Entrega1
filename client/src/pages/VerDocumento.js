import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const VerDocumento = () => {
  const { id } = useParams();
  const [documento, setDocumento] = useState({
    nombre: '',
    descripcion: '',
    categoria: '',
    tipo: '',
    fecha: ''
  });

  useEffect(() => {
    cargarDocumento();
  });

  const cargarDocumento = async () => {
    const response = await Axios.get(`http://localhost:3001/api/documentos/${id}`);
    setDocumento(response.data[0]);
  };

  return (
    <div className="container mt-5" style={{minHeight: "100vh"}}>
      <h2>{documento.nombre}</h2>
      <hr></hr>
      <div className="container mt-4 d-flex flex-column ms-1" style={{minHeight: "100vh", maxWidth: "50%"}}>
        <table>
          <tr>
            <th>Categoría: </th>
            <td>{documento.categoria}</td>
          </tr>
          <tr>
            <th>Tipo: </th>
            <td>{documento.tipo}</td>
          </tr>
          <tr>
            <th>Fecha Última Actualización: </th>
            <td>{documento.fecha}</td>
          </tr>
          <tr>
            <th>Descripción: </th>
            <td>{documento.descripcion}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default VerDocumento;