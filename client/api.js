import request from 'superagent'

const horoscopeURL = 'https://www.horoscopes-and-astrology.com/json'

export function getHoroscopeInfo(callback, horoscopeName) {
  console.log('getting horoscope info')
  request
    .get(horoscopeURL)
    .end((err, res) => {
      let horoscopeText = res.body.dailyhoroscope[horoscopeName]
      console.log('got horoscopes info: ', horoscopeText)
      callback(err, res.body, horoscopeText)
    })
}