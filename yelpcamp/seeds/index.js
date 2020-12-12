
const mongoose = require('mongoose')
const campground = require('../models/campground')

mongoose.connect('mongodb://localhost:27017/yelp-camp', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Database connected")
});

//delete everything first 
const seedDB = async () => {
    await campground.deleteMany({});
    const c = new campground({titile: 'some title'});
    await c.save();
}

seedDB();

