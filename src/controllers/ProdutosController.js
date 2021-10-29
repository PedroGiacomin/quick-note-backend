const ProdutosModel = require('../models/ProdutosModel');

module.exports = {

  //Criar novo produto
  async create(request, response){
    try{
      
      const newProduto = request.body;
      const result = await ProdutosModel.create(newProduto);  //Chama a funcao DO MODEL para criar no banco de dados
      return response.status(200).json(result);    // O sqlite por padrao retorna o id quando cria

    }catch(error){
      console.warn("Product creation failed: ", error)
      
      return response.status(500).json({
      notification: "Internal server error while trying to create Produto"
      })
    }
  },

  //Att informacoes do produto
  async update(request, response){
    try{

      //O id eh passado na rota como /:id 
      const {produto_id} = request.params;
      const newProduto = request.body;

      await ProdutosModel.updateById(produto_id, newProduto);

      return response.status(200).json({ "notification" : "Product updated successfully"});

    }catch(error){
      console.warn("Product update failed: ", error)
      
      return response.status(500).json({
        notification: "Internal server error while trying to update Produto"
      })
      
    }
  },

  //Deleta um produto 
  async delete(request, response){
    try{

      const {produto_id} = request.params;

      await ProdutosModel.deleteById(produto_id);

      return response.status(200).json({ "notification" : "Product deleted successfully"});
      
    }catch(error){
      console.warn("Product deletion failed: ", error)
      
      return response.status(500).json({
        notification: "Internal server error while trying to delete Produto"
      })
    }
  },

  async getById(request, response){
    try{
      const result = await ProdutosModel.getByCategoria(newProduto);

    }catch(error){
      
      
    }
  }
}