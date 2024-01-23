import { useContext } from "react";
import Task from "./Task";
import { TaskContext } from "../contexts/TaskContext";

const TaskList = () => {
    const { tasks } = useContext(TaskContext);

    return (
        <ol>
            {
                tasks.map(task => <Task
                    key={task.id}
                    task={task}
                />)
            }
        </ol>
    );
};

export default TaskList;