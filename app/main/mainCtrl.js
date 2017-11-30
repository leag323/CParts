app.controller("mainCtrl", function($scope, $http, $log, $location, activeUser) { 
    console.log("start mainCtrl");    

    // If the user is not logged in going back to home screen   
    
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }          

    console.log("end mainCtrl");
});
