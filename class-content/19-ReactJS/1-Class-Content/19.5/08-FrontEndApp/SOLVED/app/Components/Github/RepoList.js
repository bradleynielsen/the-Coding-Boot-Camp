var React = require("react");

var RepoList = React.createClass({

  render: function() {

    var mappedRepos = this.props.repos.map(function(repo){
      return (
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title text-center">{repo.name}</h3>
          </div>
          <div className="panel-body">
            <p>{repo.description}</p>
          </div>
        </div>
      )
    })
    return (
      <div>
        {mappedRepos}
      </div>
    );
  }
});

module.exports = RepoList;
