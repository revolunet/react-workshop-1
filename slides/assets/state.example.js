import React from "react"

export default class Counter extends React.Component {
  state = {
    clicks: 0
  }
  onClick = () => {
    this.setState(state => ({
      clicks: state.clicks + 1
    }))
  }
  render() {
    return (
      <div>
        <button onClick={ this.onClick }>click ({ this.state.clicks })</button>
      </div>
    )
  }
}
