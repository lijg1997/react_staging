import React, { Component } from 'react';
import Message from '../home_message/message';
import News from '../home_news/news';
import { NavLink, Route, Redirect, Switch } from 'react-router-dom';
export default class Home extends Component {
  back = () => {
    console.log(this.props.history);
    this.props.history.goBack();
  };
  forward = () => {
    this.props.history.goForward();
  };
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <button onClick={this.back}>回退</button>&nbsp;&nbsp;&nbsp;
        <button onClick={this.forward}>前进</button>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <NavLink className="list-group-item" activeClassName="active" to="/home/news">
                News
              </NavLink>
            </li>
            <li>
              <NavLink className="list-group-item" activeClassName="active" to="/home/message">
                Message
              </NavLink>
            </li>
          </ul>
          <div>
            <Switch>
              <Route path="/home/news" component={News} />
              <Route path="/home/message" component={Message} />
              <Redirect to="/home/news" />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
