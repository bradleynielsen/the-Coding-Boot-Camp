import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './components/TodoItem';


class App extends React.Component {

  constructor() {
    super();
    let todos = localStorage.getItem('todos');
    if (todos) {
      todos = JSON.parse(todos).todos
    } else {
      todos = [];
    }
    console.log(todos);
    this.state = {
      todos: todos,
      todo: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleChange(event) {
    this.setState({
      todo: event.target.value
    });
  }

  handleAddTodo() {
    const todos = this.state.todos.concat(this.state.todo);
    this.setState({
      todos: todos,
      todo: ""
    })
    const stringifiedTodos = JSON.stringify({ todos: todos });
    localStorage.setItem('todos', stringifiedTodos);
  }

  render() {
    return (
      <div>
        <h1>A lot Todo about Nothing</h1>
        <ol>
         {this.state.todos.map((todo) => <TodoItem key={todo} todo={todo} />)}
        </ol>
        <input value={this.state.todo} onChange={this.handleChange} type="text" />
        <button onClick={this.handleAddTodo}>Add Todo</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
