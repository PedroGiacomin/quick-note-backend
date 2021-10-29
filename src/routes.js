const express = require('express');
const ClientesController = require('./controllers/ClientesController');
const ProdutosController = require('./controllers/ProdutosController');

const routes = express.Router();

/**
 * Ex produto:
  {
    "produto_id" : "123",
    "nome" : "Anel Splindow",
    "preco" : 10.99,
    "tamanho" : 15,
    "quantidade" : 1,
    "imagem" : "./anel1.png",
    "descricao" : "Anelzassooo",
    "id" : "cliente-x"
  }

  {
    "nome" : "Zé Carlos",
    "email" : "emaildozecarlos",
    "telefone" : "999999999",
    "nascimento" : "1999-03-12",
    "cep" : "12345678",
    "numero" : "456",
    "bairro" : "Lagoa Grande",
    "cidade": "Padimina",
    "estado" : "Minas Gerais"
  }
 */   

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

//Produtos
routes.get('/produtos/:produto_id', ProdutosController.getById);
routes.post('/produtos', ProdutosController.create);
routes.put('/produtos/:produto_id', ProdutosController.update);
routes.delete('/produtos/:produto_id', ProdutosController.delete);

//Clientes
//Conseguindo o vetor do backend
routes.get('/clientes' , (req, res) => {
  res.json(users);
});

//Adicionando um objeto ao vetor
routes.post('/clientes', ClientesController.create);

//Mudando uma informacao num objeto do vetor
routes.put('/users/:user_id', (req, res) => {

  //req.params eh a variavel que guarda os params passados na rota, depois do '/:'
  const {userId} = req.params;
  const newFields = req.body;
  let selectedIndex;

  //Usuario selecionado no vetor
  let selected = users.find((user, index) => {
    selectedIndex = index;
    return user.id === userId;
  });

  selected = {...selected, ...newFields}; 

  users[selectedIndex] = selected;

  res.json({message: "Success"});
});

routes.delete('/users/:user_id', (req, res) => {
  const{userId} = req.params;

  let selectedIndex;
  let selected = users.find((user, index) => {
    selectedIndex = index;
    return user.id === userId;
  });

  users.splice(selectedIndex, 0);
  
  res.json({message: "Deleted " + selected});
})

//QUERY PARAMS
//nao sao passados na declaracao da funcao, mas na propria rota no navegador
//e.g. /users?
routes.get('/users' , (req, res) => {
  const query = req.query; //var que guarda as informacoes da query

  console.log(query);
  res.json(users);
});


module.exports = routes;