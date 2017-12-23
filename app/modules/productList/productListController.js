(function () {
    var productListApp = angular.module('productListApp', []);
    productListApp.controller('productListController', function ($scope, priceListService) {


        priceListService.getData()
            .then(function (priceList) {
                $scope.priceList = priceList;
            })
    });
})();
