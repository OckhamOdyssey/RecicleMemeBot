const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
const { RandomStuff } = require('./random-stuff')

app.use(express.urlencoded({
    extended:false
}));

app.use(express.json())
RandomStuff.instance().getJoke()

app.listen(PORT,()=>{console.log(`Listening on localhost:${PORT}`)})
