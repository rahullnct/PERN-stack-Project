import { useState } from "react";
import InviteMember from "../All_Dialogue/InviteMember";
import {UserPlus,Users,Activity,Shield} from "lucide-react";
import "../All_CSS/Team.css";
function Team(){

    const[dialogueOpen,setdialogueOpen]=useState(false);
    const[formtype,setformtype]=useState({
        team_member:""
    })
    function changeHandler(event){
        setformtype((prev)=>({
            ...prev,
            [event.target.name]:event.target.value
        }))
    }
    const teamCards=[
        {title:"Total Members",icon: Users, card_number:1},
        {title:"Active Projects",icon: Activity, card_number:2},
        {title:"Total tasks",icon: Shield , card_number:3},
    ]
    return(
        <div className="team_wrapper">
            <div className="team_container">
              <div className=" new_project_heading_button">
            <div className="heading_subheading">
<h2 className="project_heading">Team</h2>
<p className="project_subheading">Manage Team Member and their Contribution</p>
            </div>
            <button onClick={()=> setdialogueOpen(true)} className="project_dialogue_btn"><UserPlus size={15}/>Add member </button>
                    {dialogueOpen && <InviteMember dialogueOpen={dialogueOpen} setdialogueOpen={setdialogueOpen}/>}
        </div>
        <div className="team_cards">
            {
                teamCards.map((item,id)=>(
                    <div className="cards" key={id}>
                        <div className="my_cards">
                     <p className="team_title">{item.title}</p>
                     <p className="team_numbers">{item.card_number}</p>
                    </div>
                    <item.icon size={20}/>
                    </div>
                ))
            }
           
        </div>
          <input 
          className="search_team_member"
          type="text"
          placeholder="Search Team Member"
          name="team_member"
          value={formtype.team_member}
          onChange={changeHandler}
          />

          <table className="member_details">
            <thead>
                <tr className="all_members">
                <th className="table_headings">Name</th>
                 <th className="table_headings">Email</th>
                  <th className="table_headings">Role</th>
            </tr>
            </thead>
            <tbody>
                 <tr>
                <td>Rahul</td>
                <td>rahulyadavkv01@gmail.com</td>
                <td>Member</td>
            </tr>
             <tr>
                <td>Rahul</td>
                <td>rahulyadavkv01@gmail.com</td>
                <td>Member</td>
            </tr>
             <tr>
                <td>Rahul</td>
                <td>rahulyadavkv01@gmail.com</td>
                <td>Member</td>
            </tr>
            </tbody>
           
          </table>
            </div>
        </div>
    )
};
export default Team;