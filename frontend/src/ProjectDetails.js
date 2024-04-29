import { useParams } from "react-router-dom";

const ProjectDetails = () => {
    const { id } = useParams(); // get id from URL
    return ( 
        <div className="project-details">
            Project details! The id is {id}
        </div>
     );
}
 
export default ProjectDetails;
