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
    const max = event.target.parentNode.getAttribute('data-max');
    const sliderWidth = event.target.parentNode.parentNode.clientWidth; /* width of slider */

    let offsetL= event.target.parentNode.parentNode.offsetLeft; /* position of slider from left **/
    let range = event.target.previousSibling; /* range mark */
    let rightHandle = event.target.nextSibling.style.left.replace('%',''); /* position of right handle */
    let checkforRight = (event.pageX - parseInt(offsetL, 10))/sliderWidth * 100 - parseInt(rightHandle, 10); /* difference between leftHandle from rightHandle */

    if ((event.pageX - offsetL)<0) { /* check if marker crosses left limit */
      event.target.style.left = "0%";
      range.style.left = "0%";
      let w = 100 - parseInt(rightHandle, 10);
      range.style.width = w + '%';
      console.log(min, Math.ceil(rightHandle * 0.01 * max));
    } else if (checkforRight > 5) { /* check if difference is less than 5 */
      let r = (parseInt(rightHandle, 10) - 5);
      event.target.style.left = r + "%";
      range.style.left = r + "%";
      range.style.width = '5%';
      console.log(min + Math.ceil(r*0.01*(max-min)), Math.ceil((max-min)*0.01*rightHandle));
    } else {
      event.target.style.left = (( event.pageX - offsetL )/ sliderWidth * 100 )+ "%";
      range.style.left = ((event.pageX - offsetL)/ sliderWidth * 100 ) + "%";
      range.style.width = (parseInt(rightHandle, 10) - ((event.pageX - offsetL)/sliderWidth * 100)) + '%';
      console.log(min + Math.ceil(event.target.style.left.replace('%','') * 0.01 * (max-min)), Math.ceil((max-min)*0.01*rightHandle));
    }
  }

  leftDrop(event) {
    this.onLeftHandleDrag(event);
  }

  onRightHandleDrag(event) {
    const min = event.target.parentNode.getAttribute('data-min');
    const max = event.target.parentNode.getAttribute('data-max');
    const sliderWidth = event.target.parentNode.parentNode.clientWidth; /* width of slider */

    let offsetL= event.target.parentNode.parentNode.offsetLeft; /* position of slider from left */
    let leftHandle = event.target.previousSibling.previousSibling.style.left.replace('%',''); /* position of left Marker */
    let range = event.target.previousSibling.previousSibling; /* range element */
    let offsetR = offsetL + (1 * sliderWidth); /* right position of slider */
    let checkforleft = (event.pageX - parseInt(offsetL, 10))/sliderWidth * 100 - parseInt(leftHandle, 10); /* difference between left marker from right marker */

    if (checkforleft < 5) {
      let l = (parseInt(leftHandle, 10) + 5);
      event.target.style.left = l + "%";
      range.style.width = "5%";
      console.log(Math.ceil((max-min)*0.01*leftHandle), min + Math.ceil(l*0.01*(max-min)));
    } else if (event.pageX > offsetR) {
      event.target.style.left = "100%";
      range.style.width = (100 - leftHandle) + "%";
      console.log(Math.ceil(leftHandle * 0.01 * min), max);
    } else {
      event.target.style.left = ( event.pageX - offsetL )/sliderWidth * 100+ "%";
      let rangeWidth = (event.pageX - offsetL - (leftHandle*sliderWidth/100))/sliderWidth * 100;
      range.style.width = rangeWidth + "%";
      console.log(Math.ceil((max-min)*0.01*leftHandle), min + Math.ceil(event.target.style.left.replace('%','') * 0.01 * (max-min)));
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
