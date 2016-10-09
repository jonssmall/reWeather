var React = require('react');
var PropTypes = React.PropTypes;

function CityInput(props) {
    return (
        <div>
            <input onChange={props.onUpdate} value={props.city}/>
            <button onClick={props.onSubmit}>Click Me</button>
        </div>
    )
}

CityInput.PropTypes = {
    city: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
};

module.exports = CityInput;