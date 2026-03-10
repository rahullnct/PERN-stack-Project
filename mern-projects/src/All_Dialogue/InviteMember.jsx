import { useState } from "react";
import {UserPlus} from "lucide-react";
import {useSelector} from "react-redux";
import "../All_CSS/InviteMember.css";
function InviteMember({dialogueOpen,setdialogueOpen}){
    const[formtype,setformtype]=useState({
        email:"",role:""
    })

    function changehandler(event){
        setformtype((prev)=>({
            ...prev,
            [event.target.name]:event.target.value
        }))
    }
    const {currentWorkspace} = useSelector((state)=> state.workspace)
    console.log("invite_member:",currentWorkspace);

    function submithandler(event){
          event.preventDefault();
          setformtype({
            email:"",
            role:""
          })
    }
    return dialogueOpen && (
        <div className="invite_member_wrapper">
            <div className="invite_member_container">

                <h3 className="team_dialogue_heading"><UserPlus size={15}/> Invite Team Member</h3>
                <p className="team_dialogue_subheading">inviting to workspace:{currentWorkspace.name}</p>
            <form onSubmit={submithandler}>
                <input 
                type="text"
                placeholder="enter email"
                name="email"
                value={formtype.email}
                onChange={changehandler}
                />

                <select name="role" value={formtype.role} onChange={changehandler}>
                    <option value="member">Member</option>
                    <option value="admin">Admin</option>
                </select>

                <div className="some_btns">
                   <button type="button" className="cancel_btn" onClick={()=>setdialogueOpen(false)}>Cancel</button>
                   <button className="send_invitation_btn">Send Invitation</button>
                </div>
            </form>
            </div>
           
        </div>
    )
}
export default InviteMember;