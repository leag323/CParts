
app.controller("navCtrl", function($scope, $log, $location, activeUser) {
    console.log("start navCtrl");
    $scope.isBuyer = activeUser.isBuyer();
    //$scope.isInventory = activeUser.isInventory();
    //$scope.isWip = activeUser.isWip();

    /*
    $scope.isActive = function(path) {
        return $location.path().includes(path);
    }
   
    $scope.isLoggedIn = function() {
        return activeUser.isLoggedIn();
    };

   $scope.userLoggedIn = function() {
       return activeUser.get();
   }  */ 
})