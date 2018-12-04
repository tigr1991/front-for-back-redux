export const getTodosMap = state => state.todoReducer.byId
export const getTodosList = state => Object.values(getTodosMap(state))
export const getDoneList = (state, id) => getTodosList(state).filter(td => td.isDone)
export const getNotDoneList = (state, id) => getTodosList(state).filter(td => !td.isDone)
export const getTodoById = (state, id) => getTodosMap(state)[id]
