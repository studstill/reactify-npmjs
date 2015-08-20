var React = require('react');

// Main Content
module.exports = React.createClass({
  render: function() {
    var imageUrl ='https://cldup.com/Rg6WLgqccB.svg';
    var text ='a package manager for JavaScript 2.13.0 published 2 months ago by zkat';
    var textArr = [];
    for (var i = 0; i < 10; i++) {
      textArr.push({
        imageUrl: imageUrl,
        text: text
      });
    }

    var commentNodes = textArr.map(function(description) {
      return (
        <div>
          <div className="packageWrapper">
            <article className="packages">
              <img src={description.imageUrl} />
              {description.text}
            </article>
          </div>
        </div>
      );
    });

    return (
      <div>
        {commentNodes}
      </div>
    );
  }
});

