import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../All_CSS/Layout.css"; 
import { useSelector } from "react-redux";
import {useUser,SignIn} from '@clerk/clerk-react';
function Layout(){
    const[isSidebarOpen,setSidebarOpen]=useState(false);
    const {loading}=useSelector((state)=>state.workspace)
    // console.log("loader in loyout:",loading)
    const{user,isloaded}=useUser();
    if(!user){
        return(<div className="check_new_user">
            <SignIn />
        </div>)
    }
    
    return(
        <div className="layout_wrapper">
            <Navbar setSidebarOpen={setSidebarOpen}/>
            <div className="all_pages_container">
            <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen}/>
            <div className="outlet_container">
            <Outlet/>
            </div>
            </div>
        </div>
        
    )
};
export default Layout;
