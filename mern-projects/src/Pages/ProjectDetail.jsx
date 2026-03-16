import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ProjectDetail({project_id}){
    let {id }=useParams();
    const currentWorkspace=useSelector((state)=> state.workspace.workspaces);
    console.log(currentWorkspace);
    return(
        <div>
           <h1>ProjectDetail</h1> 
           <h2>{id}</h2>
        </div>
        
        
    )
};
export default ProjectDetail;