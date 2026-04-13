import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import User from './config/userModel.js';
import bcrypt from 'bcrypt';
import cors from 'cors';

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// enable CORS for all routes
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // allow cookies/headers if needed
}));

app.listen(process.env.PORT, () => {console.log('App Started!')});

async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('DB connected!');
    } catch (err) {console.log('Error connecting to DB:', err)}
}
connect();

app.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const doc = await User.findOne({email: email});
    if (!doc) res.json({user: 0, msg: 'Email does not exist.'});
    else{
        const isMatch = await bcrypt.compare(password, doc.password);
        if (isMatch) res.json({_id: doc._id});
        else res.json({user: 1 , msg: 'Password is wrong.'});
    }
});