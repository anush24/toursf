/**
 * Created by Anush-PC on 9/9/2016.
 */
var myApp = angular.module('toursfApp', []);
myApp.controller('PlacesCtrl', function ($scope, $http) {

    // $http.get('../json/masterdb.json').success(function (data) {
    //     $scope.places = data;
    //     console.log(data);
    // });
    $http.get('/masterdb').success(function(response) {
        console.log(response)
        $scope.places = response;
    });
    $scope.sortField="venue_name";
    $scope.reverse=false;

});