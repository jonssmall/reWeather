var React = require('react');

var Home = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Home</h1>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Home;