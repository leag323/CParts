app.controller("newItemCtrl", function($scope, $http, $log, $location, activeUser, Item, items) {
    // If the user is not logged in going back to home screen  
      if (!activeUser.isLoggedIn()) {
          $location.path("/");
          return;
      }  

    $scope.item = new Item({});

    $scope.cancel = function () {
        $location.path("/catalog");
    }

    $scope.create = function () {
        items.add($scope.item);
        $location.path("/catalog");
    }

  });
  