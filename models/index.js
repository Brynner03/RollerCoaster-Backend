const { model } = require('mongoose')
const RideSchema = require('./ride')
const ParkSchema = require('./park')

const Ride = model('rides', RideSchema)
const Park = model('parks', ParkSchema)

module.exports = {
    Ride,
    Park
}