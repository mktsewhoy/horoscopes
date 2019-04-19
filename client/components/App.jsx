import React from 'react'

import { getHoroscopeInfo } from '../api'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      horoscopes: []
    }

    this.renderHoroscopeInfo = this.renderHoroscopeInfo.bind(this)
  }

  componentWillMount() {
    console.log('componentWillMount')
    getHoroscopeInfo(this.renderHoroscopeInfo)
    console.log("Info returned from getHoroscopeInfo: ", getHoroscopeInfo(this.renderHoroscopeInfo)
    )
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  renderHoroscopeInfo(err, horoscopes) {
    console.log('rendering horoscope info')
    this.setState({
      horoscopes: horoscopes.dailyhoroscope
    })
  }

  render() {
    console.log('render')
    console.log(this.state.horoscopes)
    return (
      <div>
        <h1>App is rendering!</h1>
        <p>Horoscopes: {this.state.horoscopes.Leo}</p>
        <div>
          <h1>Your Horoscope<br /><br /></h1>
            <ul className="circle">
              <li>
                <div className="text"><a href="#">&#9800;</a></div>
              </li>
              <li>
                <div className="text"><a href="#">&#9801;</a></div>
              </li>
              <li>
                <div className="text"><a href="#">&#9802;</a></div>
              </li>
              <li>
                <div className="text"><a href="#">&#9803;</a></div>
              </li>
              <li>
                <div className="text"><a href="#">&#9804;</a></div>
              </li>
              <li>
                <div className="text"><a href="#">&#9805;</a></div>
              </li>
              <li>
                <div className="text"><a href="#">&#9806;</a></div>
              </li>
              <li>
                <div className="text"><a href="#">&#9807;</a></div>
              </li>
              <li>
                <div className="text"><a href="#">&#9808;</a></div>
              </li>
              <li>
                <div className="text"><a href="#">&#9809;</a></div>
              </li>
              <li>
                <div className="text"><a href="#">&#9810;</a></div>
              </li>
              <li>
                <div className="text"><a href="#">&#9811;</a></div>
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