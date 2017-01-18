var React = require("react");

var FoodBtn = require("./Seymour/FoodBtn");

var Seymour = React.createClass({

  getInitialState: function() {
    return {
      hunger: 0
    };
  },

  eatFood: function(food) {
    var newHungerCount = this.state.hunger + food;
    this.setState({ hunger: newHungerCount });
  },

  componentDidUpdate: function() {
    if (this.state.hunger >= 500) {
      alert('Thank you! Im full now (:');
    }
  },

  render: function() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title text-center">Feed Seymour!</h3>
            </div>
            <div className="panel-body">
              <h1>Rawr I'm Seymour and I'm hungry!</h1>
              <h2>I will be full at 500 foods!</h2>
              <h2>Current foods = {this.state.hunger}</h2>
              <FoodBtn foodName="Burger" foodPts={50} eatFood={this.eatFood} />
              <FoodBtn foodName="Fries" foodPts={20} eatFood={this.eatFood} />
              <FoodBtn foodName="Shake" foodPts={25} eatFood={this.eatFood} />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Seymour;
