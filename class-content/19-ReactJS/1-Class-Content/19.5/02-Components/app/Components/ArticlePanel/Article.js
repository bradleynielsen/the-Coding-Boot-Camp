var React = require("react");

var Article = React.createClass({
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">{this.props.data.title}</h3>
        </div>
        <div className="panel-body">
          {this.props.data.text}
        </div>
      </div>
    );
  }
});

module.exports = Article;
