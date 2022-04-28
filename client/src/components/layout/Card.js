import React from 'react';
import './card-style.css';
import { Link } from 'react-router-dom';

const Card = props => {
    return (
        <div className='col-md-4 mb-4'>
            <div className='card text-center'>
                <div className='overflow'>
                    <img src={props.imgsrc} alt="" className='card-img-top' />
                </div>
                <div className='card-body text-dark'>
                    <h4 className='card-title'>{props.nombre}</h4>
                    <p className='card-text text-secondary'>
                        {`${props.desc}`}
                    </p>
                    <Link className='btn btn-outline-success' to={`/verEvento/${props.id_evento}`}>Ver Detalles</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;