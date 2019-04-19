import React from 'react'

import { getHoroscopeInfo } from '../api'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      horoscopes: [],
      horoscopeText: ''
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

  renderHoroscopeInfo(err, horoscopes, horoscopeText) {
    this.setState({
      horoscopes: horoscopes.dailyhoroscope,
      horoscopeText: horoscopeText
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
        <h1>App is rendering!</h1>
        <p>Horoscopes: {this.state.horoscopeText}</p>
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
            <h3>sagittarius</h3>
            <h2>&#9808;</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
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