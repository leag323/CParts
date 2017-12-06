/*  new purchase order
	 we have 3 roles: buyer, storeKeeper, wip 
	 only buyer can navigate to new purchase order
*/
app.controller("newPoCtrl", function($scope, $log, $location, $routeParams, activeUser, items, Order, orders) {
     // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }    
    
    $scope.errorMessage = "";
    $scope.message = "";
    $scope.selectedItemDesc = "";    
    $scope.selectedItemUom = "";
    $scope.validationError = false;    
    $scope.validationUpdate = false;    
    
});
