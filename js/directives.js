//Archanaa Sathyanarayanan
//CUSTOM DIRECTIVE
myWeatherApp.directive('weatherResult', function() {
   return {
       restrict: 'E',
       templateUrl: 'directives/weatherResult.html',
       replace: true,
       scope: {
            weatherObject: "=",
            convertToStandard: "&",
            convertDate: "&",
            dateFormat: "@"
       }
   } 
});