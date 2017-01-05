import React from 'react'

import LinksBrowser from './LinksBrowser'

export default class LinksBrowserContainer extends React.Component {
  state = {
    links: null
  }
  componentDidMount() {
    // fetch the data from an URL an update the component using setState
    fetch('/links.json').then(res => res.json()).then(links => this.setState({ links }))
  }
  render () {
    return this.state.links ? <LinksBrowser links={this.state.links} /> : <div>..loading...</div>
  }
}