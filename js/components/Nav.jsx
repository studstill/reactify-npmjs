var React = require('react');

// Nav Bar
module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <nav>
          <a id="randomPkg" href="">random npm package</a>
          <a href="">npm private modules</a>
          <a href="">npm Enterprise</a>
          <a href="">documentation</a>
          <a href="">blog</a>
          <a href="">npm weekly</a>
          <a href="">jobs</a>
        </nav>
      </div>
    )
  }
})
