import React, { Component } from 'react'

import Links from './Links'
import links from './links.json'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Links links={links} />
      </div>
    )
  }
}

export default App
