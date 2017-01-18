var React = require("react");

var Form = React.createClass({

  getInitialState: function() {
    return {
      num: 0,
      text: "" };
  },

  handleChange: function(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  handleSubmit: function(event) {
    event.preventDefault();

    console.log(this.state);
    this.setState({ num: 0, text: "" });
  },

  render: function() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title text-center">Form Capture</h3>
            </div>
            <div className="panel-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    value={this.state.num}
                    id="num"
                    onChange={this.handleChange}
                  />
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.text}
                    id="text"
                    onChange={this.handleChange}
                  />
                  <button
                    className="btn btn-primary"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Form;
