import "./Contact.css"
function Contact(){
    return(
        <section id="contact" className= "contact">
                <div className="contact-header">
                    <h2>Let's build your Next Uav</h2>
                    <p>
                        Whether you need a conceptual UAV design,
                        CAD development, CFD analysis, structural
                        verification or a complete manufacturing
                        package, we're ready to help.
 
                    </p>
                </div>
                <div className="contact-grid">
                    <div className="contact-card">
                        <h3>Email</h3>
                        <p>contact.samsree@gmail.com</p>
                    </div>
                    <div className= "contact-card">
                        <h3>Engineering Services</h3>
                        <p>
                            UAV Design . CAD . CFD . FEA
                        </p>
                    </div>
                    <div className= "contact-card">
                        <h3>Respoonce</h3>
                        <p>
                            we aim to respond within 24-48 hours.
                        </p>
                    </div>
                </div>
                <a
                    href="https://forms.gle/bWBaTAZVs2qjtwV36"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-btn"
                >
                    Contact Us
                </a>
                {/* <button className= "contact-btn">
                    Contact Us
                </button> */}
        </section>
    )
}
export default Contact;