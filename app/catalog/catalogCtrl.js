app.controller("catalogCtrl", function($scope, $http, $log, $location, items) {
 
    $http.get("app/data/buyer-catalog.json").then(function mySuccess(response) {
            console.log("success open file buyer-catalog.json");    
            $scope.itemsArr = [];
            items.load(response.data);                           
            $scope.itemsArr = items.getAll();                                                   
        },  function myError(response) {
            console.log("error open file actors.json");
        });
          
});
