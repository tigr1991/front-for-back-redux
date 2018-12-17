import React, { Component } from 'react'

class Profile extends Component {

  state = {
    "input" : "" // как бы сюда прокинуть значение из стора???
  }

  handleSubmit() {
      this.props.onChange({
        "profile" : {
          "about_me": this.state.input,
        }
      });
  }

  handleOnChange = e => {
    this.setState({
      "input" : e.target.value,
    })
  }


  render() {
    const { data } = this.props

    return (
      <div>
        <h1>About me: {data.about_me}</h1>
        <label>change info about me: </label>
        <input type="text" value={this.state.input} onChange={this.handleOnChange}/>
        <button onClick={this.handleSubmit.bind(this)}>Save</button>
      </div>
    )
  }
}


export default Profile