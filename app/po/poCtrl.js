app.controller("poCtrl", function($scope, $http, $log, $location, activeUser, orders) {
  // If the user is not logged in going back to home screen  
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }  

    // Making sure that we are only loading once     
    if (orders.getAll().length === 0) {
        $scope.orders = [];                
        $http.get(activeUser.get().poData).then(function mySuccess(response) {       
            console.log("success open file po.json");                
            orders.load(response.data);                           
            $scope.orders = orders.getAll();                                                   
        },  function myError(response) {
            console.log("error open file po.json");
        });
    
    } else {console.log("poCtrl orders.getAll().length !=0");
            $scope.orders = orders.getAll();
            console.log("poCtrl after orders.getAll()");
   }

});
