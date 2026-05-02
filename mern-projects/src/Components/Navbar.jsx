import { MoonIcon, PanelLeft, SearchIcon, SunIcon } from "lucide-react";
import { useState } from "react";
import profile_image from "../assets/profile_img_o.svg";
import "../All_CSS/Navbar.css";
import {UserButton} from '@clerk/clerk-react';
function Navbar({ setSidebarOpen }) {
  const [theme, settheme] = useState("light");
  return (
    <div className="navbar_wrapper">
      <div className="navbar_container">
        <div className="sidebarpannel_button">
          <button onClick={() => setSidebarOpen((prev) => !prev)} className="some_btn">
            <PanelLeft size={20} />
          </button>

          <div className="navbar">
            <SearchIcon className="search_icon" />
            <input
              type="text"
              placeholder="Enter to search"
              className="searchbar_input" />
          </div>
        </div>
        <div className="right_container">
          {/* theme toggle */}
          <button className="theme_btn">
            {
              theme === "light" ? <MoonIcon className="night_mode" onClick={()=>settheme("dark")}/> : <SunIcon className="day_mode" onClick={()=> settheme("light")}/>
            }
          </button>
{/* 
          <img src={profile_image} alt="profile_picture" className="profile_picture" /> */}
          <UserButton/>

        </div>
      </div>

    </div>
  )
};
export default Navbar;