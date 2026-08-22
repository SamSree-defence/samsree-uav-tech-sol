import { BrowserRouter, Routes,Route } from "react-router-dom";
// import "./App.css";
import Navbar from "./components/Navbar";
import Home from"./pages/Home";
import About from "./pages/About";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./components/Contact";
function App() {
  return (
    <BrowserRouter basename="/samsree-uav-tech-sol">
      <Navbar />
      <Routes>
          <Route 
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route 
            path="/Projects/:id"
            element={<ProjectDetails/>}
          />
          <Route
            path="/contact"
            element={<Contact/>}
          />
      </Routes>
    </BrowserRouter>
  );
}

export default App;