(function () {
    var cartApp = angular.module('cartApp', []);
    cartApp.controller('cartController', function ($scope, $rootScope, priceListService, cartService) {

        $scope.cartList = cartService.readCart();
        var cartPriceSum = function () {
            var sum = 0;
            $scope.cartList.forEach(function (item) {
                sum = sum + item.number * item.price;
            });
            $scope.cartPrice = sum;
        };
        cartPriceSum();


        var numGoods = function () {
            if ($scope.cartList.length > 0) {
                $rootScope.goods = $scope.cartList.length;
            } else {
                $rootScope.goods = 0;
            };
        };
        numGoods();

        $scope.clearCart = function () {
            $scope.cartList = [];
            console.log($scope.cartList);
            cartService.clearCart();
            numGoods();
            cartPriceSum();
        };

        $scope.remove = function (id) {
            removeFromCart(id);
        };

        $scope.addToCart = function (id) {
            $scope.cartList = cartService.readCart();
            priceListService.getProductById(id)
                .then(function (cartProductToAdd) {
                    var sum = $scope.productNum;
                    var indexInCartList = findIndexById($scope.cartList, id);
                    if (indexInCartList >= 0) {
                        $scope.cartList[indexInCartList].number = $scope.cartList[indexInCartList].number + sum;
                    } else {
                        cartProductToAdd.number = sum;
                        $scope.cartList.push(cartProductToAdd);
                    };
                    cartService.pushCart($scope.cartList);
                    numGoods();
                    cartPriceSum();
                });

        };

        $scope.changeCart = function (id, sum) {
            var indexCartList = findIndexById($scope.cartList, id);
            $scope.cartList[indexCartList].number = sum;
            cartService.pushCart($scope.cartList);
            cartPriceSum();
        };

        var removeFromCart = function (id) {
            var indexCartList = findIndexById($scope.cartList, id);
            $scope.cartList.splice(indexCartList, 1);
            cartService.pushCart($scope.cartList);
            numGoods();
            cartPriceSum();
        };

        var findIndexById = function (cartList, id) {
            var indexCartList = cartList.findIndex(function (item) {
                return item.id == id;
            });
            return indexCartList;
        };

    });

})()
