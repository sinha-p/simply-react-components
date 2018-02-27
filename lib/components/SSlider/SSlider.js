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

  onLeftHandleDrag(event) {
    const min = event.target.parentNode.getAttribute('data-min');
    let offsetL= event.target.parentNode.parentNode.offsetLeft;
    let range = event.target.previousSibling;
    let rightHandle = event.target.nextSibling.style.left.replace('%','');
    let offsetR = offsetL + (1 * event.target.parentNode.parentNode.clientWidth);
    let checkforRight = event.pageX - (parseInt(offsetL) + parseInt(rightHandle));
    console.log(checkforRight, event.pageX);
    if ((event.pageX - offsetL)<0) {
      event.target.style.left = "0%";
      range.style.left = "0%";
      let w = 100 - parseInt(rightHandle);
      range.style.width = w + '%';
      console.log(min);
    } else if (checkforRight > 5) {
      event.target.style.left = "95%";
      range.style.left = "95%";
      range.style.width = '5%';
      // console.log(max);
    } else {
      event.target.style.left = ( event.pageX - offsetL )+ "%";
      let rangeWidth = (event.pageX-offsetL)/(offsetR-offsetL)*100;
      // console.log(max * 0.01 * Math.ceil(rangeWidth));
      range.style.left = ( event.pageX - offsetL ) + "%";
      range.style.width = (parseInt(rightHandle) - (event.pageX - offsetL)) + '%'
    }
  }

  leftDrop(event) {
    this.onLeftHandleDrag(event);
  }

  onRightHandleDrag(event) {
    const max = event.target.parentNode.getAttribute('data-min');
    let offsetL= event.target.parentNode.parentNode.offsetLeft;
    let leftHandle = event.target.previousSibling.previousSibling.style.left.replace('%','');
    let range = event.target.previousSibling.previousSibling;
    let offsetR = offsetL + (1 * event.target.parentNode.parentNode.clientWidth);
    let checkforleft = event.pageX - (parseInt(offsetL) + parseInt(leftHandle));
    if (checkforleft < 5) {
      let l = (parseInt(leftHandle) + 5);
      event.target.style.left = l + "%";
      range.style.width = 0.05 * (offsetR - offsetL) + "%";
      // console.log(min);
    } else if (event.pageX > offsetR) {
      event.target.style.left = "100%";
      range.style.width = (100 - leftHandle) + "%";
      // console.log(max);
    } else {
      event.target.style.left = ( event.pageX - offsetL )+ "%";
      let rangeWidth = (event.pageX - offsetL) - leftHandle;
      // console.log(max * 0.01 * Math.ceil(rangeWidth));
      range.style.width = rangeWidth + "%";
    }
  }

  rightDrop(event) {
    this.onRightHandleDrag(event);
  }

  render() {
    const rangeStyle = {
      width: '100%',
      left: '0'
    };
    const leftHandleStyle = {
      left: '0'
    };
    const rightHandleStyle = {
      left: '100%'
    };

    let range, lefthandle, righthandle;
    if (this.props.rangeType) {
      range = <div className="range" style={rangeStyle} /> ;
      lefthandle = (<div
        className="range-handle"
        onDrag={this.onLeftHandleDrag.bind(this)}
        onDragEnd={this.leftDrop.bind(this)}
        style={leftHandleStyle} />
      );
      righthandle = (<div
        className="range-handle right-range-handle"
        onDrag={this.onRightHandleDrag.bind(this)}
        onDragEnd={this.rightDrop.bind(this)}
        style={rightHandleStyle} />
      );
    } else {
      range = <div className="range" />
      lefthandle = (<div
        className="range-handle"
        onDrag={this.onHandleDrag.bind(this)}
        onDragEnd={this.drop.bind(this)} />
      );
    }
    return (
      <div
        className="slider"
        data-max={this.props.max}
        data-min={this.props.min} >
        {range}
        {lefthandle}
        {righthandle}
      </div>
    );
  }
}

export { SSlider };
