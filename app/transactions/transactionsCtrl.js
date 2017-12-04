app.controller("transactionsCtrl", function($scope, $http, $log, $location, activeUser, items, transactions) {
  // If the user is not logged in going back to home screen  
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }  

     // Making sure that we are only loading once     
     if (transactions.getAll().length === 0) {
         $scope.transactions = [];                
         $http.get(activeUser.get().transactionsData).then(function mySuccess(response) {
        //$http.get("/app/data/transactions.json").then(function mySuccess(response) {
             console.log("success open file transactions.json");                
             transactions.load(response.data);                           
             $scope.transactions = transactions.getAll();                                                   
         },  function myError(response) {
             console.log("error open file transactions.json");
         });
     
     } else {console.log("transactionsCtrl transactions.getAll().length !=0");
             $scope.transactions = transactions.getAll();
             console.log("transactionsCtrl after transactions.getAll()");
    }

    $scope.selectedItemDesc = "desc";
    $scope.selectedItemUom = "uom";
        
    //$scope.selectedItemDesc = items.getByItemNo($scope.transactions[index].transactionItemNo).itemDesc;
    //$scope.selectedItemUom = items.getByItemNo($scope.selectedItem).itemUom;


    // Custom filter function   
    $scope.filterModel = function(transaction) {
        if ($scope.query == undefined || $scope.query === "") {
          return true;
        } 
        
        var queryLowerCase = $scope.query.toLowerCase();
        var ItemNo = transaction.transactionItemNo.toLowerCase();        
        //var transactionType = transaction.transactionType.toLowerCase();                
        
        if (ItemNo.includes(queryLowerCase)) {
          return true;
        } else {
          return false;
        }
      }       
});
