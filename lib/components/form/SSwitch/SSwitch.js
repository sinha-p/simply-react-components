import React, { Component } from 'react';

import './SSwitch.scss';

class SSwitch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      switchValue: (this.props.default !== undefined) ? ((this.props.default === 'true') ? true : false) : false,
      className: (this.props.className) ? this.props.className : ""
    };
  }

  getClassName() {
    return "switch " + this.state.className;
  }

  handleChange() {
    this.setState({
      switchValue: !this.state.switchValue
    });
    this.props.onToggle(this.state.switchValue);
  }

  render() {
    return (
      <div className={this.getClassName()}>
        <input
          className="checkbox"
          defaultChecked={this.state.switchValue}
          onChange={this.handleChange.bind(this)}
          type="checkbox"
        />
        <div className="switch-circle" />
        <div className="fill" />
      </div>
    );
  }
}

export { SSwitch };
