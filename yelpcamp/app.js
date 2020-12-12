const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const campground = require('./models/campground')

mongoose.connect('mongodb://localhost:27017/yelp-camp', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Database connected")
});
    

const app = express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

app.get('/', (req, res)=> {
    res.render('home')
})

app.get('/makecampground', async(req, res)=> {
    const camp = new Campground({title: 'new camp', despription: 'okay'});
    await camp.save();
    res.send(camp)
})


app.listen(3030, () => {
    console.log("ON PORT 3030")
})