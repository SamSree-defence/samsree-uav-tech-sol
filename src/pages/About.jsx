import Hero from "../components/Hero";
import services from "../data/servicesData";
import "./About.css"
function About() {
    return (
        <section className="about" id="about">

            <h1>About SamSree UAV Tech Sol</h1>

            <p>

                SamSree UAV Tech Sol develops mission-driven UAV concepts,
                transforming mission requirements into manufacturing-ready
                engineering solutions supported by CAD modelling,
                CFD analysis, structural evaluation and engineering reports.

            </p>

            <h2>Our Engineering Services</h2>

            <div className="services-grid">

                {services.map((service)=>(

                    <div
                        className="service-card"
                        key={service.title}
                    >

                        <h3>{service.title}</h3>

                        <p>{service.description}</p>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default About;