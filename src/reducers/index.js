import { combineReducers } from 'redux'

import todoReducer from './todoReducer'
import profileReducer from './profileReducer'

export default combineReducers({ todoReducer , profileReducer})
