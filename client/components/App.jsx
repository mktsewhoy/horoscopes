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