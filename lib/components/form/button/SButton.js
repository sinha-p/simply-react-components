import React, { Component } from 'react';

import './SButton.css';

class SButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: (this.props.theme) ? this.props.theme : ""
    };
  }

  getStyle() {            
    let theme = this.props.theme;
    
    if(this.props.style) {
      return { ...this.props.style }
    }
    return {};
  }
  
  render() {
    return (
      <button className={`${ this.state.theme }`} style={this.getStyle()}>
        { this.props.children }
      </button>
    );
  }
}

export { SButton };
