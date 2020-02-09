import React, { Component } from 'react';
import Detail from '../home_message_detail/detail';
import { Link, Route } from 'react-router-dom';

export default class Message extends Component {
  state = {
    messages: []
  };

  componentDidMount() {
    setTimeout(() => {
      const { messages } = this.state;
      messages.push(
        { id: '001', title: '消息1' },
        { id: '002', title: '消息2' },
        { id: '003', title: '消息3' },
        { id: '004', title: '消息4' }
      );
      this.setState(messages);
    }, 1000);
  }

  handlerPush = id => this.props.history.push(`/home/message/detail/${id}`);

  handlerReplace = id => this.props.history.replace(`/home/message/detail/${id}`);

  handlerBack = () => {
    console.log(this.props);
    this.props.history.goBack();
  };

  handlerForward = () => {
    this.props.history.goForward();
  };

  render() {
    const { messages } = this.state;
    return (
      <div>
        <button onClick={this.handlerBack}>回退</button>&nbsp;&nbsp;&nbsp;
        <button onClick={this.handlerForward}>前进</button>
        <ul>
          {messages.map(item => {
            return (
              <li key={item.id}>
                <Link to={`/home/message/detail/${item.id}`}>{item.title}</Link>&nbsp;&nbsp;
                <button onClick={() => this.handlerPush(item.id)}>push查看</button>&nbsp;&nbsp;
                <button onClick={() => this.handlerReplace(item.id)}>replace查看</button>
              </li>
            );
          })}
        </ul>
        <hr />
        <Route path="/home/message/detail/:id" component={Detail} />
      </div>
    );
  }
}
