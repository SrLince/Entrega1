import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../assets/styles/index.css';

const Index = () => {
    const [ isLogged , setIsLogged ] = useState(false);

    useEffect(() => { 
        setIsLogged(localStorage.getItem('user') != undefined);
    }, [])

    return(
        <div>
            <div className="cover d-flex justify-content-center align-items-center flex-column">
                <h1>Plan de Respuesta para Riesgos</h1>
                <p>Una librería de planes para la mitigación de riesgos para tus proyectos</p>
            </div>
            <div className="container mt-8 mb-8">
                <div className="text-center">
                    {
                        isLogged ?
                            <Link id='btnEmpezar' className='btn dark-bg' to={'/menu'}><h2>Empezar</h2></Link>
                        :
                            <Link id='btnEmpezar' className='btn dark-bg' to={'/login'}><h2>Empezar</h2></Link>
                    }
                    
                    <p className='p-3'>A gestionar respuesta a los riesgos de tu proyecto</p>
                </div>
            </div>
        </div>
      );
};

export default Index;
