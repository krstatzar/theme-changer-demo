import { useContext } from "react"
import { useThemeContext } from "./ThemeContext"

export function Header(){
const {toggleTheme} = useThemeContext();
const {theme} = useThemeContext();

    return (
        <div className="header">
            <h1>Theme Changer Demo</h1>
            <button onClick={toggleTheme}>Change to {theme === 'light' ? 'dark' : 'light'}</button>
        </div>
    )
}