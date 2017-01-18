// Include React
var React = require("react");

// Create the Randomizer Component
var Randomizer = React.createClass({
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Randomizer</h3>
        </div>
        <div className="panel-body text-center">

          {/* Multiply the number sent to you in props by a random number */}

        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Randomizer;
