/**
 * Created by dalia on 19/08/16.
 */
'use strict';

angular.module('movieSite', ['ui.router', 'ui.bootstrap'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/index');

        $stateProvider.state('tvshows', {
            url: '/tvshows',
            templateUrl: '../view/main-section.html',
            controller: 'mainCtrl'
        }).state('index', {
            url: '/index',
            templateUrl: '../view/index-section.html',
            controller: 'indexCtrl'
        })
});
