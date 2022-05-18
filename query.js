const db = require('./db')
const { Park, Ride } = require('./models')

const findAllParks = async () => {
    const parks = await Park.find()
    console.log( 'Parks: ', parks)
}

const findAllRides = async () => {
    const rides = await Ride.find()
    console.log( 'Rides: ', rides)
}

const run = async () => {
    try {

    } catch (error) {
        console.log(error)
    } finally {
        await db.close()
    }
}