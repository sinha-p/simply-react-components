import React from 'react';
import { render } from 'react-dom';

import { SButton, SSwitch } from './components';
import { SButtonExample } from './docs/examples/'

class App extends React.Component {

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

  render () {
    return (
      <div style={{ textAlign:"center" }} >
        <SButtonExample />
        <SSwitch onToggle={this.handleToggle.bind(this)} />
        <SSwitch default="true" onToggle={this.handleToggle.bind(this)} />
      </div>
    );
  }
}

render(<App />, document.getElementById( 'sandbox' ));
