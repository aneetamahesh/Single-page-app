var app = angular.module('myApp', ['ngRoute']);
 
app.config(function($routeProvider) {
$routeProvider
 
.when('/', {
templateUrl : '1.html',
controller : 'FirstController'
})
 
.when('/database', {
templateUrl : '2.html',
controller : 'SecondController'
})
 
.when('/databasewithsearch', {
templateUrl : '3.html',
controller : 'ThirdController'
})
 
.otherwise({redirectTo: '/'});
});

    app.controller('FirstController', function($scope) {
    $scope.message = 'Click on the buttons above to view the details of Players';
    });
     
    app.controller('SecondController', ['$scope', '$http', function($scope, $http)  {
        $scope.userData = undefined;
        var req = {
            method: 'GET',
            // url: 'https://aneetamahesh.github.io/JSON/sports.json',
            url:'https://aneetamahesh.github.io/JSON/sports.json',
            headers: { 'Content-Type': 'application/json' }
        };
        
        
        $http(req).then(function (response) {
            $scope.userData  = response.data.data;
        });
      }]);
     
      app.controller('ThirdController', ['$scope', '$http', function($scope, $http)  {
        $scope.userData = undefined;
        var req = {
            method: 'GET',
             url: 'https://aneetamahesh.github.io/JSON/sports.json',
            headers: { 'Content-Type': 'application/json' }
        };
        
        
        $http(req).then(function (response) {
            $scope.userData  = response.data.data;
        });
      }]);
    