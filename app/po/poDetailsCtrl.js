/*  display po details 
	 we have 3 roles: buyer, storeKeeper, wip 
	 only buyer can navigate to po details and update/delete	
*/
app.controller("poDetailsCtrl", function($scope, $log, $location, $routeParams, activeUser, Order, orders) {
     // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }    

    $scope.validationError = false;
    $scope.errorMessage = "";
    $scope.validationUpdate = false;
    $scope.message = "";

    // Creating a copy of the order object so changes won't be reflected on the array

    $scope.order = new Order(orders.getById($routeParams.index));
    console.log("poDetailCtrl $routeParams.index: " + $routeParams.index);    
    console.log("poDetailCtrl $scope.order.orderNo: " + $scope.order.orderNo);    

    $scope.cancel = function() {
        console.log("poDetailCtrl cancel");
        $location.path("/po");        
    }
      
});
