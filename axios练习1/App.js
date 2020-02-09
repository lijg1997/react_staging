import React, { Component } from 'react';
export default class App extends Component {
  state = {
    isLoading: true,
    repoName: '',
    repoUrl: '',
    error: '',
    keyWord: 'v'
  };
  componentDidMount = () => {
    const url = `https://api.github.com/search/repositories?q=${this.state.keyWord}&sort=stars`;
    fetch(url)
      .then(response => response.json())
      .then(value => console.log('成功的数据', value))
      .catch(error => console.log('失败了', error));
    // axios
    //   .get('https://api.github.com/search/repositories', {
    //     params: { q: this.state.keyWord, sort: 'stars' }
    //   })
    //   .then(
    //     response => {
    //       const { name, html_url } = response.data.items[0];
    //       console.log(response);
    //       this.setState({ isLoading: false, repoName: name, repoUrl: html_url });
    //     },
    //     error => {
    //       this.setState({ isLoading: false, error: error });
    //     }
    //   );
  };
  render() {
    const { isLoading, repoName, repoUrl, error, keyWord } = this.state;
    if (isLoading) {
      return <h1>isLoading</h1>;
    } else if (error) {
      return <h1>{error}</h1>;
    } else {
      return (
        <h1>
          GitHub上含有【{keyWord}】关键字最多的仓库是【<a href={repoUrl}>{repoName}</a>】
        </h1>
      );
    }
  }
}
