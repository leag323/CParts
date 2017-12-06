/* show item details   
  we have 3 roles: buyer, storeKeeper, wip 
  for role: buyer enable update     item details: desc, uom, min-qty, max-qty  
                  enable delete item
  for role: storeKeeper enable update item details: location
*/
app.controller("itemDetailsCtrl", function($scope, $log, $location, $routeParams, activeUser, Item, items) {
     // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }    

    //$scope.isBuyer = activeUser.isBuyer;    
    $scope.isBuyer = function() {        
        return activeUser.isBuyer();
    };    

    //$scope.isStoreKeeper = activeUser.isStoreKeeper;        
    $scope.isStorekeeper = function() {        
        return activeUser.isStorekeeper();
    };      
        
    $scope.errorMessage = "";    
    $scope.message = "";
    $scope.validationError = false; /* true show alert-danger */
    $scope.validationUpdate = false; /* true show alert-success */
    
    // Creating a copy of the item object so changes won't be reflected on the array

    $scope.item = new Item(items.getById($routeParams.index));        

    $scope.cancel = function() {        
        $location.path("/catalog");        
    }

    $scope.update = function() {                
        if ($scope.item.itemMinQty >= $scope.item.itemMaxQty){            
            $scope.validationError = true;
            $scope.errorMessage = "Maximum Qty must be great than Minimum Qty";
            $scope.validationUpdate = false;
            $scope.message = "";            
        } else {
                $scope.validationUpdate = true;
                $scope.message = "Item has been updated"
                $scope.validationError = false;
                errorMessage = "";
                items.update($routeParams.index, $scope.item);                
        }
        
    }

    $scope.remove = function() {
        if (!isNaN($scope.item.itemSoh)) {            
            $scope.validationError = true;
            $scope.errorMessage = "Item has Stock on hand can not remove it";
            $scope.validationUpdate = false;
            $scope.message = "";
        } else {
                items.removeByID($routeParams.index);
                $location.path("/catalog");
        }
    }
});
