/**
 * Created with IntelliJ IDEA.
 * User: Mateusz
 * Date: 15.11.12
 * Time: 22:38
 */

'use strict';

define(['app'], function (app) {

    var FirstController = function ($scope, $timeout) {
        var message = "I'm the 1st controller! random: ";
        $scope.message = message;

        function update() {
            $scope.message = message + Math.random();
            $timeout(update, 1000);
        }

        update();
    }

    FirstController.$inject = ['$scope', '$timeout'];

    app.controller('FirstController', FirstController);

    return FirstController;
});