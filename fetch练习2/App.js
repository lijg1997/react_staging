import React, { Component } from 'react';

export default class App extends Component {
  state = {
    isLoading: true,
    resName: '',
    resUrl: '',
    error: '',
    keyWord: 'v'
  };

  componentDidMount() {
    const url = `https://api.github.com/search/repositories?q=${this.state.keyWord}&sort=stars`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response.items[0]);
        const { name, html_url } = response.items[0];
        this.setState({ isLoading: false, resName: name, resUrl: html_url });
      })
      .catch(err => {
        // console.log(err.message);
        this.setState({ isLoading: false, error: err.message });
      });
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
          GitHub中含有关键字母【{keyWord}】最多星星的仓库是【<a href={resUrl}>{resName}</a>】
        </h1>
      );
    }
  }
}
