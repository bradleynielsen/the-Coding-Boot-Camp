var React = require("react");
var ReactDOM = require("react-dom");

var todos = ["Teach React", "Go home", "Go to sleep", "Something else"];

var TodoItem = React.createClass({
  render: function() {
    return (
      <li>{this.props.todo}</li>
    )
  }
})

var App = React.createClass({
  render: function() {
    var mappedTodos = todos.map(function(todo) {
      return <TodoItem todo={todo} />
    });
    return (
      <div className="container">
        <div className="jumbotron">
          {mappedTodos}
        </div>
      </div>
    )
  }
})


ReactDOM.render(<App />, document.getElementById("app"));
