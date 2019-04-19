import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import { getHoroscopeInfo } from './api';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    <Horoscope />,
    document.getElementById('app')
  )
})

