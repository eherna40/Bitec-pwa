import { combineReducers } from 'redux'

import categoryReducer from './category'
import sessionReducer from './session'
export default combineReducers({
    categoryReducer,
    sessionReducer
})