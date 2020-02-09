import React, { Component } from 'react';
import './item.css';
import PubSub from 'pubsub-js';

export default class Item extends Component {
  handlerDelete = (id, name) => {
    if (window.confirm(`您确定要删除【${name}】的信息吗？`)) {
      PubSub.publish('deleteComment', id);
    }
  };
  render() {
    const { id, name, comment } = this.props;
    return (
      <li className="list-group-item">
        <div className="handle">
          <a
            onClick={() => {
              this.handlerDelete(id, name);
            }}
            href="##">
            删除
          </a>
        </div>
        <p className="user">
          <span>{name}</span>
          <span>说:</span>
        </p>
        <p className="centence">{comment}</p>
      </li>
    );
  }
}
