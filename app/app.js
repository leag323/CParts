var app = angular.module("cpartsApp", ["ngRoute"]);
app.config(function($routeProvider ) {    
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
    templateUrl: "app/catalog/itemDetails.html",
    controller: "itemDetailsCtrl"        
  })
  .when("/newitem", {
    templateUrl: "app/catalog/newItem.html",
    controller: "newItemCtrl"        
  })
  .when("/soh", {
    templateUrl: "app/soh/soh.html",
    controller: "sohCtrl"
  })
  .when("/transactions", {
    templateUrl: "app/transactions/transactions.html",
    controller: "transactionsCtrl"
  })
  .when("/issue", {
    templateUrl: "app/issue/issue.html",
    controller: "issueCtrl"
  })
  .when("/receipt", {
    templateUrl: "app/receipt/receipt.html",
    controller: "receiptCtrl"
  })
  .when("/count", {
    templateUrl: "app/count/count.html",
    controller: "countCtrl"
  })
   .when("/po", {
    templateUrl: "app/po/po.html",
    controller: "poCtrl"
  })
  .when("/po/:index", {
    templateUrl: "app/po/poDetails.html",
    controller: "poDetailsCtrl"        
  })
  .when("/newpo", {
    templateUrl: "app/po/newPo.html",
    controller: "newPoCtrl"        
  })
   .otherwise({
     redirectTo: "/"
   });
});