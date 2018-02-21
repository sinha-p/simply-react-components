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
      <div style={{ textAlign:"center" }} >
        <div style={{ width:"60%", margin: "0 auto", display: "block" }}>
          <div>COLORS</div>
          <SButton> default </SButton>
          <SButton className="primary"> primary </SButton>
          <SButton className="success"> success </SButton>
          <SButton className="failure"> failure </SButton>
          <SButton className="warning"> warning </SButton>
          <SButton className="light"> light </SButton>
          <SButton className="dark"> dark </SButton>
          <SButton
            className="primary"
            disabled
          > diasbled </SButton>
        </div>

        <div style={{ clear:"both", height: "1em", width: "1em"  }} />

        <div style={{ width:"60%", margin: "0 auto", display: "block" }}>
          <div>SHAPES [ fill - outline]</div>
          <SButton className="primary square"> default | square </SButton>
          <SButton className="success round"> round </SButton>
          <SButton className="failure capsule"> capsule </SButton>
          <SButton className="primary outline square"> default | square </SButton>
          <SButton className="success outline round"> round </SButton>
          <SButton className="failure outline capsule"> capsule </SButton>
          <SButton
            className="failure outline capsule"
            disabled
          > capsule </SButton>
        </div>

        <div style={{ clear:"both", height: "1em", width: "1em"  }} />

        <div style={{ width:"60%", margin: "0 auto", display: "block" }}>
          <div>EFFECTS [ line ]</div>
          <SButton className="primary square effect overlay-spread"> overaly-open </SButton>
          <SButton className="failure round effect overlay-fill"> overaly-fill </SButton>
          <SButton className="success capsule effect overlay-slide"> overaly-slide </SButton>
          <SButton className="primary square effect overlay-shutter"> overaly-shutter </SButton>
          <SButton className="failure round effect overlay-flash"> overaly-flash </SButton>
          <SButton className="success capsule effect overlay-open"> overaly-pop </SButton>
        </div>
        <SSwitch onToggle={this.handleToggle.bind(this)} />
        <SSwitch default="true" onToggle={this.handleToggle.bind(this)} />
      </div>
    );
  }
}

render(<App />, document.getElementById( 'sandbox' ));
