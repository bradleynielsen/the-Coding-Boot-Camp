var React = require("react");

var Form = require("./Github/Form");
var RepoList = require("./Github/RepoList");

var helpers = require("../utils/helpers");

var Github = React.createClass({

  getInitialState: function() {
    return { result: [] };
  },

  handleSubmit: function(searchTerm) {
    helpers.getGithubByUsername(searchTerm).then(function(data){
      this.setState({ result: data.data });
      console.log(data.data);
    }.bind(this));
  },

  render: function() {

    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title text-center">My Awesome Github Search</h3>
            </div>
            <div className="panel-body">
              <Form submit={this.handleSubmit} />
              <RepoList repos={this.state.result} />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Github;
