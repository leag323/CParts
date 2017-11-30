/* navigation controller   
   we have 3 roles: buyer, storekeeper, wip 
*/

app.controller("navCtrl", function($scope, $log, $location, activeUser) {
    console.log("start navCtrl");

    $scope.isLoggedIn = function() {
        return activeUser.isLoggedIn();
    };    

    //$scope.isBuyer = activeUser.isBuyer;    
    $scope.isBuyer = function() {
        return activeUser.isBuyer();
    };
    console.log("3 navCtrl isBuer: " + $scope.isBuyer());    

    /*
    $scope.isActive = function(path) {
        return $location.path().includes(path);
    }
   
    

   $scope.userLoggedIn = function() {
       return activeUser.get();
   }  */ 
})