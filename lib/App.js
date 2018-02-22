import React from 'react';
import { render } from 'react-dom';

import { SButton, SSwitch } from './components';
import { SButtonExample, SSwitchExample } from './docs/examples/'

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
        <SSwitchExample />
      </div>
    );
  }
}

render(<App />, document.getElementById( 'sandbox' ));
