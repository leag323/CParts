/* navigation controller
   we have 3 roles: buyer, inventory, wip 
*/

app.controller("navCtrl", function($scope, $log, $location, activeUser) {
    console.log("start navCtrl");

    $scope.isLoggedIn = function() {
        return activeUser.isLoggedIn();
    };
    console.log("navCtrl 1: " + $scope.isLoggedIn);
    console.log("navCtrl 2: " + $scope.isLoggedIn());

    //$scope.isBuyer = activeUser.isBuyer;    

    $scope.isBuyer = function() {
        return activeUser.isBuyer();
    };
    console.log("3 navCtrl isBuer: " + $scope.isBuyer());    

    //$scope.isInventory = activeUser.isInventory();    
    //console.log("isInventory: " + $scope.isInventory );

    /*
    $scope.isActive = function(path) {
        return $location.path().includes(path);
    }
   
    

   $scope.userLoggedIn = function() {
       return activeUser.get();
   }  */ 
})