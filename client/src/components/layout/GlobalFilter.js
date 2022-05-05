import React from 'react'
import { Link } from 'react-router-dom';

const GlobalFilter = ({ filter, setFilter }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid mb-4">
                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                    <div className='d-flex'>
                        <Link className="btn btn-primary" to={`/crearplan`} >Crear Plan</Link>
                    </div>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Buscar un Plan" aria-label="Search" value={filter || ''} onChange={e => setFilter(e.target.value)} />
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default GlobalFilter;