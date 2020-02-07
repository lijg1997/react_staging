import React, { Component } from 'react';
import axios from 'axios';

export default class Search extends Component {
  myRef = React.createRef();
  handlerSearch = () => {
    const { searchUser } = this.props;
    searchUser({ isFirst: false, isLoading: true });
    const { value } = this.myRef.current;
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
        <input ref={this.myRef} type="text" placeholder="enter the name you search" />
        &nbsp;
        <button onClick={this.handlerSearch}>Search</button>
      </div>
    );
  }
}
