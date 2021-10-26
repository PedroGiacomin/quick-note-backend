const express = require('express');

const routes = express.Router();

//Rotas

routes.post('/users' , (request, response) => {
  
  const params = request.query;
  const params2 = request.params;

  //request.query retorna os Query Params
  //resquest.params retorna os Route Params

  console.log(params);
  console.log(params2);

  return response.json({
    evento: "Semana Omni Stack",
    aluno: "Diego Snatos"
  })
})

module.exports = routes;