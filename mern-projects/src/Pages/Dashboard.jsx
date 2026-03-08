import {FolderClosed,CircleCheckBig ,UsersRound ,TriangleAlert,ArrowRight, FolderOpen,UserRound,CalendarRange} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import New_Project_Dialogue from "../All_Dialogue/New_Project_Dialogue";
import "../All_CSS/Dashboard.css";
import { dummyWorkspaces } from "../assets/assets";
import { useSelector } from "react-redux";
import Taskbar from "../Components/Taskbar";

function Dashboard() {
  
    const all_contents_cards= [
        {
        heading:"Total Projects",
        all_numbers:"2",
        subheading:"projects in current company",
        icon: FolderClosed,
    },
      {
        heading:"Completed Projects",
        all_numbers:"2",
        subheading:"of 2 total",
        icon: CircleCheckBig,
    },
      {
        heading:"My Tasks",
        all_numbers:"2",
        subheading:"assigned to me",
        icon: UsersRound,
    },
    {
        heading:"Overdue",
        all_numbers:"2",
        subheading:"need attention",
        icon: TriangleAlert,
    },


]


const [dialogueOpen,setdialogueOpen]=useState(false);
const [projects,setprojects]= useState([]);

const [this_project,setthis_project]=useState([]);
// console.log("projects:",this_project);

const {currentWorkspace}=useSelector((state)=> state.workspace);

console.log("current_workspace:",currentWorkspace);

// console.log("projects:,",projects);

useEffect(()=> {
    if(currentWorkspace){
    setprojects(currentWorkspace.projects || null)
    }
},[currentWorkspace])




    return currentWorkspace && (
        <div className="dashboard_wrapper">
            <div className="dashboard_container">
                <div className="upper_heading">
                    <div >
                        <h2 className="dashboard_heading">Welcome Back, {currentWorkspace.name}</h2>
                        <p className="dashboard_subheading">here's what happening with your project today</p>
                    </div>
                    <button onClick={()=> setdialogueOpen(true)} className="project_dialogue_btn">+New Project </button>
                    {dialogueOpen && <New_Project_Dialogue dialogueOpen={dialogueOpen} setdialogueOpen={setdialogueOpen}/>}
                </div>
              
                {all_contents_cards.map((item)=>(
                     <div className="contents_cards">
                    <div className="cards_inside">
                    <p>{item.heading}</p>
                    <h2>{item.all_numbers}</h2>
                    <p>{item.subheading}</p>             
               </div>
               < item.icon size={20}/>
               </div> ))}

               <div className="full_Card_container">
                  <div className="left_side_card_containers">
                     <div className="project_overview_container">
                       <div className="proejct_overview_heading">
                        <h3 className="my_project_overview_heading">Porject Overview</h3>
                       <span>View all <ArrowRight size={15}/></span>
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
                      <br/>
                      {/* --------Activity Container-------- */}
                      <div className="project_overview_container">
                       <div className="proejct_overview_heading">
                        <h3 className="my_project_overview_heading">Recent Activity</h3>
                       </div>
                       <div className="no_projects">
                         {
                        this_project.length === 0 ?
                        (
                            <div className="no_project"> 
                                <div className="icon_inside_circle"><FolderOpen  size={20}/></div>
                                <p>No projects yet</p>
                                <button onClick={()=>setdialogueOpen(true)}>Create a new Project</button>
                                
                            </div>
                        ):(
                            <div>
                                <div className="my_project_heading">
                                    <h4>{this_project.name}</h4>
                                     <button className="new_btn">{this_project.status}</button> 
                                </div>
                              <p>{this_project.description}</p>
                              <div className="project_members">
                                  <div className="only_member">
                                    <UserRound size={20}/>
                                    <span className="project_text">{this_project.members.length} members</span>
                                  </div>
                                  <div className="project_start_date">
                                    <CalendarRange size={20}/>
                                    <span className="project_text">{this_project.start_date}</span>
                                    </div>
                                </div>
                                <div className="project_progress">
                                      <p className="project_text_small">Progress</p>
                                      <span className="project_text_small">0%</span>
                                    </div>
                                <div className="progress_bar"></div>
                            </div>
                        )
                       }
                       </div>
                      
                     </div>

                  </div>
                  
                        <Taskbar/>
                         {/* <div className="task_name_heading">
                            <div className="task_with_heading">
                                <UserRound size={15}/>
                                <h3 className="my_task_heading">My tasks</h3>
                            </div> */}
                            {/* <span className="total_task">{projects.tasks.length}</span> */}
                         {/* </div> */}
                         {/* {
                            this_project?.tasks?.map((item,index)=>(
                                <div className="all_tasks" key={index}>
                                 <p className="task_title">{item?.title}</p>
                                    <p className="task_priority">{item.type}-{item.priority} priority</p>
                                </div>
                            ))
                         } */}
                         
                  
               </div>
               
            </div>
        </div>

    )
};
export default Dashboard;
