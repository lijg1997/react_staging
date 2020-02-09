import React, { Component } from 'react';
import axios from 'axios';
export default class extends Component {
  handlerSearch = () => {
    const { searchUser } = this.props;
    const { value } = this.input;
    searchUser({ isFirst: false, isLoading: true });
    axios.get('https://api.github.com/search/users', { params: { q: value } }).then(
      response => {
        console.log(response.data.items);
        searchUser({ isLoading: false, users: response.data.items });
      },
      err => {
        searchUser({ isLoading: false, error: err.message });
      }
    );
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
