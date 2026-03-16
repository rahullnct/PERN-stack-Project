import { useState } from "react";
import {X} from "lucide-react";
import "../All_CSS/NewWorkspace.css";
function NewWorkspace({setnew_workspace}) {
    const [inputStates, setInputStates] = useState({
        name: "", slug: ""
    })
    function changeHandler(event) {
        setInputStates((perv) => (({
            ...perv,
            [event.target.name]: event.target.value
        })))
    }
    function submitHandler(event) {
        event.preventDefault();
        setInputStates({
            slug: "", name: ""
        })
    }
    return (
        <div className="new_workspace_wrapper">
            <div className="new_workspace_container">
                <div className="new_workspace_heading_Container">
                     <h3 className="new_workspace_heading">Create Organization</h3>
                     <X  size={15} onClick={()=>setnew_workspace(false)}/>
                </div>
               
                <p className="logo_heading">Logo</p>
                <div className="image_container">
                    <input
                        className="logo_image"
                        type="file"
                        id="image"

                    />
                    <div className="image_size_Container">
                        <button className="image_upload_btn">Upload</button>
                        <p className="image_size">recommended size 10MB</p>
                    </div>
                </div>
                <label htmlFor="name">Name</label>
                <input
                    className="name_organization"
                    type="text"
                    placeholder="enter organization name"
                    name="name"
                    value={inputStates.name}
                    onChange={changeHandler}
                />
                <label htmlFor="slug">Slug</label>
                <input
                    className="slug_organization"
                    type="text"
                    placeholder="enter slug name"
                    name="slug"
                    value={inputStates.slug}
                    onChange={changeHandler}
                />

                <button className="create_organization_btn" onClick={submitHandler}> Create organization</button>
            </div>
        </div>
    )
};
export default NewWorkspace;