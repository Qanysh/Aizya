const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Sepa:123@cluster0.d9oa08n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, required: true},
    hashed_password: { type: String, required: true},
    admin: {type: Boolean, default: false}
});

const eventSchema = new Schema({
    date: { type: String, required: true },
    name: { type: String, required: true },
    notes: { type: String, required: true },
    tag: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);
const Event = mongoose.model('Event', eventSchema);

module.exports = {User, Event};