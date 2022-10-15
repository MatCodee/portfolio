import {Link} from "react-router-dom";
import fondo from "../../img/fondo.jpg";
import "./index.css";


const Home = () => {
    return (
        <div className="container-home">
            <div className="box-layout">
                <h1> Website and user interface designer</h1>
                <p>Over the past 9 years, as an art director and designer, I’ve worked with big companies and up-and-coming startups to successfully 
                    help them reach their full potential and attract new customers.</p>
            </div>


            <section className="section-layout">
                <p>SELECTED PROJECTS</p>
                <h3>Algunos de mis proyectos </h3>


                <div className="list">
                    <div className="list-item-1">
                        <div className="card">
                            <div className="card__info">
                                <p>2021 - 2022</p>
                                <h2>Aplicacion de Redes Sociales</h2>
                            </div>

                        </div>
                    </div>
                    <div className="list-item-2">
                        <div className="card">
                        <div className="card__info">
                                <p>2021 - 2022</p>
                                <h2>Aplicacion de Redes Sociales</h2>
                            </div>
                        </div>
                    </div>
                    <div className="list-item-3">
                        <div className="card">
                            <div className="card__info">
                                <p>2021 - 2022</p>
                                <h2>Aplicacion de Redes Sociales</h2>
                            </div>
                        </div>
                    </div>
                    <div className="list-item-4">
                        <div className="card">
                            <div className="card__info">
                                <p>2021 - 2022</p>
                                <h2>Aplicacion de Redes Sociales</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </section>



            <section className="footer-section">
                <h2>¿Preparado para comenzar?</h2>
                <p>You know about me, let’s talk about you.</p>
            </section>
        </div>
    )
}

export default Home