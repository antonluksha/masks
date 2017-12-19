(function() {
    var pageApp = angular.module("pageApp", [
        "ngRoute",
        "navigationApp",
        "mainApp",
        "aboutApp",
        "shopApp",
        "contactsApp",
        "deliveryApp"
    ]);
    
    
    pageApp.config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/app/modules/main/mainView.html",
    })
    .when("/main", {
        templateUrl : "/app/modules/main/mainView.html",
        controller : "mainController"
    })
    .when("/about", {
        templateUrl : "/app/modules/about/aboutView.html",
        controller : "aboutController"
    })
    .when("/shop", {
        templateUrl : "/app/modules/shop/shopView.html",
        controller : "shopController"
    })
    .when("/contacts", {
        templateUrl : "/app/modules/contacts/contactsView.html",
        controller : "contactsController"
    })
    .when("/delivery", {
        templateUrl : "/app/modules/delivery/deliveryView.html",
        controller : "deliveryController"
    });
    $locationProvider.html5Mode(true);
  
}]);

pageApp.controller('pageController', ['$route', '$routeParams', '$location', function($scope, $route, $routeParams, $location) {
      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams; 
}]);

})()

