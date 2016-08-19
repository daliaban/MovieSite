/**
 * Created by dalia on 19/08/16.
 */
'use strict';

angular.module('movieSite')
    .controller('mainCtrl', function($scope, data, $uibModal){
        $scope.datalist = data.getData();

        $scope.showEpisodes = function(index){
            var show = $scope.datalist[index];
            var modalInstance = $uibModal.open({
                animation:true,
                templateUrl: '../view/list-episodes.html',
                controller: 'episodeCtrl',
                resolve: {
                    item: function(){
                        return show;
                    }
                }
            });
            modalInstance.result.then(function (feedBack){
                //I intend to implement the emailing functionality with node - express.js in future version
            });

        }
    });