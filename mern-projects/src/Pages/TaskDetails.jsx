import { useState } from "react";
import { useSelector } from "react-redux";
import { MessageCircle,Pencil } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import "../All_CSS/Task_Details.css";
function TaskDetails(){
    const[searchParams]=useSearchParams();
    const projectId=searchParams.get("projectId");
    // console.log("projectID:",projectId)
    const taskId=searchParams.get("taskId");
//   console.log("current path:", window.location.pathname);
   

    // console.log("projectId in taskdetails:",projectId);
    // console.log("taskId in taskdetails:",taskId);
    const [comment, setcomments] = useState([]);
        const[newComment,setNewComment]=useState("");

         const {currentWorkspace}=useSelector((state)=>state.workspace);
    // console.log("currentwork space in accurate_task:",currentWorkspace);
     const checkProject=currentWorkspace?.projects?.find((item)=> item.id === projectId)
     console.log("checkProject:",checkProject)
     const checkTask=checkProject?.tasks?.find((new_item)=> new_item.id === taskId)
    //  console.log("checkTask_Details:",checkTask)
  
     return (
        <div className="accurate_task_wrapper">
            <div className="accurate_task_container">
                <div className="left_section_container">
                    <div className="chat_section">
                        <h3 className="comments_heading"><MessageCircle size={20} /> Task Discussion({comment.length})</h3>
                    <div className="all_Comments">
                    {
                        comment.length > 0 ?(
                            <div>all Comments</div>

                        ) : 
                        (<p className="no_comments">No comments yet! be the first</p>)
                    }

                    </div>
                    <div className="comment_post_section">
                        <textarea 
                     placeholder="write a comment"
                     value={newComment}
                     name="newComment"
                     onChange={(event)=> setNewComment(event.target.value)}
                     />
                     <button className="comment_post_btn" >Post</button> 
                    </div>
                    </div>


                </div>
                <div className="right_section_container">
                         <div className="first_right_container">
                             <h2 className="new_task_title">{checkTask?.title}</h2>
                             <div className="task_main_details">
                              <div className="task_status_container">
                                <span>{checkTask?.status}</span>
                              </div>
                              <div className="task_type_container">
                                <span>{checkTask?.type}</span>
                              </div>
                               <div className="task_priority_container">
                                <span>{checkTask?.priority}</span>
                              </div>
                             </div>
                             <p className="task_description">{checkTask.description}</p>
                             <div className="assignee_details">
                                <span className="assignee_name">{checkTask?.assignee?.name}</span>
                                <p className="task_due_details">{checkTask?.due_date}</p>
                             </div>
                         </div>
                         <div className="second_right_container">
                             <h2 className="new_project_Details">Project Details</h2>
                             <h3 className="project_name"><Pencil size={15}/>{checkProject.name}</h3>
                             <p className="project_start_date">Porject Start Date: {checkProject?.start_date}</p>
                             <p className="project_Details">Status:{checkProject.status}   priority:{checkProject?.priority}   progress:0%</p>
                         </div>
                     
                </div>

            </div>

        </div>
    )

};
export default TaskDetails;