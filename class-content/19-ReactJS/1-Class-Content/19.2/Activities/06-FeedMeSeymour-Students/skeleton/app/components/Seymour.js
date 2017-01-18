// Include React
var React = require("react");

// Here we include all of the sub-components
var Child1 = require("./children/Child1");
var Child2 = require("./children/Child2");
var Child3 = require("./children/Child3");

// This is the main component, Seymour
var Seymour = React.createClass({

  // Here we set a generic state associated with the number of clicks
  getInitialState: function() {
      return {};
  },

  // Here we create a function for updating the Seymour's consumed state based on clicks received by the child
  // We will then give the child access to this function
  feedSeymour: function(food) {

  },

  // Here we describe our component's render method
  render: function() {
    return (
      <div className="container">

        <div className="row">

          <div className="jumbotron">
            <h2>Feed Me Seymour!</h2>
            <p>
              <em>Click on Seymour's Children to Feed Him</em>
            </p>
          </div>
          <div className="col-md-12">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Seymour</h3>
              </div>
              <div className="panel-body text-center">

                <h1>
                  Food Consumed: {this.state.consumed}
                </h1>
                <img alt="Seymour" src="https://media.giphy.com/media/pBj0EoGSYjGms/giphy.gif" />

              </div>
            </div>

          </div>

          <div className="col-md-4">

            {/* Included Child1, give it access to the feedSeymour function */}
            <Child1 feedSeymour={this.feedSeymour} />

          </div>

          <div className="col-md-4">

            {/* Included Child2, give it access to the feedSeymour function */}
            <Child2 feedSeymour={this.feedSeymour} />

          </div>

          <div className="col-md-4">

            {/* Included Child3, give it access to the feedSeymour function */}
            <Child3 feedSeymour={this.feedSeymour} />

          </div>

        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Seymour;
