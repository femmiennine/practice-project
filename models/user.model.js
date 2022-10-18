const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        trim: true,
        minlength: [3, 'name must have atleast 3 characters'],
        maxlength: [3, 'name must have atleast 3 characters'],
        lowercase: true
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        minlength: [3, 'password must have atleast 3 characters']
    },
    image: {
        type: String,
        required: [true, 'image is required']
    },
    isAdmin: {
        type: Number,
        required: [true, 'isAdmin is required']
    },
    isVerified: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

exports.User = model('Users', userSchema);
