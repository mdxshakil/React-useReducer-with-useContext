import { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { generateNextId } from "../utils/generateId";

const AddTask = () => {
    const { tasks, dispatch } = useContext(TaskContext);
    const [text, setText] = useState("");

    const handleTaskAdd = (text) => {
        dispatch({
            type: "add",
            title: text,
            id: generateNextId(tasks)
        });
        setText("");
    }


    return (
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)} type="text" />
            <button onClick={() => { handleTaskAdd(text) }} className="btn">Add+</button>
        </div>
    );
};

export default AddTask;