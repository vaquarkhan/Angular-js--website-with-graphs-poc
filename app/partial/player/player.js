angular.module('app').controller('PlayerCtrl',function($scope, Player){

    var playerId = "1";

    Player.get(playerId).then(function (player){
        $scope.player = player;
    });

    $scope.labels = ['A', 'B', 'C', 'D', 'E', 'F', 'I', 'G', 'H', 'I'];
    $scope.series = ['Innings', 'Not Outs', 'Runs'];
    $scope.colors = ['#cdd4dc', '#9269e1', '#5ea7ec'];
    $scope.matchTypes = ['ODI', 'T20', 'Test'];
    $scope.runsLabels = ['Sept', 'Oct', 'Nov', 'Dec', 'Feb', 'Mar', 'May', 'Jul'];

    $scope.chartOptions = {
        legend: {
            display: true,
            position: 'bottom'
        },
        animationSteps : 50
    };

    Player.getStatistics(playerId).then(function (data){
        $scope.statdata = data;
    });

    Player.getRunsData(playerId).then(function (data) {
        $scope.runsData = data;
    });

    Player.getMatchesData(playerId).then(function (data) {
        $scope.matchesData = data;
    });

    Player.getScheduleData().then(function (data) {
       $scope.scheduleData = data;
    });

});
