'use strict';

var homepage = angular.module('homepage', []);

homepage.controller('homepageCtrl', ['$scope', 'favourites', '$http', 'weatherAPI',
    function($scope, favourites, $http, weatherAPI) {
        $scope.favourites = favourites;
        
        $scope.forecast = function() {
            $http.get(weatherAPI.Melbourne).then(
                function(response) {
                    if (response.data.response.features.forecast) {
                        $scope.weatherForecast = response.data.forecast.simpleforecast.forecastday;
                    }
                }
            );
        };
        $scope.forecast();
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
            controller: ['$scope',
                function($scope) {
                }
            ],
            scope: {
                website: '='
            }
        };
    }
]);

homepage.directive('weatherDay', [
    function() {
        return {
            templateUrl: 'weather-day.d.html',
            controller: ['$scope',
                function($scope) {
                }
            ],
            scope: {
                day: '='
            }
        };
    }
]);

homepage.value('favourites', [
    {
        title: '6park',
        href: 'http://www.6park.com',
        img: 'http://www.6park.com/favicon.ico'
    },
    {
        title: 'Google',
        href: 'http://www.google.com.au',
        img: 'http://www.google.com.au/favicon.ico'
    },
    {
        title: 'Netbank',
        href: 'https://www.my.commbank.com.au/netbank',
        img: 'https://www.commbank.com.au/favicon.ico'
    },
    {
        title: 'Westpac',
        href: 'http://www.westpac.com.au/netbank',
        img: 'http://www.westpac.com.au/favicon.ico'
    },
    {
        title: 'Outlook',
        href: 'http://www.outlook.com',
        img: 'http://www.outlook.com/favicon.ico'
    },
    {
        title: 'Facebook',
        href: 'http://www.facebook.com',
        img: 'https://fbstatic-a.akamaihd.net/rsrc.php/yl/r/H3nktOa7ZMg.ico'
    },
    {
        title: 'dytt8',
        href: 'http://www.dytt8.net/',
        img: 'http://www.dytt8.net/favicon.ico'
    },
    {
        title: 'flybuys',
        href: 'https://www.flybuys.com.au',
        img: 'https://www.flybuys.com.au/opencms/opencms/flybuys-static/imgs/root/favicon.png'
    },
    {
        title: 'Maps',
        href: 'https://www.google.com.au/maps',
        img: 'https://www.google.com/images/branding/product/ico/maps_32dp.ico'
    }
]);

homepage.value('weatherAPI', {
    Melbourne: 'http://api.wunderground.com/api/4e91f18809720bd8/forecast/q/Australia/Melbourne.json'
});