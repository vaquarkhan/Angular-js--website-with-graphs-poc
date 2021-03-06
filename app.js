angular.module('canadaCricket', ['ui.bootstrap', 'ui.router', 'ngAnimate', 'angularMoment', 'chart.js', 'app']);

angular.module('canadaCricket').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/player');

});

angular.module('canadaCricket').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
