import React, { useState, useEffect, useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Modal from 'bootstrap/js/dist/modal';

import { COLUMNS } from '../services/constants/Columns';
import GlobalFilter from '../layouts/main/GlobalFilter';

const SolicitudesEstrategias = () => {
  const columns = useMemo(() => COLUMNS.Solicitudes, []);
  const [ data, setEstrategias ] = useState([]);
  const [ isJP , setIsJP ] = useState(false);
  const [ selectedId , setSelectedId ] = useState(false);

  const cargarEstrategias = async () => {
    const response = await Axios.get("http://localhost:3001/api/solicitudes/estrategias/");
    setEstrategias(response.data);
  };

  function setDeleteId(strategyId) {
    setSelectedId(strategyId);
    const myModal = new Modal(document.getElementById("modal-1"));
    myModal.show();
  };

  const deleteDocument = async () => {
    Axios.delete(`http://localhost:3001/api/solicitudes/eliminar/estrategia/${selectedId}`)
    const myModal = new Modal(document.getElementById("modal-2"));
    myModal.show();
  };

  useEffect(() => {
    setIsJP(localStorage.getItem('user') === 'jp');
    cargarEstrategias();
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
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid mb-4">
            <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
              <h1>Solicitudes Estrategias</h1>
              <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            </div>
          </div>
        </nav>
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
                            <Link className='btn dark-bg' style={{width: "26%"}} to={`solicitudes/ver/${row.cells[0].row.values.id}`}>Ver</Link>
                            <Link className='btn dark-bg ms-3' style={{width: "26%"}} >Aceptar</Link>
                            <Link className='btn dark-bg ms-3' style={{width: "26%"}} >Rechazar</Link>
                          </td>
                        </>
                        :
                        <>
                          <td>
                            <Link className='btn dark-bg' style={{width: "26%"}} to={`/solicitudes/ver/${row.cells[0].row.values.id}`}>Ver</Link>
                            <Link className='btn dark-bg ms-3' style={{width: "26%"}} to={`/solicitudes/editar/${row.cells[0].row.values.id}`}>Editar</Link>
                            <Link className='btn dark-bg ms-3' style={{width: "26%"}} onClick={() => setDeleteId(row.cells[0].row.values.id)}>Borrar</Link>
                          </td>
                        </>                
                      );
                    }
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
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
      </div>

      <div class="modal fade" id="modal-1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalLabel">Mensaje</h5>
            </div>
          	<div id="modal-body" class="modal-body">
              Esta seguro que desea eliminar esta solicitud?
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">Cancelar</button>
              <button id="modal-button-1" type="button" class="btn dark-bg" data-bs-dismiss="modal" onClick={() => deleteDocument()}>Confirmar</button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="modal-2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalLabel">Mensaje</h5>
            </div>
            <div id="modal-body" class="modal-body">
              La solicitud ha sido eliminada correctamente
            </div>
            <div class="modal-footer">
              <button type="button" class="btn dark-bg" data-bs-dismiss="modal" onClick={() => window.location.reload()}>Aceptar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolicitudesEstrategias;
