// const mongoose = require('mongoose');
// require('dotenv').config();
import userSchema from './userSchema.js';
import mongoose from 'mongoose';
import 'dotenv/config';
import bcrypt from 'bcrypt';
import User from './userModel.js';

async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('DB connected!');
    } catch (err) {console.log('Error connecting to DB:', err)}
}
connect();

const User = mongoose.model('User', userSchema);
async function insert() {
    const saltRounds = 10;
    const usersToInsert = [
        {
            name: "aman_dev",
            email: "aman@example.com",
            password: await bcrypt.hash("securePassword123", saltRounds)
        },
        {
            name: "sigma_coder",
            email: "sigma@webdev.com",
            password: await bcrypt.hash("securePassword456", saltRounds)
        },
        {
            name: "javascript_pro",
            email: "pro@js.org",
            password: await bcrypt.hash("securePassword789", saltRounds)
        },
        {
            name: "node_master",
            email: "master@node.io",
            password: await bcrypt.hash("securePassword000", saltRounds)
        },
        {
            name: "mongo_db_fan",
            email: "fan@database.net",
            password: await bcrypt.hash("securePassword111", saltRounds)
        }
    ];

    try {
        const docs = await User.insertMany(usersToInsert);
        console.log(`${docs.length} users were inserted in the DB.`);
    }catch (err) {console.log('Error inserting users:', err)}
}
insert();