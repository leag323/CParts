// Service that manges the active user
app.factory("activeUser", function(User){
    var user = null;

    /*return true (user is loging) or false (user is not login)*/
    var isLoggedIn = function() {        
        return user ? true : false;
    };

    var isBuyer = function() {
        console.log("activeUser: " + user.role);
        return (user.role === "buyer") ? true : false;
    };

    var login = function(loggedInUser) {
        user = loggedInUser;
    };

    var logout = function() {
        user = null;
    };

    var get = function() {
        return user;
    };

    return {
        isLoggedIn: isLoggedIn,
        isBuyer: isBuyer,
        login: login,
        logout: logout,
        get: get
    };   
});