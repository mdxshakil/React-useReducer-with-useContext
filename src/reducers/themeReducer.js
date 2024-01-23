export const themeReducer = (state, action) => {
    switch (action.type) {
        case "toggle-theme":
            return action.theme
        default:
            throw new Error("Invalid action")
    }
}