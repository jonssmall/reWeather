var React = require('react');
var PropTypes = React.PropTypes;

function Forecast (props) {
    console.log(props)
    return props.isLoading === true
        ? <div> Loading </div>
        : <div>Forecast Component</div>
}

// Forecast.PropTypes = {
//     city: PropTypes.string.isRequired,
//     isLoading: PropTypes.bool.isRequired,
//     forecastData: PropTypes.object.isRequired
// };

module.exports = Forecast;