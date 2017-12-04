app.controller("mainCtrl", function($scope, $http, $log, $location, activeUser, items) {        

    // If the user is not logged in going back to home screen   
    
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }          
    
    console.log("catalogCtrl items.getAll().length: " + items.getAll().length);
    if (items.getAll().length === 0) {
        $scope.items = [];                
        $http.get(activeUser.get().catalogData).then(function mySuccess(response) {
            console.log("success open file catalog.json");                
            items.load(response.data);                           
            $scope.items = items.getAll();                                                   
        },  function myError(response) {
            console.log("error open file catalog.json");
        });
    
    } else {console.log("catalogCtrl items.getAll().length !=0");
            $scope.items = items.getAll();
            console.log("catalogCtrl after items.getAll()");
            } 

});
