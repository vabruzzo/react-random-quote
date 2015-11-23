import 'lodash'
import { PREV_QUOTE, NEXT_QUOTE } from '../constants/ActionTypes'

const initialState = {
  quotes: _.shuffle([{
    "author": "Percy Shelley",
    "category": "poetry",
    "text": "The myst of familiarity obscures from us the wonder of our being."
  }, {
    "author": "Albert Camus",
    "category": "philosophy",
    "text": "There is but one truly serious philosophical problem and that is suicide."
  }, {
    "author": "Albert Einstein",
    "category": "",
    "text": "The true sign of intelligence is not knowledge but imagination."
  }, {
    "author": "Rainer Maria Rilke",
    "category": "poetry",
    "text": "Once the realization is accepted that even between the closest human beings infinite distances continue, a wonderful living side by side can grow, if they succeed in loving the distance between them which makes it possible for each to see the other whole against the sky."
  }, {
    "author": "Friedrich Nietzsche",
    "category": "philosophy",
    "text": "The individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself."
  }, {
    "author": "Jeffrey Eugenides",
    "category": "",
    "text": "Biology gives you a brain. Life turns it into a mind."
  }, {
    "author": "Bertrand Russell",
    "category": "",
    "text": "Three passions, simple but overwhelmingly strong, have governed my life: the longing for love, the search for knowledge, and unbearable pity for the suffering of mankind."
  }, {
    "author": "Chuang Tzu",
    "category": "",
    "text": "I cannot tell if what the world considers 'happiness' is happiness or not. All I know is that when I consider the way they go about attaining it, I see them carried away headlong, grim and obsessed, in the general onrush of the human herd, unable to stop themselves or change their direction. All the while they claim to be just on the point of attaining happiness."
  }, {
    "author": "Henry David Thoreau",
    "category": "",
    "text": "It is true, I might have resisted forcibly with more or less effect, might have run 'amok' against society; but I preferred that society should run 'amok' against me, it being the desperate party."
  }]),
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
