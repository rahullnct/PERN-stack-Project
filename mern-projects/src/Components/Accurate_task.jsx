import { useParams } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
function Accurate_task() {
    const { id } = useParams();
    const [comment, setcomments] = useState([]);
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
                    
                    </div>


                </div>
                <div className="right_section_container">

                </div>

            </div>

        </div>
    )
};
export default Accurate_task;