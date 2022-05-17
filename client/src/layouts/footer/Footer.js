import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/footer.css'

const Footer = () => {
    return(
        <footer className="pie-de-pagina">
            <div className="grupo-1">
                <div className="box">
                    <figure>
                        <a href="#">
                            <Link>
                                <img src='logo-uv.png'></img>
                            </Link>
                        </a>
                    </figure>
                </div>
                <div className="box">
                    <h2>Sobre Nosotros</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt natus, facilis ratione ipsa ducimus veniam?</p>
                </div>
                <div className="box">
                    <h2>Siguenos</h2>
                    <div className="red-social">
                        <a className="fa fa-facebook" aria-hidden="true" href="#"></a>
                        <a className="fa fa-instagram" aria-hidden="true" href="#"></a>
                        <a className="fa fa-twitter" aria-hidden="true" href="#"></a>
                    </div>
                </div>
            </div>
            <div className="grupo-2">
                <small>&copy;2021 <b>Los gigachad</b> - todos los derechos reservados</small>
            </div>
        </footer>
    );
};

export default Footer;