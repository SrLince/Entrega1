import '../css/planes.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState, useEffect, useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';
import { COLUMNS } from '../layout/Columns'
import GlobalFilter from '../layout/GlobalFilter'

const Planes = () => {

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
        page, 
        nextPage, 
        previousPage, 
        canNextPage, 
        canPreviousPage, 
        pageOptions, 
        prepareRow,
        state, 
        setGlobalFilter, 
    } = useTable({
        columns,
        data,
    },
    useGlobalFilter, useSortBy, usePagination)

    const { globalFilter, pageIndex } = state

    return(
        <>
        <div className="content mt-5 mb-5">
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
                    {page.map((row) => {
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
            <div className='d-flex justify-content-between'>
                <span className="m-3">
                    Página{' '}
                    {pageIndex + 1} de {pageOptions.length}
                </span>
                <div>
                    <button className="btn btn-primary m-3" onClick={() => previousPage()} disabled={!canPreviousPage}>Anterior</button>
                    <button className="btn btn-primary m-3" onClick={() => nextPage()} disabled={!canNextPage}>Siguiente</button>
                </div>
                <div>
                    <div className='m-3'>
                        <Link className="btn btn-primary" to={`/crearplan`} >Crear Plan</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Planes;
