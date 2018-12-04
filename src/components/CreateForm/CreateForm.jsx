import React from 'react'

export default class CreateForm extends React.Component {
  state = { value: '' }

  handleSubmit = () => {
    this.props.onCreate({ text: this.state.value })
    this.setState({
      value: '',
    })
  }

  handleChange = e => {
    this.setState({
      value: e.target.value,
    })
  }

  render() {
    const { value } = this.state
    return (
      <React.Fragment>
        <input type="text" value={value} onChange={this.handleChange} />
        <button disabled={!value} onClick={this.handleSubmit}>
          Submit
        </button>
      </React.Fragment>
    )
  }
}
