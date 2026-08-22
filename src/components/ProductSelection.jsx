import ProductCard from "./ProductCard";
import uavData from "../data/uavData";
import "./ProductSelection.css";
function ProductSelection(){
    return(
        <section id="products" className = "products">
            <h2>Our UAV Concepts</h2>
            <div className="products-grid">
                {uavData.map((uav)=>(
                    <ProductCard
                        key ={uav.id}
                        id = {uav.id}
                        name ={uav.name}
                        mission ={uav.mission}
                        endurance = {uav.endurance}
                        mtow ={uav.mtow}
                        wingspan ={uav.wingspan}
                        status ={uav.status}
                        image ={uav.image}
                        price={uav.price}
                    />
                ))}
            </div>      
        </section>
  
    );
}

export default ProductSelection;