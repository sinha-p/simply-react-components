import React from 'react';
import { render } from 'react-dom';

import { SButton, SSwitch, SSlider, SCheckbox } from './components';
import { SButtonExample, SSwitchExample } from './docs/examples/'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      switchValue: false,
      checkValue: false
    };
  }

  handleToggle(switchValue) {
    this.setState({ switchValue: switchValue });
    console.log(this.state.switchValue);
  }

  handleCheckbox(checkValue) {
    console.log(checkValue);
  }

  render () {
    const rangeSliderWrapperStyle = {
      width: '350px'
    };
    return (
      <div style={{ textAlign:"center" }} >
        <SButtonExample />
        <SSwitchExample />
        <SSlider
          max="500"
          min="0"
        />
        <div style={rangeSliderWrapperStyle}>
          <SSlider
            className="warning"
            max="200"
            min="0"
            rangeType="true"
          />
        </div>
        <SCheckbox className="success"
          handleCheckbox={this.handleCheckbox.bind(this)}
          label="Checkbox1" />
      </div>
    );
  }
}

render(<App />, document.getElementById( 'sandbox' ));
