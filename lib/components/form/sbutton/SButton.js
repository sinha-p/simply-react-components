import React, { Component } from 'react';

import './SButton.css';

class SButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      className: (this.props.className) ? this.props.className : ""
    };
  }

  getClassName() {
    return "button " + this.state.className;
  }

  render() {
    return (
      <button
        {...this.props}
        className={this.getClassName()}
      > { this.props.children }
      </button>
    );
  }
}

export { SButton };
