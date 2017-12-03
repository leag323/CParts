/* create new item
   we have 3 roles: buyer, storeKeeper, wip 
   only buyer can create item but can not update item location
*/
app.controller("newItemCtrl", function($scope, $http, $log, $location, activeUser, Item, items) {
    // If the user is not logged in going back to home screen  
      if (!activeUser.isLoggedIn()) {
          $location.path("/");
          return;
      }  
    //$scope.isBuyer = activeUser.isBuyer;
    $scope.isBuyer = function() {
        return activeUser.isBuyer();
    };      

    //$scope.isStorekeeper = activeUser.isStorekeeper;
    $scope.isStorekeeper = function() {
        return activeUser.isStorekeeper();
    }; 
    
    $scope.item = new Item({});                

    $scope.cancel = function () {
        $location.path("/main");
    }

    $scope.create = function () {
        if ($scope.item.itemNo === undefined){
            $scope.validationError = true;
            $scope.errorMessage = "Item Number is required";                    
        } else if ($scope.item.itemDesc === undefined) {
                   $scope.validationError = true;
                   $scope.errorMessage = "Item Description is required";
        } else if ($scope.item.itemUom === undefined) {
                   $scope.validationError = true;
                   $scope.errorMessage = "Item UOM is required";
        } else if ($scope.item.itemMinQty === undefined) {
                   $scope.validationError = true;
                   $scope.errorMessage = "Item Minimum Quantity is required";
        } else if ($scope.item.itemMaxQty === undefined) {
                    $scope.validationError = true;
                    $scope.errorMessage = "Item Maximum Quantity is required";
        } else if ($scope.item.itemMinQty >= $scope.item.itemMaxQty) {
                   $scope.validationError = true;
                   $scope.errorMessage = "Maximum Qty must be great than Minimum Qty";        
        } else {
                items.add($scope.item);
                $location.path("/main");
        }
        
    }

  });
  