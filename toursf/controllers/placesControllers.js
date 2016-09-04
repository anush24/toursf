/**
 * Created by Anush-PC on 9/2/2016.
 */

var placesControllers = angular.module('placesControllers', []);
placesControllers.controller('PlacesCtrl', function ($scope, $http) {
    $http.get('../json/masterdb.json').success(function (data) {
        $scope.places = data;
        console.log(data);
    });
    $scope.sortField="venue_name";
    $scope.reverse=false;
    function checkCategories(category) {
        console.log(category);
    }

});