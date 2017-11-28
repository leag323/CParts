app.controller("itemDetailsCtrl", function($scope, $log, $location, $routeParams, activeUser, items) {
     // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }
    $scope.item = items.getById($routeParams.index); 
});
