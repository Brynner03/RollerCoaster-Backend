const { ObjectId } = require('bson')
const { Schema } = require('mongoose')

const Ride = new Schema (
    {
        name: { type: String, required: true},
        park: { type: ObjectId, required: true},
        description: { type: String, required: true },
        height: { type: String, required: true },
        length: { type: String, required: true },
        speed: { type: String, required: true },
        type: { type: String, required: true },
        img: { type: String, required: true }
    }, 
    {timestamps: true}
)

module.exports = Ride