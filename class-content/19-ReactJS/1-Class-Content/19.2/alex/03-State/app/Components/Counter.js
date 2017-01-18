var React = require("react");

var Counter = React.createClass({

  getInitialState: function() {
    return {
      clicks: 0
    };
  },

  handleClick: function() {
    this.setState({ clicks: this.state.clicks + 1 });
  },

  resetClick: function() {
    this.setState({ clicks: 0 });
  },

  componentDidUpdate: function() {
    if (this.state.clicks >= 10) {
      alert('Counter Over 10!!!');
    }
  },

  render: function() {
    return (
      <div className="row">
        <div className="col-sm-4">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title text-center">The Best Counter Ever!</h3>
            </div>
            <div className="panel-body">
              <h1>{this.state.clicks}</h1>
              <button className="btn btn-primary btn-lg" onClick={this.handleClick}>CLICK ME!!!!</button>
              <button className="btn btn-danger btn-lg" onClick={this.resetClick}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Counter;
