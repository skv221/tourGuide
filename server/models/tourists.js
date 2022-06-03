const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const touristSchema = new Schema({
    name: String,
    phone: String,
    email: String,
    password: String,
    details: Array,
    plannedTrips: Array,
    currentTrip: Object
});

module.exports = mongoose.model('tourist', touristSchema, 'tourists');