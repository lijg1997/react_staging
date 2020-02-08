import React, { Component } from 'react';
export default class Detail extends Component {
  state = {
    massages: [
      { id: '001', item: '消息1', content: '武汉加油' },
      { id: '002', item: '消息2', content: '中国加油' },
      { id: '003', item: '消息3', content: '山西加油' },
      { id: '004', item: '消息4', content: '大同加油' }
    ]
  };
  render() {
    console.log(this.props);
    const { id } = this.props.match.params;
    const { massages } = this.state;
    // const result = massages.find(item => item.id === id);
    const result = massages.filter(item => item.id === id);
    // console.log(result);
    return (
      <ul>
        <li>ID:{result[0].id}</li>
        <li>ITEM:{result[0].title}</li>
        <li>CONTENT:{result[0].content}</li>
      </ul>
    );
  }
}
