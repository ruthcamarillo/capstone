
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import '../styles/Register.css'


function Register() {
    const [nameReg, setnameReg] = useState("")
    const [emailReg, setEmailReg] = useState("")
    const [passwordReg, setPasswordReg] = useState("")
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const register = () => {
        Axios.post('http://localhost:3001/register', {
            name: nameReg,
            email: emailReg,
            password: passwordReg,
        }).then(() => {
            navigate("/home");
        }).catch((error) => {
            console.error(error);
            setMessage("Registration failed. Please try again.");
        });
        return false;
    }
    return (
        <div>

            <div className="App">
                <h1 className="loginTitle">Registration</h1>
                {/* {message && <h2 className="confirmation2">{message}</h2>} */}
                <div className="registration">

                    <form className="registerForm">
                        <label>Name</label>
                        <input type="text"
                            onChange={(e) => {
                                setnameReg(e.target.value);
                            }} required
                        />
                        <label>email</label>
                        <input type="text"
                            onChange={(e) => {
                                setEmailReg(e.target.value);
                            }} required
                        />
                        <label>Password</label>
                        <input type="password"
                            onChange={(e) => {
                                setPasswordReg(e.target.value);
                            }} required
                        />
                        <Link to="/home"><button className="submit" onClick={register}>Register</button></Link>
                    </form>

                </div >

            </div>
        </div>
    )
}
export default Register;
