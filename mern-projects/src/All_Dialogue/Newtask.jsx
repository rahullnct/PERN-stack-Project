import { useState } from "react";
import { useSelector } from "react-redux";
import {Calendar} from "lucide-react";
import "../All_CSS/New_task.css";
function NewTask({setisopen,project_id}){
  
    const [newFormType,setNewFormType]=useState({
        title:"",description:"",type:"",priority:"",assignee:"",status:"",due_date:"",
    })
    const currentWorkspace= useSelector((state)=>state.workspace?.currentWorkspace || "no_current_workspace");
    console.log("check currentWorkspace",currentWorkspace);
    const project= currentWorkspace?.projects?.find((check)=> check.id === project_id);
    // console.log("project in new task dialogue:",project);
    let project_member=project?.members || [];
    console.log("project_memeber in new task dialogue:",project_member);
    let all_members=project_member?.map((item)=> item.user);
    console.log("project_members are:",all_members);
   
     const all_options={
        all_types:[
            {label:"all types",value:""},
            {label:"Tasks",value:"TASK"},
            {label:"Bugs",value:"BUG"},
            {label:"Feature",value:"FEATURE"},
            {label:"Improvments",value:"IMPROVEMENT"},
            {label:"Others",value:"OTHER"},
        ],
        all_status:[
            {label:"all status",value:""},
            {label:"To Do",value:"TO_DO"},
            {label:"In Progress",value:"IN_PROGRESS"},
            {label:"Done",value:"DONE"},
        ],
        all_priority:[
            {label:"all Proirity",value:""},
            {label:"Low",value:"LOW"},
            {label:"Medium",value:"MEDIUM"},
            {label:"High",value:"HIGH"},
        ],


    }
    function changehandler(event){
     setNewFormType((prev)=>(({
        ...prev,
        [event.target.name]:event.target.value
     })))
    }

 function submithandler(event){
    event.preventDefault();
    setNewFormType({
       title:"",description:"",type:"",priority:"",assignee:"",status:"",due_date:"", 
    })
 }
    return(
        <div className="new_task_wrappper">
            <div className="new_task_container">
          <h2>Create New Task</h2>
            <form onSubmit={submithandler}>
                <label>Title</label>
                <input 
                type="text"
                name="title"
                value={newFormType.title}
                onChange={changehandler}
                required
                />
                <label>Description</label>
               <textarea 
               name="description"
               value={newFormType.description}
               onChange={changehandler}
               />
               <div className="selection_container">
                <div className="type_priority">
           
            <div className="type_feild">
            <label htmlFor="type">Type</label>
                <select name="type" value={newFormType.type} onChange={changehandler}>
             {
                all_options.all_types.map((item)=>(
                    <option value={item.value}>
                          {item.label}
                    </option>
                ))
             }
            </select> 
            </div>
           
           <div className="priority_feild">
            <label htmlFor="priority">Priority</label>
            <select name="priority" value={newFormType.priority} onChange={changehandler}>
             {
                all_options.all_priority.map((item)=>(
                    <option value={item.value}>
                          {item.label}
                    </option>
                ))
             }
            </select>
           </div>
            
                </div>
                <div className="assignee_status">
                 <div className="assignee_feild">
                   <label htmlFor="assignee">Assignee</label>
                   <select name="assignee" value={newFormType.assignee} onChange={changehandler}>
                    <option value="all assignee">all assignee</option>
                    {
                        all_members.map((item)=>(
                            <option key={item.id} value={item.name}>{item.name}</option>
                        ))
                    }
                   </select>
                  
                 </div>
                
                <div className="status_feild">
               <label htmlFor="status">Status</label>
               <select name="status" value={newFormType.status} onChange={changehandler}>
                 {
                    all_options.all_status.map((item)=>(
                        <option value={item.value}>{item.label}</option>
                    ))
                 }
               </select>
                </div>
                </div>
              
               </div>
              <label htmlFor="due_date">Due Date</label>
              <div className="icon_with_calender">
                <Calendar size={20}/>
                <input 
              type="date"
              name="due_date"
              value={newFormType.due_date}
              onChange={changehandler}
              />
              </div>
              <div className="can_create_Tsk_btn">
                <button onClick={()=>setisopen(false)} className="cancel_btn">Cancel</button>
               <button className="tsk_btn" >Create Task</button>
              </div>
              
            </form>
            </div>
        </div>
    )
};
export default NewTask;