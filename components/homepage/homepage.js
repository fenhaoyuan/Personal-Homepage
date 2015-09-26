'use strict';

var homepage = angular.module('homepage', []);

homepage.controller('homepageCtrl', [
    function() {
        
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