var React = require('react');
var Home = require('../components/Home');
var CityInputContainer = require('./CityInputContainer');

var HomeContainer = React.createClass({
    render: function() {
        return (
            <Home>
                <CityInputContainer />
            </Home>
        )
    }
});

module.exports = HomeContainer;