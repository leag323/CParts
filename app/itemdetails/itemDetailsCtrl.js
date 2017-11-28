app.controller("itemDetailsCtrl", function($scope, $http, $log, $location, activeUser, items) {
     // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }
   
});
