import "./Workflow.css";
import workflowData from "../data/workflowData";

function Workflow(){
    return(
        <section className="workflow" id="engineering">
            <h2>From mission to Manufacturing</h2>
            <p className ="workflow-subtitle">
                Every UAV begins with a mission and ends with
                a manufacturing-ready engineering package.
            </p>
            <div className = "timeline">
                {workflowData.map((item)=>(
                    <div 
                        key = {item.id}
                        className="timeline-item"
                    >
                        <div className="timeline-number">
                            {item.number}
                        </div>
                        <div className="timeline-content">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
}

export default Workflow;