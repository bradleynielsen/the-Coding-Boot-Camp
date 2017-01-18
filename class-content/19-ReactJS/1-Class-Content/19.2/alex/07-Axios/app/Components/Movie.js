var React = require("react");

var Form = require("./Movie/Form");

var helpers = require("../utils/helpers");

var Movie = React.createClass({

  getInitialState: function() {
    return { result: "" };
  },

  handleSubmit: function(searchTerm) {
    helpers.getMovieByName(searchTerm).then(function(data){
      this.setState({ result: data.data });
    }.bind(this));
  },

  render: function() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title text-center">Movie Search</h3>
            </div>
            <div className="panel-body">
              <Form submit={this.handleSubmit}/>
              <h2>{this.state.result.Title}</h2>
              <h4>{this.state.result.Released}</h4>
              <p>{this.state.result.Plot}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Movie;
