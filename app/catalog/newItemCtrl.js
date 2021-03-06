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

    $scope.errorMessage = "";
    $scope.item = new Item({});                    
    $scope.message = "";
    $scope.validationCreate = false; /* true show alert-success */
    $scope.validationError = false;  /* true show alert-danger */     
                
    $scope.cancel = function () {
        $location.path("/main");
    }

    $scope.create = function () {
        if ($scope.item.itemNo === undefined){
            $scope.validationError = true;
            $scope.errorMessage = "Item Number is required";  
            $scope.validationCreate = false;    
        } else if (items.CheckItemNoExist($scope.item.itemNo)) {
                   $scope.validationError = true;
                   $scope.errorMessage = "Item Number already exsist";  
                   $scope.validationCreate = false;    
        } else if ($scope.item.itemDesc === undefined) {
                   $scope.validationError = true;
                   $scope.errorMessage = "Item Description is required";
                   $scope.validationCreate = false;                  
        } else if ($scope.item.itemUom === undefined) {
                   $scope.validationError = true;
                   $scope.errorMessage = "Item UOM is required";
                   $scope.validationCreate = false;                  
        } else if ($scope.item.itemMinQty === undefined) {
                   $scope.validationError = true;
                   $scope.errorMessage = "Item Minimum Quantity is required";
                   $scope.validationCreate = false;                  
        } else if ($scope.item.itemMaxQty === undefined) {
                    $scope.validationError = true;
                    $scope.errorMessage = "Item Maximum Quantity is required";
                    $scope.validationCreate = false;                  
        } else if ($scope.item.itemMinQty >= $scope.item.itemMaxQty) {
                   $scope.validationError = true;
                   $scope.errorMessage = "Maximum Qty must be great than Minimum Qty";        
                   $scope.validationCreate = false;                  
        } else {
                items.add($scope.item);
                $scope.validationCreate = true;  
                $scope.message = "item: " + $scope.item.itemNo + " has been created";
                $scope.validationError = false;    
                $scope.errorMessage = "";
                $scope.item = {};
                
                //$location.path("/main");
        }
        
    }

  });
  