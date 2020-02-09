import React, { Component } from 'react';
import Item from '../item/Item';
export default class List extends Component {
  render() {
    const { isFirst, isLoading, error, users } = this.props;
    if (isFirst) {
      return <h1>请输入用户名以查询</h1>;
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
