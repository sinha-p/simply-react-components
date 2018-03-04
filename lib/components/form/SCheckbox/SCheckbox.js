import React, { Component } from 'react';

import './SCheckbox.scss';

class SCheckbox extends Component {

  getClassName() {
    if(this.props.className) {
      return "simple-checkbox " + this.props.className;
    } else {
      return "simple-checkbox default";
    }
  }

  handleCheckbox(e) {
    this.props.handleCheckbox(e.target.checked);
  }

  render() {
    return (
      <div className={this.getClassName()}>
        <label>
          <input type="checkbox" onChange={e => this.handleCheckbox(e)}/>
          <span className="custom-checkbox">
            <span className="box"></span>
          </span>
          <span>{this.props.label}</span>
        </label>
      </div>
    )
  }
}

export { SCheckbox };
