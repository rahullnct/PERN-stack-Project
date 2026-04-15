import { useMemo, useState } from "react";
import "../All_CSS/TaskTab.css";
import {useNavigate} from "react-router-dom";
function TaskTab({newProjects}){

  const project=newProjects;
  const navigate=useNavigate();
console.log("task in task_tab:",project);
    const[filters,setfilter]=useState({
        Type:"",Status:"",Priority:"",assignee:"",
    })

    const assigneeList = useMemo(() => {
    return Array.from(
      new Set(
        (project?.tasks || [])
          .map((item) => item.assignee?.name)
          .filter(Boolean)
      )
    );
  }, [project]);

  const[selectedTask,setselectedTask]=useState([]);
    // console.log("my assignee list",...assigneeList);
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
        all_assignee:[
            {label:"all assignee", value:""},
            ...assigneeList.map((item)=>({label:item,value:item}))
        ]


    }
    function filterhandler(event){
      setfilter((prev)=>(({
        ...prev,
        [event.target.name]:event.target.value
      })))
    }

    const filterTask=useMemo(()=>{
        return (project?.tasks || []).filter((item)=>{
            const {Type,Status,Priority,assignee}=filters;
            return (
                (!Type || item.type === Type ) &&
                (!Status || item.status === Status ) &&
                (!Priority || item.priority === Priority ) && 
                (!assignee || item.assignee?.name === assignee)
            )
        })
    },[filters,project])
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
            <select className="all_filters"  name="assignee" value={filters.assignee} onChange={filterhandler} >
                {
                    all_options.all_assignee.map((item)=>(
                        <option value={item.value}>{item.label}</option>
                    ))
                }
            </select> 
            </div>
        <div className="table_container">
         <table >
            <thead className="table_header">
           <tr>
            <th>
                <input 
                type="checkbox"
                onChange={()=> selectedTask.length <= 1 ? setselectedTask([]) : setselectedTask(project?.tasks?.map((item)=> item.id))}
                checked={selectedTask.length === project?.tasks?.length}
                />
                Title
            </th>
            <th>Type</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Assignee</th>
            <th>Due Date</th>
            </tr> 
            </thead>
          <tbody className="table_datas">
           
            {
                filterTask.map((item)=>(
                    <tr key={item.id} onClick={()=>navigate(`/accurate_task_detail/${item.id}`)}>
                    <td>
                        <input 
                        type="radio"
                        
                        />
                        {item.title}
                        </td>
                    <td>{item.type}</td>
                    <td>{item.priority}</td>
                    <td>{item.status}</td>
                    <td>{item.assignee?.name}</td>
                    <td>{item.due_date}</td>
                    </tr>
                    
                ))
            }
           
          </tbody>  
         </table>

        </div>
        </div>
    )
};
export default TaskTab;