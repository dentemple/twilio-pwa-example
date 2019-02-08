import React, { Fragment } from 'react'

import { GlobalStyle } from '../theme'
import Header from '../components/Header'
import Logo from '../components/Logo'
import PhoneMock from '../components/PhoneMock'

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Header>
      <Logo />
      <PhoneMock />
    </Header>
  </Fragment>
)

export default App
