var React = require("react");
var ReactDOM = require("react-dom");

var Movie = require("./Components/Movie");

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Movie />
      </div>
    )
  }
});


ReactDOM.render(<App />, document.getElementById("app"));
