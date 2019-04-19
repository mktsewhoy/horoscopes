const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getHoroscopeDbInfo
}

function getHoroscopeDbInfo(horoscopeName, db = connection) {
  return db('horoscopes')
    .where('Sun sign', '=', horoscopeName)
    .select()
}


