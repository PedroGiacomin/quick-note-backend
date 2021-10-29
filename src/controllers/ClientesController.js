const ClientesModel = require('../models/ClientesModel');

module.exports = {

  //Cria novo cliente
  async create(request, response){
    try{
      const newCliente = request.body;

      //Chama a funcao DO MODEL para criar no banco de dados
      const result = await ClientesModel.create(newCliente);

      // O sqlite por padrao retorna o id quando cria
      return response.status(200).json(result);

    }catch(error){
      console.warn("Product creation failed: ", error)
      
      return response.status(500).json({
      notification: "Internal server error while trying to create Produto"
      })
    }
  },

  async getById(request, response){
    try{

    }catch(error){
      
    }
  },

  async update(request, response){
    try{

    }catch(error){
      
    }
  },

  async delete(request, response){
    try{

    }catch(error){
      
    }
  }
}
