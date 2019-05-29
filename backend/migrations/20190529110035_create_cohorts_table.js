// implement changes to schema
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cohorts', table => {
        // each table needs a primary key --> int --> auto increment
        table
            .increments()

        // Name Column
        table
            .string('name, 225')
            .notNullable()
        // Created & Updated @
        table
            .timestamps(true, true)
    })
};
// undo changes to schema
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cohorts');
};
