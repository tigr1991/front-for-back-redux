import { combineReducers } from 'redux'
import * as types from 'constants/actionTypes'

const initialState = {
  "profile": {
    "about_me": ""
  },
}

const profileReducer = (state = initialState, action) => {
  const { type, data } = action
  switch (type) {
    case types.CHANGE_PROFILE: {
      return {
        ...state,
        "profile": { ...data.profile },
      }
    }
    default:
      return state
  }
}

export default combineReducers({ profileReducer })
