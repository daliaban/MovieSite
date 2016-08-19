/**
 * Created by dalia on 19/08/16.
 */
'use strict';

angular.module('movieSite')
    .directive('backImg', function(){
        return function(scope, element, attrs){
            var url = attrs.backImg;
            element.css({
                'height': '100%',
                'background-image': 'url(' + url +')',
                'background-size' : 'contain',
                'background-repeat': 'repeat-x'
            });
        };
});