import React, { Component, PropTypes } from 'react'

export default class Quote extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.quotes.quotes[this.props.quotes.currentQuote].text}</h2>
        <h3>- {this.props.quotes.quotes[this.props.quotes.currentQuote].author}</h3>

      </div>
    )
  }
}
