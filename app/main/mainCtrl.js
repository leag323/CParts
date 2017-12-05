app.controller("mainCtrl", function($scope, $http, $log, $location, activeUser, items, transactions) {        

    // If the user is not logged in going back to home screen   
    
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }          
    /*open catalog data */    
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

    /*open transactions data */
    if (transactions.getAll().length === 0) {
        $scope.transactions = [];                
        $http.get(activeUser.get().transactionsData).then(function mySuccess(response) {       
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

});
