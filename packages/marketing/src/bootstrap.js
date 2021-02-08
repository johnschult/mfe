import { createBrowserHistory, createMemoryHistory } from 'history'

import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'

// Mount function to startup the app
const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory()

  if (onNavigate) history.listen(onNavigate)
  ReactDOM.render(<App history={history} />, el)

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location
      if (pathname !== nextPathname) history.push(nextPathname)
    },
  }
}

// If we are in development and in isolation,
// we call mount right away
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root')

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() })
  }
}

//  We are running through the container
// and we should export the mount function
export { mount }
