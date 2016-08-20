/**
 * Created by dalia on 19/08/16.
 */
'use strict';

angular.module('movieSite')
    .provider('data', function(){
        this.datalist = [
            {id:1, name: 'Alan Partridge Mid Morning Matters', episodes: 6, rating: '15', year: 2015, img: 'img_tv_01.png',
                descr: "The early life of Ian Flaming, the creator of James Bond, is explored, including his work with British naval intelligence."},
            {id:2, name: 'Camping', episodes: 8, rating: 'PG', year: 2010, img: 'img_tv_02.png',
                descr: "The early life of Ian Flaming, the creator of James Bond, is explored, including his work with British naval intelligence."},
            {id:3, name: 'Doll & Em', episodes: 6, rating: '15', year: 2015, img: 'img_tv_03.png',
                descr: "The early life of Ian Flaming, the creator of James Bond, is explored, including his work with British naval intelligence."},
            {id:4, name: 'Fleming', episodes: 6, rating: '15', year: 2015, img: 'img_tv_04.png',
                descr: "The early life of Ian Flaming, the creator of James Bond, is explored, including his work with British naval intelligence."},
            {id:5, name: 'Guitar Star', episodes: 6, rating: 'PG', year: 2015, img: 'img_tv_05.png',
                descr: "The early life of Ian Flaming, the creator of James Bond, is explored, including his work with British naval intelligence."},
            {id:6, name: 'Landscape Artist', episodes: 6, rating: '15', year: 2015, img: 'img_tv_06.png',
                descr: "The early life of Ian Flaming, the creator of James Bond, is explored, including his work with British naval intelligence."},
            {id:7, name: 'The Marriage Of Reason and Sqvalor', episodes: 6, rating: '15', year: 2015, img: 'img_tv_07.png',
                descr: "The early life of Ian Flaming, the creator of James Bond, is explored, including his work with British naval intelligence."},
            {id:8, name: 'The Nightmare Worlds of HG Wells', episodes: 6, rating: '15', year: 2015, img: 'img_tv_08.png',
                descr: "The early life of Ian Flaming, the creator of James Bond, is explored, including his work with British naval intelligence."},
            {id:9, name: 'The Tunnel', episodes: 4, rating: '15', year: 2015, img: 'img_tv_09.png',
                descr: "The early life of Ian Flaming, the creator of James Bond, is explored, including his work with British naval intelligence."},
            {id:10, name: 'The Southbank Show', episodes: 6, rating: '15', year: 2015, img: 'img_tv_10.png',
                descr: "The early life of Ian Flaming, the creator of James Bond, is explored, including his work with British naval intelligence."}
        ];

        this.episodes = [
            {movid:1, bannerimg: '02-img_home_tv.png', episodes: [
                {name: 'Episode1', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_01.png'},
                {name: 'Episode2', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_02.png'},
                {name: 'Episode3', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_03.png'},
                {name: 'Episode4', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_04.png'},
                {name: 'Episode5', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_05.png'},
                {name: 'Episode6', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_06.png'}
            ]}
        ];
		
		this.carousel = [
			{id:1, name: 'Inspiring Comedies', img: 'img_carroussel_1.png', descr: "Watch Frank"},
			{id:2, name: 'Amazing animation', img: 'img_carroussel_2.png', descr: "Watch this"},
			{id:3, name: 'Mother nature', img: 'img_carroussel_3.png', descr: "Watch birds"}
		]
		
		this.indexcontent = [
			{id:1, name: 'Movies', img: '01-img_home_movies.png', descr: "See all 12 movies."},
			{id:2, name: 'TV', img: '02-img_home_tv.png', descr: "See all 10 series."},
			{id:3, name: 'Documentaries', img: '03-img_home_documentaries.png', descr: "See all 12 videos"},
			{id:4, name: 'Kid Zone', img: '04-img_home_kid_zone.png', descr: "See all 12 cartoons"},
			{id:5, name: 'Magazines', img: '05-img_home_magazines.png', descr: "See all 12 magazines"},
			{id:6, name: 'Games', img: '06-img_home_games.png', descr: "See all 12 games"},
			{id:7, name: 'Interactive Map', img: '07-img_home_map.png', descr: "Check out the map"},
			{id:8, name: 'Menu', img: '08-img_home_menu.png', descr: "Discover delicious food"}
        ]

        /***option to set the data from a database, hence this is kept, as a provider so that it can be set with data from backend
		this.setData = function(data){
            this.datalist = data;
        }; **/

        this.$get = function() {
            var datalist = this.datalist;
            var episodelist = this.episodes;
			var indexcontent = this.indexcontent;
			var carousel = this.carousel;
            return {
                getData: function() {
                    return datalist;
                },
                getEpisodes: function(id){
                    return episodelist.filter(function(item){
                        //if (item.movid == id) return item.episodes; -- This should have been the condition, 
						//												but because we have only one set of data, 
						//												no need to repeat it 10 times
						if (item.movid == 1) return item.episodes;
                    })
                },
				getIndexData: function(){
					return indexcontent;
				},
				getCarData: function(){
					return carousel;
				}
            };
        }
    });