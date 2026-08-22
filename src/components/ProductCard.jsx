import "./ProductCard.css";
import { Link } from "react-router-dom";
import { imageUrl } from "../utils/image";
function ProductCard({
    id,
    name,
    mission,
    endurance,
    mtow,
    wingspan,
    status,
    image,
    price
})
{
    return(
        <div className="product-card">
            <img
                src = {imageUrl(image)}
                alt={name}
                className = "product-image" 
            />
            <div className = "product-content">
                <h3>{name}</h3>
                <p className= "mission">{mission}</p>
                <div className= "specs">
                    {/* <p><strong>Endurance</strong>{endurance}</p>
                    <p><strong>MTOW</strong> {mtow}</p>
                    <p><stong>Wingspan</stong>{wingspan}</p> */}
                    <div className="spec-row">
                        <span>Endurence</span>
                        <span>{endurance}</span>
                    </div>
                    <div className="spec-row">
                        <span>MTOW</span>
                        <span>{mtow}</span>
                    </div>
                    <div className="spec-row">
                        <span>Wingspan</span>
                        <span>{wingspan}</span>
                    </div>
                    {/* <div className="price">
                        <span>price</span>
                        <span>{price}</span>
                    </div> */}
                </div>

                <span className={`status ${status.toLowerCase()}`}>
                    {status}
                </span>
                <span className="price">
                    {price}
                </span>
                <Link to ={`/Projects/${id}`}>
                    <button>
                        Details →
                   </button>
                </Link>
            </div>

        </div>
    );
} 

export default ProductCard;