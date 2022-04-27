import './Home.css'
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <section>
            <div className="cover d-flex justify-content-center align-items-center flex-column " style={{backgroundImage: 'url("inicio.jpg")'}}>
                <h1>Plan de Respuesta para Riesgos</h1>
                <p>Una librería de planes para la mitigación de riesgos de tus proyectos</p>
                <Link className='btn btn-info' to={'/planes'}> Empezar</Link>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-2">
                        <div className="card">
                            <div className="cover cover-small" style={{backgroundImage: 'url("box-example.jpg")'}}></div>
                            <div className="card-body">
                                <h5 className="card-title">Planes para la dirección de un proyecto</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in sagittis metus. Curabitur id nulla velit. Donec id risus porta arcu aliquet eleifend. Mauris molestie lorem nec tristique posuere. Nunc lectus lacus, ultricies et sodales non, finibus id enim. Duis non gravida nisi. Nulla laoreet dui eu volutpat luctus.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
        
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-2">
                        <div className="card">
                            <div className="cover cover-small" style={{backgroundImage: 'url("box-example.jpg")'}}></div>
                            <div className="card-body">
                                <h5 className="card-title">Planes para la dirección de un proyecto</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in sagittis metus. Curabitur id nulla velit. Donec id risus porta arcu aliquet eleifend. Mauris molestie lorem nec tristique posuere. Nunc lectus lacus, ultricies et sodales non, finibus id enim. Duis non gravida nisi. Nulla laoreet dui eu volutpat luctus.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
        
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-2">
                        <div className="card">
                            <div className="cover cover-small" style={{backgroundImage: 'url("box-example.jpg")'}}></div>
                            <div className="card-body">
                                <h5 className="card-title">Planes para la dirección de un proyecto</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in sagittis metus. Curabitur id nulla velit. Donec id risus porta arcu aliquet eleifend. Mauris molestie lorem nec tristique posuere. Nunc lectus lacus, ultricies et sodales non, finibus id enim. Duis non gravida nisi. Nulla laoreet dui eu volutpat luctus.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      );
};

export default Home;
