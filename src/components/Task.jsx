import { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";

const Task = ({ task }) => {
    const { title, id, isCompleted } = task;
    const [isEditing, setIsEditing] = useState(false);
    const { dispatch } = useContext(TaskContext);

    let editModeContent;
    if (isEditing) {
        editModeContent =
            <>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => dispatch({
                        type: "edit",
                        title: e.target.value,
                        id
                    })} />
                <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="btn"
                >
                    Save
                </button>
            </>
    }


    return (
        <li className="list-item">
            <input type="checkbox" checked={isCompleted} onChange={(e) => dispatch({
                type: "complete",
                id,
                isCompleted: e.target.checked
            })} />
            {!isEditing && <span>{title}</span>}
            {isEditing && editModeContent}
            <div className="btn-container">
                {!isEditing && <button className="btn" onClick={() => setIsEditing(!isEditing)}>Edit</button>}
                <button className="btn" onClick={() => dispatch({
                    type: "delete",
                    id
                })}>Delete</button>
            </div>
        </li>
    );
};

export default Task;