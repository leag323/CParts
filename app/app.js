var app = angular.module("cpartsApp", ["ngRoute"]);
app.config(function($routeProvider) {
   $routeProvider
   .when("/", {
     templateUrl: "app/home/home.html"
   })   
   .otherwise({
     redirectTo: "/"
   });
});