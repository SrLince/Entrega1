import React from 'react'

const GlobalFilter = ({ filter, setFilter }) => {
    return (
        <form>
            <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Buscar un documento" 
                value={filter || ''} 
                onChange={e => setFilter(e.target.value)} 
            />
        </form>
    );
}

export default GlobalFilter;