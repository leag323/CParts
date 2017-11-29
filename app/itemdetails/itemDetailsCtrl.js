app.controller("itemDetailsCtrl", function($scope, $log, $location, $routeParams, activeUser, Item, items) {
     // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }
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
        items.update($routeParams.index, $scope.item);
        $location.path("/catalog");
    }

    $scope.remove = function() {
        items.removeByID($routeParams.index);
        $location.path("/catalog");
    }
});
