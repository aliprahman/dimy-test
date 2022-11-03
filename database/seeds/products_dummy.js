/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('products').insert([
    { name: 'Jeans', price: 1000 },
    { name: 'Jacket', price: 1500 },
    { name: 'Shoe', price: 1000 },
  ]);
};
