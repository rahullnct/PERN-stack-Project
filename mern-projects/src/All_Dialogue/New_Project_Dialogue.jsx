
import { X } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "../All_CSS/NewProject.css";
function New_Project_Dialogue({dialogueOpen,setdialogueOpen}){

    const[formtype,setformtype]=useState({
        project_name:"", description:"",status:"planning",priority:"",
        start_date:"",end_date:""
    })
    const[is_submit,set_submit]=useState(false);
    const {currentWorkspace}= useSelector((state)=> state.workspace)
    console.log("current_work_space:",currentWorkspace);



    function changehandler(event){
        setformtype((prev)=> ({
            ...prev,
            [event.target.name]: event.target.value
        }
            
        ))
    }
    function submithandler(event){
       event.preventDefault();
    }
    if(!dialogueOpen){
        return null
    }
    return(
        <div className="new_project_wrapper">
            <div className="new_project_container">
             <div className="heading_and_subheading">
                 <h2 className="new_project_heading">Create New Project</h2>
                  <button className="close_dialogue" onClick={()=>setdialogueOpen(false)} >
                    <X size={15}/>
                  </button>
                 <p className="subheading">In workspace spotify.inc</p>
             </div>

             <form onSubmit={submithandler}>
                 <label className="new_project_dialogue">Project Name</label>
                 <input 
                 className="name"
                 type="text"
                 name="project_name"
                 placeholder="Enter Project Name"
                 onChange={changehandler}
                 value={formtype.project_name}
                 required
                 />

                <label className="new_project_dialogue">Description</label>
                <textarea 
                className="project_description"
                placeholder="Enter Project Description..."
                name="description"
                onChange={changehandler}
                value={formtype.description}
                />
                 

                <div className="status">
                    <lable className="new_project_dialogue">Status</lable>
                    <select name="status" value={formtype.status} onChange={changehandler} required>
                        <option value="planning">Panning</option>
                        <option value="Active">Active</option>
                        <option value="Completed">Completed</option>
                        <option value="Onhold">Onhold</option>
                        <option value="Cancelled">Cancelled</option>
                        
                    </select>

              <label className="new_project_dialogue" >Priority</label>
                    <select name="priority" value={formtype.priority} onChange={changehandler} required>
                        <option value="easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>

                <div className="date_and_time">
                    <label className="new_project_dialogue">Start Date</label>
                    <input 
                    type="Date"
                    name="start_date"
                    value={formtype.start_date}
                    onChange={changehandler}
                    required
                    />

              <label className="new_project_dialogue">End Date</label>
                    <input 
                    type="Date"
                    name="end_date"
                    value={formtype.end_date}
                    onChange={changehandler}
                    required
                    />
                </div>
            <label className="new_project_dialogue">Project Lead</label>
            <select>
                <option value="No_lead">No Lead</option>
            </select>

          <label className="new_project_dialogue">Team Member</label>
            <select>
                <option value="rahulyadavkv01@gmail.com">rahulyadavkv01@gmail.com</option>
            </select>

            <div className="cancel_and_create">
               
                <button className="cancel_btn" onClick={()=>setdialogueOpen(false)}> Cancel</button>
                {is_submit === true ? ( <button className="Create_btn" onClick={()=>set_submit(false)}>Create...</button>):
                (<button className="Create_btn" onClick={()=>set_submit(true)}>Create</button>)
                }
                
            </div>
             </form>
            </div>
        </div>
    )
};
export default New_Project_Dialogue;