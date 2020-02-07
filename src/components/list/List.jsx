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
      this.setState(data);
    });
  }

  render() {
    const { users, error, isFirst, isLoading } = this.state;
    if (isFirst) {
      return <h1>请输入用户名搜索</h1>;
    } else if (isLoading) {
      return <h1>Loading...</h1>;
    } else if (error) {
      return <h1>{error}</h1>;
    } else {
      return (
        <div className="row">
          {users.map((personObj, index) => (
            <Item key={index} {...personObj} />
          ))}
        </div>
      );
    }
  }
}
