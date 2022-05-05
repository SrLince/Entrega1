import React from 'react'

const GlobalFilter = ({ filter, setFilter }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Buscar un Plan" aria-label="Search" value={filter || ''} onChange={e => setFilter(e.target.value)} />
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default GlobalFilter;