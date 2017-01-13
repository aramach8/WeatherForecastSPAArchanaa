//Archanaa Sathyanarayanan
//SERVICES
myWeatherApp.service('forecastService', function(){
    this.city = 'NewYork, NY';
     
});

myWeatherApp.service('getWeatherService', ['$resource', function($resource){
    
    this.getWeather = function(city, days) {
        var weatherAPI = 
        $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=dcf1e9dff98a4e1a205c41f2b5ba4594", {
        callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});
    
        return weatherAPI.get({q: city, cnt: days});
    };
    
}]);