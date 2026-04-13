// const mongoose = require('mongoose');
import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required.'],
        minLength: [3, 'The name should be atleast 3 characters long.'],
        maxLength: [40, 'The name should be atmax 40 characters long.']
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        unique: true,
        lowercase: true,
        minLength: [8, 'Email should be atleast 8 characters long.'],
        maxLength: [40, 'Email should be atmax 40 characters long.']
    },
    password: {
        type: String,
        required: [true, 'Password is required.'],
        minLength: [8, 'Password should be atleast 8 characters long.']
    }
});
export default userSchema;