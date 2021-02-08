import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles'

import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import MarketingApp from './components/MarketingApp'
import React from 'react'

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
})

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </BrowserRouter>
    </StylesProvider>
  )
}
