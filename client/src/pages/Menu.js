import React from 'react';

const Menu = () => {
  return (
    <div className='container mt-5 mb-5'>
      <div className='w-75 mx-auto shadow p-5'>
        <h2 className='text-center mb-4'>Bienvenido</h2>
        <div className='container mt-8 mb-8 d-flex flex-column align-items-center'>
          <button className='btn dark-bg mb-5 p-3' style={{width: "60%"}}>Documentos</button>
          <button className='btn dark-bg mb-5 p-3' style={{width: "60%"}}>Estrategias</button>
          <button className='btn dark-bg p-3' style={{width: "60%"}}>Solcitudes</button>
        </div>
        <div className='d-flex flex-row justify-content-end'>
          <button className='btn dark-bg'>Cerrar Sesión</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
