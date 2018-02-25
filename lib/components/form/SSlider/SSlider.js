import React, { Component } from 'react';

import './SSlider.scss';

class SSlider extends Component {

  onHandleDrag(event) {
    const min = event.target.parentNode.getAttribute('data-min');
    const max = event.target.parentNode.getAttribute('data-max');
    const offsetL= event.target.parentNode.parentNode.offsetLeft;
    const range = event.target.previousSibling;
    const offsetR = offsetL + (1 * event.target.parentNode.parentNode.clientWidth);

    if ((event.pageX - offsetL)<0) {
      event.target.style.left = "0px";
      range.style.width = "0%";
      console.log(min);
    } else if (event.pageX > offsetR) {
      event.target.style.left = (offsetR-offsetL) + "px";
      range.style.width = "100%";
      console.log(max);
    } else {
      event.target.style.left = ( event.pageX - offsetL )+ "px";
      let rangeWidth = (event.pageX-offsetL)/(offsetR-offsetL)*100;
      console.log(max * 0.01 * Math.ceil(rangeWidth));
      range.style.width = rangeWidth + "%";
    }
  }

  drop(event){
    this.onHandleDrag(event);
  }

  render() {
    return (
      <div
        className="slider"
        data-max={this.props.max}
        data-min={this.props.min} >
        <div
          className="range" />
        <div
          className="range-handle"
          onDrag={this.onHandleDrag.bind(this)}
          onDragEnd={this.drop.bind(this)} />
      </div>
    )
  }
}

export { SSlider };
