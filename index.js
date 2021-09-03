const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended:false
}));

app.use(express.json())
app.get('/', function (req, res) {
    res.send('Hello World')
});

app.listen(PORT,()=>{console.log(`Listening on localhost:${PORT}`)})