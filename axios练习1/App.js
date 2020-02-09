import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  state = {
    isLoading: true,
    resName: '',
    resUrl: '',
    error: '',
    keyWord: 'v'
  };
  componentDidMount() {
    axios
      .get('https://api.github.com/search/repositories', {
        params: { q: this.state.keyWord, sort: 'stars' }
      })
      .then(
        response => {
          console.log(response.data.items[0]);
          const { name, html_url } = response.data.items[0];
          this.setState({ isLoading: false, resName: name, resUrl: html_url });
        },
        err => {
          this.setState({ isLoading: false, error: err.message });
        }
      );
  }
  render() {
    const { isLoading, resName, resUrl, error, keyWord } = this.state;
    if (isLoading) {
      return <h1>Loading...</h1>;
    } else if (error) {
      return <h1>{error}</h1>;
    } else {
      return (
        <h1>
          github上含有关键字母【{keyWord}】星星数最多的仓库是【<a href={resUrl}>{resName}</a>】
        </h1>
      );
    }
  }
}
