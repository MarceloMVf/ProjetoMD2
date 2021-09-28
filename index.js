const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, "public"))); // 

app.get('/', (req, res) => {
    res.send("hello blusds")
})


app.get('/page', (req, res) => {
    res.render('pagina')
})

app.get('/teste3', (req, res) => {
    res.send("Quero jogaaar")
})

app.listen(port, () => console.log(`servidor rodando na porta ${port}`))