import React, { Component } from 'react';
import './list.css';
import Item from '../item/item';
import PubSub from 'pubsub-js';

export default class List extends Component {
  state = {
    comments: [
      { id: '3423445324534', name: 'lijingui111', comment: 'React太难了' },
      { id: '3423445324234', name: 'lijingui222', comment: 'React太难了' },
      { id: '3423443324534', name: 'lijingui333', comment: 'React太难了' }
    ]
  };

  componentDidMount() {
    PubSub.subscribe('addComment', (msg, data) => {
      let { comments } = this.state;
      comments.push(data);
      this.setState({ comments });
    });
    PubSub.subscribe('deleteComment', (msg, id) => {
      let { comments } = this.state;
      comments = comments.filter(comment => comment.id !== id);
      this.setState({ comments });
    });
  }

  render() {
    const { comments } = this.state;
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{ display: comments.length ? 'none' : 'block' }}>
          暂无评论，点击左侧添加评论！！！
        </h2>
        <ul className="list-group">
          {comments.map(comment => (
            <Item key={comment.id} {...comment} />
          ))}
        </ul>
      </div>
    );
  }
}
