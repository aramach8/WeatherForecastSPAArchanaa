//Archanaa Sathyanarayanan
//MODULE
var myWeatherApp = angular.module('myWeatherApp', ['ngRoute', 'ngResource']);

//ROUTES
myWeatherApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'mainController'
    })
    
    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
});

//SERVICES
myWeatherApp.service('forecastService', function(){
    this.city = 'Chicago, ORD';
     
});

//CONTROLLERS
myWeatherApp.controller('mainController', ['$scope', 'forecastService', function($scope, forecastService) {
    
    $scope.city = forecastService.city;
    
    $scope.$watch('city', function() {
       forecastService.city = $scope.city; 
    });
    
}]);
    

myWeatherApp.controller('forecastController', ['$scope', 'forecastService',function($scope, forecastService){
    
    $scope.city = forecastService.city;
    
}]);