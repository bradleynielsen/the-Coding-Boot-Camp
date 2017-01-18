// Include React
var React = require("react");

// Create the Imgr Component
var Imgr = React.createClass({

  // Here we have some initial variables. In this case we have an initial state with image links and a selection number
  getInitialState: function() {
    return {
      src: [
        "https://danceswithfat.files.wordpress.com/2011/08/victory.jpg",
        "http://s2.quickmeme.com/img/ea/eab5afc4bfb52ccd3656aa60daadafe63fc4b65147a15766b4d43ba96c89f20f.jpg",
        "https://i.imgflip.com/g3lqz.jpg",
        "http://s2.quickmeme.com/img/ac/ac449c4293b246b8662ddd0627279fcdaebe2c0d420f8838118235a81f47edc0.jpg",
        "http://cf.chucklesnetwork.agj.co/items/5/5/9/6/0/one-does-not-simply-declare-victory-but-i-just-did.jpg",
        "https://s-media-cache-ak0.pinimg.com/736x/e2/16/15/e2161543fb07fbef4f3b8748567fdbb1.jpg",
        "https://cdn.meme.am/instances/48501883.jpg",
        "http://www.lambopower.com/forum/uploads/monthly_06_2015/post-51915-1434235449.jpg"
      ],
      selection: 0
    };
  },

  // This is a custom React lifecycle event. In essence it gets triggered anytime this component (Imgr)
  // is given a new prop from a parent (in this case Main).
  // Anytime this component (Imgr) receives a new clicks prop from Main (this happens every time Main's button
  // is clicked ), we randomly select a new image
  componentWillReceiveProps: function() {
    // Use setState to set the value of selection. HINT: You will need to make sure the random
    // number is between 0 and the length of this.state.src


  },
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Imgr</h3>
        </div>
        <div className="panel-body">

          {/* Using the value of this.state.selection, show the src of an image here. */}


        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Imgr;
