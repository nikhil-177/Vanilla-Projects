import { useState} from "react"
import { MdDeleteForever, MdLocalGasStation } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";


export const Todo = () => {

    const [inputValue, setInputValue] = useState([]);
    const [task, setTask] = useState([]);
    
    function handleInputChange(value) {
        setInputValue(value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if(task.includes(inputValue)){
            setInputValue("");
            return;
        }

        if(!inputValue) return;
        setTask((prevValue) => [...prevValue,inputValue] )
        setInputValue("");
        
        // console.log(task);
    }

    function deleteFcn(text) {
       const newTask = task.filter(event => event !== text)
       console.log(newTask);
       setTask(newTask);
       
    }

    const [textHighlight, setTextHighlight] = useState(false)
    const [first, setFirst] = useState("")
    function checkedOrNot(text) {
     setTextHighlight(!textHighlight)

      const search = task.find(event => event === text);
     setFirst(search);
    }
    
    return (
        <>
            <div className="container bg-linear-to-r from-cyan-400 to-blue-500 min-w-screen h-screen flex justify-center">
                <div id="maincontainer" className="border-2 w-[30%]">
                    <h1>Todo App</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" autoComplete="off" placeholder="Enter Text..." className="bg-white"
                        value={inputValue}
                        onChange={(e) => handleInputChange(e.target.value)}/>
                        <button type="submit" className="bg-red-400">Enter</button>
                    </form>
                    <section>
                        <ul>
                            {
                                task.map((text, index) => {
                                    return (
                                        <li key={index}>
                                            <span className={(first  === text) ? "Checked":"UnChecked"} >{text}</span>
                                            < FaCheckCircle onClick={() => checkedOrNot(text)} />
                                            < MdDeleteForever onClick={() => deleteFcn(text)} />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </section>
                </div>
            </div>
        </>
    )
}