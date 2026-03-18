import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {ArrowLeft,Activity} from "lucide-react";
import NewTask from "../All_Dialogue/Newtask";
function ProjectDetail({project_id}){
    let {id }=useParams();
    const navigate=useNavigate();
    const currentWorkspace=useSelector((state)=> state.workspace.currentWorkspace);
    const[isOpen,setisopen]=useState(false);
    // console.log(currentWorkspace);
    let newProjects= currentWorkspace?.projects?.find((item)=> item.id === id);
    // console.log("new_projects:",newProjects);
     const ProjectDetailCards=[
        {title:"Total Tasks",icon: Activity, card_number:1},
        {title:" Completed",icon: Activity, card_number:2},
        {title:"In Progress",icon: Activity , card_number:3},
        {title:"Team Members",icon: Activity , card_number:4}
    ]
    return(
        <div className="task_wrapper">
           <div className="task_container">
            <div className="task_upper_container">
                <div className="heading_container">
                    <ArrowLeft size={15} onClick={()=>navigate('/project')}/>
                <h2 className="task_heading">{newProjects.name}</h2>
                <div className="task_status_container">
                    <span className="task_status">{newProjects?.status}</span>
                </div>
                </div>
                <button className="new_task_btn" onClick={()=>setisopen(true)}>
                    + New Task
                </button>
                {
                    isOpen && 
                    <NewTask setisopen={setisopen}/>
                }
            </div>
              
           </div>
        </div>
        
        
    )
};
export default ProjectDetail;