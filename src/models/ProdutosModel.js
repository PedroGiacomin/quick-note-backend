const connection = require('../database/connection');
const {v4: uuidv4} = require('uuid');


module.exports = {  

  //Insere um novo produto na coluna
  async create(product){
    
     //Cria um id complexo para o cliente
    const product_id = uuidv4();
    product.product_id = product_id;

    const result = await connection('produtos').insert(product);
    return result;
    /**
      * 'cliente' eh um objeto JSON que estah sendo inserido na tabela, 
      * nele tem todos os campos das colunas da tabela 'clientes' 
      */
  },

  //Acha e retorna o produto pela categoria
  async getByCategoria(categoria){
    const result = await connection('produtos')
      .where({categoria})
      .select('*');
    //O where precisa especificar a coluna e o valor que se procura nela
    //O select define quais colunas desse cliente vc quer receber

    return result;
  },

  //Acha e retorna o produto por subcategoria
  async getBySubcategoria(subcategoria){
    const result = await connection('produtos')
      .where({subcategoria})
      .select('*');
    //O where precisa especificar a coluna e o valor que se procura nela
    //O select define quais colunas desse cliente vc quer receber

    return result;
  },

  //Altera o valor de um produto, especificado pela sua id
  async updateById(product_id, product){
    const result = await connection('produtos')
      .where({product_id}) //{cliente_id : cliente_id} === {cliente_id}
      .update(product); //Novamente, cliente eh um objeto json
    return result;
  },

  //Deleta produto, especificado pela sua id
  async deleteById(product_id){
    const result = await connection('produtos').where({product_id}).delete();
    return result;
  }
}
