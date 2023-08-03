/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable( 'todos', table =>
    {
        table
          .uuid("id", {
            primaryKey: true,
          })
          .defaultTo(knex.fn.uuid());
        table.string( 'title' );
        table.string( 'description', 500 );
        table.boolean( 'completed').defaultTo( true );
        table.timestamps( true , true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTableIfExists( 'todos' );
};
