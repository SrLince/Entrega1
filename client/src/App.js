import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/usuario/Home';
import Footer from './components/layout/Footer';
import Planes from './components/pages/usuario/Planes';
import CrearPlan from './components/pages/usuario/CrearPlan';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/planes' component={Planes} />
          <Route exact path='/crearplan' component={CrearPlan} />
        </Switch>
          
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
