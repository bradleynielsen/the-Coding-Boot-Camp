var React = require("react");

var FoodBtn = React.createClass({

  handleClick: function() {
    this.props.eatFood(this.props.foodPts);
  },

  render: function() {
    return (
      <button className="btn btn-primary btn-lg" onClick={this.handleClick}>Eat {this.props.foodName}</button>
    )
  }
});

module.exports = FoodBtn;
