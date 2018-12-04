import { connect } from 'react-redux'
import React, { Component } from 'react'
import TodosList from 'components/TodosList'
import { deleteTodo, changeTodo } from 'actions/todoActions'
import selectors from 'selectors'

const mapStateToProps = store => ({
  todos: selectors.todo.getNotDoneList(store),
})

const mapDispatchToProps = dispatch => ({
  onDeleteTodo: id => dispatch(deleteTodo(id)),
  onChangeTodo: (id, changes) => dispatch(changeTodo(id, changes)),
})

class TodosListContainer extends Component {
  render() {
    const { todos, onDeleteTodo, onChangeTodo } = this.props
    return <TodosList onDelete={onDeleteTodo} onChange={onChangeTodo} todos={todos} />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodosListContainer)
