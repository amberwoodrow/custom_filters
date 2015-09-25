var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'index.html',    
      controller: 'myController'
    })
    .otherwise('/');

  $locationProvider.html5Mode(true);
});