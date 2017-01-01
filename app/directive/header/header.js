angular.module('app').directive('header', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {

        },
        templateUrl: 'app/directive/header/header.html',
        link: function(scope, element, attrs, fn) {


        }
    };
});
