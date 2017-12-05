/*  display po details 
	 we have 3 roles: buyer, storeKeeper, wip 
	 only buyer can navigate to po details and update/delete	
*/
app.controller("poDetailsCtrl", function($scope, $log, $location, $routeParams, activeUser, items, Order, orders) {
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
    
    // Creating a copy of the order object so changes won't be reflected on the array

    $scope.order = new Order(orders.getById($routeParams.index));        
    $scope.selectedReqDate = new Date("1950-01-01");
        
    /*
    $scope.selectedReqDate = function() {
        return new Date(order.requiredDate)
    };
    */
    //console.log("*** " +  $routeParams.index);
    
    $scope.selectedItemDesc = items.getByItemNo($scope.order.orderItemNo).itemDesc;
    $scope.selectedItemUom = items.getByItemNo($scope.order.orderItemNo).itemUom;
    $scope.cancel = function() {
        console.log("poDetailCtrl cancel");
        $location.path("/po");        
    }
      
});
