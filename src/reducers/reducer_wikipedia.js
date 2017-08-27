import {
  FETCH_WIKI,
  RESET_WIKI
} from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_WIKI:
      return action.payload
    case RESET_WIKI:
      return []
  }

  return state
}