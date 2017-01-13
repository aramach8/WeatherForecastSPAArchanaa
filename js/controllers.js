//Archanaa Sathyanarayanan
//CONTROLLERS
myWeatherApp.controller('mainController', ['$scope', '$location', 'forecastService', function($scope, $location, forecastService) {
    
    $scope.city = forecastService.city;
    
    $scope.$watch('city', function() {
       forecastService.city = $scope.city; 
    });
    
    $scope.submit = function() {
        $location.path("/forecast");
    };
    
}]);
    

myWeatherApp.controller('forecastController', ['$scope', '$routeParams','forecastService', 'getWeatherService', function($scope, $routeParams, forecastService, getWeatherService){
    
    $scope.city = forecastService.city;
    
    $scope.days = $routeParams.days || '2';

    $scope.weatherResult = getWeatherService.getWeather($scope.city, $scope.days);
    
    $scope.convertToFahrenheit = function(degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
    }
    
    $scope.convertDate = function(date) {
        return new Date(date * 1000);
    }
    
}]);