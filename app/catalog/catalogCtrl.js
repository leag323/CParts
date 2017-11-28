app.controller("catalogCtrl", function($scope, $http, $log, $location, items) {
 
    $http.get("app/data/buyer-catalog.json").then(function mySuccess(response) {
            console.log("success open file buyer-catalog.json");    
            $scope.items = [];
            items.load(response.data);                           
            $scope.items = items.getAll();                                                   
        },  function myError(response) {
            console.log("error open file actors.json");
        });
          
});
