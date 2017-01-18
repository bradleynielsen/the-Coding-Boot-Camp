var React = require("react");
var ReactDOM = require("react-dom");

var Seymour = require("./Components/Seymour");

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Seymour />
      </div>
    )
  }
});


ReactDOM.render(<App />, document.getElementById("app"));
