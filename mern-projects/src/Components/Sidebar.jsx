import { LayoutDashboardIcon,FolderOpenIcon,UsersIcon,SettingsIcon} from 'lucide-react';
import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import "../All_CSS/Sidebar.css";
import Mytaskbar from './Mytaskbar';
import Myproject from './Myproject';

function Sidebar({isSidebarOpen,setSidebarOpen}){
    const itemname=[{
        name:"Dashboard",
        href:"/",
        icon:LayoutDashboardIcon,
    },
    {
        name:"Projects",
        href:'/project',
        icon:FolderOpenIcon,
    },
    {
        name:"Team",
        href:'/team',
        icon:UsersIcon,
    } 
]

const sideref=useRef(null);
useEffect(()=>{
    function clickoutsidehandler(event){
        if(sideref.current && !sideref.current.contains(event.target)){
            setSidebarOpen(false);
        }
    }
    document.addEventListener("mousedown",clickoutsidehandler);
    return ()=> document.removeEventListener("mousedown",clickoutsidehandler);
},[setSidebarOpen])



return(
    <div ref={sideref} className='sidebar_wrapper'  > 
    <hr/>
    <div className='navlinks_tabs_wrapper'>
        <div className='navlinks_tabs_container'>
            <div className='navlinks_tabs'>
               {
                 itemname.map((item)=>(
                <NavLink to={item.href} key={item.name} className="nav_links">
                <item.icon size={20}/>
                <p className='sidebar_heading'>{item.name}</p>
                </NavLink> 
                ))
               }
               <button className='navlinks_tab_same_btn'>
                 <SettingsIcon size={20}/>
                 <p className='sidebar_setting'>Settings</p>
               </button>
            </div>
            <Mytaskbar />
            <Myproject />
        </div>

      </div>
    </div>
    )
};
export default Sidebar;


