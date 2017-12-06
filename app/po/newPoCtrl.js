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
    console.log("1 newPOCtrl start: " );
    // Making sure that we are only loading once
    console.log("newPOCtrl items.getAll().length: " + items.getAll().length);
    if (items.getAll().length === 0) {
        $scope.items = [];                
        $http.get(activeUser.get().catalogData).then(function mySuccess(response) {
            console.log("success open file catalog.json");                
            items.load(response.data);                           
            $scope.items = items.getAll();                                                   
        },  function myError(response) {
            console.log("error open file catalog.json");
        });
    
    } else {console.log("newPOCtrl items.getAll().length !=0");
            $scope.items = items.getAll();
            console.log("newPOCtrl after items.getAll()");
            }  

    $scope.currentDate = new Date();    
    console.log("$scope.currentDate: " + $scope.currentDate);
    $scope.errorMessage = "";
    $scope.inputDate = "";
    $scope.message = "";
    $scope.order = new Order({});  
    $scope.selectedItemDesc = "";    
    $scope.selectedItemUom = "";       
    $scope.validationCreate = false; /* true show alert-success */
    $scope.validationError =  false; /* true show alert-danger*/  
    
    $scope.itemSelected = function() {
        $scope.selectedItemDesc = items.getByItemNo($scope.selectedItem).itemDesc;
        $scope.selectedItemUom = items.getByItemNo($scope.selectedItem).itemUom;                
    }

    $scope.cancel = function () {
        $location.path("/main");
    }

    $scope.create = function () {
        console.log("2 newPOCtrl create: " );
        $scope.inputDate = new Date($scope.order.requiredDate) 
        console.log("3 newPOctrl $scope.order.requiredDate: " + $scope.order.requiredDate);
        console.log("4 newPOctrl $scope.inputDate: " + $scope.inputDate);
        console.log("4 newPOctrl $scope.currentDate: " + $scope.currentDate);
        if ($scope.selectedItem === undefined){
            $scope.validationError = true;
            $scope.errorMessage = "Item Number is required";  
            $scope.validationCreate = false;    
        } else if ($scope.order.orderQty === undefined){
                   console.log("5 newPOctrl orderQty is undefined");
                   $scope.validationError = true;
                   $scope.errorMessage = "purchase order quantity is required";  
                   $scope.validationCreate = false; 
        } else if ($scope.order.orderQty <= 0) {
                   console.log("6 newPOctrl requireDate <= 0");
                   $scope.validationError = true;
                   $scope.errorMessage = "purchase order quantity must be great than 0";
                   $scope.validationCreate = false;    
        } else if ($scope.order.requiredDate === undefined) {
                   console.log("7 newPOctrl requireDate is undefined");
                   $scope.validationError = true;
                   $scope.errorMessage = "required date is required";
                   $scope.validationCreate = false;   
        } else if ($scope.inputDate < $scope.currentDate) {
                   console.log("8.1 newPOctrl requireDate is less than current date");
                   console.log("8.2 $scope.inputDate" + $scope.inputDate);
                   console.log("8.3 $scope.currentDate" + $scope.currentDate);
                   $scope.validationError = true;
                   $scope.errorMessage = "required date can not be in past";
                   $scope.validationCreate = false;       
        } else {
                    console.log("6 newPOctrl before return to /main");
                    $location.path("/main"); 
        }
    }

    
});
