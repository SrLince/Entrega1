import '../css/planes.css';
import Axios from 'axios';
import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
import { COLUMNS } from '../layout/Columns'
import GlobalFilter from '../layout/GlobalFilter'

const Test = () => {

    const columns = useMemo(() => COLUMNS, []);
    const [data, setPlanes] = useState([]);

    const cargarPlanes = async () => {
        const response = await Axios.get("http://localhost:3001/api/planes/verPlanes");
        setPlanes(response.data);
    };

    useEffect(() => {
        cargarPlanes();
    }, []);

    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow,
        state, 
        setGlobalFilter, 
    } = useTable({
        columns,
        data,
    },
    useGlobalFilter, useSortBy)

    const { globalFilter } = state

    return(
        <>
        <div className="content mt-5 mb-5">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                        {/*
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Ordenar por:
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Nombre plan</a></li>
                                <li><a className="dropdown-item" href="#">Fecha creacion</a></li>
                                <li><a className="dropdown-item" href="#">Descripción</a></li>
                                <li><a className="dropdown-item" href="#">Estrategia</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Filtrar por:
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Nombre plan</a></li>
                                <li><a className="dropdown-item" href="#">Fecha creacion</a></li>
                                <li><a className="dropdown-item" href="#">Descripción</a></li>
                                <li><a className="dropdown-item" href="#">Estrategia</a></li>
                                </ul>
                            </li>
                        </ul>
                        
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Buscar un Plan" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                        */}
                    </div>
                </div>
            </nav>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <table {...getTableProps()} className="table">
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? ' ↓' : ' ↑') : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}        
                </tbody>
            </table>
            <div className='d-flex'>
                <Link className="btn btn-primary" to={`/crearplan`} style={{marginLeft: 'auto', maxWidth: '800px'}} >Crear Plan</Link>
            </div>
        </div>
        </>
    );
};

export default Test;
