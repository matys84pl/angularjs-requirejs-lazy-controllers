/**
 * Created with IntelliJ IDEA.
 * User: Mateusz
 * Date: 15.11.12
 * Time: 22:38
 */

'use strict';

define(['app'], function (app) {

    var SecondController = function ($scope, $timeout) {
        var message = "I'm the 2nd controller! random: ";

        $scope.message = message;

        function update() {
            $scope.message = message + Math.random();
            $timeout(update, 1000);
        }

        update();
    }

    SecondController.$inject = ['$scope', '$timeout'];

    app.controller('SecondController', SecondController);

    return SecondController;
});
