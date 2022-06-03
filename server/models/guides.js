const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const guideSchema = new Schema({
    name: String,
    phone: String,
    email: String,
    password: String,
    spot: String,
    gender: String,
    waitingOrders: Array,
    myTrips: Array
});

module.exports = mongoose.model('guide', guideSchema, 'guides');