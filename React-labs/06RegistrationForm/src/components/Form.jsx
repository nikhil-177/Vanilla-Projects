import { useState } from 'react';
import './form.css';

export const RegistrationForm = () => {

    const [user, setUser] = useState({
        FirstName : "",
        LastName : "",
        Email : "",
        Password : "",
        PhoneNumber : ""
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
                    <h1>Sign Up</h1>
                    <p>Please fill the form to create an Account</p>
                    <form onSubmit={HandleFormSubmit}>
                        <label htmlFor="firstname">First Name</label>
                        <input type="text"
                        name="FirstName"
                        id="firstname"
                        value={user.FirstName}
                        onChange={(e) => ChangeInputData(e)}
                        required/>

                        <label htmlFor="lastname">Last Name</label>
                        <input type="text"
                        name="LastName"
                        id="lastname"
                        value={user.LastName}
                        onChange={(e) => ChangeInputData(e)}
                        required/>

                        <label htmlFor="email">E-mail</label>
                        <input type="email"
                        name="Email"
                        id="email"
                        value={user.Email}
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

                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="number" 
                        name="PhoneNumber"
                        id="phoneNumber"
                        value={user.PhoneNumber}
                        onChange={(e) => ChangeInputData(e)}
                        required/>

                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        </>
    )
}