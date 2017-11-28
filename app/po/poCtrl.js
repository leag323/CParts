app.controller("poCtrl", function($scope, $http, $log, $location, activeUser) {
  // If the user is not logged in going back to home screen  
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }  
});
