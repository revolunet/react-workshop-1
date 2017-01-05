import React, { Component } from 'react'

import LinksBrowser from './LinksBrowser'
import links from './links.json'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <LinksBrowser links={links} />
      </div>
    )
  }
}

export default App
