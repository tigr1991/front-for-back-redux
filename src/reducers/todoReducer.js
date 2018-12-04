import { combineReducers } from 'redux'
import * as types from 'constants/actionTypes'

const initialState = {}

const byId = (state = initialState, action) => {
  const { type, data, id } = action
  switch (type) {
    case types.CREATE_TODO: {
      return { ...state, [data.id]: data }
    }
    case types.DELETE_TODO: {
      const { [id]: deletedItem, ...rest } = state
      return rest
    }
    case types.CHANGE_TODO: {
      return {
        ...state,
        [id]: { ...state[id], ...data },
      }
    }

    default:
      return state
  }
}

export default combineReducers({ byId })
