const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors()); // Enable CORS
// parse incoming requests with JSON payloads
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// create a connection to the database
const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: 'root',
    password: "password",
    database: 'capstone'
    ,
});

connection.connect(err => {
    if (err) {
        console.log(err.message)
        return;
    }
    console.log("Connected to MySQL database")
});

// parse incoming requests with JSON payloads
app.use(bodyParser.json());

app.get('/admin', (req, res) => {
    connection.query('CALL getVolunteerSignupsWithUsers()', (err, results) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(results[0]);
    });
});

// this is to post the log in info to my database
app.post('/login', (req, res) => {
    const { email, password, name } = req.body; // Add 'name' to the destructuring
    const checkLogin = `SELECT email, password, role FROM users WHERE email = ? AND password = ?`;
    const values = [email, password];
    connection.query(checkLogin, values, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal server error!');
        } else {
            if (result.length === 0) {
                res.status(401).send('Invalid username or password!');
            } else {
                const { email, role } = result[0];
                console.log(`User ${email} logged in successfully as ${role}!`);

                // Insert sign-in information into the database
                const insertSignIn = `INSERT INTO users (name, email, role) VALUES (?, ?, ?)`; // Modify the query to include 'name'
                const signInValues = [name, email, role]; // Add 'name' to the array
                connection.query(insertSignIn, signInValues, (err, result) => {
                    if (err) {
                        console.error(err);
                    }
                });

                res.status(200).json({ email, role });
            }
        }
    });
});

app.post('/Signup', (req, res) => {
    const volunteer = req.body;
    const email = volunteer.email;

    // look up user by email to get user_id
    const userQuery = `SELECT id FROM users WHERE email = '${email}'`;
    connection.query(userQuery, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            const userId = results[0].id;
            const volunteerQuery = `INSERT INTO volunteer_signup (volunteer_name, email, phone_number, interests, over18, user_id) VALUES ('${volunteer.volunteer_name}', '${volunteer.email}', '${volunteer.phone_number}', '${volunteer.interests}', '${volunteer.over18}', '${userId}')`;
            connection.query(volunteerQuery, (err, results) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send('Volunteer signup successful!');
                }
            });
        }
    })
});


// app.post('/register', (req, res)=>{
//     const name = req.body.name;
//     const email = req.body.email;
//     const password = req.body.password;
//     db.query(
//         "INSERT INTO users (name, email, password) VALUES (?,?,?)",
//         [name, email, password],
//         (err, result)=>{
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(result);
//             }
//         }
//     );
// });

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    const checkUser = `SELECT * FROM users WHERE email = ?`;
    const values = [email];
    connection.query(checkUser, values, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal server error!');
        } else {
            if (result.length > 0) {
                res.status(409).send('User already exists!');
            } else {
                const role = 'user';
                const insertUser = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
                const userValues = [name, email, password];
                connection.query(insertUser, userValues, (err, result) => {
                    if (err) {
                        console.error(err);
                        res.status(500).send('Internal server error!');
                    } else {
                        console.log(`User ${email} registered successfully!`);
                        res.status(200).send('User registered successfully!');
                    }
                });
            }
        }
    });
});

app.post('/contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    const insertContact = `INSERT INTO contact (name, email, subject, message) VALUES (?, ?, ?, ?)`;
    const contactValues = [name, email, subject, message];

    connection.query(insertContact, contactValues, (err, result) => {
        if (err) {
            console.error('Error inserting data into contact table:', err);
            res.status(500).send('Internal server error!');
        } else {
            console.log(`Contact data inserted successfully!`);
            res.status(200).send('Contact data inserted successfully!');
        }
    });
});




const port = 3001;
// start the server
app.listen(port, () => {
    console.log(`Connected to backend on port ${port}!`);
});




