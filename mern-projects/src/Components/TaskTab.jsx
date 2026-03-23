import { useMemo, useState } from "react";

function TaskTab({newProjects}){

  const project=newProjects;
console.log("task in task_tab:",project);
    const[filters,setfilter]=useState({
        Type:"",Status:"",Priority:"",
    })
    const all_options={
        all_types:[
            {label:"all types",value:""},
            {label:"Tasks",value:"TASKS"},
            {label:"Bugs",value:"BUGS"},
            {label:"Feature",value:"FEATURES"},
            {label:"Improvments",value:"IMPROVMENTS"},
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
        ]
    }
    function filterhandler(event){
      setfilter((prev)=>(({
        ...prev,
        [event.target.name]:event.target.value
      })))
    }

    const filterTask=useMemo(()=>{
        return project?.tasks?.filter((item)=>{
            const {Type,Status,Priority}=filters;
            return (
                (!Type || item.type === Type ) &&
                (!Status || item.status === Status ) &&
                (!Priority || item.priority === Priority ) 
            )
        })
    },[filters,project?.tasks])
    console.log("filter_task_function:",filterTask);
    return(
        <div className="task_tab_container">
            <div className="filter_containers"> 
                <select className="all_filters"  name="Type" value={filters.Type} onChange={filterhandler} >
                {
                    all_options.all_types.map((item)=>(
                        <option value={item.value}>{item.label}</option>
                    ))
                }
            </select> 
               <select className="all_filters"  name="Status" value={filters.Status} onChange={filterhandler} >
                {
                    all_options.all_status.map((item)=>(
                        <option value={item.value}>{item.label}</option>
                    ))
                }
            </select> 
             <select className="all_filters"  name="Priority" value={filters.Priority} onChange={filterhandler} >
                {
                    all_options.all_priority.map((item)=>(
                        <option value={item.value}>{item.label}</option>
                    ))
                }
            </select> 
            </div>
           
        </div>
    )
};
export default TaskTab;