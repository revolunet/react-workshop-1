import React from 'react'
import styled from 'styled-components'
import normalize from 'normalize-strings'

import Links from './Links'

const Input = styled.input`
  text-align: center;
  text-transform: uppercase;
  font-size: 25px;
  width: 300px;
  letter-spacing: 3px;
  border-radius:3px;
  border:1px solid #f68838;
  color: #1d4877;
`

const Centered = styled.div`
  text-align: center;
`

const NoResults = styled.div`
  text-align: center;
  margin-top: 50px;
  font-size: 35px;
  color: #666;
`

// simplify a string to be able to compare
const norm = str => normalize((str || '').toLowerCase())

// naive search over item url, description and tags
// or https://github.com/jviotti/queryl or whatever
const queryMatch = query => item => {
  const normalizedQuery = norm(query)
  const matched = norm(item.url).indexOf(normalizedQuery) > -1 ||
                  norm(item.text).indexOf(normalizedQuery) > -1  ||
                  item.tags.filter(t => norm(t).indexOf(normalizedQuery) > -1).length
  return matched
}

const filterLinks = (links, query) => links.filter(queryMatch(query))

// input + filtered links
class LinksBrowser extends React.Component {
  static propTypes = {
    links: React.PropTypes.array
  }
  static defaultProps = {
    links: []
  }
  state = {
    query: null
  }
  onInputChange = e => {
    this.setState({
      query: e.target.value
    })
  }
  render() {
    // some ES6 destructuring
    const { query } = this.state
    const { links } = this.props
    // filter results if needed
    const results = query ? filterLinks(links, query) : links
    return (
      <Centered>
        <Input onChange={ this.onInputChange } placeholder="..."/>
        <Links links={ results } />
        { (!results || !results.length) && <NoResults>Oops, no result...</NoResults>}
      </Centered>
    )
  }
}

export default LinksBrowser
