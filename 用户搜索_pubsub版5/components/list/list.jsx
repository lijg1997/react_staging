import React, { Component } from 'react';
import Item from '../item/item';
import PubSub from 'pubsub-js';

export default class list extends Component {
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
    const { isFirst, isLoading, error, users } = this.state;
    if (isFirst) return <h1>请输入要查询的信息</h1>;
    else if (isLoading) return <h1>Loading...</h1>;
    else if (error) return <h1>{error}</h1>;
    else {
      return (
        <div className="row">
          {users.map((item, index) => (
            <Item key={index} {...item} />
          ))}
        </div>
      );
    }
  }
}
