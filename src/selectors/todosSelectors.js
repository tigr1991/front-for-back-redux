const funcSort = function compareNumeric(a, b) {
  let aPriority = null
  let bPriority = null
  switch (a.priority) {
    case 'low':
      aPriority = 1
      break
    case 'middle':
      aPriority = 2
      break
    case 'high':
      aPriority = 3
      break
  }
  switch (b.priority) {
    case 'low':
      bPriority = 1
      break
    case 'middle':
      bPriority = 2
      break
    case 'high':
      bPriority = 3
      break
  }
  if (aPriority > bPriority) {
    return -1;
  }
  return 1;
}

export const getTodosMap = state => state.todoReducer.byId
export const getTodosList = state => Object.values(getTodosMap(state))
export const getDoneList = (state, id) => getTodosList(state).filter(td => td.isDone).sort(funcSort)
export const getNotDoneList = (state, id) => getTodosList(state).filter(td => !td.isDone).sort(funcSort)
export const getTodoById = (state, id) => getTodosMap(state)[id]
