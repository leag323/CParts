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
    $scope.validationError = false;    /* true show alert-danger*/  
    $scope.validationUpdate = false;   /* true show alert-success*/  
    
    // Creating a copy of the order object so changes won't be reflected on the array

    $scope.order = new Order(orders.getById($routeParams.index)); 
    //$scope.orderBeforeUpdate = new Order(orders.getById($routeParams.index)); ; 
    console.log("** poDetailCtrl after new Order " + $scope.order.orderNo + " status: " + $scope.order.orderStatus); 
    //console.log("** poDetailCtrl before update Order " + $scope.orderBeforeUpdate.orderNo + " status: " + $scope.orderBeforeUpdate.orderStatus); 
        
    /*
    $scope.selectedReqDate = function() {
        return new Date($scope.order.requiredDate)
    };
    */
    //console.log("*** " +  $routeParams.index);
    
    $scope.selectedItemDesc = items.getByItemNo($scope.order.orderItemNo).itemDesc;
    $scope.selectedItemUom = items.getByItemNo($scope.order.orderItemNo).itemUom;
    
    $scope.cancel = function() {             
        $location.path("/po");           
    }

    $scope.update = function() {        
        //console.log("update orderqty: " + $scope.order.orderNo + " status: " + $scope.order.orderStatus);      
        if  ($scope.order.orderStatus === "Closed") {       
            $scope.validationError = true;
            $scope.errorMessage = "Can not update PO becase PO status is Closed";
            $scope.validationUpdate = false;
            $scope.message = "";
        } else {
                $scope.validationUpdate = true;
                $scope.message = "Purchase otder has been updated"
                $scope.validationError = false;
                errorMessage = "";
                orders.update($routeParams.index, $scope.order);
        }
    }

    $scope.remove = function() {           
        if  ($scope.order.orderStatus === "Created") {
             orders.removeByID($routeParams.index);
             $location.path("/po");    
        } else {
                $scope.validationError = true;
                $scope.errorMessage = "Can not delete PO becase PO status is not Crated";
                $scope.validationUpdate = false;
                $scope.message = "";
        }
        
    }
});
