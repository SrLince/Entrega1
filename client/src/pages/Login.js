import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  function loginAs(role) {
    localStorage.removeItem('user');
    localStorage.setItem('user', role);
  }

  return (
    <div className='container mt-5 mb-5'>
      <div className='w-75 mx-auto shadow p-5'>
        <h2 className='text-center mb-4'>Ingreso</h2>
        <div className='container mt-8 mb-8 d-flex flex-column align-items-center'>
          <Link className='btn dark-bg mb-5 p-3' style={{width: "60%"}} to={'/menu'} onClick={() => loginAs('jp')}>Jefe de Proyecto</Link>
          <Link className='btn dark-bg p-3' style={{width: "60%"}} to={'/menu'} onClick={() => loginAs('tm')}>Miembro de Equipo</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
