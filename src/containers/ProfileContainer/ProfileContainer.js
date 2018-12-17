import { connect } from 'react-redux'
import React, { Component } from 'react'
import { changeProfile } from 'actions/profileActions'
import Profile from '../../components/Profile/Profile'

const mapStateToProps = store => {
  return (
    {
      // почему тут надо сразу два редьюсера писать?(((
      profile: { ...store.profileReducer.profileReducer.profile },
    }
  )
}

const mapDispatchToProps = dispatch => ({
  onChangeProfile: data => dispatch(changeProfile(data)),
})

class ProfileContainer extends Component {
  render() {
    console.log(this.props)
    const { profile, onChangeProfile } = this.props
    return <Profile onChange={onChangeProfile} data={profile}/>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileContainer)

