import React, { Component } from 'react';
import Search from './components/search/Search';
import List from './components/list/List';

export default class App extends Component {
  state = {
    isFirst: true,
    isLoading: false,
    error: '',
    users: []
  };
  searchUser = searchObj => {
    this.setState(searchObj);
  };
  render() {
    return (
      <div className="container">
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <Search searchUser={this.searchUser} />
        </section>
        <List {...this.state} />
      </div>
    );
  }
}
