var React = require("react");
var ReactDOM = require("react-dom");

var Github = require("./Components/Github");

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Github />
      </div>
    )
  }
});


ReactDOM.render(<App />, document.getElementById("app"));
