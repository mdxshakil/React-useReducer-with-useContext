export const taskReducer = (tasks, action) => {
    switch (action.type) {
        case "add": {
            return [
                ...tasks,
                {
                    id: action.id,
                    title: action.title,
                    isCompleted: false
                }
            ]
        }
        case "edit": {
            return tasks.map(task => {
                if (task.id === action.id) {
                    return {
                        ...task,
                        title: action.title
                    }
                } else {
                    return task
                }
            })
        }
        case "delete": {
            return tasks.filter(task => task.id !== action.id)
        }
        case "complete": {
            return tasks.map(task => {
                if (task.id === action.id) {
                    return {
                        ...task,
                        isCompleted: action.isCompleted
                    }
                } else {
                    return task
                }
            })
        }
        default:
            throw new Error("Unexpected action")
    }
}