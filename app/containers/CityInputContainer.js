var React = require('react');
var PropTypes = React.PropTypes;
var CityInput = require('../components/CityInput');
var weatherApi = require('../helpers/api'); 

var CityInputContainer = React.createClass({
    getInitialState: function () {
        return {
            city: ''
        }
    },
    handleSubmit: function() {
        console.log(this.state.city);
        weatherApi.getForecast(this.state.city);
    },
    handleUpdate: function(e){        
        this.setState({
            city: e.target.value
        });
    },    
    render: function() {
        return (
            <CityInput city={this.state.city} 
                onSubmit={this.handleSubmit} 
                onUpdate={this.handleUpdate}/>
        )
    }
});

module.exports = CityInputContainer;