import $ from 'jquery'
import 'lodash'
import { PREV_QUOTE, NEXT_QUOTE } from '../constants/ActionTypes'

let quotesJSON = []

$.ajax({
  url: './quotes.json',
  async: false,
  dataType: 'json',
  success: function(json) {
    quotesJSON = json.quotes
  }
});

const initialState = {
  quotes: _.shuffle(quotesJSON),
  currentQuote: 0
}

export default function quotes(state = initialState, action) {
  switch (action.type) {
    case PREV_QUOTE:
      return state.currentQuote < 1 ? state : Object.assign({}, state, {
        currentQuote: state.currentQuote - 1
      })
    case NEXT_QUOTE:
      return state.currentQuote > state.quotes.length - 2 ? state : Object.assign({}, state, {
        currentQuote: state.currentQuote + 1
      })
    default:
      return state
  }
}
