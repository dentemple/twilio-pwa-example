/* react */
import React from 'react'
import ReactDOM from 'react-dom'

/* style */
import { ThemeProvider } from 'styled-components'
import theme from './theme'

/* util */
import * as serviceWorker from './util/serviceWorker'

/* polyfills */
import 'whatwg-fetch'

const root = document.getElementById('root')

let render = () => {
  const App = require('./App').default

  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
    root
  )
}

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept(['./App', './theme'], () => {
    render()
  })
}

render()

serviceWorker.unregister()
