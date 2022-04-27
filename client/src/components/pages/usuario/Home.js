import React, { useState, useEffect } from 'react';
import Card from '../../layout/Card';
import Axios from 'axios';

const Home = () => {
    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        cargarEventos();
    }, []);

    var items = [];

    const cargarEventos = async () => {
        const response = await Axios.get("http://localhost:3001/api/user/verEventos");
        response.data.map((evento) => {
            console.log(evento);
            items.push(
                <Card imgsrc={`${evento.codigo_actividad}.png`} nombre={evento.nombre_actividad} desc={evento.descripción} id_evento={evento.codigo_actividad} />
            );
        });
        setCards(items);
    };

    return (
        <div className="container">
            <div className="py-4">
                <div className='container-fluid d-flex justify-content-center'>
                    <div className='row'>
                        {
                            cards ?
                                cards :
                                cards
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;