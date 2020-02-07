import React, { Component } from 'react';
import Add from './components/add/add';
import List from './components/list/list';
export default class App extends Component {
  state = {
    comments: [
      { id: '432342342343242', name: 'lijingui1', comment: 'React太难了' },
      { id: '432342342342343', name: 'lijingui2', comment: 'React太难了' },
      { id: '432342342343342', name: 'lijingui3', comment: 'React太难了' }
    ]
  };
  addComment = obj => {
    let { comments } = this.state;
    comments.push(obj);
    this.setState({ comments });
  };
  deleteComment = id => {
    let { comments } = this.state;
    comments = comments.filter(item => {
      return item.id !== id;
    });
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
