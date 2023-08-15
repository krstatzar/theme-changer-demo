
import { createContext, useContext, useState } from "react"


export const useThemeContext = () => {
    return useContext(ThemeContext);
}


const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {


    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }


    return(

        <ThemeContext.Provider value={{toggleTheme, theme}}>
            < div className={`App ${theme}`}>
            {children}
            </div>
        </ThemeContext.Provider>
    )

}

   
