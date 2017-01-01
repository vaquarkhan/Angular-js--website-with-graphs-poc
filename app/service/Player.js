angular.module('app').factory('Player',function($q) {


    function get(playerId){
        // return $http.get(API_URL + "/players/" + playerId);
        var deferred = $q.defer();
        var player = {
            _id : 1,
            firstName: 'Jonathan',
            lastName: 'Dodsworth',
            dateOfBirth: "1975-05-01T18:30:00.000+0000",
            age: 41,
            placeOfBirth: 'London, England',
            height: 1.83,
            nationality : 'England',
            position: 'Midfield - Right Midfield',
            foot: 'Right',
            agent: 'CAA Sports',
            debut: "2013-07-01T18:30:00.000+0000",
            outfitter: 'Adidas'
        };
        deferred.resolve(player);
        return deferred.promise;
    }

    function getStatistics(player){
        var deferred = $q.defer();
        var data = [
            [65, 59, 80, 81, 56, 55, 40, 56, 67, 45],
            [28, 48, 40, 19, 86, 27, 90, 56, 67, 78],
            [30, 45, 30, 34, 56, 67, 56, 34, 45, 34]
        ];
        deferred.resolve(data);
        return deferred.promise;
    }

    function getRunsData(player){
        var deferred = $q.defer();
        var data = [
            [100, 129, 23, 34, 346, 45, 23, 34]
        ];
        deferred.resolve(data);
        return deferred.promise;
    }

    function getMatchesData(player){
        var deferred = $q.defer();
        var data = [
            [2, 3, 10, 20, 2, 2, 4, 6]
        ];
        deferred.resolve(data);
        return deferred.promise;
    }

    function getScheduleData(){
        var deferred = $q.defer();
        var data = [
            {
                _id : 1,
                duration: 'Sept - Oct',
                seriesName: 'Canada Series',
                location: 'Canada',
                runs: 1132,
                runsData : [
                    [123, 234, 23, 34, 0, 34],
                    [123, 234, 23, 34, 0, 34],
                    [123, 234, 23, 34, 0, 34]
                ],
                matchDates : ['Sept 12th', 'Sept 24th', 'Oct 1st', 'Oct 3rd', 'Oct 5th', 'Oct 15th'],
                counts: ['400', '300', '432']
            },
            {
                _id : 2,
                duration: 'Jan - Feb',
                seriesName: 'Aus Series',
                location: 'Australia',
                runs: 800,
                runsData : [
                    [15, 20, 23, 34, 0, 34],
                    [34, 0, 34, 45, 0, 34],
                    [34, 23, 45, 67, 34, 34]
                ],
                matchDates : ['Jan 15th', 'Jan 24th', 'Jan 23rd', 'Feb 4th'],
                counts: ['232', '345', '223']
            }
        ];
        deferred.resolve(data);
        return deferred.promise;
    }

    var Player = {
        get: get,
        getStatistics: getStatistics,
        getScheduleData: getScheduleData,
        getRunsData: getRunsData,
        getMatchesData: getMatchesData
    };

    return Player;
});
