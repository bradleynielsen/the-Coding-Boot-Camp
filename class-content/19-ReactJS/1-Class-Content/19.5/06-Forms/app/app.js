var React = require("react");
var ReactDOM = require("react-dom");

var Form = require("./Components/Form");

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Form />
      </div>
    )
  }
});


ReactDOM.render(<App />, document.getElementById("app"));
