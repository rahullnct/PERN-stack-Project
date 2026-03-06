import {FolderClosed,CircleCheckBig ,UsersRound ,TriangleAlert,ArrowRight, FolderOpen} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import New_Project_Dialogue from "../All_Dialogue/New_Project_Dialogue";
import "../All_CSS/Dashboard.css";

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

    return (
        <div className="dashboard_wrapper">
            <div className="dashboard_container">
                <div className="upper_heading">
                    <div >
                        <h2>Welcome Back,</h2>
                        <p>here's what happening with your project today</p>
                    </div>
                    <button onClick={()=> setdialogueOpen(true)} className="new_project_dialogue">+New Project </button>
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
                        <h3>Porject Overview</h3>
                       <span>View all <ArrowRight size={15}/></span>
                       </div>
                       <div className="no_projects">
                         {
                        projects.length === 0 ?
                        (
                            <div> 
                                <FolderOpen  size={20}/>
                                <p>No projects yet</p>
                                <button onClick={()=>setdialogueOpen(true)}>Create a new Project</button>
                                {/* <New_Project_Dialogue /> */}
                            </div>
                        ):(
                            <div>
                                <div>
                                    <p>{projects.name}</p>
                                     <button>project active</button>   
                                </div>
                                <p></p>

                            </div>
                        )
                       }
                       </div>
                      
                     </div>
                  </div>
                  <div className="right_side_card_Containers">

                  </div>
               </div>
               
            </div>
        </div>

    )
};
export default Dashboard;
