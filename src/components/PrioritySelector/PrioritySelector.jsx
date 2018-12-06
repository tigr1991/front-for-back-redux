import React from 'react'
import styles from './PrioritySelector.styl'
import uuidv4 from 'uuid'

export default class PrioritySelector extends React.Component {

  componentWillMount() {
    this.id = uuidv4.v4();
  }

  render() {
    const { priority } = this.props
    return (
      <div className={styles.block_priority}>
        <div>
          <input type="radio" id={`priority_high_` + this.id} name={`priority` + this.id} value="high" onChange={this.props.handlePriorityChange} checked={priority === 'high'}/>
          <label htmlFor={`priority_high_` + this.id}>
                <span className="high-priority">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="High"/>
                </span>
          </label>
        </div>
        <div>
          <input type="radio" id={`priority_middle_` + this.id} name={`priority` + this.id} value="middle" onChange={this.props.handlePriorityChange} checked={priority === 'middle'}/>
          <label htmlFor={`priority_middle_` + this.id}>
                <span className="middle-priority">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Middle"/>
                </span>
          </label>
        </div>
        <div>
          <input type="radio" id={`priority_low_` + this.id} name={`priority` + this.id} value="low" onChange={this.props.handlePriorityChange} checked={priority === 'low'}/>
          <label htmlFor={`priority_low_` + this.id} >
                <span className="low-priority">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Low"/>
                </span>
          </label>
        </div>
      </div>
    )
  }
}
