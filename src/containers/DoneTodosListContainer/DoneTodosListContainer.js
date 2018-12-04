import { connect } from 'react-redux'
import React, { Component } from 'react'
import TodosList from 'components/TodosList'
import selectors from 'selectors'
import { deleteTodo, changeTodo } from 'actions/todoActions'

const mapStateToProps = store => ({
  doneTodos: selectors.todo.getDoneList(store),
})

const mapDispatchToProps = dispatch => ({
  onDeleteTodo: id => dispatch(deleteTodo(id)),
  onChangeTodo: (id, changes) => dispatch(changeTodo(id, changes)),
})

class DoneTodosListContainer extends Component {
  render() {
    const { doneTodos, onDeleteTodo, onChangeTodo } = this.props
    return <TodosList onDelete={onDeleteTodo} onChange={onChangeTodo} todos={doneTodos} />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DoneTodosListContainer)
