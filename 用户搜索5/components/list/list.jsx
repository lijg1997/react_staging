import React, { Component } from 'react';
import Item from '../item/item';

export default class list extends Component {
  render() {
    const { isFirst, isLoading, error, users } = this.props;
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
