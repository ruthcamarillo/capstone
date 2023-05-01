import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../styles/Admin.css'
import TheNav from '../components/TheNav'

function Admin() {
    const [volunteerSignups, setVolunteerSignups] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/admin')
            .then(response => setVolunteerSignups(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <TheNav />
            <div className="adminForms">
                <h1>Volunteer Signups</h1>
                <div className="adminsection">
                    {volunteerSignups.map(signup => (
                        <div key={signup.id} className="volunteer-signup">
                            <p><strong>ID:</strong> {signup.id}</p>
                            <p><strong>Name:</strong> {signup.volunteer_name}</p>
                            <p><strong>Email:</strong> {signup.email}</p>
                            <p><strong>Phone Number:</strong> {signup.phone_number}</p>
                            <p><strong>Interests:</strong> {signup.interests}</p>
                            <p><strong>Over 18:</strong> {signup.over18}</p>
                            <p><strong>User ID:</strong> {signup.user_id}</p>
                            <p><strong>User Name:</strong> {signup.user_name}</p>
                            <p><strong>User Email:</strong> {signup.user_email}</p>

                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
}

export default Admin;