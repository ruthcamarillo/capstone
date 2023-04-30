import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Admin.css'

function Admin() {
    const [volunteerSignups, setVolunteerSignups] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/admin')
            .then(response => setVolunteerSignups(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Volunteer Signups</h1>
            {volunteerSignups.map(signup => (
                <div key={signup.id} className="volunteer-signup">
                    <p><strong>ID:</strong> {signup.id}</p>
                    <p><strong>Name:</strong> {signup.volunteer_name}</p>
                    <p><strong>Email:</strong> {signup.email}</p>
                    <p><strong>Phone Number:</strong> {signup.phone_number}</p>
                    <p><strong>Interests:</strong> {signup.interests}</p>
                </div>
            ))}
        </div>
    );
}

export default Admin;