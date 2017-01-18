var React = require("react");
var ReactDOM = require("react-dom");

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>React App Starter Code!</h1>
        </div>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById("app"));
