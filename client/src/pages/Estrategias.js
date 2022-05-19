import Axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Estrategias = () => {
    const [estrategias, setEstrategias] = useState([]);

    const cargarEstrategias = async () => {
        const response = await Axios.get("http://localhost:3001/api/estrategias/");
        setEstrategias(response.data);
    };

    useEffect(() => {
        cargarEstrategias();
    }, []);

    const renderCard = (card, index) => {
        return (
            <div className='col-md-4 mb-4' style={{width: "31%"}}>
                <div className='card text-center'>
                    <div className='card-body text-dark p-4'>
                        <h4 className='card-title'>{card.nombre}</h4>
                        <h6 className='card-title'>{card.tipo}</h6>
                        <p className='card-text text-secondary p-5'>
                            {`${card.condicion}`}
                        </p>
                        <Link className='btn dark-bg mb-2' to={`/estrategias/ver/${card.id}`}>Ver Detalles</Link>
                    </div>
                </div>
            </div>
        );
    };

    return(
        <div className="container mt-5">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid mb-4">
                    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                        <h1>Estrategias</h1>
                        <Link className="btn dark-bg" to={`/estrategias/crear`} >Crear Estrategia</Link>
                    </div>
                </div>
            </nav>
            <div className='p-4 mb-5' style={{backgroundColor: "#ddd"}}>
                <div className='d-flex justify-content-around m-2 pt-2 pb-2' style={{flexWrap: "wrap"}}>{estrategias.map((renderCard))}</div>
            </div>
        </div>
    );
};

export default Estrategias;
