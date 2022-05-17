import React from 'react';

const Login = () => {
  return (
    <div className='container mt-5 mb-5'>
      <div className='w-75 mx-auto shadow p-5'>
        <h2 className='text-center mb-4'>Ingreso</h2>
        <div className='container mt-8 mb-8 d-flex flex-column align-items-center'>
          <button className='btn dark-bg mb-5 p-3' style={{width: "60%"}}>Jefe de Proyecto</button>
          <button className='btn dark-bg p-3' style={{width: "60%"}}>Miembro de Equipo</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
