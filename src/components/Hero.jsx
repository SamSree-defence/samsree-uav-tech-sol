import "./Hero.css"
import {Link} from "react-router-dom"
import SS_AC_DS29 from "../assets/hero/SS_AC_DS29.gif"
function Hero(){
    return(
        <section id ="home" className = "hero">
            <div className = "hero-text">
                <h1> 
                    <span>Mission-Driven</span> 
                    <br/>
                    Uav Engineering </h1>
                <p>
                    from mission requirements to mannufacturing-ready UAv designs with CAD, CFD, structural analysis and engineering reports.

                </p>
                <div className="hero-buttons">
                    <button className="primary-btn"
                        onClick={() =>
                            document
                                .getElementById("engineering")
                                .scrollIntoView({ behavior: "smooth" })
                        }
                    >

                        View Process
                    </button>
                
                    <button className="secondary-btn"
                        
                        onClick={() =>
                        document
                            .getElementById("products")
                            .scrollIntoView({ behavior: "smooth" })
                    }>
                        View Products
                    </button>

                </div>
                
                <div className="hero-stats">
                    <div className="stat">
                        <h3>CAD</h3>
                        <p>CAD Models</p>
                    </div>
                    <div className="stat">
                        <h3>CFD</h3>
                        <p>Simulation</p>
                    </div>
                    <div className="stat">
                        <h3>FEA</h3>
                        <p>Structural Analysis</p>
                    </div>
                </div>
            </div>
            <div className="hero-image">
               <img 
                    src={SS_AC_DS29}
                    alt="SS_AC_DS29 UAV"
                />
            </div>
        </section>
    );

}

export default Hero;