exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("horoscopes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("horoscopes").insert([
        {
          id: 1,
          "Sun sign": "Aquarius",
          famous: "Shakira 1977-02-02. ",
          month: "January 20 - February 18",
          "famous Comedy": "Hill, Benny (January 21) ...",
          url:
            "https://i.pinimg.com/236x/2d/f9/ea/2df9eadd64111193eb16e2c56d1257e6--aquarius-birthday-aquarius-astrology.jpg"
        },
        {
          id: 2,
          "Sun sign": "Pisces",
          famous: "Nat “King” Cole (March 17, 1919)",
          month: "February 19 - March 20",
          "famous Comedy": "Preacher Lawson, 28.",
          url:
            "https://joanieclothing.com/media_thing/uploads/2019/02/ursula-andress.jpg"
        },
        {
          id: 3,
          "Sun sign": "Aries",
          famous: "Elton John",
          month: "March 21 - April 19",
          "famous Comedy": "Rosie O`Donnell, Jackie Chan",
          url:
            "https://starsignstyle.com/wp-content/uploads/2013/06/lady-gaga-astrology.png"
        },
        {
          id: 4,
          "Sun sign": "Taurus",
          famous: "Gigi Hadid (April 23) ",
          month: "April 20 - May 20",
          "famous Comedy": "George Lopez, 57.",
          url:
            "https://img.buzzfeed.com/buzzfeed-static/static/2017-05/9/17/campaign_images/buzzfeed-prod-fastlane-02/66-taurus-celebrities-that-prove-theyre-the-astro-2-3125-1494364981-20_dblbig.jpg"
        },
        {
          id: 5,
          "Sun sign": "Gemini",
          famous: "Angelina Jolie (June 4) ",
          month: "May 21 - June 20",
          "famous Comedy": "Faith Evans",
          url:
            "https://media1.popsugar-assets.com/files/thumbor/5qOKyhyNSS9oq_irV7zuzQCPD9c/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/04/30/948/n/1922398/f9bb4229d57e0579_PISCES/i/Pisces-Feb-19-March-20.jpg"
        },
        {
          id: 6,
          "Sun sign": "Cancer",
          famous: "Selena Gomez (July 22)",
          month: "June 21 - July 22",
          "famous Comedy": "Charlie Murphy",
          url:
            "https://tarot-astrology.co.uk/wp-content/uploads/2018/05/Cancer-Celebrities.jpg"
        },
        {
          id: 7,
          "Sun sign": "Leo",
          famous: "Jennifer Lawrence (August 15) ...",
          month: "July 23 - August 22",
          "famous Comedy": "Paddy McGuinness, 45.",
          url:
            "https://media1.popsugar-assets.com/files/thumbor/Q7-62NG8oW2cAzBPVc491c4PwYg/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/04/30/005/n/1922398/afc74c1971df2ed0_LEO/i/Leo-July-23-Aug-22.jpg"
        },
        {
          id: 8,
          "Sun sign": "Virgo",
          famous: "Blake Lively (August 25) ",
          month: "August 23 - September 22",
          "famous Comedy": "Fallon, Jimmy (September 19) ",
          url:
            "https://www.biography.com/.image/ar_8:10%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_620/MTE5NDg0MDU0NzQyNjY0NzE5/macaulay-culkin-222292-1-402.jpg"
        },
        {
          id: 9,
          "Sun sign": "Libra",
          famous: "Gwyneth Paltrow (September 27) ...",
          month: "September 23 - October 22",
          "famous Comedy": "Keaton, Buster (October 4) ",
          url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3wHPbDeHFzOqEvHx0IBQTRVvXhxQXasp-Adxd92fjBA_QKjRToQ"
        },
        {
          id: 10,
          "Sun sign": "Scorpio",
          famous: "Ashley Graham (October 30) ",
          month: "October 23 - November 21",
          "famous Comedy": "Pete Davidson, 25.",
          url:
            "https://i.pinimg.com/originals/0b/05/97/0b05973bbab32803d2c1e5b88f69d619.png"
        },
        {
          id: 11,
          "Sun sign": "Sagitarius",
          famous: "Chrissy Teigen (November 30)",
          month: "November 22 - December 21",
          "famous Comedy": "Sarah Silverman, 48.",
          url:
            "https://i.pinimg.com/236x/5e/ab/06/5eab065f8eff8759e92d01129576a47b--sagittarius-birthday-star-crossed.jpg"
        },
        {
          id: 12,
          "Sun sign": "Capricorn",
          famous: "Elvis Presley (8 January 1935 – 16 August 1977) ",
          month: "December 22 - January 19",
          "famous Comedy": "Kikuchi, Rinko (January 6) ",
          url:
            "https://www.yourtango.com/sites/default/files/styles/header_slider/public/image_blog/Capricorn.jpg?itok=eUF342Wu"
        }
      ]);
    });
};
