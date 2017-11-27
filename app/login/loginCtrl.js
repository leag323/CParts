
app.controller("loginCtrl", function($scope, $http, $location, activeUser, User) {
    $scope.test = "Hello Home";  
    $scope.login = function() {
        console.log("login function");
    };
  });