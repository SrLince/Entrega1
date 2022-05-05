import React from 'react'

const GlobalFilter = ({ filter, setFilter }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid mb-4">
                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                    <h2>Planes</h2>
                    <form>
                        <input 
                        className="form-control me-2" 
                        type="search" 
                        placeholder="Buscar un plan" 
                        value={filter || ''} 
                        onChange={e => setFilter(e.target.value)} 
                        />
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default GlobalFilter;