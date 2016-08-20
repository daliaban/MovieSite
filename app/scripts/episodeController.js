/**
 * Created by dalia on 19/08/16.
 */

'use strict';

angular.module('movieSite')
    .controller('episodeCtrl',function(item, data, $scope,$uibModalInstance){
        $scope.down = true;
        $scope.movie = item;
        var episodes = data.getEpisodes(item.id);
		$scope.bannerimg = episodes[0].bannerimg;
	
        $scope.episodes = episodes[0].episodes;
        $scope.cancel = function(){
            $uibModalInstance.dismiss('cancel');
        };

    });