/**
 * Created with IntelliJ IDEA.
 * User: Mateusz
 * Date: 17.11.12
 * Time: 15:24
 */

'use strict';

define(['app'], function (app) {

    var SecondController = function ($scope, $timeout) {
        $scope.message = message;

        var message = "I'm the 3rd controller! random: ";

        function update() {
            $scope.message = message + Math.random();
            $timeout(update, 1000);
        }

        update();
    }

    SecondController.$inject = ['$scope', '$timeout'];

    app.controller('ThirdController', SecondController);

    return SecondController;
});

