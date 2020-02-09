import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import axios from 'axios';

export default class Search extends Component {
  myRef = React.createRef();

  handlerSearch = () => {
    const { current } = this.myRef;
    if (!current.value.trim()) {
      alert('搜索内容不能为空');
      current.value = '';
      return;
    }
    PubSub.publish('searchUser', { isFirst: false, isLoading: true });
    axios.get('https://api.github.com/search/users', { params: { q: current.value } }).then(
      response => {
        console.log(response.data.items);
        PubSub.publish('searchUser', { isLoading: false, users: response.data.items });
      },
      err => {
        PubSub.publish('searchUser', { isLoading: false, error: err.message });
      }
    );
  };

  render() {
    return (
      <div>
        <input ref={this.myRef} type="text" placeholder="enter the name you search" />
        &nbsp;
        <button onClick={this.handlerSearch}>Search</button>
      </div>
    );
  }
}
