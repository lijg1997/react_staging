import React, { Component } from 'react';
import { NavLink, Route, Redirect, Switch } from 'react-router-dom';
import News from '../home_news/news';
import Message from '../home_message/message';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
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
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
            <Redirect to="/home/news" />
          </Switch>
        </div>
      </div>
    );
  }
}
