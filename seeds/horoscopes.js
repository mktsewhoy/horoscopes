
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
  return knex('horoscopes').del()
    .then(function () {
      // Inserts seed entries
      return knex('').insert([
        {id: 1, SunSign: 'rowValue1', famous:'', Month:'', famousComedy:'',Url:'' },
        {id: 2, SunSign: 'rowValue2', famous:'', Month:'', famousComedy:'',Url:'' },
        {id: 3, SunSign: 'rowValue3', famous:'', Month:'', famousComedy:'',Url:'' }
      ]);
    });
};
