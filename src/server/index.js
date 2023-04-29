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

app.post('/Signup', async (req, res) => {
    const { name, email, phone, interest } = req.body;
    console.log(`New Contact Form submission: ${name}, ${email}, ${phone}, ${interest}`);
    try {
        const conn = await db.getConnection();;
        const [rows, fields] = await conn.execute(
            'INSERT INTO volunteer_signups (volunteer_name, email, phone, interest) VALUES (?, ?, ?, ?)',
            [volunteer_name, email, phone, interest]
        );
        console.log(`Inserted ${rows.affectedRows} row(s)`);
        conn.release();
        res.send('Thanks for contacting us!');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
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


app.get('/admin', (req, res) => {
    const sql = 'SELECT * FROM volunteer_signups';

    connection.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.status(200).json(results);
        }
    });
});

const port = 3001;
// start the server
app.listen(port, () => {
    console.log(`Connected to backend on port ${port}!`);
});




