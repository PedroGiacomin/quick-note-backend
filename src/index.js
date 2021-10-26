const express = require('express');
const cors = require('cors');

//Porta em que o backend roda
const port = process.env.PORT || 3333; 

const app = express();

app.use(cors());
app.use(express.json());



/**
 * MÉTODOS HTTP
 * 
 * get: buscar uma informação do back-end
 * post: criar uma informação no back-end
 * put: alterar uma infromação no back-end
 * delete: deletar uma informação no back-end
 * 
 * O get eh o metodo que o navegador executa logo de cara
 * O browser executa o get logo de craa, pra visualizar
 * funcionamento dos outros metodos e ir testando as rotas, usa o insomnia 
 */

/**
 * TIPOS DE PARAMETROS da requisicao
 * 
 * Query Params: Parametros nomeados enviados NA ROTA apos o simbolo de "?"
 *               (filtros, paginacao) ex: '/users?name=Diego'
 * Route Params: Parametros utilizados para identificar RECURSOS com um id depois de "/:"
 *               ex: '/users/:id'
 * Request Body: Corpo da requisição, utilizado para criar 
 *               ou alterar recursos.
 */

/**
 * Rota/recurso 
 */

app.get('/users' , (request, response) => {
  
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

app.listen(port, () => {
  console.log('Server listening on port ' + port);
})

