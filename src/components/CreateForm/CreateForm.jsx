import React from 'react'
import styles from './CreateForm.styl'
import PrioritySelector from '../PrioritySelector/PrioritySelector.jsx'

export default class CreateForm extends React.Component {

  state = {
    todoText: '',
    todoPriority: 'middle',
  }

  handleSubmit = () => {
    this.props.onCreate({
      text: this.state.todoText,
      priority: this.state.todoPriority,
    })
    this.setState({
      todoText: '',
      todoPriority: 'middle',
    })
  }

  handleTextChange = e => {
    this.setState({
      todoText: e.target.value,
    })
  }

  handlePriorityChange = e => {
    this.setState({
      todoPriority: e.target.value,
    })
  }

  render() {
    const { todoText, todoPriority } = this.state
    return (
      <div className={`${styles.panel} padding-a br-lg shadow-lg p-a-md`}>
        <PrioritySelector handlePriorityChange={this.handlePriorityChange} priority={todoPriority}/>
        <input type="text" value={todoText} onChange={this.handleTextChange} className="br-md  m-t-2"/>
        <button disabled={!todoText} onClick={this.handleSubmit} className="br-md">
          Submit
        </button>
      </div>
    )
  }
}
