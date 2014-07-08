'use strict';

angular.module('root', ['pasvaz.bindonce'])
    .controller('index' , ['$scope', function($scope, courseData) {
        $http.get('data.json')
            .success(function(data) {
                $scope.courseData = courseData;
            })
            .error(function(data) {
                console.log('Error');
            });
    }]);
