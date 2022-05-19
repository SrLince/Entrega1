import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const VerEstrategia = () => {
  const { id } = useParams();
  const [estrategia, setEstrategia] = useState({
    nombre: '',
    descripcion: '',
    categoria: '',
    tipo: '',
    fecha: ''
  });

  useEffect(() => {
    cargarEstrategia();
  });

  const cargarEstrategia = async () => {
    const response = await Axios.get(`http://localhost:3001/api/estrategias/${id}`);
    setEstrategia(response.data[0]);
    console.log(response.data[0]);
  };

  return (
    <div className="container mt-5" style={{minHeight: "100vh"}}>
      <h2>{estrategia.nombre}</h2>
      <hr></hr>
      <div className="container mt-4 d-flex flex-column ms-1" style={{minHeight: "100vh", maxWidth: "50%"}}>
        <table>
          <tr>
            <th>Categoría: </th>
            <td>{estrategia.metodo}</td>
          </tr>
          <tr>
            <th>Tipo: </th>
            <td>{estrategia.tipo}</td>
          </tr>
          <tr>
            <th>Fecha Última Actualización: </th>
            <td>{estrategia.fecha}</td>
          </tr>
          <tr>
            <th>Descripción: </th>
            <td>{estrategia.descripcion}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default VerEstrategia;