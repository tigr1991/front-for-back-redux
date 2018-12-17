import * as types from 'constants/actionTypes'

export const createTodo = data => ({ type: types.CREATE_TODO, data })

export const deleteTodo = id => ({ type: types.DELETE_TODO, id })

export const changeTodo = (id, data) => ({ type: types.CHANGE_TODO, id, data })

