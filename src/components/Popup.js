import React, { useState } from "react"
import { Link } from 'react-router-dom';
import '../styles/Popup.css'
import LoginForm from "./LoginForm";
import Admin from "../pages/Admin";

function Popup(props) {

    const adminUser = {
        email: "rooot@gmail.com",
        password: "admin123",
        isAdmin: true
    }
    const [user, setUser] = useState({ name: "", email: "" });
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if (details.email === adminUser.email && details.password === adminUser.password) {
            console.log("Your In Gang!")
            setUser({
                name: details.name,
                email: details.email

            })
        }
        else {
            console.log("Not Admin Bud!")
            setError("Not Admin Bud!")
        }
    }

    const Logout = () => {
        setUser({ name: "", email: "" });
    }

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
                {props.children}

                {(user.email != "") ? (

                    <div>
                        <h2>Welcome, <span>{user.name}</span></h2>
                        <Link to="/Admin">Go to Admin Page</Link>
                        <button onClick={Logout}> Logout</button>
                    </div>

                ) : (<LoginForm Login={Login} error={error} />)}
            </div>
        </div>
    ) : "";

};

export default Popup;
