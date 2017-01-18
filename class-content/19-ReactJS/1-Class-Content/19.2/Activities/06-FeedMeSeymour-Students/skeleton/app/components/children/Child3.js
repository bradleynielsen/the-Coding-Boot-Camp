// Include React
var React = require("react");

// Create the Child3 Component
var Child3 = React.createClass({

  // Child3 has a state that keeps track of it's food value
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
          <h3 className="panel-title text-center">Nom Noms!</h3>
        </div>
        <div className="panel-body text-center">

          <h3>Organic Tofu</h3>
          <img
            alt="Tofu"
            src="http://afcsoyfoods.com/media/2014/02/afc-organic-tofu-firm-14oz.png"
            width="100%"
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Child3;
