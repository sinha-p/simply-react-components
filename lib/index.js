import React from 'react';
import { render } from 'react-dom';

import { SButton, SSwitch } from './components';

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
      <div>
        <SButton className="primary"> Primary </SButton>
        <SButton className="danger"> Danger </SButton>
        <SButton className="outline"> OUTLINE </SButton>
        <SButton style={ {background:"#60b040", color: "#f0f0f0", borderRadius: "1.5rem"} }> CUSTOM </SButton>
        <SSwitch onToggle={this.handleToggle.bind(this)} />
      </div>
    );
  }
}

render(<App />, document.getElementById( 'sandbox' ));
