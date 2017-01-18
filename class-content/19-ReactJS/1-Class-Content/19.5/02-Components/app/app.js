var React = require("react");
var ReactDOM = require("react-dom");

var ArticlePanel = require("./Components/ArticlePanel");

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <ArticlePanel />
      </div>
    )
  }
});


ReactDOM.render(<App />, document.getElementById("app"));
