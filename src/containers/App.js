import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Quote from '../components/Quote';
import * as QuoteActions from '../actions/quotes'

export default class App extends Component {
  render() {
    const { quotes, actions } = this.props
    return (
      <div>
        <Quote quotes={quotes} />
        <div className='buttons'>
            <button onClick={actions.prevQuote}>previous</button>
            <button onClick={actions.nextQuote}>next</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    quotes: state.quotes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(QuoteActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
