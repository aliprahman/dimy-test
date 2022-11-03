/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('payment_methods', function (table) {
    table.increments('id');
    table.string('name', 255).notNullable();
    table.tinyint('is_active', 1).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('payment_methods');
};
