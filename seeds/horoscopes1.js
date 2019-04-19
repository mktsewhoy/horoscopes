
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('horoscopes1').del()
    .then(function () {
      // Inserts seed entries
      return knex('horoscopes1').insert([
        {id: 1, movies: 'Argo-Aquarius.jpg',pictures:'Tommy Pickles-Aquarius.png',zodiac:'Aquarius'},
        {id: 2, movies: 'EatPrayLove-Pisces.jpg',pictures:'Tito Makani-Piscies.png',zodiac:'Pisces'},
        {id: 3, movies: 'TheMatrix-Aries.png',pictures:'Ash Ketchum-Aries.png',zodiac:'Aries'},
        {id: 4, movies: 'Sideways-Taurus.jpg',pictures:'Dexter-Taurus.png',zodiac:'Taurus'},
        {id: 5, movies: 'Psycho-Gemini.jpg',pictures:'CatDog-Gemini.png',zodiac:'Gemini'},
        {id: 6, movies: 'coco-Cancer.jpeg',pictures:'Doug Funnie-Cancer.png',zodiac:'Cancer'},
        {id: 7, movies: 'TheAvengers-Leo.jpg',pictures:'Leonardo-Leo.png',zodiac:'Leo'},
        {id: 8, movies: 'Interstellar-Virgo.jpeg',pictures:'Oblina-Virgo.png',zodiac:'Virgo'},
        {id: 9, movies: 'Crazy,Stupid,Love-Libra.png',pictures:'Courage-Libra.png',zodiac:'Libra'},
        {id: 0, movies: 'zodiac-Scorpio.jpg',pictures:'ElizaThornberry-Scopio.png',zodiac:'Scorpio'},
        {id: 11, movies: 'AboutTime-Sagittarius.jpg',pictures:'Sandy Cheeks-Sagittarius.png',zodiac:'Sagitarius'},
        {id: 12, movies: 'ToyStory-Capricorn.jpg',pictures:'Arnold Shortman-Capricorn.png',zodiac:'Capricorn'},
      ]);
    });
};
