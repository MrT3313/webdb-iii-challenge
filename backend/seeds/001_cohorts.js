exports.seed = function(knex, Promise) {
  return knex('cohorts')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {name: '01_cohort',},
        {name: '02_cohort',},
        {name: '03_cohort',},
        
      ]);
    });
};