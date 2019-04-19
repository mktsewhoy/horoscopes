import request from 'superagent'

const horoscopeURL = 'https://www.horoscopes-and-astrology.com/json'

export function getHoroscopeInfo(callback) {
  console.log('getting horoscope info')
  request
    .get(horoscopeURL)
    .end((err, res) => {
      console.log('got horoscopes info: ', res.body)
      callback(err, res.body)
    })
}