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
    
    $scope.item = new Item({});                

    $scope.cancel = function () {
        $location.path("/main");
    }

    $scope.create = function () {
        if ($scope.item.itemMinQty > $scope.item.itemMaxQty){
            window.alert("Maximum Qty must be great than Minimum Qty ");
        } else {
                items.add($scope.item);
                $location.path("/main");
        }
        
    }

  });
  