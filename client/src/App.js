import React, { useState, useEffect } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './layouts/header/Navbar';
import Footer from './layouts/footer/Footer';

import Index from './pages/Index';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Documentos from './pages/Documentos';
import VerDocumento from './pages/VerDocumento';
import CrearDocumento from './pages/CrearDocumento';
import EditarDocumento from './pages/EditarDocumento';
import Estrategias from './pages/Estrategias';
import CrearEstrategia from './pages/CrearEstrategia';

import ScrollToTop from './services/actions/ScrollToTop';

function App() {
  const [ isLogged , setIsLogged ] = useState(false);

  useEffect(() => { 
    setIsLogged(localStorage.getItem('user') != undefined);
  }, []);

  return (
    <Router>
      <>
        <div className="App">
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route exact path='/' component={Index} />
            <Route exact path='/login' component={Login} />
            {
              isLogged ? 
              <>
                <Route exact path='/menu' component={Menu} />
                <Route exact path='/documentos/' component={Documentos} />
                <Route exact path='/documentos/:id' component={VerDocumento} />
                <Route exact path='/documentos/crear' component={CrearDocumento} />
                <Route exact path='/documentos/editar/:id' component={EditarDocumento} />
                <Route exact path='/estrategias/' component={Estrategias} />
                <Route exact path='/estrategias/crear' component={CrearEstrategia} />
              </>
              :
              <>
                <Route exact path='/menu' component={Login} />
                <Route exact path='/documentos/' component={Login} />
                <Route exact path='/documentos/:id' component={Login} />
                <Route exact path='/documentos/crear' component={Login} />
                <Route exact path='/documentos/editar/:id' component={Login} />
                <Route exact path='/estrategias/' component={Login} />
                <Route exact path='/estrategias/crear' component={Login} />
              </>
            }  
          </Switch>
          <Footer/>
        </div>
      </>
    </Router>
  );
}

export default App;