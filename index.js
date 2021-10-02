const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;


app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, "public"))); // 
app.use(express.urlencoded());

app.get("/", function (req, res) {
    res.send("Hello World");
  });

app.listen(port, () => console.log(`servidor rodando na porta ${port}`))