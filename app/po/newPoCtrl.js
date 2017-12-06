/*  new purchase order
	 we have 3 roles: buyer, storeKeeper, wip 
	 only buyer can navigate to new purchase order
*/
app.controller("newPoCtrl", function($scope, $log, $location, $routeParams, activeUser, items, Order, orders) {
     // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }    
    
    // Making sure that we are only loading once
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

    $scope.errorMessage = "";
    $scope.message = "";
    $scope.order = new Order({});  
    $scope.selectedItemDesc = "";    
    $scope.selectedItemUom = "";
    $scope.validationError = false;    
    $scope.validationCreate = false; /* true show alert-success */
    $scope.validationUpdate = false; /* true show alert-danger*/  
    
    $scope.itemSelected = function() {
        $scope.selectedItemDesc = items.getByItemNo($scope.selectedItem).itemDesc;
        $scope.selectedItemUom = items.getByItemNo($scope.selectedItem).itemUom;        
        $scope.itemIndex = items.getIndexByItemNo($scope.selectedItem);                    
    }

    $scope.cancel = function () {
        $location.path("/main");
    }

    $scope.create = function () {
        $location.path("/main");
    }
});
