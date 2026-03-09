import { useState, useEffect } from "react";
import {FolderOpen,UserRound,CalendarRange} from "lucide-react";
import New_Project_Dialogue from "../All_Dialogue/New_Project_Dialogue";
import { useSelector } from "react-redux";
import "../All_CSS/Project.css";
function Projects(){
   const[dialogueOpen,setdialogueOpen]=useState(false);

   const[formtype,setformtype]=useState({
    searchbar:"",priority:"",status:""
   })
 
   
   const [projects,setprojects]= useState([]);
const {currentWorkspace}=useSelector((state)=> state.workspace);
useEffect(()=> {
    if(currentWorkspace){
    setprojects(currentWorkspace.projects || null)
    }
},[currentWorkspace])

   function changeHandler(event)
   {
     setformtype((prev)=>({
        ...prev,
        [event.target.name]:event.target.value
     }))
   }
    return(
        <div className="project_wrapper">
     <div className="project_conatiner">
        <div className=" new_project_heading_button">
            <div className="heading_subheading">
<h2 className="project_heading">Project</h2>
<p className="project_subheading">Manage and Track your Projects</p>
            </div>
            <button onClick={()=> setdialogueOpen(true)} className="project_dialogue_btn">+New Project </button>
                    {dialogueOpen && <New_Project_Dialogue dialogueOpen={dialogueOpen} setdialogueOpen={setdialogueOpen}/>}
        </div>
        <div className="project_filters">
           <input 
           className="project_searchbar"
           type="text"
           placeholder="Enter Project..."
           name="searchbar"
           value={formtype.searchbar}
           onChange={changeHandler}
           />

           <select  className="project_status" name="status" value={formtype.status} onChange={changeHandler} >
            <option value="all_status">All STATUS</option>
            <option value="planning">PLANNING</option>
            <option value="active">ACTIVE</option>
            <option value="completed">COMPLETED</option>
            <option value="onhold">ON HOLD</option>
            <option value="cancelled">CANCELLED</option>
           </select>

           <select className="project_priority"  name="priority" value={formtype.priority} onChange={changeHandler}>
            <option value="all_status">ALL PRIORITY</option>
            <option value="easy">EASY</option>
            <option value="medium">MEDIUM</option>
            <option value="hard">HARD</option>
           </select>
        </div>
         
          <div className="no_projects">
                         {
                        projects.length === 0 ?
                        (
                            <div className="no_project"> 
                                <div className="icon_inside_circle"><FolderOpen  size={20}/></div>
                                <p>No projects yet</p>
                                <button onClick={()=>setdialogueOpen(true)}>Create a new Project</button>
                                
                            </div>
                        ):(
                            
                            projects.map((project)=>(
                                <div className="project_container">
                                <div className="my_project_heading">
                                    <h4>{project.name}</h4>
                                     <button className="new_btn">{project.status}</button> 
                                </div>
                              <p>{project.description}</p>
                              <div className="project_members">
                                  <div className="only_member">
                                    <UserRound size={20}/>
                                    <span className="project_text">{project.members.length} members</span>
                                  </div>
                                  <div className="project_start_date">
                                    <CalendarRange size={20}/>
                                    <span className="project_text">{project.start_date}</span>
                                    </div>
                                </div>
                                <div className="project_progress">
                                      <p className="project_text_small">Progress</p>
                                      <span className="project_text_small">0%</span>
                                    </div>
                                <div className="progress_bar"></div>
                                </div>
                            ))
                            
                    )
                       }
                       </div>
     </div>
        </div>
    )
};
export default Projects;