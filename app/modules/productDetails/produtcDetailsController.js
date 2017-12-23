(function () {
    var productDetailsApp = angular.module('productDetailsApp', []);
    productDetailsApp.controller('productDetailsController', function ($scope, $routeParams, priceListService) {


        priceListService.getProductById($routeParams.maskId)
        .then(function (productView) {
                $scope.productView = productView;
            })
  
  
});   
})()
