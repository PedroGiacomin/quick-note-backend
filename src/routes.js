const express = require('express');

const routes = express.Router();

//Rotas

//Simular o banco de dados aq
const users = [
  {
    nome: "Jao",
    id: 0
  },
  {
    nome: "Pedro",
    id: 1
  },
  {
    nome: "Taylor",
    id: 2
  },
  {
    nome: "Laura",
    id: 3
  },
]

//Conseguindo o vetor do backend
routes.get('/users' , (req, res) => {
  res.json(users);
});

//Adicionando um objeto ao vetor
routes.post('/users', (req, res) =>{
  const newUser = req.body; 
  //Guarda o que for passado no corpo da requisicao
  users.push(newUser);
  res.json({ message: "Success" });
});

module.exports = routes;