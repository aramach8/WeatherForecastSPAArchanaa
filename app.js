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

//CONTROLLERS
myWeatherApp.controller('mainController', ['$scope', function($scope) {
    
}]);
    

myWeatherApp.controller('forecastController', ['$scope', function($scope){
    
}]);