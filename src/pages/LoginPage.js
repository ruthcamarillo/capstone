
import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

import '../styles/LoginPage.css'

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        fetch("http://localhost:3001/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.role === "admin") {
                    navigate("/admin");
                } else {
                    navigate("/home");
                }
                // handle successful login
            })
            .catch((err) => {
                console.error(err);
                setErrorMessage(<h4>Incorrect email or password. Click <Link to="/register">here</Link> to register.</h4>);
                // handle login error
            });
    };

    return (
        <div className="formlogin">

            <form onSubmit={handleLogin} className="form">
                <p class="title">Log In </p>
                <p class="message">Log in now and get full access to our site. </p>
                <p class="message"> If you dont have an account Click <Link to="/register">here</Link> to register.</p>
                {errorMessage && <div className="error-message">{errorMessage}</div>}


                <label>
                    <input name="email"
                        placeholder="Email"
                        className="input-field"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} required />

                </label>

                <label>
                    <input name="password"
                        placeholder="Password"
                        className="input-field"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} required />

                </label>
                <button className="submit">Submit</button>
            </form>

        </div>
    );
}


