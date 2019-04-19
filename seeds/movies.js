
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {id: 1, Movie: 'Argo-Aquarius.jpg',pictures:'Tommy Pickles-Aquarius.png',zodiac:'Aquarius'},
        {id: 2, Movie: 'EatPrayLove-Pisces.jpg',pictures:'Tito Makani-Piscies.png',zodiac:'Pisces'},
        {id: 3, Movie: 'TheMatrix-Aries.png',pictures:'Ash Ketchum-Aries.png',zodiac:'Aries'},
        {id: 4, Movie: 'Sideways-Taurus.jpg',pictures:'Dexter-Taurus.png',zodiac:'Taurus'},
        {id: 5, Movie: 'Psycho-Gemini.jpg',pictures:'CatDog-Gemini.png',zodiac:'Gemini'},
        {id: 6, Movie: 'coco-Cancer.jpeg',pictures:'Doug Funnie-Cancer.png',zodiac:'Cancer'},
        {id: 7, Movie: 'TheAvengers-Leo.jpg',pictures:'Leonardo-Leo.png',zodiac:'Leo'},
        {id: 8, Movie: 'Interstellar-Virgo.jpeg',pictures:'Oblina-Virgo.png',zodiac:'Virgo'},
        {id: 9, Movie: 'Crazy,Stupid,Love-Libra.png',pictures:'Courage-Libra.png',zodiac:'Libra'},
        {id: 0, Movie: 'zodiac-Scorpio.jpg',pictures:'ElizaThornberry-Scopio.png',zodiac:'Scorpio'},
        {id: 11, Movie: 'AboutTime-Sagittarius.jpg',pictures:'Sandy Cheeks-Sagittarius.png',zodiac:'Sagitarius'},
        {id: 12, Movie: 'ToyStory-Capricorn.jpg',pictures:'Arnold Shortman-Capricorn.png',zodiac:'Capricorn'},
      ]);
    });
};
