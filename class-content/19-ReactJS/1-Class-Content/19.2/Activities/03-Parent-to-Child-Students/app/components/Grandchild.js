// Include React
var React = require("react");

// Create the GrandChild Component
var GrandChild = React.createClass({

  // GrandChild has a state that follows the number of clicks
  getInitialState: function() {
    return {
      number: 0
    };
  },
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">GrandChild</h3>
        </div>
        <div className="panel-body text-center">

          {/*
            This component will multiply 4 with it's parent's number on (this.props.number),
            add, the result to it's own number on (this.state.clicks), and then display the result in the <h1> tag
          */}
          <h1>{this.state.number + 4 * this.props.number}</h1>

        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = GrandChild;
