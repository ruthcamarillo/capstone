import React from "react";


function Admin(props) {
    const isAdmin = props.isAdmin;

    return (
        <div>
            {isAdmin ? (
                <h1>Welcome, Admin!</h1>
            ) : (
                <h1>Access Denied</h1>
            )}
        </div>
    );
}

export default Admin;