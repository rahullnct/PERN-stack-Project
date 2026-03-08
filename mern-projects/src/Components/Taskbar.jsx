
import { useState, useEffect} from "react";
import {UserRound,TriangleAlert,Clock} from "lucide-react";
import { useSelector } from "react-redux";
import "../All_CSS/Taskbar.css";

function Taskbar(){
    const {currentWorkspace}=useSelector((state)=> state.workspace)
    const[task,setTask]=useState([]);
    // console.log("all tasks",task);
    const user={id:'user_1'};
    useEffect(()=>{
     if(currentWorkspace){
        setTask(currentWorkspace.projects.flatMap((projects)=> projects.tasks));
     }
},[currentWorkspace])

const my_task= task.filter((item)=> item.assigneeId === user.id);
const in_progressTask= task.filter((item)=> item.status === 'IN_PROGRESS');
const overdueTask=task.filter((item)=> item.due_date && new Date(item.due_date) < new Date(item.due_date) && item.status !== 'DONE')

console.log("my_task:",my_task);

    return(
        <div className="my_taskbars">
             <div className="right_side_card_Containers">
          <div className="task_name_heading">
                            <div className="task_with_heading">
                                <UserRound size={15}/>
                                <h3 className="my_task_heading">My tasks</h3>
                            </div> 
                              <span className="total_task">{my_task.length}</span> 
                          </div>
                          {
                            my_task.slice(0,3).map((item,index)=>(
                                <div className="all_tasks" key={index}>
                                 <p className="task_title">{item?.title}</p>
                                    <p className="task_priority">{item.type}-{item.priority} priority</p>
                                </div>
                            ))
                         }

                        
                         </div>
                         <br />
                         <div className="right_side_card_Containers">
                           <div className="task_name_heading">
                            <div className="task_with_heading">
                                <TriangleAlert size={15} />
                                <h3 className="my_task_heading">Overdue Task</h3>
                            </div> 
                              <span className="total_task">{overdueTask.length}</span> 
                          </div>
                          
                          {
                             overdueTask.length === 0 ? (
                                <div className="overdue_task">
                                    No Task overdue
                                </div>
                             ):

                            overdueTask.slice(0,3).map((item,index)=>(
                                <div className="all_tasks" key={index}>
                                 <p className="task_title">{item?.title}</p>
                                    <p className="task_priority">{item.type}-{item.priority} priority</p>
                                </div>
                            ))
                         }
                         </div>
                         <br />
                         <div className="right_side_card_Containers">
                           <div className="task_name_heading">
                            <div className="task_with_heading">
                                <Clock size={15}/>
                                <h3 className="my_task_heading"> InProgress Task</h3>
                            </div> 
                              <span className="total_task">{in_progressTask.length}</span> 
                          </div>
                          
                          {
                             in_progressTask.length === 0 ? (
                                <div className="overdue_task">
                                    no Inprogress task
                                </div>
                             ):

                            in_progressTask.slice(0,3).map((item,index)=>(
                                <div className="all_tasks" key={index}>
                                 <p className="task_title">{item?.title}</p>
                                    <p className="task_priority">{item.type}-{item.priority} priority</p>
                                </div>
                            ))
                         }
                         </div>
        </div>
       
    )
};
export default Taskbar;