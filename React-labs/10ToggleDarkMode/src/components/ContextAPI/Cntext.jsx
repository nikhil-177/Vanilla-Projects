import { createContext,useState } from "react";


export const ThemeContext = createContext();

export const DarkProvider = ({children}) => {
    const [theme, setTheme] = useState("Dark")

    const ToggleDarkMode = () => {
        return setTheme((prevTheme) => (prevTheme === "Dark" ? "Light" : "Dark"))
    }

    return <ThemeContext.Provider value={{theme,ToggleDarkMode}} >
        {children}
    </ThemeContext.Provider>
}

// custom Hook

