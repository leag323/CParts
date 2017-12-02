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
    /*
    $scope.role = function() {
        return activeUser.role();
    };
    
    $scope.userLoggedIn = function() {
       return activeUser.get();
       console.log("navCtrl user: " + user);
   };
   */
})