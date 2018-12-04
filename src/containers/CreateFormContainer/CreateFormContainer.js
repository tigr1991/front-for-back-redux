import { connect } from 'react-redux'
import React, { Component } from 'react'
import CreateForm from 'components/CreateForm'
import { createTodo } from 'actions/todoActions'
import uuid from 'uuid'

const generateTodo = data => ({
  id: uuid(),
  ts: Date.now(),
  isDone: false,
  ...data,
})

const mapDispatchToProps = dispatch => ({
  createTodo: data => dispatch(createTodo(generateTodo(data))),
})

class CreateFormContainer extends Component {
  render() {
    return <CreateForm onCreate={this.props.createTodo} />
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(CreateFormContainer)
