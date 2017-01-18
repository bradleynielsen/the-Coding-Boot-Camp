// Include React
var React = require("react");

// Create the Child2 Component
var Child2 = React.createClass({

  // Child2 has a state that keeps track of it's food value
  getInitialState: function() {
    return {};
  },

  // Whenever the button is clicked, we should send back the value of
  // food from our state.
  handleClick: function() {
    this.props.feedSeymour(this.state.food);
  },

  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Tasty Treats</h3>
        </div>
        <div className="panel-body text-center">
          <h3>Frog Livers</h3>
          <img
            alt="Frog"
            src="http://www.cellphonetaskforce.org/wp-content/uploads/2012/01/frog-left.jpg"
            width="100%"
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Child2;
