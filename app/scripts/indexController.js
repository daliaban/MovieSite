/**
 * Created by dalia on 19/08/16.
 */

'use strict';

angular.module('movieSite')
    .controller('indexCtrl',function(data, $scope){
		$scope.datalist = data.getIndexData();
		$scope.carousel = data.getCarData();

    });