import React, { Component } from 'react';
import axios from 'axios';
import PubSub from 'pubsub-js';

export default class search extends Component {
  handlerSearch = () => {
    const { value } = this.input;
    if (!value.trim()) {
      alert('输入信息不能为空');
      this.input.value = '';
      return;
    }
    PubSub.publish('searchUser', { isFirst: false, isLoading: true });
    // const { searchUser } = this.props;
    // searchUser({ isFirst: false, isLoading: true });
    axios.get('https://api.github.com/search/users', { params: { q: value } }).then(
      response => {
        console.log(response.data.items);
        PubSub.publish('searchUser', { isLoading: false, users: response.data.items });
        // searchUser({ isLoading: false, users: response.data.items });
      },
      err => {
        PubSub.publish('searchUser', { isLoading: false, error: err.message });
        // searchUser({ isLoading: false, error: err.message });
      }
    );
    this.input.value = '';
  };
  render() {
    return (
      <div>
        <input
          ref={input => {
            this.input = input;
          }}
          type="text"
          placeholder="enter the name you search"
        />
        &nbsp;
        <button onClick={this.handlerSearch}>Search</button>
      </div>
    );
  }
}
