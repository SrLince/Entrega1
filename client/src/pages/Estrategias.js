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
            <div className='card m-2' style={{width: "17rem", flex: "0 1 23.5%"}} key={card.id}>
                <div class="card-body">
                    <h5 class="card-title">{card.estrategia}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{card.metodo}</h6>
                    <p class="card-text">{card.descripcion}</p>
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
                        <Link className="btn btn-primary" to={`/crearestrategia`} >Crear Estrategia</Link>
                    </div>
                </div>
            </nav>
            <div className='' style={{backgroundColor: "#ddd"}}>
                <div className='d-flex m-2 pt-2 pb-2' style={{flexWrap: "wrap"}}>{estrategias.map((renderCard))}</div>
            </div>
        </div>
    );
};

export default Estrategias;
