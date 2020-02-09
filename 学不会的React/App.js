import React, { Component } from 'react';
import { unmountComponentAtNode } from 'react-dom';

export default class App extends Component {
  constructor() {
    console.log('--constructor--');
    super();
  }

  state = { opacity: 1 };

  UNSAFE_componentWillMount() {
    console.log('--componentWillMount--');
  }

  componentDidMount() {
    console.log('--componentDidMount--');
    this.id = setInterval(() => {
      let { opacity } = this.state;
      opacity -= 0.2;
      if (opacity <= 0) opacity = 1;
      this.setState({ opacity });
    }, 200);
  }

  shouldComponentUpdate() {
    console.log('--shouldComponentUpdate--');
    return true;
  }

  handlerForce = () => {
    this.forceUpdate();
  };

  UNSAFE_componentWillUpdate() {
    console.log('--componentWillUpdate--');
  }

  componentDidUpdate() {
    console.log('--componentDidUpdate--');
  }

  handlerDie = () => {
    unmountComponentAtNode(document.getElementById('root'));
  };

  componentWillUnmount() {
    console.log('--componentWillUnmount--');
    clearInterval(this.id);
  }

  render() {
    console.log('--render--');
    // let { opacity } = this.state;
    // setTimeout(() => {
    //   opacity -= 0.2;
    //   if (opacity <= 0) opacity = 1;
    //   this.setState({ opacity });
    // }, 200);
    const { opacity } = this.state;
    return (
      <div>
        <h1 style={{ opacity }}>React学不会怎么办？</h1>
        <button onClick={this.handlerDie}>不活了</button>&nbsp;&nbsp;&nbsp;
        <button onClick={this.handlerForce}>强制刷新</button>
      </div>
    );
  }
}
