import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Home from './Home'

class App extends Component {
  render() {
    return (
      //exists purely to set up the Provider and load the Home component
      <Provider store = {store}>
        <div>
          <Home />
        </div>
      </Provider>
    )
  }
}

export default App
