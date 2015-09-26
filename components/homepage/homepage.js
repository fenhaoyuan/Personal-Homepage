'use strict';

var homepage = angular.module('homepage', []);

homepage.controller('homepageCtrl', ['$scope',
    function($scope) {
        $scope.favourites = [
            {
                title: '6park',
                href: 'http://www.6park.com'
            },
            {
                title: 'Commonwealth',
                href: 'https://www.my.commbank.com.au/netbank'
            },
            {
                title: 'Westpac',
                href: 'http://www.westpac.com.au/netbank'
            }
        ];
    }
]);

homepage.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'components/homepage/homepage.tpl.html',
            controller: 'homepageCtrl'
        });
    }
]);

homepage.directive('favourite', [
    function() {
        return {
            templateUrl: 'favourite.d.html',
            scope: {
                website: '='
            }
        };
    }
]);