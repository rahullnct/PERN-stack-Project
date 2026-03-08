import { LayoutDashboardIcon,FolderOpenIcon,UsersIcon,SettingsIcon,ChevronDown,Check,Plus} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../All_CSS/Sidebar.css";
import Mytaskbar from './Mytaskbar';
import Myproject from './Myproject';
import { useDispatch, useSelector } from 'react-redux';
import { dummyWorkspaces } from '../assets/assets';
import { setCurrentWorkspace } from '../Slice_Pack/WorkSpaceSlice';
// import NewWorkspace from '../All_Dialogue/NewWorkspace';

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

console.log("dummy_workspace:",dummyWorkspaces);
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


const {workspaces}=useSelector((state)=> state.workspace);
const currentworkspace=useSelector((state)=> state.workspace?.currentWorkspace);
console.log("workspace:",workspaces);
const[isopen,setIsOpen]=useState(false);
const dispatch=useDispatch();

function selectworkspace_handler(organization_id){
      dispatch(setCurrentWorkspace(organization_id))
      setIsOpen(false);
    
}




  return currentworkspace && (
    <div ref={sideref} className='sidebar_wrapper'  > 
    <button onClick={()=> setIsOpen((prev)=>!prev)} className='workspace'>
        <div className='workspace_selection'>
          <img  className="workspace_single_image" src={currentworkspace?.image_url} alt="workspace_image"/>
          <div className='current_workspace'>
          <h4 className='workspace_heading'>{currentworkspace?.name}</h4>
          <p className='workspace_length'>{workspaces.length} workspaces</p>
          </div>
          <ChevronDown size={15} />
        </div>
    </button>

    {
        isopen && (
            <div className='workspace_container'>
                <p className='new_workspace'>WORKSPACES</p>
                
                {
                    dummyWorkspaces.map((item)=>(
                        <div className='all_workspace_container' key={item.id} onClick={()=>selectworkspace_handler(item.id)}>
                            <div className='single_workspace'>
                                <img  className="workspace_images" src={item.image_url} alt='workspace_image'/>
                                <div className='workspace_detailed'>
                                    <h4 className='my_heading'>{item.name}</h4>
                                    <p className='my_members'>{item.members.length || 0} members</p> 
                                </div>
                                {currentworkspace?.id === item.id && 
                            (<Check size={20}/>)
                        }
                            </div>
                        
                            
                        </div>
                    ))
                }
                <div className='new_workspace_starting'>
                 <p className='new_workspace_heading'>
                    <Plus size={15}/> New Workspace 
                 </p>

                 {/* <NewWorkspace/> */}
                </div>

            </div>
        )
    }
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


