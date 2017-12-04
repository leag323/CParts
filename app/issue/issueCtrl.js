app.controller("issueCtrl", function($scope, $http, $log, $location, activeUser, items, Transaction, transactions) {
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

    $scope.selectedItemDesc = "";
    $scope.selectedItemUom = "";
    $scope.selectedItemSoh = "";

    $scope.transaction = new Transaction({});                

    $scope.validationError = false;      
    $scope.errorMessage = "";

    $scope.validationCreate = false;
    $scope.message = "";
    

    $scope.itemSelected = function() {
        $scope.selectedItemDesc = items.getByItemNo($scope.selectedItem).itemDesc;
        $scope.selectedItemUom = items.getByItemNo($scope.selectedItem).itemUom;
        $scope.selectedItemSoh = items.getByItemNo($scope.selectedItem).itemSoh;
    }

    //$scope.item = items.getById(items.getByvalue($scope.selectedItem));    

    $scope.cancel = function () {
        $location.path("/main");
    }

    $scope.create = function () {        
        if ($scope.transaction.transactionQty === undefined){
            $scope.validationError = true;
            $scope.errorMessage = "Item Number is required";  
            $scope.validationCreate = false;                  
        } else if ($scope.transaction.transactionQty <= 0) {
                   $scope.validationError = true;
                   $scope.errorMessage = "in issue transaction quantity must be great than 0";
                   $scope.validationCreate = false;  
        } else if ($scope.transaction.transactionQty > $scope.selectedItemSoh) {
                   $scope.validationError = true;
                   $scope.errorMessage = "issue quantity is great than stock on hand :" + $scope.selectedItemSoh;
                   $scope.validationCreate = false;  
        } else {
                $scope.transaction.transactionType = "Issue";
                $scope.transaction.transactionItemNo = $scope.selectedItem;
                $scope.transaction.transactionQty = $scope.transaction.transactionQty * (-1);
                transactions.add($scope.transaction);                
                $scope.validationCreate = true;  
                //items.update($routeParams.index, $scope.item);
                $scope.message = "issue transaction has been created"
                $scope.validationError = false;    
                $scope.errorMessage = "";
                //$location.path("/main");
        }
        
    }
});