import React, { Component } from 'react';
import Search from './components/search/search';
import List from './components/list/list';
export default class App extends Component {
  state = {
    isFirst: true,
    isLoading: false,
    error: '',
    users: []
  };
  searchUser = obj => {
    this.setState(obj);
  };
  render() {
    const { users } = this.state;
    return (
      <div className="container">
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <Search searchUser={this.searchUser} />
        </section>
        {users.map((personObj, index) => (
          <List key={personObj.login} {...personObj} />
        ))}
      </div>
    );
  }
}
