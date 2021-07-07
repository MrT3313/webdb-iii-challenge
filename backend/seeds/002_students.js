
exports.seed = function(knex, Promise) {
  return knex('students')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {
          name: 'Reed',
          cohort_id: 4
        },
        {
          name: 'Mr.T',
          cohort_id: 3
        },
        {
          name: 'Joe Rogan',
          cohort_id: 3
        },
        {
          name: 'The Rock',
          cohort_id: 2
        },
        {
          name: 'Barney',
          cohort_id: 1
        },
      ]);
    });
};
