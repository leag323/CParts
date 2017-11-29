
app.controller("navCtrl", function($scope, $location, activeUser) {
   
    $scope.isActive = function(path) {
        return $location.path().includes(path);
    }
    /*
    $scope.isLoggedIn = function() {
        return activeUser.isLoggedIn();
    };

   $scope.userLoggedIn = function() {
       return activeUser.get();
   }  */ 
})