var React = require("react");
var ReactDOM = require("react-dom");

var Counter = require("./Components/Counter");

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Counter />
      </div>
    )
  }
});


ReactDOM.render(<App />, document.getElementById("app"));
