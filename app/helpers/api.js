var axios = require('axios');

const _baseURL = 'http://api.openweathermap.org/data/2.5/';
const _APIKEY = 'b714ec74bbab5650795063cb0fdf5fbe';

// http://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY  
// http://api.openweathermap.org/data/2.5/forecast/daily?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY&cnt=5


//http://api.openweathermap.org/data/2.5/forecast/daily?q=norfolk&type=accurate&APPID=b714ec74bbab5650795063cb0fdf5fbe&cnt=5
//http://api.openweathermap.org/data/2.5/forecast/daily?qnorfolk&type=accurate&appId=b714ec74bbab5650795063cb0fdf5fbe&cnt=5

var buildWeatherCall = function(city) {
    return `${_baseURL}weather?q=${city}&type=accurate&appId=${_APIKEY}`;
};

var buildForecastCall = function(city) {
    return `${_baseURL}forecast/daily?q=${city}&type=accurate&appId=${_APIKEY}&cnt=5`;
};

var getWeather = function(city) {
    var api = buildWeatherCall(city);
    axios.get(api)
        .then(function(data){
            console.log(data);
        }).catch(function(error){
            console.log(error);
        });
};

var getForecast = function(city) {
    var api = buildForecastCall(city);
    axios.get(api)
        .then(function(data){
            console.log(data);
        }).catch(function(error){
            console.log(error);
        });
};

module.exports = {
    getWeather: getWeather,
    getForecast: getForecast
};