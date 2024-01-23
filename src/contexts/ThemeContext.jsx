import { createContext, useEffect, useReducer } from "react";
import { themeReducer } from "../reducers/themeReducer";

export const ThemeContext = createContext({});


const ThemeContextProvider = ({ children }) => {
    const [theme, dispatch] = useReducer(themeReducer, "dark")

    //set the theme each time the theme changes
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;