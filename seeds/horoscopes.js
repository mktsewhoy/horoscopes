
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
  return knex('horoscopes').del()
    .then(function () {
      // Inserts seed entries
      return knex('horoscopes').insert([
        {id: 1, 'Sun sign': 'Aquarius', famous:'', Month:'January 20 - February 18', 'famous Comedy':'',Url:'' },
        {id: 2, 'Sun sign': 'Pisces', famous:'', Month:'February 19 - March 20', 'famous Comedy':'',Url:'' },
        {id: 3, 'Sun sign': 'Aries', famous:'', Month:'March 21 - April 19', 'famous Comedy':'',Url:'' },
        {id: 4, 'Sun sign': 'Taurus', famous:'', Month:'April 20 - May 20', 'famous Comedy':'',Url:'' },
        {id: 5, 'Sun sign': 'Gemini', famous:'', Month:'May 21 - June 20', 'famous Comedy':'',Url:'' },
        {id: 6, 'Sun sign': 'Cancer', famous:'', Month:'June 21 - July 22', 'famous Comedy':'',Url:'' },
        {id: 7, 'Sun sign': 'Leo', famous:'', Month:'July 23 - August 22', 'famous Comedy':'',Url:'' },
        {id: 8, 'Sun sign': 'Virgo', famous:'', Month:'August 23 - September 22', 'famous Comedy':'',Url:'' },
        {id: 9, 'Sun sign': 'Scorpio', famous:'', Month:'September 23 - October 22', 'famous Comedy':'',Url:'' },
        {id: 10, 'Sun sign': 'rowValue1', famous:'', Month:'October 23 - November 21', 'famous Comedy':'',Url:'' },
        {id: 11, 'Sun sign': 'Sagitarius', famous:'', Month:'November 22 - December 21', 'famous Comedy':'',Url:'' },
        {id: 12, 'Sun sign': 'Capricorn', famous:'', Month:'December 22 - January 19', 'famous Comedy':'',Url:'' },
        
      ]);
    });
};
