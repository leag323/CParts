app.controller("itemDetailsCtrl", function($scope, $log, $location, $routeParams, activeUser, Item, items) {
     // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }
    //$scope.isBuyer = activeUser.isBuyer();    
    $scope.isBuyer = function() {
        return activeUser.isBuyer();
    };
    //console.log("itemDetailsCtrl $scope.isBuyer: " + $scope.isBuyer);
   
    //$scope.isInventory = activeUser.isInventory();
    console.log("itemDetailsCtrl $scope.isInventory: " + $scope.isInventory);
    $scope.isInventory = function() {
        return activeUser.isInventory();
    };
    //$scope.isWip = activeUser.isWip();
    $scope.isWip = function() {
        return activeUser.isWip();
    };

    //$scope.item = items.getById($routeParams.index); 
    //$scope.recipe = new Recipe(recipes.get($routeParams.recipeIndex));

    // Creating a copy of the item object so changes won't be reflected on the array

    $scope.item = new Item(items.getById($routeParams.index));
    console.log("itemDetailCtrl $routeParams.index: " + $routeParams.index);
    console.log("itemDetailCtrl $routeParams.index: " + $scope.item);

    $scope.cancel = function() {
        console.log("itemDetailCtrl cancel");
        $location.path("/catalog");        
    }

    $scope.update = function() {
        /* window.alert("cat not update"); */
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
