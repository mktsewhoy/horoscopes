exports.up = function(knex, Promise) {
  return knex.schema.createTable("horoscopes1", table => {
    table.increments("id");
    table.string("movies");
    table.string("pictures");
    table.string("zodiac");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("horoscopes1");
};
