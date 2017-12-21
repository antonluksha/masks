(function () {
    var mainApp = angular.module('mainApp', []);
    mainApp.controller('mainController', function ($scope) {

        $(document).ready(function () {

            var owl = $('.owl-carousel');

            // Carousel initialization
            owl.owlCarousel({
                items: 1,
                nav: true,
                loop: true,
                navText: ['', ''],
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
            });



        });


    });
})()
