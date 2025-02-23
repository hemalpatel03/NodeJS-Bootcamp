const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String
    },
    salary: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

personSchema.pre('save', async function (next) {
    const person = this;
    //hash the password only if it has been modified (or is new)
    if (!person.isModified('password')) return next();
    try {
        //hash password generation
        const salt = await bcrypt.genSalt(10);

        //hash password
        const hashPassword = await bcrypt.hash(person.password, salt);
        person.password = hashPassword;
        next();
    } catch (err) {
        return next(err);
    }
});

personSchema.method.comparePassword = async function(candidatePassword){
    try {
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (err) {
        throw err;
    }
}

const Person = mongoose.model('Person', personSchema);
module.exports = Person;