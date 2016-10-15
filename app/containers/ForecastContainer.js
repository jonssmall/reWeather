var React = require('react');
var Home = require('../components/Home');
var Forecast = require('../components/forecast');
var weatherApi = require('../helpers/api'); 

var ForecastContainer = React.createClass({
    getInitialState: function() {
        return {
            isLoading: true,
            forecastData: {}
        }
    },
    componentDidMount: function () {
        this.makeRequest(this.props.routeParams.city)
    },
    componentWillReceiveProps: function (nextProps) {
        this.makeRequest(nextProps.routeParams.city)
    },
    makeRequest: function(city) {
        weatherApi.getForecast(city)
            .then(function(data) {
                this.setState({
                    isLoading: false,
                    forecastData: data
                });
            }.bind(this));
    },
    render: function() {
        return (            
            <Forecast
                city={this.props.routeParams.city}
                isLoading={this.state.isLoading}
                forecastData={this.state.forecastData}
            />            
        )
    }
});

module.exports = ForecastContainer;