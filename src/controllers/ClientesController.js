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
      console.warn("Cliente creation failed: ", error)
      
      return response.status(500).json({
      notification: "Internal server error while trying to create Cliente"
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

      const {id} = request.params;
      console.log({id});
      const newCliente = request.body;

      await ClientesModel.updateById(id, newCliente);

      return response.status(200).json({ "notification" : "Cliente updated successfully"});

    }catch(error){

      console.warn("Cliente update failed: ", error)
      
      return response.status(500).json({
        notification: "Internal server error while trying to update Cliente"
      }) 
    }
  },

  async delete(request, response){
    try{

      const {id} = request.params;
      const result = await ClientesModel.deleteById(id);

      if(result === 0){
        return response.status(400).json({
          notification: "Cliente not found"
        });
      }  

      return response.status(200).json({ "notification" : "Cliente deleted successfully"});

    
    }catch(error){
      console.warn("Cliente deletion failed: ", error)
      
      return response.status(500).json({
        notification: "Internal server error while trying to delete Cliente"
      })  
    }
  }
}
