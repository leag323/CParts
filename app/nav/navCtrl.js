
app.controller("navCtrl", function($scope, $log, $location, activeUser) {
    console.log("start navCtrl");

    //$scope.isBuyer = activeUser.isBuyer();
    $scope.isBuyer = function() {
        return activeUser.isBuyer();
    };
    console.log("isBuer: " + $scope.isBuyer );    

    //$scope.isInventory = activeUser.isInventory();    
    //console.log("isInventory: " + $scope.isInventory );

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