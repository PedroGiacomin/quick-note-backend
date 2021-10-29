const connection = require('../database/connection');

module.exports = {  

  //Insere um novo produto na coluna
  async create(product){
    
    const result = await connection('produtos').insert(product);
    return result;
  },

  //Acha e retorna o produto pela categoria
  async getByCategoria(categoria){
    const result = await connection('produtos')
      .where({categoria})
      .select('*');

    return result;
  },

  //Acha e retorna o produto por subcategoria
  async getBySubcategoria(subcategoria){
    const result = await connection('produtos')
      .where({subcategoria})
      .select('*');

    return result;
  },

  //Altera o valor de um produto, especificado pela sua id
  async updateById(produto_id, product){
    const result = await connection('produtos')
      .where({produto_id})
      .update(product); 
    return result;
  },

  //Deleta produto, especificado pela sua id
  async deleteById(produto_id){
    const result = await connection('produtos')
      .where({produto_id})
      .delete();
    return result;
  }
}
