
exports.up = function(knex, Promise) {
  return knex.schema.createTable('horoscopes1',table =>{ 
    table.increments('id')
    table.string('')
    table.date('birthday')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('horoscopes1',table ) 

};
