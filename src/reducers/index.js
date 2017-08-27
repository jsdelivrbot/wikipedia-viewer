import { combineReducers } from 'redux'
import WikiReducer from './reducer_wikipedia'

const rootReducer = combineReducers({
  wikipedia: WikiReducer
})

export default rootReducer