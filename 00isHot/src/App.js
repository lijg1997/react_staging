import React, { Component } from 'react';
export default class Weather extends Component {
  state = {
    isHot: true
  };
  handler = () => {
    let { isHot } = this.state;
    isHot = !isHot;
    this.setState({ isHot });
  };
  render() {
    return <h2 onClick={this.handler}>今天天气很{this.state.isHot ? '炎热' : '凉爽'}</h2>;
  }
}
