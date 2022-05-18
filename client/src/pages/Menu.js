import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [ isJP , setIsJP ] = useState(false);

  useEffect(() => { 
    setIsJP(localStorage.getItem('user') == 'jp');
  }, [])

  function closeSession() {
    localStorage.removeItem('user');
  }

  return (
    <div className='container mt-5 mb-5'>
      <div className='w-75 mx-auto shadow p-5'>
        <h2 className='text-center mb-4'>Bienvenido</h2>
        <div className='container mt-8 mb-8 d-flex flex-column align-items-center'>
          {isJP ? 
            <>
              <Link className='btn dark-bg mb-5 p-3' style={{width: "60%"}} to={`/documentos`}>Ver Documentos</Link>
              <Link className='btn dark-bg mb-5 p-3' style={{width: "60%"}} to={`/estrategias`}>Ver Estrategias</Link>
              <Link className='btn dark-bg p-3' style={{width: "60%"}} to={`/solicitudes`}>Gestionar Solcitudes</Link>
            </> :
            <>
              <Link className='btn dark-bg mb-5 p-3' style={{width: "60%"}} to={`/documentos`}>Gestionar Documentos</Link>
              <Link className='btn dark-bg mb-5 p-3' style={{width: "60%"}} to={`/estrategias`}>Gestionar Estrategias</Link>
              <Link className='btn dark-bg p-3' style={{width: "60%"}} to={`/solicitudes`}>Generar Solcitudes</Link>
            </>
          }
          
        </div>
        <div className='d-flex flex-row justify-content-end'>
          <a className='btn dark-bg' onClick={() => closeSession()} href="/">Cerrar Sesión</a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
