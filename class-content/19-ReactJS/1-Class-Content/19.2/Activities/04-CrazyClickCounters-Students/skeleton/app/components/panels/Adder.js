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
            Show the incremented number here
          */}


        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Adder;
