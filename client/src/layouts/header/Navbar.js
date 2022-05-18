import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [ isLogged , setIsLogged ] = useState(false);
    const [ isJP , setIsJP ] = useState(false);

    useEffect(() => { 
        setIsLogged(localStorage.getItem('user') != undefined);
        setIsJP(localStorage.getItem('user') == 'jp');
    }, [])

    return (
        <nav className="navbar navbar-expand-lg navbar-dark dark-bg">
            <div className="container d-flex">
                <div className="d-flex">
                    <a className="navbar-brand" href="/">LOGO</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/">Inicio</NavLink>
                            </li>
                            {
                                isLogged ?
                                <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" exact to="/documentos">Documentos</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" exact to="/estrategias">Estrategias</NavLink>
                                    </li>
                                </> : 
                                <>
                                </>
                            }
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                {
                                    !isLogged ? 
                                        <NavLink className="nav-link" exact to="/login">Ingresar</NavLink> 
                                    : isJP ? 
                                        <NavLink className="nav-link" exact to="/menu">Jefe de Proyecto</NavLink> 
                                    :
                                    <NavLink className="nav-link" exact to="/menu">Miembro del Proyecto</NavLink>
                                }   
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;