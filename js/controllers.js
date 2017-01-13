//Archanaa Sathyanarayanan
//CONTROLLERS
myWeatherApp.controller('mainController', ['$scope', 'forecastService', function($scope, forecastService) {
    
    $scope.city = forecastService.city;
    
    $scope.$watch('city', function() {
       forecastService.city = $scope.city; 
    });
    
}]);
    

myWeatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams','forecastService',function($scope, $resource, $routeParams, forecastService){
    
    $scope.city = forecastService.city;
    
    $scope.days = $routeParams.days || '2';
    
    $scope.weatherAPI = 
        $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=dcf1e9dff98a4e1a205c41f2b5ba4594", {
        callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});
    
    $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt: $scope.days});
    
    $scope.convertToFahrenheit = function(degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
    }
    
    $scope.convertDate = function(date) {
        return new Date(date * 1000);
    }
    
}]);