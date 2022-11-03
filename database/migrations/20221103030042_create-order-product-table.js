/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('order_products', function (table) {
    table.increments('id');
    table.integer('order_id').notNullable();
    table.integer('product_id').notNullable();
    table.integer('qty').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('order_products');
};
