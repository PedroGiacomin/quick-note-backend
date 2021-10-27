/**
 * Migrations sao um controle de versao do banco de dados 
 * sempre que for alterar ou criar algo novo no db tem que dar um
 * npx knex migrate:make <nome descritivo do que esta fazendo>
 * dps de pronta, pra executar, da um npx knex migrate:latest
 * */

/**
 * Metodo up eh o da criacao da tabela e o down eh pra desfazer
 */
exports.up = function(knex) {
  /**
   * Criando uma tabela no DB. Cada table. eh uma nova coluna
   * que tem nome e pode ser uma primary key ou foreign key
   * Todos esses comandos js sao parte do knex e tem na documentacao dele
   */
  return knex.schema.createTable('clientes', function(table) {
    table.string('id').primary();
    table.string('nome').notNullable();
    table.string('email').notNullable();
    table.string('telefone').notNullable();
    table.date('nascimento').notNullable();
    table.string('cep', 8).notNullable();
    table.string('numero').notNullable();
    table.string('bairro').notNullable();
    table.string('cidade').notNullable();
    table.string('estado').notNullable();  
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('clientes')
};
