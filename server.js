const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001
const db = require('./db')

const { Park, Ride } = require('./models')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
    res.send('This is root!')
})

app.get('/api/parks', async (req, res) => {
    const allparks = await Park.find()
    console.log(`All parks should arrive!`)
    res.json(allparks);
})
app.get('/api/rides', async (req, res) => {
    const allrides = await Ride.find()
    console.log(`All rides should be sent!`)
    res.json(allrides);
})

app.get('/api/parks/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) throw Error ("Not a valid MongoDB ObjectID!!!!!!!");

        const thisPark = await Park.findById(id);
        
        if (!thisPark) throw Error ("OH NO! That Park was not found.")

        console.log(`specific park should arrive!`)
        res.json(thisPark);
    } catch (e) {
        console.log(e)
        res.send(`There was AN ERROR!!!  ${e.message}`);
    }
})

app.get('/api/rides/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) throw Error ("Not a valid MongoDB ObjectID!!!!!!!");

        const thisRide = await Ride.findById(id);
        
        if (!thisRide) throw Error ("OH NO! That Ride was not found.")

        console.log(`specific Ride should arrive!`)
        res.json(thisRide);
    } catch (e) {
        console.log(e)
        res.send(`There was AN ERROR!!!  ${e.message}`);
    }
})

app.post('/api/parks/add-new', async (req, res) => {
    try {
        const park = await new Park(req.body);
        await park.save();
        return res.status(201).json({
          park,
        });
      } catch (error) {
          return res.status(500).json({ error: error.message })
      }
})

app.post('/api/rides/add-new', async (req, res) => {
    try {
        const ride = await new Ride(req.body);
        await ride.save();
        return res.status(201).json({
          ride,
        });
      } catch (error) {
          return res.status(500).json({ error: error.message })
      }
})

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})