var app = angular.module("cpartsApp", ["ngRoute"]);
app.config(function($routeProvider) {
   $routeProvider
   .when("/", {
     templateUrl: "app/home/home.html"
   })   
   .when("/po", {
    templateUrl: "app/po/po.html",
    controller: "poCtrl"
  })
   .otherwise({
     redirectTo: "/"
   });
});