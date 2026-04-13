import { useState } from "react";
import { useSelector } from "react-redux";

function NewTask({setisopen,project_id}){
  
    const [newFormType,setNewFormType]=useState({
        title:"",description:"",type:"",priority:"",assignee:"",status:"",date:"",
    })
    const currentWorkspace= useSelector((state)=>state.workspace?.currentWorkspace || "no_current_workspace");
    // console.log("check currentWorkspace",currentWorkspace);
    const project= currentWorkspace.projects.find((check)=> check.id === project_id);
    let project_member=project?.members;
    let all_members = project?.members.map((item) => item.user.name);
  
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
        // all_assignee:[
        //     {label:"all assignee", value:""},
        //     ...assigneeList.map((item)=>({label:item,value:item}))
        // ]


    }
    function changehandler(event){
     setNewFormType((prev)=>(({
        ...prev,
        [event.target.name]:event.target.value
     })))
    }
    return(
        <div className="new_task_wrappper">
            <div className="new_task_container">
          <h2>Create New Task</h2>
            <form>
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
           
            </form>
            </div>
        </div>
    )
};
export default NewTask;