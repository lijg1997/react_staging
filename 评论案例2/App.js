import React, { Component } from 'react';
import Add from './components/add/add';
import List from './components/list/list';

export default class App extends Component {
  state = {
    comments: [
      { id: '3423445324534', name: 'lijingui1', comment: 'React太难了' },
      { id: '3423445324234', name: 'lijingui2', comment: 'React太难了' },
      { id: '3423443324534', name: 'lijingui3', comment: 'React太难了' }
    ]
  };

  addComment = commentObj => {
    let { comments } = this.state;
    comments.push(commentObj);
    this.setState({ comments });
  };

  deleteComment = id => {
    let { comments } = this.state;
    comments = comments.filter(comment => comment.id !== id);
    this.setState({ comments });
  };

  render() {
    const { comments } = this.state;
    return (
      <div id="app">
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add addComment={this.addComment} />
          <List comments={comments} deleteComment={this.deleteComment} />
        </div>
      </div>
    );
  }
}
