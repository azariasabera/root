var express = require('express');
var router = express.Router();

// to see files in mongosh, i use: use testdb then use books then db.books.find()

// MongoDB setup -------------------------------------
const mongoose = require('mongoose');
const Books = require("../models/Books");
const mongoDB = 'mongodb://127.0.0.1:27017/testdb';
mongoose.connect(mongoDB)
        .then(() => console.log("MongoDB is connected!"))
        .catch((error) => console.log(`Error has occured: ${error}`));
mongoose.Promise = Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error!!!"));
// ---------------------------------------------------

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/book', (req, res)=>{
    let newBook = new Books({
        name : req.body.name,
        author : req.body.author,
        pages : req.body.pages
    });
    newBook.save();
    res.json({
        name: req.body.name,
        author: req.body.author,
        pages: req.body.pages
    })
});

module.exports = router;
