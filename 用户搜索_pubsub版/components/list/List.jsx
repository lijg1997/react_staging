import React, { Component } from 'react';
import Item from '../item/Item';
import PubSub from 'pubsub-js';

export default class List extends Component {
  state = {
    isFirst: true,
    isLoading: false,
    error: '',
    users: []
  };

  componentDidMount() {
    PubSub.subscribe('searchUser', (msg, data) => {
      console.log(data);
      this.setState(data);
    });
  }

  render() {
    const { isFirst, isLoading, error, users } = this.state;
    if (isFirst) {
      return <h1>请输入您要查询的用户名</h1>;
    } else if (isLoading) {
      return <h1>isLoading...</h1>;
    } else if (error) {
      return <h1>{error}</h1>;
    } else {
      return (
        <div className="row">
          {users.map((personObj, index) => {
            return <Item key={index} {...personObj} />;
          })}
        </div>
      );
    }
  }
}
