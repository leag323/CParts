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
    $scope.currentDate = new Date();    
    $scope.errorMessage = "";
    $scope.inputDate = "";
    $scope.itemIndex  = "";                
    $scope.message = "";
    $scope.selectedItemDesc = "";
    $scope.selectedItemUom = "";
    $scope.selectedItemSoh = "";    
    $scope.transaction = new Transaction({});              
    $scope.validationCreate = false; /* true show alert-success */
    $scope.validationError = false;  /* true show alert-danger*/                

    $scope.itemSelected = function() {
        $scope.selectedItemDesc = items.getByItemNo($scope.selectedItem).itemDesc;
        $scope.selectedItemUom = items.getByItemNo($scope.selectedItem).itemUom;
        $scope.selectedItemSoh = items.getByItemNo($scope.selectedItem).itemSoh;
        console.log("$scope.selectedItemSoh: " + $scope.selectedItemSoh);
        $scope.itemIndex = items.getIndexByItemNo($scope.selectedItem);                    
    }

    $scope.itemIndex = function() {
        items.getIndexByItemNo($scope.selectedItem);
        
    }

    //$scope.item = items.getById(items.getByvalue($scope.selectedItem));    

    $scope.cancel = function () {
        $location.path("/main");
    }

    $scope.create = function () {        
        $scope.inputDate = new Date($scope.transaction.transactionDate)           
        if ($scope.selectedItem === undefined){
            $scope.validationError = true;
            $scope.errorMessage = "Item Number is required";  
            $scope.validationCreate = false;                            
        } else if ($scope.transaction.transactionQty === undefined){
                   $scope.validationError = true;
                   $scope.errorMessage = "transaction quantity is required";  
                   $scope.validationCreate = false;   
        } else if ($scope.transaction.transactionQty <= 0) {
                   $scope.validationError = true;
                   $scope.errorMessage = "in issue transaction quantity must be great than 0";
                   $scope.validationCreate = false;                     
        } else if ($scope.transaction.transactionQty > $scope.selectedItemSoh) {
                   $scope.validationError = true;
                   $scope.errorMessage = "issue quantity is great than stock on hand :" + $scope.selectedItemSoh;
                   $scope.validationCreate = false;  
        } else if ($scope.transaction.transactionDate === undefined) {
                    $scope.validationError = true;
                    $scope.errorMessage = "transaction date is required";
                    $scope.validationCreate = false;  
        } else if ($scope.inputDate > $scope.currentDate) {
                   $scope.validationError = true;
                   $scope.errorMessage = "transaction date can not be in future";
                   $scope.validationCreate = false;  
        } else {
                $scope.transaction.transactionType = "Issue";
                $scope.transaction.transactionItemNo = $scope.selectedItem;
                $scope.transaction.transactionQty = $scope.transaction.transactionQty * (-1);
                transactions.add($scope.transaction);                  
                console.log("1 before update $scope:itemIndex " + $scope.itemIndex);
                console.log("2 before update $scope.selectedItemSoh " + $scope.selectedItemSoh);
                console.log("3 before update $scope.transaction.transactionQty " + $scope.transaction.transactionQty);                
                items.updateItemSoh($scope.itemIndex, ($scope.selectedItemSoh + $scope.transaction.transactionQty));
                $scope.validationCreate = true;  
                //items.update($routeParams.index, $scope.item);
                $scope.message = "issue transaction has been created"
                $scope.validationError = false;    
                $scope.errorMessage = "";
                //$location.path("/main");
        }
        
    }
});
