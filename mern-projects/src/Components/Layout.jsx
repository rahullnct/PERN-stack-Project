import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../All_CSS/Layout.css"; 

function Layout(){
    const[isSidebarOpen,setSidebarOpen]=useState(false);
    
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
