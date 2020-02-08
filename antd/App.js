import React, { Component } from 'react';
import { Button, Input, message } from 'antd';

export default class App extends Component {
  handlerShow = () => {
    message.success('成功了', 1);
  };
  render() {
    return (
      <div className="App">
        <h1>React</h1>
        <Button onClick={this.handlerShow} type="danger">
          Button
        </Button>
        <Button onClick={this.handlerShow} type="primary">
          Button
        </Button>
        <br />
        <Input style={{ width: '200px' }} />
      </div>
    );
  }
}
