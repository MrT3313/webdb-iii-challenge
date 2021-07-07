// Implement Changes to DB
exports.up = function(knex, Promise) {
    return knex.schema.createTable('students', table => {
        // Primary Key
        table
            .increments()
        // Name
        table
            .string('name')
            .notNullable()
        // Foreign Key -> cohortID
        table
            .integer('cohort_id')
            .unsigned()
            // Where is it looking
                .references('id').inTable('cohorts')
            // Update & Delete Actions
            .onDelete('CASCADE').onUpdate('CASCADE')
        // Created & Updated @
        table
            .timestamps(true, true);
    })
};
// Undo Changes to DB
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('students')
};
