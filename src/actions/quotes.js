import * as types from '../constants/ActionTypes'

export function prevQuote() {
  return { type: types.PREV_QUOTE }
}

export function nextQuote() {
  return { type: types.NEXT_QUOTE }
}
