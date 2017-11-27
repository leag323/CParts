var app = angular.module("cpartsApp", ["ngRoute"]);
app.config(function($routeProvider) {
   $routeProvider
   .when("/", {
     templateUrl: "app/home/home.html"
   })   
   .when("/login", {
    templateUrl: "app/login/login.html",
    controller: "loginCtrl"
  })
   .when("/catalog", {
    templateUrl: "app/catalog/catalog.html",
    controller: "catalogCtrl"
  })
   .when("/po", {
    templateUrl: "app/po/po.html",
    controller: "poCtrl"
  })
   .otherwise({
     redirectTo: "/"
   });
});