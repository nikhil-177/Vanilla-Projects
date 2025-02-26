import { ThemeContext } from "./ContextAPI/Cntext"
import { use } from "react"

export const InDarkMode = () => {
    const {theme,ToggleDarkMode} =  use(ThemeContext);

    return (
        <>
            <div className={`w-screen h-screen flex flex-col justify-center items-center ${
                theme === "Light" ? "bg-gray-800 text-white" : "bg-white"
            }`}>
                <h1 className="p-1.5 text-2xl">Welcome to my Website</h1>
                <p  className="p-1.5 text-2xl">You are in {theme === "Dark"? "Light" : "Dark"} mode</p>
                <button className="bg-blue-700 p-4 mt-1 rounded-3xl" onClick={ToggleDarkMode}>Switch to {theme} mode</button>
            </div>
        </>
    )
}