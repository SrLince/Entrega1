import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './layouts/header/Navbar';
import Footer from './layouts/footer/Footer';

import Index from './pages/Index';
import Documentos from './pages/Documentos';
import CrearDocumento from './pages/CrearDocumento';
import Estrategias from './pages/Estrategias';
import CrearEstrategia from './pages/CrearEstrategia';

import ScrollToTop from './services/actions/ScrollToTop';

function App() {
  return (
    <Router>
      <>
        <div className="App">
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route exact path='/' component={Index} />
            <Route exact path='/documentos/' component={Documentos} />
            <Route exact path='/documentos/crear' component={CrearDocumento} />
            <Route exact path='/estrategias/' component={Estrategias} />
            <Route exact path='/estrategias/crear' component={CrearEstrategia} />
          </Switch>
          <Footer/>
        </div>
      </>
    </Router>
  );
}

export default App;