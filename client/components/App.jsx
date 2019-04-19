import React from 'react'

import { getHoroscopeInfo } from '../api'

import { getHoroscopeDbInfo } from '../../server/db/db'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      horoscopes: [],
      horoscopeText: '',
      horoscopeName: '',
      celebName: ''
    }

    this.renderHoroscopeInfo = this.renderHoroscopeInfo.bind(this)
    this.handleClick = this.handleClick.bind(this)

  }

  componentWillMount() {
    getHoroscopeInfo(this.renderHoroscopeInfo)
    console.log("Info returned from getHoroscopeInfo: ", getHoroscopeInfo(this.renderHoroscopeInfo)
    )
  }

  componentDidMount() {
  }

  renderHoroscopeInfo(err, horoscopes, horoscopeText, horoscopeName) {
    console.log("horoscope name: ", horoscopeName)
    this.setState({
      horoscopes: horoscopes.dailyhoroscope,
      horoscopeText: horoscopeText.split('<')[0],
      horoscopeName: horoscopeName,
      // celebName: getHoroscopeDbInfo(horoscopeName)
    })
  }

  handleClick(e) {
    let horoscopeName = e.target.id
    getHoroscopeInfo(this.renderHoroscopeInfo, horoscopeName)
  }

  render() {
    console.log('rendering')
    return (
      <div>
        <div>
          <h1>Your Horoscope<br /><br /></h1>
          <ul className="circle">
            <li>
              <div className="text" onClick={this.handleClick} id="Aries">&#9800;</div>
            </li>
            <li>
              <div className="text" onClick={this.handleClick} id="Taurus">&#9801;</div>
            </li>
            <li>
              <div className="text" onClick={this.handleClick} id="Gemini">&#9802;</div>
            </li>
            <li>
              <div className="text" onClick={this.handleClick} id="Cancer">&#9803;</div>
            </li>
            <li>
              <div className="text" onClick={this.handleClick} id="Leo">&#9804;</div>
            </li>
            <li>
              <div className="text" onClick={this.handleClick} id="Virgo">&#9805;</div>
            </li>
            <li>
              <div className="text" onClick={this.handleClick} id="Libra">&#9806;</div>
            </li>
            <li>
              <div className="text" onClick={this.handleClick} id="Scorpio">&#9807;</div>
            </li>
            <li>
              <div className="text" onClick={this.handleClick} id="Sagittarius">&#9807;</div>
            </li>
            <li>
              <div className="text" onClick={this.handleClick} id="Capricorn">&#9809;</div>
            </li>
            <li>
              <div className="text" onClick={this.handleClick} id="Aquarius">&#9810;</div>
            </li>
            <li>
              <div className="text" onClick={this.handleClick} id="Pisces">&#9811;</div>
            </li>
          </ul>
          <div className="hole">
            <h3>{this.state.horoscopeName}</h3>
            <h2>&#9808;</h2>
            <p>{this.state.horoscopeName}</p>
            <p>{this.state.horoscopeText}</p>
          </div>
          <h3>You share your star-sign with </h3>
        </div>
      </div>
      // <div>
      // <h1>Pokemon</h1>
      // <h2>I have {this.state.pokemon.length} Pokemon!</h2>
      // {this.state.pokemon.map(p => {
      //   return (
      //     <li><a href={p.url}>{p.name}</a></li>
      //   )
      // })}
      // </div>
    )
  }
}
export default App