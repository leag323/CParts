var app = angular.module("cpartsApp", ["ngRoute"]);
app.config(function($routeProvider) {
   $routeProvider
   .when("/", {
     templateUrl: "app/home/home.html",
     controller: "homeCtrl"
   })   
   .when("/login", {
    templateUrl: "app/login/login.html",
    controller: "loginCtrl"
  })
  .when("/main", {
    templateUrl: "app/main/main.html",
    controller: "mainCtrl"
  })
   .when("/catalog", {
    templateUrl: "app/catalog/catalog.html",
    controller: "catalogCtrl"
  })
  .when("/item/:index", {
    templateUrl: "app/itemdetails/itemDetails.html",
    controller: "itemDetailsCtrl"        
 })
   .when("/po", {
    templateUrl: "app/po/po.html",
    controller: "poCtrl"
  })
   .otherwise({
     redirectTo: "/"
   });
});