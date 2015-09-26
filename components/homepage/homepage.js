'use strict';

var homepage = angular.module('homepage', []);

homepage.controller('homepageCtrl', ['$scope',
    function($scope) {
        $scope.favourites = [
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
            controller: ['$scope', '$window',
                function($scope, $window) {
                    $scope.direct = function() {
                        $window.location.href = $scope.website.href;
                    };
                }
            ],
            scope: {
                website: '='
            }
        };
    }
]);

homepage.directive('weather', [
    function() {
        return {
            templateUrl: 'weather.d.html',
            controller: ['$scope', '$http',
                function($scope, $http) {
                    $scope.current = function() {
                        var url = 'http://api.openweathermap.org/data/2.5/weather?id=7839805&units=metric';
                        $http.get(url).then(
                            function(response) {
//                                console.log(response.data);
                                $scope.weatherCurrent = response.data;
                            }
                        );
                    };
                    
                    $scope.forecast = function() {
                        var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?id=7839805&units=metric';
                        $http.get(url).then(
                            function(response) {
                                console.log(response.data);
                                $scope.weatherForecast = response.data;                                
                            }
                        );
                    };
                    
                    $scope.current();
                    $scope.forecast();
                    
                }
            ],
            scope: {
            }
        }
    }
]);

homepage.directive('weatherDay', [
    function() {
        return {
            templateUrl: 'weather-day.d.html',
            controller: ['$scope',
                function($scope) {
                    if (angular.isDefined($scope.isForecast) && $scope.isForecast) {
                        var date = new Date($scope.day.dt*1000);
                        $scope.date = date.getDate() + '/' + (date.getMonth() + 1);
                        $scope.tempMin = $scope.day.temp.min;
                        $scope.tempMax = $scope.day.temp.max;
                    } else {
                        $scope.tempCurrent = $scope.day.main.temp;
                        $scope.tempMin = $scope.day.main.temp_min;
                        $scope.tempMax = $scope.day.main.temp_max;
                    }
                    $scope.description = $scope.day.weather[0].description;
                    $scope.icon = 'http://openweathermap.org/img/w/' + $scope.day.weather[0].icon + '.png';
                }
            ],
            scope: {
                day: '=',
                isForecast: '='
            }
        };
    }
]);