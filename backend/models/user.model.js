const { required, types, string } = require('joi');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {

        type: String, // or string directly
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        // unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        select: false // in future if we retive data password will  be hidden and wont be  retieved
    },
    role: {
        type: String,
        enum: ["mentor", "student"],
        default: null // Initially null, can be set later
    }
})



userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8);
    }
    next();
})

userSchema.methods.isMatched = async function (password) {  // we can axcess this method using usermodel;
    const isMatched = await bcrypt.compare(password, this.password)
    return isMatched;
}

// to optimised search operation
userSchema.index({email:1});

const usermodel = mongoose.model('user', userSchema)


module.exports = usermodel;

