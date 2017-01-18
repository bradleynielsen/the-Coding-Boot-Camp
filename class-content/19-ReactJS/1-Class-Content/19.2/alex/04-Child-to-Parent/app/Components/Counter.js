var React = require("react");

var ActionBtns = require("./Counter/ActionBtns");

var Counter = React.createClass({

  getInitialState: function() {
    return {
      clicks: 0
    };
  },

  setCounter: function(clicks) {
    this.setState({ clicks: clicks });
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
              <ActionBtns number={this.state.clicks} setCounter={this.setCounter}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Counter;
