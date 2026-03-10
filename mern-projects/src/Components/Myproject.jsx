import {ChevronRight,KanbanIcon,ChartColumnIcon,CalendarIcon,SettingsIcon} from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Myproject(){
    const navigate=useNavigate();
    
    const currentWorkspace=useSelector((state)=>state?.workspace?.currentWorkspace?.projects || null);
    // console.log("project_sidebar:",currentWorkspace);
      
    const getProjectSubItems = (projectId) => [
        { title: 'Tasks', icon: KanbanIcon, url: `/projectsDetail?id=${projectId}&tab=tasks` },
        { title: 'Analytics', icon: ChartColumnIcon, url: `/projectsDetail?id=${projectId}&tab=analytics` },
        { title: 'Calendar', icon: CalendarIcon, url: `/projectsDetail?id=${projectId}&tab=calendar` },
        { title: 'Settings', icon: SettingsIcon, url: `/projectsDetail?id=${projectId}&tab=settings` }
    ];
    return(
        <div className="my_projects_container">
          <button className="all_my_projects" onClick={()=>navigate('/project')}>
            <p className="all_my_project_heading">PROJECTS</p>
            <ChevronRight size={15}/>
          </button>

          
        </div>
    )
}
export default Myproject;