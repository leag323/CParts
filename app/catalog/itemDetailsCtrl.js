/* show item details   
  we have 3 roles: buyer, inventory, wip 
  for role: buyer enable update     item details: desc, uom, min-qty, max-qty  
                  enable delete item
  for role: inventory enable update item details: location
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

    //$scope.isInventory = activeUser.isInventory;    
    $scope.isInventory = function() {
        return activeUser.isInventory();
    };
    
    
    // Creating a copy of the item object so changes won't be reflected on the array

    $scope.item = new Item(items.getById($routeParams.index));
    console.log("itemDetailCtrl $routeParams.index: " + $routeParams.index);
    console.log("itemDetailCtrl $routeParams.index: " + $scope.item);

    $scope.cancel = function() {
        console.log("itemDetailCtrl cancel");
        $location.path("/catalog");        
    }

    $scope.update = function() {        
        console.log($scope.item.itemNo + " " + $scope.item.itemMinQty + " " + $scope.item.itemMaxQty);        
        if ($scope.item.itemMinQty > $scope.item.itemMaxQty){
            window.alert("Maximum Qty must be great than Minimum Qty ");
        } else {
                items.update($routeParams.index, $scope.item);
                $location.path("/catalog");
        }
        
    }

    $scope.remove = function() {
        items.removeByID($routeParams.index);
        $location.path("/catalog");
    }
});
