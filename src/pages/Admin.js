import React from "react";

function Admin(props) {
    console.log('PROPS', props)
    const adminUser = props.adminUser
    // Tori is testing something!
    // console.log('ADMIN USER CONTENT', adminUser.isAdmin)

    // const isAdmin = props.adminUser && props.adminUser.isAdmin;
    // console.log('Grabbin', props.adminUser)
    // console.log('isAdmin:', isAdmin); // add this line to check the value of isAdmin prop
    // console.log('isAdmin:', props.adminUser && props.adminUser.isAdmin);

    // console.log('isAdmin:', props.adminUser && props.adminUser.isAdmin);

    //this returns an object
    // const isAdmin = props.adminUser;
    // const isAdmin = props.adminUser && props.adminUser.isAdmin;
    // console.log('Props.adminUser', props.adminUser)


    // console.log('isAdmin type:', typeof isAdmin);
    // console.log('isAdmin value:', isAdmin);



    // let message;
    // if (isAdmin.isAdmin === true) {
    //     message = <h1>Welcome, Admin!</h1>;
    //     console.log('yah', isAdmin)
    // } else if (!isAdmin.isAdmin) {
    //     message = <h1>Access Denied</h1>;
    //     console.log('Nah', isAdmin)

    // };
    // console.log('adminUser:',);


    return (
        <div> Show me this message!</div>
        // <div>
        //     {message}
        // </div>

        // <div> Hey Ruth </div>
        // <div>
        //     {props.adminUser && props.adminUser.isAdmin ? (
        //         <h1>Welcome, Admin!</h1>
        //     ) : (
        //         <h1>Access Denied</h1>
        //     )}
        // </div>
    );
}

export default Admin;