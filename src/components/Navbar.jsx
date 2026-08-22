import "./Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const menuItems = [

    {
        name:"Home",
        type:"route",
        link:"/"
    },

    {
        name:"Engineering",
        type:"scroll",
        link:"#engineering"
    },

    {
        name:"Projects",
        type:"scroll",
        link:"#products"
    },

    {
        name:"About",
        type:"route",
        link:"/about"
    },

    {
        name:"Contact",
        type:"scroll",
        link:"#contact"
    }

];
function Navbar(){
    return(
        <header>
            <nav>
                <div className="logo">
                    <img src={logo} alt="SamSree"/>
                </div>
                <ul>

                    {menuItems.map((item) => (
                        <li key={item.link}>

                            {item.link.startsWith("#") ? (

                                <a href={item.link}>
                                    {item.name}
                                </a>

                            ) : (

                                <Link to={item.link}>
                                    {item.name}
                                </Link>

                            )}

                        </li>
                    ))}
                </ul>
            </nav>
        </header>

    )
}
export default Navbar;