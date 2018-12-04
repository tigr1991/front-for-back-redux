import * as types from 'constants/actionTypes'

export const createTodo = data => dispatch => {
  dispatch({ type: types.CREATE_TODO, data })
}

export const deleteTodo = id => dispatch => {
  dispatch({ type: types.DELETE_TODO, id })
}

export const changeTodo = (id, data) => dispatch => {
  dispatch({ type: types.CHANGE_TODO, id, data })
}
