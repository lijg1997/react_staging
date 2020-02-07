import React, { Component } from 'react';
export default class App extends Component {
  state = {
    todos: ['吃饭', '睡觉', '打豆豆', '玩小郭德纲']
  };
  addTodo = todo => {
    let { todos } = this.state;
    todos.push(todo);
    this.setState({ todos });
  };
  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>simple TODO LIST</h1>
        <Add count={todos.length} addTodo={this.addTodo} />
        <List todos={todos} />
      </div>
    );
  }
}
class Add extends Component {
  handlerAdd = () => {
    const todo = this.todo.value;
    if (!todo.trim()) {
      alert('内容不能为空');
      this.todo.value = '';
      return;
    }
    const { addTodo } = this.props;
    addTodo(todo);
    this.todo.value = '';
  };
  render() {
    const { count } = this.props;
    return (
      <div>
        <input ref={input => (this.todo = input)} type="text" />
        <button onClick={this.handlerAdd}>#{count}</button>
      </div>
    );
  }
}
class List extends Component {
  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    );
  }
}
