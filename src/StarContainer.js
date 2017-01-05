import React from 'react'

import Star from './Star'

//
// Star Container
// higher-order-component
// add props.onClick and props.active
// use props.id as a key to store bookmark status
//
class StarContainer extends React.Component {
  state = {
    active: false
  }
  componentWillMount() {
    this.setState({
      active: (window.localStorage.getItem(this.props.id) === 'true')
    })
  }
  onClick = () => {
    this.setState(state => ({
      active: !state.active
    }), () => {
      // setState callback - save data in local storage
      // (localStorage handle strings only)
      window.localStorage.setItem(this.props.id, ''+(this.state.active));
    })
  }
  render() {
    return <Star { ...this.props } onClick={ this.onClick } active={ this.state.active }/>
  }
}

export default StarContainer