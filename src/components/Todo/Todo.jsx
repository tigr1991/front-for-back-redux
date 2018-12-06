import React from 'react'
import PropTypes from 'prop-types'
import styles from './Todo.styl'
import PrioritySelector from '../PrioritySelector/PrioritySelector.jsx'

export default class Todo extends React.Component {
  handleDoneClick = () => {
    this.props.onChange({
      isDone: !this.props.todo.isDone,
    })
  }

  handlePriorityChange = e => {
    this.props.onChange({
      priority: e.target.value,
    })
  }

  render() {
    const { todo, onDelete } = this.props
    let classColor = ''; // Тут же без let никуд?
    switch (todo.priority) {
      case 'low':
         classColor = 'low-priority'
        break
      case 'middle':
         classColor = 'middle-priority'
        break
      case 'high':
         classColor = 'high-priority'
        break
    }
    return (
      <div className={`${styles.wrapper} br-md m-b shadow-md p-a ${classColor}`}>
        <div>
          <h4 className="text-accent">{todo.text}</h4>
          <div className="m-a-md">
            {new Date(todo.ts).toUTCString()}
          </div>
          <PrioritySelector handlePriorityChange={this.handlePriorityChange} priority={todo.priority}/>
        </div>
        <div>
          <a href="#" onClick={onDelete}>
            <h1>X</h1>
          </a>

          <button onClick={this.handleDoneClick} className="br-md shadow-md">
            {todo.isDone ? 'Undone' : 'Mark as done'}
          </button>
        </div>
      </div>
    )
  }
}

Todo.propsTypes = {
  todo: PropTypes.object.isRequired,
}
