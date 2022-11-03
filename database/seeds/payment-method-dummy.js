/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('payment_methods').insert([
    { name: 'Transfer Bank', is_active: 1 },
    { name: 'Creadit Cart', is_active: 1 },
    { name: 'Gopay', is_active: 1 },
  ]);
};
