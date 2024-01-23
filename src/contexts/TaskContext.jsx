import { createContext, useReducer, useState } from "react";
import { taskReducer } from "../reducers/tasksReducer";
import { todoTasks } from "../../db/db";

//create the context, we can one or more context in same file
export const TaskContext = createContext({});

//! -----extra: advanced usage of context----
//TODO: we are using context and reducer altogether here
//we are creating a wrapper component for the context

const TaskContextProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(taskReducer, todoTasks);
    const [theme, setTheme] = useState("dark");

    return (
        <TaskContext.Provider value={{ dispatch: dispatch, tasks: tasks, theme: theme, setTheme: setTheme }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskContextProvider;