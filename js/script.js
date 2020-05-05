angular.module('ngRouteExample', ['ngRoute'])
.controller('HomeController', function ($scope, $route) { $scope.$route = $route;})
.controller('ChuController', function ($scope, $route) { $scope.$route = $route;})
.controller('BumperController', function ($scope, $route) { $scope.$route = $route;})
.config(function ($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'home.html',
        controller: 'HomeController'
    }).
    when('/chu', {
        templateUrl: 'chu.html',
        controller: 'ChuController'
    }).
    when('/bumper', {
        templateUrl: 'bumper.html',
        controller: 'BumperController'
    }).
    otherwise({
        redirectTo: '/home'
    });
});

angular.module('myApp', ['ngAnimate']);