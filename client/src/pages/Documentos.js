import React, { useState, useEffect, useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import { COLUMNS } from '../services/constants/Columns';
import GlobalFilter from '../layouts/main/GlobalFilter';

const Documentos = () => {
    const columns = useMemo(() => COLUMNS.JPDocumentos, []);
    const [data, setDocumentos] = useState([]);
    const [ isJP , setIsJP ] = useState(false);

    const cargarDocumentos = async () => {
        const response = await Axios.get("http://localhost:3001/api/documentos/");
        setDocumentos(response.data);
    };

    useEffect(() => {
        setIsJP(localStorage.getItem('user') == 'jp');
        cargarDocumentos();
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
        gotoPage, 
        pageCount, 
        prepareRow,
        state, 
        setGlobalFilter, 
    } = useTable({
        columns,
        data,
    },
    useGlobalFilter, useSortBy, usePagination)

    const { globalFilter, pageIndex } = state;

    return(
        <>
        <div className="container mt-5" style={{minHeight: "100vh"}}>
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
                                {row.cells.map((cell, key) => {
                                    if(key === row.cells.length - 1) {
                                        return (
                                            isJP ?
                                            <>
                                                <td>
                                                    <Link className='btn dark-bg' style={{width: "70%"}} to={`/documentos/${row.cells[0].row.values.id}`}>Ver</Link>
                                                </td>
                                            </>
                                            :
                                            <>
                                                <td>
                                                    <Link className='btn dark-bg' style={{width: "26%"}} to={`/documentos/${row.cells[0].row.values.id}`}>Ver</Link>
                                                    <Link className='btn dark-bg ms-3' style={{width: "26%"}} to={`/documentos/editar/${row.cells[0].row.values.id}`}>Editar</Link>
                                                    <Link className='btn dark-bg ms-3' style={{width: "26%"}}>Borrar</Link>
                                                </td>
                                            </>
                                            
                                        );
                                    }
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })
                                }
                            </tr>
                        )
                    })}        
                </tbody>
            </table>
        </div>
        <div className='d-flex justify-content-between mt-3 mb-5 ms-5 me-5'>
          <span>
            Página{' '}
            {pageIndex + 1} de {pageOptions.length}
          </span>
          <div>
            <button className="btn dark-bg me-1" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
            <button className="btn dark-bg ms-1 me-1" onClick={() => previousPage()} disabled={!canPreviousPage}>Anterior</button>
            <button className="btn dark-bg ms-1 me-1" onClick={() => nextPage()} disabled={!canNextPage}>Siguiente</button>
            <button className="btn dark-bg ms-1" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
          </div>
          <div>
            <div>
              <Link className="btn dark-bg" to={`/documentos/crear`} >Crear Documento</Link>
              </div>
            </div>
          </div>
        </>
    );
};

export default Documentos;
