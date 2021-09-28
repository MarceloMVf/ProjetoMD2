const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("hello blusds")
})


app.get('/teste2', (req, res) => {
    res.send("Bungasdasdasdaaar")
})

app.get('/teste3', (req, res) => {
    res.send("Quero jogaaar")
})

app.listen(3000)