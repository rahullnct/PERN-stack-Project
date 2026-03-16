import {ChevronRight,KanbanIcon,ChartColumnIcon,CalendarIcon,SettingsIcon,ArrowRight} from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams,useLocation, Link } from "react-router-dom";
import "../All_CSS/MyProjectSidebar.css";

function Myproject(){
    const navigate=useNavigate();
    const location=useLocation();
    const [expend,setexpend]=useState(new Set());
    const myProjects=useSelector((state)=>state?.workspace?.currentWorkspace?.projects || null);
    console.log("project_sidebar:",myProjects);
      
    const getProjectSubItems = (projectId) => [
        { title: 'Tasks', icon: KanbanIcon, url: `/projectsDetail?id=${projectId}&tab=tasks` },
        { title: 'Analytics', icon: ChartColumnIcon, url: `/projectsDetail?id=${projectId}&tab=analytics` },
        { title: 'Calendar', icon: CalendarIcon, url: `/projectsDetail?id=${projectId}&tab=calendar` },
        { title: 'Settings', icon: SettingsIcon, url: `/projectsDetail?id=${projectId}&tab=settings` }
    ];
    const [searchparams]=useSearchParams();
    const toggleProject=(id)=>{
      const newSetid= new Set(expend);
      newSetid.has(id) ? newSetid.delete(id): newSetid.add(id);
    setexpend(newSetid);
    }
    return(
        <div className="my_projects_sidebar_container">
          <button className="projects_heading" onClick={()=>navigate('/project')}>
            <p className="all_my_project_heading">PROJECTS</p>
            <ArrowRight size={15}/>
          </button>
          <div>
             {
            myProjects.map((item)=>(
              <div className="all_my_projects" onClick={()=> toggleProject(item.id)}>
                <div className="my_projects">

                <ChevronRight size={15}/>
                <p className="my_project_details">{item.name}</p>
              </div>
              {
                expend.has(item.id) && (
                  <div className="project_detail">
                      {getProjectSubItems(item.id).map((subitem)=>{
                       

                        const isActive=
                        location.pathname ==='project-details' &&
                        searchparams.get('id')=== item.id && 
                        searchparams.get('tab') === subitem.title.toLowerCase();

                        return(
                          <Link key={subitem.title} to={subitem.url}>
                              <subitem.icon />
                              {subitem.title}

                          </Link>
                        )
                      
                      }
                     )}

                    
                  </div>
                )
              }
              </div>
            ))
           }
           
          </div>
          

          
        </div>
    )
}
export default Myproject;