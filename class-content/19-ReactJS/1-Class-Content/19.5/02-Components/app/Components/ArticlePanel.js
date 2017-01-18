var React = require("react");

var Article = require("./ArticlePanel/Article");

var articleData = [
  {
    title: "BREAKING!!! Pizza is being banned by law after midnight!",
    text: "Oh you'll never belive this! This crazy person in congress decided that pizza was the devil and we need to stop eating it after midnight, but anytime in the morning is fine."
  },
  {
    title: "NOT SO BREAKING NEWS!!! A kitten was saved from a tree...again",
    text: "Paws was saved from the same tree for the 4th time this month. It was a no so spectactuar event as it caused major roads to be blocked during traffic yet again."
  },
];

var ArticlePanel = React.createClass({
  render: function() {
    var articles = articleData.map(function(article, index) {
      return <Article data={article} key={index}/>
    });

    return (
      <div className="row">
        <div className="col-sm-6">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title text-center">News Panel!</h3>
            </div>
            <div className="panel-body">
              {articles}
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ArticlePanel;
