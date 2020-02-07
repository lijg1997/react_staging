import React, { Component } from 'react';
import axios from 'axios';

export default class Search extends Component {
  handlerSearch = () => {
    this.props.searchUser({ isFirst: false, isLoading: true });
    const { value } = this.refs.input;
    axios.get('https://api.github.com/search/users', { params: { q: value } }).then(
      response => {
        console.log(response.data.items);
        this.props.searchUser({ isFirst: false, isLoading: false, users: response.data.items });
      },
      err => {
        this.props.searchUser({ isFirst: false, isLoading: false, error: err.massage });
      }
    );
  };
  render() {
    return (
      <div>
        <input ref="input" type="text" placeholder="enter the name you search" />
        &nbsp;
        <button onClick={this.handlerSearch}>Search</button>
      </div>
    );
  }
}
