import React, { Component } from 'react';

import './SSwitch.css';

class SSwitch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      switchValue: false
    };
  }

  handleChange() {
    this.setState({
      switchValue: !this.state.switchValue
    });
    this.props.onToggle(this.state.switchValue);
  }

  render() {
    return (
      <div className="toggle">
        <input className="check" type="checkbox" onChange={this.handleChange.bind(this)}/>
        <div className="switch" />
        <div className="track" />
      </div>
    );
  }
}

export { SSwitch };
