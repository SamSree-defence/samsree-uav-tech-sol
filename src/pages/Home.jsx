import Hero from"../components/Hero";
import Workflow from "../components/Workflow";
import ProductSelection from "../components/ProductSelection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
function Home(){
    return(
        <>
            <Hero />
            <Workflow />
            <ProductSelection />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;