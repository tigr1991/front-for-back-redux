import React from 'react'
import PropTypes from 'prop-types'
import styles from './Todo.styl'

export default class Todo extends React.Component {
  handleDoneClick = () => {
    this.props.onChange({
      isDone: !this.props.todo.isDone,
    })
  }
  render() {
    const { todo, onDelete } = this.props
    return (
      <div className={`${styles.wrapper} br-md m-b shadow-md p-a `}>
        <div>
          <h4 className="text-accent">{todo.text}</h4>
          {new Date(todo.ts).toUTCString()}
        </div>
        <div>
          <a href="#" onClick={onDelete}>
            <h1>X</h1>
          </a>

          <a href="#" onClick={this.handleDoneClick}>
            {todo.isDone ? 'Undone' : 'Mark as done'}
          </a>
        </div>
      </div>
    )
  }
}

Todo.propsTypes = {
  todo: PropTypes.object.isRequired,
}
