import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
    const { theme, dispatch } = useContext(ThemeContext);

    return (
        <nav className="nav-bar">
            <button
                className="btn"
                onClick={() => dispatch({ type: "toggle-theme", theme: theme === "dark" ? "light" : "dark" })}
            >
                Theme
            </button>
        </nav>
    );
};

export default Navbar;
