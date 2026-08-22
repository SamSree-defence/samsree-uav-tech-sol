function Contact() {
    return (
        <main className="contact-page">
            <section className="contact-hero">
                <h1>Contact SamSree</h1>
                <p>
                    Have a UAV design requirement or engineering project?
                    Get in touch with us.
                </p>
            </section>

            <section className="contact-form-section">
                <h2>Send Us an Enquiry</h2>

                <iframe
                    src="YOUR_GOOGLE_FORM_EMBED_URL"
                    width="100%"
                    height="700"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    title="SamSree Contact Form"
                >
                    Loading…
                </iframe>
            </section>
        </main>
    );
}

export default Contact;