import React, { Component } from 'react'

import '../styles/App.css'

class App extends Component {
  render () {
    return (
      <div className="App">

        {this.props.isCordova
          ? <h1>Running on Cordova</h1>
          : <h1>Not running on Cordova</h1>}

      </div>
    )
  }
}

export default App
