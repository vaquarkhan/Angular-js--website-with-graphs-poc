angular.module('app', ['ui.bootstrap','ui.router','ngAnimate']);

angular.module('app').config(function($stateProvider) {

    $stateProvider.state('player', {
        url: '/player',
        templateUrl: 'app/partial/player/player.html'
    });
    /* Add New States Above */

});

