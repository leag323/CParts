app.controller("catalogCtrl", function($scope, $http, $log, $location, activeUser, items) {
     // If the user is not logged in going back to home screen
     console.log("start catalogCtrl ");
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }
            
    // Making sure that we are only loading once
    console.log("catalogCtrl items.getAll().length: " + items.getAll().length);
    if (items.getAll().length === 0) {
        $scope.items = [];                
        $http.get(activeUser.get().data).then(function mySuccess(response) {
            console.log("success open file buyer-catalog.json");                
            items.load(response.data);                           
            $scope.items = items.getAll();                                                   
        },  function myError(response) {
            console.log("error open file actors.json");
        });
    
    } else {console.log("catalogCtrl items.getAll().length !=0");
            $scope.items = items.getAll();
            console.log("catalogCtrl after items.getAll()");
            }    
    
    $scope.openItem = function (index) {        
        /*var itemIndex = $scope.items.indexOf(item); */
        /*console.log("catalogCtrl itemIndex: " + itemIndex); */
        $location.path("/item/" + index)
    }

    // Custom filter function
   
    $scope.filterModel = function(item) {
        if ($scope.query == undefined || $scope.query === "") {
          return true;
        } 
        
        var queryLowerCase = $scope.query.toLowerCase();
        var itemNo = item.itemNo.toLowerCase();        
        var itemDesc = item.itemDesc.toLowerCase();        
        var itemUom = item.itemUom.toLowerCase();      
        var itemLocation = item.itemLocation.toLowerCase();
        
        if (itemNo.includes(queryLowerCase) ||                    
            itemDesc.includes(queryLowerCase) ||                
            itemUom.includes(queryLowerCase) ||
            itemLocation.includes(queryLowerCase)) {
          return true;
        } else {
          return false;
        }
      }        
});
