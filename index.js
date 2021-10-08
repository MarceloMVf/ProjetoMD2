const express = require('express');
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, "public"))); // 
app.use(express.urlencoded());

let message = "";

const pokedex = [
    {
      Numero: 001,
      Nome: "Bulbasaur",
      Tipo: "Grass and Poison",
      Imagem: "/image/001.png",
      Descricao:"There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
      Altura: 70,
      Peso: 6,
      Categoria: "Seed",
      Habilidade: "Overgrow",
    },
    {
      Numero: 004,
      Nome: "Charmander",
      Tipo: "Fire",
      Imagem: "/image/004.png",
      Descricao: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
      Altura: 60,
      Peso: 8,
      Categoria: "Lizard",
      Habilidade: "Blaze",
    },
    {
      Numero: 007,
      Nome: "Squirtle",
      Tipo: "Water",
      Imagem: "/image/007.png",
      Descricao:"When it retracts its long neck into its shell, it squirts out water with vigorous force.",
      Altura: 50,
      Peso: 9,
      Categoria: "Tiny Turtle",
      Habilidade: "Torrent",
    }
];


app.get("/", (req, res) =>{
  res.render("index", {pokedex});
  message
});

app.get("/cadastro", (req, res) =>
  res.render("cadastro"),
);

app.post("/new", (req, res) => {
    const { numero, nome, tipo, imagem, descricao, altura, peso, categoria, habilidade } = req.body;
    const novoPokemon = {
      Numero: numero,
      Nome: nome,
      Tipo: tipo,
      Imagem: imagem,
      Descricao: descricao,
      Altura: altura,
      Peso: peso,
      Categoria: categoria,
      Habilidade: habilidade
};
    
    pokedex.push(novoPokemon);

    message = 'cadstrado';
    
    res.redirect("/")
    
});

  app.get('/detalhes/:id', function (req, res) {
    const id = req.params.id;
    const pokemon = pokedex[id];
    res.render("detalhes", {pokemon:pokemon});
});


app.listen(port, () => console.log(`servidor rodando na porta ${port}`))