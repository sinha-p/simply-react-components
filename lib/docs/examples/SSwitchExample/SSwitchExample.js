import React, { Component }  from 'react';

import { SSwitch } from '../../../components';

class SSwitchExample extends Component {
  constructor() {
    super();
    this.state = {
      switchValue: false
    };
  }

  handleToggle(switchValue) {
    this.setState({ switchValue: switchValue });
    console.log(this.state.switchValue);
  }

  render() {
    return (
      <div style={{ textAlign:"center" }} >
        <div style={{ width:"60%", margin: "0 auto", display: "block" }}>
          <div>SWITCH</div>
          <SSwitch
            className="primary"
            onToggle={this.handleToggle.bind(this)} />
          <SSwitch
            className="success outline"
            default="true"
            onToggle={this.handleToggle.bind(this)} />
        </div>
      </div>
    );
  }
};

export { SSwitchExample };
