import React, { Component } from 'react';
import axios from 'axios';
import PubSub from 'pubsub-js';

export default class Search extends Component {
  myRef = React.createRef();
  handlerSearch = () => {
    // const { searchUser } = this.props;
    PubSub.publish('searchUser', { isFirst: false, isLoading: true });
    // searchUser({ isFirst: false, isLoading: true });
    const { value } = this.myRef.current;
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
