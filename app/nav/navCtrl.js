/* navigation controller   
   we have 3 roles: buyer, storekeeper, wip 
*/

app.controller("navCtrl", function($scope, $log, $location, activeUser) {
    console.log("start navCtrl");

    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }  
    
    $scope.isLoggedIn = function() {
        return activeUser.isLoggedIn();
    };    

     //$scope.isBuyer = activeUser.isBuyer;    
     $scope.isBuyer = function() {        
        return activeUser.isBuyer();
    }; 

    //$scope.isStoreKeeper = activeUser.isStoreKeeper;        
    $scope.isStorekeeper = function() {        
        return activeUser.isStorekeeper();
    };      
    
    $scope.userRole = function() {
        return activeUser.userRole();
    };

})