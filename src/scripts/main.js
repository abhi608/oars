'use strict';

angular.module('root', ['pasvaz.bindonce'])
    .controller('index' , ['$scope', '$http', function($scope, $http) {
        $http.get('./data.json')
            .success(function(data) {
                $scope.courseData = data;
            })
            .error(function() {
                console.log('Error');
            });
    }]);
