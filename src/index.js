import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App'

/**
 * Quickly check if running in cordova
 * @returns {boolean}
 */
function isCordova () {
  return 'cordova' in window || '_cordovaNative' in window
}

/**
 * Start the react app by rendering the app into the #root element
 */
function load () {
  ReactDOM.render(<App isCordova={isCordova()} />, document.getElementById('root'))
}

// Start the show - if we're running on cordova...
if (isCordova()) {
  // ...load the cordova.js script...
  const s = document.createElement('script')
  s.setAttribute('src', 'cordova.js')
  document.getElementById('cordova-script-placeholder').insertAdjacentElement('afterend', s)

  // ...then, once the script has loaded, set a listener for deviceready...
  s.addEventListener('load', () => {
    // ...once the deviceready listener has fired, inject the react app to the dom
    document.addEventListener('deviceready', load, false)
  })
} else {
  // ...else if we're running on the web, just start the react app now
  load()
}
