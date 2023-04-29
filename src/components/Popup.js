// import React, { useState } from "react"
// import { Link } from 'react-router-dom';
// import '../styles/Popup.css'
// import LoginForm from "./LoginForm";
// import Admin from "../pages/Admin";

// function Popup(props) {

//     const adminUser = {
//         name: "Admin",
//         email: "rooot@gmail.com",
//         password: "admin123",
//         isAdmin: true
//     }

//     const [user, setUser] = useState({ name: "", email: "" });
//     const [error, setError] = useState("");

//     const Login = details => {
//         console.log(details);

//         if (details.email === adminUser.email && details.password === adminUser.password) {
//             console.log("Your In Gang!")
//             setUser({
//                 name: details.name,
//                 email: details.email,
//                 isAdmin: true
//             })
//         }
//         else {
//             console.log("Not Admin Bud!")
//             setError("Not Admin Bud!")
//         }
//     }

//     const Logout = () => {
//         setUser({ name: "", email: "" });
//     }

//     return (props.trigger) ? (
//         <div className="popup">
//             <div className="popup-inner">
//                 <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
//                 {props.children}

//                 {(user.email != "") ? (

//                     <div>
//                         {isAdmin === true ? (
//                             <h2>Welcome, Admin!</h2>,
//                             console.log(`is actually in`)
//                         ) : isAdmin === false ? (
//                             <h2>Access Denied</h2>
//                         ) : (
//                             <h2>Loading...</h2> // Add a loading message if isAdmin is undefined
//                         )}
//                     </div>

//                 ) : (<LoginForm Login={Login} error={error} />)}
//             </div>
//         </div>
//     ) : "";

// };

// export default Popup;

// import React, { useState } from "react"
// import { Link } from 'react-router-dom';
// import '../styles/Popup.css'
// import LoginForm from "./LoginForm";


// function Popup(props) {

//     const adminUser = {
//         email: "rooot@gmail.com",
//         password: "admin123",
//     }
//     const [user, setUser] = useState({ name: "", email: "" });
//     const [error, setError] = useState("");

//     const Login = details => {
//         console.log(details);

//         if (details.email === adminUser.email && details.password === adminUser.password) {
//             console.log("Your In Gang!")
//             setUser({
//                 name: details.name,
//                 email: details.email,
//                 isAdmin: true

//             })
//         }
//         else {
//             console.log("Not Admin Bud!")
//             setError("Not Admin Bud!")
//         }
//     }

//     const Logout = () => {
//         setUser({ name: "", email: "" });
//     }

//     return (props.trigger) ? (
//         <div className="popup">
//             <div className="popup-inner">
//                 <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
//                 {props.children}

//                 {(user.email != "") ? (

//                     <div>
//                         <h2>Welcome, <span>{user.name}</span></h2>

//                         <button onClick={Logout}> Logout</button>
//                     </div>

//                 ) : (<LoginForm Login={Login} error={error} />)}
//             </div>
//         </div>
//     ) : "";

// };

// export default Popup;

import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import '../styles/Popup.css'
import LoginForm from "./LoginForm";
import Admin from "../pages/Admin";

function Popup(props) {

    const adminUser = {
        name: "Admin",
        email: "rooot@gmail.com",
        password: "admin123",
        isAdmin: true
    }



    const [user, setUser] = useState({ name: "", email: "", isAdmin: false });
    const [error, setError] = useState("");

    const Login = details => {
        console.log('Details', details);
        console.log('Admin', adminUser)

        if (details.email === adminUser.email && details.password === adminUser.password) {
            console.log("Your In Gang!")
            setUser({
                name: details.name,
                email: details.email,
                isAdmin: true
            })
            // useEffect(() => {
            //     console.log(isAdmin)
            // }, [isAdmin]);
        }
        else {
            console.log("Not Admin Bud!")
            setError("Not Admin Bud!")
        }
    }

    const Logout = () => {
        setUser({ name: "", email: "", isAdmin: false });
    }

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
                {props.children}

                {(user.email != "") ? (

                    <div>
                        <h2>Welcome, <span>{user.name}</span></h2>
                        <Link to="/admin"> Go to Admin Page</Link>
                        (<Admin adminUser={user} />)
                        <button onClick={Logout}> Logout</button>

                    </div>

                ) : (<LoginForm Login={Login} error={error} />)}
            </div>
        </div>
    ) : "";

};

export default Popup;

