export const generateNextId = (tasks) => {
    const maxId = tasks.reduce((prev, next) => prev && prev.id > next.id ? prev.id : next.id, 0)
    return maxId + 1
}