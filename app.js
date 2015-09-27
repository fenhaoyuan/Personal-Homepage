'use strict';

var myApp = angular.module('myApp', [
    'ngRoute',
//    'ui.bootstrap',
    'homepage'
]);

myApp.config(function($locationProvider) {
    $locationProvider.html5Mode(true);
});