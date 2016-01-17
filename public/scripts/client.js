var app = angular.module('myApp', []);

app.controller("myController", function($scope, $http){
  $scope.loadHandlers = function(){
    $http({
      method: 'GET',
      url: '/generate'
    }).then(function(res){
      $scope.genHandlers = res.data;
    });
  }
});
