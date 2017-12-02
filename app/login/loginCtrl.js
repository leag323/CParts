/*input data: $scope-email, $scope-password */
app.controller("loginCtrl", function($scope, $http, $location, activeUser, User) {
    $http.get("app/data/users.json").then(function (response) {
        console.log("start loginCtrl input email: " + $scope.email + " input pwd: " + $scope.password);
        $scope.users = [];                
        for (var i = 0; i < response.data.length; i++) {
            $scope.users.push(new User(response.data[i]));
        }

        console.log("loginCtrl $scope.users: " + JSON.stringify($scope.users));
    });

    $scope.failedAttempt = false;
    
    $scope.login = function() {
        var user = getLoggedInUser();
        //console.log("*** loginCtrl after getLoggedInUser role: " + user.role);
        if (user != null) {
            activeUser.login(user);
            /*$uibModalInstance.close("Logged-in"); */
            $location.path("/main")
        } else {
            $scope.failedAttempt = true;
        }
        console.log($scope.email + " " + $scope.password)
    };

    /* searcg $scope.users find user with email+pwd equal to inpuet */
    var getLoggedInUser = function() {
        for (var i = 0; i < $scope.users.length; i++) {
            /* console.log("i: " + i + "-" + $scope.users[i].email + "-" + $scope.email + "-" + $scope.users[i].password + "-" + $scope.password); */
            if ($scope.users[i].email === $scope.email && $scope.users[i].password === $scope.password) {
                console.log("loginCtrl find user in array: " + $scope.users[i]);
                return $scope.users[i];
            }
        }
        return null;
    }

    /*
    $scope.dismiss = function () {
        $uibModalInstance.close("User dismissed");
    }
    */

  });