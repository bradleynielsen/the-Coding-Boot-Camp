// Include React
var React = require("react");

var Chat = React.createClass({

  // Here we render the component
  render: function() {

    return (
<div class="row">
      
      <div class="container">
    <div class="jumbotron">
      <h2><strong>Which Child???</strong></h2>
      <p><em>A journey through the whimsical world of React Routing</em></p>
      <hr>
      <p>
        <a class="btn btn-primary btn-lg">Show Child #1</a>
        <a class="btn btn-danger btn-lg">Show Child #2</a>
      </p>
    </div>

    <div class="row">
      
      <div class="col-lg-12">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">Child #1</h3>
          </div>
          <div class="panel-body">
  
            <p>
              <a class="btn btn-warning btn-sm">Show Grandchild #1</a>
              <a class="btn btn-success btn-sm">Show Grandchild #2</a>
            </p>    

            <div class="panel panel-warning">
              <div class="panel-heading">
                <h3 class="panel-title">Grandchild #1</h3>
              </div>
              <div class="panel-body">
                Panel content
              </div>
            </div>
  
            <div class="panel panel-success">
              <div class="panel-heading">
                <h3 class="panel-title">Grandchild #2</h3>
              </div>
              <div class="panel-body">
                Panel content
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="col-lg-12">
        <div class="panel panel-danger">
          <div class="panel-heading">
            <h3 class="panel-title">Child #2</h3>
          </div>
          <div class="panel-body">
            Panel content
          </div>
        </div>
      </div>
    </div>

  </div>









    );
  }
});

// Export the component back for use in other files
module.exports = Chat;
