import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './components/layout/Navbar';
import Admin from './components/pages/admin/Admin';
import Home from './components/pages/usuario/Home';
import VerEventoUsuario from './components/pages/usuario/VerEvento';
import CrearSolicitud from './components/pages/usuario/CrearSolicitud';
import CancelarSolicitud from './components/pages/usuario/CancelarSolicitud';
import Usuarios from './components/pages/admin/Usuarios';
import VerUsuario from './components/pages/admin/VerUsuario';
import CrearUsuario from './components/pages/admin/CrearUsuario';
import EditarUsuario from './components/pages/admin/EditarUsuario';
import VerEvento from './components/pages/admin/VerEvento';
import CrearEvento from './components/pages/admin/CrearEvento';
import EditarEvento from './components/pages/admin/EditarEvento';
import NotFound from './components/pages/admin/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Solicitudes from './components/pages/admin/Solicitudes';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/verEvento/:id' component={VerEventoUsuario} />
          <Route exact path='/crearSolicitud/:id' component={CrearSolicitud} />
          <Route exact path='/cancelarSolicitud/:id' component={CancelarSolicitud} />
          
          <Route exact path='/admin/' component={Admin} />
          <Route exact path='/admin/usuarios' component={Usuarios} />
          <Route exact path='/admin/crearUsuario' component={CrearUsuario} />
          <Route exact path='/admin/editarUsuario/:id' component={EditarUsuario} />
          <Route exact path='/admin/verUsuario/:id' component={VerUsuario} />
          <Route exact path='/admin/verEvento/:id' component={VerEvento} />
          <Route exact path='/admin/crearEvento' component={CrearEvento} />
          <Route exact path='/admin/editarEvento/:id' component={EditarEvento} />
          <Route exact path='/admin/solicitudes' component={Solicitudes} />

          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
