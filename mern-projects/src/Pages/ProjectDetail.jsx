import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import {ArrowLeft,Activity,KanbanIcon,ChartColumnIcon,CalendarIcon,SettingsIcon, Key, Calendar} from "lucide-react";
import NewTask from "../All_Dialogue/Newtask";
import TaskTab from "../Components/TaskTab";
import AnalyticsTab from "../Components/AnalyticsTab";
import CalendarTab from "../Components/CalenderTab";
import SettingsTab from "../Components/SettingsTab";
import "../All_CSS/ProjectDetails.css";
function ProjectDetail({project_id}){
    const [searchParams,setSearchParams]=useSearchParams([]);
    
    const new_id=searchParams.get("id");
    // console.log("new_id:",new_id);
    const tab=searchParams.get('tab');
    const navigate=useNavigate();
    const currentWorkspace=useSelector((state)=> state.workspace.currentWorkspace);
    const[isOpen,setisopen]=useState(false);
    // console.log(currentWorkspace);
    let newProjects= currentWorkspace?.projects?.find((item)=> String(item.id) === String(new_id));
    // console.log("new_projects:",newProjects);

     const ProjectDetailCards=[
        {title:"Total Tasks",icon: Activity, card_number:1},
        {title:" Completed",icon: Activity, card_number:2},
        {title:"In Progress",icon: Activity , card_number:3},
        {title:"Team Members",icon: Activity , card_number:4}
    ]
    
     const Alltabs =[
        { title: 'Tasks', icon: KanbanIcon,key: 'Tasks', },
        { title: 'Analytics', icon: ChartColumnIcon,key: 'Analytics',},
        { title: 'Calendar', icon: CalendarIcon,key: 'Calendar', },
        { title: 'Settings', icon: SettingsIcon,key: 'Settings', }
    ];

    const [activeTab,setActiveTab]=useState(tab || 'Task')

    return(
        <div className="task_wrapper">
           <div className="task_container">
            <div className="task_upper_container">
                <div className="heading_container">
                    <ArrowLeft size={20} onClick={()=>navigate('/project')}/>
                <h3 className="task_heading">{newProjects.name}</h3>
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
         <div className="task_cards_container">
          {
            ProjectDetailCards.map((item,id)=>(
                <div className="single_card">
                  <div className="single_card_upper">
                    <span className="card_title">{item.title}</span>
                    <div className="icon_container"><item.icon size={15}/></div>
                  </div>
                  <h3 className="card_number">{item.card_number}</h3>
                </div>
            ))
          }

         </div>
              <div className="tabs_container">
                {
                    Alltabs.map((item,id)=>(
                        <button className={`tabs ${activeTab === item.key ? "active":""}`} key={item.key} onClick={()=>{setActiveTab(item.key); setSearchParams({id:new_id,tab: item.key})}} >
                      <item.icon size={15}/>
                        <p className="tab_names">{item.title}</p>
                        
                            </button>
                    
                    ))
                }
               
              </div>
               {
                    activeTab ==='Tasks' && <TaskTab newProjects={newProjects}/>
                }
                {
                     activeTab ==='Analytics' && <AnalyticsTab newProjects={newProjects}/>
                }
                {
                     activeTab ==='Calendar' && <CalendarTab newProjects={newProjects}/>
                }
                {
                     activeTab ==='Settings' && <SettingsTab newProjects={newProjects}/>
                }
           </div>
        </div>
        
        
    )
};
export default ProjectDetail;