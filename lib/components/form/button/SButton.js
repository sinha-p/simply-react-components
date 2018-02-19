import React, { Component } from 'react';

import style from './SButton.css';

class SButton extends Component {

  getStyle() {            
    let theme = this.props.theme;
    
    if(this.props.style) {
      return { ...style.button, ...style['primary'], ...this.props.style }
    }
    
    if( style[theme] ) 
      return { ...style.button, ...style[theme] };  
    return { ...style.button, ...style['primary'] };
  }
  
  render() {
    return (
      <button style={this.getStyle()}>
        { this.props.children }
      </button>
    );
  }
}

export { SButton };
