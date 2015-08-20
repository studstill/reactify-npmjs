var React = require('react');
var Header = require('./components/Header.jsx');
var Nav = require('./components/Nav.jsx');
var Main = require('./components/Main.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Nav />
        <Header />
        <Main />
      </div>
    );
  }
});


React.render(
  <App />, document.getElementById('content')
);
