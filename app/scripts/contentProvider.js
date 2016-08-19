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
            {movid:1, episodes: [
                {name: 'Episode1', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_01.png'},
                {name: 'Episode2', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_02.png'},
                {name: 'Episode3', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_03.png'},
                {name: 'Episode4', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_04.png'},
                {name: 'Episode5', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_05.png'},
                {name: 'Episode6', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_06.png'}
            ]},
            {movid:2, episodes: [
                {name: 'Episode1', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_01.png'},
                {name: 'Episode2', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_02.png'},
                {name: 'Episode3', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_03.png'},
                {name: 'Episode4', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_04.png'},
                {name: 'Episode5', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_05.png'},
                {name: 'Episode6', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_06.png'},
                {name: 'Episode7', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_01.png'},
                {name: 'Episode8', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_02.png'}
            ]},
            {movid:3, episodes: [
                {name: 'Episode1', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_01.png'},
                {name: 'Episode2', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_02.png'},
                {name: 'Episode3', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_03.png'},
                {name: 'Episode4', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_04.png'},
                {name: 'Episode5', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_05.png'},
                {name: 'Episode6', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_06.png'}
            ]},
            {movid:4, episodes: [
                {name: 'Episode1', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_01.png'},
                {name: 'Episode2', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_02.png'},
                {name: 'Episode3', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_03.png'},
                {name: 'Episode4', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_04.png'},
                {name: 'Episode5', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_05.png'},
                {name: 'Episode6', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_06.png'}
            ]},
            {movid:5, episodes: [
                {name: 'Episode1', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_01.png'},
                {name: 'Episode2', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_02.png'},
                {name: 'Episode3', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_03.png'},
                {name: 'Episode4', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_04.png'},
                {name: 'Episode5', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_05.png'},
                {name: 'Episode6', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_06.png'}
            ]},
            {movid:6, episodes: [
                {name: 'Episode1', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_01.png'},
                {name: 'Episode2', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_02.png'},
                {name: 'Episode3', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_03.png'},
                {name: 'Episode4', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_04.png'},
                {name: 'Episode5', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_05.png'},
                {name: 'Episode6', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_06.png'}
            ]},
            {movid:7, episodes: [
                {name: 'Episode1', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_01.png'},
                {name: 'Episode2', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_02.png'},
                {name: 'Episode3', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_03.png'},
                {name: 'Episode4', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_04.png'},
                {name: 'Episode5', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_05.png'},
                {name: 'Episode6', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_06.png'}
            ]},
            {movid:8, episodes: [
                {name: 'Episode1', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_01.png'},
                {name: 'Episode2', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_02.png'},
                {name: 'Episode3', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_03.png'},
                {name: 'Episode4', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_04.png'},
                {name: 'Episode5', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_05.png'},
                {name: 'Episode6', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_06.png'}
            ]},
            {movid:9, episodes: [
                {name: 'Episode1', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_01.png'},
                {name: 'Episode2', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_02.png'},
                {name: 'Episode3', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_03.png'},
                {name: 'Episode4', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_04.png'}
            ]},
            {movid:10, episodes: [
                {name: 'Episode1', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_01.png'},
                {name: 'Episode2', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_02.png'},
                {name: 'Episode3', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_03.png'},
                {name: 'Episode4', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_04.png'},
                {name: 'Episode5', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_05.png'},
                {name: 'Episode6', descr: 'With Fleming\'s days in Naval intelligence coming to an end, he considers other ways to use his ingenuity and imagination', time: '25 min', img: 'img_episode_06.png'}
            ]}
        ];

        //option to set the data from a database, hence this is kept, img: 'img_episode_01.png'}  as a provider so that it can be set with data from backend
        //this.setData = function(data){
        //    this.datalist = data;
        //};

        this.$get = function() {
            var datalist = this.datalist;
            var episodelist = this.episodes;
            return {
                getData: function() {
                    return datalist;
                },
                getEpisodes: function(id){
                    return episodelist.filter(function(item){
                        if (item.movid == id) return item.episodes;
                    })
                }
            };
        }
    });