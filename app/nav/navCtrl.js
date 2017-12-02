/* navigation controller   
   we have 3 roles: buyer, storekeeper, wip 
*/

app.controller("navCtrl", function($scope, $log, $location, activeUser) {
    console.log("start navCtrl");

    $scope.isLoggedIn = function() {
        return activeUser.isLoggedIn();
    };    

    $scope.userRole = "xxx";
    if (activeUser.isLoggedIn()) {
        $scope.userRole = function() {
            return activeUser.userRole();
    }}
    
    /*
    $scope.userLoggedIn = function() {
       return activeUser.get();
       console.log("navCtrl user: " + user);
   };
   */
})