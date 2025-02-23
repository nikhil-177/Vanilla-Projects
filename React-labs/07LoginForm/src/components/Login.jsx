import { useState } from 'react';
import './login.css';

export const LoginForm = () => {

    const [user, setUser] = useState({
        UserName : "",
        Password : "",
    })

//handling form submit because it's causing refresh in page
    const HandleFormSubmit = (event) => {
        event.preventDefault();
        // console.log(user);
        
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
                    <h1>Log In</h1>
                    <p>Please fill the form to Login to your Acount</p>
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
                      
                        <button type="submit">Log in</button>
                    </form>
                </div>
            </div>
        </>
    )
}