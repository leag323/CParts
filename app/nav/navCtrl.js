
app.controller("navCtrl", function($scope, $location) {
    $scope.isActive = function(path) {
        return $location.path().includes(path);
    }
})