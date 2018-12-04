import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from 'components/Todo'

class TodosList extends Component {
  render() {
    const { todos, onDelete, onChange } = this.props

    return [
      todos.map(todo => (
        <Todo
          onDelete={onDelete.bind(null, todo.id)}
          onChange={onChange.bind(null, todo.id)}
          key={todo.id}
          todo={todo}
        />
      )),
    ]
  }
}

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.any),
}

TodosList.defaultProps = {
  todos: [],
}

export default TodosList
