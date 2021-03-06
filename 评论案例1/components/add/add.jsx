import React, { Component } from 'react';
import uuid from 'uuid';
export default class Add extends Component {
  handlerAdd = () => {
    const name = this.name.value;
    const comment = this.comment.value;
    console.log(this);
    if (!name.trim() || !comment.trim()) {
      alert('名字或评论不能为空');
      this.name.value = '';
      this.comment.value = '';
      return;
    }
    const { addComment } = this.props;
    addComment({ id: uuid(), name, comment });
    this.name.value = '';
    this.comment.value = '';
  };
  render() {
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input
              ref={input => {
                this.name = input;
              }}
              type="text"
              className="form-control"
              placeholder="用户名"
            />
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea
              ref={textarea => {
                this.comment = textarea;
              }}
              className="form-control"
              rows="6"
              placeholder="评论内容"></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button
                onClick={this.handlerAdd}
                type="button"
                className="btn btn-default pull-right">
                提交
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
