

exports.up = function(knex) {
  
  return knex.schema.createTable('produtos', function(table){
    table.increments('produto_id').primary().notNullable();
    table.string('nome').notNullable();
    table.decimal('preco').notNullable();
    table.integer('tamanho').nullable();
    table.integer('quantidade').nullable();
    table.string('imagem').notNullable();
    table.string('descricao').notNullable();

    //Referencia a algum user
    table.string('id').notNullable(); //a tabela
    table.foreign('id').references('id').inTable('clientes').onDelete('cascade'); //referencia
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('produtos')
};



