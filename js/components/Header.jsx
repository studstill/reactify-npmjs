var React = require('react');

// Header
module.exports = React.createClass({
  render: function() {
    return (
     <div>
        <header id="header">
          <img id="npmLogo" src="https://www.npmjs.com/static/images/npm-logo.svg" />
          <form id="npmSearch">
            <input></input>
            <button type="submit">Search</button>
          </form>
          <a href="https://www.npmjs.com/signup">sign up</a>
          or <a href="https://www.npmjs.com/login">log in</a>
          <img id="headImage" src="https://www.npmjs.com/static/images/wombat-avatar-small.png" />
        </header>
      </div>
    );
  }
});

