import './planes.css';
import React from "react";

const Planes = () => {
    return(
        <div className="content mt-5 mb-5">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Filtrar por:
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider"></hr></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Ordenar por:
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider"></hr> </li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
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
                <tr>
                    <th scope="row">1</th>
                    <td>Plan1</td>
                    <td>10-10-2020</td>
                    <td>Lorem ipsum dolor sit.</td>
                    <td>Estrategia1</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Plan2</td>
                    <td>10-10-2020</td>
                    <td>Lorem ipsum dolor sit.</td>
                    <td>Estrategia2</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Plan3</td>
                    <td>10-10-2020</td>
                    <td>Lorem ipsum dolor sit.</td>
                    <td>Estrategia3</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>Plan4</td>
                    <td>10-10-2020</td>
                    <td>Lorem ipsum dolor sit.</td>
                    <td>Estrategia4</td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>Plan5</td>
                    <td>10-10-2020</td>
                    <td>Lorem ipsum dolor sit.</td>
                    <td>Estrategia5</td>
                </tr>
                <tr>
                    <th scope="row">6</th>
                    <td>Plan6</td>
                    <td>10-10-2020</td>
                    <td>Lorem ipsum dolor sit.</td>
                    <td>Estrategia6</td>
                </tr>
                <tr>
                    <th scope="row">7</th>
                    <td>Plan7</td>
                    <td>10-10-2020</td>
                    <td>Lorem ipsum dolor sit.</td>
                    <td>Estrategia7</td>
                </tr>
                <tr>
                    <th scope="row">8</th>
                    <td>Plan8</td>
                    <td>10-10-2020</td>
                    <td>Lorem ipsum dolor sit.</td>
                    <td>Estrategia8</td>
                </tr>
                <tr>
                    <th scope="row">9</th>
                    <td>Plan9</td>
                    <td>10-10-2020</td>
                    <td>Lorem ipsum dolor sit.</td>
                    <td>Estrategia9</td>
                </tr>
                <tr>
                    <th scope="row">10</th>
                    <td>Plan10</td>
                    <td>10-10-2020</td>
                    <td>Lorem ipsum dolor sit.</td>
                    <td>Estrategia10</td>
                </tr>
                </tbody>
            </table>
            <nav className ="indice" aria-label="Page navigation for plans">
                <ul className="pagination">
                <li className="page-item disabled">
                    <a className="page-link" href="#">Previous</a>
                </li>
                <li className="page-item active" aria-current="page">
                    <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                </li>
                </ul>
            </nav>
        </div>
    );
};

export default Planes;
