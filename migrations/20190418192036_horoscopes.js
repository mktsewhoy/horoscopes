exports.up = function(knex, Promise) {
  return knex.schema.createTable("horoscopes", table => {
    table.increments("id").primary();
    table.string("Sun sign");
    table.string("famous");
    table.string("month");
    table.string("famous Comedy");
    table.integer("url");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("horoscopes", table);
};
