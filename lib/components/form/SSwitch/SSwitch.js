import React, { Component } from 'react';

import './SSwitch.scss';

class SSwitch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      switchValue: (this.props.default !== undefined) ? ((this.props.default === 'true') ? true : false) : false
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
        <input
          className="check"
          defaultChecked={this.state.switchValue} 
          onChange={this.handleChange.bind(this)}
          type="checkbox"
        />
        <div className="switch" />
        <div className="track" />
      </div>
    );
  }
}

export { SSwitch };
