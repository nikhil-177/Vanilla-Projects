import { useState } from 'react';
import './Contact.css';

export const ContactForm = () => {

    const [user, setUser] = useState({
        UserName : "",
        Password : "",
        Message : ""
    })

//handling form submit because it's causing refresh in page
    const HandleFormSubmit = (event) => {
        event.preventDefault();
        console.log(user);
        
    }

//saving input data send by user in user object
    const ChangeInputData = (e) => {
        const {name , value} = e.target;
        setUser((prev) => ({...prev , [name]:value}))        
    }
    
    const [showPassword, setShowPassword] = useState(false)
    

    return (
        <>
            <div className="main-container">
                <div className="container">
                    <h1>Contact Me</h1>
                    <p>Please fill the form to Contact me</p>
                    <form onSubmit={HandleFormSubmit}>
                        <label htmlFor="userName">Username</label>
                        <input type="text"
                        name="UserName"
                        id="userName"
                        value={user.UserName}
                        onChange={(e) => ChangeInputData(e)}
                        required/>

                        <label htmlFor="password">Password</label>
                        <div>
                            <input type={showPassword ? "text" : "password"}
                            name="Password"
                            id="password"
                            value={user.Password}
                            onChange={(e) => ChangeInputData(e)}
                            required/>

                            <button
                            onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "🤭" : "🤨"}
                            </button>
                        </div>

                        <label htmlFor="message">Message</label>
                        <textarea
                        rows={5}
                        name="Message"
                        id="message"
                        colu
                        value={user.Message}
                        onChange={(e) => ChangeInputData(e)}
                        required/>

                      
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}