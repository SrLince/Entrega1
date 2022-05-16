import { Link } from "react-router-dom";
import '../assets/styles/index.css';

const Home = () => {
    return(
        <div>
            <div className="cover d-flex justify-content-center align-items-center flex-column">
                <h1>Plan de Respuesta para Riesgos</h1>
                <p>Una librería de planes para la mitigación de riesgos para tus proyectos</p>
            </div>
            <div className="container mt-8 mb-8">
                <div className="text-center">
                    <Link className='btn dark-bg' to={'/documentos'}><h2>Empezar</h2></Link>
                    <p className='p-3'>A gestionar respuesta a los riesgos de tu proyecto</p>
                </div>
            </div>
        </div>
      );
};

export default Home;
