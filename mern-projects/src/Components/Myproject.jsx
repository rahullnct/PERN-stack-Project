import {ChevronRight,KanbanIcon,ChartColumnIcon,CalendarIcon,SettingsIcon,ArrowRight, Link} from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams,useLocation } from "react-router-dom";


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
        <div className="my_projects_container">
          <button className="all_my_projects" onClick={()=>navigate('/project')}>
            <p className="all_my_project_heading">PROJECTS</p>
            <ArrowRight size={15}/>
          </button>
          <div>
             {
            myProjects.map((item)=>(
              <div className="my_projects" onClick={()=> toggleProject(item.id)}>
                <div>

                <ChevronRight size={15}/>
                <p>{item.name}</p>
              </div>
              {
                expend.has(item.id) && (
                  <div>
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

                      {/* {expandedProjects.has(project.id) && (
                            <div className="ml-5 mt-1 space-y-1">
                                {getProjectSubItems(project.id).map((subItem) => {
                                    // checking if the current path matches the sub-item's URL
                                    const isActive =
                                        location.pathname === `/projectsDetail` &&
                                        searchParams.get('id') === project.id &&
                                        searchParams.get('tab') === subItem.title.toLowerCase();

                                    return (
                                        <Link key={subItem.title} to={subItem.url} className={`flex items-center gap-3 px-3 py-1.5 rounded-lg transition-colors duration-200 text-xs ${isActive ? 'bg-blue-100 text-blue-600 hover:bg-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:hover:bg-blue-500/20' : 'text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800'}`} >
                                            <subItem.icon className="size-3" />
                                            {subItem.title}
                                        </Link>
                                    );
                                })} */}
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