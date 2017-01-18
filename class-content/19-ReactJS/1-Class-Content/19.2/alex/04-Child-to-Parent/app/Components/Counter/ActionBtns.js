var React = require("react");

var ActionBtns = React.createClass({

  handleClick: function() {
    this.props.setCounter(this.props.number+1);
  },

  resetClick: function() {
    this.props.setCounter(0);
  },

  render: function() {
    return (
      <div className="container">
        <button className="btn btn-primary btn-lg" onClick={this.handleClick}>CLICK ME!!!!</button>
        <button className="btn btn-danger btn-lg" onClick={this.resetClick}>Reset</button>
      </div>
    )
  }
});

module.exports = ActionBtns;
