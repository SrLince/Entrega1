import '../css/planes.css';
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Planes = () => {

    const [planes, setPlanes] = useState([]);

    useEffect(() => {
        cargarPlanes();
    }, []);

    const cargarPlanes = async () => {
        const response = await Axios.get("http://localhost:3001/api/planes/verPlanes");
        setPlanes(response.data);
    };

    return(
        <div className="content mt-5 mb-5">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Ordenar por:
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Nombre plan</a></li>
                            <li><a className="dropdown-item" href="#">Fecha creacion</a></li>
                            <li><a className="dropdown-item" href="#">Descripción</a></li>
                            <li><a className="dropdown-item" href="#">Estrategia</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Filtrar por:
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Nombre plan</a></li>
                            <li><a className="dropdown-item" href="#">Fecha creacion</a></li>
                            <li><a className="dropdown-item" href="#">Descripción</a></li>
                            <li><a className="dropdown-item" href="#">Estrategia</a></li>
                            </ul>
                        </li>
                        </ul>
                        <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Buscar un Plan" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre Plan</th>
                    <th scope="col">Fecha de creación</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Estrategia</th>
                </tr>
                </thead>
                <tbody>
                    {planes.map((planes, index) => (
                        <tr key={index}>
                            <td>{planes.indice}</td>
                            <td>{planes.nombre_plan}</td>
                            <td>{planes.fecha_creacion}</td>
                            <td>{planes.descripcion}</td>                            
                            <td>{planes.estrategia}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className='d-flex'>
                <Link className="btn btn-primary" to={`/crearplan`} style={{marginLeft: 'auto', maxWidth: '800px'}} >Crear Plan</Link>
            </div>
        </div>
    );
};

export default Planes;
