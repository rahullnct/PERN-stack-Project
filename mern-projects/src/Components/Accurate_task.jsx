import { useParams } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
function Accurate_task() {
    const { id } = useParams();
    const [comment, setcomments] = useState([]);
    const[newComment,setNewComment]=useState("");
    console.log("task ID:",id);

    const {currentWorkspace}=useSelector((state)=>state.workspace);
    console.log("currentwork space in accurate_task:",currentWorkspace);
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

                </div>

            </div>

        </div>
    )
};
export default Accurate_task;