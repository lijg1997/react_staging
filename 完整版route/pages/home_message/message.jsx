import React, { Component } from 'react';
import Detail from '../home_message_detail/detail';
import { Link, Route } from 'react-router-dom';

export default class Message extends Component {
  state = {
    messages: []
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        messages: [
          { id: '001', title: '消息1' },
          { id: '002', title: '消息2' },
          { id: '003', title: '消息3' },
          { id: '004', title: '消息4' }
        ]
      });
    }, 1000);
  }

  handlerPush = id => {
    this.props.history.push(`/home/message/detail/${id}`);
  };

  handlerReplace = id => {
    this.props.history.replace(`/home/message/detail/${id}`);
  };

  render() {
    const { messages } = this.state;
    // console.log(this);
    return (
      <ul>
        {messages.map(item => {
          return (
            <li key={item.id}>
              <Link to={`/home/message/detail/${item.id}`}>{item.title}</Link>
              &nbsp;&nbsp;
              <button
                onClick={() => {
                  this.handlerPush(item.id);
                }}>
                push查看
              </button>
              &nbsp;&nbsp;
              <button
                onClick={() => {
                  this.handlerReplace(item.id);
                }}>
                replace查看
              </button>
            </li>
          );
        })}
        <hr />
        <Route path="/home/message/detail/:id" component={Detail} />
      </ul>
    );
  }
}
