import React from 'react';
import { render } from 'react-dom';

import { SButton, SSwitch, SSlider } from './components';
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
      </div>
    );
  }
}

render(<App />, document.getElementById( 'sandbox' ));
