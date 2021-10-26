const express = require('express');
const cors = require('cors');
const routes= require('./routes')

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

/**
 * BANCOS DE DADOS
 * 
 * SQL: MySQL, SQLite, PostgreSQL
 * NoSQL: MongoDB, CouchDB, etc
 * 
 * Para fazer a comunicacao com o banco de dados podemos usar:
 *  Driver: escreve em SQL (SELECT * FROM users)
 *  Query Builder: usa JS (table('users').select('*').where())
 *    - o KNEX eh um query builder
 */

app.use(routes);

app.listen(port, () => {
  console.log('Server listening on port ' + port);
})

