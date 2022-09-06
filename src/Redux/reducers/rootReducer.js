
import { combineReducers } from 'redux'
import { directionReducer } from './directionReducer'
import { filterReducer } from './filterReducer'


export const rootReducer = combineReducers({
  filter:filterReducer,
  directions: directionReducer
})
