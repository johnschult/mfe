import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'

// Mount function to startup the app
const mount = el => {
  ReactDOM.render(<App />, el)
}

// If we are in development and in isolation,
// we call mount right away
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root')

  if (devRoot) {
    mount(devRoot)
  }
}

//  We are running through the container
// and we should export the mount function
export { mount }
