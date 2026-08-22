import {useParams} from "react-router-dom";
import uavData from"../data/uavData";
import "./ProjectDetails.css"
import { Link } from "react-router-dom";
import { imageUrl } from "../utils/image";
function ProjectDetails() {
    const { id } = useParams();
    const uav = uavData.find((item) => item.id === id);
    if (!uav) {
    return (
        <section style={{
            minHeight: "100vh",
            padding: "100px 8%",
            background: "#0b1220",
            color: "white"
        }}>
            <h1>Project Not Found</h1>
        </section>
    );
}
    return(
        <section className="project-details">
            <h1>{uav.name}</h1>
            <h2>Gallery</h2>
            <div className="gallery">
                {uav.gallery.map((image)=>(
                    <img 
                        key ={image}
                        src = {imageUrl(image)}
                        alt={uav.name}
                        onError={(e) => console.log("IMAGE FAILED:", e.currentTarget.src)}
                    />
                ))}
            </div>
            <h2>Mission</h2>
            <p> {uav.mission}</p>
            <h2>Specifications</h2>
            <div className="spec-grid">
                <div>
                    <strong>Endurance</strong>
                    <p>{uav.endurance}</p>
                </div>
                <div>
                    <strong>MTOW</strong>
                    <p>{uav.mtow}</p>
                </div>
                <div>
                    <strong>Wing Span</strong>
                    <p>{uav.wingspan}</p>
                </div>
                <div>
                    <strong>Status</strong>
                    <p>{uav.status}</p>
                </div>
                <div>
                    <strong>Price</strong>
                    <p>{uav.price}</p>
                </div>
                
            </div>
            <h2> Engineering Reports</h2>
            <div className="report-grid">
                {
                    uav.reports.map((report)=>(
                        <div
                            className="report-card"
                            key={report}
                        >
                            {report}
                        </div>

                    ))
                }
            </div>
            <Link
                to="/"
                className="back-btn"
            >

                ← Back to Projects

            </Link>
        </section>
    )
}

export default ProjectDetails; 