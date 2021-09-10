const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000;
const { get } = require('./random-stuff')

app.use(express.urlencoded({
    extended:false
}));

app.use(express.json())
app.get('/', function (req, res) {
    console.log(get)
    res.send('Hello World')
});

app.listen(PORT,()=>{console.log(`Listening on localhost:${PORT}`)})
