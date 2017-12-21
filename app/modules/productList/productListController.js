(function () {
    var productListApp = angular.module('productListApp', []);
    productListApp.controller('productListController',function ($scope, $http) {

        $http.get('/app/data/price.json').then(function (response){ 
        $scope.priceList = response.data;
        },function(response){
        $scope.requestStatus = response.status;             
        $scope.requestStatusText = response.statusText;     
    });

         $scope.productDetails = function(id) {
        
        console.log('start');
        
        var indexProductList = Number($scope.priceList.findIndex(function(item) { 
            return item.id == id 
        }));
             
        var productView = $scope.priceList[indexProductList];
 $scope.productView;
             console.log(indexProductList);
             console.log(productView);
    }

});   
})()
