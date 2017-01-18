// Include React
var React = require("react");

// Create the Adder Component
var Adder = React.createClass({
  // Adder has a state that follows the number of clicks
  getInitialState: function() {
    return {
      number: 0
    };
  },
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Adder</h3>
        </div>
        <div className="panel-body text-center">

          {/*
            Anytime there is a click we add to to the number
            Note how we reference the number of clicks using this.props.clicks
            This is because any parameter passed by a parent becomes a "static" prop.
          */}
          <h1>{this.state.number + this.props.clicks}</h1>

        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Adder;
