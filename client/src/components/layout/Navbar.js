import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
            <a className="navbar-brand" href="/">LOGO</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/admin/">Eventos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/admin/usuarios">Usuarios</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/admin/solicitudes">Solicitudes</NavLink>
                    </li>
                </ul>
            </div>
            <Link className="btn btn-outline-light" to="/admin/crearEvento">Crear evento</Link>
            <Link className="btn btn-outline-light" to="/admin/crearUsuario">Crear usuario</Link>
        </div>
        </nav>
    );
};

export default Navbar;