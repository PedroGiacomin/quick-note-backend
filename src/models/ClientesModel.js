const connection = require('../database/connection');
const {v4: uuidv4} = require('uuid');

/**
 * Create
 * Read
 * Update
 * Delete
 */


module.exports = {  

  //Insere um novo cliente na coluna
  async create(cliente){
    
     //Cria um id complexo para o cliente
    const cliente_id = uuidv4();
    cliente.id = cliente_id;

    await connection('clientes').insert(cliente);
    
    return user_id;
    /**
      * 'cliente' eh um objeto JSON que estah sendo inserido na tabela, 
      * nele tem todos os campos das colunas da tabela 'clientes' 
      */
  },

  //Acha e retorna o cliente pelo seu id (pode ser passado mais de um parametro por props na funcao)
  async getById(cliente_id){
    const result = await connection('clientes')
      .where({cliente_id : cliente_id})
      .select('*');
    //O where precisa especificar a coluna e o valor que se procura nela
    //O select define quais colunas desse cliente vc quer receber

    return result;
  },

  //Altera o valor de um cliente, especificado pela sua id
  async updateById(cliente_id, cliente){
    const result = await connection('clientes')
      .where({cliente_id}) //{cliente_id : cliente_id} === {cliente_id}
      .update(cliente); //Novamente, cliente eh um objeto json

    return result;
  },

  //Deleta um cliente, especificado pela sua id
  async deleteById(cliente_id){
    const result = await connection('clientes').where({category_id}).delete();
    return result;
  }
}

