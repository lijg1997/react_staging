import React, { Component } from 'react';

export default class Detail extends Component {
  state = {
    messages: [
      { id: '001', title: '消息1', content: '武汉加油' },
      { id: '002', title: '消息2', content: '北京加油' },
      { id: '003', title: '消息3', content: '中国加油' },
      { id: '004', title: '消息4', content: '大同加油' }
    ]
  };
  render() {
    // console.log(this.props);
    const { id } = this.props.match.params;
    const { messages } = this.state;
    const result = messages.find(item => item.id === id);
    return (
      <ul>
        <li>ID：{result.id}</li>
        <li>TITLE：{result.title}</li>
        <li>CONTENT：{result.content}</li>
      </ul>
    );
  }
}
