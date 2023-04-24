
const db = require('./src/connection/index.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/Signup', async (req, res) => {
    const { name, email, phone, comment } = req.body;
    console.log(`New Contact Form submission: ${name}, ${email}, ${phone}, ${comment}`);
    try {
        const conn = await db.getConnection();;
        const [rows, fields] = await conn.execute(
            'INSERT INTO volunteer_signups (name, email, subject,message) VALUES (?, ?, ?, ?)',
            [name, email, subject, message]
        );
        console.log(`Inserted ${rows.affectedRows} row(s)`);
        conn.release();
        res.send('Thanks for contacting us!');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }

});