import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScrollToTop from './components/layout/ScrollToTop';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Index from './components/pages/Index';
import Planes from './components/pages/Planes';
import CrearPlan from './components/pages/CrearPlan';
import Estrategias from './components/pages/Estrategias';
import CrearEstrategia from './components/pages/CrearEstrategia';

function App() {
  return (
    <Router>
      <>
        <div className="App">
          <Navbar />
          <ScrollToTop />
          <Switch>
            <Route exact path='/' component={Index} />
            <Route exact path='/planes' component={Planes} />
            <Route exact path='/crearplan' component={CrearPlan} />
            <Route exact path='/estrategias' component={Estrategias} />
            <Route exact path='/crearestrategia' component={CrearEstrategia} />
          </Switch>
          <Footer/>
        </div>
      </>
    </Router>
  );
}

export default App;
